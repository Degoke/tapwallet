import { Type, CanActivate, ExecutionContext, mixin } from '@nestjs/common';
import { Role_name } from 'src/common/types/user-role.type';
import { JwtAuthGaurd } from './jwt-auth.gaurd';

const RoleGuard = (role: Role_name): Type<CanActivate> => {
  class RoleGuardMixin extends JwtAuthGaurd {
    async canActivate(context: ExecutionContext) {
      await super.canActivate(context);

      const request = context.switchToHttp().getRequest();
      const user = request.user;

      return user?.roles.includes(role);
    }
  }

  return mixin(RoleGuardMixin);
};

export default RoleGuard;

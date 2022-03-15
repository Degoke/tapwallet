// import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common';
// import Permission from '../types/permission.type';
// import { JwtAuthGaurd } from './jwt-auth.gaurd';

// const PermissionGuard = (permission: Permission): Type<CanActivate> => {
//   class PermissionGuardMixin extends JwtAuthGaurd {
//     async canActivate(context: ExecutionContext) {
//       await super.canActivate(context);

//       const request = context.switchToHttp().getRequest();
//       const user = request.user;

//       return user?.permissions.includes(permission);
//     }
//   }

//   return mixin(PermissionGuardMixin);
// };

// export default PermissionGuard;

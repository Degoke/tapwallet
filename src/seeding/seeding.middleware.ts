import { Injectable, NestMiddleware } from '@nestjs/common';
import { Admin } from 'src/admin/entities/admin.entity';
import { ADMIN_LEVELS } from 'src/common/types/roles.type';
import { EntityManager } from 'typeorm';
import { SeedingLogEntry } from './entities/seeding.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SeedingMiddleware implements NestMiddleware {
  private isSeedingComplete: Promise<boolean>;

  constructor(private readonly entityManager: EntityManager) {}

  async use(req: any, res: any, next: () => void) {
    if (await this.isSeedingComplete) {
      return next();
    }

    this.isSeedingComplete = (async () => {
      if (
        !(await this.entityManager.findOne(SeedingLogEntry, {
          reference: 'initialSeeding',
        }))
      ) {
        await this.entityManager.transaction(
          async (transactionalEntityManager) => {
            await transactionalEntityManager.save(Admin, {
              firstName: 'Tapmoni',
              lastName: 'Admin',
              email: 'adegoke.adewoye@skyeinnovationtech.com',
              phoneNumber: '2349082290318',
              password: await bcrypt.hash('tapmoniSuperadmin_password', 10),
              level: ADMIN_LEVELS.TWO,
            });
            await transactionalEntityManager.save(
              new SeedingLogEntry('initialSeeding'),
            );
          },
        );
      }
      return true;
    })();
    next();
  }
}

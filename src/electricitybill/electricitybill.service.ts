import { Injectable } from '@nestjs/common';
import { CreateElectricitybillDto } from './dto/create-electricitybill.dto';
import { UpdateElectricitybillDto } from './dto/update-electricitybill.dto';

@Injectable()
export class ElectricitybillService {

  async buyMobileData(buyDataDto: BuyDataDto, user) {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const email = user.email;
      const variations = await this.vtpassService.getVariationCodes(
        buyDataDto.serviceID,
      );
      const amount = parseInt(
        variations['content']['varations'].find(
          (variation) =>
            variation['variation_code'] == buyDataDto.variation_code,
        ).variation_amount,
      );
      //      return amount;
      const walletResponse = await this.walletService.removeMoney(
        {
          email,
          amount,
        },
        queryRunner,
      );
      const request_id = await getRequestId();
      const payload = {
        customer: buyDataDto.phone,
        owner: user,
        ownerId: user.id,
        transactionReference: request_id,
        service: Services.VTPASS,
        amount: amount,
        serviceID:buyDataDto.serviceID,
        variation_code:buyDataDto.variation_code,
        remarks: 'AIRTIME RECHARGE',
        balance: walletResponse.data.balance,
      };

      const airtime = await queryRunner.manager.create(Mobiledatum, payload);
      await queryRunner.manager.save(airtime);

      buyDataDto['request_id'] = request_id;
      const purchaseResponse = await this.vtpassService.buyData(buyDataDto);

      if (purchaseResponse['content']['errors']) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: purchaseResponse['response_description'],
          },
          HttpStatus.BAD_REQUEST,
        );
      } else {
        if (
          purchaseResponse['content']['transactions']['status'] !== 'delivered'
        ) {
          throw new HttpException(
            {
              status: HttpStatus.BAD_REQUEST,
              error: purchaseResponse['response_description'],
            },
            HttpStatus.BAD_REQUEST,
          );
        }
      }

      await queryRunner.commitTransaction();
      //      return buyAirtimeDto;
      return {
        message: 'Data Purchase completed successfully',
      };
      return { email, amount };
    } catch (err) {
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      // you need to release a queryRunner which was manually instantiated
      await queryRunner.release();
    }
  }


  buyElectricityUnits;
  verifyBillStatus;
  getAllElectricityBills;
  getElectricityBillByOwnerId;
}

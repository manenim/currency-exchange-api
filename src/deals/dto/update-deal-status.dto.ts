/* eslint-disable prettier/prettier */
import { IsEnum } from 'class-validator';
import { DealStatus } from '../deal-status.enum';

export class UpdateDealStatusDto {
  @IsEnum(DealStatus)
  status: DealStatus;
}

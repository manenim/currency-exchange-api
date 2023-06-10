/* eslint-disable prettier/prettier */
import { DealLimit } from 'src/deal_limit/dealLimit.entity';
import { CreateDealDto } from '../../dto/create-deal.dto';
import { BadRequestException } from '@nestjs/common';

export function validateDealAmount(dto: CreateDealDto, dealLimit: DealLimit) {
  const { deal_amount } = dto;
  const { minimum_sell_amount, maximum_sell_amount } = dealLimit;

  if (deal_amount < minimum_sell_amount) {
    throw new BadRequestException(
      'Deal amount is less than the minimum sell amount',
    );
  }

  if (deal_amount > maximum_sell_amount) {
    throw new BadRequestException(
      'Deal amount is greater than the maximum sell amount',
    );
  }
}

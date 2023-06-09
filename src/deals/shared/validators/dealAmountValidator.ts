/* eslint-disable prettier/prettier */
import { DealLimit } from 'src/deal_limit/dealLimit.entity';
import { CreateDealDto } from '../../dto/create-deal.dto';
import { BadRequestException } from '@nestjs/common';

export function validateDealAmount(dto: CreateDealDto, dealLimit: DealLimit) {
  const { deal_amount } = dto;
  const { sell_minimum_amount, sell_maximum_amount } = dealLimit;

  if (deal_amount < sell_minimum_amount) {
    throw new BadRequestException(
      'Deal amount is less than the minimum sell amount',
    );
  }

  if (deal_amount > sell_maximum_amount) {
    throw new BadRequestException(
      'Deal amount is greater than the maximum sell amount',
    );
  }
}

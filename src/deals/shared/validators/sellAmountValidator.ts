/* eslint-disable prettier/prettier */
import { CreateDealDto } from 'src/deals/dto/create-deal.dto';
import { ForbiddenException } from '@nestjs/common';

export function validateSellAmount(dto: CreateDealDto) {
  const { deal_amount, deal_rate, sell_amount } = dto;

  if (sell_amount !== deal_amount * deal_rate) {
    throw new ForbiddenException('Invalid Request');
  }
}

/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class GetCurrencyFilterDto {
  @IsNotEmpty()
  sell_currency?: string;

  @IsNotEmpty()
  buy_currency?: string;
}

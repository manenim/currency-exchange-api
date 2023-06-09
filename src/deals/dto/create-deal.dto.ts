/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class CreateDealDto {
  @IsNotEmpty()
  @IsNumber()
  user_id: number;

  @IsNotEmpty()
  @IsString()
  deal_currency: string;

  @IsNotEmpty()
  @IsNumber()
  deal_rate: number;

  @IsNotEmpty()
  @IsNumber()
  deal_amount: number;

  @IsNotEmpty()
  @IsNumber()
  sell_amount: number;

  @IsNotEmpty()
  @IsNumber()
  commision: number;
}


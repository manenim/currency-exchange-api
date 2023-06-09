/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';


export class CreateTransactionDto {

  @IsNotEmpty()
  @IsNumber()
  buyers_id: number;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  deal_reference: string;

  @IsNotEmpty()
  @IsNumber()
  sell_amount: number;

  @IsNotEmpty()
  @IsNumber()
  buy_amount: number;

  @IsNotEmpty()
  @IsNumber()
  commission: number;
}

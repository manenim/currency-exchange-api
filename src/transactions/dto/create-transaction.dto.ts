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
  amount: number;

  @IsNotEmpty()
  @IsNumber()
  paid_amount: number;

  // @IsNotEmpty()
  // @IsNumber()
  // commission: number;
}

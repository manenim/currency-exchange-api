import { Body, Controller, Post, Param, Get } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}

  @Post()
  createTransaction(@Body() dto: CreateTransactionDto) {
    return this.transactionsService.createTransaction(dto);
  }

  @Get()
  getAllTransactions() {
    return this.transactionsService.getAllTransactions();
  }

  // get transaction by reference
  @Get(':reference')
  getTransactionByReference(@Param('reference') reference: string) {
    return this.transactionsService.getTransactionByReference(reference);
  }
}

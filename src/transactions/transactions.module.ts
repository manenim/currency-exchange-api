import { Module } from '@nestjs/common';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transactions } from './transactions.entity';
import { Deals } from 'src/deals/deals.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Transactions]),
    TypeOrmModule.forFeature([Deals]),
  ],
  controllers: [TransactionsController],
  providers: [TransactionsService],
})
export class TransactionsModule {}

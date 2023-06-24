import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Repository } from 'typeorm';
import { Transactions } from './transactions.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Deals } from 'src/deals/deals.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transactions)
    private transactionsRepository: Repository<Transactions>,
    @InjectRepository(Deals) private dealsRepository: Repository<Deals>,
  ) {}

  async createTransaction(dto: CreateTransactionDto): Promise<Transactions> {
    // get deals
    const deal = await this.dealsRepository.findOne({
      where: {
        deal_reference: dto.deal_reference,
      },
    });

    if (!deal) {
      throw new BadRequestException('Deal does not exist');
    }

    // check if sell amount is less than or equal to the deal amount

    const transaction = this.transactionsRepository.create(dto);
    transaction.deal = deal;
    return this.transactionsRepository.save(transaction);
  }

  //get all transactions
  async getAllTransactions(): Promise<Transactions[]> {
    return this.transactionsRepository.find();
  }

  //get transaction by id
  async getTransactionById(id: number): Promise<Transactions> {
    return this.transactionsRepository.findOne({
      where: {
        id,
      },
    });
  }

  //get transaction by reference
  async getTransactionByReference(reference: string): Promise<Transactions> {
    return this.transactionsRepository.findOne({
      where: {
        deal_transaction_reference: reference,
      },
    });
  }

  //update transaction status
  // waiting for the differnnt status to be defined
}

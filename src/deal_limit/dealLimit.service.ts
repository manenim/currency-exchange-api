import { Injectable } from '@nestjs/common';
import { DealLimit } from './dealLimit.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDealLimitDto } from './dto/create_deal_limit.dto';
import { DealCurrencyMap } from 'src/deal_currency_map/dealCurrencyMap.entity';

@Injectable()
export class DealLimitService {
  constructor(
    @InjectRepository(DealLimit)
    private dealLimitRepository: Repository<DealLimit>,
  ) {}

  createDealLimit(
    dto: CreateDealLimitDto,
    currency: DealCurrencyMap,
  ): Promise<DealLimit> {
    const dealLimit = this.dealLimitRepository.create(dto);
    dealLimit.deal_currency_map = currency;
    return this.dealLimitRepository.save(dealLimit);
  }

  async getAllDealLimits(): Promise<DealLimit[]> {
    return this.dealLimitRepository.find();
  }

  async getDealLimitById(id: number): Promise<DealLimit> {
    return this.dealLimitRepository.findOne({
      where: {
        id,
      },
    });
  }
}

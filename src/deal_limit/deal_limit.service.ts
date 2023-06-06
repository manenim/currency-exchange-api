import { Currency } from './../deal_currency_map/decorators/currency.decorator';
import { Injectable } from '@nestjs/common';
import { Deal_limit } from './deal_limit.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDealLimitDto } from './dto/create_deal_limit.dto';
import { CreateDealCurrencyMapDto } from 'src/deal_currency_map/dto/create-deal-currency.dto';
import { Deal_currency_map } from 'src/deal_currency_map/deal_currency_map.entity';

@Injectable()
export class DealLimitService {
  constructor(
    @InjectRepository(Deal_limit)
    private dealLimitRepository: Repository<Deal_limit>,
  ) {}

  createDealLimit(dto: CreateDealLimitDto, currency: Deal_currency_map) {
    const dealLimit = this.dealLimitRepository.create(dto);
    dealLimit.deal_currency_map = currency;
    return this.dealLimitRepository.save(dealLimit);
  }
}

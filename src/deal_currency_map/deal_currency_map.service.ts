import { Injectable } from '@nestjs/common';
import { CreateDealCurrencyMapDto } from './dto/create-deal-currency.dto';
import { Deal_currency_map } from './deal_currency_map.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { GetCurrencyFilterDto } from './dto/get-currency-filter.dto';

@Injectable()
export class DealCurrencyMapService {
  constructor(
    @InjectRepository(Deal_currency_map)
    private dealCurrencyMapRepository: Repository<Deal_currency_map>,
  ) {}

  createDealCurrencyMap(dto: CreateDealCurrencyMapDto) {
    const dealCurrencyMap = this.dealCurrencyMapRepository.create(dto);

    return this.dealCurrencyMapRepository.save(dealCurrencyMap);
  }

  findOneByCurrencies(filterDto: GetCurrencyFilterDto) {
    console.log('hey', filterDto);
    const currencyMap = this.dealCurrencyMapRepository.findOne({
      where: {
        sell_currency: filterDto.sell_currency,
        buy_currency: filterDto.buy_currency,
      },
    });
    return currencyMap;
  }
}

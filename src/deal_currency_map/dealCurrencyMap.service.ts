import { Injectable } from '@nestjs/common';
import { CreateDealCurrencyMapDto } from './dto/create-deal-currency.dto';
import { DealCurrencyMap } from './dealCurrencyMap.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { GetCurrencyFilterDto } from './dto/get-currency-filter.dto';

@Injectable()
export class DealCurrencyMapService {
  constructor(
    @InjectRepository(DealCurrencyMap)
    private dealCurrencyMapRepository: Repository<DealCurrencyMap>,
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

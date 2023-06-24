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

  createDealCurrencyMap(
    dto: CreateDealCurrencyMapDto,
  ): Promise<DealCurrencyMap> {
    const dealCurrencyMap = this.dealCurrencyMapRepository.create(dto);

    return this.dealCurrencyMapRepository.save(dealCurrencyMap);
  }

  findOneByCurrencies(
    filterDto: GetCurrencyFilterDto,
  ): Promise<DealCurrencyMap> {
    const currencyMap = this.dealCurrencyMapRepository.findOne({
      where: {
        sell_currency: filterDto.sell_currency,
        buy_currency: filterDto.buy_currency,
      },
    });
    return currencyMap;
  }

  async getAllDealCurrencyMap(): Promise<DealCurrencyMap[]> {
    return this.dealCurrencyMapRepository.find();
  }

  async getDealCurrencyMapById(id: number): Promise<DealCurrencyMap> {
    return this.dealCurrencyMapRepository.findOne({
      where: {
        id,
      },
    });
  }

  async updateDealCurrencyMapById(
    id: number,
    attrs: Partial<DealCurrencyMap>,
  ): Promise<DealCurrencyMap> {
    const dealCurrencyMap = await this.getDealCurrencyMapById(id);
    if (!dealCurrencyMap) {
      return null;
    }
    Object.assign(dealCurrencyMap, attrs);
    return this.dealCurrencyMapRepository.save(dealCurrencyMap);
  }
}

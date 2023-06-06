import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Deals } from './deals.entity';
import { CreatDealDto } from './dto/create-deal.dto';
import { Deal_currency_map } from 'src/deal_currency_map/deal_currency_map.entity';
import { Deal_limit } from 'src/deal_limit/deal_limit.entity';

@Injectable()
export class DealsService {
  constructor(
    @InjectRepository(Deals) private dealsRepository: Repository<Deals>,
    @InjectRepository(Deal_currency_map)
    private dealCurrencyMapRepository: Repository<Deal_currency_map>,
    @InjectRepository(Deal_limit)
    private dealLimitRepository: Repository<Deal_limit>,
  ) {}

  //get deal currency map
  // async getDealCurrencyMap() {
  //   return this.dealCurrencyMapRepository.find();
  // }

  async createDeal(dto: CreatDealDto) {
    // console.log(dto);
    // check if currency exists in sell_currency column of deal_currency_map table
    const currencyMap = await this.dealCurrencyMapRepository.findOne({
      where: {
        sell_currency: dto.deal_currency,
      },
    });
    if (!currencyMap) {
      throw new Error('Currency does not exist');
    }
    // extract the id of the currency
    const dealCurrencyMapId = currencyMap.id;
    // check in the deal_limit table if the currencymap id exists
    const dealLimit = await this.dealLimitRepository
      .createQueryBuilder('deal_limit')
      .where('deal_limit.deal_currency_map = :id', {
        id: dealCurrencyMapId,
      })
      .getOne();

    console.log(dealLimit);

    // const deal = this.dealsRepository.create(dto);

    // return this.dealsRepository.save(deal);
  }

  //
  //get all deals
  async getAllDeals() {
    return this.dealsRepository.find();
  }
}

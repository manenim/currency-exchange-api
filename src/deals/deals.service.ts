import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Deals } from './deals.entity';
import { CreateDealDto } from './dto/create-deal.dto';
import { DealCurrencyMap } from 'src/deal_currency_map/dealCurrencyMap.entity';
import { DealLimit } from 'src/deal_limit/dealLimit.entity';
import { DealStatus } from './deal-status.enum';
import { validateDealAmount } from './shared/validators/dealAmountValidator';
import { validateSellAmount } from './shared/validators/sellAmountValidator';

@Injectable()
export class DealsService {
  constructor(
    @InjectRepository(Deals) private dealsRepository: Repository<Deals>,
    @InjectRepository(DealCurrencyMap)
    private dealCurrencyMapRepository: Repository<DealCurrencyMap>,
    @InjectRepository(DealLimit)
    private dealLimitRepository: Repository<DealLimit>,
  ) {}

  async createDeal(dto: CreateDealDto) {
    // check if the currency exists in the deal_currency_map table
    const currencyMap = await this.dealCurrencyMapRepository.findOne({
      where: {
        sell_currency: dto.deal_currency,
      },
    });
    if (!currencyMap) {
      throw new Error('Currency does not exist');
    }
    const dealCurrencyMapId = currencyMap.id;

    // check in the deal_limit table if the currencymap id exists
    const dealLimit = await this.dealLimitRepository
      .createQueryBuilder('deal_limit')
      .where('deal_limit.deal_currency_map = :id', {
        id: dealCurrencyMapId,
      })
      .getOne();

    validateDealAmount(dto, dealLimit);
    validateSellAmount(dto);

    const deal = this.dealsRepository.create(dto);
    deal.status = DealStatus.A;

    return this.dealsRepository.save(deal);
  }

  async getAllDeals() {
    return this.dealsRepository.find();
  }

  async getDealById(id: number) {
    return this.dealsRepository.findOne({
      where: {
        id,
      },
    });
  }

  async updateDealStatus(id: number, status: DealStatus) {
    const deal = await this.getDealById(id);
    if (!deal) {
      throw new Error('Deal not found');
    }
    deal.status = status;
    return this.dealsRepository.save(deal);
  }

  async deleteDeal(id: number) {
    const deal = await this.getDealById(id);
    return this.dealsRepository.remove(deal);
  }
}

import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Deals } from './deals.entity';
import { CreateDealDto } from './dto/create-deal.dto';
import { DealCurrencyMap } from 'src/deal_currency_map/dealCurrencyMap.entity';
import { DealLimit } from 'src/deal_limit/dealLimit.entity';
import { DealStatus } from './deal-status.enum';
import { validateDealAmount } from './shared/validators/dealAmountValidator';

@Injectable()
export class DealsService {
  constructor(
    @InjectRepository(Deals) private dealsRepository: Repository<Deals>,
    @InjectRepository(DealCurrencyMap)
    private dealCurrencyMapRepository: Repository<DealCurrencyMap>,
    @InjectRepository(DealLimit)
    private dealLimitRepository: Repository<DealLimit>,
  ) {}

  async createDeal(dto: CreateDealDto): Promise<Deals> {
    // check if the currency exists in the deal_currency_map table
    const currencyMap = await this.dealCurrencyMapRepository.findOne({
      where: {
        sell_currency: dto.deal_currency,
      },
    });
    if (!currencyMap) {
      throw new BadRequestException('Currency does not exist');
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

    const deal = this.dealsRepository.create(dto);
    deal.status = DealStatus.A;

    return this.dealsRepository.save(deal);
  }

  async getAllDeals(): Promise<Deals[]> {
    return this.dealsRepository.find();
  }

  async getDealById(id: number): Promise<Deals> {
    return this.dealsRepository.findOne({
      where: {
        id,
      },
    });
  }

  // get deal by deal reference
  async getDealByDealReference(deal_reference: string): Promise<Deals> {
    return this.dealsRepository.findOne({
      where: {
        deal_reference,
      },
    });
  }

  async updateDealStatus(id: number, status: DealStatus): Promise<Deals> {
    const deal = await this.getDealById(id);
    if (!deal) {
      throw new Error('Deal not found');
    }
    deal.status = status;
    return this.dealsRepository.save(deal);
  }

  // async deleteDeal(id: number) {
  //   const deal = await this.getDealById(id);
  //   return this.dealsRepository.remove(deal);
  // }
}

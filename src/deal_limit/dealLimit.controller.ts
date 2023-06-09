import { Controller, Post, Body } from '@nestjs/common';
import { DealLimitService } from './dealLimit.service';
import { CreateDealLimitDto } from './dto/create_deal_limit.dto';
import { Currency } from 'src/deal_currency_map/decorators/currency.decorator';
import { DealCurrencyMap } from 'src/deal_currency_map/dealCurrencyMap.entity';

@Controller('deal-limit')
export class DealLimitController {
  constructor(private dealLimitService: DealLimitService) {}

  @Post()
  createDealLimit(
    @Body() dto: CreateDealLimitDto,
    @Currency() currency: DealCurrencyMap,
  ) {
    return this.dealLimitService.createDealLimit(dto, currency);
  }
}

import { Controller, Post, Body } from '@nestjs/common';
import { DealLimitService } from './deal_limit.service';
import { CreateDealLimitDto } from './dto/create_deal_limit.dto';
import { Currency } from 'src/deal_currency_map/decorators/currency.decorator';
import { DealCurrencyMapController } from 'src/deal_currency_map/deal_currency_map.controller';
import { CreateDealCurrencyMapDto } from 'src/deal_currency_map/dto/create-deal-currency.dto';
import { Deal_limit } from './deal_limit.entity';
import { Deal_currency_map } from 'src/deal_currency_map/deal_currency_map.entity';

@Controller('deal-limit')
export class DealLimitController {
  constructor(private dealLimitService: DealLimitService) {}

  @Post()
  createDealLimit(
    @Body() dto: CreateDealLimitDto,
    @Currency() currency: Deal_currency_map,
  ) {
    return this.dealLimitService.createDealLimit(dto, currency);
  }
}

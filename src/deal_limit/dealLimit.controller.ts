import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { DealLimitService } from './dealLimit.service';
import { CreateDealLimitDto } from './dto/create_deal_limit.dto';
import { Currency } from 'src/deal_currency_map/decorators/currency.decorator';
import { DealCurrencyMap } from 'src/deal_currency_map/dealCurrencyMap.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Deal Limit')
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

  @Get()
  getAllDealLimits() {
    return this.dealLimitService.getAllDealLimits();
  }

  @Get('/:id')
  getDealLimitById(@Param('id') id: number) {
    return this.dealLimitService.getDealLimitById(id);
  }
}

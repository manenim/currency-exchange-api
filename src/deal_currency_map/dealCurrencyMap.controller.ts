import { DealCurrencyMapService } from './dealCurrencyMap.service';
import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { CreateDealCurrencyMapDto } from './dto/create-deal-currency.dto';
import { GetCurrencyFilterDto } from './dto/get-currency-filter.dto';

@Controller('deal-currency-map')
export class DealCurrencyMapController {
  constructor(private dealCurrencyMapService: DealCurrencyMapService) {}

  @Post()
  createDealCurrencyMap(@Body() dto: CreateDealCurrencyMapDto) {
    return this.dealCurrencyMapService.createDealCurrencyMap(dto);
  }

  @Get()
  findOneByCurrencies(@Query() filterDto: GetCurrencyFilterDto) {
    // console.log(filterDto);
    return this.dealCurrencyMapService.findOneByCurrencies(filterDto);
  }
}

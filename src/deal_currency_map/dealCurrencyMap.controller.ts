import { DealCurrencyMapService } from './dealCurrencyMap.service';
import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  Patch,
  Param,
} from '@nestjs/common';
import { CreateDealCurrencyMapDto } from './dto/create-deal-currency.dto';
import { GetCurrencyFilterDto } from './dto/get-currency-filter.dto';
import { DealCurrencyMap } from './dealCurrencyMap.entity';

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

  @Get('/all')
  getAllDealCurrencyMap() {
    return this.dealCurrencyMapService.getAllDealCurrencyMap();
  }

  @Get(':id')
  getDealCurrencyMapById(@Param('id') id: number) {
    return this.dealCurrencyMapService.getDealCurrencyMapById(id);
  }

  @Patch(':id')
  updateDealCurrencyMapById(
    @Param('id') id: number,
    @Body() attrs: Partial<DealCurrencyMap>,
  ) {
    return this.dealCurrencyMapService.updateDealCurrencyMapById(id, attrs);
  }
}

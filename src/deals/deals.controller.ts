import { Controller, Post, Body, Get } from '@nestjs/common';
import { DealsService } from './deals.service';
import { CreatDealDto } from './dto/create-deal.dto';

@Controller('deals')
export class DealsController {
  constructor(private dealsService: DealsService) {}

  @Post()
  createDeal(@Body() dto: CreatDealDto) {
    return this.dealsService.createDeal(dto);
  }

  @Get()
  getAllDeals() {
    return this.dealsService.getAllDeals();
  }
}

import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Delete,
  Param,
} from '@nestjs/common';
import { DealsService } from './deals.service';
import { CreateDealDto } from './dto/create-deal.dto';
import { UpdateDealStatusDto } from './dto/update-deal-status.dto';

@Controller('deals')
export class DealsController {
  constructor(private dealsService: DealsService) {}

  @Post()
  createDeal(@Body() dto: CreateDealDto) {
    return this.dealsService.createDeal(dto);
  }

  @Get()
  getAllDeals() {
    return this.dealsService.getAllDeals();
  }

  @Get('/:id')
  getDealById(id: number) {
    return this.dealsService.getDealById(id);
  }

  @Patch('/:id')
  updateDealStatus(@Param('id') id: number, @Body() dto: UpdateDealStatusDto) {
    return this.dealsService.updateDealStatus(id, dto.status);
  }

  @Delete('/:id')
  deleteDeal(@Param('id') id: number) {
    return this.dealsService.deleteDeal(id);
  }
}

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
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Deals')
@Controller('deals')
export class DealsController {
  constructor(private dealsService: DealsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new deal' })
  @ApiResponse({ status: 200, description: 'Deal created successfully' })
  @ApiBody({ type: CreateDealDto })
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

import { Controller, Post, Body, Get, Patch, Param } from '@nestjs/common';
import { DealsService } from './deals.service';
import { CreateDealDto } from './dto/create-deal.dto';
import { UpdateDealStatusDto } from './dto/update-deal-status.dto';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Deals } from './deals.entity';

@ApiTags('Deals')
@Controller('deals')
export class DealsController {
  constructor(private dealsService: DealsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new deal' })
  @ApiResponse({ status: 201, description: 'Deal created successfully' })
  createDeal(@Body() dto: CreateDealDto): Promise<Deals> {
    return this.dealsService.createDeal(dto);
  }

  @Get()
  getAllDeals(): Promise<Deals[]> {
    return this.dealsService.getAllDeals();
  }

  @ApiOperation({ summary: 'Get a deal by id' })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'this is the id of the deal',
    required: true,
  })
  @Get('/:id')
  getDealById(id: number): Promise<Deals> {
    return this.dealsService.getDealById(id);
  }

  @Patch('/:id')
  updateDealStatus(
    @Param('id') id: number,
    @Body() dto: UpdateDealStatusDto,
  ): Promise<Deals> {
    return this.dealsService.updateDealStatus(id, dto.status);
  }
}

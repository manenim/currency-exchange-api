import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DealsController } from './deals.controller';
import { DealsService } from './deals.service';
import { Deals } from './deals.entity';
import { Deal_currency_map } from 'src/deal_currency_map/deal_currency_map.entity';
import { Deal_limit } from 'src/deal_limit/deal_limit.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Deals]),
    TypeOrmModule.forFeature([Deal_currency_map]),
    TypeOrmModule.forFeature([Deal_limit]),
  ],
  controllers: [DealsController],
  providers: [DealsService],
})
export class DealsModule {}

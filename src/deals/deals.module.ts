import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DealsController } from './deals.controller';
import { DealsService } from './deals.service';
import { Deals } from './deals.entity';
import { DealCurrencyMap } from 'src/deal_currency_map/dealCurrencyMap.entity';
import { DealLimit } from 'src/deal_limit/dealLimit.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Deals]),
    TypeOrmModule.forFeature([DealCurrencyMap]),
    TypeOrmModule.forFeature([DealLimit]),
  ],
  controllers: [DealsController],
  providers: [DealsService],
})
export class DealsModule {}

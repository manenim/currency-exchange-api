import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { DealCurrencyMapController } from './deal_currency_map.controller';
import { DealCurrencyMapService } from './deal_currency_map.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deal_currency_map } from './deal_currency_map.entity';
import { CurrencyInterceptor } from './interceptors/currency.interceptor';

@Module({
  imports: [TypeOrmModule.forFeature([Deal_currency_map])],
  controllers: [DealCurrencyMapController],
  providers: [
    DealCurrencyMapService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CurrencyInterceptor,
    },
  ],
})
export class DealCurrencyMapModule {}

import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { DealCurrencyMapController } from './dealCurrencyMap.controller';
import { DealCurrencyMapService } from './dealCurrencyMap.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DealCurrencyMap } from './dealCurrencyMap.entity';
import { CurrencyInterceptor } from './interceptors/currency.interceptor';

@Module({
  imports: [TypeOrmModule.forFeature([DealCurrencyMap])],
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

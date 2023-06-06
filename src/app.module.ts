import { Module } from '@nestjs/common';
import { DealsModule } from './deals/deals.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deals } from './deals/deals.entity';
import { DealCurrencyMapModule } from './deal_currency_map/deal_currency_map.module';
import { Deal_currency_map } from './deal_currency_map/deal_currency_map.entity';
import { DealLimitModule } from './deal_limit/deal_limit.module';
import { Deal_limit } from './deal_limit/deal_limit.entity';

@Module({
  imports: [
    DealsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'manex1234',
      database: 'deals',
      // entities: ['dist/**/*.entity{.ts,.js}'],
      entities: [Deals, Deal_currency_map, Deal_limit],
      autoLoadEntities: true,
      synchronize: true,
    }),
    DealCurrencyMapModule,
    DealLimitModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

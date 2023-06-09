import { Module } from '@nestjs/common';
import { DealsModule } from './deals/deals.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deals } from './deals/deals.entity';
import { DealCurrencyMapModule } from './deal_currency_map/dealCurrencyMap.module';
import { DealCurrencyMap } from './deal_currency_map/dealCurrencyMap.entity';
import { DealLimitModule } from './deal_limit/dealLimit.module';
import { DealLimit } from './deal_limit/dealLimit.entity';
import { TransactionsModule } from './transactions/transactions.module';
import { Transactions } from './transactions/transactions.entity';

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
      entities: [Deals, DealCurrencyMap, DealLimit, Transactions],
      autoLoadEntities: true,
      synchronize: true,
    }),
    DealCurrencyMapModule,
    DealLimitModule,
    TransactionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

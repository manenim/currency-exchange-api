import { ConfigModule, ConfigService } from '@nestjs/config';
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
import { configValidationSchema } from './config.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.STAGE}`],
      validationSchema: configValidationSchema,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        entities: [Deals, DealCurrencyMap, DealLimit, Transactions],
        autoLoadEntities: true,
        synchronize: true,
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
      }),
    }),
    DealsModule,
    DealCurrencyMapModule,
    DealLimitModule,
    TransactionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

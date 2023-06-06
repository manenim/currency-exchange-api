import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DealLimitController } from './deal_limit.controller';
import { DealLimitService } from './deal_limit.service';
import { Deal_limit } from './deal_limit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Deal_limit])],
  controllers: [DealLimitController],
  providers: [DealLimitService],
})
export class DealLimitModule {}

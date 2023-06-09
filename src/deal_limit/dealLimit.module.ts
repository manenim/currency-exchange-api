import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DealLimitController } from './dealLimit.controller';
import { DealLimitService } from './dealLimit.service';
import { DealLimit } from './dealLimit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DealLimit])],
  controllers: [DealLimitController],
  providers: [DealLimitService],
})
export class DealLimitModule {}

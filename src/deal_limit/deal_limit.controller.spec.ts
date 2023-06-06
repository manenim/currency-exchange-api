import { Test, TestingModule } from '@nestjs/testing';
import { DealLimitController } from './deal_limit.controller';

describe('DealLimitController', () => {
  let controller: DealLimitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DealLimitController],
    }).compile();

    controller = module.get<DealLimitController>(DealLimitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

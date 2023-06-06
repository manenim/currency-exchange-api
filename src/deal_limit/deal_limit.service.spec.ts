import { Test, TestingModule } from '@nestjs/testing';
import { DealLimitService } from './deal_limit.service';

describe('DealLimitService', () => {
  let service: DealLimitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DealLimitService],
    }).compile();

    service = module.get<DealLimitService>(DealLimitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

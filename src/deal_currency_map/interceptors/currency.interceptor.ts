/* eslint-disable prettier/prettier */
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { DealCurrencyMapService } from '../dealCurrencyMap.service';
import { Observable } from 'rxjs';

@Injectable()
export class CurrencyInterceptor implements NestInterceptor {
  constructor(private dealCurrencyMapService: DealCurrencyMapService) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { sell_currency, buy_currency } = request.query;
    const currencyMap = this.dealCurrencyMapService.findOneByCurrencies({
      sell_currency,
      buy_currency,
    });
    request.dealCurrencyMap = currencyMap;
    return next.handle();
  }
}

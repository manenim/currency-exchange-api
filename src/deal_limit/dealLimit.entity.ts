/* eslint-disable prettier/prettier */
import { DealCurrencyMap } from 'src/deal_currency_map/dealCurrencyMap.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DealLimit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  minimum_buy_amount: number;

  @Column()
  maximum_buy_amount: number;

  @Column()
  minimum_sell_amount: number;

  @Column()
  maximum_sell_amount: number;

  @ManyToOne(() => DealCurrencyMap, (deal_currency_map) => deal_currency_map.deal_limit)
  deal_currency_map: DealCurrencyMap;
}

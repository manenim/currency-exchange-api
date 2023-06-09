/* eslint-disable prettier/prettier */
import { DealCurrencyMap } from 'src/deal_currency_map/dealCurrencyMap.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DealLimit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  buy_minimum_amount: number;

  @Column()
  buy_maximum_amount: number;

  @Column()
  sell_minimum_amount: number;

  @Column()
  sell_maximum_amount: number;

  @ManyToOne(() => DealCurrencyMap, (deal_currency_map) => deal_currency_map.deal_limit)
  deal_currency_map: DealCurrencyMap;
}

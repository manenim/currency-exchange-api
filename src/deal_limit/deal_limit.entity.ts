/* eslint-disable prettier/prettier */
import { Deal_currency_map } from 'src/deal_currency_map/deal_currency_map.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Deal_limit {
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

  @ManyToOne(() => Deal_currency_map, (deal_currency_map) => deal_currency_map.deal_limit)
  deal_currency_map: Deal_currency_map;
}

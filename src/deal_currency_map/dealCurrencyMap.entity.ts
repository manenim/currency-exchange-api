/* eslint-disable prettier/prettier */
import { DealLimit } from 'src/deal_limit/dealLimit.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class DealCurrencyMap {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sell_currency: string;

  @Column()
  buy_currency: string;

  @OneToMany(() => DealLimit, (deal_limit) => deal_limit.deal_currency_map)
  deal_limit: DealLimit[];
}

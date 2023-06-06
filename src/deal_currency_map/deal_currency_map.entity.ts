/* eslint-disable prettier/prettier */
import { Deal_limit } from 'src/deal_limit/deal_limit.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Deal_currency_map {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sell_currency: string;

  @Column()
  buy_currency: string;

  @OneToMany(() => Deal_limit, (deal_limit) => deal_limit.deal_currency_map)
  deal_limit: Deal_limit[];
}

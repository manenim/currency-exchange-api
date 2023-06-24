/* eslint-disable prettier/prettier */

import { Deals } from 'src/deals/deals.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

// include deals_id as a foreign key

@Entity()
export class Transactions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  deal_reference: string;
    
  @Column()
  deal_transaction_reference: string;

  @Column()
  user_id: string;

  @Column()
  sell_currency: string;
    
  @Column()
  buy_currency: string;

  @Column()
  deal_rate: number;

  // @Column()
  // deal_amount: number;  // sale amount

  @Column()
  amount: number;  // amount

  @Column()
  amount_paid: number;  // amount

  // @Column()
  // commision: number; // comission

  @ManyToOne(() => Deals, (deal: Deals) => deal.transactions)
  deal: Deals;

  @CreateDateColumn({ type: 'timestamp' })
  public created_at!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updated_at!: Date;

  @CreateDateColumn({ type: 'timestamp' })
  public deleted_at!: Date;

}

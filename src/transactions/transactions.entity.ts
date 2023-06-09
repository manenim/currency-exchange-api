/* eslint-disable prettier/prettier */

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Transactions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
    deal_reference: string;
    
  @Column()
  deal_transaction_reference: string;

  @Column()
  user_id: number;

  @Column()
  sell_currency: string;
    
  @Column()
  buy_currency: string;

  @Column()
  deal_rate: number;

  @Column()
  deal_amount: number;

  @Column()
  sell_amount: number;

  @Column()
  commision: number;

  @CreateDateColumn({ type: 'timestamp' })
  public created_at!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updated_at!: Date;

  @CreateDateColumn({ type: 'timestamp' })
  public deleted_at!: Date;

}

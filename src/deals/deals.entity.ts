/* eslint-disable prettier/prettier */
import { v4 as uuid } from 'uuid';
import { BeforeInsert, OneToMany } from 'typeorm';

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { DealStatus } from './deal-status.enum';
import { Transactions } from 'src/transactions/transactions.entity';

@Entity()
export class Deals {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  deal_reference: string;
    
  @BeforeInsert()
  public createDealReference() {
    this.deal_reference = uuid();
  }
    
  @Column()
  user_id: number;

  @Column()
  deal_currency: string;

  @Column()
  deal_rate: number;

  @Column()
  deal_amount: number;

  @Column()
  commision: number;

  @Column()
  status: DealStatus;

  @OneToMany(() => Transactions, (transaction: Transactions) => transaction.deal)
  transactions: Transactions[];

  @CreateDateColumn({ type: 'timestamp' })
  public created_at!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updated_at!: Date;

  @CreateDateColumn({ type: 'timestamp' })
    public deleted_at!: Date;

}

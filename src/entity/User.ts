import { Invoice } from "./Invoice";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  BaseEntity,
} from "typeorm";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  phone: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  otp: number;

  @Column({ nullable: true })
  verifyPassword: string;

  @Column()
  active: boolean;

  @Column()
  complete: boolean;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @CreateDateColumn()
  updatedAt: Date;

  // -------------------------------- Relations --------------------------------

  @OneToMany((type) => Invoice, (invoice) => invoice.user)
  invoices: Invoice[];
}

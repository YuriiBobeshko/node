import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  login: string;

  @Column({ default: false })
  isDeleted: boolean;
}

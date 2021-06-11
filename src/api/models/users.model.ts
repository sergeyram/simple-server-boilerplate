import {Exclude} from 'class-transformer';
import {IsNotEmpty} from 'class-validator';
import {Column, Entity, PrimaryColumn} from 'typeorm';

@Entity({name: 'users'})
export class UsersModel {
  @PrimaryColumn('uuid')
  public id: string;

  @IsNotEmpty()
  @Column({name: 'first_name', length: 100, type: 'varchar'})
  public firstName: string;

  @IsNotEmpty()
  @Column({name: 'last_name', length: 100, type: 'varchar'})
  public lastName: string;

  @IsNotEmpty()
  @Column({length: 100, type: 'varchar', unique: true})
  public email: string;

  @IsNotEmpty()
  @Column({length: 60, type: 'varchar'})
  @Exclude()
  public password: string;

  @IsNotEmpty()
  @Column({length: 100, type: 'varchar', unique: true})
  public username: string;
}

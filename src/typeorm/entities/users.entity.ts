import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Profile } from './profiles.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({type: "bigint"})
  id: number;

  @Column({unique: true})
  username: string;

  @Column()
  password: string;

  @Column({nullable: true})
  authStrategy: string;

  @Column()
  createdAt: Date;

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile
}

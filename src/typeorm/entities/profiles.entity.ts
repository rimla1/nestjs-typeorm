import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:"profiles"})
export class Profile {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    first_name: string

    @Column()
    last_name: string

    @Column()
    age: number

    @Column()
    dob: string
}
import { Column, Entity, Index, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Index('users_email_unique', ['email'], { unique: true })
@Entity('users', { schema: 'public' })
export class User {
    @PrimaryGeneratedColumn('increment', { name: "id" })
    id: number;

}

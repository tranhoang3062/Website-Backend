import { Column, Entity, Index, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products', { schema: 'public' })
export class Product {
    @PrimaryGeneratedColumn('increment', { name: "id" })
    id: number;

}

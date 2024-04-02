import {
	Column,
	Entity,
	JoinColumn,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('categories', { schema: 'public' })
export class Category {
	@PrimaryGeneratedColumn('increment',{name: "id"})
	id: number;

}

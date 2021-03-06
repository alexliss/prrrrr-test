import { CardEntity } from "src/card/card.entity";
import { ColumnEntity } from "src/column/column.entity";
import { CommentEntity } from "src/comment/comment.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({unique: true})
    name: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    constructor(name: string, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    @OneToMany(type => ColumnEntity, columns => columns.user)
    columns: ColumnEntity[];

    @OneToMany(type => CardEntity, cards => cards.user)
    cards: CardEntity[];

    @OneToMany(type => CommentEntity, comments => comments.user)
    comments: CommentEntity[];

}

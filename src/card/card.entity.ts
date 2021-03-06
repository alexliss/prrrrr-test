import { ColumnEntity } from "src/column/column.entity";
import { CommentEntity } from "src/comment/comment.entity";
import { UserEntity } from "src/user/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('cards')
export class CardEntity {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    userId: number;

    @Column()
    columnId: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(type => ColumnEntity, column => column.cards, {
        onDelete: 'CASCADE'
    })
    column: ColumnEntity;

    @ManyToOne(type => UserEntity, user => user.cards, {
        onDelete: 'CASCADE'
    })
    user: UserEntity;

    @OneToMany(type => CommentEntity, comments => comments.card)
    comments: CommentEntity[];

    constructor(title: string, description: string) {
        this.title = title;
        this.description = description;
    }
    
}

import { ApiProperty } from "@nestjs/swagger";
import { CommentEntity } from "../comment.entity";

export class CommentDtoResponse {

    @ApiProperty()
    readonly id: number;
    
    @ApiProperty()
    readonly userId: number;
    
    @ApiProperty()
    readonly cardId: number;
    
    @ApiProperty()
    readonly text: string;
    
    @ApiProperty()
    readonly createdAt: Date;
    
    @ApiProperty()
    readonly updatedAt: Date;

    constructor(comment: CommentEntity) {
        this.id = comment.id;
        this.userId = comment.userId;
        this.cardId = comment.cardId;
        this.text = comment.text;
        this.createdAt = comment.createdAt;
        this.updatedAt = comment.updatedAt;
    }
}

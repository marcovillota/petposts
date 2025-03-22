import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


export enum PetPostsStatus {
    PENDING = 'pending',
    APPROVED = 'approved',
    REJECTED = 'rejected',
 
}
@Entity()
export class PetPost extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column('varchar',{
        length: 60,
        nullable: false,
    })
    petName: string;

    @Column('text',{
        nullable: false,
    })
    description: string;

    @Column('varchar',{
        length: 255,
        nullable: false,
    })
    imageURL: string;

    @Column('enum', {
        enum: PetPostsStatus,
        default: PetPostsStatus.PENDING,
        
    })
    status: PetPostsStatus;

    @Column('boolean',{
        default: true,
        nullable: false,
    })
    hasFound: boolean;

    @Column('timestamp', {
        default: () => 'CURRENT_TIMESTAMP',
        nullable: false,
    })
    create_at: Date;
}
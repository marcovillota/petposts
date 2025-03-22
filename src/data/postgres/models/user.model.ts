import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum UserRole{
    USER='user',
    ADMIN='admin'
}
@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar',{
        length: 150,
        nullable: false,
    })
    name: string;

    @Column('varchar',{
        length: 150,
        nullable: false,
        unique: true,
    })
    email: string;

    @Column('varchar',{
        length: 255,
        nullable: false,
    })
    password: string;

    @Column('enum', {
        enum: UserRole,
        default: UserRole.USER,
    })
    rol: UserRole;

    @Column('boolean', {
        default: true,
        nullable: false,
    })
    status: boolean;

    @Column('timestamp', {
        default: () => 'CURRENT_TIMESTAMP',
        nullable: false,
    })
    create_at: Date;
}
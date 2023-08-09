import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";

@Entity()

export class Trips {
    @PrimaryGeneratedColumn()
    public readonly id:number;

    @Column({type:'varchar'})
    public  date: string;

    @Column({type:'varchar'})
    public pickUp: string;

    @Column({type:"varchar"})
    public dropOf: string;

    @Column({type:"varchar"})
    public driver:string;

    @Column({type:"varchar"})
    public firstKm:string;

    @Column({type:"varchar"})
    public lastKm:string;
}


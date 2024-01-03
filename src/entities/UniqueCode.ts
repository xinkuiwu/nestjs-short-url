import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UniqueCode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 10,
    comment: "压缩码"
  })
  code: string;

  @Column({
    comment: "状态，0未使用，1已使用"
  })
  status: number;
}
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { GenreSong } from './genre_song.entity';

@Entity('genres')
export class Genre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => GenreSong, (genreSong) => genreSong.genre)
  genreSongs: GenreSong[];
}

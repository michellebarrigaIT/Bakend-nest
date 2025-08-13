import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Album } from './album.entity';
import { GenreSong } from './genre_song.entity';

@Entity('songs')
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  duration: number;

  @ManyToOne(() => Album, (album) => album.songs, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'album_id' })
  album: Album;

  @OneToMany(() => GenreSong, (genreSong) => genreSong.song)
  genreSongs: GenreSong[];
}

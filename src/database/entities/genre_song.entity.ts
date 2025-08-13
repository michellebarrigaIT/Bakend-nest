import { Entity, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { Song } from './song.entity';
import { Genre } from './genre.entity';

@Entity('genre_songs')
export class GenreSong {
  @PrimaryColumn()
  song_id: number;

  @PrimaryColumn()
  genre_id: number;

  @ManyToOne(() => Song, (song) => song.genreSongs, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'song_id' })
  song: Song;

  @ManyToOne(() => Genre, (genre) => genre.genreSongs, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'genre_id' })
  genre: Genre;
}

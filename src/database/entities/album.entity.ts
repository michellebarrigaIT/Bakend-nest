import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Artist } from './artist.entity';
import { Song } from './song.entity';

@Entity('albums')
export class Album {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  release_date: Date;

  // FK hacia Artist
  @ManyToOne(() => Artist, (artist) => artist.albums, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'artist_id' })
  artist: Artist;

  // Relación 1:N con canciones
  @OneToMany(() => Song, (song) => song.album)
  songs: Song[];
}

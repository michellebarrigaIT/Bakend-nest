import { Song } from 'src/database/entities/song.entity';
import { SongDto } from 'src/dtos/song.dto';

export function toSongDto(song: Song): SongDto {
  return new SongDto(
    song.title,
    song.duration,
    song.album?.id ?? 0,
    song.id
  );
}

export function toSongEntity(dto: Partial<SongDto>): Partial<Song> {
  const entity: Partial<Song> = {};

  if (dto.getTitle) {
    entity.title = dto.getTitle();
  }

  if (dto.getDuration) {
    entity.duration = dto.getDuration();
  }

  if (dto.getAlbumId) {
    entity.album = { id: dto.getAlbumId() } as any;
  }

  return entity;
}


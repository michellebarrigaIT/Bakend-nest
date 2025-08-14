import { Album } from "src/database/entities/album.entity";
import { AlbumDto } from "src/dtos/album.dto";


export function toAlbumDto(album: Album): AlbumDto {
  return new AlbumDto(
    album.title,
    album.release_date,
    album.artist?.id ?? 0,
    album.songs?.map(song => song.id),
    album.id
  );
}

export function toAlbumEntity(dto: Partial<AlbumDto>): Partial<Album> {
  const entity: Partial<Album> = {};

  if (dto.getTitle) {
    entity.title = dto.getTitle();
  }

  if (dto.getReleaseDate) {
    entity.release_date = dto.getReleaseDate();
  }

  if (dto.getArtistId) {
    entity.artist = { id: dto.getArtistId() } as any;
  }

  if (dto.getSongs) {
    const songs = dto.getSongs();
    if (songs) {
      entity.songs = songs.map(songId => ({ id: songId } as any));
    }
  }

  return entity;
}

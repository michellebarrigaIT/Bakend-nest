export class SongDto {
    private id?: number;
    private title: string;
    private duration: number;
    private albumId: number;

    constructor( title: string, duration: number, albumId: number, id?: number,) {
        this.id = id;
        this.title = title;
        this.duration = duration;
        this.albumId = albumId;
    }

    getAlbumId(): number {
        return this.albumId;
    }

    setAlbumId(albumId: number): void {
        this.albumId = albumId;
    }

    getTitle(): string {
        return this.title;
    }

    setTitle(title: string): void {
        this.title = title;
    }

    getDuration(): number {
        return this.duration;
    }

    setDuration(duration: number): void {
        this.duration = duration;
    }

    getId(): number | undefined {
        return this.id;
    }
}

export class AlbumDto {
    private id?: number;
    private title?: string;
    private releaseDate?: Date;
    private artistId?: number;
    private songs?: number[];

    constructor(title?: string, releaseDate?: Date, artistId?: number, songs?: number[], id?: number) {
        this.id = id;
        this.title = title;
        this.releaseDate = releaseDate;
        this.artistId = artistId;
        this.songs = songs;
    }
    getId(): number | undefined {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }
    
    getTitle(): string | undefined {
        return this.title;
    }

    setTitle(title: string): void {
        this.title = title;
    }

    getReleaseDate(): Date | undefined {
        return this.releaseDate;
    }

    setReleaseDate(releaseDate: Date): void {
        this.releaseDate = releaseDate;
    }

    getArtistId(): number | undefined {
        return this.artistId;
    }

    setArtistId(artistId: number): void {
        this.artistId = artistId;
    }

    getSongs(): number[] | undefined{
        return this.songs;
    }

    setSongs(songs: number[]): void {
        this.songs = songs;
    }
}

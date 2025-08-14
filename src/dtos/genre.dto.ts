export class GenreDto {
    id?: number;
    name: string;
    description?: string;

    constructor(name: string, description?: string, id?: number) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    getId(): number | undefined {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getDescription(): string | undefined {
        return this.description;
    }

    setDescription(description: string): void {
        this.description = description;
    }
}

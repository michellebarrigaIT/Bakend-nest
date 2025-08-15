import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, NotFoundException, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { GenreDto } from 'src/dtos/genre.dto';
import { GenreService } from 'src/services/genre/genre.service';
import { CreateGenreValidator, UpdateGenreValidator } from 'src/validators/genre.validator';

@Controller('genres')
export class GenreController {
    constructor(private readonly genreService: GenreService) {}

    @Get('/')
    async findAll() {
        const genres = await this.genreService.findAll();

        if (!genres || genres.length === 0) {
            throw new HttpException('', HttpStatus.NO_CONTENT);
        }

        return genres;
    }

    @Get(':id')
    async findOne(id: number) {
        const genre = await this.genreService.findOne(id);
        if (!genre) {
            throw new HttpException(`Genre with ID ${id} not found`, HttpStatus.NOT_FOUND);
        }
        return genre;
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() genreData: CreateGenreValidator) {
        const dto = new GenreDto(
            genreData.name,
            genreData.description ?? ''
        );
        return this.genreService.create(dto);
    }

    @Put(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() genreData: CreateGenreValidator
    ) {
        const dto = new GenreDto(
            genreData.name,
            genreData.description ?? '',
            id
        );
        return this.genreService.update(id, dto);
    }

    @Patch(':id')
    async partialUpdate(
        @Param('id', ParseIntPipe) id: number,
        @Body() genreData: UpdateGenreValidator
    ) {
        const dto = new GenreDto(
            genreData.name,
            genreData.description,
            id
        );
        return this.genreService.update(id, dto);
    }   

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        const exists = await this.genreService.findOne(id);
        if (!exists) {
            throw new NotFoundException(`Album with ID ${id} not found`);
        }
        await this.genreService.delete(id);
    }
}

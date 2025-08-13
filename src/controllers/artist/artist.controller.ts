import { Controller, Get, Post, Put, Delete, Body, Patch, NotFoundException, HttpCode, HttpStatus, Param, ParseIntPipe } from '@nestjs/common';
import { ArtistService } from '../../services/artist/artist.service';
import { Artist } from 'src/database/entities/artist.entity';
import { CreateArtistDto, UpdateArtistDto } from 'src/dtos/artist.dto';

@Controller('artists')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Get('test')
  async createTestArtist() {
    return this.artistService.createTestSong();
  }

    @Get('/getAll')
    async findAll() {
        return this.artistService.findAll();
    }

    @Get(':id')
    async findOne(
        @Param('id', ParseIntPipe) id: number, 
    ) {
        const artist = await this.artistService.findOne(id);
        if (!artist) {
            throw new NotFoundException(`Artist with ID ${id} not found`);
        }
        return artist;
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() artistData: CreateArtistDto) {
        return this.artistService.create(artistData);
    }

    @Put(':id')
    async update(
        @Param('id', ParseIntPipe) id: number, 
        @Body() artistData: CreateArtistDto
    ) {
        const updated = await this.artistService.updateAll(id, artistData);
        if (!updated) {
            throw new NotFoundException(`Artist with ID ${id} not found`);
        }
        return updated;
    }

    @Patch(':id')
    async updatePartial(
        @Param('id', ParseIntPipe) id: number, 
        @Body() artistData: UpdateArtistDto
    ) {
        const updated = await this.artistService.update(id, artistData);
        if (!updated) {
            throw new NotFoundException(`Artist with ID ${id} not found`);
        }
        return updated;
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param('id', ParseIntPipe) id: number) {
        const exists = await this.artistService.findOne(id);
        if (!exists) {
            throw new NotFoundException(`Artist with ID ${id} not found`);
        }
        await this.artistService.remove(id);
    }
}

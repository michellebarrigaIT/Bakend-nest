import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { AlbumDto } from 'src/dtos/album.dto';
import { AlbumService } from 'src/services/album/album.service';
import {
  CreateAlbumValidator,
  UpdateAlbumValidator,
} from 'src/validators/album.validator';

@Controller('albums')
export class AlbumController {
    constructor(private readonly albumService: AlbumService) {}

    @Get('/')
    async findAll() {
        const albums = await this.albumService.findAll();

        if (!albums || albums.length === 0) {
            throw new HttpException('', HttpStatus.NO_CONTENT);
        }

        return albums;
    }


    @Get(':id')
    async findOne(id: number) {
        const album = await this.albumService.findOne(id);
        if (!album) {
            throw new NotFoundException(`Album with ID ${id} not found`);
        }
        return album;
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() albumData: CreateAlbumValidator) {
        const dto = new AlbumDto(
            albumData.title,
            albumData.releaseDate,
            albumData.artistId ?? 0
        );
        return this.albumService.create(dto);
    }

    @Put(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() albumData: CreateAlbumValidator
    ) {
        const dto = new AlbumDto(
            albumData.title,
            albumData.releaseDate,
            albumData.artistId ?? 0
        );
        return this.albumService.update(id, dto);
    }

    @Patch(':id')
    async partialUpdate(
        @Param('id', ParseIntPipe) id: number,
        @Body() albumData: UpdateAlbumValidator
    ) {
        const dto = new AlbumDto(
            albumData.title,
            albumData.releaseDate,
            albumData.artistId,
            albumData.songs
        );
        return this.albumService.update(id, dto);
    }   

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        const exists = await this.albumService.findOne(id);
        if (!exists) {
            throw new NotFoundException(`Album with ID ${id} not found`);
        }
        await this.albumService.delete(id);
    }
}

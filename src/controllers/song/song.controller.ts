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
import { SongService } from 'src/services/song/song.service';
import {
  CreateSongValidator,
  UpdateSongValidator,
} from 'src/validators/song.validator';
import { SongDto } from 'src/dtos/song.dto';

@Controller('songs')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Get('/')
  async findAll() {
    const songs = await this.songService.findAll();
    
    if (!songs || songs.length === 0) {
      throw new HttpException('', HttpStatus.NO_CONTENT);
    }
    
    return songs;
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const song = await this.songService.findOne(id);
    if (!song) {
      throw new NotFoundException(`Song with ID ${id} not found`);
    }
    return song;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() songData: CreateSongValidator) {
    const dto = new SongDto(
      songData.title,
      songData.duration,
      songData.albumId
    );
    return this.songService.create(dto);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() songData: CreateSongValidator
  ) {
    const dto = new SongDto(
      songData.title,
      songData.duration,
      songData.albumId
    );
    const updated = await this.songService.updateAll(id, dto);
    if (!updated) {
      throw new NotFoundException(`Song with ID ${id} not found`);
    }
    return updated;
  }

  @Patch(':id')
  async updatePartial(
    @Param('id', ParseIntPipe) id: number,
    @Body() songData: UpdateSongValidator
  ) {
    const dto = new SongDto(
      songData.title,
      songData.duration,
      songData.albumId 
    );
    const updated = await this.songService.update(id, dto);
    if (!updated) {
      throw new NotFoundException(`Song with ID ${id} not found`);
    }
    return updated;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number) {
    const exists = await this.songService.findOne(id);
    if (!exists) {
      throw new NotFoundException(`Song with ID ${id} not found`);
    }
    await this.songService.delete(id);
  }
}

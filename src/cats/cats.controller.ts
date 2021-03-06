import { Controller, Get, Query, Post, Body, Put, Param, Delete, ForbiddenException, ParseUUIDPipe } from '@nestjs/common';
import { ValidationPipe } from 'src/common/pipes/validation.pipe';
import { CatsService } from './cats.service';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {

    constructor(private catsService: CatsService) { }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(@Query() query: ListAllEntities): Promise<Cat[]> {
        throw new ForbiddenException()
    }

    @Get(':id')
    findOne(@Param('id', new ParseUUIDPipe()) id: string) {
        return `This action returns a #${id} cat`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return `This action updates a #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }
}

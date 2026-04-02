import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto.js';
import { UpdateCatDto } from './dto/update-cat.dto.js';
import { CreateCatDto_Zod } from 'src/_zod/schemas.js';

@Injectable()
export class CatService {
  create(createCatDto: CreateCatDto_Zod) {
    return `This action adds a new cat,\n\n${JSON.stringify(createCatDto, null, 4)} \n\ncreated`;
  }

  findAll() {
    return `This action returns all cat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}

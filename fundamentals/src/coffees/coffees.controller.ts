import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
	constructor(private readonly coffeesService: CoffeesService) {}
	@Get()
	getAll(@Query() paginationQuery) {
		//const { limit, offset } = paginationQuery;
		return this.coffeesService.getAll();
	}

	@Get(':id')
	getOne(@Param('id') id: string) {
		return this.coffeesService.getOne(id);
	}

	@Post()
	create(@Body() createCoffeeDto: CreateCoffeeDto) {
		return this.coffeesService.create(createCoffeeDto);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
		return this.coffeesService.update(id, updateCoffeeDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.coffeesService.delete(id);
	}
}

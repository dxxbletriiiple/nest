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
import { Coffee } from './enteties/coffee.entity';

@Controller('coffees')
export class CoffeesController {
	constructor(private readonly coffeesService: CoffeesService) {}
	@Get()
	getAll(@Query() paginationQuery): Coffee[] {
		//const { limit, offset } = paginationQuery;
		return this.coffeesService.getAll();
	}

	@Get(':id')
	getOne(@Param('id') id: string) {
		return this.coffeesService.getOne(id);
	}

	@Post()
	create(@Body() body) {
		return this.coffeesService.create(body);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() body) {
		return this.coffeesService.update(id, body);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.coffeesService.delete(id);
	}
}

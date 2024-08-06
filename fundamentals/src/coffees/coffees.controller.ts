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

@Controller('coffees')
export class CoffeesController {
	@Get()
	getAll(@Query() paginationQuery): string {
		const { limit, offset } = paginationQuery;
		return `This action return all coffees. Limit: ${limit}, offset: ${offset}`;
	}

	@Get(':id')
	getOne(@Param('id') id: string) {
		return `Coffee # ${id}`;
	}

	@Post()
	create(@Body('name') body) {
		return body;
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() body) {
		return `This action updates #${id} coffee`;
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return `This action removes #${id} coffee`;
	}
}

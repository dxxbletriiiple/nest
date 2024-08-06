import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './enteties/coffee.entity';

@Injectable()
export class CoffeesService {
	private coffees: Coffee[] | CreateCoffeeDto[] = [
		{
			id: 1,
			name: 'Shipwreck Roast',
			brand: 'Buddy Brew',
			flavors: ['chocolate', 'vanilla'],
		},
	];

	getAll() {
		return this.coffees;
	}

	getOne(idd: string) {
		const coffee = this.coffees.find(({ id }) => id === +idd);
		if (!coffee) {
			throw new NotFoundException(`Coffee #${idd} not found`);
		}
	}

	create(createCoffeeDto: CreateCoffeeDto) {
		this.coffees.push(createCoffeeDto);
	}

	update(iid: string, body: UpdateCoffeeDto) {
		this.coffees.forEach((item) => {
			if (item.id === +iid) {
				item = { ...item, ...body };
			}
		});
		console.log(this.coffees);
	}

	delete(iid: string) {
		this.coffees = this.coffees.filter(({ id }) => id !== +iid);
	}
}

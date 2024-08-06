import { Injectable } from '@nestjs/common';
import { Coffee } from './enteties/coffee.entity';

@Injectable()
export class CoffeesService {
	private coffees: Coffee[] = [
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

	getOne(id: string) {
		return this.coffees.find((item) => item.id === +id);
	}

	create(createCoffeeDto: Coffee) {
		this.coffees.push(createCoffeeDto);
	}

	update(id: string, body: Coffee) {
		this.coffees.forEach((item) => {
			if (item.id === +id) {
				item = { ...item, ...body };
			}
		});
		console.log(this.coffees);
	}

	delete(id: string) {
		this.coffees = this.coffees.filter((item) => item.id !== +id);
	}
}

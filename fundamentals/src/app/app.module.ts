import { Module } from '@nestjs/common';
import { CoffeesController } from '../coffees/coffees.controller';
import { CoffeesService } from '../coffees/coffees.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [],
	controllers: [AppController, CoffeesController],
	providers: [AppService, CoffeesService],
})
export class AppModule {}

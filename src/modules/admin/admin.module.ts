import { Module } from '@nestjs/common';
import { ProductsController } from './products/products.controller';
import { CategoriesController } from './categories/categories.controller';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  controllers: [ProductsController, CategoriesController, UsersController],
  imports: [UsersModule, ProductsModule, CategoriesModule]
})
export class AdminModule {}

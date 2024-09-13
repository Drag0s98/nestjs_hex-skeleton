import { Module } from '@nestjs/common';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';
import { ExampleRepository } from '../domain/example.repository';

@Module({
  imports: [],
  controllers: [ExampleController],
  providers: [ExampleService, ExampleRepository],
  exports: [],
})
export class ExampleModule {}

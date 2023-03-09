import { CliModule } from './cli/cli.module';
import { CommandFactory } from 'nest-commander';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  await CommandFactory.run(CliModule, new Logger());
}

bootstrap();

import { Module } from '@nestjs/common';
import { SomeModule } from '../some-module/some.module';
import { DoSomethingCommand } from './command/do-something.command';

@Module({
  imports: [SomeModule],
  providers: [...DoSomethingCommand.registerWithSubCommands()],
})
export class CliModule {}

import { Logger, Module } from '@nestjs/common';
import { SomeProvider } from './provider/some.provider';
import { DoSomethingMoreAccurateSubCommand } from './subcommand/do-something-more-accurate-sub.command';

@Module({
  providers: [
    Logger,
    {
      provide: SomeProvider,
      inject: [Logger],
      useFactory: (logger: Logger) => new SomeProvider(logger),
    },
    {
      provide: DoSomethingMoreAccurateSubCommand,
      inject: [SomeProvider],
      useFactory: (someProvider: SomeProvider) =>
        new DoSomethingMoreAccurateSubCommand(someProvider),
    },
  ],
  exports: [DoSomethingMoreAccurateSubCommand],
})
export class SomeModule {}

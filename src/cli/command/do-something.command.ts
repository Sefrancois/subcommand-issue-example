import { Command, CommandRunner } from 'nest-commander';
import { DoSomethingMoreAccurateSubCommand } from '../../some-module/subcommand/do-something-more-accurate-sub.command';

@Command({
  name: 'do-something',
  subCommands: [DoSomethingMoreAccurateSubCommand],
})
export class DoSomethingCommand extends CommandRunner {
  public async run(): Promise<void> {
    return Promise.resolve();
  }
}

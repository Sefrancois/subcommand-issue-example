import { CommandRunner, SubCommand } from 'nest-commander';
import { SomeProvider } from '../provider/some.provider';

@SubCommand({
  name: 'more-accurate',
})
export class DoSomethingMoreAccurateSubCommand extends CommandRunner {
  constructor(private readonly someProvider: SomeProvider) {
    super();
  }

  public async run(): Promise<void> {
    this.someProvider.doSomething('more accurate');
    return Promise.resolve();
  }
}

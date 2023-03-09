import { Logger } from '@nestjs/common';

export class SomeProvider {
  constructor(private readonly logger: Logger) {}

  public doSomething(moreAccurate: string): void {
    this.logger.log(`Do something ${moreAccurate}`);
  }
}

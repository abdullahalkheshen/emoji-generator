import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getrRandomEmoji(): string {
    // return a random emoji
    return this.getRandomEmoji();
  }

  getRandomEmoji(): string {
    return ['🚀', '🌈', '🦄', '🔥', '🎉'][Math.floor(Math.random() * 5)];
  }
}

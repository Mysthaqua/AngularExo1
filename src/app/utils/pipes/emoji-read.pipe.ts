import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emojiRead',
  standalone: true,
})
export class EmojiReadPipe implements PipeTransform {
  transform(isRead: boolean): string {
    return isRead ? '👍🏻' : '👎🏻';
  }
}

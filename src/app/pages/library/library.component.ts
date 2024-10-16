import { Component } from '@angular/core';
import book from '../../utils/types/book.type.js';
import { EmojiReadPipe } from '../../utils/pipes/emoji-read.pipe.js';
import { CapitalizeFirstLetterPipe } from '../../utils/pipes/capitalize-first-letter.pipe.js';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [EmojiReadPipe, CapitalizeFirstLetterPipe],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css',
})
export class LibraryComponent {
  books: book[] = [
    {
      title: 'Livre 1',
      author: 'Author 1',
      isRead: false,
    },
    {
      title: 'Livre 2',
      author: 'Author 2',
      isRead: false,
    },
    {
      title: 'Livre 3',
      author: 'Author 3',
      isRead: false,
    },
  ];

  toggleReadStatus(book: book) {
    book.isRead = !book.isRead;
  }
}

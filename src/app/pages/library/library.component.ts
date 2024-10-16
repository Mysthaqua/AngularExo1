import { Component } from '@angular/core';
import book from '../../utils/types/book.type.js';
import { EmojiReadPipe } from '../../utils/pipes/emoji-read.pipe.js';
import { CapitalizeFirstLetterPipe } from '../../utils/pipes/capitalize-first-letter.pipe.js';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [EmojiReadPipe, CapitalizeFirstLetterPipe, FormsModule],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css',
})
export class LibraryComponent {
  books: book[] = [
    {
      title: 'Book 1',
      author: 'Author 1',
      isRead: false,
    },
    {
      title: 'Book 2',
      author: 'Author 2',
      isRead: false,
    },
    {
      title: 'Book 3',
      author: 'Author 3',
      isRead: false,
    },
  ];

  book: book = {
    title: '',
    author: '',
    isRead: false,
  };

  toggleReadStatus(book: book): void {
    book.isRead = !book.isRead;
  }

  addBook(): void {
    this.books.push({
      title: this.book.title,
      author: this.book.author,
      isRead: false,
    });
    this.book.title = '';
    this.book.author = '';
  }
}

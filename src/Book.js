import { Author } from './Author.js';
import { User } from './User.js';

export function Book(title, year, publicationBy, authors) {
    this.title = title;
    this.year = year;
    this.publicationBy = publicationBy;
    this.authors = authors;
    this.likedUsers = [];
    publicationBy.myBooks.push(this);
    authors.forEach(author => author.books.push(this))  
    
    Object.defineProperty(this, 'suggestedBooks', {
        get() {
          let namesBook = [... new Set (
              this.authors
                  .map(author => author.books)
                  .flat().map(book => book.title)
          )];
          let i = 0;
          while(namesBook[i] !== undefined) {
            if(namesBook[i] === this.title){
                namesBook.splice(i, 1);
              continue;
            }
            i++;
          }
          return namesBook.join(", ");
        },
      });
      Object.defineProperty(this, 'suggestedPublicators', {
        get() {
          let publicators = [... new Set(this.authors
              .map(author => author.books)
              .flat().map(book => book.publicationBy.name)
          )];
          let i = 0;
          while(publicators[i] !== undefined) {
            if(publicators[i] === this.publicationBy.name){
                publicators.splice(i, 1);
              continue;
            }
            i++;
          }
          return publicators.join(", ");
        },
    });
}

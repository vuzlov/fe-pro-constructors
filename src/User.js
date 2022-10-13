import { Book } from './Book.js';

/**
 * @param {string} name
 * @param {Date} date
 * @constructor
 * @property {string} name
 * @property {Date} date
 * @property {Book[]} myBooks
 * @property {User[]} friends
 * @property {Book[]} likes
 */
export function User(name, date) {
    this.name = name;
    this.date = date;
    this.myBooks = [];
    this.friends = [];
    this.likes = [];
    this.addToFriends = function (user) {
      if (!this.friends.includes(user)) {
        this.friends.push(user);
        user.friends.push(this);
        return;
      }
        this.friends = this.friends.filter((friend) => friend !== user);
        user.friends = user.friends.filter((friend) => friend !== this);
    }
    this.likeBook = function (book) {
      if (!this.likes.includes(book) && !book.likedUsers.includes(this)) {
        this.likes.push(book);
        book.likedUsers.push(this);
        return;
      }
        this.likes = this.likes.filter((book) => book !== book);
        book.likedUsers = book.likedUsers.filter((user) => user !== user);
    }
    this.removeFriend = this.addToFriends
    this.unlikeBook = this.likeBook
    Object.defineProperty(this, 'friendsNames', {
      get() {
        return this.friends
          .map(({ name }) => {
            return `${name}`;
          })
          .join(', ');
      }
    });
    Object.defineProperty(this, 'likedBooks', {
      get() {
        return this.likes
          .map(({ title }) => {
            return `${title}`;
          })
          .join(', ');
      }
    });
    Object.defineProperty(this, 'publishedBooks', {
      get() {
        return this.myBooks
          .map(({ title }) => {
            return `${title}`;
          })
          .join(', ');
      }
    });
}


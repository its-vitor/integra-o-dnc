import { IBook } from "./books";

export class BookBuilder {
    private book: IBook;

    constructor() {
        this.book = {
            id: '',
            name: '',
            publisher: '',
            pages: 0,
            isbn: ''
        };
    }

    setId(id: string): BookBuilder {
        this.book.id = id;
        return this;
    }

    setName(name: string): BookBuilder {
        this.book.name = name;
        return this;
    }

    setPublisher(publisher: string): BookBuilder {
        this.book.publisher = publisher;
        return this;
    }

    setPages(pages: number): BookBuilder {
        this.book.pages = pages;
        return this;
    }

    setIsbn(isbn: string): BookBuilder {
        this.book.isbn = isbn;
        return this;
    }

    build(): IBook {
        return this.book;
    }
}

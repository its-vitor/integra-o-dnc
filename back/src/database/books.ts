import { v4 } from "uuid";
import { BookBuilder } from "./bookBuilder";


export interface IBook {
    id: string;
    name: string;
    publisher: string;
    pages: number;
    isbn: string;
}

interface IBookMethods {
    getBook(id: string): Promise<IBook | undefined>;
    getBooks(): Promise<IBook[]>;
    push(Book: BookBuilder): Promise<boolean>;
    update(id: string, builder: BookBuilder): Promise<boolean>;
    delete(id: string): Promise<boolean>;
}

export class MyBook {    
    methods: IBookMethods;

    constructor() {
        this.methods = {
            async getBook(id: string) {
                return Books.find(book => book.id === id);
            },
            async getBooks() {
                return Books;
            },
            async push(builder: BookBuilder): Promise<boolean> {
                let book = builder.build();

                const existingBook = Books.find(b => b.id === book.id);
            
                if (!existingBook) {
                    Books.push(book);
                    return true;
                } else {
                    return false;
                }
            },
            async update(id: string, builder: BookBuilder): Promise<boolean> {
                let book = builder.build();

                const index = Books.findIndex(b => b.id === id);
            
                if (index !== -1) {
                    Books[index] = book;
                    return true;
                } else {
                    return false;
                }
            },
            async delete(id: string): Promise<boolean> {
                const index = Books.findIndex(b => b.id === id);
                try{
                    Books.splice(index, 1);
                } catch {
                    return false;
                }
                return true;
            }
        }
    }
}

const Books = new Array<IBook>();
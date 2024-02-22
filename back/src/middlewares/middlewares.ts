import { Request, Response } from "express";
import { BookBuilder } from "../database/bookBuilder";
import { MyBook } from "../database/books";
import * as errors from '../utilities/errors'

export async function registerBook(req: Request, res: Response) {
    const { id, name, pages, isbn, publisher } = req.body;

    const book = new BookBuilder()
        .setName(name)
        .setPages(pages)
        .setPublisher(publisher)
        .setId(id)
        .setIsbn(isbn)

    const myBook = new MyBook().methods;
    const newBook = await myBook.push(book);

    if (newBook) {
        res.send({ message: "Livro cadastrado com sucesso!" });
    } else {
        throw new errors.BookAlreadyRegistered();
    }
}

export async function updateBook(req: Request, res: Response) {
    const { id, name, pages, isbn, publisher } = req.body;

    const book = new BookBuilder()
        .setName(name)
        .setPages(pages)
        .setPublisher(publisher)
        .setId(id)
        .setIsbn(isbn)

    const myBook = new MyBook().methods;
    const newBook = await myBook.update(id, book);

    if (newBook) {
        return res.send({ message: "Livro atualizado com sucesso!" });
    } else {
        throw new errors.BookNotFound();
    }
}

export async function getBooks(req: Request, res: Response) {
    const myBook = new MyBook().methods;
    return res.send(await myBook.getBooks());
}

export async function getBook(req: Request, res: Response) {
    const myBook = new MyBook().methods;
    return res.send({ book: await myBook.getBook(req.params.id)});
}

export async function deleteBook(req: Request, res: Response) {
    const myBook = new MyBook().methods;
    
    const bookDeleted = await myBook.delete(req.params.id)
    if (bookDeleted) {
        return res.send({ message: "Livro apagado com sucesso." });
    } else {
        throw new errors.BookNotFound();
    }
}
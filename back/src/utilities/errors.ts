class CustomErrors extends Error {
    public statusCode: number;
    constructor(message: string, statusCode: number) {
        super(message)
        this.statusCode = statusCode;
    }
}

class BookAlreadyRegistered extends CustomErrors {
    constructor() {
        super("Este livro já está registrado.", 400);
    }
}

class BookNotFound extends CustomErrors {
    constructor() {
        super("Livro não foi encontrado.", 400);
    }
}


export {
    CustomErrors,
    BookAlreadyRegistered,
    BookNotFound,
}
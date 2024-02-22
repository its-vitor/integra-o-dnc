import { Router } from "express";
import { RequestHandler, NextFunction, Request, Response } from "express";
import * as routes from './middlewares/middlewares'

/** 
 * `Router` é responsável por encapsular todas as rotas da aplicação e
 * exportá-la para "app.ts" em "src"
*/
const router = Router();

export function resolver(handlerFn: RequestHandler) {
    return (req: Request, res: Response, next: NextFunction) => {
        return Promise.resolve(handlerFn(req, res, next))
            .catch(e => next(e))
    }
}

router.post('/livros', resolver(routes.registerBook));
router.get('/livros', resolver(routes.getBooks));
router.get('/livros/:id', resolver(routes.getBook));
router.put('/livros/:id', resolver(routes.updateBook));
router.delete('/livros/:id', resolver(routes.deleteBook));

export default router;
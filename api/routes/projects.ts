import express, { Request, Response, Router } from 'express';

const router : Router = express.Router();

router.route("/:project")
    .get((req : Request, res : Response) => {
        
    });

export default router;
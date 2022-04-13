import {Express, Request, Response} from 'express';

function openRoutes(app:Express){ 
    app.get('/open', (req:Request, res:Response) => {
        console.log("Openroutes à renvoyé le status 200 !")
        res.sendStatus(200); 
    })
}

export default openRoutes;
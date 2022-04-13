import {Express, Request, Response} from 'express';

function restrictedRoutes(app:Express){ 
    app.get('/restricted', (req:Request, res:Response) => {
        console.log("Openroutes à renvoyé le status 200 !")
        res.sendStatus(200); 
    })
}

export default restrictedRoutes;
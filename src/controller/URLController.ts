import config from "../config/Constants";
import { Request, response, Response } from "express";
import shortId from 'shortid';

export class URLController {
    public async shorten(req: Request, res: Response): Promise<void> {
       const { originURL }  = req.body;
       const hash = shortId.generate();
       const shortURL = `${config.API_URL}/${hash}}`;
       res.json({ originURL, hash, shortURL });
    }

    public async redirect (req: Request, res: Response): Promise<void> {
        const { hash } = req.params;
        const url = {
            originURL: "https://www.linkedin.com/in/danilo-sousa-a561a43a/",
            hash: "vWhZ_s0X2",
            shortURL: "http://localhost:5000/vWhZ_s0X2}"
        }
        res.redirect(url.originURL);
     }
}
import { createCur, retrieveCurs } from "./curiosity.model.js";
export const curCtrl = async(req,res)=> {
    try{
        const curs = {
            ...req.body
        }
        await createCur(curs)
        res.status(201).json(curs)
    }catch(err){
        console.error('error:', err)
    }
}

export const cursCtrl  = async(req, res) => {
    // este controlador debe consultar los productos
    const Curs = await retrieveCurs();
    res.json(Curs);
};
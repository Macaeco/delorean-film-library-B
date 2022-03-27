import { createList, retrieveLists } from "./lists.model.js";
export const listCtrl = async(req,res)=> {
    try{
        const lists = {
            ...req.body
        }
        await createList(lists)
        res.status(201).json(lists)
    }catch(err){
        console.error('error:', err)
    }
}

export const listsCtrl  = async(req, res) => {
    // este controlador debe consultar los productos
    const Lists = await retrieveLists();
    res.json(Lists);
};
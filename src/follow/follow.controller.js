import { createFList,retrieveFList } from "./follow.model.js";

export const FListCtrl = async(req,res)=> { //para el post
    try{
        const flists = {
            ...req.body,
            email:req.email
        }
        await createFList(flists)
        res.status(201).json(flists)
    
    }catch(err){
        console.error('error:', err)
    }
}



export const FListSCtrl  = async(req, res) => { // para el get
    
    const flists = await retrieveFList();
    res.json(flists);
};
import { retrieveUserInfoByEmail, patchUserEmail,patchUserList } from './users.model.js';
import {deleteUserInfoByEmail} from './users.model.js';

export const getUserInfo = async (req, res) => {
    // llamo al usuario
    try {
        const user = await retrieveUserInfoByEmail(req.email);
        res.json(user); // deveulvo la info del usuario
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}


export const deleteUserInfo = async (req, res) => {
    // llamo al usuario
    try {
        const user = await deleteUserInfoByEmail(req.email);
        res.json(user); // deveulvo la info del usuario
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}
export const updateListCtrl = async(req,res) => {
    const {id} = req.params
    const listNew = {
        idList:req.body.idList,
    }
    console.log(listNew)
    // console.log(req.body)
    console.log(req.body.idList)
    
    const updatedList = await patchUserList(id,listNew)
    res.json(updatedList)
}
export const updateEmailCtrl = async(req,res) => {
    const {id} = req.params
    const userNew = {
        userName:req.body.userName,
    }
    const updatedEmail = await patchUserEmail(id,userNew)
    res.json(updatedEmail)
}
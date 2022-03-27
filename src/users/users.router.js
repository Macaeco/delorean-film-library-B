import express from 'express';
import { getUserInfo, deleteUserInfo, updateEmailCtrl,updateListCtrl } from './users.controller.js';

const router = express.Router();

router.route('/')
    .get(getUserInfo)
    .delete(deleteUserInfo)

router.route('/lists/:id')
    .patch(updateListCtrl)

router.route('/:id')
    .patch(updateEmailCtrl)
export default router;





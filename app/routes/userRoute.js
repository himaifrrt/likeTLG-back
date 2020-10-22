import express from 'express';
import {
  createUser, siginUser, searchFirstnameOrLastname, searchEmail, getAllUsers
} from '../controllers/usersController';

const router = express.Router();

// users Routes

router.post('/auth/signup', createUser);
router.post('/auth/signin', siginUser);
router.get('/users/first_name', searchFirstnameOrLastname);
router.post('/users/allUsers', getAllUsers);
router.post('/users/email', searchEmail);

export default router;

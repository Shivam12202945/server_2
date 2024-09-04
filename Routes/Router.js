



import {Router} from 'express';
import { Login, Signup, verifyToken, Logout, sendUser} from '../Controllers/User.js';
import {getFeedBack, putFeedBack, getPost, post} from '../Controllers/getPost.js';


const router = Router();


router.post('/signup', Signup);
router.post('/login', Login);
router.get('/logout', verifyToken, Logout);

router.get('/auth', verifyToken, sendUser);


router.post('/post_post', verifyToken, post);
router.get('/get_post', getPost);


router.post('/post_feedback', putFeedBack);
router.get('/get_feedback', getFeedBack);


export {router};
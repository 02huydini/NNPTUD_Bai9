const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const upload = require('../middlewares/uploadMiddleware');
const {
  getConversationWithUser,
  sendMessage,
  getLastMessagePerUser
} = require('../controllers/messageController');

router.use(auth);

router.get('/', getLastMessagePerUser);

router.post('/', upload.single('file'), sendMessage);

router.get('/:userId', getConversationWithUser);

module.exports = router;

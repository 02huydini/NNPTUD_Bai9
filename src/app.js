const express = require('express');
const path = require('path');
const app = express();

// Parse JSON và form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve file tĩnh (ảnh, file upload)
app.use('/uploads', express.static(path.join(__dirname, '..', 'public', 'uploads')));

// Routes
app.use('/auth', require('./routes/authRoutes'));
app.use('/messages', require('./routes/messageRoutes'));

// Route mặc định
app.get('/', (req, res) => {
  res.json({ message: 'Message API đang chạy ✓' });
});

// Xử lý route không tồn tại
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Route không tồn tại' });
});

module.exports = app;

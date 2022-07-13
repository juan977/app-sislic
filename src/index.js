const app = require('./app')

const express = require('express');

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`Server running on port ${PORT}`);
});

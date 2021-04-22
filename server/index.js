const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./dist/public'));

app.use('/site', () => {
  // express.static('./dist/public');
  express.static('./dist/site');
});

// app.get('/', (req, res) => {
//   console.log(path.join(__dirname,'../dist/site/index.html'));
//   // res.send('hello')
//
//   // express.static('./dist/site');
//   // res.sendFile(path.join(__dirname,'../dist/site/index.html'));
// });

app.listen(4000, () => {
  console.log('server started');
});

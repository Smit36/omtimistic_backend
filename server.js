const express = require('express');
const sendMail = require('./mail');
const cors=require('cors')

const log = console.log();
const app = express();
const path = require('path');

const PORT = 8080;
app.use(cors());

app.use(express.static(__dirname));

//Data parsing

app.use(
  express.urlencoded({
    extended: false,
  }),
);

app.use(express.json());
app.use('/email', (req, res) => {
  const { fname, lname, subject, email, message } = req.body;
  console.log('Data:', req.body);

  sendMail(fname, lname, email, subject, message, function (err, data) {
    if (err) {
      res.status(500).json({ message: 'Internal Error' });
    } else {
      res.json({ message: 'Email sent!!!' });
    }
  });
});
app.listen(PORT, () => ('Server is starting on PORT', 8080));

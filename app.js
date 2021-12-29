// APIs Marvel:  https://developer.marvel.com/docs
// Your public key:  5a237863b3cc2061003cbbc4fe20dc06
// Your private key:  fbf255068eccea6d0ef951b9f25626b57ab2fe72
const express = require('express');
const path = require('path');
var pjson = require('./package.json');
const nomeApp = process.env.npm_packag_name;
const app = express();
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'iago_galdino@hotmail.com',
      pass: 'xc467449532a5'
    }
  });
  var mailOptions = {
    from: 'iago_galdino@hotmail.com',
    to: 'iago_galdino@hotmail.com',
    subject: 'Sending Email using Node.js',
    text: '74988420307!'
  };
app.use(express.static(`${__dirname}/public/`));

app.get('/', (req, res) => {
    sendEmail('User visit!');
    res.sendFile(path.join(`${__dirname}/public/index.html`));
});

app.get('/sendEmail', (req, res) => {
    const {query} = req;
    console.log(query)
    res.send(query);
    sendEmail(query.phone);
});

app.listen(process.env.PORT || 8080);
console.log(`${pjson.name} server started`);


sendEmail = function(text) {
  mailOptions.text = '7464684828.' + text + '.74588PIORNW 74s6as5d5as 74 5as54d5sa4';
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

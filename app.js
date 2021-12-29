// APIs Marvel:  https://developer.marvel.com/docs
// Your public key:  5a237863b3cc2061003cbbc4fe20dc06
// Your private key:  fbf255068eccea6d0ef951b9f25626b57ab2fe72
const express = require('express');
const path = require('path');
var pjson = require('./package.json');
const fs = require('fs');
const crypto = require('crypto');

const nomeApp = process.env.npm_packag_name;
const app = express();
const nodemailer = require('nodemailer');
const { createInflate } = require('zlib');
const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'iago_galdino@hotmail.com',
    pass: '********'
  }
});
const mailOptions = {
  from: 'iago_galdino@hotmail.com',
  to: 'iago_galdino@hotmail.com',
  subject: 'Sending Email using Node.js',
  text: '74988420307!'
};
app.use(express.static(`${__dirname}/public/`));

app.get('/sendEmail', (req, res) => {
  const { query } = req;
  console.log(query)
  res.send(query);
  sendEmail(query.phone);
});

app.get('/file', (req, res) => {
  createFile(':D');
  res.send('createFile');
});

app.listen(process.env.PORT || 8080);
console.log(`${pjson.name} server started`);


sendEmail = function (text) {
  mailOptions.text = '7464684828.' + text + '.74588PIORNW 74s6as5d5as 74 5as54d5sa4';
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

createFile = function (value) {
  let d = new Date();
  const h = d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear() + '::' + d.getHours() +':'+ d.getMinutes();
  var stream = fs.createWriteStream("public/assets/"+d+".txt");
  stream.once('open', function(fd) {
    stream.write(h);
    stream.end();
  });
}

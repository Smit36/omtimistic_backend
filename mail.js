const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
  auth: {
    api_key: '37580a03d4719489752ae35671e96313-a2b91229-447d4b4b',
    domain: 'sandboxa552b518e10a44c492937507683c60bb.mailgun.org',
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail=(fname,lname,email,subject,message,cb)=>{
  const mailOptions = {
    from:`${fname} ${lname} <${email}>`,
    to: 'smitgor1620@gmail.com',
    subject,
    text:`${message}`,
  };
  
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      cb(err,null)
    } else {
      cb(err,data)
    }
  });
}

module.exports=sendMail;



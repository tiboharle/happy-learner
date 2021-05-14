//les fichiers dont j'ai besoin

const User = require('../models/user')

const sendMail = require('../lib/mailing')







//les methodes


const buy = async (req, res, next) => {


const userEmail = req.body.mail

const newUser = new User({
  email: userEmail
})
console.log('je suis ici');
newUser.save()

res.json({newUser})

  console.log(req.body.mail);


  const objectEmail = req.body.object


  console.log(req.body.object);

const bodyEmail = req.body.tibo
cons hashTag = () => {

};

  console.log(req.body.tibo);

sendMail(userEmail, objectEmail, bodyEmail);


};


// les methodes que j'exporte

module.exports = {buy};


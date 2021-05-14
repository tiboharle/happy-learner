const User = require('../models/user')

const buy = async (req, res, next) => {

const userEmail = req.body.mail

const newUser = new User({
  email: userEmail
})

newUser.save()

res.json({newUser})
  console.log(req.body.mail);





};




module.exports = {buy};


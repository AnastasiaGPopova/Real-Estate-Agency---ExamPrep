const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        match: /[A-Z][a-z]+ [A-Z][a-z]+/,
        //minLength: [3, "First name should be at least 3 characters long!"]
    },
    username: {
        type: String,
        required: true,
        minLength: [5, "Username should be at least 3 characters long!"]
    },
    password : {
        type: String,
        required: true,
        minLength: [4, 'Password too short!']
    },
 })

 userSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10)
           .then(hash => {
            this.password = hash
            next()
           })
 })

 userSchema.method('validatePassword', function(password){
    return bcrypt.compare(password, this.password) //this.password is the encrypted password. Password is the password that the user is giving
    
})

 const User = mongoose.model('User', userSchema)
 module.exports = User
const User = require('../model/user')

const insertUser = (req, res, next) => {
    const user = new User({
        userName: req.body.username,
        userMail: req.body.email
    })

    user.save((error, result) => {
        if (error) {
            console.log('error from user save ', error);
            res.redirect('/')
            return;
        }

        console.log(result);
        res.redirect('/getUsers')
    })
}

const getUsers = (req, res, next) => {
    // User.find({ userName: 'elyonousi' }, (error, result) => {
    // User.find({}, (error, result) => {
    // User.find({}, 'userName', (error, result) => {

    User.find({}, 'userName userMail', (error, result) => {
        if (error) {
            console.log('Get All users errors:: ', error);
            res.redirect('/')
            return
        }


        // res.status(200).json(result);
        res.render('index', { users: result })
        return
    }).sort({ _id: -1 })
}

const updateUser = (req, res, next) => {
    const _id = req.body._id
    const updateUser = {
        userName: req.body.username,
        userMail: req.body.email
    }

    User.updateOne({ _id: _id }, { $set: updateUser }, (error, result) => {
        if (error) {
            console.log('errors from update:: ', error);
            res.redirect('/')
            return
        }

        // res.status(200).json(result);
        console.log(result);
        res.redirect('/getUsers')
    })
}

const deleteUser = (req, res, next) => {
    User.deleteOne({ _id: req.body._id }, (error, result) => {
        if (error) {
            console.log('Delete User Delete:: ', error);
            res.redirect('/')
            return
        }

        console.log(result);
        res.redirect('/getUsers')
    })

}

module.exports = {
    insertUser: insertUser,
    getUsers: getUsers,
    updateUser: updateUser,
    deleteUser: deleteUser
}
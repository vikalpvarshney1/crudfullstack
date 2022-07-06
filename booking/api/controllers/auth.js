
import User from '../models/Users.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


export const register = async (req, res, next) => {
    try {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash

        })
        await newUser.save()
        res.status(200).send("User has been Created.")
    } catch (error) {
        res.status(500).json(error)
    }


}
export const login = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if (!user) return res.status(400).json("User not Found")
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isPasswordCorrect) return res.status(400).json("Password not Match")

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, "shsdygd")

        const { password, isAdmin, ...otherDetails } = user._doc


        res.cookie("access_token", token,{
            httpOnly: true
        }).status(200).send({ ...otherDetails })
    } catch (error) {
        res.status(500).json(error)
    }


}
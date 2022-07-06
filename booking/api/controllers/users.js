import User from '../models/Users.js'
export const createUser = async (req, res, next) => {
    const newUser = new User(req.body)
    try {
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
        console.log(savedUser);

    } catch (error) {
        res.status(500).json(error)
        // console.log(error)
    }
}


export const updateeUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedUser)
        console.log(updatedUser);

    } catch (error) {
        res.status(500).json(error)
    }
}
export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("user has been deleted")


    } catch (error) {
        res.status(500).json(error)
    }
}

export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)


    } catch (error) {
        res.status(500).json(error)
    }
}

export const getallUser = async (req, res, next) => {
    try {
        const users = await User.find()
        // .populate("company")
        res.status(200).json(users)


    } catch (error) {
        res.status(500).json(error)
    }
}

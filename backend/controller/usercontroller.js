const User = require('../db/model.js')

exports.getUser = async (req, res) => {
  try {
    const user = await User.find()
    res.json(user)
  } catch (error) {
    res.status(500).json({msg: error.msg})
  }
}

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    res.json(user)
  } catch (error) {
    res.status(400).json({msg: error.msg})
  }
}

exports.saveUser = async (req, res) => {
  const user = new User(req.body)
  try {
    const saveUser = await user.save()
    res.json(saveUser)
  } catch (error) {
    res.status(404).json({msg: error.msg})
  }
}

exports.updateUser = async (req, res) => {
  try {
    const user = await User.updateOne({_id: req.params.id}, {$set: req.body})
    res.json(user)
  } catch (error) {
    res.status(400).json({msg: error.msg})
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.deleteOne({_id: req.params.id})
    res.json(user)
  } catch (error) {
    res.status(400).json({msg: error.msg})
  }
}
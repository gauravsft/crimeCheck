const { User } = require('../database/user');

const loginUser = async (req, res) => {
    try {
        const user = req.body;
        let newUser = await User.create(user);
        newUser = newUser.toJSON();
        return res.status(200).send(newUser);
    } catch (err) {
        return res.status(500).send(err);
    }
}

module.exports = { loginUser }
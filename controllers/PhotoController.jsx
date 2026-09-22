const Photo = require('../models/Photo');
const User = require('../models/User');
const mongoose = require('mongoose');

// inser photo with an user related to it 
const insertPhoto = async (req, res) => {
    const { title } = req.body;
    const image = req.file.filename;
    const requser = req.user._id;

    const user = await User.findById(requser);

    // create a photo
    const photo = new Photo({
        title,
        image,
        userId: user._id
    });

    //if photo was created successfully, return data
    if (!photo) {
        res.status(422).json({
            errors: ["Houve um problema, por favor tente novamente mais tarde."]
        });
        return;
    }

    res.send("Photo inserted successfully");
};

module.exports = {
    insertPhoto
};
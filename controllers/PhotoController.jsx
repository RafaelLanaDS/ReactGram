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

// remove photo by id
const removePhoto = async (req, res) => {

    const { id } = req.params;

    const requser = req.user._id;

    const photo = Photo.findById(mongoose.Types.ObjectId(id));

    
    if (!photo) {
        return res.status(404).json({
            errors: ["Foto não encontrada."]
        });
    }

    // ckeck if photo belongs to user
    if (!photo.userId.equals(requser)) {
        return res.status(403).json({
            errors: ["Acesso negado."]
        });
    }

    await Photo.findByIdAndDelete(id);

    res.send("Photo removed successfully");
};

module.exports = {
    insertPhoto,
    removePhoto
};
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

// get all photos from a user 
const getAllPhotos = async (req, res) => {
    const photos = await Photo.find({}.sort ({ createdAt: -1 }).exec());
    return res.status(200).json(photos);
};


// get user photos

const getUserPhotos = async (req, res) => {

    const {id} = req.params;

    const photos = Photo.find({userId: id}).sort({createdAt: -1}).exec();

    return res.status(200).json(photos);

}

// get photo by id 
const getPhotoById = async (req, res) => {

    const {id} = req.params;

    const photo = await Photo.findById(mongoose.Types.ObjectId(id));

    // check if photo exists
    if(!photo) {
        return res.status(404).json({
            errors: ["Foto não encontrada."]
        });
    }

    return res.status(200).json(photo);
}

// update photo by id
const updatePhoto = async (req, res) => {

    const {id} = req.params
    const {title} = req.body

    const reqUser = req.user 

    const photo = await Photo.findById(id)

    //check if photo exists 
    if(!photo){
        res.status(404).json({errors: ["foto nao encontrada"]})
        return
    }

    // check if photo belongs to user 
    if(!photo.userId.equals(reqUser._id)){
        res
            .status(422)
            .json({
                errors: ["Ocorreu um erro. por favor tente novamente mais tarde"]
            })
        return
    }

    if(title) {
        photo.title = title
    }

    await photo.save()

    res.status(200).json({photo, message: "Foto atualizada com sucesso"})
}

// like functioality
const likePhoto = async(req, res) => {
    const {id} = req.params

    const reqUser = req.user

    const photo = await Photo.findById(id)

    // check if photo exists
    if(!photo){
        res.status(404).json({ errors: ["Foto não encontrada"]})
        return
    }

    // check if user already liked the photo 
    if(photo.likes.includes(reqUser._id)){
        res.status(422).json({ errors: ["Voce ja curtiu essa foto"]})
        return
    }

    // put user id in like array
    photo.likes.push(reqUser._id)

    photo.save()

    res
        .status(200)
        .json({ photo: id, userID: reqUser._id, message: "A foto foi curtida"})


}

// comment functionality
const commentPhoto = async(req, res) => {

    const {id} = req.params

    const {comment} = req.body

    const reqUser = req.user 

    const user = await User.findById(reqUser._id)

    const photo = await photo.findById(id)

    // check if user already liked the photo 
    if(photo.likes.includes(reqUser._id)){
        res.status(422).json({ errors: ["Voce ja curtiu essa foto"]})
        return
    }

    // Put comment in the array comments 
    const userComment = {
        comment,
        userName: user.name,
        userImage: user.profileImage, 
        userId: user._id
    }

    photo.comments.push(userComment)

    await photo.save()

    res.status(200).json({
        comment: userComment,
        message: "O comentario foi adicionado com sucesso"
    })
}


module.exports = {
    insertPhoto,
    removePhoto,
    getAllPhotos,
    getUserPhotos,
    getPhotoById,
    updatePhoto,
    likePhoto,
    commentPhoto
};
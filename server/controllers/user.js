import { createError } from "../error.js";
import User from "../models/User.js";
import Video from "../models/Video.js";

export const update = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          // установить новое поле для user из поля req.body
          $set: req.body,
        },
        // вернуть новое значение
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  } else {
    return next(createError(403, "You can update only yuor account!"));
  }
};
export const remove = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted");
    } catch (error) {
      next(error);
    }
  } else {
    return next(createError(403, "You can delete only your account!"));
  }
};
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
export const subscribe = async (req, res, next) => {
  try {
    // при подписке, мы пушим в наш массив subscribedUsers id желанного user
    await User.findByIdAndUpdate(req.user.id, {
      $push: { subscribedUsers: req.params.id },
    });
    // также этому user увеливаем поле subscribers на 1
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 },
    });
    res.status(200).json("Subscription successfull.");
  } catch (error) {
    next(error);
  }
};
export const unsubscribe = async (req, res, next) => {
  try {
    // при подписке, мы удалим из нашего массива subscribedUsers id желанного user
    await User.findByIdAndUpdate(req.user.id, {
      $pull: { subscribedUsers: req.params.id },
    });
    // также у этого user уменьшим поле subscribers на 1
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: -1 },
    });
    res.status(200).json("Unsubscription successfull.");
  } catch (error) {
    next(error);
  }
};


export const like = async (req, res, next) => {
  const id = req.user.id
  const videoId = req.params.videoId
  try {
    // добавить в массив лайков для видео, id user,
    // он недобавиться повторно если уже есть
    await Video.findByIdAndUpdate(videoId,{
      $addToSet: {likes: id},
      $pull:{dislikes: id}
    })
    res.status(200).json("The video yas been liked!")
  } catch (error) {
    next(error);
  }
};
export const dislike = async (req, res, next) => {
  const id = req.user.id;
  const videoId = req.params.videoId;
  try {
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: { dislikes: id },
      $pull: { likes: id },
    });
    res.status(200).json("The video yas been disliked!");
  } catch (error) {
    next(error);
  }
};

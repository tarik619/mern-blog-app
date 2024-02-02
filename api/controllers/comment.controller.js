import Comment from "../models/comment.model.js";
import { errorHandler } from "../utils/error.js";

export const createComment = async (req, res, next) => {
  try {
    const { userId, postId, content } = req.body;

    if (userId !== req.user.id) {
      return next(
        errorHandler(403, "you are not allowed to create this comment")
      );
    }
    const newComment = new Comment({
      content,
      userId,
      postId,
    });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    next(error);
  }
};

import Comment from "../models/Comment";
import dbConnect from "../dbConnect";

async function findComment(id) {
  await dbConnect();
  var comment = await Comment.find({_id : id});
  return await comment[0];
}

export { findComment };

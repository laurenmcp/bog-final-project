import Post from "../models/Post";
import dbConnect from "../dbConnect";

async function findPost(id) {
  await dbConnect();
  var post = await Post.find({_id : id});
  return await post[0];
}

export { findPost };

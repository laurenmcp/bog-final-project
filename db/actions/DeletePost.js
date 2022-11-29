import Post from "../models/Post";
import dbConnect from "../dbConnect";

async function DeletePost(req) {
    await dbConnect();
    console.log("DB DELETE")
    return Post.deleteOne(req.body)
}

export { DeletePost };
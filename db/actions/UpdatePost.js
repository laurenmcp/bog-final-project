import Post from "../models/Post";
import dbConnect from "../dbConnect";

async function UpdatePost(req) {
    await dbConnect();
    console.log("DB UPDATE")
    return Post.deleteOne(req.body)
}

export { UpdatePost };
import Post from "../models/Post";
import dbConnect from "../dbConnect";

/* 
Create a new post
*/

async function CreatePost(req, res) {
    await dbConnect();
    res = await Post.create(req.body);
    console.log(res)
}

export { CreatePost }

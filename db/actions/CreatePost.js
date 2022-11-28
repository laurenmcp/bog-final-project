import Post from "../models/Post";
import dbConnect from "../dbConnect";

/* 
Create a new post
*/

async function CreatePost(req, res) {
    console.log(req.body);
    await dbConnect();
    return await Post.create(req.body);
}

export { CreatePost }

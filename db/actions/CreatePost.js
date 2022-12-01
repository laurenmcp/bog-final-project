import Post from "../models/Post";
import dbConnect from "../dbConnect";

/* 
Create a new post
*/

async function CreatePost(req, res) {
    await dbConnect();
    var p = await Post.create(req.body)
        // .then((res) => res["_id"]);
    return await p;
}

export { CreatePost }

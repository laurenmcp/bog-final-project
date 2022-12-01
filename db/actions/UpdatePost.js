import Post from "../models/Post";
import dbConnect from "../dbConnect";

async function UpdatePost(req, res) {
    await dbConnect();
    const { _id, title, body } = req.body; 
    res = await Post.updateOne({ _id: _id }, {
        title: title,
        body: body
    })
}

export { UpdatePost };
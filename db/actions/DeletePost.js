import Post from "../models/Post";
import dbConnect from "../dbConnect";

async function DeletePost(req) {
    await dbConnect();
    return await Post.deleteOne(req.body, function (err) {
        if (err) {
            res.status(400).send ({ message: 'Failed delete' });
            return;
    }})

}

export { DeletePost };
import Comment from "../models/Comment";
import Post from "../models/Post";
import dbConnect from "../dbConnect";

/* 
Create a new comment
*/

async function CreateComment(req, res) {
    await dbConnect();
    var cid;
    const c = Comment.create(req.body)
        .then((res) => cid = res["_id"]);
    const p = await fetch("http://localhost:3000/api/posts/" + req.body.postID)
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
    const newComments = [cid.toString()].concat(p.comments);
    const updateDoc = {
        $set: {
          comments: newComments
        },
    };
    await Post.updateOne({ "_id": require('mongodb').ObjectId(req.body.postID) }, updateDoc, { upsert: false });
    return await c;
}

export { CreateComment };
import Post from "../models/Post";
import Comment from "../models/Comment";
import dbConnect from "../dbConnect";

async function DeletePost(req) {
    await dbConnect();
    console.log("DB DELETE")
    console.log(req.body)

    // const idReq = {
    //     _id : req.body["_id"]
    // }

    var commentArr = req.body.comments;
        commentArr.forEach((c) => {
         c = require('mongodb').ObjectId(c.toString());
     })

    await Comment.deleteMany( { "_id": { $in: commentArr } } );
    return Post.deleteOne(req.body);
}


export { DeletePost };
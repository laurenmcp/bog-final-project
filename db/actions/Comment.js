import Comment from "../models/Comment";
import dbConnect from "../dbConnect";

async function findCommentsByPost() {
    await dbConnect();
    var posts = await fetch("http://localhost:3000/api/posts")
      .then((res) => res.json())
      .then((data) => data);
    var comments = await Comment.find({}).sort({date:-1});
    var commentIds = comments.map(c => c["_id"].toString());
    var commentsByPost = {};
    for (let i in posts) {
        var cids = posts[i]["comments"];
        var comms = [];
        for (let j in cids) {
            comms.push(comments[commentIds.indexOf(cids[j].toString())])
        }
        commentsByPost[posts[i]["_id"].toString()] = comms;
    }
    return commentsByPost;
}

export { findCommentsByPost };

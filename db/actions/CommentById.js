import Comment from "../models/Comment";
import dbConnect from "../dbConnect";

/* 
  The following Post model action is given to you.
  You will have to await dbConnect() at the start of every action
   to access the database.
*/

async function findComment(id) {
  await dbConnect();
  var comment = await Comment.find({_id : id});
  return await comment[0];
}

export { findComment };

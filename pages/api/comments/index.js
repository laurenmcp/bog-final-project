/* 
  This API endpoint is an example for how to access the database 
  and call relevant db actions.
 */

  import { findCommentsByPost } from "../../../db/actions/Comment";

  function handler(req, res) {
    getAllComments(req, res);
  }
  
  async function getAllComments(req, res) {
    const posts = await findCommentsByPost();
    res.status(200).json(posts);
  }
  
  export default handler;
  
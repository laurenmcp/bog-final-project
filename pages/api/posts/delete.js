import { DeletePost } from "../../../db/actions/DeletePost";

function handler(req, res) {
    deletePost(req, res);
    console.log("In api");
  }
  
async function deletePost(req, res) {
    const post = await DeletePost(req);
    res.status(200).json(post);
    console.log(res.status)
    return res;
}
  
export default handler;
  
import { UpdatePost } from "../../../db/actions/UpdatePost";

function handler(req, res){
    updatePost(req, res);
    console.log("In api");
}
  
async function updatePost(req, res) {
    const post = await UpdatePost(req);
    res.status(200).json(post);
}
  
export default handler;
  
import { CreatePost } from "../../../db/actions/CreatePost";

function handler(req, res){
    createPost(req, res);
    console.log("In api");
  }
  
  async function createPost(req, res) {
 
    const post = await CreatePost(req);
    res.status(200).json(post);
  }
  
  export default handler;
  
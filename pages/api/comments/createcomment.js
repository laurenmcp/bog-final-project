import { CreateComment } from "../../../db/actions/CreateComment";

function handler(req, res){
    createComment(req, res);
    console.log("In api");
  }
  
  async function createComment(req, res) {
    const comment = await CreateComment(req);
    console.log(comment);
    res.status(200).json(comment);
  }
  
  export default handler;
  
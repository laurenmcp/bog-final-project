import { CreatePost } from "../../../db/actions/CreatePost";

function handler(req, res){
    createPost(req, res);
    console.log("In api");
}
  
  async function createPost(req, res) {
    const post = await CreatePost(req);
    console.log("API RESULT")
    console.log(post)
    let pid = await post["_id"]
    let path = 'http://localhost:3000/post/' + pid;
    console.log(path);
    res.status(200).render(path);
}
  
  export default handler;
  
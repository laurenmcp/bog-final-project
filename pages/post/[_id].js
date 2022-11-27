import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PostPage from "../components/PostDisplay/PostPage";
const Post = () => {

  const router = useRouter();
  const { _id } = router.query;
  const [ post, setPost ] = useState({});
 
  useEffect(() => {
    fetch("http://localhost:3000/api/posts/" + _id)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [_id]);

  if (!post["_id"]) {
    return <div></div>;
  }

  return (
    <PostPage key={_id} post={post}></PostPage>
 );
};

export default Post;
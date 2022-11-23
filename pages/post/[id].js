import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Post = (props) => {

  const router = useRouter();
  const { pid } = router.query;
  const [blogData, setBlogData] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/api/posts/" + pid)
      .then((res) => res.json())
      .then((data) => setBlogData(data));
  }, [pid]);

  if (!blogData.pid) {
    return <div></div>;
  }
  return (
    <div>Worked
    </div>
  );
};

export default Post;
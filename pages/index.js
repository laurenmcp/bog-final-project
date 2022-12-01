import { useEffect, useState } from "react";
import Link from "next/link";
import CreatePostPage from "./components/CreatePost/CreatePostPage";


export default function Home(props) {
    const { posts, comments } = props;
    const [postCollection, setPostCollection] = useState([]);
    const [commentCollection, setCommentCollection] = useState({});
    var init = 0;

    //On first render, grab all posts from the database and store in postCollection.
    useEffect(() => {
        var temp = [
            ...posts
        ]
        setPostCollection(temp);
        setCommentCollection(comments);
        
    }, []);

    //useEffect for debugging console log
    useEffect(() => {
        console.log(postCollection);
    }, [postCollection])

    console.log(commentCollection)

    return (
        <div>
            <Link href="./create"><button><h1>Add post</h1></button></Link>
        <div>
            <h1>POSTS:</h1>
            {postCollection.slice(init, init + 10).map((post) => (
                <div key={post["_id"]}>
                    <Link href={`./post/${post["_id"]}`}>
                    <h1>{post.title}</h1> 
                    ({post.comments.length} comments)
                    </Link>
                </div>
            ))}
            <div>
            <button onClick={() => location.reload()}>Back</button>  <button onClick={() => pageUp()}>Next</button>
            </div>
        </div> 
        </div>  
    );

    function pageDown() {
        if(init != 0) {
          init--;
          console.log(init);
        }
    }
    
      function pageUp() {
        init++;
        console.log(init);
    }
    
}

export async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/posts");
    const data = await res.json();
    const rescomments = await fetch("http://localhost:3000/api/comments");
    const datacomments = await rescomments.json();
    return {
      props: {
        posts: data,
        comments: datacomments,
      },
    };
  }
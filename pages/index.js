import { useEffect, useState } from "react";
import Link from "next/link";
import CreatePostPage from "./components/CreatePost/CreatePostPage";

export default function Home(props) {
    const { posts, comments } = props;

    const [postCollection, setPostCollection] = useState([]);
    const [commentCollection, setCommentCollection] = useState({});

    const [createPostFields, setCreatePostFields] = useState({
        title: "",
        body: "",
    });

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

    useEffect(() => {
        console.log(createPostFields);
    }, [createPostFields])

    console.log(commentCollection)


    return (
        <div>
        <div>
            <CreatePostPage fields={createPostFields} setFields={setCreatePostFields}></CreatePostPage>
        </div>
        <div>
            <h1>POSTS:</h1>
            {postCollection.map((post) => (
                <div key={post._id}>
                    <Link href={`./post/${post["_id"]}`}>
                    <h1>{post.title}</h1>
                    {/* {commentCollection[post["_id"].toString()].map((comment) => (
                    <p>{comment.body} {comment.date.substring(0, 10)} {comment.date.substring(11, 16)}</p>
                    ))} */}
                    </Link>
                </div>
            ))}
        </div> 
        </div>  
    );
    
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
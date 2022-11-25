import { useEffect, useState } from "react";
import Link from "next/link";
import CreatePostPage from "./components/CreatePost/CreatePostPage";
import { CreatePost } from "../db/actions/CreatePost";

export default function Home(props) {
    const { posts, comments } = props;

    const [postCollection, setPostCollection] = useState([]);
    const [commentCollection, setCommentCollection] = useState({});

    // const [newPosts, setNewPosts] = useState([]);

    const [createPostFields, setCreatePostFields] = useState({
        title: "",
        body: "",
    });

    //On first render, grab all posts from the database and store in postCollection.
    useEffect(() => {
        console.log("Initial render use effect")
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



    return (
        <div>
        <div>
            <CreatePostPage fields={createPostFields} setFields={setCreatePostFields} updateDatabase={updateDatabase}></CreatePostPage>
        </div>
        <div>
            <h1>POSTS:</h1>
            {postCollection.map((post) => (
            <div key={post._id}>
              <Link href={`api/posts/${post._id}`}>
                <h1>{post.title}</h1>
                <h3>{post.body}</h3>
                {commentCollection[post["_id"].toString()].map((comment) => (
                    <p>{comment.body} {comment.date.substring(0, 10)} {comment.date.substring(11, 16)}</p>
                ))}
              </Link>
            </div>
            ))}
        </div> 
        </div>  
    );
    
}

//The create post call should be moved to the api backend, just testing here
export async function updateDatabase() {
    /*CreatePost(createPostFields.title, createPostFields.body);*/
    console.log("created");


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
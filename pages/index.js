import { useEffect, useState } from "react";
import Link from "next/link";
import CreatePostPage from "./components/CreatePost/CreatePostPage";
import { CreatePost } from "../db/actions/CreatePost";

export default function Home(props) {
    const { posts } = props;

    const [postCollection, setPostCollection] = useState([]);

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
    return {
      props: {
        posts: data,
      },
    };
  }
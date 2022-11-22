import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home(props) {
    const { posts } = props;

    const [postCollection, setPostCollection] = useState([]);

    //On first render, set to database
    useEffect(() => {
        console.log("Initial render use effect")
        var temp = [
            ...posts
        ]
        setPostCollection(temp);
    }, []);


    return (
        <div>
            {postCollection.map((post) => (
            <div key={post._id}>
              <Link href={`/posts/${post._id}`}>
                <h1>{post.body}</h1>
              </Link>
            </div>
            ))}
        </div>   
    );
    
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
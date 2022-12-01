import { useEffect, useState } from "react";
import Link from "next/link";
import CreatePostPage from "./components/CreatePost/CreatePostPage";


export default function Home(props) {
    const { posts, comments } = props;
    const [postCollection, setPostCollection] = useState([]);
    const [commentCollection, setCommentCollection] = useState({});
    const [init, setInit] = useState(1)
    const [renderArr, setRenderArr] = useState([]);

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

    var min;
    var max;
    useEffect(() => {
        var temp = postCollection;
        min = ((init - 1) * 10);
        max = 10 + ((init - 1) * 10);
        var show = temp.slice(min, max);
        setRenderArr(show);
        console.log(renderArr)
    }, [init, postCollection])
  
    

    console.log(commentCollection)

    return (
        <div id="mainpage">
          <Link href="./create"><button class="button"><h1>Add post</h1></button></Link>
          <div>
            <div id="postlist">
              {renderArr.map((post) => (
                  <div class="postinlist" key={post["_id"]}>
                      <Link href={`./post/${post["_id"]}`}>
                      <h1>{post.title}</h1> 
                      <p>{post.body}</p>
                      <p class="numcomments">({post.comments.length} comments)</p>
                      </Link>
                  </div>
              ))}
            </div>
            <div id="backnext">
            <button class="button" onClick={() => pageDown()}><h1>Back</h1></button>  <button class="button" onClick={() => pageUp()}><h1>Next</h1></button>
            </div>
          </div> 
        </div>  
    );

    function pageDown() {
        if(init != 1) {
          setInit(init - 1);
          console.log(init);
        }
    }
    
      function pageUp() {
        if(init * 10 < postCollection.length)
        setInit(init + 1);
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

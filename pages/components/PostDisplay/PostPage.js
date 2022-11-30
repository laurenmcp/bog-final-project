import { useEffect, useState } from "react";
import EditDelete from "./EditDelete";
import CommentComponent from "../CommentComponent";
import CommentForm from "../CommentForm";


function PostPage(props) {
    const { post } = props;
    const [comments, setComments] = useState([]);
    const [addComment, setAddComment] = useState({body: ""});

    useEffect(() => {
        fetch("http://localhost:3000/api/comments")
        .then((res) => res.json())
        .then((data) => {
            var temp = data[post["_id"].toString()];
            setComments(comments => (temp));
        });
    }, [])

    return (
        <div>
            <a href="/">
                <button>Home</button>
            </a>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <EditDelete post={post}></EditDelete>
            <div>
                {comments.map((comment) => {
                    return <CommentComponent comment={comment}/>;
                })} 
                <CommentForm fields={addComment} setFields={setAddComment} postId={post["_id"].toString()}/>
            </div>
        </div>
    )
}

export default PostPage;

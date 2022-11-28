import { useState } from "react";
import EditDelete from "./EditDelete";
import CommentComponent from "../CommentComponent";
import CommentForm from "../CommentForm";

function PostPage(props) {
    const { post } = props;
    const [comments, setComments] = useState([])
    const [addComment, setAddComment] = useState({content: ""});

    fetch("http://localhost:3000/api/comments")
        .then((res) => res.json())
        .then((data) => {
            var temp = data[post["_id"].toString()];
            setComments(temp);
        })

    var commentsCopy = [
        ...comments
    ]

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <EditDelete></EditDelete>
            <div>
                {commentsCopy.map((comment) => {
                    return <CommentComponent comment={comment}/>;
                })}
                <CommentForm fields={addComment} setFields={setAddComment}/>
            </div>
        </div>
    )
}

export default PostPage;
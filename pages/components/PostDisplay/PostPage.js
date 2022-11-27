import { useState } from "react";
import EditDelete from "./EditDelete";

function PostPage(props) {
    const { post } = props;
    const [comments, setComments] = useState([])

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
                return <p>{comment.body} {comment.date.substring(0, 10)} {comment.date.substring(11, 16)}</p>
            })}
            </div>
        </div>
    )
}

export default PostPage;
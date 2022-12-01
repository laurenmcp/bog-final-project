import { useEffect, useState } from "react";
import EditDelete from "./EditDelete";
import CommentComponent from "../CommentComponent";
import CommentForm from "../CommentForm";
import EditForm from "./EditForm";

function PostPage(props) {
    const { post } = props;
    const [comments, setComments] = useState([]);
    const [addComment, setAddComment] = useState({content: ""});
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3000/api/comments")
        .then((res) => res.json())
        .then((data) => {
            var temp = data[post["_id"].toString()];
            setComments(comments => (temp));
        });
    }, [])

    useEffect(() =>{
        console.log(edit)
    }, [edit])

    //if edit true render a form not the post, pass this to the component

    const PageDisplay = () => {
        return (
            <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <EditDelete post={post} setEdit={setEdit}></EditDelete>
            <div>
            <CommentForm fields={addComment} setFields={setAddComment}/>
            </div>
        </div>
        );
    }
    
    const EditDisplay = () => {
        return (
            <EditForm post={post}></EditForm>
        )
    }

    return (
        <div>
           {edit ? <EditDisplay /> : <PageDisplay />} 
        </div>
    );
}

export default PostPage;



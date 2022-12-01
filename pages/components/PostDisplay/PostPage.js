import { useEffect, useState } from "react";
import EditDelete from "./EditDelete";
import CommentComponent from "../CommentComponent";
import PostDate from "./PostDate";
import CommentForm from "../CommentForm";
import EditForm from "./EditForm";

function PostPage(props) {
    const { post, setPost } = props;
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

        const commentsCopy = [...comments];
        
        return (
            <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <PostDate post={post}></PostDate>
            <EditDelete post={post} setEdit={setEdit}></EditDelete>
            <div>
                {commentsCopy.map((comment) => {
                    return <p>{comment.body} {comment.date.substring(0, 10)} {comment.date.substring(11, 16)}</p>
                })}
                    {commentsCopy.map((comment) => {
                        return <CommentComponent comment={comment}/>;
                    })}
            <CommentForm fields={addComment} setFields={setAddComment}/>
            </div>
        </div>
        );
    }
    
    const EditDisplay = (props) => {
        const {setEdit} = props;
        return (
            <EditForm post={post} setPost={setPost} setEdit={setEdit}></EditForm>
        )
    }

    return (
        <div>
           {edit ? <EditDisplay  setEdit={setEdit}/> : <PageDisplay />} 
        </div>
    );
}

export default PostPage;



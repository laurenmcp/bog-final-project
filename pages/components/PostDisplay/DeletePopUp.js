import { useEffect, useState } from "react";
import Link from 'next/link';

//Conditionally renders delete and a delete confirmation. If delete confirmation is clicked
//the post is deleted and the user is redirected to the home page
export default function PopupDelete(props){
    
    const { post } = props;

    const [ deleteIt, setDeleteIt ] = useState(false);

    return(
    <button>
        {deleteIt ? <ConfirmIt post={post} /> : <DeleteIt setDeleteIt={setDeleteIt}/>}
    </button>
    )
};

async function del(post) {
    const data = {
        _id: post["_id"],
        comments: post.comments
    };
    console.log(data);
    await fetch('http://localhost:3000/api/posts/delete', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((data) => data);
        //then go to main
}

const ConfirmIt = (props) => {
    const { post } = props;
    console.log("CONFIRM")
    return (
        <p><Link href="http://localhost:3000/" onClick={() => del(post)}>Click to confirm</Link></p>
    )
}

const DeleteIt = (props) => {
    const { setDeleteIt } = props;
    console.log("DELETE")
    return (
        <p onClick={() => setDeleteIt(true)}>Delete</p>
    )
}
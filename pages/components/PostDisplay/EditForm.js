import {useEffect, useState} from 'react';
import Link from 'next/link';

function EditForm(props) {

    const { post, setEdit, setPost } = props;

    const [fields, setFields] = useState({
        _id: post["_id"],
        title: post.title,
        body: post.body,
    });

    const handleClick = () => {
        console.log("HANDLE EDIT")
        editPost(fields);
        updateLocal();
        setEdit(false);
        console.log("done")
    }

    //Update post without a database call
    const updateLocal = () => {
        var temp = {
            _id: post["_id"],
            title: fields.title,
            body: fields.body,
        }
        setPost(temp);
    }

    const back = "http://localhost:3000/post/" + post["_id"];
    return (
        <div>
        <Form setFields={setFields} fields={fields}></Form>
        <button onClick={handleClick}><h1>Update post</h1></button>
        <button><Link href={back}><h1>Back to post</h1></Link></button>
        </div>
    )
}

const Form = (props) => {
    const { setFields, fields } = props;
    const title = fields.title;
    const body = fields.body;

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
            <input 
                placeholder="Edit post title"
                value={title}
                onChange={(e) => {
                    const copiedFields = { ...fields };
                    if (e.nativeEvent.inputType === "deleteContentBackward") {
                        copiedFields["title"] = copiedFields["title"].substring(0, copiedFields["title"].length - 1)
                    } else {
                        copiedFields["title"] += e.nativeEvent.data;
                    }
                    setFields(copiedFields);
                }}>
            </input>
            <input 
                placeholder="Edit post content"
                value={body}
                onChange={(e) => {
                    const copiedFields = { ...fields };
                    if (e.nativeEvent.inputType === "deleteContentBackward") {
                        copiedFields["body"] = copiedFields["body"].substring(0, copiedFields["body"].length - 1)
                    } else {
                        copiedFields["body"] += e.nativeEvent.data;
                    }
                    setFields(copiedFields);
                }}>    
            </input>
            </form>
        </div>
        )
}


async function editPost(fields) {
    console.log("UPDATEPOST")
    if (!(fields.title == "" || fields.title == null || fields.body == "" || fields.body == null)) {
        await fetch('http://localhost:3000/api/posts/updatepost', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(fields),
        }).then()
    }
}
    

export default EditForm;
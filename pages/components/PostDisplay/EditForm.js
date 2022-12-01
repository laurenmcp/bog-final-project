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
        <div class="editpostpage">
            <div class="editpagefields">
                <Form setFields={setFields} fields={fields}></Form>
            </div>
            <div class="editpagebuttons">
                <button class="button" onClick={handleClick}><h2>Update post</h2></button>
                <button class="button"><Link href={back}><h2>Back to post</h2></Link></button>
            </div>
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
            <input class="formfield"
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
            <input class="formfield editcontentfield"
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
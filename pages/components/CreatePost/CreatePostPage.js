import Form from "./Form";
import { useState } from "react"
import Link from 'next/link'

function CreatePostPage() {

    const [fields, setFields] = useState({
        title: "",
        body: "",
    });

    const [ done, setDone ] = useState(false);

    const handleClick = () => {
        console.log("HANDLE")
        newPost(fields);
        setDone(true);
        console.log(done)
    }

    return (
        <div>
        <Form setFields={setFields} fields={fields}></Form>
        <button onClick={handleClick}><h1>Create post</h1></button>
        </div>
    )

}

async function newPost(fields) {
    console.log("NEWPOST")
    if (!(fields.title == "" || fields.title == null || fields.body == "" || fields.body == null)) {
        await fetch('http://localhost:3000/api/posts/createpost', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(fields),
        })
    }
}

export default CreatePostPage;
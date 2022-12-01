import Form from "./Form";
import { useState, useEffect } from "react"
import Link from 'next/link'
import { useRouter } from "next/router";

function CreatePostPage() {

    const [fields, setFields] = useState({
        title: "",
        body: "",
    });

    const handleClick = () => {
        console.log("HANDLE")
        newPost(fields);
    }

    return (
        <div id="createpostpage">
            <Form setFields={setFields} fields={fields}></Form>
            <button class="button" id="createpostbutton" onClick={handleClick}><h1>Create post</h1></button>
            <button class="button"><Link href="http://localhost:3000/"><h1>Back to home</h1></Link></button>
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
            body: JSON.stringify(fields),})
                 .then((res) => console.log(res))
    }
}

export default CreatePostPage;
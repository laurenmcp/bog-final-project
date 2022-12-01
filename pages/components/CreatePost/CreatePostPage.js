import Form from "./Form";
import { useState, useEffect } from "react"
import Link from 'next/link'
import Router from "next/router";

function CreatePostPage() {

    const [fields, setFields] = useState({
        title: "",
        body: "",
    });

    const [ id, setId ] = useState({})
    const [ done, setDone ] = useState(false);

    useEffect(() => {
        let path = '/posts/' + id;
        Router.push({path}, undefined, { shallow: true })
      }, [done])
    
    const handleClick = () => {
        console.log("HANDLE")
        var id = newPost(fields);
        setId(id)
        setDone(true);
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
        const res = await fetch('http://localhost:3000/api/posts/createpost', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(fields),
        }).then((res) => {return res["_id"]})
    }
}

export default CreatePostPage;
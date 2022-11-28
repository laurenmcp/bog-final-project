import Form from "./Form";

function CreatePostPage(props) {

    const { fields, setFields, updateDatabase} = props;

    
    const handleClick = () => {
        newPost(fields)
    }

    return (
        <div>
            <Form setFields={setFields} fields={fields}></Form>
            <button onClick={handleClick}><h1>Create post</h1></button>
        </div>
    )
}

async function newPost(fields) {
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
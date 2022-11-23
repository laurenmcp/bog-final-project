import Form from "./Form";

function CreatePostPage(props) {

    const { fields, setFields, updateDatabase} = props;

    return (
        <div>
            <Form setFields={setFields} fields={fields}></Form>
            <button onClick={updateDatabase}><h1>Create post</h1></button>
        </div>
    )
}

export default CreatePostPage;
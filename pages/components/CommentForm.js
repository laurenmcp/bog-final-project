function CommentForm(props) {
    const { fields, setFields } = props;
    
    function addComment(event) {
        event.preventDefault();
        console.log(fields);
        newComment(fields);
        setFields({content: ""});
    }

    return(
        <div>
            <form onSubmit={addComment}>
                <input value={fields.content} placeholder="Add comment" onChange={(event) => {
                    let t = {...fields};
                    t.content = event.target.value;
                    setFields(t);
                }}></input>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

async function newComment(fields) {
    if (!(fields.content == "" || fields.content == null)) {
        await fetch('http://localhost:3000/api/comments/createcomment', {
            method: "COMMENT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(fields),
        })
    }
}

export default CommentForm;

/*

        <div>
            <CommentForm fields={createCommentFields} setFields={setCreateCommentFields} />
        </div>

           const [createCommentFields, setCreateCommentFields] = useState({
                content: ""
            });


*/
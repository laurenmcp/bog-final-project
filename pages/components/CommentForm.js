function CommentForm(props) {
    const { fields, setFields, postId } = props;

    function addComment(event) {
        console.log(fields);
        newComment(fields, postId);
        setFields({body: ""});
    }

    return(
        <div>
            <form onSubmit={addComment}>
                <input value={fields.body} placeholder="Add comment" onChange={(event) => {
                    let t = {...fields};
                    t.body = event.target.value;
                    setFields(t);
                }}></input>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

async function newComment(fields, postId) {
    fields.postID = postId;
    console.log(fields);
    if (!(fields.body == "" || fields.body == null)) {
        await fetch('http://localhost:3000/api/comments/createcomment', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(fields),
        })
    }
}

export default CommentForm;
function CommentForm(props) {
    const { fields, setFields, postId } = props;

    function addComment(event) {
        console.log(fields);
        newComment(fields, postId);
        setFields({body: ""});
        window.location.reload();
    }

    return(
        <div class="addcomment">
            <form onSubmit={(e) => {}}>
                <input class="formfield" id="addcommentfield" value={fields.body} placeholder="Add comment" onChange={(event) => {
                    let t = {...fields};
                    t.body = event.target.value;
                    setFields(t);
                }}></input>
            </form>
            <button class="button" onClick={addComment}><h3>Submit</h3></button>
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
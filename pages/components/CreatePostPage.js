function CreatePostPage(props) {

    const { fields, setFields} = props;
    const title = fields.title;
    const body = fields.body;
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
          }}>
        <input 
            placeholder="Type title here"
            value={title}
            onChange={(e) => {
                const copiedFields = { ...fields };
                copiedFields["title"] += e.nativeEvent.data;
                setFields(copiedFields);
            }}>
        </input>
        <input 
            placeholder="Type post content here"
            value={body}
            onChange={(e) => {
                const copiedFields = { ...fields };
                copiedFields["body"] += e.nativeEvent.data;
                setFields(copiedFields);
            }}>
            
        </input>



        </form>
    )
}

export default CreatePostPage;
const Form = (props) => {

    const { setFields, fields } = props;
    const title = fields.title;
    const body = fields.body;

    return (
    <div>
        <form onSubmit={(e) => {
            e.preventDefault();
        }}>
        <input 
            placeholder="Add post title"
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
        <input 
            placeholder="Add post content"
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

export default Form;
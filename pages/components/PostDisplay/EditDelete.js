function EditDelete(props) {

    const { post } = props;


    const handleEdit = () => {

    }

    const handleDelete = () => {
        console.log("deleting");
        del(post["_id"]);
    }

    return (
        <div>
            <button onClick={handleEdit}>
                Edit
            </button>
            <button onClick={handleDelete}>
                Delete
            </button>
        </div>
    )
}

export default EditDelete;


async function del(id) {
    const data = {id: id};
    console.log(id);
    await fetch('http://localhost:3000/api/posts/delete', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((data) => data)
    
    //then render main page
}
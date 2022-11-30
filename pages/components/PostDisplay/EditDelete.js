import PopupDelete from "./DeletePopUp";

function EditDelete(props) {

    const { post } = props;


    const handleEdit = () => {

    }

    const handleDelete = () => {
        console.log("deleting");
        del(post);
    }

    return (
        <div>
            <button onClick={handleEdit}>
                Edit
            </button>
            <PopupDelete post={post}></PopupDelete>
        </div>
    )
}

export default EditDelete;



// async function del(post) {



//     const data = {_id: post["_id"]};
//     console.log(data);
//     await fetch('http://localhost:3000/api/posts/delete', {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//     })
//         .then((res) => res.json())
//         .then((data) => data);
    
//     //then render main page
// }
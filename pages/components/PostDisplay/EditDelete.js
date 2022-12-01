import PopupDelete from "./DeletePopUp";
import PopupEdit from "./EditPopUp";

function EditDelete(props) {

    const { post, setEdit } = props;

    return (
        <div id="editdeletebuttons">
            <PopupEdit post={post} setEdit={setEdit}></PopupEdit>
            <PopupDelete post={post}></PopupDelete>
        </div>
    )
}

export default EditDelete;

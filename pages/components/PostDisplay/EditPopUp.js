
export default function PopupEdit(props){
    
    const { setEdit } = props;

    return(
    <button>
        <ConfirmIt setEdit={setEdit}></ConfirmIt>
    </button>
    )
};


const ConfirmIt = (props) => {
    const { setEdit } = props;
    return (
        <p onClick={() => setEdit(true)}>Edit</p>
    )
}

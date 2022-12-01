
export default function PopupEdit(props){
    
    const { setEdit } = props;

    return(
    <button class="button">
        <ConfirmIt setEdit={setEdit}></ConfirmIt>
    </button>
    )
};


const ConfirmIt = (props) => {
    const { setEdit } = props;
    return (
        <h2 onClick={() => setEdit(true)}>Edit</h2>
    )
}

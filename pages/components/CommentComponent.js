function CommentComponent(props) {
    const { comment } = props;

    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var time = comment.date.substring(11, 16);
    var hours = parseInt(time.substring(0, 2));
    var minutes = parseInt(time.substring(3));

    var timeValue = "";
    if (hours > 0 && hours <= 12) {
        timeValue = "" + hours;
    } else if (hours > 12) {
        timeValue = "" + (hours - 12);
    } else if (hours == 0) {
        timeValue = "12";
    }

    if (minutes < 10) {
        timeValue += ":0" + minutes;
    } else {
        timeValue += ":" + minutes;
    }

    if (hours >= 12) {
        timeValue += " P.M.";
    } else {
        timeValue += " A.M.";
    }

    return(
        <div>
            <p>{comment.body}</p>
            <p class="commentdate">{months[parseInt(comment.date.substring(5, 7)) - 1]} {comment.date.substring(8, 10)}, {comment.date.substring(0, 4)}, {timeValue}</p>
        </div>
    )
}

export default CommentComponent;
function PostDate(props) {
    const { post } = props;

    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var time = post.date.substring(11, 16);
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
            <p class="commentdate">{months[parseInt(post.date.substring(5, 7)) - 1]} {post.date.substring(8, 10)}, {post.date.substring(0, 4)}, {timeValue}</p>
    )
}

export default PostDate;
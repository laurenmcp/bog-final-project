const Post = (props) => {
    const { postData } = props;

    return (
      <div>
        <h1>{postData.body}</h1>
      </div>
    );
  };
  
export async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/posts");
    const data = await res.json();
    return {
      props: {
        postData: data,
      },
    };
  }
  
  export default Post;
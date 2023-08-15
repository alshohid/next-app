import getSingleComment from "@/lib/getSingleComment";
import getSinglePost from "@/lib/getSinglePost";

const SingleBlogPost = async ({params}) =>{
    const id= params.id;
    const postPromise=  getSinglePost(id)
    const commentsPromise= getSingleComment(id)
    const [post, comments]=await Promise.all([postPromise,commentsPromise])
    return (
        <div className="container w-full h-full mx-auto bg-slate-100"> 
            <h1> {post.title} </h1>
            <h3> {post.body} </h3>
            <div  className="text-center ">
                <h1 className="font-bold text-lg"> Post Comments </h1>
                {comments.map((comment)=>{
                    return(
                        <div key={comment.id}>
                            <h2> {comment.body} </h2>

                    
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default SingleBlogPost;
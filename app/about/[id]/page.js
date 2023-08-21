 
import Comments from "@/Components/Comments";
import getSingleComment from "@/lib/getSingleComment";
import getSinglePost from "@/lib/getSinglePost";
 
import { Suspense } from "react";

const SingleBlogPost = async ({params}) =>{
    const id= params.id;
    const post= await getSinglePost(id)
    const commentsPromise= getSingleComment(id)

    // const [post, comments]=await Promise.all([postPromise,commentsPromise])
    return (
        <div className="container w-full h-full mx-auto bg-slate-100"> 
            <h1> {post.title} </h1>
            <h3> {post.body} </h3>
            <div>
                <Suspense fallback={<h1>Loading Comments  ...</h1>}>
                    <Comments commentsPromise={commentsPromise} />
                    
                 </Suspense>
                
            </div>
        </div>
    )
}
export default SingleBlogPost;
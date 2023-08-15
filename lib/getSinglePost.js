const getSinglePost = async(id) =>{
     let res= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
     if(!res.ok){
        throw new Error("Single post fetching problem")
     }
     return res.json()
}
export default getSinglePost;
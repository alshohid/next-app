const getSingleComment =async(id)=>{
         let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
         if(!res.ok){
            throw new Error("Data fetching error for comments ")
         }
         return res.json();
}
export default getSingleComment;
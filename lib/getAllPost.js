export default async function getAllPost(){
    let res= await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    if(!res.ok){
        throw new Error("Error data fetching")
    }
    let data=await res.json()
    return data;
}
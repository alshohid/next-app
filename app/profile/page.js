'use client'
import Products from "@/Components/Products";
import { useSearchParams } from "next/navigation";
const page = ()=>{
   let search= useSearchParams()
   let email= search.get('email')
    return (
        <div className='container mx-auto'>
            
            <div>
                    <h1> {email} </h1>
                <Products/>
            </div>
            
        </div>
    )
}
export default page;
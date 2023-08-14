
'use client'
import { useSearchParams } from "next/navigation";
import {useRouter} from 'next/navigation'
 

const page = ( ) => {
    const router= useRouter()
    const goTo= ()=>{
          router.push('/profile')
    }
        let res= useSearchParams()
      let name=  res.get('name')
      let email= res.get('email')
    return (
        <div>
            <h2>About Page </h2>
            <h3> {name} </h3>
            <h3>  {email} </h3>
          <button onClick={goTo}> push  </button>
        </div>
    );
};

export default page;
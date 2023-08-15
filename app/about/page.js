
 
import UserPost from "@/Components/UserPost";
 import Styles from   './about.module.css'
 

const page = ( ) => {
    
      
    return (
        <div className="container mx-auto">
            <h2 className={Styles.heading}>About Page </h2>
            <UserPost/>
        </div>
    );
};

export default page;
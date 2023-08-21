 'use client'
import Link from 'next/link'
const page = () => {
  return (
     <div className=" h-screen flex items-center justify-center">
       
      <div className="z-10 text-center">
        <h1 className="text-4xl font-semibold text-white mb-4">Welcome to Our Website</h1>
      <Link href='/about'>   <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">Go To Blog</button>
      </Link>
      </div>
    </div>
  );
};

export default page;
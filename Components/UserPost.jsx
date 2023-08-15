import getAllPost from '@/lib/getAllPost'
import Link from 'next/link'

export default async function UserPost() {
  const userPost = await getAllPost()

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-3 shadow-lg ">
        {userPost.map((post) => {
          return (
            <Link href={`/about/${post.id}`}>
              <div
                key={post.id}
                className="text-center hover:text-black hover:ring-4 border hover:bg-slate-50 px-4 py-2"
              >
                <h2 className="text-left">
                  {' '}
                  <span className="ring-1 bg-red-500 px-3 mx-2">
                    {post.id}{' '}
                  </span>{' '}
                  {post.title}{' '}
                </h2>
                <p> {post.body} </p>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

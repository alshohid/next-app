const Comments = async ({ commentsPromise }) => {
  const comments = await commentsPromise
  return (
    <div className="text-center ">
      <h1 className="font-bold text-lg"> Post Comments </h1>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <h2> {comment.body} </h2>
          </div>
        )
      })}
    </div>
  )
}
export default Comments

const Comments = ({ commentPromise }) => {
  return (
    <div className="text-center ">
      <h1 className="font-bold text-lg"> Post Comments </h1>
      {commentPromise.map((comment) => {
        return (
          <div key={comment.id}>
            <h2> {comment.body} </h2>
          </div>
        )
      })}
    </div>
  )
}

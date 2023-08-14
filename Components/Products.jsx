async function getData() {
  let data = await fetch('https://dummyjson.com/products')
  let json = await data.json()
  return json['products']
}
const Products = async () => {
  let products = await getData()
  return (
    <div className="container mx-auto">
      <h2 className="text-center text-xl"> Product page </h2>
      <div className="grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-3 shadow-md">
        {products.map((product, index) => {
          const {
            id,
            title,
            description,
            price,
            discountPercentage,
            rating,
            stock,
            brand,
            thumbnail,
          } = product

          return (
            <div key={id} className="bg-white rounded-md shadow-md p-4">
              <img
                src={thumbnail}
                alt={title}
                className="w-20 h-20 mx-auto mb-2"
              />
              <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
              <p className="text-gray-600 mb-2">${price}</p>
              <p className="text-green-500 mb-2">{stock} in stock</p>
              <p className="text-gray-500 text-sm mb-2">{description}</p>
              <p className="text-gray-700 mb-2">Brand: {brand}</p>
              <div className="flex items-center">
                <p className="text-yellow-400">{rating} stars</p>
                <svg
                  className="w-4 h-4 text-yellow-400 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0a1 1 0 0 1 .777.385l3.368 4.602 5.44.797a1 1 0 0 1 .555 1.655l-3.93 3.827.93 5.423a1 1 0 0 1-1.45 1.054L10 15.915l-4.84 2.548a1 1 0 0 1-1.45-1.054l.93-5.423-3.93-3.827a1 1 0 0 1 .555-1.655l5.44-.797L9.223.385A1 1 0 0 1 10 0z"
                  />
                </svg>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Products

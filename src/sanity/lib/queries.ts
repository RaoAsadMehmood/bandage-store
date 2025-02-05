// sanity/lib/queries.ts
export const allProductsQuery = `*[_type == "product"]{
    _id,
    title,
    price,
    description,
    slug,  
    productImage
  }`;
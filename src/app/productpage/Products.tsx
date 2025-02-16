// 'use client';
// import { useEffect, useState } from 'react';
// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';
// import Image from 'next/image';
// import Link from 'next/link';
// import { addToCart } from '../actions/action';
// import Swal from 'sweetalert2';

//  interface Product {
//     relatedProducts: any;
//     isNew: any;
//     category: any;
//     discountPercentage: number;
//     _id: string;
//     _type: "product";
//     title: string;
//     description?: string;
//     productImage?: {
//       _type: "image";
//       asset: {
//         _ref: string;
//         _type: "reference";
//       };
//     };
//     price: number;
//     tags?: string[];
//     slug?: { 
//       _type: "slug";
//       current: string;
//     };
//     stock: number;
//   }

// const ProductGrid = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   const fetchProducts = async (): Promise<void> => {
//     try {
//       // Modified query to fetch all products
//       const query = `*[_type == "product"]{
//         _id,
//         title,
//         price,
//         description,
//         "slug": slug.current,
//         productImage,
//         discountPercentage,
//         isNew,
//         stock,
//         tags,
//         category
//       }`; // Removed [0...8] limit

//       const result: Product[] = await client.fetch<Product[]>(query);
//       setProducts(result);
//     } catch (error) {
//       console.error("Products fetch error:", error);
//       Swal.fire('Error', 'Could not load products', 'error');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleAddToCart = (e: React.MouseEvent, product: Product) => {
//     e.preventDefault();
//     Swal.fire({
//       position: "top-end",
//       icon: "success",
//       title: `${product.title} added to cart`,
//       showConfirmButton: false,
//       timer: 1500,
//     });
//     addToCart(product);
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
//         {loading ? (
//           Array(8).fill(0).map((_, index) => (
//             <div 
//               key={index}
//               className="bg-gray-100 animate-pulse rounded-xl h-[500px]"
//             />
//           ))
//         ) : products
//           .filter(product => product?.slug?.current) // Ensure slug exists
//           .map((product) => (
//             <div
//               key={product._id}
//               className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col"
//             >
//               {/* Product Image with Discount Badge */}
//               <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-gray-100 relative">
//                 {product.discountPercentage > 0 && (
//                   <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm z-10">
//                     {product.discountPercentage}% OFF
//                   </div>
//                 )}
//                 <Link href={`/products/${product.slug?.current}`}>
//                   {product.productImage && (
//                     <Image
//                       src={urlFor(product.productImage).url()}
//                       alt={product.title}
//                       width={300}
//                       height={300}
//                       className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
//                     />
//                   )}
//                 </Link>
//               </div>

//               {/* Product Details */}
//               <div className="p-6 flex-1 flex flex-col">
//                 <Link href={`/products/${product.slug?.current}`}>
//                   <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 line-clamp-2">
//                     {product.title}
//                   </h2>
//                 </Link>
                
//                 {/* Price Section */}
//                 <div className="flex items-center gap-2 mb-3">
//                   <p className="text-lg font-bold text-blue-600">
//                     ${product.price.toFixed(2)}
//                   </p>
//                   {product.discountPercentage > 0 && (
//                     <p className="text-gray-400 line-through">
//                       ${(product.price / (1 - product.discountPercentage/100)).toFixed(2)}
//                     </p>
//                   )}
//                 </div>

//                 {/* Product Description */}
//                 <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
//                   {product.description}
//                 </p>

//                 {/* Add to Cart Button */}
//                 <button
//                   className="mt-auto w-full bg-blue-600 text-white py-3 px-3 rounded-md 
//                     hover:bg-blue-700 transition-colors duration-200 font-semibold text-lg"
//                   onClick={(e) => handleAddToCart(e, product)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default ProductGrid;




'use client';
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import { addToCart } from '../actions/action';
import Swal from 'sweetalert2';
import { Product } from '../../../types/products';
// import {handleAddToCart} from '../actions/action';

// 2. Component Props Type (Agar zaroorat ho)
interface ProductGridProps {
  initialProducts?: Product[]; 
}

const ProductGrid = ({ initialProducts = [] }: ProductGridProps) => {
  //  State with Explicit Type
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [loading, setLoading] = useState<boolean>(true);

  //  Async Function with Return Type
  const fetchProducts = async (): Promise<void> => {
    try {
      const query = `*[_type == "product"]{
        _id,
        title,
        price,
        description,
        "slug": slug.current,
        productImage,
        discountPercentage,
        isNew,
        stock,
        tags
      }`;
      
      const result: Product[] = await client.fetch<Product[]>(query);
      setProducts(result);
    } catch (error) {
      console.error("Products fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // 5. Event Handler with Type
  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
      e.preventDefault();
      Swal.fire({
        position: "top-right",
        icon: "success",
        title: `${product.title} added to cart`,
        showConfirmButton: false,
        timer: 3000,
      })
      addToCart(product);
    
    };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {loading ? (
          Array(8).fill(0).map((_, index) => (
            <div 
              key={index} 
              className="bg-gray-100 animate-pulse rounded-xl h-[500px]" 
            />
          ))
        ) : products
          .filter((product): product is Product => !!product?.slug)
          .map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col relative"
            >
              {/* Type Safe Conditional Rendering */}
              {product.discountPercentage > 0 && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm z-10">
                  -{product.discountPercentage}%
                </div>
              )}

              {product.isNew && (
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm z-10">
                  New
                </div>
              )}
              <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-gray-100 relative">
                <Link href={`/products/${product.slug?.current}`}>
                  <Image
                    src={urlFor(product.productImage!).url()}
                    alt={product.title}
                    fill
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </Link>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <Link href={`/products/${product.slug?.current}`}>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary line-clamp-2">
                    {product.title}
                  </h2>
                </Link>

                <div className="flex items-center gap-3 mb-3">
                  <p className="text-lg font-bold text-primary">
                    ${(product.price * (1 - product.discountPercentage/100)).toFixed(2)}
                  </p>
                  {product.discountPercentage > 0 && (
                    <p className="text-gray-400 line-through">
                      ${product.price.toFixed(2)}
                    </p>
                  )}
                </div>

                {product.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
                  {product.description}
                </p>

                <div className="flex justify-between items-center mt-auto">
                  <button
                      className="mt-auto w-full text-[#252B42] border border-[#252B42] py-3 px-3 rounded-md 
               transition-colors duration-200 font-semibold text-lg"
                      onClick={(e) => handleAddToCart(e, product)}
                    >
                      Add to Cart
                    </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductGrid;
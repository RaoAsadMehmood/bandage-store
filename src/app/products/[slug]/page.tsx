'use client';
import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { addToCart } from "@/app/actions/action";
import Swal from "sweetalert2";

interface ProductPageProps {
    params: { slug: string };
}

// Function to fetch product details
async function getProduct(slug: string): Promise<Product | null> {
    return client.fetch(
        groq`*[_type == "product" && slug.current == $slug][0] {
            _id,
            title,
            description,
            price,
            productImage,
            category->{
                title
            },
            tags,
            discountPercentage,
            isNew
        }`, { slug }
    );
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = params;
    const product = await getProduct(slug);


    if (!product) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h2 className="text-2xl font-bold text-gray-600">Product not found 😢</h2>
            </div>
        );
    }


    const discountedPrice = product.discountPercentage
        ? product.price - (product.price * product.discountPercentage) / 100
        : product.price;


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
        <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/*  Product Image */}
                <div className="relative">
                    {product.productImage && (
                        <Image
                            src={urlFor(product.productImage).url()}
                            alt={product.title}
                            width={600}
                            height={600}
                            className="rounded-lg shadow-lg"
                        />
                    )}
                    {/* "New" Badge */}
                    {product.isNew && (
                        <span className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            New
                        </span>
                    )}
                </div>

                {/* Product Details */}
                <div className="flex flex-col gap-6">
                    <h1 className="text-4xl font-bold">{product.title}</h1>

                    {/* Category */}
                    {product.category?.title && (
                        <span className="text-sm text-gray-500">Category: {product.category.title}</span>
                    )}

                    {/* Pricing */}
                    <div className="flex items-center gap-4">
                        <p className="text-2xl font-bold text-gray-900">
                            ${discountedPrice.toFixed(2)}
                        </p>
                        {product.discountPercentage > 0 && (
                            <p className="text-lg line-through text-gray-500">
                                ${product.price.toFixed(2)}
                            </p>
                        )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed">{product.description}</p>

                    {/* Tags */}
                    {product.tags && product.tags.length > 0 && (
                        <div className="flex gap-2 flex-wrap">
                            {product.tags.map((tag, index) => (
                                <span key={index} className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Add to Cart Button */}
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition"
                        onClick={(e) => handleAddToCart(e, product)}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

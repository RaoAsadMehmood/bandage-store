'use client';
import React, { useEffect, useState } from 'react';
import { Product } from '../../../types/products';
import { getCartItmes, removeFromCart, updateCartQuantity } from '../actions/action';
import Swal from 'sweetalert2';
import { FiTrash2 } from 'react-icons/fi';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Navbar1 from '../components/Navbar1';
import Footer from '../components/Footer';

const CartPage = () => {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    useEffect(() => {
        setCartItems(getCartItmes());
    }, []);

    const handleRemove = (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will not be able to recover this product!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, remove it!",
            cancelButtonText: "No, keep it",
        }).then((result) => {
            if (result.isConfirmed) {
                removeFromCart(id);
                setCartItems(getCartItmes());
                Swal.fire("Product removed!", "Your product has been removed.", "success");
            }
        });
    };

    const handleQuantityChange = (id: string, quantity: number) => {
        updateCartQuantity(id, quantity);
        setCartItems(getCartItmes());
    };

    const handleIncrement = (id: string) => {
        const product = cartItems.find(item => item._id === id);
        if (product) {
            handleQuantityChange(id, product.stock + 1);
        }
    };

    const handleDecrement = (id: string) => {
        const product = cartItems.find(item => item._id === id);
        if (product && product.stock > 1) {
            handleQuantityChange(id, product.stock - 1);
        }
    };

    const calculatedTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.stock, 0);
    };

    return (

        <>
        <Header />
        <Navbar1 />
            <div className="p-4 max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold mb-4 text-[#252B42]">Your Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <p className="text-[#737373] text-sm">Seems like your cart is empty, but don't worry, let's add some products!
                        <Link href="/productpage" className='font-bold text-[#737373]'> Shop Now!</Link>
                    </p>
                ) : (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        {cartItems.map((item) => (
                            <motion.div
                                key={item._id}
                                className="flex items-center justify-between p-4 border-b"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex items-center space-x-4">
                                    {item.productImage && (
                                        <Image
                                            src={urlFor(item.productImage).url()}
                                            alt={item.title}
                                            className="w-16 h-16 object-cover rounded"
                                            width={500}
                                            height={500}
                                        />
                                    )}
                                    <div>
                                        <h2 className="text-lg font-semibold text-[#252B42]">{item.title}</h2>
                                        <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-lg">
                                    <button
                                        className="p-2 bg-gray-200 rounded hover:bg-gray-300 transition-all"
                                        onClick={() => handleDecrement(item._id)}
                                    >
                                        <FaMinus size={12} />
                                    </button>
                                    <span className="w-8 text-center font-bold text-lg">{item.stock}</span>
                                    <button
                                        className="p-2 bg-gray-200 rounded hover:bg-gray-300 transition-all"
                                        onClick={() => handleIncrement(item._id)}
                                    >
                                        <FaPlus size={12} />
                                    </button>
                                </div>
                                <button
                                    className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition-all"
                                    onClick={() => handleRemove(item._id)}
                                >
                                    <FiTrash2 size={16} />
                                </button>
                            </motion.div>
                        ))}
                        <div className="flex justify-between items-center mt-4">
                            <h2 className="text-xl font-bold">Total: ${calculatedTotal().toFixed(2)}</h2>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all"
                                onClick={() => Swal.fire("Success", "Your order has been successfully processed", "success")}
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>

            <Footer />
        </>
    );
};

export default CartPage;

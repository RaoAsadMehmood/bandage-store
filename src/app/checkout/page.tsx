'use client';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Product } from '../../../types/products';
import { getCartItmes } from '@/app/actions/action';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Header from '../components/Header';
import Navbar1 from '../components/Navbar1';
import { ChevronRight } from 'lucide-react';
import Swal from 'sweetalert2';
import { client } from '@/sanity/lib/client';

const Checkout = () => {


    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [discount, setDiscount] = useState<number>(0);
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        zipCode: "",
        city: "",
    })

    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        address: false,
        zipCode: false,
        city: false,
    })

    useEffect(() => {
        setCartItems(getCartItmes())
        const appliedDiscount = localStorage.getItem("discount")
        if (appliedDiscount) {
            setDiscount(Number(appliedDiscount))
        }

    }, [])


    const subTotal = cartItems.reduce((total, item) =>
        total + item.price * item.stock, 0)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.id]: e.target.value
        })
    }

    const validateForm = () => {
        const errors = {
            firstName: !formValues.firstName,
            lastName: !formValues.lastName,
            email: !formValues.email,
            phone: !formValues.phone,
            address: !formValues.address,
            zipCode: !formValues.zipCode,
            city: !formValues.city,
        };
        setFormErrors(errors);
        return Object.values(errors).every((error) => !error)
    }

    const handlePlaceOrder = async () => {
        if (validateForm()) {
            Swal.fire({
                title: "Processing your order...",
                text: "Please wait a moment ✋ ",
                icon: "info",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Proceed",
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem("appliedDiscount");
                    Swal.fire("Success", "Your order has been successfully placed", "success");
                }
            })
        } else {
            Swal.fire("Error", "Please fill in all the required fields", "error");
        }

        const orderData = {
            _type: "order",
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            email: formValues.email,
            phone: formValues.phone,
            address: formValues.address,
            zipCode: formValues.zipCode,
            city: formValues.city,
            cartItems: cartItems.map(item => ({
                _type: "reference",
                _ref: item._id,
            })),
            total: subTotal - discount,
            discount: discount,
            orderData: new Date().toISOString
        };

        try {
            await client.create(orderData)
            localStorage.removeItem("appliedDiscount")
        } catch (error) {
            console.log("Error creating order:", error);

        }

    }


    return (
        <>
            <Header />
            <Navbar1 />
            <div className="min-h-screen bg-gray-50 py-8 flex justify-center items-start">
                {/* Main Container */}
                <div className="max-w-7xl w-full mx-4 bg-white rounded-xl shadow-lg p-8">
                    {/* Navigation */}
                    <nav className="flex items-center gap-2 text-gray-600 mb-8">
                        <Link href="/cart" className="hover:text-[#23A6F0]">Cart</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-gray-400">Checkout</span>
                    </nav>

                    {/* Flex Container for Billing + Order Summary */}
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Billing Form Section */}
                        <div className="lg:w-2/3">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Billing Information</h2>

                            <form onSubmit={(e) => { e.preventDefault(); handlePlaceOrder(); }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* First Name */}
                                <div className="space-y-1">
                                    <label className="block text-sm font-medium text-gray-700">First Name *</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className={`w-full p-3 border rounded-lg ${formErrors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Enter your first name"
                                        value={formValues.firstName}
                                        onChange={handleInputChange}
                                    />
                                    {formErrors.firstName && <p className="text-red-500 text-sm">First name required</p>}
                                </div>

                                {/* Last Name */}
                                <div className="space-y-1">
                                    <label className="block text-sm font-medium text-gray-700">Last Name *</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className={`w-full p-3 border rounded-lg ${formErrors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Enter your last name"
                                        value={formValues.lastName}
                                        onChange={handleInputChange}
                                    />
                                    {formErrors.lastName && <p className="text-red-500 text-sm">Last name required</p>}
                                </div>

                                {/* Email */}
                                <div className="space-y-1">
                                    <label className="block text-sm font-medium text-gray-700">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className={`w-full p-3 border rounded-lg ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Enter a valid Email address"
                                        value={formValues.email}
                                        onChange={handleInputChange}
                                    />
                                    {formErrors.email && <p className="text-red-500 text-sm">Valid email required</p>}
                                </div>

                                {/* Phone */}
                                <div className="space-y-1">
                                    <label className="block text-sm font-medium text-gray-700">Phone *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className={`w-full p-3 border rounded-lg ${formErrors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Enter your active phone number"
                                        value={formValues.phone}
                                        onChange={handleInputChange}
                                    />
                                    {formErrors.phone && <p className="text-red-500 text-sm">Phone number required</p>}
                                </div>

                                {/* Address */}
                                <div className="md:col-span-2 space-y-1">
                                    <label className="block text-sm font-medium text-gray-700">Address *</label>
                                    <input
                                        type="text"
                                        id="address"
                                        className={`w-full p-3 border rounded-lg ${formErrors.address ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Enter your street address"
                                        value={formValues.address}
                                        onChange={handleInputChange}
                                    />
                                    {formErrors.address && <p className="text-red-500 text-sm">Address required</p>}
                                </div>

                                {/* City */}
                                <div className="space-y-1">
                                    <label className="block text-sm font-medium text-gray-700">City *</label>
                                    <input
                                        type="text"
                                        id="city"
                                        className={`w-full p-3 border rounded-lg ${formErrors.city ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Enter your city"
                                        value={formValues.city}
                                        onChange={handleInputChange}
                                    />
                                    {formErrors.city && <p className="text-red-500 text-sm">City required</p>}
                                </div>

                                {/* Zip Code */}
                                <div className="space-y-1">
                                    <label className="block text-sm font-medium text-gray-700">Zip Code *</label>
                                    <input
                                        type="text"
                                        id="zipCode"
                                        className={`w-full p-3 border rounded-lg ${formErrors.zipCode ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Enter your zip code"
                                        value={formValues.zipCode}
                                        onChange={handleInputChange}
                                    />
                                    {formErrors.zipCode && <p className="text-red-500 text-sm">Zip code required</p>}
                                </div>
                            </form>
                        </div>

                        {/* Order Summary Section */}
                        <div className="lg:w-1/3 bg-gray-50 p-6 rounded-xl shadow-inner">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>

                            {/* Cart Items */}
                            <div className="space-y-4 mb-6">
                                {cartItems.map((item) => (
                                    <div key={item._id} className="flex items-center gap-4 p-3 bg-white rounded-lg">
                                        <div className="w-16 h-16 relative">
                                            <Image
                                                src={item.productImage ? urlFor(item.productImage).url() : ''}
                                                alt={item.title}
                                                fill
                                                className="object-cover rounded-md"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-medium">{item.title}</h3>
                                            <p className="text-sm text-gray-500">Quantity: {item.stock}</p>
                                        </div>
                                        <p className="font-semibold">${(item.price * item.stock).toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Price Breakdown */}
                            <div className="space-y-3 border-t pt-4">
                                <div className="flex justify-between">
                                    <span>Subtotal:</span>
                                    <span>${subTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-red-500">
                                    <span>Discount:</span>
                                    <span>-${discount.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between font-bold border-t pt-3">
                                    <span>Total:</span>
                                    <span>${(subTotal - discount).toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Place Order Button */}
                            <button
                                onClick={handlePlaceOrder}
                                className="w-full mt-6 bg-[#23A6F0] text-white py-3 rounded-lg hover:bg-[#1e8ec7] transition-colors"
                            >
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout;

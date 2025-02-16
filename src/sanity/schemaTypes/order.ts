const orderSchema = {
    name: "order",
    title: "Order",
    type: "document",
    fields: [
        {
            name: "firstName",
            title: "First Name",
            type: "string"
        },
        {
            name: "lastName",
            title: "Last Name",
            type: "string"
        },
        {
            name: "email",
            title: "Email",
            type: "string"
        },
        {
            name: "phone",
            type: "string", // Changed from number to string
            title: "Phone"
        },
        {
            name: "address",
            title: "Address",
            type: "string"
        },
        {
            name: "city",
            title: "City",
            type: "string"
        },
        {
            name: "zipCode",
            title: "Zip Code",
            type: "string"
        },
        {
            name: "cartItems",
            title: "Cart Items",
            type: "array",
            of: [{ type: "reference", to: { type: "product" } }]
        },
        {
            name: "total",
            title: "Total Price",
            type: "number"
        },
        {
            name: "discount",
            title: "Discount Applied",
            type: "number",
            initialValue: 0
        },
        {
            name: "orderDate",
            title: "Order Date",
            type: "datetime",
            initialValue: new Date().toISOString()
        },
        {
            name: "status",
            title: "Order Status",
            type: "string",
            options: {
                list: [
                    { title: "Pending", value: "pending" },
                    { title: "Success", value: "success" },
                    { title: "Dispatched", value: "dispatched" }
                ],
                layout: "radio"
            },
            initialValue: "pending"
        }
    ]
};
export default orderSchema;
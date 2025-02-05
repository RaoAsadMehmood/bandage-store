import { defineType } from "sanity";

export const product = defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                

            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: "description",
            type: "text",
            title: "Description",
        },
        {
            name: "productImage",
            type: "image",
            title: "Product Image"
        },
        {
            name: "price",
            type: "number",
            title: "Price",
        },
        {
            name: "tags",
            type: "array",
            title: "Tags",
            of: [{ type: "string" }]
        },
        {
            name: "discountPercentage",
            type: "number",
            title: "Discount Percentage",
        },
        {
            name: "isNew",
            type: "boolean",
            title: "New Badge",
        },
        {
            name: "stock",
            type: "number",
            title: "Stock Quantity",
            initialValue: 10, // Default stock
        }
        
    ]
});

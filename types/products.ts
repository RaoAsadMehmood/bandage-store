export interface Product {
    relatedProducts: any;
    isNew: any;
    category: any;
    discountPercentage: number;
    _id: string;
    _type: "product";
    title: string;
    description?: string;
    productImage?: {
      _type: "image";
      asset: {
        _ref: string;
        _type: "reference";
      };
    };
    price: number;
    tags?: string[];
    slug?: { 
      _type: "slug";
      current: string;
    };
    stock: number;
  }
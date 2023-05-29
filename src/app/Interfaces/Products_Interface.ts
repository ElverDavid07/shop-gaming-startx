export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }

  export interface ProductsGamer {
    name: string
    description:string
    image:string,
    price:string,
    category:string

}
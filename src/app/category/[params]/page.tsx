"use client";
import { useParams } from "next/navigation";
import { Rating, Button, Tooltip } from "flowbite-react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { Products } from "@utils/products";
import Img from "next/image";

const Categories = () => {
 const { params } = useParams();
 console.log(params);
 const TypeCategory = Products.filter((product) => product.category === params);

 return (
  <div className=" mt-20">
   {TypeCategory.length === 0 ? (
    <div className="text-center mt-32">
     <Img src="/warning.png" alt="warning icon" width={250} height={250} className="mx-auto" />
     <span className="text-4xl font-inter block">Sin productos!!!</span>
    </div>
   ) : (
    <div className="mx-4 lg:mx-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 lg:gap-y-5">
     {TypeCategory?.map(({ description, image, price, name }, i) => (
      <div key={i} className="bg-white py-2 px-2 rounded-lg lg:w-10/12 border shadow">
       <h2 className="text-center font-medium text-lg mb-3">{name} </h2>
       <Img src={image} alt={name} width={250} height={250} className="mx-auto my-5" />
       <p className="font-inter text-base text-gray-700">{description} </p>
       <div className=" flex justify-between items-center">
        <span className=" my-2 text-lg font-inter block">${price} COL </span>
        <Rating>
         <Rating.Star />
         <Rating.Star />
         <Rating.Star />
         <Rating.Star />
         <Rating.Star />
        </Rating>
       </div>
       <div className="flex items-center justify-between mt-2">
        <Button className="bg-sky-500 hover:bg-sky-600">Comprar ahora</Button>
        <Tooltip content="Agregar al carrito" style="light" className="hidden lg:block">
         <div className="border lg:border-none mr-0 lg:mr-4  p-2 rounded-lg flex items-center justify-center cursor-pointer">
          <span className="lg:hidden">Agregar al carrito </span>
          <RiShoppingCart2Line className="text-3xl  cursor-pointer" />
         </div>
        </Tooltip>
       </div>
      </div>
     ))}
    </div>
   )}
  </div>
 );
};

export default Categories;

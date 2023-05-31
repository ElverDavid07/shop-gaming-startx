"use client";
import { DataCategory } from "@/Utils/Categories";
import { useRouter } from "next/navigation";
import Img from 'next/image'

const Category = () => {
 const router = useRouter();

 const submitCategory = (name: string) => {
  router.push(`/category?category=${name}`);
 };
 return (
  <div className="my-20">
   <h2 className="text-3xl font-bold tracking-tighter text-indigo-600">Categorias</h2>
   <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
    {DataCategory.map(({ category, image, name }, i) => (
     <div
      key={i}
      className="bg-white py-5 px-2 rounded-md border cursor-pointer hover:scale-105 transition-all ease-in"
      onClick={() => submitCategory(name)}
     >
      <Img src={image} alt={`image ${name}`} width={450} height={450} className="mx-auto" />
      <span className="block text-center font-inter text-lg mt-2">{category} </span>
     </div>
    ))}
   </div>
  </div>
 );
};

export default Category;

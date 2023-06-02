import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Star = (props: { Rating: number }) => {
 const { Rating } = props;
 return (
  <div className="flex items-center text-yellow-400">
   {Rating === 4 ? (
    <>
     <BsStarFill />
     <BsStarFill />
     <BsStarFill />
     <BsStarFill />
     <BsStar />
    </>
   ) : null}

   {Rating === 5 ? (
    <>
     <BsStarFill />
     <BsStarFill />
     <BsStarFill />
     <BsStarFill />
     <BsStarFill />
    </>
   ) : null}

   {Rating === 4.5 ? (
    <>
     <BsStarFill />
     <BsStarFill />
     <BsStarFill />
     <BsStarFill />
     <BsStarHalf />
    </>
   ) : null}
  </div>
 );
};

export default Star;

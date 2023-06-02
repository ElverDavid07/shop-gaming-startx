import {HiUserGroup} from 'react-icons/hi'

const Footer = () => {
 return (
  <>
   <footer className="w-full h-auto bg-gray-200  mt-32 text-center">
    <h2 className="py-5 lg:text-3xl text-2xl font-extrabold text-sky-500 flex items-center justify-center gap-x-1">
     Integrantes de el grupo <HiUserGroup/>
    </h2>
    <div className="font-rubik  text-lg flex flex-col gap-y-3">
     <span>Jader luis Berrio Lopez</span>
     <span>Héctor Manuel Zambrano cordero</span>
     <span>Cristian Enrique Pérez Movilla</span>
     <span>Sharon daniela cuartas rovira</span>
     <span>Desiret patricia medrano porto</span>
    </div>
   </footer>
  </>
 );
};

export default Footer;

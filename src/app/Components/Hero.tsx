import Img from 'next/image'

const Hero = () => {
 return (
  <section className="bg-gray-200">
   <div className="Hero-content">
    <div>
     <h1 className="Hero-title">
     Gaming <span className="Text-neon">STARTX</span> Potencia tu juego con productos de primera calidad
     </h1>
     <p className="Hero-subtitle">
      Gaming STARTX Tu tienda gamer de confianza. Productos de calidad para llevar tu experiencia
      de juego al siguiente nivel. Únete a nuestra comunidad apasionada y descubre lo mejor en
      tecnología y accesorios gaming
     </p>
    </div>
    <Img src="/mockup.png" width={675} height={450} alt="mockup hero" className="mx-auto" priority />
   </div>
  </section>
 );
};

export default Hero;

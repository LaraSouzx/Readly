import Navbar from "./Navbar";
const BlackSection = () => {
    return(
        <section className="bg-black text-white rounded-3xl mx-4 my-6 overflow-hidden">
               <Navbar/>
            <div className="max-w-6xl mx-auto px-6 py-16 text-center"> 
                 <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 text-transparent bg-clip-text">
                    Olá, Lara<br/>Continue sua jornada de Leitura
                </span>
            </div>
        </section>
    );
};

export default BlackSection;
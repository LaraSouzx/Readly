import Navbar from "./Navbar";
const BlackSection = () => {
    return(
        <section className="bg-black text-white rounded-3xl mx-4 my-6 overflow-hidden">
               <Navbar/>
            <div className="max-w-6xl mx-auto px-2 pt-2 pb-1 text-center"> 
                 <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 text-transparent bg-clip-text font-semibold text-4xl">
                    Olá, Lara<br/>Continue sua jornada de Leitura
                </span>
            </div>
        </section>
    );
};

export default BlackSection;
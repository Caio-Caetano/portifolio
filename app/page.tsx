import { MapPin, MessageCircle, Mail, Linkedin, Github, Download, PhoneOutgoing } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex h-screen justify-center items-center gap-[30px] font-[family-name:var(--kanit-font)]">
      {/* Info Card */}
      <div className="flex flex-col justify-center items-center bg-blue rounded-3xl shadow-3xl w-[300px] h-5/6 p-30">
        <div className="w-[200px] h-[200px] rounded-full bg-secondary border-3 border-white mb-5 overflow-hidden">
          <Image
            src="/memoji-1.png"
            width={200}
            height={200}
            alt="Me"
          />
        </div>
        <span className="text-white text-[32px] font-semibold">Caio Caetano</span>
        <hr className="bg-white w-2/5 m-2.5" />
        <span className="text-white text-[15px] mb-30">Software Engineer</span>
        <div>
          <div className="flex items-center text-white leading-none mb-5">
            <MapPin size={24} className="mr-2.5"/>
            <div>
              <p>Sao Jose dos Campos</p>
              <small>Sao Paulo - Brazil</small>
            </div>
          </div>
          <div className="flex items-center text-white leading-none mb-5">
            <MessageCircle size={24} className="mr-2.5"/>
            <div>
              <a className='relative inline cursor-pointer before:bg-white before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100' href="https://wa.me/5512981351855" target='_blank'><p>+55 12 98135-1855</p></a>
            </div>
          </div>
          <div className="flex items-center text-white leading-none mb-5">
            <Mail size={24} className="mr-2.5"/>
            <div>
              <p>caio.lcaetano@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="flex text-white">
          <a className="transition-all duration-200 hover:scale-125" href="https://www.linkedin.com/in/caio-caetano/" target='_blank'><Linkedin size={24} className="mr-2.5"/></a>
          <a className="transition-all duration-200 hover:scale-125" href="https://github.com/Caio-Caetano" target='_blank'><Github size={24} className="mr-2.5"/></a>
        </div>
        <button className="group relative mt-auto overflow-hidden mb-2.5 h-12 w-full bg-gradient-to-r from-light to-white rounded-full text-primary font-medium transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-dark before:rounded-full before:duration-100 before:ease-linear hover:bg-white hover:text-white hover:before:border-[25px]">
          <span className="flex justify-center items-center relative z-10"><Download size={24} className="mr-2.5 group-hover:animate-bounce"/>Download CV</span>
        </button>
        <button className="group relative overflow-hidden h-12 w-full bg-gradient-to-r from-dark to-primary rounded-full text-white font-medium transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-gradient-to-r before:from-light before:to-white before:duration-300 before:ease-out hover:text-primary hover:before:h-40 hover:before:w-full">
          <span className="flex justify-center items-center relative z-10"><PhoneOutgoing size={24} className="mr-2.5 group-hover:animate-shake"/>Get in touch</span>
        </button>
      </div>
      {/* Main Card */}
      <div className="bg-light rounded-3xl shadow-3xl w-[990px] h-5/6">
      
      </div>
    </div>
  );
}

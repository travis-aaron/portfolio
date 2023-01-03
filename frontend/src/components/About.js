import { useState, useEffect, useRef } from 'react';
import { Python, Javascript, ReactJs, Postgresql,
        Nodedotjs, Django, Bootstrap, Linux }from '@icons-pack/react-simple-icons';


import { useInView } from "framer-motion"


function About() {

    const ref = useRef(null)
    const isInView = useInView(ref)


    const [backendAbout, setBackendAbout] = useState([]);

    const fetchAbout = () => {
        return fetch('http://localhost:8000/api/about/')
        .then((res) => res.json())
        .then((data) => setBackendAbout(data));    
      }
      
      useEffect(() =>{
        fetchAbout();
      },[])


    return (
      <span
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
    >
        <section name="about" className='About py-64' ref={ref}>
            <div>
            <div id='tiles'></div>
            <div className="name text-7xl text-neutral-300 mt-6 text-center font-bold font-title">Travis Gooden</div>
            <div className="text-small text-center text-slate-500 font-body font-medium">Software & Web Developer</div>
            <div className="mx-3 mt-6 mb-3">
                <div className="text-2xl text-white font-bold font-body text-center mb-3">
            About
                </div>
                <div className="flex flex-wrap justify-center">  
                {backendAbout.map((backendObj, index) =>(
                
                <div key={backendObj.id} className="justify-center py-8 px-8 max-w-sm mx-3 bg-transparent/20 rounded-xl shadow-lg space-y-2 sm:py-4 border border-transparent/40 sm:space-y-0">
                  <p className="text-slate-500 font-normal font-body">
                  {backendObj.about}
                  </p>
                  <br />
                  <p className="text-slate-500 font-bold font-body">My current most used languages and technologies are:</p>
                  <div className="grid grid-cols-[15%_35%_15%_35%] pt-3">
                  <div>  
                    <div className="mt-1"><Python color='#166534' size={24} /></div>
                    <div className="mt-2"><Javascript color='#166534' size={24}/></div>
                    <div className="mt-2"><Postgresql color='#166534' size={24}/></div>
                    <div className="mt-2"><Nodedotjs color='#166534' size={24}/></div>
                  </div>  
                    <div className="font-body text-white text-sm">
                      <p className="mt-1">Python</p>
                      <p className="mt-3">JavaScript</p>
                      <p className="mt-3">PostgresQl</p>
                      <p className="mt-3">NodeJS</p>
                    </div>
                    <div>
                      <div className="mt-1"><Django color='#166534' size={24}/></div>
                      <div className="mt-2"><ReactJs color='#166534' size={24}/></div>
                      <div className="mt-2"><Bootstrap color='#166534' size={24}/></div>
                      <div className="mt-2"><Linux color='#166534' size={24}/></div>
                    </div>
                    <div className="font-body text-white text-sm">
                      <p className="mt-1">Django</p>
                      <p className="mt-3">React</p>
                      <p className="mt-3">Bootstrap</p>
                      <p className="mt-3">Linux</p>
                    </div>
                  </div>
                
                </div>  
                ))}
              </div>
              </div>
          </div>
        </section>
        </span>

    );
}

export default About;
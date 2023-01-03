import { useState, useEffect, useRef } from 'react';
import { useInView } from "framer-motion"


function Certifications() {

    const ref = useRef(null)
    const isInView = useInView(ref)


    const [backendCerts, setBackendCerts] = useState([]);

    const fetchCerts = () => {
      return fetch('http://localhost:8000/api/certification/')
      .then((res) => res.json())
      .then((data) => setBackendCerts(data));
    }
  
    useEffect(() =>{
      fetchCerts();
  
    },[])

    return (
        <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        <section name="certs" className="Cert py-64" ref={ref}>
            <div className="mx-3 mt-6 mb-3">
                <div className="text-2xl text-white font-bold font-body text-center mb-3">
                Certifications
                </div>
                <div className="flex flex-wrap justify-center mt-3">        
                {backendCerts && backendCerts.length > 0 && backendCerts.map((backendObj, index) =>(
                    <div key={backendObj.id} className="py-8 px-8 max-w-sm mx-3 mb-3 my-3 bg-transparent/20 rounded-xl shadow-lg sm:py-4 border border-transparent/40 sm:space-y-0">
                        <img className="flex object-top sm:mx-0 sm:shrink-0" src={backendObj.cert_image} alt="Screenshot"></img> 
                        <div className="text-center space-y-2 sm:text-center font-body">
                            <div className="space-y-0.5">
                            <p className="text-lg text-white font-semibold">
                            {backendObj.cert_name}
                            </p>
                            <p className="text-slate-500 font-normal">
                            {backendObj.cert_description}
                            </p>
                            </div>
                            <form>
                              <a href={backendObj.cert_link} className="mx-1 px-4 py-1 text-sm text-green-500 font-semibold rounded-full border border-green-500 hover:text-white hover:bg-green-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">Verify Certificate</a>
                            </form>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
        </span>
    );
}

export default Certifications
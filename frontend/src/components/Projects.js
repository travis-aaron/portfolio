import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion"
import '../index.css'

function Projects() {

    const ref = useRef(null)
    const isInView = useInView(ref)

    const [backendProjects, setBackendProjects] = useState([]);

    const fetchProjects = () => {
        return fetch('http://localhost:8000/api/project/?ordering=-id')
          .then((res) => res.json())
          .then((data) => setBackendProjects(data));
      }
      
      useEffect(() =>{
        fetchProjects();
      },[])

    return (
        <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        <section name="projects" className="Projects py-64" ref={ref}>
            <div className="mx-3 mt-6 mb-3">
                <div className="text-2xl text-white font-bold font-body text-center mb-3">
                Projects
                </div>
                <div className="flex flex-wrap justify-center">  
                {backendProjects && backendProjects.length > 0 && backendProjects.map((backendObj, index) =>(
                    /* Card */
                    <div key={backendObj.id} className="space-y-2 space-x-reverse py-8 px-8 max-w-sm mx-3 my-3 bg-transparent/20 rounded-xl shadow-lg sm:py-2 border border-transparent/40 sm:space-y-0">
                        <img className="flex object-top sm:mx-0 sm:shrink-0" 
                        src={backendObj.image} 
                        onMouseOver={e => (e.currentTarget.src = `${backendObj.animate_image}`)}
                        onMouseOut={e => (e.currentTarget.src = `${backendObj.image}`)} 
                        alt="Screenshot"></img>
                            <div className="text-center space-y-2 sm:text-center font-body">
                            <div className="space-y-0.5">
                                <p className="text-lg text-white font-semibold">
                                {backendObj.project_name}
                                </p>
                                <p className="text-slate-500 font-normal">
                                {backendObj.project_description}
                                </p>
                                <p className="font-body font-extralight text-sm text-white py-3">
                                {backendObj.project_tags}
                                </p>
                            </div>
                            {backendObj.github_link == "http://www.github.com" ? null : <a href={backendObj.github_link} className="mx-1 px-4 py-1 text-sm text-green-500 font-semibold rounded-full border border-green-500 hover:text-white hover:bg-green-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">Github</a> }
                                
                            {backendObj.live_link == "http://www.github.com" ? null : <a className="mx-1 px-4 py-1 text-sm text-green-500 font-semibold rounded-full border border-green-500 hover:text-white hover:bg-green-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">Live Website</a>}
                            </div>
                    </div>

                ))}
                </div>
            </div>
        </section>
        </span>

    );
};

export default Projects;

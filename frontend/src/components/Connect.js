    import React, {useRef} from 'react';
    import { useInView } from "framer-motion"
    import { Devdotto, Mastodon, Gmail, Linkedin, Github } from '@icons-pack/react-simple-icons';
    import '../index.css'

    function Connect() {

        const ref = useRef(null)
        const isInView = useInView(ref)

        return (
            <span
            style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
            >
                <section name="connect" className='Connect py-64' ref={ref}>
                <div className="mx-3 mt-6 mb-3">

                <div className="text-2xl text-white font-bold font-body text-center mb-3">
                    Connect with me
                    </div>
                    <div className="flex flex-wrap justify-center mt-3">        

                    <div className='flex justify-center py-8 px-8 max-w-sm mx-3 bg-transparent/20 rounded-xl shadow-lg space-y-2 sm:py-4 border border-transparent/40 sm:space-y-0'>
                        <div className='py-6 px-6'>
                            <button className="icon">
                                <Gmail  />
                            </button>
                        </div>
                        <div className='py-6 px-6'>    
                            <button className="icon">     
                                <Linkedin />
                            </button>
                        </div>
                        <div className='py-6 px-6'> 
                            <button className='icon'>   
                                <Github />
                            </button>
                        </div>
                        <div className='py-6 px-6'>  
                            <button className='icon'>   
                              <Devdotto />
                            </button>
                        </div>
                        <div className='py-6 px-6'>  
                            <button className='icon'>   
                                <Mastodon />
                            </button>
                        </div>    
                    </div>
                    </div>
                    </div>
                </section>
                </span>
        );
    }

    export default Connect;
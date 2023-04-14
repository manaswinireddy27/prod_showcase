import React,{useRef,useEffect} from "react";
import styles from "../../styles/first.module.css";
import Image from "next/image";
import gsap from "gsap/dist/gsap";
import { Power0 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


const Land = () => {
    gsap.registerPlugin(ScrollTrigger);
    const entire=useRef();
    const animate=useRef();
    const animate2=useRef();
    
   useEffect(() => {
    let t1 = gsap.timeline({
      defaults: { duration: 3, ease: Power0.easeInOut },
      scrollTrigger: {
        trigger: entire.current,
        start: "top center",
       // end: "bottom bottom",
        //scrub:true,
        toggleActions: "restart restart restart restart",
      },
    });
    t1.fromTo(
        animate.current,{x:-600,opacity:0,duration:3},{x:0,opacity:1,duration:3,ease:Power0.easeInOut},
     );
    t1.fromTo(
        animate2.current,{x:600,opacity:0,duration:3},{x:0,opacity:1,duration:3,ease:Power0.easeInOut}
     );
  }, []);

    return (
        <div className={styles.container} ref={entire}>
            <div className={styles.inner_container}>
            <div className={styles.container2}> 
                <div>
                    <Image ref={animate2} className={styles.img1} src='/apple_logo.png' width={450} height={550}  />
                </div>
                <div className={styles.div2}>
                    <p>APPLE</p>
                    <p>PRESENTS</p>
                    <p>NEW</p>
                    <p>iPHONE 14 </p>
                    <p> PRO</p>
                </div>
            </div>
                <Image ref={animate} className={styles.img2} src='/1image.png' width={570} height={650} />
            </div>
        </div>
    );
};

export default Land;
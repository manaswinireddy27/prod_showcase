import React,{useRef,useEffect} from 'react';
import styles from "../../styles/third.module.css";
import Image from 'next/image';
import gsap from 'gsap/dist/gsap';
import { Bounce,Power0 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Third = () => {
    gsap.registerPlugin(ScrollTrigger);
    const animate=useRef();
    const entire= useRef();

    useEffect(() => {
        let t1 = gsap.timeline({
          defaults: { duration: 3, ease: Power0.easeInOut },
          scrollTrigger: {
            trigger: entire.current,
            start: "top 80%",
            end: "80% 80%",
            scrub: true,
          },
        });
        t1.fromTo(
            animate.current,{y:-400,opacity:0,duration:3},{y:0,opacity:1,duration:3,ease:Bounce.easeInOut}
         );
      }, []);

    return (
        <div className={styles.container} ref={entire}>
            <div className={styles.inner_container}> 
                <div className={styles.div2}>
                    <p>Available in different colors</p>
                </div>
                <Image ref={animate} className={styles.img1} src='/iphone_series.png' width={570} height={570} />
            </div>
        </div>
    )
};

export default Third;
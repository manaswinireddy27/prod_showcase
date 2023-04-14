import React,{useRef,useEffect} from 'react';
import styles from "../../styles/second.module.css";
import Image from 'next/image';
import gsap from 'gsap/dist/gsap';
import { Power0 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Second = () => {
    const animate1 = useRef();
    const animate2 = useRef();
    const entire = useRef();
    gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let t1 = gsap.timeline({
      defaults: { duration: 5, ease: Power0.easeInOut },
      scrollTrigger: {
        trigger: entire.current,
        start: "top center",
        end: "bottom bottom",
        scrub:true,
      },
    });
    t1.fromTo(animate1.current, { x: 170, opacity: 0 }, { x: 0, opacity: 1 });
    t1.fromTo(animate2.current, { x: -150, opacity: 0 }, { x: 0, opacity: 1 });
  }, []);
    return (
        <div className={styles.container} ref={entire}>
            <div className={styles.inner_container}>
                <div className={styles.container2}> 
                    <div>
                        <Image ref={animate1} className={styles.img1} src='/side_view.png' width={200} height={550}  />
                    </div>
                    <div className={styles.div2}>
                        <p>A16 BIONIC CHIP</p>
                        <p>Nearly 16 billion transistors</p>
                        <p>17 trillion operations per second</p>
                        
                    </div>
                </div>
                <Image ref={animate2} className={styles.img2} src='/a16_bionic.png' width={563} height={301} />
            </div>
        </div>
    )
};

export default Second;

import './App.css'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);


export default function Navbar() {
  const container = useRef();
  const menuBtn = useRef();
  const closeBtn = useRef();



    useGSAP(
      () => {
        { var tl = gsap.timeline() }

        tl.to('#full', {
          top: -10,
          delay: 0.3,
          duration: 0.59
        })


        tl.from('#full h4', {
          x: 150,
          duration: 0.69,
          stagger: 0.22,
          opacity: 0
        })

        tl.from('#full i, full h4', {
          opacity: 0
        })

        tl.pause()

        menuBtn.current.addEventListener('click', () => {
          tl.play();
        })

        closeBtn.current.addEventListener('click', () => {
          tl.reverse();
          // tl.reverse().timeScale(2);
        }
        )

      }, { scope: container })


    return (
      <div>
        <div id="main" ref={container}>
          <nav>
            <h2>Megrage</h2>
            {/* <!-- <i className="ri-menu-3-fill" id="menuBtn"></i> --> */}
            <h5 ref={menuBtn} id="menuBtn" >MENU</h5> {/*onClick={toggleMenu}*/}
          </nav>
          <div id="full">
            <h4 className="nav-text">// HOME</h4>
            <h4 className="nav-text">// ABOUT</h4>
            <h4 className="nav-text">// EVENTS</h4>
            <h4 className="nav-text">// SPONSOR</h4>
            <h4 className="nav-text">// TEAM</h4>
            <h4 className="nav-text">// MEMORIES</h4>


            {/* <!-- <i className="ri-close-line"></i> --> */}
            <h5 ref={closeBtn} >CLOSE</h5>
          </div>


        </div>
      </div>
    );

  }

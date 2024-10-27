import "./Navbar.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const container = useRef<HTMLDivElement>(null);
  const menuBtn = useRef<HTMLHeadingElement>(null);
  const closeBtn = useRef<HTMLHeadingElement>(null);
  const itemsContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl: gsap.core.Timeline = gsap.timeline();

      tl.to("#full", {
        top: 0,
        delay: 0.3,
        duration: 0.3,
      });

      tl.from("#full h4", {
        x: 150,
        duration: 0.2,
        stagger: 0.22,
        opacity: 0,
      });

      // tl.from("#full h4", {
      //   opacity: 0,
      // });

      tl.pause();

      menuBtn.current?.addEventListener("click", () => {
        tl.play();
        itemsContainer.current?.addEventListener("click", preventDefault);
        itemsContainer.current?.addEventListener("wheel", preventDefault);
        itemsContainer.current?.addEventListener("touchmove", preventDefault);
      });

      closeBtn.current?.addEventListener("click", () => {
        tl.reverse();
        // tl.reverse().timeScale(2);

        itemsContainer.current?.removeEventListener("click", preventDefault);
        itemsContainer.current?.removeEventListener("wheel", preventDefault);
        itemsContainer.current?.removeEventListener(
          "touchmove",
          preventDefault
        );
      });
    },
    { scope: container }
  );

  const preventDefault = (e: Event) => {
    e?.preventDefault();
    e?.stopPropagation();
  };

  // TODO: Improve this temporary fix changing screen widths
  // #full is appearing on top when resizing window from desktop to mobile after closing nav
  useEffect(() => {
    const handleResize = () => {
      itemsContainer.current?.style.setProperty("top", "-100vh");
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div id="main" ref={container}>
        <nav>
          <h5
            ref={menuBtn}
            id="menuBtn"
            className="border-y-2 border-y-primary-400 h-3 w-7 sm:w-10"
          ></h5>{" "}
        </nav>
        <div ref={itemsContainer} id="full" className="overflow-hidden">
          <h4 className="nav-text">// HOME</h4>
          <h4 className="nav-text">// ABOUT</h4>
          <h4 className="nav-text">// EVENTS</h4>
          <h4 className="nav-text">// SPONSOR</h4>
          <h4 className="nav-text">// TEAM</h4>
          <h4 className="nav-text">// MEMORIES</h4>

          <h5 ref={closeBtn}>
            <svg
              className="fill-primary-400 w-10 h-10"
              width="24"
              viewBox="0 0 24 24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
            </svg>
          </h5>
        </div>
      </div>
    </div>
  );
}

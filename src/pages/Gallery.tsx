import { BentoGrid, BentoGridItem } from "$lib/components/ui/bento-grid";
import { SYNCHRONIZE3_GALLERY } from "$lib/data/synchronize3-gallery";
import { useRef } from "react";

export default function BentoGridDemo() {
  const refs = useRef<HTMLDivElement[]>([]);

  // useEffect(() => {
  //   const refsCopy = refs.current;
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target?.setAttribute("style", "visibility: visible");
  //       } else {
  //         entry.target?.setAttribute("style", "visibility: hidden");
  //       }
  //     });
  //   });

  //   refs.current.forEach((ref) => {
  //     observer.observe(ref);
  //   });

  //   return () => {
  //     refsCopy?.forEach((ref) => {
  //       observer.unobserve(ref);
  //     });
  //   };
  // }, []);

  return (
    <div className="bg-dark-400 pt-10">
      <h1 className="text-3xl md:text-5xl font-bold text-center font-[AdieuRegular] text-primary-400 mb-20">
        Synchronize 3.0 Gallery
      </h1>
      <BentoGrid className="p-3 sm:p-10 lg:px-20 bg-dark-400">
        {SYNCHRONIZE3_GALLERY.map((item, i) => (
          <BentoGridItem
            elRef={(el) => {
              refs.current?.push(el as unknown as HTMLDivElement);
            }}
            key={i}
            img={item.img}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
// );

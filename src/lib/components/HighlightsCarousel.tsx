import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "$lib/components/ui/carousel";
import SlidingButton from "./Button/SlidingButton";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";

const eventImages = [
  "https://synchronizexim.in/images/IMG_1045.webp",
  "https://synchronizexim.in/images/fw34523.webp",
  "https://synchronizexim.in/images/IMG_8238.webp",
  "https://synchronizexim.in/images/IMG_8493.webp",
  "https://synchronizexim.in/images/wef234.webp",
];

export default function HighlightsCarousel() {
  return (
    <div className="w-full px-3 sm:px-20 space-y-6">
      <Carousel
        className="w-full"
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {eventImages.map((image, index) => (
            <CarouselItem key={index} className="rounded-2xl overflow-hidden">
              <div className="p-1 rounded-2xl overflow-hidden">
                <img
                  src={image}
                  alt={`Event highlight ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full aspect-[20/9] object-cover rounded-2xl"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="max-sm:hidden" />
        <CarouselNext className="max-sm:hidden" />
      </Carousel>
      <div className="text-center font-[AdieuRegular] text-primary-400 flex justify-center">
        <Link to="/gallery" className="">
          <SlidingButton
            primaryText="View complete gallery"
            secondaryText="View complete gallery"
          />
        </Link>
      </div>
    </div>
  );
}

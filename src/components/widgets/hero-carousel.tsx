import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

import img1 from "@/assets/image/carousel/img1.png?url";
import img2 from "@/assets/image/carousel/img2.png?url";
import img3 from "@/assets/image/carousel/img3.png?url";

export default function HeroCarousel() {

    const image_paths = [img1, img2, img3];

    return (
        <Carousel className="w-full max-w-7xl transform hover:scale-105 transition duration-350 shadow" opts={{
            align: "start",
            loop: true,
        }} plugins={[
            Autoplay({
                delay: 5000,
            })
        ]}>
            <CarouselContent>
                {image_paths.map((image, index) => (
                    <CarouselItem key={index}>
                        <div className="min-w-[450px] max-w-7xl">
                            <img src={image} alt="Image" className="
                                    rounded-xl object-cover contain
                                    "width={1920}/>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}

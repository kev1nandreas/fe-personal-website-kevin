"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface CarouselProps {
	images: string[];
	alt: string;
}

export default function Carousel({ images, alt }: CarouselProps) {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: images.length > 1 });
	const [selectedIndex, setSelectedIndex] = useState(0);

	const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
	const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
	const scrollTo = useCallback(
		(index: number) => emblaApi?.scrollTo(index),
		[emblaApi],
	);

	useEffect(() => {
		if (!emblaApi) return;
		const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
		emblaApi.on("select", onSelect);
		onSelect();
		return () => {
			emblaApi.off("select", onSelect);
		};
	}, [emblaApi]);

	if (images.length === 0) return null;

	return (
		<div className="relative w-full rounded-2xl overflow-hidden border border-foreground/10 mb-8">
			<div className="overflow-hidden" ref={emblaRef}>
				<div className="flex">
					{images.map((src, index) => (
						<div key={src} className="relative flex-[0_0_100%] aspect-video">
							<Image
								src={src}
								alt={`${alt} ${index + 1}`}
								fill
								className="object-cover"
								priority={index === 0}
							/>
						</div>
					))}
				</div>
			</div>

			{images.length > 1 && (
				<>
					<button
						type="button"
						onClick={scrollPrev}
						aria-label="Previous image"
						className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
					>
						<ChevronLeft className="w-5 h-5" />
					</button>
					<button
						type="button"
						onClick={scrollNext}
						aria-label="Next image"
						className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
					>
						<ChevronRight className="w-5 h-5" />
					</button>

					<div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
						{images.map((src, index) => (
							<button
								key={src}
								type="button"
								onClick={() => scrollTo(index)}
								aria-label={`Go to image ${index + 1}`}
								className={`w-2 h-2 rounded-full transition-colors ${
									index === selectedIndex ? "bg-white" : "bg-white/40"
								}`}
							/>
						))}
					</div>
				</>
			)}
		</div>
	);
}

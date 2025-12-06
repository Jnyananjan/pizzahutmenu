"use client"

import { useEffect, useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const offers = [
  { id: 1, title: "50% OFF Pizza", subtitle: "On orders above $50", image: "/offers/offer1.jpg" },
  { id: 2, title: "30% OFF Burgers", subtitle: "Valid this weekend", image: "/offers/offer2.jpg" },
  { id: 3, title: "Free Dessert", subtitle: "With every main course", image: "/offers/offer3.jpg" },
  { id: 4, image: "/offers/offer4.jpg" },
]

export default function OffersCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % offers.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 3000)
  }

  const nextSlide = () => {
    goToSlide((currentIndex + 1) % offers.length)
  }

  const prevSlide = () => {
    goToSlide((currentIndex - 1 + offers.length) % offers.length)
  }

  return (
    <div className="mb-12">
      <div ref={carouselRef} className="relative overflow-hidden rounded-2xl h-48 bg-card">
        <div className="absolute inset-0 w-full h-full">
          {offers.map((offer, index) => (
            <div
              key={offer.id}
              className="absolute inset-0 w-full h-full flex items-center justify-between px-8"
              style={{
                opacity: index === currentIndex ? 1 : 0,
                transition: "opacity 500ms ease-out",
                pointerEvents: index === currentIndex ? "auto" : "none",
              }}
            >
              <img
                src={offer.image || "/placeholder.svg"}
                alt={offer.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0" />
              <div className="relative z-10 text-left">
                <h2 className="text-3xl font-bold text-white mb-2">{offer.title}</h2>
                <p className="text-gray-100">{offer.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/50 hover:bg-background/80 text-foreground p-2 rounded-full transition-colors"
          aria-label="Previous offer"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/50 hover:bg-background/80 text-foreground p-2 rounded-full transition-colors"
          aria-label="Next offer"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {offers.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-primary w-8" : "bg-foreground/30"
              }`}
              aria-label={`Go to offer ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

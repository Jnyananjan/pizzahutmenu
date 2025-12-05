"use client"

import { useState } from "react"
import Image from "next/image"

interface Category {
  id: string
  name: string
  image: string
}

const allCategories: Category[] = [
  { id: "pizza", name: "Pizza", image: "/pizza.jpg" },
  { id: "burger", name: "Burgers", image: "/burgers.jpg" },
  { id: "pasta", name: "Pasta", image: "/pasta.jpg" },
  { id: "biryani", name: "Biryani", image: "/biryani.jpg" },
  { id: "rice", name: "Rice Items", image: "/rice-items.jpg" },
  { id: "chicken", name: "Chicken Main Course", image: "/chicken-main-course.jpg" },
  { id: "mutton", name: "Mutton Main Course", image: "/mutton-main-course.jpg" },
  { id: "tandoori", name: "Tandoori Chicken", image: "/tandoori-chicken.jpg" },
  { id: "noodles", name: "Noodles", image: "/noodles.jpg" },
  { id: "chineseveg", name: "Chinese Veg", image: "/chinese-veg.jpg" },
  { id: "chinesenonveg", name: "Chinese Non Veg", image: "/chinese-non-veg.jpg" },
  { id: "tandooribreads", name: "Tandoori Breads", image: "/tandoori-bread.jpg" },
  { id: "indiansidedishes", name: "Indian Side Dishes (Veg)", image: "/indian-side-dish.jpg" },
  { id: "starter", name: "Starters and Momos", image: "/starter.jpg" },
  { id: "rolls", name: "Rolls and Sandwiches", image: "/roll.jpg" },
  { id: "soup", name: "Soup", image: "/soup.jpg" },
  { id: "drinks", name: "Drinks", image: "/drinks.jpg" },
  { id: "beverage", name: "Beverages", image: "/beverages.jpg" },
 
]

interface CategoriesSectionProps {
  onSelectCategory: (category: string) => void
}

export default function CategoriesSection({ onSelectCategory }: CategoriesSectionProps) {
  const [showAll, setShowAll] = useState(false)

  const displayCategories = showAll ? allCategories : allCategories.slice(0, 5)

  const handleCategoryClick = (categoryId: string) => {
    setShowAll(false)
    onSelectCategory(categoryId)
  }

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-foreground mb-6">What are you in the mood for?</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {displayCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className="flex flex-col items-center justify-center p-0.2 rounded-full bg-card hover:bg-card/80 border border-border/50 transition-all duration-300 hover:scale-105 hover:border-primary/50 group w-24 h-24 overflow-hidden"
          >
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              width={120}
              height={120}
              className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform"
            />
          </button>
        ))}

        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="flex flex-col items-center justify-center p-6 rounded-full bg-card/50 hover:bg-card border-2 border-dashed border-primary/50 hover:border-primary transition-all duration-300 hover:scale-105 group w-24 h-24"
          >
            <div className="text-3xl group-hover:scale-110 transition-transform">+</div>
            <p className="text-center text-sm font-semibold text-primary">View More</p>
          </button>
        )}
      </div>
    </section>
  )
}

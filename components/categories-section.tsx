"use client"

import { useState } from "react"
import Image from "next/image"

interface Category {
  id: string
  name: string
  image: string
}

const allCategories: Category[] = [
  { id: "pizza", name: "Pizza", image: "pizza jpg" },
  { id: "burger", name: "Burgers", image: "burger.jpg" },
  { id: "pasta", name: "Pasta", image: "pasta.jpg" },
  { id: "biryani", name: "Biryani", image: "biryani.jpg" },
  { id: "rice", name: "Rice Items", image: "salad.jpg" },
  { id: "chicken", name: "Chicken Main Course", image: "dessert.jpg" },
  { id: "mutton", name: "Mutton Main Course", image: "chinese.jpg" },
  { id: "tandoori", name: "Tandoori Chicken", image: "mexican.jpg" },
  { id: "seafood", name: "Seafood", image: "seafood.jpg" },
  { id: "tandri", name: "Tandri", image: "tandoori.jpg" },
  { id: "noodles", name: "Noodles", image: "noodles.jpg" },
  { id: "chineseveg", name: "Chinese Vej", image: "choneseveg.jpg" },
  { id: "breads", name: "Breads", image: "breads.jpg" },
  { id: "appetizer", name: "Appetizers", image: "appetizer.jpg" },
  { id: "beverage", name: "Beverages", image: "beverage.jpg" },
  { id: "jana", name: "jana", image: "bevege.jpg" },
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
            className="flex flex-col items-center justify-center p-6 rounded-full bg-card hover:bg-card/80 border border-border/50 transition-all duration-300 hover:scale-105 hover:border-primary/50 group w-24 h-24 overflow-hidden"
          >
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              width={80}
              height={80}
              className="w-20 h-20 object-cover rounded-full group-hover:scale-110 transition-transform"
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

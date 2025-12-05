"use client"

import { useState } from "react"
import Image from "next/image"

interface Category {
  id: string
  name: string
  image: string
}

const allCategories: Category[] = [
  { id: "pizza", name: "Pizza", image: "https://ik.imagekit.io/pizzahut/categoryicon/pizza.jpg?updatedAt=1764924919384" },
  { id: "burger", name: "Burgers", image: "https://ik.imagekit.io/pizzahut/categoryicon/burgers.jpg?updatedAt=1764924919935" },
  { id: "pasta", name: "Pasta", image: "https://ik.imagekit.io/pizzahut/categoryicon/pasta.jpg?updatedAt=1764924920069" },
  { id: "biryani", name: "Biryani", image: "https://ik.imagekit.io/pizzahut/categoryicon/biryani.jpg?updatedAt=1764924919292" },
  { id: "rice", name: "Rice Items", image: "https://ik.imagekit.io/pizzahut/categoryicon/rice-items.jpg?updatedAt=1764924919684" },
  { id: "chicken", name: "Chicken Main Course", image: "https://ik.imagekit.io/pizzahut/categoryicon/chicken-main-course.jpg?updatedAt=1764924920171" },
  { id: "mutton", name: "Mutton Main Course", image: "https://ik.imagekit.io/pizzahut/categoryicon/mutton-main-course.jpg?updatedAt=1764924919852" },
  { id: "tandoori", name: "Tandoori Chicken", image: "https://ik.imagekit.io/pizzahut/categoryicon/tandoori-chicken.jpg?updatedAt=1764924920257" },
  { id: "noodles", name: "Noodles", image: "https://ik.imagekit.io/pizzahut/categoryicon/noodles.jpg?updatedAt=1764924919914" },
  { id: "chineseveg", name: "Chinese Veg", image: "https://ik.imagekit.io/pizzahut/categoryicon/chinese-veg.jpg?updatedAt=1764924919718" },
  { id: "chinesenonveg", name: "Chinese Non Veg", image: "https://ik.imagekit.io/pizzahut/categoryicon/chinese-non-veg.jpg?updatedAt=1764924919820" },
  { id: "tandooribreads", name: "Tandoori Breads", image: "https://ik.imagekit.io/pizzahut/categoryicon/tandoori-bread.jpg?updatedAt=1764924919511" },
  { id: "indiansidedishes", name: "Indian Side Dishes (Veg)", image: "https://ik.imagekit.io/pizzahut/categoryicon/indian-side-dish.jpg?updatedAt=1764924920029" },
  { id: "starter", name: "Starters and Momos", image: "https://ik.imagekit.io/pizzahut/categoryicon/starter.jpg?updatedAt=1764924919908" },
  { id: "rolls", name: "Rolls and Sandwiches", image: "https://ik.imagekit.io/pizzahut/categoryicon/roll.jpg?updatedAt=1764924919732" },
  { id: "soup", name: "Soup", image: "https://ik.imagekit.io/pizzahut/categoryicon/soup.jpg?updatedAt=1764924920129" },
  { id: "drinks", name: "Drinks", image: "https://ik.imagekit.io/pizzahut/categoryicon/drinks.jpg?updatedAt=1764924920070" },
  { id: "beverage", name: "Beverages", image: "https://ik.imagekit.io/pizzahut/categoryicon/beverages.jpg?updatedAt=1764924919603" },
 
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

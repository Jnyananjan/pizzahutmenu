"use client"

import { useState } from "react"
import Image from "next/image"

interface Category {
  id: string
  name: string
  image: string
}

const allCategories: Category[] = [
  { id: "pizza", name: "Pizza", image: "https://ik.imagekit.io/jnyananjan/categoryicon/pizza.jpg?updatedAt=1764841459135" },
  { id: "burger", name: "Burgers", image: "https://dhkyzhpqoreeytuyeioj.supabase.co/storage/v1/object/public/Foodmenue/images%20(41).jpeg" },
  { id: "pasta", name: "Pasta", image: "https://ik.imagekit.io/jnyananjan/categoryicon/pasta.jpg?updatedAt=1764841459157" },
  { id: "biryani", name: "Biryani", image: "https://ik.imagekit.io/jnyananjan/categoryicon/biryani.jpg?updatedAt=1764841459114" },
  { id: "rice", name: "Rice Items", image: "https://ik.imagekit.io/jnyananjan/categoryicon/rice-items.jpg?updatedAt=1764841459108" },
  { id: "chicken", name: "Chicken Main Course", image: "https://ik.imagekit.io/jnyananjan/categoryicon/chicken-main-course.jpg?updatedAt=1764841459159" },
  { id: "mutton", name: "Mutton Main Course", image: "https://ik.imagekit.io/jnyananjan/categoryicon/mutton-main-course.jpg?updatedAt=1764841459111" },
  { id: "tandoori", name: "Tandoori Chicken", image: "https://ik.imagekit.io/jnyananjan/categoryicon/tandoori-chicken.jpg?updatedAt=1764841459109" },
  { id: "noodles", name: "Noodles", image: "https://ik.imagekit.io/jnyananjan/categoryicon/noodles.jpg?updatedAt=1764841459119" },
  { id: "chineseveg", name: "Chinese Veg", image: "https://ik.imagekit.io/jnyananjan/categoryicon/chinese-veg.jpg?updatedAt=1764841459131" },
  { id: "chinesenonveg", name: "Chinese Non Veg", image: "https://ik.imagekit.io/jnyananjan/categoryicon/chinese-non-veg.jpg?updatedAt=1764841459059" },
  { id: "tandooribreads", name: "Tandoori Breads", image: "https://ik.imagekit.io/jnyananjan/categoryicon/tandoori-bread.jpg?updatedAt=1764841459155" },
  { id: "indiansidedishes", name: "Indian Side Dishes (Veg)", image: "https://ik.imagekit.io/jnyananjan/categoryicon/indian-side-dish.jpg?updatedAt=1764841459147" },
  { id: "starter", name: "Starters and Momos", image: "https://ik.imagekit.io/jnyananjan/categoryicon/starter.jpg?updatedAt=1764841459131" },
  { id: "rolls", name: "Rolls and Sandwiches", image: "https://ik.imagekit.io/jnyananjan/categoryicon/roll.jpg?updatedAt=1764841459135" },
  { id: "soup", name: "Soup", image: "https://ik.imagekit.io/jnyananjan/categoryicon/soup.jpg?updatedAt=1764841459127" },
  { id: "drinks", name: "Drinks", image: "https://ik.imagekit.io/jnyananjan/categoryicon/drinks.jpg?updatedAt=1764841459163" },
  { id: "beverage", name: "Beverages", image: "https://ik.imagekit.io/jnyananjan/categoryicon/beverages.jpg?updatedAt=1764841459149" },
 
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
            className="flex flex-col items-center justify-center p-0 rounded-full bg-card hover:bg-card/80 border border-border/50 transition-all duration-300 hover:scale-105 hover:border-primary/50 group w-24 h-24 overflow-hidden"
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

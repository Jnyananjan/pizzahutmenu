"use client"
import { ChevronLeft } from "lucide-react"
import MenuItems from "./menu-items"

interface MenuSectionProps {
  category: string
  onBack: () => void
}

export default function MenuSection({ category, onBack }: MenuSectionProps) {
  const categoryNames: Record<string, string> = {
    pizza: "Pizza",
    burger: "Burgers",
    pasta: "Pasta",
    biryani: "Biryani",
    salad: "Salads",
    dessert: "Desserts",
    chinese: "Chinese",
    mexican: "Mexican",
    seafood: "Seafood",
    tandoori: "Tandoori",
    noodles: "Noodles",
    rice: "Rice Bowls",
    breads: "Breads",
    appetizer: "Appetizers",
    beverage: "Beverages",
    bevage: "Aeveges",
  }

  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <button onClick={onBack} className="text-primary hover:text-primary/80 transition-colors" aria-label="Go back">
          <ChevronLeft size={28} />
        </button>
        <h2 className="text-2xl font-bold text-foreground">{categoryNames[category] || "Menu"}</h2>
      </div>

      <MenuItems category={category} />
    </section>
  )
}

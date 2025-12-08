"use client"

const recommendedItems = [
  { id: "1", name: "Farm Delight Pizza", price: "₹149/ ₹199/ ₹259/ ₹360", image: "/item/farm-delight-pizza.jpg", trending: true },
  {
    id: "2",
    name: "Hyderabadi Chicken Biryani",
    price: "₹160",
    image: "/item/chicken-hyderabadi-biryani.jpg",
    trending: true,
  },
  { id: "3", name: "Chicken Maharaja Burger", price: "₹150", image: "/item/chicken-maharaja-burger.jpg", trending: true },
  { id: "4", name: "Chicken Momo", price: "₹90", image: "/item/chicken-momo.jpg", trending: false },
  { id: "5", name: "Cappuccino", price: "₹79", image: "/item/cappuccino.jpg", trending: false },
  
]

export default function RecommendedSection() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-foreground mb-6">Recommended for You</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendedItems.map((item) => (
          <div
            key={item.id}
            className="group bg-card hover:bg-card/80 border border-border/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1"
          >
            {item.trending && (
              <div className="bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold inline-block m-3">
                Trending
              </div>
            )}
            <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                {item.name}
              </h3>
              <p className="text-primary font-bold text-lg">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

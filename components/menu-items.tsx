"use client"

interface MenuItem {
  id: string
  name: string
  description: string
  price: string
  image: string
}

const menuData: Record<string, MenuItem[]> = {
  pizza: [
    {
      id: "1",
      name: "Margherita Pizza",
      description: "Classic tomato, mozzarella, basil",
      price: "₹399",
      image: "https",
    },
    {
      id: "2",
      name: "Pepperoni Pizza",
      description: "Loaded with pepperoni slices",
      price: "₹499",
      image: "pepperoni-pizza.jpg",
    },
    {
      id: "3",
      name: "Veggie Supreme",
      description: "Mixed vegetables and herbs",
      price: "₹449",
      image: "veggie-supreme-pizza.jpg",
    },
    {
      id: "4",
      name: "BBQ Chicken",
      description: "Smoky BBQ chicken pizza",
      price: "₹549",
      image: "bbq-chicken-pizza.jpg",
    },
    {
      id: "5",
      name: "Quattro Formaggi",
      description: "Four cheese blend",
      price: "₹599",
      image: "quattro-formaggi-pizza.jpg",
    },
    {
      id: "6",
      name: "Spicy Arrabbiata",
      description: "Fiery red pepper pizza",
      price: "₹479",
      image: "spicy-arrabbiata-pizza.jpg",
    },
    {
      id: "7",
      name: "Truffle Mushroom",
      description: "Premium mushroom pizza",
      price: "₹699",
      image: "truffle-mushroom-pizza.jpg",
    },
    {
      id: "8",
      name: "Seafood Deluxe",
      description: "Shrimp and calamari blend",
      price: "₹749",
      image: "seafood-deluxe-pizza.jpg",
    },
    {
      id: "9",
      name: "Buffalo Chicken",
      description: "Spicy buffalo sauce chicken",
      price: "₹519",
      image: "buffalo-chicken-pizza.jpg",
    },
    {
      id: "10",
      name: "Garden Fresh",
      description: "Seasonal vegetables",
      price: "₹429",
      image: "garden-fresh-pizza.jpg",
    },
    {
      id: "11",
      name: "Marghrita Pizza",
      description: "Classic toato, mozzarella, basil",
      price: "₹39",
      image: "margheta-pizza.jpg",
    },
  ],
  burger: [
    {
      id: "1",
      name: "Veg Patty Burger",
      description: "Pure Vej",
      price: "₹299",
      image: "veg-patty-burger.jpg",
    },
    {
      id: "2",
      name: "Paneer Burger",
      description: "Filled with Paneer",
      price: "₹499",
      image: "paneer-burger.jpg",
    },
    {
      id: "3",
      name: "Chicken Burger",
      description: "Crispy Chicken ",
      price: "₹349",
      image: "chicken-burger.jpg",
    },
    {
      id: "4",
      name: "Chicken Maharaja Burger",
      description: "Filled with Maharaja Chicken ",
      price: "₹379",
      image: "chicken-maharaja-burger.jpg",
    },
    ],
  pasta: [
    {
      id: "1",
      name: "White Sauce Pasta",
      description: "Creamy white sauce",
      price: "₹399",
      image: "white-sauce-pasta.jpg",
    },
    {
      id: "2",
      name: "White Sauce with Chicken Pasta",
      description: "Spicy Chicken with White sauce",
      price: "₹349",
      image: "white-sauce-with-chicken-pasta.jpg",
    },
    {
      id: "3",
      name: "Red Sauce Pasta",
      description: "Rich Red sauce",
      price: "₹449",
      image: "red-sauce-pasta.jpg",
    },
    {
      id: "4",
      name: "Red Sauce with Chicken Pasta",
      description: "Layers of meat with white sauce",
      price: "₹499",
      image: "red-sauce-with-chicken-pasta.jpg",
    },
    {
      id: "5",
      name: "Masala Pasta",
      description: "Mixed with Masala",
      price: "₹599",
      image: "masala-pasta.jpg",
    },
    
  ],
  biryani: [
    {
      id: "1",
      name: "Chicken Hyderabadi Biryani",
      description: "Fragrant basmati rice with chicken pieces",
      price: "₹349",
      image: "chicken-hyderabadi-biryani.jpg",
    },
    {
      id: "2",
      name: "Mutton Hyderabadi Biryani",
      description: "Tender mutton pieces",
      price: "₹449",
      image: "mutton-hyderabadi-biryani.jpg",
    },
    {
      id: "3",
      name: "Veg Biryani",
      description: "Mixed vegetables with spices",
      price: "₹299",
      image: "veg-biryani.jpg",
    },
    {
      id: "4",
      name: "Paneer Biryani",
      description: "Cottage cheese biryani",
      price: "₹329",
      image: "paneer-biryani.jpg",
    },
    {
      id: "5",
      name: "Chicken Biryani",
      description: "Delicate Chicken pieces",
      price: "₹549",
      image: "chicken-biryani.jpg",
    },
    { id: "6", name: "Mutton Biryani", description: "Delicate Mutton pieces", price: "₹499", image: "mutton-biryani.jpg"
    },
    { id: "7", name: "Egg Biryani", description: "Boiled eggs layered", price: "₹279", image: "egg-biryani.jpg" 
    },
  ],
  rice: [
    {
      id: "1",
      name: "Steamed Rice",
      description: "Plane Rice",
      price: "₹299",
      image: "steamed-rice.jpg",
    },
    { 
      id: "2", 
      name: "Jeera Rice", 
      description: "Steamed Rice with Jeera", 
      price: "₹349", 
      image: "jeera-rice.jpg" 
    },
    {
      id: "3",
      name: "Basanti Pulao",
      description: "Nicely cooked pulao",
      price: "₹279",
      image: "basanti-pulao.jpg",
    },
    {
      id: "4",
      name: "Veg Pulao",
      description: "Veg Pulao",
      price: "₹329",
      image: "vej-pulao.jpg",
    },
    { 
      id: "5", 
      name: "Kashmiri Pulao", 
      description: "Kashmiri Flavour Pulao", 
      price: "₹399", 
      image: "kashmiri-pulao.jpg" 
    },
    {
      id: "6",
      name: "Bengali Fried Rice (Veg)",
      description: "Moat Famous Vej Fried Rice",
      price: "₹359",
      image: "bengali-fried-rice.jpg",
    },
    {
      id: "7",
      name: "Egg Fried Rice",
      description: "Fried Rice with egg",
      price: "₹319",
      image: "egg-fried-rice.jpg",
    },
    {
      id: "8",
      name: "Chicken Fried Rice",
      description: "Grilled chicken with Fried Rice",
      price: "₹429",
      image: "chicken-fried-rice.jpg",
    },
    {
      id: "9",
      name: "Mixed Fried Rice",
      description: "Mixed Taste Fried Rice",
      price: "₹389",
      image: "mixed-fried-rice.jpg",
    },
  ],
  chicken: [
    { 
     id: "1", 
     name: "Chicken Kosha / Curry", 
     description: "Chicken with thick, and spicy semi dry gravy",
     price: "₹249", 
     image: "chicken-kosha-curry.jpg" 
    },
    { 
						id: "2", name: "Chicken Do Pyaza", 
	 	  	description: "Chicken with flavorful curry with a distinct taste", 
						price: "₹299", 
						image: "chicken-do-pyaza.jpg" 
					},
    { 
     id: "3", name: "Kadai Chicken", 
     description: "Chicken with tomato based gravy with a blend of freshly ground spices", 
     price: "₹199", 
     image: "kadai-chicken.jpg" 
     },
     { 
     id: "4", 
     name: "Butter Chicken", 
     description: "Chicken cooked in a spiced tomato and butter based gravy",
     price: "₹249", 
     image: "butter-chicken.jpg" 
    },
    { 
						id: "5", name: "Chicken Tikka Masala", 
	 	  	description: "Roasted marinated chicken pieces in a spiced sauce", 
						price: "₹299", 
						image: "chicken-tikka-masala.jpg" 
					},
    { 
     id: "6", name: "Handi Chicken", 
     description: "Chicken pieces simmered in a creamy gravy", 
     price: "₹199", 
     image: "handi-chicken.jpg" 
     },
     {
      id: "7",
      name: "Chicken Bharta",
      description: "Chicken in a creamy, spicy, and tangy gravy",
      price: "₹99",
      image: "chicken-bharta.jpg",
     },
     {
      id: "8",
      name: "Chicken Nizami Masala",
      description: "chicken in a creamy blend of yogurt, ground nuts and fragrant whole spices",
      price: "₹99",
      image: "chicken-nizami-masala.jpg",
     },
   ],
  mutton: [
    {
      id: "1",
      name: "Mutton Kosha / Curry",
      description: "Mutton with a rich, spicy, and thick gravy",
      price: "₹279",
      image: "mutton-kosha-curry.jpg",
    },
    {
      id: "2",
      name: "Mutton Do Pyaza",
      description: "A rich flavourful Mughlai dish made with mutton and onions",
      price: "₹249",
      image: "Mutton Do Pyaza.jpg",
    },
    { 
      id: "3", 
      name: "Handi Mutton", 
      description: "Mut5on slow cooked in a traditional earthware pot", 
      price: "₹199", 
      image: "Handi Mutton.jpg" 
    },
    {
      id: "4",
      name: "Mutton Rogan Josh",
      description: "Tender mutton with a signature deep red, flavorful gravy",
      price: "₹299",
      image: "mutton-rogan-josh.jpg",
    },
    {
      id: "5",
      name: "Mutton Nizami Masala",
      description: "Mutton in a rich, creamy, and aromatic gravy",
      price: "₹349",
      image: "mutton-nizami-masala.jpg",
    },
  ],
  tandoori-chicken: [
    { 
      id: "1", 
      name: "Tandoori Chicken Half", 
      description: "chicken marinated in yogurt and spices and roasted in a tandoor, a cylindrical clay oven", 
      price: "₹299", 
      image: "tandoori-chicken.jpg" 
    },
    {
      id: "2",
      name: "Tandoori Chicken Full",
      description: "chicken marinated in yogurt and spices and roasted in a tandoor, a cylindrical clay oven",
      price: "₹349",
      image: "tandoori-chicken.jpg",
    },
    { 
      id: "3", 
      name: "Chicken Tikka Kebab (6 pc)", 
      description: "Boneless chunks of chicken marinated in a spiced yogurt mixture and threaded onto skewers before being grilled", 
      price: "₹329", 
      image: "chicken-tikka-kebab.jpg" 
    },
    { 
      id: "4",
      name: "Chicken Seekh Kebab (6 pc)", 
      description: "A portion of 6 grilled skewers made from minced chicken and a blend of spices, often served as an appetizer or meal", 
      price: "₹279",
      image: "quesadillas.jpg"
    },
    {
      id: "5",
      name: "Chicken Malai Kebab (6 pc)",
      description: "A serving of six pieces of a rich, creamy, and mild Indian kebab, typically made from marinated chicken, cream, and spices.",
      price: "₹349",
      image: "chicken-malai-kebab.jpg",
    },
    { 
     id: "6", 
     name: "Chicken Tangri Kebab (2 pc)", 
     description: "A popular Indian appetizer consisting of two marinated chicken drumsticks that are grilled or roasted", 
     price: "₹399", 
     image: "chicken-tangri-kebab.jpg"
     },
    {
      id: "7",
      name: "Chicken Reshmi Kebab (6 pc)",
      description: "Six pieces of tender chicken marinated in a creamy and silky-smooth mixture of yogurt, cream, and spices, then grilled or cooked until tender",
      price: "₹369",
      image: "chicken-reshmi-kebab.jpg",
    },
  ],
  seafood: [
    { id: "1", name: "Grilled Fish", description: "Fresh fish with herbs", price: "₹449", image: "grilled-fish.jpg" },
    {
      id: "2",
      name: "Butter Garlic Shrimp",
      description: "Succulent prawns in butter",
      price: "₹499",
      image: "butter-garlic-shrimp.jpg",
    },
    { id: "3", name: "Crab Curry", description: "Spiced crab in coconut", price: "₹549", image: "crab-curry.jpg" },
    {
      id: "4",
      name: "Fish Amritsari",
      description: "Crispy battered fish",
      price: "₹399",
      image: "fish-amritsari.jpg",
    },
    {
      id: "5",
      name: "Squid Pepper Fry",
      description: "Calamari with cracked pepper",
      price: "₹429",
      image: "squid-pepper-fry.jpg",
    },
    { id: "6", name: "Fish Tikka", description: "Marinated and grilled fish", price: "₹469", image: "fish-tikka.jpg" },
    {
      id: "7",
      name: "Lobster Thermidor",
      description: "Premium lobster dish",
      price: "₹799",
      image: "lobster-thermidor.jpg",
    },
    {
      id: "8",
      name: "Mussels Marinara",
      description: "Mussels in tomato sauce",
      price: "₹459",
      image: "mussels-marinara.jpg",
    },
    { id: "9", name: "Prawn Koliwada", description: "Spicy fried prawns", price: "₹479", image: "prawn-koliwada.jpg" },
    { id: "10", name: "Pomfret Fry", description: "Whole fish crispy fry", price: "₹529", image: "pomfret-fry.jpg" },
  ],
  tandoori: [
    {
      id: "1",
      name: "Tandoori Chicken",
      description: "Marinated grilled chicken",
      price: "₹349",
      image: "tandoori-chicken.jpg",
    },
    {
      id: "2",
      name: "Tandoori Paneer",
      description: "Cottage cheese tikka",
      price: "₹329",
      image: "tandoori-paneer.jpg",
    },
    {
      id: "3",
      name: "Tandoori Fish",
      description: "Grilled fish in tandoor",
      price: "₹449",
      image: "tandoori-fish.jpg",
    },
    {
      id: "4",
      name: "Tandoori Prawns",
      description: "Jumbo prawns tandoori",
      price: "₹499",
      image: "tandoori-prawns.jpg",
    },
    { id: "5", name: "Seekh Kebab", description: "Minced meat skewer", price: "₹349", image: "seekh-kebab.jpg" },
    { id: "6", name: "Shami Kebab", description: "Spiced meat cutlet", price: "₹279", image: "shami-kebab.jpg" },
    { id: "7", name: "Galauti Kebab", description: "Melt-in-mouth kebab", price: "₹329", image: "galauti-kebab.jpg" },
    { id: "8", name: "Malai Tikka", description: "Cream marinated tikka", price: "₹399", image: "malai-tikka.jpg" },
    {
      id: "9",
      name: "Hariyali Tikka",
      description: "Herb-infused green tikka",
      price: "₹349",
      image: "hariyali-tikka.jpg",
    },
    {
      id: "10",
      name: "Paneer Tikka Masala",
      description: "Creamy tomato paneer",
      price: "₹379",
      image: "paneer-tikka-masala.jpg",
    },
  ],
  noodles: [
    {
      id: "1",
      name: "Hakka Noodles",
      description: "Stir-fried chow mein style",
      price: "₹249",
      image: "hakka-noodles.jpg",
    },
    { id: "2", name: "Ramen", description: "Japanese noodles in broth", price: "₹319", image: "ramen.jpg" },
    { id: "3", name: "Pad Thai", description: "Thai sweet and spicy noodles", price: "₹299", image: "pad-thai.jpg" },
    {
      id: "4",
      name: "Schezwan Noodles",
      description: "Spicy chili noodles",
      price: "₹269",
      image: "schezwan-noodles.jpg",
    },
    {
      id: "5",
      name: "Butter Garlic Noodles",
      description: "Creamy garlic noodles",
      price: "₹279",
      image: "butter-garlic-noodles.jpg",
    },
    { id: "6", name: "Chow Fun", description: "Thick stir-fried noodles", price: "₹289", image: "chow-fun.jpg" },
    { id: "7", name: "Veg Hakka", description: "Vegetable chow mein", price: "₹229", image: "veg-hakka.jpg" },
    {
      id: "8",
      name: "Chicken Noodles",
      description: "Chicken with noodles",
      price: "₹329",
      image: "chicken-noodles.jpg",
    },
    {
      id: "9",
      name: "Spicy Ramyeon",
      description: "Korean spicy instant noodles",
      price: "₹259",
      image: "spicy-ramyeon.jpg",
    },
    { id: "10", name: "Noodle Soup", description: "Warm noodles in broth", price: "₹199", image: "noodle-soup.jpg" },
  ],
  rhhgge: [
    {
      id: "1",
      name: "Fried Rice",
      description: "Egg fried rice with vegetables",
      price: "₹249",
      image: "fried-rice.jpg",
    },
    {
      id: "2",
      name: "Chicken Fried Rice",
      description: "Rice with chicken pieces",
      price: "₹299",
      image: "chicken-fried-rice.jpg",
    },
    {
      id: "3",
      name: "Vegetable Fried Rice",
      description: "Mixed veggies fried rice",
      price: "₹229",
      image: "vegetable-fried-rice.jpg",
    },
    {
      id: "4",
      name: "Shrimp Fried Rice",
      description: "Prawn fried rice",
      price: "₹349",
      image: "shrimp-fried-rice.jpg",
    },
    { id: "5", name: "Mushroom Rice", description: "Sautéed mushroom rice", price: "₹279", image: "mushroom-rice.jpg" },
    { id: "6", name: "Paneer Rice", description: "Cottage cheese fried rice", price: "₹269", image: "paneer-rice.jpg" },
    { id: "7", name: "Peas Rice", description: "Green peas with rice", price: "₹219", image: "peas-rice.jpg" },
    {
      id: "8",
      name: "Coconut Rice",
      description: "Fragrant coconut infused",
      price: "₹259",
      image: "coconut-rice.jpg",
    },
    { id: "9", name: "Garlic Rice", description: "Aromatic garlic rice", price: "₹249", image: "garlic-rice.jpg" },
    { id: "10", name: "Mixed Rice", description: "Mixed vegetables and rice", price: "₹289", image: "mixed-rice.jpg" },
  ],
  breads: [
    { id: "1", name: "Naan", description: "Traditional Indian flatbread", price: "₹69", image: "naan.jpg" },
    { id: "2", name: "Butter Naan", description: "Naan with butter", price: "₹79", image: "butter-naan.jpg" },
    {
      id: "3",
      name: "Garlic Naan",
      description: "Naan with garlic and butter",
      price: "₹89",
      image: "garlic-naan.jpg",
    },
    { id: "4", name: "Roti", description: "Whole wheat flatbread", price: "₹29", image: "roti.jpg" },
    { id: "5", name: "Paratha", description: "Layered flatbread", price: "₹49", image: "paratha.jpg" },
    {
      id: "6",
      name: "Stuffed Paratha",
      description: "Paratha with filling",
      price: "₹69",
      image: "stuffed-paratha.jpg",
    },
    { id: "7", name: "Rumali Roti", description: "Thin paper-thin bread", price: "₹39", image: "rumali-roti.jpg" },
    { id: "8", name: "Puri", description: "Deep fried bread", price: "₹49", image: "puri.jpg" },
    { id: "9", name: "Kulcha", description: "Stuffed Indian bread", price: "₹79", image: "kulcha.jpg" },
    { id: "10", name: "Bhatura", description: "Large fried bread", price: "₹59", image: "bhatura.jpg" },
  ],
  appetizer: [
    { id: "1", name: "Samosa", description: "Crispy fried pastry", price: "₹79", image: "samosa.jpg" },
    { id: "2", name: "Pakora", description: "Vegetable fritter", price: "₹99", image: "pakora.jpg" },
    { id: "3", name: "Paneer Tikka", description: "Grilled cottage cheese", price: "₹199", image: "paneer-tikka.jpg" },
    { id: "4", name: "Chicken Wings", description: "Spiced grilled wings", price: "₹249", image: "chicken-wings.jpg" },
    { id: "5", name: "Momos", description: "Steamed dumplings", price: "₹149", image: "momos.jpg" },
    { id: "6", name: "Bruschetta", description: "Toasted bread with toppings", price: "₹129", image: "bruschetta.jpg" },
    { id: "7", name: "Fish Fry", description: "Fried fish pieces", price: "₹229", image: "fish-fry.jpg" },
    { id: "8", name: "Crispy Onions", description: "Fried onion rings", price: "₹109", image: "crispy-onions.jpg" },
    { id: "9", name: "Corn Fritters", description: "Corn and cheese bites", price: "₹139", image: "corn-fritters.jpg" },
    {
      id: "10",
      name: "Spinach Dip",
      description: "Creamy spinach with bread",
      price: "₹169",
      image: "spinach-dip.jpg",
    },
  ],
  beverage: [
    { id: "1", name: "Lassi", description: "Yogurt drink", price: "₹99", image: "lassi.jpg" },
    { id: "2", name: "Mango Lassi", description: "Mango yogurt drink", price: "₹129", image: "mango-lassi.jpg" },
    { id: "3", name: "Cold Coffee", description: "Iced coffee beverage", price: "₹129", image: "cold-coffee.jpg" },
    { id: "4", name: "Iced Tea", description: "Chilled tea with lemon", price: "₹79", image: "iced-tea.jpg" },
    { id: "5", name: "Fresh Juice", description: "Orange or apple juice", price: "₹99", image: "fresh-juice.jpg" },
    { id: "6", name: "Smoothie", description: "Berry or fruit smoothie", price: "₹149", image: "smoothie.jpg" },
    { id: "7", name: "Masala Tea", description: "Spiced Indian tea", price: "₹59", image: "masala-tea.jpg" },
    { id: "8", name: "Hot Chocolate", description: "Warm chocolate drink", price: "₹119", image: "hot-chocolate.jpg" },
    { id: "9", name: "Buttermilk", description: "Chilled spiced buttermilk", price: "₹69", image: "buttermilk.jpg" },
    { id: "10", name: "Coconut Water", description: "Fresh tender coconut", price: "₹89", image: "coconut-water.jpg" },
  ],
  }

interface MenuItemsProps {
  category: string
}

export default function MenuItems({ category }: MenuItemsProps) {
  const items = menuData[category] || []

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-card hover:bg-card/80 border border-border/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
          >
            <div className="flex h-24">
              <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-24 h-24 object-cover" />
              <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{item.name}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-1">{item.description}</p>
                </div>
                <p className="text-primary font-bold text-sm">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

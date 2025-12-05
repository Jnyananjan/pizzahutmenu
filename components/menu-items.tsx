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
      name: "Margherita Cheese Pizza",
      description: "Classic tomato, mozzarella, basil",
      price: "₹-",
      image: "/margherita-cheese-pizza.jph",
    },
    {
      id: "2",
      name: "Cheese Pizza",
      description: "Clasic Cheese pizza",
      price: "₹-",
      image: "/cheese-pizza.jpg",
    },
    {
      id: "3",
      name: "Veg Schezwan Pizza",
      description: "Mixed vegetables and herbs",
      price: "₹-",
      image: "/veg-schezwan-pizza.jpg",
    },
    {
      id: "4",
      name: "Farm Delight Pizza ",
      description: "Onion, mushroom, Tomato",
      price: "₹-",
      image: "/farm-delight-pizza.jpg",
    },
    {
      id: "5",
      name: "Veg Carnival Pizza",
      description: "Four cheese blend",
      price: "₹-",
      image: "/vej-carnival-pizza.jpg",
    },
    {
      id: "6",
      name: "Chicken Tikka Pizza",
      description: "crispy chicken pizza",
      price: "₹-",
      image: "/chicken-tikka-pizza.jpg",
    },
    {
      id: "7",
      name: "Tandoori Chicken Pizza",
      description: "Tandoori Chicken cube pizza",
      price: "₹-",
      image: "/tandoori-chicken-pizza.jpg",
    },
    {
      id: "8",
      name: "Butter Chicken Pizza",
      description: "Butter Chicken cubes pizza",
      price: "₹-",
      image: "/butter-chicken-pizza.jpg",
    },
    {
      id: "9",
      name: "-",
      description: "-",
      price: "-",
      image: "jpg",
    },
    {
      id: "10",
      name: "-",
      description: "-",
      price: "₹-",
      image: "jpg",
    },
    {
      id: "11",
      name: "-",
      description: "-",
      price: "₹-",
      image: "-",
    },
  ],
  burger: [
    {
      id: "1",
      name: "Veg Patty Burger",
      description: "Pure Vej",
      price: "₹70",
      image: "/veg-patty-burger.jpg",
    },
    {
      id: "2",
      name: "Paneer Burger",
      description: "Filled with Paneer",
      price: "₹110",
      image: "/paneer-burger.jpg",
    },
    {
      id: "3",
      name: "Chicken Burger",
      description: "Crispy Chicken ",
      price: "₹90",
      image: "/chicken-burger.jpg",
    },
    {
      id: "4",
      name: "Chicken Maharaja Burger",
      description: "Beast Burger filled with Chicken ",
      price: "₹150",
      image: "/chicken-maharaja-burger.jpg",
    },
    ],
  pasta: [
    {
      id: "1",
      name: "White Sauce Pasta",
      description: "Creamy white sauce",
      price: "₹130",
      image: "/white-sauce-pasta.jpg",
    },
    {
      id: "2",
      name: "White Sauce with Chicken Pasta",
      description: "Spicy Chicken with White sauce",
      price: "₹160",
      image: "/white-sauce-with-chicken-pasta.jpg",
    },
    {
      id: "3",
      name: "Red Sauce Pasta",
      description: "Rich Red sauce",
      price: "₹120",
      image: "/red-sauce-pasta.jpg",
    },
    {
      id: "4",
      name: "Red Sauce with Chicken Pasta",
      description: "Layers of meat with white sauce",
      price: "₹150",
      image: "/red-sauce-with-chicken-pasta.jpg",
    },
    {
      id: "5",
      name: "Masala Pasta",
      description: "Mixed with Masala",
      price: "₹130",
      image: "/masala-pasta.jpg",
    },
    
  ],
  biryani: [
    {
      id: "1",
     name: "Hyderabadi Chicken Biryani",
      description: "Fragrant basmati rice with chicken pieces",
      price: "₹160",
      image: "/chicken-hyderabadi-biryani.jpg",
    },
    {
      id: "2",
      name: "Hyderabadi Mutton Biryani",
      description: "Tender mutton pieces",
      price: "₹220",
      image: "/mutton-hyderabadi-biryani.jpg",
    },
    {
      id: "3",
      name: "Veg Biryani",
      description: "Mixed vegetables with spices",
      price: "₹110",
      image: "/veg-biryani.jpg",
    },
    {
      id: "4",
      name: "Paneer Biryani",
      description: "Cottage cheese biryani",
      price: "₹140",
      image: "/paneer-biryani.jpg",
    },
    {
      id: "5",
      name: "Chicken Biryani",
      description: "Delicate Chicken pieces",
      price: "₹140",
      image: "/chicken-biryani.jpg",
    },
    { id: "6", name: "Mutton Biryani", description: "Delicate Mutton pieces", price: "₹200", image: "/mutton-biryani.jpg"
    },
    { id: "7", name: "Egg Biryani", description: "Boiled eggs layered", price: "₹110", image: "/egg-biryani.jpg" 
    },
  ],
  rice: [
    {
      id: "1",
      name: "Steamed Rice",
      description: "Plane Rice",
      price: "₹59",
      image: "/steamed-rice.jpg",
    },
    { 
      id: "2", 
      name: "Jeera Rice", 
      description: "Steamed Rice with Jeera", 
      price: "₹74", 
      image: "/jeera-rice.jpg" 
    },
    {
      id: "3",
      name: "Basanti Pulao",
      description: "Nicely cooked pulao",
      price: "₹129",
      image: "/basanti-pulao.jpg",
    },
    {
      id: "4",
      name: "Veg Pulao",
      description: "Veg Pulao",
      price: "₹100",
      image: "/veg-pulao.jpg",
    },
    { 
      id: "5", 
      name: "Kashmiri Pulao", 
      description: "Kashmiri Flavour Pulao", 
      price: "₹130", 
      image: "/kashmiri-pulao.jpg" 
    },
    {
      id: "6",
      name: "Bengali Fried Rice (Veg)",
      description: "Moat Famous Vej Fried Rice",
      price: "₹100",
      image: "/bengali-fried-rice.jpg",
    },
    {
      id: "7",
      name: "Egg Fried Rice",
      description: "Fried Rice with egg",
      price: "₹110",
      image: "/egg-fried-rice.jpg",
    },
    {
      id: "8",
      name: "Chicken Fried Rice",
      description: "Grilled chicken with Fried Rice",
      price: "₹119",
      image: "/chicken-fried-rice.jpg",
    },
    {
      id: "9",
      name: "Mixed Fried Rice",
      description: "Mixed Taste Fried Rice",
      price: "₹139",
      image: "/mixed-fried-rice.jpg",
    },
    {
      id: "10",
      name: "Egg Schezwan Fried Rice",
      description: "Fried Rice with egg",
      price: "₹120",
      image: "/egg-schezwan-fried-rice.jpg",
    },
    {
      id: "11",
      name: "Chicken Schezwan Fried Rice",
      description: "Grilled chicken with Fried Rice",
      price: "₹129",
      image: "/chicken-schezwan-fried-rice.jpg",
    },
    {
      id: "12",
      name: "Mixed Schezwan Fried Rice",
      description: "Mixed Taste Fried Rice",
      price: "₹149",
      image: "/mixed-schezwan-fried-rice.jpg.jpg",
    },
  ],
  chicken: [
    { 
     id: "1", 
     name: "Chicken Kosha / Curry (6 Pieces)", 
     description: "Chicken with thick, and spicy semi dry gravy",
     price: "₹160", 
     image: "/chicken-kosha-curry.jpg" 
    },
    { 
						id: "2", name: "Chicken Do Pyaza", 
	 	  	description: "Chicken with flavorful curry with a distinct taste", 
						price: "₹170", 
						image: "/chicken-do-pyaza.jpg" 
					},
    { 
     id: "3", name: "Kadai Chicken", 
     description: "Chicken with tomato based gravy with a blend of freshly ground spices", 
     price: "₹170", 
     image: "/kadai-chicken.jpg" 
     },
     { 
     id: "4", 
     name: "Butter Chicken", 
     description: "Chicken cooked in a spiced tomato and butter based gravy",
     price: "₹190", 
     image: "/butter-chicken.jpg" 
    },
    { 
						id: "5", name: "Chicken Tikka Masala", 
	 	  	description: "Roasted marinated chicken pieces in a spiced sauce", 
						price: "₹190", 
						image: "/chicken-tikka-masala.jpg" 
					},
    { 
     id: "6", name: "Handi Chicken", 
     description: "Chicken pieces simmered in a creamy gravy", 
     price: "₹180", 
     image: "/handi-chicken.jpg" 
     },
     {
      id: "7",
      name: "Chicken Bharta",
      description: "Chicken in a creamy, spicy, and tangy gravy",
      price: "₹210",
      image: "/chicken-bharta.jpg",
     },
     {
      id: "8",
      name: "Chicken Nizami Masala",
      description: "chicken in a creamy blend of yogurt, ground nuts and fragrant whole spices",
      price: "₹200",
      image: "/chicken-nizami-masala.jpg",
     },
   ],
  mutton: [
    {
      id: "1",
      name: "Mutton Kosha / Curry",
      description: "Mutton with a rich, spicy, and thick gravy",
      price: "₹260",
      image: "/mutton-kosha-curry.jpg",
    },
    {
      id: "2",
      name: "Mutton Do Pyaza",
      description: "A rich flavourful Mughlai dish made with mutton and onions",
      price: "₹280",
      image: "/Mutton Do Pyaza.jpg",
    },
    { 
      id: "3", 
      name: "Handi Mutton", 
      description: "Mut5on slow cooked in a traditional earthware pot", 
      price: "₹280", 
      image: "/Handi Mutton.jpg" 
    },
    {
      id: "4",
      name: "Mutton Rogan Josh",
      description: "Tender mutton with a signature deep red, flavorful gravy",
      price: "₹290",
      image: "/mutton-rogan-josh.jpg",
    },
    {
      id: "5",
      name: "Mutton Nizami Masala",
      description: "Mutton in a rich, creamy, and aromatic gravy",
      price: "₹290",
      image: "/mutton-nizami-masala.jpg",
    },
  ],
  tandoori: [
    { 
      id: "1", 
      name: "Tandoori Chicken Half", 
      description: "chicken marinated in yogurt and spices and roasted in a tandoor, a cylindrical clay oven", 
      price: "₹300", 
      image: "/tandoori-chicken.jpg" 
    },
    {
      id: "2",
      name: "Tandoori Chicken Full",
      description: "chicken marinated in yogurt and spices and roasted in a tandoor, a cylindrical clay oven",
      price: "₹590",
      image: "/tandoori-chicken.jpg",
    },
    { 
      id: "3", 
      name: "Chicken Tikka Kebab (6 pc)", 
      description: "Boneless chunks of chicken marinated in a spiced yogurt mixture and threaded onto skewers before being grilled", 
      price: "₹180", 
      image: "/chicken-tikka-kebab.jpg" 
    },
    { 
      id: "4",
      name: "Chicken Seekh Kebab (6 pc)", 
      description: "A portion of 6 grilled skewers made from minced chicken and a blend of spices, often served as an appetizer or meal", 
      price: "₹180",
      image: "/chicken-sheek-kabab.jpg"
    },
    {
      id: "5",
      name: "Chicken Malai Kebab (6 pc)",
      description: "A serving of six pieces of a rich, creamy, and mild Indian kebab, typically made from marinated chicken, cream, and spices.",
      price: "₹190",
      image: "/chicken-malai-kebab.jpg",
    },
    { 
     id: "6", 
     name: "Chicken Tangri Kebab (2 pc)", 
     description: "A popular Indian appetizer consisting of two marinated chicken drumsticks that are grilled or roasted", 
     price: "₹150", 
     image: "/chicken-tangri-kebab.jpg"
     },
    {
      id: "7",
      name: "Chicken Reshmi Kebab (6 pc)",
      description: "Six pieces of tender chicken marinated in a creamy and silky-smooth mixture of yogurt, cream, and spices, then grilled or cooked until tender",
      price: "₹210",
      image: "/chicken-reshmi-kebab.jpg",
    },
    {
      id: "8",
      name: "Paneer Tikka",
      description: "Cubes of Indian cottage cheese (paneer) and assorted vegetables marinated in a spiced yogurt mixture and grilled or roasted to smoky perfection.",
      price: "₹170",
      image: "/Paneer-tikka.jpg",
    },
    {
      id: "9",
      name: "Paneer Malai",
      description: "A rich, creamy, and mildly spiced North Indian dish featuring soft Indian cottage cheese (paneer) simmered in a luscious gravy made from fresh cream (malai), cashews, and aromatic spices",
      price: "₹170",
      image: "/paneer-malai.jpg",
    },
    {
      id: "10",
      name: "Veg Seekh Kebab",
      description: "A flavorful, cylindrical Indian snack made from minced mixed vegetables and spices, shaped onto skewers (seekh) and typically grilled, baked, or pan-fried. ",
      price: "₹150",
      image: "/veg-seekh-kebab.jpg",
    },
  ],
  tandooribreads: [
    { id: "1", name: "Tandoori Roti", description: "A soft, flatbread, cooked traditionally in a cylindrical clay oven called a tandoor.", price: "₹25", image: "/tandoori-roti.jpg" },
    {
      id: "2",
      name: "Butter Roti",
      description: "Roti in butter",
      price: "₹20",
      image: "/butter-roti.jpg",
    },
    {
      id: "3",
      name: "Tawa Roti",
      description: "Plain Roti",
      price: "₹15",
      image: "/tawa-roti.jpg",
    },
    { id: "4", name: "Plain Naan", description: "A soft, leavened Indian flatbread with a slightly chewy, pillowy texture, traditionally baked in a tandoor oven.", price: "₹35", image: "/plain-naan.jpg" },
    {
      id: "5",
      name: "Butter Naan",
      description: "A soft, leavened Indian flatbread, traditionally baked in a tandoor and generously brushed with melted butter.",
      price: "₹40",
      image: "/butter-naan.jpg",
    },
    {
      id: "6",
      name: "Masala Kulcha",
      description: "A soft, leavened North Indian flatbread, often stuffed with a spiced mixture of potatoes, onions, or paneer and typically served with chickpea curry.",
      price: "₹49",
      image: "/masala-kulcha.jpg",
    },
    { id: "7", name: "Stuffed Kulcha", description: "A leavened, flaky North Indian flatbread filled with a spiced stuffing, such as potatoes or paneer, and typically cooked until crispy on a tawa or in a tandoor.", price: "₹55", image: "/stuffed-kulcha.jpg" },
    {
      id: "8",
      name: "Paneer Kulcha",
      description: "A popular, leavened North Indian flatbread, often crispy on the outside and soft inside, that is generously stuffed with a flavorful and spiced mixture of crumbled Indian cottage paneer.",
      price: "₹45",
      image: "/paneer-kulcha.jpg",
    },
    {
      id: "9",
      name: "Lachha Paratha",
      description: "A popular North Indian multi-layered, flaky flatbread known for its unique, crispy texture and soft interior.",
      price: "₹39",
      image: "/lachha-paratha.jpg",
    },
    { id: "10", name: "Petai Paratha", description: "a uniquely soft and flaky textured roti", price: "₹40", image: "/petai-paratha.jpg" 
    },
    { id: "11", name: "Cheese Naan", description: "A soft, pillowy Indian flatbread generously stuffed with gooey, melted cheese.", price: "₹60", image: "/cheese-naan.jpg" },
    {
      id: "12",
      name: "Cheese Chilli Naan",
      description: "A soft, fluffy Indian flatbread generously stuffed with a fiery blend of green chillies and gooey, melted cheese.",
      price: "₹70",
      image: "/cheese-chilli-naan.jpg",
    },
    {
      id: "13",
      name: "Aloo Paratha",
      description: "A classic Indian unleavened whole wheat flatbread stuffed with a spiced, tangy mashed potato filling.",
      price: "₹40",
      image: "/aloo-paratha.jpg",
    },
    {
      id: "14",
      name: "Garlic Naan",
      description: "A soft, pillowy Indian flatbread generously infused with aromatic garlic and butter.",
      price: "₹50",
      image: "/garlic-naan.jpg",
    },
  ],
  indiansidedishes: [
    {
      id: "1",
      name: "Dal Fry",
      description: "Veg Dal",
      price: "₹80",
      image: "/dal-fry.jpg",
    },
    {
      id: "2",
      name: "Veg Tadka",
      description: "Tadka with vegetables",
      price: "₹90",
      image: "/veg-tadka.jpg",
    },
    {
      id: "3",
      name: "Egg Tadka",
      description: "Tadka With Egg",
      price: "₹110",
      image: "/egg-tadka.jpg",
    },
    {
      id: "4",
      name: "Chicken Tadka",
      description: "Tadka with chicken",
      price: "₹130",
      image: "/chicken-tadka.jpg",
    },
    { id: "5", name: "Mixed Veg", description: "Mixed vegetable curry", price: "₹120", image: "/mixed-veg.jpg", 
    },
    { id: "6", name: "Aloo Mattar", description: "Mattar with Aloo Gravy", price: "₹100", image: "/aloo-mattar.jpg", 
    },
    { id: "7", name: "Mattar Paneer", description: "Mattar with Paneer Gravy", price: "₹139", image: "/mattar-paneer.jpg",
   },
    { id: "8", name: "Paneer Butter Masala", description: "Creamy Paneer submerged in Butter", price: "₹160", image: "/paneer-butter-masala.jpg", },
    {
      id: "9",
      name: "Shahi Paneer",
      description: "Most Delecious Paneer",
      price: "₹160",
      image: "/shahi-paneer.jpg",
    },
    {
      id: "10",
      name: "Kadai Paneer",
      description: "Creamy paneer in kadai",
      price: "₹169",
      image: "/kadai-paneer.jpg",
    },
    {
      id: "11",
      name: "Paneer Do Pyaza",
      description: "Creamy paneer with Pyaza",
      price: "₹179",
      image: "/paneer-do-pyaza.jpg",
    },
    {
      id: "12",
      name: "Paneer Tikka Masala",
      description: "Creamy paneer tikka",
      price: "₹179",
      image: "/paneer-tikka-masala.jpg",
    },
    {
      id: "13",
      name: "Mushroom Masala",
      description: "Mushroom Masala Curry",
      price: "₹129",
      image: "/mushroom-masala.jpg",
    },
  ],
  noodles: [
    {
      id: "1",
      name: "Veg Hakka Noodles",
      description: "Stir-fried chow mein style",
      price: "₹90",
      image: "/veg-hakka-noodles.jpg",
    },
    { id: "2", name: "Egg Hakka Noodles", description: "Stir-fried chow mein style with egg", price: "₹109", image: "/egg-hakka-noodles.jpg" 
    },
    { id: "3", name: "Chicken Hakka Noodles", description: "Stir-fried chow mein style with chicken", price: "₹129", image: "/chicken-hakka-noodles.jpg" },
    {
      id: "4",
      name: "Mixed Hakka Noodles",
      description: "Stir-fried chow mein style",
      price: "₹149",
      image: "/mixed-hakka-noodles.jpg",
    },
    {
      id: "5",
      name: "Veg Schezwan Noodles",
      description: "Made with dried red chilies, garlic, and Sichuan peppercorns",
      price: "₹99",
      image: "/veg-schezwan-noodles.jpg",
    },
    { id: "6", name: "Egg Schezwan Noodles", description: "Noodles with Egg and a spicy and tangy sauce made from red chilies, garlic, and other aromatic spices", price: "₹120", image: "/egg-schezwan-noodles.jpg" 
},
   
    {
      id: "7",
      name: "Chicken Schezwan Noodles",
      description: "Noodles with chicken and  a spicy and tangy sauce made from red chilies, garlic, and other aromatic spices",
      price: "₹139",
      image: "/chicken-schezwan-noodles.jpg",
    },
    {
      id: "8",
      name: "Mixed Schezwan Noodles",
      description: "Combination of vegetables, and often chicken, eggs, or prawns, in a spicy, tangy, and pungent Schezwan sauce. ",
      price: "₹159",
      image: "/mixed-schezwan-noodles.jpg",
    },
  ],
  chineseveg: [
    {
      id: "1",
      name: "Chilli Paneer (Dry/Gravy)",
      description: "Paneer cubes tossed in a spicy, tangy, and slightly sweet sauce with onions and bell peppers.",
      price: "₹159",
      image: "/chilli-paneer.jpg",
    },
    {
      id: "2",
      name: "Crispy Chilli Baby Corn",
      description: "A cereal grain taken from corn (maize) harvested early while the stalks are still small and immature.",
      price: "₹150",
      image: "/crispy-chilli-baby-corn.jpg",
    },
    {
      id: "3",
      name: "Chilli Mushroom",
      description: "Crispy-fried or sautéed mushrooms tossed in a vibrant, spicy, sweet, and tangy sauce",
      price: "₹149",
      image: "/chilli-mushroom.jpg",
    },
    {
      id: "4",
      name: "Honey Chilli Potato",
      description: "Crispy fried potatoes tossed in a sticky, sweet, and spicy sauce.",
      price: "₹150",
      image: "/honey-chilli-potato.jpg",
    },
    { id: "5", name: "Crispy Corn (Salted)", description: "Coated sweet corn kernels in a mixture of flours and spices, deep-frying them until golden, and then seasoning with salt and other spices.", price: "₹149", image: "/crispy-corn.jpg" 
    },
    { id: "6", name: "Veg Manchurian", description: "Chopped and deep-fryed ingredients such as cauliflower, paneer, and then sautéeing them in a sauce flavored with soy sauce", price: "₹139", image: "/veg-manchurian.jpg" 
   },
    { id: "7", name: "French Fries", description: "Crispy Fried Potato Slices", price: "₹84", image: "/french-fries.jpg" },
    {
      id: "8",
      name: "Peri Peri French Fries",
      description: "Crispy Fried Potato Slices with Peri Peri Sauce",
      price: "₹95",
      image: "/peri-peri-french-fries.jpg",
    },
  ],
  chinesenonveg: [
    { id: "1", name: "Chilli Chicken", description: "Crispy, deep-fried chicken tossed in a spicy, tangy sauce with onions, capsicum, ginger, and garlic.", price: "₹160", image: "/chilli-chicken.jpg" 
   },
    { id: "2", name: "Chicken Manchurian", description: "Crispy fried chicken in a spicy, tangy, and slightly sweet sauce", price: "₹160", image: "/chicken-manchurian.jpg" },
    {
      id: "3",
      name: "Chicken 65",
      description: "Spicy deep-fried chicken with tender interior, and crispy exterior",
      price: "₹165",
      image: "/chicken-65.jpg",
    },
    { id: "4", name: "Dragon Chicken", description: "Crispy, deep-fried chicken strips tossed in a spicy, sweet, and tangy sauce with bell peppers, onions, and crunchy cashews.", price: "₹179", image: "/dragon-chicken.jpg" 
    },
    { id: "5", name: "Hot Garlic Chicken", description: "Spicy Indo-Chinese dish featuring crispy chicken pieces tossed in a fiery, garlic-loaded sauce", price: "₹170", image: "/hot-garlic-chicken.jpg" },
    {
      id: "6",
      name: "Chicken Wings (BBQ Sauce)",
      description: "Chicken pieces coated in a thick, tangy, sweet, and savory sauce, often with a smoky flavor. ",
      price: "₹180",
      image: "/chicken-wings.jpg",
    },
    { id: "7", name: "Butter Garlic Chicken", description: "Tender chicken, pan-fried or grilled, and coated in a rich, savory, and creamy sauce made from butter, garlic, and other seasonings like herbs or chili flakes", price: "₹170", image: "/butter-garlic-chicken.jpg" 
    },
    { id: "8", name: "Chicken Lollipop", description: "Made from frenched chicken winglets or drumettes, where the meat is cut loose from the bone end and pushed down to create a round, lollipop shape around the exposed bone", price: "₹145", image: "/chicken-lollipop.jpg" 
    },
    { id: "9", name: "Drums of Heaven", description: "Crispy, deep-fried chicken lollipops that have been tossed in a rich, sweet, and spicy sauce", price: "₹155", image: "/drums-of-heaven.jpg" 
    },
    { id: "10", name: "Crispy Chicken", description: "Deep fried Chicken that has an extremely crunchy and crispy exterior while the meat inside remains soft and juicy", price: "₹169", image: "/crispy-chicken.jpg" },
    { id: "11", name: "Fried Chicken (8 pc)", description: "Chicken pieces coated in a seasoned batter or breading and then fried until crispy and golden brown, with a juicy and tender interior.", price: "₹199", image: "/fried-chicken.jpg" },
  ],
  starter: [
    { id: "1", name: "Veg Pakora", description: "Crispy fried pakora", price: "₹80", image: "/veg-pakora.jpg" },
    { id: "2", name: "Onion Pakora", description: "Crispy Onion pakora", price: "₹80", image: "/onion-pakora.jpg" },
    { id: "3", name: "Paneer Pakora", description: "Grilled cottage cheese pakora", price: "₹120", image: "/paneer-pakora.jpg" },
    { id: "4", name: "Chicken Pakora", description: "Spiced grilled wings pakora", price: "₹150", image: "/chicken-pakora.jpg" },
    { id: "5", name: "Chicken Popcorn", description: "Chicken wings pakora", price: "₹140", image: "/chicken-popcorn.jpg" },
    { id: "6", name: "Chicken Fingers", description: "Crispy Chicken Fingers", price: "₹150", image: "/chicken-fingers.jpg" },
    { id: "7", name: "Fish Fingers", description: "Fried fish pieces", price: "₹170", image: "/fish-fingers.jpg" },
    
    { id: "8", name: "Veg Momo (8 pc)", description: "Veg Momo", price: "₹70", image: "/veg-momo.jpg" },
    { id: "9", name: "Chicken Momo (8 pc)", description: "Chicken momo", price: "₹90", image: "/chicken-momo.jpg" },
    {
      id: "10",
      name: "Sizzler Momo (Veg/Non-Veg)",
      description: "Sizzler Momo",
      price: "₹90/₹110",
      image: "/sizzler-momo.jpg",},
    {
      id: "11",
      name: "Kurkure Momo (Veg/Non-Veg)",
      description: "Sizzler Momo",
      price: "₹90/₹110",
      image: "/kurkure-momo.jpg",},
   ],
  rolls: [ 
    { id: "1", name: "Veg Roll", description: "Veg Roll", price: "₹60", image: "/veg-roll.jpg" },
    { id: "2", name: "Chicken Tikka Roll", description: "Roll with Chicken", price: "₹70", image: "/chicken-tikka-roll.jpg" },
    {
      id: "3",
      name: "Egg Roll",
      description: "Roll with Egg",
      price: "₹60",
      image: "/egg-roll.jpg",
    },
    { id: "4", name: "Paneer Keema Roll", description: "Roll with paneer", price: "₹80", image: "/paneer-keema-roll.jpg" },
    { id: "5", name: "Chicken Shawarma Roll", description: "Roll with Chicken Shawarma", price: "₹80", image: "/chicken-shawarma-roll.jpg" },
    {
      id: "6",
      name: "Chicken with Egg Roll",
      description: "Roll with Chicken and egg",
      price: "₹90",
      image: "/chicken-with-egg-roll.jpg",},
    { id: "7", name: "Veg Sandwich", description: "Veg Sandwich", price: "₹70", image: "/veg-sandwich.jpg" 
   },
    { id: "8", name: "Paneer Keema Sandwich", description: "Sandwich with paneer", price: "₹105", image: "/paneer-keema-sandwich.jpg" },
    {
      id: "9",
      name: "Chicken Sandwich",
      description: "Sandwich with Chicken",
      price: "₹100",
      image: "/chicken-sandwich.jpg",},  
],
    soup: [
    { id: "1", name: "Veg Manchow Soup", description: "Delecious pure veg soup", price: "₹60", image: "/veg-manchow-soup.jpg" },
    { id: "2", name: "Veg Hot & Sour Soup", description: "Delecious hot and vej soup", price: "₹60", image: "/veg-hot-sour-soup.jpg" },
    { id: "3", name: "Chicken Manchow Soup", description: "Hot Manchow Soup with Chicken", price: "₹80", image: "/chicken-manchow-soup.jpg" },
    { id: "4", name: "Chicken Hot & Sour Soup", description: "Delecuous Hot and sour Chicken soup", price: "₹80", image: "/chicken-hot-sour-soup.jpg" },
    { id: "5", name: "Lemon Coriander Soup (Chicken/Veg)", description: "Orange or apple juice", price: "₹70/₹90", image: "/lemon-coriander-soup.jpg" },
    ],

  drinks: [
    { id: "1", name: "Coke", description: "Chilled Coke", price: "₹30", image: "/coke.jpg" },
    { id: "2", name: "Sprite", description: "Chilled Sprite", price: "₹30", image: "/sprite.jpg" },
    { id: "3", name: "Masala Coke", description: "Chilled Coke with mixed Masala", price: "₹50", image: "/masala-coke.jpg" },
    { id: "4", name: "Fresh Lime Soda", description: "Chilled and Fresh lime soda", price: "₹50", image: "/fresh-lime-soda.jpg" },
    { id: "5", name: "Lemon Water", description: "Chilled Lemon Water", price: "₹40", image: "/lemon-water.jpg" },
    { id: "6", name: "Sweet Lassi", description: "Sweet yogurt based drink", price: "₹70", image: "/sweet-lassi.jpg" },
    { id: "7", name: "Mint Mojito", description: "Mint flavoured Mojito", price: "₹80", image: "/mint-mojito.jpg" },
    { id: "8", name: "Blue Lagoon Mojito", description: "Blue colour Lagoon Mojito", price: "₹90", image: "/blue-lagoon-mojito.jpg" },
    { id: "9", name: "Strawberry Mojito", description: "Strawberry Flavour Mojito", price: "₹80", image: "/strawberry-mojito.jpg" },
    { id: "10", name: "Blueberry Mojito", description: "Blueberry flavour Mojito", price: "₹80", image: "/blueberry-mojito.jpg" },
    { id: "11", name: "Green Apple Mojito", description: "Green Apple Flavour Mojito", price: "₹80", image: "/green-apple-mojito.jpg" },
    { id: "12", name: "Watermelon Mojito", description: "Watermelon Flavour Mojito", price: "₹70", image: "/watermelon-mojito.jpg" },
    { id: "13", name: "Orange Mojito", description: "Orange Flavour Mojito", price: "₹70", image: "/orange-mojito.jpg" },
  ],

  beverage: [
    { id: "1", name: "Milk Tea", description: "Milk Tea drink", price: "₹40", image: "/milk-tea.jpg" },
    { id: "2", name: "Milk Coffee", description: "Milk Coffee beverage", price: "₹29", image: "/milk-coffee.jpg" },
    { id: "3", name: "black Coffee", description: "Black coffee beverage", price: "₹30", image: "/black-coffee.jpg" },
    { id: "4", name: "Black Tea", description: "Hot black tea", price: "₹20", image: "/black-tea.jpg" },
    { id: "5", name: "Cappuccino", description: "Cappuccino Drink", price: "₹79", image: "/cappuccino.jpg" },
    { id: "6", name: "Hot Chocolate", description: "Warm chocolate drink", price: "₹99", image: "/hot-chocolate.jpg" },
    { id: "7", name: "Cold Coffee", description: "Chilled Coffee", price: "₹90", image: "/cold-coffee.jpg" },
    { id: "8", name: "Oreo Shake", description: "Milk Shake with oreo", price: "₹90", image: "/oreo-shake.jpg" },
    { id: "9", name: "Mango Shake", description: "Mango Flavour Shake", price: "₹90", image: "/mango-shake.jpg" },
    { id: "10", name: "Chocolate Shake", description: "Chocolate Flavour Shake", price: "₹120", image: "/chocolate-shake.jpg" },
    { id: "11", name: "Blueberry Shake", description: "Blueberry Flavour Shake", price: "₹100", image: "/blueberry-shake.jpg" },
    { id: "12", name: "Strawberry Shake", description: "/strawberry Flavour Shake", price: "₹100", image: "strawberry-shake.jpg" },
    { id: "13", name: "Banana Shake", description: "Banana Flavour Shake", price: "₹120", image: "/banana-shake.jpg" },
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

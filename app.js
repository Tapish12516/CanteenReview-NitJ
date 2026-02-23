/* =============================================
   CANTEEN MANAGEMENT SYSTEM — APP.JS
   Full SPA: Router, Data, Menu, Reviews, Admin
   ============================================= */

// ========== CANTEEN DEFINITIONS ==========
const CANTEENS = [
    { id: "canteen_main", name: "Yadav Canteen", icon: "🏢", location: "Near MNC Building" },
    { id: "canteen_north", name: "Campus Café", icon: "☕", location: "Near Main Building" },
    { id: "canteen_south", name: "Night Canteen", icon: "🍛", location: "Near MBH" },
    { id: "canteen_lib", name: "Snackers", icon: "📚", location: "SAC Building" }
];

const CATEGORY_EMOJI = {
    beverages: "☕", paratha: "🫓", snacks: "🍟", maggi: "🍜", sandwich: "🥪", meals: "🍛"
};

// ========== SEED DATA (Per-Canteen Menus) ==========
const CANTEEN_ITEMS = {
    // ===== YADAV CANTEEN (Real Menu) =====
    canteen_main: [
        // BEVERAGES
        { id: 101, name: "Tea", category: "beverages", price: 15, description: "Classic hot tea brewed fresh with aromatic tea leaves. Light and refreshing." },
        { id: 102, name: "Milk Tea", category: "beverages", price: 20, description: "Rich and creamy tea made with full cream milk and aromatic spices." },
        { id: 103, name: "Coffee", category: "beverages", price: 25, description: "Freshly brewed hot coffee made with premium coffee powder and milk." },
        { id: 104, name: "Hot Milk Glass", category: "beverages", price: 35, description: "A full glass of steaming hot milk, perfect for a healthy refreshment." },
        { id: 105, name: "Lassi Glass", category: "beverages", price: 30, description: "Thick and creamy yogurt-based drink, sweetened and served chilled." },
        { id: 106, name: "Lemon Shikanji", category: "beverages", price: 25, description: "Refreshing lemonade with a hint of salt, cumin, and black pepper. Perfect summer cooler." },
        { id: 107, name: "Cold Coffee", category: "beverages", price: 70, description: "Chilled blended coffee made with milk, sugar, and ice. Creamy and refreshing." },
        { id: 108, name: "Mango Shake", category: "beverages", price: 40, description: "Thick mango milkshake blended with ripe mangoes and chilled milk." },
        { id: 109, name: "Banana Shake", category: "beverages", price: 40, description: "Creamy banana milkshake blended with fresh bananas and cold milk." },
        { id: 110, name: "Butter Scotch Shake", category: "beverages", price: 80, description: "Premium butter scotch flavored milkshake, rich and indulgent." },
        // PARATHA
        { id: 201, name: "Aloo Paratha", category: "paratha", price: 30, description: "Flaky whole-wheat flatbread stuffed with spiced mashed potatoes. Served with curd and pickle." },
        { id: 202, name: "Aloo Pyaj Paratha", category: "paratha", price: 40, description: "Stuffed paratha filled with a spiced mix of potatoes and onions. Served with butter." },
        { id: 203, name: "Paneer Paratha", category: "paratha", price: 60, description: "Flatbread stuffed with seasoned crumbled paneer and spices. Rich and filling." },
        { id: 204, name: "Mix Paratha", category: "paratha", price: 40, description: "Stuffed paratha with a mix of vegetables and spices. A hearty breakfast option." },
        { id: 205, name: "Gobhi Paratha", category: "paratha", price: 40, description: "Whole-wheat flatbread filled with spiced grated cauliflower. Served with curd." },
        { id: 206, name: "Onion Paratha", category: "paratha", price: 40, description: "Crispy paratha stuffed with spiced onion filling. Light and flavorful." },
        // SNACKS
        { id: 301, name: "Momos (Plate)", category: "snacks", price: 60, description: "Steamed dumplings filled with seasoned vegetables, served with spicy red chutney." },
        { id: 302, name: "Crunchy Momos (Plate)", category: "snacks", price: 70, description: "Deep-fried crispy momos served with tangy schezwan sauce." },
        { id: 303, name: "Peri Peri French Fries", category: "snacks", price: 70, description: "Golden crispy french fries tossed in fiery peri peri seasoning." },
        { id: 304, name: "Pav Bhaji", category: "snacks", price: 50, description: "Spiced mashed vegetable curry served with buttered pav buns. A Mumbai street food classic." },
        { id: 305, name: "Manchurian (Plate)", category: "snacks", price: 60, description: "Crispy vegetable balls tossed in a tangy Indo-Chinese sauce with peppers and onions." },
        { id: 306, name: "Noodle Burger", category: "snacks", price: 40, description: "Unique fusion burger with crispy noodle patty, veggies, and sauces." },
        { id: 307, name: "Cheese Burger", category: "snacks", price: 50, description: "Classic burger with a veggie patty, melted cheese, lettuce, and special sauce." },
        { id: 308, name: "Hot Dog", category: "snacks", price: 20, description: "Soft bun filled with a spiced sausage, onions, and mustard-ketchup drizzle." },
        { id: 309, name: "Samosa", category: "snacks", price: 15, description: "Crispy golden pastry stuffed with spiced potato and pea filling. A classic snack." },
        { id: 310, name: "Bun Samosa", category: "snacks", price: 35, description: "Samosa sandwiched inside a soft bun with chutneys. The ultimate snack combo." },
        { id: 311, name: "Chana Samosa (Full Plate)", category: "snacks", price: 50, description: "Crushed samosa topped with spiced chickpea curry, chutneys, and onions." },
        { id: 312, name: "Chana Samosa (Half Plate)", category: "snacks", price: 30, description: "Half portion of chana samosa — samosa with chickpea curry and chutneys." },
        { id: 313, name: "Bread Pakora", category: "snacks", price: 20, description: "Bread slices stuffed with potato filling, dipped in gram flour batter and deep-fried." },
        { id: 314, name: "Bread Roll", category: "snacks", price: 20, description: "Crispy deep-fried roll stuffed with spiced mashed potato filling." },
        { id: 315, name: "Pattie", category: "snacks", price: 20, description: "Crispy deep-fried patty filled with a spiced vegetable stuffing." },
        { id: 316, name: "Special Pattie", category: "snacks", price: 30, description: "Premium pattie with extra stuffing and special masala blend." },
        { id: 317, name: "Paneer Pattie", category: "snacks", price: 30, description: "Crispy pattie stuffed with seasoned paneer and spices." },
        { id: 318, name: "Chaat Papri", category: "snacks", price: 60, description: "Crispy papri topped with yogurt, chutneys, chickpeas, and spices. Tangy and crunchy." },
        { id: 319, name: "Dahi Vada", category: "snacks", price: 50, description: "Soft lentil dumplings soaked in creamy yogurt, topped with tamarind and mint chutney." },
        { id: 320, name: "Tikki (2 Pcs)", category: "snacks", price: 50, description: "Crispy golden potato tikkis served with chutneys and spiced chickpeas." },
        { id: 321, name: "Tikki Chana (2 Pcs)", category: "snacks", price: 60, description: "Aloo tikki topped with spiced chana, yogurt, and tangy chutneys." },
        { id: 322, name: "White Pasta", category: "snacks", price: 80, description: "Creamy white sauce pasta with mixed vegetables and Italian herbs." },
        { id: 323, name: "Red Pasta", category: "snacks", price: 100, description: "Tangy tomato-based red sauce pasta with veggies and aromatic spices." },
        { id: 324, name: "Veg Wrap", category: "snacks", price: 50, description: "Soft tortilla wrap filled with fresh veggies, sauces, and seasonings." },
        { id: 325, name: "Paneer Wrap", category: "snacks", price: 60, description: "Tortilla wrap loaded with spiced paneer, veggies, and creamy sauce." },
        // MAGGI & NOODLES
        { id: 401, name: "Plain Maggi", category: "maggi", price: 30, description: "Classic Maggi noodles cooked with the original masala. Quick, tasty, and comforting." },
        { id: 402, name: "Veg Maggi", category: "maggi", price: 40, description: "Maggi noodles loaded with fresh mixed vegetables and extra seasoning." },
        { id: 403, name: "Butter Maggi", category: "maggi", price: 40, description: "Maggi noodles tossed in generous amounts of butter for a rich, indulgent taste." },
        { id: 404, name: "Sweet Corn Maggi", category: "maggi", price: 50, description: "Maggi noodles mixed with sweet corn kernels and special seasoning." },
        { id: 405, name: "Special Veg Maggi With Butter", category: "maggi", price: 50, description: "Loaded Maggi with mixed veggies, extra butter, and premium spices." },
        { id: 406, name: "Schezwan Maggi", category: "maggi", price: 50, description: "Spicy Maggi noodles tossed in fiery schezwan sauce with vegetables." },
        { id: 407, name: "Noodles (Full Plate)", category: "maggi", price: 60, description: "Full plate of stir-fried hakka noodles with vegetables and soy sauce." },
        { id: 408, name: "Noodles (Half Plate)", category: "maggi", price: 40, description: "Half portion of stir-fried hakka noodles with vegetables and soy sauce." },
        // SANDWICH & ROLLS
        { id: 501, name: "Veg Sandwich", category: "sandwich", price: 30, description: "Fresh vegetable sandwich with cucumber, tomato, onion, and chutney spread." },
        { id: 502, name: "Grill Sandwich", category: "sandwich", price: 70, description: "Grilled sandwich with melted cheese, veggies, and a crispy golden exterior." },
        { id: 503, name: "Cheese Sandwich", category: "sandwich", price: 90, description: "Loaded cheese sandwich with multiple cheese layers and grilled to perfection." },
        { id: 504, name: "Corn Sandwich", category: "sandwich", price: 90, description: "Grilled sandwich stuffed with sweet corn, cheese, and special seasoning." },
        { id: 505, name: "Spring Roll", category: "sandwich", price: 60, description: "Crispy deep-fried rolls filled with mixed vegetables and served with sauce." },
        { id: 506, name: "Crunchy Spring Roll", category: "sandwich", price: 70, description: "Extra crispy spring rolls with a crunchy coating and vegetable filling." },
        // MEALS
        { id: 601, name: "Sambhar Bada (2 Pcs)", category: "meals", price: 60, description: "Soft lentil vadas soaked in flavorful sambhar. A South Indian delicacy." },
        { id: 602, name: "Masala Dosa", category: "meals", price: 60, description: "Crispy golden dosa filled with spiced potato masala, served with chutney and sambhar." },
        { id: 603, name: "Paneer Dosa", category: "meals", price: 80, description: "Crispy dosa with a generous paneer filling, served with chutney and sambhar." },
        { id: 604, name: "Uttapam Dosa", category: "meals", price: 70, description: "Thick, soft pancake topped with onions, tomatoes, and green chilies. Served with chutney." },
        { id: 605, name: "Chhole Bhature (Plate)", category: "meals", price: 60, description: "Spicy chickpea curry with fluffy deep-fried bhature. A North Indian classic." },
        { id: 606, name: "Chhoe Kulcha (Plate)", category: "meals", price: 50, description: "Spiced chickpea curry served with soft, buttered kulcha bread." },
        { id: 607, name: "Fried Rice (Plate)", category: "meals", price: 80, description: "Indo-Chinese style fried rice with mixed vegetables, soy sauce, and spices." },
        { id: 608, name: "Chana Rice (Full Plate)", category: "meals", price: 70, description: "Steamed rice served with spiced chickpea curry. A simple, filling meal." }
    ],

    // ===== CAMPUS CAFÉ (Coffee & Sandwich focus) =====
    canteen_north: [
        { id: 1001, name: "Espresso", category: "beverages", price: 40, description: "Strong single-shot espresso, bold and aromatic." },
        { id: 1002, name: "Cappuccino", category: "beverages", price: 60, description: "Frothy cappuccino with steamed milk and a dusting of cocoa." },
        { id: 1003, name: "Cold Coffee", category: "beverages", price: 80, description: "Blended iced coffee with cream and chocolate drizzle." },
        { id: 1004, name: "Hot Chocolate", category: "beverages", price: 70, description: "Rich and creamy hot chocolate topped with marshmallows." },
        { id: 1005, name: "Green Tea", category: "beverages", price: 30, description: "Light and refreshing green tea with antioxidant benefits." },
        { id: 1006, name: "Iced Tea", category: "beverages", price: 50, description: "Chilled lemon iced tea, sweet and tangy." },
        { id: 1007, name: "Mango Smoothie", category: "beverages", price: 70, description: "Thick mango smoothie blended with yogurt and honey." },
        { id: 1011, name: "Veg Sandwich", category: "sandwich", price: 40, description: "Fresh veggie sandwich with lettuce, tomato, and herb spread." },
        { id: 1012, name: "Grill Sandwich", category: "sandwich", price: 80, description: "Grilled sandwich with cheese, corn, and capsicum filling." },
        { id: 1013, name: "Club Sandwich", category: "sandwich", price: 120, description: "Triple-layer club sandwich with cheese, veggies, and sauces." },
        { id: 1014, name: "Panini", category: "sandwich", price: 100, description: "Italian-style pressed sandwich with mozzarella and pesto." },
        { id: 1021, name: "White Pasta", category: "snacks", price: 90, description: "Creamy white sauce penne pasta with mushrooms and herbs." },
        { id: 1022, name: "Red Pasta", category: "snacks", price: 100, description: "Tangy arrabbiata pasta with fresh basil and parmesan." },
        { id: 1023, name: "Garlic Bread", category: "snacks", price: 60, description: "Crispy baguette slices with garlic butter and herbs." },
        { id: 1024, name: "French Fries", category: "snacks", price: 70, description: "Golden crispy fries with ketchup and mayo." },
        { id: 1025, name: "Nachos", category: "snacks", price: 90, description: "Tortilla chips with cheese sauce, jalapeños, and salsa." },
        { id: 1026, name: "Veg Wrap", category: "snacks", price: 60, description: "Whole wheat wrap with grilled veggies and hummus." },
        { id: 1031, name: "Chocolate Brownie", category: "snacks", price: 60, description: "Rich fudgy chocolate brownie served warm." },
        { id: 1032, name: "Pastry", category: "snacks", price: 50, description: "Fresh cream pastry with seasonal fruit topping." },
        { id: 1033, name: "Cheesecake Slice", category: "snacks", price: 120, description: "New York style baked cheesecake with berry compote." }
    ],

    // ===== NIGHT CANTEEN (Late-night comfort food) =====
    canteen_south: [
        // ===== PHOTO 1 - COLUMN 1 =====
        { id: 2001, name: "Aloo Prantha", category: "paratha", price: 30, description: "Stuffed aloo paratha, a filling late-night option." },
        { id: 2002, name: "Gobi Prantha", category: "paratha", price: 40, description: "Whole-wheat paratha stuffed with spiced grated cauliflower." },
        { id: 2003, name: "Aloo Pyaz Prantha", category: "paratha", price: 40, description: "Paratha filled with a spiced mix of potatoes and onions." },
        { id: 2004, name: "Mix Prantha", category: "paratha", price: 50, description: "Stuffed paratha with a mix of vegetables and spices." },
        { id: 2005, name: "Paneer Prantha", category: "paratha", price: 50, description: "Flatbread stuffed with seasoned crumbled paneer." },
        { id: 2006, name: "Aloo Methi Prantha", category: "paratha", price: 40, description: "Paratha stuffed with potato and fresh fenugreek leaves." },
        { id: 2007, name: "Plain Prantha", category: "paratha", price: 15, description: "Simple whole-wheat paratha, crispy and light." },
        { id: 2008, name: "Plain Roti (Tawa)", category: "paratha", price: 10, description: "Soft tawa roti, perfect with any curry." },
        { id: 2009, name: "Butter Roti (Tawa)", category: "paratha", price: 12, description: "Tawa roti brushed with melted butter." },
        { id: 2010, name: "Laccha Prantha", category: "paratha", price: 30, description: "Multi-layered flaky laccha paratha." },
        { id: 2011, name: "Chaap Gravy", category: "meals", price: 70, description: "Rich soya chaap in creamy gravy." },
        { id: 2012, name: "Paneer Fried Rice", category: "meals", price: 90, description: "Fried rice loaded with paneer cubes and veggies." },
        { id: 2013, name: "Samosa", category: "snacks", price: 15, description: "Crispy samosa, available round the clock." },
        { id: 2014, name: "Chana Samosa (1pc)", category: "snacks", price: 30, description: "Samosa topped with spiced chickpea curry and chutneys." },
        { id: 2015, name: "Chana Samosa (2pc)", category: "snacks", price: 50, description: "Double samosa plate with chickpea curry and chutneys." },
        { id: 2016, name: "Chana Puri", category: "meals", price: 50, description: "Spiced chana curry served with fluffy puris." },
        { id: 2017, name: "Chana Bhatura", category: "meals", price: 60, description: "Spicy chickpea curry with fluffy deep-fried bhature." },
        { id: 2018, name: "Chana Kulcha", category: "meals", price: 50, description: "Spiced chana served with soft kulcha bread." },
        { id: 2019, name: "Chaap Kulcha", category: "meals", price: 70, description: "Soya chaap curry served with kulcha bread." },
        { id: 2020, name: "Nutri Kulcha", category: "meals", price: 50, description: "Nutri soya curry served with soft kulcha bread." },
        { id: 2021, name: "Pav Bhaji", category: "snacks", price: 50, description: "Spiced mashed vegetable curry served with buttered pav." },
        { id: 2022, name: "Malai Chaap", category: "meals", price: 70, description: "Creamy malai soya chaap, rich and flavorful." },

        // ===== PHOTO 1 - COLUMN 2 =====
        { id: 2023, name: "Chana Plate", category: "meals", price: 40, description: "Simple chickpea curry plate." },
        { id: 2024, name: "Tandoori Chaap", category: "meals", price: 70, description: "Smoky tandoori-flavored soya chaap." },
        { id: 2025, name: "Pudina Chaap", category: "meals", price: 70, description: "Soya chaap marinated in fresh mint and spices." },
        { id: 2026, name: "Aloo Tikki", category: "snacks", price: 50, description: "Crispy golden aloo tikki served with chutneys." },
        { id: 2027, name: "Aloo Tikki Chana", category: "snacks", price: 60, description: "Aloo tikki topped with spiced chana and chutneys." },
        { id: 2028, name: "Veg. Wrap", category: "sandwich", price: 70, description: "Soft wrap filled with fresh veggies and sauces." },
        { id: 2029, name: "Chaap Wrap", category: "sandwich", price: 80, description: "Wrap loaded with spiced soya chaap and chutney." },
        { id: 2030, name: "Paneer Wrap", category: "sandwich", price: 80, description: "Wrap filled with spiced paneer tikka." },
        { id: 2031, name: "Mix Pakoda", category: "snacks", price: 50, description: "Assorted mixed vegetable pakodas, deep-fried and crunchy." },
        { id: 2032, name: "Red Pasta", category: "meals", price: 90, description: "Tangy tomato-based red sauce pasta." },
        { id: 2033, name: "White Pasta", category: "meals", price: 100, description: "Creamy white sauce pasta with vegetables." },
        { id: 2034, name: "Mix Pasta", category: "meals", price: 110, description: "Mixed red and white sauce pasta with extra toppings." },
        { id: 2035, name: "Veg. Noodles", category: "maggi", price: 50, description: "Stir-fried hakka noodles with mixed vegetables." },
        { id: 2036, name: "Cheese Chilli", category: "meals", price: 80, description: "Crispy cheese cubes tossed in tangy Indo-Chinese sauce." },
        { id: 2037, name: "Cheese Fingers", category: "snacks", price: 80, description: "Deep-fried crispy cheese fingers, golden and gooey." },
        { id: 2038, name: "Paneer Bhurji", category: "snacks", price: 50, description: "Scrambled paneer cooked with onions, tomatoes, and spices." },
        { id: 2039, name: "Mushroom Matar", category: "meals", price: 80, description: "Mushroom and green peas curry in rich gravy." },
        { id: 2040, name: "Shahi Paneer", category: "meals", price: 80, description: "Paneer cubes in rich creamy tomato-based Mughlai gravy." },
        { id: 2041, name: "Karahi Paneer", category: "meals", price: 80, description: "Paneer cooked kadhai-style with peppers and spices." },
        { id: 2042, name: "Aloo Jeera Fried", category: "meals", price: 80, description: "Cumin-spiced fried potatoes, simple and flavorful." },
        { id: 2043, name: "Aloo Puri", category: "meals", price: 50, description: "Aloo sabzi served with deep-fried puris." },
        { id: 2044, name: "Patato Pops", category: "snacks", price: 80, description: "Crispy spiced potato pops, crunchy and addictive." },

        // ===== PHOTO 2 - COLUMN 1 =====
        { id: 2045, name: "Chilli Garlic Noodles", category: "maggi", price: 70, description: "Spicy chilli garlic flavored noodles, Indo-Chinese style." },
        { id: 2046, name: "Veg. Burger", category: "sandwich", price: 40, description: "Classic veggie burger with fresh veggies and sauces." },
        { id: 2047, name: "Noodles Burger", category: "sandwich", price: 60, description: "Unique fusion burger with crispy noodle patty." },
        { id: 2048, name: "Tandoori Burger", category: "sandwich", price: 50, description: "Spicy tandoori-flavored veggie burger." },
        { id: 2049, name: "Cheese Burger", category: "sandwich", price: 50, description: "Cheesy burger with melted cheese and special sauce." },
        { id: 2050, name: "Thousand Burger", category: "sandwich", price: 50, description: "Burger loaded with thousand island dressing and veggies." },
        { id: 2051, name: "Veg. Sandwich Brown", category: "sandwich", price: 50, description: "Brown bread veggie sandwich with fresh fillings." },
        { id: 2052, name: "Veg. Sandwich", category: "sandwich", price: 40, description: "Fresh vegetable sandwich with chutney." },
        { id: 2053, name: "Cheese Sandwich Brown", category: "sandwich", price: 50, description: "Brown bread sandwich loaded with cheese." },
        { id: 2054, name: "Cheese Sandwich", category: "sandwich", price: 50, description: "Classic cheese sandwich grilled to perfection." },
        { id: 2055, name: "Chilli Potato", category: "snacks", price: 80, description: "Crispy fried potato fingers tossed in spicy chilli sauce." },
        { id: 2056, name: "Cheese Finger", category: "snacks", price: 80, description: "Deep-fried crispy cheese fingers, golden and gooey." },
        { id: 2057, name: "Veg. Maggie", category: "maggi", price: 40, description: "Maggi noodles loaded with fresh mixed vegetables." },
        { id: 2058, name: "Sweet Corn", category: "snacks", price: 30, description: "Hot buttered sweet corn cup with spices." },
        { id: 2059, name: "Veg Biryani", category: "meals", price: 100, description: "Fragrant vegetable biryani with aromatic spices." },
        { id: 2060, name: "Corn Maggie", category: "maggi", price: 50, description: "Maggi noodles mixed with sweet corn kernels." },
        { id: 2061, name: "Veg. Fried Rice", category: "meals", price: 80, description: "Indo-Chinese fried rice with mixed vegetables." },
        { id: 2062, name: "French Fries", category: "snacks", price: 70, description: "Golden crispy french fries with ketchup." },
        { id: 2063, name: "Espresso Coffee", category: "beverages", price: 30, description: "Bold espresso shot, rich and aromatic." },
        { id: 2064, name: "Hot Coffee", category: "beverages", price: 25, description: "Strong hot coffee for all-nighter evenings." },
        { id: 2065, name: "Special Tea", category: "beverages", price: 20, description: "Premium spiced tea with extra flavor." },
        { id: 2066, name: "Tea", category: "beverages", price: 15, description: "Hot chai for late-night study sessions." },

        // ===== PHOTO 2 - COLUMN 2 (NON-VEG & CHICKEN) =====
        { id: 2067, name: "Chicken Curry (4pcs)", category: "meals", price: 130, description: "Homestyle chicken curry with 4 pieces." },
        { id: 2068, name: "Butter Chicken (4pcs)", category: "meals", price: 140, description: "Rich and creamy butter chicken with 4 pieces." },
        { id: 2069, name: "Chicken Rice Curry", category: "meals", price: 150, description: "Chicken curry served with steamed rice." },
        { id: 2070, name: "Butter Chicken Rice", category: "meals", price: 160, description: "Butter chicken served with steamed rice." },
        { id: 2071, name: "Chicken Biryani", category: "meals", price: 160, description: "Aromatic chicken biryani with tender pieces and raita." },
        { id: 2072, name: "Chicken Chilli (8pcs)", category: "meals", price: 130, description: "Indo-Chinese chilli chicken with 8 crispy pieces." },
        { id: 2073, name: "Karahi Chicken", category: "meals", price: 140, description: "Chicken cooked kadhai-style with peppers and spices." },
        { id: 2074, name: "Chicken Fried (8pcs)", category: "meals", price: 130, description: "Crispy deep-fried chicken pieces, 8 per plate." },
        { id: 2075, name: "Chicken Fried Rice", category: "meals", price: 140, description: "Fried rice loaded with chicken pieces." },
        { id: 2076, name: "Bread Omelette", category: "snacks", price: 50, description: "Fluffy omelette served between toasted bread slices." },
        { id: 2077, name: "Omelette", category: "snacks", price: 40, description: "Classic masala omelette with onions and green chillies." },
        { id: 2078, name: "Maggie", category: "maggi", price: 30, description: "Late-night comfort — classic Maggi noodles." },
        { id: 2079, name: "Chicken Burger", category: "sandwich", price: 80, description: "Juicy chicken patty burger with toppings." },
        { id: 2080, name: "Chicken Sandwich", category: "sandwich", price: 80, description: "Loaded chicken sandwich with mayo and veggies." },
        { id: 2081, name: "Chicken Pasta", category: "meals", price: 120, description: "Pasta loaded with seasoned chicken and creamy sauce." },
        { id: 2082, name: "Chicken Egg Burger", category: "sandwich", price: 90, description: "Loaded burger with chicken patty and fried egg." },
        { id: 2083, name: "Chicken Finger", category: "meals", price: 100, description: "Crispy breaded chicken finger strips." },
        { id: 2084, name: "Chicken Nuggets", category: "meals", price: 110, description: "Golden crispy chicken nuggets with dipping sauce." },
        { id: 2085, name: "Chicken Egg Noodles", category: "maggi", price: 110, description: "Noodles loaded with chicken pieces and egg." },
        { id: 2086, name: "Chicken Seekh Kabab", category: "meals", price: 110, description: "Spiced minced chicken seekh kababs, smoky and juicy." },
        { id: 2087, name: "Egg Biryani", category: "meals", price: 110, description: "Flavorful biryani with boiled eggs and spices." },
        { id: 2088, name: "Egg Burger", category: "sandwich", price: 60, description: "Burger with fried egg, veggies, and sauces." },

        // ===== PHOTO 2 - COLUMN 3 =====
        { id: 2089, name: "Egg Prantha", category: "paratha", price: 60, description: "Paratha cooked with beaten egg, crispy and filling." },
        { id: 2090, name: "Egg Bhurji", category: "snacks", price: 50, description: "Spicy scrambled eggs with onions and masala." },
        { id: 2091, name: "Egg Wrap", category: "sandwich", price: 80, description: "Egg omelette wrapped with chutney and veggies." },
        { id: 2092, name: "Egg Fried Rice", category: "meals", price: 90, description: "Fried rice with scrambled eggs and veggies." },
        { id: 2093, name: "Egg Curry", category: "meals", price: 70, description: "Boiled eggs in spiced onion-tomato gravy." },
        { id: 2094, name: "Egg Maggie", category: "maggi", price: 50, description: "Maggi topped with scrambled eggs and spices." },
        { id: 2095, name: "Egg Noodles", category: "maggi", price: 70, description: "Stir-fried noodles with scrambled egg and veggies." },
        { id: 2096, name: "Cheese Egg Burger", category: "sandwich", price: 70, description: "Burger with egg, melted cheese, and toppings." },
        { id: 2097, name: "Chicken Egg Cheese Burger", category: "sandwich", price: 100, description: "Ultimate burger with chicken, egg, and melted cheese." },
        { id: 2098, name: "Chicken Wrap", category: "sandwich", price: 100, description: "Wrap loaded with tandoori chicken pieces." },
        { id: 2099, name: "Soft Drink", category: "beverages", price: 40, description: "Chilled Coca-Cola, Thums Up, Sprite, or Limca." },
    ],

    // ===== SNACKERS (Quick bites at SAC) =====
    canteen_lib: [
        { id: 3001, name: "Tea", category: "beverages", price: 15, description: "Quick cup of chai between classes." },
        { id: 3002, name: "Cold Coffee", category: "beverages", price: 50, description: "Chilled coffee to beat the heat." },
        { id: 3003, name: "Lassi", category: "beverages", price: 25, description: "Sweet lassi — thick and refreshing." },
        { id: 3004, name: "Lemon Soda", category: "beverages", price: 20, description: "Fizzy lemon soda with a pinch of salt and sugar." },
        { id: 3011, name: "Samosa", category: "snacks", price: 15, description: "Crispy samosa, the all-time favorite campus snack." },
        { id: 3012, name: "Bun Samosa", category: "snacks", price: 30, description: "Samosa in a bun with chutney." },
        { id: 3013, name: "Bread Pakora", category: "snacks", price: 20, description: "Deep-fried bread pakora, crispy and filling." },
        { id: 3014, name: "Pattie", category: "snacks", price: 15, description: "Quick veggie pattie for a snack break." },
        { id: 3015, name: "Momos (Plate)", category: "snacks", price: 55, description: "Steamed veg momos — quick and tasty." },
        { id: 3016, name: "Crunchy Momos (Plate)", category: "snacks", price: 65, description: "Fried momos with schezwan dip." },
        { id: 3017, name: "Peri Peri French Fries", category: "snacks", price: 65, description: "Spiced fries for a quick munch." },
        { id: 3018, name: "Chaat Papri", category: "snacks", price: 50, description: "Tangy chaat papri — a campus favorite." },
        { id: 3019, name: "Dahi Vada", category: "snacks", price: 45, description: "Soft vada in chilled yogurt and chutney." },
        { id: 3020, name: "Tikki (2 Pcs)", category: "snacks", price: 45, description: "Golden aloo tikki with chutneys." },
        { id: 3021, name: "Pav Bhaji", category: "snacks", price: 55, description: "Buttery pav bhaji — filling and delicious." },
        { id: 3022, name: "Manchurian (Plate)", category: "snacks", price: 65, description: "Crispy veg manchurian in tangy gravy." },
        { id: 3031, name: "Plain Maggi", category: "maggi", price: 30, description: "Quick Maggi fix between lectures." },
        { id: 3032, name: "Veg Maggi", category: "maggi", price: 40, description: "Maggi with extra veggies." },
        { id: 3041, name: "Veg Sandwich", category: "sandwich", price: 35, description: "Simple veg sandwich, quick and fresh." },
        { id: 3042, name: "Grill Sandwich", category: "sandwich", price: 65, description: "Grilled cheese sandwich, hot and crispy." }
    ]
};

// Per-canteen reviews with slightly different ratings
function generateCanteenReviews() {
    // Reviews reference items in their respective canteens
    const canteenBases = {
        canteen_main: [
            { itemId: 201, name: "Rahul S.", comment: "Best aloo paratha on campus! Perfectly stuffed and crispy." },
            { itemId: 309, name: "Amit K.", comment: "Crispy samosa every time! The filling is so flavorful." },
            { itemId: 107, name: "Karan P.", comment: "Cold coffee is unbeatable! Perfect blend." },
            { itemId: 301, name: "Anita D.", comment: "Momos are perfectly steamed. The red chutney is fire!" },
            { itemId: 401, name: "Vikram J.", comment: "Late night plain maggi hits different here." },
            { itemId: 605, name: "Pooja V.", comment: "Chhole bhature are authentic! Fluffy and spicy." },
        ],
        canteen_north: [
            { itemId: 1002, name: "Rahul S.", comment: "Best cappuccino on campus, cafe-quality!" },
            { itemId: 1003, name: "Priya M.", comment: "Cold coffee with chocolate drizzle is amazing." },
            { itemId: 1012, name: "Sneha R.", comment: "Grill sandwich is loaded with cheese. Delicious!" },
            { itemId: 1021, name: "Karan P.", comment: "White pasta is creamy and perfectly seasoned." },
            { itemId: 1031, name: "Meera L.", comment: "Brownie is warm and fudgy. Heaven!" },
            { itemId: 1025, name: "Ravi T.", comment: "Nachos with cheese sauce — addictive!" },
        ],
        canteen_south: [
            { itemId: 2011, name: "Deepak S.", comment: "Late night Maggi is the best comfort food." },
            { itemId: 2013, name: "Amit K.", comment: "Egg Maggi at midnight — nothing beats it!" },
            { itemId: 2021, name: "Vikram J.", comment: "Egg fried rice is filling and well-spiced." },
            { itemId: 2033, name: "Anita D.", comment: "Hot momos at 11 PM — lifesaver!" },
            { itemId: 2023, name: "Priya M.", comment: "Egg roll is perfectly made, love the chutney." },
            { itemId: 2034, name: "Neha G.", comment: "Cheese burger at night is pure comfort." },
        ],
        canteen_lib: [
            { itemId: 3011, name: "Rahul S.", comment: "Quick samosa between classes — always crispy!" },
            { itemId: 3015, name: "Sneha R.", comment: "Momos here are affordable and tasty." },
            { itemId: 3018, name: "Karan P.", comment: "Chaat papri is the best snack on campus." },
            { itemId: 3021, name: "Pooja V.", comment: "Pav bhaji is buttery and delicious." },
            { itemId: 3031, name: "Meera L.", comment: "Quick Maggi between lectures — perfect!" },
            { itemId: 3042, name: "Ravi T.", comment: "Grill sandwich is hot, crispy, and filling." },
        ]
    };
    const ratingSets = {
        canteen_main: [5, 5, 4, 5, 4, 5],
        canteen_north: [5, 4, 5, 4, 5, 4],
        canteen_south: [4, 5, 4, 5, 4, 5],
        canteen_lib: [4, 4, 5, 5, 4, 4]
    };
    const reviews = {};
    let id = 1;
    CANTEENS.forEach(c => {
        const base = canteenBases[c.id] || [];
        const ratings = ratingSets[c.id] || [];
        reviews[c.id] = base.map((r, i) => ({
            id: id++, itemId: r.itemId, name: r.name,
            rating: ratings[i] || 4,
            comment: r.comment,
            date: "2026-02-" + (14 + (i % 7)),
            canteenId: c.id
        }));
    });
    return reviews;
}

const CANTEEN_REVIEWS = generateCanteenReviews();

const ADMIN_CREDS = { username: "admin", password: "admin123" };

const DEFAULT_USERS = [
    { rollNo: "2024CS101", name: "Rahul Sharma", password: "rahul123" },
    { rollNo: "2024EC202", name: "Priya Mehta", password: "priya123" },
    { rollNo: "2024ME303", name: "Amit Kumar", password: "amit123" }
];

const DEFAULT_FEEDBACK = [
    { id: 1, rollNo: "2024CS101", name: "Rahul Sharma", rating: 5, topic: "food_quality", message: "The food quality has improved a lot this semester! Really enjoying the new menu items.", date: "2026-02-18" },
    { id: 2, rollNo: "2024EC202", name: "Priya Mehta", rating: 4, topic: "service", message: "Service is generally quick during non-peak hours. Could use more staff during lunch rush.", date: "2026-02-17" }
];

const TOPIC_LABELS = {
    food_quality: "Food Quality", hygiene: "Hygiene", service: "Service Speed",
    pricing: "Pricing", variety: "Menu Variety", other: "Other"
};

// ========== DATA LAYER ==========
class DataStore {
    constructor() {
        this.init();
    }

    init() {
        if (!localStorage.getItem("canteen_items_v4")) {
            localStorage.setItem("canteen_items_v4", JSON.stringify(CANTEEN_ITEMS));
        }
        if (!localStorage.getItem("canteen_reviews_v2")) {
            localStorage.setItem("canteen_reviews_v2", JSON.stringify(CANTEEN_REVIEWS));
        }
        if (!localStorage.getItem("canteen_users")) {
            localStorage.setItem("canteen_users", JSON.stringify(DEFAULT_USERS));
        }
        if (!localStorage.getItem("canteen_feedback")) {
            localStorage.setItem("canteen_feedback", JSON.stringify(DEFAULT_FEEDBACK));
        }
        if (!localStorage.getItem("canteen_wishlists")) {
            localStorage.setItem("canteen_wishlists", JSON.stringify({}));
        }
    }

    // Items (per-canteen)
    getAllCanteenItems() { return JSON.parse(localStorage.getItem("canteen_items_v4")) || {}; }
    saveAllCanteenItems(allItems) { localStorage.setItem("canteen_items_v4", JSON.stringify(allItems)); }
    getItems(canteenId) {
        const all = this.getAllCanteenItems();
        return all[canteenId] || [];
    }
    getItem(id, canteenId) {
        return this.getItems(canteenId).find(i => i.id === id);
    }
    saveItems(items, canteenId) {
        const all = this.getAllCanteenItems();
        all[canteenId] = items;
        this.saveAllCanteenItems(all);
    }
    addItem(item, canteenId) {
        const items = this.getItems(canteenId);
        item.id = Date.now();
        items.push(item);
        this.saveItems(items, canteenId);
        return item;
    }
    updateItem(id, data, canteenId) {
        const items = this.getItems(canteenId);
        const idx = items.findIndex(i => i.id === id);
        if (idx !== -1) { items[idx] = { ...items[idx], ...data }; this.saveItems(items, canteenId); return items[idx]; }
        return null;
    }
    deleteItem(id, canteenId) {
        this.saveItems(this.getItems(canteenId).filter(i => i.id !== id), canteenId);
        // Delete reviews for this item
        const allReviews = this.getAllReviews();
        if (allReviews[canteenId]) {
            allReviews[canteenId] = allReviews[canteenId].filter(r => r.itemId !== id);
            this.saveAllReviews(allReviews);
        }
    }
    // Get all items across all canteens (for compare page)
    getAllItems() {
        const all = this.getAllCanteenItems();
        const result = [];
        Object.entries(all).forEach(([canteenId, items]) => {
            items.forEach(item => result.push({ ...item, canteenId }));
        });
        return result;
    }

    // Reviews (per-canteen)
    getAllReviews() { return JSON.parse(localStorage.getItem("canteen_reviews_v2")) || {}; }
    saveAllReviews(reviews) { localStorage.setItem("canteen_reviews_v2", JSON.stringify(reviews)); }
    getReviews(canteenId) {
        const all = this.getAllReviews();
        return all[canteenId] || [];
    }
    getItemReviews(itemId, canteenId) {
        return this.getReviews(canteenId).filter(r => r.itemId === itemId).sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    addReview(review, canteenId) {
        const all = this.getAllReviews();
        if (!all[canteenId]) all[canteenId] = [];
        review.id = Date.now();
        review.date = new Date().toISOString().split("T")[0];
        review.canteenId = canteenId;
        all[canteenId].push(review);
        this.saveAllReviews(all);
        return review;
    }
    getAvgRating(itemId, canteenId) {
        const reviews = this.getItemReviews(itemId, canteenId);
        if (reviews.length === 0) return { avg: 0, count: 0 };
        const sum = reviews.reduce((s, r) => s + r.rating, 0);
        return { avg: (sum / reviews.length).toFixed(1), count: reviews.length };
    }
    getTotalReviewCount() {
        const all = this.getAllReviews();
        let total = 0;
        Object.values(all).forEach(arr => total += arr.length);
        return total;
    }

    // Users
    getUsers() { return JSON.parse(localStorage.getItem("canteen_users")) || []; }
    saveUsers(users) { localStorage.setItem("canteen_users", JSON.stringify(users)); }
    findUser(rollNo) { return this.getUsers().find(u => u.rollNo.toLowerCase() === rollNo.toLowerCase()); }
    registerUser(name, rollNo, password) {
        if (this.findUser(rollNo)) return null;
        const users = this.getUsers();
        users.push({ rollNo, name, password });
        this.saveUsers(users);
        return { rollNo, name };
    }
    loginUser(rollNo, password) {
        const user = this.findUser(rollNo);
        if (user && user.password === password) return { rollNo: user.rollNo, name: user.name };
        return null;
    }

    // Wishlists
    getWishlists() { return JSON.parse(localStorage.getItem("canteen_wishlists")) || {}; }
    saveWishlists(w) { localStorage.setItem("canteen_wishlists", JSON.stringify(w)); }
    getUserWishlist(rollNo) { return this.getWishlists()[rollNo] || []; }
    isInWishlist(rollNo, itemId) { return this.getUserWishlist(rollNo).includes(itemId); }
    toggleWishlist(rollNo, itemId) {
        const wishlists = this.getWishlists();
        if (!wishlists[rollNo]) wishlists[rollNo] = [];
        const idx = wishlists[rollNo].indexOf(itemId);
        if (idx === -1) { wishlists[rollNo].push(itemId); this.saveWishlists(wishlists); return true; }
        else { wishlists[rollNo].splice(idx, 1); this.saveWishlists(wishlists); return false; }
    }
    removeFromWishlist(rollNo, itemId) {
        const wishlists = this.getWishlists();
        if (wishlists[rollNo]) { wishlists[rollNo] = wishlists[rollNo].filter(id => id !== itemId); this.saveWishlists(wishlists); }
    }

    // Feedback
    getFeedback() { return JSON.parse(localStorage.getItem("canteen_feedback")) || []; }
    saveFeedback(fb) { localStorage.setItem("canteen_feedback", JSON.stringify(fb)); }
    getUserFeedback(rollNo) { return this.getFeedback().filter(f => f.rollNo === rollNo).sort((a, b) => new Date(b.date) - new Date(a.date)); }
    addFeedback(fb) {
        const all = this.getFeedback();
        fb.id = Date.now();
        fb.date = new Date().toISOString().split("T")[0];
        all.push(fb);
        this.saveFeedback(all);
        return fb;
    }
    getTotalFeedbackCount() { return this.getFeedback().length; }
}

// ========== APP ==========
class App {
    constructor() {
        this.store = new DataStore();
        this.currentPage = "menu";
        this.currentItemId = null;
        this.isAdminLoggedIn = false;
        this.selectedRating = 0;
        this.feedbackRating = 0;
        this.editingItemId = null;
        this.activeCategory = "all";
        this.searchQuery = "";
        this.currentUser = null; // { rollNo, name }
        this.activeCanteen = CANTEENS[0].id; // default to first canteen

        this.cacheDOM();
        this.bindEvents();
        this.initHeroParticles();
        this.handleRoute();

        window.addEventListener("hashchange", () => this.handleRoute());
    }

    // ===== DOM CACHE =====
    cacheDOM() {
        // Pages
        this.heroSection = document.getElementById("hero-section");
        this.pageMenu = document.getElementById("page-menu");
        this.pageDetail = document.getElementById("page-detail");
        this.pageAdmin = document.getElementById("page-admin");
        this.pageCompare = document.getElementById("page-compare");
        this.pagePortal = document.getElementById("page-portal");

        // Nav
        this.navMenu = document.getElementById("nav-menu");
        this.navCompare = document.getElementById("nav-compare");
        this.navPortal = document.getElementById("nav-portal");
        this.navPortalText = document.getElementById("nav-portal-text");
        this.navAdmin = document.getElementById("nav-admin");

        // Compare Page
        this.compareSearch = document.getElementById("compare-search");
        this.compareGrid = document.getElementById("compare-grid");
        this.compareEmpty = document.getElementById("compare-empty");

        // Canteen Selector
        this.canteenSelector = document.getElementById("canteen-selector");

        // Menu
        this.foodGrid = document.getElementById("food-grid");
        this.searchInput = document.getElementById("search-input");
        this.categoryFilters = document.getElementById("category-filters");
        this.emptyState = document.getElementById("empty-state");

        // Detail
        this.detailName = document.getElementById("detail-name");
        this.detailPrice = document.getElementById("detail-price");
        this.detailRating = document.getElementById("detail-rating");
        this.detailCategory = document.getElementById("detail-category");
        this.detailDescription = document.getElementById("detail-description");
        this.detailCanteenBadge = document.getElementById("detail-canteen-badge");
        this.backToMenu = document.getElementById("back-to-menu");
        this.reviewForm = document.getElementById("review-form");
        this.reviewerName = document.getElementById("reviewer-name");
        this.reviewComment = document.getElementById("review-comment");
        this.reviewRating = document.getElementById("review-rating");
        this.starRatingInput = document.getElementById("star-rating-input");
        this.reviewList = document.getElementById("review-list");
        this.reviewCount = document.getElementById("review-count");

        // Admin
        this.adminLoginCard = document.getElementById("admin-login-card");
        this.adminDashboard = document.getElementById("admin-dashboard");
        this.adminLoginForm = document.getElementById("admin-login-form");
        this.loginError = document.getElementById("login-error");
        this.adminUsername = document.getElementById("admin-username");
        this.adminPassword = document.getElementById("admin-password");
        this.adminLogoutBtn = document.getElementById("admin-logout-btn");
        this.addItemBtn = document.getElementById("add-item-btn");
        this.adminTableBody = document.getElementById("admin-table-body");
        this.statItems = document.getElementById("stat-items");
        this.statReviews = document.getElementById("stat-reviews");
        this.statCategories = document.getElementById("stat-categories");
        this.statFeedback = document.getElementById("stat-feedback");
        this.adminTabItems = document.getElementById("admin-tab-items");
        this.adminTabFeedback = document.getElementById("admin-tab-feedback");
        this.adminContentItems = document.getElementById("admin-content-items");
        this.adminContentFeedback = document.getElementById("admin-content-feedback");
        this.adminFeedbackList = document.getElementById("admin-feedback-list");
        this.adminFeedbackEmpty = document.getElementById("admin-feedback-empty");

        // Item Modal
        this.itemModal = document.getElementById("item-modal");
        this.itemForm = document.getElementById("item-form");
        this.modalTitle = document.getElementById("modal-title");
        this.itemNameInput = document.getElementById("item-name");
        this.itemCategoryInput = document.getElementById("item-category");
        this.itemPriceInput = document.getElementById("item-price");
        this.itemDescriptionInput = document.getElementById("item-description");
        this.itemEditId = document.getElementById("item-edit-id");
        this.modalCloseBtn = document.getElementById("modal-close-btn");
        this.modalCancelBtn = document.getElementById("modal-cancel-btn");

        // Delete Modal
        this.deleteModal = document.getElementById("delete-modal");
        this.deleteItemName = document.getElementById("delete-item-name");
        this.deleteItemId = document.getElementById("delete-item-id");
        this.deleteConfirmBtn = document.getElementById("delete-confirm-btn");
        this.deleteCancelBtn = document.getElementById("delete-cancel-btn");
        this.deleteModalClose = document.getElementById("delete-modal-close");

        // Toast
        this.toastContainer = document.getElementById("toast-container");

        // User Portal
        this.userLoginCard = document.getElementById("user-login-card");
        this.userSignupCard = document.getElementById("user-signup-card");
        this.userDashboard = document.getElementById("user-dashboard");
        this.userLoginForm = document.getElementById("user-login-form");
        this.userSignupForm = document.getElementById("user-signup-form");
        this.userRollno = document.getElementById("user-rollno");
        this.userPassword = document.getElementById("user-password");
        this.userLoginError = document.getElementById("user-login-error");
        this.signupName = document.getElementById("signup-name");
        this.signupRollno = document.getElementById("signup-rollno");
        this.signupPassword = document.getElementById("signup-password");
        this.signupError = document.getElementById("signup-error");
        this.showSignupBtn = document.getElementById("show-signup-btn");
        this.showLoginBtn = document.getElementById("show-login-btn");
        this.userGreetingName = document.getElementById("user-greeting-name");
        this.userRollnoDisplay = document.getElementById("user-rollno-display");
        this.userLogoutBtn = document.getElementById("user-logout-btn");
        this.tabWishlist = document.getElementById("tab-wishlist");
        this.tabFeedback = document.getElementById("tab-feedback");
        this.tabContentWishlist = document.getElementById("tab-content-wishlist");
        this.tabContentFeedback = document.getElementById("tab-content-feedback");
        this.wishlistGrid = document.getElementById("wishlist-grid");
        this.wishlistEmpty = document.getElementById("wishlist-empty");
        this.feedbackForm = document.getElementById("feedback-form");
        this.feedbackStarInput = document.getElementById("feedback-star-input");
        this.feedbackRatingInput = document.getElementById("feedback-rating");
        this.feedbackTopic = document.getElementById("feedback-topic");
        this.feedbackMessage = document.getElementById("feedback-message");
        this.userFeedbackList = document.getElementById("user-feedback-list");
        this.detailWishlistBtn = document.getElementById("detail-wishlist-btn");
    }

    // ===== EVENTS =====
    bindEvents() {
        // Search
        this.searchInput.addEventListener("input", (e) => {
            this.searchQuery = e.target.value.trim().toLowerCase();
            this.renderMenu();
        });

        // Category filters
        this.categoryFilters.addEventListener("click", (e) => {
            if (e.target.classList.contains("cat-btn")) {
                this.activeCategory = e.target.dataset.category;
                document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
                e.target.classList.add("active");
                this.renderMenu();
            }
        });

        // Back to menu
        this.backToMenu.addEventListener("click", () => {
            window.location.hash = "#menu";
        });

        // Star rating input
        this.starRatingInput.addEventListener("click", (e) => {
            if (e.target.classList.contains("star-input")) {
                this.selectedRating = parseInt(e.target.dataset.value);
                this.reviewRating.value = this.selectedRating;
                this.updateStarInput();
            }
        });
        this.starRatingInput.addEventListener("mouseover", (e) => {
            if (e.target.classList.contains("star-input")) {
                this.highlightStars(parseInt(e.target.dataset.value));
            }
        });
        this.starRatingInput.addEventListener("mouseout", () => {
            this.updateStarInput();
        });

        // Submit review
        this.reviewForm.addEventListener("submit", (e) => {
            e.preventDefault();
            this.submitReview();
        });

        // Admin login
        this.adminLoginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            this.handleAdminLogin();
        });

        // Admin logout
        this.adminLogoutBtn.addEventListener("click", () => {
            this.isAdminLoggedIn = false;
            this.showAdminLogin();
            this.showToast("Logged out successfully", "info");
        });

        // Add item
        this.addItemBtn.addEventListener("click", () => this.openItemModal());

        // Item modal close
        this.modalCloseBtn.addEventListener("click", () => this.closeItemModal());
        this.modalCancelBtn.addEventListener("click", () => this.closeItemModal());

        // Item form submit
        this.itemForm.addEventListener("submit", (e) => {
            e.preventDefault();
            this.saveItem();
        });

        // Compare search
        this.compareSearch.addEventListener("input", () => {
            if (this.currentPage === "compare") this.renderCompare();
        });

        // Delete modal
        this.deleteConfirmBtn.addEventListener("click", () => this.confirmDelete());
        this.deleteCancelBtn.addEventListener("click", () => this.closeDeleteModal());
        this.deleteModalClose.addEventListener("click", () => this.closeDeleteModal());

        // Close modals on overlay click
        this.itemModal.addEventListener("click", (e) => {
            if (e.target === this.itemModal) this.closeItemModal();
        });
        this.deleteModal.addEventListener("click", (e) => {
            if (e.target === this.deleteModal) this.closeDeleteModal();
        });

        // Keyboard
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                this.closeItemModal();
                this.closeDeleteModal();
            }
        });

        // ===== USER PORTAL EVENTS =====
        this.userLoginForm.addEventListener("submit", (e) => { e.preventDefault(); this.handleUserLogin(); });
        this.userSignupForm.addEventListener("submit", (e) => { e.preventDefault(); this.handleUserSignup(); });
        this.showSignupBtn.addEventListener("click", (e) => { e.preventDefault(); this.userLoginCard.style.display = "none"; this.userSignupCard.style.display = "block"; });
        this.showLoginBtn.addEventListener("click", (e) => { e.preventDefault(); this.userSignupCard.style.display = "none"; this.userLoginCard.style.display = "block"; });
        this.userLogoutBtn.addEventListener("click", () => { this.currentUser = null; this.navPortalText.textContent = "Login"; this.showUserLogin(); this.showToast("Logged out successfully", "info"); });

        // Portal tabs
        this.tabWishlist.addEventListener("click", () => this.switchPortalTab("wishlist"));
        this.tabFeedback.addEventListener("click", () => this.switchPortalTab("feedback"));

        // Feedback star rating
        this.feedbackStarInput.addEventListener("click", (e) => {
            if (e.target.classList.contains("star-input")) {
                this.feedbackRating = parseInt(e.target.dataset.value);
                this.feedbackRatingInput.value = this.feedbackRating;
                this.updateFeedbackStars();
            }
        });
        this.feedbackStarInput.addEventListener("mouseover", (e) => {
            if (e.target.classList.contains("star-input")) this.highlightFeedbackStars(parseInt(e.target.dataset.value));
        });
        this.feedbackStarInput.addEventListener("mouseout", () => this.updateFeedbackStars());

        // Feedback submit
        this.feedbackForm.addEventListener("submit", (e) => { e.preventDefault(); this.submitFeedback(); });

        // Detail wishlist button
        this.detailWishlistBtn.addEventListener("click", () => this.toggleDetailWishlist());

        // Admin tabs
        this.adminTabItems.addEventListener("click", () => this.switchAdminTab("items"));
        this.adminTabFeedback.addEventListener("click", () => this.switchAdminTab("feedback"));
    }

    // ===== ROUTER =====
    handleRoute() {
        const hash = window.location.hash || "#menu";
        const parts = hash.replace("#", "").split("/");
        const page = parts[0];

        // Hide all pages
        this.heroSection.style.display = "none";
        this.pageMenu.style.display = "none";
        this.pageDetail.style.display = "none";
        this.pageAdmin.style.display = "none";
        this.pageCompare.style.display = "none";
        this.pagePortal.style.display = "none";

        // Update nav
        document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));

        switch (page) {
            case "item":
                this.currentPage = "detail";
                this.currentItemId = parseInt(parts[1]);
                this.pageDetail.style.display = "block";
                this.navMenu.classList.add("active");
                this.renderDetail();
                break;
            case "portal":
                this.currentPage = "portal";
                this.pagePortal.style.display = "block";
                this.navPortal.classList.add("active");
                if (this.currentUser) {
                    this.showUserDashboard();
                } else {
                    this.showUserLogin();
                }
                break;
            case "compare":
                this.currentPage = "compare";
                this.pageCompare.style.display = "block";
                this.navCompare.classList.add("active");
                this.renderCompare();
                break;
            case "admin":
                this.currentPage = "admin";
                this.pageAdmin.style.display = "block";
                this.navAdmin.classList.add("active");
                if (this.isAdminLoggedIn) {
                    this.showAdminDashboard();
                } else {
                    this.showAdminLogin();
                }
                break;
            case "menu":
            default:
                this.currentPage = "menu";
                this.heroSection.style.display = "flex";
                this.pageMenu.style.display = "block";
                this.navMenu.classList.add("active");
                this.renderCanteenSelector();
                this.renderMenu();
                break;
        }

        // Scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // ===== CANTEEN SELECTOR =====
    renderCanteenSelector() {
        this.canteenSelector.innerHTML = CANTEENS.map(c => `
            <div class="canteen-card ${c.id === this.activeCanteen ? 'active' : ''}" data-canteen="${c.id}" onclick="app.selectCanteen('${c.id}')">
                <div class="canteen-card-icon">${c.icon}</div>
                <div class="canteen-card-name">${c.name}</div>
                <div class="canteen-card-location">${c.location}</div>
            </div>
        `).join("");
    }

    selectCanteen(canteenId) {
        this.activeCanteen = canteenId;
        this.renderCanteenSelector();
        this.renderMenu();
    }

    // ===== COMPARE PAGE =====
    renderCompare() {
        // Group items by name across all canteens for comparison
        const allCanteenItems = this.store.getAllCanteenItems();
        const dishMap = new Map();
        CANTEENS.forEach(c => {
            const items = allCanteenItems[c.id] || [];
            items.forEach(item => {
                const key = item.name.toLowerCase().trim();
                if (!dishMap.has(key)) {
                    dishMap.set(key, { name: item.name, category: item.category, canteens: {} });
                }
                dishMap.get(key).canteens[c.id] = item;
            });
        });

        let dishes = Array.from(dishMap.values());
        const query = this.compareSearch.value.trim().toLowerCase();
        if (query) {
            dishes = dishes.filter(d =>
                d.name.toLowerCase().includes(query) ||
                d.category.toLowerCase().includes(query)
            );
        }

        if (dishes.length === 0) {
            this.compareGrid.innerHTML = "";
            this.compareEmpty.style.display = "block";
            return;
        }
        this.compareEmpty.style.display = "none";

        this.compareGrid.innerHTML = dishes.map((dish, idx) => {
            const emoji = CATEGORY_EMOJI[dish.category] || "\ud83c\udf7d\ufe0f";

            // Get data for each canteen
            const canteenData = CANTEENS.map(c => {
                const item = dish.canteens[c.id];
                if (!item) return { ...c, available: false, price: 0, avg: 0, count: 0 };
                const { avg, count } = this.store.getAvgRating(item.id, c.id);
                return { ...c, available: true, price: item.price, avg, count };
            });

            // Find best rating (only among available canteens)
            const maxAvg = Math.max(...canteenData.filter(d => d.available).map(d => d.avg));

            const cells = canteenData.map(d => {
                if (!d.available) {
                    return `
                        <div class="compare-canteen-cell not-available">
                            <div class="compare-cell-icon">${d.icon}</div>
                            <div class="compare-cell-name">${d.name}</div>
                            <div class="compare-cell-location">${d.location}</div>
                            <div class="compare-cell-price" style="color:var(--text-muted)">Not Available</div>
                        </div>
                    `;
                }
                const isBest = d.avg > 0 && d.avg === maxAvg;
                return `
                    <div class="compare-canteen-cell ${isBest ? 'best-rating' : ''}">
                        <div class="compare-cell-icon">${d.icon}</div>
                        <div class="compare-cell-name">${d.name}</div>
                        <div class="compare-cell-location">${d.location}</div>
                        <div class="compare-cell-price">\u20b9${d.price}</div>
                        <div class="compare-cell-stars">${this.renderStars(d.avg)}</div>
                        <div class="compare-cell-rating-text">${d.avg > 0 ? d.avg + " (" + d.count + " review" + (d.count !== 1 ? "s" : "") + ")" : "No reviews"}</div>
                        <div class="compare-rating-bar"><div class="compare-rating-fill" style="width: ${(d.avg / 5) * 100}%"></div></div>
                    </div>
                `;
            }).join("");

            return `
                <div class="compare-card" style="animation-delay: ${idx * 0.06}s">
                    <div class="compare-card-header">
                        <span class="compare-card-emoji">${emoji}</span>
                        <div>
                            <div class="compare-card-name">${dish.name}</div>
                            <div class="compare-card-category">${dish.category}</div>
                        </div>
                    </div>
                    <div class="compare-canteen-grid">
                        ${cells}
                    </div>
                </div>
            `;
        }).join("");
    }

    // ===== MENU RENDERING =====
    renderMenu() {
        const items = this.store.getItems(this.activeCanteen);
        let filtered = items;

        // Filter by category
        if (this.activeCategory !== "all") {
            filtered = filtered.filter(i => i.category === this.activeCategory);
        }

        // Filter by search
        if (this.searchQuery) {
            filtered = filtered.filter(i =>
                i.name.toLowerCase().includes(this.searchQuery) ||
                i.description.toLowerCase().includes(this.searchQuery)
            );
        }

        if (filtered.length === 0) {
            this.foodGrid.innerHTML = "";
            this.emptyState.style.display = "block";
            return;
        }

        this.emptyState.style.display = "none";

        this.foodGrid.innerHTML = filtered.map((item, idx) => {
            const { avg, count } = this.store.getAvgRating(item.id, this.activeCanteen);
            const emoji = CATEGORY_EMOJI[item.category] || "🍽️";
            return `
                <div class="food-card" data-id="${item.id}" style="animation-delay: ${idx * 0.04}s" onclick="app.navigateToItem(${item.id})">
                    <div class="food-card-left">
                        <div class="food-card-emoji">${emoji}</div>
                        <div class="food-card-text">
                            <div class="food-card-name">${item.name}</div>
                            <div class="food-card-category">${item.category}</div>
                        </div>
                    </div>
                    <div class="food-card-right">
                        <span class="food-card-price">₹${item.price}</span>
                        <span class="food-card-rating">
                            <span class="stars">${this.renderStars(avg)}</span>
                            ${avg > 0 ? `<span class="rating-count">${avg}</span>` : '<span class="rating-count">—</span>'}
                        </span>
                    </div>
                </div>
            `;
        }).join("");
    }

    navigateToItem(id) {
        window.location.hash = `#item/${id}`;
    }

    // ===== DETAIL PAGE =====
    renderDetail() {
        const item = this.store.getItem(this.currentItemId, this.activeCanteen);
        if (!item) {
            window.location.hash = "#menu";
            return;
        }

        const { avg, count } = this.store.getAvgRating(item.id, this.activeCanteen);
        const canteen = CANTEENS.find(c => c.id === this.activeCanteen);

        this.detailName.textContent = item.name;
        this.detailPrice.textContent = `₹${item.price}`;
        this.detailCategory.textContent = item.category;
        this.detailDescription.textContent = item.description;
        this.detailCanteenBadge.innerHTML = `${canteen.icon} ${canteen.name} — ${canteen.location}`;

        this.detailRating.innerHTML = `
            <span class="stars">${this.renderStars(avg)}</span>
            ${avg > 0
                ? `<span>${avg}</span><span class="rating-text">(${count} review${count !== 1 ? 's' : ''})</span>`
                : '<span class="rating-text">No reviews yet</span>'}
        `;

        // Update wishlist button state
        if (this.currentUser) {
            const isWished = this.store.isInWishlist(this.currentUser.rollNo, item.id);
            this.detailWishlistBtn.classList.toggle("wishlisted", isWished);
            this.detailWishlistBtn.textContent = isWished ? "\u2665" : "\u2661";
        } else {
            this.detailWishlistBtn.classList.remove("wishlisted");
            this.detailWishlistBtn.textContent = "\u2661";
        }

        this.renderReviews();
        this.resetReviewForm();

        // Show/hide review form based on login state
        const reviewFormCard = this.reviewForm.closest('.review-form-card');
        if (!this.currentUser) {
            reviewFormCard.innerHTML = `
                <div class="review-login-prompt">
                    <p>🔒 You must be logged in to leave a review.</p>
                    <a href="#portal" class="btn btn-primary">Login to Review</a>
                </div>
            `;
        }
    }

    // ===== REVIEWS =====
    renderReviews() {
        const reviews = this.store.getItemReviews(this.currentItemId, this.activeCanteen);
        this.reviewCount.textContent = `(${reviews.length})`;

        if (reviews.length === 0) {
            this.reviewList.innerHTML = `<div class="no-reviews">No reviews yet. Be the first to share your experience! 🌟</div>`;
            return;
        }

        this.reviewList.innerHTML = reviews.map((r, idx) => `
            <div class="review-card" style="animation-delay: ${idx * 0.08}s">
                <div class="review-header">
                    <div class="reviewer-info">
                        <div class="reviewer-avatar">${r.name.charAt(0).toUpperCase()}</div>
                        <div>
                            <div class="reviewer-name">${r.name}</div>
                            <div class="review-date">${this.formatDate(r.date)}</div>
                        </div>
                    </div>
                    <div class="review-stars">${this.renderStars(r.rating)}</div>
                </div>
                <p class="review-text">${r.comment}</p>
            </div>
        `).join("");
    }

    submitReview() {
        if (!this.currentUser) {
            this.showToast("Please login to submit a review", "error");
            window.location.hash = "#portal";
            return;
        }
        const name = this.reviewerName.value.trim();
        const comment = this.reviewComment.value.trim();
        const rating = this.selectedRating;

        if (!name || !comment) {
            this.showToast("Please fill in all fields", "error");
            return;
        }
        if (rating === 0) {
            this.showToast("Please select a rating", "error");
            return;
        }

        this.store.addReview({
            itemId: this.currentItemId,
            name,
            rating,
            comment
        }, this.activeCanteen);

        this.showToast("Review submitted! Thank you 🎉", "success");
        this.renderReviews();
        this.resetReviewForm();

        // Update rating on detail page
        const { avg, count } = this.store.getAvgRating(this.currentItemId, this.activeCanteen);
        this.detailRating.innerHTML = `
            <span class="stars">${this.renderStars(avg)}</span>
            <span>${avg}</span><span class="rating-text">(${count} review${count !== 1 ? 's' : ''})</span>
        `;
    }

    resetReviewForm() {
        this.reviewerName.value = "";
        this.reviewComment.value = "";
        this.selectedRating = 0;
        this.reviewRating.value = 0;
        this.updateStarInput();
    }

    // ===== STAR HELPERS =====
    renderStars(rating) {
        const full = Math.round(parseFloat(rating));
        let stars = "";
        for (let i = 1; i <= 5; i++) {
            stars += i <= full ? "★" : "☆";
        }
        return stars;
    }

    highlightStars(value) {
        this.starRatingInput.querySelectorAll(".star-input").forEach((s, i) => {
            s.classList.toggle("active", i < value);
        });
    }

    updateStarInput() {
        this.highlightStars(this.selectedRating);
    }

    // ===== ADMIN =====
    handleAdminLogin() {
        const username = this.adminUsername.value.trim();
        const password = this.adminPassword.value.trim();

        if (username === ADMIN_CREDS.username && password === ADMIN_CREDS.password) {
            this.isAdminLoggedIn = true;
            this.loginError.style.display = "none";
            this.showAdminDashboard();
            this.showToast("Welcome, Admin! 🎉", "success");
        } else {
            this.loginError.style.display = "block";
            this.loginError.classList.add("shake");
            setTimeout(() => this.loginError.classList.remove("shake"), 400);
        }
    }

    showAdminLogin() {
        this.adminLoginCard.style.display = "block";
        this.adminDashboard.style.display = "none";
        this.adminUsername.value = "";
        this.adminPassword.value = "";
        this.loginError.style.display = "none";
    }

    showAdminDashboard() {
        this.adminLoginCard.style.display = "none";
        this.adminDashboard.style.display = "block";
        this.renderAdminTable();
        this.updateStats();
    }

    updateStats() {
        const items = this.store.getItems(this.activeCanteen);
        const categories = new Set(items.map(i => i.category));
        this.statItems.textContent = items.length;
        this.statReviews.textContent = this.store.getTotalReviewCount();
        this.statCategories.textContent = categories.size;
        this.statFeedback.textContent = this.store.getTotalFeedbackCount();
    }

    renderAdminTable() {
        const items = this.store.getItems(this.activeCanteen);
        this.adminTableBody.innerHTML = items.map(item => {
            const { avg, count } = this.store.getAvgRating(item.id, this.activeCanteen);
            return `
                <tr>
                    <td><span class="admin-table-name">${item.name}</span></td>
                    <td><span class="admin-table-category">${item.category}</span></td>
                    <td><strong>₹${item.price}</strong></td>
                    <td><span style="color: var(--yellow);">${this.renderStars(avg)}</span> <span style="color:var(--text-muted); font-size:0.8rem;">(${count})</span></td>
                    <td>
                        <div class="admin-table-actions">
                            <button class="btn btn-outline btn-sm" onclick="app.openItemModal(${item.id})">✏️ Edit</button>
                            <button class="btn btn-danger btn-sm" onclick="app.openDeleteModal(${item.id})">🗑️</button>
                        </div>
                    </td>
                </tr>
            `;
        }).join("");
    }

    // ===== ITEM MODAL =====
    openItemModal(id = null) {
        this.editingItemId = id;
        this.itemForm.reset();

        if (id) {
            const item = this.store.getItem(id, this.activeCanteen);
            if (!item) return;
            this.modalTitle.textContent = "Edit Item";
            this.itemNameInput.value = item.name;
            this.itemCategoryInput.value = item.category;
            this.itemPriceInput.value = item.price;
            this.itemDescriptionInput.value = item.description;
            this.itemEditId.value = id;
        } else {
            this.modalTitle.textContent = "Add New Item";
            this.itemEditId.value = "";
        }

        this.itemModal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }

    closeItemModal() {
        this.itemModal.style.display = "none";
        document.body.style.overflow = "";
        this.editingItemId = null;
    }

    saveItem() {
        const name = this.itemNameInput.value.trim();
        const category = this.itemCategoryInput.value;
        const price = parseInt(this.itemPriceInput.value);
        const description = this.itemDescriptionInput.value.trim();

        if (!name || !category || !price || !description) {
            this.showToast("Please fill in all fields", "error");
            return;
        }

        const data = { name, category, price, description };

        if (this.editingItemId) {
            this.store.updateItem(this.editingItemId, data, this.activeCanteen);
            this.showToast("Item updated successfully! ✅", "success");
        } else {
            this.store.addItem(data, this.activeCanteen);
            this.showToast("New item added! 🎉", "success");
        }

        this.closeItemModal();
        this.renderAdminTable();
        this.updateStats();
    }

    // ===== DELETE MODAL =====
    openDeleteModal(id) {
        const item = this.store.getItem(id, this.activeCanteen);
        if (!item) return;
        this.deleteItemName.textContent = item.name;
        this.deleteItemId.value = id;
        this.deleteModal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }

    closeDeleteModal() {
        this.deleteModal.style.display = "none";
        document.body.style.overflow = "";
    }

    confirmDelete() {
        const id = parseInt(this.deleteItemId.value);
        this.store.deleteItem(id, this.activeCanteen);
        this.closeDeleteModal();
        this.renderAdminTable();
        this.updateStats();
        this.showToast("Item deleted 🗑️", "info");
    }

    // ===== TOAST =====
    showToast(message, type = "success") {
        const toast = document.createElement("div");
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `<span>${message}</span>`;
        this.toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = "0";
            toast.style.transform = "translateX(100px)";
            toast.style.transition = "all 0.3s ease";
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // ===== HERO PARTICLES =====
    initHeroParticles() {
        const container = document.getElementById("hero-particles");
        const emojis = ["🍕", "🍔", "🌮", "🍜", "🍰", "☕", "🧁", "🍛", "🥗", "🍟", "🥤", "🍩"];
        for (let i = 0; i < 14; i++) {
            const p = document.createElement("span");
            p.className = "particle";
            p.textContent = emojis[i % emojis.length];
            p.style.left = `${Math.random() * 100}%`;
            p.style.top = `${Math.random() * 100}%`;
            p.style.animationDelay = `${Math.random() * 8}s`;
            p.style.animationDuration = `${10 + Math.random() * 8}s`;
            p.style.fontSize = `${1.2 + Math.random() * 1.5}rem`;
            container.appendChild(p);
        }
    }

    // ===== HELPERS =====
    formatDate(dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" });
    }

    // ===== USER AUTH =====
    handleUserLogin() {
        const rollNo = this.userRollno.value.trim();
        const password = this.userPassword.value.trim();
        const user = this.store.loginUser(rollNo, password);
        if (user) {
            this.currentUser = user;
            this.navPortalText.textContent = user.name.split(" ")[0];
            this.userLoginError.style.display = "none";
            this.showUserDashboard();
            this.showToast(`Welcome back, ${user.name}! 🎉`, "success");
        } else {
            this.userLoginError.style.display = "block";
            this.userLoginError.classList.add("shake");
            setTimeout(() => this.userLoginError.classList.remove("shake"), 400);
        }
    }

    handleUserSignup() {
        const name = this.signupName.value.trim();
        const rollNo = this.signupRollno.value.trim();
        const password = this.signupPassword.value.trim();
        if (!name || !rollNo || !password) {
            this.signupError.textContent = "Please fill in all fields.";
            this.signupError.style.display = "block";
            return;
        }
        if (password.length < 4) {
            this.signupError.textContent = "Password must be at least 4 characters.";
            this.signupError.style.display = "block";
            return;
        }
        const user = this.store.registerUser(name, rollNo, password);
        if (user) {
            this.currentUser = user;
            this.navPortalText.textContent = user.name.split(" ")[0];
            this.signupError.style.display = "none";
            this.showUserDashboard();
            this.showToast(`Account created! Welcome, ${user.name}! 🎉`, "success");
        } else {
            this.signupError.textContent = "This roll number is already registered.";
            this.signupError.style.display = "block";
        }
    }

    showUserLogin() {
        this.userLoginCard.style.display = "block";
        this.userSignupCard.style.display = "none";
        this.userDashboard.style.display = "none";
        this.userRollno.value = "";
        this.userPassword.value = "";
        this.userLoginError.style.display = "none";
    }

    showUserDashboard() {
        this.userLoginCard.style.display = "none";
        this.userSignupCard.style.display = "none";
        this.userDashboard.style.display = "block";
        this.userGreetingName.textContent = this.currentUser.name;
        this.userRollnoDisplay.textContent = `Roll No: ${this.currentUser.rollNo}`;
        this.switchPortalTab("wishlist");
    }

    // ===== PORTAL TABS =====
    switchPortalTab(tab) {
        this.tabWishlist.classList.toggle("active", tab === "wishlist");
        this.tabFeedback.classList.toggle("active", tab === "feedback");
        this.tabContentWishlist.style.display = tab === "wishlist" ? "block" : "none";
        this.tabContentFeedback.style.display = tab === "feedback" ? "block" : "none";
        if (tab === "wishlist") this.renderWishlist();
        if (tab === "feedback") this.renderUserFeedback();
    }

    // ===== WISHLIST =====
    toggleWishlistFromCard(itemId, btn) {
        if (!this.currentUser) { this.showToast("Please login to use wishlist", "error"); return; }
        const added = this.store.toggleWishlist(this.currentUser.rollNo, itemId);
        btn.classList.toggle("wishlisted", added);
        btn.textContent = added ? "\u2665" : "\u2661";
        btn.title = added ? "Remove from Wishlist" : "Add to Wishlist";
        this.showToast(added ? "Added to wishlist ❤️" : "Removed from wishlist", added ? "success" : "info");
    }

    toggleDetailWishlist() {
        if (!this.currentUser) {
            this.showToast("Please login to add to wishlist", "error");
            window.location.hash = "#portal";
            return;
        }
        const added = this.store.toggleWishlist(this.currentUser.rollNo, this.currentItemId);
        this.detailWishlistBtn.classList.toggle("wishlisted", added);
        this.detailWishlistBtn.textContent = added ? "\u2665" : "\u2661";
        this.showToast(added ? "Added to wishlist ❤️" : "Removed from wishlist", added ? "success" : "info");
    }

    renderWishlist() {
        if (!this.currentUser) return;
        const wishlistIds = this.store.getUserWishlist(this.currentUser.rollNo);
        const items = wishlistIds.map(id => this.store.getItem(id, this.activeCanteen)).filter(Boolean);
        if (items.length === 0) {
            this.wishlistGrid.innerHTML = "";
            this.wishlistEmpty.style.display = "block";
            return;
        }
        this.wishlistEmpty.style.display = "none";
        this.wishlistGrid.innerHTML = items.map((item, idx) => {
            const { avg, count } = this.store.getAvgRating(item.id, this.activeCanteen);
            const emoji = CATEGORY_EMOJI[item.category] || "\ud83c\udf7d\ufe0f";
            return `
                <div class="food-card" data-id="${item.id}" style="animation-delay: ${idx * 0.04}s" onclick="app.navigateToItem(${item.id})">
                    <div class="food-card-left">
                        <div class="food-card-emoji">${emoji}</div>
                        <div class="food-card-text">
                            <div class="food-card-name">${item.name}</div>
                            <div class="food-card-category">${item.category}</div>
                        </div>
                    </div>
                    <div class="food-card-right">
                        <span class="food-card-price">\u20B9${item.price}</span>
                        <span class="food-card-rating">
                            <span class="stars">${this.renderStars(avg)}</span>
                            ${avg > 0 ? `<span class="rating-count">${avg}</span>` : '<span class="rating-count">\u2014</span>'}
                        </span>
                    </div>
                </div>
            `;
        }).join("");
    }

    removeWishlistItem(itemId) {
        if (!this.currentUser) return;
        this.store.removeFromWishlist(this.currentUser.rollNo, itemId);
        this.renderWishlist();
        this.showToast("Removed from wishlist", "info");
    }

    // ===== FEEDBACK =====
    highlightFeedbackStars(val) {
        this.feedbackStarInput.querySelectorAll(".star-input").forEach((s, i) => {
            s.classList.toggle("active", i < val);
        });
    }
    updateFeedbackStars() { this.highlightFeedbackStars(this.feedbackRating); }

    submitFeedback() {
        if (!this.currentUser) return;
        const rating = this.feedbackRating;
        const topic = this.feedbackTopic.value;
        const message = this.feedbackMessage.value.trim();
        if (!rating) { this.showToast("Please select a rating", "error"); return; }
        if (!topic) { this.showToast("Please select a topic", "error"); return; }
        if (!message) { this.showToast("Please write your feedback", "error"); return; }
        this.store.addFeedback({
            rollNo: this.currentUser.rollNo,
            name: this.currentUser.name,
            rating, topic, message
        });
        this.showToast("Feedback submitted! Thank you 💬", "success");
        this.feedbackForm.reset();
        this.feedbackRating = 0;
        this.updateFeedbackStars();
        this.renderUserFeedback();
    }

    renderUserFeedback() {
        if (!this.currentUser) return;
        const feedback = this.store.getUserFeedback(this.currentUser.rollNo);
        if (feedback.length === 0) {
            this.userFeedbackList.innerHTML = `<div class="no-reviews">You haven't submitted any feedback yet.</div>`;
            return;
        }
        this.userFeedbackList.innerHTML = feedback.map((f, idx) => `
            <div class="feedback-card" style="animation-delay: ${idx * 0.08}s">
                <div class="feedback-stars">${this.renderStars(f.rating)}</div>
                <div class="feedback-card-header">
                    <span class="feedback-topic">${TOPIC_LABELS[f.topic] || f.topic}</span>
                    <span class="feedback-date">${this.formatDate(f.date)}</span>
                </div>
                <p class="feedback-text">${f.message}</p>
            </div>
        `).join("");
    }

    // ===== ADMIN TABS =====
    switchAdminTab(tab) {
        this.adminTabItems.classList.toggle("active", tab === "items");
        this.adminTabFeedback.classList.toggle("active", tab === "feedback");
        this.adminContentItems.style.display = tab === "items" ? "block" : "none";
        this.adminContentFeedback.style.display = tab === "feedback" ? "block" : "none";
        if (tab === "feedback") this.renderAdminFeedback();
    }

    renderAdminFeedback() {
        const allFeedback = this.store.getFeedback().sort((a, b) => new Date(b.date) - new Date(a.date));
        if (allFeedback.length === 0) {
            this.adminFeedbackList.innerHTML = "";
            this.adminFeedbackEmpty.style.display = "block";
            return;
        }
        this.adminFeedbackEmpty.style.display = "none";
        this.adminFeedbackList.innerHTML = allFeedback.map((f, idx) => `
            <div class="feedback-card" style="animation-delay: ${idx * 0.06}s">
                <div class="feedback-card-header">
                    <div class="feedback-user-info">
                        <div class="feedback-avatar">${f.name.charAt(0).toUpperCase()}</div>
                        <div>
                            <div class="feedback-name">${f.name}</div>
                            <div class="feedback-roll">${f.rollNo}</div>
                        </div>
                    </div>
                    <div class="feedback-meta">
                        <span class="feedback-topic">${TOPIC_LABELS[f.topic] || f.topic}</span>
                        <span class="feedback-date">${this.formatDate(f.date)}</span>
                    </div>
                </div>
                <div class="feedback-stars">${this.renderStars(f.rating)}</div>
                <p class="feedback-text">${f.message}</p>
            </div>
        `).join("");
    }
}

// ===== INITIALIZE =====
const app = new App();

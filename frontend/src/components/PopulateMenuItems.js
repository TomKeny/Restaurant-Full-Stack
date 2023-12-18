import addItem from "../api/addItem"

export const PopulateMenuItems = () => {
    const menuItems = [
        // STARTERS
        { name: "Miso Soup", price: 6, description: "A classic savoury broth with tofu, seaweed, and green onions", cuisine: "Japanese", ingredients: [{ name: "dashi stock", quantity: "160g" }, { name: "miso paste", quantity: "15g" }, { name: "tofu", quantity: "50g" }, { name: "green onions", quantity: "20g" }, { name: "seaweed", quantity: "5g" }], image: "https://images.unsplash.com/photo-1478749485505-2a903a729c63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1pc28lMjBzb3VwJTIwamFwYW58ZW58MHx8MHx8fDA%3D" },

        { name: "Patatas Bravas", price: 6, description: "Crispy potatoes served with a spicy tomato sauce and aioli", cuisine: "Spanish", ingredients: [{ name: "potatoes", quantity: "65g" }, { name: "olive oil", quantity: "5g" }, { name: "tomatoes", quantity: "15g" }, { name: "chili pepper", quantity: "5g" }, { name: "aioli", quantity: "10g" }], image: "https://media.istockphoto.com/id/1130702198/photo/a-dish-of-papas-bravas-made-with-potatoes-peppers-ad-garlic-typical-meal-from-tarifa.jpg?b=1&s=612x612&w=0&k=20&c=9Z3hKDKNVdICGjuOeLDJG1Eoe2d8u20_RswinG-didU=" },

        { name: "Bruschetta al Pomodoro", price: 5, description: "Grilled bread topped with diced tomatoes, garlic, basil, and olive oil.", cuisine: "Italian", ingredients: [{ name: "bread", quantity: "170g" }, { name: "tomatoes", quantity: "15g" }, { name: "garlic", quantity: "8g" }, { name: "basil", quantity: "2g" }, { name: "olive oil", quantity: "3g" }], image: "https://images.pexels.com/photos/11182278/pexels-photo-11182278.jpeg?auto=compress&cs=tinysrgb&w=600" },

        { name: "Samosas", price: 6, description: "Crispy pastries filled with spiced potatoes, peas, and herbs, served with tamarind chutney.", cuisine: "Indian", ingredients: [{ name: "pastry", quantity: "40g" }, { name: "potatoes", quantity: "40g" }, { name: "peas", quantity: "10g" }, { name: "onions", quantity: "10g" }, { name: "tamarind chutney", quantity: "20g" }], image: "https://images.pexels.com/photos/14883757/pexels-photo-14883757.jpeg?auto=compress&cs=tinysrgb&w=600" },

        { name: "Guacamole and Tortilla Chips", price: 5, description: "Freshly made guacamole served with crispy tortilla chips.", cuisine: "Mexican", ingredients: [{ name: "guacamole", quantity: "50g" }, { name: "tortilla chips", quantity: "100g" }], image: "https://media.istockphoto.com/id/1322160122/photo/mexican-dip-sauces-guacamole-cheedar-dip-tomato-salsa-and-pico-de-gallo-with-nacho-chips.webp?b=1&s=170667a&w=0&k=20&c=zHS6Z9ECJTJa9a6ZBtvxAD7Qd5rZuRnqiK11LiutrEQ=" },

        { name: "French Onion Soup", price: 8, description: "Caramelized onions in a rich beef broth, topped with toasted baguette and melted Gruyère cheese.", cuisine: "French", ingredients: [{ name: "caramelized onions", quantity: "50g" }, { name: "beef broth", quantity: "125g" }, { name: "baguette", quantity: "75g" }, { name: "cheese", quantity: "50g" }], image: "https://images.unsplash.com/photo-1549396563-92fab230895a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlbmNoJTIwb25pb24lMjBzb3VwfGVufDB8fDB8fHww" },

        { name: "Buffalo Chicken Wings", price: 6, description: "Crispy chicken wings tossed in a spicy buffalo sauce.", cuisine: "American", ingredients: [{ name: "chicken wings", quantity: "110g" }, { name: "buffalo sauce", quantity: "30g" }], image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVmZmFsbyUyMHdpbmdzfGVufDB8fDB8fHww" },

        // MAINS
        { name: "Beef Lasagne", price: 12, description: "Layers of fresh pasta sheets, homemade Bolognese sauce, creamy béchamel, and a blend of Parmesan, mozzarella, and ricotta cheeses, baked to perfection. Served with a side of garlic bread and a garden salad dressed in balsamic vinaigrette.", cuisine: "Italian", ingredients: [{ name: "ground beef", quantity: "80g" }, { name: "olive oil", quantity: "5g" }, { name: "Onion", quantity: "35g" }, { name: "garlic", quantity: "10g" }, { name: "tomatoes", quantity: "80g" }, { name: "pasta", quantity: "70g" }, { name: "cheese", quantity: "50g" }, { name: "bechamel sauce", quantity: "100g" }, { name: "garlic bread", quantity: "50g" }, { name: "salad", quantity: "20g" }], image: "https://images.pexels.com/photos/5949884/pexels-photo-5949884.jpeg?auto=compress&cs=tinysrgb&w=600" },

        { name: "Ratatouille", price: 10, description: "A vegetable stew made with tomatoes, aubergine, courgette, bell peppers, and herbs.", cuisine: "French", ingredients: [{ name: "tomatoes", quantity: "100g" }, { name: "aubergine", quantity: "75g" }, { name: "courgette", quantity: "75g" }, { name: "bell peppers", quantity: "30g" }, { name: 'olive oil', quantity: '12g' }], image: "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmF0YXRvdWlsbGV8ZW58MHx8MHx8fDA%3D" },

        { name: "Paella", price: 15, description: "Saffron-infused rice cooked with a variety of seafood, chicken, chorizo, and vegetables, creating a flavorful one-pan dish.", cuisine: "Spanish", ingredients: [{ name: "saffron", quantity: "10g" }, { name: "rice", quantity: "100g" }, { name: "seafood", quantity: "60g" }, { name: "chicken", quantity: "60g" }, { name: "chorizo", quantity: "60g" }, { name: "vegetables", quantity: "50g" }], image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFlbGxhfGVufDB8fDB8fHww" },

        { name: "Chicken Mole", price: 12, description: "Grilled chicken smothered in rich, flavorful mole sauce made with chili peppers, chocolate, and spices. Served with rice.", cuisine: "Mexican", ingredients: [{ name: "chicken", quantity: "100g" }, { name: "rice", quantity: "130g" }, { name: "mole sauce", quantity: "70g" }], image: "https://media.istockphoto.com/id/1346793801/photo/chicken-mole-with-rice-and-tortillas.jpg?s=612x612&w=0&k=20&c=Qtdc_ACMPDKBXaI25pmmNs_Hhaqo1hBW5Ca5W60xMHw=" },

        { name: "Chicken Tikka Masala", price: 12, description: "Tender pieces of chicken cooked in a creamy tomato-based sauce with aromatic spices, served with basmati rice and naan bread.", cuisine: "Indian", ingredients: [{ name: "chicken", quantity: "100g" }, { name: "tomatoes", quantity: "75g" }, { name: "spices", quantity: "25g" }, { name: "rice", quantity: "80g" }, { name: "naan bread", quantity: "50g" }], image: "https://media.istockphoto.com/id/1227594550/photo/chicken-curry-creamy-chicken-butter.jpg?s=612x612&w=0&k=20&c=U9SzDx7mjCA5iS1qb8cDUNNkIGD6mJJhwLvEHXL-OlE=" },

        { name: "BBQ Ribs", price: 11, description: "Slow-cooked pork ribs glazed with tangy barbecue sauce, served with coleslaw and cornbread.", cuisine: "American", ingredients: [{ name: "pork ribs", quantity: "160g" }, { name: "barbeque sauce", quantity: "50g" }, { name: "coleslaw", quantity: "40g" }, { name: "cornbread", quantity: "50g" }], image: "https://media.istockphoto.com/id/1299807202/photo/spicy-glazed-pork-ribs.webp?b=1&s=170667a&w=0&k=20&c=eTdXNP1ZDC2pq76JxKFYkJx8BHblea4Qw-wRn7A9TCI=" },

        { name: "Sushi Platter", price: 12, description: "A selection of fresh nigiri and maki rolls featuring tuna, salmon, shrimp, and avocado.", cuisine: "Japanese", ingredients: [{ name: "sushi rice", quantity: "100g" }, { name: "tuna", quantity: "25g" }, { name: "salmon", quantity: "25g" }, { name: "shrimp", quantity: "25g" }, { name: "nori", quantity: "40g" }, { name: "avocado", quantity: "20g" }], image: "https://images.pexels.com/photos/246747/pexels-photo-246747.jpeg?auto=compress&cs=tinysrgb&w=600" },

        //     // DESSERTS
        { name: "Crème Brûlée", price: 6, description: "Vanilla custard with a caramelised sugar crust.", cuisine: "French", ingredients: [{ name: "creme brulee", quantity: "100g" }], image: "https://images.unsplash.com/photo-1554371650-1f19f803c220?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNyZW1lJTIwYnJ1bGVlfGVufDB8fDB8fHww" },

        { name: "Apple Pie", price: 6, description: "Warm apple filling with cinnamon and a flaky crust, served with vanilla ice cream.", cuisine: "American", ingredients: [{ name: "apple pie", quantity: "150g" }], image: "https://plus.unsplash.com/premium_photo-1666353533935-17d7189d9074?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFwcGxlJTIwcGllfGVufDB8fDB8fHww" },

        { name: "Tiramisu", price: 6, description: "Classic Italian dessert made with layers of espresso-soaked ladyfingers and mascarpone cheese, dusted with cocoa powder.", cuisine: "Italian", ingredients: [{ name: "tiramisu", quantity: "100g" }], image: "https://images.pexels.com/photos/12916029/pexels-photo-12916029.jpeg?auto=compress&cs=tinysrgb&w=600" },

        { name: "Churros with Chocolate Sauce", price: 5, description: "Fried dough pastry sticks coated in cinnamon sugar, served with a side of warm chocolate dipping sauce.", cuisine: "Spanish", ingredients: [{ name: "churros", quantity: "60g" }, { name: "chocolate sauce", quantity: "50g" }], image: "https://images.pexels.com/photos/9501466/pexels-photo-9501466.jpeg?auto=compress&cs=tinysrgb&w=600" },

        { name: "Matcha Mochi", price: 5, description: "A harmonious blend of premium matcha green tea and sweet, tender and chewy mochi", cuisine: "Japanese", ingredients: [{ name: "mochi", quantity: "100g" }], image: "https://media.istockphoto.com/id/1340926372/photo/homemade-snow-skin-moon-cake-mochi-moon-cake-or-chinese-crystal-mooncake.webp?b=1&s=170667a&w=0&k=20&c=n_YZznyIb4m4gLha2ZixVBQY3luGK_86W5S9jcsSwic=" },

        { name: "Flan", price: 6, description: "A creamy caramel custard dessert with a smooth, silky texture, served chilled.", cuisine: "Mexican", ingredients: [{ name: "flan", quantity: "150g" }], image: "https://media.istockphoto.com/id/1155635602/photo/egg-flan-with-raspberries-and-mint-leaves.jpg?b=1&s=612x612&w=0&k=20&c=cpBdES28CX6AwCnm_0H4R3SKovzIOp7ivn-RkqaRItI=" },

        { name: "Kheer", price: 5, description: "Creamy rice pudding, flavoured with cardamom and nuts.", cuisine: "Indian", ingredients: [{ name: "kheer", quantity: "120g" }], image: "https://media.istockphoto.com/id/852765352/photo/kesar-rabri.webp?b=1&s=170667a&w=0&k=20&c=EGdJLDZsnTWKRj2iNwcuDd1vgoMUZnabuPQyV87ycp0=" },


        //     // DRINKS
        { name: "Soft Drink", price: 2, description: "Choice of Coca-Cola, Sprite or Fanta", cuisine: "drinks", ingredients: [{ name: "soft drink", quantity: "100g" }], image: "https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=600" },

        { name: "Ice Tea", price: 2, description: "Choose from Peach, Raspberry or Lemon flavour", cuisine: "drinks", ingredients: [{ name: "ice tea", quantity: "100g" }], image: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlJTIwdGVhfGVufDB8fDB8fHww" },

        { name: "Beer", price: 4, description: "We have a selection of bottled Porters, Lagers and IPAs.", cuisine: "drinks", ingredients: [{ name: "beer", quantity: "100g" }], image: "https://images.pexels.com/photos/1089932/pexels-photo-1089932.jpeg?auto=compress&cs=tinysrgb&w=600" },

        { name: "Wine", price: 4, description: "Explore our selection of Red, White, Rose and Sparkling Wines.", cuisine: "drinks", ingredients: [{ name: "wine", quantity: "100g" }], image: "https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2luZXxlbnwwfHwwfHx8MA%3D%3D" },

        { name: "Coffee", price: 3, description: "Espresso, Capuccino or Latte.", cuisine: "drinks", ingredients: [{ name: "coffee", quantity: "100g" }], image: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D" },

        { name: "Tea", price: 2, description: "Assorted teas including black, green, herbal, and chai.", cuisine: "drinks", ingredients: [{ name: "tea", quantity: "100g" }], image: "https://images.unsplash.com/photo-1531967802777-e0f8fc276609?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRlYXN8ZW58MHx8MHx8fDA%3D" }
    ]
    menuItems.map(el => {
        addItem('item', {
            FoodName: el.name,
            Price: el.price,
            Description: el.description,
            Cuisine: el.cuisine,
            Ingredients: el.ingredients,
            Image: el.image
        })
    })
}
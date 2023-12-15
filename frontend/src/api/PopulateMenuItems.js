import addItem from "./addItem"

export const PopulateMenuItems = () => {
    const menuItems = [
        // STARTERS
        { name: "Miso Soup", price: 6, description: "A classic savoury broth with tofu, seaweed, and green onions", ingredients: [{name: "dashi stock", quantity: "160g"}, {name: "miso paste", quantity: "15g"}, {name: "tofu", quantity: "50g"}, {name: "green onions", quantity: "20g"}, {name: "seaweed", quantity: "5g"}]  },

        { name: "Patatas Bravas", price: 6, description: "Crispy potatoes served with a spicy tomato sauce and aioli", ingredients: [{name: "potatoes", quantity: "65g"}, {name: "olive oil", quantity: "5g"}, {name: "tomatoes", quantity: "15g"}, {name: "chili pepper", quantity: "5g"}, {name: "aioli", quantity: "10g"}] },

        { name: "Bruschetta al Pomodoro", price: 5, description: "Grilled bread topped with diced tomatoes, garlic, basil, and olive oil.", ingredients: [{name: "bread", quantity: "170g"}, {name: "tomatoes", quantity: "15g"}, {name: "garlic", quantity: "8g"}, {name: "basil", quantity: "2g"}, {name: "olive oil", quantity: "3g"}] },

        { name: "Samosas", price: 6, description: "Crispy pastries filled with spiced potatoes, peas, and herbs, served with tamarind chutney.", ingredients: [{name: "pastry", quantity: "40g"}, {name: "potatoes", quantity: "40g"}, {name: "peas", quantity: "10g"}, {name: "onions", quantity: "10g"}, {name: "tamarind chutney", quantity: "20g"}] },

        { name: "Guacamole and Tortilla Chips", price: 5, description: "Freshly made guacamole served with crispy tortilla chips.", ingredients: [{name: "guacamole", quantity: "50g"}, {name: "tortilla chips", quantity: "100g"}] },

        { name: "French Onion Soup", price: 8, description: "Caramelized onions in a rich beef broth, topped with toasted baguette and melted Gruyère cheese.", ingredients: [{name: "caramelized onions", quantity: "50g"}, {name: "beef broth", quantity: "125g"}, {name: "baguette", quantity: "75g"}, {name: "cheese", quantity: "50g"}] },

        { name: "Buffalo Chicken Wings", price: 6, description: "Crispy chicken wings tossed in a spicy buffalo sauce, served with celery sticks and blue cheese dressing.", ingredients: [{name: "chicken wings", quantity: "110g"}, {name: "buffalo sauce", quantity: "30g"}, {name: "celery", quantity: "10g"}, {name: "blue cheese", quantity: "25g"}] },

        // MAINS
        { name: "Beef Lasagne", price: 12, description: "Layers of fresh pasta sheets, homemade Bolognese sauce, creamy béchamel, and a blend of Parmesan, mozzarella, and ricotta cheeses, baked to perfection. Served with a side of garlic bread and a garden salad dressed in balsamic vinaigrette.", ingredients: [{name: "ground beef", quantity: "80g"}, {name: "olive oil", quantity: "5g"}, {name: "Onion", quantity: "35g"}, {name: "garlic", quantity: "10g"}, {name: "tomatoes", quantity: "80g"}, {name: "pasta", quantity: "70g"}, {name: "cheese", quantity: "50g"}, {name: "bechamel sauce", quantity: "100g"}, {name: "garlic bread", quantity: "50g"}, {name: "salad", quantity: "20g"}] },

        { name: "Ratatouille", price: 10, description: "A vegetable stew made with tomatoes, aubergine, courgette, bell peppers, and herbs.", ingredients: [{name: "tomatoes", quantity: "100g"}, {name: "aubergine", quantity: "75g"}, {name: "courgette", quantity: "75g"}, {name: "bell peppers", quantity: "30g"}] },

        { name: "Paella", price: 15, description: "Saffron-infused rice cooked with a variety of seafood, chicken, chorizo, and vegetables, creating a flavorful one-pan dish.", ingredients: [{name: "saffron", quantity: "10g"}, {name: "rice", quantity: "100g"}, {name: "seafood", quantity: "60g"}, {name: "chicken", quantity: "60g"}, {name: "chorizo", quantity: "60g"}, {name: "vegetables", quantity: "50g"}] },

        { name: "Chicken Mole", price: 12, description: "Grilled chicken smothered in rich, flavorful mole sauce made with chili peppers, chocolate, and spices, served with rice.", ingredients: [{name: "chicken", quantity: "100g"}, {name: "rice", quantity: "130g"}, {name: "mole sauce", quantity: "70g"}] },

        { name: "Chicken Tikka Masala", price: 12, description: "Tender pieces of chicken cooked in a creamy tomato-based sauce with aromatic spices, served with basmati rice and naan bread.", ingredients: [{name: "chicken", quantity: "100g"}, {name: "tomatoes", quantity: "75g"}, {name: "spices", quantity: "25g"}, {name: "rice", quantity: "80g"}, {name: "naan bread", quantity: "50g"}] },

        { name: "BBQ Ribs", price: 11, description: "Slow-cooked pork ribs glazed with tangy barbecue sauce, served with coleslaw and cornbread.", ingredients: [{name: "pork ribs", quantity: "160g"}, {name: "barbeque sauce", quantity: "50g"}, {name: "coleslaw", quantity: "40g"}, {name: "cornbread", quantity: "50g"}] },

        { name: "sushi platter", price: 12, description: "A selection of fresh nigiri and maki rolls featuring tuna, salmon, shrimp, and avocado.", ingredients: [{name: "sushi rice", quantity: "100g"}, {name: "tuna", quantity: "25g"}, {name: "salmon", quantity: "25g"}, {name: "shrimp", quantity: "25g"}, {name: "nori", quantity: "40g"}, {name: "avocado", quantity: "20g"}] }
    ]
    menuItems.map(el => {
        addItem('item', {
            FoodName: el.name,
            Price: el.price,
            Description: el.description,
            Ingredients: el.ingredients
        })
    })
}
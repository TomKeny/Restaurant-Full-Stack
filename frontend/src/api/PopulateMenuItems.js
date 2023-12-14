import addItem from "./addItem"

export const PopulateMenuItems = () => {
    const menuItems = [
        { name: "Miso Soup", servingSize: "250g", price: 6, description: "A classic savoury broth with tofu, seaweed, and green onions", ingredients: [{name: "dashi stock", quantity: "160g"}, {name: "miso paste", quantity: "15g"}, {name: "tofu", quantity: "50g"}, {name: "green onions", quantity: "20g"}, {name: "seaweed", quantity: "5g"}]  },

        { name: "Patatas Bravas", servingSize: "100g", price: 6, description: "Crispy potatoes served with a spicy tomato sauce and aioli", ingredients: [{name: "potatoes", quantity: "65g"}, {name: "olive oil", quantity: "5g"}, {name: "tomatoes", quantity: "15g"}, {name: "chili pepper", quantity: "5g"}, {name: "aioli", quantity: "10g"}] },

        { name: "Bruschetta al Pomodoro", servingSize: "200g", price: 5, description: "Grilled bread topped with diced tomatoes, garlic, basil, and olive oil.", ingredients: [{name: "bread", quantity: "170g"}, {name: "tomatoes", quantity: "15g"}, {name: "garlic", quantity: "8g"}, {name: "basil", quantity: "2g"}, {name: "olive oil", quantity: "3g"}] },

        { name: "Samosas", servingSize: "120g", price: 6, description: "Crispy pastries filled with spiced potatoes, peas, and herbs, served with tamarind chutney.", ingredients: [{name: "pastry", quantity: "40g"}, {name: "potatoes", quantity: "40g"}, {name: "peas", quantity: "10g"}, {name: "onions", quantity: "10g"}, {name: "tamarind chutney", quantity: "20g"}] },

        { name: "Guacamole and Tortilla Chips", servingSize: "150g", price: 5, description: "Freshly made guacamole served with crispy tortilla chips.", ingredients: [{name: "guacamole", quantity: "50g"}, {name: "tortilla chips", quantity: "100g"}] },

        { name: "French Onion Soup", servingSize: "300g", price: 8, description: "Caramelized onions in a rich beef broth, topped with toasted baguette and melted Gruyère cheese.", ingredients: [{name: "caramelized onions", quantity: "50g"}, {name: "beef broth", quantity: "125g"}, {name: "baguette", quantity: "75g"}, {name: "cheese", quantity: "50g"}] },

        { name: "Buffalo Chicken Wings", servingSize: "175g", price: 6, description: "Crispy chicken wings tossed in a spicy buffalo sauce, served with celery sticks and blue cheese dressing.", ingredients: [{name: "chicken wings", quantity: "110g"}, {name: "buffalo sauce", quantity: "30g"}, {name: "celery", quantity: "10g"}, {name: "blue cheese", quantity: "25g"}] }
    ]
    menuItems.map(el => {
        addItem('item', {
            FoodName: el.name,
            ServingSize: el.servingSize,
            Price: el.price,
            Description: el.description,
            Ingredients: el.ingredients
        })
    })
}
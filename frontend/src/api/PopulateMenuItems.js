import addItem from "./addItem"

export const PopulateMenuItems = () => {
    const menuItems = [
        { name: "Miso Soup", servingSize: "250g", price: 6, description: "A classic savoury broth with tofu, seaweed, and scallions" },
        { name: "Patatas Bravas", servingSize: "100g", price: 6, description: "Crispy potatoes served with a spicy tomato sauce and aioli" },
        { name: "Bruschetta al Pomodoro", servingSize: "200g", price: 5, description: "Grilled bread topped with diced tomatoes, garlic, basil, and olive oil." },
        { name: "Samosas", servingSize: "100g", price: 6, description: "Crispy pastries filled with spiced potatoes, peas, and herbs, served with tamarind chutney." },
        { name: "Guacamole and Tortilla Chips", servingSize: "170g", price: 5, description: "Freshly made guacamole served with crispy tortilla chips." },
        { name: "French Onion Soup", servingSize: "300g", price: 8, description: "Caramelized onions in a rich beef broth, topped with toasted baguette and melted Gruyère cheese." },
        { name: "Buffalo Chicken Wings", servingSize: "150g", price: 6, description: "Crispy chicken wings tossed in a spicy buffalo sauce, served with celery sticks and blue cheese dressing." }
    ]
    menuItems.map(el => {
        addItem('item', {
            FoodName: el.name,
            ServingSize: el.servingSize,
            Price: el.price,
            Description: el.description,
        })
    })
}
export const ItemCalories = ({ingredient}) => {
    return (
        <div>
            <h3 className="my-3">Ingredient: {ingredient.name}</h3>
            <p>calories: {ingredient.calories}</p>
            <p>quantity: {ingredient.serving_size_g}g</p>
            <p>total fat: {ingredient.fat_total_g}g</p>
            <p>saturated fat: {ingredient.fat_saturated_g}g</p>
            <p>protein: {ingredient.protein_g}g</p>
            <p>sodium: {ingredient.sodium_mg}mg</p>
            <p>potassium: {ingredient.potassium_mg}mg</p>
            <p>cholesterol: {ingredient.cholesterol_mg}mg</p>
            <p>total carbohydrates: {ingredient.carbohydrates_total_g}g</p>
            <p>fiber: {ingredient.fiber_g}g</p>
            <p className="mb-3">sugar: {ingredient.sugar_g}g</p>
        </div>
    )
}
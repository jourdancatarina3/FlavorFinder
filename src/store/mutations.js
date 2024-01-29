export function setSearchedMeals(state, meals) {
    state.searchedMeals = meals || []
}

export function setMealsByLetter(state, meals) {
    state.mealsByLetter = meals || []
}

export function setMealsByIngredients(state, meals) {
    state.mealsByIngredient = meals || []
}

export function setMealCategories(state, categories) {
    state.mealCategories = categories || []
}
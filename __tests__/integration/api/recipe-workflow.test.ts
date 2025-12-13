describe('Recipe Workflow', () => {
  it('should fetch recipes and get details', async () => {
    const recipesApi = require('../../../lib/api/recipies');
    const ratingsApi = require('../../../lib/api/ratings');
    
    const { data: recipes, error: recipesError } = await recipesApi.getRecipes();
    expect(recipesError).toBeNull();
    expect(recipes).toBeDefined();
    expect(recipes.length).toBeGreaterThan(0);
    
    const firstRecipe = recipes[0];
    const { data: recipe, error: recipeError } = await recipesApi.getRecipeById(firstRecipe.id);
    expect(recipeError).toBeNull();
    expect(recipe.id).toBe(firstRecipe.id);
    
    const ratingResult = await ratingsApi.getAverageRating(firstRecipe.id);
    expect(ratingResult.error).toBeNull();
    expect(typeof ratingResult.average).toBe('number');
  });
});

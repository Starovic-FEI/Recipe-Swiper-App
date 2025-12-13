describe('Reviews API', () => {
  it('should export review functions', () => {
    const reviewsApi = require('../../../lib/api/reviews');
    expect(reviewsApi.addReview).toBeDefined();
    expect(reviewsApi.getRecipeReviews).toBeDefined();
    expect(reviewsApi.deleteReview).toBeDefined();
  });

  it('should get reviews for recipe', async () => {
    const recipesApi = require('../../../lib/api/recipies');
    const reviewsApi = require('../../../lib/api/reviews');
    
    const { data: recipes } = await recipesApi.getRecipes();
    if (recipes && recipes.length > 0) {
      const recipeId = recipes[0].id;
      const { data, error } = await reviewsApi.getRecipeReviews(recipeId);
      
      expect(error).toBeNull();
      expect(Array.isArray(data)).toBe(true);
    }
  });
});

describe('Ratings API', () => {
  it('should export rating functions', () => {
    const ratingsApi = require('../../../lib/api/ratings');
    expect(ratingsApi.addRating).toBeDefined();
    expect(ratingsApi.getUserRating).toBeDefined();
    expect(ratingsApi.getAverageRating).toBeDefined();
  });

  it('should get average rating for recipe', async () => {
    const recipesApi = require('../../../lib/api/recipies');
    const ratingsApi = require('../../../lib/api/ratings');
    
    const { data: recipes } = await recipesApi.getRecipes();
    if (recipes && recipes.length > 0) {
      const recipeId = recipes[0].id;
      const result = await ratingsApi.getAverageRating(recipeId);
      
      expect(result.error).toBeNull();
      expect(typeof result.average).toBe('number');
      expect(typeof result.count).toBe('number');
    }
  });
});

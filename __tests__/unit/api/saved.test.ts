describe('Saved Recipes API', () => {
  it('should export saved recipe functions', () => {
    const savedApi = require('../../../lib/api/saved');
    expect(savedApi.saveRecipe).toBeDefined();
    expect(savedApi.getSavedRecipes).toBeDefined();
    expect(savedApi.toggleFavorite).toBeDefined();
    expect(savedApi.removeSavedRecipe).toBeDefined();
  });
});

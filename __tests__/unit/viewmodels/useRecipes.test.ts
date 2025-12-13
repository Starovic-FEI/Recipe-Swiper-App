describe('useRecipes ViewModel', () => {
  it('should export useRecipes hook', () => {
    const { useRecipes } = require('../../../lib/viewmodels/useRecipes');
    expect(useRecipes).toBeDefined();
    expect(typeof useRecipes).toBe('function');
  });

  it('should export useRecipe hook', () => {
    const { useRecipe } = require('../../../lib/viewmodels/useRecipes');
    expect(useRecipe).toBeDefined();
    expect(typeof useRecipe).toBe('function');
  });
});

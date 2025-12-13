describe('Recipes API', () => {
  it('should fetch recipes from database', async () => {
    const recipesApi = require('../../../lib/api/recipies');
    const { data, error } = await recipesApi.getRecipes();
    
    expect(error).toBeNull();
    expect(data).toBeDefined();
    expect(Array.isArray(data)).toBe(true);
    if (data.length > 0) {
      expect(data[0]).toHaveProperty('title');
      expect(data[0]).toHaveProperty('id');
    }
  });

  it('should fetch recipe by id', async () => {
    const recipesApi = require('../../../lib/api/recipies');
    const { data: recipes } = await recipesApi.getRecipes();
    
    if (recipes && recipes.length > 0) {
      const firstRecipeId = recipes[0].id;
      const { data, error } = await recipesApi.getRecipeById(firstRecipeId);
      
      expect(error).toBeNull();
      expect(data).toBeDefined();
      expect(data.id).toBe(firstRecipeId);
    }
  });

  it('should return error for invalid recipe id', async () => {
    const recipesApi = require('../../../lib/api/recipies');
    const { data, error } = await recipesApi.getRecipeById(999999);
    
    expect(data).toBeNull();
    expect(error).toBeDefined();
  });
});

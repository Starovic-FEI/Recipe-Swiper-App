# Testing

## Run Tests

```bash
npm test
```

## Write New Tests

1. Create test file in appropriate folder:
   - `__tests__/unit/api/` - API functions
   - `__tests__/unit/viewmodels/` - ViewModels/hooks
   - `__tests__/unit/components/` - React components
   - `__tests__/integration/` - Multi-module workflows
2. Name the file `[module].test.ts` (e.g., `recipes.test.ts`) for unit tests or `[feature]-workflow.test.ts` for integration tests
3. Write test using `describe` and `it` blocks
4. Use `async/await` when testing API calls

### Example

```typescript
describe('Recipes API', () => {
  it('should fetch recipes from database', async () => {
    const recipesApi = require('../../../lib/api/recipies');
    const { data, error } = await recipesApi.getRecipes();
    
    expect(error).toBeNull();
    expect(data).toBeDefined();
    expect(Array.isArray(data)).toBe(true);
  });

  it('should fetch recipe by id', async () => {
    const recipesApi = require('../../../lib/api/recipies');
    const { data: recipes } = await recipesApi.getRecipes();
    
    if (recipes && recipes.length > 0) {
      const firstRecipeId = recipes[0].id;
      const { data, error } = await recipesApi.getRecipeById(firstRecipeId);
      
      expect(error).toBeNull();
      expect(data.id).toBe(firstRecipeId);
    }
  });
});
```

### Integration Test Example

```typescript
describe('Recipe Workflow', () => {
  it('should fetch recipes and get details', async () => {
    const recipesApi = require('../../../lib/api/recipies');
    const ratingsApi = require('../../../lib/api/ratings');
    
    const { data: recipes } = await recipesApi.getRecipes();
    expect(recipes.length).toBeGreaterThan(0);
    
    const firstRecipe = recipes[0];
    const { data: recipe } = await recipesApi.getRecipeById(firstRecipe.id);
    expect(recipe.id).toBe(firstRecipe.id);
    
    const result = await ratingsApi.getAverageRating(firstRecipe.id);
    expect(typeof result.average).toBe('number');
  });
});
```

### Common Assertions

```typescript
expect(value).toBeDefined()
expect(value).toBeNull()
expect(value).toBe(expected)
expect(array).toHaveLength(5)
expect(number).toBeGreaterThan(0)
expect(object).toHaveProperty('key')
expect(array.length).toBeGreaterThan(0)
```

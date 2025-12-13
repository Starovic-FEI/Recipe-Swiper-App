describe('useRatings ViewModel', () => {
  it('should export useRatings hook', () => {
    const { useRatings } = require('../../../lib/viewmodels/useRatings');
    expect(useRatings).toBeDefined();
    expect(typeof useRatings).toBe('function');
  });
});

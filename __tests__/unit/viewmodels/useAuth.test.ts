describe('useAuth ViewModel', () => {
  it('should export useAuth hook', () => {
    const { useAuth } = require('../../../lib/viewmodels/useAuth');
    expect(useAuth).toBeDefined();
    expect(typeof useAuth).toBe('function');
  });
});

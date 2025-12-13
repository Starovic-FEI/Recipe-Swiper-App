describe('Auth API', () => {
  it('should export auth functions', () => {
    const authApi = require('../../../lib/api/auth');
    expect(authApi.register).toBeDefined();
    expect(authApi.login).toBeDefined();
    expect(authApi.logout).toBeDefined();
    expect(authApi.getCurrentUser).toBeDefined();
  });

  it('should get current user or return session missing', async () => {
    const authApi = require('../../../lib/api/auth');
    const { user, error } = await authApi.getCurrentUser();
    
    if (error) {
      expect(error.message).toContain('session');
    } else {
      expect(user).toBeDefined();
    }
  });
});

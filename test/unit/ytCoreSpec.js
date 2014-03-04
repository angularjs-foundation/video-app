describe('ytCore', function() {
  it('should have a working ytCore module', function() {
    var exists = true;
    try {
      angular.bootstrap(document, ['ytCore']);
    } catch(e) {
      exists = false;
    }
    expect(exists).toBe(true);
  });
});

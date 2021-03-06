describe('accessControl.User', function() {
  var userService;

  beforeEach(module('accessControl'));

  beforeEach(inject(function($injector) {
    userService = $injector.get('accessControl.User');
  }));

  describe('save()', function() {
    it('should save user in local storage', function() {
      userService.save(factory.user());
      expect(localStorage.getItem('user')).toEqual(JSON.stringify(factory.user()));
    });
  });

  describe('current()', function() {
    it('should return user saved in local storage', function() {
      localStorage.setItem('user', JSON.stringify(factory.user()));
      expect(userService.current()).toEqual(factory.user());
    });
  });
});

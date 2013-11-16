'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Shortcuts', function() {
  beforeEach(function() {
    browser().navigateTo('/');
    sleep(1);
  });

  describe('Retrieve', function() {
    it('should not retrieve a link when no shortcut was entered', function() {
      input('existingShortcutId').enter('');
      element('#retrieve').click();

      expect(element('#linkedUrl a').text()).toBe('');
      expect(element('#linkedUrl a').attr('href')).toBe('');
    });

    it('should retrieve a link when a shortcut was entered', function() {
      var link = 'http://www.google.com';

      input('existingShortcutId').enter('1234');
      element('#retrieve').click();

      expect(element('#linkedUrl a').text()).toBe(link);
      expect(element('#linkedUrl a').attr('href')).toBe(link);
    });
  });
});

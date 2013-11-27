'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Shortcuts', function() {
  var testShortcut = 'TEST_SHORTCUT';
  var testUrl = 'http://test.urlsh/test';

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
      input('existingShortcutId').enter(testShortcut);
      element('#retrieve').click();

      expect(element('#linkedUrl a').text()).toBe(testUrl);
      expect(element('#linkedUrl a').attr('href')).toBe(testUrl);
    });
  });

  describe('Create', function() {
    it('should not create a shortcut when no URL was entered', function() {
      input('newShortcutUrl').enter('');
      element('#create').click();

      expect(element('#shortcut a').text()).toBe('');
      expect(element('#shortcut a').attr('href')).toBe('');
    });

    it('should create a shortcut when a URL was entered', function() {
      var shortcut = '1234';

      input('newShortcutUrl').enter(testUrl);
      element('#create').click();

      expect(element('#shortcut a').text()).toBe(shortcut);
      expect(element('#shortcut a').attr('href')).toBe(shortcut);
    });
  });
});

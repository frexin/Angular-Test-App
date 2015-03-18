'use strict';

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /woodList when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/list");
  });


  describe('woodList', function() {

    beforeEach(function() {
      browser.get('index.html#/list');
    });


    it('should render woodList when user navigates to /list', function() {
      expect(element.all(by.css('[ng-view] li.wood-item')).first())
    });

  });


  describe('woodDetails', function() {

    beforeEach(function() {
      browser.get('index.html#/wood/1');
    });


    it('should render woodDetails when user navigates to /wood/1', function() {
      expect(element.all(by.css('[ng-view] h1')).first().getText()).
        toMatch(/Wood/);
    });

  });
});

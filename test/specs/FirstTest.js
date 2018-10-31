var assert = require('assert');

describe('webdriver.io page1', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://webdriver.io');
        var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
        console.log(title);
        console.log('test');
    });
});
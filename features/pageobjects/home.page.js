const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get StoreName () {
        return $('//dt[contains(text(), "co")]');
    }
}

module.exports = new HomePage();

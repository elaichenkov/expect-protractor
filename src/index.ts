import { ElementFinder } from 'protractor';
import { isElementDisplayed } from './utils';

const customMatchers: jasmine.AsyncCustomMatcherFactories = {
  toBeDisplayed(): jasmine.AsyncCustomMatcher {
    const result: jasmine.AsyncCustomMatcherResult = {
      pass: false,
      message: '',
    };

    return {
      compare(element: ElementFinder): jasmine.AsyncCustomMatcherResult {
        result.message = `Expected element '${element.locator().value}' to be displayed on the page`;
        result.pass = isElementDisplayed(element);

        return result;
      },
    };
  },
};

module.exports = customMatchers;

import { ElementFinder } from 'protractor';
import { isElementDisplayed, isElementPresent, getElementText } from './utils';

const customMatchers: jasmine.AsyncCustomMatcherFactories = {
  toBeDisplayed(): jasmine.AsyncCustomMatcher {
    return {
      compare(element: ElementFinder): jasmine.AsyncCustomMatcherResult {
        const result: jasmine.AsyncCustomMatcherResult = {
          pass: false,
          message: '',
        };

        result.pass = isElementDisplayed(element);
        result.message = `Expected element '${element.locator().value}' to be displayed on the page`;

        return result;
      },
    };
  },

  toBePresent(): jasmine.AsyncCustomMatcher {
    return {
      compare(element: ElementFinder): jasmine.AsyncCustomMatcherResult {
        const result: jasmine.AsyncCustomMatcherResult = {
          pass: false,
          message: '',
        };

        result.pass = isElementPresent(element);
        result.message = `Expected element '${element.locator().value}' to be present on the page`;

        return result;
      },
    };
  },

  toHaveText(): jasmine.AsyncCustomMatcher {
    return {
      compare(element: ElementFinder, expectedText: string): jasmine.AsyncCustomMatcherResult {
        const result: jasmine.AsyncCustomMatcherResult = {
          pass: false,
          message: '',
        };

        result.pass = getElementText(element).then((actualText: string): boolean => {
          result.message = `Expected text '${actualText}' to be ${expectedText}`;

          return actualText === expectedText;
        });

        return result;
      },
    };
  },

  toContainText(): jasmine.AsyncCustomMatcher {
    return {
      compare(element: ElementFinder, expectedText: string): jasmine.AsyncCustomMatcherResult {
        const result: jasmine.AsyncCustomMatcherResult = {
          pass: false,
          message: '',
        };

        result.pass = getElementText(element).then((actualText: string): boolean => {
          result.message = `Expected text '${actualText}' to contain ${expectedText}`;

          return actualText.includes(expectedText);
        });

        return result;
      },
    };
  },
};

module.exports = customMatchers;

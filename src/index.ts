import { ElementFinder } from 'protractor';
import { isElementDisplayed, isElementPresent, getElementText, getAttribute } from './utils';

const customMatchers: jasmine.AsyncCustomMatcherFactories = {
  // Element matchers
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

  toHaveValue(): jasmine.AsyncCustomMatcher {
    return {
      compare(element: ElementFinder, expectedValue: string): jasmine.AsyncCustomMatcherResult {
        const result: jasmine.AsyncCustomMatcherResult = {
          pass: false,
          message: '',
        };

        result.pass = getAttribute(element, 'value').then((actualValue: string): boolean => {
          result.message = `Expected value '${actualValue}' to be ${expectedValue}`;

          return actualValue === expectedValue;
        });

        return result;
      },
    };
  },

  toContainValue(): jasmine.AsyncCustomMatcher {
    return {
      compare(element: ElementFinder, expectedValue: string): jasmine.AsyncCustomMatcherResult {
        const result: jasmine.AsyncCustomMatcherResult = {
          pass: false,
          message: '',
        };

        result.pass = getAttribute(element, 'value').then((actualValue: string): boolean => {
          result.message = `Expected value '${actualValue}' to contain ${expectedValue}`;

          return actualValue.includes(expectedValue);
        });

        return result;
      },
    };
  },
};

module.exports = customMatchers;

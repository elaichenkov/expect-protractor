import { ElementFinder, ElementArrayFinder, ExpectedConditions as EC, ProtractorBrowser } from 'protractor';
import {
  isElementDisplayed,
  isElementPresent,
  getElementText,
  getAttribute,
  getElementsCount,
  isElementEnabled,
  getTitle,
  getUrl,
  getWindows,
  getCssValue,
  CSS,
} from './utils';

const customMatchers: jasmine.AsyncCustomMatcherFactories = {
  // ElementFinder matchers
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

  toHaveAttribute(): jasmine.AsyncCustomMatcher {
    return {
      compare(element: ElementFinder, expectedAttribute: string): jasmine.AsyncCustomMatcherResult {
        const result: jasmine.AsyncCustomMatcherResult = {
          pass: false,
          message: '',
        };

        result.pass = getAttribute(element, expectedAttribute).then((actualAttribute: string): boolean => {
          result.message = `Expected element '${element.locator().value}' to have attribute ${expectedAttribute}`;

          return !!actualAttribute;
        });

        return result;
      },
    };
  },

  toContainClass(): jasmine.AsyncCustomMatcher {
    return {
      compare(element: ElementFinder, expectedClassName: string): jasmine.AsyncCustomMatcherResult {
        const result: jasmine.AsyncCustomMatcherResult = {
          pass: false,
          message: '',
        };

        result.pass = getAttribute(element, 'css').then((actualClassNames: string): boolean => {
          result.message = `Expected class names ${actualClassNames} to contain ${expectedClassName}`;

          return actualClassNames.includes(expectedClassName);
        });
        return result;
      },
    };
  },

  toHaveCssValue(): jasmine.AsyncCustomMatcher {
    return {
      compare(element: ElementFinder, expectedCss: CSS): jasmine.AsyncCustomMatcherResult {
        const result: jasmine.AsyncCustomMatcherResult = {
          pass: false,
          message: '',
        };

        result.pass = getCssValue(element, expectedCss.property).then((actualCssValue: string): boolean => {
          result.message = `Expected css value ${actualCssValue} to be ${expectedCss.value}`;

          return actualCssValue === expectedCss.value;
        });

        return result;
      },
    };
  },

  toContainCssValue(): jasmine.AsyncCustomMatcher {
    return {
      compare(element: ElementFinder, expectedCss: CSS): jasmine.AsyncCustomMatcherResult {
        const result: jasmine.AsyncCustomMatcherResult = {
          pass: false,
          message: '',
        };

        result.pass = getCssValue(element, expectedCss.property).then((actualCssValue: string): boolean => {
          result.message = `Expected css value ${actualCssValue} to contain ${expectedCss.value}`;

          return actualCssValue.includes(expectedCss.value);
        });

        return result;
      },
    };
  },

  toHaveLink(): jasmine.AsyncCustomMatcher {
    return {
      compare(element: ElementFinder, expectedLink: string): jasmine.AsyncCustomMatcherResult {
        const result: jasmine.AsyncCustomMatcherResult = {
          pass: false,
          message: '',
        };

        result.pass = getAttribute(element, 'href').then((actualLink: string): boolean => {
          result.message = `Expected element '${element.locator().value} - ${actualLink}' to have link ${expectedLink}`;

          return actualLink === expectedLink;
        });
        return result;
      },
    };
  },

  toContainLink(): jasmine.AsyncCustomMatcher {
    return {
      compare(element: ElementFinder, expectedLink: string): jasmine.AsyncCustomMatcherResult {
        const result: jasmine.AsyncCustomMatcherResult = {
          pass: false,
          message: '',
        };

        result.pass = getAttribute(element, 'href').then((actualLink: string): boolean => {
          result.message = `Expected element '${
            element.locator().value
          } - ${actualLink}' to contain link ${expectedLink}`;

          return actualLink.includes(expectedLink);
        });
        return result;
      },
    };
  },

  toBeClickable(): jasmine.AsyncCustomMatcher {
    return {
      compare(element: ElementFinder): jasmine.AsyncCustomMatcherResult {
        const result: jasmine.AsyncCustomMatcherResult = {
          pass: false,
          message: '',
        };

        result.pass = EC.elementToBeClickable(element)();
        result.message = `Expected element '${element.locator().value}' to be clickable`;

        return result;
      },
    };
  },

  toBeSelected(): jasmine.AsyncCustomMatcher {
    return {
      compare(element: ElementFinder): jasmine.AsyncCustomMatcherResult {
        const result: jasmine.AsyncCustomMatcherResult = {
          pass: false,
          message: '',
        };

        result.pass = EC.elementToBeSelected(element)();
        result.message = `Expected element '${element.locator().value}' to be selected`;

        return result;
      },
    };
  },

  toBeDisabled(): jasmine.AsyncCustomMatcher {
    return {
      compare(element: ElementFinder): jasmine.AsyncCustomMatcherResult {
        const result: jasmine.AsyncCustomMatcherResult = {
          pass: false,
          message: '',
        };

        result.pass = isElementEnabled(element).then((enabled: boolean): boolean => {
          return !enabled;
        });
        result.message = `Expected element '${element.locator().value}' to be disabled`;

        return result;
      },
    };
  },

  // ElementArrayFinder matchers
  toHaveCount(): jasmine.AsyncCustomMatcher {
    return {
      compare(elements: ElementArrayFinder, expectedCount: number): jasmine.AsyncCustomMatcherResult {
        const result: jasmine.AsyncCustomMatcherResult = {
          pass: false,
          message: '',
        };

        result.pass = getElementsCount(elements).then((actualCount: number): boolean => {
          result.message = `Expected elements count ${actualCount} to be ${expectedCount}`;

          return actualCount === expectedCount;
        });

        return result;
      },
    };
  },

  // Browser matchers
  toHaveTitle(): jasmine.AsyncCustomMatcher {
    return {
      compare(browser: ProtractorBrowser, expectedTitle: string): jasmine.AsyncCustomMatcherResult {
        const result: jasmine.AsyncCustomMatcherResult = {
          pass: false,
          message: '',
        };

        result.pass = getTitle(browser).then((actualTitle: string): boolean => {
          result.message = `Expected title ${actualTitle} to be ${expectedTitle}`;

          return actualTitle === expectedTitle;
        });

        return result;
      },
    };
  },

  toContainTitle(): jasmine.AsyncCustomMatcher {
    return {
      compare(browser: ProtractorBrowser, expectedTitle: string): jasmine.AsyncCustomMatcherResult {
        const result: jasmine.AsyncCustomMatcherResult = {
          pass: false,
          message: '',
        };

        result.pass = getTitle(browser).then((actualTitle: string): boolean => {
          result.message = `Expected title ${actualTitle} to contain ${expectedTitle}`;

          return actualTitle.includes(expectedTitle);
        });

        return result;
      },
    };
  },

  toHaveUrl(): jasmine.AsyncCustomMatcher {
    return {
      compare(browser: ProtractorBrowser, expectedUrl: string): jasmine.AsyncCustomMatcherResult {
        const result: jasmine.AsyncCustomMatcherResult = {
          pass: false,
          message: '',
        };

        result.pass = getUrl(browser).then((actualUrl: string): boolean => {
          result.message = `Expected url ${actualUrl} to be ${expectedUrl}`;

          return actualUrl === expectedUrl;
        });

        return result;
      },
    };
  },

  toContainUrl(): jasmine.AsyncCustomMatcher {
    return {
      compare(browser: ProtractorBrowser, expectedUrl: string): jasmine.AsyncCustomMatcherResult {
        const result: jasmine.AsyncCustomMatcherResult = {
          pass: false,
          message: '',
        };

        result.pass = getUrl(browser).then((actualUrl: string): boolean => {
          result.message = `Expected url ${actualUrl} to contain ${expectedUrl}`;

          return actualUrl.includes(expectedUrl);
        });

        return result;
      },
    };
  },

  toHaveWindowsCount(): jasmine.AsyncCustomMatcher {
    return {
      compare(browser: ProtractorBrowser, expectedCount: number): jasmine.AsyncCustomMatcherResult {
        const result: jasmine.AsyncCustomMatcherResult = {
          pass: false,
          message: '',
        };

        result.pass = getWindows(browser).then((windows: string[]): boolean => {
          const windowsCount = windows.length;

          result.message = `Expected windows count ${windowsCount} to be ${expectedCount}`;

          return windowsCount === expectedCount;
        });

        return result;
      },
    };
  },

  toHaveWindowsCountMoreThan(): jasmine.AsyncCustomMatcher {
    return {
      compare(browser: ProtractorBrowser, expectedCount: number): jasmine.AsyncCustomMatcherResult {
        const result: jasmine.AsyncCustomMatcherResult = {
          pass: false,
          message: '',
        };

        result.pass = getWindows(browser).then((windows: string[]): boolean => {
          const windowsCount = windows.length;

          result.message = `Expected windows count ${windowsCount} to be greater than ${expectedCount}`;

          return windowsCount > expectedCount;
        });

        return result;
      },
    };
  },

  toHaveWindowsCountLessThan(): jasmine.AsyncCustomMatcher {
    return {
      compare(browser: ProtractorBrowser, expectedCount: number): jasmine.AsyncCustomMatcherResult {
        const result: jasmine.AsyncCustomMatcherResult = {
          pass: false,
          message: '',
        };

        result.pass = getWindows(browser).then((windows: string[]): boolean => {
          const windowsCount = windows.length;

          result.message = `Expected windows count ${windowsCount} to be less than ${expectedCount}`;

          return windowsCount < expectedCount;
        });

        return result;
      },
    };
  },
};

module.exports = customMatchers;

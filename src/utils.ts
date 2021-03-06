import { ElementFinder, ElementArrayFinder, ProtractorBrowser } from 'protractor';

export type CSS = {
  property: string;
  value: string;
};

export async function isElementDisplayed(element: ElementFinder): Promise<boolean> {
  try {
    const isShown = await element.isDisplayed();

    return isShown;
  } catch {
    return false;
  }
}

export async function isElementPresent(element: ElementFinder): Promise<boolean> {
  return element.isPresent();
}

export async function getElementText(element: ElementFinder): Promise<string> {
  return element.getText();
}

export async function getAttribute(element: ElementFinder, attributeName: string): Promise<string> {
  return element.getAttribute(attributeName);
}

export async function getCssValue(element: ElementFinder, cssStyleProperty: string): Promise<string> {
  return element.getCssValue(cssStyleProperty);
}

export async function getElementsCount(elements: ElementArrayFinder): Promise<number> {
  return elements.count();
}

export async function isElementEnabled(element: ElementFinder): Promise<boolean> {
  return element.isEnabled();
}

export async function getTitle(browser: ProtractorBrowser): Promise<string> {
  return browser.driver.getTitle();
}

export async function getUrl(browser: ProtractorBrowser): Promise<string> {
  return browser.driver.getCurrentUrl();
}

export async function getWindows(browser: ProtractorBrowser): Promise<string[]> {
  return browser.driver.getAllWindowHandles();
}

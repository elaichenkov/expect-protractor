import { ElementFinder, ElementArrayFinder } from 'protractor';

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

export async function getElementsCount(elements: ElementArrayFinder): Promise<number> {
  return elements.count();
}

export async function isElementEnabled(element: ElementFinder): Promise<boolean> {
  return element.isEnabled();
}

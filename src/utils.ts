import { ElementFinder } from 'protractor';

export async function isElementDisplayed(element: ElementFinder): Promise<boolean> {
  try {
    const isShown = await element.isDisplayed();

    return isShown;
  } catch {
    return false;
  }
}

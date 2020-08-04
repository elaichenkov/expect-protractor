# expect-protractor

> expect-protractor is a library which provides a light-weight matchers for the [Protractor](https://github.com/angular/protractor) and [Jasmine](https://github.com/jasmine/jasmine) test frameworks.

## Table of Contents

- [expect-protractor](#expect-protractor)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Importing and Adding](#importing-and-adding)
      - [protractor.config.js](#protractorconfigjs)
      - [protractor.config.ts](#protractorconfigts)
    - [Usage](#usage)
  - [API](#api)
  - [License](#license)

## Getting Started

### Installation

To use expect-protractor in your project, run:

```bash
npm i -D expect-protractor
```

### Importing and Adding

Add the expect-protractor module to the your `protractor.config.js` file in the `onPrepare` function and wrap it into the `beforeEach` function.

#### protractor.config.js

```js
// importing module
const customMatchers = require('expect-protractor');

exports.config = {
  onPrepare() {
    // add matchers in the beforeEach hook
    beforeEach(() => jasmine.addMatchers(customMatchers));
  },
};
```

#### protractor.config.ts

```ts
// importing module
import * as customMatchers from 'expect-protractor';

exports.config = {
  onPrepare() {
    // add matchers in the beforeEach hook
    beforeEach(() => jasmine.addMatchers(customMatchers));
  },
};
```

Also you can add the expect-protractor module directly in your test.

```js
// importing module
const customMatchers = require('expect-protractor');

describe('Test suite', () => {
  // add matchers in the beforeEach hook
  beforeEach(() => jasmine.addMatchers(customMatchers));

  it('should verify', () => {
    // ...
  });
});
```

Also, if you are faced with the TypeScript compilation errors when running your tests, add the typeRoots entry in the tsconfig.json, with the right order:

```json
{
  "compilerOptions": {
    "typeRoots": ["node_modules/expect-protractor", "node_modules/@types"]
  }
}
```

### Usage

**Example** - asserting element's text with `toHaveText` function that comes with the expect-protractor library.

**Without the expect-protractor library:**

```js
expect(await element.getText()).toBe('Some text');
```

**After adding the expect-protractor library:**

```js
await expect(element).toHaveText('Some text');
```

**Example** - asserting element's value with `toHaveValue` function that comes with the expect-protractor library.

**Without the expect-protractor library:**

```js
expect(await element.getAttribute('value')).toBe('Some value');
```

**After adding the expect-protractor library:**

```js
await expect(element).toHaveValue('Some value');
```

## API

**toBeDisplayed** - verifies that element is displayed on the page.

Example:

```js
await expect(element).toBeDisplayed();
```

**toBePresent** - verifies that element is present in the DOM.

Example:

```js
await expect(element).toBePresent();
```

**toContainText** - verifies that element contains text.

Example:

```js
await expect(element).toContainText('text');
```

**toHaveText** - verifies element's text.

Example:

```js
await expect(element).toHaveText('Expected text');
```

**toContainValue** - verifies that element contains value.

Example:

```js
await expect(element).toContainValue('value');
```

**toHaveValue** - verifies element's value.

Example:

```js
await expect(element).toHaveValue('Expected value');
```

**toHaveAttribute** - verifies element has an attribute .

Example:

```js
await expect(element).toHaveAttribute('expected-attribute');
```

**toHaveCssValue** - verifies element has an css value .

Example:

```js
await expect(element).toHaveCssValue({ property: 'color', value: '#000000' });
```

**toContainCssValue** - verifies element contains an css value .

Example:

```js
await expect(element).toContainCssValue({ property: 'color', value: '#0' });
```

**toBeDisabled** - verifies that element is disabled.

Example:

```js
await expect(element).toBeDisabled();
```

**toBeSelected** - verifies that element is selected(checked).

Example:

```js
await expect(element).toBeSelected();
```

**toHaveLink** - verifies element's link(href attribute).

Example:

```js
await expect(element).toHaveLink('https://expected-link.com/');
```

**toContainLink** - verifies element contains link(href attribute).

Example:

```js
await expect(element).toContainLink('link.com');
```

**toContainClass** - verifies element contains class names.

Example:

```js
await expect(element).toContainClass('expected-css-name');
```

**toHaveCount** - verifies element's length.

Example:

```js
await expect(elements).toHaveCount(3);
```

**toBeClickable** - verifies element is clickable.

Example:

```js
await expect(element).toBeClickable();
```

**toHaveTitle** - verifies title.

Example:

```js
await expect(browser).toHaveTitle('Expected title');
```

**toContainTitle** - verifies that title contains text.

Example:

```js
await expect(browser).toContainTitle('title');
```

**toHaveUrl** - verifies current url.

Example:

```js
await expect(browser).toHaveUrl('https://expected.com/');
```

**toContainUrl** - verifies that current url contains text.

Example:

```js
await expect(browser).toContainUrl('.com');
```

**toHaveWindowsCount** - verifies window tabs count.

Example:

```js
await expect(browser).toHaveWindowsCount(2);
```

**toHaveWindowsCountMoreThan** - verifies window tabs count greater than.

Example:

```js
await expect(browser).toHaveWindowsCountMoreThan(3);
```

**toHaveWindowsCountLessThan** - verifies window tabs count less than.

Example:

```js
await expect(browser).toHaveWindowsCountLessThan(2);
```

## License

expect-protractor is [MIT licensed](./LICENSE).

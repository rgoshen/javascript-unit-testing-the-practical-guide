# JavaScript Unit Testing the Practical Guide

## TOC

- [JavaScript Unit Testing the Practical Guide](#javascript-unit-testing-the-practical-guide)
  - [TOC](#toc)
  - [Section 2 Setup and Testing Software](#section-2-setup-and-testing-software)
    - [Which Tools Are Needed for Testing?](#which-tools-are-needed-for-testing)
  - [Section 3 Testing Basics](#section-3-testing-basics)
    - [AAA - Arrange, Act, Assert](#aaa---arrange-act-assert)
      - [Examples](#examples)
  - [Section 4 Writing Good Tests](#section-4-writing-good-tests)
    - [What To Test & What Not To Test](#what-to-test--what-not-to-test)
    - [Only Test Your Code](#only-test-your-code)
    - [Writing Good Tests](#writing-good-tests)
    - [Only Test One Thing](#only-test-one-thing)
  - [Section 5 Integration Tests](#section-5-integration-tests)
  - [Section 6 Advanced Testing Concepts](#section-6-advanced-testing-concepts)
  - [Section 7 Mocking and Spies Dealing with Side Effects](#section-7-mocking-and-spies-dealing-with-side-effects)
    - [Spies & Mocks](#spies--mocks)
  - [Section 8 More on Mocking and Diving Deeper](#section-8-more-on-mocking-and-diving-deeper)
  - [Section 9 Testing and The DOM](#section-9-testing-and-the-dom)
    - [Use Different Testing Environments](#use-different-testing-environments)
  - [Section 10 Course Roundup](#section-10-course-roundup)

Automated testing is a **key concept** in modern (web) development.

Yet it is a concept that can be intimidating at first, hence many developers shy away from diving into testing and adding tests to their projects.

This course will teach you automated unit & integration testing with JavaScript **from the ground up**. You will learn how tests are written and added to your projects, what should (and should not) be tested and how you can test both simple as well as more complex code.

You will learn about the software and setup required to write automated tests and example projects will be provided as part of the course. It's a hands-on, practical course, hence you won't get stuck in theory - instead you'll be able to learn all key concepts at real examples.

In the course, **Vitest** will be used as the main testing library & tool. It's a modern JavaScript test runner and assertion library that provides **Jest** compatibility. Hence what you'll learn in this course will help you no matter if you're working with Vitest or Jest. And the core concepts will apply, no matter which testing setup you're using at all!

As part of this course, typical testing problems will be defined and solved and common strategies like mocking or working with spies are taught in great detail. This course also does not focus on specific types of JavaScript projects - neither does it focus on any specific library or framework.

Instead, you'll learn how to automatically test your (vanilla) JavaScript code, no matter if it's a NodeJS or frontend project. The fundamentals you'll gain in this course will help you in all your future projects - backend (NodeJS) and frontend (vanilla JS, React, Vue, Angular) alike.

## Section 2 Setup and Testing Software

[Slides](/slides/section-2-slides.pdf)

### Which Tools Are Needed for Testing?

- Application Setup & Code
  - Generally independent setup
  - All you need for manual testing
  - Testing setup can (and typically will) be integrated
    - e.g. based on Webpack, Vite, etc...
- Automated Tests
  - Test Runner
    - Runs your tests (i.e., the testing code)
    - Automatically detects testing code
    - Display results
    - e.g. Jest, Karma, Mocha, Jasmine, etc...
  - Assertion Library
    - Used to define expected outcomes
    - Checks whether expectations are met
    - Supports all kinds of expectations and modes (sync/async)
    - e.g. Jest, Chai, Expect, Sinon, etc...

[back to top](#toc)

## Section 3 Testing Basics

[Slides](/slides/section-3-slides.pdf)

### AAA - Arrange, Act, Assert

|     |         |                                                                                 |
| --- | ------- | ------------------------------------------------------------------------------- |
| A   | Arrange | Define the testing environment & values                                         |
| A   | Act     | Run the actual code/function that should be tested                              |
| A   | Assert  | Evaluate the produced value/results and compare it to the expected value/result |
|     |         |                                                                                 |

Writing good tests is an interative process

#### Examples

*math.js*

```javascript
export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}
```

*math.test.js*

```javascript
import { describe, expect, it } from 'vitest';
import { add } from './math';

describe('add', () => {
  it('should sum up all numbers in an array', () => {
    // Arrange
    const numbers = [1, 2, 3, 4, 5];
    const expectedResult = numbers.reduce((sum, number) => sum + number, 0);

    // Act
    const result = add(numbers);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should yield NaN if at least one invalid number is provided', () => {
    // Arrange
    const numbers = [1, 2, 'invalid', 4, 5];

    // Act
    const result = add(numbers);

    // Assert
    expect(result).toBeNaN();
  });

  it('should yield a correct sum if an array of numeric string values is provided', () => {
    // Arrange
    const numbers = ['1', '2', '3', '4', '5'];
    const expectedResult = numbers.reduce(
      (sum, number) => sum + parseInt(number, 10),
      0
    );

    // Act
    const result = add(numbers);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should yield 0 if an empty array is provided', () => {
    // Arrange
    const numbers = [];

    // Act
    const result = add(numbers);

    // Assert
    expect(result).toEqual(0);
  });

  it('should throw an error if no value is not passed into the function', () => {
    // Arrange

    // Act
    const resultFn = () => add(); // will only execute when invoked in the expect()

    // Assert
    expect(resultFn).toThrow(/is not iterable/);
  });

  it('should throw an error if multiple arguments are provided instead of an array', () => {
    // Arrange
    const num1 = 1,
      num2 = 2,
      num3 = 3;

    // Act
    const resultFn = () => add(num1, num2, num3); // will only execute when invoked in the expect()

    // Assert
    expect(resultFn).toThrow(/is not iterable/);
  });
});
```

*numbers.js*

```javascript
export function transformToNumber(value) {
  return +value;
}
```

*numbers.test.js*

```javascript
import { it, expect, describe } from 'vitest';
import { transformToNumber } from './numbers';

describe('transformToNumber', () => {
  it('should transform a string  number to a number of type number', () => {
    const input = '1';
    const result = transformToNumber(input);

    expect(result).toEqual(+input);
    expect(result).toBeTypeOf('number');
  });

  it('should return NaN when a nontransformable value is passed in', () => {
    const input = 'a1';
    const input2 = {};

    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });

  it('should return that number of type number when a number is passed in', () => {
    const input = 1;
    const result = transformToNumber(input);

    expect(result).toEqual(input);
    expect(result).toBeTypeOf('number');
  });

  it('should return NaN when nothing is passed in', () => {
    const result = transformToNumber();

    expect(result).toBeNaN();
  });

  it('should return 0 when an empty string is passed in', () => {
    const input = '';
    const result = transformToNumber(input);

    expect(result).toEqual(0);
  });
});
```

*validation.js*

```javascript
export function validateStringNotEmpty(value) {
  if (value.trim().length === 0) {
    throw new Error('Invalid input - must not be empty.');
  }
}

export function validateNumber(number) {
  if (isNaN(number) || typeof number !== 'number') {
    throw new Error('Invalid number input.');
  }
}
```

*validation.test.js*

```javascript
import { it, expect, describe } from 'vitest';
import { validateStringNotEmpty, validateNumber } from './validation';

describe('validateStringNotEmpty', () => {
  it('should throw an error if the string is empty', () => {
    const input = '';

    const validationFn = () => validateStringNotEmpty(input);

    expect(validationFn).toThrow(/Invalid input - must not be empty/);
  });

  it('should throw an error if the string is full of blanks', () => {
    const input = '    ';

    const validationFn = () => validateStringNotEmpty(input);

    expect(validationFn).toThrow(/Invalid input - must not be empty/);
  });

  it('should not throw an error if the string is not empty', () => {
    const input = 'asdf';
    const validationFn = () => validateStringNotEmpty(input);

    expect(validationFn).not.toThrow(/Invalid input - must not be empty/);
  });
});

describe('validateNumber', () => {
  it('should throw an error if the number is not a number', () => {
    const input = 'asdf';
    const validationFn = () => validateNumber(input);

    expect(validationFn).toThrow(/Invalid number input/);
  });

  it('should throw an error if the input is NaN', () => {
    const input = NaN;
    const validationFn = () => validateNumber(input);

    expect(validationFn).toThrow(/Invalid number input/);
  });

  it('should throw an error if the number is a numeric string', () => {
    const input = '1';
    const validationFn = () => validateNumber(input);

    expect(validationFn).toThrow(/Invalid number input/);
  });

  it('should not throw an error if the input is a number', () => {
    const input = 1;
    const validationFn = () => validateNumber(input);

    expect(validationFn).not.toThrow(/Invalid number input/);
  });
});
```

[back to top](#toc)

## Section 4 Writing Good Tests

[Slides](/slides/section-4-slides.pdf)

### What To Test & What Not To Test

- should only test your code
- don't test any third party code
- don't test what you can't change

### Only Test Your Code

**e.g. fetch() API**

- Don't test if it works as intended
- Don't test your server-side code implicitly via your client side code
  - Write separate tests for your backend code instead
- Do test your client-side reaction to different responses & errors

### Writing Good Tests

- AAA - Arrange - Act - Assert
- 1 - Only test one thing
- Focus on the **essence** of a test when arranging
- Keep your number of assertions ("expects") low

### Only Test One Thing

What is "one thing"?

- One feature
  - e.g. validate input or transform it

[back to top](#toc)

## Section 5 Integration Tests

[back to top](#toc)

## Section 6 Advanced Testing Concepts

[back to top](#toc)

## Section 7 Mocking and Spies Dealing with Side Effects

[Slides](/slides/section-7-slides.pdf)

### Spies & Mocks

**Spies**:

- "Wrappers" around functions or empty replacements for functions that allow you to track if & how a funciton was called

**Mocks**:

- A replacement for an API that may provide some test specific behavior instead
- Objects re-programmed with expectations which form a specification of the calls they are expected to receive

**Dummy**:

- objects that are passed around, never actually used
- usually just used to fill parameter lists

**Fake**:

- objects that have working implementations but usually take some short cut which makes them not suitable for production
  - e.g. in memory database

**Stubs**:

- provide canned answers to calls made during tests
- usually not responding to anything outside what's programmed for the test
- may also record information about calls
  - e.g. email gateway stub that remembers the message it 'sent' or maybe only how many messages it 'sent'

[back to top](#toc)

## Section 8 More on Mocking and Diving Deeper

[back to top](#toc)

## Section 9 Testing and The DOM

[Slides](/slides/section-9-slides.pdf)

### Use Different Testing Environments

| NodeJS[^*]                                 | JSDOM                                                     | Happy-DOM[^**]                            |
| ------------------------------------------ | --------------------------------------------------------- | ----------------------------------------- | --------------------------------------------------------- |
| NodeJS APIs & modules are available        | (Virtual) browser environment with browser APIs & the DOM | NodeJS APIs & modules are available       | (Virtual) browser environment with browser APIs & the DOM |
| Can't interact with browser & browser APIs | Ideal for testint fronend code & projects                 | Ideal for testint fronend code & projects |

[back to top](#toc)

## Section 10 Course Roundup

[back to top](#toc)

[^*]: Default
[^**]: Vitest Only

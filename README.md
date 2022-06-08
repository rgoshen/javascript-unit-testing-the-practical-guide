# JavaScript Unit Testing the Practical Guide
 
## TOC

1. [Section 1 - Getting Started](#section-1-getting-started)
2. [Section 2 - Setup & Testing Software](#section-2-setup-and-testing-software)
3. [Section 3 - Testing Basics](#section-3-testing-basics)
4. [Section 4 - Writing Good Tests](#section-4-writing-good-tests)
5. [Section 5 - Integration Tests](#section-5-integration-tests)
6. [Section 6 - Advanced Testing Concepts](#section-6-advanced-testing-concepts)
7. [Section 7 - Mocking & Spies: Dealing with Side Effects](#section-7-mocking-and-spies-dealing-with-side-effects)
8. [Section 8 - More on Mocking & Diving Deeper](#section-8-more-on-mocking-and-diving-deeper)
9. [Section 9 - Testing & The DOM (Frontend JavaScript Testing)](#section-9-testing-and-the-dom)
10. [Section 10 - Course Roundup](#section-10-course-roundup)

## Section 1 Getting Started

### What is testing?

- verify "if something works as intended"

Types of testing:
- Manual Testing
  - physically testing the code by hand (i.e. write some code, spin up the site and see if it works)
  - tedious & cumbersome
  - error prone
  - often incomplete (not all scenarios covered)
- Automated Testing
  - write some code to test the code you wrote for the feature/site you are working on
  - initial effort (write tests), no effort thereafter
  - predictable & consistent
  - high/complete code & scenario coverage can be achieved

### Unit Testing: What & Why?

What:
```mermaid
graph LR

    subgraph Unit
        b1[A building block of your application]
        b2[Ideally, the smallest possible building block]
        b3[e.g., a function, a class, a component]
    end
```

```mermaid
graph TB
    subgraph applicaiton
        unit1[Unit 1]
        unit2[Unit 2]
        unit3[Unit 3]
        unit4[Unit 4]
    end
```

```mermaid
graph LR
    b1[App = combination of all units]
    b2[if all units were tested, the overall app should work]
    b3[backed up by integration tests]
    b4[changes are always tested against all units to avoid bugs]
    b2 --> b3
```

Why:
- avoids endless amounts of manual testing
- allows you to cover (close to) 100% of your code & scenarios
- code changes are tested against all scenarios (almost) instantly
- write cleaner & better code (because testing then becomes easier)

### Unit, Integration & End-to-End (E2E) Testing

| Unit Testing                                          | Integration Testing                                           | End-to-End (E2E) Testing                                       |
|-------------------------------------------------------|---------------------------------------------------------------|----------------------------------------------------------------|
 | Test the individual building blocks of an application | Test the combination of building blocks                       | Test entire flows and application features                     |
 | Every building block (unit) is tested standalone      | Verify if building blocks (units) work together               | Test the actual "things" real users would do                   |
 |                                                       |                                                               |                                                                |
 | If all building blocks work, the overall app works    | Even if all units work standalone, the combination could fail | Real users use your app and its features, not individual units |


**You should combine all kinds of tests.**

| Unit Testing                                        | Integration Testing                               | End-to-End (E2E) Testing                           |
|-----------------------------------------------------|---------------------------------------------------|----------------------------------------------------|
| Quickly spot and pinpoint breaking changes & errors | Test (parts of) processes & combinations of units | Test realistic user flows & behaviors              |
| Ignore actual user flows and interferences          | Spotting the exact root of an error can be tricky | Covering all possible behaviors can be challenging |

![testing pyramid](images/test-automation-pyramid.jpeg)
[source](https://3fxtqy18kygf3on3bu39kh93-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/test-automation-pyramid.jpg)

### Test-Driven Development (TDD)

A framework/philosophy for writing tests

```mermaid
flowchart TD
    1[1. Write failing test first] --> 2[2. Implement the code ot make the test succeed] --> 3[3. Refactor] --> 1
```

[back to top](#toc)

## Section 2 Setup and Testing Software

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

[back to top](#toc)

## Section 4 Writing Good Tests

[back to top](#toc)

## Section 5 Integration Tests

[back to top](#toc)

## Section 6 Advanced Testing Concepts

[back to top](#toc)

## Section 7 Mocking and Spies Dealing with Side Effects

[back to top](#toc)

## Section 8 More on Mocking and Diving Deeper

[back to top](#toc)

## Section 9 Testing and The DOM

[back to top](#toc)

## Section 10 Course Roundup

[back to top](#toc)

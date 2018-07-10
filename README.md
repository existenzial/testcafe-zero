<div style="text-align:center;">
  <img src="https://testcafe-discuss.devexpress.com/uploads/default/original/1X/c3e487471d9ef2e270385aa2650998425ed4b1ef.png" style="height:35px;"/>
  <br>
  <h1>💖 Starter</h1>
  <br>
  <a href="https://github.com/DevExpress/testcafe">
  <img alt="Tested with TestCafe" src="https://img.shields.io/badge/tested%20with-TestCafe-2fa4cf.svg">
  </a>
</div>

---
**TestCafe** is a `node` based **e2e** automated testing solution using a [URL-rewriting proxy](https://github.com/DevExpress/testcafe-hammerhead "More Info") designed to free you from Selenium and Web Driver restrictions once and for all.

```bash
tests
|    |__ **.spec.js
|
testcafe.json   # Config (Optional)
```

## General
- **Info** - <a href="http://devexpress.github.io/testcafe/">TestCafe</a>
- **Repo** - <a href="https://github.com/DevExpress/testcafe">Github repository</a>
- **Plugins**
  - <a href="https://github.com/DevExpress/testcafe-live">TestCafe Live</a> (_add - watch mode_)
  - <a href="https://github.com/DevExpress/testcafe-react-selectors">React</a>
  - <a href="https://github.com/DevExpress/testcafe-vue-selectors">Vue</a>
  - <a href="https://github.com/miherlosev/eslint-plugin-testcafe">ESLint</a>
  - <a href="https://github.com/helen-dikareva/axe-testcafe">Accessibility</a>
  - <a href="https://github.com/romanresh/vscode-testcafe">VSCode</a>
  - and many more...

## Included
```bash
# TestCafe
yarn add --dev testcafe

# Watch Mode
yarn add --dev testcafe-live

# ESLint Config
yarn add --dev eslint-plugin-testcafe

# React Selectors
yarn add --dev testcafe-react-selectors

# Vue Selectors
yarn add --dev testcafe-vue-selectors

# Angular Selectors
yarn add --dev testcafe-angular-selectors
```
## Get Started
```bash
# Run tests
yarn test

# Run tests in watch mode
yarn test:watch

# Run mobile tests
yarn test:device

# Remove all integrations & start fresh
yarn eject
```

## Pros
- Cross-browser support (even _IE_ _+ physical mobile devices via QR code scan_)
- Selenium and WebDriver free
- Little to no configuration
- Can execute tests concurrently
- Easy Jenkins CI integration
- Framework-specific selectors (e.g.: _React_ ⚛️, _Vue_ 🇻 etc.)
- Stellar documentation
- Explicit use of `async` and `await` for asynchronous execution

## Cons
- Non-intuitive syntax (e.g.: _"fixtures"_ vs. _"describe"_)
- no dedicated app for VQA
- Node limitations
- A work in progress

## Contributors
[<img src="https://avatars3.githubusercontent.com/u/10368585?s=460&v=4" alt="Jazz Lyles" width="100px;" />](https:/github.com/existenzial)<br />
[✉️](mailto:ripley36706@gmail.com)

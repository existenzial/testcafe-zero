/* eslint-disable */
import { waitForReact, ReactSelector } from 'testcafe-react-selectors';
import * as config from '../testcafe';
/*
NOTE:
- ReactSelectors need classNames to select components
- Test un-minified code or configure minifier to retain classNames
*/
fixture `React Tests`
  .page(config.baseUrl)
  .beforeEach(async () => {
    await waitForReact();
  });

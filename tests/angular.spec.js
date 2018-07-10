/* eslint-disable */
import { AngularSelector, waitForAngular } from 'testcafe-angular-selectors';
import * as config from '../testcafe';

fixture `Angular Tests`
  .page(config.basUrl)
  .beforeEach(async () => {
    await waitForAngular();
  });

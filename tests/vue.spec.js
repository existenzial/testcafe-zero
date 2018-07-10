/* eslint-disable */
import VueSelector from 'testcafe-vue-selectors';
import * as config from '../testcafe';

fixture `Vue Tests`
  .page(config.baseUrl)

test('Root', async t => {
  const rootVue = VueSelector();
  const rootState = await rootVue.getVue();
});

import { module, test } from 'qunit';
import { setupRenderingTest } from 'webpack-css-modules-v2-addon-test-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | hello-world', function (hooks) {
  setupRenderingTest(hooks);

  test('it has correct styles', async function (assert) {
    await render(hbs`<HelloWorld />`);

    assert.dom('[data-test-hello]').hasStyle({
      backgroundColor: 'rgb(255, 0, 0)',
      color: 'rgb(255, 255, 255)',
      fontSize: '60px',
    });

    assert.dom('[data-test-world]').hasStyle({
      backgroundColor: 'rgb(0, 255, 0)',
      color: 'rgb(255, 255, 255)',
      fontSize: '60px',
    });
  });
});

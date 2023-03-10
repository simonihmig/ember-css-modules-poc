import Application from 'webpack-css-modules-v2-addon-test-app/app';
import config from 'webpack-css-modules-v2-addon-test-app/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();

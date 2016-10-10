import { Router, Request, Response } from 'express';
import { provide, enableProdMode } from 'angular2/core';
import { PlatformLocation, APP_BASE_HREF, ROUTER_PROVIDERS } from 'angular2/router';
import {
  REQUEST_URL,
  NODE_LOCATION_PROVIDERS,
  selectorResolver,
  selectorRegExpFactory,
  renderDocumentWithPreboot
} from 'angular2-universal';

const constants = require('../constants');
if (!constants.IS_DEV_ENV) {
  enableProdMode();
}

import { App } from '../app';

function reduceScripts(content, src) {
  return `${content}<script type="text/javascript" src="${src}"></script>`;
}

const WORKER_SCRIPTS  = [`${VENDOR_NAME}.js`, `${WORKER_NAME}.js`].reduce(reduceScripts, '');
const BROWSER_SCRIPTS = [`${VENDOR_NAME}.js`, `${BROWSER_NAME}.js`].reduce(reduceScripts, '');

const HTML_FILE = require('./index.html');

export function renderComponent(html, component, providers, prebootOptions) {
  return renderDocumentWithPreboot(html, component, providers, prebootOptions).then((serializedCmp) => {
    const selector: string = selectorResolver(component);

    return html.replace(selectorRegExpFactory(selector), serializedCmp);
  });
}

const PROVIDERS = [
  ROUTER_PROVIDERS,
  NODE_LOCATION_PROVIDERS,
  provide(APP_BASE_HREF, { useValue: '/' }),
];

const router = Router();

/**
 * Angular2 application
 */
router.get('/*', (req: Request, res: Response, next: Function) => {
  return Promise.resolve()
    .then(() => {
      if (HAS_SS) {
        const REQUEST_PROVIDERS = [
          provide(REQUEST_URL,  { useValue: req.originalUrl })
        ];

        return renderComponent(HTML_FILE, App, [PROVIDERS, REQUEST_PROVIDERS], PREBOOT);
      }

      return HTML_FILE;
    })
    .then((rawContent) => {
      const scripts = HAS_WW ? WORKER_SCRIPTS : BROWSER_SCRIPTS;
      const content = rawContent.replace('</body>', scripts + '</body>');

      return res.send(content);
    })
    .catch(error => next(error));
});

export { router };

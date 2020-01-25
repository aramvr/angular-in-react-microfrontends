import React, {
  createRef,
  useEffect,
  useLayoutEffect,
  useContext
} from 'react';
import { AppContext } from '../App';

const angularAssets = [
  {
    src: 'runtime-es2015.js',
    type: 'module',
    defer: false,
    nomodule: false
  },
  {
    src: 'runtime-es5.js',
    defer: true,
    nomodule: true
  },
  {
    src: 'polyfills-es5.js',
    defer: true,
    nomodule: true
  },
  {
    src: 'polyfills-es2015.js',
    type: 'module',
    defer: false,
    nomodule: false
  },
  {
    src: 'styles-es2015.js',
    type: 'module',
    defer: false,
    nomodule: false
  },
  {
    src: 'styles-es5.js',
    defer: true,
    nomodule: true
  },
  {
    src: 'vendor-es2015.js',
    type: 'module',
    defer: false,
    nomodule: false
  },
  {
    src: 'vendor-es5.js',
    defer: true,
    nomodule: true
  },
  {
    src: 'main-es2015.js',
    type: 'module',
    defer: false,
    nomodule: false
  },
  {
    src: 'main-es5.js',
    defer: true,
    nomodule: true
  }
];
const angularHost = 'http://localhost:3002/';

const Product = () => {
  const appProductRef = createRef();
  const appContext = useContext(AppContext);

  useLayoutEffect(() => {
    if (!appContext.angularLoaded) {
      angularAssets.map(script => {
        const element = document.createElement('script');
        element.src = angularHost + script.src;
        if (script.type) {
          element.type = script.type;
        }
        element.defer = script.defer;
        if (script.nomodule) {
          element.setAttribute('nomodule', true);
        }

        document.body.appendChild(element);
      });
      appContext.setAngularLoaded(true);
    }

    const angularBootstrap = new Event('angular-bootstrap');
    document.dispatchEvent(angularBootstrap);
  });

  return <app-root ref={appProductRef}></app-root>;
};

export default Product;

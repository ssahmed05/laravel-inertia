import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init();
require('./bootstrap');
const app = document.getElementById('app');

require('./components/Root');
createInertiaApp({
    resolve: name => require(`./Pages/${name}`),
    setup({ el, App, props }) {
      render(<App {...props} />, el)
    },
  })
// render(
//     <InertiaApp
//       initialPage={JSON.parse(app.dataset.page)}
//       resolveComponent={name => import(`./Pages/${name}`).then(module => module.default)}
//     />,
//     app
//   )



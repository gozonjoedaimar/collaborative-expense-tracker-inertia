import React from 'react'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init();

createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  title: title => `${title} - Collaborative Expense Tracker`,
  setup({ el, App, props }) {
    let root = createRoot(el);
    root.render(<App {...props} />)
  },
})
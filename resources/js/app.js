import React from 'react'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init();

// Trim multiline classNames
String.prototype.cn = function() {
  return this.toString().replace(/\s+/g,' ').replace(/(\r\n|\n|\r)/gm," ").trim()
}

createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  title: title => `${title} - Collaborative Expense Tracker`,
  setup({ el, App, props }) {
    let root = createRoot(el);
    root.render(
      <React.StrictMode>
        <App {...props} />
      </React.StrictMode>
    )
  },
})
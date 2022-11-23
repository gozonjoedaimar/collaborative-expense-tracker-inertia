import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';

InertiaProgress.init();

declare global {
  interface String {
    cn(): string;
  }
}

// Trim multiline classNames
String.prototype.cn = function() {
  return this.toString().replace(/\s+/g,' ').replace(/(\r\n|\n|\r)/gm," ").trim()
}

const app  = document.getElementById("app") as HTMLElement;
const init = JSON.parse(app.dataset.page as string);

const resolver = (name: string) => import(`./Pages/${name}`).then((module) => {
  const page = module.default;

  // if (name === "Web/Error") {
  //   page.layout = (page: any) => <ErrorLayout children={page}/>;

  //   return page;
  // }

  // if (page.layout === undefined) {
  //   page.layout = (page: any) => <AppLayout children={page}/>;
  // }

  return page;
});

let root = createRoot(app);

root.render(<App initialPage={init} resolveComponent={resolver} initialComponent={require('./LoadingScreen').default} />);

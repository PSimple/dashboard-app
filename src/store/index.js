import { createContext } from 'react';
import { decorate, observable } from 'mobx';

export class Widgets {
  /* eslint-disable */
  showWidgets = {
    /* eslint-disable */
    budget: true,
    operations: true,
    requests: true,
    progress: true,
  };

  setShowWidget = (name, value) => {
    this.showWidgets[name] = value;
    console.log(this.showWidgets);
  }
}

decorate(Widgets, {
  showWidgets: observable,
  check: observable,
});

export default createContext(new Widgets());

import Route from '@ember/routing/route';

export default class CartRoute extends Route {
  model() {
    return [{ price: 10 }, { price: 15 }];
  }
}

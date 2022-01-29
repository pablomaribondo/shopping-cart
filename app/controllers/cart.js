import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CartController extends Controller {
  @service('shopping-cart') cart;

  get subtotal() {
    return this.model.reduce(
      (accumulator, item) => accumulator + item.price,
      0
    );
  }

  get tax() {
    return 0.09 * this.subtotal;
  }

  get total() {
    return this.subtotal + this.tax;
  }

  @action
  updateItemCount(item, event) {
    const count = event.target.value;
    item.count = count >= 0 ? count : 0;
  }
}

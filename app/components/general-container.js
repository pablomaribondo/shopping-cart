import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class GeneralContainerComponent extends Component {
  @service shoppingCart;

  get itemCount() {
    return this.shoppingCart.itemList.reduce((total, item) => {
      total += item.count;
      return total;
    }, 0);
  }
}

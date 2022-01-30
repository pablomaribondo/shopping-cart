import Route from '@ember/routing/route';

export default class ItemRoute extends Route {
  async model(params) {
    const { item_id } = params;

    const response = await fetch('/api/items.json');
    const { data } = await response.json();

    return data.find(({ id }) => id === item_id);
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.color = model.colors[0].color;
  }
}

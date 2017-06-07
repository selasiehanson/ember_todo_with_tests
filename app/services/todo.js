import Ember from "ember";

export default Ember.Service.extend({
  items: null,
  init() {
    this._super(...arguments);
    this.set("items", []);
  },
  addTodo(newTodo) {
    this.get("items").insertAt(0, newTodo);
  },
  removeItem(todo) {
    this.get("items").removeObject(todo);
  },
  findAll() {
    return this.get("items");
  }
});

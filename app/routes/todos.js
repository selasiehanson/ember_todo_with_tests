import Ember from "ember";

const todos = [];

export default Ember.Route.extend({
  todos: Ember.inject.service("todo"),
  model() {
    return this.get("todos").findAll();
  },
  actions: {
    addTodo() {
      const text = this.controller.get("newTodo");
      const newTodo = { completed: false, text };
      this.get("todos").addTodo(newTodo);
      this.controller.set("newTodo", "");
    }
  }
});

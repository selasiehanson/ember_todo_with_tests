import Ember from "ember";

export default Ember.Controller.extend({
  completed: Ember.computed("model.@each.completed", function() {
    return this.get("model").filter(todo => todo.completed === true).length;
  }),
  remaining: Ember.computed("completed", function() {
    return this.get("model.length") - this.get("completed");
  })
});

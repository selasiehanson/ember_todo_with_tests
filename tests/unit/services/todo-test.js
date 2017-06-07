import { moduleFor, test } from "ember-qunit";

moduleFor(
  "service:todo",
  "Unit | Service | todo",
  {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  }
);

// Replace this with your real tests.
test("it exists", function(assert) {
  let service = this.subject();
  assert.ok(service);
});

test("it adds an item to the list of todos", function(assert) {
  const todos = this.subject();

  assert.equal(todos.findAll().length, 0);
  todos.addTodo({ text: "Go dancing", completed: false });
  todos.addTodo({ text: "Go fishing", completed: true });
  todos.addTodo({ text: "Go shopping", completed: false });
  assert.equal(todos.findAll().length, 3);
});

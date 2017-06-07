import { test } from "qunit";
import moduleForAcceptance
  from "ember-testing/tests/helpers/module-for-acceptance";

moduleForAcceptance("Acceptance | todos", {
  beforeEach: function() {},
  afterEach: function() {}
});

test("visiting /todos", function(assert) {
  visit("/todos");
  andThen(function() {
    assert.equal(currentURL(), "/todos");
  });
});

test("should show show number of completed todos", assert => {
  visit("/todos");

  andThen(() => {
    assert.equal(find(".summaries .completed").text(), "0");
    assert.equal(find(".summaries .total").text(), "0");
    assert.equal(find(".summaries .remaining").text(), "0");
  });
});

test("should change the number of completed and remaining todos", assert => {
  visit("/todos");
  fillIn("input.title", "Buy Milk");
  click("button.submit");
  click(".todos li:first input[type=checkbox]");
  andThen(() => {
    assert.equal(find(".summaries .completed").text(), "1");
    assert.equal(find(".summaries .remaining").text(), "0");
  });
});

test("should add new todo", function(assert) {
  visit("/todos");
  fillIn("input.title", "Buy milk");
  find("input.title").change();
  click("button.submit");
  andThen(() => {
    assert.equal(
      find("ul.todos li:first").find(".todo-item").text().trim(),
      "Buy milk"
    );
    assert.equal(find("input.title").val(), "");
  });
});

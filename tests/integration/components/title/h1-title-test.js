import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('title/h1-title', 'Integration | Component | title/h1 title', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{title/h1-title}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#title/h1-title}}
      template block text
    {{/title/h1-title}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

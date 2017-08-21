import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('buttons/button-success', 'Integration | Component | buttons/button success', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{buttons/button-success}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#buttons/button-success}}
      template block text
    {{/buttons/button-success}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

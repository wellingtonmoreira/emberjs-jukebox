import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('albums/form-album', 'Integration | Component | albums/form album', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{albums/form-album}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#albums/form-album}}
      template block text
    {{/albums/form-album}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('songs/form-song', 'Integration | Component | songs/form song', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{songs/form-song}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#songs/form-song}}
      template block text
    {{/songs/form-song}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

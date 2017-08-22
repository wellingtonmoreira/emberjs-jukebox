import AbstractForm from '../abstract-form';

export default AbstractForm.extend({
	model: {},
	actions: {
		submit: function() {
			let model = this.get('model');
			this.get('store')
				.createRecord('artist', model)
				.save();
			this._super();
		}
	}
});

import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  телефон: DS.attr('number')
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-kofeavtomat-клиент.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-kofeavtomat-клиент.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентE', 'i-i-s-kofeavtomat-клиент', {
    номер: attr('ID', { index: 0 }),
    телефон: attr('Телефон', { index: 1 })
  });

  modelClass.defineProjection('КлиентL', 'i-i-s-kofeavtomat-клиент', {
    номер: attr('ID', { index: 0 }),
    телефон: attr('Телефон', { index: 1 })
  });
};

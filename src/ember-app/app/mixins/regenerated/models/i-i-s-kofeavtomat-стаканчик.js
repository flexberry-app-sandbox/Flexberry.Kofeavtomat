import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  объем: DS.attr('number'),
  кофе: DS.belongsTo('i-i-s-kofeavtomat-кофе', { inverse: 'стаканчик', async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-kofeavtomat-стаканчик.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  объем: {
    descriptionKey: 'models.i-i-s-kofeavtomat-стаканчик.validations.объем.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  кофе: {
    descriptionKey: 'models.i-i-s-kofeavtomat-стаканчик.validations.кофе.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СтаканчикE', 'i-i-s-kofeavtomat-стаканчик', {
    номер: attr('Номер', { index: 0 }),
    объем: attr('Объем', { index: 1 })
  });
};

import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адреса: DS.attr('string'),
  номерДома: DS.attr('number'),
  адрес: DS.belongsTo('i-i-s-kofeavtomat-адрес', { inverse: null, async: false })
});

export let ValidationRules = {
  адреса: {
    descriptionKey: 'models.i-i-s-kofeavtomat-здание.validations.адреса.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерДома: {
    descriptionKey: 'models.i-i-s-kofeavtomat-здание.validations.номерДома.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  адрес: {
    descriptionKey: 'models.i-i-s-kofeavtomat-здание.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗданиеE', 'i-i-s-kofeavtomat-здание', {
    адреса: attr('Адрес', { index: 0 }),
    номерДома: attr('Номер дома', { index: 1 }),
    адрес: belongsTo('i-i-s-kofeavtomat-адрес', 'Город', {
      город: attr('Город', { index: 3, hidden: true })
    }, { index: 2 })
  });

  modelClass.defineProjection('ЗданиеL', 'i-i-s-kofeavtomat-здание', {
    адреса: attr('Адрес', { index: 0 }),
    номерДома: attr('Номер дома', { index: 1 }),
    адрес: belongsTo('i-i-s-kofeavtomat-адрес', 'Город', {
      город: attr('Город', { index: 2 })
    }, { index: -1, hidden: true })
  });
};

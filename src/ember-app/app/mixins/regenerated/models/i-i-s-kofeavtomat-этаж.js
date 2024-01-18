import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  этаж: DS.attr('number'),
  здание: DS.belongsTo('i-i-s-kofeavtomat-здание', { inverse: null, async: false })
});

export let ValidationRules = {
  этаж: {
    descriptionKey: 'models.i-i-s-kofeavtomat-этаж.validations.этаж.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  здание: {
    descriptionKey: 'models.i-i-s-kofeavtomat-этаж.validations.здание.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЭтажE', 'i-i-s-kofeavtomat-этаж', {
    этаж: attr('Этаж', { index: 0 }),
    здание: belongsTo('i-i-s-kofeavtomat-здание', 'Здание', {
      адреса: attr('Адрес', { index: 2, hidden: true }),
      номерДома: attr('Номер дома', { index: 3 })
    }, { index: 1, displayMemberPath: 'адрес' })
  });

  modelClass.defineProjection('ЭтажL', 'i-i-s-kofeavtomat-этаж', {
    этаж: attr('Этаж', { index: 0 }),
    здание: belongsTo('i-i-s-kofeavtomat-здание', 'Адреса', {
      адреса: attr('Адреса', { index: 1 }),
      номерДома: attr('Номер дома', { index: 2 })
    }, { index: -1, hidden: true })
  });
};

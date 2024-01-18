import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  этаж: DS.belongsTo('i-i-s-kofeavtomat-этаж', { inverse: null, async: false })
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-kofeavtomat-обслуживание.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  этаж: {
    descriptionKey: 'models.i-i-s-kofeavtomat-обслуживание.validations.этаж.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОбслуживаниеE', 'i-i-s-kofeavtomat-обслуживание', {
    наименование: attr('Наименование', { index: 0 }),
    этаж: belongsTo('i-i-s-kofeavtomat-этаж', 'Этаж', {
      этаж: attr('Этаж', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'этаж' })
  });

  modelClass.defineProjection('ОбслуживаниеL', 'i-i-s-kofeavtomat-обслуживание', {
    наименование: attr('Наименование', { index: 0 }),
    этаж: belongsTo('i-i-s-kofeavtomat-этаж', 'Этаж', {
      этаж: attr('Этаж', { index: 1 })
    }, { index: -1, hidden: true })
  });
};

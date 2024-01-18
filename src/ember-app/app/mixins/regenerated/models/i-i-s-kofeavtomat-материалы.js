import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  кофе: DS.belongsTo('i-i-s-kofeavtomat-кофе', { inverse: 'материалы', async: false })
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-kofeavtomat-материалы.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кофе: {
    descriptionKey: 'models.i-i-s-kofeavtomat-материалы.validations.кофе.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МатериалыE', 'i-i-s-kofeavtomat-материалы', {
    наименование: attr('Наименование', { index: 0 })
  });
};

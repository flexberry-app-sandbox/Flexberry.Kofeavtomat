import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  сумма: DS.attr('decimal'),
  заказ: DS.belongsTo('i-i-s-kofeavtomat-заказ', { inverse: null, async: false }),
  входит: DS.belongsTo('i-i-s-kofeavtomat-кофе-машина', { inverse: 'составЗаказа', async: false })
});

export let ValidationRules = {
  сумма: {
    descriptionKey: 'models.i-i-s-kofeavtomat-состав-заказа.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-kofeavtomat-состав-заказа.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  входит: {
    descriptionKey: 'models.i-i-s-kofeavtomat-состав-заказа.validations.входит.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СоставЗаказаE', 'i-i-s-kofeavtomat-состав-заказа', {
    сумма: attr('Сумма', { index: 0 })
  });
};

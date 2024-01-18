import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кофе: DS.belongsTo('i-i-s-kofeavtomat-кофе', { inverse: null, async: false }),
  заказ: DS.belongsTo('i-i-s-kofeavtomat-заказ', { inverse: 'состав', async: false })
});

export let ValidationRules = {
  кофе: {
    descriptionKey: 'models.i-i-s-kofeavtomat-состав.validations.кофе.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-kofeavtomat-состав.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СоставE', 'i-i-s-kofeavtomat-состав', {
    кофе: belongsTo('i-i-s-kofeavtomat-кофе', 'Кофе', {
      наименование: attr('Наименование', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'наименование' })
  });
};

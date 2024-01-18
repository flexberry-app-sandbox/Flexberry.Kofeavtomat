import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  наименование: DS.attr('string'),
  объем: DS.attr('i-i-s-kofeavtomat-объемы'),
  кофе: DS.belongsTo('i-i-s-kofeavtomat-кофе', { inverse: 'допы', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-kofeavtomat-допы.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-kofeavtomat-допы.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  объем: {
    descriptionKey: 'models.i-i-s-kofeavtomat-допы.validations.объем.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кофе: {
    descriptionKey: 'models.i-i-s-kofeavtomat-допы.validations.кофе.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДопыE', 'i-i-s-kofeavtomat-допы', {
    наименование: attr('Наименование', { index: 0 }),
    количество: attr('Количество', { index: 1 }),
    объем: attr('Объем', { index: 2 })
  });
};

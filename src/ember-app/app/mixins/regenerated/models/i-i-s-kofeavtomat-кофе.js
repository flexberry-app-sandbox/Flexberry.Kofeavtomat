import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  цена: DS.attr('decimal'),
  материалы: DS.hasMany('i-i-s-kofeavtomat-материалы', { inverse: 'кофе', async: false }),
  допы: DS.hasMany('i-i-s-kofeavtomat-допы', { inverse: 'кофе', async: false }),
  стаканчик: DS.hasMany('i-i-s-kofeavtomat-стаканчик', { inverse: 'кофе', async: false })
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-kofeavtomat-кофе.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-kofeavtomat-кофе.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  материалы: {
    descriptionKey: 'models.i-i-s-kofeavtomat-кофе.validations.материалы.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  допы: {
    descriptionKey: 'models.i-i-s-kofeavtomat-кофе.validations.допы.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  стаканчик: {
    descriptionKey: 'models.i-i-s-kofeavtomat-кофе.validations.стаканчик.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КофеE', 'i-i-s-kofeavtomat-кофе', {
    наименование: attr('Наименование', { index: 0 }),
    цена: attr('Цена', { index: 1 }),
    материалы: hasMany('i-i-s-kofeavtomat-материалы', 'Материалы', {
      наименование: attr('Наименование', { index: 0 })
    }),
    допы: hasMany('i-i-s-kofeavtomat-допы', 'Допы', {
      наименование: attr('Наименование', { index: 0 }),
      количество: attr('Количество', { index: 1 }),
      объем: attr('Объем', { index: 2 })
    }),
    стаканчик: hasMany('i-i-s-kofeavtomat-стаканчик', 'Стаканчик', {
      номер: attr('Номер', { index: 0 }),
      объем: attr('Объем', { index: 1 })
    })
  });

  modelClass.defineProjection('КофеL', 'i-i-s-kofeavtomat-кофе', {
    наименование: attr('Наименование', { index: 0 }),
    цена: attr('Цена', { index: 1 })
  });
};

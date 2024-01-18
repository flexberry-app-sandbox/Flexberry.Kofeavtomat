import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  id: DS.attr('number'),
  состояние: DS.attr('i-i-s-kofeavtomat-состояния'),
  обслуживание: DS.belongsTo('i-i-s-kofeavtomat-обслуживание', { inverse: null, async: false }),
  этаж: DS.belongsTo('i-i-s-kofeavtomat-этаж', { inverse: null, async: false }),
  составЗаказа: DS.hasMany('i-i-s-kofeavtomat-состав-заказа', { inverse: 'кофеМашина', async: false })
});

export let ValidationRules = {
  id: {
    descriptionKey: 'models.i-i-s-kofeavtomat-кофе-машина.validations.id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  состояние: {
    descriptionKey: 'models.i-i-s-kofeavtomat-кофе-машина.validations.состояние.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  обслуживание: {
    descriptionKey: 'models.i-i-s-kofeavtomat-кофе-машина.validations.обслуживание.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  этаж: {
    descriptionKey: 'models.i-i-s-kofeavtomat-кофе-машина.validations.этаж.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  составЗаказа: {
    descriptionKey: 'models.i-i-s-kofeavtomat-кофе-машина.validations.составЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КофеМашинаE', 'i-i-s-kofeavtomat-кофе-машина', {
    id: attr('Id', { index: 0 }),
    состояние: attr('Состояние', { index: 1 })
  });

  modelClass.defineProjection('КофеМашинаL', 'i-i-s-kofeavtomat-кофе-машина', {
    id: attr('Id', { index: 0 }),
    состояние: attr('Состояние', { index: 1 }),
    этаж: belongsTo('i-i-s-kofeavtomat-этаж', 'Город', {
      здание: belongsTo('i-i-s-kofeavtomat-здание', '', {
        адрес: belongsTo('i-i-s-kofeavtomat-адрес', '', {
          город: attr('Город', { index: 2 })
        }, { index: -1, hidden: true }),
        адреса: attr('Адрес', { index: 3 }),
        номерДома: attr('НомерДома', { index: 4 })
      }, { index: -1, hidden: true }),
      этаж: attr('Этаж', { index: 5 })
    }, { index: -1, hidden: true }),
    обслуживание: belongsTo('i-i-s-kofeavtomat-обслуживание', 'Наименование', {
      наименование: attr('Наименование', { index: 6 })
    }, { index: -1, hidden: true })
  });
};

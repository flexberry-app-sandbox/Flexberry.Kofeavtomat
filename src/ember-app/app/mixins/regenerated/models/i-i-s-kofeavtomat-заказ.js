import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  клиент: DS.belongsTo('i-i-s-kofeavtomat-клиент', { inverse: null, async: false }),
  оплата: DS.belongsTo('i-i-s-kofeavtomat-оплата', { inverse: null, async: false }),
  состав: DS.hasMany('i-i-s-kofeavtomat-состав', { inverse: 'заказ', async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-kofeavtomat-заказ.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-kofeavtomat-заказ.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  оплата: {
    descriptionKey: 'models.i-i-s-kofeavtomat-заказ.validations.оплата.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  состав: {
    descriptionKey: 'models.i-i-s-kofeavtomat-заказ.validations.состав.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-kofeavtomat-заказ', {
    номер: attr('ID', { index: 0 }),
    оплата: belongsTo('i-i-s-kofeavtomat-оплата', 'Оплата', {
      типОплаты: attr('Тип оплаты', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'типОплаты' }),
    клиент: belongsTo('i-i-s-kofeavtomat-клиент', 'Клиент', {
      номер: attr('ID Клиента', { index: 4 })
    }, { index: 3, displayMemberPath: 'id' }),
    состав: hasMany('i-i-s-kofeavtomat-состав', 'Состав', {
      кофе: belongsTo('i-i-s-kofeavtomat-кофе', 'Кофе', {
        наименование: attr('Наименование', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-kofeavtomat-заказ', {
    номер: attr('ID', { index: 0 }),
    оплата: belongsTo('i-i-s-kofeavtomat-оплата', 'Тип оплаты', {
      типОплаты: attr('Тип оплаты', { index: 1 })
    }, { index: -1, hidden: true }),
    клиент: belongsTo('i-i-s-kofeavtomat-клиент', 'ID клиента', {
      номер: attr('ID клиента', { index: 2 })
    }, { index: -1, hidden: true })
  });
};

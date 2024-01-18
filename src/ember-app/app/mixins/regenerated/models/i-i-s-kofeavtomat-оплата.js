import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  типОплаты: DS.attr('i-i-s-kofeavtomat-оплаты')
});

export let ValidationRules = {
  типОплаты: {
    descriptionKey: 'models.i-i-s-kofeavtomat-оплата.validations.типОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОплатаE', 'i-i-s-kofeavtomat-оплата', {
    типОплаты: attr('Тип оплаты', { index: 0 })
  });

  modelClass.defineProjection('ОплатаL', 'i-i-s-kofeavtomat-оплата', {
    типОплаты: attr('Тип оплаты', { index: 0 })
  });
};

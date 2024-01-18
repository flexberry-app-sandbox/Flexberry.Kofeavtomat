import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  город: DS.attr('string')
});

export let ValidationRules = {
  город: {
    descriptionKey: 'models.i-i-s-kofeavtomat-адрес.validations.город.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АдресE', 'i-i-s-kofeavtomat-адрес', {
    город: attr('Город', { index: 0 })
  });

  modelClass.defineProjection('АдресL', 'i-i-s-kofeavtomat-адрес', {
    город: attr('Город', { index: 0 })
  });
};

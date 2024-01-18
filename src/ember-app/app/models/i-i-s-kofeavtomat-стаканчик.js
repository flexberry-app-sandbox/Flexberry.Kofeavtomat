import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СтаканчикMixin
} from '../mixins/regenerated/models/i-i-s-kofeavtomat-стаканчик';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СтаканчикMixin, Validations, {
});

defineProjections(Model);

export default Model;

import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КофеМашинаMixin
} from '../mixins/regenerated/models/i-i-s-kofeavtomat-кофе-машина';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КофеМашинаMixin, Validations, {
});

defineProjections(Model);

export default Model;

import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДопыMixin
} from '../mixins/regenerated/models/i-i-s-kofeavtomat-допы';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДопыMixin, Validations, {
});

defineProjections(Model);

export default Model;

import {
  defineNamespace,
  defineProjections,
  Model as СтаканчикMixin
} from '../mixins/regenerated/models/i-i-s-kofeavtomat-стаканчик';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СтаканчикMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

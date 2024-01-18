import {
  defineNamespace,
  defineProjections,
  Model as КофеMixin
} from '../mixins/regenerated/models/i-i-s-kofeavtomat-кофе';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КофеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

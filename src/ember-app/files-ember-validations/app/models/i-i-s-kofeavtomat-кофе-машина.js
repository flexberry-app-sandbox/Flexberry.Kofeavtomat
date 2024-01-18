import {
  defineNamespace,
  defineProjections,
  Model as КофеМашинаMixin
} from '../mixins/regenerated/models/i-i-s-kofeavtomat-кофе-машина';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КофеМашинаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

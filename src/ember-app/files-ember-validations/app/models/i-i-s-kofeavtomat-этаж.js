import {
  defineNamespace,
  defineProjections,
  Model as ЭтажMixin
} from '../mixins/regenerated/models/i-i-s-kofeavtomat-этаж';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЭтажMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

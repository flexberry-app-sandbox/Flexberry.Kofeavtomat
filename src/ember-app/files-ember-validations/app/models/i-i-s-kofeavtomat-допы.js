import {
  defineNamespace,
  defineProjections,
  Model as ДопыMixin
} from '../mixins/regenerated/models/i-i-s-kofeavtomat-допы';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДопыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

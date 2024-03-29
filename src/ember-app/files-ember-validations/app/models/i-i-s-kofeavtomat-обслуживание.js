import {
  defineNamespace,
  defineProjections,
  Model as ОбслуживаниеMixin
} from '../mixins/regenerated/models/i-i-s-kofeavtomat-обслуживание';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОбслуживаниеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

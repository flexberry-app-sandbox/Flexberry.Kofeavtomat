import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ОбъемыEnum from '../enums/i-i-s-kofeavtomat-объемы';

export default FlexberryEnum.extend({
  enum: ОбъемыEnum,
  sourceType: 'IIS.Kofeavtomat.Объемы'
});

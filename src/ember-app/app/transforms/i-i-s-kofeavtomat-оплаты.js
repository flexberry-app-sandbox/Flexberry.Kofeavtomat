import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ОплатыEnum from '../enums/i-i-s-kofeavtomat-оплаты';

export default FlexberryEnum.extend({
  enum: ОплатыEnum,
  sourceType: 'IIS.Kofeavtomat.Оплаты'
});

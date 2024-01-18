import { Serializer as СтаканчикSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kofeavtomat-стаканчик';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СтаканчикSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

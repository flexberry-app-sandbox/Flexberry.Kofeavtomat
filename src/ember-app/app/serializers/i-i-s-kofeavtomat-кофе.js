import { Serializer as КофеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kofeavtomat-кофе';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КофеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

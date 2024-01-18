import { Serializer as КофеМашинаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kofeavtomat-кофе-машина';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КофеМашинаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

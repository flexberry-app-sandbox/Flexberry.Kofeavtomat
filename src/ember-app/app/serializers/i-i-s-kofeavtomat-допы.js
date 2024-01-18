import { Serializer as ДопыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kofeavtomat-допы';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДопыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kofeavtomat-этаж', 'Unit | Serializer | i-i-s-kofeavtomat-этаж', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kofeavtomat-этаж',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kofeavtomat-объемы',
    'transform:i-i-s-kofeavtomat-оплаты',
    'transform:i-i-s-kofeavtomat-состояния',

    'model:i-i-s-kofeavtomat-адрес',
    'model:i-i-s-kofeavtomat-допы',
    'model:i-i-s-kofeavtomat-заказ',
    'model:i-i-s-kofeavtomat-здание',
    'model:i-i-s-kofeavtomat-клиент',
    'model:i-i-s-kofeavtomat-кофе-машина',
    'model:i-i-s-kofeavtomat-кофе',
    'model:i-i-s-kofeavtomat-материалы',
    'model:i-i-s-kofeavtomat-обслуживание',
    'model:i-i-s-kofeavtomat-оплата',
    'model:i-i-s-kofeavtomat-состав-заказа',
    'model:i-i-s-kofeavtomat-состав',
    'model:i-i-s-kofeavtomat-стаканчик',
    'model:i-i-s-kofeavtomat-этаж',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});

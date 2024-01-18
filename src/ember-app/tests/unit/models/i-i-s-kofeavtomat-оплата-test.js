import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kofeavtomat-оплата', 'Unit | Model | i-i-s-kofeavtomat-оплата', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});

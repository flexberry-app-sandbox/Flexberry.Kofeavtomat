'use strict';

define('ember-app/tests/acceptance/flexberry/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s kofeavtomat адрес l');

  (0, _qunit.test)('testing i-i-s-kofeavtomat-адрес-l', function (assert) {
    var _this = this;

    visit('/i-i-s-kofeavtomat-адрес-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s kofeavtomat заказ l');

  (0, _qunit.test)('testing i-i-s-kofeavtomat-заказ-l', function (assert) {
    var _this = this;

    visit('/i-i-s-kofeavtomat-заказ-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s kofeavtomat здание l');

  (0, _qunit.test)('testing i-i-s-kofeavtomat-здание-l', function (assert) {
    var _this = this;

    visit('/i-i-s-kofeavtomat-здание-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s kofeavtomat клиент l');

  (0, _qunit.test)('testing i-i-s-kofeavtomat-клиент-l', function (assert) {
    var _this = this;

    visit('/i-i-s-kofeavtomat-клиент-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s kofeavtomat кофе l');

  (0, _qunit.test)('testing i-i-s-kofeavtomat-кофе-l', function (assert) {
    var _this = this;

    visit('/i-i-s-kofeavtomat-кофе-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s kofeavtomat кофе машина l');

  (0, _qunit.test)('testing i-i-s-kofeavtomat-кофе-машина-l', function (assert) {
    var _this = this;

    visit('/i-i-s-kofeavtomat-кофе-машина-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s kofeavtomat обслуживание l');

  (0, _qunit.test)('testing i-i-s-kofeavtomat-обслуживание-l', function (assert) {
    var _this = this;

    visit('/i-i-s-kofeavtomat-обслуживание-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s kofeavtomat оплата l');

  (0, _qunit.test)('testing i-i-s-kofeavtomat-оплата-l', function (assert) {
    var _this = this;

    visit('/i-i-s-kofeavtomat-оплата-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s kofeavtomat этаж l');

  (0, _qunit.test)('testing i-i-s-kofeavtomat-этаж-l', function (assert) {
    var _this = this;

    visit('/i-i-s-kofeavtomat-этаж-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });

  QUnit.test('enums/i-i-s-kofeavtomat-\u043E\u0431\u044A\u0435\u043C\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'enums/i-i-s-kofeavtomat-\u043E\u0431\u044A\u0435\u043C\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('enums/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'enums/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('enums/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'enums/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-kofeavtomat-\u0434\u043E\u043F\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-kofeavtomat-\u0434\u043E\u043F\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-kofeavtomat-\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-kofeavtomat-\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432-\u0437\u0430\u043A\u0430\u0437\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432-\u0437\u0430\u043A\u0430\u0437\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-kofeavtomat-\u0441\u0442\u0430\u043A\u0430\u043D\u0447\u0438\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-kofeavtomat-\u0441\u0442\u0430\u043A\u0430\u043D\u0447\u0438\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/translations.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-kofeavtomat-\u0434\u043E\u043F\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-kofeavtomat-\u0434\u043E\u043F\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-kofeavtomat-\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-kofeavtomat-\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432-\u0437\u0430\u043A\u0430\u0437\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432-\u0437\u0430\u043A\u0430\u0437\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-kofeavtomat-\u0441\u0442\u0430\u043A\u0430\u043D\u0447\u0438\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-kofeavtomat-\u0441\u0442\u0430\u043A\u0430\u043D\u0447\u0438\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/translations.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-kofeavtomat-\u0434\u043E\u043F\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-kofeavtomat-\u0434\u043E\u043F\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-kofeavtomat-\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-kofeavtomat-\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432-\u0437\u0430\u043A\u0430\u0437\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432-\u0437\u0430\u043A\u0430\u0437\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-kofeavtomat-\u0441\u0442\u0430\u043A\u0430\u043D\u0447\u0438\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-kofeavtomat-\u0441\u0442\u0430\u043A\u0430\u043D\u0447\u0438\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kofeavtomat-\u0434\u043E\u043F\u044B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kofeavtomat-\u0434\u043E\u043F\u044B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kofeavtomat-\u0434\u043E\u043F\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kofeavtomat-\u0434\u043E\u043F\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kofeavtomat-\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kofeavtomat-\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kofeavtomat-\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kofeavtomat-\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432-\u0437\u0430\u043A\u0430\u0437\u0430-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432-\u0437\u0430\u043A\u0430\u0437\u0430-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432-\u0437\u0430\u043A\u0430\u0437\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432-\u0437\u0430\u043A\u0430\u0437\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kofeavtomat-\u0441\u0442\u0430\u043A\u0430\u043D\u0447\u0438\u043A-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kofeavtomat-\u0441\u0442\u0430\u043A\u0430\u043D\u0447\u0438\u043A-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kofeavtomat-\u0441\u0442\u0430\u043A\u0430\u043D\u0447\u0438\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kofeavtomat-\u0441\u0442\u0430\u043A\u0430\u043D\u0447\u0438\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-kofeavtomat-\u0434\u043E\u043F\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-kofeavtomat-\u0434\u043E\u043F\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-kofeavtomat-\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-kofeavtomat-\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432-\u0437\u0430\u043A\u0430\u0437\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432-\u0437\u0430\u043A\u0430\u0437\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-kofeavtomat-\u0441\u0442\u0430\u043A\u0430\u043D\u0447\u0438\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-kofeavtomat-\u0441\u0442\u0430\u043A\u0430\u043D\u0447\u0438\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-l.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kofeavtomat-\u0434\u043E\u043F\u044B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kofeavtomat-\u0434\u043E\u043F\u044B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kofeavtomat-\u0434\u043E\u043F\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kofeavtomat-\u0434\u043E\u043F\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kofeavtomat-\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kofeavtomat-\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kofeavtomat-\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kofeavtomat-\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432-\u0437\u0430\u043A\u0430\u0437\u0430-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432-\u0437\u0430\u043A\u0430\u0437\u0430-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432-\u0437\u0430\u043A\u0430\u0437\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432-\u0437\u0430\u043A\u0430\u0437\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kofeavtomat-\u0441\u0442\u0430\u043A\u0430\u043D\u0447\u0438\u043A-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kofeavtomat-\u0441\u0442\u0430\u043A\u0430\u043D\u0447\u0438\u043A-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kofeavtomat-\u0441\u0442\u0430\u043A\u0430\u043D\u0447\u0438\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kofeavtomat-\u0441\u0442\u0430\u043A\u0430\u043D\u0447\u0438\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436.js should pass ESLint\n\n');
  });

  QUnit.test('services/offline-globals.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/offline-globals.js should pass ESLint\n\n');
  });

  QUnit.test('services/store.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/store.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/i-i-s-kofeavtomat-\u043E\u0431\u044A\u0435\u043C\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/i-i-s-kofeavtomat-\u043E\u0431\u044A\u0435\u043C\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('ember-app/tests/helpers/ember-i18n/test-helpers', ['ember-i18n/test-support/-private/t', 'ember-i18n/test-support/-private/assert-translation'], function (_t2, _assertTranslation2) {
  'use strict';

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  Ember.Test.registerHelper('t', function (app, key, interpolations) {
    return (0, _t2.default)(app.__container__, key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  Ember.Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = (0, _t2.default)(app.__container__, key, interpolations);

    (0, _assertTranslation2.default)(element, key, text);
  });
});
define('ember-app/tests/helpers/ember-prop-types', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createComponent = createComponent;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var VERSION = Ember.VERSION;


  /**
   * Determine if we are on a version of Ember that includes Glimmer 2
   * @returns {Boolean} whether or not we are on Glimmer 2
   */
  function isGlimmer2() {
    var _VERSION$split = VERSION.split('.'),
        _VERSION$split2 = _slicedToArray(_VERSION$split, 2),
        major = _VERSION$split2[0],
        minor = _VERSION$split2[1];

    return parseInt(major) > 1 && parseInt(minor) > 9;
  }

  /**
   * Programitcally instantiate instance of component class
   * @param {Ember.Component} component - component class to instantiate
   * @returns {Ember.Component} instance of component class
   */
  function createComponent(component) {
    if (isGlimmer2()) {
      return component.create({ renderer: {} });
    }

    return component.create();
  }
});
define('ember-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-app/tests/helpers/start-app', 'ember-app/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('ember-app/tests/helpers/start-app', ['exports', 'ember-app/app', 'ember-app/config/environment', 'ember-flexberry/test-support'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('ember-app/tests/test-helper', ['ember-app/app', 'ember-app/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('ember-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/flexberry/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-kofeavtomat-\u0434\u043E\u043F\u044B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-kofeavtomat-\u0434\u043E\u043F\u044B-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-kofeavtomat-\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-kofeavtomat-\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432-\u0437\u0430\u043A\u0430\u0437\u0430-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432-\u0437\u0430\u043A\u0430\u0437\u0430-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-kofeavtomat-\u0441\u0442\u0430\u043A\u0430\u043D\u0447\u0438\u043A-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-kofeavtomat-\u0441\u0442\u0430\u043A\u0430\u043D\u0447\u0438\u043A-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-kofeavtomat-\u0434\u043E\u043F\u044B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-kofeavtomat-\u0434\u043E\u043F\u044B-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-kofeavtomat-\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-kofeavtomat-\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432-\u0437\u0430\u043A\u0430\u0437\u0430-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432-\u0437\u0430\u043A\u0430\u0437\u0430-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-kofeavtomat-\u0441\u0442\u0430\u043A\u0430\u043D\u0447\u0438\u043A-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-kofeavtomat-\u0441\u0442\u0430\u043A\u0430\u043D\u0447\u0438\u043A-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-test.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/unit/controllers/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-kofeavtomat-адрес-e', 'Unit | Controller | i-i-s-kofeavtomat-адрес-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-kofeavtomat-адрес-l', 'Unit | Controller | i-i-s-kofeavtomat-адрес-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-kofeavtomat-заказ-e', 'Unit | Controller | i-i-s-kofeavtomat-заказ-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-kofeavtomat-заказ-l', 'Unit | Controller | i-i-s-kofeavtomat-заказ-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-kofeavtomat-здание-e', 'Unit | Controller | i-i-s-kofeavtomat-здание-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-kofeavtomat-здание-l', 'Unit | Controller | i-i-s-kofeavtomat-здание-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-kofeavtomat-клиент-e', 'Unit | Controller | i-i-s-kofeavtomat-клиент-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-kofeavtomat-клиент-l', 'Unit | Controller | i-i-s-kofeavtomat-клиент-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-kofeavtomat-кофе-e', 'Unit | Controller | i-i-s-kofeavtomat-кофе-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-kofeavtomat-кофе-l', 'Unit | Controller | i-i-s-kofeavtomat-кофе-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-kofeavtomat-кофе-машина-e', 'Unit | Controller | i-i-s-kofeavtomat-кофе-машина-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-kofeavtomat-кофе-машина-l', 'Unit | Controller | i-i-s-kofeavtomat-кофе-машина-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-kofeavtomat-обслуживание-e', 'Unit | Controller | i-i-s-kofeavtomat-обслуживание-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-kofeavtomat-обслуживание-l', 'Unit | Controller | i-i-s-kofeavtomat-обслуживание-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-kofeavtomat-оплата-e', 'Unit | Controller | i-i-s-kofeavtomat-оплата-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-kofeavtomat-оплата-l', 'Unit | Controller | i-i-s-kofeavtomat-оплата-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-kofeavtomat-этаж-e', 'Unit | Controller | i-i-s-kofeavtomat-этаж-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-kofeavtomat-этаж-l', 'Unit | Controller | i-i-s-kofeavtomat-этаж-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/models/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kofeavtomat-адрес', 'Unit | Model | i-i-s-kofeavtomat-адрес', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-kofeavtomat-адрес', 'model:i-i-s-kofeavtomat-допы', 'model:i-i-s-kofeavtomat-заказ', 'model:i-i-s-kofeavtomat-здание', 'model:i-i-s-kofeavtomat-клиент', 'model:i-i-s-kofeavtomat-кофе-машина', 'model:i-i-s-kofeavtomat-кофе', 'model:i-i-s-kofeavtomat-материалы', 'model:i-i-s-kofeavtomat-обслуживание', 'model:i-i-s-kofeavtomat-оплата', 'model:i-i-s-kofeavtomat-состав-заказа', 'model:i-i-s-kofeavtomat-состав', 'model:i-i-s-kofeavtomat-стаканчик', 'model:i-i-s-kofeavtomat-этаж', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-kofeavtomat-\u0434\u043E\u043F\u044B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kofeavtomat-допы', 'Unit | Model | i-i-s-kofeavtomat-допы', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-kofeavtomat-адрес', 'model:i-i-s-kofeavtomat-допы', 'model:i-i-s-kofeavtomat-заказ', 'model:i-i-s-kofeavtomat-здание', 'model:i-i-s-kofeavtomat-клиент', 'model:i-i-s-kofeavtomat-кофе-машина', 'model:i-i-s-kofeavtomat-кофе', 'model:i-i-s-kofeavtomat-материалы', 'model:i-i-s-kofeavtomat-обслуживание', 'model:i-i-s-kofeavtomat-оплата', 'model:i-i-s-kofeavtomat-состав-заказа', 'model:i-i-s-kofeavtomat-состав', 'model:i-i-s-kofeavtomat-стаканчик', 'model:i-i-s-kofeavtomat-этаж', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kofeavtomat-заказ', 'Unit | Model | i-i-s-kofeavtomat-заказ', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-kofeavtomat-адрес', 'model:i-i-s-kofeavtomat-допы', 'model:i-i-s-kofeavtomat-заказ', 'model:i-i-s-kofeavtomat-здание', 'model:i-i-s-kofeavtomat-клиент', 'model:i-i-s-kofeavtomat-кофе-машина', 'model:i-i-s-kofeavtomat-кофе', 'model:i-i-s-kofeavtomat-материалы', 'model:i-i-s-kofeavtomat-обслуживание', 'model:i-i-s-kofeavtomat-оплата', 'model:i-i-s-kofeavtomat-состав-заказа', 'model:i-i-s-kofeavtomat-состав', 'model:i-i-s-kofeavtomat-стаканчик', 'model:i-i-s-kofeavtomat-этаж', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kofeavtomat-здание', 'Unit | Model | i-i-s-kofeavtomat-здание', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-kofeavtomat-адрес', 'model:i-i-s-kofeavtomat-допы', 'model:i-i-s-kofeavtomat-заказ', 'model:i-i-s-kofeavtomat-здание', 'model:i-i-s-kofeavtomat-клиент', 'model:i-i-s-kofeavtomat-кофе-машина', 'model:i-i-s-kofeavtomat-кофе', 'model:i-i-s-kofeavtomat-материалы', 'model:i-i-s-kofeavtomat-обслуживание', 'model:i-i-s-kofeavtomat-оплата', 'model:i-i-s-kofeavtomat-состав-заказа', 'model:i-i-s-kofeavtomat-состав', 'model:i-i-s-kofeavtomat-стаканчик', 'model:i-i-s-kofeavtomat-этаж', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kofeavtomat-клиент', 'Unit | Model | i-i-s-kofeavtomat-клиент', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-kofeavtomat-адрес', 'model:i-i-s-kofeavtomat-допы', 'model:i-i-s-kofeavtomat-заказ', 'model:i-i-s-kofeavtomat-здание', 'model:i-i-s-kofeavtomat-клиент', 'model:i-i-s-kofeavtomat-кофе-машина', 'model:i-i-s-kofeavtomat-кофе', 'model:i-i-s-kofeavtomat-материалы', 'model:i-i-s-kofeavtomat-обслуживание', 'model:i-i-s-kofeavtomat-оплата', 'model:i-i-s-kofeavtomat-состав-заказа', 'model:i-i-s-kofeavtomat-состав', 'model:i-i-s-kofeavtomat-стаканчик', 'model:i-i-s-kofeavtomat-этаж', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kofeavtomat-кофе', 'Unit | Model | i-i-s-kofeavtomat-кофе', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-kofeavtomat-адрес', 'model:i-i-s-kofeavtomat-допы', 'model:i-i-s-kofeavtomat-заказ', 'model:i-i-s-kofeavtomat-здание', 'model:i-i-s-kofeavtomat-клиент', 'model:i-i-s-kofeavtomat-кофе-машина', 'model:i-i-s-kofeavtomat-кофе', 'model:i-i-s-kofeavtomat-материалы', 'model:i-i-s-kofeavtomat-обслуживание', 'model:i-i-s-kofeavtomat-оплата', 'model:i-i-s-kofeavtomat-состав-заказа', 'model:i-i-s-kofeavtomat-состав', 'model:i-i-s-kofeavtomat-стаканчик', 'model:i-i-s-kofeavtomat-этаж', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kofeavtomat-кофе-машина', 'Unit | Model | i-i-s-kofeavtomat-кофе-машина', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-kofeavtomat-адрес', 'model:i-i-s-kofeavtomat-допы', 'model:i-i-s-kofeavtomat-заказ', 'model:i-i-s-kofeavtomat-здание', 'model:i-i-s-kofeavtomat-клиент', 'model:i-i-s-kofeavtomat-кофе-машина', 'model:i-i-s-kofeavtomat-кофе', 'model:i-i-s-kofeavtomat-материалы', 'model:i-i-s-kofeavtomat-обслуживание', 'model:i-i-s-kofeavtomat-оплата', 'model:i-i-s-kofeavtomat-состав-заказа', 'model:i-i-s-kofeavtomat-состав', 'model:i-i-s-kofeavtomat-стаканчик', 'model:i-i-s-kofeavtomat-этаж', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-kofeavtomat-\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kofeavtomat-материалы', 'Unit | Model | i-i-s-kofeavtomat-материалы', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-kofeavtomat-адрес', 'model:i-i-s-kofeavtomat-допы', 'model:i-i-s-kofeavtomat-заказ', 'model:i-i-s-kofeavtomat-здание', 'model:i-i-s-kofeavtomat-клиент', 'model:i-i-s-kofeavtomat-кофе-машина', 'model:i-i-s-kofeavtomat-кофе', 'model:i-i-s-kofeavtomat-материалы', 'model:i-i-s-kofeavtomat-обслуживание', 'model:i-i-s-kofeavtomat-оплата', 'model:i-i-s-kofeavtomat-состав-заказа', 'model:i-i-s-kofeavtomat-состав', 'model:i-i-s-kofeavtomat-стаканчик', 'model:i-i-s-kofeavtomat-этаж', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kofeavtomat-обслуживание', 'Unit | Model | i-i-s-kofeavtomat-обслуживание', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-kofeavtomat-адрес', 'model:i-i-s-kofeavtomat-допы', 'model:i-i-s-kofeavtomat-заказ', 'model:i-i-s-kofeavtomat-здание', 'model:i-i-s-kofeavtomat-клиент', 'model:i-i-s-kofeavtomat-кофе-машина', 'model:i-i-s-kofeavtomat-кофе', 'model:i-i-s-kofeavtomat-материалы', 'model:i-i-s-kofeavtomat-обслуживание', 'model:i-i-s-kofeavtomat-оплата', 'model:i-i-s-kofeavtomat-состав-заказа', 'model:i-i-s-kofeavtomat-состав', 'model:i-i-s-kofeavtomat-стаканчик', 'model:i-i-s-kofeavtomat-этаж', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kofeavtomat-оплата', 'Unit | Model | i-i-s-kofeavtomat-оплата', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-kofeavtomat-адрес', 'model:i-i-s-kofeavtomat-допы', 'model:i-i-s-kofeavtomat-заказ', 'model:i-i-s-kofeavtomat-здание', 'model:i-i-s-kofeavtomat-клиент', 'model:i-i-s-kofeavtomat-кофе-машина', 'model:i-i-s-kofeavtomat-кофе', 'model:i-i-s-kofeavtomat-материалы', 'model:i-i-s-kofeavtomat-обслуживание', 'model:i-i-s-kofeavtomat-оплата', 'model:i-i-s-kofeavtomat-состав-заказа', 'model:i-i-s-kofeavtomat-состав', 'model:i-i-s-kofeavtomat-стаканчик', 'model:i-i-s-kofeavtomat-этаж', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kofeavtomat-состав', 'Unit | Model | i-i-s-kofeavtomat-состав', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-kofeavtomat-адрес', 'model:i-i-s-kofeavtomat-допы', 'model:i-i-s-kofeavtomat-заказ', 'model:i-i-s-kofeavtomat-здание', 'model:i-i-s-kofeavtomat-клиент', 'model:i-i-s-kofeavtomat-кофе-машина', 'model:i-i-s-kofeavtomat-кофе', 'model:i-i-s-kofeavtomat-материалы', 'model:i-i-s-kofeavtomat-обслуживание', 'model:i-i-s-kofeavtomat-оплата', 'model:i-i-s-kofeavtomat-состав-заказа', 'model:i-i-s-kofeavtomat-состав', 'model:i-i-s-kofeavtomat-стаканчик', 'model:i-i-s-kofeavtomat-этаж', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432-\u0437\u0430\u043A\u0430\u0437\u0430-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kofeavtomat-состав-заказа', 'Unit | Model | i-i-s-kofeavtomat-состав-заказа', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-kofeavtomat-адрес', 'model:i-i-s-kofeavtomat-допы', 'model:i-i-s-kofeavtomat-заказ', 'model:i-i-s-kofeavtomat-здание', 'model:i-i-s-kofeavtomat-клиент', 'model:i-i-s-kofeavtomat-кофе-машина', 'model:i-i-s-kofeavtomat-кофе', 'model:i-i-s-kofeavtomat-материалы', 'model:i-i-s-kofeavtomat-обслуживание', 'model:i-i-s-kofeavtomat-оплата', 'model:i-i-s-kofeavtomat-состав-заказа', 'model:i-i-s-kofeavtomat-состав', 'model:i-i-s-kofeavtomat-стаканчик', 'model:i-i-s-kofeavtomat-этаж', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-kofeavtomat-\u0441\u0442\u0430\u043A\u0430\u043D\u0447\u0438\u043A-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kofeavtomat-стаканчик', 'Unit | Model | i-i-s-kofeavtomat-стаканчик', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-kofeavtomat-адрес', 'model:i-i-s-kofeavtomat-допы', 'model:i-i-s-kofeavtomat-заказ', 'model:i-i-s-kofeavtomat-здание', 'model:i-i-s-kofeavtomat-клиент', 'model:i-i-s-kofeavtomat-кофе-машина', 'model:i-i-s-kofeavtomat-кофе', 'model:i-i-s-kofeavtomat-материалы', 'model:i-i-s-kofeavtomat-обслуживание', 'model:i-i-s-kofeavtomat-оплата', 'model:i-i-s-kofeavtomat-состав-заказа', 'model:i-i-s-kofeavtomat-состав', 'model:i-i-s-kofeavtomat-стаканчик', 'model:i-i-s-kofeavtomat-этаж', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kofeavtomat-этаж', 'Unit | Model | i-i-s-kofeavtomat-этаж', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-kofeavtomat-адрес', 'model:i-i-s-kofeavtomat-допы', 'model:i-i-s-kofeavtomat-заказ', 'model:i-i-s-kofeavtomat-здание', 'model:i-i-s-kofeavtomat-клиент', 'model:i-i-s-kofeavtomat-кофе-машина', 'model:i-i-s-kofeavtomat-кофе', 'model:i-i-s-kofeavtomat-материалы', 'model:i-i-s-kofeavtomat-обслуживание', 'model:i-i-s-kofeavtomat-оплата', 'model:i-i-s-kofeavtomat-состав-заказа', 'model:i-i-s-kofeavtomat-состав', 'model:i-i-s-kofeavtomat-стаканчик', 'model:i-i-s-kofeavtomat-этаж', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/routes/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-kofeavtomat-адрес-e', 'Unit | Route | i-i-s-kofeavtomat-адрес-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-kofeavtomat-адрес-l', 'Unit | Route | i-i-s-kofeavtomat-адрес-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-kofeavtomat-заказ-e', 'Unit | Route | i-i-s-kofeavtomat-заказ-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-kofeavtomat-заказ-l', 'Unit | Route | i-i-s-kofeavtomat-заказ-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-kofeavtomat-здание-e', 'Unit | Route | i-i-s-kofeavtomat-здание-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-kofeavtomat-здание-l', 'Unit | Route | i-i-s-kofeavtomat-здание-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-kofeavtomat-клиент-e', 'Unit | Route | i-i-s-kofeavtomat-клиент-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-kofeavtomat-клиент-l', 'Unit | Route | i-i-s-kofeavtomat-клиент-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-kofeavtomat-кофе-e', 'Unit | Route | i-i-s-kofeavtomat-кофе-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-kofeavtomat-кофе-l', 'Unit | Route | i-i-s-kofeavtomat-кофе-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-kofeavtomat-кофе-машина-e', 'Unit | Route | i-i-s-kofeavtomat-кофе-машина-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-kofeavtomat-кофе-машина-l', 'Unit | Route | i-i-s-kofeavtomat-кофе-машина-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-kofeavtomat-обслуживание-e', 'Unit | Route | i-i-s-kofeavtomat-обслуживание-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-kofeavtomat-обслуживание-l', 'Unit | Route | i-i-s-kofeavtomat-обслуживание-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-kofeavtomat-оплата-e', 'Unit | Route | i-i-s-kofeavtomat-оплата-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-kofeavtomat-оплата-l', 'Unit | Route | i-i-s-kofeavtomat-оплата-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-kofeavtomat-этаж-e', 'Unit | Route | i-i-s-kofeavtomat-этаж-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-kofeavtomat-этаж-l', 'Unit | Route | i-i-s-kofeavtomat-этаж-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-kofeavtomat-\u0430\u0434\u0440\u0435\u0441-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kofeavtomat-адрес', 'Unit | Serializer | i-i-s-kofeavtomat-адрес', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-kofeavtomat-адрес', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-kofeavtomat-объемы', 'transform:i-i-s-kofeavtomat-оплаты', 'transform:i-i-s-kofeavtomat-состояния', 'model:i-i-s-kofeavtomat-адрес', 'model:i-i-s-kofeavtomat-допы', 'model:i-i-s-kofeavtomat-заказ', 'model:i-i-s-kofeavtomat-здание', 'model:i-i-s-kofeavtomat-клиент', 'model:i-i-s-kofeavtomat-кофе-машина', 'model:i-i-s-kofeavtomat-кофе', 'model:i-i-s-kofeavtomat-материалы', 'model:i-i-s-kofeavtomat-обслуживание', 'model:i-i-s-kofeavtomat-оплата', 'model:i-i-s-kofeavtomat-состав-заказа', 'model:i-i-s-kofeavtomat-состав', 'model:i-i-s-kofeavtomat-стаканчик', 'model:i-i-s-kofeavtomat-этаж', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-kofeavtomat-\u0434\u043E\u043F\u044B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kofeavtomat-допы', 'Unit | Serializer | i-i-s-kofeavtomat-допы', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-kofeavtomat-допы', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-kofeavtomat-объемы', 'transform:i-i-s-kofeavtomat-оплаты', 'transform:i-i-s-kofeavtomat-состояния', 'model:i-i-s-kofeavtomat-адрес', 'model:i-i-s-kofeavtomat-допы', 'model:i-i-s-kofeavtomat-заказ', 'model:i-i-s-kofeavtomat-здание', 'model:i-i-s-kofeavtomat-клиент', 'model:i-i-s-kofeavtomat-кофе-машина', 'model:i-i-s-kofeavtomat-кофе', 'model:i-i-s-kofeavtomat-материалы', 'model:i-i-s-kofeavtomat-обслуживание', 'model:i-i-s-kofeavtomat-оплата', 'model:i-i-s-kofeavtomat-состав-заказа', 'model:i-i-s-kofeavtomat-состав', 'model:i-i-s-kofeavtomat-стаканчик', 'model:i-i-s-kofeavtomat-этаж', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-kofeavtomat-\u0437\u0430\u043A\u0430\u0437-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kofeavtomat-заказ', 'Unit | Serializer | i-i-s-kofeavtomat-заказ', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-kofeavtomat-заказ', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-kofeavtomat-объемы', 'transform:i-i-s-kofeavtomat-оплаты', 'transform:i-i-s-kofeavtomat-состояния', 'model:i-i-s-kofeavtomat-адрес', 'model:i-i-s-kofeavtomat-допы', 'model:i-i-s-kofeavtomat-заказ', 'model:i-i-s-kofeavtomat-здание', 'model:i-i-s-kofeavtomat-клиент', 'model:i-i-s-kofeavtomat-кофе-машина', 'model:i-i-s-kofeavtomat-кофе', 'model:i-i-s-kofeavtomat-материалы', 'model:i-i-s-kofeavtomat-обслуживание', 'model:i-i-s-kofeavtomat-оплата', 'model:i-i-s-kofeavtomat-состав-заказа', 'model:i-i-s-kofeavtomat-состав', 'model:i-i-s-kofeavtomat-стаканчик', 'model:i-i-s-kofeavtomat-этаж', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-kofeavtomat-\u0437\u0434\u0430\u043D\u0438\u0435-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kofeavtomat-здание', 'Unit | Serializer | i-i-s-kofeavtomat-здание', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-kofeavtomat-здание', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-kofeavtomat-объемы', 'transform:i-i-s-kofeavtomat-оплаты', 'transform:i-i-s-kofeavtomat-состояния', 'model:i-i-s-kofeavtomat-адрес', 'model:i-i-s-kofeavtomat-допы', 'model:i-i-s-kofeavtomat-заказ', 'model:i-i-s-kofeavtomat-здание', 'model:i-i-s-kofeavtomat-клиент', 'model:i-i-s-kofeavtomat-кофе-машина', 'model:i-i-s-kofeavtomat-кофе', 'model:i-i-s-kofeavtomat-материалы', 'model:i-i-s-kofeavtomat-обслуживание', 'model:i-i-s-kofeavtomat-оплата', 'model:i-i-s-kofeavtomat-состав-заказа', 'model:i-i-s-kofeavtomat-состав', 'model:i-i-s-kofeavtomat-стаканчик', 'model:i-i-s-kofeavtomat-этаж', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-kofeavtomat-\u043A\u043B\u0438\u0435\u043D\u0442-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kofeavtomat-клиент', 'Unit | Serializer | i-i-s-kofeavtomat-клиент', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-kofeavtomat-клиент', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-kofeavtomat-объемы', 'transform:i-i-s-kofeavtomat-оплаты', 'transform:i-i-s-kofeavtomat-состояния', 'model:i-i-s-kofeavtomat-адрес', 'model:i-i-s-kofeavtomat-допы', 'model:i-i-s-kofeavtomat-заказ', 'model:i-i-s-kofeavtomat-здание', 'model:i-i-s-kofeavtomat-клиент', 'model:i-i-s-kofeavtomat-кофе-машина', 'model:i-i-s-kofeavtomat-кофе', 'model:i-i-s-kofeavtomat-материалы', 'model:i-i-s-kofeavtomat-обслуживание', 'model:i-i-s-kofeavtomat-оплата', 'model:i-i-s-kofeavtomat-состав-заказа', 'model:i-i-s-kofeavtomat-состав', 'model:i-i-s-kofeavtomat-стаканчик', 'model:i-i-s-kofeavtomat-этаж', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kofeavtomat-кофе', 'Unit | Serializer | i-i-s-kofeavtomat-кофе', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-kofeavtomat-кофе', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-kofeavtomat-объемы', 'transform:i-i-s-kofeavtomat-оплаты', 'transform:i-i-s-kofeavtomat-состояния', 'model:i-i-s-kofeavtomat-адрес', 'model:i-i-s-kofeavtomat-допы', 'model:i-i-s-kofeavtomat-заказ', 'model:i-i-s-kofeavtomat-здание', 'model:i-i-s-kofeavtomat-клиент', 'model:i-i-s-kofeavtomat-кофе-машина', 'model:i-i-s-kofeavtomat-кофе', 'model:i-i-s-kofeavtomat-материалы', 'model:i-i-s-kofeavtomat-обслуживание', 'model:i-i-s-kofeavtomat-оплата', 'model:i-i-s-kofeavtomat-состав-заказа', 'model:i-i-s-kofeavtomat-состав', 'model:i-i-s-kofeavtomat-стаканчик', 'model:i-i-s-kofeavtomat-этаж', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-kofeavtomat-\u043A\u043E\u0444\u0435-\u043C\u0430\u0448\u0438\u043D\u0430-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kofeavtomat-кофе-машина', 'Unit | Serializer | i-i-s-kofeavtomat-кофе-машина', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-kofeavtomat-кофе-машина', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-kofeavtomat-объемы', 'transform:i-i-s-kofeavtomat-оплаты', 'transform:i-i-s-kofeavtomat-состояния', 'model:i-i-s-kofeavtomat-адрес', 'model:i-i-s-kofeavtomat-допы', 'model:i-i-s-kofeavtomat-заказ', 'model:i-i-s-kofeavtomat-здание', 'model:i-i-s-kofeavtomat-клиент', 'model:i-i-s-kofeavtomat-кофе-машина', 'model:i-i-s-kofeavtomat-кофе', 'model:i-i-s-kofeavtomat-материалы', 'model:i-i-s-kofeavtomat-обслуживание', 'model:i-i-s-kofeavtomat-оплата', 'model:i-i-s-kofeavtomat-состав-заказа', 'model:i-i-s-kofeavtomat-состав', 'model:i-i-s-kofeavtomat-стаканчик', 'model:i-i-s-kofeavtomat-этаж', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-kofeavtomat-\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kofeavtomat-материалы', 'Unit | Serializer | i-i-s-kofeavtomat-материалы', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-kofeavtomat-материалы', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-kofeavtomat-объемы', 'transform:i-i-s-kofeavtomat-оплаты', 'transform:i-i-s-kofeavtomat-состояния', 'model:i-i-s-kofeavtomat-адрес', 'model:i-i-s-kofeavtomat-допы', 'model:i-i-s-kofeavtomat-заказ', 'model:i-i-s-kofeavtomat-здание', 'model:i-i-s-kofeavtomat-клиент', 'model:i-i-s-kofeavtomat-кофе-машина', 'model:i-i-s-kofeavtomat-кофе', 'model:i-i-s-kofeavtomat-материалы', 'model:i-i-s-kofeavtomat-обслуживание', 'model:i-i-s-kofeavtomat-оплата', 'model:i-i-s-kofeavtomat-состав-заказа', 'model:i-i-s-kofeavtomat-состав', 'model:i-i-s-kofeavtomat-стаканчик', 'model:i-i-s-kofeavtomat-этаж', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-kofeavtomat-\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kofeavtomat-обслуживание', 'Unit | Serializer | i-i-s-kofeavtomat-обслуживание', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-kofeavtomat-обслуживание', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-kofeavtomat-объемы', 'transform:i-i-s-kofeavtomat-оплаты', 'transform:i-i-s-kofeavtomat-состояния', 'model:i-i-s-kofeavtomat-адрес', 'model:i-i-s-kofeavtomat-допы', 'model:i-i-s-kofeavtomat-заказ', 'model:i-i-s-kofeavtomat-здание', 'model:i-i-s-kofeavtomat-клиент', 'model:i-i-s-kofeavtomat-кофе-машина', 'model:i-i-s-kofeavtomat-кофе', 'model:i-i-s-kofeavtomat-материалы', 'model:i-i-s-kofeavtomat-обслуживание', 'model:i-i-s-kofeavtomat-оплата', 'model:i-i-s-kofeavtomat-состав-заказа', 'model:i-i-s-kofeavtomat-состав', 'model:i-i-s-kofeavtomat-стаканчик', 'model:i-i-s-kofeavtomat-этаж', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-kofeavtomat-\u043E\u043F\u043B\u0430\u0442\u0430-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kofeavtomat-оплата', 'Unit | Serializer | i-i-s-kofeavtomat-оплата', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-kofeavtomat-оплата', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-kofeavtomat-объемы', 'transform:i-i-s-kofeavtomat-оплаты', 'transform:i-i-s-kofeavtomat-состояния', 'model:i-i-s-kofeavtomat-адрес', 'model:i-i-s-kofeavtomat-допы', 'model:i-i-s-kofeavtomat-заказ', 'model:i-i-s-kofeavtomat-здание', 'model:i-i-s-kofeavtomat-клиент', 'model:i-i-s-kofeavtomat-кофе-машина', 'model:i-i-s-kofeavtomat-кофе', 'model:i-i-s-kofeavtomat-материалы', 'model:i-i-s-kofeavtomat-обслуживание', 'model:i-i-s-kofeavtomat-оплата', 'model:i-i-s-kofeavtomat-состав-заказа', 'model:i-i-s-kofeavtomat-состав', 'model:i-i-s-kofeavtomat-стаканчик', 'model:i-i-s-kofeavtomat-этаж', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kofeavtomat-состав', 'Unit | Serializer | i-i-s-kofeavtomat-состав', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-kofeavtomat-состав', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-kofeavtomat-объемы', 'transform:i-i-s-kofeavtomat-оплаты', 'transform:i-i-s-kofeavtomat-состояния', 'model:i-i-s-kofeavtomat-адрес', 'model:i-i-s-kofeavtomat-допы', 'model:i-i-s-kofeavtomat-заказ', 'model:i-i-s-kofeavtomat-здание', 'model:i-i-s-kofeavtomat-клиент', 'model:i-i-s-kofeavtomat-кофе-машина', 'model:i-i-s-kofeavtomat-кофе', 'model:i-i-s-kofeavtomat-материалы', 'model:i-i-s-kofeavtomat-обслуживание', 'model:i-i-s-kofeavtomat-оплата', 'model:i-i-s-kofeavtomat-состав-заказа', 'model:i-i-s-kofeavtomat-состав', 'model:i-i-s-kofeavtomat-стаканчик', 'model:i-i-s-kofeavtomat-этаж', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-kofeavtomat-\u0441\u043E\u0441\u0442\u0430\u0432-\u0437\u0430\u043A\u0430\u0437\u0430-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kofeavtomat-состав-заказа', 'Unit | Serializer | i-i-s-kofeavtomat-состав-заказа', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-kofeavtomat-состав-заказа', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-kofeavtomat-объемы', 'transform:i-i-s-kofeavtomat-оплаты', 'transform:i-i-s-kofeavtomat-состояния', 'model:i-i-s-kofeavtomat-адрес', 'model:i-i-s-kofeavtomat-допы', 'model:i-i-s-kofeavtomat-заказ', 'model:i-i-s-kofeavtomat-здание', 'model:i-i-s-kofeavtomat-клиент', 'model:i-i-s-kofeavtomat-кофе-машина', 'model:i-i-s-kofeavtomat-кофе', 'model:i-i-s-kofeavtomat-материалы', 'model:i-i-s-kofeavtomat-обслуживание', 'model:i-i-s-kofeavtomat-оплата', 'model:i-i-s-kofeavtomat-состав-заказа', 'model:i-i-s-kofeavtomat-состав', 'model:i-i-s-kofeavtomat-стаканчик', 'model:i-i-s-kofeavtomat-этаж', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-kofeavtomat-\u0441\u0442\u0430\u043A\u0430\u043D\u0447\u0438\u043A-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kofeavtomat-стаканчик', 'Unit | Serializer | i-i-s-kofeavtomat-стаканчик', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-kofeavtomat-стаканчик', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-kofeavtomat-объемы', 'transform:i-i-s-kofeavtomat-оплаты', 'transform:i-i-s-kofeavtomat-состояния', 'model:i-i-s-kofeavtomat-адрес', 'model:i-i-s-kofeavtomat-допы', 'model:i-i-s-kofeavtomat-заказ', 'model:i-i-s-kofeavtomat-здание', 'model:i-i-s-kofeavtomat-клиент', 'model:i-i-s-kofeavtomat-кофе-машина', 'model:i-i-s-kofeavtomat-кофе', 'model:i-i-s-kofeavtomat-материалы', 'model:i-i-s-kofeavtomat-обслуживание', 'model:i-i-s-kofeavtomat-оплата', 'model:i-i-s-kofeavtomat-состав-заказа', 'model:i-i-s-kofeavtomat-состав', 'model:i-i-s-kofeavtomat-стаканчик', 'model:i-i-s-kofeavtomat-этаж', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-kofeavtomat-\u044D\u0442\u0430\u0436-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kofeavtomat-этаж', 'Unit | Serializer | i-i-s-kofeavtomat-этаж', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-kofeavtomat-этаж', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-kofeavtomat-объемы', 'transform:i-i-s-kofeavtomat-оплаты', 'transform:i-i-s-kofeavtomat-состояния', 'model:i-i-s-kofeavtomat-адрес', 'model:i-i-s-kofeavtomat-допы', 'model:i-i-s-kofeavtomat-заказ', 'model:i-i-s-kofeavtomat-здание', 'model:i-i-s-kofeavtomat-клиент', 'model:i-i-s-kofeavtomat-кофе-машина', 'model:i-i-s-kofeavtomat-кофе', 'model:i-i-s-kofeavtomat-материалы', 'model:i-i-s-kofeavtomat-обслуживание', 'model:i-i-s-kofeavtomat-оплата', 'model:i-i-s-kofeavtomat-состав-заказа', 'model:i-i-s-kofeavtomat-состав', 'model:i-i-s-kofeavtomat-стаканчик', 'model:i-i-s-kofeavtomat-этаж', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/config/environment', [], function() {
  var prefix = 'ember-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map

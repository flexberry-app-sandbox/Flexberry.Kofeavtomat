import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKofeavtomatАдресLForm from './forms/i-i-s-kofeavtomat-адрес-l';
import IISKofeavtomatЗаказLForm from './forms/i-i-s-kofeavtomat-заказ-l';
import IISKofeavtomatЗданиеLForm from './forms/i-i-s-kofeavtomat-здание-l';
import IISKofeavtomatКлиентLForm from './forms/i-i-s-kofeavtomat-клиент-l';
import IISKofeavtomatКофеLForm from './forms/i-i-s-kofeavtomat-кофе-l';
import IISKofeavtomatКофеМашинаLForm from './forms/i-i-s-kofeavtomat-кофе-машина-l';
import IISKofeavtomatОбслуживаниеLForm from './forms/i-i-s-kofeavtomat-обслуживание-l';
import IISKofeavtomatОплатаLForm from './forms/i-i-s-kofeavtomat-оплата-l';
import IISKofeavtomatЭтажLForm from './forms/i-i-s-kofeavtomat-этаж-l';
import IISKofeavtomatАдресEForm from './forms/i-i-s-kofeavtomat-адрес-e';
import IISKofeavtomatЗаказEForm from './forms/i-i-s-kofeavtomat-заказ-e';
import IISKofeavtomatЗданиеEForm from './forms/i-i-s-kofeavtomat-здание-e';
import IISKofeavtomatКлиентEForm from './forms/i-i-s-kofeavtomat-клиент-e';
import IISKofeavtomatКофеEForm from './forms/i-i-s-kofeavtomat-кофе-e';
import IISKofeavtomatКофеМашинаEForm from './forms/i-i-s-kofeavtomat-кофе-машина-e';
import IISKofeavtomatОбслуживаниеEForm from './forms/i-i-s-kofeavtomat-обслуживание-e';
import IISKofeavtomatОплатаEForm from './forms/i-i-s-kofeavtomat-оплата-e';
import IISKofeavtomatЭтажEForm from './forms/i-i-s-kofeavtomat-этаж-e';
import IISKofeavtomatАдресModel from './models/i-i-s-kofeavtomat-адрес';
import IISKofeavtomatДопыModel from './models/i-i-s-kofeavtomat-допы';
import IISKofeavtomatЗаказModel from './models/i-i-s-kofeavtomat-заказ';
import IISKofeavtomatЗданиеModel from './models/i-i-s-kofeavtomat-здание';
import IISKofeavtomatКлиентModel from './models/i-i-s-kofeavtomat-клиент';
import IISKofeavtomatКофеМашинаModel from './models/i-i-s-kofeavtomat-кофе-машина';
import IISKofeavtomatКофеModel from './models/i-i-s-kofeavtomat-кофе';
import IISKofeavtomatМатериалыModel from './models/i-i-s-kofeavtomat-материалы';
import IISKofeavtomatОбслуживаниеModel from './models/i-i-s-kofeavtomat-обслуживание';
import IISKofeavtomatОплатаModel from './models/i-i-s-kofeavtomat-оплата';
import IISKofeavtomatСоставЗаказаModel from './models/i-i-s-kofeavtomat-состав-заказа';
import IISKofeavtomatСоставModel from './models/i-i-s-kofeavtomat-состав';
import IISKofeavtomatСтаканчикModel from './models/i-i-s-kofeavtomat-стаканчик';
import IISKofeavtomatЭтажModel from './models/i-i-s-kofeavtomat-этаж';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kofeavtomat-адрес': IISKofeavtomatАдресModel,
    'i-i-s-kofeavtomat-допы': IISKofeavtomatДопыModel,
    'i-i-s-kofeavtomat-заказ': IISKofeavtomatЗаказModel,
    'i-i-s-kofeavtomat-здание': IISKofeavtomatЗданиеModel,
    'i-i-s-kofeavtomat-клиент': IISKofeavtomatКлиентModel,
    'i-i-s-kofeavtomat-кофе-машина': IISKofeavtomatКофеМашинаModel,
    'i-i-s-kofeavtomat-кофе': IISKofeavtomatКофеModel,
    'i-i-s-kofeavtomat-материалы': IISKofeavtomatМатериалыModel,
    'i-i-s-kofeavtomat-обслуживание': IISKofeavtomatОбслуживаниеModel,
    'i-i-s-kofeavtomat-оплата': IISKofeavtomatОплатаModel,
    'i-i-s-kofeavtomat-состав-заказа': IISKofeavtomatСоставЗаказаModel,
    'i-i-s-kofeavtomat-состав': IISKofeavtomatСоставModel,
    'i-i-s-kofeavtomat-стаканчик': IISKofeavtomatСтаканчикModel,
    'i-i-s-kofeavtomat-этаж': IISKofeavtomatЭтажModel
  },

  'application-name': 'Kofeavtomat',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kofeavtomat',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kofeavtomat',
          title: 'Kofeavtomat'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        kofeavtomat: {
          caption: 'Kofeavtomat',
          title: 'Kofeavtomat',
          'i-i-s-kofeavtomat-заказ-l': {
            caption: 'Заказ',
            title: ''
          },
          'i-i-s-kofeavtomat-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-kofeavtomat-обслуживание-l': {
            caption: 'Обслуживание',
            title: ''
          },
          'i-i-s-kofeavtomat-адрес-l': {
            caption: 'Адрес',
            title: ''
          },
          'i-i-s-kofeavtomat-кофе-l': {
            caption: 'Кофе',
            title: ''
          },
          'i-i-s-kofeavtomat-этаж-l': {
            caption: 'Этаж',
            title: ''
          },
          'i-i-s-kofeavtomat-кофе-машина-l': {
            caption: 'Кофе машина',
            title: ''
          },
          'i-i-s-kofeavtomat-оплата-l': {
            caption: 'Оплата',
            title: ''
          },
          'i-i-s-kofeavtomat-здание-l': {
            caption: 'Здание',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-kofeavtomat-адрес-l': IISKofeavtomatАдресLForm,
    'i-i-s-kofeavtomat-заказ-l': IISKofeavtomatЗаказLForm,
    'i-i-s-kofeavtomat-здание-l': IISKofeavtomatЗданиеLForm,
    'i-i-s-kofeavtomat-клиент-l': IISKofeavtomatКлиентLForm,
    'i-i-s-kofeavtomat-кофе-l': IISKofeavtomatКофеLForm,
    'i-i-s-kofeavtomat-кофе-машина-l': IISKofeavtomatКофеМашинаLForm,
    'i-i-s-kofeavtomat-обслуживание-l': IISKofeavtomatОбслуживаниеLForm,
    'i-i-s-kofeavtomat-оплата-l': IISKofeavtomatОплатаLForm,
    'i-i-s-kofeavtomat-этаж-l': IISKofeavtomatЭтажLForm,
    'i-i-s-kofeavtomat-адрес-e': IISKofeavtomatАдресEForm,
    'i-i-s-kofeavtomat-заказ-e': IISKofeavtomatЗаказEForm,
    'i-i-s-kofeavtomat-здание-e': IISKofeavtomatЗданиеEForm,
    'i-i-s-kofeavtomat-клиент-e': IISKofeavtomatКлиентEForm,
    'i-i-s-kofeavtomat-кофе-e': IISKofeavtomatКофеEForm,
    'i-i-s-kofeavtomat-кофе-машина-e': IISKofeavtomatКофеМашинаEForm,
    'i-i-s-kofeavtomat-обслуживание-e': IISKofeavtomatОбслуживаниеEForm,
    'i-i-s-kofeavtomat-оплата-e': IISKofeavtomatОплатаEForm,
    'i-i-s-kofeavtomat-этаж-e': IISKofeavtomatЭтажEForm
  },

});

export default translations;

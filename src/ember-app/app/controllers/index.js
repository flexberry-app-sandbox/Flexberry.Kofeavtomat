import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kofeavtomat.caption'),
          title: i18n.t('forms.application.sitemap.kofeavtomat.title'),
          children: [{
            link: 'i-i-s-kofeavtomat-заказ-l',
            caption: i18n.t('forms.application.sitemap.kofeavtomat.i-i-s-kofeavtomat-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.kofeavtomat.i-i-s-kofeavtomat-заказ-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-kofeavtomat-клиент-l',
            caption: i18n.t('forms.application.sitemap.kofeavtomat.i-i-s-kofeavtomat-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.kofeavtomat.i-i-s-kofeavtomat-клиент-l.title'),
            children: null
          }, {
            link: 'i-i-s-kofeavtomat-обслуживание-l',
            caption: i18n.t('forms.application.sitemap.kofeavtomat.i-i-s-kofeavtomat-обслуживание-l.caption'),
            title: i18n.t('forms.application.sitemap.kofeavtomat.i-i-s-kofeavtomat-обслуживание-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-kofeavtomat-адрес-l',
            caption: i18n.t('forms.application.sitemap.kofeavtomat.i-i-s-kofeavtomat-адрес-l.caption'),
            title: i18n.t('forms.application.sitemap.kofeavtomat.i-i-s-kofeavtomat-адрес-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-kofeavtomat-кофе-l',
            caption: i18n.t('forms.application.sitemap.kofeavtomat.i-i-s-kofeavtomat-кофе-l.caption'),
            title: i18n.t('forms.application.sitemap.kofeavtomat.i-i-s-kofeavtomat-кофе-l.title'),
            children: null
          }, {
            link: 'i-i-s-kofeavtomat-этаж-l',
            caption: i18n.t('forms.application.sitemap.kofeavtomat.i-i-s-kofeavtomat-этаж-l.caption'),
            title: i18n.t('forms.application.sitemap.kofeavtomat.i-i-s-kofeavtomat-этаж-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-kofeavtomat-кофе-машина-l',
            caption: i18n.t('forms.application.sitemap.kofeavtomat.i-i-s-kofeavtomat-кофе-машина-l.caption'),
            title: i18n.t('forms.application.sitemap.kofeavtomat.i-i-s-kofeavtomat-кофе-машина-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-kofeavtomat-оплата-l',
            caption: i18n.t('forms.application.sitemap.kofeavtomat.i-i-s-kofeavtomat-оплата-l.caption'),
            title: i18n.t('forms.application.sitemap.kofeavtomat.i-i-s-kofeavtomat-оплата-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-kofeavtomat-здание-l',
            caption: i18n.t('forms.application.sitemap.kofeavtomat.i-i-s-kofeavtomat-здание-l.caption'),
            title: i18n.t('forms.application.sitemap.kofeavtomat.i-i-s-kofeavtomat-здание-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})
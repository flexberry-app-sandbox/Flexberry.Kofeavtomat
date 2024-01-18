import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kofeavtomat-адрес-l');
  this.route('i-i-s-kofeavtomat-адрес-e',
  { path: 'i-i-s-kofeavtomat-адрес-e/:id' });
  this.route('i-i-s-kofeavtomat-адрес-e.new',
  { path: 'i-i-s-kofeavtomat-адрес-e/new' });
  this.route('i-i-s-kofeavtomat-заказ-l');
  this.route('i-i-s-kofeavtomat-заказ-e',
  { path: 'i-i-s-kofeavtomat-заказ-e/:id' });
  this.route('i-i-s-kofeavtomat-заказ-e.new',
  { path: 'i-i-s-kofeavtomat-заказ-e/new' });
  this.route('i-i-s-kofeavtomat-здание-l');
  this.route('i-i-s-kofeavtomat-здание-e',
  { path: 'i-i-s-kofeavtomat-здание-e/:id' });
  this.route('i-i-s-kofeavtomat-здание-e.new',
  { path: 'i-i-s-kofeavtomat-здание-e/new' });
  this.route('i-i-s-kofeavtomat-клиент-l');
  this.route('i-i-s-kofeavtomat-клиент-e',
  { path: 'i-i-s-kofeavtomat-клиент-e/:id' });
  this.route('i-i-s-kofeavtomat-клиент-e.new',
  { path: 'i-i-s-kofeavtomat-клиент-e/new' });
  this.route('i-i-s-kofeavtomat-кофе-l');
  this.route('i-i-s-kofeavtomat-кофе-e',
  { path: 'i-i-s-kofeavtomat-кофе-e/:id' });
  this.route('i-i-s-kofeavtomat-кофе-e.new',
  { path: 'i-i-s-kofeavtomat-кофе-e/new' });
  this.route('i-i-s-kofeavtomat-кофе-машина-l');
  this.route('i-i-s-kofeavtomat-кофе-машина-e',
  { path: 'i-i-s-kofeavtomat-кофе-машина-e/:id' });
  this.route('i-i-s-kofeavtomat-кофе-машина-e.new',
  { path: 'i-i-s-kofeavtomat-кофе-машина-e/new' });
  this.route('i-i-s-kofeavtomat-обслуживание-l');
  this.route('i-i-s-kofeavtomat-обслуживание-e',
  { path: 'i-i-s-kofeavtomat-обслуживание-e/:id' });
  this.route('i-i-s-kofeavtomat-обслуживание-e.new',
  { path: 'i-i-s-kofeavtomat-обслуживание-e/new' });
  this.route('i-i-s-kofeavtomat-оплата-l');
  this.route('i-i-s-kofeavtomat-оплата-e',
  { path: 'i-i-s-kofeavtomat-оплата-e/:id' });
  this.route('i-i-s-kofeavtomat-оплата-e.new',
  { path: 'i-i-s-kofeavtomat-оплата-e/new' });
  this.route('i-i-s-kofeavtomat-этаж-l');
  this.route('i-i-s-kofeavtomat-этаж-e',
  { path: 'i-i-s-kofeavtomat-этаж-e/:id' });
  this.route('i-i-s-kofeavtomat-этаж-e.new',
  { path: 'i-i-s-kofeavtomat-этаж-e/new' });
});

export default Router;

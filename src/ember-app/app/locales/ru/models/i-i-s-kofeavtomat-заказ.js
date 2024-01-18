export default {
  projections: {
    ЗаказE: {
      id: {
        __caption__: 'Id'
      },
      оплата: {
        __caption__: 'Оплата',
        типОплаты: {
          __caption__: 'Тип оплаты'
        }
      },
      клиент: {
        __caption__: 'Клиент',
        id: {
          __caption__: 'Id'
        }
      },
      состав: {
        __caption__: 'Состав',
        кофе: {
          __caption__: 'Кофе',
          наименование: {
            __caption__: 'Наименование'
          }
        }
      }
    },
    ЗаказL: {
      id: {
        __caption__: 'Id'
      },
      оплата: {
        __caption__: 'Тип оплаты',
        типОплаты: {
          __caption__: 'Тип оплаты'
        }
      },
      клиент: {
        __caption__: 'Id',
        id: {
          __caption__: 'Id'
        }
      }
    }
  },
  validations: {
    id: {
      __caption__: 'Id'
    },
    клиент: {
      __caption__: 'Клиент'
    },
    оплата: {
      __caption__: 'Оплата'
    },
    состав: {
      __caption__: 'Состав'
    }
  }
};

export default {
  projections: {
    ЗаказE: {
      номер: {
        __caption__: 'ID'
      },
      оплата: {
        __caption__: 'Оплата',
        типОплаты: {
          __caption__: 'Тип оплаты'
        }
      },
      клиент: {
        __caption__: 'Клиент',
        номер: {
          __caption__: 'ID Клиента'
        },
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
      },
      id: {
        __caption__: 'Id'
      }
    },
    ЗаказL: {
      номер: {
        __caption__: 'ID'
      },
      оплата: {
        __caption__: 'Тип оплаты',
        типОплаты: {
          __caption__: 'Тип оплаты'
        }
      },
      клиент: {
        __caption__: 'Id',
        номер: {
          __caption__: 'ID клиента'
        },
        id: {
          __caption__: 'Id'
        }
      },
      id: {
        __caption__: 'Id'
      }
    }
  },
  validations: {
    номер: {
      __caption__: 'ID'
    },
    клиент: {
      __caption__: 'Клиент'
    },
    оплата: {
      __caption__: 'Оплата'
    },
    состав: {
      __caption__: 'Состав'
    },
    id: {
      __caption__: 'Id'
    }
  }
};

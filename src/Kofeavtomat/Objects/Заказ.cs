﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kofeavtomat
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Заказ.
    /// </summary>
    // *** Start programmer edit section *** (Заказ CustomAttributes)

    // *** End programmer edit section *** (Заказ CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЗаказE", new string[] {
            "Id as \'Id\'",
            "Оплата as \'Оплата\'",
            "Оплата.ТипОплаты as \'Тип оплаты\'",
            "Клиент as \'Клиент\'",
            "Клиент.id as \'Id\'"}, Hidden=new string[] {
            "Оплата.ТипОплаты",
            "Клиент.id"})]
    [AssociatedDetailViewAttribute("ЗаказE", "Состав", "СоставE", true, "", "Состав", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("ЗаказE", "Оплата", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ТипОплаты")]
    [MasterViewDefineAttribute("ЗаказE", "Клиент", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "id")]
    [View("ЗаказL", new string[] {
            "Id as \'Id\'",
            "Оплата.ТипОплаты as \'Тип оплаты\'",
            "Клиент.id as \'Id\'"})]
    public class Заказ : ICSSoft.STORMNET.DataObject
    {
        
        private int fId;
        
        private IIS.Kofeavtomat.Оплата fОплата;
        
        private IIS.Kofeavtomat.Клиент fКлиент;
        
        private IIS.Kofeavtomat.DetailArrayOfСостав fСостав;
        
        // *** Start programmer edit section *** (Заказ CustomMembers)

        // *** End programmer edit section *** (Заказ CustomMembers)

        
        /// <summary>
        /// Id.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.Id CustomAttributes)

        // *** End programmer edit section *** (Заказ.Id CustomAttributes)
        public virtual int Id
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.Id Get start)

                // *** End programmer edit section *** (Заказ.Id Get start)
                int result = this.fId;
                // *** Start programmer edit section *** (Заказ.Id Get end)

                // *** End programmer edit section *** (Заказ.Id Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.Id Set start)

                // *** End programmer edit section *** (Заказ.Id Set start)
                this.fId = value;
                // *** Start programmer edit section *** (Заказ.Id Set end)

                // *** End programmer edit section *** (Заказ.Id Set end)
            }
        }
        
        /// <summary>
        /// Заказ.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.Клиент CustomAttributes)

        // *** End programmer edit section *** (Заказ.Клиент CustomAttributes)
        [PropertyStorage(new string[] {
                "Клиент"})]
        [NotNull()]
        public virtual IIS.Kofeavtomat.Клиент Клиент
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.Клиент Get start)

                // *** End programmer edit section *** (Заказ.Клиент Get start)
                IIS.Kofeavtomat.Клиент result = this.fКлиент;
                // *** Start programmer edit section *** (Заказ.Клиент Get end)

                // *** End programmer edit section *** (Заказ.Клиент Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.Клиент Set start)

                // *** End programmer edit section *** (Заказ.Клиент Set start)
                this.fКлиент = value;
                // *** Start programmer edit section *** (Заказ.Клиент Set end)

                // *** End programmer edit section *** (Заказ.Клиент Set end)
            }
        }
        
        /// <summary>
        /// Заказ.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.Оплата CustomAttributes)

        // *** End programmer edit section *** (Заказ.Оплата CustomAttributes)
        [PropertyStorage(new string[] {
                "Оплата"})]
        [NotNull()]
        public virtual IIS.Kofeavtomat.Оплата Оплата
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.Оплата Get start)

                // *** End programmer edit section *** (Заказ.Оплата Get start)
                IIS.Kofeavtomat.Оплата result = this.fОплата;
                // *** Start programmer edit section *** (Заказ.Оплата Get end)

                // *** End programmer edit section *** (Заказ.Оплата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.Оплата Set start)

                // *** End programmer edit section *** (Заказ.Оплата Set start)
                this.fОплата = value;
                // *** Start programmer edit section *** (Заказ.Оплата Set end)

                // *** End programmer edit section *** (Заказ.Оплата Set end)
            }
        }
        
        /// <summary>
        /// Заказ.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.Состав CustomAttributes)

        // *** End programmer edit section *** (Заказ.Состав CustomAttributes)
        public virtual IIS.Kofeavtomat.DetailArrayOfСостав Состав
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.Состав Get start)

                // *** End programmer edit section *** (Заказ.Состав Get start)
                if ((this.fСостав == null))
                {
                    this.fСостав = new IIS.Kofeavtomat.DetailArrayOfСостав(this);
                }
                IIS.Kofeavtomat.DetailArrayOfСостав result = this.fСостав;
                // *** Start programmer edit section *** (Заказ.Состав Get end)

                // *** End programmer edit section *** (Заказ.Состав Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.Состав Set start)

                // *** End programmer edit section *** (Заказ.Состав Set start)
                this.fСостав = value;
                // *** Start programmer edit section *** (Заказ.Состав Set end)

                // *** End programmer edit section *** (Заказ.Состав Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЗаказE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаказE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаказE", typeof(IIS.Kofeavtomat.Заказ));
                }
            }
            
            /// <summary>
            /// "ЗаказL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаказL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаказL", typeof(IIS.Kofeavtomat.Заказ));
                }
            }
        }
    }
}

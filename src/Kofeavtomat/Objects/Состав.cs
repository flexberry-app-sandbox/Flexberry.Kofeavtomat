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
    /// Состав.
    /// </summary>
    // *** Start programmer edit section *** (Состав CustomAttributes)

    // *** End programmer edit section *** (Состав CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СоставE", new string[] {
            "Кофе as \'Кофе\'",
            "Кофе.Наименование as \'Наименование\'"}, Hidden=new string[] {
            "Кофе.Наименование"})]
    [MasterViewDefineAttribute("СоставE", "Кофе", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    public class Состав : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Kofeavtomat.Кофе fКофе;
        
        private IIS.Kofeavtomat.Заказ fЗаказ;
        
        // *** Start programmer edit section *** (Состав CustomMembers)

        // *** End programmer edit section *** (Состав CustomMembers)

        
        /// <summary>
        /// Состав.
        /// </summary>
        // *** Start programmer edit section *** (Состав.Кофе CustomAttributes)

        // *** End programmer edit section *** (Состав.Кофе CustomAttributes)
        [PropertyStorage(new string[] {
                "Кофе"})]
        [NotNull()]
        public virtual IIS.Kofeavtomat.Кофе Кофе
        {
            get
            {
                // *** Start programmer edit section *** (Состав.Кофе Get start)

                // *** End programmer edit section *** (Состав.Кофе Get start)
                IIS.Kofeavtomat.Кофе result = this.fКофе;
                // *** Start programmer edit section *** (Состав.Кофе Get end)

                // *** End programmer edit section *** (Состав.Кофе Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Состав.Кофе Set start)

                // *** End programmer edit section *** (Состав.Кофе Set start)
                this.fКофе = value;
                // *** Start programmer edit section *** (Состав.Кофе Set end)

                // *** End programmer edit section *** (Состав.Кофе Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Kofeavtomat.Заказ.
        /// </summary>
        // *** Start programmer edit section *** (Состав.Заказ CustomAttributes)

        // *** End programmer edit section *** (Состав.Заказ CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Заказ"})]
        public virtual IIS.Kofeavtomat.Заказ Заказ
        {
            get
            {
                // *** Start programmer edit section *** (Состав.Заказ Get start)

                // *** End programmer edit section *** (Состав.Заказ Get start)
                IIS.Kofeavtomat.Заказ result = this.fЗаказ;
                // *** Start programmer edit section *** (Состав.Заказ Get end)

                // *** End programmer edit section *** (Состав.Заказ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Состав.Заказ Set start)

                // *** End programmer edit section *** (Состав.Заказ Set start)
                this.fЗаказ = value;
                // *** Start programmer edit section *** (Состав.Заказ Set end)

                // *** End programmer edit section *** (Состав.Заказ Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СоставE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СоставE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СоставE", typeof(IIS.Kofeavtomat.Состав));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Состав.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfСостав CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfСостав CustomAttributes)
    public class DetailArrayOfСостав : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Kofeavtomat.DetailArrayOfСостав members)

        // *** End programmer edit section *** (IIS.Kofeavtomat.DetailArrayOfСостав members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Состав by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Состав.
        /// </summary>
        public DetailArrayOfСостав(IIS.Kofeavtomat.Заказ fЗаказ) : 
                base(typeof(Состав), ((ICSSoft.STORMNET.DataObject)(fЗаказ)))
        {
        }
        
        public IIS.Kofeavtomat.Состав this[int index]
        {
            get
            {
                return ((IIS.Kofeavtomat.Состав)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Kofeavtomat.Состав dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}

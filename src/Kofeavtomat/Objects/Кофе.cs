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
    /// Кофе.
    /// </summary>
    // *** Start programmer edit section *** (Кофе CustomAttributes)

    // *** End programmer edit section *** (Кофе CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КофеE", new string[] {
            "Наименование as \'Наименование\'",
            "Цена as \'Цена\'"})]
    [AssociatedDetailViewAttribute("КофеE", "Материалы", "МатериалыE", true, "", "Материалы", true, new string[] {
            ""})]
    [AssociatedDetailViewAttribute("КофеE", "Допы", "ДопыE", true, "", "Допы", true, new string[] {
            ""})]
    [AssociatedDetailViewAttribute("КофеE", "Стаканчик", "СтаканчикE", true, "", "Стаканчик", true, new string[] {
            ""})]
    [View("КофеL", new string[] {
            "Наименование as \'Наименование\'",
            "Цена as \'Цена\'"})]
    public class Кофе : ICSSoft.STORMNET.DataObject
    {
        
        private string fНаименование;
        
        private double fЦена;
        
        private IIS.Kofeavtomat.DetailArrayOfДопы fДопы;
        
        private IIS.Kofeavtomat.DetailArrayOfМатериалы fМатериалы;
        
        private IIS.Kofeavtomat.DetailArrayOfСтаканчик fСтаканчик;
        
        // *** Start programmer edit section *** (Кофе CustomMembers)

        // *** End programmer edit section *** (Кофе CustomMembers)

        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Кофе.Наименование CustomAttributes)

        // *** End programmer edit section *** (Кофе.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Кофе.Наименование Get start)

                // *** End programmer edit section *** (Кофе.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Кофе.Наименование Get end)

                // *** End programmer edit section *** (Кофе.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Кофе.Наименование Set start)

                // *** End programmer edit section *** (Кофе.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Кофе.Наименование Set end)

                // *** End programmer edit section *** (Кофе.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Цена.
        /// </summary>
        // *** Start programmer edit section *** (Кофе.Цена CustomAttributes)

        // *** End programmer edit section *** (Кофе.Цена CustomAttributes)
        public virtual double Цена
        {
            get
            {
                // *** Start programmer edit section *** (Кофе.Цена Get start)

                // *** End programmer edit section *** (Кофе.Цена Get start)
                double result = this.fЦена;
                // *** Start programmer edit section *** (Кофе.Цена Get end)

                // *** End programmer edit section *** (Кофе.Цена Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Кофе.Цена Set start)

                // *** End programmer edit section *** (Кофе.Цена Set start)
                this.fЦена = value;
                // *** Start programmer edit section *** (Кофе.Цена Set end)

                // *** End programmer edit section *** (Кофе.Цена Set end)
            }
        }
        
        /// <summary>
        /// Кофе.
        /// </summary>
        // *** Start programmer edit section *** (Кофе.Допы CustomAttributes)

        // *** End programmer edit section *** (Кофе.Допы CustomAttributes)
        public virtual IIS.Kofeavtomat.DetailArrayOfДопы Допы
        {
            get
            {
                // *** Start programmer edit section *** (Кофе.Допы Get start)

                // *** End programmer edit section *** (Кофе.Допы Get start)
                if ((this.fДопы == null))
                {
                    this.fДопы = new IIS.Kofeavtomat.DetailArrayOfДопы(this);
                }
                IIS.Kofeavtomat.DetailArrayOfДопы result = this.fДопы;
                // *** Start programmer edit section *** (Кофе.Допы Get end)

                // *** End programmer edit section *** (Кофе.Допы Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Кофе.Допы Set start)

                // *** End programmer edit section *** (Кофе.Допы Set start)
                this.fДопы = value;
                // *** Start programmer edit section *** (Кофе.Допы Set end)

                // *** End programmer edit section *** (Кофе.Допы Set end)
            }
        }
        
        /// <summary>
        /// Кофе.
        /// </summary>
        // *** Start programmer edit section *** (Кофе.Материалы CustomAttributes)

        // *** End programmer edit section *** (Кофе.Материалы CustomAttributes)
        public virtual IIS.Kofeavtomat.DetailArrayOfМатериалы Материалы
        {
            get
            {
                // *** Start programmer edit section *** (Кофе.Материалы Get start)

                // *** End programmer edit section *** (Кофе.Материалы Get start)
                if ((this.fМатериалы == null))
                {
                    this.fМатериалы = new IIS.Kofeavtomat.DetailArrayOfМатериалы(this);
                }
                IIS.Kofeavtomat.DetailArrayOfМатериалы result = this.fМатериалы;
                // *** Start programmer edit section *** (Кофе.Материалы Get end)

                // *** End programmer edit section *** (Кофе.Материалы Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Кофе.Материалы Set start)

                // *** End programmer edit section *** (Кофе.Материалы Set start)
                this.fМатериалы = value;
                // *** Start programmer edit section *** (Кофе.Материалы Set end)

                // *** End programmer edit section *** (Кофе.Материалы Set end)
            }
        }
        
        /// <summary>
        /// Кофе.
        /// </summary>
        // *** Start programmer edit section *** (Кофе.Стаканчик CustomAttributes)

        // *** End programmer edit section *** (Кофе.Стаканчик CustomAttributes)
        public virtual IIS.Kofeavtomat.DetailArrayOfСтаканчик Стаканчик
        {
            get
            {
                // *** Start programmer edit section *** (Кофе.Стаканчик Get start)

                // *** End programmer edit section *** (Кофе.Стаканчик Get start)
                if ((this.fСтаканчик == null))
                {
                    this.fСтаканчик = new IIS.Kofeavtomat.DetailArrayOfСтаканчик(this);
                }
                IIS.Kofeavtomat.DetailArrayOfСтаканчик result = this.fСтаканчик;
                // *** Start programmer edit section *** (Кофе.Стаканчик Get end)

                // *** End programmer edit section *** (Кофе.Стаканчик Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Кофе.Стаканчик Set start)

                // *** End programmer edit section *** (Кофе.Стаканчик Set start)
                this.fСтаканчик = value;
                // *** Start programmer edit section *** (Кофе.Стаканчик Set end)

                // *** End programmer edit section *** (Кофе.Стаканчик Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КофеE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КофеE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КофеE", typeof(IIS.Kofeavtomat.Кофе));
                }
            }
            
            /// <summary>
            /// "КофеL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КофеL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КофеL", typeof(IIS.Kofeavtomat.Кофе));
                }
            }
        }
    }
}

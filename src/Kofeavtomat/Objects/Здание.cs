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
    /// Здание.
    /// </summary>
    // *** Start programmer edit section *** (Здание CustomAttributes)

    // *** End programmer edit section *** (Здание CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЗданиеE", new string[] {
            "Адреса as \'Адрес\'",
            "НомерДома as \'Номер дома\'",
            "Адрес as \'Город\'",
            "Адрес.Город as \'Город\'"}, Hidden=new string[] {
            "Адрес.Город"})]
    [View("ЗданиеL", new string[] {
            "Адреса as \'Адрес\'",
            "НомерДома as \'Номер дома\'",
            "Адрес.Город as \'Город\'"})]
    public class Здание : ICSSoft.STORMNET.DataObject
    {
        
        private string fАдреса;
        
        private int fНомерДома;
        
        private IIS.Kofeavtomat.Адрес fАдрес;
        
        // *** Start programmer edit section *** (Здание CustomMembers)

        // *** End programmer edit section *** (Здание CustomMembers)

        
        /// <summary>
        /// Адреса.
        /// </summary>
        // *** Start programmer edit section *** (Здание.Адреса CustomAttributes)

        // *** End programmer edit section *** (Здание.Адреса CustomAttributes)
        [StrLen(255)]
        public virtual string Адреса
        {
            get
            {
                // *** Start programmer edit section *** (Здание.Адреса Get start)

                // *** End programmer edit section *** (Здание.Адреса Get start)
                string result = this.fАдреса;
                // *** Start programmer edit section *** (Здание.Адреса Get end)

                // *** End programmer edit section *** (Здание.Адреса Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Здание.Адреса Set start)

                // *** End programmer edit section *** (Здание.Адреса Set start)
                this.fАдреса = value;
                // *** Start programmer edit section *** (Здание.Адреса Set end)

                // *** End programmer edit section *** (Здание.Адреса Set end)
            }
        }
        
        /// <summary>
        /// НомерДома.
        /// </summary>
        // *** Start programmer edit section *** (Здание.НомерДома CustomAttributes)

        // *** End programmer edit section *** (Здание.НомерДома CustomAttributes)
        public virtual int НомерДома
        {
            get
            {
                // *** Start programmer edit section *** (Здание.НомерДома Get start)

                // *** End programmer edit section *** (Здание.НомерДома Get start)
                int result = this.fНомерДома;
                // *** Start programmer edit section *** (Здание.НомерДома Get end)

                // *** End programmer edit section *** (Здание.НомерДома Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Здание.НомерДома Set start)

                // *** End programmer edit section *** (Здание.НомерДома Set start)
                this.fНомерДома = value;
                // *** Start programmer edit section *** (Здание.НомерДома Set end)

                // *** End programmer edit section *** (Здание.НомерДома Set end)
            }
        }
        
        /// <summary>
        /// Здание.
        /// </summary>
        // *** Start programmer edit section *** (Здание.Адрес CustomAttributes)

        // *** End programmer edit section *** (Здание.Адрес CustomAttributes)
        [PropertyStorage(new string[] {
                "Адрес"})]
        [NotNull()]
        public virtual IIS.Kofeavtomat.Адрес Адрес
        {
            get
            {
                // *** Start programmer edit section *** (Здание.Адрес Get start)

                // *** End programmer edit section *** (Здание.Адрес Get start)
                IIS.Kofeavtomat.Адрес result = this.fАдрес;
                // *** Start programmer edit section *** (Здание.Адрес Get end)

                // *** End programmer edit section *** (Здание.Адрес Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Здание.Адрес Set start)

                // *** End programmer edit section *** (Здание.Адрес Set start)
                this.fАдрес = value;
                // *** Start programmer edit section *** (Здание.Адрес Set end)

                // *** End programmer edit section *** (Здание.Адрес Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЗданиеE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗданиеE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗданиеE", typeof(IIS.Kofeavtomat.Здание));
                }
            }
            
            /// <summary>
            /// "ЗданиеL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗданиеL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗданиеL", typeof(IIS.Kofeavtomat.Здание));
                }
            }
        }
    }
}

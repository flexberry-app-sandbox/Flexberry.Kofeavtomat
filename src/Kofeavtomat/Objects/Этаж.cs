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
    /// Этаж.
    /// </summary>
    // *** Start programmer edit section *** (Этаж CustomAttributes)

    // *** End programmer edit section *** (Этаж CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЭтажE", new string[] {
            "Этаж as \'Этаж\'",
            "Здание as \'Здание\'",
            "Здание.Адреса as \'Адрес\'",
            "Здание.НомерДома as \'Номер дома\'"}, Hidden=new string[] {
            "Здание.Адреса"})]
    [MasterViewDefineAttribute("ЭтажE", "Здание", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Адрес")]
    [View("ЭтажL", new string[] {
            "Этаж as \'Этаж\'",
            "Здание.Адреса as \'Адреса\'",
            "Здание.НомерДома as \'Номер дома\'"})]
    public class Этаж : ICSSoft.STORMNET.DataObject
    {
        
        private int fЭтаж;
        
        private IIS.Kofeavtomat.Здание fЗдание;
        
        // *** Start programmer edit section *** (Этаж CustomMembers)

        // *** End programmer edit section *** (Этаж CustomMembers)

        
        /// <summary>
        /// Этаж.
        /// </summary>
        // *** Start programmer edit section *** (Этаж.Этаж CustomAttributes)

        // *** End programmer edit section *** (Этаж.Этаж CustomAttributes)
        public virtual int Этаж
        {
            get
            {
                // *** Start programmer edit section *** (Этаж.Этаж Get start)

                // *** End programmer edit section *** (Этаж.Этаж Get start)
                int result = this.fЭтаж;
                // *** Start programmer edit section *** (Этаж.Этаж Get end)

                // *** End programmer edit section *** (Этаж.Этаж Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Этаж.Этаж Set start)

                // *** End programmer edit section *** (Этаж.Этаж Set start)
                this.fЭтаж = value;
                // *** Start programmer edit section *** (Этаж.Этаж Set end)

                // *** End programmer edit section *** (Этаж.Этаж Set end)
            }
        }
        
        /// <summary>
        /// Этаж.
        /// </summary>
        // *** Start programmer edit section *** (Этаж.Здание CustomAttributes)

        // *** End programmer edit section *** (Этаж.Здание CustomAttributes)
        [PropertyStorage(new string[] {
                "Здание"})]
        [NotNull()]
        public virtual IIS.Kofeavtomat.Здание Здание
        {
            get
            {
                // *** Start programmer edit section *** (Этаж.Здание Get start)

                // *** End programmer edit section *** (Этаж.Здание Get start)
                IIS.Kofeavtomat.Здание result = this.fЗдание;
                // *** Start programmer edit section *** (Этаж.Здание Get end)

                // *** End programmer edit section *** (Этаж.Здание Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Этаж.Здание Set start)

                // *** End programmer edit section *** (Этаж.Здание Set start)
                this.fЗдание = value;
                // *** Start programmer edit section *** (Этаж.Здание Set end)

                // *** End programmer edit section *** (Этаж.Здание Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЭтажE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЭтажE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЭтажE", typeof(IIS.Kofeavtomat.Этаж));
                }
            }
            
            /// <summary>
            /// "ЭтажL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЭтажL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЭтажL", typeof(IIS.Kofeavtomat.Этаж));
                }
            }
        }
    }
}

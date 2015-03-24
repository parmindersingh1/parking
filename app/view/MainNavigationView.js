
Ext.define('Parking.view.MainNavigationView', {
   extend: 'Ext.navigation.View',
    alias: 'widget.mainNavigationView',    
    //extend: 'Ext.form.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.form.FieldSet',
        'Ext.field.Search',        
        'Parking.util.Common',
        'Ext.form.Panel'
    ],
    config: {
        // layout: 'card',
        items: [{
            xtype: 'formpanel',
            itemId: 'searchForm',
            title: 'Search',
            items: [{
                xtype: 'fieldset',
                // title: 'Search',
                instructions: "Search where other people",
                items: [{
                    name: 'registration_no',
                    xtype: 'searchfield',
                    label: 'Registration Number',
                    itemId: 'searchScreenRegistration'
                }]

            }, {
                xtype: 'button',
                text: 'Search',
                action: 'search',
                iconCls: 'searchCls',
                iconMask: true,
                margin: 10,
                itemId: 'searchBtn',
                ui: 'action'
            }]
        }]
      
    }

});
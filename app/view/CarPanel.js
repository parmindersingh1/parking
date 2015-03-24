Ext.define('Parking.view.CarPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.carPanel',    

    requires: [
        'Ext.Label'
    ],

    config: {
        itemId: 'carDetailPanel',
        items: [{
            xtype: 'label',
            centered: true,
            // html: 'Frequently Asked Question',
            // itemId: 'carLabel'
        }]
    }

});
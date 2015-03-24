Ext.define('Parking.store.Cars', {
    extend: 'Ext.data.Store',
    xtype: 'carStore',
    requires: [
        'Parking.util.Config'
    ],
    config: {
        model: 'Parking.model.Car',
        storeId: 'carStore',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: Parking.util.Config.url.GPSTRACKER_CARS,
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },            
            withCredentials: true,
            useDefaultXhrHeader: false,            
            reader: {
                type: "json",
                rootProperty: "cars",
                totalProperty: 'total',
                successProperty: 'success'
            }
        },
        listeners: {
            beforeload: function() {
                console.log('Before load');
            },
            load: function() {
                console.log(this.getData());
            }
        }
    }
});
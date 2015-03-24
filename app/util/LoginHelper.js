
Ext.define('Parking.util.LoginHelper', {
    singleton: true,
    alternateClassName: ['LoginHelper'],
    requires: [
        'Parking.util.Config',
        'Parking.util.Common'
    ],
    config: {
       
    },
    constructor: function() {
        return this.config;
    }
});
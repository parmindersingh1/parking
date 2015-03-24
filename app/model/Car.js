
Ext.define('Parking.model.Car', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
        {
            name: 'id',
            type: 'integer' 
        },{
            name: 'first_name',
            type: 'string'
        },{
            name: 'last_name',
            type: 'string'
        },{
            name: 'registration_no',
            type: 'string'
        },{
            name: 'mobile_no',
            type: 'string'
        },{
            name: 'vehicle_type',
            type: 'string'
        }

        ]
        // ,
        // validations: [{
        //     type: 'presence',
        //     field: 'name',
        //     message: "Name is required"
        // }, {
        //     type: 'length',
        //     field: 'name',
        //     min: 3,
        //     max: 50,
        //     message: "Name should be between 3 and 50 characters "
        // },
        // // {
        // //     type: 'presence',
        // //     field: 'start_time',
        // //     message: "Start Time is required"
        // // },
        // {
        //     type: 'presence',
        //     field: 'vehicle_id',
        //     message: "Vehicle is required"
        // }]
    }
});
Ext.define('Parking.controller.CarController', {
    extend: 'Ext.app.Controller',

    requires: [        
        'Parking.view.MainNavigationView',   
        'Parking.view.CarPanel',    
        'Parking.util.Config',
        'Parking.store.Cars',
        'Ext.Toast'
    ],

    config: {
        refs: {
            mainNavigationView: 'mainNavigationView',
            searchBtn: '#searchForm #searchBtn',
            carDetailPanel: 'carPanel'            
        },

        control: {
            searchBtn: {
                tap: "onSearchButtonTap"
            }
        }
    },

    onSearchButtonTap: function(button, e, eOpts) {
        var form = button.up('formpanel'), // Login form
            values = form.getValues(),           
            store = Ext.getStore('carStore');
            var mainNavigationView = this.getMainNavigationView();
            if(values.registration_no && values.registration_no.length > 3){            
            var recordData = store.findRecord('registration_no', values.registration_no);
            console.log("-------");
            console.dir(recordData);
              if (recordData) {
                var html ='<div class="card">\
                    <div class="card-info">\
                        <div class="card-main">\
                            <div class="card-name">\
                                <h3>'+recordData.get("first_name")+' '+recordData.get("last_name")+'</h3>\
                            </div>\
                            <div>\
                              <span class="card-label card-label-gray">'+recordData.get("registration_no")+'</span>\
                                <span class="card-label card-label-blue">'+recordData.get("vehicle_type")+'</span>\
                                <span class="card-control">\
                                    <span class="card-mobile">'+recordData.get("mobile_no")+'</span>\
                                    <a href="tel:'+recordData.get('mobile_no')+'class="card-button card-button-blue">Call</a>\
                                    <a href="#" class="card-button card-button-red">Sms</a>\
                                </span>\
                            </div>\
                            <div>\
                            </div>\
                        </div>\
                    </div>\
                  </div>';

                var carDetailPanel = Ext.create('Parking.view.CarPanel',{
                    html: html,
                    itemId: 'carLabel'
                });
                 console.dir(carDetailPanel);
                 // carPanel.setHtml(html);
                 mainNavigationView.push(carDetailPanel); 
             }else {
                Ext.toast("No Record Found", 1000);
             }
         } else{
            Ext.Msg.alert("Please Enter Some Value");
         }
    },

   
    
    launch: function(app) {
        // var carDetailPanel= this.getCarDetailPanel();
        // console.dir(carDetailPanel);
    }
});
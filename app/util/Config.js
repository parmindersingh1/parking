
Ext.define('Parking.util.Config', {
    singleton: true,
    alternateClassName: ['Config'],

    config: {
        env: 'dev',
        app: {
            messageText: 'My message text.'
        },
        services: {
            timeout: 5000
        },
        url: {}
    },
    constructor: function() {
        if (this.config.env == null) {
            this.config.url.GPSTRACKER_LOGIN = '/test-data/login_success.json';
            this.config.url.GPSTRACKER_LOGOUT = '/test-data/logout.json';
            this.config.url.GPSTRACKER_SIGNUP = '/test-data/registeration_success.json';
            this.config.url.GPSTRACKER_CHANGEPASSWORD = '/test-data/change_password.json';
            this.config.url.GPSTRACKER_EDIT = '/test-data/accept_request.json';
            this.config.url.GPSTRACKER_FORGOTPASSWORD = '/test-data/accept_request.json';
            this.config.url.GPSTRACKER_USERVEHICLES = '/test-data/user_vehicles.json';  
            this.config.url.GPSTRACKER_CREATEDEVICE = '/test-data/device_success.json';
            this.config.url.GPSTRACKER_CREATEROUTE = '/test-data/route_success.json';
            this.config.url.GPSTRACKER_CREATESTOP = '/test-data/stop_success.json';
            this.config.url.GPSTRACKER_ROUTES = '/test-data/user_routes.json';
            this.config.url.GPSTRACKER_VEHICLES = '/test-data/user_vehicles.json';
            this.config.url.GPSTRACKER_CREATETRACK = '/test-data/track_success.json';
        } else if (this.config.env == 'dev') {
            
            this.config.url.GPSTRACKER_CARS = '/test-data/cars.json'
        } 
        else {
            this.config.url.GPSTRACKER_LOGIN = '/test-data/login_success.json';
            this.config.url.GPSTRACKER_LOGOUT = '/test-data/logout.json';
            this.config.url.GPSTRACKER_SIGNUP = '/test-data/registeration_success.json';
            this.config.url.GPSTRACKER_CHANGEPASSWORD = '/test-data/change_password.json';
            this.config.url.GPSTRACKER_EDIT = '/test-data/accept_request.json';
            this.config.url.GPSTRACKER_FORGOTPASSWORD = '/test-data/accept_request.json';
            this.config.url.GPSTRACKER_USERVEHICLES = '/test-data/user_vehicles.json'; 
            this.config.url.GPSTRACKER_CREATEDEVICE = '/test-data/device_success.json';
            this.config.url.GPSTRACKER_CREATEROUTE = '/test-data/route_success.json'; 
            this.config.url.GPSTRACKER_CREATESTOP = '/test-data/stop_success.json'; 
            this.config.url.GPSTRACKER_ROUTES = '/test-data/user_routes.json';   
            this.config.url.GPSTRACKER_VEHICLES = '/test-data/user_vehicles.json'; 
            this.config.url.GPSTRACKER_CREATETRACK = '/test-data/track_success.json';      
        }
    
        return this.config;
    }
});
/**
 * Created with JetBrains PhpStorm.
 * User: Андрей
 * Date: 30.01.13
 * Time: 19:08
 * To change this template use File | Settings | File Templates.
 */

Ext.define('App.controller.MainMenu', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'features',
            selector: '[itemId=button.Features]'
        }
    ],
    init: function(application) {
        this.control({
            "[itemId=button.Features]": {
                click: function() { this.featuresAction(application); }
            }
        });
    },
    onLaunch: function() {

    },
    featuresAction: function(app) {
        app.getController('Features').openWindow();
    }

});

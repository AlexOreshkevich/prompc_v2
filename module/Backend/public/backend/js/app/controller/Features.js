/**
 * Created with JetBrains PhpStorm.
 * User: Андрей
 * Date: 30.01.13
 * Time: 16:44
 * To change this template use File | Settings | File Templates.
 */

Ext.define('App.controller.Features', {
    extend: 'Ext.app.Controller',
    mixins: {
        //editable: 'App.controller.mixin.EditableTree'
    },
    requires: [
      //  'App.view.form.Product'
    ],
    stores: [

    ],
    views: [
        'App.view.window.Features'
    ],

    refs: [
        {
            ref: 'window',
            selector: '#Features',
            autoCreate: true,
            xtype: 'featureswindow' // You MUST specify this otherwise autoCreate will not know what to create!
        }
    ],

    onLaunch: function() {

        //this.formClass = 'App.view.form.FeatureDictionary';
        //this.mixins.editable.init.call(this);
    },
    openWindow: function() {
        this.getWindow().show();
    }

});

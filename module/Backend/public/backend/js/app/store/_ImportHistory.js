/*
 * File: js/app/store/ImportHistory.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('App.store.ImportHistory', {
    extend: 'Ext.data.Store',

    requires: [
        'App.model.ImportHistory'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            sortOnLoad: false,
            storeId: 'ImportHistory',
            model: 'App.model.ImportHistory',
            groupField: 'product_uid',
            proxy: {
                type: 'ajax',
                url: '/zadmin/index/import-history',
                reader: {
                    type: 'json'
                }
            }
        }, cfg)]);
    }
});
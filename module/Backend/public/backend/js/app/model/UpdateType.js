/*
 * File: js/app/model/UpdateType.js
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

Ext.define('App.model.UpdateType', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'uid'
        },
        {
            name: 'title'
        },
        {
            name: 'code_column'
        },
        {
            name: 'price_column'
        },
        {
            name: 'stock_column'
        },
        {
            name: 'code_intval'
        },
        {
            name: 'price_currency'
        },
        {
            name: 'price_coefficient'
        },
        {
            name: 'stock_replace_pairs',
            useNull: true
        },
        {
            name: 'stock_cutoff_regex',
            useNull: true
        },
        {
            name: 'supplier'
        },
        {
            name: 'data_type'
        }
    ]
});
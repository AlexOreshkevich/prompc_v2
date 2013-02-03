/**
 * @Features
 *
 * 1. Adds waiting for loading any stores before loadRecord(). It's necessary when you have associated data in your model.
 *
 */
Ext.define('App.view.form.BaseForm', {
    extend: 'Ext.form.Panel',
    loadRecord: function() {
        console.log('loadRecord() overridden');
        this.callParent(arguments);
    }
});
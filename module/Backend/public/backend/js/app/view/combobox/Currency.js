/**
 * Created with JetBrains PhpStorm.
 * User: Андрей
 * Date: 30.01.13
 * Time: 4:05
 * To change this template use File | Settings | File Templates.
 */
Ext.define('App.view.combobox.Currency', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.comboCurrency',
    displayField: 'code',
    valueField: 'id',
    queryMode: 'local',
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
              store: Ext.create('App.store.collection.Currency')
        });
        me.callParent(arguments);
    }

});
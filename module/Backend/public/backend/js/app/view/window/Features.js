Ext.define('App.view.window.Features', {
    extend: 'Ext.window.Window',
    id: 'Features',
    alias: 'widget.featureswindow',
    title: 'Характеристики',
    modal: true,
    initComponent: function() {
        var me = this;
        Ext.applyIf({
            title: 'Характеристики'

        }, me);
        me.callParent(arguments);
    }
});
/**
 * Created with JetBrains PhpStorm.
 * User: Андрей
 * Date: 30.01.13
 * Time: 16:46
 * To change this template use File | Settings | File Templates.
 */
Ext.define('App.view.tree.FeatureFolder', {
    extend: 'App.view.tree.Abstract',
    alias: 'widget.featurefoldertree',

    requires: [
        'App.store.tree.FeatureFolder'
    ],

    itemId: 'tree.FeatureFolder',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            title: 'Категории',
            store: App.store.tree.Factory.create('App.store.tree.FeatureFolder')
        });

        me.callParent(arguments);
    }

});
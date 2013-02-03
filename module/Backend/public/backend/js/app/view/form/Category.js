/**
 * Created with JetBrains PhpStorm.
 * User: Андрей
 * Date: 30.01.13
 * Time: 16:02
 * To change this template use File | Settings | File Templates.
 */
Ext.define('App.view.form.Category', {
    extend: 'Ext.form.Panel',
    itemId: 'categoryform',
    xtype: 'categoryform',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'tabpanel',
                    border: 0,
                    activeTab: 0,
                    items: [
                        {
                            xtype: 'panel',
                            border: 0,
                            padding: 10,
                            title: 'Основные свойства',
                            items: [
                                {
                                    xtype: 'textfield',
                                    name: 'title',
                                    fieldLabel: 'Название'
                                }
                            ]
                        }

                    ]
                }
            ]
        });

        me.callParent(arguments);

    }

});
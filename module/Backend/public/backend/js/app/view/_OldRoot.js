/*
 * File: js/app/view/OldRoot.js
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

Ext.define('App.view.OldRoot', {
    extend: 'Ext.container.Viewport',

    layout: {
        type: 'fit'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    layout: {
                        align: 'stretch',
                        type: 'hbox'
                    },
                    title: 'App',
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            flex: 1,
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'button',
                                    text: 'Импорт',
                                    menu: {
                                        xtype: 'menu',
                                        items: [
                                            {
                                                xtype: 'menuitem',
                                                itemId: 'productsImportBtn',
                                                text: 'Товары'
                                            },
                                            {
                                                xtype: 'menuitem',
                                                itemId: 'priceListImportBtn',
                                                text: 'Прайс-листы'
                                            },
                                            {
                                                xtype: 'menuseparator'
                                            },
                                            {
                                                xtype: 'menuitem',
                                                itemId: 'importLogBtn',
                                                text: 'Журнал импорта'
                                            },
                                            {
                                                xtype: 'menuitem',
                                                itemId: 'updateOnSiteButton',
                                                text: 'Пересчитать цены и остатки на сайте'
                                            }
                                        ]
                                    }
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
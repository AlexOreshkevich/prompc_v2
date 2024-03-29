/*
 * File: js/app/view/Root.js
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

Ext.define('App.view.Root', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.root',

    requires: [
        'App.view.tree.Category'
    ],

    id: 'root',
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
                    type: 'fit'
                },
                title: 'App',

                items: [
                {
                    xtype: 'container',
                    layout: {
                        align: 'stretch',
                        type: 'hbox'
                    },
                    items: [
                        { xtype: 'categorytree', flex: 1 },
                        Ext.create('App.view.grid.Product', {flex: 4})
                    ]
                }
                ],
                dockedItems: [
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'top',
                    itemId: 'menu.Root',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Характеристики',
                            itemId: 'button.Features'
                        },
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
                }]
            }]

        });

        me.callParent(arguments);
    }

});
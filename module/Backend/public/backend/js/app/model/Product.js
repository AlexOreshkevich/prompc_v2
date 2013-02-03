/*
 * File: js/app/model/Product.js
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

Ext.define('App.model.Product', {
    extend: 'Ext.data.Model',

    uses: [
        'App.model.FeatureValue',
        'App.model.ProductCategories'
    ],

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'code',
            type: 'string'
        },
        {
            name: 'short_description'
        },
        {
            name: 'full_description'
        },
        {
            name: 'seo_name'
        },
        {
            name: 'current_stock'
        },
        {
            name: 'current_price'
        },
        {
            name: 'currentCurrencyId'
        },
        {
            name: 'page_title'
        },
        {
            name: 'meta_description'
        },
        {
            name: 'meta_keywords'
        },
        {
            name: 'preview_filename'
        },
        {
            name: 'price_updated'
        },
        {
            name: 'stock_updated'
        },
        {
            name: 'categoryId'
        }
    ],

    proxy: {
        type: 'direct',
        extraParams: {
            entity: 'Application\\Entity\\Product'
        },
        directFn: Direct.Single.read,
        paramOrder: [
            'entity',
            'id'
        ]
    },

    hasMany: [
        {
            model: 'App.model.FeatureValue'
        },
        {
            model: 'App.model.ProductCategories'
        }
    ],
    belongsTo: [
        {
            autoLoad: true,
            model: 'App.model.Category',
            foreignKey: 'categoryId',
            getterName: 'getCategory',
            setterName: 'setCategory',
            associationKey: 'category', // это имя, под котором в ответе сервера будет идти категория
            instanceName: 'category', // не знаю, зачем это
            name: 'category'
        }
    ]
});
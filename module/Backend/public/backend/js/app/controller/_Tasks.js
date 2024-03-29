/*
 * File: js/app/controller/Tasks.js
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

Ext.define('App.controller.Tasks', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'featuresWindow',
            selector: '#featuresWindow'
        },
        {
            ref: 'featureWindow',
            selector: '#featureWindow'
        },
        {
            ref: 'featureGroupWindow',
            selector: '#featureGroupWindow'
        },
        {
            ref: 'categoryFeaturesWindow',
            selector: '#categoryFeaturesWindow'
        }
    ],

    onFeaturesButtonClick: function(button, e, options) {
        Ext.create('App.store.FeaturesStore');
        Ext.create("App.view.FeaturesWindow");
        Ext.getCmp("featuresWindow").show();
    },

    onNewFeatureGroupButtonClick: function(button, e, options) {
        Ext.create("App.view.FeatureGroupWindow");
        Ext.getCmp("featureGroupWindow").show();

        var selection = Ext.getCmp("categoryTree").getSelectionModel().getSelection();
        var form = Ext.getCmp("featureGroupForm");
        Ext.getCmp("featureGroupForm").form.setValues({pid: selection[0].data.uid});

    },

    onImportLogButtonClick: function(button, e, options) {
        Ext.create('App.view.ImportLogWindow').show();
    },

    onUpdateOnSiteButtonClick: function(button, e, options) {
        Ext.getCmp('root').setLoading(true);
        Ext.Ajax.request({
            url: "/zadmin/import/update-stock-and-prices",
            success: function(response) {
                Ext.getCmp('root').setLoading(false);
                var result = Ext.JSON.decode(response.responseText);
                if(result.success) {
                    Ext.Msg.alert("Готово!", "Цены и остатки на сайте успешно обновлены.");
                } else {
                    Ext.Msg.alert("Ошибка", "При обновлении цен и остатков на сайте произошла ошибка!");
                }

            },
            failure: function() {
                Ext.getCmp('root').setLoading(false);
                Ext.Msg.alert("Ошибка", "Ошибка запроса!");

            }
        });
    },

    onNewFeatureButtonClick: function(button, e, options) {
        Ext.create("App.view.FeatureWindow");

        var pid = Ext.getCmp("categoryTree").getSelectionModel().getSelection()[0].data.uid;
        var selectedFeature = Ext.getCmp("allFeaturesTreePanel").getSelectionModel().getSelection()[0];
        var group;
        if(selectedFeature) {
            if(selectedFeature.data.leaf) {
                group = selectedFeature.parentNode.data.uid;
            } else {
                group = selectedFeature.data.uid;
            }
        }

        var store = Ext.getStore("FeatureGroupsStore");
        store.getProxy().extraParams.pid = pid;
        store.reload();

        Ext.getCmp("FeatureVariantsGrid").store.removeAll();

        Ext.getCmp("featureForm").form.setValues({pid: pid, group: group});

        /*
        var group = this.getTreeLastParent(Ext.getCmp("allFeaturesTreePanel"));
        Ext.getCmp("featureForm").form.setValues( {group: group});
        */

        Ext.getCmp("featureWindow").show();
    },

    onCategoryFeaturesWindowShow: function(abstractcomponent, options) {
        console.log("Category Features window opened");



    },

    onProductsImportButtonClick: function(button, e, options) {
        Ext.create('App.view.ProductImportWindow').show();

    },

    onPriceListImportButtonClick: function(button, e, options) {
        Ext.create('App.view.PriceListImportWindow').show();
    },

    onEmptyProductsBtnClick: function(button, e, options) {
        console.log('empty feature');

    },

    getTreeLastParent: function(treepanel) {
        var node = treepanel.getSelectionModel().getSelection()[0];

        if(node !== typeof Object) {
            return false;
        }

        for(var i=0;i<node.getDepth();i++) {
            node = node.parentNode;
        }

        return node;
    },

    init: function(application) {
        this.control({
            "#features-btn": {
                click: this.onFeaturesButtonClick
            },
            "#newFeatureGroup-btn": {
                click: this.onNewFeatureGroupButtonClick
            },
            "[itemId=importLogBtn]": {
                click: this.onImportLogButtonClick
            },
            "[itemId=updateOnSiteButton]": {
                click: this.onUpdateOnSiteButtonClick
            },
            "#newFeature-btn": {
                click: this.onNewFeatureButtonClick
            },
            "#categoryFeaturesWindow": {
                show: this.onCategoryFeaturesWindowShow
            },
            "[itemId=productsImportBtn]": {
                click: this.onProductsImportButtonClick
            },
            "[itemId=priceListImportBtn]": {
                click: this.onPriceListImportButtonClick
            },
            "#featureWindow [itemId=emptyProductsBtn]": {
                click: this.onEmptyProductsBtnClick
            }
        });
    }

});

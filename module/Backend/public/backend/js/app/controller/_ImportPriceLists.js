/*
 * File: js/app/controller/ImportPriceLists.js
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

Ext.define('App.controller.ImportPriceLists', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'importWindow',
            selector: '#priceListImportWindow'
        },
        {
            ref: 'root',
            selector: '#root'
        },
        {
            ref: 'tmplForm',
            selector: '[itemId=tmplForm]'
        },
        {
            ref: 'uploadForm',
            selector: '[itemId=uploadForm]'
        }
    ],

    onDeleteBtnClick: function(button, e, options) {
        this.getTmplForm().getForm().setValues({deleted: 1});
        this.saveTemplate();
    },

    onPriceListImportWindowRender: function(abstractcomponent, options) {

    },

    onFileChange: function(filefield, value, options) {
        this.priceListUploaded = false;
        this.getUploadForm().getForm().setValues({ without_file: 0 });
    },

    onTemplateChange: function(field, newValue, oldValue, options) {

        this.getTmplForm().getForm().setValues({uid: newValue});

        if(newValue > 0) {
            this.getTmplForm().setDisabled(false);
            this.getTmplForm().loadRecord(field.valueModels[0]);


            this.getImportWindow().queryById('saveBtn').setDisabled(false);
            this.getImportWindow().queryById('cancelBtn').setDisabled(false);
            this.getImportWindow().queryById('addBtn').setDisabled(false);
        }


    },

    onTmplFormChange: function(target) {
        this.getImportWindow().queryById('nextBtn').setDisabled(false);
        this.getImportWindow().queryById('saveBtn').setDisabled(false);
        this.getImportWindow().queryById('cancelBtn').setDisabled(false);
        this.getImportWindow().queryById('addBtn').setDisabled(true);


    },

    onAddButtonClick: function(button, e, options) {
        button.setDisabled(true);

        this.getImportWindow().queryById('uploadTemplate').select();

        // не работает - предыдущий select срабатывает позже и активирует кнопку заново
        //this.getImportWindow().queryById('nextBtn').setDisabled(true);

        this.getImportWindow().queryById('uploadTemplate').setDisabled(true);
        this.getTmplForm().setDisabled(false);
        this.getTmplForm().getForm().reset();
        this.getTmplForm().getForm().setValues({ title: 'Новый шаблон'});

    },

    onNextButtonClick: function(button, e, options) {

        if(this.priceListUploaded) {
            this.getUploadForm().queryById('filefield').setDisabled(true);
            this.getUploadForm().getForm().setValues({ without_file: 1 });
        } else {
            this.priceListUploaded = true;
        }


        if(this.getUploadForm().getForm().isValid() && this.getTmplForm().getForm().isValid()) {
            this.getImportWindow().setLoading(true);
            this.getUploadForm().submit({ 
                params: this.getTmplForm().getForm().getFieldValues(),
                success: Ext.bind(function(form, action) {
                    var store = Ext.create('Ext.data.ArrayStore', {
                        fields: [
                        { name: 'uid', type: 'string'},
                        { name: 'external_code', type: 'string'},
                        { name: 'name', type: 'string'},
                        { name: 'price_divisor', type: 'float'},
                        { name: 'unit_factor', type: 'float'},
                        { name: 'price_markup', type: 'float'},
                        { name: 'current_price', type: 'float'},
                        { name: 'current_currency', type: 'number'},
                        { name: 'current_stock', type: 'float'},
                        { name: 'row_price', type: 'string'},
                        { name: 'price', type: 'float'},
                        { name: 'row_stock', type: 'string'},
                        { name: 'stock', type: 'float'},
                        { name: 'sd_uid', type: 'string'}
                        ],
                        data: action.result.data
                    });

                    var price_currency = this.getTmplForm().getForm().getFieldValues().price_currency;

                    var grid =  {
                        xtype: 'gridpanel',
                        flex: 1,
                        border: 0,
                        itemId: 'previewGrid',
                        title: '',
                        store: store,
                        viewConfig: {

                        },
                        layout: {
                            // align: 'stretch',
                            type: 'fit'
                        },
                        columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'external_code',
                            flex: 2,
                            text: 'Артикул'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'name',
                            flex: 4,
                            text: 'Товар'
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                //console.log(record.data.current_currency);
                                var result = Ext.util.Format.number(value, '0,000.00');
                                if(record.data.current_currency && Ext.Currencies[record.data.current_currency].after==="1") {
                                    result += Ext.Currencies[record.data.current_currency].symbol;
                                }
                                return result;
                            },
                            dataIndex: 'current_price',
                            flex: 2,
                            text: 'Цена на сайте',
                            hidden: !this.getTmplForm().getForm().getFieldValues().price_column
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: Ext.bind(function(value, metaData, record, rowIndex, colIndex, store, view) {
                                metaData.tdAttr = 'title="'+record.data.row_price+'"';

                                var result = Ext.util.Format.number(value, '0,000.00');

                                if(price_currency && Ext.Currencies[price_currency]) {
                                    if(Ext.Currencies[price_currency].after==="1") {
                                        result += Ext.Currencies[price_currency].symbol;
                                    } else {
                                        result = Ext.Currencies[price_currency].symbol + result;
                                    }
                                }
                                return result;
                            }, this),
                            dataIndex: 'price',
                            flex: 2,
                            text: 'Закупка',
                            hidden: !this.getTmplForm().getForm().getFieldValues().price_column
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: Ext.bind(function(value, metaData, record, rowIndex, colIndex, store, view) {

                                var result = Ext.util.Format.number(record.data.price/(1-record.data.price_markup/100), '0,000.00');
                                if(price_currency && Ext.Currencies[price_currency]) {
                                    if(Ext.Currencies[price_currency].after==="1") {
                                        result += Ext.Currencies[price_currency].symbol;
                                    } else {
                                        result = Ext.Currencies[price_currency].symbol + result;
                                    }
                                }
                                return result;
                            }, this),
                            //dataIndex: 'price',
                            flex: 2,
                            text: 'Продажа',
                            hidden: !this.getTmplForm().getForm().getFieldValues().price_column
                        },                    
                        {
                            xtype: 'numbercolumn',
                            dataIndex: 'price_markup',
                            flex: 1,
                            text: 'Маржа',
                            tooltip: 'Маржа, %',
                            tooltipType: 'title',
                            hidden: !this.getTmplForm().getForm().getFieldValues().price_column
                        },
                        {
                            xtype: 'numbercolumn',
                            dataIndex: 'price_divisor',
                            flex: 1,
                            text: 'ДелЦ',
                            tooltip: 'Делитель цены',
                            tooltipType: 'title',
                            hidden: !this.getTmplForm().getForm().getFieldValues().price_column
                        },
                        {
                            xtype: 'numbercolumn',
                            dataIndex: 'unit_factor',
                            flex: 1,
                            text: 'МнКол',
                            tooltip: 'Множитель количества',
                            tooltipType: 'title',
                            hidden: !this.getTmplForm().getForm().getFieldValues().stock_column
                        },
                        {
                            xtype: 'numbercolumn',
                            dataIndex: 'current_stock',
                            flex: 2,
                            text: 'Старый остаток',
                            hidden: !this.getTmplForm().getForm().getFieldValues().stock_column
                        },
                        {
                            xtype: 'numbercolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                metaData.tdAttr = 'title="'+record.data.row_stock+'"';

                                return Ext.util.Format.number(value, '0,000.00');
                            },
                            dataIndex: 'stock',
                            flex: 2,
                            text: 'Новый остаток',
                            hidden: !this.getTmplForm().getForm().getFieldValues().stock_column
                        }
                        ]
                    };

                    this.getImportWindow().queryById('step2').add(grid);

                    this.getImportWindow().setLoading(false);
                    this.getImportWindow().queryById('step1').hide();
                    this.getImportWindow().queryById('step2').show();
                    //console.log(action);
                }, this),

                failure: Ext.bind(function(form, action) {
                    this.getImportWindow().setLoading(false);
                    Ext.MessageBox.alert('Ошибка', 'Невозможно загрузить файл');
                }, this)
            });

        } else {
            Ext.MessageBox.alert('Ошибка', 'Поля формы заполнены неверно');
        }

    },

    onPrevBtnClick: function(button, e, options) {
        this.getImportWindow().queryById('step2').hide();
        this.getImportWindow().queryById('step1').show();
        this.getImportWindow().queryById('filefield').setDisabled(false);
    },

    onLoadButtonClick: function(button, e, options) {
        Ext.Ajax.request({
            url: '/zadmin/import/do?m=PriceList',
            success: Ext.bind(function(response) {

                this.getImportWindow().queryById('step2').hide();
                this.getImportWindow().queryById('step1').show();
                this.getTmplForm().getForm().reset();
                this.getUploadForm().getForm().reset();
                var result = Ext.JSON.decode(response.responseText);
                if(result.success) {
                    Ext.Msg.alert("Готово!", "Данные успешно загружены");
                } else {
                    Ext.Msg.alert("Ошибка!", "При загрузке произошла ошибка");
                }
            }, this),
            failure: function(response) {
                this.getImportWindow().queryById('step2').hide();
                this.getImportWindow().queryById('step1').show();
                this.getTmplForm().getForm().reset();
                this.getUploadForm().getForm().reset();        
                Ext.Msg.alert("Ошибка!", "Невозможно загрузить данные");
            }
        });
    },

    onSaveBtnClick: function(button, e, options) {
        this.saveTemplate();
    },

    onCancelBtnClick: function(button, e, options) {
        this.getTmplForm().getForm().reset();
        this.getTmplForm().setDisabled(true);
        this.getImportWindow().queryById('uploadTemplate').setDisabled(false);
        this.getImportWindow().queryById('uploadTemplate').select();
        this.getImportWindow().queryById('addBtn').setDisabled(false);
        this.getImportWindow().queryById('saveBtn').setDisabled(true);
        this.getImportWindow().queryById('cancelBtn').setDisabled(true);

    },

    saveTemplate: function() {
        if(this.getTmplForm().getForm().isValid()) {
            this.getTmplForm().submit({ 
                success: Ext.bind(function(form, action) {
                    var uploadTemplate = this.getImportWindow().queryById('uploadTemplate');
                    uploadTemplate.getStore().load({
                        callback: function() {
                            if(!this.getTmplForm().getForm().getFieldValues().deleted) {
                                this.getImportWindow().queryById('uploadTemplate').select(action.result.key);
                            } else {
                                this.getImportWindow().queryById('uploadTemplate').select();
                                this.getTmplForm().getForm().reset();
                                this.getTmplForm().setDisabled(true);
                            }
                            this.getImportWindow().queryById('uploadTemplate').setDisabled(false);
                            this.getTmplForm().queryById('saveBtn').setDisabled(true);
                            this.getTmplForm().queryById('cancelBtn').setDisabled(true);
                            this.getUploadForm().queryById('addBtn').setDisabled(false);                    
                        },
                        scope: this
                    });
                }, this)        
            });
        }
    },

    init: function(application) {
        this.control({
            "#priceListImportWindow [itemId=deleteBtn]": {
                click: this.onDeleteBtnClick
            },
            "#priceListImportWindow": {
                render: this.onPriceListImportWindowRender
            },
            "#priceListImportWindow #filefield": {
                change: this.onFileChange
            },
            "#priceListImportWindow [itemId=uploadTemplate]": {
                change: this.onTemplateChange
            },
            "#priceListImportWindow [itemId=tmplForm] [fieldCls=x-form-field]": {
                change: this.onTmplFormChange
            },
            "#priceListImportWindow #addBtn": {
                click: this.onAddButtonClick
            },
            "#priceListImportWindow #nextBtn": {
                click: this.onNextButtonClick
            },
            "#priceListImportWindow #prevBtn": {
                click: this.onPrevBtnClick
            },
            "#priceListImportWindow [itemId=loadBtn]": {
                click: this.onLoadButtonClick
            },
            "#priceListImportWindow [itemId=saveBtn]": {
                click: this.onSaveBtnClick
            },
            "#priceListImportWindow [itemId=cancelBtn]": {
                click: this.onCancelBtnClick
            }
        });
    }

});
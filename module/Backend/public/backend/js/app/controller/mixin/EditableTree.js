/**
 * See description for App.controller.mixin.EditableTree
 *
 *
 */
Ext.define('App.controller.mixin.EditableTree', {
    extend: 'Ext.Base',
    requires: [ 'App.view.window.Form' ],

    init: function() {
        this.getTree().on({
            scope: this,
            beforeitemdblclick: function(tabpanel, rec, item, index, e, options) {
                //e.stopEvent();
                this.onEditAction();
                return false;
            },
             itemcontextmenu : function(view, rec, node, index, e) {
                e.stopEvent();
                this.contextMenu().showAt(e.getXY());
                return false;
            },
            containercontextmenu: function(tabelpanel, e, options) {
                e.stopEvent();
                return false;
            }
        });

    },

    getWindow: function() {
        if(this.window === undefined) {
            //this.form = App.view.form.Factory.create(this.formClass);
            this.window = Ext.create('App.view.window.Form', {
                items: Ext.create(this.formClass)
            });
            this.window.on('destroy', function() {
                delete this.window;
            }, this);
        }

        return this.window;
    },

    onEditAction: function() {
        var model = this.getTree().getStore().model;
        model.load(this.getTree().getSelectionModel().getSelection()[0].data.id,
            {
                scope: this,
                success: function(result) {
                    var form = this.getWindow().query('form')[0];
                    Ext.apply(form, {
                        api: model.getProxy().api
                    });
                    console.log(form);
                    form.loadRecord(result);
                    this.getWindow().setTitle(result.getId());
                    this.getWindow().show();
                },
                failure: function() {

                }
            });

    },

    onDeleteAction: function() {

    },

    onAddAction: function(where) {

    },

    contextMenu: function() {
        var addBeforeAction = Ext.create('Ext.Action', {
            text: 'Добавить перед...',
            disabled: false,
            handler: function(widget, event) { this.onAddAction('before'); }
        });
        var addAfterAction = Ext.create('Ext.Action', {
            text: 'Добавить после...',
            disabled: false,
            handler: function(widget, event) { this.onAddAction('after'); }
        });
        var addInsideAction = Ext.create('Ext.Action', {
            text: 'Добавить внутрь...',
            disabled: false,
            handler: function(widget, event) { this.onAddAction('inside');}
        });
        var editAction = Ext.create('Ext.Action', {
            text: 'Свойства',
            disabled: false,
            handler: function(widget, event) { this.onEditAction(); },
            scope: this
        });
        var deleteAction = Ext.create('Ext.Action', {
            text: 'Удалить',
            disabled: false,
            handler: function(widget, event) { this.onDeleteAction(); },
            scope: this
        });
        return Ext.create('Ext.menu.Menu', {
            items: [
                addBeforeAction,
                addInsideAction,
                addAfterAction,
                {
                    xtype: 'menuseparator'
                },
                editAction,
                {
                    xtype: 'menuseparator'
                },
                deleteAction
            ]
        });
    }

});
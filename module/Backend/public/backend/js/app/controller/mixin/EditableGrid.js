/**
 * @Features
 * 1. Context menu for rows with standard menu.
 * 2. On itemdblclick shows form, defined in {$this.formClass} and loads data for editing.
 *
 * @Usage
 * 1. Define 'window' ref in controller like this (or implement getWindow() method directly):
 *    refs: [
 *       {
 *        ref: 'grid',
 *        selector: '[itemId=grid.Product]'
 *
 *       }
 *    ]
 *
 *   2. Set {$this.formClass}
 *   3. Add this line to onLaunch():
 *      this.mixins.editable.init.call(this);
 *
 */

Ext.define('App.controller.mixin.EditableGrid', {
    extend: 'Ext.Base',
    requires: [ 'App.view.window.Form' ],

    init: function() {
        this.getGrid().on({
            scope: this,
            itemdblclick: this.showWindow,
            itemcontextmenu: function(view, rec, node, index, e) {
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

        return this.form;
    },

    showWindow: function() {
        this.getGrid().getStore().model.load(this.getGrid().getSelectionModel().getSelection()[0].data.id, 
        {
            scope: this,
            success: function(result) {
                this.getWindow().query('form')[0].loadRecord(result);
                this.getWindow().setTitle(result.getId());
                this.getWindow().show();
            },
            failure: function() {

            }
        });

    },

    contextMenu: function() {
        var oneAction = Ext.create('Ext.Action', {
            //icon   : '../shared/icons/fam/delete.gif',  // Use a URL in the icon config
            text: 'Action 1',
            disabled: false,
            handler: function(widget, event) {

            }
        });
        var twoAction = Ext.create('Ext.Action', {
            iconCls: 'buy-button',
            text: 'Action2',
            disabled: false,
            handler: function(widget, event) {

            }
        });
        return Ext.create('Ext.menu.Menu', {
            items: [
                oneAction,
                twoAction
            ]
        });
    }

});
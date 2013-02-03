Ext.define('App.view.window.Form', {
    extend: 'Ext.window.Window',
    modal: true,

    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            dockedItems:[
                {
                    xtype:'toolbar',
                    dock:'bottom',
                    items:[
                        {
                            xtype:'tbfill'
                        },
                        {
                            xtype:'button',
                            text:'Сохранить',
                            itemId:'button.Save',
                            handler: function() {
                                me.down('form').submit();

                            }
                        },
                        {
                            xtype:'button',
                            text:'Отмена',
                            itemId:'button.Cancel',
                            handler: function() {
                                me.close()
                            }
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);

        var form = me.down('form');
        Ext.apply(form, {
            border: 0
        });
    }
});
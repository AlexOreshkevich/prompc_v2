/**
 * This mixin adds toolbar with Save and Cancel buttons
 */
Ext.define('App.view.mixin.Saveable', {
    extend:'Ext.Base',

    init: function () {
        Ext.apply(this, {
            border:0,
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
                            itemId:'button.Save'
                        },
                        {
                            xtype:'button',
                            text:'Отмена',
                            itemId:'button.Cancel'
                        }
                    ]
                }
            ]
        });
    }

});

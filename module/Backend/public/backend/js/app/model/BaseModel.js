Ext.define('App.model.BaseModel', {
    extend: 'Ext.data.Model',
//    constructor: function() {
//        var me = this;
//        me.callParent(arguments);
//        Ext.applyIf(me, {
//            proxy: {
//                type: 'direct',
//                api: {
//                    create: Direct.Single.create,
//                    read: Direct.Single.read,
//                    update: Direct.Single.update,
//                    destroy: Direct.Single.destroy
//                },
//                paramOrder: [
//                    'entity',
//                    'id'
//                ]
//            }
//        });
    proxy: {
        type:'direct',
        api:{
            create: Direct.Single.create,
            read: Direct.Single.read,
            update: Direct.Single.update,
            destroy: Direct.Single.destroy,
            submit: Direct.Single.update
        },
        paramOrder:[
            'entity',
            'id'
        ]
    }


});

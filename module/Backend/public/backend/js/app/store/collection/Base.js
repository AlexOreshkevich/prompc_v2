Ext.define('App.store.collection.Base', {
    extend: 'Ext.data.Store',

    constructor: function() {
        if(undefined === this.modelClass) {
            throw 'App.store.collection.Base: You must specify modelClass';
        }
        if(undefined === this.entity) {
            throw 'App.store.collection.Base: You must specify entity';
        }
        var me = this;
        Ext.applyIf(this, {
            model: me.modelClass,
            proxy: {
                type: 'direct',
                directFn: Direct.Collection.read,
                extraParams: {
                    entity: me.entity
                },
                paramOrder: [
                    'entity',
                    'params'
                ],
                reader: {
                    type: 'json'
                }}
        });
        me.callParent(arguments);
    }
});
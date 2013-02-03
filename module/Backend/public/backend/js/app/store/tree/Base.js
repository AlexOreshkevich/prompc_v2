Ext.define('App.store.tree.Base', {
    extend: 'Ext.data.TreeStore',

    constructor: function() {
        if(undefined === this.modelClass) {
            throw 'App.store.tree.Base: You must specify modelClass';
        }
        if(undefined === this.entity) {
            throw 'App.store.tree.Base: You must specify entity';
        }
        var me = this;
        Ext.applyIf(this, {
            model: me.modelClass,
            proxy: {
                type: 'direct',
                directFn: Direct.Tree.read,
                extraParams: {
                    entity: me.entity
                },
                paramOrder: [
                    'entity',
                    'id'
                ],
                reader: {
                    type: 'json'
                }}
        });
        me.callParent(arguments);
    }
});
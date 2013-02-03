/**
 * @deprecated Use Ext.create(formClass) instead
 */
Ext.define('App.view.form.Factory', {

    extend: 'Ext.Base',

    statics: {

        create: function(formClass) {

            /** Преобразуем строковое имя класса в объект. Приходится извращаться из-за пространства имен, иначе можно было бы просто:
            *   from = window[fromClass]
            *   TODO: Вынести в отдельный метод.
            **/
            /*
            var prev = window;
            var form;
            formClass.split('.').forEach(function(i) {
            prev = prev[i];
            form = prev;
            }, this);

            if(form === undefined) {
            throw 'No such form class!';
            }


            var items;

            if(form.tabs) {
            var tabpanel = {
            xtype: 'tabpanel',
            activeTab: 0,
            items: []
            };
            form.tabs.forEach(function(tab) {
            tabpanel.items.push({
            title: tab.title,
            xtype: 'panel',
            items: App.view.form.Factory.createFields(tab.fields)
            });
            });
            console.log(tabpanel);
            items = tabpanel;
            } else {
            items = App.view.form.Factory.createFields(form.fields);
            }*/

            var form = Ext.create(formClass, { border: 0});

            return Ext.create('Ext.Window', {
                modal: true,
//                dockedItems: [
//                    {
//                        xtype: 'toolbar',
//                        dock: 'bottom',
//                        items: [
//                            {
//                                xtype: 'tbfill'
//                            },
//                            {
//                                xtype: 'button',
//                                text: 'Сохранить',
//                                itemId: 'button.Save'
//                            },
//                            {
//                                xtype: 'button',
//                                text: 'Отмена',
//                                itemId: 'button.Cancel'
//                            }
//                        ]
//                    }
//                ],
                layout: {
                    type: 'fit'
                },
                title: formClass,
                items: [ form ]
            });
        }
    }

});
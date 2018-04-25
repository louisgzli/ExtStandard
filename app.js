   /**
     * Created by Administrator on 2018/4/3 0003.
     */
    Ext.application({

        name: 'AM',

        appFolder: 'app',
        controllers: [
            'Company'
        ],
        launch: function() {
            //初始化菜单
            Ext.create("AM.view.user.Menu",{
                renderTo:Ext.get("system-name"),
            })

            console.log("launch function in app.js has been startup");
            //初始化左列表
            Ext.create("AM.view.user.ArrayGrid",{
                renderTo:Ext.get("grid-left"),
                store:"Company"
            });
            //初始化右列表
           Ext.create("AM.view.user.SelectGrid",{
                    renderTo:Ext.get("grid-right"),
                    store:"SelectStore"
            });


            //初始化按钮
            var ss = Ext.create("AM.view.user.EditButton",{
                renderTo:Ext.get("grid-center-button"),
            })

        }

    });
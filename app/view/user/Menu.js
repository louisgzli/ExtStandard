
var area =  Ext.create("Ext.menu.Menu",{
    shadow: "drop",
    allowOtherMenus: true,
    items: [
        Ext.create("Ext.menu.Item",{
            text: "城关",
            menu:Ext.create("Ext.menu.Menu",{
                items:[
                    {text:"西关"},
                    {text:"东关"},
                    {text:"南关"},
                    {text:"北关"},
                    {text:"中关"}
                ]
            })
        }),
        Ext.create("Ext.menu.Item",{
            text: "七里河",
            menu:Ext.create("Ext.menu.Menu",{
                items:[
                    {text:"西关"},
                    {text:"东关"},
                    {text:"南关"},
                    {text:"北关"},
                    {text:"中关"}
                ]
            })
        }),
        Ext.create("Ext.menu.Item",{
            text: "安宁",
            menu:Ext.create("Ext.menu.Menu",{
                items:[
                    {text:"西关"},
                    {text:"东关"},
                    {text:"南关"},
                    {text:"北关"},
                    {text:"中关"}
                ]
            })
        }),
        Ext.create("Ext.menu.Item",{
            text: "西固",
            menu:Ext.create("Ext.menu.Menu",{
                items:[
                    {text:"西关"},
                    {text:"东关"},
                    {text:"南关"},
                    {text:"北关"},
                    {text:"中关"}
                ]
            })
        }),
        Ext.create("Ext.menu.Item",{
            text: "红古",
            menu:Ext.create("Ext.menu.Menu",{
                items:[
                    {text:"西关"},
                    {text:"东关"},
                    {text:"南关"},
                    {text:"北关"},
                    {text:"中关"}
                ]
            })
        }),


    ]
})


var edit = new Ext.menu.Menu({
    shadow: "frame",
    allowOtherMenus: true,
    items: [
        Ext.create("Ext.menu.Item",{
            text: "民办",
        }),Ext.create("Ext.menu.Item",{
            text: "公办",
        }),Ext.create("Ext.menu.Item",{
            text: "公私合营",
        }),Ext.create("Ext.menu.Item",{
            text: "跨国企业",
        }),Ext.create("Ext.menu.Item",{
            text: "外企",
        }),


    ]
});
var major = new Ext.menu.Menu({
    shadow: "frame",
    allowOtherMenus: true,
    items: [
        Ext.create("Ext.menu.Item",{
            text: "计算机类",
        }),Ext.create("Ext.menu.Item",{
            text: "物理类",
        }),Ext.create("Ext.menu.Item",{
            text: "生物类",
        }),Ext.create("Ext.menu.Item",{
            text: "经济贸易类",
        }),Ext.create("Ext.menu.Item",{
            text: "矿产地质类",
        }),
    ]
});
Ext.define("AM.view.user.Menu", {
    extend:"Ext.toolbar.Toolbar",


    items:[
        {xtype:"button",
            text: "地区选择",
            menu: area
        },
        {
            text: "公司类型",
            menu: edit
        },
        {
            text:"专业类型",
            menu:major
        }
    ]

});





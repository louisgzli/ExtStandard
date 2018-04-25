var states = Ext.create('Ext.data.Store', {
    fields: ['abbr', 'name'],
    data : [
        {"abbr":"城关区", "name":"城关区"},
        {"abbr":"七里河区", "name":"七里河区"},
        {"abbr":"红古区", "name":"红古区"},
        {"abbr":"西固区", "name":"西固区"},
        {"abbr":"榆中县", "name":"榆中县"},
        {"abbr":"永登县", "name":"永登县"},
        {"abbr":"皋兰县", "name":"皋兰县"}
        //...
    ]
});

Ext.define('AM.view.user.ModifyList', {

    extend:"Ext.window.Window",
    alias:"widget.modifylist",

    width: 650,

    items:[ {
        xtype:"form",
        bodyPadding: 55,
        defaultType: 'textfield',
        layout:"anchor",
        defaults: {
            anchor: '90%',

        },

        items:[
            {fieldLabel:"公司名称",name:"company",allowBanks:false},
            {xtype:"numberfield",fieldLabel:"员工人数",name:"staff",allowBanks:false},
            {
                xtype      : 'fieldcontainer',
                fieldLabel : '公司类型',
                defaultType: 'radiofield',
                layout: "hbox",
                items: [
                    {
                        name: "type",
                        boxLabel: "国有企业",
                        inputValue: "国有企业",

                    },
                    {
                        name: "type",
                        boxLabel: "民营企业",
                        inputValue: "民营企业",

                    }

                ]
            },
            {
                xtype:"combo",
                store:states,
                fieldLabel:"地区",
                name:"area",
                queryMode: 'local',
                // displayField:"area",
                // valueField:"area",
                displayField: 'name',
                valueField: 'abbr',
                allowBanks:false,
            },

        ],

    },

    ]
})

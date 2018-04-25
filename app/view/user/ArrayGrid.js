Requires:[
    "AM.view.user.ModifyList"
]


Ext.define('AM.view.user.ArrayGrid', {
    extend: 'Ext.grid.Panel',
    id: "arraygrid",
    requires: [
        'Ext.grid.column.Action',
        'Ext.grid.*',
        'Ext.util.*',
        'Ext.toolbar.Paging',
    ],
    alias: "widget.arraygrid",
    store: "Company",
    stateful: true,
    // collapsible: true,
    multiSelect: true,
    stateId: 'stateGrid',
    width: "100%",
    height: "100%",
    title: 'Array Grid',
    //分页
    /*dockedItems: [{
     xtype: 'pagingtoolbar',
     store: "Company",   // same store GridPanel is using
     dock: 'bottom',
     displayInfo: true
     }],*/


    viewConfig: {
        stripeRows: true,
        enableTextSelection: true
    },


    dockedItems: [{
        dock: "top",
        xtype: "toolbar",
        items: [

            {
                xtype: 'button',
                text: '添加',
                tooltip: '添加',
                id: "add",
                listeners: {
                    click: {
                        fn: function () {
                            // alert("add button has been clicked");
                            Ext.create('AM.view.user.ModifyList', {
                                dockedItems: [{
                                    xtype: 'toolbar',
                                    dock: 'bottom',
                                    ui: 'footer',
                                    layout: {
                                        pack: 'center'
                                    },
                                    items: [{
                                        minWidth: 80,
                                        text: '保存',
                                        handler: function () {
                                            var form = this.up("window").down("form");
                                            values = form.getValues();
                                            console.log(values);
                                            Ext.getCmp("arraygrid").getStore().insert(0, values);
                                            this.up("window").hide();


                                        }
                                    }, {
                                        minWidth: 80,
                                        text: '取消',
                                        handler: function () {
                                            this.up("window").hide();
                                            this.up("window").hide();

                                        }
                                    }]
                                }]
                            }).show();

                        }
                    }
                }
            },
            {
                xtype: 'button',
                text: '修改',
                id: "modify",
                tooltip: '修改',
                listeners: {
                    click: {
                        fn: function () {
                            var modify = Ext.create('AM.view.user.ModifyList', {
                                dockedItems: [{
                                    xtype: 'toolbar',
                                    dock: 'bottom',
                                    ui: 'footer',
                                    layout: {
                                        pack: 'center'
                                    },
                                    items: [{
                                        minWidth: 80,
                                        text: '保存',
                                        handler: function () {

                                            var win = this.up("window");

                                            var form = win.down("form");
                                            record = form.getRecord();
                                            values = form.getValues();
                                            record.set(values);
                                            win.destroy();
                                        }
                                    }, {
                                        minWidth: 80,
                                        text: '取消',
                                        handler: function () {
                                            this.up("window").destroy();
                                        }
                                    }]
                                }]
                            })
                            form = modify.down("form");
                            record = Ext.getCmp("arraygrid").getSelectionModel().getLastSelected(),
                                console.log("in modify" + form);
                            form.loadRecord(record);
                            modify.show();

                        }

                    }

                },

            },
            {
                xtype: 'button',
                text: "删除",
                tooltip: '删除',
                id: "delete",
                handler: function () {
                    Ext.create("Ext.window.Window",{
                        title:"确定要删除该记录",
                        width:300,
                        height:150,
                        dockedItems: [{
                            xtype: 'toolbar',
                            dock: 'bottom',
                            ui: 'footer',
                            layout: {
                                pack: 'center'
                            },
                            items: [{
                                minWidth: 80,
                                text: '删除',
                                handler: function () {
                                    record = Ext.getCmp("arraygrid").getSelectionModel().getSelection();
                                    console.log(record);
                                    Ext.getCmp("arraygrid").getStore().remove(record);
                                    this.up("window").close();



                                }
                            }, {
                                minWidth: 80,
                                text: '取消',
                                handler: function () {
                                    this.up("window").close();


                                }
                            }]
                        }]

                    }).show();

                }
            },
            {
                xtype: 'button',
                text: "查询",
                id: "query",
                tooltip: '查询',
                handler: function () {

                  Ext.create('AM.view.user.ModifyList', {
                        dockedItems: [{
                            xtype: 'toolbar',
                            dock: 'bottom',
                            ui: 'footer',
                            layout: {
                                pack: 'center'
                            },
                            items: [
                                {
                                    text: "查询",
                                    handler:function(){
                                        var form = this.up("window").down("form");
                                        values = form.getValues();
                                        var companyKey = values.company;
                                        var staffKey = values.staff;
                                        if(values.staff.toString().length==0)staffKey=1000000;
                                        var typeKey = values.type;
                                        var areaKey = values.area;

                                        //正则表达式匹配公司名
                                        if(companyKey==="")var regexCompany = new RegExp("[\s\S]*");
                                        else  var regexCompany = new RegExp("("+companyKey+")+");
                                        // var regexStaff = new RegExp("[*("+staffKey+")*]");
                                        if(typeKey===undefined)var regexType = new RegExp("[\s\S]*");
                                        else var regexType = new RegExp("("+typeKey+")+");
                                        if(areaKey==="")var regexArea = new RegExp("[\s\S]*");
                                        else var regexArea = new RegExp("("+areaKey+")+");
                                        store  = Ext.getCmp("arraygrid").getStore();


                                        var count = store.getCount();
                                        var record_temp=[];
                                        for(var i = 0;i<count;i++){
                                            var strCompany = store.getAt(i).get("company").toString();
                                            var staffNum = store.getAt(i).get("staff");
                                            var strType = store.getAt(i).get("type").toString();
                                            var strArea = store.getAt(i).get("area").toString();
                                            //正则表达式匹配company
                                            var x = 0;
                                             if(regexCompany.test(strCompany))x = 1;
                                             if(staffKey>=staffNum) x= 2;
                                             if(regexType.test(strType))x = 3;
                                             if( regexArea.test(strArea))x = 4;
                                            if(regexCompany.test(strCompany)&&staffKey>=staffNum&&regexType.test(strType)&&regexArea.test(strArea)){
                                                record_temp.push(store.getAt(i));
                                            }
                                        }
                                        store.loadRecords(record_temp);
                                        this.up("window").destroy();

                                    }

                                }

                            ]
                        }
                        ],

                    }).show();



                }

            },


        ],
    }],

    initComponent: function () {

        // this.getStore().listeners = [
        //     {
        //         totalcountchange: onStoreSizeChange
        //     }
        // ]

        this.columns = [

            {
                text: '公司名称',
                flex: 1,
                sortable: false,
                dataIndex: 'company'
            },
            {
                text: '员工人数',

                sortable: true,

                dataIndex: 'staff',
                renderer: function (val) {
                    if (val > 100) {
                        return '<span style="color:' + '#b50d1a' + ';">' + val + '</span>';
                    } else if (val <= 100) {
                        return '<span style="color:' + '#20cf0c' + ';">' + val + '</span>';
                    }
                    return val;

                },
            },
            {
                text: '类型',

                sortable: false,
                renderer: function (val) {
                    if (val == "民营企业") {
                        return '<span style="color:' + '#73b51e' + '">' + val + '</span>';
                    } else if (val == "国有企业") {
                        return '<span style="color:' + '#cf4c35' + ';">' + val + '</span>';
                    }
                    return val;
                },
                dataIndex: 'type'
            },
            {
                text: '地区',

                sortable: false,

                dataIndex: 'area'
            },


        ];

        this.callParent();

    },

})

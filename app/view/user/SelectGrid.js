/**
 * Created by Administrator on 2018/4/21 0021.
 */

Requires:[
    "AM.view.user.ModifyList"
]
Ext.define('AM.view.user.SelectGrid', {
    extend: 'Ext.grid.Panel',

    requires: [
        'Ext.grid.column.Action',
        'Ext.grid.*',
        'Ext.util.*',
        'Ext.toolbar.Paging',
    ],
    id:"selectgrid",
    alias: "widget.selectgrid",
    // store:"Company",
    stateful: true,

    multiSelect: true,

    width:"100%",
    height: "100%",
    title: 'Select Grid',
    //分页
    dockedItems: [{
        xtype: 'pagingtoolbar',
        // store:"Company",   // same store GridPanel is using
        dock: 'bottom',
        displayInfo: true
    }],


    viewConfig: {
        stripeRows: true,
        enableTextSelection: true
    },

    tbar:[

        {text:"查询",
            id:"sl_query",
            tooltip :'查询',
            handler:function(){

                var modify = Ext.create('AM.view.user.ModifyList', {
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

                                    store  = Ext.getCmp("selectgrid").getStore();


                                    var count = store.getCount();
                                    var record_temp=[];
                                    for(var i = 0;i<count;i++){
                                        var strCompany = store.getAt(i).get("company").toString();
                                        var staffNum = store.getAt(i).get("staff");
                                        var strType = store.getAt(i).get("type").toString();
                                        var strArea = store.getAt(i).get("area").toString();
                                        //正则表达式匹配company
                                        /*var x = 0;
                                         if(regexCompany.test(strCompany))x = 1;
                                         if(staffKey>=staffNum) x= 2;
                                         if(regexType.test(strType))x = 3;
                                         if( regexArea.test(strArea))x = 4;*/
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
                });
                modify.show();



            },


        },
        "->",
        {
            xtype: 'component',
            id: 'count_status',
            tpl: '已选择条数: {count}',
            style: 'margin-right:5px'
        }




    ],
    initComponent: function() {

        function onStoreSizeChange() {
            grid.down('#status').update({count: store.getTotalCount()});
        }


        this.columns = [

            {
                text     : '公司名称',
                flex     : 1,
                sortable : false,
                dataIndex: 'company'
            },
            {
                text     : '员工人数',
                width    : 75,
                sortable : true,
                dataIndex: 'staff',
                renderer: function (val) {
                    if (val > 100) {
                        return '<span style="color:' + '#b50d1a' + ';">' + val + '</span>';
                    } else if (val <=100) {
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
                    } else if(val== "国有企业") {
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

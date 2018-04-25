/**
 * Created by Administrator on 2018/4/21 0021.
 */


Ext.define("AM.view.user.EditButton",{
    extend:"Ext.panel.Panel",
    layout: {
        type: "vbox",
        align:"center",
        defaultMargins:20,
    },

    items:[
        {
            xtype:"button",
            // text:"添加",
            width:60,
            height:40,
            tooltip :'添加',
            cls:"iconrs",
            handler:function () {
                records = Ext.getCmp("arraygrid").getSelectionModel().getSelection();
                var count = records.length;
                console.log("records"+records);

                for(var i = 0;i<records.length;i++){


                    if(canAdd(records[i])){
                        Ext.getCmp("selectgrid").getStore().insert(Ext.getCmp("selectgrid").getStore().getCount(),records[i]);
                    }
                    else {
                        MsgTip.msg('提示', '您已选择该项',true);//3秒后自动隐藏
                        // alert(records[i].get("company")+"has selected");

                    }
                }






                onStoreSizeChange();

            }
        },
        {
            xtype:"button",
            // text:"取消",
            width:60,
            height:40,
            cls:"iconls",
            tooltip :'取消',
            handler:function () {
                records = Ext.getCmp("selectgrid").getSelectionModel().getSelection();
                Ext.getCmp("selectgrid").getStore().remove(records);
                onStoreSizeChange();
            }
        },
        {
            xtype:"button",
            // text:"添加所有",
            width:60,
            height:40,
            cls:"iconrl",
            tooltip :'添加所有',
            handler:function () {
                var records = [];
                var store_resource = Ext.getCmp("arraygrid").getStore();
                var store_target = Ext.getCmp("selectgrid").getStore();
                for(var i=0;i<store_resource.getCount();i++){
                    var record_temp = store_resource.getAt(i);
                    records.push(record_temp);
                }
                store_target.loadRecords(records);
                onStoreSizeChange();
                console.log("selectgird 的条数"+Ext.getCmp("selectgrid").getStore().getCount());
            }
        },



        {
            xtype:"button",
            // text:"取消所有",
            cls:"iconll",
            tooltip :'取消所有',
            width:60,
            height:40,
            handler:function () {
                Ext.getCmp("selectgrid").getStore().removeAll();
                onStoreSizeChange();
            }
        },
    ],
    initComponent:function(){
        this.callParent()
    }
})
function onStoreSizeChange() {//动态更新条数

    Ext.getCmp("count_status").update({count: Ext.getCmp("selectgrid").getStore().getCount()});
    // console.log("status has get"+Ext.getCmp("arraygrid").down('#status'))
}
function  canAdd(record) {//插入时比较
    store = Ext.getCmp("selectgrid").getStore();
    count  = store.getCount();
    for(var i = 0;i<count;i++){
        if(record==store.getAt(i))return false;
    }
    return true;
}
//提示框
var MsgTip = function(){
    var msgCt;
    function createBox(t, s){
        return ['<div class="msg" style="padding-top:350px;text-align:center">',
            '<div class="x-box-tl"><div class="x-box-tr"><div class="x-box-tc"></div></div></div>',
            '<div class="x-box-ml"><div class="x-box-mr"><div class="x-box-mc" style="font-size=12px;"><h3>', t, '</h3>', s, '</div></div></div>',
            '<div class="x-box-bl"><div class="x-box-br"><div class="x-box-bc"></div></div></div>',
            '</div>'].join('');
    }
    return {
        msg : function(title, message,autoHide,pauseTime){
            if(!msgCt){
                msgCt = Ext.DomHelper.insertFirst(document.body, {id:'msg-div22',style:'position:absolute;top:200px;width:300px;margin:0 auto;z-index:20000;'}, true);
            }
            msgCt.alignTo(document, 't-t');
            //给消息框右下角增加一个关闭按钮
            // message+='<br><span style="text-align:center;font-size:12px; width:100%;">' +
            //     '<font color="blank"><u style="cursor:hand;text-align:center" onclick="MsgTip.hide(this);">关闭</u></font></span>'
            var m = Ext.DomHelper.append(msgCt, {html:createBox(title, message)}, true);
            m.slideIn('t');
            if(!Ext.isEmpty(autoHide)&&autoHide==true){
                if(Ext.isEmpty(pauseTime)){
                    pauseTime=1000;
                }
                m.pause(pauseTime).ghost("tr", {remove:true});
            }
        },
        hide:function(v){
            var msg=Ext.get(v.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);
            msg.ghost("tr", {remove:true});
        }
    };
}();
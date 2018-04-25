/**
 * Created by Administrator on 2018/4/23 0023.
 */
Ext.define("AM.store.Area", {
    extend: "Ext.data.Store",
    fields: [
        {name: "area", type: "string"}
    ],
    autoLoad:true,
    data: [
        {
            "area": "城关区",
            "area": "七里河区",
            "area": "红古区",
            "area": "安宁区",
            "area": "西固区",
            "area": "榆中县",
            "area": "永登县",
            "area": "皋兰县",
            "area": "美国",
        }
    ],
    proxy:{
        type:"pagingmemory",
        reader:{
            type:"json",

            totalProperty:"totalCount",
        },
    }
})
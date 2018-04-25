/**
 * Created by Administrator on 2018/4/12 0012.
 */
Ext.define("AM.model.Company",{
    extend:"Ext.data.Model",

    fields: [
        {name:'company', type:"string"},
        {name: 'staff', type: 'int'},
        {name: 'type', type: 'string'},
        {name: 'area', type: 'string'},
    ],
})

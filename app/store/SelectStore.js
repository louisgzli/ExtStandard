/**
 * Created by Administrator on 2018/4/21 0021.
 */
requires:[
    "Ext.ux.data.PagingMemoryProxy",
    'Ext.grid.plugin.BufferedRenderer',
]
Ext.define("AM.store.SelectStore",{
    extend:"Ext.data.Store",
    model:"AM.model.Company",


    autoLoad:true,

    proxy:{
        type:"pagingmemory",
        /*api:{
         read:"data/company.json"
         },*/
        reader:{
            type:"json",
            // root:"company",
            totalProperty:"totalCount",
        },
        filterParam: 'query',

        // The PHP script just use query=<whatever>
        encodeFilters: function(filters) {
            return filters[0].value;
        }

    },

    remoteFilter: true,



})
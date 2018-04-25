Ext.define("AM.controller.Company",{

    extend: 'Ext.app.Controller',

    views: [


        "AM.view.user.ArrayGrid",
        "AM.view.user.SelectGrid",
        "AM.view.user.Menu",
        "AM.view.user.ModifyList",
        "AM.view.user.EditButton",
        "Ext.ux.data.PagingMemoryProxy",



    ],
    stores:["Company","SelectStore","Area"],
    models:["Company"],
    init: function() {
        this.control({


        });

    },
})
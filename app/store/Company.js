requires:[
    "Ext.ux.data.PagingMemoryProxy",
    'Ext.grid.plugin.BufferedRenderer',
]

Ext.define("AM.store.Company",{
    extend:"Ext.data.Store",
    model:"AM.model.Company",

    data:[
        { "company":"序贯博","staff":120,"type":"民营企业","area":"城关区"},
        { "company":"万维","staff":500,"type":"民营企业","area":"城关区"},
        { "company":"金昌金川集团有限公司","staff":500,"type":"民营企业","area":"城关区"},
        { "company":"兰州兰州卷烟厂","staff":300,"type":"国有企业","area":"红古区"},
        { "company":"庆阳中国石油长庆油田分公司","staff":99,"type":"国有企业","area":"七里河区"},
        { "company":"兰州中国石油天然气股份有限公司兰州石化分公司","staff":99,"type":"国有企业","area":"七里河区"},
        { "company":"天水兰州卷烟厂天水分厂","staff":99,"type":"国有企业","area":"七里河区"},
        { "company":"酒泉中国石油天然气股份有限公司玉门油田分公司","staff":99,"type":"国有企业","area":"七里河区"},
        { "company":"平凉甘肃华亭煤电股份有限公司","staff":99,"type":"国有企业","area":"七里河区"},
        { "company":"兰州甘肃省电力公司兰州供电公司","staff":99,"type":"国有企业","area":"七里河区"},
        { "company":"兰州中国移动通信集团甘肃有限公司","staff":99,"type":"国有企业","area":"七里河区"},
        { "company":"兰州中国铝业股份有限公司兰州分公司","staff":99,"type":"国有企业","area":"七里河区"},
        { "company":"嘉峪关嘉峪关宏晟电热有限责任公司","staff":99,"type":"国有企业","area":"七里河区"},
        { "company":"兰州酒钢集团榆中钢铁有限责任公司","staff":99,"type":"国有企业","area":"七里河区"},
        { "company":"平凉华能平凉发电有限责任公司","staff":99,"type":"国有企业","area":"七里河区"},
        { "company":"兰州甘肃省烟草公司兰州市公司","staff":99,"type":"国有企业","area":"七里河区"},
        { "company":"白银靖远第二发电有限公司","staff":99,"type":"国有企业","area":"七里河区"},
        { "company":"庆阳中国石油天然气股份有限公司庆阳石化分公司","staff":99,"type":"国有企业","area":"七里河区"},
        { "company":"白银白银有色集团有限公司","staff":99,"type":"国有企业","area":"七里河区"},
        { "company":"兰州中国石油兰州石油化工公司","staff":99,"type":"国有企业","area":"七里河区"},
        { "company":"张掖甘肃电投张掖发电有限责任公司","staff":99,"type":"国有企业","area":"七里河区"},
        { "company":"兰州兰州西固热电有限责任公司","staff":99,"type":"国有企业","area":"七里河区"},
        { "company":"陇南白银有色金属公司厂坝铅锌矿","staff":99,"type":"国有企业","area":"七里河区"},
        { "company":"陇南甘肃省烟草公司陇南市公司","staff":99,"type":"国有企业","area":"七里河区"},
        { "company":"兰州兰州市商业银行股份有限公司","staff":99,"type":"国有企业","area":"七里河区"},
        { "company":"州兰州兰石国民油井石油工程有限公司","staff":99,"type":"国有企业","area":"七里河区"},
        { "company":"兰州交通银行股份有限公司兰州分公司","staff":99,"type":"国有企业","area":"七里河区"},
        { "company":"天水甘肃省烟草公司天水市公司","staff":99,"type":"国有企业","area":"七里河区"},
        { "company":"白银甘肃银达化工有限公司","staff":99,"type":"国有企业","area":"七里河区"},
        { "company":"金昌甘肃省电力公司金昌供电公司","staff":99,"type":"国有企业","area":"七里河区"},
        { "company":"白银甘肃银光化学工业集团有限公司","staff":99,"type":"国有企业","area":"七里河区"},
        { "company":"兰州甘肃小三峡水电开发有限责任公司小峡水电厂","staff":99,"type":"国有企业","area":"七里河区"},
        { "company":"金昌金昌铁业(集团)有限责任公司","staff":99,"type":"国有企业","area":"七里河区"},
        { "company":"兰州腾达西北铁合金有限责任公司","staff":99,"type":"国有企业","area":"七里河区"},








    ],

    // autoLoad:{start:0,limit:5},
    // pageSize:5,
    autoLoad:true,
    filterOnLoad:true,
    proxy:{
        type:"pagingmemory",
        // type:"ajax",
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
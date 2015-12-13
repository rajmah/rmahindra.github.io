var global_navtree = WpNavBar.readTree({
"childArray" : [
{   sTitle:'Home',
    bIsWebPath:true,
    sUrl:'index.html'
},
{   sTitle:'Publications',
    bIsWebPath:true,
    sUrl:'pubs.html',"childArray" : [
    {   sTitle:'Cellular Networks',
        bIsWebPath:true,
        sUrl:'pub_cell.html'
    },
    {   sTitle:'Wifi',
        bIsWebPath:true,
        sUrl:'pub_wifi.html'
    },
    {   sTitle:'60Ghz',
        bIsWebPath:true,
        sUrl:'pub_60g.html'
    },
    {   sTitle:'GENI',
        bIsWebPath:true,
        sUrl:'pub_geni.html'
    }]
},
{   sTitle:'Patents',
    bIsWebPath:true,
    sUrl:'patents.html'
},
{   sTitle:'Projects',
    bIsWebPath:true,
    sUrl:'proj.html',"childArray" : [
    {   sTitle:'nvs',
        bIsWebPath:true,
        sUrl:'nvs.html'
    },
    {   sTitle:'opal',
        bIsWebPath:true,
        sUrl:'opal.html'
    },
    {   sTitle:'mesa',
        bIsWebPath:true,
        sUrl:'mesa.html'
    },
    {   sTitle:'geni',
        bIsWebPath:true,
        sUrl:'geni.html'
    }]
}]
});
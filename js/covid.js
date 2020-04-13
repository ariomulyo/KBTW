$.getJSON("https://covid19.mathdro.id/api/countries/indonesia",function(inadata){
    console.log(inadata);

    var inaconfirmed = inadata.confirmed.value;
    var inadeath     = inadata.deaths.value;
    var inarecovered = inadata.recovered.value;

    $(".inaconfirmed").append(inaconfirmed);
    $('.inadeath').append(inadeath);
    $('.inarecovered').append(inarecovered);
});

$.getJSON("https://covid19.mathdro.id/api/countries/singapore",function(sindata){
    console.log(sindata);

    var sinconfirmed = sindata.confirmed.value;
    var sindeath     = sindata.deaths.value;
    var sinrecovered = sindata.recovered.value;

    $(".sinconfirmed").append(sinconfirmed);
    $('.sindeath').append(sindeath);
    $('.sinrecovered').append(sinrecovered);    
 
});

$.getJSON("https://covid19.mathdro.id/api/countries/malaysia",function(maldata){
    console.log(maldata);

    var malconfirmed = maldata.confirmed.value;
    var maldeath     = maldata.deaths.value;
    var malrecovered = maldata.recovered.value;

    $(".malconfirmed").append(malconfirmed);
    $('.maldeath').append(maldeath);
    $('.malrecovered').append(malrecovered);    
 
});

$.getJSON("https://covid19.mathdro.id/api/countries/philippines",function(phidata){
    console.log(phidata);

    var phiconfirmed = phidata.confirmed.value;
    var phideath     = phidata.deaths.value;
    var phirecovered = phidata.recovered.value;

    $(".phiconfirmed").append(phiconfirmed);
    $('.phideath').append(phideath);
    $('.phirecovered').append(phirecovered);    
 
});
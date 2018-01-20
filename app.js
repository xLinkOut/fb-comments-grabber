var URL = window.location.href;
if (URL.indexOf("posts")>-1){
    var patternPostID = /\/[0-9]+/;
    var PostID = patternPostID.exec(URL)[0].slice(1);
}else{
    var patternPhotosID = /\/[0-9]+\//;
    var PostID = patternPhotosID.exec(URL)[0].slice(1,-1);
}

var patternPageID = /\/\D\w+\//;
var PageID = patternPageID.exec(URL)[0].slice(1,-1);

var x = window.open("about:blank");
var HTML = 



x.document.write("ciao");
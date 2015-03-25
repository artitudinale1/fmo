function getLastPage(page) {
  var result = null;
  var scriptUrl = '/blog/?page=' + page; //change 'blog' to your blog url
  $.ajax({
    url: scriptUrl,
    type: 'get',
    dataType: 'html',
    async: false,
    success: function(data) {
      if(data.indexOf('article-index-1') != -1){
        result = getLastPage(page+1);
      }else{
        result = page - 1;
      }
    } 
  });
  return result;
}

var url = document.URL

var currentPage = url.split("/").pop();
var domain = url;


console.log(domain)

var PageToShow = 4

if (domain.indexOf('=') != (-1)){
      currentPage = parseInt(url.split("=").pop());
      console.log ( currentPage)
}else{
  currentPage = parseInt('0')
  console.log ( currentPage + "this is currentPage as zero")

}

var NavCode = ' '

var PrevPage = currentPage - 1;
var NextPage = currentPage + 1;

 console.log ( typeof NextPage)
  console.log ( getLastPage(currentPage))

if(currentPage === 0 && getLastPage(currentPage) != 'NaN') {
    console.log("page 0 e last is not NAN " + currentPage)
    NavCode = '<div><ul><li class="active">'+ currentPage + '</li><li><a href="' + domain +'?page='+(NextPage+1)+' " >'  + NextPage + '</a>'+ '</li></ul>'
    document.getElementById('pagination').innerHTML = NavCode
}
else if (getLastPage(currentPage) != 'NaN'){
   console.log("page 1 e last is not NAN " + currentPage)

    NavCode = '<div><ul><li><a href="' + domain +'page='+(PrevPage-1)+' " >' + '</li><li class="active">' + currentPage + '</li><li><a href="' + domain.substr(0, domain.indexOf('=')); +(NextPage)+' " >'  + NextPage + '</a>'+ '</li></ul>'
    document.getElementById('pagination').innerHTML = NavCode
}


console.log(NavCode)


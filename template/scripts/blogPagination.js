$(document).ready(function (){
    var replacement = '';
    var url = window.location.toString();
    var limit = 5;
    
    var currentPage = (url.indexOf('news') != -1 && url.indexOf('page') == -1) ? 1 : parseInt(url.split('?page=')[1]);
    var lastPage = getLastPage(currentPage+1);
	
    if(currentPage == 1){
      replacement += '<span>&lt;&lt;First</span><span>1</span>';
	  for(var i = 1; i < limit; i++){
		var nextPage = currentPage + i;
		if(nextPage <= lastPage){
			replacement += '<a href="/news/?page=' + nextPage + '">' + nextPage + '</a>';
		}
	  }
    }
    else if(currentPage > (Math.ceil(limit/2)) && currentPage < lastPage - (Math.floor(limit/2))){
      replacement += '<a href="/news/?page=1">&lt;&lt;First</a><span>. . .</span>';
	  for(var i = (currentPage - (Math.floor(limit/2))); i <= (currentPage + (Math.floor(limit/2))); i++){
		replacement += (i == currentPage) ? ('<span>' + i + '</span>') : ('<a href="/news/?page=' + i + '">' + i + '</a>');
	  }
    }
    else if(currentPage <= (Math.ceil(limit/2))){
      replacement += '<a href="/news/?page=1">&lt;&lt;First</a>';
	  for(var i = 1; i <= limit; i++){
		if(i <= lastPage){
			replacement += (i == currentPage) ? ('<span>' + i + '</span>') : ('<a href="/news/?page=' + i + '">' + i + '</a>');
		}
	  }
	}
	else if(currentPage >= lastPage - (Math.floor(limit/2))){
		replacement += '<a href="/news/?page=1">&lt;&lt;First</a><span>. . .</span>';
		for(var i = lastPage - limit + 1; i <= lastPage; i++){
			if(i <= lastPage){
				replacement += (i == currentPage) ? ('<span>' + i + '</span>') : ('<a href="/news/?page=' + i + '">' + i + '</a>');
			}
		}
    }
	
	if((currentPage + (Math.floor(limit/2))) < lastPage){
		replacement += '<span>. . .</span>';
	}
	
	replacement += (currentPage == lastPage) ? '<span>Last&gt;&gt;</span>' : '<a href="/news/?page=' + lastPage + '">Last&gt;&gt;</a>';
    $('article:nth-last-child(' + 1 + ') .entry-injection div').html(replacement);
  });
  
  function getLastPage(nextPage) {
     var result = null;
     var scriptUrl = '/news/?page=' + nextPage;
     $.ajax({
        url: scriptUrl,
        type: 'get',
        dataType: 'html',
        async: false,
        success: function(data) {
			result = (data.indexOf('article-index-1') != -1) ? getLastPage(nextPage + 1) : (nextPage - 1);
        } 
     });
     return result;
  }
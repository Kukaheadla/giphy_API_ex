console.log("connect to html")

var gifLimit = 10;
var offset = 0;



$('.search-btn').click(function(){
  var title = $("input[name='search-txt']").val();

  $.ajax({
      url: 'http://api.giphy.com/v1/gifs/search?',
      data: {q: title, api_key: "dc6zaTOxFJmzC", limit: gifLimit, offset: offset },
      method: 'get'
    }).done(function(output){
      console.log(output);
      $('.result').empty();
      output['data'].forEach(function(datum){
        var imageUrl = datum['images']['original']['url'];
        var $image = $('<img>').attr({
          "src": imageUrl,
          "href": datum['source']
         });
        $('.result').append($image);

      })
    })
})

$(window).scroll(function(){
   if($(window).scrollTop() + $(window).height() == $(document).height()){
     console.log('bottom');
     var title = $("input[name='search-txt']").val();

     $.ajax({
         url: 'http://api.giphy.com/v1/gifs/search?',
         data: {q: title, api_key: "dc6zaTOxFJmzC", limit: gifLimit+10, offset: offset+=10},
         method: 'get'
       }).done(function(output){
         console.log(output);
         output['data'].forEach(function(datum){
           var imageUrl = datum['images']['original']['url'];
           var $image = $('<img>').attr({
             "src": imageUrl,
             "href": datum['source']
            });
           $('.result').append($image);

         })
       })
   }
})

function loadDoc() {
  var getAQuote = function () {
    $('h3').append('<i class="fa fa-spinner fa-spin fa-3x">');
    $.ajax({
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=movies',
      type: 'POST', // The HTTP Method
      data: {}, // Additional parameters here
      datatype: 'json',
      success: function (data) {
        var obj = jQuery.parseJSON(data);
        $('h3').empty();
        $(".quote-text").text("\"" + obj.quote + "\"");
        $(".author-text").text("-" + obj.author);
        var quot = 'https://twitter.com/intent/tweet?text=' + obj.quote + ' -' + ' ' + obj.author;
        $(".twitter-share-button").attr("href", quot);
      },
      beforeSend: function (xhr) {
        xhr.setRequestHeader("X-Mashape-Authorization", "2CTPh6fC8XmshZG7Fsc2FVeJYtuRp11F7pAjsnjaHvz9WCZJKo"); // Enter here your Mashape key
      }

    });
  }
  getAQuote();
};

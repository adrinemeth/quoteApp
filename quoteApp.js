function loadDoc() {
var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
var getQuote = function(data) {
  $(".quote-text").text('"' + data.quoteText + '"');
  data.quoteText = encodeURIComponent(data.quoteText);
  if (data.quoteAuthor === "") {
    data.quoteAuthor = 'Unknown';
  }
  $(".author-text").text("Author: " + data.quoteAuthor);
  var quot = 'https://twitter.com/intent/tweet?text=' + data.quoteText + 'Author' + ':' + ' ' + data.quoteAuthor;
  $(".twitter-share-button").attr("href", quot);
};

$("#quote").click(function() {
  $.getJSON(url, getQuote);
});
};

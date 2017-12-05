$(document).ready(function() {
  var posts;
  var post;
  // var members = [
  //   "abel.psd",
  //   "kingy_kings",
  //   "ananya.ray",
  //   "andreweggers",
  //   "andy_mann"
  // ];
  // Juicer API call to get all social posts with #alphacollection hashtag
  function getPosts() {
  	$.ajax({
  		dataType: 'jsonp',
  		url: "https://www.juicer.io/api/feeds/alpha-universe",
  		success: function (data) {
        posts = data.posts.items;
        displayPosts(posts);
  		}
  	})
  }
  // Init Juicer API call
  getPosts();
  // Displaying posts in html
  function displayPosts(posts) {
    console.log(posts)
    $.each( posts, function( key, value ) {
      post = value;
      if (key <= 6) {
        document.getElementById('posts-container').innerHTML += '<a class="post" target="_blank" href="' + post.full_url + '">'+
        '<div style="background-image:url(' + post.image + ')"><h2>Member: </h2><h3>' + post.poster_name + "</h3>" +
        '</div></a>';
      }
    });
  }
});

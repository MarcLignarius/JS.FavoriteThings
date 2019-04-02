 $(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var favoriteThing1 = $("#favoriteThing1").val();
    var favoriteThing2 = $("#favoriteThing2").val();
    var favoriteThing3 = $("#favoriteThing3").val();
    var favoriteThing4 = $("#favoriteThing4").val();
    var favoriteThing5 = $("#favoriteThing5").val();
    var favoriteThings = [favoriteThing1, favoriteThing2, favoriteThing3, favoriteThing4, favoriteThing5];
    console.log(favoriteThings);
    var newThings = [];
    newThings.push(favoriteThings[0], favoriteThings[1], favoriteThings[2]);
    console.log(newThings);
    var list = '<ul>'
    newThings.forEach(function(thing) {
      list += '<li>'+ thing + '</li>';
    });
    list += '</ul>';
    document.getElementById("output").innerHTML = list;
  });
});

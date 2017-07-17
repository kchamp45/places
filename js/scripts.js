//business logic
function Destination(name, location, purpose, season) {
  this.name = name;
  this.location = location;
  this.purpose = purpose;
  this.season = season;
}

Destination.prototype.callingName = function() {
  return this.name + " " + this.location;
}

// user interface logic
$(document).ready(function() {
  $("form#places").submit(function(event) {
    event.preventDefault();

    var inputName = $("input#name").val();
    var inputLocation = $("input#location").val();
    var inputPurpose = $("input#purpose").val();
    var inputSeason = $("input#season").val();

    var newPlaces = new Destination(inputName, inputLocation, inputPurpose, inputSeason);
    alert(newPlaces.name);
    $("#placeList").append("<li><span class='placeName'>" + newPlaces.name + "</span></li>");
    alert(newPlaces.name);
    $(".placeName").last().click(function() {
      $("#show-destinations").show();
      $("#show-destinations h2").text(newPlaces.name);
      $(".name1").text(newPlaces.location);
      $(".location1").text(newPlaces.location);
      $(".purpose1").text(newPlaces.purpose);
      $(".season1").text(newPlaces.season);
    });

    $("input#name").val("");
    $("input#location").val("");
    $("input#purpose").val("");
    $("input#season").val("");
  });
});

$ (document).ready(function() {
    $("#blanks form").submit(function(event) {

      var array = [];
      // var array = ["#food", "#music", "#place"];

      array.push($("#food").val());
      array.push($("#music").val());
      array.push($("#place").val());

      // array.forEach(function(id) {
      //   var food = $("input#food").val();
      //   var music = $("input#music").val();
      //   var place = $("input#place").val();

      $ (".food").text(array[0]);
      $ (".music").text(array[1]);
      $ (".place").text(array[2]);

      console.log(array)

      $ ("#story").show();
    // });
    event.preventDefault();
  });
});

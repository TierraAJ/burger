// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    displayPage();
    setupEventHandlers();
  });
  
  function displayPage() {
    // Send the GET request.
    $.get("/api/burgers/").then(
      function(burgers) {
        renderTemplate({burgers: burgers});
      }
    );
  }
  
  function renderTemplate(data) {
    var source = $("#page-template").text();
    var template = Handlebars.compile(source);
    var html = template(data);
    $("#app").html(html);
  }
  
  function setupEventHandlers() {
    $(document).on("click", ".eat-item", function(event) {
      var id = $(this).data("id");
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT"
      }).then(
        function() {
          // Rerender the templates with the updated list
          displayPage();
        }
      );
    });
  
    $(document).on("submit", ".create-form", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#name").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          // Rerender the templates with the updated list
          displayPage();
        }
      );
    });
  };  
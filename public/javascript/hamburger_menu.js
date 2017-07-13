document.addEventListener('DOMContentLoaded', function () {

  // Get all "nav-burger" elements
  var $navBurgers = Array.prototype.slice.call(document.querySelectorAll('.nav-burger'), 0);

  // Check if there are any nav burgers
  if ($navBurgers.length > 0) {

    // Add a click event on each of them
    $navBurgers.forEach(function ($el) {
      $el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "nav-burger" and the "nav-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

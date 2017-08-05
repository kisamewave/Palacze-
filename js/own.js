        $(document).ready(function() {
          $('.btn-smoke').click(function() {
            $('.burn').show();
            $('.tobacco').animate({
              width: "0cm"
            }, 10000);
            $('.burn').animate({
              left: "0cm"
            }, 10000, function() {
              $(this).fadeOut();
              $('.btn-reset').css("display", "inline-block");
            });
          });

          $('.btn-reset').click(function() {
            $('.btn-reset').hide();
            $('.tobacco').css("width", "5.5cm");
            $('.burn').css("left", "208px");
          });
        });
        
        jQuery(function ($) {
            function scroll (event) {
                event.preventDefault();

                var hash = $(this).attr("href");
                var content = $(hash);
                var main = $(document.documentElement);

                if (!content.length) {
                    content = main;
                }

                var position = content.offset().top;

                main.animate({scrollTop: position}, function () {
                    location.hash = hash;
                });
            }
            $("#menu a[href^=#]").click(scroll);
        });
        
        
        var x = document.getElementById("mapa");

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition, showError);
            } else {
                x.innerHTML = "Geolokalizacja nie jest obs³ugiwana przez Twoj¹ przegl¹darkê.";
            }
        }

        function showPosition(position) {
            var latlon = position.coords.latitude + "," + position.coords.longitude;

            var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
            +latlon+"&zoom=14&size=400x300&sensor=false";
            document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
        }

        function showError(error) {
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    x.innerHTML = "U¿ytkownik odmówi³ u¿ycia geolokalizacji."
                    break;
                case error.POSITION_UNAVAILABLE:
                    x.innerHTML = "Informacja o lokalizacji jest niedostêpna"
                    break;
                case error.TIMEOUT:
                    x.innerHTML = "Przekroczono czas sprawdzania lokalizacji."
                    break;
                case error.UNKNOWN_ERROR:
                    x.innerHTML = "Wyst¹pi³ nieznany b³¹d."
                    break;
            }
        }
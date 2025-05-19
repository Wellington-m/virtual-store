$(() => {
    $("#search_button").on("click", () => {
        const src_value = $("#search_button img").attr("src");
        if (src_value === "images/Search.svg") {
            $("#search_button img").fadeOut(300, function () {
                $(this).attr("src", "images/Close_search.svg").fadeIn(300);
                $(this).attr("alt", "Simbolo de X");
            });
        } else {
            $("#search_button img").fadeOut(300, function () {
                $(this).attr("src", "images/Search.svg").fadeIn(300);
                $(this).attr("alt", "Pesquisar");
            });
        }

        $("#srch_field").toggle("slide");
    });

    if (
        window.matchMedia("(min-width: 641px)" && "(max-width: 1023px)").matches
    ) {
        $("#hamburger").on("click", function (e) {
            e.stopPropagation(); // impede o clique de propagar para o document
            $(this).text($("header .menu").is(":visible") ? "menu" : "close");

            $("header .menu").slideToggle();
        });

        $(document).on("click", () => {
            if ($("header .menu").is(":visible")) {
                $("#hamburger").text("menu");
                $("header .menu").slideToggle();
            }
        });

        $("header .menu").on("click", function (e) {
            e.stopPropagation();
        });
    }
});

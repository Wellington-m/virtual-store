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

        $("#srch_field").slideToggle();
    });
});

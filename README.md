# 🛍️ Layout Responsivo de Loja

Um projeto de layout de loja online, desenvolvido com HTML, CSS e JavaScript, com foco em **responsividade** e **acessibilidade**. Idealizado para funcionar perfeitamente em **desktop, tablet e celular**, utilizando boas práticas como **CSS Grid**, **Flexbox** e **Media Queries**.

🔗 **Deploy online**: [Clique aqui para acessar a demo](https://virtual-store-nine.vercel.app/)  
📦 **Clonar e rodar**: basta abrir o arquivo `index.html`

<details>
<summary><strong>🚀 Tecnologias Utilizadas</strong></summary>

-   HTML5
-   CSS3 (com **Grid** e **Flexbox**)
-   JavaScript
-   jQuery
-   [Material Symbols Outlined](https://fonts.google.com/icons)

</details>

<details>
<summary><strong>📱 Funcionalidades</strong></summary>

-   ✅ Layout 100% responsivo (desktop, tablet e mobile)
-   ✅ Acessibilidade semântica
-   ✅ Menu interativo com animações
-   ✅ Ícones dinâmicos no botão de busca
-   ✅ Footer colapsável para dispositivos móveis

</details>

<details>
<summary><strong>💡 Aprendizados</strong></summary>

Durante o projeto, aprofundei meus conhecimentos em **CSS Grid**, substituindo soluções com `flexbox` quando notei que o `grid` traria mais controle no layout responsivo do rodapé.

Além disso, substituí **SVGs estáticos** por **ícones dinâmicos do Google (Material Symbols Outlined)**, deixando o código mais limpo e de fácil manutenção:

### Antes (com imagens SVG):

```js
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
});
```

### Depois (com material-symbols):

```js
$("#search_button").on("click", () => {
    const value = $("#search_button span").text().replace(/\s+/g, "");
    const newIcon = value === "search" ? "close" : "search";

    $("#search_button span").fadeOut(300, function () {
        $(this).text(newIcon).fadeIn(300);
    });
});
```

</details>

<details>
<summary><strong>♻️ Código Reutilizável</strong></summary>

Reduzi a repetição de código criando uma função genérica para o comportamento de toggle no footer, reutilizada em 4 interações diferentes:

```js
function footerInformationToggle(element) {
    const $ul = $(element).find("ul");

    if ($ul.is(":visible")) {
        $(element).find("span").text("arrow_drop_down");
    } else {
        $(element).find("span").text("arrow_drop_up");
    }

    $ul.slideToggle();
}

$("#information h2, #information span, #address h2, #address span").on(
    "click",
    function () {
        const $parent = $(this).parent();
        footerInformationToggle($parent);
    }
);
```

</details>

<details>
<summary><strong>📚 Boas Práticas</strong></summary>

-   ✅ Versionamento com **Git**
-   ✅ Commits semânticos
-   ✅ Organização de arquivos
-   ✅ Separação de responsabilidades (HTML/CSS/JS)

</details>

<details>
<summary><strong>📷 Screenshots</strong></summary>

> _(Adicione aqui imagens do layout em diferentes resoluções)_

</details>

---

Feito com 💻 por **Wellington Machioni**



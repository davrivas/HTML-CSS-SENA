(function() {
    var image = document.getElementById('image'),
        description = document.getElementById('description'),
        labial = document.getElementById('labial'),
        pestanina = document.getElementById('pestanina'),
        rubor = document.getElementById('rubor'),
        sombra = document.getElementById('sombra'),

        changeLabial = function() {
            image.src = "static/images/labial.jpg";
            description.innerHTML = "Labiales para lucir unos labios sexys.";
        },

        changePestanina = function() {
            image.src = "static/images/pestanina.jpg";
            description.innerHTML = "Pestañinas unicas en su rubro.";
        },

        changeRubor = function() {
            image.src = "static/images/rubor.jpg";
            description.innerHTML = "Rubor para cualquier tipo de piel.";
        },

        changeSombra = function() {
            image.src = "static/images/sombra.jpg";
            description.innerHTML = "Sombra de varios colores.";
        };

    labial.addEventListener("click", changeLabial);
    pestanina.addEventListener("click", changePestanina);
    rubor.addEventListener("click", changeRubor);
    sombra.addEventListener("click", changeSombra);
})();
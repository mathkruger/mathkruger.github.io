(function(app){
    var app = {
        tab: '#tela-principal .corpo .conteudo header.tabs ul li',
        codesContainer: '#tela-principal .corpo .conteudo .codigos'
    };

    app.init = function() {
        app.init();
    };

    app.listen = function() {
        document.querySelectorAll(app.tab).forEach(function(el) {
            el.addEventListener("click", app.changeTab);
        });
    };

    app.changeTab = function() {
        var target = this.getAttribute('data-target');

        document.querySelectorAll(app.tab).forEach(function(el) {
            el.classList.remove('active');
        });

        this.classList.add('active');

        document.querySelectorAll(app.codesContainer + ' .codigo').forEach(function(el) {
            el.classList.remove('active');
        });

        document.querySelector(app.codesContainer + ' .' + target).classList.add('active');
    };

    window.onload = function() {
        app.listen();
    };
})();
app.controller('titulos',["$scope",function(s){
    s.titles = [
        {
            titulo: "ACERCA DE",
            enlace: "#modal-1"
        },
        {
            titulo: "INICIAR SESIÓN",
            enlace: "/gestionescolar/iniciarsesion.html"
        }
    ];

    s.titles_ipn = [
        {
            title: "Directorio",
            enlace: "http://www.ipn.mx/Paginas/directorio.aspx",
            numero:1,
            texto: "left"
        },
        {
            title: "Correo Electrónico",
            enlace: "http://www.ipn.mx/Paginas/Correo-Electronico.aspx",
            numero:1,
            texto: "center"
        },
        {
            title: "Calendario",
            enlace: "http://www.ipn.mx/Paginas/Calendario-Academico.aspx",
            numero:1,
            texto: "right"
        }
    ];
}]);

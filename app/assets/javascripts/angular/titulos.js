app.controller('titulos',["$scope",function(s){

    s.logo_ipn = {
                    enlace:"http://ipn.mx" ,
                    clase: "col-xs-12 col-sm-6 col-md-5 col-lg-6"
                 };

    s.titulos_ipn =[
                    {
                        titulo:"Directorio",
                        enlace: "http://www.ipn.mx/Paginas/directorio.aspx"
                    },
                    {
                        titulo:"Correo electrónico",
                        enlace: "http://www.ipn.mx/Paginas/Correo-Electronico.aspx"
                    },
                    {
                        titulo: "Calendario",
                        enlace: "http://www.ipn.mx/Paginas/Calendario-Academico.aspx"
                    }
    ];


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

app.controller('lista_constancias',["$scope",function(s){
    s.constancias = [
        "Constancia de estudios",
        "Constancia de inscripción",
        "Constancia con periodo vacional",
        "Constancia de créditos para servicio social",
        "Boleta global informativa",
        "Boleta global certificada"
    ];
}]);

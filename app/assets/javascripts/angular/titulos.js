app.controller('titulos',["$scope",function(s){

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
            enlace: "#info"
        },
        {
            titulo: "INICIAR SESIÓN",
            enlace: "/gestionescolar/iniciarsesion.html"
        }
    ];
}]);

app.controller('mensajeconstruccion',["$scope",function(s){
    s.mensaje = function(){
        swal({
            title: 'Versión 0.1',
            text: 'Pronto verás más funciones no te desesperes...',
            imageUrl: 'http://www.camaratru.org.pe/web2/images/pagina-en-construccion.jpg',
            imageWidth: 400,
            imageHeight: 200,
            animation: true
        });
    }
}]);


app.controller('lista_constancias',["$scope",function(s){
    s.constancias = [
        "Constancia de estudios",
        "Constancia de inscripción",
        "Constancia con periodo vacacional",
        "Constancia de créditos para servicio social",
        "Boleta global informativa",
        "Boleta global certificada"
    ];
}]);

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

app.controller('direccion',["$scope",function(s){
    s.datos = [
                {
                    descripcion: "Av. Juan de Dios Bátiz s/nesq.Av.Miguel Othón de Mendizabal.Colonia Lindavista. Demarcación Territorial: Gustavo A. Madero.C.P.07738.",
                    icono: "glyphicon glyphicon-map-marker"
                },
                {
                    descripcion:"direccion_escom@ipn.mx",
                    icono:"glyphicon glyphicon-envelope"
                },
                {
                    descripcion:"www.escom.ipn.mx",
                    icono:"glyphicon glyphicon-globe"
                },
                {
                    descripcion:"57296000 ext.46188",
                    icono:"glyphicon glyphicon-earphone"
                }
    ];
}]);

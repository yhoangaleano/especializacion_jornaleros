var bdJornaleros = JSON.parse(localStorage.getItem('bdJornaleros'));

//Condicional ternario ? significa si
//                     : significa sino 

bdJornaleros === null ? [] : bdJornaleros;

// if(bdJornaleros === null){
//     bdJornaleros = [];
// }

$(document).ready(function(){

    listar();

    $('#formJornaleros').on('submit', function(event){
        event.preventDefault();

        guardar();
        listar();
    });

});


function guardar(){

    var jornalero = {};

    jornalero.nombre = document.getElementById('txtNombre').value;
    jornalero.correoElectronico = $('#txtCorreoElectronico').val();
    jornalero.fechaNacimiento = $('#txtFechaNacimiento').val();
    jornalero.peso = $('#txtPeso').val();
    
    bdJornaleros.push(jornalero);

    console.log(bdJornaleros);

    var bdJornalerosString = JSON.stringify(bdJornaleros);

    console.log(bdJornalerosString);

    localStorage.setItem('bdJornaleros', bdJornalerosString);
    
}

function listar(){

    $('#tblJornaleros tbody').empty();

    if(bdJornaleros.length !== 0){

        var template = '';

        //Foreach
        for(var i in bdJornaleros){
            var jornalero = bdJornaleros[i];

            template += `<tr>
            <th class="text-center" scope="row">1</th>
            <td>${jornalero.nombre}</td>
            <td>${jornalero.correoElectronico}</td>
            <td>${jornalero.fechaNacimiento}</td>
            <td>${jornalero.peso}Kg</td>
            <td>
                <button class="btn btn-primary">
                    <i class="fa fa-edit"></i>
                    Editar
                </button>

                <button class="btn btn-danger">
                    <i class="fa fa-trash-alt"></i>
                    Eliminar
                </button>
            </td>
        </tr>`;
        }

        $('#tblJornaleros tbody').append(template);

    }else{
        $('#tblJornaleros tbody').append('<tr> <td colspan="6"> No se encuentran datos para mostrar </td> </tr>');
    }

}
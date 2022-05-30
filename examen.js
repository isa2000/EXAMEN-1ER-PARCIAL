
const expresionesRegularesV = {
        codigo: /^[a-zA-Z0-9]{1,5}$/,
        titulo: /^[a-zA-Z0-9]{1,1000}$/,
        autor: /^[a-zA-Z0-9]{1,60}$/,
        editorial: /^[a-zA-Z0-9]{1,60}$/,
        fechaP: /^\d{4}-\d{2}-\d{2}$/,
        fechaI: /^\d{4}-\d{2}-\d{2}$/
    };
    function validar(codigo, titulo, autor, editorial, fechaP, fechaI) {
        let valido = true;
        let mensaje = "";
        if (!expresionesRegularesV.codigo.test(codigo)) {
            valido = false;
            mensaje = "El codigo debe ser alfanumerico, no puede ser mayor a 5 caracteres";
        }
        if (!expresionesRegularesV.titulo.test(titulo)) {
            valido = false;
            mensaje = "La TITULO debe ser alfanumerico, no puede ser mayor a 100 caracteres";
        }
        if (!expresionesRegularesV.autor.test(autor)) {
            valido = false;
            mensaje = "LA EDITORIAL debe ser alfanumerico, no puede ser mayor a 60 caracteres";
        }
        if (!expresionesRegularesV.editorial.test(editorial)) {
            valido = false;
            mensaje = "LA EDITORIAL debe ser alfanumerico, no puede ser mayor a 60 caracteres";
        }
       
        if (!expresionesRegularesV.fechaP.test(fechaP)) {
            valido = false;
            mensaje = "La fecha inicial debe ser tipo date";
        }
        if (!expresionesRegularesV.fechaI.test(fechaI)) {
            valido = false;
            mensaje = "La fecha solo debe ser tipo date";
        }
        
       
    }
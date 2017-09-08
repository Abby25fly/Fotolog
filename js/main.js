
function showComent(){
  var name = document.getElementById("name").value;
  var comment = document.getElementById("comentario").value;
  localStorage.setItem(name,comment);
  var contInfo = document.getElementById("addComment");
  for(var i = 0; i<localStorage.length; i++){
    var clave= localStorage.key(i);
    var valor= localStorage.getItem(clave);

    var div = document.createElement("div");
    div.setAttribute("class", "textComent");
    var nombre = document.createElement("h3");
    var inputNombre = document.createTextNode(clave);
    nombre.appendChild(inputNombre);
    var comentario = document.createElement("p");
    var inputComentario = document.createTextNode(valor);
    comentario.appendChild(inputComentario);
    div.appendChild(nombre);
    div.appendChild(comentario);
    contInfo.appendChild(div);

    document.getElementById("name").value="";
    document.getElementById("comentario").value="";
  }
}

function limpiar(){
  document.getElementById("addComment").innerHTML="";
}

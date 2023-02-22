// operadores
const n1 = document.querySelector('#primer-numero')
const n2 = document.querySelector('#segundo-numero')
// operaciones
const sum = document.querySelector('#sum-button')
// resultado
const resultNode = document.querySelector('#resultado')

sum.addEventListener('click', function () {
    // transformamos a entero el contenido de cada input
    const n1Int = parseInt(n1.value)
    const n2Int = parseInt(n2.value)
    // operación
    const result = n1Int + n2Int
    console.log(result);
    // creamos nodo <span> y lo combinamos con el resultado
    const textNode = document.createTextNode(result)
    const spanElement = document.createElement('span')
    spanElement.appendChild(textNode)

    // eliminamos resultado previo
    if(resultNode.childNodes.length>3){
        resultNode.removeChild(resultNode.childNodes[3])
    }

    resultNode.appendChild(spanElement)
})

diffButton.addEventListener('click', () => {

    // numeros trasnformados a enteros
    const n1Int = parseInt(n1.value)
    const n2Int = parseInt(n2.value)
  
    // operacion
    const result = n1Int - n2Int
    console.log(result)
  
    // creacion de nodo <span>(resultodao)<span>
    const textContent = document.createTextNode(result)
    const spanElement = document.createElement('span')
    spanElement.appendChild(textContent)
  
    // eliminar resultado previo
    if (resultNode.childNodes.length > 3) {
      resultNode.removeChild(resultNode.childNodes[3])
    }
  
    resultNode.appendChild(spanElement)
    return result
  })
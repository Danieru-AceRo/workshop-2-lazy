import { registerImage } from "./lazy";
import { loadImageCount } from "./lazy";
export const RenderApp = document.querySelector('#fox-images')
const baseUrl = 'https://randomfox.ca/'
const buttonCreate = document.querySelector('#foxButton')
const buttonDelete = document.querySelector('#delete')

const createFoxy = () => {
    window.fetch(`${baseUrl}floof/`)
    .then((respuesta) => respuesta.json())
    .then((responseJson) => {
        const image = document.createElement('img');
        image.dataset.src = `${responseJson.image}`
        image.className = 'mx-auto w-1/1'
        image.style.minWidth= '300px'
        image.style.minHeight = '250px'
        image.style.backgroundColor = 'grey'

        const container = document.createElement('div')
        container.append(image)
        container.className = 'p-4'

        RenderApp.append(container)
        registerImage(container)

        console.log(`imagenes Totales: ${RenderApp.childElementCount}`)
        console.log(`imagenes cargadas: ${loadImageCount}`)
        console.log('------------------------------------')
    })
}

const cleanFoxy = () => {
    const nodos = document.querySelectorAll('#fox-images div')
    nodos.forEach((nodo) => {
        nodo.remove()
    })
    // console.log(`Total Imágenes: ${RenderApp.childElementCount}`)
    // console.log(`imagenes cargadas: ${loadImageCount}`)

}


RenderApp.className = 'grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3'

buttonCreate.addEventListener('click', createFoxy)
buttonDelete.addEventListener('click', cleanFoxy)


import getDataFromOsMapi from "../services/getDataFromOsMapi";

const coordinates = (data) => { 
    data.map(item => {
        const location = `${item.termino_municipal}, ${item.provincia}`;
        const coordinates = getDataFromOsMapi(location)
    
        return coordinates; // devuelve array de arrays con las coordenadas
    });
}
export default coordinates;
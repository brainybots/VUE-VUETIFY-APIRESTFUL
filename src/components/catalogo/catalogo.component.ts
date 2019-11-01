import Vue from 'vue';
import Component from 'vue-class-component';


@Component({})
export default class CatalogoComponent extends Vue {

  productos = [];

  mounted (){
    console.log('micro componente catalogo cargado...');
    this.listarProductos();
  }
  
  listarProductos(){

    //let path = require('path');
    
    Vue.axios.get('http://localhost:8888/api/v1/productos').then((response) => {
      
      let list: [] = response.data;

      list.forEach(element => {
        element.nombre = element.nombre.substring(0,30);
      });
      this.productos = response.data;
      //console.log(this.productos);
    })
  }

  verDetalle(){
    alert("ingresa al detalle");
  }
 
}


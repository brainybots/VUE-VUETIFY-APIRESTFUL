import Vue from 'vue';
import Component from 'vue-class-component';
import catalogo from "@/components/catalogo/catalogo.component.vue";

@Component({
  components: { 
    catalogo
  },
})
export default class ContenedorComponent extends Vue {

  mounted (){
    console.log('hello from app');
  }
  
}



import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class MenuBarComponent extends Vue {

  items = [
    { title: 'Inicio', url: '/inicio' },
    { title: 'Profile', url: '/about' },
    ];

    
    mounted (){
    console.log('hello from app');
  }  
}


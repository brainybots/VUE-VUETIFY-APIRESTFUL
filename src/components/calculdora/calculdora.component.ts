import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class CalculdoraComponent extends Vue {

  Numero1 = 0;
  Numero2 = 0;
  Total = 0;

  data(){
    return {
      Numero1 : 0,
      Numero2 : 0,
      Total : 0
    };
  }

  mounted() {
    console.log("hello from app");
  }

  beforeUpdate()
  {
    this.Total = Number(this.Numero1) + Number(this.Numero2);
  }

  Sumar(){
    this.Total = Number(this.Numero1) + Number(this.Numero2);
  }
}

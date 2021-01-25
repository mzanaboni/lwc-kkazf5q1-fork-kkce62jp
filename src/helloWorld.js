import { LightningElement, api } from 'lwc';

export default class HelloWorld extends LightningElement {
  areDetailsVisible = false;

  handleChange(event) {
    this.areDetailsVisible = event.target.checked;
  }

}
export class ProductListComponent {
  products = [{id:1,name:'pen'},{id:2,name:'book'},{id:3,name:'bag'},{id:4,name:'phone'}];

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
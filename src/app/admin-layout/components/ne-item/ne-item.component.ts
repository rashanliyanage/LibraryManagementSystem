import { Component, OnInit } from '@angular/core';
import {NewItemService} from './new-Item-service';

@Component({
  selector: 'app-ne-item',
  templateUrl: './ne-item.component.html',
  styleUrls: ['./ne-item.component.css'],
  providers: [NewItemService]
})
export class NeItemComponent implements OnInit {

  item = {
    isbn: '',
    title: '',
    auther: '',
    category: ''
  };
  isError: Boolean = false;
  isSuccess: Boolean = false;

  selectOption(value) {
    this.item.category = value;
    console.log(this.item.category);
  }

  constructor(private newItemService: NewItemService) { }

  ngOnInit() {
  }
  submitNewItem() {
    this.isSuccess = true;
    this.newItemService.addNewItem(this.item)
     .then(response => {
      if (response.error) {
        this.isError = true;
     }
     if (response.success) {
         this.isSuccess = true;
     }
     })
     .catch(error => {
       throw error;
     });
  }

}

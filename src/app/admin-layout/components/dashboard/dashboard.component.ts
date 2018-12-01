export class Item {
  public id;
  public ISBN;
  public title;
  public auther;

}

import { Component, OnInit } from '@angular/core';
import {DashboardService} from './dashbord-service';

declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {

  items: Item [] ;
  isError: Boolean =false;
  isSuccess: Boolean =false;
  isDeleted: Boolean =false;
  categoryId: any ;
  showBorrowModel:Boolean =false;
  errorMessage:string;


  itemBorrow = {
    cateroryid:'',
    isbn:'',
    userId:''

  };

  items1: Item [] = [
  {id: '1', ISBN: '23456', title: 'java', auther: 'Rashan Samith'},
  {id: '2', ISBN: '65749', title: 'c++', auther: 'Adum Smith'},
  {id: '3', ISBN: '45638', title: 'python', auther: 'alen Deer'},
  {id: '4', ISBN: '87590', title: 'blockchain', auther: 'Johne Summey'},
  ];



  items2: Item [] = [
    {id: '5', ISBN: '23456', title: 'Java tutorial', auther: 'Rashan Samith'},
    {id: '6', ISBN: '65749', title: 'c++ tutorial', auther: 'Adum Smith'},
    {id: '7', ISBN: '45638', title: 'python tutorial', auther: 'alen Deer'},
    {id: '8', ISBN: '87590', title: 'blockchain tutorial', auther: 'Johne Summey'},
    ];

  constructor(private dashbordService: DashboardService) { }

  ngOnInit() {
    $('#table_id').DataTable();
  }

  getAllItemById(id: any) {
    this.itemBorrow.cateroryid = id;
    this.categoryId = id;
    if (id === 1) {
      this.items = this.items1
    } else {
      this.items = this.items2
    }
    console.log(id);
    this.dashbordService.allItemsWithCategory(id)
    .then(response => {
      if(response.error) {
         this.isError = true;
         this.errorMessage =response.message;
      }
      if(response.success){
          this.isSuccess = true;
          this.items = response.item;
      }

    })
    .catch(error => {
      throw error;
    });
  }

  deleteItem(id: string) {
    this.isDeleted = true;
     this.dashbordService.deleteItem(id)
      .then(response => {
        if(response.error) {
          this.isError = true;
          this.errorMessage =response.message;
       }
       if(response.success) {
        this.isDeleted = true;
           this.items = response.item;

       }

      })
      .catch(error => {
        throw error;
      });

  }


  setBorrowId(isbn) {
    this.showBorrowModel = true;
    this.itemBorrow.isbn = isbn;
  }

  submitBorrow() {
    this.dashbordService.borrowItem(this.itemBorrow)
    .then(response => {
      if(response.error) {
        this.isError = true;
        this.errorMessage =response.message;
     }
     if(response.success) {
      this.isDeleted = true;
         this.items = response.item;
     }

    })
    .catch(error => {
      throw error;
    });
  }

}

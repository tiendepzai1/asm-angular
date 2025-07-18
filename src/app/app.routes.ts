import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list';
import { CategoryList } from './category-list/category-list';
import { User} from './user/user';

export const routes: Routes = [

   {
     path : '',
    component :ProductListComponent,
   },
   {
    path : 'categoryList',
    component : CategoryList,
   },
   {
    path : 'user',
    component : User ,
   }


];

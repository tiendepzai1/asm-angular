import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list';
import { CategoryList } from './category-list/category-list';
import { User } from './user/user';
import { ProductDetail } from './product-detail/product-detail';
import { CartComponent } from './cart/cart';
import { ProductCreate } from './product-create/product-create';
import { OrderList } from './order-list/order-list';
import { UserCreate } from './user-create/user-create';
import { ProductUpdate } from './product-update/product-update';

import { Login } from './login/login';
import { Register } from './register/register';

export const routes: Routes = [
   {
      path: 'product',
      component: ProductListComponent,
   },
   {
      path: 'categoryList',
      component: CategoryList,
   },
   {
      path: 'user',
      component: User,
   },
   {
      path: 'product-detail/:id',
      component: ProductDetail,
   },
   {
      path: 'cart',
      component: CartComponent
   },
   {
      path: 'product/create',
      component: ProductCreate,
   },
   {
      path: 'order',
      component: OrderList,
   },
   {
      path: 'user/create',
      component: UserCreate,
   },
   {
      path: 'product/update/:id',
      component: ProductUpdate,
   },
   {
      path: 'register',
      component: Register,
   },
   {
      path: 'login',
      component: Login,
   },
];

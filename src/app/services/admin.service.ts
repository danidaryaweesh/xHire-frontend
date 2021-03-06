import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response, URLSearchParams} from '@angular/http';
import { User } from '../models/user';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'
import {Role} from "../models/role";
import {Category} from "../models/category";

@Injectable()
export class AdminService {
  constructor(private http: Http) { }

  getUsers(nr: number) {
    var name = JSON.parse(localStorage.getItem('currentUser')).username;
    var pw = localStorage.getItem('password');
    let params = new URLSearchParams();
    params.set('startPosition', '' + ((nr * 10) - 10));
    params.set('endPosition', '' + (((nr + 1) * 10) - 10));
    let headers = new Headers();
    headers.append('Authorization', "Basic " + btoa(name + ':' + pw));
    let options = new RequestOptions({ headers: headers, search: params });
    return this.http.get('http://smuts.noip.me:8090/admin/user', options).map(res => res.json());
  }

  updateUser(user: User) {
    var name = JSON.parse(localStorage.getItem('currentUser')).username;
    var pw = localStorage.getItem('password');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', "Basic " + btoa(name + ':' + pw));
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://smuts.noip.me:8090/admin/user/update', user, options).map((response: Response) => response.json());
  }

  getRoles() {
    var name = JSON.parse(localStorage.getItem('currentUser')).username;
    var pw = localStorage.getItem('password');
    let headers = new Headers();
    headers.append('Authorization', "Basic " + btoa(name + ':' + pw));
    let options = new RequestOptions({ headers: headers });
    return this.http.get('http://smuts.noip.me:8090/admin/role', options).map(res => res.json());
  }

  addUser(user: User) {
    var name = JSON.parse(localStorage.getItem('currentUser')).username;
    var pw = localStorage.getItem('password');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', "Basic " + btoa(name + ':' + pw));
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://smuts.noip.me:8090/admin/user', user, options).map((response: Response) => response.json());
  }

  addRole(role: string) {
    var name = JSON.parse(localStorage.getItem('currentUser')).username;
    var pw = localStorage.getItem('password');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', "Basic " + btoa(name + ':' + pw));
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://smuts.noip.me:8090/admin/role/add', role, options).map((response: Response) => response.json());
  }

  updateRole(role: Role) {
    var name = JSON.parse(localStorage.getItem('currentUser')).username;
    var pw = localStorage.getItem('password');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', "Basic " + btoa(name + ':' + pw));
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://smuts.noip.me:8090/admin/role/update', role, options).map((response: Response) => response.json());
  }

  addCategory(category: string) {
    var name = JSON.parse(localStorage.getItem('currentUser')).username;
    var pw = localStorage.getItem('password');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', "Basic " + btoa(name + ':' + pw));
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://smuts.noip.me:8090/admin/category', category, options).map((response: Response) => response.json());
  }

  getCategories() {
    var name = JSON.parse(localStorage.getItem('currentUser')).username;
    var pw = localStorage.getItem('password');
    let headers = new Headers();
    headers.append('Authorization', "Basic " + btoa(name + ':' + pw));
    let options = new RequestOptions({ headers: headers });
    return this.http.get('http://smuts.noip.me:8090/admin/category', options).map(res => res.json())
  }

  updateCategory(category: Category) {
    var name = JSON.parse(localStorage.getItem('currentUser')).username;
    var pw = localStorage.getItem('password');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', "Basic " + btoa(name + ':' + pw));
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://smuts.noip.me:8090/admin/category/update', category, options).map((response: Response) => response.json());
  }
}

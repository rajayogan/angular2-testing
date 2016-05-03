import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';

import {Home} from './home';
import {AboutUs} from './aboutus';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'
})

@RouteConfig([
    {path: '/home', component: Home, name: 'Home'},
    {path: '/aboutus', component: AboutUs, name: 'AboutUs'},
    {path: '/**', redirectTo: ['Home']}
])
export class AppComponent { 
    
}

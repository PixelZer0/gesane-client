/*
 * Copyright (c) 2017 by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com)
 *
 * TROLLEYES helps you to learn how to develop easily AJAX web applications
 *
 * Sources at https://github.com/rafaelaznar/trolleyes
 *
 * TROLLEYES is distributed under the MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var anyAuthenticationPromise = function (sessionService) {
    return sessionService.anyAuthenticationPromise();
};
var authenticationAdministratorPromise = function (sessionService) {
    return sessionService.authenticationPromise(1);
};
var authenticationClientPromise = function (sessionService) {
    return sessionService.authenticationPromise(2);
};
var authenticationProfesorPromise = function (sessionService) {
    return sessionService.authenticationPromise(3);
};
var authenticationAlumnoPromise = function (sessionService) {
    return sessionService.authenticationPromise(4);
};
var authenticationVisitantePromise = function (sessionService) {
    return sessionService.authenticationPromise(5);
};
trolleyes.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'js/system/shared/home.html', controller: 'HomeController', resolve: {auth: anyAuthenticationPromise}});
        //------------
        $routeProvider.when('/login', {templateUrl: 'js/system/shared/login.html', controller: 'LoginController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/profile', {templateUrl: 'js/system/shared/profile.html', controller: 'ProfileController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/logout', {templateUrl: 'js/system/shared/logout.html', controller: 'LogoutController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/home', {templateUrl: 'js/system/shared/home.html', controller: 'HomeController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/license', {templateUrl: 'js/system/shared/license.html', controller: 'LicenseController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/passchange', {templateUrl: 'js/system/shared/passchange.html', controller: 'PasschangeController', resolve: {auth: anyAuthenticationPromise}});
        //------------
        $routeProvider.when('/usuario/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'UsuarioView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'UsuarioRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'UsuarioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/newalumno/9/:codigo', {templateUrl: 'js/app/usuario/9/newalumno.html', controller: 'UsuarioNewalumno9Controller', resolve: {auth: anyAuthenticationPromise}});
        //------------
        $routeProvider.when('/tipousuario/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipousuarioView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipousuario/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'TipousuarioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //------------
        $routeProvider.when('/pedido/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'PedidoView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/pedido/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PedidoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/pedido/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PedidoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/pedido/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'PedidoRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/pedido/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'PedidoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/pedido/1/xusuario/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'PedidoXusuarioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/pedido/1/xusuario/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PedidoXusuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/pedido/1/xusuario/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PedidoXusuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //------------
        $routeProvider.when('/producto/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'ProductoView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/producto/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ProductoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/producto/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ProductoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/producto/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'ProductoRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/producto/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ProductoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //------------        
        $routeProvider.when('/linea_pedido/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'Linea_pedidoView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/linea_pedido/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'Linea_pedidoRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/linea_pedido/1/xpedido/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'Linea_pedidoXpedidoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/linea_pedido/1/xpedido/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'Linea_pedidoXpedidoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/linea_pedido/1/xpedido/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'Linea_pedidoXpedidoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //-----------
        $routeProvider.when('/destinoalta/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'DestinoaltaView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/destinoalta/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'DestinoaltaPlist1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/destinoalta/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'DestinoaltaNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/destinoalta/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'DestinoaltaEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //-----------
        $routeProvider.when('/destinoalta/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'DestinoaltaView3Controller', resolve: {auth: authenticationProfesorPromise}});
        //-----------
        $routeProvider.when('/destinoalta/4/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'DestinoaltaView4Controller', resolve: {auth: authenticationAlumnoPromise}});
        //-----------
        $routeProvider.when('/destinoalta/5/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'DestinoaltaView5Controller', resolve: {auth: authenticationVisitantePromise}});
        //-----------
        $routeProvider.otherwise({redirectTo: '/'});
    }]);

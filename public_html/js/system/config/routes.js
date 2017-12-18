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
        
        
        $routeProvider.when('/circunstanciasalta/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'CircunstanciasaltaPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/circunstanciasalta/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'CircunstanciasaltaView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/circunstanciasalta/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'CircunstanciasaltaNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/circunstanciasalta/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'CircunstanciasaltaEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/circunstanciasalta/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'CircunstanciasaltaRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        
        //-----------
        
        
        
        
        //----Circunstanciasalta 3 profesor --
        $routeProvider.when('/circunstanciasalta/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'CircunstanciasaltaView3Controller', resolve: {auth: authenticationProfesorPromise}});
        //----Circunstanciasalta 4 alumno --
        $routeProvider.when('/circunstanciasalta/4/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'CircunstanciasaltaView4Controller', resolve: {auth: authenticationAlumnoPromise}});
        //----Circunstanciasalta 5 visitante --
        $routeProvider.when('/circunstanciasalta/5/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'CircunstanciasaltaView5Controller', resolve: {auth: authenticationVisitantePromise}});
        //----Episodio 1 admin --
        $routeProvider.when('/episodio/1/xcircunstanciasalta/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'EpisodioxcircunstanciasaltaNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/episodio/1/xcircunstanciasalta/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'EpisodioxcircunstanciasaltaEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/episodio/1/xcircunstanciasalta/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'EpisodioxcircunstanciasaltaPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //----Episodio 3 profesor --
        $routeProvider.when('/episodio/3/xcircunstanciasalta/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'EpisodioxcircunstanciasaltaPList3Controller', resolve: {auth: authenticationProfesorPromise}});
        //----Episodio 4 alumno --
        $routeProvider.when('/episodio/4/xcircunstanciasalta/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'EpisodioxcircunstanciasaltaPList4Controller', resolve: {auth: authenticationProfesorPromise}});
        //----Episodio 5 visitante --
        $routeProvider.when('/episodio/5/xcircunstanciasalta/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'EpisodioxcircunstanciasaltaPList5Controller', resolve: {auth: authenticationProfesorPromise}});
        
        //--
        $routeProvider.when('/tipopago/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipopagoView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipopago/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'TipopagoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipopago/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipopagoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipopago/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipopagoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipopago/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'TipopagoRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //-----------
        $routeProvider.when('/tipopago/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipopagoView3Controller', resolve: {auth: authenticationProfesorPromise}});
        //-----------
        $routeProvider.when('/tipopago/4/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipopagoView4Controller', resolve: {auth: authenticationAlumnoPromise}});
        //-----------
        $routeProvider.when('/tipopago/5/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipopagoView5Controller', resolve: {auth: authenticationVisitantePromise}});
        // ------ Especialidad
        $routeProvider.when('/especialidad/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'EspecialidadPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/especialidad/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'EspecialidadView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/especialidad/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'EspecialidadNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/especialidad/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'EspecialidadEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/especialidad/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'EspecialidadRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //-----------3
        $routeProvider.when('/especialidad/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'EspecialidadView3Controller', resolve: {auth: authenticationProfesorPromise}});
        //-----------4
        $routeProvider.when('/especialidad/4/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'EspecialidadView4Controller', resolve: {auth: authenticationAlumnoPromise}});
        //-----------5
        $routeProvider.when('/especialidad/5/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'EspecialidadView5Controller', resolve: {auth: authenticationVisitantePromise}});
        // ---------- Tipo Dependencia
        $routeProvider.when('/tipodependencia/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'TipodependenciaPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipodependencia/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipodependenciaView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipodependencia/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipodependenciaNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipodependencia/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipodependenciaEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipodependencia/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'TipodependenciaRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //-----------3
        $routeProvider.when('/tipodependencia/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipodependenciaView3Controller', resolve: {auth: authenticationProfesorPromise}});
        //-----------4
        $routeProvider.when('/tipodependencia/4/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipodependenciaView4Controller', resolve: {auth: authenticationAlumnoPromise}});
        //-----------5
        $routeProvider.when('/tipodependencia/5/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipodependenciaView5Controller', resolve: {auth: authenticationVisitantePromise}});




        $routeProvider.when('/destinoalta/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'DestinoaltaView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/destinoalta/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'DestinoaltaPlist1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/destinoalta/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'DestinoaltaNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/destinoalta/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'DestinoaltaEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/destinoalta/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'DestinoaltaRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //-----------
        $routeProvider.when('/destinoalta/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'DestinoaltaView3Controller', resolve: {auth: authenticationProfesorPromise}});
        //-----------
        $routeProvider.when('/destinoalta/4/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'DestinoaltaView4Controller', resolve: {auth: authenticationAlumnoPromise}});
        //-----------
        $routeProvider.when('/destinoalta/5/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'DestinoaltaView5Controller', resolve: {auth: authenticationVisitantePromise}});
        //-----------
        $routeProvider.when('/tiposervicio/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TiposervicioView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tiposervicio/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'TiposervicioPlist1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tiposervicio/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TiposervicioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tiposervicio/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TiposervicioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tiposervicio/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'TiposervicioRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //----------
        $routeProvider.when('/tiposervicio/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TiposervicioView3Controller', resolve: {auth: authenticationProfesorPromise}});
        //-----------
        $routeProvider.when('/tiposervicio/4/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TiposervicioView4Controller', resolve: {auth: authenticationAlumnoPromise}});
        //-----------
        $routeProvider.when('/tiposervicio/5/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TiposervicioView5Controller', resolve: {auth: authenticationVisitantePromise}});
        //-----------
        $routeProvider.when('/modalidadepisodio/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'ModalidadepisodioView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/modalidadepisodio/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ModalidadepisodioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/modalidadepisodio/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ModalidadepisodioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/modalidadepisodio/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ModalidadepisodioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/modalidadepisodio/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'ModalidadepisodioRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //-----------
        $routeProvider.when('/modalidadepisodio/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'ModalidadepisodioView3Controller', resolve: {auth: authenticationProfesorPromise}});
        //-----------
        $routeProvider.when('/modalidadepisodio/4/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'ModalidadepisodioView4Controller', resolve: {auth: authenticationAlumnoPromise}});
        //-----------
        $routeProvider.when('/modalidadepisodio/5/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'ModalidadepisodioView5Controller', resolve: {auth: authenticationVisitantePromise}});
        
        $routeProvider.when('/tipoepisodio/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipoepisodioView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipoepisodio/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipoepisodioView3Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipoepisodio/4/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipoepisodioView4Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipoepisodio/5/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipoepisodioView5Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipoepisodio/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'TipoepisodioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipoepisodio/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipoepisodioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipoepisodio/1/new/:id?' , {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipoepisodioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipoepisodio/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'TipoepisodioRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipoepisodio/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipoepisodioView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipoepisodio/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipoepisodioView3Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipoepisodio/4/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipoepisodioView4Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipoepisodio/5/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipoepisodioView5Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipoepisodio/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'TipoepisodioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipoepisodio/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipoepisodioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipoepisodio/1/new/:id?' , {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipoepisodioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipoepisodio/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'TipoepisodioRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/sexo/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'SexoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/sexo/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'SexoView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/sexo/2/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'SexoView2Controller', resolve: {auth: authenticationProfesorPromise}});
        $routeProvider.when('/sexo/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'SexoView3Controller', resolve: {auth: authenticationProfesorPromise}});
        $routeProvider.when('/sexo/4/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'SexoView4Controller', resolve: {auth: authenticationAlumnoPromise}});
        $routeProvider.when('/sexo/5/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'SexoView5Controller', resolve: {auth: authenticationVisitantePromise}});
        $routeProvider.when('/sexo/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'SexoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/sexo/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'SexoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/sexo/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'SexoRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});

        $routeProvider.otherwise({redirectTo: '/'});
    }]);

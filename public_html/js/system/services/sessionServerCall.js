/*
 * Copyright (c) 2015 by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com)
 *
 * sisane: The stunning micro-library that helps you to develop easily
 *             AJAX web applications by using Angular.js 1.x & sisane-server
 * sisane is distributed under the MIT License (MIT)
 * Sources at https://github.com/rafaelaznar/
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
 *
 */

'use strict';
moduloServicios.factory('sessionServerCallService',
        ['$http', 'constantService',
            function ($http, constantService) {
                return {
                    getLoginPromise: function (username, password) {
                        password = forge_sha256(password).toUpperCase();
                        return $http.get(constantService.getAppUrl() + '?ob=usuario&op=login&user=' + username + '&pass=' + password, 'GET', '');
                    },
                    getPasswordChangePromise: function (oldpass, newpass) {
                        var oldpassword = forge_sha256(oldpass).toUpperCase();
                        var newpassword = forge_sha256(newpass).toUpperCase();
                        return $http.get(constantService.getAppUrl() + '?ob=usuario&op=setpass&old=' + oldpassword + '&new=' + newpassword, 'GET', '');
                    },
                    getLogoutPromise: function () {
                        return $http.get(constantService.getAppUrl() + '?ob=usuario&op=logout', 'GET', '');
                    },
                    getSessionPromise: function () {
                        return $http.get(constantService.getAppUrl() + '?ob=usuario&op=getsessionstatus', 'GET', '');
                    }
                }
            }
        ]);
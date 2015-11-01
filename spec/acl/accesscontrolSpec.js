/* jshint node: true */
/* global describe, beforeEach, afterEach, it, jasmine, expect */
'use strict';

var accesscontrol = require('../../acl/accesscontrol');

describe('access control', function() {
    it('should give access to admin page to admin', function () {
        accesscontrol.hasPermissionTo('admin', 'view admin page', function(err, result){
            expect(result).toBe(true);
        });
    });

    it('should not give access to admin page to guests', function () {
        accesscontrol.hasPermissionTo('guest', 'view admin page', function(err, result){
            expect(result).toBe(false);
        });
    });

    it('should give access to payment validation page to admin', function () {
        accesscontrol.hasPermissionTo('admin', 'confirm payments', function(err, result){
            expect(result).toBe(true);
        });
    });

    it('should not give access to payment validation page to guests', function () {
        accesscontrol.hasPermissionTo('guest', 'confirm payments', function(err, result){
            expect(result).toBe(false);
        });
    });
});
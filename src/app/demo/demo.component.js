"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var validation_manager_1 = require("../../../lib/validation-manager");
var DemoComponent = (function () {
    function DemoComponent() {
        this.slider = null;
    }
    DemoComponent.prototype.ngOnInit = function () {
        this.form = new validation_manager_1.ValidationManager({
            'name': 'required|minLength:4|maxLength:12|alphaSpace',
            'email': 'required|email',
            'username': 'required|pattern:[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*',
            'description': { 'rules': 'required|count:15', 'value': 'testing' },
            'password': 'required|rangeLength:8,50',
            'repassword': 'required|equalTo:password'
        });
        this.form.setValue({
            'name': 'Default'
        });
        this.form.setErrorMessage('username', 'pattern', 'Pattern must be part of this family: [A-Za-z0-9.-_]');
    };
    DemoComponent.prototype.save = function () {
        if (this.form.isValid()) {
            alert('validation pass');
            console.log(this.form.getData());
            this.form.reset();
        }
    };
    return DemoComponent;
}());
DemoComponent = __decorate([
    core_1.Component({
        selector: 'app-demo',
        templateUrl: './demo.component.html',
        styleUrls: ['./demo.component.css']
    })
], DemoComponent);
exports.DemoComponent = DemoComponent;
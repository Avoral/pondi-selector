function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ingredients_ingredients_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ingredients/ingredients.component */
    "./src/app/ingredients/ingredients.component.ts");
    /* harmony import */


    var _ingredients_selector_ingredients_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ingredients-selector/ingredients-selector.component */
    "./src/app/ingredients-selector/ingredients-selector.component.ts");

    var routes = [{
      path: '',
      component: _ingredients_ingredients_component__WEBPACK_IMPORTED_MODULE_2__["IngredientsComponent"]
    }, {
      path: 'selector',
      component: _ingredients_selector_ingredients_selector_component__WEBPACK_IMPORTED_MODULE_3__["IngredientsSelectorComponent"]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'pondi-selector';
    });

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ingredients_ingredients_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./ingredients/ingredients.component */
    "./src/app/ingredients/ingredients.component.ts");
    /* harmony import */


    var _ingredients_selector_ingredients_selector_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ingredients-selector/ingredients-selector.component */
    "./src/app/ingredients-selector/ingredients-selector.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _click_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./click.directive */
    "./src/app/click.directive.ts");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _ingredients_ingredients_component__WEBPACK_IMPORTED_MODULE_4__["IngredientsComponent"], _ingredients_selector_ingredients_selector_component__WEBPACK_IMPORTED_MODULE_5__["IngredientsSelectorComponent"], _click_directive__WEBPACK_IMPORTED_MODULE_7__["ClickDirective"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _ingredients_ingredients_component__WEBPACK_IMPORTED_MODULE_4__["IngredientsComponent"], _ingredients_selector_ingredients_selector_component__WEBPACK_IMPORTED_MODULE_5__["IngredientsSelectorComponent"], _click_directive__WEBPACK_IMPORTED_MODULE_7__["ClickDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/click.directive.ts":
  /*!************************************!*\
    !*** ./src/app/click.directive.ts ***!
    \************************************/

  /*! exports provided: ClickDirective */

  /***/
  function srcAppClickDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClickDirective", function () {
      return ClickDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ClickDirective = /*#__PURE__*/function () {
      function ClickDirective() {
        _classCallCheck(this, ClickDirective);

        this.isActive = false;
        this.isActiveRed = false;
      }

      _createClass(ClickDirective, [{
        key: "onClick",
        value: function onClick(event) {
          if (event.ctrlKey) {
            this.isActiveRed = true;
            return;
          } else {
            if (this.isActive || this.isActiveRed) {
              this.isActive = false;
              this.isActiveRed = false;
            } else {
              this.isActive = true;
            }
          }
        }
      }]);

      return ClickDirective;
    }();

    ClickDirective.ɵfac = function ClickDirective_Factory(t) {
      return new (t || ClickDirective)();
    };

    ClickDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ClickDirective,
      selectors: [["", "appClick", ""]],
      hostVars: 4,
      hostBindings: function ClickDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClickDirective_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("clicked", ctx.isActive)("clicked-red", ctx.isActiveRed);
        }
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClickDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appClick]'
        }]
      }], function () {
        return [];
      }, {
        isActive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.clicked']
        }],
        isActiveRed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.clicked-red']
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ingredient.service.ts":
  /*!***************************************!*\
    !*** ./src/app/ingredient.service.ts ***!
    \***************************************/

  /*! exports provided: IngredientService */

  /***/
  function srcAppIngredientServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IngredientService", function () {
      return IngredientService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var IngredientService = /*#__PURE__*/function () {
      function IngredientService() {
        _classCallCheck(this, IngredientService);

        this.ingredientsArray = [];
      }

      _createClass(IngredientService, [{
        key: "saveIngredients",
        value: function saveIngredients(ingredients) {
          this.ingredientsArray = ingredients.split(',');
        }
      }]);

      return IngredientService;
    }();

    IngredientService.ɵfac = function IngredientService_Factory(t) {
      return new (t || IngredientService)();
    };

    IngredientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: IngredientService,
      factory: IngredientService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IngredientService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ingredients-selector/ingredients-selector.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/ingredients-selector/ingredients-selector.component.ts ***!
    \************************************************************************/

  /*! exports provided: IngredientsSelectorComponent */

  /***/
  function srcAppIngredientsSelectorIngredientsSelectorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IngredientsSelectorComponent", function () {
      return IngredientsSelectorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ingredient_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../ingredient.service */
    "./src/app/ingredient.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _click_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../click.directive */
    "./src/app/click.directive.ts");

    function IngredientsSelectorComponent_ng_container_0_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ",");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function IngredientsSelectorComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, IngredientsSelectorComponent_ng_container_0_span_3_Template, 2, 0, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ingr_r1 = ctx.$implicit;
        var index_r2 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ingr_r1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", index_r2 + 1 !== ctx_r0.ingredientService.ingredientsArray.length);
      }
    }

    var IngredientsSelectorComponent = /*#__PURE__*/function () {
      function IngredientsSelectorComponent(ingredientService) {
        _classCallCheck(this, IngredientsSelectorComponent);

        this.ingredientService = ingredientService;
      }

      _createClass(IngredientsSelectorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "escapeClicked",
        value: function escapeClicked() {
          console.log('dawaj eskejpa');
        }
      }]);

      return IngredientsSelectorComponent;
    }();

    IngredientsSelectorComponent.ɵfac = function IngredientsSelectorComponent_Factory(t) {
      return new (t || IngredientsSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ingredient_service__WEBPACK_IMPORTED_MODULE_1__["IngredientService"]));
    };

    IngredientsSelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IngredientsSelectorComponent,
      selectors: [["app-ingredients-selector"]],
      hostBindings: function IngredientsSelectorComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function IngredientsSelectorComponent_keypress_HostBindingHandler() {
            return ctx.escapeClicked();
          });
        }
      },
      decls: 1,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], ["appClick", "", 1, "ingr"], ["class", "ingr-coma", 4, "ngIf"], [1, "ingr-coma"]],
      template: function IngredientsSelectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, IngredientsSelectorComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ingredientService.ingredientsArray);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _click_directive__WEBPACK_IMPORTED_MODULE_3__["ClickDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: ["[_nghost-%COMP%]   .ingr[_ngcontent-%COMP%]:first-of-type {\n  margin-left: 0;\n  padding-left: 0;\n}\n\n.ingr[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\";\n  padding: 0 5px;\n  font-size: 24px;\n  font-weight: 700;\n  margin-left: 12px;\n  position: relative;\n  z-index: 1;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n.ingr.clicked[_ngcontent-%COMP%] {\n  background: green;\n  border-radius: 10px;\n}\n\n.ingr.clicked-red[_ngcontent-%COMP%] {\n  background: red;\n  border-radius: 10px;\n}\n\n.ingr-coma[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\";\n  font-size: 24px;\n  font-weight: 700;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5ncmVkaWVudHMtc2VsZWN0b3IvQzpcXHByb2pla3R5XFxwb25kaS1zZWxlY3Rvci9zcmNcXGFwcFxcaW5ncmVkaWVudHMtc2VsZWN0b3JcXGluZ3JlZGllbnRzLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbmdyZWRpZW50cy1zZWxlY3Rvci9pbmdyZWRpZW50cy1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDQUo7O0FESUE7RUFDRSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtBQ0RGOztBREdFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0RKOztBREdFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUU7RUFDRSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvaW5ncmVkaWVudHMtc2VsZWN0b3IvaW5ncmVkaWVudHMtc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLmluZ3I6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICB9XHJcbn1cclxuXHJcbi5pbmdyIHtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICBwYWRkaW5nOiAwIDVweDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW4tbGVmdDogMTJweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgJi5jbGlja2VkIHtcclxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgJi5jbGlja2VkLXJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgJi1jb21hIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIH1cclxufVxyXG4iLCI6aG9zdCAuaW5ncjpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLmluZ3Ige1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4uaW5nci5jbGlja2VkIHtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uaW5nci5jbGlja2VkLXJlZCB7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5pbmdyLWNvbWEge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IngredientsSelectorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ingredients-selector',
          templateUrl: './ingredients-selector.component.html',
          styleUrls: ['./ingredients-selector.component.scss']
        }]
      }], function () {
        return [{
          type: _ingredient_service__WEBPACK_IMPORTED_MODULE_1__["IngredientService"]
        }];
      }, {
        escapeClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keypress']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ingredients/ingredients.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/ingredients/ingredients.component.ts ***!
    \******************************************************/

  /*! exports provided: IngredientsComponent */

  /***/
  function srcAppIngredientsIngredientsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IngredientsComponent", function () {
      return IngredientsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ingredient_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../ingredient.service */
    "./src/app/ingredient.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = ["ingredientTextArea"];

    var IngredientsComponent = /*#__PURE__*/function () {
      function IngredientsComponent(ingredientService, route) {
        _classCallCheck(this, IngredientsComponent);

        this.ingredientService = ingredientService;
        this.route = route;
      }

      _createClass(IngredientsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "save",
        value: function save() {
          this.ingredientService.saveIngredients(this.ingredientTextArea.nativeElement.value);
          this.route.navigate(['/selector']);
        }
      }]);

      return IngredientsComponent;
    }();

    IngredientsComponent.ɵfac = function IngredientsComponent_Factory(t) {
      return new (t || IngredientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ingredient_service__WEBPACK_IMPORTED_MODULE_1__["IngredientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    IngredientsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IngredientsComponent,
      selectors: [["app-ingredients"]],
      viewQuery: function IngredientsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ingredientTextArea = _t.first);
        }
      },
      decls: 7,
      vars: 0,
      consts: [[1, "header"], ["aria-label", "Sk\u0142adniki", 1, "area"], ["ingredientTextArea", ""], [3, "click"]],
      template: function IngredientsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Podaj sk\u0142adniki");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "textarea", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IngredientsComponent_Template_button_click_5_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Zapisz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".area[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 400px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5ncmVkaWVudHMvQzpcXHByb2pla3R5XFxwb25kaS1zZWxlY3Rvci9zcmNcXGFwcFxcaW5ncmVkaWVudHNcXGluZ3JlZGllbnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbmdyZWRpZW50cy9pbmdyZWRpZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2luZ3JlZGllbnRzL2luZ3JlZGllbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFyZWEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4iLCIuYXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IngredientsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ingredients',
          templateUrl: './ingredients.component.html',
          styleUrls: ['./ingredients.component.scss']
        }]
      }], function () {
        return [{
          type: _ingredient_service__WEBPACK_IMPORTED_MODULE_1__["IngredientService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, {
        ingredientTextArea: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['ingredientTextArea']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\projekty\pondi-selector\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
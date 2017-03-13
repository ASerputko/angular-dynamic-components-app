webpackJsonp([1,4],{

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".app .row .btn {\n  margin: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.column {\n  margin: 5px;\n  border: 1px solid #999999; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.row {\n  margin: 5px;\n  border: 3px double #CCCCCC; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.widget {\n  margin: 5px;\n  border: 2px solid #CCCCCC;\n  border-top: 15px solid #CCCCCC; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

module.exports = "<div class=\"container app\">\n  <h1>\n    {{title}}\n  </h1>\n  <hr>\n\n  <div class=\"row\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateMetadata('first')\">Use metadata #1</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateMetadata('second')\">Use metadata #2</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateMetadata('last')\">Use metadata #3</button>\n  </div>\n\n  <items-control class=\"flex-container flex-column flex-1\" [items]=\"items\"></items-control>\n</div>\n"

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

module.exports = "<div class=\"column flex-container flex-1 flex-column\">\n  <h6>Column</h6>\n\n  <items-control\n    class=\"flex-container flex-1 flex-column\"\n    [items]=\"items\"></items-control>\n</div>"

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

module.exports = "<div class=\"item-presenter-container flex-container flex-1\">\n  <div class=\"entry-container\" #entry></div>\n</div>"

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

module.exports = "<item-presenter\n    class=\"flex-container flex-{{item.width}}\"\n    *ngFor=\"let item of items\"\n    [content]=\"item\"></item-presenter>"

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

module.exports = "<div class=\"row flex-container flex-1 flex-row\">\n  <h6>Row</h6>\n\n  <items-control\n    class=\"flex-container flex-1 flex-row\"\n    [items]=\"items\"></items-control>\n</div>"

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

module.exports = "<p class=\"flex-container flex-1\">\n  <button type=\"button\" class=\"btn btn-info\">{{ name }}</button>\n</p>\n"

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

module.exports = "<div class=\"widget flex-container flex-1 flex-column\">\n  <h6>Widget</h6>\n\n  <items-control\n    class=\"flex-container flex-1 flex-column\"\n    [items]=\"items\"></items-control>\n</div>"

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(70);


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColumnComponent = (function () {
    function ColumnComponent() {
    }
    ColumnComponent.prototype.ngOnInit = function () {
    };
    return ColumnComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Array)
], ColumnComponent.prototype, "items", void 0);
ColumnComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'column',
        template: __webpack_require__(149),
        styles: [__webpack_require__(141)]
    }),
    __metadata("design:paramtypes", [])
], ColumnComponent);

//# sourceMappingURL=column.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RowComponent = (function () {
    function RowComponent() {
    }
    RowComponent.prototype.ngOnInit = function () {
    };
    return RowComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Array)
], RowComponent.prototype, "items", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Number)
], RowComponent.prototype, "width", void 0);
RowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'row',
        template: __webpack_require__(152),
        styles: [__webpack_require__(143)]
    }),
    __metadata("design:paramtypes", [])
], RowComponent);

//# sourceMappingURL=row.component.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TileComponent = (function () {
    function TileComponent() {
    }
    TileComponent.prototype.ngOnInit = function () {
    };
    return TileComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", String)
], TileComponent.prototype, "name", void 0);
TileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'tile',
        template: __webpack_require__(153),
        styles: [__webpack_require__(144)]
    }),
    __metadata("design:paramtypes", [])
], TileComponent);

//# sourceMappingURL=tile.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetComponent = (function () {
    function WidgetComponent() {
    }
    WidgetComponent.prototype.ngOnInit = function () {
        console.log(this.items);
    };
    return WidgetComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Array)
], WidgetComponent.prototype, "items", void 0);
WidgetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'widget',
        template: __webpack_require__(154),
        styles: [__webpack_require__(145)]
    }),
    __metadata("design:paramtypes", [])
], WidgetComponent);

//# sourceMappingURL=widget.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 69;


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(86);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_metadata_1__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mocks_metadata_2__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mocks_metadata_3__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Dynamic Components App';
        this.items = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.items = __WEBPACK_IMPORTED_MODULE_1__mocks_metadata_1__["a" /* metadata1 */].slice();
    };
    AppComponent.prototype.updateMetadata = function (key) {
        var matadataMap = {
            first: __WEBPACK_IMPORTED_MODULE_1__mocks_metadata_1__["a" /* metadata1 */],
            second: __WEBPACK_IMPORTED_MODULE_2__mocks_metadata_2__["a" /* metadata2 */],
            last: __WEBPACK_IMPORTED_MODULE_3__mocks_metadata_3__["a" /* metadata3 */]
        };
        this.items = matadataMap[key].slice();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app',
        template: __webpack_require__(148),
        styles: [__webpack_require__(140)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_page_module__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            /** NG2 modules */
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            /** App modules */
            __WEBPACK_IMPORTED_MODULE_5__page_page_module__["a" /* PageModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return metadata1; });
var metadata1 = [
    {
        type: 'row',
        items: [
            {
                type: 'widget',
                width: 2,
                items: [
                    {
                        type: 'tile',
                        name: 'Header'
                    },
                    {
                        type: 'row',
                        items: [
                            {
                                type: 'column',
                                width: 1,
                                items: [
                                    {
                                        type: 'tile',
                                        name: 'Tile 1'
                                    },
                                    {
                                        type: 'tile',
                                        name: 'Tile 2'
                                    },
                                    {
                                        type: 'tile',
                                        name: 'Tile 2'
                                    }
                                ]
                            },
                            {
                                type: 'column',
                                width: 2,
                            }
                        ]
                    }
                ]
            },
            {
                type: 'widget',
                width: 1
            }
        ]
    },
    {
        type: 'row',
        items: [
            {
                type: 'widget',
                width: 1
            },
            {
                type: 'widget',
                width: 1
            }
        ]
    }
];
//# sourceMappingURL=metadata-1.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return metadata2; });
var metadata2 = [
    {
        type: 'row',
        items: [
            {
                type: 'widget',
                width: 2,
            },
            {
                type: 'widget',
                width: 1
            }
        ]
    },
    {
        type: 'row',
        items: [
            {
                type: 'widget',
                width: 1
            },
            {
                type: 'widget',
                width: 2
            }
        ]
    }
];
//# sourceMappingURL=metadata-2.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return metadata3; });
var metadata3 = [
    {
        type: 'row',
        items: [
            {
                type: 'widget',
                width: 2,
                items: [
                    {
                        type: 'tile',
                        name: 'Header'
                    },
                    {
                        type: 'row',
                        items: [
                            {
                                type: 'column',
                                width: 1,
                                items: [
                                    {
                                        type: 'tile',
                                        name: 'Tile 1'
                                    },
                                    {
                                        type: 'tile',
                                        name: 'Tile 2'
                                    },
                                    {
                                        type: 'tile',
                                        name: 'Tile 2'
                                    }
                                ]
                            },
                            {
                                type: 'column',
                                width: 2,
                            }
                        ]
                    }
                ]
            },
            {
                type: 'widget',
                width: 1,
                items: [
                    {
                        type: 'tile',
                        name: 'Header'
                    },
                    {
                        type: 'row',
                        items: [
                            {
                                type: 'column',
                                width: 1,
                                items: [
                                    {
                                        type: 'tile',
                                        name: 'Tile 1'
                                    },
                                    {
                                        type: 'tile',
                                        name: 'Tile 2'
                                    },
                                    {
                                        type: 'tile',
                                        name: 'Tile 2'
                                    }
                                ]
                            },
                            {
                                type: 'column',
                                width: 2,
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
//# sourceMappingURL=metadata-3.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_view_model__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_view_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_view_model__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widget_widget_component__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__column_column_component__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__row_row_component__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tile_tile_component__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemPresenterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ItemPresenterComponent = (function () {
    function ItemPresenterComponent(resolver) {
        this.resolver = resolver;
    }
    /** Initialize map of types and components */
    ItemPresenterComponent.prototype.ngOnInit = function () {
        this.componentMap = {
            'widget': __WEBPACK_IMPORTED_MODULE_2__widget_widget_component__["a" /* WidgetComponent */],
            'column': __WEBPACK_IMPORTED_MODULE_3__column_column_component__["a" /* ColumnComponent */],
            'row': __WEBPACK_IMPORTED_MODULE_4__row_row_component__["a" /* RowComponent */],
            'tile': __WEBPACK_IMPORTED_MODULE_5__tile_tile_component__["a" /* TileComponent */]
        };
    };
    /** Create new component and add it to DOM */
    ItemPresenterComponent.prototype.ngAfterContentInit = function () {
        var componentImpl = this.componentMap[this.content.type] || __WEBPACK_IMPORTED_MODULE_4__row_row_component__["a" /* RowComponent */];
        var factory = this.resolver.resolveComponentFactory(componentImpl);
        this.component = this.entry.createComponent(factory);
        /** Add @Inputs */
        this.component.instance.items = this.content.items;
        this.component.instance.name = this.content.name;
    };
    /** Remove the component from DOM */
    ItemPresenterComponent.prototype.ngOnDestroy = function () {
        this.component.destroy();
    };
    return ItemPresenterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_view_model__["ViewModel"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_view_model__["ViewModel"]) === "function" && _a || Object)
], ItemPresenterComponent.prototype, "content", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewChild */])('entry', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ViewContainerRef */] }),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ViewContainerRef */]) === "function" && _b || Object)
], ItemPresenterComponent.prototype, "entry", void 0);
ItemPresenterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'item-presenter',
        template: __webpack_require__(150),
        styles: [__webpack_require__(142)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ComponentFactoryResolver */]) === "function" && _c || Object])
], ItemPresenterComponent);

var _a, _b, _c;
//# sourceMappingURL=item-presenter.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsControlComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemsControlComponent = (function () {
    function ItemsControlComponent() {
    }
    return ItemsControlComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Object)
], ItemsControlComponent.prototype, "items", void 0);
ItemsControlComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'items-control',
        template: __webpack_require__(151),
        styles: [__webpack_require__(146)]
    })
], ItemsControlComponent);

//# sourceMappingURL=items-control.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

//# sourceMappingURL=view-model.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_presenter_item_presenter_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__items_control_items_control_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__widget_widget_component__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__column_column_component__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__row_row_component__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tile_tile_component__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PageModule = (function () {
    function PageModule() {
    }
    return PageModule;
}());
PageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__item_presenter_item_presenter_component__["a" /* ItemPresenterComponent */],
            __WEBPACK_IMPORTED_MODULE_3__items_control_items_control_component__["a" /* ItemsControlComponent */],
            __WEBPACK_IMPORTED_MODULE_4__widget_widget_component__["a" /* WidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__column_column_component__["a" /* ColumnComponent */],
            __WEBPACK_IMPORTED_MODULE_6__row_row_component__["a" /* RowComponent */],
            __WEBPACK_IMPORTED_MODULE_7__tile_tile_component__["a" /* TileComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__widget_widget_component__["a" /* WidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__column_column_component__["a" /* ColumnComponent */],
            __WEBPACK_IMPORTED_MODULE_6__row_row_component__["a" /* RowComponent */],
            __WEBPACK_IMPORTED_MODULE_7__tile_tile_component__["a" /* TileComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__item_presenter_item_presenter_component__["a" /* ItemPresenterComponent */],
            __WEBPACK_IMPORTED_MODULE_3__items_control_items_control_component__["a" /* ItemsControlComponent */]
        ]
    })
], PageModule);

//# sourceMappingURL=page.module.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[181]);
//# sourceMappingURL=main.bundle.js.map
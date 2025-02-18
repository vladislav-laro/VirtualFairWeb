(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/CatalogCard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/CatalogCard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    title: {
      type: String,
      required: true
    },
    remove: {
      type: Function,
      required: false
    },
    show: {
      type: Function,
      required: false
    },
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    removeBrochure: function removeBrochure(id) {
      this.remove(id);
    },
    showBrochure: function showBrochure(id) {
      this.show(id);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandBrochure.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/Stand/StandBrochure.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_components_Header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/components/Header.vue */ "./resources/app/js/src/layouts/components/Header.vue");
/* harmony import */ var _views_custom_BreadCrumb_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/views/custom/BreadCrumb.vue */ "./resources/app/js/src/views/custom/BreadCrumb.vue");
/* harmony import */ var _CatalogCard_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CatalogCard.vue */ "./resources/app/js/src/views/setting/CatalogCard.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AppHeader: _layouts_components_Header_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    BreadCrumb: _views_custom_BreadCrumb_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    CatalogCard: _CatalogCard_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      catalog_list: [],
      catalog_show: false,
      catalog_title: '',
      catalog_file: null,
      stand_id: null
    };
  },
  methods: {
    browseBrochure: function browseBrochure() {
      this.$refs.refBrochureFile.click();
    },
    brochureChanged: function brochureChanged(e) {
      var files = e.target.files;
      this.validateAndUpload(files);
    },
    validateAndUpload: function validateAndUpload(files) {
      if (files.length !== 1) {
        this.$vs.notify({
          title: 'Error - Too Many Files',
          text: 'Only support uploading one file!',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
        return;
      }

      var rawFile = files[0]; // only use files[0]

      if (!this.isValidExt(rawFile)) {
        this.$vs.notify({
          title: 'File Format Error',
          text: 'Only supports upload .jpg, .pdf suffix files',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
        return false;
      }

      this.catalog_show = true;
      this.catalog_file = rawFile;
    },
    isValidExt: function isValidExt(file) {
      return /\.(pdf|jpg)$/.test(file.name);
    },
    getBrochures: function getBrochures() {
      var _this = this;

      this.$loading.show(this);
      this.$http.post('/api/setting/my_stand/brochure').then(function (response) {
        _this.$loading.hide(_this);

        var data = response.data;

        if (!data.stand || !data.stand.id) {
          _this.$vs.notify({
            title: 'error',
            text: 'primero debe comprar el soporte.',
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          });

          setTimeout(function () {
            _this.$router.push('/setting/home');
          }, 3000);
          return;
        }

        _this.catalog_show = false;
        _this.stand_id = data.stand.id;
        _this.catalog_list = data.stand.portfolios;
      });
    },
    saveBrochure: function saveBrochure() {
      var _this2 = this;

      if (!this.catalog_title && this.catalog_title === '') {
        this.$vs.notify({
          title: 'Error de título del catálogo',
          text: 'Ingrese corregir el mosaico del catálogo',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
        return;
      }

      if (!this.catalog_file || this.catalog_title.name === '' || this.catalog_file.size > 1024 * 1024) {
        this.$vs.notify({
          title: 'error de formato de archivo',
          text: 'El tamaño del archivo debe ser inferior a 1 MB y tener el formato pdf, jpg',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
        return;
      }

      var formData = new FormData();
      var headers = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      formData.append('stand_id', this.stand_id);
      formData.append('catalog_title', this.catalog_title);
      formData.append('catalog_file', this.catalog_file);
      this.$loading.show(this);
      this.$http.post('/api/setting/my_stand/brochure/save', formData, headers).then(function (response) {
        _this2.$loading.hide(_this2);

        if (response.data.status === 'ok') {
          _this2.$vs.notify({
            title: _this2.$t('Success'),
            text: _this2.$t('SuccessMessage'),
            iconPack: 'feather',
            icon: 'icon-info',
            color: 'success'
          });

          _this2.getBrochures();
        }
      });
    },
    removeBrochure: function removeBrochure(id) {
      var _this3 = this;

      this.$loading.show(this);
      this.$http.post('/api/setting/my_stand/brochure/remove', {
        _id: id
      }).then(function (response) {
        _this3.$loading.hide(_this3);

        if (response.data.status === 'ok') {
          _this3.$vs.notify({
            title: _this3.$t('Success'),
            text: _this3.$t('DeleteMessage'),
            iconPack: 'feather',
            icon: 'icon-info',
            color: 'success'
          });

          _this3.getBrochures();
        }
      });
    },
    showBrochure: function showBrochure(id) {
      console.log(id);
    }
  },
  created: function created() {
    this.getBrochures();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/CatalogCard.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/CatalogCard.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".catalog-card {\n  font-size: 1rem;\n  font-weight: normal;\n}[dir] .catalog-card {\n  margin: 0 1.5rem;\n}\n.catalog-card .card-header {\n  height: 12rem;\n}\n[dir=ltr] .catalog-card .card-header {\n  border-top-left-radius: 0.8rem;\n  border-top-right-radius: 0.8rem;\n}\n[dir=rtl] .catalog-card .card-header {\n  border-top-right-radius: 0.8rem;\n  border-top-left-radius: 0.8rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandBrochure.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/Stand/StandBrochure.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".setting-stand-brochure {\n  min-height: calc(var(--vh, 1vh) * 100 - 152px);\n}\n[dir] .setting-stand-brochure .vx-row {\n  margin: 0 !important;\n}\n[dir] .setting-stand-brochure .vx-col {\n  padding: 0 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/CatalogCard.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/CatalogCard.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CatalogCard.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/CatalogCard.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandBrochure.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/Stand/StandBrochure.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StandBrochure.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandBrochure.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/CatalogCard.vue?vue&type=template&id=32d1b304&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/CatalogCard.vue?vue&type=template&id=32d1b304& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "catalog-card" }, [
    _c("div", { staticClass: "h6 mb-2 mx-8 text-center" }, [
      _vm._v("\n        " + _vm._s(_vm.title) + "\n    ")
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "flex w-full items-center justify-center card-header grey-real"
      },
      [
        _c("svg-icon", {
          attrs: { size: "w-12 h-12", color: "text-black", icon: "brochure" }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c("div", { staticClass: "vx-col w-1/2" }, [
        _c(
          "div",
          {
            staticClass:
              "flex items-center justify-center text-white py-2 cyan-dark w-full cursor-pointer",
            on: {
              click: function($event) {
                return _vm.showBrochure(_vm.id)
              }
            }
          },
          [
            _c("svg-icon", { attrs: { size: "w-5 h-5", icon: "eye" } }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "ml-2", staticStyle: { "font-size": "0.9rem" } },
              [_vm._v(_vm._s(_vm.$t("See")))]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "vx-col w-1/2" }, [
        _c(
          "div",
          {
            staticClass:
              "flex items-center justify-center text-white py-2 yellow-dark w-full cursor-pointer",
            on: {
              click: function($event) {
                return _vm.removeBrochure(_vm.id)
              }
            }
          },
          [
            _c("svg-icon", { attrs: { size: "w-5 h-5", icon: "erase" } }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "ml-2", staticStyle: { "font-size": "0.9rem" } },
              [_vm._v(_vm._s(_vm.$t("Delete")))]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandBrochure.vue?vue&type=template&id=47f59e36&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/Stand/StandBrochure.vue?vue&type=template&id=47f59e36& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "w-full" },
    [
      _c("app-header", { attrs: { activeItem: "0" } }),
      _vm._v(" "),
      _c("bread-crumb", {
        attrs: {
          icon: "brochure",
          type: "svg",
          text: _vm.$t("CatalogBrochure")
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "w-full setting-stand-brochure bg-white-grey" },
        [
          _c("div", { staticClass: "w-full px-10 pb-4 mt-4" }, [
            _c(
              "div",
              { staticClass: "vx-row w-full" },
              [
                _vm._l(_vm.catalog_list, function(item, index) {
                  return _c(
                    "div",
                    {
                      key: "catalog-item-" + index,
                      staticClass: "vx-col w-1/4"
                    },
                    [
                      _c("catalog-card", {
                        attrs: {
                          title: "Catalog de Productos Ecologicos",
                          item: "123",
                          id: item.id,
                          remove: _vm.removeBrochure,
                          show: _vm.showBrochure
                        }
                      })
                    ],
                    1
                  )
                }),
                _vm._v(" "),
                !_vm.catalog_show
                  ? [
                      _c(
                        "div",
                        {
                          staticClass:
                            "vx-col w-1/4 flex flex-col items-center justify-center"
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "mt-4 blue-dark flex items-center justify-center text-white",
                              staticStyle: {
                                "border-radius": "50%",
                                width: "4rem",
                                height: "4rem"
                              }
                            },
                            [
                              _c("feather-icon", {
                                staticClass: "cursor-pointer",
                                attrs: {
                                  svgClases: "w-10 h-10",
                                  icon: "PlusIcon"
                                },
                                on: { click: _vm.browseBrochure }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "mt-4 text-center" }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(_vm.$t("Upload")) +
                                " PDF O JPG "
                            ),
                            _c("br"),
                            _vm._v(
                              "\n                            (" +
                                _vm._s(_vm.$t("MaxSize")) +
                                " 1mb)\n                        "
                            )
                          ])
                        ]
                      )
                    ]
                  : [
                      _c("div", { staticClass: "vx-col w-1/4" }, [
                        _c("div", { staticClass: "catalog-card" }, [
                          _c(
                            "div",
                            { staticClass: "h6 mb-2" },
                            [
                              _c("vs-input", {
                                staticClass: "w-full",
                                attrs: { placeholder: "título del catálogo" },
                                model: {
                                  value: _vm.catalog_title,
                                  callback: function($$v) {
                                    _vm.catalog_title = $$v
                                  },
                                  expression: "catalog_title"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "flex w-full items-center justify-center card-header grey-real"
                            },
                            [
                              _c("svg-icon", {
                                attrs: {
                                  size: "w-12 h-12",
                                  color: "text-black",
                                  icon: "brochure"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "vx-row" }, [
                            _c("div", { staticClass: "vx-col w-full" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "flex items-center justify-center text-white py-2 cyan-dark w-full cursor-pointer",
                                  on: {
                                    click: function($event) {
                                      return _vm.saveBrochure()
                                    }
                                  }
                                },
                                [
                                  _c("feather-icon", {
                                    attrs: { size: "w-5 h-5", icon: "SaveIcon" }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "ml-2",
                                      staticStyle: { "font-size": "0.9rem" }
                                    },
                                    [_vm._v(_vm._s(_vm.$t("Save")))]
                                  )
                                ],
                                1
                              )
                            ])
                          ])
                        ])
                      ])
                    ],
                _vm._v(" "),
                _c("input", {
                  ref: "refBrochureFile",
                  staticClass: "hidden",
                  attrs: { type: "file", accept: ".jpg, .pdf" },
                  on: { change: _vm.brochureChanged }
                })
              ],
              2
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/app/js/src/views/setting/CatalogCard.vue":
/*!************************************************************!*\
  !*** ./resources/app/js/src/views/setting/CatalogCard.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CatalogCard_vue_vue_type_template_id_32d1b304___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CatalogCard.vue?vue&type=template&id=32d1b304& */ "./resources/app/js/src/views/setting/CatalogCard.vue?vue&type=template&id=32d1b304&");
/* harmony import */ var _CatalogCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CatalogCard.vue?vue&type=script&lang=js& */ "./resources/app/js/src/views/setting/CatalogCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CatalogCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CatalogCard.vue?vue&type=style&index=0&lang=scss& */ "./resources/app/js/src/views/setting/CatalogCard.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CatalogCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CatalogCard_vue_vue_type_template_id_32d1b304___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CatalogCard_vue_vue_type_template_id_32d1b304___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/js/src/views/setting/CatalogCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/js/src/views/setting/CatalogCard.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/app/js/src/views/setting/CatalogCard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CatalogCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/CatalogCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/js/src/views/setting/CatalogCard.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************!*\
  !*** ./resources/app/js/src/views/setting/CatalogCard.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CatalogCard.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/CatalogCard.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/js/src/views/setting/CatalogCard.vue?vue&type=template&id=32d1b304&":
/*!*******************************************************************************************!*\
  !*** ./resources/app/js/src/views/setting/CatalogCard.vue?vue&type=template&id=32d1b304& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogCard_vue_vue_type_template_id_32d1b304___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CatalogCard.vue?vue&type=template&id=32d1b304& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/CatalogCard.vue?vue&type=template&id=32d1b304&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogCard_vue_vue_type_template_id_32d1b304___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogCard_vue_vue_type_template_id_32d1b304___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/js/src/views/setting/Stand/StandBrochure.vue":
/*!********************************************************************!*\
  !*** ./resources/app/js/src/views/setting/Stand/StandBrochure.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StandBrochure_vue_vue_type_template_id_47f59e36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StandBrochure.vue?vue&type=template&id=47f59e36& */ "./resources/app/js/src/views/setting/Stand/StandBrochure.vue?vue&type=template&id=47f59e36&");
/* harmony import */ var _StandBrochure_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StandBrochure.vue?vue&type=script&lang=js& */ "./resources/app/js/src/views/setting/Stand/StandBrochure.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _StandBrochure_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StandBrochure.vue?vue&type=style&index=0&lang=scss& */ "./resources/app/js/src/views/setting/Stand/StandBrochure.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _StandBrochure_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StandBrochure_vue_vue_type_template_id_47f59e36___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StandBrochure_vue_vue_type_template_id_47f59e36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/js/src/views/setting/Stand/StandBrochure.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/js/src/views/setting/Stand/StandBrochure.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/app/js/src/views/setting/Stand/StandBrochure.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StandBrochure_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StandBrochure.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandBrochure.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StandBrochure_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/js/src/views/setting/Stand/StandBrochure.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************!*\
  !*** ./resources/app/js/src/views/setting/Stand/StandBrochure.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandBrochure_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StandBrochure.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandBrochure.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandBrochure_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandBrochure_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandBrochure_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandBrochure_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandBrochure_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/js/src/views/setting/Stand/StandBrochure.vue?vue&type=template&id=47f59e36&":
/*!***************************************************************************************************!*\
  !*** ./resources/app/js/src/views/setting/Stand/StandBrochure.vue?vue&type=template&id=47f59e36& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StandBrochure_vue_vue_type_template_id_47f59e36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StandBrochure.vue?vue&type=template&id=47f59e36& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandBrochure.vue?vue&type=template&id=47f59e36&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StandBrochure_vue_vue_type_template_id_47f59e36___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StandBrochure_vue_vue_type_template_id_47f59e36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
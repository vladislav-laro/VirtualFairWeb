(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/contact/Contact.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/contact/Contact.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_components_Header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/components/Header.vue */ "./resources/app/js/src/layouts/components/Header.vue");
/* harmony import */ var _views_custom_BreadCrumb_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/views/custom/BreadCrumb.vue */ "./resources/app/js/src/views/custom/BreadCrumb.vue");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
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
  methods: {
    setUserCountry: function setUserCountry() {
      if (this.selected_country) {
        this.user.country = this.selected_country.name;
      } else {
        this.user.country = undefined;
      }

      this.selected_region = undefined;
      this.user.region = undefined;
    },
    setUserRegion: function setUserRegion() {
      if (this.selected_region) {
        this.user.region = this.selected_region.name;
      } else {
        this.user.region = undefined;
      }
    },
    send_message: function send_message() {
      var _this = this;

      if (!this.user.message) {
        this.$vs.notify({
          title: this.$t('Error'),
          text: this.$t('EnterMessage'),
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      }

      this.$http.post('/api/contact_message', this.user).then(function (res) {
        if (res.data.status === 'ok') {
          _this.$vs.notify({
            title: _this.$t('Notification'),
            text: _this.$t('RequestReceive'),
            color: 'success',
            iconPack: 'feather',
            icon: 'icon-mail'
          });
        }
      });
      this.user = {};
      this.selected_country = {
        id: 0,
        label: this.$t('SelectCountry')
      };
      this.selected_region = {
        id: 0,
        label: this.$t('SelectRegion')
      };
    }
  },
  components: {
    AppHeader: _layouts_components_Header_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    BreadCrumb: _views_custom_BreadCrumb_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      user: {},
      countries: [],
      regions: [],
      country_id: 0,
      region_id: 0,
      selected_country: '',
      selected_region: ''
    };
  },
  created: function created() {
    var _this2 = this;

    this.$http.get('/api/country_info').then(function (res) {
      if (res.data.countries) {
        _this2.countries = res.data.countries;
        _this2.regions = res.data.regions;
        _this2.selected_country = {
          id: 0,
          label: _this2.$t('SelectCountry')
        };
        _this2.selected_region = {
          id: 0,
          label: _this2.$t('SelectRegion')
        };
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/contact/Contact.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/contact/Contact.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".watermark {\n  position: absolute;\n  bottom: 20px;\n  width: 50%;\n}[dir] .watermark {\n  margin: auto;\n}[dir=ltr] .watermark {\n  text-align: right;\n  right: 25%;\n  padding-right: 30px;\n}[dir=rtl] .watermark {\n  text-align: left;\n  left: 25%;\n  padding-left: 30px;\n}\n.home-contact-main {\n  min-height: calc(var(--vh, 1vh) * 100 - 162px);\n}\n.home-contact-main .contact-form input, .home-contact-main .contact-form textarea {\n  font-size: 0.9rem !important;\n}\n[dir] .home-contact-main .contact-form input, [dir] .home-contact-main .contact-form textarea {\n  border-radius: 0 !important;\n}\n.home-contact-main .contact-form .vs-input--placeholder {\n  font-size: 0.9rem !important;\n}\n.home-contact-main .contact-form .input-span-placeholder {\n  color: #151515 !important;\n}\n[dir] .home-contact-main .contact-form .input-span-placeholder {\n  padding: 0.6rem !important;\n}\n[dir] .home-contact-main .contact-form .vs-con-textarea {\n  border-radius: 0 !important;\n}\n.home-contact-main .contact-form .con-slot-label {\n  font-size: 0.8rem;\n}\n.home-contact-main .contact-form .register-btn {\n  font-size: 0.8rem !important;\n}\n[dir] .home-contact-main .contact-form .register-btn {\n  border-radius: 0px !important;\n  padding: 0.5rem 1rem !important;\n}\n[dir=ltr] .home-contact-main .contact-form .register-btn {\n  border-top-left-radius: 0.6rem !important;\n}\n[dir=rtl] .home-contact-main .contact-form .register-btn {\n  border-top-right-radius: 0.6rem !important;\n}\n.home-contact-main .contact-form .watermark {\n  position: absolute;\n  bottom: 20px;\n  /* width: 100 */\n}\n[dir=ltr] .home-contact-main .contact-form .watermark {\n  text-align: right;\n}\n[dir=rtl] .home-contact-main .contact-form .watermark {\n  text-align: left;\n}\n[dir=ltr] .home-contact-main .vx-row {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n[dir=rtl] .home-contact-main .vx-row {\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n}\n.home-contact-main .vx-col {\n  /* padding: 0 !important; */\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/contact/Contact.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/contact/Contact.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/contact/Contact.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/contact/Contact.vue?vue&type=template&id=a4913eb6&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/contact/Contact.vue?vue&type=template&id=a4913eb6& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
      _c("app-header", { attrs: { activeItem: "1" } }),
      _vm._v(" "),
      _c("bread-crumb", { attrs: { text: _vm.$t("ContactUs") } }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "flex w-full justify-center bg-white-grey home-contact-main"
        },
        [
          _c("div", { staticClass: "bg-white my-4 py-2 w-1/2 contact-form" }, [
            _c("div", { staticClass: "h1 text-center mt-8" }, [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.$t("ContactMessage")) +
                  "\n            "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "vx-row px-20 mt-8" }, [
              _c(
                "div",
                {
                  staticClass:
                    "vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-6 px-3"
                },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "w-full",
                    attrs: {
                      color: "success",
                      placeholder: _vm.$t("FirstName"),
                      name: "FirstName",
                      "data-vv-validate-on": "blur"
                    },
                    model: {
                      value: _vm.user.first_name,
                      callback: function($$v) {
                        _vm.$set(_vm.user, "first_name", $$v)
                      },
                      expression: "user.first_name"
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-danger text-sm" }, [
                    _vm._v(
                      _vm._s(
                        _vm.errors.first("FirstName") &&
                          _vm.errors
                            .first("FirstName")
                            .replace("FirstName", _vm.$t("FirstName"))
                      )
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-6 px-3"
                },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "w-full",
                    attrs: {
                      color: "success",
                      placeholder: _vm.$t("LastName"),
                      name: "LastName",
                      "data-vv-validate-on": "blur"
                    },
                    model: {
                      value: _vm.user.last_name,
                      callback: function($$v) {
                        _vm.$set(_vm.user, "last_name", $$v)
                      },
                      expression: "user.last_name"
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-danger text-sm" }, [
                    _vm._v(
                      _vm._s(
                        _vm.errors.first("LastName") &&
                          _vm.errors
                            .first("LastName")
                            .replace("LastName", _vm.$t("LastName"))
                      )
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-6 px-3"
                },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|email|min:5",
                        expression: "'required|email|min:5'"
                      }
                    ],
                    staticClass: "w-full",
                    attrs: {
                      color: "success",
                      placeholder: "Email",
                      name: "Email",
                      "data-vv-validate-on": "blur"
                    },
                    model: {
                      value: _vm.user.email,
                      callback: function($$v) {
                        _vm.$set(_vm.user, "email", $$v)
                      },
                      expression: "user.email"
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-danger text-sm" }, [
                    _vm._v(_vm._s(_vm.errors.first("Email")))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-6 px-3"
                },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|min:8",
                        expression: "'required|min:8'"
                      }
                    ],
                    staticClass: "w-full",
                    attrs: {
                      color: "success",
                      placeholder: _vm.$t("Phone"),
                      name: "Phone",
                      "data-vv-validate-on": "blur"
                    },
                    model: {
                      value: _vm.user.phone,
                      callback: function($$v) {
                        _vm.$set(_vm.user, "phone", $$v)
                      },
                      expression: "user.phone"
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-danger text-sm" }, [
                    _vm._v(
                      _vm._s(
                        _vm.errors.first("Phone") &&
                          _vm.errors
                            .first("Phone")
                            .replace("Phone", _vm.$t("Phone"))
                      )
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-6 px-3"
                },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "w-full",
                    attrs: {
                      color: "success",
                      placeholder: _vm.$t("Company"),
                      name: "Company",
                      "data-vv-validate-on": "blur"
                    },
                    model: {
                      value: _vm.user.company,
                      callback: function($$v) {
                        _vm.$set(_vm.user, "company", $$v)
                      },
                      expression: "user.company"
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-danger text-sm" }, [
                    _vm._v(
                      _vm._s(
                        _vm.errors.first("Company") &&
                          _vm.errors
                            .first("Company")
                            .replace("Company", _vm.$t("Company"))
                      )
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-6 px-3"
                },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "w-full",
                    attrs: {
                      color: "success",
                      placeholder: _vm.$t("Position"),
                      name: "Position",
                      "data-vv-validate-on": "blur"
                    },
                    model: {
                      value: _vm.user.address,
                      callback: function($$v) {
                        _vm.$set(_vm.user, "address", $$v)
                      },
                      expression: "user.address"
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-danger text-sm" }, [
                    _vm._v(
                      _vm._s(
                        _vm.errors.first("Position") &&
                          _vm.errors
                            .first("Position")
                            .replace("Position", _vm.$t("Position"))
                      )
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-6 px-3"
                },
                [
                  _c("v-select", {
                    attrs: { options: _vm.countries },
                    on: { input: _vm.setUserCountry },
                    model: {
                      value: _vm.selected_country,
                      callback: function($$v) {
                        _vm.selected_country = $$v
                      },
                      expression: "selected_country"
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-danger text-sm" }, [
                    _vm._v(
                      _vm._s(
                        _vm.errors.first("Country") &&
                          _vm.errors
                            .first("Country")
                            .replace("Country", _vm.$t("Country"))
                      )
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-6 px-3"
                },
                [
                  _c(
                    "v-select",
                    {
                      attrs: {
                        options: _vm.regions.filter(function(it) {
                          return it.country_id === _vm.selected_country.id
                        })
                      },
                      on: { input: _vm.setUserRegion },
                      model: {
                        value: _vm.selected_region,
                        callback: function($$v) {
                          _vm.selected_region = $$v
                        },
                        expression: "selected_region"
                      }
                    },
                    [
                      _c(
                        "span",
                        {
                          attrs: { slot: "no-options" },
                          on: {
                            click: function($event) {
                              _vm.$refs.select.open = false
                            }
                          },
                          slot: "no-options"
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.$t("NoMatchingOption")) +
                              "\n                      "
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-danger text-sm" }, [
                    _vm._v(
                      _vm._s(
                        _vm.errors.first("Region") &&
                          _vm.errors
                            .first("Region")
                            .replace("Region", _vm.$t("Region"))
                      )
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col w-full px-3" },
                [
                  _c("vs-textarea", {
                    staticClass: "w-full",
                    attrs: {
                      color: "success",
                      height: "100px",
                      placeholder: _vm.$t("Comments"),
                      lines: "5"
                    },
                    model: {
                      value: _vm.user.message,
                      callback: function($$v) {
                        _vm.$set(_vm.user, "message", $$v)
                      },
                      expression: "user.message"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex items-center justify-center mt-8" },
              [
                _c("svg-icon", {
                  attrs: { icon: "facebook", size: "w-8 h-8 mx-1" }
                }),
                _vm._v(" "),
                _c("svg-icon", {
                  attrs: { icon: "instagram", size: "w-8 h-8 mx-1" }
                }),
                _vm._v(" "),
                _c("svg-icon", {
                  attrs: { icon: "linkedin", size: "w-8 h-8 mx-1" }
                }),
                _vm._v(" "),
                _c("svg-icon", {
                  attrs: { icon: "whatsapp", size: "w-8 h-8 mx-1" }
                }),
                _vm._v(" "),
                _c("svg-icon", {
                  attrs: { icon: "youtube", size: "w-8 h-8 mx-1" }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mt-8 text-center" },
              [
                _c(
                  "vs-button",
                  {
                    staticClass: "cyan-dark register-btn",
                    on: { click: _vm.send_message }
                  },
                  [_vm._v(_vm._s(_vm.$t("Contact")))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "text-right mr-2",
                staticStyle: { "margin-top": "-50px" }
              },
              [
                _c("svg-icon", {
                  attrs: {
                    icon: "watermark",
                    size: "w-24 h-24",
                    color: "text-cyan-dark"
                  }
                })
              ],
              1
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

/***/ "./resources/app/js/src/views/contact/Contact.vue":
/*!********************************************************!*\
  !*** ./resources/app/js/src/views/contact/Contact.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contact_vue_vue_type_template_id_a4913eb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.vue?vue&type=template&id=a4913eb6& */ "./resources/app/js/src/views/contact/Contact.vue?vue&type=template&id=a4913eb6&");
/* harmony import */ var _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.vue?vue&type=script&lang=js& */ "./resources/app/js/src/views/contact/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Contact_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contact.vue?vue&type=style&index=0&lang=scss& */ "./resources/app/js/src/views/contact/Contact.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contact_vue_vue_type_template_id_a4913eb6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Contact_vue_vue_type_template_id_a4913eb6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/js/src/views/contact/Contact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/js/src/views/contact/Contact.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/app/js/src/views/contact/Contact.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/contact/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/js/src/views/contact/Contact.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************!*\
  !*** ./resources/app/js/src/views/contact/Contact.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/contact/Contact.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/js/src/views/contact/Contact.vue?vue&type=template&id=a4913eb6&":
/*!***************************************************************************************!*\
  !*** ./resources/app/js/src/views/contact/Contact.vue?vue&type=template&id=a4913eb6& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_a4913eb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=template&id=a4913eb6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/contact/Contact.vue?vue&type=template&id=a4913eb6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_a4913eb6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_a4913eb6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
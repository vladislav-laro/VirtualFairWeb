(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_components_Header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/components/Header.vue */ "./resources/app/js/src/layouts/components/Header.vue");
/* harmony import */ var _views_custom_NavBackButton_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/views/custom/NavBackButton.vue */ "./resources/app/js/src/views/custom/NavBackButton.vue");
/* harmony import */ var _views_custom_StandButton_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/views/custom/StandButton.vue */ "./resources/app/js/src/views/custom/StandButton.vue");
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
  components: {
    AppHeader: _layouts_components_Header_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    NavBackButton: _views_custom_NavBackButton_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    StandButton: _views_custom_StandButton_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      contact: {},
      stand: {},
      stand_type: {},
      content_id: 0,
      content_type: 'image',
      contact_requests: []
    };
  },
  methods: {
    saveContact: function saveContact() {
      var _this = this;

      this.$loading.show(this);
      this.$http.post('/api/setting/my_stand/save_contact', this.contact).then(function (response) {
        _this.$loading.hide(_this);

        if (response.data.status !== 'error') {
          _this.$vs.notify({
            title: _this.$t('Notification'),
            text: _this.$t('ContactInfo'),
            color: 'danger',
            iconPack: 'feather',
            icon: 'icon-mail'
          });

          _this.contact = response.data.contact;
        }
      });
    },
    contentChanged: function contentChanged(e) {
      var files = e.target.files;
      this.validateAndUpload(files);
    },
    validateAndUpload: function validateAndUpload(files) {
      if (files.length !== 1) {
        this.$vs.notify({
          title: this.$t('TooManyFileTitle'),
          text: this.$t('TooManyFileContent'),
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
        return;
      }

      var rawFile = files[0]; // only use files[0]

      if (!this.isValidExt(rawFile)) {
        this.$vs.notify({
          title: this.$t('FileFormatTitle'),
          text: "".concat(this.$t('FileFormatTitle'), " ").concat(this.content_type),
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
        return false;
      }

      this.saveStandContent(rawFile);
    },
    isValidExt: function isValidExt(file) {
      if (this.content_type === 'image') return /\.(jpg|png|gif|jpeg)$/.test(file.name);else if (this.content_type === 'video') return /\.(avi|mp4|3gp)$/.test(file.name);
    },
    browseStandContent: function browseStandContent(type, id) {
      this.content_type = type;
      this.content_id = id;

      if (this.content_type === 'image') {
        this.$refs.refStandImageFile.click();
      } else if (this.content_type === 'video') {
        this.$refs.refStandVideoFile.click();
      }
    },
    saveStandContent: function saveStandContent(file) {
      var _this2 = this;

      var formData = new FormData();
      var headers = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      formData.append('id', this.content_id);
      formData.append('content_file', file);
      this.$refs.refStandImageFile.value = null;
      this.$refs.refStandVideoFile.value = null;
      this.$loading.show(this);
      this.$http.post('/api/setting/my_stand/save_content', formData, headers).then(function (response) {
        _this2.$loading.hide(_this2);

        if (response.data.status === 'ok') {
          _this2.$vs.notify({
            title: _this2.$t('Success'),
            text: _this2.$t('SuccessMessage'),
            color: 'success',
            iconPack: 'feather',
            icon: 'icon-alert-circle'
          });
        } else {
          _this2.$vs.notify({
            title: _this2.$t('Error'),
            text: _this2.$t('FailMessage'),
            color: 'danger',
            iconPack: 'feather',
            icon: 'icon-alert-circle'
          });
        }

        if (response.data.status === 'ok') {
          _this2.refresh();
        }
      });
    },
    removeStandContent: function removeStandContent(id) {
      var _this3 = this;

      this.$loading.show(this);
      this.$http.post('/api/setting/my_stand/remove_content', {
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
        }

        if (response.data.status === 'ok') {
          _this3.refresh();
        }
      });
    },
    refresh: function refresh() {
      this.getStandContent();
    },
    getStandContent: function getStandContent() {
      var _this4 = this;

      this.$loading.show(this);
      this.$http.post('/api/setting/my_stand').then(function (response) {
        _this4.$loading.hide(_this4);

        var data = response.data;

        if (data.status === 'error') {
          if (data.msg === 'unknown_fair') {
            _this4.$vs.notify({
              title: _this4.$t('Error'),
              text: _this4.$t('NoCurrentFair'),
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'danger'
            });

            return _this4.$router.back();
          } else {
            _this4.$vs.notify({
              title: _this4.$t('Error'),
              text: _this4.$t('NoStandBuy'),
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'danger'
            });

            return _this4.$router.back();
          }
        }

        if (!data.stand || !data.stand.id) {
          _this4.$vs.notify({
            title: _this4.$t('Error'),
            text: _this4.$t('BucketMsg'),
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          });

          setTimeout(function () {
            _this4.$router.push('/setting/home');
          }, 3000);
          return;
        }

        _this4.stand = data.stand;
        _this4.stand_type = data.stand_type;
        _this4.contact = _this4.stand.contact;
        _this4.contact_requests = _this4.stand.contact_requests;
      })["catch"](function () {});
    }
  },
  created: function created() {
    this.getStandContent();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".setting-stand-main {\n  height: calc(var(--vh, 1vh) * 100 - 86px);\n}\n.setting-stand-main .stand-header {\n  z-index: 90;\n}\n.setting-stand-main .stand-header .breadcrumb2 {\n  width: 100%;\n}\n[dir] .setting-stand-main .stand-header .breadcrumb2 {\n  background: #ffffffee;\n}\n.setting-stand-main .stand-header .breadcrumb2 .user-img {\n  width: 2.6rem;\n  height: 2.6rem;\n}\n[dir] .setting-stand-main .stand-header .breadcrumb2 .user-img {\n  border-radius: 50%;\n  border: 1px solid silver;\n}\n.setting-stand-main .stand-header .breadcrumb2 .user-text {\n  font-size: 0.6rem !important;\n  color: #151515;\n}\n.setting-stand-main .stand-footer {\n  bottom: 0;\n  z-index: 90;\n}\n[dir] .setting-stand-main .stand-footer {\n  background: #ffffff66;\n}\n.setting-stand-main .stand-wrapper {\n  z-index: 88;\n  height: calc(var(--vh, 1vh) * 100 - 86px);\n  width: 100%;\n}\n.setting-stand-main .stand-wrapper .stand-item-wrapper {\n  z-index: 100;\n}\n[dir] .setting-stand-main .stand-wrapper .stand-item-wrapper .tand-item {\n  border-radius: 0.3rem;\n  padding: 0.3rem 1rem !important;\n}\n.setting-stand-main .stand-wrapper .chatting-btn {\n  height: 3rem;\n  width: 110px;\n  height: 80px;\n}\n[dir] .setting-stand-main .stand-wrapper .chatting-btn {\n  padding: 5px;\n}\n[dir=ltr] .setting-stand-main .stand-wrapper .chatting-btn {\n  border-top-left-radius: 1.5rem;\n}\n[dir=rtl] .setting-stand-main .stand-wrapper .chatting-btn {\n  border-top-right-radius: 1.5rem;\n}\n.setting-stand-main .stand-wrapper .chatting-btn .btn-text {\n  font-size: 0.8rem;\n}\n[dir] .setting-stand-bg-img {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 100vw calc(var(--vh, 1vh) * 100 - 86px) !important;\n}\n[dir] .stand-social-icons {\n  background: transparent;\n}\n.dropdown-userinfo .vs-dropdown--menu {\n  width: 320px;\n  font-size: 0.8rem;\n}\n[dir] .dropdown-userinfo .vs-dropdown--menu {\n  padding: 0.5rem 1rem !important;\n}\n.dropdown-userinfo .vs-dropdown--menu .vs-button {\n  font-size: 0.8rem !important;\n}\n[dir] .dropdown-userinfo .vs-dropdown--menu .vs-button {\n  padding: 0.4rem 1rem !important;\n  margin-top: 0.4rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StandHome.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=template&id=d1c42b1e&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=template&id=d1c42b1e& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
      _c("app-header"),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "flex w-full flex-col setting-stand-bg-img items-center justify-between setting-stand-main",
          style:
            "background-image: url('/fair_image/" +
            _vm.stand_type.interior +
            "');"
        },
        [
          _c(
            "div",
            {
              staticClass:
                "absolute flex flex-col w-full justify-between stand-header"
            },
            [
              _c("div", { staticClass: "flex w-full" }, [
                _c(
                  "div",
                  { staticClass: "flex flex-row breadcrumb2" },
                  [
                    _c("nav-back-button"),
                    _vm._v(" "),
                    _vm._l(_vm.contact_requests, function(item, index) {
                      return _c(
                        "div",
                        {
                          key: "stand-user-" + index,
                          staticClass: "flex items-center ml-4"
                        },
                        [
                          _c(
                            "vs-dropdown",
                            {
                              attrs: {
                                "vs-custom-content": "",
                                "vs-trigger-click": ""
                              }
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "flex items-center",
                                  attrs: { "href.prevent": "" }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "flex flex-col items-center justify-center ml-2 cursor-pointer"
                                    },
                                    [
                                      _c("img", {
                                        staticClass: "user-img responsive mx-4",
                                        attrs: {
                                          src:
                                            "/fair_image/" +
                                            item.requestor.avatar
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "text-black user-text" },
                                        [
                                          _vm._v(
                                            _vm._s(item.requestor.first_name) +
                                              " " +
                                              _vm._s(item.requestor.last_name)
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-dropdown-menu",
                                { staticClass: "dropdown-userinfo" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "mb-1 font-italic" },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.$t("Name")) +
                                          ": " +
                                          _vm._s(item.requestor.first_name) +
                                          " " +
                                          _vm._s(item.requestor.last_name) +
                                          " "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "mb-1 font-italic" },
                                    [
                                      _vm._v(
                                        "Email: " + _vm._s(item.requestor.email)
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "mb-1 font-italic" },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.$t("Phone")) +
                                          ": " +
                                          _vm._s(item.requestor.phone)
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "mb-1 font-italic" },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.$t("Position")) +
                                          ": " +
                                          _vm._s(item.requestor.address)
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "mb-1 font-italic" },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.$t("Company")) +
                                          ": " +
                                          _vm._s(item.requestor.company)
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "mb-1 font-italic" },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.$t("Country")) +
                                          ": " +
                                          _vm._s(item.requestor.country)
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "mb-1 font-italic" },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.$t("Region")) +
                                          ": " +
                                          _vm._s(item.requestor.region)
                                      )
                                    ]
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "flex flex-row items-center justify-between stand-social-icons mx-2"
                  },
                  [
                    _c(
                      "vs-dropdown",
                      {
                        attrs: {
                          "vs-custom-content": "",
                          "vs-trigger-click": ""
                        }
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "flex items-center",
                            attrs: { "href.prevent": "" }
                          },
                          [
                            _c("svg-icon", {
                              staticClass: "mx-2 cursor-pointer",
                              attrs: { size: "w-8 h-8", icon: "facebook" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-dropdown-menu",
                          { staticClass: "dropdown-userinfo" },
                          [
                            _c("div", { staticClass: "mb-1 font-bold" }, [
                              _vm._v(_vm._s(_vm.$t("Facebook")))
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "mb-1 font-italic" }, [
                              _vm._v(_vm._s(_vm.$t("Example")))
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mb-1 font-italic" },
                              [
                                _c("vs-input", {
                                  staticClass: "w-full",
                                  attrs: {
                                    placeholder: "https://www.facebook.com/..."
                                  },
                                  model: {
                                    value: _vm.contact.facebook,
                                    callback: function($$v) {
                                      _vm.$set(_vm.contact, "facebook", $$v)
                                    },
                                    expression: "contact.facebook"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mb-1 font-italic text-center" },
                              [
                                _c(
                                  "vs-button",
                                  {
                                    staticClass: "cyan-dark",
                                    on: {
                                      click: function($event) {
                                        return _vm.saveContact()
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(_vm.$t("Save")))]
                                )
                              ],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-dropdown",
                      {
                        attrs: {
                          "vs-custom-content": "",
                          "vs-trigger-click": ""
                        }
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "flex items-center",
                            attrs: { "href.prevent": "" }
                          },
                          [
                            _c("svg-icon", {
                              staticClass: "mx-2 cursor-pointer",
                              attrs: { size: "w-8 h-8", icon: "instagram" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-dropdown-menu",
                          { staticClass: "dropdown-userinfo" },
                          [
                            _c("div", { staticClass: "mb-1 font-bold" }, [
                              _vm._v(_vm._s(_vm.$t("Instagram")))
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "mb-1 font-italic" }, [
                              _vm._v(_vm._s(_vm.$t("Example")))
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mb-1 font-italic" },
                              [
                                _c("vs-input", {
                                  staticClass: "w-full",
                                  attrs: {
                                    placeholder: "https://www.instagram.com/..."
                                  },
                                  model: {
                                    value: _vm.contact.instagram,
                                    callback: function($$v) {
                                      _vm.$set(_vm.contact, "instagram", $$v)
                                    },
                                    expression: "contact.instagram"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mb-1 font-italic text-center" },
                              [
                                _c(
                                  "vs-button",
                                  {
                                    staticClass: "cyan-dark",
                                    on: {
                                      click: function($event) {
                                        return _vm.saveContact()
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(_vm.$t("Save")))]
                                )
                              ],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-dropdown",
                      {
                        attrs: {
                          "vs-custom-content": "",
                          "vs-trigger-click": ""
                        }
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "flex items-center",
                            attrs: { "href.prevent": "" }
                          },
                          [
                            _c("svg-icon", {
                              staticClass: "mx-2 cursor-pointer",
                              attrs: { size: "w-8 h-8", icon: "linkedin" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-dropdown-menu",
                          { staticClass: "dropdown-userinfo" },
                          [
                            _c("div", { staticClass: "mb-1 font-bold" }, [
                              _vm._v(_vm._s(_vm.$t("LinkedIn")))
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "mb-1 font-italic" }, [
                              _vm._v(_vm._s(_vm.$t("Example")))
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mb-1 font-italic" },
                              [
                                _c("vs-input", {
                                  staticClass: "w-full",
                                  attrs: {
                                    placeholder:
                                      "https://www.linkedin.com/company/..."
                                  },
                                  model: {
                                    value: _vm.contact.linkedin,
                                    callback: function($$v) {
                                      _vm.$set(_vm.contact, "linkedin", $$v)
                                    },
                                    expression: "contact.linkedin"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mb-1 font-italic text-center" },
                              [
                                _c(
                                  "vs-button",
                                  {
                                    staticClass: "cyan-dark",
                                    on: {
                                      click: function($event) {
                                        return _vm.saveContact()
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(_vm.$t("Save")))]
                                )
                              ],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-dropdown",
                      {
                        attrs: {
                          "vs-custom-content": "",
                          "vs-trigger-click": ""
                        }
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "flex items-center",
                            attrs: { "href.prevent": "" }
                          },
                          [
                            _c("svg-icon", {
                              staticClass: "mx-2 cursor-pointer",
                              attrs: { size: "w-8 h-8", icon: "whatsapp" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-dropdown-menu",
                          { staticClass: "dropdown-userinfo" },
                          [
                            _c("div", { staticClass: "mb-1 font-bold" }, [
                              _vm._v(_vm._s(_vm.$t("WhatsApp")))
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "mb-1 font-italic" }, [
                              _vm._v(_vm._s(_vm.$t("Example")))
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mb-1 font-italic" },
                              [
                                _c("vs-input", {
                                  staticClass: "w-full",
                                  model: {
                                    value: _vm.contact.whatsapp,
                                    callback: function($$v) {
                                      _vm.$set(_vm.contact, "whatsapp", $$v)
                                    },
                                    expression: "contact.whatsapp"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mb-1 font-italic text-center" },
                              [
                                _c(
                                  "vs-button",
                                  {
                                    staticClass: "cyan-dark",
                                    on: {
                                      click: function($event) {
                                        return _vm.saveContact()
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(_vm.$t("Save")))]
                                )
                              ],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-dropdown",
                      {
                        attrs: {
                          "vs-custom-content": "",
                          "vs-trigger-click": ""
                        }
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "flex items-center",
                            attrs: { "href.prevent": "" }
                          },
                          [
                            _c("svg-icon", {
                              staticClass: "mx-2 cursor-pointer",
                              attrs: { size: "w-8 h-8", icon: "youtube" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-dropdown-menu",
                          { staticClass: "dropdown-userinfo" },
                          [
                            _c("div", { staticClass: "mb-1 font-bold" }, [
                              _vm._v(_vm._s(_vm.$t("Youtube")))
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "mb-1 font-italic" }, [
                              _vm._v(_vm._s(_vm.$t("Example")))
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mb-1 font-italic" },
                              [
                                _c("vs-input", {
                                  staticClass: "w-full",
                                  attrs: {
                                    placeholder:
                                      "https://www.youtube.com/channel/..."
                                  },
                                  model: {
                                    value: _vm.contact.youtube,
                                    callback: function($$v) {
                                      _vm.$set(_vm.contact, "youtube", $$v)
                                    },
                                    expression: "contact.youtube"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mb-1 font-italic text-center" },
                              [
                                _c(
                                  "vs-button",
                                  {
                                    staticClass: "cyan-dark",
                                    on: {
                                      click: function($event) {
                                        return _vm.saveContact()
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(_vm.$t("Save")))]
                                )
                              ],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "absolute flex items-center justify-between w-full px-6 py-4 stand-footer"
            },
            [
              _c("stand-button", {
                staticClass: "stand-button",
                attrs: {
                  icon: "list",
                  to: "/setting/stand/information",
                  text: _vm.$t("AddCompanyInfo")
                }
              }),
              _vm._v(" "),
              _c("stand-button", {
                staticClass: "stand-button",
                attrs: {
                  icon: "brochure",
                  to: "/setting/stand/brochure",
                  text: _vm.$t("UploadCatalog")
                }
              }),
              _vm._v(" "),
              _c("stand-button", {
                staticClass: "stand-button",
                attrs: {
                  icon: "gallery",
                  to: "/setting/stand/video",
                  text: _vm.$t("UploadPhoto")
                }
              }),
              _vm._v(" "),
              _c("stand-button", {
                staticClass: "stand-button",
                attrs: {
                  icon: "schedule-edit",
                  to: "/setting/stand/schedule",
                  text: _vm.$t("SeeSchedule")
                }
              }),
              _vm._v(" "),
              _c("stand-button", {
                staticClass: "stand-button",
                attrs: {
                  icon: "address-book",
                  to: "/setting/stand/contact",
                  text: _vm.$t("UploadBussiness")
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "absolute stand-wrapper",
              staticStyle: { border: "1px solid red" }
            },
            [
              _c(
                "div",
                { staticClass: "absolute", staticStyle: { top: "64px" } },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "flex flex-col items-center justify-center text-white relative px-3 py-8",
                      staticStyle: {
                        background: "#ffffff88",
                        color: "#ffffffcc",
                        height: "3rem"
                      }
                    },
                    [
                      _c("div", [_vm._v("VISUALIZACION")]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "flex ites-center" },
                        [
                          _c("feather-icon", { attrs: { icon: "EyeIcon" } }),
                          _vm._v(" "),
                          _c("div", { staticClass: "ml-2" }, [_vm._v("1234")])
                        ],
                        1
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "absolute",
                  staticStyle: { bottom: "74px", right: "0" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "flex flex-col items-center justify-center text-white relative px-2 py-4 bg-blue-dark chatting-btn"
                    },
                    [
                      _c("svg-icon", {
                        attrs: { size: "w-6 h-6", icon: "contact" }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "ml-2 text-center cursor-pointer btn-text",
                          on: {
                            click: function($event) {
                              return _vm.$router.push("/fair/chatting")
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("ChattingOwner")))]
                      )
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _vm._l(_vm.stand.stand_contents, function(s_content, index) {
                return _c(
                  "div",
                  {
                    key: "stand-content-item-" + index,
                    staticClass:
                      "absolute stand-item-wrapper flex flex-col items-center justify-center text-white",
                    style:
                      "left: " +
                      s_content.stand_type_item.left * 100 +
                      "%; top: " +
                      s_content.stand_type_item.top * 100 +
                      "%; width: " +
                      s_content.stand_type_item.width * 100 +
                      "%; height: " +
                      s_content.stand_type_item.height * 100 +
                      "%; background: #ffffff33; border: 1px solid green"
                  },
                  [
                    !s_content.content || s_content.content === ""
                      ? [
                          _c(
                            "div",
                            {
                              staticClass:
                                "stand-item text-center bg-blue-dark cursor-pointer"
                            },
                            [
                              _c(
                                "div",
                                {
                                  on: {
                                    click: function($event) {
                                      return _vm.browseStandContent(
                                        s_content.stand_type_item.type,
                                        s_content.id
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.$t("Upload")) +
                                      " " +
                                      _vm._s(s_content.stand_type_item.type)
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      : [
                          _c(
                            "div",
                            {
                              staticClass: "relative text-center",
                              staticStyle: { width: "100%", height: "100%" }
                            },
                            [
                              s_content.stand_type_item.type === "image"
                                ? [
                                    _c("img", {
                                      staticStyle: {
                                        width: "100%",
                                        height: "100%"
                                      },
                                      attrs: {
                                        src: "/fair_image/" + s_content.content
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.browseStandContent(
                                            s_content.stand_type_item.type,
                                            s_content.id
                                          )
                                        }
                                      }
                                    })
                                  ]
                                : s_content.stand_type_item.type === "video"
                                ? [
                                    _c("video", {
                                      staticStyle: {
                                        width: "100%",
                                        height: "100%"
                                      },
                                      attrs: {
                                        controls: "",
                                        src: "/fair_image/" + s_content.content
                                      }
                                    })
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _c("feather-icon", {
                                staticClass:
                                  "relative bg-yellow-dark p-2 cursor-pointer",
                                attrs: {
                                  svgClasses: "w-5 h-5",
                                  icon: "Trash2Icon"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.removeStandContent(s_content.id)
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("feather-icon", {
                                staticClass:
                                  "relative bg-cyan-dark p-2 ml-2 cursor-pointer",
                                attrs: {
                                  svgClasses: "w-5 h-5",
                                  icon: "Edit3Icon"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.browseStandContent(
                                      s_content.stand_type_item.type,
                                      s_content.id
                                    )
                                  }
                                }
                              })
                            ],
                            2
                          )
                        ]
                  ],
                  2
                )
              }),
              _vm._v(" "),
              _c("input", {
                ref: "refStandImageFile",
                staticClass: "hidden",
                attrs: { type: "file", accept: ".jpg, .png, .gif, .jpeg" },
                on: { change: _vm.contentChanged }
              }),
              _vm._v(" "),
              _c("input", {
                ref: "refStandVideoFile",
                staticClass: "hidden",
                attrs: { type: "file", accept: ".avi, .mp4, .3gp" },
                on: { change: _vm.contentChanged }
              })
            ],
            2
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/app/js/src/views/setting/Stand/StandHome.vue":
/*!****************************************************************!*\
  !*** ./resources/app/js/src/views/setting/Stand/StandHome.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StandHome_vue_vue_type_template_id_d1c42b1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StandHome.vue?vue&type=template&id=d1c42b1e& */ "./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=template&id=d1c42b1e&");
/* harmony import */ var _StandHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StandHome.vue?vue&type=script&lang=js& */ "./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _StandHome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StandHome.vue?vue&type=style&index=0&lang=scss& */ "./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _StandHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StandHome_vue_vue_type_template_id_d1c42b1e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StandHome_vue_vue_type_template_id_d1c42b1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/js/src/views/setting/Stand/StandHome.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StandHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StandHome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StandHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************!*\
  !*** ./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandHome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StandHome.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandHome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandHome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandHome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandHome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandHome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=template&id=d1c42b1e&":
/*!***********************************************************************************************!*\
  !*** ./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=template&id=d1c42b1e& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StandHome_vue_vue_type_template_id_d1c42b1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StandHome.vue?vue&type=template&id=d1c42b1e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=template&id=d1c42b1e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StandHome_vue_vue_type_template_id_d1c42b1e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StandHome_vue_vue_type_template_id_d1c42b1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
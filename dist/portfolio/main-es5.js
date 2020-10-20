(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+pZ0":
    /*!*************************************!*\
      !*** ./src/app/models/bio.model.ts ***!
      \*************************************/

    /*! exports provided: Bio */

    /***/
    function pZ0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Bio", function () {
        return Bio;
      });

      var Bio = function Bio(input) {
        _classCallCheck(this, Bio);

        Object.assign(this, input);
      };
      /***/

    },

    /***/
    "/mUe":
    /*!*********************************************!*\
      !*** ./src/app/services/git-hub.service.ts ***!
      \*********************************************/

    /*! exports provided: GitHubService */

    /***/
    function mUe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GitHubService", function () {
        return GitHubService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var GitHubService = /*#__PURE__*/function () {
        function GitHubService(http, router) {
          _classCallCheck(this, GitHubService);

          this.http = http;
          this.router = router;
          this.baseUrl = 'https://api.github.com/users/lattara';
          this.acsUrl = 'http://188.166.59.10:3000/api/tkn';
        }

        _createClass(GitHubService, [{
          key: "getEvents",
          value: function getEvents() {
            return this.http.get("".concat(this.baseUrl, "/events"));
          }
        }, {
          key: "getProfile",
          value: function getProfile() {
            return this.http.get("".concat(this.baseUrl));
          }
        }, {
          key: "getAccess",
          value: function getAccess() {
            return this.http.get("".concat(this.acsUrl));
          }
        }]);

        return GitHubService;
      }();

      GitHubService.ɵfac = function GitHubService_Factory(t) {
        return new (t || GitHubService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      GitHubService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: GitHubService,
        factory: GitHubService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GitHubService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "/s1f":
    /*!**********************************************!*\
      !*** ./src/app/pages/main/main.component.ts ***!
      \**********************************************/

    /*! exports provided: MainComponent */

    /***/
    function s1f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
        return MainComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_git_hub_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/git-hub.service */
      "/mUe");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../landing/landing.component */
      "fsYz");
      /* harmony import */


      var _components_title_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/title/title.component */
      "bwXy");
      /* harmony import */


      var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../projects/projects.component */
      "u/sh");
      /* harmony import */


      var _bio_bio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../bio/bio.component */
      "033W");
      /* harmony import */


      var _toolbox_toolbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../toolbox/toolbox.component */
      "C2CS");
      /* harmony import */


      var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../contact/contact.component */
      "XEn3");
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../components/footer/footer.component */
      "LmEr");

      var MainComponent = /*#__PURE__*/function () {
        function MainComponent(githubService, router, renderer) {
          _classCallCheck(this, MainComponent);

          this.githubService = githubService;
          this.router = router;
          this.renderer = renderer;
        }

        _createClass(MainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.githubService.getAccess().subscribe(function (resp) {
              var extractTKN = Object.values(resp);
              localStorage.setItem('token', extractTKN);

              _this.router.navigateByUrl('');
            });
          }
        }, {
          key: "scrollToContact",
          value: function scrollToContact() {
            this.tagFragment = 'app-contact';
            var element = this.renderer.selectRootElement("".concat(this.tagFragment), true);
            element.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }]);

        return MainComponent;
      }();

      MainComponent.ɵfac = function MainComponent_Factory(t) {
        return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_git_hub_service__WEBPACK_IMPORTED_MODULE_1__["GitHubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainComponent,
        selectors: [["app-main"]],
        decls: 10,
        vars: 6,
        consts: [[1, "main-container"], [3, "scrollToContact"], [3, "mode", "text"]],
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-landing", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scrollToContact", function MainComponent_Template_app_landing_scrollToContact_1_listener() {
              return ctx.scrollToContact();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-title", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-title", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-bio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-toolbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-title", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "section-subtitle")("text", "Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "section-subtitle")("text", "Biography");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "section-subtitle")("text", "Contact");
          }
        },
        directives: [_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"], _components_title_title_component__WEBPACK_IMPORTED_MODULE_4__["TitleComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"], _bio_bio_component__WEBPACK_IMPORTED_MODULE_6__["BioComponent"], _toolbox_toolbox_component__WEBPACK_IMPORTED_MODULE_7__["ToolboxComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]],
        styles: [".main-container[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-main',
            templateUrl: './main.component.html',
            styleUrls: ['./main.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_git_hub_service__WEBPACK_IMPORTED_MODULE_1__["GitHubService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, null);
      })();
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
      /*! /home/ana/Documents/wild-code-school/final_exam_prep/portfolio-front/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "033W":
    /*!********************************************!*\
      !*** ./src/app/pages/bio/bio.component.ts ***!
      \********************************************/

    /*! exports provided: BioComponent */

    /***/
    function W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BioComponent", function () {
        return BioComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_bio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/bio.service */
      "p9vV");
      /* harmony import */


      var src_app_services_education_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/education.service */
      "8SzB");
      /* harmony import */


      var src_app_services_experience_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/experience.service */
      "LUFc");
      /* harmony import */


      var _components_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/button/button.component */
      "7psr");
      /* harmony import */


      var _components_title_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/title/title.component */
      "bwXy");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function BioComponent_ul_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var edu_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", edu_r2.diploma_name, " / ", edu_r2.school, " ");
        }
      }

      function BioComponent_ul_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var exp_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", exp_r3.title, " / ", exp_r3.company, " / ", exp_r3.duration, "");
        }
      }

      var BioComponent = /*#__PURE__*/function () {
        function BioComponent(bioService, educationService, experienceService) {
          _classCallCheck(this, BioComponent);

          this.bioService = bioService;
          this.educationService = educationService;
          this.experienceService = experienceService;
          this.bio = [];
          this.education = [];
          this.experience = [];
          this.intro = '';
          this.cvLink = '';
          this.imageLink = '';
        }

        _createClass(BioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getBio();
            this.getEducations();
            this.getExperiences();
          }
        }, {
          key: "getBio",
          value: function getBio() {
            var _this2 = this;

            this.bioService.getBio().subscribe(function (data) {
              _this2.intro = data[0].intro;
              _this2.cvLink = data[0].cv_link;
              _this2.imageLink = data[0].image_link;
            });
          }
        }, {
          key: "getEducations",
          value: function getEducations() {
            var _this3 = this;

            this.educationService.getEducations().subscribe(function (data) {
              _this3.education = data;
            });
          }
        }, {
          key: "getExperiences",
          value: function getExperiences() {
            var _this4 = this;

            this.experienceService.getExperiences().subscribe(function (data) {
              _this4.experience = data;
            });
          }
        }, {
          key: "downloadCV",
          value: function downloadCV() {}
        }]);

        return BioComponent;
      }();

      BioComponent.ɵfac = function BioComponent_Factory(t) {
        return new (t || BioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_bio_service__WEBPACK_IMPORTED_MODULE_1__["BioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_education_service__WEBPACK_IMPORTED_MODULE_2__["EducationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_experience_service__WEBPACK_IMPORTED_MODULE_3__["ExperienceService"]));
      };

      BioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BioComponent,
        selectors: [["app-bio"]],
        decls: 23,
        vars: 11,
        consts: [[1, "container", "bio-container"], [1, "row", "align-self-center"], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4", "col-xl-4"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "bio-card"], ["src", "/assets/profile -img-bw-long.JPG", "alt", "profile photo", 1, "image-fluid", "profile-image"], [1, "row", "button-container"], ["href", "/assets/Ana_Topic_CV.pdf", "target", "_blank"], [1, "download-button", 3, "label", "icon", "click"], [1, "col-xs-12", "col-sm-12", "col-md-8", "col-lg-8", "col-xl-8", "bio-short-text-container"], [1, "row", "bio-short-text"], [1, "row", "text-intro"], [1, "row", "name", 3, "mode", "text"], [1, "divider-bio"], [1, "text-colums"], [1, "row", "skillset-container"], [1, "col-xs-12", "col-sm-12", "col-md-5", "col-lg-5", "col-xl-5", "education"], [1, "education-title", 3, "mode", "text"], [4, "ngFor", "ngForOf"], [1, "col-xs-12", "col-sm-12", "col-md-5", "col-lg-5", "col-xl-5", "experience"]],
        template: function BioComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BioComponent_Template_app_button_click_7_listener() {
              return ctx.downloadCV();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "please allow me to introduce myself");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-title", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-title", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, BioComponent_ul_19_Template, 3, 2, "ul", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-title", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, BioComponent_ul_22_Template, 3, 3, "ul", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "download CV")("icon", "fas fa-download");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "subtitle-bio")("text", "Ana Topic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.intro, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "subsubtitle")("text", "Education");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.education);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "subsubtitle")("text", "Experience");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experience);
          }
        },
        directives: [_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _components_title_title_component__WEBPACK_IMPORTED_MODULE_5__["TitleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
        styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n}\n\n.col-4[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 90%;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding-top: 30px;\n}\n\n.bio-card[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin-top: 70px;\n}\n\n.bio-short-text[_ngcontent-%COMP%] {\n  height: 39%;\n}\n\n.toolbox[_ngcontent-%COMP%], .experience[_ngcontent-%COMP%], .education[_ngcontent-%COMP%] {\n  padding: 10px 0px 20px 10px;\n  min-width: 210px;\n  justify-content: center;\n  margin-left: 20px;\n}\n\n.profile-image[_ngcontent-%COMP%] {\n  display: flex;\n  width: 230px;\n  border-radius: 20px;\n  margin: auto;\n}\n\n.profile-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: auto;\n  justify-content: center;\n  height: 250px;\n}\n\n.text-intro[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  font-size: 10px;\n  opacity: 0.6;\n}\n\n.name[_ngcontent-%COMP%] {\n  margin-left: 0px;\n  height: 25%;\n  align-items: center;\n}\n\n.text-colums[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  margin-top: 15px;\n  -moz-columns: 1 auto;\n       columns: 1 auto;\n  padding: 50px;\n  text-align: justify;\n}\n\n.divider-bio[_ngcontent-%COMP%] {\n  border-bottom: 2px solid var(--secondary-color);\n  width: 100%;\n  height: 5px;\n  margin-left: 0px;\n}\n\n.skillset-container[_ngcontent-%COMP%] {\n  align-items: center;\n  padding-top: 15px;\n  margin-left: 0px;\n}\n\nul[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.skillset-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 5px;\n}\n\n.toolbox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  -moz-columns: 2 auto;\n       columns: 2 auto;\n}\n\n.title[_ngcontent-%COMP%] {\n  margin: 0px 20px 0px 20px;\n}\n\n.fa-chevron-down[_ngcontent-%COMP%] {\n  font-size: 3em;\n  margin-top: 20px;\n}\n\n@media (max-width: 700px) {\n  .text-colums[_ngcontent-%COMP%] {\n    padding: 10px 50px 0px 50px;\n  }\n\n  .bio-short-text-container[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n\n  .col[_ngcontent-%COMP%] {\n    margin: 0px;\n    padding: 0px;\n  }\n\n  .text-intro[_ngcontent-%COMP%] {\n    justify-content: center;\n    margin: 30px 0px 0px 0px;\n    padding-left: 0px;\n  }\n\n  .name[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n\n  .button-container[_ngcontent-%COMP%] {\n    justify-content: center;\n    padding-top: 30px;\n  }\n\n  .divider-bio[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 80%;\n  }\n\n  .image-container[_ngcontent-%COMP%] {\n    justify-content: center;\n    align-items: flex-end;\n    padding: 0px 0px 20px 0px;\n  }\n\n  .profile-image[_ngcontent-%COMP%] {\n    width: 250px;\n  }\n\n  .education-title[_ngcontent-%COMP%] {\n    margin: auto;\n    text-align: center;\n  }\n\n  .education[_ngcontent-%COMP%] {\n    padding-left: 55px;\n    padding-right: 55px;\n    padding-top: 0px;\n    padding-bottom: 0px;\n    height: unset;\n    margin: 0px;\n  }\n\n  .experience[_ngcontent-%COMP%] {\n    padding-left: 55px;\n    padding-right: 55px;\n    padding-top: 0px;\n    padding-bottom: 0px;\n    height: unset;\n    margin: 0px;\n  }\n\n  .experience-title[_ngcontent-%COMP%] {\n    margin: auto;\n    text-align: center;\n  }\n\n  app-button[_ngcontent-%COMP%] {\n    margin: 50px, 0px, 0px, 50px;\n  }\n\n  .bio-card[_ngcontent-%COMP%] {\n    padding: 0px;\n    margin-top: 0px;\n  }\n\n  .skillset-container[_ngcontent-%COMP%] {\n    padding-top: 0px;\n  }\n\n  .bio-container[_ngcontent-%COMP%] {\n    .padding-top: 0px;\n  }\n}\n\n@media (min-width: 1045px) {\n  .text-colums[_ngcontent-%COMP%] {\n    -moz-columns: 3 auto;\n         columns: 3 auto;\n    text-align: justify;\n    padding: 0px;\n    margin-bottom: 0px;\n  }\n\n  .profile-image[_ngcontent-%COMP%] {\n    display: flex;\n    width: 300px;\n    border-radius: 20px;\n    margin: auto;\n  }\n\n  .bio-card[_ngcontent-%COMP%] {\n    padding: 0px;\n    margin-top: 70px;\n  }\n\n  .bio-container[_ngcontent-%COMP%] {\n    padding-top: 100px;\n  }\n\n  .toolbox[_ngcontent-%COMP%], .experience[_ngcontent-%COMP%], .education[_ngcontent-%COMP%] {\n    padding: 0px 0px 0px 0px;\n    margin-left: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmlvL2Jpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBOzs7RUFHSSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQ0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO09BQUEsZUFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUdBO0VBRUk7SUFDSSwyQkFBQTtFQUROOztFQUlFO0lBQ0ksWUFBQTtFQUROOztFQUdFO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUFBTjs7RUFFRTtJQUNJLHVCQUFBO0lBQ0Esd0JBQUE7SUFDQSxpQkFBQTtFQUNOOztFQUVFO0lBQ0ksV0FBQTtJQUNBLHVCQUFBO0VBQ047O0VBRUU7SUFDSSx1QkFBQTtJQUNBLGlCQUFBO0VBQ047O0VBRUU7SUFDSSxZQUFBO0lBQ0EsVUFBQTtFQUNOOztFQUVFO0lBQ0ksdUJBQUE7SUFDQSxxQkFBQTtJQUNBLHlCQUFBO0VBQ047O0VBQ0U7SUFDSSxZQUFBO0VBRU47O0VBQUU7SUFDSSxZQUFBO0lBQ0Esa0JBQUE7RUFHTjs7RUFERTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7RUFJTjs7RUFGRTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7RUFLTjs7RUFGRTtJQUNJLFlBQUE7SUFDQSxrQkFBQTtFQUtOOztFQUZFO0lBQ0ksNEJBQUE7RUFLTjs7RUFIRTtJQUNJLFlBQUE7SUFDQSxlQUFBO0VBTU47O0VBSEU7SUFDSSxnQkFBQTtFQU1OOztFQUhFO0lBQ0ksaUJBQUE7RUFNTjtBQUNGOztBQUZBO0VBQ0k7SUFDSSxvQkFBQTtTQUFBLGVBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQUlOOztFQURFO0lBQ0ksYUFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7RUFJTjs7RUFERTtJQUNJLFlBQUE7SUFDQSxnQkFBQTtFQUlOOztFQURFO0lBQ0ksa0JBQUE7RUFJTjs7RUFERTs7O0lBR0Esd0JBQUE7SUFDQSxnQkFBQTtFQUlGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9iaW8vYmlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbC00IHtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogOTAlO1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbi5iaW8tY2FyZCB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbi10b3A6IDcwcHg7XG59XG5cbi5iaW8tc2hvcnQtdGV4dCB7XG4gICAgaGVpZ2h0OiAzOSU7XG59XG5cbi50b29sYm94LFxuLmV4cGVyaWVuY2UsXG4uZWR1Y2F0aW9uIHtcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAyMHB4IDEwcHg7XG4gICAgbWluLXdpZHRoOiAyMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLnByb2ZpbGUtaW1hZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDIzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucHJvZmlsZS1pbWFnZSBpbWcge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDI1MHB4O1xufVxuXG4udGV4dC1pbnRybyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBvcGFjaXR5OiAwLjY7XG59XG5cbi5uYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIGhlaWdodDogMjUlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50ZXh0LWNvbHVtcyB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2Vjb25kYXJ5KTtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGNvbHVtbnM6IDEgYXV0bztcbiAgICBwYWRkaW5nOiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5kaXZpZGVyLWJpbyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLnNraWxsc2V0LWNvbnRhaW5lciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG51bCB7XG4gICAgbWFyZ2luOjBweFxufVxuXG4uc2tpbGxzZXQtY29udGFpbmVyIHVsIGxpIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4udG9vbGJveCB1bCB7XG4gICAgY29sdW1uczogMiBhdXRvO1xufVxuXG4udGl0bGUge1xuICAgIG1hcmdpbjogMHB4IDIwcHggMHB4IDIwcHg7XG59XG5cbi5mYS1jaGV2cm9uLWRvd24ge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG5cbiAgICAudGV4dC1jb2x1bXMge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDUwcHggMHB4IDUwcHg7XG4gICAgfVxuXG4gICAgLmJpby1zaG9ydC10ZXh0LWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgLmNvbCB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuICAgIC50ZXh0LWludHJvIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMzBweCAwcHggMHB4IDBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgfVxuXG4gICAgLm5hbWUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgfVxuXG4gICAgLmRpdmlkZXItYmlvIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB3aWR0aDogODAlO1xuICAgIH1cblxuICAgIC5pbWFnZS1jb250YWluZXIge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDIwcHggMHB4O1xuICAgIH1cbiAgICAucHJvZmlsZS1pbWFnZSB7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICB9XG4gICAgLmVkdWNhdGlvbi10aXRsZSB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuZWR1Y2F0aW9uIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1NXB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1NXB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgICAgICBoZWlnaHQ6IHVuc2V0O1xuICAgICAgICBtYXJnaW46MHB4XG4gICAgfVxuICAgIC5leHBlcmllbmNlIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1NXB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1NXB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgICAgICBoZWlnaHQ6IHVuc2V0O1xuICAgICAgICBtYXJnaW46MHB4XG4gICAgfVxuXG4gICAgLmV4cGVyaWVuY2UtdGl0bGUge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICBhcHAtYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luOiA1MHB4LCAwcHgsIDBweCwgNTBweDtcbiAgICB9XG4gICAgLmJpby1jYXJkIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgfVxuXG4gICAgLnNraWxsc2V0LWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgfVxuXG4gICAgLmJpby1jb250YWluZXJ7XG4gICAgICAgIC5wYWRkaW5nLXRvcDogMHB4O1xuICAgIH1cbiAgICBcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwNDVweCkge1xuICAgIC50ZXh0LWNvbHVtcyB7XG4gICAgICAgIGNvbHVtbnM6IDMgYXV0bztcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgfVxuXG4gICAgLnByb2ZpbGUtaW1hZ2Uge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG5cbiAgICAuYmlvLWNhcmQge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgfVxuXG4gICAgLmJpby1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgfVxuXG4gICAgLnRvb2xib3gsXG4uZXhwZXJpZW5jZSxcbi5lZHVjYXRpb24ge1xuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xufVxuICAgIFxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BioComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-bio',
            templateUrl: './bio.component.html',
            styleUrls: ['./bio.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_bio_service__WEBPACK_IMPORTED_MODULE_1__["BioService"]
          }, {
            type: src_app_services_education_service__WEBPACK_IMPORTED_MODULE_2__["EducationService"]
          }, {
            type: src_app_services_experience_service__WEBPACK_IMPORTED_MODULE_3__["ExperienceService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "0HNA":
    /*!*********************************************!*\
      !*** ./src/app/services/toolbox.service.ts ***!
      \*********************************************/

    /*! exports provided: ToolboxService */

    /***/
    function HNA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolboxService", function () {
        return ToolboxService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ToolboxService = /*#__PURE__*/function () {
        function ToolboxService(http, router) {
          _classCallCheck(this, ToolboxService);

          this.http = http;
          this.router = router;
          this.baseUrl = 'http://188.166.59.10:3000/api';
        }

        _createClass(ToolboxService, [{
          key: "getToolboxItems",
          value: function getToolboxItems() {
            return this.http.get("".concat(this.baseUrl, "/toolboxItem"));
          }
        }, {
          key: "deleteFromToolbox",
          value: function deleteFromToolbox(projectId, toolboxItemId) {
            var url = "".concat(this.baseUrl, "/toolbox/").concat(projectId, "&").concat(toolboxItemId);
            return this.http["delete"](url);
          }
        }, {
          key: "postToolboxItem",
          value: function postToolboxItem(projectId, toolboxItemId) {
            var object = {
              projectId: projectId,
              toolboxItemId: toolboxItemId
            };
            return this.http.post("".concat(this.baseUrl, "/toolbox"), {
              projectId: projectId,
              toolboxItemId: toolboxItemId
            });
          }
        }, {
          key: "getToolboxItemById",
          value: function getToolboxItemById(id) {
            return this.http.get("".concat(this.baseUrl, "/toolboxItem/").concat(id));
          }
        }, {
          key: "getToolboxItemByProjectId",
          value: function getToolboxItemByProjectId(id) {
            return this.http.get("".concat(this.baseUrl, "/toolbox/").concat(id));
          }
        }]);

        return ToolboxService;
      }();

      ToolboxService.ɵfac = function ToolboxService_Factory(t) {
        return new (t || ToolboxService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      ToolboxService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ToolboxService,
        factory: ToolboxService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolboxService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "1eeg":
    /*!********************************************!*\
      !*** ./src/app/guards/auth-guard.guard.ts ***!
      \********************************************/

    /*! exports provided: AuthGuardGuard */

    /***/
    function eeg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuardGuard", function () {
        return AuthGuardGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/users.service */
      "6Qg2");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthGuardGuard = /*#__PURE__*/function () {
        function AuthGuardGuard(usersService, router) {
          _classCallCheck(this, AuthGuardGuard);

          this.usersService = usersService;
          this.router = router;
        }

        _createClass(AuthGuardGuard, [{
          key: "canActivate",
          value: function canActivate() {
            var userInLocalSt = JSON.parse(localStorage.getItem('user'));

            if (this.usersService.loggedIn()) {
              return true;
            } else {
              this.router.navigateByUrl('/login');
              return false;
            }
          }
        }]);

        return AuthGuardGuard;
      }();

      AuthGuardGuard.ɵfac = function AuthGuardGuard_Factory(t) {
        return new (t || AuthGuardGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AuthGuardGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuardGuard,
        factory: AuthGuardGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "2OzE":
    /*!**********************************************************************!*\
      !*** ./src/app/dashboard/misc-dashboard/misc-dashboard.component.ts ***!
      \**********************************************************************/

    /*! exports provided: MiscDashboardComponent */

    /***/
    function OzE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MiscDashboardComponent", function () {
        return MiscDashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_models_experience__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/experience */
      "zTYo");
      /* harmony import */


      var src_app_services_experience_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/experience.service */
      "LUFc");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _components_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../components/button/button.component */
      "7psr");
      /* harmony import */


      var _components_title_title_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/title/title.component */
      "bwXy");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function MiscDashboardComponent_ul_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MiscDashboardComponent_ul_17_Template_i_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var exp_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.deleteExperience(exp_r1.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MiscDashboardComponent_ul_17_Template_i_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var exp_r1 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.editExperience(exp_r1.id, exp_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var exp_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", exp_r1.title, " / ", exp_r1.company, " / ", exp_r1.duration, " ");
        }
      }

      var MiscDashboardComponent = /*#__PURE__*/function () {
        function MiscDashboardComponent(experienceService) {
          _classCallCheck(this, MiscDashboardComponent);

          this.experienceService = experienceService;
          this.newExperience = new src_app_models_experience__WEBPACK_IMPORTED_MODULE_2__["Experience"]();
          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            company: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            duration: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }

        _createClass(MiscDashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllExperiences();
          }
        }, {
          key: "saveExperience",
          value: function saveExperience() {
            var _this5 = this;

            this.newExperience.title = this.formGroup.value.title;
            this.newExperience.company = this.formGroup.value.company;
            this.newExperience.duration = this.formGroup.value.duration;
            this.experienceService.postExperience(this.newExperience).subscribe(function (result) {
              return _this5.experiences.push(result);
            });
          }
        }, {
          key: "getAllExperiences",
          value: function getAllExperiences() {
            var _this6 = this;

            this.experienceService.getExperiences().subscribe(function (results) {
              _this6.experiences = results;
            });
          }
        }, {
          key: "deleteExperience",
          value: function deleteExperience(id) {
            var _this7 = this;

            this.experienceService.deleteExperience(id).subscribe(function () {
              _this7.experiences.splice(_this7.experiences.findIndex(function (item) {
                return item.id === id;
              }), 1);
            });
          }
        }, {
          key: "editExperience",
          value: function editExperience(id, experience) {
            this.formGroup.patchValue(experience);
          }
        }]);

        return MiscDashboardComponent;
      }();

      MiscDashboardComponent.ɵfac = function MiscDashboardComponent_Factory(t) {
        return new (t || MiscDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_experience_service__WEBPACK_IMPORTED_MODULE_3__["ExperienceService"]));
      };

      MiscDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MiscDashboardComponent,
        selectors: [["app-misc-dashboard"]],
        decls: 18,
        vars: 6,
        consts: [[1, "create-project-form", "col-12", 3, "formGroup"], [1, "form-group"], ["appearance", "outline", "color", "accent"], ["matInput", "", "placeholder", "Placeholder", "formControlName", "title", "color", "accent", 1, "col-6"], ["matInput", "", "placeholder", "Placeholder", "formControlName", "company", 1, "col-6"], ["matInput", "", "placeholder", "Placeholder", "formControlName", "duration", 1, "col-6"], [1, "download-button", 3, "label", "icon", "click"], [1, "col-12", "experience"], [1, "education-title", 3, "mode", "text"], [4, "ngFor", "ngForOf"], [1, "far", "fa-trash-alt", 3, "click"], [1, "far", "fa-edit", 3, "click"]],
        template: function MiscDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Company");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Duration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MiscDashboardComponent_Template_app_button_click_14_listener() {
              return ctx.saveExperience();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-title", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MiscDashboardComponent_ul_17_Template, 5, 3, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Save")("icon", "fas fa-download");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "subsubtitle")("text", "Experiences");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experiences);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _components_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"], _components_title_title_component__WEBPACK_IMPORTED_MODULE_7__["TitleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
        styles: [".form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-width: 300px;\n  margin-top: 100px;\n}\n\n.fa-trash-alt[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-left: 10px;\n}\n\n.fa-trash-alt[_ngcontent-%COMP%]:hover {\n  color: var(--secondary-color);\n}\n\ninput.mat-input-element[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL21pc2MtZGFzaGJvYXJkL21pc2MtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksNkJBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9taXNjLWRhc2hib2FyZC9taXNjLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmZvcm0tZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG4uZmEtdHJhc2gtYWx0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5mYS10cmFzaC1hbHQ6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG5pbnB1dC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MiscDashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-misc-dashboard',
            templateUrl: './misc-dashboard.component.html',
            styleUrls: ['./misc-dashboard.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_experience_service__WEBPACK_IMPORTED_MODULE_3__["ExperienceService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "3ITz":
    /*!*********************************************!*\
      !*** ./src/app/services/contact.service.ts ***!
      \*********************************************/

    /*! exports provided: ContactService */

    /***/
    function ITz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactService", function () {
        return ContactService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ContactService = /*#__PURE__*/function () {
        function ContactService(http) {
          _classCallCheck(this, ContactService);

          this.http = http;
        }

        _createClass(ContactService, [{
          key: "sendMail",
          value: function sendMail(name, email, phone, message) {
            var url = 'http://188.166.59.10:3000/api/contact/send';
            var emailData = {
              name: name,
              email: email,
              phone: phone,
              message: message
            };
            return this.http.post(url, emailData, {
              observe: 'response'
            });
          }
        }]);

        return ContactService;
      }();

      ContactService.ɵfac = function ContactService_Factory(t) {
        return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ContactService,
        factory: ContactService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "6Qg2":
    /*!*******************************************!*\
      !*** ./src/app/services/users.service.ts ***!
      \*******************************************/

    /*! exports provided: UsersService */

    /***/
    function Qg2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersService", function () {
        return UsersService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _git_hub_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./git-hub.service */
      "/mUe");

      var UsersService = /*#__PURE__*/function () {
        function UsersService(http, router, githubService) {
          _classCallCheck(this, UsersService);

          this.http = http;
          this.router = router;
          this.githubService = githubService;
          this.baseUrl = 'http://188.166.59.10:3000/api/auth';
        }

        _createClass(UsersService, [{
          key: "registerUser",
          value: function registerUser(user) {
            var registerURL = "".concat(this.baseUrl, "/register");
            return this.http.post(registerURL, user);
          }
        }, {
          key: "login",
          value: function login(user) {
            var loginURL = "".concat(this.baseUrl, "/login");
            this.getCurrentUser(user).subscribe(function (result) {
              localStorage.setItem('user', JSON.stringify(result));
              var userStoraged = JSON.parse(localStorage.getItem('user'));
            });
            localStorage.setItem('user', JSON.stringify(user));
            return this.http.post(loginURL, user);
          }
        }, {
          key: "loggedIn",
          value: function loggedIn() {
            return !!localStorage.getItem('token');
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return localStorage.getItem('token');
          }
        }, {
          key: "getCurrentUser",
          value: function getCurrentUser(user) {
            var registerURL = "".concat(this.baseUrl, "/currentUser");
            return this.http.post(registerURL, user);
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('token');
            this.getGitToken();
            this.router.navigateByUrl('');
          }
        }, {
          key: "getGitToken",
          value: function getGitToken() {
            this.githubService.getAccess().subscribe(function (resp) {
              var extractTKN = Object.values(resp);
              localStorage.setItem('token', extractTKN);
            });
            this.githubService.getAccess();
          }
        }]);

        return UsersService;
      }();

      UsersService.ɵfac = function UsersService_Factory(t) {
        return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_git_hub_service__WEBPACK_IMPORTED_MODULE_3__["GitHubService"]));
      };

      UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UsersService,
        factory: UsersService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _git_hub_service__WEBPACK_IMPORTED_MODULE_3__["GitHubService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "7psr":
    /*!*******************************************************!*\
      !*** ./src/app/components/button/button.component.ts ***!
      \*******************************************************/

    /*! exports provided: ButtonComponent */

    /***/
    function psr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonComponent", function () {
        return ButtonComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ButtonComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
        }
      }

      function ButtonComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonComponent_ng_template_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.onClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.label, " ");
        }
      }

      function ButtonComponent_ng_template_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.label, " ");
        }
      }

      function ButtonComponent_ng_template_4_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.label, " ");
        }
      }

      function ButtonComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonComponent_ng_template_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.onClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonComponent_ng_template_4_div_1_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonComponent_ng_template_4_div_2_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.imageName !== undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.imageName === undefined);
        }
      }

      var ButtonComponent = /*#__PURE__*/function () {
        function ButtonComponent() {
          _classCallCheck(this, ButtonComponent);
        }

        _createClass(ButtonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "checkButtonType",
          value: function checkButtonType(icon, imageName) {
            if (icon !== undefined && icon !== null) {
              return true;
            } else if (imageName !== undefined && imageName !== null) {
              return false;
            }
          }
        }, {
          key: "onClick",
          value: function onClick() {}
        }]);

        return ButtonComponent;
      }();

      ButtonComponent.ɵfac = function ButtonComponent_Factory(t) {
        return new (t || ButtonComponent)();
      };

      ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonComponent,
        selectors: [["app-button"]],
        inputs: {
          label: "label",
          disabled: "disabled",
          icon: "icon",
          imageName: "imageName"
        },
        decls: 6,
        vars: 3,
        consts: [[1, "container-button"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], [1, "btn", "btn-primary", "action-button", 3, "disabled", "click"], [4, "ngIf"]],
        template: function ButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonComponent_div_1_Template, 1, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonComponent_ng_template_2_Template, 3, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ButtonComponent_ng_template_4_Template, 3, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkButtonType(ctx.icon, ctx.imageName))("ngIfThen", _r1)("ngIfElse", _r3);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.action-button[_ngcontent-%COMP%] {\n  background: var(--primary-color) !important;\n  border: 1px solid var(--white);\n  font-family: var(--font-secondary);\n  text-transform: uppercase;\n  font-size: 12px;\n  padding: 10px 20px;\n  color: white;\n  margin: 10px 0px 10px 0px;\n}\n\n.action-button[_ngcontent-%COMP%]:hover {\n  background: var(--secondary-color) !important;\n  border-color: var(--secondary-color) !important;\n  font-weight: bolder;\n}\n\n.action-button[_ngcontent-%COMP%]:focus, .action-button.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0;\n  outline: none;\n}\n\n.action-button-img-width[_ngcontent-%COMP%] {\n  width: 25px;\n}\n\n.action-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.container-action-button[_ngcontent-%COMP%] {\n  margin: 40px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLDJDQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSw2Q0FBQTtFQUNBLCtDQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTs7RUFFSSxtQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBQ0EscUJBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmFjdGlvbi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0td2hpdGUpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNlY29uZGFyeSk7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46MTBweCAwcHggMTBweCAwcHg7XG59XG5cbi5hY3Rpb24tYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLmFjdGlvbi1idXR0b246Zm9jdXMsXG4uYWN0aW9uLWJ1dHRvbi5mb2N1cyB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMDtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uYWN0aW9uLWJ1dHRvbi1pbWctd2lkdGgge1xuICAgIHdpZHRoOiAyNXB4O1xufVxuXG4uYWN0aW9uLWJ1dHRvbjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmNvbnRhaW5lci1hY3Rpb24tYnV0dG9uIHtcbiAgICBtYXJnaW46IDQwcHggMHB4O1xufVxuLyogQlVUVE9OID09PT09PT09PiAqLyJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-button',
            templateUrl: './button.component.html',
            styleUrls: ['./button.component.scss']
          }]
        }], function () {
          return [];
        }, {
          label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          imageName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "8SzB":
    /*!***********************************************!*\
      !*** ./src/app/services/education.service.ts ***!
      \***********************************************/

    /*! exports provided: EducationService */

    /***/
    function SzB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EducationService", function () {
        return EducationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var EducationService = /*#__PURE__*/function () {
        function EducationService(http, router) {
          _classCallCheck(this, EducationService);

          this.http = http;
          this.router = router;
          this.baseUrl = 'http://188.166.59.10:3000/api/education';
        }

        _createClass(EducationService, [{
          key: "getEducations",
          value: function getEducations() {
            return this.http.get("".concat(this.baseUrl));
          }
        }, {
          key: "putEducation",
          value: function putEducation(education, id) {
            var putEducationURL = "".concat(this.baseUrl, "/").concat(id);
            return this.http.put(putEducationURL, education);
          }
        }, {
          key: "postEducation",
          value: function postEducation(education) {
            return this.http.post("".concat(this.baseUrl), education);
          }
        }, {
          key: "deleteEducation",
          value: function deleteEducation(id) {
            var url = "".concat(this.baseUrl, "/").concat(id);
            return this.http["delete"](url);
          }
        }, {
          key: "getEducationById",
          value: function getEducationById(id) {
            return this.http.get("".concat(this.baseUrl, "/").concat(id));
          }
        }]);

        return EducationService;
      }();

      EducationService.ɵfac = function EducationService_Factory(t) {
        return new (t || EducationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      EducationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: EducationService,
        factory: EducationService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
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
    "BXHZ":
    /*!*********************************************!*\
      !*** ./src/app/models/projectDataSource.ts ***!
      \*********************************************/

    /*! exports provided: ProjectsDataSource */

    /***/
    function BXHZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectsDataSource", function () {
        return ProjectsDataSource;
      });
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var ProjectsDataSource = /*#__PURE__*/function (_angular_cdk_collecti) {
        _inherits(ProjectsDataSource, _angular_cdk_collecti);

        var _super = _createSuper(ProjectsDataSource);

        function ProjectsDataSource(projects) {
          var _this8;

          _classCallCheck(this, ProjectsDataSource);

          _this8 = _super.call(this);
          _this8.projects = projects;
          return _this8;
        }

        _createClass(ProjectsDataSource, [{
          key: "connect",
          value: function connect() {
            var rows = [];
            this.projects.forEach(function (project) {
              return rows.push(project);
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(rows);
          }
        }, {
          key: "disconnect",
          value: function disconnect() {}
        }]);

        return ProjectsDataSource;
      }(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["DataSource"]);
      /***/

    },

    /***/
    "C2CS":
    /*!****************************************************!*\
      !*** ./src/app/pages/toolbox/toolbox.component.ts ***!
      \****************************************************/

    /*! exports provided: ToolboxComponent */

    /***/
    function C2CS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolboxComponent", function () {
        return ToolboxComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _services_toolboxItem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/toolboxItem.service */
      "G9da");
      /* harmony import */


      var _services_git_hub_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/git-hub.service */
      "/mUe");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_title_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/title/title.component */
      "bwXy");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");

      function ToolboxComponent_li_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-progress-bar", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r10.sortcut);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r10.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r10.master_level);
        }
      }

      function ToolboxComponent_mat_header_cell_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " EVENT TYPE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ToolboxComponent_mat_cell_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "EVENT TYPE: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r11.type);
        }
      }

      function ToolboxComponent_mat_header_cell_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " REPOSITORY ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ToolboxComponent_mat_cell_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "REPOSITORY: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.repo.name, "");
        }
      }

      function ToolboxComponent_mat_header_cell_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " TIME ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ToolboxComponent_mat_cell_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "TIME: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r13.created_at);
        }
      }

      function ToolboxComponent_mat_header_row_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function ToolboxComponent_mat_row_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
        }
      }

      var ToolboxComponent = /*#__PURE__*/function () {
        function ToolboxComponent(toolboxitemService, githubService, router) {
          _classCallCheck(this, ToolboxComponent);

          this.toolboxitemService = toolboxitemService;
          this.githubService = githubService;
          this.router = router;
          this.toolboxItems = [];
          this.githubEvents = [];
          this.displayedColumns = ['EVENT TYPE', 'REPOSITORY', 'TIME'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.githubEvents);
        }

        _createClass(ToolboxComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.toolboxitemService.getToolboxItems().subscribe(function (response) {
              _this9.toolboxItems = response;
            });
            this.githubService.getEvents().subscribe(function (response) {
              _this9.githubEvents = response;
              _this9.dataSource.data = response.slice(0, 5);
            });
            this.githubService.getProfile().subscribe(function (response) {
              var profile = response; // tslint:disable-next-line: no-string-literal

              _this9.repos = profile['public_repos']; // tslint:disable-next-line: no-string-literal

              _this9.gists = profile['public_gists'];
            });
          }
        }]);

        return ToolboxComponent;
      }();

      ToolboxComponent.ɵfac = function ToolboxComponent_Factory(t) {
        return new (t || ToolboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_toolboxItem_service__WEBPACK_IMPORTED_MODULE_2__["ToolboxItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_git_hub_service__WEBPACK_IMPORTED_MODULE_3__["GitHubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      ToolboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ToolboxComponent,
        selectors: [["app-toolbox"]],
        decls: 28,
        vars: 12,
        consts: [[1, "container", "justify-content-center"], [1, "row", "toolbox-container"], [1, "toolbox-title", "justify-content-center", 3, "mode", "text"], [1, "toolboxItems-container", "justify-content-center", "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12"], ["class", "skill-grouped", 4, "ngFor", "ngForOf"], [1, "github-activity", "col-12"], [1, "table-container"], [3, "dataSource"], ["table", ""], ["matColumnDef", "EVENT TYPE"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "REPOSITORY"], ["matColumnDef", "TIME"], [3, "mode", "text"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [1, "col-12", "repos-gists"], [1, "skill-grouped"], ["mode", "determinate", 3, "value"], [1, "mobile-label"], [1, "table-content"]],
        template: function ToolboxComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-title", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ToolboxComponent_li_4_Template, 4, 5, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-title", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-table", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ToolboxComponent_mat_header_cell_11_Template, 2, 0, "mat-header-cell", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ToolboxComponent_mat_cell_12_Template, 5, 1, "mat-cell", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ToolboxComponent_mat_header_cell_14_Template, 2, 0, "mat-header-cell", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ToolboxComponent_mat_cell_15_Template, 5, 1, "mat-cell", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ToolboxComponent_mat_header_cell_17_Template, 2, 0, "mat-header-cell", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ToolboxComponent_mat_cell_18_Template, 5, 1, "mat-cell", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-title", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ToolboxComponent_mat_header_row_20_Template, 1, 0, "mat-header-row", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ToolboxComponent_mat_row_21_Template, 1, 0, "mat-row", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "subtitle")("text", "Technologies I feel comfortable working with");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toolboxItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "subtitle")("text", "Recent GitHub activity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "section-subtitle")("text", "Recent GitHub activity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total repositories: ", ctx.repos, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total Gists: ", ctx.gists, "");
          }
        },
        directives: [_components_title_title_component__WEBPACK_IMPORTED_MODULE_5__["TitleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBar"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
        styles: ["*[_ngcontent-%COMP%] {\n  color: var(--white);\n  justify-content: center;\n}\n\n.toolbox-container[_ngcontent-%COMP%] {\n  padding-top: 50px;\n}\n\n.toolboxItems-container[_ngcontent-%COMP%] {\n  -moz-column-count: 2;\n       column-count: 2;\n  margin: 10px 0px 50px 50px;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n  padding-top: 50px;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: 500px;\n  background: var(--primary-darkened);\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-radius: 14px;\n}\n\n.mobile-label[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.repository-nmb[_ngcontent-%COMP%], .gitst-nmb[_ngcontent-%COMP%] {\n  width: 15%;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n[_ngcontent-%COMP%]:last-child   .toolbox[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n\n.mat-progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.repos-gists[_ngcontent-%COMP%] {\n  margin-left: 0px;\n  margin-top: 20px;\n}\n\n@media (max-width: 700px) {\n  .toolbox-title[_ngcontent-%COMP%] {\n    margin: 20px 0px 0px 0px;\n    text-align: center;\n  }\n\n  .toolboxItems-container[_ngcontent-%COMP%] {\n    -moz-column-count: 2;\n         column-count: 2;\n    margin: 11px 11px 40px 40px;\n  }\n\n  .table-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    max-height: unset;\n    min-width: 300px;\n  }\n\n  .mat-table[_ngcontent-%COMP%] {\n    max-height: -webkit-fit-content;\n    max-height: -moz-fit-content;\n    max-height: fit-content;\n    width: 80%;\n    margin: auto;\n  }\n\n  .mobile-label[_ngcontent-%COMP%] {\n    width: 100px;\n    display: inline-block;\n    font-weight: bold;\n  }\n\n  .mat-cell[_ngcontent-%COMP%]:first-of-type {\n    padding-left: 0px;\n    padding-top: 50px;\n  }\n\n  .table-content[_ngcontent-%COMP%] {\n    text-align: right;\n  }\n\n  .mat-header-row[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mat-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: start;\n    margin: 0px 30px 0px 30px;\n  }\n\n  .repository-nmb[_ngcontent-%COMP%], .gitst-nmb[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  mat-cell[_ngcontent-%COMP%]:last-of-type {\n    padding-right: 0px;\n  }\n\n  .mat-cell[_ngcontent-%COMP%] {\n    min-height: unset;\n    width: 100%;\n    justify-content: space-between;\n  }\n\n  .table-content[_ngcontent-%COMP%] {\n    text-align: right;\n  }\n\n  .repos-gists[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  .repos-gists[_ngcontent-%COMP%] {\n    margin-left: 40px;\n    margin-top: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdG9vbGJveC90b29sYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO09BQUEsZUFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBSUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFJQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtBQURKOztBQUlBOztFQUVJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSTtJQUNJLHdCQUFBO0lBQ0Esa0JBQUE7RUFETjs7RUFJRTtJQUNJLG9CQUFBO1NBQUEsZUFBQTtJQUNBLDJCQUFBO0VBRE47O0VBTUU7SUFDSSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VBSE47O0VBTUU7SUFDSSwrQkFBQTtJQUFBLDRCQUFBO0lBQUEsdUJBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQUhOOztFQU1FO0lBQ0ksWUFBQTtJQUNBLHFCQUFBO0lBQ0EsaUJBQUE7RUFITjs7RUFNRTtJQUNJLGlCQUFBO0lBQ0EsaUJBQUE7RUFITjs7RUFNRTtJQUNJLGlCQUFBO0VBSE47O0VBTUU7SUFDSSxhQUFBO0VBSE47O0VBTUU7SUFDSSxzQkFBQTtJQUNBLGtCQUFBO0lBQ0EseUJBQUE7RUFITjs7RUFNRTs7SUFFSSxXQUFBO0VBSE47O0VBTUU7SUFDSSxrQkFBQTtFQUhOOztFQU1FO0lBQ0ksaUJBQUE7SUFDQSxXQUFBO0lBQ0EsOEJBQUE7RUFITjs7RUFNRTtJQUNJLGlCQUFBO0VBSE47O0VBTUU7SUFDSSxlQUFBO0VBSE47O0VBS0U7SUFDSSxpQkFBQTtJQUNBLGdCQUFBO0VBRk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rvb2xib3gvdG9vbGJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50b29sYm94LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbi50b29sYm94SXRlbXMtY29udGFpbmVyIHtcbiAgICBjb2x1bW4tY291bnQ6IDI7XG4gICAgbWFyZ2luOiAxMHB4IDBweCA1MHB4IDUwcHg7XG59XG5cbi8vIHRhYmxlXG5cbi50YWJsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4ubWF0LXRhYmxlIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWRhcmtlbmVkKTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcbn1cblxuLm1vYmlsZS1sYWJlbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnJlcG9zaXRvcnktbm1iLFxuLmdpdHN0LW5tYiB7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG46bGFzdC1jaGlsZCAudG9vbGJveCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLm1hdC1wcm9ncmVzcy1iYXIge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ucmVwb3MtZ2lzdHMge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgLnRvb2xib3gtdGl0bGUge1xuICAgICAgICBtYXJnaW46IDIwcHggMHB4IDBweCAwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAudG9vbGJveEl0ZW1zLWNvbnRhaW5lciB7XG4gICAgICAgIGNvbHVtbi1jb3VudDogMjtcbiAgICAgICAgbWFyZ2luOiAxMXB4IDExcHggNDBweCA0MHB4O1xuICAgIH1cblxuICAgIC8vIHRhYmxlIHRvIHJlcG9uc2l2ZVxuXG4gICAgLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG1heC1oZWlnaHQ6IHVuc2V0O1xuICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIH1cblxuICAgIC5tYXQtdGFibGUge1xuICAgICAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cblxuICAgIC5tb2JpbGUtbGFiZWwge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgfVxuXG4gICAgLnRhYmxlLWNvbnRlbnQge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG5cbiAgICAubWF0LWhlYWRlci1yb3cge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5tYXQtcm93IHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgICAgICBtYXJnaW46IDBweCAzMHB4IDBweCAzMHB4O1xuICAgIH1cblxuICAgIC5yZXBvc2l0b3J5LW5tYixcbiAgICAuZ2l0c3Qtbm1iIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgbWF0LWNlbGw6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgIH1cblxuICAgIC5tYXQtY2VsbCB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHVuc2V0O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgIC50YWJsZS1jb250ZW50IHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuXG4gICAgLnJlcG9zLWdpc3RzICoge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuICAgIC5yZXBvcy1naXN0cyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cblxuXG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolboxComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-toolbox',
            templateUrl: './toolbox.component.html',
            styleUrls: ['./toolbox.component.scss']
          }]
        }], function () {
          return [{
            type: _services_toolboxItem_service__WEBPACK_IMPORTED_MODULE_2__["ToolboxItemService"]
          }, {
            type: _services_git_hub_service__WEBPACK_IMPORTED_MODULE_3__["GitHubService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "CoJz":
    /*!**********************************************!*\
      !*** ./src/app/services/projects.service.ts ***!
      \**********************************************/

    /*! exports provided: ProjectsService */

    /***/
    function CoJz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectsService", function () {
        return ProjectsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ProjectsService = /*#__PURE__*/function () {
        function ProjectsService(http, router) {
          _classCallCheck(this, ProjectsService);

          this.http = http;
          this.router = router;
          this.baseUrl = 'http://188.166.59.10:3000/api';
        }

        _createClass(ProjectsService, [{
          key: "getlastId",
          value: function getlastId() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.http.get('http://188.166.59.10:3000/api/projects/lastId'));
          }
        }, {
          key: "getProjects",
          value: function getProjects() {
            return this.http.get("".concat(this.baseUrl, "/projects"));
          }
        }, {
          key: "putProject",
          value: function putProject(project, id) {
            var putProjectsURL = "".concat(this.baseUrl, "/projects/").concat(id);
            return this.http.put(putProjectsURL, project);
          }
        }, {
          key: "postProject",
          value: function postProject(project) {
            return this.http.post("".concat(this.baseUrl, "/projects"), project);
          }
        }, {
          key: "deleteProject",
          value: function deleteProject(id) {
            var url = "".concat(this.baseUrl, "/projects/").concat(id);
            return this.http["delete"](url);
          }
        }, {
          key: "getProjectById",
          value: function getProjectById(id) {
            return this.http.get("".concat(this.baseUrl, "/projects/").concat(id));
          }
        }]);

        return ProjectsService;
      }();

      ProjectsService.ɵfac = function ProjectsService_Factory(t) {
        return new (t || ProjectsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      ProjectsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProjectsService,
        factory: ProjectsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "D8EZ":
    /*!************************************************!*\
      !*** ./src/app/pages/login/login.component.ts ***!
      \************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function D8EZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/users.service */
      "6Qg2");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_title_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/title/title.component */
      "bwXy");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _components_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../components/button/button.component */
      "7psr");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(loginService, router) {
          _classCallCheck(this, LoginComponent);

          this.loginService = loginService;
          this.router = router;
          this.loginUserData = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            identifiant: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "loginUser",
          value: function loginUser() {
            var _this10 = this;

            var user = this.loginUserData.value;
            this.loginService.login(user).subscribe(function (result) {
              var token = result['token'];
              localStorage.setItem('token', token);

              _this10.router.navigateByUrl('/dashboard');
            }, function (err) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire(err.error);
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 16,
        vars: 7,
        consts: [[1, "container"], [1, "row", "title-login", 3, "mode", "text"], [1, "row", "login-form-container"], [1, "form-frame"], [3, "formGroup"], ["appearance", "outline", 1, "col-12"], ["formControlName", "identifiant", "matInput", "", "color", "accent"], ["appearance", "outline", "color", "accent", 1, "col-12"], ["matInput", "", "type", "password", "formControlName", "password", "color", "accent"], [1, "login-button", 3, "label", "icon", "click"], ["routerLink", "/", 1, "go-home-button", 3, "label", "icon"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-title", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Identifiant");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_app_button_click_14_listener() {
              return ctx.loginUser();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "subtitle")("text", "login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginUserData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "login")("icon", "far fa-envelope");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Go home")("icon", "far fa-envelope");
          }
        },
        directives: [_components_title_title_component__WEBPACK_IMPORTED_MODULE_5__["TitleComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _components_button_button_component__WEBPACK_IMPORTED_MODULE_8__["ButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
        styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n.login-form-container[_ngcontent-%COMP%] {\n  justify-content: center;\n  margin-top: 10px;\n}\n\n.title-login[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n\n.form-frame[_ngcontent-%COMP%] {\n  border: 1px solid white;\n  padding: 50px 50px 50px 50px;\n  max-width: 550px;\n}\n\n.login-button[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.already-acc[_ngcontent-%COMP%] {\n  text-align: right;\n  color: var(--white);\n}\n\ninput.mat-input-element[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubG9naW4tZm9ybS1jb250YWluZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi50aXRsZS1sb2dpbiB7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbi5mb3JtLWZyYW1lIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBwYWRkaW5nOiA1MHB4IDUwcHggNTBweCA1MHB4O1xuICAgIG1heC13aWR0aDogNTUwcHg7XG59XG5cbi5sb2dpbi1idXR0b24ge1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLmFscmVhZHktYWNjIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG5pbnB1dC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "G9da":
    /*!*************************************************!*\
      !*** ./src/app/services/toolboxItem.service.ts ***!
      \*************************************************/

    /*! exports provided: ToolboxItemService */

    /***/
    function G9da(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolboxItemService", function () {
        return ToolboxItemService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ToolboxItemService = /*#__PURE__*/function () {
        function ToolboxItemService(http, router) {
          _classCallCheck(this, ToolboxItemService);

          this.http = http;
          this.router = router;
          this.baseUrl = 'http://188.166.59.10:3000/api';
        }

        _createClass(ToolboxItemService, [{
          key: "putToolboxItem",
          value: function putToolboxItem(toolboxItem, id) {
            var putProjectsURL = "".concat(this.baseUrl, "/toolboxItem/").concat(id);
            return this.http.put(putProjectsURL, toolboxItem);
          }
        }, {
          key: "postToolboxItem",
          value: function postToolboxItem(toolboxItem) {
            return this.http.post("".concat(this.baseUrl, "/toolboxItem"), toolboxItem);
          }
        }, {
          key: "getToolboxItems",
          value: function getToolboxItems() {
            return this.http.get("".concat(this.baseUrl, "/toolboxItem"));
          }
        }, {
          key: "deleteToolboxItem",
          value: function deleteToolboxItem(id) {
            var url = "".concat(this.baseUrl, "/toolboxItem/").concat(id);
            return this.http["delete"](url);
          }
        }, {
          key: "getToolboxItemById",
          value: function getToolboxItemById(id) {
            return this.http.get("".concat(this.baseUrl, "/toolboxItem/").concat(id));
          }
        }, {
          key: "getToolboxItemByProjectId",
          value: function getToolboxItemByProjectId(id) {
            return this.http.get("".concat(this.baseUrl, "/toolbox/").concat(id));
          }
        }]);

        return ToolboxItemService;
      }();

      ToolboxItemService.ɵfac = function ToolboxItemService_Factory(t) {
        return new (t || ToolboxItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      ToolboxItemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ToolboxItemService,
        factory: ToolboxItemService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolboxItemService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "GXNk":
    /*!********************************************************************!*\
      !*** ./src/app/dashboard/bio-dashboard/bio-dashboard.component.ts ***!
      \********************************************************************/

    /*! exports provided: BioDashboardComponent */

    /***/
    function GXNk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BioDashboardComponent", function () {
        return BioDashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_models_bio_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/bio.model */
      "+pZ0");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _services_bio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/bio.service */
      "p9vV");
      /* harmony import */


      var _components_title_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../components/title/title.component */
      "bwXy");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _components_button_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../components/button/button.component */
      "7psr");

      var BioDashboardComponent = /*#__PURE__*/function () {
        function BioDashboardComponent(fb, http, bioService) {
          _classCallCheck(this, BioDashboardComponent);

          this.fb = fb;
          this.http = http;
          this.bioService = bioService;
          this.filesToUpload = [];
          this.modifyBioForm = this.fb.group({
            intro: [''],
            cvLink: this.fb.control(''),
            profileImgLink: this.fb.control('')
          });
        }

        _createClass(BioDashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onFileModify",
          value: function onFileModify(event) {
            if (event.target.files.length > 0) {
              this.filesToUpload.push(event.target.files[0]);
              this.modifyBioForm.get('cvLink').setValue(this.filesToUpload[0]);
            }
          }
        }, {
          key: "onPhotoModify",
          value: function onPhotoModify(event) {
            if (event.target.files.length > 0) {
              this.filesToUpload.push(event.target.files[0]);
              this.modifyBioForm.get('profileImgLink').setValue(this.filesToUpload[1]);
            }
          }
        }, {
          key: "submitModifyBio",
          value: function submitModifyBio() {
            var _this11 = this;

            var formDataSubmit = new FormData();
            this.bioToModify = new src_app_models_bio_model__WEBPACK_IMPORTED_MODULE_1__["Bio"]();

            var _iterator = _createForOfIteratorHelper(this.filesToUpload),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var file = _step.value;
                formDataSubmit.append('uploadedFiles', file, file.name);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.http.post('http://188.166.59.10:3000/api/bio/upload', formDataSubmit).subscribe(function (res) {
              _this11.bioToModify.intro = _this11.modifyBioForm.value.intro;
              _this11.bioToModify.cvLink = res.data.CVname;
              _this11.bioToModify.profileImgLink = res.data.imgName;

              _this11.bioService.putBio(_this11.bioToModify, 1).subscribe(function (bio) {});

              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Bio is updated');
            });
          }
        }]);

        return BioDashboardComponent;
      }();

      BioDashboardComponent.ɵfac = function BioDashboardComponent_Factory(t) {
        return new (t || BioDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bio_service__WEBPACK_IMPORTED_MODULE_5__["BioService"]));
      };

      BioDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BioDashboardComponent,
        selectors: [["app-bio-dashboard"]],
        decls: 16,
        vars: 5,
        consts: [[1, "container", "row"], [1, "row", 3, "mode", "text"], [1, "form", "col-12", 3, "formGroup", "ngSubmit"], ["appearance", "outline"], ["matInput", "", "placeholder", "Placeholder", "formControlName", "intro"], ["enctype", "multipart/form-data", "type", "file", "name", "cvLink", 1, "chooseFile", "col-12", 3, "change"], [1, "actions"], ["type", "submit", 1, "send-form-button", 3, "label", "icon"]],
        template: function BioDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-title", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function BioDashboardComponent_Template_form_ngSubmit_2_listener() {
              return ctx.submitModifyBio();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Intro ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "textarea", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Choose CV:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BioDashboardComponent_Template_input_change_10_listener($event) {
              return ctx.onFileModify($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Choose profile-photo:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BioDashboardComponent_Template_input_change_13_listener($event) {
              return ctx.onPhotoModify($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "subtitle-dashboard")("text", "Bio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.modifyBioForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Save details")("icon", "fab fa-galactic-senate");
          }
        },
        directives: [_components_title_title_component__WEBPACK_IMPORTED_MODULE_6__["TitleComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _components_button_button_component__WEBPACK_IMPORTED_MODULE_9__["ButtonComponent"]],
        styles: [".mat-form-field-appearance-outline[_ngcontent-%COMP%] {\n  margin-right: 20px !important;\n}\n\n.project-form-link-fields[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.project-form-link-fields[_ngcontent-%COMP%]   .mat-form-field-appearance-outline[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.chooseFile[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n\nspan[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n\n.mat-form-field-appearance-outline[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 100px;\n}\n\n.send-form-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-self: flex-end;\n  margin-right: 20px;\n}\n\ntextarea.mat-input-element[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n\ninput.mat-input-element[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Jpby1kYXNoYm9hcmQvYmlvLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDZCQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFBSjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksbUJBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9iaW8tZGFzaGJvYXJkL2Jpby1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmV7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9qZWN0LWZvcm0tbGluay1maWVsZHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9qZWN0LWZvcm0tbGluay1maWVsZHMgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jaG9vc2VGaWxlIHtcbiAgICBwYWRkaW5nOiAzMHB4O1xufVxuXG5zcGFuIHtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cblxuXG4uc2VuZC1mb3JtLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbnRleHRhcmVhLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG5pbnB1dC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cblxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BioDashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-bio-dashboard',
            templateUrl: './bio-dashboard.component.html',
            styleUrls: ['./bio-dashboard.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }, {
            type: _services_bio_service__WEBPACK_IMPORTED_MODULE_5__["BioService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "LUFc":
    /*!************************************************!*\
      !*** ./src/app/services/experience.service.ts ***!
      \************************************************/

    /*! exports provided: ExperienceService */

    /***/
    function LUFc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExperienceService", function () {
        return ExperienceService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ExperienceService = /*#__PURE__*/function () {
        function ExperienceService(http, router) {
          _classCallCheck(this, ExperienceService);

          this.http = http;
          this.router = router;
          this.baseUrl = 'http://188.166.59.10:3000/api/experience';
        }

        _createClass(ExperienceService, [{
          key: "getExperiences",
          value: function getExperiences() {
            return this.http.get("".concat(this.baseUrl));
          }
        }, {
          key: "postExperience",
          value: function postExperience(experience) {
            return this.http.post("".concat(this.baseUrl), experience);
          }
        }, {
          key: "getExperienceById",
          value: function getExperienceById(id) {
            return this.http.get("".concat(this.baseUrl, "/").concat(id));
          }
        }, {
          key: "deleteExperience",
          value: function deleteExperience(experienceId) {
            var url = "".concat(this.baseUrl, "/").concat(experienceId);
            return this.http["delete"](url);
          }
        }]);

        return ExperienceService;
      }();

      ExperienceService.ɵfac = function ExperienceService_Factory(t) {
        return new (t || ExperienceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      ExperienceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ExperienceService,
        factory: ExperienceService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "LmEr":
    /*!*******************************************************!*\
      !*** ./src/app/components/footer/footer.component.ts ***!
      \*******************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function LmEr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 20,
        vars: 0,
        consts: [[1, "divider-white"], [1, "page-footer", "font-small", "mdb-color", "lighten-3", "pt-4"], [1, "container", "text-center", "text-md-left"], [1, "row"], [1, "col-md-3", "col-lg-3", "text-center", "mx-auto", "my-4"], [1, "font-weight-bold", "mb-4"], [1, "social", "d-flex", "justify-content-around"], ["type", "button", "href", "https://twitter.com/Ana60458091", "target", "blank", 1, "btn-floating"], [1, "fab", "fa-twitter"], ["type", "button", "href", "https://www.instagram.com/lattaral/", "target", "blank", 1, "btn-floating"], [1, "fab", "fa-instagram"], ["type", "button", "href", "https://github.com/lattara", "target", "blank", 1, "btn-floating"], [1, "fab", "fa-github"], ["type", "button", "href", "https://stackoverflow.com/users/11746772/lacodem", "target", "blank", 1, "btn-floating"], [1, "fab", "fa-stack-overflow"], [1, "footer-copyright", "text-center", "py-3"], ["routerLink", "/login", 1, "far", "fa-heart"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "i am on Internet!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\xA9 Made with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " coffee and good vibes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
        styles: ["[_ngcontent-%COMP%]:root {\n  --font-primary: \"Ubuntu\", sans-serif;\n  --font-secondary: \"Raleway\", sans-serif;\n  --primary-darkened: #0a041f;\n  --secondary-dashboard:#E7D7C1;\n  --primary-gradient: linear-gradient(to bottom, #0a041f, #0b0424);\n  --box-shaddow: -2px -3px 13px -3px rgba(221, 222, 224, 0.28);\n  --primary-color: #0a041f;\n  --secondary-color: #ff0000;\n  --grey: #d6d6d6;\n  --dark-gray: #8a8a8a;\n  --light-grey: #f9f9f9;\n  --white: #ffffff;\n}\n\n*[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  color: var(--white);\n}\n\n.fa-heart[_ngcontent-%COMP%] {\n  color: var(--secondary-color);\n}\n\n.social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jdXN0b20tc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0VBQ0EsdUNBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0VBQUE7RUFDQSw0REFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FBWEE7RUFDSSxzQ0FBQTtFQUNBLG1CQUFBO0FBY0o7O0FBWEE7RUFDSSw2QkFBQTtBQWNKOztBQVhBO0VBQ0ksY0FBQTtBQWNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0tZm9udC1wcmltYXJ5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcbiAgICAtLWZvbnQtc2Vjb25kYXJ5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gICAgLS1wcmltYXJ5LWRhcmtlbmVkOiAjMGEwNDFmO1xuICAgIC0tc2Vjb25kYXJ5LWRhc2hib2FyZDojRTdEN0MxO1xuICAgIC0tcHJpbWFyeS1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzBhMDQxZiwgIzBiMDQyNCk7IFxuICAgIC0tYm94LXNoYWRkb3c6IC0ycHggLTNweCAxM3B4IC0zcHggcmdiYSgyMjEsIDIyMiwgMjI0LCAwLjI4KTtcbiAgICAtLXByaW1hcnktY29sb3I6ICMwYTA0MWY7IC8vcHJpbWFyeVxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZmYwMDAwOyAvL3NlY29uZGFyeSwgaG9vdmVyLCB3YXJuaW5nXG4gICAgLS1ncmV5OiAjZDZkNmQ2O1xuICAgIC0tZGFyay1ncmF5OiAjOGE4YThhO1xuICAgIC0tbGlnaHQtZ3JleTogI2Y5ZjlmOTtcbiAgICAtLXdoaXRlOiAjZmZmZmZmO1xufVxuXG5cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9jdXN0b20tc3R5bGVzLnNjc3NcIjtcblxuKntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG4uZmEtaGVhcnR7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbi5zb2NpYWwgaSB7XG4gICAgZm9udC1zaXplOiAyZW07XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "NxgW":
    /*!*******************************************************!*\
      !*** ./src/app/services/token-interceptor.service.ts ***!
      \*******************************************************/

    /*! exports provided: TokenInterceptorService */

    /***/
    function NxgW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function () {
        return TokenInterceptorService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/users.service */
      "6Qg2");

      var TokenInterceptorService = /*#__PURE__*/function () {
        function TokenInterceptorService(usersService) {
          _classCallCheck(this, TokenInterceptorService);

          this.usersService = usersService;
        }

        _createClass(TokenInterceptorService, [{
          key: "intercept",
          value: function intercept(req, next) {
            // makes clone of the request
            var tokenizedReq = req.clone({
              setHeaders: {
                // set token in headers
                Authorization: "Bearer ".concat(this.usersService.getToken()) // creates Bearer convention token

              }
            }); // return modified req with token inside

            return next.handle(tokenizedReq);
          }
        }]);

        return TokenInterceptorService;
      }();

      TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) {
        return new (t || TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]));
      };

      TokenInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TokenInterceptorService,
        factory: TokenInterceptorService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptorService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "O3o7":
    /*!*****************************************!*\
      !*** ./src/app/models/project.model.ts ***!
      \*****************************************/

    /*! exports provided: Project */

    /***/
    function O3o7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Project", function () {
        return Project;
      });

      var Project = function Project() {
        _classCallCheck(this, Project);

        this.toolbox = [];
      };
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'portfolio';
      };

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
    "WRM6":
    /*!************************************************************************!*\
      !*** ./src/app/dashboard/admin-dashboard/admin-dashboard.component.ts ***!
      \************************************************************************/

    /*! exports provided: AdminDashboardComponent */

    /***/
    function WRM6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function () {
        return AdminDashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _dashboard_menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard-menu-items */
      "ZiK0");
      /* harmony import */


      var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/users.service */
      "6Qg2");
      /* harmony import */


      var src_app_services_git_hub_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/git-hub.service */
      "/mUe");
      /* harmony import */


      var _components_title_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/title/title.component */
      "bwXy");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../components/button/button.component */
      "7psr");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function AdminDashboardComponent_ul_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", item_r1.path);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.caption);
        }
      }

      var AdminDashboardComponent = /*#__PURE__*/function () {
        function AdminDashboardComponent(usersService, githubService) {
          _classCallCheck(this, AdminDashboardComponent);

          this.usersService = usersService;
          this.githubService = githubService;
          this.dashboardMenuItems = _dashboard_menu_items__WEBPACK_IMPORTED_MODULE_1__["dashboardMenuItems"];
        }

        _createClass(AdminDashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logout",
          value: function logout() {
            this.usersService.logout();
          }
        }]);

        return AdminDashboardComponent;
      }();

      AdminDashboardComponent.ɵfac = function AdminDashboardComponent_Factory(t) {
        return new (t || AdminDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_git_hub_service__WEBPACK_IMPORTED_MODULE_3__["GitHubService"]));
      };

      AdminDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdminDashboardComponent,
        selectors: [["app-admin-dashboard"]],
        decls: 8,
        vars: 5,
        consts: [[1, "row"], [1, "sidebar", "col-2"], [1, "fas", "fa-cogs"], [1, "col-12", 3, "mode", "text"], [4, "ngFor", "ngForOf"], [1, "logout-button", 3, "label", "icon", "click"], [1, "col-10", "offset-2", "router-outlet-container"], [3, "routerLink"]],
        template: function AdminDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-title", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdminDashboardComponent_ul_4_Template, 3, 2, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_app_button_click_5_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "title-dashboard")("text", "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dashboardMenuItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "log out")("icon", "fas fa-sign-out-alt");
          }
        },
        directives: [_components_title_title_component__WEBPACK_IMPORTED_MODULE_4__["TitleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _components_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"]],
        styles: [".container[_ngcontent-%COMP%] {\n  height: 120vh;\n  width: 80vw;\n  margin-left: 300px !important;\n  margin-right: 100px !important;\n  overflow: scroll;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background-color: var(--secondary-dashboard);\n}\n\n.fa-cogs[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-left: 20px;\n  font-size: 40px;\n  color: #0a041f;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  margin-top: 20px;\n  margin-left: 35px;\n  font-weight: bolder;\n  color: var(--primary-darkened);\n  cursor: pointer;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\n.router-outlet-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100vh;\n  overflow: scroll;\n}\n\n.logout-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNENBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLHdCQUFBO0FBQ0o7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQURKOztBQUtBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7QUFGSiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMjB2aDtcbiAgICB3aWR0aDogODB2dztcbiAgICBtYXJnaW4tbGVmdDogMzAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLnNpZGViYXIge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZGFzaGJvYXJkKTtcbn1cblxuLmZhLWNvZ3Mge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGNvbG9yOiAjMGEwNDFmO1xufVxuXG51bCBsaSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgY29sb3I6dmFyKC0tcHJpbWFyeS1kYXJrZW5lZCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG51bCBsaTpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5cblxuLnJvdXRlci1vdXRsZXQtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG5cbi5sb2dvdXQtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminDashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-admin-dashboard',
            templateUrl: './admin-dashboard.component.html',
            styleUrls: ['./admin-dashboard.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
          }, {
            type: src_app_services_git_hub_service__WEBPACK_IMPORTED_MODULE_3__["GitHubService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "XEn3":
    /*!****************************************************!*\
      !*** ./src/app/pages/contact/contact.component.ts ***!
      \****************************************************/

    /*! exports provided: ContactComponent */

    /***/
    function XEn3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
        return ContactComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/contact.service */
      "3ITz");
      /* harmony import */


      var _components_title_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/title/title.component */
      "bwXy");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _components_button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/button/button.component */
      "7psr");

      var ContactComponent = /*#__PURE__*/function () {
        function ContactComponent(fb, contactService) {
          _classCallCheck(this, ContactComponent);

          this.fb = fb;
          this.contactService = contactService;
          this.contactForm = this.fb.group({
            name: [''],
            email: [''],
            phone: [''],
            message: ['']
          });
        }

        _createClass(ContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // getters

        }, {
          key: "sendMail",
          value: function sendMail() {
            var newMail = this.contactForm.value;
            var name = this.name.value;
            var email = this.email.value;
            var phone = this.phone.value;
            var message = this.message.value;
            this.contactService.sendMail(name, email, phone, message).subscribe(function (error) {
              return console.log(error);
            });
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Your message is sent. Thanks :)');
          }
        }, {
          key: "name",
          get: function get() {
            return this.contactForm.get('name');
          }
        }, {
          key: "email",
          get: function get() {
            return this.contactForm.get('email');
          }
        }, {
          key: "phone",
          get: function get() {
            return this.contactForm.get('phone');
          }
        }, {
          key: "message",
          get: function get() {
            return this.contactForm.get('message');
          }
        }]);

        return ContactComponent;
      }();

      ContactComponent.ɵfac = function ContactComponent_Factory(t) {
        return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"]));
      };

      ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContactComponent,
        selectors: [["app-contact"]],
        decls: 28,
        vars: 5,
        consts: [[1, "container"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-5", "col-xl-5", "contact-text-container"], [1, "far", "fa-envelope", "envelope-big"], [1, "col-12", 3, "mode", "text"], [1, "col-xs-12", "col-sm-12", "col-md-8", "col-lg-5", "col-xl-5", "contact-form-container"], ["method", "POST", "action", "/send-email", "color", "accent", 3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12"], ["matInput", "", "formControlName", "name"], ["appearance", "outline", 1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-6", "col-xl-6"], ["matInput", "", "formControlName", "email"], ["matInput", "", "formControlName", "phone"], ["matInput", "", "formControlName", "message"], [1, "contact-button", 3, "label", "icon", "click"]],
        template: function ContactComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-title", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Don't be shy!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_mat_form_ngSubmit_8_listener() {
              return ctx.sendMail();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "textarea", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_app_button_click_27_listener() {
              return ctx.sendMail();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "subtitle-float-right")("text", "Say Hi!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Contact")("icon", "far fa-envelope");
          }
        },
        directives: [_components_title_title_component__WEBPACK_IMPORTED_MODULE_4__["TitleComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _components_button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"]],
        styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-bottom: 50px;\n}\n\napp-title[_ngcontent-%COMP%] {\n  float: right !important;\n}\n\n.contact-text-container[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  height: 550px;\n  border-right: 1px solid var(--white);\n  text-align: right;\n}\n\n.contact-text-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n\n.contact-form-container[_ngcontent-%COMP%] {\n  margin-top: 160px;\n}\n\n.contact-button[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 10px;\n}\n\n.envelope-big[_ngcontent-%COMP%] {\n  color: var(--secondary-color);\n  margin-right: 15px;\n  margin-bottom: 10px;\n  margin-top: 70px;\n  font-size: 55px;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  height: 150px;\n}\n\ntextarea[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  color: var(--white) !important;\n}\n\n.envelope-mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n\nspan[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (max-width: 770px) {\n  .row[_ngcontent-%COMP%] {\n    padding-left: 40px;\n    padding-right: 40px;\n  }\n\n  .contact-text-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .envelope-mobile[_ngcontent-%COMP%] {\n    display: block;\n    text-align: center;\n    width: 100%;\n    font-size: 3rem;\n    color: var(--secondary-color);\n  }\n\n  span[_ngcontent-%COMP%] {\n    display: block;\n    color: var(--white);\n    text-align: center;\n    width: 100%;\n  }\n\n  .contact-form-container[_ngcontent-%COMP%] {\n    margin-top: unset;\n    margin-bottom: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFHQTtFQUVJO0lBQ0ksa0JBQUE7SUFDSixtQkFBQTtFQURGOztFQUlFO0lBQ0ksYUFBQTtFQUROOztFQUlFO0lBQ0ksY0FBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSw2QkFBQTtFQUROOztFQUlFO0lBQ0ksY0FBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0VBRE47O0VBS0U7SUFDSSxpQkFBQTtJQUNBLG1CQUFBO0VBRk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG5hcHAtdGl0bGUge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xufVxuXG4uY29udGFjdC10ZXh0LWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICBoZWlnaHQ6IDU1MHB4O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLXdoaXRlKTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmNvbnRhY3QtdGV4dC1jb250YWluZXIgcCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uY29udGFjdC1mb3JtLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMTYwcHg7XG59XG5cbi5jb250YWN0LWJ1dHRvbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmVudmVsb3BlLWJpZyB7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICBmb250LXNpemU6IDU1cHg7XG59XG5cbnRleHRhcmVhIHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xufVxuXG50ZXh0YXJlYSwgaW5wdXQge1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcbn1cblxuLmVudmVsb3BlLW1vYmlsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuc3BhbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLy8gTU9CSUxFXG5AbWVkaWEgKG1heC13aWR0aDogNzcwcHgpIHtcblxuICAgIC5yb3cge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICB9XG5cbiAgICAuY29udGFjdC10ZXh0LWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmVudmVsb3BlLW1vYmlsZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgIGNvbG9yOnZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC5jb250YWN0LWZvcm0tY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogdW5zZXQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgfVxuXG4gICAgXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-contact',
            templateUrl: './contact.component.html',
            styleUrls: ['./contact.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _services_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _components_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/button/button.component */
      "7psr");
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/footer/footer.component */
      "LmEr");
      /* harmony import */


      var _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/landing/landing.component */
      "fsYz");
      /* harmony import */


      var _components_title_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/title/title.component */
      "bwXy");
      /* harmony import */


      var _pages_bio_bio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pages/bio/bio.component */
      "033W");
      /* harmony import */


      var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./pages/main/main.component */
      "/s1f");
      /* harmony import */


      var _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./pages/projects/projects.component */
      "u/sh");
      /* harmony import */


      var _pages_toolbox_toolbox_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./pages/toolbox/toolbox.component */
      "C2CS");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./pages/contact/contact.component */
      "XEn3");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _dashboard_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./dashboard/admin-dashboard/admin-dashboard.component */
      "WRM6");
      /* harmony import */


      var _dashboard_projects_dashboard_projects_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./dashboard/projects-dashboard/projects-dashboard.component */
      "uiOn");
      /* harmony import */


      var _dashboard_bio_dashboard_bio_dashboard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./dashboard/bio-dashboard/bio-dashboard.component */
      "GXNk");
      /* harmony import */


      var _dashboard_misc_dashboard_misc_dashboard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./dashboard/misc-dashboard/misc-dashboard.component */
      "2OzE");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/cdk/table */
      "f6nW");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./pages/register/register.component */
      "fNfI");
      /* harmony import */


      var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./pages/login/login.component */
      "D8EZ");
      /* harmony import */


      var _guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./guards/auth-guard.guard */
      "1eeg");
      /* harmony import */


      var _services_users_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./services/users.service */
      "6Qg2");
      /* harmony import */


      var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./services/token-interceptor.service */
      "NxgW");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c"); // Angular material imports
      // ***


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuardGuard"], _services_users_service__WEBPACK_IMPORTED_MODULE_29__["UsersService"], {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
          useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_30__["TokenInterceptorService"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_24__["CdkTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__["MatCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__["MatTooltipModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"], _components_title_title_component__WEBPACK_IMPORTED_MODULE_9__["TitleComponent"], _pages_bio_bio_component__WEBPACK_IMPORTED_MODULE_10__["BioComponent"], _pages_main_main_component__WEBPACK_IMPORTED_MODULE_11__["MainComponent"], _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_12__["ProjectsComponent"], _pages_toolbox_toolbox_component__WEBPACK_IMPORTED_MODULE_13__["ToolboxComponent"], _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"], _dashboard_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["AdminDashboardComponent"], _dashboard_projects_dashboard_projects_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["ProjectsDashboardComponent"], _dashboard_bio_dashboard_bio_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["BioDashboardComponent"], _dashboard_misc_dashboard_misc_dashboard_component__WEBPACK_IMPORTED_MODULE_22__["MiscDashboardComponent"], _pages_register_register_component__WEBPACK_IMPORTED_MODULE_26__["RegisterComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_27__["LoginComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_24__["CdkTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__["MatCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__["MatTooltipModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"], _components_title_title_component__WEBPACK_IMPORTED_MODULE_9__["TitleComponent"], _pages_bio_bio_component__WEBPACK_IMPORTED_MODULE_10__["BioComponent"], _pages_main_main_component__WEBPACK_IMPORTED_MODULE_11__["MainComponent"], _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_12__["ProjectsComponent"], _pages_toolbox_toolbox_component__WEBPACK_IMPORTED_MODULE_13__["ToolboxComponent"], _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"], _dashboard_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["AdminDashboardComponent"], _dashboard_projects_dashboard_projects_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["ProjectsDashboardComponent"], _dashboard_bio_dashboard_bio_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["BioDashboardComponent"], _dashboard_misc_dashboard_misc_dashboard_component__WEBPACK_IMPORTED_MODULE_22__["MiscDashboardComponent"], _pages_register_register_component__WEBPACK_IMPORTED_MODULE_26__["RegisterComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_27__["LoginComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_24__["CdkTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__["MatCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__["MatTooltipModule"]],
            providers: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuardGuard"], _services_users_service__WEBPACK_IMPORTED_MODULE_29__["UsersService"], {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
              useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_30__["TokenInterceptorService"],
              multi: true
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZiK0":
    /*!*******************************************************************!*\
      !*** ./src/app/dashboard/admin-dashboard/dashboard-menu-items.ts ***!
      \*******************************************************************/

    /*! exports provided: dashboardMenuItems */

    /***/
    function ZiK0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "dashboardMenuItems", function () {
        return dashboardMenuItems;
      });

      var dashboardMenuItems = [{
        path: 'home',
        caption: 'Projects',
        index: 0
      }, {
        path: 'bio',
        caption: 'Biography',
        index: 1
      }, {
        path: 'misc',
        caption: 'Miscellaneous',
        index: 2
      }];
      /***/
    },

    /***/
    "bwXy":
    /*!*****************************************************!*\
      !*** ./src/app/components/title/title.component.ts ***!
      \*****************************************************/

    /*! exports provided: TitleComponent */

    /***/
    function bwXy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TitleComponent", function () {
        return TitleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function TitleComponent_h1_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.text, " ");
        }
      }

      function TitleComponent_h2_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.text, " ");
        }
      }

      function TitleComponent_h2_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.text, " ");
        }
      }

      function TitleComponent_h2_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.text, " ");
        }
      }

      function TitleComponent_h2_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.text, " ");
        }
      }

      function TitleComponent_h2_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.text, " ");
        }
      }

      function TitleComponent_h2_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.text, " ");
        }
      }

      function TitleComponent_h3_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.text, " ");
        }
      }

      function TitleComponent_p_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.text, " ");
        }
      }

      var TitleComponent = /*#__PURE__*/function () {
        function TitleComponent() {
          _classCallCheck(this, TitleComponent);

          this.mode = 'title';
          this.text = '';
        }

        _createClass(TitleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TitleComponent;
      }();

      TitleComponent.ɵfac = function TitleComponent_Factory(t) {
        return new (t || TitleComponent)();
      };

      TitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TitleComponent,
        selectors: [["app-title"]],
        inputs: {
          mode: "mode",
          text: "text"
        },
        decls: 10,
        vars: 10,
        consts: [[3, "ngSwitch"], ["class", "title", 4, "ngSwitchCase"], ["class", "subtitle", 4, "ngSwitchCase"], ["class", "section-subtitle", 4, "ngSwitchCase"], ["class", "subtitle-float-right", 4, "ngSwitchCase"], ["class", "subtitle-bio", 4, "ngSwitchCase"], ["class", "title-dashboard", 4, "ngSwitchCase"], ["class", "subtitle-dashboard", 4, "ngSwitchCase"], ["class", "subsubtitle", 4, "ngSwitchCase"], ["class", "text", 4, "ngSwitchCase"], [1, "title"], [1, "subtitle"], [1, "section-subtitle"], [1, "subtitle-float-right"], [1, "subtitle-bio"], [1, "title-dashboard"], [1, "subtitle-dashboard"], [1, "subsubtitle"], [1, "text"]],
        template: function TitleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TitleComponent_h1_1_Template, 2, 1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TitleComponent_h2_2_Template, 2, 1, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TitleComponent_h2_3_Template, 2, 1, "h2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TitleComponent_h2_4_Template, 2, 1, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TitleComponent_h2_5_Template, 2, 1, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TitleComponent_h2_6_Template, 2, 1, "h2", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TitleComponent_h2_7_Template, 2, 1, "h2", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TitleComponent_h3_8_Template, 2, 1, "h3", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TitleComponent_p_9_Template, 2, 1, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.mode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "section-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "subtitle-float-right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "subtitle-bio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "title-dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "subtitle-dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "subsubtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "text");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"]],
        styles: ["[_ngcontent-%COMP%]:root {\n  --font-primary: \"Ubuntu\", sans-serif;\n  --font-secondary: \"Raleway\", sans-serif;\n  --primary-darkened: #0a041f;\n  --secondary-dashboard:#E7D7C1;\n  --primary-gradient: linear-gradient(to bottom, #0a041f, #0b0424);\n  --box-shaddow: -2px -3px 13px -3px rgba(221, 222, 224, 0.28);\n  --primary-color: #0a041f;\n  --secondary-color: #ff0000;\n  --grey: #d6d6d6;\n  --dark-gray: #8a8a8a;\n  --light-grey: #f9f9f9;\n  --white: #ffffff;\n}\n\n@media (min-width: 770px) {\n  .title[_ngcontent-%COMP%] {\n    font-family: var(--font-primary);\n    color: var(--white);\n    font-size: 95px;\n    line-height: normal;\n  }\n\n  .section-subtitle[_ngcontent-%COMP%] {\n    font-family: var(--font-primary);\n    color: var(--white);\n    font-size: 60px;\n    line-height: normal;\n    width: 100%;\n    text-align: center;\n    padding-top: 100px;\n    padding-bottom: 100px;\n  }\n\n  .subtitle[_ngcontent-%COMP%] {\n    color: var(--white);\n    font-family: var(--font-primary);\n    font-size: 25px;\n    line-height: normal;\n    font-weight: 900;\n    margin-bottom: 60px;\n  }\n\n  .subtitle-float-right[_ngcontent-%COMP%] {\n    color: var(--white);\n    font-family: var(--font-primary);\n    font-size: 25px;\n    line-height: normal;\n    text-transform: uppercase;\n    font-weight: 900;\n    float: right;\n  }\n\n  .subtitle-bio[_ngcontent-%COMP%] {\n    font-size: 45px;\n    color: var(--white);\n    font-weight: 500;\n  }\n\n  .title-dashboard[_ngcontent-%COMP%] {\n    color: var(--primary-color-darkened);\n    font-family: var(--font-primary);\n    font-size: 25px;\n    line-height: normal;\n    text-transform: uppercase;\n    font-weight: 900;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    text-align: center;\n  }\n\n  .subtitle-dashboard[_ngcontent-%COMP%] {\n    color: var(--white);\n    font-family: var(--font-primary);\n    font-size: 25px;\n    line-height: normal;\n    text-transform: uppercase;\n    font-weight: 900;\n    text-align: left;\n    padding-top: 50px;\n    padding-left: 60px;\n    padding-bottom: 50px;\n  }\n\n  .subsubtitle[_ngcontent-%COMP%] {\n    color: var(--white);\n    font-family: var(--font-primary);\n    font-size: 13px;\n    line-height: normal;\n    text-transform: uppercase;\n    font-weight: 900;\n  }\n\n  .text[_ngcontent-%COMP%] {\n    font-family: var(--font-secondary);\n  }\n}\n\n.subtitle-icon[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n\n.iconArrow[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n@media (max-width: 770px) {\n  .title[_ngcontent-%COMP%] {\n    font-size: 60px;\n    line-height: normal;\n    color: var(--white);\n    font-weight: 500;\n  }\n\n  .title-white[_ngcontent-%COMP%] {\n    font-size: 20px;\n    line-height: normal;\n    margin: 30px 0 40px 0;\n    text-transform: uppercase;\n    font-weight: 900;\n  }\n\n  .section-subtitle[_ngcontent-%COMP%] {\n    font-family: var(--font-primary);\n    color: var(--white);\n    font-size: 25px;\n    line-height: normal;\n    width: 100%;\n    text-align: center;\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n\n  .title-dashboard[_ngcontent-%COMP%] {\n    color: var(--white);\n    font-size: 20px;\n    line-height: normal;\n    margin: 10px 0 40px 0;\n    text-transform: uppercase;\n    font-weight: 900;\n  }\n\n  .subtitle[_ngcontent-%COMP%] {\n    font-size: 20px;\n    color: var(--white);\n    margin: 20px 20px 20px 20px;\n    font-weight: 900;\n  }\n\n  .subtitle-float-right[_ngcontent-%COMP%] {\n    font-size: 20px;\n    color: var(--white);\n    margin: 0px 0px 0px 0px;\n    font-weight: 900;\n  }\n\n  .subtitle-bio[_ngcontent-%COMP%] {\n    font-size: 30px;\n    color: var(--white);\n    margin: 20px 0px 20px 0px;\n    font-weight: 900;\n  }\n\n  .subtitle-icon[_ngcontent-%COMP%] {\n    font-size: 16px;\n    cursor: pointer;\n    line-height: normal;\n    margin: 20px 0 20px 0;\n    text-transform: uppercase;\n    font-weight: 900;\n  }\n\n  .subsubtitle[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: normal;\n    margin: 15px 0 15px 0;\n    text-transform: uppercase;\n    font-weight: 900;\n    color: var(--white);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jdXN0b20tc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdGl0bGUvdGl0bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLGdFQUFBO0VBQ0EsNERBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBQVhBO0VBQ0k7SUFDSSxnQ0FBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0VBY047O0VBWEU7SUFDSSxnQ0FBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxxQkFBQTtFQWNOOztFQVpFO0lBQ0ksbUJBQUE7SUFDQSxnQ0FBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUFlTjs7RUFaRTtJQUNJLG1CQUFBO0lBQ0EsZ0NBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtJQUNBLGdCQUFBO0lBRUEsWUFBQTtFQWNOOztFQVhFO0lBQ0ksZUFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUFjTjs7RUFYRTtJQUNJLG9DQUFBO0lBQ0EsZ0NBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0VBY047O0VBWEU7SUFDSSxtQkFBQTtJQUNBLGdDQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLG9CQUFBO0VBY047O0VBVkU7SUFDSSxtQkFBQTtJQUNBLGdDQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSxnQkFBQTtFQWFOOztFQVZFO0lBQ0ksa0NBQUE7RUFhTjtBQUNGOztBQVZBO0VBQ0ksVUFBQTtBQVlKOztBQVRBO0VBQ0ksZ0JBQUE7QUFZSjs7QUFSQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtFQVdOOztFQVJFO0lBQ0ksZUFBQTtJQUNBLG1CQUFBO0lBQ0EscUJBQUE7SUFDQSx5QkFBQTtJQUNBLGdCQUFBO0VBV047O0VBUkU7SUFDSSxnQ0FBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQkFBQTtFQVdOOztFQVJFO0lBQ0ksbUJBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxxQkFBQTtJQUNBLHlCQUFBO0lBQ0EsZ0JBQUE7RUFXTjs7RUFURTtJQUNJLGVBQUE7SUFDQSxtQkFBQTtJQUNBLDJCQUFBO0lBQ0EsZ0JBQUE7RUFZTjs7RUFURTtJQUNJLGVBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsZ0JBQUE7RUFZTjs7RUFURTtJQUNJLGVBQUE7SUFDQSxtQkFBQTtJQUNBLHlCQUFBO0lBQ0EsZ0JBQUE7RUFZTjs7RUFWRTtJQUNJLGVBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxxQkFBQTtJQUNBLHlCQUFBO0lBQ0EsZ0JBQUE7RUFhTjs7RUFWRTtJQUNJLGVBQUE7SUFDQSxtQkFBQTtJQUNBLHFCQUFBO0lBQ0EseUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VBYU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGl0bGUvdGl0bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1mb250LXByaW1hcnk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xuICAgIC0tZm9udC1zZWNvbmRhcnk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgICAtLXByaW1hcnktZGFya2VuZWQ6ICMwYTA0MWY7XG4gICAgLS1zZWNvbmRhcnktZGFzaGJvYXJkOiNFN0Q3QzE7XG4gICAgLS1wcmltYXJ5LWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMGEwNDFmLCAjMGIwNDI0KTsgXG4gICAgLS1ib3gtc2hhZGRvdzogLTJweCAtM3B4IDEzcHggLTNweCByZ2JhKDIyMSwgMjIyLCAyMjQsIDAuMjgpO1xuICAgIC0tcHJpbWFyeS1jb2xvcjogIzBhMDQxZjsgLy9wcmltYXJ5XG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICNmZjAwMDA7IC8vc2Vjb25kYXJ5LCBob292ZXIsIHdhcm5pbmdcbiAgICAtLWdyZXk6ICNkNmQ2ZDY7XG4gICAgLS1kYXJrLWdyYXk6ICM4YThhOGE7XG4gICAgLS1saWdodC1ncmV5OiAjZjlmOWY5O1xuICAgIC0td2hpdGU6ICNmZmZmZmY7XG59XG5cblxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL2N1c3RvbS1zdHlsZXMuc2Nzc1wiO1xuXG5AbWVkaWEgKG1pbi13aWR0aDogNzcwcHgpIHtcbiAgICAudGl0bGUge1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1wcmltYXJ5KTtcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgZm9udC1zaXplOiA5NXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIH1cblxuICAgIC5zZWN0aW9uLXN1YnRpdGxlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtcHJpbWFyeSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gICAgfVxuICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gICAgfVxuXG4gICAgLnN1YnRpdGxlLWZsb2F0LXJpZ2h0IHtcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgLy9tYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuXG4gICAgLnN1YnRpdGxlLWJpbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG5cbiAgICAudGl0bGUtZGFzaGJvYXJkIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItZGFya2VuZWQpO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1wcmltYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnN1YnRpdGxlLWRhc2hib2FyZCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgIH1cblxuXG4gICAgLnN1YnN1YnRpdGxlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICB9XG5cbiAgICAudGV4dCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNlY29uZGFyeSk7XG4gICAgfVxufVxuXG4uc3VidGl0bGUtaWNvbjpob3ZlciB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLmljb25BcnJvdyB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLy8gTU9CSUxFXG5AbWVkaWEgKG1heC13aWR0aDogNzcwcHgpIHtcbiAgICAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gICAgLnRpdGxlLXdoaXRlIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICBtYXJnaW46IDMwcHggMCA0MHB4IDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgfVxuXG4gICAgLnNlY3Rpb24tc3VidGl0bGUge1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1wcmltYXJ5KTtcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgLnRpdGxlLWRhc2hib2FyZCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgNDBweCAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgIH1cbiAgICAuc3VidGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweDs7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgfVxuXG4gICAgLnN1YnRpdGxlLWZsb2F0LXJpZ2h0ICB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7O1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgIH1cblxuICAgIC5zdWJ0aXRsZS1iaW8ge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgIG1hcmdpbjogMjBweCAwcHggMjBweCAwcHg7O1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgIH1cbiAgICAuc3VidGl0bGUtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICBtYXJnaW46IDIwcHggMCAyMHB4IDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgfVxuXG4gICAgLnN1YnN1YnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICBtYXJnaW46IDE1cHggMCAxNXB4IDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgfVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-title',
            templateUrl: './title.component.html',
            styleUrls: ['./title.component.scss']
          }]
        }], function () {
          return [];
        }, {
          mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "fNfI":
    /*!******************************************************!*\
      !*** ./src/app/pages/register/register.component.ts ***!
      \******************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function fNfI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/users.service */
      "6Qg2");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_title_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/title/title.component */
      "bwXy");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _components_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../components/button/button.component */
      "7psr");

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(registrationService, router) {
          _classCallCheck(this, RegisterComponent);

          this.registrationService = registrationService;
          this.router = router;
          this.registerUserData = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            identifiant: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
          });
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "registerUser",
          value: function registerUser() {
            var _this12 = this;

            if (!this.registerUserData.valid) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('invalid or taken name, please choose another name');
              return false;
            } else {
              var user = this.registerUserData.value;
              this.registrationService.registerUser(user).subscribe(function (result) {
                var token = result['token'];
                localStorage.setItem('token', token);

                _this12.router.navigateByUrl('/dashboard');
              }, function (err) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire(err.error);
              });
            }
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        decls: 21,
        vars: 5,
        consts: [[1, "container"], [1, "row", "title-register", 3, "mode", "text"], [1, "row", "register-form-container"], [1, "form-frame"], [3, "formGroup"], ["appearance", "outline", 1, "col-12"], ["formControlName", "identifiant", "matInput", ""], ["appearance", "outline", 1, "col-6"], ["matInput", "", "formControlName", "password"], ["formControlName", "email", "matInput", ""], [1, "register-button", 3, "label", "icon", "click"], ["routerLink", "/login", 1, "already-acc"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-title", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Identifiant");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "app-button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_app_button_click_18_listener() {
              return ctx.registerUser();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "I already have an acc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "subtitle")("text", "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerUserData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Register")("icon", "far fa-envelope");
          }
        },
        directives: [_components_title_title_component__WEBPACK_IMPORTED_MODULE_5__["TitleComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _components_button_button_component__WEBPACK_IMPORTED_MODULE_8__["ButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
        styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n.register-form-container[_ngcontent-%COMP%] {\n  justify-content: center;\n  margin-top: 10px;\n}\n\n.title-register[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n\n.form-frame[_ngcontent-%COMP%] {\n  border: 1px solid white;\n  padding: 50px 50px 50px 50px;\n  max-width: 550px;\n}\n\n.register-button[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.already-acc[_ngcontent-%COMP%] {\n  text-align: right;\n  color: var(--white);\n  cursor: pointer;\n}\n\n.already-acc[_ngcontent-%COMP%]:hover {\n  color: var(--secondary-color);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5yZWdpc3Rlci1mb3JtLWNvbnRhaW5lciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnRpdGxlLXJlZ2lzdGVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuLmZvcm0tZnJhbWUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIHBhZGRpbmc6IDUwcHggNTBweCA1MHB4IDUwcHg7XG4gICAgbWF4LXdpZHRoOiA1NTBweDtcbn1cblxuLnJlZ2lzdGVyLWJ1dHRvbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uYWxyZWFkeS1hY2Mge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWxyZWFkeS1hY2M6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "fsYz":
    /*!****************************************************!*\
      !*** ./src/app/pages/landing/landing.component.ts ***!
      \****************************************************/

    /*! exports provided: LandingComponent */

    /***/
    function fsYz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
        return LandingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _components_title_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../components/title/title.component */
      "bwXy");
      /* harmony import */


      var _components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../components/button/button.component */
      "7psr");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var LandingComponent = /*#__PURE__*/function () {
        function LandingComponent() {
          _classCallCheck(this, LandingComponent);

          // tslint:disable-next-line: no-output-native
          this.scrollToContact = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(LandingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "scrollTocontact",
          value: function scrollTocontact() {
            this.scrollToContact.emit(null);
          }
        }]);

        return LandingComponent;
      }();

      LandingComponent.ɵfac = function LandingComponent_Factory(t) {
        return new (t || LandingComponent)();
      };

      LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LandingComponent,
        selectors: [["app-landing"]],
        outputs: {
          scrollToContact: "scrollToContact"
        },
        decls: 23,
        vars: 6,
        consts: [[1, "row", "landing-title-group"], [1, "col-4", "landing-icons"], [1, "fas", "fa-code"], [1, "fas", "fa-headphones-alt"], [1, "fab", "fa-angular", "fa-4x", "red"], [1, "fas", "fa-beer"], [1, "fas", "fa-glasses"], [1, "fas", "fa-terminal"], [1, "fas", "fa-jedi", "red"], [1, "col-5", "vertical-divider-red"], [3, "mode", "text"], [1, "featured-text"], [1, "container-buttons"], ["href", "https://github.com/lattara", "target", "_blank"], [1, "git-hub-button", 3, "label", "icon"], [3, "label", "icon", "click"], [1, "col-12", "arrow-animated"], ["routerLink", "bio", 1, "fas", "fa-chevron-down"]],
        template: function LandingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-title", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Full stack Web Developer, JS padawan, Angular entusiast, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " in life long relationship with books, board games and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " craft beer. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_app_button_click_20_listener() {
              return ctx.scrollTocontact();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "title")("text", "Ana Topic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Git hub profile")("icon", "fab fa-github");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Contact")("icon", "fas fa-phone-alt");
          }
        },
        directives: [_components_title_title_component__WEBPACK_IMPORTED_MODULE_1__["TitleComponent"], _components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
        styles: [".row[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  height: 100vh;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n}\n\n.landing-title-group[_ngcontent-%COMP%] {\n  padding-top: 10rem;\n  align-items: center;\n}\n\n.vertical-divider-red[_ngcontent-%COMP%] {\n  height: 24rem;\n  border-left: 4px solid var(--secondary-color);\n  padding: 20px;\n}\n\n.featured-text[_ngcontent-%COMP%] {\n  line-height: 25px;\n  min-width: 200px;\n}\n\n.landing-icons[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  display: flex;\n  flex-direction: column;\n  text-align: end;\n}\n\n.landing-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 40px;\n}\n\n.landing-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2) {\n  margin-right: 15px;\n}\n\n.landing-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(3) {\n  margin-right: 13px;\n  font-size: 47px;\n}\n\n.landing-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(4) {\n  margin-right: 12px;\n  font-size: 43px;\n}\n\n.landing-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(6) {\n  margin-right: 12px;\n  font-size: 35px;\n}\n\ni[_ngcontent-%COMP%] {\n  font-size: 3em;\n  margin-bottom: 14px;\n  margin-right: 10px;\n}\n\n.red[_ngcontent-%COMP%] {\n  color: red;\n}\n\np[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 12px;\n}\n\n@media (max-width: 700px) {\n  .landing-title-group[_ngcontent-%COMP%] {\n    margin-top: 5vh;\n    padding: 0px;\n  }\n\n  .landing-icons[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    font-size: 2em !important;\n    text-align: start;\n    margin-bottom: 14px;\n    margin-right: 10px;\n    line-height: 40px;\n  }\n\n  .landing-icons[_ngcontent-%COMP%] {\n    align-items: flex-end;\n  }\n\n  .lading-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-right: 0px !important;\n  }\n\n  .featured-text[_ngcontent-%COMP%] {\n    font-size: 15px;\n    padding-right: 20px;\n  }\n\n  .vertical-divider-red[_ngcontent-%COMP%] {\n    border-left: 3px solid var(--secondary-color);\n    padding-top: 0px;\n    height: 30rem;\n  }\n\n  .container-buttons[_ngcontent-%COMP%] {\n    width: 200px;\n    padding-top: 20px;\n  }\n\n  .arrow-animated[_ngcontent-%COMP%] {\n    margin-top: 8rem;\n    margin-right: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDZDQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBR0E7RUFDSSxlQUFBO0FBQUo7O0FBS0E7RUFDSSxrQkFBQTtBQUZKOztBQU1BO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBSEo7O0FBT0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUFKSjs7QUFRQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQUxKOztBQVFBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFMSjs7QUFPQTtFQUNJLFVBQUE7QUFKSjs7QUFPQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBSko7O0FBT0E7RUFFSTtJQUNJLGVBQUE7SUFDQSxZQUFBO0VBTE47O0VBT0U7SUFDSSx5QkFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VBSk47O0VBT0U7SUFDSSxxQkFBQTtFQUpOOztFQU9FO0lBQ0ksNEJBQUE7RUFKTjs7RUFPRTtJQUNJLGVBQUE7SUFDQSxtQkFBQTtFQUpOOztFQU9FO0lBQ0ksNkNBQUE7SUFDQSxnQkFBQTtJQUNBLGFBQUE7RUFKTjs7RUFPRTtJQUNJLFlBQUE7SUFDQSxpQkFBQTtFQUpOOztFQU9FO0lBQ0ksZ0JBQUE7SUFDQSxpQkFBQTtFQUpOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcbiAgICBtYXJnaW46MHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubGFuZGluZy10aXRsZS1ncm91cCB7XG4gICAgcGFkZGluZy10b3A6IDEwcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi52ZXJ0aWNhbC1kaXZpZGVyLXJlZCB7XG4gICAgaGVpZ2h0OiAyNHJlbTtcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLmZlYXR1cmVkLXRleHQge1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG59XG5cbi5sYW5kaW5nLWljb25zIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGVuZDtcbn1cblxuLy9jb2RlIGljb25cbi5sYW5kaW5nLWljb25zIGk6bnRoLWNoaWxkKDEpIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG59XG5cbi8vaGVhZHBob25lcyBpY29uXG5cbi5sYW5kaW5nLWljb25zIGk6bnRoLWNoaWxkKDIpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi8vYW5ndWxhciBpY29uXG4ubGFuZGluZy1pY29ucyBpOm50aC1jaGlsZCgzKSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xuICAgIGZvbnQtc2l6ZTogNDdweDtcbn1cblxuLy9iZWVyIGljb25cbi5sYW5kaW5nLWljb25zIGk6bnRoLWNoaWxkKDQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgZm9udC1zaXplOiA0M3B4O1xufVxuXG4vL3Rlcm1pbmFsIGljb25cbi5sYW5kaW5nLWljb25zIGk6bnRoLWNoaWxkKDYpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgZm9udC1zaXplOiAzNXB4O1xufVxuXG5pIHtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5yZWQge1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbnAge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuXG4gICAgLmxhbmRpbmctdGl0bGUtZ3JvdXAge1xuICAgICAgICBtYXJnaW4tdG9wOiA1dmg7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG4gICAgLmxhbmRpbmctaWNvbnMgKiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIHRleHQtYWxpZ246c3RhcnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgfVxuXG4gICAgLmxhbmRpbmctaWNvbnMge1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgfVxuXG4gICAgLmxhZGluZy1pY29ucyBpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuZmVhdHVyZWQtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICB9XG5cbiAgICAudmVydGljYWwtZGl2aWRlci1yZWQge1xuICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgIGhlaWdodDogMzByZW07XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lci1idXR0b25zIHtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAuYXJyb3ctYW5pbWF0ZWQge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cmVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICB9XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-landing',
            templateUrl: './landing.component.html',
            styleUrls: ['./landing.component.scss']
          }]
        }], function () {
          return [];
        }, {
          scrollToContact: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "p9vV":
    /*!*****************************************!*\
      !*** ./src/app/services/bio.service.ts ***!
      \*****************************************/

    /*! exports provided: BioService */

    /***/
    function p9vV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BioService", function () {
        return BioService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var BioService = /*#__PURE__*/function () {
        function BioService(http, router) {
          _classCallCheck(this, BioService);

          this.http = http;
          this.router = router;
          this.baseUrl = 'http://188.166.59.10:3000/api';
        }

        _createClass(BioService, [{
          key: "getBio",
          value: function getBio() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.http.get('http://188.166.59.10:3000/api/bio'));
          }
        }, {
          key: "putBio",
          value: function putBio(bio, id) {
            var putBioURL = "".concat(this.baseUrl, "/bio/");
            return this.http.put(putBioURL, bio);
          }
        }, {
          key: "postBio",
          value: function postBio(bio) {
            return this.http.post("".concat(this.baseUrl, "/bio"), bio);
          }
        }, {
          key: "deleteBio",
          value: function deleteBio(id) {
            var url = "".concat(this.baseUrl, "/bio");
            return this.http["delete"](url);
          }
        }]);

        return BioService;
      }();

      BioService.ɵfac = function BioService_Factory(t) {
        return new (t || BioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      BioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: BioService,
        factory: BioService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BioService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "u/sh":
    /*!******************************************************!*\
      !*** ./src/app/pages/projects/projects.component.ts ***!
      \******************************************************/

    /*! exports provided: ProjectsComponent */

    /***/
    function uSh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
        return ProjectsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _services_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/projects.service */
      "CoJz");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_title_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../components/title/title.component */
      "bwXy");
      /* harmony import */


      var _components_button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/button/button.component */
      "7psr");

      function ProjectsComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "There is no projects to display for the moment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProjectsComponent_div_2_div_1_i_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
        }

        if (rf & 2) {
          var toolboxItem_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fab ", toolboxItem_r6.sortcut, "");
        }
      }

      function ProjectsComponent_div_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectsComponent_div_2_div_1_i_5_Template, 1, 3, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-title", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r3 = ctx.$implicit;
          var i_r4 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r4 + 1, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", project_r3.toolbox);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "subsubtitle")("text", project_r3.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", project_r3.description, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", project_r3.github_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Github")("icon", "fab fa-github");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", project_r3.youtube_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Demo")("icon", "fab fa-youtube");
        }
      }

      function ProjectsComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsComponent_div_2_div_1_Template, 15, 11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.projects);
        }
      }

      var ProjectsComponent = /*#__PURE__*/function () {
        function ProjectsComponent(projectsService, http) {
          _classCallCheck(this, ProjectsComponent);

          this.projectsService = projectsService;
          this.http = http;
          this.projects = [];
          this.indexes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        }

        _createClass(ProjectsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.getAllProjectsWithToolbox();
          }
        }, {
          key: "getAllProjectsWithToolbox",
          value: function getAllProjectsWithToolbox() {
            var _this13 = this;

            for (var i = 1; i < 8; i++) {
              var $project = this.http.get("http://188.166.59.10:3000/api/projects/".concat(i));
              var $toolbox = this.http.get("http://188.166.59.10:3000/api/toolbox/".concat(i));
              Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([$project, $toolbox]).subscribe(function (results) {
                _this13.project = results[0];

                if (Object.keys(_this13.project).length === 0) {
                  delete _this13.project.toolbox;
                } else {
                  _this13.project.toolbox = Object.entries(results[1]).map(function (e) {
                    return e[1];
                  });

                  _this13.projects.push(_this13.project);
                }
              });
            }
          }
        }]);

        return ProjectsComponent;
      }();

      ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
        return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProjectsComponent,
        selectors: [["app-projects"]],
        decls: 5,
        vars: 2,
        consts: [[1, "container"], [4, "ngIf"], ["class", "row justify-content-center", 4, "ngIf"], ["div", "", 1, "arrow-animated", "col-12", "justify-content-center"], ["routerLink", "bio", 1, "fas", "fa-chevron-down"], [1, "row", "justify-content-center"], ["class", "col-sm-12 col-md-12 col-xl-6 project-details", 4, "ngFor", "ngForOf"], [1, "col-sm-12", "col-md-12", "col-xl-6", "project-details"], [1, "content-container"], [1, "number", "col-auto"], [1, "technologies"], [3, "class", 4, "ngFor", "ngForOf"], [1, "project-title"], [1, "row", "name", 3, "mode", "text"], [1, "project-description", "col-xs-12", "col-sm-12", "col-md-12", "col-lg-10", "col-xl-10"], [1, "buttons"], [3, "href"], [1, "button", 3, "label", "icon"], ["target", "_blank", 3, "href"]],
        template: function ProjectsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsComponent_div_1_Template, 3, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectsComponent_div_2_Template, 2, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.projects.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.projects.length !== 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _components_title_title_component__WEBPACK_IMPORTED_MODULE_6__["TitleComponent"], _components_button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"]],
        styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.row[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nspan[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n\n.number[_ngcontent-%COMP%] {\n  color: var(--white);\n  font-family: var(--font-primary);\n  margin-top: 50px;\n  font-size: 60px;\n  letter-spacing: 0px;\n  position: absolute;\n}\n\n.project-details[_ngcontent-%COMP%] {\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  padding: 30px 0px 30px 0px;\n}\n\n.content-container[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--white);\n  border-top: 1px solid var(--white);\n  margin: 0px 50px 0px 50px;\n}\n\n.content-container[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid var(--secondary-color);\n  border-top: 1px solid var(--secondary-color);\n}\n\n.content-container[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid var(--secondary-color);\n  border-top: 1px solid var(--secondary-color);\n}\n\n.project-details[_ngcontent-%COMP%]:hover   .number[_ngcontent-%COMP%] {\n  color: var(--secondary-color);\n  font-size: 70px;\n}\n\n.project-title[_ngcontent-%COMP%] {\n  margin-left: 100px;\n  margin-top: 10px;\n}\n\n.project-description[_ngcontent-%COMP%] {\n  margin-left: 70px;\n  margin-right: 0px !important;\n  padding: 15px;\n  text-align: justify;\n}\n\n.technologies[_ngcontent-%COMP%] {\n  margin-left: 80px;\n  font-size: 25px;\n  letter-spacing: 20px;\n  margin-top: 40px;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: 85px;\n  width: 100%;\n  padding: 20px 0px 30px 0px;\n}\n\n.buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n\n.fa-chevron-down[_ngcontent-%COMP%] {\n  font-size: 3em;\n  margin-top: 20px;\n  margin-right: 10px;\n}\n\n@media (max-width: 700px) {\n  .project-details[_ngcontent-%COMP%] {\n    min-height: -webkit-fit-content;\n    min-height: -moz-fit-content;\n    min-height: fit-content;\n    padding: 30px 0px 30px 0px;\n  }\n\n  .content-container[_ngcontent-%COMP%] {\n    margin: 0px 50px 0px 50px;\n  }\n\n  .project-description[_ngcontent-%COMP%] {\n    margin-left: 0px;\n    text-align: justify;\n    text-justify: inter-word;\n  }\n\n  .buttons[_ngcontent-%COMP%] {\n    margin: 0px;\n    justify-content: center;\n    padding: 0px 0px 20px 0px;\n  }\n\n  .arrow-animated[_ngcontent-%COMP%] {\n    padding: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLCtCQUFBO0VBQUEsNEJBQUE7RUFBQSx1QkFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQ0FBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLCtDQUFBO0VBQ0EsNENBQUE7QUFDSjs7QUFFQTtFQUNJLCtDQUFBO0VBQ0EsNENBQUE7QUFDSjs7QUFHQTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNRO0lBQ0ksK0JBQUE7SUFBQSw0QkFBQTtJQUFBLHVCQUFBO0lBQ0EsMEJBQUE7RUFEVjs7RUFJTTtJQUNJLHlCQUFBO0VBRFY7O0VBSUU7SUFDSSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0Esd0JBQUE7RUFETjs7RUFJRTtJQUNJLFdBQUE7SUFDQSx1QkFBQTtJQUNBLHlCQUFBO0VBRE47O0VBSUU7SUFDSSxhQUFBO0VBRE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5yb3cge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuc3BhbiB7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cblxuLm51bWJlciB7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1wcmltYXJ5KTtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnByb2plY3QtZGV0YWlscyB7XG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgcGFkZGluZzogMzBweCAwcHggMzBweCAwcHg7XG59XG5cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXdoaXRlKTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0td2hpdGUpO1xuICAgIG1hcmdpbjogMHB4IDUwcHggMHB4IDUwcHg7XG59XG5cbi5jb250ZW50LWNvbnRhaW5lcjpob3ZlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbi5jb250ZW50LWNvbnRhaW5lcjpob3ZlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cblxuLnByb2plY3QtZGV0YWlsczpob3ZlciAubnVtYmVyIHtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgICBmb250LXNpemU6IDcwcHg7XG59XG5cblxuLnByb2plY3QtdGl0bGUge1xuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi50ZWNobm9sb2dpZXMge1xuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMjBweDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tbGVmdDogODVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOjIwcHggMHB4IDMwcHggMHB4O1xufVxuXG4uYnV0dG9ucyBhIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5mYS1jaGV2cm9uLWRvd24ge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgLnByb2plY3QtZGV0YWlscyB7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMHB4IDMwcHggMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDUwcHggMHB4IDUwcHg7XG4gICAgICAgIH1cblxuICAgIC5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgdGV4dC1qdXN0aWZ5OiBpbnRlci13b3JkO1xuICAgIH1cblxuICAgIC5idXR0b25zIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDIwcHggMHB4O1xuICAgIH1cblxuICAgIC5hcnJvdy1hbmltYXRlZCB7XG4gICAgICAgIHBhZGRpbmc6MzBweFxuICAgIH1cbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-projects',
            templateUrl: './projects.component.html',
            styleUrls: ['./projects.component.scss']
          }]
        }], function () {
          return [{
            type: _services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "uiOn":
    /*!******************************************************************************!*\
      !*** ./src/app/dashboard/projects-dashboard/projects-dashboard.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ProjectsDashboardComponent */

    /***/
    function uiOn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectsDashboardComponent", function () {
        return ProjectsDashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_models_project_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/project.model */
      "O3o7");
      /* harmony import */


      var _admin_dashboard_dashboard_menu_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../admin-dashboard/dashboard-menu-items */
      "ZiK0");
      /* harmony import */


      var _models_projectDataSource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../models/projectDataSource */
      "BXHZ");
      /* harmony import */


      var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/projects.service */
      "CoJz");
      /* harmony import */


      var src_app_services_toolboxItem_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/toolboxItem.service */
      "G9da");
      /* harmony import */


      var src_app_services_toolbox_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/toolbox.service */
      "0HNA");
      /* harmony import */


      var _components_title_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../components/title/title.component */
      "bwXy");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_button_button_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../components/button/button.component */
      "7psr");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");

      function ProjectsDashboardComponent_div_23_span_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsDashboardComponent_div_23_span_4_Template_i_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var toolboxItem_r9 = ctx.$implicit;
            var i_r10 = ctx.index;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r11.removeToolboxItem(ctx_r11.projectToEdit.id, toolboxItem_r9.id, i_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var toolboxItem_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", toolboxItem_r9.name, " ");
        }
      }

      function ProjectsDashboardComponent_div_23_span_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsDashboardComponent_div_23_span_9_Template_i_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var toolboxItem_r13 = ctx.$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r15.addToolboxItem(ctx_r15.projectToEdit.id, toolboxItem_r13.id, toolboxItem_r13);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var toolboxItem_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", toolboxItem_r13.name, " ");
        }
      }

      function ProjectsDashboardComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Current Toolbox items: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectsDashboardComponent_div_23_span_4_Template, 3, 1, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add Toolbox Item to project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProjectsDashboardComponent_div_23_span_9_Template, 3, 1, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.projectToEdit.toolbox);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.toolboxItems);
        }
      }

      function ProjectsDashboardComponent_div_24_span_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsDashboardComponent_div_24_span_4_Template_i_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var toolboxItem_r19 = ctx.$implicit;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r21.addToolboxItemToNewProject(toolboxItem_r19);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var toolboxItem_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", toolboxItem_r19.name, " ");
        }
      }

      function ProjectsDashboardComponent_div_24_span_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsDashboardComponent_div_24_span_9_Template_i_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var toolboxItem_r23 = ctx.$implicit;
            var i_r24 = ctx.index;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r25.removeToolboxItemFromNewProject(toolboxItem_r23, i_r24);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var toolboxItem_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", toolboxItem_r23.name, " ");
        }
      }

      function ProjectsDashboardComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Toolbox Item to project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectsDashboardComponent_div_24_span_4_Template, 3, 1, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Current Toolbox items: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProjectsDashboardComponent_div_24_span_9_Template, 3, 1, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.toolboxItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.newToolBoxArr);
        }
      }

      function ProjectsDashboardComponent_ng_container_29_th_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var col_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r27, " ");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "last-child": a0
        };
      };

      function ProjectsDashboardComponent_ng_container_29_td_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsDashboardComponent_ng_container_29_td_2_Template_i_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

            var element_r32 = ctx.$implicit;

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r33.editProject(element_r32);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsDashboardComponent_ng_container_29_td_2_Template_i_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

            var element_r32 = ctx.$implicit;

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r35.deleteProject(element_r32);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r32 = ctx.$implicit;

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var col_r27 = ctx_r36.$implicit;
          var last_r28 = ctx_r36.last;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r32[col_r27], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, last_r28));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, last_r28));
        }
      }

      function ProjectsDashboardComponent_ng_container_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsDashboardComponent_ng_container_29_th_1_Template, 2, 1, "th", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectsDashboardComponent_ng_container_29_td_2_Template, 4, 7, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var col_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matColumnDef", col_r27);
        }
      }

      function ProjectsDashboardComponent_td_31_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var toolboxItem_r39 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](toolboxItem_r39.sortcut);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](toolboxItem_r39.name);
        }
      }

      function ProjectsDashboardComponent_td_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProjectsDashboardComponent_td_31_div_11_Template, 3, 4, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r37 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r3.columnsToDisplay.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@detailExpand", element_r37 == ctx_r3.expandedElement ? "expanded" : "collapsed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r37.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", element_r37.youtube_link, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r37.github_link);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", element_r37.toolbox);
        }
      }

      function ProjectsDashboardComponent_tr_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 42);
        }
      }

      function ProjectsDashboardComponent_tr_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsDashboardComponent_tr_33_Template_tr_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

            var element_r40 = ctx.$implicit;

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r41.expandedElement = ctx_r41.expandedElement === element_r40 ? null : element_r40;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r40 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("expanded-row", ctx_r5.expandedElement === element_r40);
        }
      }

      function ProjectsDashboardComponent_tr_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 44);
        }
      }

      var _c1 = function _c1() {
        return ["expandedDetail"];
      };

      var ProjectsDashboardComponent = /*#__PURE__*/function () {
        function ProjectsDashboardComponent(projectsService, toolboxItemService, toolboxService) {
          _classCallCheck(this, ProjectsDashboardComponent);

          this.projectsService = projectsService;
          this.toolboxItemService = toolboxItemService;
          this.toolboxService = toolboxService;
          this.dashboardMenuItems = _admin_dashboard_dashboard_menu_items__WEBPACK_IMPORTED_MODULE_4__["dashboardMenuItems"];
          this.toolboxItems = [];
          this.newProject = new src_app_models_project_model__WEBPACK_IMPORTED_MODULE_3__["Project"]();
          this.columnsToDisplay = ['id', 'name', 'edit/delete'];
          this.projectDetailsTable = [];
          this.newToolBoxArr = [];
          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            youtube_link: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            github_link: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
        }

        _createClass(ProjectsDashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllProjectsWithToolbox();
            this.getAllToolboxItems();
          }
        }, {
          key: "getAllProjectsWithToolbox",
          value: function getAllProjectsWithToolbox() {
            var _this14 = this;

            var projectArr;
            var toolboxArr;
            this.projectsService.getProjects().subscribe(function (projects) {
              projectArr = projects;
              _this14.projects = projects;
              projects.forEach(function (project) {
                _this14.toolboxService.getToolboxItemByProjectId(project.id).subscribe(function (toolbox) {
                  toolboxArr = Object.values(toolbox);
                  project.toolbox = toolboxArr;
                });

                _this14.dataSource = new _models_projectDataSource__WEBPACK_IMPORTED_MODULE_5__["ProjectsDataSource"](_this14.projects);
              });
            });
          }
        }, {
          key: "getAllToolboxItems",
          value: function getAllToolboxItems() {
            var _this15 = this;

            this.toolboxItemService.getToolboxItems().subscribe(function (items) {
              _this15.toolboxItems = items;
            });
          }
        }, {
          key: "createProject",
          value: function createProject() {
            var _this16 = this;

            this.newProject.name = this.formGroup.value.name;
            this.newProject.description = this.formGroup.value.description;
            this.newProject.youtube_link = this.formGroup.value.youtube_link;
            this.newProject.github_link = this.formGroup.value.github_link;
            this.projects.push(this.newProject);
            this.projectsService.postProject(this.newProject).subscribe(function (resp) {
              _this16.newProject.id = resp.id;

              _this16.getAllProjectsWithToolbox();

              _this16.newToolBoxArr.forEach(function (toolboxItem) {
                _this16.toolboxService.postToolboxItem(_this16.newProject.id, toolboxItem.id).subscribe(function () {
                  return console.log('success!');
                });
              });
            });
          }
        }, {
          key: "deleteProject",
          value: function deleteProject(project) {
            var _this17 = this;

            this.projectsService.deleteProject(project.id).subscribe(function () {
              for (var i = 0; i < _this17.projects.length; i++) {
                if (_this17.projects[i].id === project.id) {
                  _this17.projects.slice(i, 1);

                  _this17.getAllProjectsWithToolbox();
                }
              }
            });
          }
        }, {
          key: "editProject",
          value: function editProject(project) {
            this.idProjectToEdit = project.id;
            this.projectToEdit = project;
            this.toolboxToEdit = project.toolbox;
            this.formGroup.patchValue(project);
          }
        }, {
          key: "saveEditedProject",
          value: function saveEditedProject() {
            var _this18 = this;

            this.projectToEdit.name = this.formGroup.value.name;
            this.projectToEdit.description = this.formGroup.value.description;
            this.projectToEdit.youtube_link = this.formGroup.value.youtube_link;
            this.projectToEdit.github_link = this.formGroup.value.github_link;
            this.projectsService.putProject(this.projectToEdit, this.idProjectToEdit).subscribe(function (result) {
              _this18.getAllProjectsWithToolbox();
            });
          } // toolbox items logic

        }, {
          key: "removeToolboxItem",
          value: function removeToolboxItem(projectToEditId, toolboxItemId, i) {
            var _this19 = this;

            this.toolboxService.deleteFromToolbox(projectToEditId, toolboxItemId).subscribe(function () {
              _this19.projectToEdit.toolbox.splice(i, 1);
            });
          }
        }, {
          key: "addToolboxItem",
          value: function addToolboxItem(projectToEditId, toolboxItemId, toolboxItem) {
            var _this20 = this;

            this.toolboxService.postToolboxItem(projectToEditId, toolboxItemId).subscribe(function () {
              _this20.toolboxToEdit.push(toolboxItem);
            });
          }
        }, {
          key: "addToolboxItemToNewProject",
          value: function addToolboxItemToNewProject(toolItem) {
            this.newToolBoxArr.push(toolItem);
            var index = this.toolboxItems.indexOf(toolItem);
            this.toolboxItems.splice(index, 1);
          }
        }, {
          key: "removeToolboxItemFromNewProject",
          value: function removeToolboxItemFromNewProject(toolboxItem, i) {
            this.newToolBoxArr.splice(i, 1);
            this.toolboxItems.push(toolboxItem);
          }
        }, {
          key: "clearForm",
          value: function clearForm() {
            this.projectToEdit.toolbox = [];
            this.formGroup.reset();
          }
        }]);

        return ProjectsDashboardComponent;
      }();

      ProjectsDashboardComponent.ɵfac = function ProjectsDashboardComponent_Factory(t) {
        return new (t || ProjectsDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_6__["ProjectsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_toolboxItem_service__WEBPACK_IMPORTED_MODULE_7__["ToolboxItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_toolbox_service__WEBPACK_IMPORTED_MODULE_8__["ToolboxService"]));
      };

      ProjectsDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProjectsDashboardComponent,
        selectors: [["app-projects-dashboard"]],
        decls: 35,
        vars: 16,
        consts: [[1, "container"], [1, "row", 3, "mode", "text"], [1, "create-project-form", "col-12", 3, "formGroup"], [1, "input-first-row"], ["appearance", "outline", "color", "accent"], ["matInput", "", "placeholder", "Placeholder", "formControlName", "name", "color", "accent"], ["matTooltip", "Clear the form", 1, "fas", "fa-broom", 3, "matTooltipPosition", "click"], [1, "project-form-link-fields"], ["matInput", "", "placeholder", "Placeholder", "formControlName", "youtube_link"], ["matInput", "", "placeholder", "Placeholder", "formControlName", "github_link"], ["matInput", "", "formControlName", "description", "color", "accent"], [4, "ngIf"], [1, "form-buttons"], [1, "send-form-button", 3, "label", "icon", "click"], [1, "edit-form-button", 3, "label", "icon", "click"], ["mat-table", "", "multiTemplateDataRows", "", 1, "mat-elevation-z8", "col-10", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["matColumnDef", "expandedDetail"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "element-row", 3, "expanded-row", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "detail-row", 4, "matRowDef", "matRowDefColumns"], ["class", "toolboxItems", 4, "ngFor", "ngForOf"], [1, "toolboxItems"], [1, "fas", "fa-times", 3, "click"], [1, "fas", "fa-plus", 3, "click"], [1, "toolbox-title"], ["class", "toolboxItems toolbox-items-before", 4, "ngFor", "ngForOf"], [1, "toolboxItems", "toolbox-items-before"], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "far", "fa-edit", 3, "ngClass", "click"], [1, "far", "fa-trash-alt", 3, "ngClass", "click"], [1, "element-detail"], [1, "row"], [1, "col-12", "project-details-description"], [1, "col-12", "project-details-link"], [1, "fab", "fa-youtube"], [1, "fab", "fa-github"], ["class", "col-12 project-details-link", 4, "ngFor", "ngForOf"], ["mat-header-row", ""], ["mat-row", "", 1, "element-row", 3, "click"], ["mat-row", "", 1, "detail-row"]],
        template: function ProjectsDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-title", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Project name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsDashboardComponent_Template_i_click_9_listener() {
              return ctx.clearForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Youtube link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Github link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "textarea", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProjectsDashboardComponent_div_23_Template, 10, 2, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProjectsDashboardComponent_div_24_Template, 10, 2, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "app-button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsDashboardComponent_Template_app_button_click_26_listener() {
              return ctx.createProject();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsDashboardComponent_Template_app_button_click_27_listener() {
              return ctx.saveEditedProject();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "table", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ProjectsDashboardComponent_ng_container_29_Template, 3, 1, "ng-container", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ProjectsDashboardComponent_td_31_Template, 12, 6, "td", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ProjectsDashboardComponent_tr_32_Template, 1, 0, "tr", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ProjectsDashboardComponent_tr_33_Template, 1, 2, "tr", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ProjectsDashboardComponent_tr_34_Template, 1, 0, "tr", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "subtitle-dashboard")("text", "Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "above");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.projectToEdit);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.projectToEdit);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Save as new")("icon", "fab fa-galactic-senate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Edit existing")("icon", "fab fa-galactic-senate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columnsToDisplay);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.columnsToDisplay);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.columnsToDisplay);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));
          }
        },
        directives: [_components_title_title_component__WEBPACK_IMPORTED_MODULE_9__["TitleComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _components_button_button_component__WEBPACK_IMPORTED_MODULE_14__["ButtonComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTable"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatRow"]],
        styles: [".container[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  width: 100vw;\n}\n\n.toolbox-title[_ngcontent-%COMP%] {\n  color: var(--white);\n  font-size: 15px;\n  font-weight: 700;\n  line-height: 3;\n}\n\n.toolbox-items-before[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.input-first-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  margin-left: 60px !important;\n  width: 100%;\n  margin-top: 50px;\n}\n\ntr.element-row[_ngcontent-%COMP%]:not(.expanded-row):hover {\n  background-color: #777 !important;\n  cursor: pointer;\n}\n\ntr.element-row[_ngcontent-%COMP%]:not(.expanded-row):active {\n  background-color: #efefef;\n  cursor: pointer;\n}\n\n.mat-cell[_ngcontent-%COMP%], .mat-header-cell[_ngcontent-%COMP%] {\n  background-color: var(--primary-darkened);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.25);\n}\n\n.mat-header-cell[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, 0.25);\n}\n\n.mat-header-cell[_ngcontent-%COMP%]:first-child {\n  border-left: 1px solid rgba(255, 255, 255, 0.25);\n}\n\n.mat-header-cell[_ngcontent-%COMP%]:last-child {\n  border-right: 1px solid rgba(255, 255, 255, 0.25);\n  text-align: right;\n}\n\n.mat-cell[_ngcontent-%COMP%]:first-child {\n  border-left: 1px solid rgba(255, 255, 255, 0.25);\n}\n\n.mat-cell[_ngcontent-%COMP%]:last-child {\n  border-right: 1px solid rgba(255, 255, 255, 0.25);\n}\n\n.toolboxItems[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n\n.fa-times[_ngcontent-%COMP%], .fa-plus[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n\n.fa-times[_ngcontent-%COMP%]:hover, .fa-plus[_ngcontent-%COMP%]:hover {\n  color: var(--secondary-color);\n}\n\nth[_ngcontent-%COMP%] {\n  color: var(--secondary-dashboard);\n  text-transform: uppercase;\n  font-weight: 900;\n}\n\ntr.detail-row[_ngcontent-%COMP%] {\n  height: 0;\n}\n\ntable.mat-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  color: var(--primary-darkened);\n  background-color: var(--secondary-dashboard);\n  font-weight: bold;\n}\n\n.element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n\n.element-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n  height: 200px;\n}\n\n.element-diagram[_ngcontent-%COMP%] {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.element-symbol[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.project-details-description[_ngcontent-%COMP%] {\n  padding-left: 50px;\n  padding-right: 50px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.project-details-link[_ngcontent-%COMP%] {\n  padding-left: 50px;\n}\n\n.fab[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.element-description[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.element-description-attribution[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.fa-trash-alt[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.fa-trash-alt[_ngcontent-%COMP%], .fa-edit[_ngcontent-%COMP%] {\n  display: none;\n}\n\ntr[_ngcontent-%COMP%]:hover   .fa-trash-alt[_ngcontent-%COMP%] {\n  color: var(--secondary-color);\n}\n\n.fa-edit[_ngcontent-%COMP%]:hover {\n  color: blue;\n}\n\n.last-child[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 10px;\n}\n\n.element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  text-align: end !important;\n}\n\n.create-project-form[_ngcontent-%COMP%] {\n  width: 70%;\n  margin-left: 60px;\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n}\n\n.form-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.mat-form-field-appearance-outline[_ngcontent-%COMP%] {\n  margin-right: 20px !important;\n}\n\n.project-form-link-fields[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.project-form-link-fields[_ngcontent-%COMP%]   .mat-form-field-appearance-outline[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  height: 150px;\n}\n\n.send-form-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-self: flex-end;\n  margin-right: 20px;\n}\n\ntextarea.mat-input-element[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n\ninput.mat-input-element[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Byb2plY3RzLWRhc2hib2FyZC9wcm9qZWN0cy1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNBO0VBQ0ksWUFBQTtBQUVKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBRUo7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUNBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFHQTs7RUFFSSx5Q0FBQTtFQUNBLGtEQUFBO0FBQUo7O0FBR0E7RUFDSSwrQ0FBQTtBQUFKOztBQUdBO0VBQ0ksZ0RBQUE7QUFBSjs7QUFHQTtFQUNJLGlEQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLGdEQUFBO0FBQUo7O0FBR0E7RUFDSSxpREFBQTtBQUFKOztBQUlBO0VBQ0ksbUJBQUE7QUFESjs7QUFJQTs7RUFFSSxrQkFBQTtBQURKOztBQUlBOztFQUVJLDZCQUFBO0FBREo7O0FBSUE7RUFDSSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJQTtFQUNJLFNBQUE7QUFESjs7QUFJQTtFQUNJLDhCQUFBO0VBQ0EsNENBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlBO0VBQ0ksc0JBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBREo7O0FBSUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtBQURKOztBQUlBOztFQUVJLGFBQUE7QUFESjs7QUFJQTtFQUNJLDZCQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0FBREo7O0FBSUE7RUFDSSxxQkFBQTtFQUVBLGtCQUFBO0FBRko7O0FBS0E7RUFDSSwwQkFBQTtBQUZKOztBQU9BO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFKSjs7QUFPQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFKSjs7QUFPQTtFQUNJLDZCQUFBO0FBSko7O0FBT0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBSko7O0FBT0E7RUFDSSxXQUFBO0FBSko7O0FBT0E7RUFDSSxhQUFBO0FBSko7O0FBT0E7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUpKOztBQU9BO0VBQ0ksbUJBQUE7QUFKSjs7QUFPQTtFQUNJLG1CQUFBO0FBSkoiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvcHJvamVjdHMtZGFzaGJvYXJkL3Byb2plY3RzLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICB3aWR0aDogMTAwdnc7XG59XG4udG9vbGJveC10aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMztcbn1cblxuLnRvb2xib3gtaXRlbXMtYmVmb3JlIHtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG5cbi5pbnB1dC1maXJzdC1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG59XG5cbi50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtdGFibGUge1xuICAgIG1hcmdpbi1sZWZ0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxudHIuZWxlbWVudC1yb3c6bm90KC5leHBhbmRlZC1yb3cpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3ICFpbXBvcnRhbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG50ci5lbGVtZW50LXJvdzpub3QoLmV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLy9mb3IgYm9yZGVycyBvbiB0YWJsZVxuLm1hdC1jZWxsLFxuLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrZW5lZCk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG59XG5cbi5tYXQtaGVhZGVyLWNlbGwge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xufVxuXG4ubWF0LWhlYWRlci1jZWxsOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG59XG5cbi5tYXQtaGVhZGVyLWNlbGw6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm1hdC1jZWxsOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG59XG5cbi5tYXQtY2VsbDpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xufVxuLy8gZW5kIGJvcmRlcnMgb24gdGFibGVcblxuLnRvb2xib3hJdGVtcyB7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cblxuLmZhLXRpbWVzLFxuLmZhLXBsdXMge1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmZhLXRpbWVzOmhvdmVyLFxuLmZhLXBsdXM6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG50aCB7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1kYXNoYm9hcmQpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxudHIuZGV0YWlsLXJvdyB7XG4gICAgaGVpZ2h0OiAwO1xufVxuXG50YWJsZS5tYXQtdGFibGUgdHI6aG92ZXIgdGQge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmtlbmVkKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZGFzaGJvYXJkKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmVsZW1lbnQtcm93IHRkIHtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xufVxuXG4uZWxlbWVudC1kZXRhaWwge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uZWxlbWVudC1kaWFncmFtIHtcbiAgICBtaW4td2lkdGg6IDgwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgaGVpZ2h0OiAxMDRweDtcbn1cblxuLmVsZW1lbnQtc3ltYm9sIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnByb2plY3QtZGV0YWlscy1kZXNjcmlwdGlvbiB7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5wcm9qZWN0LWRldGFpbHMtbGluayB7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xufVxuXG4uZmFiIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5lbGVtZW50LWRlc2NyaXB0aW9uIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvbiB7XG4gICAgb3BhY2l0eTogMC41O1xufVxuXG4uZmEtdHJhc2gtYWx0IHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYS10cmFzaC1hbHQsXG4uZmEtZWRpdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxudHI6aG92ZXIgLmZhLXRyYXNoLWFsdCB7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbi5mYS1lZGl0OmhvdmVyIHtcbiAgICBjb2xvcjogYmx1ZTtcbn1cblxuLmxhc3QtY2hpbGQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmVsZW1lbnQtcm93IHRkOmxhc3QtY2hpbGQge1xuICAgIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xufVxuXG4vL2Zvcm1cblxuLmNyZWF0ZS1wcm9qZWN0LWZvcm0ge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mb3JtLWJ1dHRvbnMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9qZWN0LWZvcm0tbGluay1maWVsZHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9qZWN0LWZvcm0tbGluay1maWVsZHMgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbnRleHRhcmVhIHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4uc2VuZC1mb3JtLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbnRleHRhcmVhLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG5pbnB1dC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cbiJdfQ== */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('detailExpand', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            height: '0px',
            minHeight: '0'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            height: '*'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsDashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-projects-dashboard',
            templateUrl: './projects-dashboard.component.html',
            styleUrls: ['./projects-dashboard.component.scss'],
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('detailExpand', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              height: '0px',
              minHeight: '0'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              height: '*'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])]
          }]
        }], function () {
          return [{
            type: src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_6__["ProjectsService"]
          }, {
            type: src_app_services_toolboxItem_service__WEBPACK_IMPORTED_MODULE_7__["ToolboxItemService"]
          }, {
            type: src_app_services_toolbox_service__WEBPACK_IMPORTED_MODULE_8__["ToolboxService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/main/main.component */
      "/s1f");
      /* harmony import */


      var _dashboard_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard/admin-dashboard/admin-dashboard.component */
      "WRM6");
      /* harmony import */


      var _dashboard_bio_dashboard_bio_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./dashboard/bio-dashboard/bio-dashboard.component */
      "GXNk");
      /* harmony import */


      var _dashboard_projects_dashboard_projects_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dashboard/projects-dashboard/projects-dashboard.component */
      "uiOn");
      /* harmony import */


      var _dashboard_misc_dashboard_misc_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dashboard/misc-dashboard/misc-dashboard.component */
      "2OzE");
      /* harmony import */


      var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/register/register.component */
      "fNfI");
      /* harmony import */


      var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/login/login.component */
      "D8EZ");
      /* harmony import */


      var _guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./guards/auth-guard.guard */
      "1eeg");

      var routes = [{
        path: '',
        component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
      }, {
        path: 'register',
        component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]
      }, {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
      }, {
        path: 'dashboard',
        component: _dashboard_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["AdminDashboardComponent"],
        canActivate: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuardGuard"]],
        children: [{
          path: '',
          component: _dashboard_projects_dashboard_projects_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsDashboardComponent"]
        }, {
          path: 'bio',
          component: _dashboard_bio_dashboard_bio_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["BioDashboardComponent"]
        }, {
          path: 'misc',
          component: _dashboard_misc_dashboard_misc_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["MiscDashboardComponent"]
        }]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

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
    "zTYo":
    /*!**************************************!*\
      !*** ./src/app/models/experience.ts ***!
      \**************************************/

    /*! exports provided: Experience */

    /***/
    function zTYo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Experience", function () {
        return Experience;
      });

      var Experience = function Experience() {
        _classCallCheck(this, Experience);
      };
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map
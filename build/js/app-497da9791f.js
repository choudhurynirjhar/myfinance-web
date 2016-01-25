/**
 * myfinance - myfinance Project Generated from HotTowel Angular
 * @authors 
 * @version v0.0.0
 * @link 
 * @license 
 */
!function(){"use strict";angular.module("app",["app.core","app.widgets","app.admin","app.dashboard","app.layout"])}(),function(){"use strict";angular.module("app.admin",["app.core","app.widgets"])}(),function(){"use strict";angular.module("blocks.exception",["blocks.logger"])}(),function(){"use strict";angular.module("blocks.logger",[])}(),function(){"use strict";angular.module("blocks.router",["ui.router","blocks.logger"])}(),function(){"use strict";angular.module("app.core",["ngAnimate","ngSanitize","blocks.exception","blocks.logger","blocks.router","ui.router","ngplus"])}(),function(){"use strict";angular.module("app.dashboard",["app.core","app.widgets"])}(),function(){"use strict";angular.module("app.layout",["app.core"])}(),function(){"use strict";angular.module("app.widgets",[])}(),function(){"use strict";function t(t){function e(){t.info("Activated Admin View")}var n=this;n.title="Admin",e()}angular.module("app.admin").controller("AdminController",t),t.$inject=["logger"]}(),function(){"use strict";function t(t){t.configureStates(e())}function e(){return[{state:"admin",config:{url:"/admin",templateUrl:"app/admin/admin.html",controller:"AdminController",controllerAs:"vm",title:"Admin",settings:{nav:2,content:'<i class="fa fa-lock"></i> Admin'}}}]}angular.module("app.admin").run(t),t.$inject=["routerHelper"]}(),function(){"use strict";function t(){this.config={appErrorPrefix:void 0},this.configure=function(t){this.config.appErrorPrefix=t},this.$get=function(){return{config:this.config}}}function e(t){t.decorator("$exceptionHandler",n)}function n(t,e,n){return function(a,i){var r=e.config.appErrorPrefix||"",o={exception:a,cause:i};a.message=r+a.message,t(a,i),n.error(a.message,o)}}angular.module("blocks.exception").provider("exceptionHandler",t).config(e),e.$inject=["$provide"],n.$inject=["$delegate","exceptionHandler","logger"]}(),function(){"use strict";function t(t,e){function n(n){return function(a){var i,r;return a.data&&a.data.description&&(i="\n"+a.data.description,r=n+i),a.data.description=r,e.error(r),t.reject(a)}}var a={catcher:n};return a}t.$inject=["$q","logger"],angular.module("blocks.exception").factory("exception",t)}(),function(){"use strict";function t(t,e){function n(n,a,i){e.error(n,i),t.error("Error: "+n,a)}function a(n,a,i){e.info(n,i),t.info("Info: "+n,a)}function i(n,a,i){e.success(n,i),t.info("Success: "+n,a)}function r(n,a,i){e.warning(n,i),t.warn("Warning: "+n,a)}var o={showToasts:!0,error:n,info:a,success:i,warning:r,log:t.log};return o}angular.module("blocks.logger").factory("logger",t),t.$inject=["$log","toastr"]}(),function(){"use strict";function t(t,e,n){function a(t,a,r,o){function s(t,a){t.forEach(function(t){t.config.resolve=angular.extend(t.config.resolve||{},i.resolveAlways),e.state(t.state,t.config)}),a&&!v&&(v=!0,n.otherwise(a))}function l(){a.$on("$stateChangeError",function(e,n,a,i,r,s){if(!p){g.errors++,p=!0;var l=n&&(n.title||n.name||n.loadedTemplateUrl)||"unknown target",c="Error routing to "+l+". "+(s.data||"")+". <br/>"+(s.statusText||"")+": "+(s.status||"");o.warning(c,[n]),t.path("/")}})}function c(){l(),u()}function d(){return r.get()}function u(){a.$on("$stateChangeSuccess",function(t,e,n,r,o){g.changes++,p=!1;var s=i.docTitle+" "+(e.title||"");a.title=s})}var p=!1,v=!1,g={errors:0,changes:0},f={configureStates:s,getStates:d,stateCounts:g};return c(),f}var i={docTitle:void 0,resolveAlways:{}};t.html5Mode(!0),this.configure=function(t){angular.extend(i,t)},this.$get=a,a.$inject=["$location","$rootScope","$state","logger"]}angular.module("blocks.router").provider("routerHelper",t),t.$inject=["$locationProvider","$stateProvider","$urlRouterProvider"]}(),function(){"use strict";function t(t){t.options.timeOut=4e3,t.options.positionClass="toast-bottom-right"}function e(t,e,n){t.debugEnabled&&t.debugEnabled(!0),n.configure(a.appErrorPrefix),e.configure({docTitle:a.appTitle+": "})}var n=angular.module("app.core");n.config(t),t.$inject=["toastr"];var a={appErrorPrefix:"[myfinance Error] ",appTitle:"My Personal Finance"};n.value("config",a),n.config(e),e.$inject=["$logProvider","routerHelperProvider","exceptionHandlerProvider"]}(),function(){"use strict";angular.module("app.core").constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function t(t){var n="/404";t.configureStates(e(),n)}function e(){return[{state:"404",config:{url:"/404",templateUrl:"app/core/404.html",title:"404"}}]}t.$inject=["routerHelper"],angular.module("app.core").run(t)}(),function(){"use strict";function t(t,e,n,a){function i(){return e.when(72)}function r(){function e(t){return t.data}function a(t){return n.catcher("XHR Failed for getPeople")(t)}return t.get("/api/people").then(e)["catch"](a)}var o={getPeople:r,getMessageCount:i};return o}angular.module("app.core").factory("dataservice",t),t.$inject=["$http","$q","exception","logger"]}(),function(){"use strict";function t(t,e,n){function a(){var e=[i(),r()];return t.all(e).then(function(){n.info("Activated Dashboard View")})}function i(){return e.getMessageCount().then(function(t){return o.messageCount=t,o.messageCount})}function r(){return e.getPeople().then(function(t){return o.people=t,o.people})}var o=this;o.news={title:"Daily Planner",description:"Under construction."},o.messageCount=0,o.people=[],o.title="Dashboard",a()}angular.module("app.dashboard").controller("DashboardController",t),t.$inject=["$q","dataservice","logger"]}(),function(){"use strict";function t(t){t.configureStates(e())}function e(){return[{state:"dashboard",config:{url:"/",templateUrl:"app/dashboard/dashboard.html",controller:"DashboardController",controllerAs:"vm",title:"dashboard",settings:{nav:1,content:'<i class="fa fa-dashboard"></i> Dashboard'}}}]}angular.module("app.dashboard").run(t),t.$inject=["routerHelper"]}(),function(){"use strict";function t(){function t(t,e,n){function a(e){var n="dropy";e.preventDefault(),r.hasClass(n)?r.hasClass(n)&&(r.removeClass(n),i.slideUp(350,t.whenDoneAnimating)):(i.slideDown(350,t.whenDoneAnimating),r.addClass(n))}var i=e.find(".sidebar-inner"),r=e.find(".sidebar-dropdown a");e.addClass("sidebar"),r.click(a)}var e={link:t,restrict:"EA",scope:{whenDoneAnimating:"&?"}};return e}angular.module("app.layout").directive("htSidebar",t)}(),function(){"use strict";function t(){function t(){}var e={bindToController:!0,controller:t,controllerAs:"vm",restrict:"EA",scope:{navline:"="},templateUrl:"app/layout/ht-top-nav.html"};return e}angular.module("app.layout").directive("htTopNav",t)}(),function(){"use strict";function t(t,e,n,a){function i(){a.success(n.appTitle+" loaded!",null),r()}function r(){e(function(){t.showSplash=!1},1e3)}var o=this;o.busyMessage="Please wait ...",o.isBusy=!0,t.showSplash=!0,o.navline={title:n.appTitle,text:"Created by AppMakers",link:"mailto:winappmaker@hotmail.com"},i()}angular.module("app.layout").controller("ShellController",t),t.$inject=["$rootScope","$timeout","config","logger"]}(),function(){"use strict";function t(t,e){function n(){a()}function a(){r.navRoutes=o.filter(function(t){return t.settings&&t.settings.nav}).sort(function(t,e){return t.settings.nav-e.settings.nav})}function i(e){if(!e.title||!t.current||!t.current.title)return"";var n=e.title;return t.current.title.substr(0,n.length)===n?"current":""}var r=this,o=e.getStates();r.isCurrent=i,n()}angular.module("app.layout").controller("SidebarController",t),t.$inject=["$state","routerHelper"]}(),function(){"use strict";function t(t){function e(t,e,i){i.$observe("htImgPerson",function(t){t=n+(t||a),i.$set("src",t)})}var n=t.imageBasePath,a=t.unknownPersonImageSource,i={link:e,restrict:"A"};return i}angular.module("app.widgets").directive("htImgPerson",t),t.$inject=["config"]}(),function(){"use strict";function t(){var t={scope:{title:"@",subtitle:"@",rightText:"@",allowCollapse:"@"},templateUrl:"app/widgets/widget-header.html",restrict:"EA"};return t}angular.module("app.widgets").directive("htWidgetHeader",t)}(),angular.module("app.core").run(["$templateCache",function(t){t.put("app/admin/admin.html",'<section class=mainbar><section class=matter><div class=container><div class=row><div class="widget wviolet"><div ht-widget-header title={{vm.title}}></div><div class="widget-content user"><h3>Under construction</h3></div><div class=widget-foot><div class=clearfix></div></div></div></div></div></section></section>'),t.put("app/core/404.html",'<section id=dashboard-view class=mainbar><section class=matter><div class=container><div class=row><div class=col-md-12><ul class=today-datas><li class=bred><div class=pull-left><i class="fa fa-warning"></i></div><div class="datas-text pull-right"><a><span class=bold>404</span></a>Page Not Found</div><div class=clearfix></div></li></ul></div></div><div class=row><div class="widget wblue"><div ht-widget-header title="Page Not Found" allow-collapse=true></div><div class="widget-content text-center text-info"><div class=container>No soup for you!</div></div><div class=widget-foot><div class=clearfix></div></div></div></div></div></section></section>'),t.put("app/dashboard/dashboard.html",'<section id=dashboard-view class=mainbar><section class=matter><div class=container><div class=row><div class=col-md-12><ul class=today-datas><li class=blightblue><div class=pull-left><i class="fa fa-plane"></i></div><div class="datas-text pull-right"><span class=bold>Stocks to watch</span> Under construction!</div><div class=clearfix></div></li><li class=borange><div class=pull-left><i class="fa fa-envelope"></i></div><div class="datas-text pull-right"><span class=bold>{{vm.messageCount}}</span> Messages</div><div class=clearfix></div></li></ul></div></div><div class=row><div class=col-md-6><div class="widget wviolet"><div ht-widget-header title=Expenses allow-collapse=true></div><div class="widget-content text-center text-info"><table class="table table-condensed table-striped"><thead><tr><th>Item</th><th>Vendor</th><th>Price</th><th>Location</th></tr></thead><tbody><tr ng-repeat="p in vm.people"><td>{{p.item}}</td><td>{{p.vendor}}</td><td>{{p.price}}</td><td>{{p.location}}</td></tr></tbody></table></div><div class=widget-foot><div class=clearfix></div></div></div></div><div class=col-md-6><div class="widget wgreen"><div ht-widget-header title={{vm.news.title}} allow-collapse=true></div><div class="widget-content text-center text-info"><small>{{vm.news.description}}</small></div><div class=widget-foot><div class=clearfix></div></div></div></div></div></div></section></section>'),t.put("app/layout/ht-top-nav.html",'<nav class="navbar navbar-fixed-top navbar-inverse"><div class=navbar-header><a href="/" class=navbar-brand><span class=brand-title>{{vm.navline.title}}</span></a> <a class="btn navbar-btn navbar-toggle" data-toggle=collapse data-target=.navbar-collapse><span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></a></div><div class="navbar-collapse collapse"><div class="pull-right navbar-logo"><ul class="nav navbar-nav pull-right"><li><a ng-href={{vm.navline.link}} target=_blank>{{vm.navline.text}}</a></li></ul></div></div></nav>'),t.put("app/layout/shell.html",'<div ng-controller="ShellController as vm"><header class=clearfix><ht-top-nav navline=vm.navline></ht-top-nav></header><section id=content class=content><div ng-include="\'app/layout/sidebar.html\'"></div><div ui-view class=shuffle-animation></div><div ngplus-overlay ngplus-overlay-delay-in=50 ngplus-overlay-delay-out=700 ngplus-overlay-animation=dissolve-animation><img src=images/busy.gif><div class="page-spinner-message overlay-message">{{vm.busyMessage}}</div></div></section></div>'),t.put("app/layout/sidebar.html",'<div ng-controller="SidebarController as vm"><ht-sidebar when-done-animating=vm.sidebarReady()><div class=sidebar-filler></div><div class=sidebar-dropdown><a href=#>Menu</a></div><div class=sidebar-inner><div class=sidebar-widget></div><ul class=navi><li class="nlightblue fade-selection-animation" ng-class=vm.isCurrent(r) ng-repeat="r in vm.navRoutes"><a ui-sref={{r.name}} ng-bind-html=r.settings.content></a></li></ul></div></ht-sidebar></div>'),t.put("app/widgets/widget-header.html",'<div class=widget-head><div class="page-title pull-left">{{title}}</div><small class=page-title-subtle ng-show=subtitle>({{subtitle}})</small><div class="widget-icons pull-right"></div><small class="pull-right page-title-subtle" ng-show=rightText>{{rightText}}</small><div class=clearfix></div></div>')}]);
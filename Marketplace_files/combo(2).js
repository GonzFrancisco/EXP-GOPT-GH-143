(function () {
  var LiferayAUI = Liferay.AUI;
  var combine = LiferayAUI.getCombine();
  window.__CONFIG__ = {
    basePath: "",
    combine: combine,
    reportMismatchedAnonymousModules: "warn",
    url: combine
      ? LiferayAUI.getComboPath()
      : Liferay.ThemeDisplay.getCDNBaseURL(),
  };
  if (!combine)
    __CONFIG__.defaultURLParams = { languageId: themeDisplay.getLanguageId() };
  __CONFIG__.maps = Liferay.MAPS;
  __CONFIG__.modules = Liferay.MODULES;
  __CONFIG__.paths = Liferay.PATHS;
  __CONFIG__.resolvePath = Liferay.RESOLVE_PATH;
  __CONFIG__.namespace = "Liferay";
  __CONFIG__.explainResolutions = Liferay.EXPLAIN_RESOLUTIONS;
  __CONFIG__.exposeGlobal = Liferay.EXPOSE_GLOBAL;
  __CONFIG__.logLevel = Liferay.LOG_LEVEL;
  __CONFIG__.waitTimeout = Liferay.WAIT_TIMEOUT;
})();
!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 1));
})([
  function (e, t, n) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })();
    var o = (function () {
      function e(t) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this._config = t);
      }
      return (
        r(e, [
          {
            key: "build",
            value: function (e) {
              var t = this,
                n = this._config,
                r = [],
                o = [],
                i = [],
                a = n.basePath;
              return (
                a.length && "/" !== a.charAt(a.length - 1) && (a += "/"),
                e.forEach(function (e) {
                  var l = n.getModule(e),
                    u = t._getModulePath(l);
                  n.combine
                    ? (r.push(u), o.push(l.name))
                    : i.push({
                        modules: [l.name],
                        url: t._getURLWithParams(n.url + a + u),
                      });
                }),
                r.length &&
                  ((i = i.concat(
                    this._generateBufferURLs(o, r, {
                      basePath: a,
                      url: n.url,
                      urlMaxLength: n.urlMaxLength,
                    })
                  )),
                  (r.length = 0)),
                i
              );
            },
          },
          {
            key: "_generateBufferURLs",
            value: function (e, t, n) {
              for (
                var r = n.basePath,
                  o = [],
                  i = n.urlMaxLength,
                  a = { modules: [e[0]], url: n.url + r + t[0] },
                  l = 1;
                l < t.length;
                l++
              ) {
                var u = e[l],
                  s = t[l];
                a.url.length + r.length + s.length + 1 < i
                  ? (a.modules.push(u), (a.url += "\x26" + r + s))
                  : (o.push(a), (a = { modules: [u], url: n.url + r + s }));
              }
              return (a.url = this._getURLWithParams(a.url)), o.push(a), o;
            },
          },
          {
            key: "_getModulePath",
            value: function (e) {
              var t = this._config.paths,
                n = e.name;
              return (
                Object.keys(t).forEach(function (e) {
                  (n !== e && 0 !== n.indexOf(e + "/")) ||
                    (n = t[e] + n.substring(e.length));
                }),
                n.lastIndexOf(".js") !== n.length - 3 && (n += ".js"),
                n
              );
            },
          },
          {
            key: "_getURLWithParams",
            value: function (e) {
              var t = this._config.defaultURLParams || {},
                n = Object.keys(t);
              if (!n.length) return e;
              var r = n
                .map(function (e) {
                  return e + "\x3d" + t[e];
                })
                .join("\x26");
              return e + (e.indexOf("?") > -1 ? "\x26" : "?") + r;
            },
          },
        ]),
        e
      );
    })();
    t.default = o;
  },
  function (e, t, n) {
    var r,
      o = n(2),
      i = (r = o) && r.__esModule ? r : { default: r };
    var a = window.__CONFIG__ || {},
      l = "string" == typeof a.namespace ? a.namespace : void 0,
      u = void 0 === a.exposeGlobal || a.exposeGlobal,
      s = new i.default(a);
    if (l) {
      var c = window[l] ? window[l] : {};
      (c.Loader = s), (window[l] = c);
    } else window.Loader = s;
    u &&
      ((window.Loader = s),
      (window.require = i.default.prototype.require.bind(s)),
      (window.define = i.default.prototype.define.bind(s)),
      (window.define.amd = {}));
  },
  function (e, t, n) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      o = c(n(3)),
      i = c(n(6)),
      a = c(n(7)),
      l = c(n(0)),
      u = c(n(8)),
      s = c(n(9));
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function f(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    var d = (function () {
      function e() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null,
          n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this._config = new o.default(t || window.__CONFIG__)),
          (this._log = new u.default(this._config)),
          (this._dependencyResolver = new i.default(this._config)),
          (this._urlBuilder = new l.default(this._config)),
          (this._scriptLoader = new a.default(
            n || window.document,
            this._config,
            this._log
          )),
          (this._requireCallId = 0);
      }
      return (
        r(e, [
          {
            key: "version",
            value: function () {
              return s.default.version;
            },
          },
          {
            key: "define",
            value: function () {
              for (
                var e = this._config, t = arguments.length, n = Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              var o = n[0],
                i = e.getModule(o);
              if (i && i.defined)
                this._log.warn(
                  "Module '" + o + "' is being redefined. Only the first",
                  "definition will be used"
                );
              else {
                var a = n[1],
                  l = n[2];
                if (
                  (2 == n.length &&
                    ((l = a), (a = ["require", "exports", "module"])),
                  "function" != typeof l)
                ) {
                  var u = l;
                  l = function () {
                    return u;
                  };
                }
                if (!(i = e.getModule(o)))
                  throw new Error(
                    "Trying to define a module that was not registered: " +
                      o +
                      "\nThis usually means that someone is calling define() for a module that has not been previously required."
                  );
                if (i.defined)
                  throw new Error(
                    "Trying to define a module more than once: " +
                      o +
                      "\nThis usually means that someone is calling define() more than once for the same module, which can lead to unexpected results."
                  );
                this._log.resolution("Defining", i.name),
                  (i.factory = l),
                  (i.dependencies = a),
                  i.define.resolve(n);
              }
            },
          },
          {
            key: "require",
            value: function () {
              for (
                var e = this, t = arguments.length, n = Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              var o = this._scriptLoader,
                i = this._config,
                a = this._requireCallId++,
                l = void 0,
                u = void 0,
                s = void 0;
              if (1 == n.length) (l = n[0]), (u = void 0), (s = void 0);
              else if (2 == n.length) {
                var c = n[n.length - 1];
                "function" == typeof c
                  ? ((l = n[0]), (u = c), (s = void 0))
                  : null == c
                  ? ((l = n[0]), (u = void 0), (s = void 0))
                  : ((l = n), (u = void 0), (s = void 0));
              } else {
                var d = n[n.length - 1],
                  h = !1;
                if ((("function" != typeof d && null != d) || (h = !0), h)) {
                  var p = n[n.length - 2],
                    m = !1;
                  ("function" != typeof p && null != p) || (m = !0),
                    m
                      ? ((l = n.slice(0, n.length - 2)), (u = p), (s = d))
                      : ((l = n.slice(0, n.length - 1)), (u = d), (s = void 0));
                } else (l = n), (u = void 0), (s = void 0);
              }
              if ("string" == typeof l) l = [l];
              else if (1 == l.length && Array.isArray(l[0])) {
                var v;
                l = (v = []).concat.apply(v, f(l));
              }
              if ((void 0 === u && (u = function () {}), void 0 === s)) {
                var g = new Error("");
                s = function (t) {
                  var n = "(n/a)";
                  g.stack &&
                    (n =
                      "\n" +
                      (n = g.stack
                        .split("\n")
                        .map(function (e) {
                          return "        " + e;
                        })
                        .join("\n"))),
                    e._log.error(
                      "\n",
                      "A require() call has failed but no failure handler was",
                      "provided.\n",
                      "Note that even if the call stack of this error trace",
                      "looks like coming from the Liferay AMD Loader, it is not",
                      "an error in the Loader what has caused it, but an error",
                      "caused by the require() call.\n",
                      "The reason why the Loader is in the stack trace is",
                      "because it is printing the error so that it doesn't get",
                      "lost.\n",
                      "However, we recommend providing a failure handler in all",
                      "require() calls to be able to recover from errors better",
                      "and to avoid the appearance of this message.\n",
                      "\n",
                      "Some information about the require() call follows:\n",
                      "  \u00b7 Require call id:",
                      a,
                      "\n",
                      "  \u00b7 Required modules:",
                      l,
                      "\n",
                      "  \u00b7 Missing modules:",
                      t.missingModules ? t.missingModules : "(n/a)",
                      "\n",
                      "  \u00b7 Stack trace of the require() call:",
                      "" + n,
                      "\n",
                      t
                    );
                };
              }
              (u = this._interceptHandler(u, "success", a)),
                (s = this._interceptHandler(s, "failure", a));
              var y = void 0,
                _ = void 0,
                b = void 0,
                w = !1;
              this._dependencyResolver
                .resolve(l)
                .then(function (t) {
                  return (
                    e._log.resolution(
                      "Require call",
                      a,
                      "resolved modules",
                      l,
                      "to",
                      t
                    ),
                    e._throwOnResolutionErrors(t),
                    i.addMappings(t.configMap),
                    i.addPaths(t.pathMap),
                    (y = t.resolvedModules),
                    (_ = e._getUnregisteredModuleNames(y)).forEach(function (
                      e
                    ) {
                      var n = { map: t.moduleMap[e] },
                        r = t.moduleFlags ? t.moduleFlags[e] : {};
                      (r = r || {}).esModule && (n.esModule = !0),
                        i.addModule(e, n);
                    }),
                    (b = e._setRejectTimeout(l, t, function () {
                      (w = !0), s.apply(void 0, arguments);
                    })),
                    e._log.resolution("Fetching", _, "from require call", a),
                    o.loadModules(_)
                  );
                })
                .then(function () {
                  if (!w) return e._waitForModuleDefinitions(y);
                })
                .then(function () {
                  if (!w) {
                    clearTimeout(b), e._setModuleImplementations(a, y);
                    var t = e._getModuleImplementations(l);
                    u.apply(void 0, f(t));
                  }
                })
                .catch(function (e) {
                  w || (b && clearTimeout(b), s(e));
                });
            },
          },
          {
            key: "_interceptHandler",
            value: function (e, t, n) {
              var r = this;
              return function () {
                r._log.resolution(
                  "Invoking",
                  t,
                  "handler for",
                  "require call",
                  n
                );
                try {
                  e.apply(void 0, arguments);
                } catch (e) {
                  r._log.error(
                    "\n",
                    "A require() call",
                    t,
                    "handler has thrown an error.\n",
                    "Note that even if the call stack of this error trace",
                    "looks like coming from the Liferay AMD Loader, it is not",
                    "an error in the Loader what has caused it, but an error",
                    "in the handler's code.\n",
                    "The reason why the Loader is in the stack trace is",
                    "because it is printing the error on behalf of the handler",
                    "so that it doesn't get lost.\n",
                    "However, we recommend wrapping all handler code inside a",
                    "try/catch to be able to recover from errors better and to",
                    "avoid the appearance of this message.\n",
                    "\n",
                    e
                  );
                }
              };
            },
          },
          {
            key: "_throwOnResolutionErrors",
            value: function (e) {
              var t = e.resolvedModules
                .filter(function (e) {
                  return 0 === e.indexOf(":ERROR:");
                })
                .map(function (e) {
                  return e.substr(7);
                });
              if (t.length > 0)
                throw Object.assign(
                  new Error(
                    "The following problems where detected while resolving modules:\n" +
                      t
                        .map(function (e) {
                          return "    \u00b7 " + e;
                        })
                        .join("\n")
                  ),
                  { resolutionErrors: t }
                );
            },
          },
          {
            key: "_getUnregisteredModuleNames",
            value: function (e) {
              var t = this._config;
              return e.filter(function (e) {
                return !t.getModule(e);
              });
            },
          },
          {
            key: "_setRejectTimeout",
            value: function (e, t, n) {
              var r = this._config;
              if (0 !== r.waitTimeout)
                return setTimeout(function () {
                  var o = t.resolvedModules.filter(function (e) {
                      var t = r.getModule(e);
                      return !t || !t.implemented;
                    }),
                    i = Object.assign(
                      new Error("Load timeout for modules: " + e),
                      { modules: e, resolution: t, missingModules: o }
                    );
                  n(i);
                }, r.waitTimeout);
            },
          },
          {
            key: "_waitForModuleDefinitions",
            value: function (e) {
              var t = this._config;
              return Promise.all(
                t.getModules(e).map(function (e) {
                  return e.define;
                })
              );
            },
          },
          {
            key: "_waitForModuleImplementations",
            value: function (e) {
              var t = this._config;
              return Promise.all(
                t.getModules(e).map(function (e) {
                  return e.implement;
                })
              );
            },
          },
          {
            key: "_setModuleImplementations",
            value: function (e, t) {
              var n = this,
                r = this._config;
              r.getModules(t).forEach(function (t) {
                if (!t.implemented) {
                  if (t.implement.rejected) throw t.implement.rejection;
                  n._log.resolution(
                    "Implementing",
                    t.name,
                    "from require call",
                    e
                  );
                  try {
                    var o = {
                        get exports() {
                          return t.implementation;
                        },
                        set exports(e) {
                          t.implementation = e;
                        },
                      },
                      i = t.dependencies.map(function (e) {
                        if ("exports" === e) return o.exports;
                        if ("module" === e) return o;
                        if ("require" === e) return n._createLocalRequire(t);
                        var i = r.getDependency(t.name, e);
                        if (!i)
                          throw new Error(
                            "Unsatisfied dependency: " +
                              e +
                              " found in module " +
                              t.name
                          );
                        if (!i.implementation && !i.implemented)
                          throw new Error(
                            'Module "' +
                              i.name +
                              '" has not been loaded yet for context: ' +
                              t.name
                          );
                        return i.implementation;
                      }),
                      a = t.factory.apply(t, f(i));
                    void 0 !== a && (t.implementation = a),
                      t.implement.resolve(t.implementation);
                  } catch (e) {
                    throw (t.implement.fulfilled || t.implement.reject(e), e);
                  }
                }
              });
            },
          },
          {
            key: "_createLocalRequire",
            value: function (e) {
              var t = this,
                n = this._config,
                r = function (r) {
                  for (
                    var o = arguments.length,
                      i = Array(o > 1 ? o - 1 : 0),
                      a = 1;
                    a < o;
                    a++
                  )
                    i[a - 1] = arguments[a];
                  if (i.length > 0) return t.require.apply(t, [r].concat(i));
                  var l = n.getDependency(e.name, r);
                  if (!(l && "implementation" in l))
                    throw new Error(
                      'Module "' +
                        r +
                        '" has not been loaded yet for context: ' +
                        e.name
                    );
                  return l.implementation;
                };
              return (
                (r.toUrl = function (e) {
                  return t._urlBuilder.build([e])[0].url;
                }),
                r
              );
            },
          },
          {
            key: "_getModuleImplementations",
            value: function (e) {
              return this._config.getModules(e).map(function (e) {
                return e.implementation;
              });
            },
          },
        ]),
        e
      );
    })();
    (t.default = d), (d.prototype.define.amd = {});
  },
  function (e, t, n) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      i = (function () {
        return function (e, t) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e))
            return (function (e, t) {
              var n = [],
                r = !0,
                o = !1,
                i = void 0;
              try {
                for (
                  var a, l = e[Symbol.iterator]();
                  !(r = (a = l.next()).done) &&
                  (n.push(a.value), !t || n.length !== t);
                  r = !0
                );
              } catch (e) {
                (o = !0), (i = e);
              } finally {
                try {
                  !r && l.return && l.return();
                } finally {
                  if (o) throw i;
                }
              }
              return n;
            })(e, t);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        };
      })(),
      a = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      l = n(4),
      u = (r = l) && r.__esModule ? r : { default: r };
    var s = (function () {
      function e() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this._modules = {}),
          (this._maps = {}),
          (this._paths = {}),
          (this._config = { maps: {}, paths: {} }),
          this._parse(t, "defaultURLParams", {}),
          this._parse(t, "explainResolutions", !1),
          this._parse(t, "showWarnings", !1),
          this._parse(t, "waitTimeout", 7e3),
          this._parse(t, "basePath", "/"),
          this._parse(t, "resolvePath", "/o/js_resolve_modules"),
          this._parse(t, "combine", !1),
          this._parse(t, "url", ""),
          this._parse(t, "urlMaxLength", 2e3),
          this._parse(t, "logLevel", "error");
      }
      return (
        a(e, [
          {
            key: "addModule",
            value: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              if (this._modules[e])
                throw new Error("Module is already registered: " + e);
              var n = new u.default(e);
              return (
                Object.entries(t).forEach(function (e) {
                  var t = i(e, 2),
                    r = t[0],
                    o = t[1];
                  n[r] = o;
                }),
                (this._modules[e] = n),
                n
              );
            },
          },
          {
            key: "addMappings",
            value: function (e) {
              Object.assign(this._maps, e);
            },
          },
          {
            key: "addPaths",
            value: function (e) {
              Object.assign(this._paths, e);
            },
          },
          {
            key: "getModules",
            value: function () {
              var e = this,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : void 0;
              return void 0 === t
                ? Object.values(this._modules)
                : t.map(function (t) {
                    return e.getModule(t);
                  });
            },
          },
          {
            key: "getModule",
            value: function (e) {
              var t = this._modules[e];
              if (!t) {
                var n = this._mapModule(e);
                t = this._modules[n];
              }
              return t;
            },
          },
          {
            key: "getDependency",
            value: function (e, t) {
              var n = this.getModule(e),
                r = this._modules[t];
              if (!r) {
                var o = this._mapModule(t, n.map);
                r = this._modules[o];
              }
              return r;
            },
          },
          {
            key: "_parse",
            value: function (e, t, n) {
              this._config[t] = e.hasOwnProperty(t) ? e[t] : n;
            },
          },
          {
            key: "_mapModule",
            value: function (e, t) {
              return (
                t && (e = this._mapMatches(e, t)),
                Object.keys(this._maps).length > 0 &&
                  (e = this._mapMatches(e, this._maps)),
                e
              );
            },
          },
          {
            key: "_mapMatches",
            value: function (e, t) {
              var n = t[e];
              return n
                ? "object" === (void 0 === n ? "undefined" : o(n))
                  ? n.value
                  : n
                : ((n = this._mapExactMatch(e, t)) ||
                    (n = this._mapPartialMatch(e, t)),
                  n || (n = this._mapWildcardMatch(e, t)),
                  n || e);
            },
          },
          {
            key: "_mapExactMatch",
            value: function (e, t) {
              for (var n in t)
                if (Object.prototype.hasOwnProperty.call(t, n)) {
                  var r = t[n];
                  if (r.value && r.exactMatch && e === n) return r.value;
                }
            },
          },
          {
            key: "_mapPartialMatch",
            value: function (e, t) {
              for (var n in t)
                if (Object.prototype.hasOwnProperty.call(t, n)) {
                  var r = t[n];
                  if (
                    !r.exactMatch &&
                    (r.value && (r = r.value),
                    e === n || 0 === e.indexOf(n + "/"))
                  )
                    return r + e.substring(n.length);
                }
            },
          },
          {
            key: "_mapWildcardMatch",
            value: function (e, t) {
              if ("function" == typeof t["*"]) return t["*"](e);
            },
          },
          {
            key: "explainResolutions",
            get: function () {
              return this._config.explainResolutions;
            },
          },
          {
            key: "showWarnings",
            get: function () {
              return this._config.showWarnings;
            },
          },
          {
            key: "waitTimeout",
            get: function () {
              return this._config.waitTimeout;
            },
          },
          {
            key: "basePath",
            get: function () {
              return this._config.basePath;
            },
          },
          {
            key: "resolvePath",
            get: function () {
              return this._config.resolvePath;
            },
          },
          {
            key: "combine",
            get: function () {
              return this._config.combine;
            },
          },
          {
            key: "url",
            get: function () {
              return this._config.url;
            },
          },
          {
            key: "urlMaxLength",
            get: function () {
              return this._config.urlMaxLength;
            },
          },
          {
            key: "logLevel",
            get: function () {
              return this._config.logLevel;
            },
          },
          {
            key: "defaultURLParams",
            get: function () {
              return this._config.defaultURLParams;
            },
          },
          {
            key: "paths",
            get: function () {
              return this._paths;
            },
          },
        ]),
        e
      );
    })();
    t.default = s;
  },
  function (e, t, n) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      i = n(5),
      a = (r = i) && r.__esModule ? r : { default: r };
    var l = (function () {
      function e(t) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this._name = t),
          (this._dependencies = void 0),
          (this._factory = void 0),
          (this._implementation = {}),
          (this._map = void 0),
          (this._state = {
            _fetch: a.default.new(),
            _define: a.default.new(),
            _implement: a.default.new(),
          });
      }
      return (
        o(e, [
          {
            key: "name",
            get: function () {
              return this._name;
            },
            set: function (e) {
              throw new Error("Name of module " + this.name + " is read-only");
            },
          },
          {
            key: "dependencies",
            get: function () {
              return this._dependencies;
            },
            set: function (e) {
              if (this._dependencies)
                throw new Error(
                  "Dependencies of module " + this.name + " already set"
                );
              this._dependencies = e;
            },
          },
          {
            key: "factory",
            get: function () {
              return this._factory;
            },
            set: function (e) {
              if (this._factory)
                throw new Error(
                  "Factory of module " + this.name + " already set"
                );
              this._factory = e;
            },
          },
          {
            key: "implementation",
            get: function () {
              return this._implementation;
            },
            set: function (e) {
              this._implementation = e;
            },
          },
          {
            key: "map",
            get: function () {
              return this._map;
            },
            set: function (e) {
              if (this._map)
                throw new Error(
                  "Local module map of module " + this.name + " already set"
                );
              this._map = e;
            },
          },
          {
            key: "esModule",
            get: function () {
              return this._implementation.__esModule;
            },
            set: function (e) {
              Object.defineProperty(this._implementation, "__esModule", {
                configurable: !0,
                value: e,
                writable: !0,
              });
            },
          },
          {
            key: "fetch",
            get: function () {
              return this._state._fetch;
            },
          },
          {
            key: "fetched",
            get: function () {
              return this.fetch.resolved;
            },
          },
          {
            key: "define",
            get: function () {
              return this._state._define;
            },
          },
          {
            key: "defined",
            get: function () {
              return this.define.resolved;
            },
          },
          {
            key: "implement",
            get: function () {
              return this._state._implement;
            },
          },
          {
            key: "implemented",
            get: function () {
              return this.implement.resolved;
            },
          },
        ]),
        e
      );
    })();
    t.default = l;
  },
  function (e, t, n) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function e() {
      throw (
        ((function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
        new Error(
          "Don't construct ResolvablePromise objects directly: rely on ResolvablePromise.new() instead"
        ))
      );
    };
    function o(e) {
      if (e.fulfilled) throw new Error("Promise already fulfilled");
    }
    (t.default = r),
      (r.new = function () {
        var e = {},
          t = new Promise(function (t, n) {
            (e._resolve = t), (e._reject = n);
          });
        return (
          Object.assign(t, e, {
            fulfilled: !1,
            resolved: !1,
            rejected: !1,
            resolution: void 0,
            rejection: void 0,
          }),
          (t.resolve = function (e) {
            return (function (e, t) {
              o(e),
                (e.fulfilled = !0),
                (e.resolved = !0),
                (e.resolution = t),
                e._resolve(t);
            })(t, e);
          }),
          (t.reject = function (e) {
            return (function (e, t) {
              o(e),
                (e.fulfilled = !0),
                (e.rejected = !0),
                (e.rejection = t),
                e._reject(t);
            })(t, e);
          }),
          "undefined" != typeof jest && t.catch(function () {}),
          t
        );
      });
  },
  function (e, t, n) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })();
    var o = (function () {
      function e(t) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this._config = t),
          (this._cachedResolutions = {});
      }
      return (
        r(e, [
          {
            key: "resolve",
            value: function (e) {
              var t = this;
              if (void 0 === e || 0 == e.length)
                throw new Error(
                  "Argument 'modules' cannot be undefined or empty"
                );
              var n = this._config;
              return new Promise(function (r, o) {
                var i = t._cachedResolutions[e];
                if (i) r(i);
                else {
                  var a = "modules\x3d" + encodeURIComponent(e),
                    l = n.resolvePath + "?" + a,
                    u = {};
                  l.length > n.urlMaxLength &&
                    ((l = n.resolvePath), (u = { method: "POST", body: a })),
                    fetch(l, u)
                      .then(function (e) {
                        return e.text();
                      })
                      .then(function (n) {
                        var o = JSON.parse(n);
                        (t._cachedResolutions[e] = o), r(o);
                      })
                      .catch(o);
                }
              });
            },
          },
        ]),
        e
      );
    })();
    t.default = o;
  },
  function (e, t, n) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      i = n(0),
      a = (r = i) && r.__esModule ? r : { default: r };
    var l = (function () {
      function e(t, n, r) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this._document = t),
          (this._config = n),
          (this._log = r),
          (this._urlBuilder = new a.default(n)),
          (this._injectedScripts = {});
      }
      return (
        o(e, [
          {
            key: "loadModules",
            value: function (e) {
              var t = this,
                n = this._urlBuilder;
              if (0 == e.length) return Promise.resolve();
              var r = n.build(e).map(function (e) {
                return t._loadScript(e);
              });
              return Promise.all(r);
            },
          },
          {
            key: "_loadScript",
            value: function (e) {
              var t = this,
                n = this._config.getModules(e.modules),
                r = this._injectedScripts[e.url];
              return (
                r ||
                  (((r = this._document.createElement("script")).src = e.url),
                  (r.async = !1),
                  (r.onload = r.onreadystatechange =
                    function () {
                      (t.readyState &&
                        "complete" !== t.readyState &&
                        "load" !== t.readyState) ||
                        ((r.onload = r.onreadystatechange = null),
                        (r.onerror = null),
                        n.forEach(function (e) {
                          e.fetch.fulfilled
                            ? t._log.warn(
                                "Module '" +
                                  e.name +
                                  "' is being fetched from\n",
                                r.src,
                                "but was already fetched from\n",
                                e.fetch.resolved
                                  ? e.fetch.resolution.src
                                  : e.fetch.rejection.script.src
                              )
                            : e.fetch.resolve(r);
                        }));
                    }),
                  (r.onerror = function () {
                    (r.onload = r.onreadystatechange = null),
                      (r.onerror = null);
                    var t = Object.assign(
                      new Error("Unable to load script from URL " + e.url),
                      { url: e.url, modules: e.modules, script: r }
                    );
                    n.forEach(function (e) {
                      return e.fetch.reject(t);
                    });
                  }),
                  (this._injectedScripts[e.url] = r),
                  this._document.head.appendChild(r)),
                Promise.all(
                  n.map(function (e) {
                    return e.fetch;
                  })
                )
              );
            },
          },
        ]),
        e
      );
    })();
    t.default = l;
  },
  function (e, t, n) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })();
    var o = { off: 0, error: 1, warn: 2, info: 3, debug: 4 },
      i = "liferay-amd-loader |",
      a = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this._config = t);
        }
        return (
          r(e, [
            {
              key: "error",
              value: function () {
                var e;
                if (this._applies("error")) {
                  for (
                    var t = arguments.length, n = Array(t), r = 0;
                    r < t;
                    r++
                  )
                    n[r] = arguments[r];
                  (e = console).error.apply(e, [i].concat(n));
                }
              },
            },
            {
              key: "warn",
              value: function () {
                var e;
                if (this._applies("warn")) {
                  for (
                    var t = arguments.length, n = Array(t), r = 0;
                    r < t;
                    r++
                  )
                    n[r] = arguments[r];
                  (e = console).warn.apply(e, [i].concat(n));
                }
              },
            },
            {
              key: "info",
              value: function () {
                var e;
                if (this._applies("info")) {
                  for (
                    var t = arguments.length, n = Array(t), r = 0;
                    r < t;
                    r++
                  )
                    n[r] = arguments[r];
                  (e = console).info.apply(e, [i].concat(n));
                }
              },
            },
            {
              key: "debug",
              value: function () {
                var e;
                if (this._applies("debug")) {
                  for (
                    var t = arguments.length, n = Array(t), r = 0;
                    r < t;
                    r++
                  )
                    n[r] = arguments[r];
                  (e = console).debug.apply(e, [i].concat(n));
                }
              },
            },
            {
              key: "resolution",
              value: function () {
                var e;
                if (this._config.explainResolutions) {
                  for (
                    var t = arguments.length, n = Array(t), r = 0;
                    r < t;
                    r++
                  )
                    n[r] = arguments[r];
                  (e = console).log.apply(e, [i].concat(n));
                }
              },
            },
            {
              key: "_applies",
              value: function (e) {
                var t = o[this._config.logLevel];
                return o[e] <= t;
              },
            },
          ]),
          e
        );
      })();
    t.default = a;
  },
  function (e) {
    e.exports = {
      name: "liferay-amd-loader",
      version: "4.2.0",
      description:
        "AMD Loader with support for combo URL and conditional loading",
      scripts: {
        clean: "rm -rf build",
        build: "node bin/build-loader.js",
        ci: "npm run format:check \x26\x26 npm run lint \x26\x26 npm run build \x26\x26 npm run build-demo \x26\x26 npm test",
        "build-demo": "node bin/build-demo.js",
        demo: "node bin/run-demo.js",
        test: "jest --runInBand",
        format:
          "prettier --write '{*,.*}.js' 'bin/**/{*,.*}.js' 'src/**/{*,.*}.js'",
        "format:check":
          "prettier --list-different '{*,.*}.js' 'bin/**/{*,.*}.js' 'src/**/{*,.*}.js'",
        lint: "eslint '*.js' 'bin/**/{*,.*}.js' 'src/**/{*,.*}.js'",
        "lint:fix": "eslint --fix '*.js' 'bin/**/{*,.*}.js' 'src/**/{*,.*}.js'",
        prepublish: "publish-please guard",
        "publish-please": "publish-please",
        prepublishOnly:
          "npm run build \x26\x26 npm run build-demo \x26\x26 npm test",
        proxyPortal: "webpack-dev-server --config webpack.proxyPortal.js",
      },
      repository: {
        type: "git",
        url: "git+https://github.com/liferay/liferay-amd-loader.git",
      },
      jest: {
        collectCoverage: !0,
        coverageDirectory: "build/coverage",
        modulePathIgnorePatterns: [
          "liferay-amd-loader/build/.*",
          ".*/__tests__/__fixtures__/.*",
        ],
        testPathIgnorePatterns: [".eslintrc.js"],
        testURL: "http://localhost/",
      },
      author: { name: "Iliyan Peychev" },
      license: "LGPL-3.0",
      keywords: ["Liferay", "AMD", "ES6", "Loader"],
      bugs: { url: "https://github.com/liferay/liferay-amd-loader/issues" },
      homepage: "https://github.com/liferay/liferay-amd-loader",
      files: [
        ".babelrc",
        ".eslintrc.js",
        ".publishrc",
        "LICENSE.md",
        "package.json",
        "README.md",
        "webpack.config.js",
        "src",
        "bin",
        "build",
        "src",
      ],
      devDependencies: {
        "babel-loader": "^7.1.2",
        "babel-preset-es2015": "^6.24.1",
        combohandler: "^0.4.0",
        eslint: "^5.15.1",
        "eslint-config-liferay": "^3.0.0",
        "fs-extra": "^5.0.0",
        globby: "^7.1.1",
        "http-server": "^0.11.1",
        jest: "^22.2.1",
        prettier: "^1.16.4",
        "publish-please": "^2.3.1",
        "uglifyjs-webpack-plugin": "^1.2.0",
        webpack: "^4.29.6",
        "webpack-cli": "^3.3.0",
        "webpack-dev-server": "^3.2.1",
      },
    };
  },
]);
if (typeof YUI != "undefined") YUI._YUI = YUI;
var YUI = function () {
  var i = 0,
    Y = this,
    args = arguments,
    l = args.length,
    instanceOf = function (o, type) {
      return o && o.hasOwnProperty && o instanceof type;
    },
    gconf = typeof YUI_config !== "undefined" && YUI_config;
  if (!instanceOf(Y, YUI)) Y = new YUI();
  else {
    Y._init();
    if (YUI.GlobalConfig) Y.applyConfig(YUI.GlobalConfig);
    if (gconf) Y.applyConfig(gconf);
    if (!l) {
      Y._afterConfig();
      Y._setup();
    }
  }
  if (l) {
    for (; i < l; i++) Y.applyConfig(args[i]);
    Y._afterConfig();
    Y._setup();
  }
  Y.instanceOf = instanceOf;
  return Y;
};
(function () {
  var proto,
    prop,
    VERSION = "patched-v3.18.1",
    PERIOD = ".",
    BASE = "http://yui.yahooapis.com/",
    DOC_LABEL = "yui3-js-enabled",
    CSS_STAMP_EL = "yui3-css-stamp",
    NOOP = function () {},
    SLICE = Array.prototype.slice,
    APPLY_TO_AUTH = {
      "io.xdrReady": 1,
      "io.xdrResponse": 1,
      "SWF.eventHandler": 1,
    },
    hasWin = typeof window != "undefined",
    win = hasWin ? window : null,
    doc = hasWin ? win.document : null,
    docEl = doc && doc.documentElement,
    docClass = docEl && docEl.className,
    instances = {},
    time = new Date().getTime(),
    add = function (el, type, fn, capture) {
      if (el && el.addEventListener) el.addEventListener(type, fn, capture);
      else if (el && el.attachEvent) el.attachEvent("on" + type, fn);
    },
    remove = function (el, type, fn, capture) {
      if (el && el.removeEventListener)
        try {
          el.removeEventListener(type, fn, capture);
        } catch (ex) {}
      else if (el && el.detachEvent) el.detachEvent("on" + type, fn);
    },
    handleReady = function () {
      YUI.Env.DOMReady = true;
      if (hasWin) remove(doc, "DOMContentLoaded", handleReady);
      if (
        doc &&
        doc.body &&
        YUI.Env.cssStampEl &&
        !doc.body.contains(YUI.Env.cssStampEl)
      )
        doc.body.appendChild(YUI.Env.cssStampEl);
    },
    handleLoad = function () {
      YUI.Env.windowLoaded = true;
      YUI.Env.DOMReady = true;
      if (hasWin) remove(window, "load", handleLoad);
    },
    getLoader = function (Y, o) {
      var loader = Y.Env._loader,
        lCore = ["loader-base"],
        G_ENV = YUI.Env,
        mods = G_ENV.mods;
      if (loader) {
        loader.ignoreRegistered = false;
        loader.onEnd = null;
        loader.data = null;
        loader.required = [];
        loader.loadType = null;
      } else {
        loader = new Y.Loader(Y.config);
        Y.Env._loader = loader;
      }
      if (mods && mods.loader) lCore = [].concat(lCore, YUI.Env.loaderExtras);
      YUI.Env.core = Y.Array.dedupe([].concat(YUI.Env.core, lCore));
      return loader;
    },
    clobber = function (r, s) {
      for (var i in s) if (s.hasOwnProperty(i)) r[i] = s[i];
    },
    ALREADY_DONE = { success: true };
  if (docEl && docClass.indexOf(DOC_LABEL) == -1) {
    if (docClass) docClass += " ";
    docClass += DOC_LABEL;
    docEl.className = docClass;
  }
  if (VERSION.indexOf("@") > -1) VERSION = "3.5.0";
  proto = {
    applyConfig: function (o) {
      o = o || NOOP;
      var attr,
        name,
        config = this.config,
        mods = config.modules,
        groups = config.groups,
        aliases = config.aliases,
        loader = this.Env._loader;
      for (name in o)
        if (o.hasOwnProperty(name)) {
          attr = o[name];
          if (mods && name == "modules") clobber(mods, attr);
          else if (aliases && name == "aliases") clobber(aliases, attr);
          else if (groups && name == "groups") clobber(groups, attr);
          else if (name == "win") {
            config[name] = (attr && attr.contentWindow) || attr;
            config.doc = config[name] ? config[name].document : null;
          } else if (name == "_yuid");
          else config[name] = attr;
        }
      if (loader) loader._config(o);
    },
    _config: function (o) {
      this.applyConfig(o);
    },
    _init: function () {
      var filter,
        el,
        Y = this,
        G_ENV = YUI.Env,
        Env = Y.Env,
        prop;
      Y.version = VERSION;
      if (!Env) {
        Y.Env = {
          core: [
            "get",
            "features",
            "intl-base",
            "yui-log",
            "yui-later",
            "loader-base",
            "loader-rollup",
            "loader-yui3",
          ],
          loaderExtras: ["loader-rollup", "loader-yui3"],
          mods: {},
          versions: {},
          base: BASE,
          cdn: BASE + VERSION + "/",
          _idx: 0,
          _used: {},
          _attached: {},
          _exported: {},
          _missed: [],
          _yidx: 0,
          _uidx: 0,
          _guidp: "y",
          _loaded: {},
          _BASE_RE:
            /(?:\?(?:[^&]*&)*([^&]*))?\b(aui|yui(?:-\w+)?)\/\2(?:-(min|debug))?\.js/,
          parseBasePath: function (src, pattern) {
            var match = src.match(pattern),
              path,
              filter;
            if (match) {
              path = RegExp.leftContext || src.slice(0, src.indexOf(match[0]));
              filter = match[3];
              if (match[1]) path += "?" + match[1];
              path = { filter: filter, path: path };
            }
            return path;
          },
          getBase:
            (G_ENV && G_ENV.getBase) ||
            function (pattern) {
              var nodes = (doc && doc.getElementsByTagName("script")) || [],
                path = Env.cdn,
                parsed,
                i,
                len,
                src;
              for (i = 0, len = nodes.length; i < len; ++i) {
                src = nodes[i].src;
                if (src) {
                  parsed = Y.Env.parseBasePath(src, pattern);
                  if (parsed) {
                    filter = parsed.filter;
                    path = parsed.path;
                    break;
                  }
                }
              }
              return path;
            },
        };
        Env = Y.Env;
        Env._loaded[VERSION] = {};
        if (G_ENV && Y !== YUI) {
          Env._yidx = ++G_ENV._yidx;
          Env._guidp = (
            "yui_" +
            VERSION +
            "_" +
            Env._yidx +
            "_" +
            time
          ).replace(/[^a-z0-9_]+/g, "_");
        } else if (YUI._YUI) {
          G_ENV = YUI._YUI.Env;
          Env._yidx += G_ENV._yidx;
          Env._uidx += G_ENV._uidx;
          for (prop in G_ENV) if (!(prop in Env)) Env[prop] = G_ENV[prop];
          delete YUI._YUI;
        }
        Y.id = Y.stamp(Y);
        instances[Y.id] = Y;
      }
      Y.constructor = YUI;
      Y.config = Y.config || {
        bootstrap: true,
        cacheUse: true,
        debug: true,
        doc: doc,
        fetchCSS: true,
        throwFail: true,
        useBrowserConsole: true,
        useNativeES5: true,
        win: win,
      };
      if (doc && !doc.getElementById(CSS_STAMP_EL)) {
        el = doc.createElement("div");
        el.innerHTML =
          '\x3cdiv id\x3d"' +
          CSS_STAMP_EL +
          '" style\x3d"position: absolute !important; visibility: hidden !important"\x3e\x3c/div\x3e';
        YUI.Env.cssStampEl = el.firstChild;
        if (doc.body) doc.body.appendChild(YUI.Env.cssStampEl);
        else docEl.insertBefore(YUI.Env.cssStampEl, docEl.firstChild);
      } else if (doc && doc.getElementById(CSS_STAMP_EL) && !YUI.Env.cssStampEl)
        YUI.Env.cssStampEl = doc.getElementById(CSS_STAMP_EL);
      Y.config.lang = Y.config.lang || "en-US";
      Y.config.base =
        YUI.config.base ||
        (YUI.config.defaultBase &&
          YUI.config.root &&
          YUI.config.defaultBase + YUI.config.root) ||
        Y.Env.getBase(Y.Env._BASE_RE);
      if (!filter || !"mindebug".indexOf(filter)) filter = "min";
      filter = filter ? "-" + filter : filter;
      Y.config.loaderPath =
        YUI.config.loaderPath || "loader/loader" + filter + ".js";
    },
    _afterConfig: function () {
      var Y = this;
      if (!Y.config.hasOwnProperty("global"))
        Y.config.global = Function("return this")();
    },
    _setup: function () {
      var i,
        Y = this,
        core = [],
        mods = YUI.Env.mods,
        extendedCore = Y.config.extendedCore || [],
        extras = Y.config.core || [].concat(YUI.Env.core).concat(extendedCore);
      for (i = 0; i < extras.length; i++)
        if (mods[extras[i]]) core.push(extras[i]);
      Y._attach(["yui-base"]);
      Y._attach(core);
      if (Y.Loader) getLoader(Y);
    },
    applyTo: function (id, method, args) {
      if (!(method in APPLY_TO_AUTH)) {
        this.log(method + ": applyTo not allowed", "warn", "yui");
        return null;
      }
      var instance = instances[id],
        nest,
        m,
        i;
      if (instance) {
        nest = method.split(".");
        m = instance;
        for (i = 0; i < nest.length; i = i + 1) {
          m = m[nest[i]];
          if (!m) this.log("applyTo not found: " + method, "warn", "yui");
        }
        return m && m.apply(instance, args);
      }
      return null;
    },
    add: function (name, fn, version, details) {
      details = details || {};
      var env = YUI.Env,
        mod = { name: name, fn: fn, version: version, details: details },
        applied = {},
        loader,
        inst,
        modInfo,
        i,
        versions = env.versions;
      env.mods[name] = mod;
      versions[version] = versions[version] || {};
      versions[version][name] = mod;
      for (i in instances)
        if (instances.hasOwnProperty(i)) {
          inst = instances[i];
          if (!applied[inst.id]) {
            applied[inst.id] = true;
            loader = inst.Env._loader;
            if (loader) {
              modInfo = loader.getModuleInfo(name);
              if (!modInfo || modInfo.temp) loader.addModule(details, name);
            }
          }
        }
      return this;
    },
    _attach: function (r, moot) {
      var i,
        name,
        mod,
        details,
        req,
        use,
        after,
        mods = YUI.Env.mods,
        aliases = YUI.Env.aliases,
        Y = this,
        j,
        cache = YUI.Env._renderedMods,
        loader = Y.Env._loader,
        done = Y.Env._attached,
        exported = Y.Env._exported,
        len = r.length,
        loader,
        def,
        go,
        c = [],
        modArgs,
        esCompat,
        reqlen,
        modInfo,
        condition,
        __exports__,
        __imports__;
      for (i = 0; i < len; i++) {
        name = r[i];
        mod = mods[name];
        c.push(name);
        if (loader && loader.conditions[name])
          for (j in loader.conditions[name])
            if (loader.conditions[name].hasOwnProperty(j)) {
              def = loader.conditions[name][j];
              go =
                def && ((def.ua && Y.UA[def.ua]) || (def.test && def.test(Y)));
              if (go) c.push(def.name);
            }
      }
      r = c;
      len = r.length;
      for (i = 0; i < len; i++)
        if (!done[r[i]]) {
          name = r[i];
          mod = mods[name];
          if (aliases && aliases[name] && !mod) {
            Y._attach(aliases[name]);
            continue;
          }
          if (!mod) {
            modInfo = loader && loader.getModuleInfo(name);
            if (modInfo) {
              mod = modInfo;
              moot = true;
            }
            if (!moot && name)
              if (name.indexOf("skin-") === -1 && name.indexOf("css") === -1) {
                Y.Env._missed.push(name);
                Y.Env._missed = Y.Array.dedupe(Y.Env._missed);
                Y.message("NOT loaded: " + name, "warn", "yui");
              }
          } else {
            done[name] = true;
            for (j = 0; j < Y.Env._missed.length; j++)
              if (Y.Env._missed[j] === name) {
                Y.message(
                  "Found: " + name + " (was reported as missing earlier)",
                  "warn",
                  "yui"
                );
                Y.Env._missed.splice(j, 1);
              }
            if (loader && !loader._canBeAttached(name)) return true;
            if (loader && cache && cache[name] && cache[name].temp) {
              loader.getRequires(cache[name]);
              req = [];
              modInfo = loader.getModuleInfo(name);
              for (j in modInfo.expanded_map)
                if (modInfo.expanded_map.hasOwnProperty(j)) req.push(j);
              Y._attach(req);
            }
            details = mod.details;
            req = details.requires;
            esCompat = details.es;
            use = details.use;
            after = details.after;
            if (details.lang) {
              req = req || [];
              req.unshift("intl");
            }
            if (req) {
              reqlen = req.length;
              for (j = 0; j < reqlen; j++)
                if (!done[req[j]]) {
                  if (!Y._attach(req)) return false;
                  break;
                }
            }
            if (after)
              for (j = 0; j < after.length; j++)
                if (!done[after[j]]) {
                  if (!Y._attach(after, true)) return false;
                  break;
                }
            if (mod.fn) {
              modArgs = [Y, name];
              if (esCompat) {
                __imports__ = {};
                __exports__ = {};
                modArgs.push(__imports__, __exports__);
                if (req) {
                  reqlen = req.length;
                  for (j = 0; j < reqlen; j++)
                    __imports__[req[j]] = exported.hasOwnProperty(req[j])
                      ? exported[req[j]]
                      : Y;
                }
              }
              if (Y.config.throwFail)
                __exports__ = mod.fn.apply(esCompat ? undefined : mod, modArgs);
              else
                try {
                  __exports__ = mod.fn.apply(
                    esCompat ? undefined : mod,
                    modArgs
                  );
                } catch (e) {
                  Y.error("Attach error: " + name, e, name);
                  return false;
                }
              if (esCompat) {
                exported[name] = __exports__;
                condition = mod.details.condition;
                if (condition && condition.when === "instead")
                  exported[condition.trigger] = __exports__;
              }
            }
            if (use)
              for (j = 0; j < use.length; j++)
                if (!done[use[j]]) {
                  if (!Y._attach(use)) return false;
                  break;
                }
          }
        }
      return true;
    },
    _delayCallback: function (cb, until) {
      var Y = this,
        mod = ["event-base"];
      until = Y.Lang.isObject(until) ? until : { event: until };
      if (until.event === "load") mod.push("event-synthetic");
      return function () {
        var args = arguments;
        Y._use(mod, function () {
          Y.on(
            until.event,
            function () {
              args[1].delayUntil = until.event;
              cb.apply(Y, args);
            },
            until.args
          );
        });
      };
    },
    use: function () {
      var args = SLICE.call(arguments, 0),
        callback = args[args.length - 1],
        Y = this,
        i = 0,
        name,
        Env = Y.Env,
        provisioned = true;
      if (Y.Lang.isFunction(callback)) {
        args.pop();
        if (Y.config.delayUntil)
          callback = Y._delayCallback(callback, Y.config.delayUntil);
      } else callback = null;
      if (Y.Lang.isArray(args[0])) args = args[0];
      if (Y.config.cacheUse) {
        while ((name = args[i++]))
          if (!Env._attached[name]) {
            provisioned = false;
            break;
          }
        if (provisioned) {
          if (args.length);
          Y._notify(callback, ALREADY_DONE, args);
          return Y;
        }
      }
      if (Y._loading) {
        Y._useQueue = Y._useQueue || new Y.Queue();
        Y._useQueue.add([args, callback]);
      } else
        Y._use(args, function (Y, response) {
          Y._notify(callback, response, args);
        });
      return Y;
    },
    require: function () {
      var args = SLICE.call(arguments),
        callback;
      if (typeof args[args.length - 1] === "function") {
        callback = args.pop();
        args.push(function (Y) {
          var i,
            length = args.length,
            exported = Y.Env._exported,
            __imports__ = {};
          for (i = 0; i < length; i++)
            if (exported.hasOwnProperty(args[i]))
              __imports__[args[i]] = exported[args[i]];
          callback.call(undefined, Y, __imports__);
        });
      }
      this.use.apply(this, args);
    },
    _notify: function (callback, response, args) {
      if (!response.success && this.config.loadErrorFn)
        this.config.loadErrorFn.call(this, this, callback, response, args);
      else if (callback) {
        if (this.Env._missed && this.Env._missed.length) {
          response.msg = "Missing modules: " + this.Env._missed.join();
          response.success = false;
        }
        if (this.config.throwFail) callback(this, response);
        else
          try {
            callback(this, response);
          } catch (e) {
            this.error("use callback error", e, args);
          }
      }
    },
    _use: function (args, callback) {
      if (!this.Array) this._attach(["yui-base"]);
      var len,
        loader,
        handleBoot,
        Y = this,
        G_ENV = YUI.Env,
        mods = G_ENV.mods,
        Env = Y.Env,
        used = Env._used,
        aliases = G_ENV.aliases,
        queue = G_ENV._loaderQueue,
        firstArg = args[0],
        YArray = Y.Array,
        config = Y.config,
        boot = config.bootstrap,
        missing = [],
        i,
        r = [],
        ret = true,
        fetchCSS = config.fetchCSS,
        process = function (names, skip) {
          var i = 0,
            a = [],
            name,
            len,
            m,
            req,
            use;
          if (!names.length) return;
          if (aliases) {
            len = names.length;
            for (i = 0; i < len; i++)
              if (aliases[names[i]] && !mods[names[i]])
                a = [].concat(a, aliases[names[i]]);
              else a.push(names[i]);
            names = a;
          }
          len = names.length;
          for (i = 0; i < len; i++) {
            name = names[i];
            if (!skip) r.push(name);
            if (used[name]) continue;
            m = mods[name];
            req = null;
            use = null;
            if (m) {
              used[name] = true;
              req = m.details.requires;
              use = m.details.use;
            } else if (!G_ENV._loaded[VERSION][name]) missing.push(name);
            else used[name] = true;
            if (req && req.length) process(req);
            if (use && use.length) process(use, 1);
          }
        },
        handleLoader = function (fromLoader) {
          var response = fromLoader || { success: true, msg: "not dynamic" },
            redo,
            origMissing,
            ret = true,
            data = response.data;
          Y._loading = false;
          if (data) {
            origMissing = missing;
            missing = [];
            r = [];
            process(data);
            redo = missing.length;
            if (redo)
              if ([].concat(missing).sort().join() == origMissing.sort().join())
                redo = false;
          }
          if (redo && data) {
            Y._loading = true;
            Y._use(missing, function () {
              if (Y._attach(data)) Y._notify(callback, response, data);
            });
          } else {
            if (data) ret = Y._attach(data);
            if (ret) Y._notify(callback, response, args);
          }
          if (Y._useQueue && Y._useQueue.size() && !Y._loading)
            Y._use.apply(Y, Y._useQueue.next());
        };
      if (firstArg === "*") {
        args = [];
        for (i in mods) if (mods.hasOwnProperty(i)) args.push(i);
        ret = Y._attach(args);
        if (ret) handleLoader();
        return Y;
      }
      if ((mods.loader || mods["loader-base"]) && !Y.Loader)
        Y._attach(["loader" + (!mods.loader ? "-base" : "")]);
      if (boot && Y.Loader && args.length) {
        loader = getLoader(Y);
        loader.require(args);
        loader.ignoreRegistered = true;
        loader._boot = true;
        loader.calculate(null, fetchCSS ? null : "js");
        args = loader.sorted;
        loader._boot = false;
      }
      process(args);
      len = missing.length;
      if (len) {
        missing = YArray.dedupe(missing);
        len = missing.length;
      }
      if (boot && len && Y.Loader) {
        Y._loading = true;
        loader = getLoader(Y);
        loader.onEnd = handleLoader;
        loader.context = Y;
        loader.data = args;
        loader.ignoreRegistered = false;
        loader.require(missing);
        loader.insert(null, fetchCSS ? null : "js");
      } else if (boot && len && Y.Get && !Env.bootstrapped) {
        Y._loading = true;
        handleBoot = function () {
          Y._loading = false;
          queue.running = false;
          Env.bootstrapped = true;
          G_ENV._bootstrapping = false;
          if (Y._attach(["loader"])) Y._use(args, callback);
        };
        if (G_ENV._bootstrapping) queue.add(handleBoot);
        else {
          G_ENV._bootstrapping = true;
          Y.Get.script(config.base + config.loaderPath, { onEnd: handleBoot });
        }
      } else {
        ret = Y._attach(args);
        if (ret) handleLoader();
      }
      return Y;
    },
    namespace: function () {
      var a = arguments,
        o,
        i = 0,
        j,
        d,
        arg;
      for (; i < a.length; i++) {
        o = this;
        arg = a[i];
        if (arg.indexOf(PERIOD) > -1) {
          d = arg.split(PERIOD);
          for (j = d[0] == "YAHOO" ? 1 : 0; j < d.length; j++) {
            o[d[j]] = o[d[j]] || {};
            o = o[d[j]];
          }
        } else {
          o[arg] = o[arg] || {};
          o = o[arg];
        }
      }
      return o;
    },
    log: NOOP,
    message: NOOP,
    dump: function (o) {
      return "" + o;
    },
    error: function (msg, e, src) {
      var Y = this,
        ret;
      if (Y.config.errorFn) ret = Y.config.errorFn.apply(Y, arguments);
      if (!ret) throw e || new Error(msg);
      else Y.message(msg, "error", "" + src);
      return Y;
    },
    guid: function (pre) {
      var id = this.Env._guidp + "_" + ++this.Env._uidx;
      return pre ? pre + id : id;
    },
    stamp: function (o, readOnly) {
      var uid;
      if (!o) return o;
      if (o.uniqueID && o.nodeType && o.nodeType !== 9) uid = o.uniqueID;
      else uid = typeof o === "string" ? o : o._yuid;
      if (!uid) {
        uid = this.guid();
        if (!readOnly)
          try {
            o._yuid = uid;
          } catch (e) {
            uid = null;
          }
      }
      return uid;
    },
    destroy: function () {
      var Y = this;
      if (Y.Event) Y.Event._unload();
      delete instances[Y.id];
      delete Y.Env;
      delete Y.config;
    },
  };
  YUI.prototype = proto;
  for (prop in proto) if (proto.hasOwnProperty(prop)) YUI[prop] = proto[prop];
  YUI.applyConfig = function (o) {
    if (!o) return;
    if (YUI.GlobalConfig)
      this.prototype.applyConfig.call(this, YUI.GlobalConfig);
    this.prototype.applyConfig.call(this, o);
    YUI.GlobalConfig = this.config;
  };
  YUI._init();
  if (hasWin) {
    add(doc, "DOMContentLoaded", handleReady);
    add(window, "load", handleLoad);
  } else {
    handleReady();
    handleLoad();
  }
  YUI.Env.add = add;
  YUI.Env.remove = remove;
  if (typeof exports == "object") {
    exports.YUI = YUI;
    YUI.setLoadHook = function (fn) {
      YUI._getLoadHook = fn;
    };
    YUI._getLoadHook = null;
  }
  YUI.Env[VERSION] = {};
})();
YUI.add(
  "yui-base",
  function (Y, NAME) {
    var L = Y.Lang || (Y.Lang = {}),
      STRING_PROTO = String.prototype,
      TOSTRING = Object.prototype.toString,
      TYPES = {
        undefined: "undefined",
        number: "number",
        boolean: "boolean",
        string: "string",
        "[object Function]": "function",
        "[object RegExp]": "regexp",
        "[object Array]": "array",
        "[object Date]": "date",
        "[object Error]": "error",
      },
      SUBREGEX = /\{\s*([^|}]+?)\s*(?:\|([^}]*))?\s*\}/g,
      WHITESPACE =
        "\t\n\x0B\f\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufeff",
      WHITESPACE_CLASS =
        "[\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+",
      TRIM_LEFT_REGEX = new RegExp("^" + WHITESPACE_CLASS),
      TRIM_RIGHT_REGEX = new RegExp(WHITESPACE_CLASS + "$"),
      TRIMREGEX = new RegExp(
        TRIM_LEFT_REGEX.source + "|" + TRIM_RIGHT_REGEX.source,
        "g"
      ),
      NATIVE_FN_REGEX = /\{\s*\[(?:native code|function)\]\s*\}/i;
    L._isNative = function (fn) {
      return !!(Y.config.useNativeES5 && fn && NATIVE_FN_REGEX.test(fn));
    };
    L.isArray = L._isNative(Array.isArray)
      ? Array.isArray
      : function (o) {
          return L.type(o) === "array";
        };
    L.isBoolean = function (o) {
      return typeof o === "boolean";
    };
    L.isDate = function (o) {
      return (
        L.type(o) === "date" && o.toString() !== "Invalid Date" && !isNaN(o)
      );
    };
    L.isFunction = function (o) {
      return L.type(o) === "function";
    };
    L.isNull = function (o) {
      return o === null;
    };
    L.isNumber = function (o) {
      return typeof o === "number" && isFinite(o);
    };
    L.isObject = function (o, failfn) {
      var t = typeof o;
      return (
        (o &&
          (t === "object" ||
            (!failfn && (t === "function" || L.isFunction(o))))) ||
        false
      );
    };
    L.isRegExp = function (value) {
      return L.type(value) === "regexp";
    };
    L.isString = function (o) {
      return typeof o === "string";
    };
    L.isUndefined = function (o) {
      return typeof o === "undefined";
    };
    L.isValue = function (o) {
      var t = L.type(o);
      switch (t) {
        case "number":
          return isFinite(o);
        case "null":
        case "undefined":
          return false;
        default:
          return !!t;
      }
    };
    L.now =
      Date.now ||
      function () {
        return new Date().getTime();
      };
    L.sub = function (s, o) {
      function value(obj, key) {
        var subkey;
        if (typeof obj[key] !== "undefined") return obj[key];
        key = key.split(".");
        subkey = key.slice(1).join(".");
        key = key[0];
        if (subkey && typeof obj[key] === "object" && obj[key] !== null)
          return value(obj[key], subkey);
      }
      return s.replace
        ? s.replace(SUBREGEX, function (match, key) {
            var val = key.indexOf(".") > -1 ? value(o, key) : o[key];
            return typeof val === "undefined" ? match : val;
          })
        : s;
    };
    L.trim =
      L._isNative(STRING_PROTO.trim) && !WHITESPACE.trim()
        ? function (s) {
            return s && s.trim ? s.trim() : s;
          }
        : function (s) {
            try {
              return s.replace(TRIMREGEX, "");
            } catch (e) {
              return s;
            }
          };
    L.trimLeft =
      L._isNative(STRING_PROTO.trimLeft) && !WHITESPACE.trimLeft()
        ? function (s) {
            return s.trimLeft();
          }
        : function (s) {
            return s.replace(TRIM_LEFT_REGEX, "");
          };
    L.trimRight =
      L._isNative(STRING_PROTO.trimRight) && !WHITESPACE.trimRight()
        ? function (s) {
            return s.trimRight();
          }
        : function (s) {
            return s.replace(TRIM_RIGHT_REGEX, "");
          };
    L.type = function (o) {
      return (
        TYPES[typeof o] || TYPES[TOSTRING.call(o)] || (o ? "object" : "null")
      );
    };
    var Lang = Y.Lang,
      Native = Array.prototype,
      hasOwn = Object.prototype.hasOwnProperty;
    function YArray(thing, startIndex, force) {
      var len, result;
      startIndex || (startIndex = 0);
      if (force || YArray.test(thing))
        try {
          return Native.slice.call(thing, startIndex);
        } catch (ex) {
          result = [];
          for (len = thing.length; startIndex < len; ++startIndex)
            result.push(thing[startIndex]);
          return result;
        }
      return [thing];
    }
    Y.Array = YArray;
    YArray.dedupe = Lang._isNative(Object.create)
      ? function (array) {
          var hash = Object.create(null),
            results = [],
            i,
            item,
            len;
          for (i = 0, len = array.length; i < len; ++i) {
            item = array[i];
            if (!hash[item]) {
              hash[item] = 1;
              results.push(item);
            }
          }
          return results;
        }
      : function (array) {
          var hash = {},
            results = [],
            i,
            item,
            len;
          for (i = 0, len = array.length; i < len; ++i) {
            item = array[i];
            if (!hasOwn.call(hash, item)) {
              hash[item] = 1;
              results.push(item);
            }
          }
          return results;
        };
    YArray.each = YArray.forEach = Lang._isNative(Native.forEach)
      ? function (array, fn, thisObj) {
          Native.forEach.call(array || [], fn, thisObj || Y);
          return Y;
        }
      : function (array, fn, thisObj) {
          for (var i = 0, len = (array && array.length) || 0; i < len; ++i)
            if (i in array) fn.call(thisObj || Y, array[i], i, array);
          return Y;
        };
    YArray.hash = function (keys, values) {
      var hash = {},
        vlen = (values && values.length) || 0,
        i,
        len;
      for (i = 0, len = keys.length; i < len; ++i)
        if (i in keys)
          hash[keys[i]] = vlen > i && i in values ? values[i] : true;
      return hash;
    };
    YArray.indexOf = Lang._isNative(Native.indexOf)
      ? function (array, value, from) {
          return Native.indexOf.call(array, value, from);
        }
      : function (array, value, from) {
          var len = array.length;
          from = +from || 0;
          from = (from > 0 || -1) * Math.floor(Math.abs(from));
          if (from < 0) {
            from += len;
            if (from < 0) from = 0;
          }
          for (; from < len; ++from)
            if (from in array && array[from] === value) return from;
          return -1;
        };
    YArray.numericSort = function (a, b) {
      return a - b;
    };
    YArray.some = Lang._isNative(Native.some)
      ? function (array, fn, thisObj) {
          return Native.some.call(array, fn, thisObj);
        }
      : function (array, fn, thisObj) {
          for (var i = 0, len = array.length; i < len; ++i)
            if (i in array && fn.call(thisObj, array[i], i, array)) return true;
          return false;
        };
    YArray.test = function (obj) {
      var result = 0;
      if (Lang.isArray(obj)) result = 1;
      else if (Lang.isObject(obj))
        try {
          if (
            "length" in obj &&
            !obj.tagName &&
            !(obj.scrollTo && obj.document) &&
            !obj.apply
          )
            result = 2;
        } catch (ex) {}
      return result;
    };
    function Queue() {
      this._init();
      this.add.apply(this, arguments);
    }
    Queue.prototype = {
      _init: function () {
        this._q = [];
      },
      next: function () {
        return this._q.shift();
      },
      last: function () {
        return this._q.pop();
      },
      add: function () {
        this._q.push.apply(this._q, arguments);
        return this;
      },
      size: function () {
        return this._q.length;
      },
    };
    Y.Queue = Queue;
    YUI.Env._loaderQueue = YUI.Env._loaderQueue || new Queue();
    var CACHED_DELIMITER = "__",
      hasOwn = Object.prototype.hasOwnProperty,
      isObject = Y.Lang.isObject;
    Y.cached = function (source, cache, refetch) {
      cache || (cache = {});
      return function (arg) {
        var key =
          arguments.length > 1
            ? Array.prototype.join.call(arguments, CACHED_DELIMITER)
            : String(arg);
        if (!(key in cache) || (refetch && cache[key] == refetch))
          cache[key] = source.apply(source, arguments);
        return cache[key];
      };
    };
    Y.getLocation = function () {
      var win = Y.config.win;
      return win && win.location;
    };
    Y.merge = function () {
      var i = 0,
        len = arguments.length,
        result = {},
        key,
        obj;
      for (; i < len; ++i) {
        obj = arguments[i];
        for (key in obj) if (hasOwn.call(obj, key)) result[key] = obj[key];
      }
      return result;
    };
    Y.mix = function (receiver, supplier, overwrite, whitelist, mode, merge) {
      var alwaysOverwrite, exists, from, i, key, len, to;
      if (!receiver || !supplier) return receiver || Y;
      if (mode) {
        if (mode === 2)
          Y.mix(
            receiver.prototype,
            supplier.prototype,
            overwrite,
            whitelist,
            0,
            merge
          );
        from = mode === 1 || mode === 3 ? supplier.prototype : supplier;
        to = mode === 1 || mode === 4 ? receiver.prototype : receiver;
        if (!from || !to) return receiver;
      } else {
        from = supplier;
        to = receiver;
      }
      alwaysOverwrite = overwrite && !merge;
      if (whitelist)
        for (i = 0, len = whitelist.length; i < len; ++i) {
          key = whitelist[i];
          if (!hasOwn.call(from, key)) continue;
          exists = alwaysOverwrite ? false : key in to;
          if (
            merge &&
            exists &&
            isObject(to[key], true) &&
            isObject(from[key], true)
          )
            Y.mix(to[key], from[key], overwrite, null, 0, merge);
          else if (overwrite || !exists) to[key] = from[key];
        }
      else {
        for (key in from) {
          if (!hasOwn.call(from, key)) continue;
          exists = alwaysOverwrite ? false : key in to;
          if (
            merge &&
            exists &&
            isObject(to[key], true) &&
            isObject(from[key], true)
          )
            Y.mix(to[key], from[key], overwrite, null, 0, merge);
          else if (overwrite || !exists) to[key] = from[key];
        }
        if (Y.Object._hasEnumBug)
          Y.mix(to, from, overwrite, Y.Object._forceEnum, mode, merge);
      }
      return receiver;
    };
    var Lang = Y.Lang,
      hasOwn = Object.prototype.hasOwnProperty,
      UNDEFINED,
      O = (Y.Object = Lang._isNative(Object.create)
        ? function (obj) {
            return Object.create(obj);
          }
        : (function () {
            function F() {}
            return function (obj) {
              F.prototype = obj;
              return new F();
            };
          })()),
      forceEnum = (O._forceEnum = [
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toString",
        "toLocaleString",
        "valueOf",
      ]),
      hasEnumBug = (O._hasEnumBug = !{ valueOf: 0 }.propertyIsEnumerable(
        "valueOf"
      )),
      hasProtoEnumBug = (O._hasProtoEnumBug =
        function () {}.propertyIsEnumerable("prototype")),
      owns = (O.owns = function (obj, key) {
        return !!obj && hasOwn.call(obj, key);
      });
    O.hasKey = owns;
    O.keys =
      Lang._isNative(Object.keys) && !hasProtoEnumBug
        ? Object.keys
        : function (obj) {
            if (!Lang.isObject(obj))
              throw new TypeError("Object.keys called on a non-object");
            var keys = [],
              i,
              key,
              len;
            if (hasProtoEnumBug && typeof obj === "function")
              for (key in obj) {
                if (owns(obj, key) && key !== "prototype") keys.push(key);
              }
            else for (key in obj) if (owns(obj, key)) keys.push(key);
            if (hasEnumBug)
              for (i = 0, len = forceEnum.length; i < len; ++i) {
                key = forceEnum[i];
                if (owns(obj, key)) keys.push(key);
              }
            return keys;
          };
    O.values = function (obj) {
      var keys = O.keys(obj),
        i = 0,
        len = keys.length,
        values = [];
      for (; i < len; ++i) values.push(obj[keys[i]]);
      return values;
    };
    O.size = function (obj) {
      try {
        return O.keys(obj).length;
      } catch (ex) {
        return 0;
      }
    };
    O.hasValue = function (obj, value) {
      return Y.Array.indexOf(O.values(obj), value) > -1;
    };
    O.each = function (obj, fn, thisObj, proto) {
      var key;
      for (key in obj)
        if (proto || owns(obj, key)) fn.call(thisObj || Y, obj[key], key, obj);
      return Y;
    };
    O.some = function (obj, fn, thisObj, proto) {
      var key;
      for (key in obj)
        if (proto || owns(obj, key))
          if (fn.call(thisObj || Y, obj[key], key, obj)) return true;
      return false;
    };
    O.getValue = function (o, path) {
      if (!Lang.isObject(o)) return UNDEFINED;
      var i,
        p = Y.Array(path),
        l = p.length;
      for (i = 0; o !== UNDEFINED && i < l; i++) o = o[p[i]];
      return o;
    };
    O.setValue = function (o, path, val) {
      var i,
        p = Y.Array(path),
        leafIdx = p.length - 1,
        ref = o;
      if (leafIdx >= 0) {
        for (i = 0; ref !== UNDEFINED && i < leafIdx; i++) ref = ref[p[i]];
        if (ref !== UNDEFINED) ref[p[i]] = val;
        else return UNDEFINED;
      }
      return o;
    };
    O.isEmpty = function (obj) {
      return !O.keys(Object(obj)).length;
    };
    YUI.Env.parseUA = function (subUA) {
      var numberify = function (s) {
          var c = 0;
          return parseFloat(
            s.replace(/\./g, function () {
              return c++ === 1 ? "" : ".";
            })
          );
        },
        win = Y.config.win,
        nav = win && win.navigator,
        o = {
          ie: 0,
          opera: 0,
          gecko: 0,
          webkit: 0,
          safari: 0,
          chrome: 0,
          mobile: null,
          air: 0,
          phantomjs: 0,
          ipad: 0,
          iphone: 0,
          ipod: 0,
          ios: null,
          android: 0,
          silk: 0,
          ubuntu: 0,
          accel: false,
          webos: 0,
          caja: nav && nav.cajaVersion,
          secure: false,
          os: null,
          nodejs: 0,
          winjs: !!(typeof Windows !== "undefined" && Windows.System),
          touchEnabled: false,
        },
        ua = subUA || (nav && nav.userAgent),
        loc = win && win.location,
        href = loc && loc.href,
        m;
      o.userAgent = ua;
      o.secure = href && href.toLowerCase().indexOf("https") === 0;
      if (ua) {
        if (/windows|win32/i.test(ua)) o.os = "windows";
        else if (/macintosh|mac_powerpc/i.test(ua)) o.os = "macintosh";
        else if (/android/i.test(ua)) o.os = "android";
        else if (/symbos/i.test(ua)) o.os = "symbos";
        else if (/linux/i.test(ua)) o.os = "linux";
        else if (/rhino/i.test(ua)) o.os = "rhino";
        if (/KHTML/.test(ua)) o.webkit = 1;
        if (/IEMobile|XBLWP7/.test(ua)) o.mobile = "windows";
        if (/Fennec/.test(ua)) o.mobile = "gecko";
        m = ua.match(/AppleWebKit\/([^\s]*)/);
        if (m && m[1]) {
          o.webkit = numberify(m[1]);
          o.safari = o.webkit;
          if (/PhantomJS/.test(ua)) {
            m = ua.match(/PhantomJS\/([^\s]*)/);
            if (m && m[1]) o.phantomjs = numberify(m[1]);
          }
          if (/ Mobile\//.test(ua) || /iPad|iPod|iPhone/.test(ua)) {
            o.mobile = "Apple";
            m = ua.match(/OS ([^\s]*)/);
            if (m && m[1]) m = numberify(m[1].replace("_", "."));
            o.ios = m;
            o.os = "ios";
            o.ipad = o.ipod = o.iphone = 0;
            m = ua.match(/iPad|iPod|iPhone/);
            if (m && m[0]) o[m[0].toLowerCase()] = o.ios;
          } else {
            m = ua.match(/NokiaN[^\/]*|webOS\/\d\.\d/);
            if (m) o.mobile = m[0];
            if (/webOS/.test(ua)) {
              o.mobile = "WebOS";
              m = ua.match(/webOS\/([^\s]*);/);
              if (m && m[1]) o.webos = numberify(m[1]);
            }
            if (/ Android/.test(ua)) {
              o.mobile = "Android";
              m = ua.match(/Android ([^\s]*);/);
              if (m && m[1]) o.android = numberify(m[1]);
            }
            if (/Silk/.test(ua)) {
              m = ua.match(/Silk\/([^\s]*)/);
              if (m && m[1]) o.silk = numberify(m[1]);
              if (!o.android) {
                o.android = 2.34;
                o.os = "Android";
              }
              if (/Accelerated=true/.test(ua)) o.accel = true;
            }
          }
          m = ua.match(/OPR\/(\d+\.\d+)/);
          if (m && m[1]) o.opera = numberify(m[1]);
          else {
            m = ua.match(/(Chrome|CrMo|CriOS)\/([^\s]*)/);
            if (m && m[1] && m[2]) {
              o.chrome = numberify(m[2]);
              o.safari = 0;
              if (m[1] === "CrMo") o.mobile = "chrome";
            } else {
              m = ua.match(/AdobeAIR\/([^\s]*)/);
              if (m) o.air = m[0];
            }
          }
        }
        m = ua.match(/Ubuntu (\d+\.\d+)/);
        if (m && m[1]) {
          o.os = "linux";
          o.ubuntu = numberify(m[1]);
          m = ua.match(/ WebKit\/([^\s]*)/);
          if (m && m[1]) o.webkit = numberify(m[1]);
          m = ua.match(/ Chromium\/([^\s]*)/);
          if (m && m[1]) o.chrome = numberify(m[1]);
          if (/ Mobile$/.test(ua)) o.mobile = "Ubuntu";
        }
        if (!o.webkit)
          if (/Opera/.test(ua)) {
            m = ua.match(/Opera[\s\/]([^\s]*)/);
            if (m && m[1]) o.opera = numberify(m[1]);
            m = ua.match(/Version\/([^\s]*)/);
            if (m && m[1]) o.opera = numberify(m[1]);
            if (/Opera Mobi/.test(ua)) {
              o.mobile = "opera";
              m = ua.replace("Opera Mobi", "").match(/Opera ([^\s]*)/);
              if (m && m[1]) o.opera = numberify(m[1]);
            }
            m = ua.match(/Opera Mini[^;]*/);
            if (m) o.mobile = m[0];
          } else {
            m = ua.match(/MSIE ([^;]*)|Trident.*; rv:([0-9.]+)/);
            if (m && (m[1] || m[2])) o.ie = numberify(m[1] || m[2]);
            else {
              m = ua.match(/Gecko\/([^\s]*)/);
              if (m) {
                o.gecko = 1;
                m = ua.match(/rv:([^\s\)]*)/);
                if (m && m[1]) {
                  o.gecko = numberify(m[1]);
                  if (/Mobile|Tablet/.test(ua)) o.mobile = "ffos";
                }
              }
            }
          }
      }
      if (win && nav && !(o.chrome && o.chrome < 6))
        o.touchEnabled =
          "ontouchstart" in win ||
          ("msMaxTouchPoints" in nav && nav.msMaxTouchPoints > 0);
      if (!subUA) {
        if (typeof process === "object")
          if (process.versions && process.versions.node) {
            o.os = process.platform;
            o.nodejs = numberify(process.versions.node);
          }
        YUI.Env.UA = o;
      }
      return o;
    };
    Y.UA = YUI.Env.UA || YUI.Env.parseUA();
    Y.UA.compareVersions = function (a, b) {
      var aPart, aParts, bPart, bParts, i, len;
      if (a === b) return 0;
      aParts = (a + "").split(".");
      bParts = (b + "").split(".");
      for (i = 0, len = Math.max(aParts.length, bParts.length); i < len; ++i) {
        aPart = parseInt(aParts[i], 10);
        bPart = parseInt(bParts[i], 10);
        isNaN(aPart) && (aPart = 0);
        isNaN(bPart) && (bPart = 0);
        if (aPart < bPart) return -1;
        if (aPart > bPart) return 1;
      }
      return 0;
    };
    YUI.Env.aliases = {
      anim: [
        "anim-base",
        "anim-color",
        "anim-curve",
        "anim-easing",
        "anim-node-plugin",
        "anim-scroll",
        "anim-xy",
      ],
      "anim-shape-transform": ["anim-shape"],
      app: [
        "app-base",
        "app-content",
        "app-transitions",
        "lazy-model-list",
        "model",
        "model-list",
        "model-sync-rest",
        "model-sync-local",
        "router",
        "view",
        "view-node-map",
      ],
      attribute: ["attribute-base", "attribute-complex"],
      "attribute-events": ["attribute-observable"],
      autocomplete: [
        "autocomplete-base",
        "autocomplete-sources",
        "autocomplete-list",
        "autocomplete-plugin",
      ],
      axes: ["axis-numeric", "axis-category", "axis-time", "axis-stacked"],
      "axes-base": [
        "axis-numeric-base",
        "axis-category-base",
        "axis-time-base",
        "axis-stacked-base",
      ],
      base: ["base-base", "base-pluginhost", "base-build"],
      cache: ["cache-base", "cache-offline", "cache-plugin"],
      charts: ["charts-base"],
      collection: [
        "array-extras",
        "arraylist",
        "arraylist-add",
        "arraylist-filter",
        "array-invoke",
      ],
      color: ["color-base", "color-hsl", "color-harmony"],
      controller: ["router"],
      dataschema: [
        "dataschema-base",
        "dataschema-json",
        "dataschema-xml",
        "dataschema-array",
        "dataschema-text",
      ],
      datasource: [
        "datasource-local",
        "datasource-io",
        "datasource-get",
        "datasource-function",
        "datasource-cache",
        "datasource-jsonschema",
        "datasource-xmlschema",
        "datasource-arrayschema",
        "datasource-textschema",
        "datasource-polling",
      ],
      datatable: [
        "datatable-core",
        "datatable-table",
        "datatable-head",
        "datatable-body",
        "datatable-base",
        "datatable-column-widths",
        "datatable-message",
        "datatable-mutable",
        "datatable-sort",
        "datatable-datasource",
      ],
      datatype: ["datatype-date", "datatype-number", "datatype-xml"],
      "datatype-date": [
        "datatype-date-parse",
        "datatype-date-format",
        "datatype-date-math",
      ],
      "datatype-number": ["datatype-number-parse", "datatype-number-format"],
      "datatype-xml": ["datatype-xml-parse", "datatype-xml-format"],
      dd: [
        "dd-ddm-base",
        "dd-ddm",
        "dd-ddm-drop",
        "dd-drag",
        "dd-proxy",
        "dd-constrain",
        "dd-drop",
        "dd-scroll",
        "dd-delegate",
      ],
      dom: [
        "dom-base",
        "dom-screen",
        "dom-style",
        "selector-native",
        "selector",
      ],
      editor: [
        "frame",
        "editor-selection",
        "exec-command",
        "editor-base",
        "editor-para",
        "editor-br",
        "editor-bidi",
        "editor-tab",
        "createlink-base",
      ],
      event: [
        "event-base",
        "event-delegate",
        "event-synthetic",
        "event-mousewheel",
        "event-mouseenter",
        "event-key",
        "event-focus",
        "event-resize",
        "event-hover",
        "event-outside",
        "event-touch",
        "event-move",
        "event-flick",
        "event-valuechange",
        "event-tap",
      ],
      "event-custom": ["event-custom-base", "event-custom-complex"],
      "event-gestures": ["event-flick", "event-move"],
      handlebars: ["handlebars-compiler"],
      highlight: ["highlight-base", "highlight-accentfold"],
      history: ["history-base", "history-hash", "history-html5"],
      io: ["io-base", "io-xdr", "io-form", "io-upload-iframe", "io-queue"],
      json: ["json-parse", "json-stringify"],
      loader: ["loader-base", "loader-rollup", "loader-yui3"],
      "loader-pathogen-encoder": [
        "loader-base",
        "loader-rollup",
        "loader-yui3",
        "loader-pathogen-combohandler",
      ],
      node: [
        "node-base",
        "node-event-delegate",
        "node-pluginhost",
        "node-screen",
        "node-style",
      ],
      pluginhost: ["pluginhost-base", "pluginhost-config"],
      querystring: ["querystring-parse", "querystring-stringify"],
      recordset: [
        "recordset-base",
        "recordset-sort",
        "recordset-filter",
        "recordset-indexer",
      ],
      resize: ["resize-base", "resize-proxy", "resize-constrain"],
      slider: [
        "slider-base",
        "slider-value-range",
        "clickable-rail",
        "range-slider",
      ],
      template: ["template-base", "template-micro"],
      text: ["text-accentfold", "text-wordbreak"],
      widget: [
        "widget-base",
        "widget-htmlparser",
        "widget-skin",
        "widget-uievents",
      ],
    };
  },
  "patched-v3.18.1",
  {
    use: [
      "yui-base",
      "get",
      "features",
      "intl-base",
      "yui-log",
      "yui-later",
      "loader-base",
      "loader-rollup",
      "loader-yui3",
    ],
  }
);
YUI.add(
  "get",
  function (Y, NAME) {
    var Lang = Y.Lang,
      CUSTOM_ATTRS,
      Get,
      Transaction;
    Y.Get = Get = {
      cssOptions: {
        attributes: { rel: "stylesheet" },
        doc: Y.config.linkDoc || Y.config.doc,
        pollInterval: 50,
      },
      jsOptions: { autopurge: true, doc: Y.config.scriptDoc || Y.config.doc },
      options: { attributes: { charset: "utf-8" }, purgethreshold: 20 },
      REGEX_CSS: /\.css(?:[?;].*)?$/i,
      REGEX_JS: /\.js(?:[?;].*)?$/i,
      _insertCache: {},
      _pending: null,
      _purgeNodes: [],
      _queue: [],
      abort: function (transaction) {
        var i, id, item, len, pending;
        if (!transaction.abort) {
          id = transaction;
          pending = this._pending;
          transaction = null;
          if (pending && pending.transaction.id === id) {
            transaction = pending.transaction;
            this._pending = null;
          } else
            for (i = 0, len = this._queue.length; i < len; ++i) {
              item = this._queue[i].transaction;
              if (item.id === id) {
                transaction = item;
                this._queue.splice(i, 1);
                break;
              }
            }
        }
        transaction && transaction.abort();
      },
      css: function (urls, options, callback) {
        return this._load("css", urls, options, callback);
      },
      js: function (urls, options, callback) {
        return this._load("js", urls, options, callback);
      },
      load: function (urls, options, callback) {
        return this._load(null, urls, options, callback);
      },
      _autoPurge: function (threshold) {
        if (threshold && this._purgeNodes.length >= threshold)
          this._purge(this._purgeNodes);
      },
      _getEnv: function () {
        var doc = Y.config.doc,
          ua = Y.UA;
        return (this._env = {
          async:
            (doc && doc.createElement("script").async === true) || ua.ie >= 10,
          cssFail: ua.gecko >= 9 || ua.compareVersions(ua.webkit, 535.24) >= 0,
          cssLoad:
            ((!ua.gecko && !ua.webkit) ||
              ua.gecko >= 9 ||
              ua.compareVersions(ua.webkit, 535.24) >= 0) &&
            !(ua.chrome && ua.chrome <= 18),
          preservesScriptOrder: !!(
            ua.gecko ||
            ua.opera ||
            (ua.ie && ua.ie >= 10)
          ),
        });
      },
      _getTransaction: function (urls, options) {
        var requests = [],
          i,
          len,
          req,
          url;
        if (!Lang.isArray(urls)) urls = [urls];
        options = Y.merge(this.options, options);
        options.attributes = Y.merge(
          this.options.attributes,
          options.attributes
        );
        for (i = 0, len = urls.length; i < len; ++i) {
          url = urls[i];
          req = { attributes: {} };
          if (typeof url === "string") req.url = url;
          else if (url.url) {
            Y.mix(req, url, false, null, 0, true);
            url = url.url;
          } else continue;
          Y.mix(req, options, false, null, 0, true);
          if (!req.type)
            if (this.REGEX_CSS.test(url)) req.type = "css";
            else {
              if (!this.REGEX_JS.test(url));
              req.type = "js";
            }
          Y.mix(
            req,
            req.type === "js" ? this.jsOptions : this.cssOptions,
            false,
            null,
            0,
            true
          );
          req.attributes.id || (req.attributes.id = Y.guid());
          if (req.win) req.doc = req.win.document;
          else req.win = req.doc.defaultView || req.doc.parentWindow;
          if (req.charset) req.attributes.charset = req.charset;
          requests.push(req);
        }
        return new Transaction(requests, options);
      },
      _load: function (type, urls, options, callback) {
        var transaction;
        if (typeof options === "function") {
          callback = options;
          options = {};
        }
        options || (options = {});
        options.type = type;
        options._onFinish = Get._onTransactionFinish;
        if (!this._env) this._getEnv();
        transaction = this._getTransaction(urls, options);
        this._queue.push({ callback: callback, transaction: transaction });
        this._next();
        return transaction;
      },
      _onTransactionFinish: function () {
        Get._pending = null;
        Get._next();
      },
      _next: function () {
        var item;
        if (this._pending) return;
        item = this._queue.shift();
        if (item) {
          this._pending = item;
          item.transaction.execute(item.callback);
        }
      },
      _purge: function (nodes) {
        var purgeNodes = this._purgeNodes,
          isTransaction = nodes !== purgeNodes,
          index,
          node;
        while ((node = nodes.pop())) {
          if (!node._yuiget_finished) continue;
          node.parentNode && node.parentNode.removeChild(node);
          if (isTransaction) {
            index = Y.Array.indexOf(purgeNodes, node);
            if (index > -1) purgeNodes.splice(index, 1);
          }
        }
      },
    };
    Get.script = Get.js;
    Get.Transaction = Transaction = function (requests, options) {
      var self = this;
      self.id = Transaction._lastId += 1;
      self.data = options.data;
      self.errors = [];
      self.nodes = [];
      self.options = options;
      self.requests = requests;
      self._callbacks = [];
      self._queue = [];
      self._reqsWaiting = 0;
      self.tId = self.id;
      self.win = options.win || Y.config.win;
    };
    Transaction._lastId = 0;
    Transaction.prototype = {
      _state: "new",
      abort: function (msg) {
        this._pending = null;
        this._pendingCSS = null;
        this._pollTimer = clearTimeout(this._pollTimer);
        this._queue = [];
        this._reqsWaiting = 0;
        this.errors.push({ error: msg || "Aborted" });
        this._finish();
      },
      execute: function (callback) {
        var self = this,
          requests = self.requests,
          state = self._state,
          i,
          len,
          queue,
          req;
        if (state === "done") {
          callback && callback(self.errors.length ? self.errors : null, self);
          return;
        } else {
          callback && self._callbacks.push(callback);
          if (state === "executing") return;
        }
        self._state = "executing";
        self._queue = queue = [];
        if (self.options.timeout)
          self._timeout = setTimeout(function () {
            self.abort("Timeout");
          }, self.options.timeout);
        self._reqsWaiting = requests.length;
        for (i = 0, len = requests.length; i < len; ++i) {
          req = requests[i];
          if (req.async || req.type === "css") self._insert(req);
          else queue.push(req);
        }
        self._next();
      },
      purge: function () {
        Get._purge(this.nodes);
      },
      _createNode: function (name, attrs, doc) {
        var node = doc.createElement(name),
          attr,
          testEl;
        if (!CUSTOM_ATTRS) {
          testEl = doc.createElement("div");
          testEl.setAttribute("class", "a");
          CUSTOM_ATTRS =
            testEl.className === "a"
              ? {}
              : { for: "htmlFor", class: "className" };
        }
        for (attr in attrs)
          if (attrs.hasOwnProperty(attr))
            node.setAttribute(CUSTOM_ATTRS[attr] || attr, attrs[attr]);
        return node;
      },
      _finish: function () {
        var errors = this.errors.length ? this.errors : null,
          options = this.options,
          thisObj = options.context || this,
          data,
          i,
          len;
        if (this._state === "done") return;
        this._state = "done";
        for (i = 0, len = this._callbacks.length; i < len; ++i)
          this._callbacks[i].call(thisObj, errors, this);
        data = this._getEventData();
        if (errors) {
          if (
            options.onTimeout &&
            errors[errors.length - 1].error === "Timeout"
          )
            options.onTimeout.call(thisObj, data);
          if (options.onFailure) options.onFailure.call(thisObj, data);
        } else if (options.onSuccess) options.onSuccess.call(thisObj, data);
        if (options.onEnd) options.onEnd.call(thisObj, data);
        if (options._onFinish) options._onFinish();
      },
      _getEventData: function (req) {
        if (req)
          return Y.merge(this, {
            abort: this.abort,
            purge: this.purge,
            request: req,
            url: req.url,
            win: req.win,
          });
        else return this;
      },
      _getInsertBefore: function (req) {
        var doc = req.doc,
          el = req.insertBefore,
          cache,
          docStamp;
        if (el) return typeof el === "string" ? doc.getElementById(el) : el;
        cache = Get._insertCache;
        docStamp = Y.stamp(doc);
        if ((el = cache[docStamp])) return el;
        if ((el = doc.getElementsByTagName("base")[0]))
          return (cache[docStamp] = el);
        el = doc.head || doc.getElementsByTagName("head")[0];
        if (el) {
          el.appendChild(doc.createTextNode(""));
          return (cache[docStamp] = el.lastChild);
        }
        return (cache[docStamp] = doc.getElementsByTagName("script")[0]);
      },
      _insert: function (req) {
        var env = Get._env,
          insertBefore = this._getInsertBefore(req),
          isScript = req.type === "js",
          node = req.node,
          self = this,
          ua = Y.UA,
          cssTimeout,
          nodeType;
        if (!node) {
          if (isScript) nodeType = "script";
          else if (!env.cssLoad && ua.gecko) nodeType = "style";
          else {
            nodeType = "link";
            delete req.attributes["charset"];
          }
          node = req.node = this._createNode(nodeType, req.attributes, req.doc);
        }
        function onError() {
          self._progress("Failed to load " + req.url, req);
        }
        function onLoad() {
          if (cssTimeout) clearTimeout(cssTimeout);
          self._progress(null, req);
        }
        if (isScript) {
          node.setAttribute("src", req.url);
          if (req.async) node.async = true;
          else {
            if (env.async) node.async = false;
            if (!env.preservesScriptOrder) this._pending = req;
          }
        } else if (!env.cssLoad && ua.gecko)
          node.innerHTML =
            (req.attributes.charset
              ? '@charset "' + req.attributes.charset + '";'
              : "") +
            '@import "' +
            req.url +
            '";';
        else node.setAttribute("href", req.url);
        if (
          isScript &&
          ua.ie &&
          (ua.ie < 9 || (document.documentMode && document.documentMode < 9))
        )
          node.onreadystatechange = function () {
            if (/loaded|complete/.test(node.readyState)) {
              node.onreadystatechange = null;
              onLoad();
            }
          };
        else if (!isScript && !env.cssLoad) this._poll(req);
        else {
          if (ua.ie >= 10) {
            node.onerror = function () {
              setTimeout(onError, 0);
            };
            node.onload = function () {
              setTimeout(onLoad, 0);
            };
          } else {
            node.onerror = onError;
            node.onload = onLoad;
          }
          if (!env.cssFail && !isScript)
            cssTimeout = setTimeout(onError, req.timeout || 3e3);
        }
        this.nodes.push(node);
        insertBefore.parentNode.insertBefore(node, insertBefore);
      },
      _next: function () {
        if (this._pending) return;
        if (this._queue.length) this._insert(this._queue.shift());
        else if (!this._reqsWaiting) this._finish();
      },
      _poll: function (newReq) {
        var self = this,
          pendingCSS = self._pendingCSS,
          isWebKit = Y.UA.webkit,
          i,
          hasRules,
          j,
          nodeHref,
          req,
          sheets;
        if (newReq) {
          pendingCSS || (pendingCSS = self._pendingCSS = []);
          pendingCSS.push(newReq);
          if (self._pollTimer) return;
        }
        self._pollTimer = null;
        for (i = 0; i < pendingCSS.length; ++i) {
          req = pendingCSS[i];
          if (isWebKit) {
            sheets = req.doc.styleSheets;
            j = sheets.length;
            nodeHref = req.node.href;
            while (--j >= 0)
              if (sheets[j].href === nodeHref) {
                pendingCSS.splice(i, 1);
                i -= 1;
                self._progress(null, req);
                break;
              }
          } else
            try {
              hasRules = !!req.node.sheet.cssRules;
              pendingCSS.splice(i, 1);
              i -= 1;
              self._progress(null, req);
            } catch (ex) {}
        }
        if (pendingCSS.length)
          self._pollTimer = setTimeout(function () {
            self._poll.call(self);
          }, self.options.pollInterval);
      },
      _progress: function (err, req) {
        var options = this.options;
        if (err) {
          req.error = err;
          this.errors.push({ error: err, request: req });
        }
        req.node._yuiget_finished = req.finished = true;
        if (options.onProgress)
          options.onProgress.call(
            options.context || this,
            this._getEventData(req)
          );
        if (req.autopurge) {
          Get._autoPurge(this.options.purgethreshold);
          Get._purgeNodes.push(req.node);
        }
        if (this._pending === req) this._pending = null;
        this._reqsWaiting -= 1;
        this._next();
      },
    };
  },
  "patched-v3.18.1",
  { requires: ["yui-base"] }
);
YUI.add(
  "features",
  function (Y, NAME) {
    var feature_tests = {};
    Y.mix(Y.namespace("Features"), {
      tests: feature_tests,
      add: function (cat, name, o) {
        feature_tests[cat] = feature_tests[cat] || {};
        feature_tests[cat][name] = o;
      },
      all: function (cat, args) {
        var cat_o = feature_tests[cat],
          result = [];
        if (cat_o)
          Y.Object.each(cat_o, function (v, k) {
            result.push(k + ":" + (Y.Features.test(cat, k, args) ? 1 : 0));
          });
        return result.length ? result.join(";") : "";
      },
      test: function (cat, name, args) {
        args = args || [];
        var result,
          ua,
          test,
          cat_o = feature_tests[cat],
          feature = cat_o && cat_o[name];
        if (!feature);
        else {
          result = feature.result;
          if (Y.Lang.isUndefined(result)) {
            ua = feature.ua;
            if (ua) result = Y.UA[ua];
            test = feature.test;
            if (test && (!ua || result)) result = test.apply(Y, args);
            feature.result = result;
          }
        }
        return result;
      },
    });
    var add = Y.Features.add;
    add("load", "0", {
      name: "app-transitions-native",
      test: function (Y) {
        var doc = Y.config.doc,
          node = doc ? doc.documentElement : null;
        if (node && node.style)
          return (
            "MozTransition" in node.style ||
            "WebkitTransition" in node.style ||
            "transition" in node.style
          );
        return false;
      },
      trigger: "app-transitions",
    });
    add("load", "1", {
      name: "autocomplete-list-keys",
      test: function (Y) {
        return !(Y.UA.ios || Y.UA.android);
      },
      trigger: "autocomplete-list",
    });
    add("load", "2", {
      name: "dd-gestures",
      trigger: "dd-drag",
      ua: "touchEnabled",
    });
    add("load", "3", {
      name: "dom-style-ie",
      test: function (Y) {
        var testFeature = Y.Features.test,
          addFeature = Y.Features.add,
          WINDOW = Y.config.win,
          DOCUMENT = Y.config.doc,
          DOCUMENT_ELEMENT = "documentElement",
          ret = false;
        addFeature("style", "computedStyle", {
          test: function () {
            return WINDOW && "getComputedStyle" in WINDOW;
          },
        });
        addFeature("style", "opacity", {
          test: function () {
            return DOCUMENT && "opacity" in DOCUMENT[DOCUMENT_ELEMENT].style;
          },
        });
        ret =
          !testFeature("style", "opacity") &&
          !testFeature("style", "computedStyle");
        return ret;
      },
      trigger: "dom-style",
    });
    add("load", "4", {
      name: "editor-para-ie",
      trigger: "editor-para",
      ua: "ie",
      when: "instead",
    });
    add("load", "5", {
      name: "event-base-ie",
      test: function (Y) {
        var imp = Y.config.doc && Y.config.doc.implementation;
        return imp && !imp.hasFeature("Events", "2.0");
      },
      trigger: "node-base",
    });
    add("load", "6", {
      name: "graphics-canvas",
      test: function (Y) {
        var DOCUMENT = Y.config.doc,
          useCanvas =
            Y.config.defaultGraphicEngine &&
            Y.config.defaultGraphicEngine == "canvas",
          canvas = DOCUMENT && DOCUMENT.createElement("canvas"),
          svg =
            DOCUMENT &&
            DOCUMENT.implementation.hasFeature(
              "http://www.w3.org/TR/SVG11/feature#BasicStructure",
              "1.1"
            );
        return (
          (!svg || useCanvas) &&
          canvas &&
          canvas.getContext &&
          canvas.getContext("2d")
        );
      },
      trigger: "graphics",
    });
    add("load", "7", {
      name: "graphics-canvas-default",
      test: function (Y) {
        var DOCUMENT = Y.config.doc,
          useCanvas =
            Y.config.defaultGraphicEngine &&
            Y.config.defaultGraphicEngine == "canvas",
          canvas = DOCUMENT && DOCUMENT.createElement("canvas"),
          svg =
            DOCUMENT &&
            DOCUMENT.implementation.hasFeature(
              "http://www.w3.org/TR/SVG11/feature#BasicStructure",
              "1.1"
            );
        return (
          (!svg || useCanvas) &&
          canvas &&
          canvas.getContext &&
          canvas.getContext("2d")
        );
      },
      trigger: "graphics",
    });
    add("load", "8", {
      name: "graphics-svg",
      test: function (Y) {
        var DOCUMENT = Y.config.doc,
          useSVG =
            !Y.config.defaultGraphicEngine ||
            Y.config.defaultGraphicEngine != "canvas",
          canvas = DOCUMENT && DOCUMENT.createElement("canvas"),
          svg =
            DOCUMENT &&
            DOCUMENT.implementation.hasFeature(
              "http://www.w3.org/TR/SVG11/feature#BasicStructure",
              "1.1"
            );
        return svg && (useSVG || !canvas);
      },
      trigger: "graphics",
    });
    add("load", "9", {
      name: "graphics-svg-default",
      test: function (Y) {
        var DOCUMENT = Y.config.doc,
          useSVG =
            !Y.config.defaultGraphicEngine ||
            Y.config.defaultGraphicEngine != "canvas",
          canvas = DOCUMENT && DOCUMENT.createElement("canvas"),
          svg =
            DOCUMENT &&
            DOCUMENT.implementation.hasFeature(
              "http://www.w3.org/TR/SVG11/feature#BasicStructure",
              "1.1"
            );
        return svg && (useSVG || !canvas);
      },
      trigger: "graphics",
    });
    add("load", "10", {
      name: "graphics-vml",
      test: function (Y) {
        var DOCUMENT = Y.config.doc,
          canvas = DOCUMENT && DOCUMENT.createElement("canvas");
        return (
          DOCUMENT &&
          !DOCUMENT.implementation.hasFeature(
            "http://www.w3.org/TR/SVG11/feature#BasicStructure",
            "1.1"
          ) &&
          (!canvas || !canvas.getContext || !canvas.getContext("2d"))
        );
      },
      trigger: "graphics",
    });
    add("load", "11", {
      name: "graphics-vml-default",
      test: function (Y) {
        var DOCUMENT = Y.config.doc,
          canvas = DOCUMENT && DOCUMENT.createElement("canvas");
        return (
          DOCUMENT &&
          !DOCUMENT.implementation.hasFeature(
            "http://www.w3.org/TR/SVG11/feature#BasicStructure",
            "1.1"
          ) &&
          (!canvas || !canvas.getContext || !canvas.getContext("2d"))
        );
      },
      trigger: "graphics",
    });
    add("load", "12", {
      name: "history-hash-ie",
      test: function (Y) {
        var docMode = Y.config.doc && Y.config.doc.documentMode;
        return (
          Y.UA.ie &&
          (!("onhashchange" in Y.config.win) || !docMode || docMode < 8)
        );
      },
      trigger: "history-hash",
    });
    add("load", "13", { name: "io-nodejs", trigger: "io-base", ua: "nodejs" });
    add("load", "14", {
      name: "json-parse-shim",
      test: function (Y) {
        var _JSON = Y.config.global.JSON,
          Native =
            Object.prototype.toString.call(_JSON) === "[object JSON]" && _JSON,
          nativeSupport = Y.config.useNativeJSONParse !== false && !!Native;
        function workingNative(k, v) {
          return k === "ok" ? true : v;
        }
        if (nativeSupport)
          try {
            nativeSupport = Native.parse('{"ok":false}', workingNative).ok;
          } catch (e) {
            nativeSupport = false;
          }
        return !nativeSupport;
      },
      trigger: "json-parse",
    });
    add("load", "15", {
      name: "json-stringify-shim",
      test: function (Y) {
        var _JSON = Y.config.global.JSON,
          Native =
            Object.prototype.toString.call(_JSON) === "[object JSON]" && _JSON,
          nativeSupport = Y.config.useNativeJSONStringify !== false && !!Native;
        if (nativeSupport)
          try {
            nativeSupport = "0" === Native.stringify(0);
          } catch (e) {
            nativeSupport = false;
          }
        return !nativeSupport;
      },
      trigger: "json-stringify",
    });
    add("load", "16", {
      name: "scrollview-base-ie",
      trigger: "scrollview-base",
      ua: "ie",
    });
    add("load", "17", {
      name: "selector-css2",
      test: function (Y) {
        var DOCUMENT = Y.config.doc,
          ret = DOCUMENT && !("querySelectorAll" in DOCUMENT);
        return ret;
      },
      trigger: "selector",
    });
    add("load", "18", {
      name: "transition-timer",
      test: function (Y) {
        var DOCUMENT = Y.config.doc,
          node = DOCUMENT ? DOCUMENT.documentElement : null,
          ret = true;
        if (node && node.style)
          ret = !(
            "MozTransition" in node.style ||
            "WebkitTransition" in node.style ||
            "transition" in node.style
          );
        return ret;
      },
      trigger: "transition",
    });
    add("load", "19", {
      name: "widget-base-ie",
      trigger: "widget-base",
      ua: "ie",
    });
    add("load", "20", {
      name: "yql-jsonp",
      test: function (Y) {
        return !Y.UA.nodejs && !Y.UA.winjs;
      },
      trigger: "yql",
    });
    add("load", "21", { name: "yql-nodejs", trigger: "yql", ua: "nodejs" });
    add("load", "22", { name: "yql-winjs", trigger: "yql", ua: "winjs" });
  },
  "patched-v3.18.1",
  { requires: ["yui-base"] }
);
YUI.add(
  "intl-base",
  function (Y, NAME) {
    var SPLIT_REGEX = /[, ]/;
    Y.mix(Y.namespace("Intl"), {
      lookupBestLang: function (preferredLanguages, availableLanguages) {
        var i, language, result, index;
        function scan(language) {
          var i;
          for (i = 0; i < availableLanguages.length; i += 1)
            if (language.toLowerCase() === availableLanguages[i].toLowerCase())
              return availableLanguages[i];
        }
        if (Y.Lang.isString(preferredLanguages))
          preferredLanguages = preferredLanguages.split(SPLIT_REGEX);
        for (i = 0; i < preferredLanguages.length; i += 1) {
          language = preferredLanguages[i];
          if (!language || language === "*") continue;
          while (language.length > 0) {
            result = scan(language);
            if (result) return result;
            else {
              index = language.lastIndexOf("-");
              if (index >= 0) {
                language = language.substring(0, index);
                if (index >= 2 && language.charAt(index - 2) === "-")
                  language = language.substring(0, index - 2);
              } else break;
            }
          }
        }
        return "";
      },
    });
  },
  "patched-v3.18.1",
  { requires: ["yui-base"] }
);
YUI.add(
  "yui-log",
  function (Y, NAME) {
    var INSTANCE = Y,
      LOGEVENT = "yui:log",
      UNDEFINED = "undefined",
      LEVELS = { debug: 1, info: 2, warn: 4, error: 8 };
    INSTANCE.log = function (msg, cat, src, silent) {
      var bail,
        excl,
        incl,
        m,
        f,
        minlevel,
        Y = INSTANCE,
        c = Y.config,
        publisher = Y.fire ? Y : YUI.Env.globalEvents;
      if (c.debug) {
        src = src || "";
        if (typeof src !== "undefined") {
          excl = c.logExclude;
          incl = c.logInclude;
          if (incl && !(src in incl)) bail = 1;
          else if (incl && src in incl) bail = !incl[src];
          else if (excl && src in excl) bail = excl[src];
          if (typeof cat === "undefined") cat = "info";
          Y.config.logLevel = Y.config.logLevel || "debug";
          minlevel = LEVELS[Y.config.logLevel.toLowerCase()];
          if (cat in LEVELS && LEVELS[cat] < minlevel) bail = 1;
        }
        if (!bail) {
          if (c.useBrowserConsole) {
            m = src ? src + ": " + msg : msg;
            if (Y.Lang.isFunction(c.logFn)) c.logFn.call(Y, msg, cat, src);
            else if (typeof console !== UNDEFINED && console.log) {
              f = cat && console[cat] && cat in LEVELS ? cat : "log";
              console[f](m);
            } else if (typeof opera !== UNDEFINED) opera.postError(m);
          }
          if (publisher && !silent) {
            if (publisher === Y && !publisher.getEvent(LOGEVENT))
              publisher.publish(LOGEVENT, { broadcast: 2 });
            publisher.fire(LOGEVENT, { msg: msg, cat: cat, src: src });
          }
        }
      }
      return Y;
    };
    INSTANCE.message = function () {
      return INSTANCE.log.apply(INSTANCE, arguments);
    };
  },
  "patched-v3.18.1",
  { requires: ["yui-base"] }
);
YUI.add(
  "yui-later",
  function (Y, NAME) {
    var NO_ARGS = [];
    Y.later = function (when, o, fn, data, periodic) {
      when = when || 0;
      data = !Y.Lang.isUndefined(data) ? Y.Array(data) : NO_ARGS;
      o = o || Y.config.win || Y;
      var cancelled = false,
        method = o && Y.Lang.isString(fn) ? o[fn] : fn,
        wrapper = function () {
          if (!cancelled)
            if (!method.apply) method(data[0], data[1], data[2], data[3]);
            else method.apply(o, data || NO_ARGS);
        },
        id = periodic ? setInterval(wrapper, when) : setTimeout(wrapper, when);
      return {
        id: id,
        interval: periodic,
        cancel: function () {
          cancelled = true;
          if (this.interval) clearInterval(id);
          else clearTimeout(id);
        },
      };
    };
    Y.Lang.later = Y.later;
  },
  "patched-v3.18.1",
  { requires: ["yui-base"] }
);
YUI.add(
  "loader-base",
  function (Y, NAME) {
    (function () {
      var VERSION = Y.version,
        BUILD = "/build/",
        ROOT = VERSION + "/",
        CDN_BASE = Y.Env.base,
        GALLERY_VERSION = "gallery-2014.06.04-21-38",
        TNT = "2in3",
        TNT_VERSION = "4",
        YUI2_VERSION = "2.9.0",
        COMBO_BASE = CDN_BASE + "combo?",
        META = {
          version: VERSION,
          root: ROOT,
          base: Y.Env.base,
          comboBase: COMBO_BASE,
          skin: {
            defaultSkin: "sam",
            base: "assets/skins/",
            path: "skin.css",
            after: [
              "cssreset",
              "cssfonts",
              "cssgrids",
              "cssbase",
              "cssreset-context",
              "cssfonts-context",
            ],
          },
          groups: {},
          patterns: {},
        },
        groups = META.groups,
        yui2Update = function (tnt, yui2, config) {
          var root =
              TNT +
              "." +
              (tnt || TNT_VERSION) +
              "/" +
              (yui2 || YUI2_VERSION) +
              BUILD,
            base = config && config.base ? config.base : CDN_BASE,
            combo = config && config.comboBase ? config.comboBase : COMBO_BASE;
          groups.yui2.base = base + root;
          groups.yui2.root = root;
          groups.yui2.comboBase = combo;
        },
        galleryUpdate = function (tag, config) {
          var root = (tag || GALLERY_VERSION) + BUILD,
            base = config && config.base ? config.base : CDN_BASE,
            combo = config && config.comboBase ? config.comboBase : COMBO_BASE;
          groups.gallery.base = base + root;
          groups.gallery.root = root;
          groups.gallery.comboBase = combo;
        };
      groups[VERSION] = {};
      groups.gallery = {
        ext: false,
        combine: true,
        comboBase: COMBO_BASE,
        update: galleryUpdate,
        patterns: {
          "gallery-": {},
          "lang/gallery-": {},
          "gallerycss-": { type: "css" },
        },
      };
      groups.yui2 = {
        combine: true,
        ext: false,
        comboBase: COMBO_BASE,
        update: yui2Update,
        patterns: {
          "yui2-": {
            configFn: function (me) {
              if (/-skin|reset|fonts|grids|base/.test(me.name)) {
                me.type = "css";
                me.path = me.path.replace(/\.js/, ".css");
                me.path = me.path.replace(
                  /\/yui2-skin/,
                  "/assets/skins/sam/yui2-skin"
                );
              }
            },
          },
        },
      };
      galleryUpdate();
      yui2Update();
      if (YUI.Env[VERSION])
        Y.mix(
          META,
          YUI.Env[VERSION],
          false,
          ["modules", "groups", "skin"],
          0,
          true
        );
      YUI.Env[VERSION] = META;
    })();
    var NOT_FOUND = {},
      NO_REQUIREMENTS = [],
      MAX_URL_LENGTH = 1024,
      GLOBAL_ENV = YUI.Env,
      GLOBAL_LOADED = GLOBAL_ENV._loaded,
      CSS = "css",
      JS = "js",
      INTL = "intl",
      DEFAULT_SKIN = "sam",
      VERSION = Y.version,
      ROOT_LANG = "",
      YObject = Y.Object,
      oeach = YObject.each,
      yArray = Y.Array,
      _queue = GLOBAL_ENV._loaderQueue,
      META = GLOBAL_ENV[VERSION],
      SKIN_PREFIX = "skin-",
      L = Y.Lang,
      ON_PAGE = GLOBAL_ENV.mods,
      modulekey,
      _path = function (dir, file, type, nomin) {
        var path = dir + "/" + file;
        if (!nomin) path += "-min";
        path += "." + (type || CSS);
        return path;
      };
    if (!YUI.Env._cssLoaded) YUI.Env._cssLoaded = {};
    Y.Env.meta = META;
    Y.Loader = function (o) {
      var self = this;
      o = o || {};
      modulekey = META.md5;
      self.context = Y;
      if (o.doBeforeLoader) o.doBeforeLoader.apply(self, arguments);
      self.base = Y.Env.meta.base + Y.Env.meta.root;
      self.comboBase = Y.Env.meta.comboBase;
      self.combine =
        o.base && o.base.indexOf(self.comboBase.substr(0, 20)) > -1;
      self.comboSep = "\x26";
      self.maxURLLength = MAX_URL_LENGTH;
      self.ignoreRegistered = o.ignoreRegistered;
      self.root = Y.Env.meta.root;
      self.timeout = 0;
      self.forceMap = {};
      self.allowRollup = false;
      self.filters = {};
      self.required = {};
      self.patterns = {};
      self.moduleInfo = {};
      self.groups = Y.merge(Y.Env.meta.groups);
      self.skin = Y.merge(Y.Env.meta.skin);
      self.conditions = {};
      self.config = o;
      self._internal = true;
      self._populateConditionsCache();
      self.loaded = GLOBAL_LOADED[VERSION];
      self.async = true;
      self._inspectPage();
      self._internal = false;
      self._config(o);
      self.forceMap = self.force ? Y.Array.hash(self.force) : {};
      self.testresults = null;
      if (Y.config.tests) self.testresults = Y.config.tests;
      self.sorted = [];
      self.dirty = true;
      self.inserted = {};
      self.skipped = {};
      self.tested = {};
      if (self.ignoreRegistered) self._resetModules();
    };
    Y.Loader.prototype = {
      getModuleInfo: function (name) {
        var m = this.moduleInfo[name],
          rawMetaModules,
          globalRenderedMods,
          internal,
          v;
        if (m) return m;
        rawMetaModules = META.modules;
        globalRenderedMods = GLOBAL_ENV._renderedMods;
        internal = this._internal;
        if (
          globalRenderedMods &&
          globalRenderedMods.hasOwnProperty(name) &&
          !this.ignoreRegistered
        )
          this.moduleInfo[name] = Y.merge(globalRenderedMods[name]);
        else if (rawMetaModules.hasOwnProperty(name)) {
          this._internal = true;
          v = this.addModule(rawMetaModules[name], name);
          if (v && v.type === CSS)
            if (this.isCSSLoaded(v.name, true)) this.loaded[v.name] = true;
          this._internal = internal;
        }
        return this.moduleInfo[name];
      },
      _expandAliases: function (list) {
        var expanded = [],
          aliases = YUI.Env.aliases,
          i,
          name;
        list = Y.Array(list);
        for (i = 0; i < list.length; i += 1) {
          name = list[i];
          expanded.push.apply(expanded, aliases[name] ? aliases[name] : [name]);
        }
        return expanded;
      },
      _populateConditionsCache: function () {
        var rawMetaModules = META.modules,
          cache = GLOBAL_ENV._conditions,
          i,
          j,
          t,
          trigger;
        if (cache && !this.ignoreRegistered)
          for (i in cache) {
            if (cache.hasOwnProperty(i)) this.conditions[i] = Y.merge(cache[i]);
          }
        else {
          for (i in rawMetaModules)
            if (
              rawMetaModules.hasOwnProperty(i) &&
              rawMetaModules[i].condition
            ) {
              t = this._expandAliases(rawMetaModules[i].condition.trigger);
              for (j = 0; j < t.length; j += 1) {
                trigger = t[j];
                this.conditions[trigger] = this.conditions[trigger] || {};
                this.conditions[trigger][rawMetaModules[i].name || i] =
                  rawMetaModules[i].condition;
              }
            }
          GLOBAL_ENV._conditions = this.conditions;
        }
      },
      _resetModules: function () {
        var self = this,
          i,
          o,
          mod,
          name,
          details;
        for (i in self.moduleInfo)
          if (self.moduleInfo.hasOwnProperty(i) && self.moduleInfo[i]) {
            mod = self.moduleInfo[i];
            name = mod.name;
            details = YUI.Env.mods[name] ? YUI.Env.mods[name].details : null;
            if (details) {
              self.moduleInfo[name]._reset = true;
              self.moduleInfo[name].requires = details.requires || [];
              self.moduleInfo[name].optional = details.optional || [];
              self.moduleInfo[name].supersedes = details.supercedes || [];
            }
            if (mod.defaults)
              for (o in mod.defaults)
                if (mod.defaults.hasOwnProperty(o))
                  if (mod[o]) mod[o] = mod.defaults[o];
            mod.langCache = undefined;
            mod.skinCache = undefined;
            if (mod.skinnable) self._addSkin(self.skin.defaultSkin, mod.name);
          }
      },
      REGEX_CSS: /\.css(?:[?;].*)?$/i,
      FILTER_DEFS: {
        RAW: { searchExp: "-min\\.js", replaceStr: ".js" },
        DEBUG: { searchExp: "-min\\.js", replaceStr: "-debug.js" },
        COVERAGE: { searchExp: "-min\\.js", replaceStr: "-coverage.js" },
      },
      _inspectPage: function () {
        var self = this,
          v,
          m,
          req,
          mr,
          i;
        for (i in ON_PAGE)
          if (ON_PAGE.hasOwnProperty(i)) {
            v = ON_PAGE[i];
            if (v.details) {
              m = self.getModuleInfo(v.name);
              req = v.details.requires;
              mr = m && m.requires;
              if (m) {
                if (!m._inspected && req && mr.length !== req.length)
                  delete m.expanded;
              } else m = self.addModule(v.details, i);
              m._inspected = true;
            }
          }
      },
      _requires: function (mod1, mod2) {
        var i,
          rm,
          after_map,
          s,
          m = this.getModuleInfo(mod1),
          other = this.getModuleInfo(mod2);
        if (!m || !other) return false;
        rm = m.expanded_map;
        after_map = m.after_map;
        if (after_map && mod2 in after_map) return true;
        after_map = other.after_map;
        if (after_map && mod1 in after_map) return false;
        s = other.supersedes;
        if (s)
          for (i = 0; i < s.length; i++)
            if (this._requires(mod1, s[i])) return true;
        s = m.supersedes;
        if (s)
          for (i = 0; i < s.length; i++)
            if (this._requires(mod2, s[i])) return false;
        if (rm && mod2 in rm) return true;
        if (m.ext && m.type === CSS && !other.ext && other.type === CSS)
          return true;
        return false;
      },
      _config: function (o) {
        var i,
          j,
          val,
          a,
          f,
          group,
          groupName,
          self = this,
          mods = [],
          mod,
          modInfo;
        if (o)
          for (i in o)
            if (o.hasOwnProperty(i)) {
              val = o[i];
              if (i === "require") self.require(val);
              else if (i === "skin") {
                if (typeof val === "string") {
                  self.skin.defaultSkin = o.skin;
                  val = { defaultSkin: val };
                }
                Y.mix(self.skin, val, true);
              } else if (i === "groups")
                for (j in val) {
                  if (val.hasOwnProperty(j)) {
                    groupName = j;
                    group = val[j];
                    self.addGroup(group, groupName);
                    if (group.aliases)
                      for (a in group.aliases)
                        if (group.aliases.hasOwnProperty(a))
                          self.addAlias(group.aliases[a], a);
                  }
                }
              else if (i === "modules")
                for (j in val) {
                  if (val.hasOwnProperty(j)) self.addModule(val[j], j);
                }
              else if (i === "aliases")
                for (j in val) {
                  if (val.hasOwnProperty(j)) self.addAlias(val[j], j);
                }
              else if (i === "gallery") {
                if (this.groups.gallery.update)
                  this.groups.gallery.update(val, o);
              } else if (i === "yui2" || i === "2in3") {
                if (this.groups.yui2.update)
                  this.groups.yui2.update(o["2in3"], o.yui2, o);
              } else self[i] = val;
            }
        f = self.filter;
        if (L.isString(f)) {
          f = f.toUpperCase();
          self.filterName = f;
          self.filter = self.FILTER_DEFS[f];
          if (f === "DEBUG") self.require("yui-log", "dump");
        }
        if (self.filterName && self.coverage)
          if (
            self.filterName === "COVERAGE" &&
            L.isArray(self.coverage) &&
            self.coverage.length
          ) {
            for (i = 0; i < self.coverage.length; i++) {
              mod = self.coverage[i];
              modInfo = self.getModuleInfo(mod);
              if (modInfo && modInfo.use) mods = mods.concat(modInfo.use);
              else mods.push(mod);
            }
            self.filters = self.filters || {};
            Y.Array.each(mods, function (mod) {
              self.filters[mod] = self.FILTER_DEFS.COVERAGE;
            });
            self.filterName = "RAW";
            self.filter = self.FILTER_DEFS[self.filterName];
          }
      },
      formatSkin: function (skin, mod) {
        var s = SKIN_PREFIX + skin;
        if (mod) s = s + "-" + mod;
        return s;
      },
      _addSkin: function (skin, mod, parent) {
        var pkg,
          name,
          nmod,
          sinf = this.skin,
          mdef = mod && this.getModuleInfo(mod),
          ext = mdef && mdef.ext;
        if (mod) {
          name = this.formatSkin(skin, mod);
          if (!this.getModuleInfo(name)) {
            pkg = mdef.pkg || mod;
            nmod = {
              skin: true,
              name: name,
              group: mdef.group,
              type: "css",
              after: sinf.after,
              path:
                (parent || pkg) + "/" + sinf.base + skin + "/" + mod + ".css",
              ext: ext,
            };
            if (mdef.base) nmod.base = mdef.base;
            if (mdef.configFn) nmod.configFn = mdef.configFn;
            this.addModule(nmod, name);
          }
        }
        return name;
      },
      addAlias: function (use, name) {
        YUI.Env.aliases[name] = use;
        this.addModule({ name: name, use: use });
      },
      addGroup: function (o, name) {
        var mods = o.modules,
          self = this,
          defaultBase = o.defaultBase || Y.config.defaultBase,
          i,
          v;
        name = name || o.name;
        o.name = name;
        self.groups[name] = o;
        if (!o.base && defaultBase && o.root) o.base = defaultBase + o.root;
        if (o.patterns)
          for (i in o.patterns)
            if (o.patterns.hasOwnProperty(i)) {
              o.patterns[i].group = name;
              self.patterns[i] = o.patterns[i];
            }
        if (mods)
          for (i in mods)
            if (mods.hasOwnProperty(i)) {
              v = mods[i];
              if (typeof v === "string") v = { name: i, fullpath: v };
              v.group = name;
              self.addModule(v, i);
            }
      },
      addModule: function (o, name) {
        name = name || o.name;
        if (typeof o === "string") o = { name: name, fullpath: o };
        var subs,
          i,
          l,
          t,
          sup,
          s,
          smod,
          plugins,
          plug,
          j,
          langs,
          packName,
          supName,
          flatSup,
          flatLang,
          lang,
          ret,
          overrides,
          skinname,
          when,
          g,
          p,
          modInfo = this.moduleInfo[name],
          conditions = this.conditions,
          trigger;
        if (modInfo && modInfo.temp) o = Y.merge(modInfo, o);
        o.name = name;
        if (!o || !o.name) return null;
        if (!o.type) {
          o.type = JS;
          p = o.path || o.fullpath;
          if (p && this.REGEX_CSS.test(p)) o.type = CSS;
        }
        if (!o.path && !o.fullpath) o.path = _path(name, name, o.type);
        o.supersedes = o.supersedes || o.use;
        o.ext = "ext" in o ? o.ext : this._internal ? false : true;
        subs = o.submodules;
        this.moduleInfo[name] = o;
        o.requires = o.requires || [];
        if (this.requires)
          for (i = 0; i < this.requires.length; i++)
            o.requires.push(this.requires[i]);
        if (o.group && this.groups && this.groups[o.group]) {
          g = this.groups[o.group];
          if (g.requires)
            for (i = 0; i < g.requires.length; i++)
              o.requires.push(g.requires[i]);
        }
        if (!o.defaults)
          o.defaults = {
            requires: o.requires ? [].concat(o.requires) : null,
            supersedes: o.supersedes ? [].concat(o.supersedes) : null,
            optional: o.optional ? [].concat(o.optional) : null,
          };
        if (o.skinnable && o.ext && o.temp) {
          skinname = this._addSkin(this.skin.defaultSkin, name);
          o.requires.unshift(skinname);
        }
        if (o.requires.length)
          o.requires = this.filterRequires(o.requires) || [];
        if (!o.langPack && o.lang) {
          packName = this.getLangPackName(ROOT_LANG, name);
          smod = this.getModuleInfo(packName);
          if (!smod) this._addLangPack(null, o, packName);
          langs = yArray(o.lang);
          for (j = 0; j < langs.length; j++) {
            lang = langs[j];
            packName = this.getLangPackName(lang, name);
            smod = this.getModuleInfo(packName);
            if (!smod) smod = this._addLangPack(lang, o, packName);
          }
        }
        if (subs) {
          sup = o.supersedes || [];
          l = 0;
          for (i in subs)
            if (subs.hasOwnProperty(i)) {
              s = subs[i];
              s.path = s.path || _path(name, i, o.type);
              s.pkg = name;
              s.group = o.group;
              if (s.supersedes) sup = sup.concat(s.supersedes);
              smod = this.addModule(s, i);
              sup.push(i);
              if (smod.skinnable) {
                o.skinnable = true;
                overrides = this.skin.overrides;
                if (overrides && overrides[i])
                  for (j = 0; j < overrides[i].length; j++) {
                    skinname = this._addSkin(overrides[i][j], i, name);
                    sup.push(skinname);
                  }
                skinname = this._addSkin(this.skin.defaultSkin, i, name);
                sup.push(skinname);
              }
              if (s.lang && s.lang.length) {
                packName = this.getLangPackName(ROOT_LANG, name);
                smod = this.getModuleInfo(packName);
                if (!smod) this._addLangPack(null, o, packName);
                langs = yArray(s.lang);
                for (j = 0; j < langs.length; j++) {
                  lang = langs[j];
                  packName = this.getLangPackName(lang, name);
                  supName = this.getLangPackName(lang, i);
                  smod = this.getModuleInfo(packName);
                  if (!smod) smod = this._addLangPack(lang, o, packName);
                  flatSup = flatSup || yArray.hash(smod.supersedes);
                  if (!(supName in flatSup)) smod.supersedes.push(supName);
                  o.lang = o.lang || [];
                  flatLang = flatLang || yArray.hash(o.lang);
                  if (!(lang in flatLang)) o.lang.push(lang);
                  packName = this.getLangPackName(ROOT_LANG, name);
                  supName = this.getLangPackName(ROOT_LANG, i);
                  smod = this.getModuleInfo(packName);
                  if (!smod) smod = this._addLangPack(lang, o, packName);
                  if (!(supName in flatSup)) smod.supersedes.push(supName);
                }
              }
              l++;
            }
          o.supersedes = yArray.dedupe(sup);
          if (this.allowRollup) o.rollup = l < 4 ? l : Math.min(l - 1, 4);
        }
        plugins = o.plugins;
        if (plugins)
          for (i in plugins)
            if (plugins.hasOwnProperty(i)) {
              plug = plugins[i];
              plug.pkg = name;
              plug.path = plug.path || _path(name, i, o.type);
              plug.requires = plug.requires || [];
              plug.group = o.group;
              this.addModule(plug, i);
              if (o.skinnable) this._addSkin(this.skin.defaultSkin, i, name);
            }
        if (o.condition) {
          t = this._expandAliases(o.condition.trigger);
          for (i = 0; i < t.length; i++) {
            trigger = t[i];
            when = o.condition.when;
            conditions[trigger] = conditions[trigger] || {};
            conditions[trigger][name] = o.condition;
            if (when && when !== "after") {
              if (when === "instead") {
                o.supersedes = o.supersedes || [];
                o.supersedes.push(trigger);
              }
            } else {
              o.after = o.after || [];
              o.after.push(trigger);
            }
          }
        }
        if (o.supersedes) o.supersedes = this.filterRequires(o.supersedes);
        if (o.after) {
          o.after = this.filterRequires(o.after);
          o.after_map = yArray.hash(o.after);
        }
        if (o.configFn) {
          ret = o.configFn(o);
          if (ret === false) {
            delete this.moduleInfo[name];
            delete GLOBAL_ENV._renderedMods[name];
            o = null;
          }
        }
        if (o) {
          if (!GLOBAL_ENV._renderedMods) GLOBAL_ENV._renderedMods = {};
          GLOBAL_ENV._renderedMods[name] = Y.mix(
            GLOBAL_ENV._renderedMods[name] || {},
            o
          );
          GLOBAL_ENV._conditions = conditions;
        }
        return o;
      },
      require: function (what) {
        var a = typeof what === "string" ? yArray(arguments) : what;
        this.dirty = true;
        this.required = Y.merge(
          this.required,
          yArray.hash(this.filterRequires(a))
        );
        this._explodeRollups();
      },
      _explodeRollups: function () {
        var self = this,
          m,
          m2,
          i,
          a,
          v,
          len,
          len2,
          r = self.required;
        if (!self.allowRollup) {
          for (i in r)
            if (r.hasOwnProperty(i)) {
              m = self.getModule(i);
              if (m && m.use) {
                len = m.use.length;
                for (a = 0; a < len; a++) {
                  m2 = self.getModule(m.use[a]);
                  if (m2 && m2.use) {
                    len2 = m2.use.length;
                    for (v = 0; v < len2; v++) r[m2.use[v]] = true;
                  } else r[m.use[a]] = true;
                }
              }
            }
          self.required = r;
        }
      },
      filterRequires: function (r) {
        if (r) {
          if (!Y.Lang.isArray(r)) r = [r];
          r = Y.Array(r);
          var c = [],
            i,
            mod,
            o,
            m;
          for (i = 0; i < r.length; i++) {
            mod = this.getModule(r[i]);
            if (mod && mod.use)
              for (o = 0; o < mod.use.length; o++) {
                m = this.getModule(mod.use[o]);
                if (m && m.use && m.name !== mod.name)
                  c = Y.Array.dedupe([].concat(c, this.filterRequires(m.use)));
                else c.push(mod.use[o]);
              }
            else c.push(r[i]);
          }
          r = c;
        }
        return r;
      },
      _canBeAttached: function (m) {
        m = this.getModule(m);
        if (m && m.test) {
          if (!m.hasOwnProperty("_testResult")) m._testResult = m.test(Y);
          return m._testResult;
        }
        return true;
      },
      getRequires: function (mod) {
        if (!mod) return NO_REQUIREMENTS;
        if (mod._parsed) return mod.expanded || NO_REQUIREMENTS;
        var i,
          m,
          j,
          length,
          add,
          packName,
          lang,
          testresults = this.testresults,
          name = mod.name,
          cond,
          adddef = ON_PAGE[name] && ON_PAGE[name].details,
          optReqs = mod.optionalRequires,
          d,
          go,
          def,
          r,
          old_mod,
          o,
          skinmod,
          skindef,
          skinpar,
          skinname,
          intl = mod.lang || mod.intl,
          ftests = Y.Features && Y.Features.tests.load,
          hash,
          reparse;
        if (mod.temp && adddef) {
          old_mod = mod;
          mod = this.addModule(adddef, name);
          mod.group = old_mod.group;
          mod.pkg = old_mod.pkg;
          delete mod.expanded;
        }
        reparse = !(
          (!this.lang || mod.langCache === this.lang) &&
          mod.skinCache === this.skin.defaultSkin
        );
        if (mod.expanded && !reparse) return mod.expanded;
        if (optReqs)
          for (i = 0, length = optReqs.length; i < length; i++)
            if (this._canBeAttached(optReqs[i])) mod.requires.push(optReqs[i]);
        d = [];
        hash = {};
        r = this.filterRequires(mod.requires);
        if (mod.lang) {
          d.unshift("intl");
          r.unshift("intl");
          intl = true;
        }
        o = this.filterRequires(mod.optional);
        mod._parsed = true;
        mod.langCache = this.lang;
        mod.skinCache = this.skin.defaultSkin;
        for (i = 0; i < r.length; i++)
          if (!hash[r[i]]) {
            d.push(r[i]);
            hash[r[i]] = true;
            m = this.getModule(r[i]);
            if (m) {
              add = this.getRequires(m);
              intl = intl || (m.expanded_map && INTL in m.expanded_map);
              for (j = 0; j < add.length; j++) d.push(add[j]);
            }
          }
        r = this.filterRequires(mod.supersedes);
        if (r)
          for (i = 0; i < r.length; i++)
            if (!hash[r[i]]) {
              if (mod.submodules) d.push(r[i]);
              hash[r[i]] = true;
              m = this.getModule(r[i]);
              if (m) {
                add = this.getRequires(m);
                intl = intl || (m.expanded_map && INTL in m.expanded_map);
                for (j = 0; j < add.length; j++) d.push(add[j]);
              }
            }
        if (o && this.loadOptional)
          for (i = 0; i < o.length; i++)
            if (!hash[o[i]]) {
              d.push(o[i]);
              hash[o[i]] = true;
              m = this.getModuleInfo(o[i]);
              if (m) {
                add = this.getRequires(m);
                intl = intl || (m.expanded_map && INTL in m.expanded_map);
                for (j = 0; j < add.length; j++) d.push(add[j]);
              }
            }
        cond = this.conditions[name];
        if (cond) {
          mod._parsed = false;
          if (testresults && ftests)
            oeach(testresults, function (result, id) {
              var condmod = ftests[id].name;
              if (!hash[condmod] && ftests[id].trigger === name)
                if (result && ftests[id]) {
                  hash[condmod] = true;
                  d.push(condmod);
                }
            });
          else
            for (i in cond)
              if (cond.hasOwnProperty(i))
                if (!hash[i]) {
                  def = cond[i];
                  go =
                    def &&
                    ((!def.ua && !def.test) ||
                      (def.ua && Y.UA[def.ua]) ||
                      (def.test && def.test(Y, r)));
                  if (go) {
                    hash[i] = true;
                    d.push(i);
                    m = this.getModule(i);
                    if (m) {
                      add = this.getRequires(m);
                      for (j = 0; j < add.length; j++) d.push(add[j]);
                    }
                  }
                }
        }
        if (mod.skinnable) {
          skindef = this.skin.overrides;
          for (i in YUI.Env.aliases)
            if (YUI.Env.aliases.hasOwnProperty(i))
              if (Y.Array.indexOf(YUI.Env.aliases[i], name) > -1) skinpar = i;
          if (skindef && (skindef[name] || (skinpar && skindef[skinpar]))) {
            skinname = name;
            if (skindef[skinpar]) skinname = skinpar;
            for (i = 0; i < skindef[skinname].length; i++) {
              skinmod = this._addSkin(skindef[skinname][i], name);
              if (!this.isCSSLoaded(skinmod, this._boot)) d.push(skinmod);
            }
          } else {
            skinmod = this._addSkin(this.skin.defaultSkin, name);
            if (!this.isCSSLoaded(skinmod, this._boot)) d.push(skinmod);
          }
        }
        mod._parsed = false;
        if (intl) {
          if (mod.lang && !mod.langPack && Y.Intl) {
            lang = Y.Intl.lookupBestLang(this.lang || ROOT_LANG, mod.lang);
            packName = this.getLangPackName(lang, name);
            if (packName) d.unshift(packName);
          }
          d.unshift(INTL);
        }
        mod.expanded_map = yArray.hash(d);
        mod.expanded = YObject.keys(mod.expanded_map);
        return mod.expanded;
      },
      isCSSLoaded: function (name, skip) {
        if (!name || !YUI.Env.cssStampEl || (!skip && this.ignoreRegistered))
          return false;
        var el = YUI.Env.cssStampEl,
          ret = false,
          mod = YUI.Env._cssLoaded[name],
          style = el.currentStyle;
        if (mod !== undefined) return mod;
        el.className = name;
        if (!style) style = Y.config.doc.defaultView.getComputedStyle(el, null);
        if (style && style.display === "none") ret = true;
        el.className = "";
        YUI.Env._cssLoaded[name] = ret;
        return ret;
      },
      getProvides: function (name) {
        var m = this.getModule(name),
          o,
          s;
        if (!m) return NOT_FOUND;
        if (m && !m.provides) {
          o = {};
          s = m.supersedes;
          if (s)
            yArray.each(
              s,
              function (v) {
                Y.mix(o, this.getProvides(v));
              },
              this
            );
          o[name] = true;
          m.provides = o;
        }
        return m.provides;
      },
      calculate: function (o, type) {
        if (o || type || this.dirty) {
          if (o) this._config(o);
          if (!this._init) this._setup();
          this._explode();
          if (this.allowRollup) this._rollup();
          else this._explodeRollups();
          this._reduce();
          this._sort();
        }
      },
      _addLangPack: function (lang, m, packName) {
        var name = m.name,
          packPath,
          conf,
          existing = this.getModuleInfo(packName);
        if (!existing) {
          packPath = _path(m.pkg || name, packName, JS, true);
          conf = {
            path: packPath,
            intl: true,
            langPack: true,
            ext: m.ext,
            group: m.group,
            supersedes: [],
          };
          if (m.root) conf.root = m.root;
          if (m.base) conf.base = m.base;
          if (m.configFn) conf.configFn = m.configFn;
          this.addModule(conf, packName);
          if (lang) {
            Y.Env.lang = Y.Env.lang || {};
            Y.Env.lang[lang] = Y.Env.lang[lang] || {};
            Y.Env.lang[lang][name] = true;
          }
        }
        return this.getModuleInfo(packName);
      },
      _setup: function () {
        var info = this.moduleInfo,
          name,
          i,
          j,
          m,
          l,
          packName;
        for (name in info)
          if (info.hasOwnProperty(name)) {
            m = info[name];
            if (m) {
              m.requires = yArray.dedupe(m.requires);
              if (m.lang) {
                packName = this.getLangPackName(ROOT_LANG, name);
                this._addLangPack(null, m, packName);
              }
            }
          }
        l = {};
        if (!this.ignoreRegistered) Y.mix(l, GLOBAL_ENV.mods);
        if (this.ignore) Y.mix(l, yArray.hash(this.ignore));
        for (j in l) if (l.hasOwnProperty(j)) Y.mix(l, this.getProvides(j));
        if (this.force)
          for (i = 0; i < this.force.length; i++)
            if (this.force[i] in l) delete l[this.force[i]];
        Y.mix(this.loaded, l);
        this._init = true;
      },
      getLangPackName: function (lang, mname) {
        return "lang/" + mname + (lang ? "_" + lang : "");
      },
      _explode: function () {
        var r = this.required,
          m,
          reqs,
          done = {},
          self = this,
          name,
          expound;
        self.dirty = false;
        self._explodeRollups();
        r = self.required;
        for (name in r)
          if (r.hasOwnProperty(name))
            if (!done[name]) {
              done[name] = true;
              m = self.getModule(name);
              if (m) {
                expound = m.expound;
                if (expound) {
                  r[expound] = self.getModule(expound);
                  reqs = self.getRequires(r[expound]);
                  Y.mix(r, yArray.hash(reqs));
                }
                reqs = self.getRequires(m);
                Y.mix(r, yArray.hash(reqs));
              }
            }
      },
      _patternTest: function (mname, pname) {
        return mname.indexOf(pname) > -1;
      },
      getModule: function (mname) {
        if (!mname) return null;
        var p,
          found,
          pname,
          m = this.getModuleInfo(mname),
          patterns = this.patterns;
        if (!m || (m && m.ext))
          for (pname in patterns)
            if (patterns.hasOwnProperty(pname)) {
              p = patterns[pname];
              if (!p.test) p.test = this._patternTest;
              if (p.test(mname, pname)) {
                found = p;
                break;
              }
            }
        if (!m) {
          if (found)
            if (p.action) p.action.call(this, mname, pname);
            else {
              m = this.addModule(
                Y.merge(found, { test: void 0, temp: true }),
                mname
              );
              if (m && found.configFn) m.configFn = found.configFn;
            }
        } else if (found && m && found.configFn && !m.configFn) {
          m.configFn = found.configFn;
          m.configFn(m);
        }
        return m;
      },
      _rollup: function () {},
      _reduce: function (r) {
        r = r || this.required;
        var i,
          j,
          s,
          m,
          type = this.loadType,
          ignore = this.ignore ? yArray.hash(this.ignore) : false;
        for (i in r)
          if (r.hasOwnProperty(i)) {
            m = this.getModule(i);
            if (
              ((this.loaded[i] || ON_PAGE[i]) &&
                !this.forceMap[i] &&
                !this.ignoreRegistered) ||
              (type && m && m.type !== type)
            )
              delete r[i];
            if (ignore && ignore[i]) delete r[i];
            s = m && m.supersedes;
            if (s) for (j = 0; j < s.length; j++) if (s[j] in r) delete r[s[j]];
          }
        return r;
      },
      _finish: function (msg, success) {
        _queue.running = false;
        var onEnd = this.onEnd;
        if (onEnd)
          onEnd.call(this.context, {
            msg: msg,
            data: this.data,
            success: success,
          });
        this._continue();
      },
      _onSuccess: function () {
        var self = this,
          skipped = Y.merge(self.skipped),
          fn,
          failed = [],
          rreg = self.requireRegistration,
          success,
          msg,
          i,
          mod;
        for (i in skipped)
          if (skipped.hasOwnProperty(i)) delete self.inserted[i];
        self.skipped = {};
        for (i in self.inserted)
          if (self.inserted.hasOwnProperty(i)) {
            mod = self.getModule(i);
            if (mod && rreg && mod.type === JS && !(i in YUI.Env.mods))
              failed.push(i);
            else Y.mix(self.loaded, self.getProvides(i));
          }
        fn = self.onSuccess;
        msg = failed.length ? "notregistered" : "success";
        success = !failed.length;
        if (fn)
          fn.call(self.context, {
            msg: msg,
            data: self.data,
            success: success,
            failed: failed,
            skipped: skipped,
          });
        self._finish(msg, success);
      },
      _onProgress: function (e) {
        var self = this,
          i;
        if (e.data && e.data.length)
          for (i = 0; i < e.data.length; i++)
            e.data[i] = self.getModule(e.data[i].name);
        if (self.onProgress)
          self.onProgress.call(self.context, { name: e.url, data: e.data });
      },
      _onFailure: function (o) {
        var f = this.onFailure,
          msg = [],
          i = 0,
          len = o.errors.length;
        for (i; i < len; i++) msg.push(o.errors[i].error);
        msg = msg.join(",");
        if (f)
          f.call(this.context, { msg: msg, data: this.data, success: false });
        this._finish(msg, false);
      },
      _onTimeout: function (transaction) {
        var f = this.onTimeout;
        if (f)
          f.call(this.context, {
            msg: "timeout",
            data: this.data,
            success: false,
            transaction: transaction,
          });
      },
      _sort: function () {
        var name,
          required = this.required,
          visited = {};
        this.sorted = [];
        for (name in required)
          if (!visited[name] && required.hasOwnProperty(name))
            this._visit(name, visited);
      },
      _visit: function (name, visited) {
        var required,
          condition,
          moduleInfo,
          dependency,
          dependencies,
          trigger,
          isAfter,
          i,
          l;
        visited[name] = true;
        required = this.required;
        moduleInfo = this.moduleInfo[name];
        condition = this.conditions[name] || {};
        if (moduleInfo) {
          dependencies = moduleInfo.expanded || moduleInfo.requires;
          for (i = 0, l = dependencies.length; i < l; ++i) {
            dependency = dependencies[i];
            trigger = condition[dependency];
            isAfter = trigger && (!trigger.when || trigger.when === "after");
            if (required[dependency] && !visited[dependency] && !isAfter)
              this._visit(dependency, visited);
          }
        }
        this.sorted.push(name);
      },
      _insert: function (source, o, type, skipcalc) {
        if (source) this._config(source);
        var modules = this.resolve(!skipcalc),
          self = this,
          comp = 0,
          actions = 0,
          mods = {},
          deps,
          complete;
        self._refetch = [];
        if (type) modules[type === JS ? CSS : JS] = [];
        if (!self.fetchCSS) modules.css = [];
        if (modules.js.length) comp++;
        if (modules.css.length) comp++;
        complete = function (d) {
          actions++;
          var errs = {},
            i = 0,
            o = 0,
            u = "",
            fn,
            modName,
            resMods;
          if (d && d.errors)
            for (i = 0; i < d.errors.length; i++) {
              if (d.errors[i].request) u = d.errors[i].request.url;
              else u = d.errors[i];
              errs[u] = u;
            }
          if (d && d.data && d.data.length && d.type === "success")
            for (i = 0; i < d.data.length; i++) {
              self.inserted[d.data[i].name] = true;
              if (d.data[i].lang || d.data[i].skinnable) {
                delete self.inserted[d.data[i].name];
                self._refetch.push(d.data[i].name);
              }
            }
          if (actions === comp) {
            self._loading = null;
            if (self._refetch.length) {
              for (i = 0; i < self._refetch.length; i++) {
                deps = self.getRequires(self.getModule(self._refetch[i]));
                for (o = 0; o < deps.length; o++)
                  if (!self.inserted[deps[o]]) mods[deps[o]] = deps[o];
              }
              mods = Y.Object.keys(mods);
              if (mods.length) {
                self.require(mods);
                resMods = self.resolve(true);
                if (resMods.cssMods.length) {
                  for (i = 0; i < resMods.cssMods.length; i++) {
                    modName = resMods.cssMods[i].name;
                    delete YUI.Env._cssLoaded[modName];
                    if (self.isCSSLoaded(modName)) {
                      self.inserted[modName] = true;
                      delete self.required[modName];
                    }
                  }
                  self.sorted = [];
                  self._sort();
                }
                d = null;
                self._insert();
              }
            }
            if (d && d.fn) {
              fn = d.fn;
              delete d.fn;
              fn.call(self, d);
            }
          }
        };
        this._loading = true;
        if (!modules.js.length && !modules.css.length) {
          actions = -1;
          complete({ fn: self._onSuccess });
          return;
        }
        if (modules.css.length)
          Y.Get.css(modules.css, {
            data: modules.cssMods,
            attributes: self.cssAttributes,
            insertBefore: self.insertBefore,
            charset: self.charset,
            timeout: self.timeout,
            context: self,
            onProgress: function (e) {
              self._onProgress.call(self, e);
            },
            onTimeout: function (d) {
              self._onTimeout.call(self, d);
            },
            onSuccess: function (d) {
              d.type = "success";
              d.fn = self._onSuccess;
              complete.call(self, d);
            },
            onFailure: function (d) {
              d.type = "failure";
              d.fn = self._onFailure;
              complete.call(self, d);
            },
          });
        if (modules.js.length)
          Y.Get.js(modules.js, {
            data: modules.jsMods,
            insertBefore: self.insertBefore,
            attributes: self.jsAttributes,
            charset: self.charset,
            timeout: self.timeout,
            autopurge: false,
            context: self,
            async: self.async,
            onProgress: function (e) {
              self._onProgress.call(self, e);
            },
            onTimeout: function (d) {
              self._onTimeout.call(self, d);
            },
            onSuccess: function (d) {
              d.type = "success";
              d.fn = self._onSuccess;
              complete.call(self, d);
            },
            onFailure: function (d) {
              d.type = "failure";
              d.fn = self._onFailure;
              complete.call(self, d);
            },
          });
      },
      _continue: function () {
        if (!_queue.running && _queue.size() > 0) {
          _queue.running = true;
          _queue.next()();
        }
      },
      insert: function (o, type, skipsort) {
        var self = this,
          copy = Y.merge(this);
        delete copy.require;
        delete copy.dirty;
        _queue.add(function () {
          self._insert(copy, o, type, skipsort);
        });
        this._continue();
      },
      loadNext: function () {
        return;
      },
      _filter: function (u, name, group) {
        var f = this.filter,
          hasFilter = name && name in this.filters,
          modFilter = hasFilter && this.filters[name],
          groupName = group || (this.getModuleInfo(name) || {}).group || null;
        if (
          groupName &&
          this.groups[groupName] &&
          this.groups[groupName].filter
        ) {
          modFilter = this.groups[groupName].filter;
          hasFilter = true;
        }
        if (u) {
          if (hasFilter)
            f = L.isString(modFilter)
              ? this.FILTER_DEFS[modFilter.toUpperCase()] || null
              : modFilter;
          if (f) u = u.replace(new RegExp(f.searchExp, "g"), f.replaceStr);
        }
        return u;
      },
      _url: function (path, name, base) {
        return this._filter((base || this.base || "") + path, name);
      },
      resolve: function (calc, sorted) {
        var self = this,
          resolved = { js: [], jsMods: [], css: [], cssMods: [] },
          addSingle,
          usePathogen = Y.config.comboLoader && Y.config.customComboBase;
        if (
          self.skin.overrides ||
          self.skin.defaultSkin !== DEFAULT_SKIN ||
          self.ignoreRegistered
        )
          self._resetModules();
        if (calc) self.calculate();
        sorted = sorted || self.sorted;
        addSingle = function (mod) {
          if (mod) {
            var group = (mod.group && self.groups[mod.group]) || NOT_FOUND,
              url;
            if (group.async === false) mod.async = group.async;
            url = mod.fullpath
              ? self._filter(mod.fullpath, mod.name)
              : self._url(mod.path, mod.name, group.base || mod.base);
            if (mod.attributes || mod.async === false) {
              url = { url: url, async: mod.async };
              if (mod.attributes) url.attributes = mod.attributes;
            }
            resolved[mod.type].push(url);
            resolved[mod.type + "Mods"].push(mod);
          } else;
        };
        var inserted = self.ignoreRegistered ? {} : self.inserted,
          comboSources,
          maxURLLength,
          comboMeta,
          comboBase,
          comboSep,
          group,
          mod,
          len,
          i,
          hasComboModule = false;
        for (i = 0, len = sorted.length; i < len; i++) {
          mod = self.getModule(sorted[i]);
          if (!mod || inserted[mod.name]) continue;
          group = self.groups[mod.group];
          comboBase = self.comboBase;
          if (group) {
            if (!group.combine || mod.fullpath) {
              addSingle(mod);
              continue;
            }
            mod.combine = true;
            if (typeof group.root === "string") mod.root = group.root;
            comboBase = group.comboBase || comboBase;
            comboSep = group.comboSep;
            maxURLLength = group.maxURLLength;
          } else if (!self.combine) {
            addSingle(mod);
            continue;
          }
          if (!mod.combine && mod.ext) {
            addSingle(mod);
            continue;
          }
          hasComboModule = true;
          comboSources = comboSources || {};
          comboSources[comboBase] = comboSources[comboBase] || {
            js: [],
            jsMods: [],
            css: [],
            cssMods: [],
          };
          comboMeta = comboSources[comboBase];
          comboMeta.group = mod.group;
          comboMeta.comboSep = comboSep || self.comboSep;
          comboMeta.maxURLLength = maxURLLength || self.maxURLLength;
          comboMeta[mod.type + "Mods"].push(mod);
          if (mod.type === JS || mod.type === CSS)
            resolved[mod.type + "Mods"].push(mod);
        }
        if (hasComboModule)
          if (usePathogen)
            resolved = this._pathogenEncodeComboSources(resolved);
          else resolved = this._encodeComboSources(resolved, comboSources);
        return resolved;
      },
      _encodeComboSources: function (resolved, comboSources) {
        var fragSubset,
          modules,
          tmpBase,
          baseLen,
          frags,
          frag,
          type,
          mod,
          maxURLLength,
          comboBase,
          comboMeta,
          comboSep,
          i,
          len,
          self = this;
        for (comboBase in comboSources)
          if (comboSources.hasOwnProperty(comboBase)) {
            comboMeta = comboSources[comboBase];
            comboSep = comboMeta.comboSep;
            maxURLLength = comboMeta.maxURLLength;
            for (type in comboMeta)
              if (type === JS || type === CSS) {
                modules = comboMeta[type + "Mods"];
                frags = [];
                for (i = 0, len = modules.length; i < len; i += 1) {
                  mod = modules[i];
                  frag =
                    (typeof mod.root === "string" ? mod.root : self.root) +
                    (mod.path || mod.fullpath);
                  frags.push(self._filter(frag, mod.name));
                }
                tmpBase = comboBase + frags.join(comboSep);
                baseLen = tmpBase.length;
                if (maxURLLength <= comboBase.length)
                  maxURLLength = MAX_URL_LENGTH;
                if (frags.length)
                  if (baseLen > maxURLLength) {
                    fragSubset = [];
                    for (i = 0, len = frags.length; i < len; i++) {
                      fragSubset.push(frags[i]);
                      tmpBase = comboBase + fragSubset.join(comboSep);
                      if (tmpBase.length > maxURLLength) {
                        frag = fragSubset.pop();
                        tmpBase = comboBase + fragSubset.join(comboSep);
                        resolved[type].push(
                          self._filter(tmpBase, null, comboMeta.group)
                        );
                        fragSubset = [];
                        if (frag) fragSubset.push(frag);
                      }
                    }
                    if (fragSubset.length) {
                      tmpBase = comboBase + fragSubset.join(comboSep);
                      resolved[type].push(
                        self._filter(tmpBase, null, comboMeta.group)
                      );
                    }
                  } else
                    resolved[type].push(
                      self._filter(tmpBase, null, comboMeta.group)
                    );
              }
          }
        return resolved;
      },
      load: function (cb) {
        if (!cb) return;
        var self = this,
          out = self.resolve(true);
        self.data = out;
        self.onEnd = function () {
          cb.apply(self.context || self, arguments);
        };
        self.insert();
      },
    };
  },
  "patched-v3.18.1",
  { requires: ["get", "features"] }
);
YUI.add(
  "loader-rollup",
  function (Y, NAME) {
    Y.Loader.prototype._rollup = function () {
      var i,
        j,
        m,
        s,
        r = this.required,
        roll,
        info = this.moduleInfo,
        rolled,
        c,
        smod;
      if (this.dirty || !this.rollups) {
        this.rollups = {};
        for (i in info)
          if (info.hasOwnProperty(i)) {
            m = this.getModule(i);
            if (m && m.rollup) this.rollups[i] = m;
          }
      }
      for (;;) {
        rolled = false;
        for (i in this.rollups)
          if (this.rollups.hasOwnProperty(i))
            if (!r[i] && (!this.loaded[i] || this.forceMap[i])) {
              m = this.getModule(i);
              s = m.supersedes || [];
              roll = false;
              if (!m.rollup) continue;
              c = 0;
              for (j = 0; j < s.length; j++) {
                smod = info[s[j]];
                if (this.loaded[s[j]] && !this.forceMap[s[j]]) {
                  roll = false;
                  break;
                } else if (r[s[j]] && m.type === smod.type) {
                  c++;
                  roll = c >= m.rollup;
                  if (roll) break;
                }
              }
              if (roll) {
                r[i] = true;
                rolled = true;
                this.getRequires(m);
              }
            }
        if (!rolled) break;
      }
    };
  },
  "patched-v3.18.1",
  { requires: ["loader-base"] }
);
YUI.add(
  "loader-yui3",
  function (Y, NAME) {
    YUI.Env[Y.version].modules = YUI.Env[Y.version].modules || {};
    Y.mix(YUI.Env[Y.version].modules, {
      "align-plugin": { requires: ["node-screen", "node-pluginhost"] },
      anim: {
        use: [
          "anim-base",
          "anim-color",
          "anim-curve",
          "anim-easing",
          "anim-node-plugin",
          "anim-scroll",
          "anim-xy",
        ],
      },
      "anim-base": { requires: ["base-base", "node-style", "color-base"] },
      "anim-color": { requires: ["anim-base"] },
      "anim-curve": { requires: ["anim-xy"] },
      "anim-easing": { requires: ["anim-base"] },
      "anim-node-plugin": { requires: ["node-pluginhost", "anim-base"] },
      "anim-scroll": { requires: ["anim-base"] },
      "anim-shape": {
        requires: ["anim-base", "anim-easing", "anim-color", "matrix"],
      },
      "anim-shape-transform": { use: ["anim-shape"] },
      "anim-xy": { requires: ["anim-base", "node-screen"] },
      app: {
        use: [
          "app-base",
          "app-content",
          "app-transitions",
          "lazy-model-list",
          "model",
          "model-list",
          "model-sync-rest",
          "model-sync-local",
          "router",
          "view",
          "view-node-map",
        ],
      },
      "app-base": {
        requires: ["classnamemanager", "pjax-base", "router", "view"],
      },
      "app-content": { requires: ["app-base", "pjax-content"] },
      "app-transitions": { requires: ["app-base"] },
      "app-transitions-css": { type: "css" },
      "app-transitions-native": {
        condition: {
          name: "app-transitions-native",
          test: function (Y) {
            var doc = Y.config.doc,
              node = doc ? doc.documentElement : null;
            if (node && node.style)
              return (
                "MozTransition" in node.style ||
                "WebkitTransition" in node.style ||
                "transition" in node.style
              );
            return false;
          },
          trigger: "app-transitions",
        },
        requires: [
          "app-transitions",
          "app-transitions-css",
          "parallel",
          "transition",
        ],
      },
      "array-extras": { requires: ["yui-base"] },
      "array-invoke": { requires: ["yui-base"] },
      arraylist: { requires: ["yui-base"] },
      "arraylist-add": { requires: ["arraylist"] },
      "arraylist-filter": { requires: ["arraylist"] },
      arraysort: { requires: ["yui-base"] },
      "async-queue": { requires: ["event-custom"] },
      attribute: { use: ["attribute-base", "attribute-complex"] },
      "attribute-base": {
        requires: [
          "attribute-core",
          "attribute-observable",
          "attribute-extras",
        ],
      },
      "attribute-complex": { requires: ["attribute-base"] },
      "attribute-core": { requires: ["oop"] },
      "attribute-events": { use: ["attribute-observable"] },
      "attribute-extras": { requires: ["oop"] },
      "attribute-observable": { requires: ["event-custom"] },
      autocomplete: {
        use: [
          "autocomplete-base",
          "autocomplete-sources",
          "autocomplete-list",
          "autocomplete-plugin",
        ],
      },
      "autocomplete-base": {
        optional: ["autocomplete-sources"],
        requires: [
          "array-extras",
          "base-build",
          "escape",
          "event-valuechange",
          "node-base",
        ],
      },
      "autocomplete-filters": { requires: ["array-extras", "text-wordbreak"] },
      "autocomplete-filters-accentfold": {
        requires: ["array-extras", "text-accentfold", "text-wordbreak"],
      },
      "autocomplete-highlighters": {
        requires: ["array-extras", "highlight-base"],
      },
      "autocomplete-highlighters-accentfold": {
        requires: ["array-extras", "highlight-accentfold"],
      },
      "autocomplete-list": {
        after: ["autocomplete-sources"],
        lang: ["en", "es", "hu", "it"],
        requires: [
          "autocomplete-base",
          "event-resize",
          "node-screen",
          "selector-css3",
          "shim-plugin",
          "widget",
          "widget-position",
          "widget-position-align",
        ],
        skinnable: true,
      },
      "autocomplete-list-keys": {
        condition: {
          name: "autocomplete-list-keys",
          test: function (Y) {
            return !(Y.UA.ios || Y.UA.android);
          },
          trigger: "autocomplete-list",
        },
        requires: ["autocomplete-list", "base-build"],
      },
      "autocomplete-plugin": {
        requires: ["autocomplete-list", "node-pluginhost"],
      },
      "autocomplete-sources": {
        optional: ["io-base", "json-parse", "jsonp", "yql"],
        requires: ["autocomplete-base"],
      },
      axes: {
        use: ["axis-numeric", "axis-category", "axis-time", "axis-stacked"],
      },
      "axes-base": {
        use: [
          "axis-numeric-base",
          "axis-category-base",
          "axis-time-base",
          "axis-stacked-base",
        ],
      },
      axis: {
        requires: [
          "dom",
          "widget",
          "widget-position",
          "widget-stack",
          "graphics",
          "axis-base",
        ],
      },
      "axis-base": {
        requires: [
          "classnamemanager",
          "datatype-number",
          "datatype-date",
          "base",
          "event-custom",
        ],
      },
      "axis-category": { requires: ["axis", "axis-category-base"] },
      "axis-category-base": { requires: ["axis-base"] },
      "axis-numeric": { requires: ["axis", "axis-numeric-base"] },
      "axis-numeric-base": { requires: ["axis-base"] },
      "axis-stacked": { requires: ["axis-numeric", "axis-stacked-base"] },
      "axis-stacked-base": { requires: ["axis-numeric-base"] },
      "axis-time": { requires: ["axis", "axis-time-base"] },
      "axis-time-base": { requires: ["axis-base"] },
      base: { use: ["base-base", "base-pluginhost", "base-build"] },
      "base-base": {
        requires: ["attribute-base", "base-core", "base-observable"],
      },
      "base-build": { requires: ["base-base"] },
      "base-core": { requires: ["attribute-core"] },
      "base-observable": { requires: ["attribute-observable", "base-core"] },
      "base-pluginhost": { requires: ["base-base", "pluginhost"] },
      button: { requires: ["button-core", "cssbutton", "widget"] },
      "button-core": {
        requires: ["attribute-core", "classnamemanager", "node-base", "escape"],
      },
      "button-group": { requires: ["button-plugin", "cssbutton", "widget"] },
      "button-plugin": {
        requires: ["button-core", "cssbutton", "node-pluginhost"],
      },
      cache: { use: ["cache-base", "cache-offline", "cache-plugin"] },
      "cache-base": { requires: ["base"] },
      "cache-offline": { requires: ["cache-base", "json"] },
      "cache-plugin": { requires: ["plugin", "cache-base"] },
      calendar: {
        requires: ["calendar-base", "calendarnavigator"],
        skinnable: true,
      },
      "calendar-base": {
        lang: [
          "ca",
          "ca-ES",
          "de",
          "en",
          "es",
          "es-AR",
          "eu-ES",
          "fr",
          "hu",
          "it",
          "ja",
          "nb-NO",
          "nl",
          "pt-BR",
          "ru",
          "zh-Hans",
          "zh-Hans-CN",
          "zh-Hant",
          "zh-Hant-HK",
          "zh-HANT-TW",
        ],
        requires: ["widget", "datatype-date", "datatype-date-math", "cssgrids"],
        skinnable: true,
      },
      calendarnavigator: {
        lang: ["en", "es", "es-AR", "eu-ES"],
        requires: ["plugin", "classnamemanager", "datatype-date", "node"],
        skinnable: true,
      },
      charts: { use: ["charts-base"] },
      "charts-base": {
        requires: [
          "dom",
          "event-mouseenter",
          "event-touch",
          "graphics-group",
          "axes",
          "series-pie",
          "series-line",
          "series-marker",
          "series-area",
          "series-spline",
          "series-column",
          "series-bar",
          "series-areaspline",
          "series-combo",
          "series-combospline",
          "series-line-stacked",
          "series-marker-stacked",
          "series-area-stacked",
          "series-spline-stacked",
          "series-column-stacked",
          "series-bar-stacked",
          "series-areaspline-stacked",
          "series-combo-stacked",
          "series-combospline-stacked",
        ],
      },
      "charts-legend": { requires: ["charts-base"] },
      classnamemanager: { requires: ["yui-base"] },
      "clickable-rail": { requires: ["slider-base"] },
      collection: {
        use: [
          "array-extras",
          "arraylist",
          "arraylist-add",
          "arraylist-filter",
          "array-invoke",
        ],
      },
      color: { use: ["color-base", "color-hsl", "color-harmony"] },
      "color-base": { requires: ["yui-base"] },
      "color-harmony": { requires: ["color-hsl"] },
      "color-hsl": { requires: ["color-base"] },
      "color-hsv": { requires: ["color-base"] },
      console: {
        lang: ["en", "es", "hu", "it", "ja"],
        requires: ["yui-log", "widget"],
        skinnable: true,
      },
      "console-filters": { requires: ["plugin", "console"], skinnable: true },
      "content-editable": {
        requires: ["node-base", "editor-selection", "stylesheet", "plugin"],
      },
      controller: { use: ["router"] },
      cookie: { requires: ["yui-base"] },
      "createlink-base": { requires: ["editor-base"] },
      cssbase: {
        after: [
          "cssreset",
          "cssfonts",
          "cssgrids",
          "cssreset-context",
          "cssfonts-context",
          "cssgrids-context",
        ],
        type: "css",
      },
      "cssbase-context": {
        after: [
          "cssreset",
          "cssfonts",
          "cssgrids",
          "cssreset-context",
          "cssfonts-context",
          "cssgrids-context",
        ],
        type: "css",
      },
      cssbutton: { type: "css" },
      cssfonts: { type: "css" },
      "cssfonts-context": { type: "css" },
      cssgrids: { optional: ["cssnormalize"], type: "css" },
      "cssgrids-base": { optional: ["cssnormalize"], type: "css" },
      "cssgrids-responsive": {
        optional: ["cssnormalize"],
        requires: ["cssgrids", "cssgrids-responsive-base"],
        type: "css",
      },
      "cssgrids-units": {
        optional: ["cssnormalize"],
        requires: ["cssgrids-base"],
        type: "css",
      },
      cssnormalize: { type: "css" },
      "cssnormalize-context": { type: "css" },
      cssreset: { type: "css" },
      "cssreset-context": { type: "css" },
      dataschema: {
        use: [
          "dataschema-base",
          "dataschema-json",
          "dataschema-xml",
          "dataschema-array",
          "dataschema-text",
        ],
      },
      "dataschema-array": { requires: ["dataschema-base"] },
      "dataschema-base": { requires: ["base"] },
      "dataschema-json": { requires: ["dataschema-base", "json"] },
      "dataschema-text": { requires: ["dataschema-base"] },
      "dataschema-xml": { requires: ["dataschema-base"] },
      datasource: {
        use: [
          "datasource-local",
          "datasource-io",
          "datasource-get",
          "datasource-function",
          "datasource-cache",
          "datasource-jsonschema",
          "datasource-xmlschema",
          "datasource-arrayschema",
          "datasource-textschema",
          "datasource-polling",
        ],
      },
      "datasource-arrayschema": {
        requires: ["datasource-local", "plugin", "dataschema-array"],
      },
      "datasource-cache": {
        requires: ["datasource-local", "plugin", "cache-base"],
      },
      "datasource-function": { requires: ["datasource-local"] },
      "datasource-get": { requires: ["datasource-local", "get"] },
      "datasource-io": { requires: ["datasource-local", "io-base"] },
      "datasource-jsonschema": {
        requires: ["datasource-local", "plugin", "dataschema-json"],
      },
      "datasource-local": { requires: ["base"] },
      "datasource-polling": { requires: ["datasource-local"] },
      "datasource-textschema": {
        requires: ["datasource-local", "plugin", "dataschema-text"],
      },
      "datasource-xmlschema": {
        requires: [
          "datasource-local",
          "plugin",
          "datatype-xml",
          "dataschema-xml",
        ],
      },
      datatable: {
        use: [
          "datatable-core",
          "datatable-table",
          "datatable-head",
          "datatable-body",
          "datatable-base",
          "datatable-column-widths",
          "datatable-message",
          "datatable-mutable",
          "datatable-sort",
          "datatable-datasource",
        ],
      },
      "datatable-base": {
        requires: [
          "datatable-core",
          "datatable-table",
          "datatable-head",
          "datatable-body",
          "base-build",
          "widget",
        ],
        skinnable: true,
      },
      "datatable-body": {
        requires: ["datatable-core", "view", "classnamemanager"],
      },
      "datatable-column-widths": { requires: ["datatable-base"] },
      "datatable-core": {
        requires: ["escape", "model-list", "node-event-delegate"],
      },
      "datatable-datasource": {
        requires: ["datatable-base", "plugin", "datasource-local"],
      },
      "datatable-foot": { requires: ["datatable-core", "view"] },
      "datatable-formatters": {
        requires: [
          "datatable-body",
          "datatype-number-format",
          "datatype-date-format",
          "escape",
        ],
      },
      "datatable-head": {
        requires: ["datatable-core", "view", "classnamemanager"],
      },
      "datatable-highlight": {
        requires: ["datatable-base", "event-hover"],
        skinnable: true,
      },
      "datatable-keynav": { requires: ["datatable-base"] },
      "datatable-message": {
        lang: ["en", "fr", "es", "hu", "it"],
        requires: ["datatable-base"],
        skinnable: true,
      },
      "datatable-mutable": { requires: ["datatable-base"] },
      "datatable-paginator": {
        lang: ["en", "fr"],
        requires: [
          "model",
          "view",
          "paginator-core",
          "datatable-foot",
          "datatable-paginator-templates",
        ],
        skinnable: true,
      },
      "datatable-paginator-templates": { requires: ["template"] },
      "datatable-scroll": {
        requires: ["datatable-base", "datatable-column-widths", "dom-screen"],
        skinnable: true,
      },
      "datatable-sort": {
        lang: ["en", "fr", "es", "hu"],
        requires: ["datatable-base"],
        skinnable: true,
      },
      "datatable-table": {
        requires: [
          "datatable-core",
          "datatable-head",
          "datatable-body",
          "view",
          "classnamemanager",
        ],
      },
      datatype: { use: ["datatype-date", "datatype-number", "datatype-xml"] },
      "datatype-date": {
        use: [
          "datatype-date-parse",
          "datatype-date-format",
          "datatype-date-math",
        ],
      },
      "datatype-date-format": {
        lang: [
          "ar",
          "ar-JO",
          "ca",
          "ca-ES",
          "da",
          "da-DK",
          "de",
          "de-AT",
          "de-DE",
          "el",
          "el-GR",
          "en",
          "en-AU",
          "en-CA",
          "en-GB",
          "en-IE",
          "en-IN",
          "en-JO",
          "en-MY",
          "en-NZ",
          "en-PH",
          "en-SG",
          "en-US",
          "es",
          "es-AR",
          "es-BO",
          "es-CL",
          "es-CO",
          "es-EC",
          "es-ES",
          "es-MX",
          "es-PE",
          "es-PY",
          "es-US",
          "es-UY",
          "es-VE",
          "fi",
          "fi-FI",
          "fr",
          "fr-BE",
          "fr-CA",
          "fr-FR",
          "hi",
          "hi-IN",
          "hu",
          "id",
          "id-ID",
          "it",
          "it-IT",
          "ja",
          "ja-JP",
          "ko",
          "ko-KR",
          "ms",
          "ms-MY",
          "nb",
          "nb-NO",
          "nl",
          "nl-BE",
          "nl-NL",
          "pl",
          "pl-PL",
          "pt",
          "pt-BR",
          "ro",
          "ro-RO",
          "ru",
          "ru-RU",
          "sv",
          "sv-SE",
          "th",
          "th-TH",
          "tr",
          "tr-TR",
          "vi",
          "vi-VN",
          "zh-Hans",
          "zh-Hans-CN",
          "zh-Hant",
          "zh-Hant-HK",
          "zh-Hant-TW",
        ],
      },
      "datatype-date-math": { requires: ["yui-base"] },
      "datatype-date-parse": {},
      "datatype-number": {
        use: ["datatype-number-parse", "datatype-number-format"],
      },
      "datatype-number-format": {},
      "datatype-number-parse": { requires: ["escape"] },
      "datatype-xml": { use: ["datatype-xml-parse", "datatype-xml-format"] },
      "datatype-xml-format": {},
      "datatype-xml-parse": {},
      dd: {
        use: [
          "dd-ddm-base",
          "dd-ddm",
          "dd-ddm-drop",
          "dd-drag",
          "dd-proxy",
          "dd-constrain",
          "dd-drop",
          "dd-scroll",
          "dd-delegate",
        ],
      },
      "dd-constrain": { requires: ["dd-drag"] },
      "dd-ddm": { requires: ["dd-ddm-base", "event-resize"] },
      "dd-ddm-base": {
        requires: ["node", "base", "yui-throttle", "classnamemanager"],
      },
      "dd-ddm-drop": { requires: ["dd-ddm"] },
      "dd-delegate": {
        requires: ["dd-drag", "dd-drop-plugin", "event-mouseenter"],
      },
      "dd-drag": { requires: ["dd-ddm-base", "selector-css2"] },
      "dd-drop": { requires: ["dd-drag", "dd-ddm-drop"] },
      "dd-drop-plugin": { requires: ["dd-drop"] },
      "dd-gestures": {
        condition: {
          name: "dd-gestures",
          trigger: "dd-drag",
          ua: "touchEnabled",
        },
        requires: ["dd-drag", "event-synthetic", "event-gestures"],
      },
      "dd-plugin": {
        optional: ["dd-constrain", "dd-proxy"],
        requires: ["dd-drag"],
      },
      "dd-proxy": { requires: ["dd-drag"] },
      "dd-scroll": { requires: ["dd-drag"] },
      dial: {
        lang: ["en", "es", "hu"],
        requires: [
          "widget",
          "dd-drag",
          "event-mouseenter",
          "event-move",
          "event-key",
          "transition",
          "intl",
        ],
        skinnable: true,
      },
      dom: {
        use: [
          "dom-base",
          "dom-screen",
          "dom-style",
          "selector-native",
          "selector",
        ],
      },
      "dom-base": { requires: ["dom-core"] },
      "dom-core": { requires: ["oop", "features"] },
      "dom-screen": { requires: ["dom-base", "dom-style"] },
      "dom-style": { requires: ["dom-base"] },
      "dom-style-ie": {
        condition: {
          name: "dom-style-ie",
          test: function (Y) {
            var testFeature = Y.Features.test,
              addFeature = Y.Features.add,
              WINDOW = Y.config.win,
              DOCUMENT = Y.config.doc,
              DOCUMENT_ELEMENT = "documentElement",
              ret = false;
            addFeature("style", "computedStyle", {
              test: function () {
                return WINDOW && "getComputedStyle" in WINDOW;
              },
            });
            addFeature("style", "opacity", {
              test: function () {
                return (
                  DOCUMENT && "opacity" in DOCUMENT[DOCUMENT_ELEMENT].style
                );
              },
            });
            ret =
              !testFeature("style", "opacity") &&
              !testFeature("style", "computedStyle");
            return ret;
          },
          trigger: "dom-style",
        },
        requires: ["dom-style", "color-base"],
      },
      dump: { requires: ["yui-base"] },
      editor: {
        use: [
          "frame",
          "editor-selection",
          "exec-command",
          "editor-base",
          "editor-para",
          "editor-br",
          "editor-bidi",
          "editor-tab",
          "createlink-base",
        ],
      },
      "editor-base": {
        requires: ["base", "frame", "node", "exec-command", "editor-selection"],
      },
      "editor-bidi": { requires: ["editor-base"] },
      "editor-br": { requires: ["editor-base"] },
      "editor-inline": { requires: ["editor-base", "content-editable"] },
      "editor-lists": { requires: ["editor-base"] },
      "editor-para": { requires: ["editor-para-base"] },
      "editor-para-base": { requires: ["editor-base"] },
      "editor-para-ie": {
        condition: {
          name: "editor-para-ie",
          trigger: "editor-para",
          ua: "ie",
          when: "instead",
        },
        requires: ["editor-para-base"],
      },
      "editor-selection": { requires: ["node"] },
      "editor-tab": { requires: ["editor-base"] },
      escape: { requires: ["yui-base"] },
      event: {
        after: ["node-base"],
        use: [
          "event-base",
          "event-delegate",
          "event-synthetic",
          "event-mousewheel",
          "event-mouseenter",
          "event-key",
          "event-focus",
          "event-resize",
          "event-hover",
          "event-outside",
          "event-touch",
          "event-move",
          "event-flick",
          "event-valuechange",
          "event-tap",
        ],
      },
      "event-base": { after: ["node-base"], requires: ["event-custom-base"] },
      "event-base-ie": {
        after: ["event-base"],
        condition: {
          name: "event-base-ie",
          test: function (Y) {
            var imp = Y.config.doc && Y.config.doc.implementation;
            return imp && !imp.hasFeature("Events", "2.0");
          },
          trigger: "node-base",
        },
        requires: ["node-base"],
      },
      "event-contextmenu": { requires: ["event-synthetic", "dom-screen"] },
      "event-custom": { use: ["event-custom-base", "event-custom-complex"] },
      "event-custom-base": { requires: ["oop"] },
      "event-custom-complex": { requires: ["event-custom-base"] },
      "event-delegate": { requires: ["node-base"] },
      "event-flick": {
        requires: ["node-base", "event-touch", "event-synthetic"],
      },
      "event-focus": { requires: ["event-synthetic"] },
      "event-gestures": { use: ["event-flick", "event-move"] },
      "event-hover": { requires: ["event-mouseenter"] },
      "event-key": { requires: ["event-synthetic"] },
      "event-mouseenter": { requires: ["event-synthetic"] },
      "event-mousewheel": { requires: ["node-base"] },
      "event-move": {
        requires: ["node-base", "event-touch", "event-synthetic"],
      },
      "event-outside": { requires: ["event-synthetic"] },
      "event-resize": { requires: ["node-base", "event-synthetic"] },
      "event-simulate": { requires: ["event-base"] },
      "event-synthetic": { requires: ["node-base", "event-custom-complex"] },
      "event-tap": {
        requires: ["node-base", "event-base", "event-touch", "event-synthetic"],
      },
      "event-touch": { requires: ["node-base"] },
      "event-valuechange": { requires: ["event-focus", "event-synthetic"] },
      "exec-command": { requires: ["frame"] },
      features: { requires: ["yui-base"] },
      file: { requires: ["file-flash", "file-html5"] },
      "file-flash": { requires: ["base"] },
      "file-html5": { requires: ["base"] },
      frame: {
        requires: ["base", "node", "plugin", "selector-css3", "yui-throttle"],
      },
      "gesture-simulate": {
        requires: ["async-queue", "event-simulate", "node-screen"],
      },
      get: { requires: ["yui-base"] },
      graphics: {
        requires: [
          "node",
          "event-custom",
          "pluginhost",
          "matrix",
          "classnamemanager",
        ],
      },
      "graphics-canvas": {
        condition: {
          name: "graphics-canvas",
          test: function (Y) {
            var DOCUMENT = Y.config.doc,
              useCanvas =
                Y.config.defaultGraphicEngine &&
                Y.config.defaultGraphicEngine == "canvas",
              canvas = DOCUMENT && DOCUMENT.createElement("canvas"),
              svg =
                DOCUMENT &&
                DOCUMENT.implementation.hasFeature(
                  "http://www.w3.org/TR/SVG11/feature#BasicStructure",
                  "1.1"
                );
            return (
              (!svg || useCanvas) &&
              canvas &&
              canvas.getContext &&
              canvas.getContext("2d")
            );
          },
          trigger: "graphics",
        },
        requires: ["graphics", "color-base"],
      },
      "graphics-canvas-default": {
        condition: {
          name: "graphics-canvas-default",
          test: function (Y) {
            var DOCUMENT = Y.config.doc,
              useCanvas =
                Y.config.defaultGraphicEngine &&
                Y.config.defaultGraphicEngine == "canvas",
              canvas = DOCUMENT && DOCUMENT.createElement("canvas"),
              svg =
                DOCUMENT &&
                DOCUMENT.implementation.hasFeature(
                  "http://www.w3.org/TR/SVG11/feature#BasicStructure",
                  "1.1"
                );
            return (
              (!svg || useCanvas) &&
              canvas &&
              canvas.getContext &&
              canvas.getContext("2d")
            );
          },
          trigger: "graphics",
        },
      },
      "graphics-group": { requires: ["graphics"] },
      "graphics-svg": {
        condition: {
          name: "graphics-svg",
          test: function (Y) {
            var DOCUMENT = Y.config.doc,
              useSVG =
                !Y.config.defaultGraphicEngine ||
                Y.config.defaultGraphicEngine != "canvas",
              canvas = DOCUMENT && DOCUMENT.createElement("canvas"),
              svg =
                DOCUMENT &&
                DOCUMENT.implementation.hasFeature(
                  "http://www.w3.org/TR/SVG11/feature#BasicStructure",
                  "1.1"
                );
            return svg && (useSVG || !canvas);
          },
          trigger: "graphics",
        },
        requires: ["graphics"],
      },
      "graphics-svg-default": {
        condition: {
          name: "graphics-svg-default",
          test: function (Y) {
            var DOCUMENT = Y.config.doc,
              useSVG =
                !Y.config.defaultGraphicEngine ||
                Y.config.defaultGraphicEngine != "canvas",
              canvas = DOCUMENT && DOCUMENT.createElement("canvas"),
              svg =
                DOCUMENT &&
                DOCUMENT.implementation.hasFeature(
                  "http://www.w3.org/TR/SVG11/feature#BasicStructure",
                  "1.1"
                );
            return svg && (useSVG || !canvas);
          },
          trigger: "graphics",
        },
      },
      "graphics-vml": {
        condition: {
          name: "graphics-vml",
          test: function (Y) {
            var DOCUMENT = Y.config.doc,
              canvas = DOCUMENT && DOCUMENT.createElement("canvas");
            return (
              DOCUMENT &&
              !DOCUMENT.implementation.hasFeature(
                "http://www.w3.org/TR/SVG11/feature#BasicStructure",
                "1.1"
              ) &&
              (!canvas || !canvas.getContext || !canvas.getContext("2d"))
            );
          },
          trigger: "graphics",
        },
        requires: ["graphics", "color-base"],
      },
      "graphics-vml-default": {
        condition: {
          name: "graphics-vml-default",
          test: function (Y) {
            var DOCUMENT = Y.config.doc,
              canvas = DOCUMENT && DOCUMENT.createElement("canvas");
            return (
              DOCUMENT &&
              !DOCUMENT.implementation.hasFeature(
                "http://www.w3.org/TR/SVG11/feature#BasicStructure",
                "1.1"
              ) &&
              (!canvas || !canvas.getContext || !canvas.getContext("2d"))
            );
          },
          trigger: "graphics",
        },
      },
      handlebars: { use: ["handlebars-compiler"] },
      "handlebars-base": { requires: [] },
      "handlebars-compiler": { requires: ["handlebars-base"] },
      highlight: { use: ["highlight-base", "highlight-accentfold"] },
      "highlight-accentfold": {
        requires: ["highlight-base", "text-accentfold"],
      },
      "highlight-base": {
        requires: [
          "array-extras",
          "classnamemanager",
          "escape",
          "text-wordbreak",
        ],
      },
      history: { use: ["history-base", "history-hash", "history-html5"] },
      "history-base": { requires: ["event-custom-complex"] },
      "history-hash": {
        after: ["history-html5"],
        requires: ["event-synthetic", "history-base", "yui-later"],
      },
      "history-hash-ie": {
        condition: {
          name: "history-hash-ie",
          test: function (Y) {
            var docMode = Y.config.doc && Y.config.doc.documentMode;
            return (
              Y.UA.ie &&
              (!("onhashchange" in Y.config.win) || !docMode || docMode < 8)
            );
          },
          trigger: "history-hash",
        },
        requires: ["history-hash", "node-base"],
      },
      "history-html5": {
        optional: ["json"],
        requires: ["event-base", "history-base", "node-base"],
      },
      imageloader: { requires: ["base-base", "node-style", "node-screen"] },
      intl: { requires: ["intl-base", "event-custom"] },
      "intl-base": { requires: ["yui-base"] },
      io: {
        use: ["io-base", "io-xdr", "io-form", "io-upload-iframe", "io-queue"],
      },
      "io-base": {
        requires: ["event-custom-base", "querystring-stringify-simple"],
      },
      "io-form": { requires: ["io-base", "node-base"] },
      "io-nodejs": {
        condition: { name: "io-nodejs", trigger: "io-base", ua: "nodejs" },
        requires: ["io-base"],
      },
      "io-queue": { requires: ["io-base", "queue-promote"] },
      "io-upload-iframe": { requires: ["io-base", "node-base"] },
      "io-xdr": { requires: ["io-base", "datatype-xml-parse"] },
      json: { use: ["json-parse", "json-stringify"] },
      "json-parse": { requires: ["yui-base"] },
      "json-parse-shim": {
        condition: {
          name: "json-parse-shim",
          test: function (Y) {
            var _JSON = Y.config.global.JSON,
              Native =
                Object.prototype.toString.call(_JSON) === "[object JSON]" &&
                _JSON,
              nativeSupport = Y.config.useNativeJSONParse !== false && !!Native;
            function workingNative(k, v) {
              return k === "ok" ? true : v;
            }
            if (nativeSupport)
              try {
                nativeSupport = Native.parse('{"ok":false}', workingNative).ok;
              } catch (e) {
                nativeSupport = false;
              }
            return !nativeSupport;
          },
          trigger: "json-parse",
        },
        requires: ["json-parse"],
      },
      "json-stringify": { requires: ["yui-base"] },
      "json-stringify-shim": {
        condition: {
          name: "json-stringify-shim",
          test: function (Y) {
            var _JSON = Y.config.global.JSON,
              Native =
                Object.prototype.toString.call(_JSON) === "[object JSON]" &&
                _JSON,
              nativeSupport =
                Y.config.useNativeJSONStringify !== false && !!Native;
            if (nativeSupport)
              try {
                nativeSupport = "0" === Native.stringify(0);
              } catch (e) {
                nativeSupport = false;
              }
            return !nativeSupport;
          },
          trigger: "json-stringify",
        },
        requires: ["json-stringify"],
      },
      jsonp: { requires: ["get", "oop"] },
      "jsonp-url": { requires: ["jsonp"] },
      "lazy-model-list": { requires: ["model-list"] },
      loader: { use: ["loader-base", "loader-rollup", "loader-yui3"] },
      "loader-base": { requires: ["get", "features"] },
      "loader-pathogen-combohandler": {},
      "loader-pathogen-encoder": {
        use: [
          "loader-base",
          "loader-rollup",
          "loader-yui3",
          "loader-pathogen-combohandler",
        ],
      },
      "loader-rollup": { requires: ["loader-base"] },
      "loader-yui3": { requires: ["loader-base"] },
      matrix: { requires: ["yui-base"] },
      model: { requires: ["base-build", "escape", "json-parse"] },
      "model-list": {
        requires: [
          "array-extras",
          "array-invoke",
          "arraylist",
          "base-build",
          "escape",
          "json-parse",
          "model",
        ],
      },
      "model-sync-local": { requires: ["model", "json-stringify"] },
      "model-sync-rest": { requires: ["model", "io-base", "json-stringify"] },
      node: {
        use: [
          "node-base",
          "node-event-delegate",
          "node-pluginhost",
          "node-screen",
          "node-style",
        ],
      },
      "node-base": {
        requires: ["event-base", "node-core", "dom-base", "dom-style"],
      },
      "node-core": { requires: ["dom-core", "selector"] },
      "node-event-delegate": { requires: ["node-base", "event-delegate"] },
      "node-event-html5": { requires: ["node-base"] },
      "node-event-simulate": {
        requires: ["node-base", "event-simulate", "gesture-simulate"],
      },
      "node-flick": {
        requires: ["classnamemanager", "transition", "event-flick", "plugin"],
        skinnable: true,
      },
      "node-focusmanager": {
        requires: [
          "attribute",
          "node",
          "plugin",
          "node-event-simulate",
          "event-key",
          "event-focus",
        ],
      },
      "node-load": { requires: ["node-base", "io-base"] },
      "node-menunav": {
        requires: ["node", "classnamemanager", "plugin", "node-focusmanager"],
        skinnable: true,
      },
      "node-pluginhost": { requires: ["node-base", "pluginhost"] },
      "node-screen": { requires: ["dom-screen", "node-base"] },
      "node-scroll-info": {
        requires: [
          "array-extras",
          "base-build",
          "event-resize",
          "node-pluginhost",
          "plugin",
          "selector",
        ],
      },
      "node-style": { requires: ["dom-style", "node-base"] },
      oop: { requires: ["yui-base"] },
      overlay: {
        requires: [
          "widget",
          "widget-stdmod",
          "widget-position",
          "widget-position-align",
          "widget-stack",
          "widget-position-constrain",
        ],
        skinnable: true,
      },
      paginator: { requires: ["paginator-core"] },
      "paginator-core": { requires: ["base"] },
      "paginator-url": { requires: ["paginator"] },
      panel: {
        requires: [
          "widget",
          "widget-autohide",
          "widget-buttons",
          "widget-modality",
          "widget-position",
          "widget-position-align",
          "widget-position-constrain",
          "widget-stack",
          "widget-stdmod",
        ],
        skinnable: true,
      },
      parallel: { requires: ["yui-base"] },
      pjax: { requires: ["pjax-base", "pjax-content"] },
      "pjax-base": {
        requires: ["classnamemanager", "node-event-delegate", "router"],
      },
      "pjax-content": { requires: ["io-base", "node-base", "router"] },
      "pjax-plugin": { requires: ["node-pluginhost", "pjax", "plugin"] },
      plugin: { requires: ["base-base"] },
      pluginhost: { use: ["pluginhost-base", "pluginhost-config"] },
      "pluginhost-base": { requires: ["yui-base"] },
      "pluginhost-config": { requires: ["pluginhost-base"] },
      promise: { requires: ["timers"] },
      querystring: { use: ["querystring-parse", "querystring-stringify"] },
      "querystring-parse": { requires: ["yui-base", "array-extras"] },
      "querystring-parse-simple": { requires: ["yui-base"] },
      "querystring-stringify": { requires: ["yui-base"] },
      "querystring-stringify-simple": { requires: ["yui-base"] },
      "queue-promote": { requires: ["yui-base"] },
      "range-slider": {
        requires: ["slider-base", "slider-value-range", "clickable-rail"],
      },
      recordset: {
        use: [
          "recordset-base",
          "recordset-sort",
          "recordset-filter",
          "recordset-indexer",
        ],
      },
      "recordset-base": { requires: ["base", "arraylist"] },
      "recordset-filter": {
        requires: ["recordset-base", "array-extras", "plugin"],
      },
      "recordset-indexer": { requires: ["recordset-base", "plugin"] },
      "recordset-sort": { requires: ["arraysort", "recordset-base", "plugin"] },
      resize: { use: ["resize-base", "resize-proxy", "resize-constrain"] },
      "resize-base": {
        requires: [
          "base",
          "widget",
          "event",
          "oop",
          "dd-drag",
          "dd-delegate",
          "dd-drop",
        ],
        skinnable: true,
      },
      "resize-constrain": { requires: ["plugin", "resize-base"] },
      "resize-plugin": {
        optional: ["resize-constrain"],
        requires: ["resize-base", "plugin"],
      },
      "resize-proxy": { requires: ["plugin", "resize-base"] },
      router: {
        optional: ["querystring-parse"],
        requires: ["array-extras", "base-build", "history"],
      },
      scrollview: { requires: ["scrollview-base", "scrollview-scrollbars"] },
      "scrollview-base": {
        requires: [
          "widget",
          "event-gestures",
          "event-mousewheel",
          "transition",
        ],
        skinnable: true,
      },
      "scrollview-base-ie": {
        condition: {
          name: "scrollview-base-ie",
          trigger: "scrollview-base",
          ua: "ie",
        },
        requires: ["scrollview-base"],
      },
      "scrollview-list": {
        requires: ["plugin", "classnamemanager"],
        skinnable: true,
      },
      "scrollview-paginator": { requires: ["plugin", "classnamemanager"] },
      "scrollview-scrollbars": {
        requires: ["classnamemanager", "transition", "plugin"],
        skinnable: true,
      },
      selector: { requires: ["selector-native"] },
      "selector-css2": {
        condition: {
          name: "selector-css2",
          test: function (Y) {
            var DOCUMENT = Y.config.doc,
              ret = DOCUMENT && !("querySelectorAll" in DOCUMENT);
            return ret;
          },
          trigger: "selector",
        },
        requires: ["selector-native"],
      },
      "selector-css3": { requires: ["selector-native", "selector-css2"] },
      "selector-native": { requires: ["dom-base"] },
      "series-area": { requires: ["series-cartesian", "series-fill-util"] },
      "series-area-stacked": { requires: ["series-stacked", "series-area"] },
      "series-areaspline": { requires: ["series-area", "series-curve-util"] },
      "series-areaspline-stacked": {
        requires: ["series-stacked", "series-areaspline"],
      },
      "series-bar": { requires: ["series-marker", "series-histogram-base"] },
      "series-bar-stacked": { requires: ["series-stacked", "series-bar"] },
      "series-base": { requires: ["graphics", "axis-base"] },
      "series-candlestick": { requires: ["series-range"] },
      "series-cartesian": { requires: ["series-base"] },
      "series-column": { requires: ["series-marker", "series-histogram-base"] },
      "series-column-stacked": {
        requires: ["series-stacked", "series-column"],
      },
      "series-combo": {
        requires: [
          "series-cartesian",
          "series-line-util",
          "series-plot-util",
          "series-fill-util",
        ],
      },
      "series-combo-stacked": { requires: ["series-stacked", "series-combo"] },
      "series-combospline": { requires: ["series-combo", "series-curve-util"] },
      "series-combospline-stacked": {
        requires: ["series-combo-stacked", "series-curve-util"],
      },
      "series-curve-util": {},
      "series-fill-util": {},
      "series-histogram-base": {
        requires: ["series-cartesian", "series-plot-util"],
      },
      "series-line": { requires: ["series-cartesian", "series-line-util"] },
      "series-line-stacked": { requires: ["series-stacked", "series-line"] },
      "series-line-util": {},
      "series-marker": { requires: ["series-cartesian", "series-plot-util"] },
      "series-marker-stacked": {
        requires: ["series-stacked", "series-marker"],
      },
      "series-ohlc": { requires: ["series-range"] },
      "series-pie": { requires: ["series-base", "series-plot-util"] },
      "series-plot-util": {},
      "series-range": { requires: ["series-cartesian"] },
      "series-spline": { requires: ["series-line", "series-curve-util"] },
      "series-spline-stacked": {
        requires: ["series-stacked", "series-spline"],
      },
      "series-stacked": { requires: ["axis-stacked"] },
      "shim-plugin": { requires: ["node-style", "node-pluginhost"] },
      slider: {
        use: [
          "slider-base",
          "slider-value-range",
          "clickable-rail",
          "range-slider",
        ],
      },
      "slider-base": {
        requires: ["widget", "dd-constrain", "event-key"],
        skinnable: true,
      },
      "slider-value-range": { requires: ["slider-base"] },
      sortable: { requires: ["dd-delegate", "dd-drop-plugin", "dd-proxy"] },
      "sortable-scroll": { requires: ["dd-scroll", "sortable"] },
      stylesheet: { requires: ["yui-base"] },
      substitute: { optional: ["dump"], requires: ["yui-base"] },
      swf: { requires: ["event-custom", "node", "swfdetect", "escape"] },
      swfdetect: { requires: ["yui-base"] },
      tabview: {
        requires: [
          "widget",
          "widget-parent",
          "widget-child",
          "tabview-base",
          "node-pluginhost",
          "node-focusmanager",
        ],
        skinnable: true,
      },
      "tabview-base": { requires: ["node-event-delegate", "classnamemanager"] },
      "tabview-plugin": { requires: ["tabview-base"] },
      template: { use: ["template-base", "template-micro"] },
      "template-base": { requires: ["yui-base"] },
      "template-micro": { requires: ["escape"] },
      test: { requires: ["event-simulate", "event-custom", "json-stringify"] },
      "test-console": {
        requires: ["console-filters", "test", "array-extras"],
        skinnable: true,
      },
      text: { use: ["text-accentfold", "text-wordbreak"] },
      "text-accentfold": { requires: ["array-extras", "text-data-accentfold"] },
      "text-data-accentfold": { requires: ["yui-base"] },
      "text-data-wordbreak": { requires: ["yui-base"] },
      "text-wordbreak": { requires: ["array-extras", "text-data-wordbreak"] },
      timers: { requires: ["yui-base"] },
      transition: { requires: ["node-style"] },
      "transition-timer": {
        condition: {
          name: "transition-timer",
          test: function (Y) {
            var DOCUMENT = Y.config.doc,
              node = DOCUMENT ? DOCUMENT.documentElement : null,
              ret = true;
            if (node && node.style)
              ret = !(
                "MozTransition" in node.style ||
                "WebkitTransition" in node.style ||
                "transition" in node.style
              );
            return ret;
          },
          trigger: "transition",
        },
        requires: ["transition"],
      },
      tree: { requires: ["base-build", "tree-node"] },
      "tree-labelable": { requires: ["tree"] },
      "tree-lazy": { requires: ["base-pluginhost", "plugin", "tree"] },
      "tree-node": {},
      "tree-openable": { requires: ["tree"] },
      "tree-selectable": { requires: ["tree"] },
      "tree-sortable": { requires: ["tree"] },
      uploader: { requires: ["uploader-html5", "uploader-flash"] },
      "uploader-flash": {
        requires: [
          "swfdetect",
          "escape",
          "widget",
          "base",
          "cssbutton",
          "node",
          "event-custom",
          "uploader-queue",
        ],
      },
      "uploader-html5": {
        requires: [
          "widget",
          "node-event-simulate",
          "file-html5",
          "uploader-queue",
        ],
      },
      "uploader-queue": { requires: ["base"] },
      view: { requires: ["base-build", "node-event-delegate"] },
      "view-node-map": { requires: ["view"] },
      widget: {
        use: [
          "widget-base",
          "widget-htmlparser",
          "widget-skin",
          "widget-uievents",
        ],
      },
      "widget-anim": { requires: ["anim-base", "plugin", "widget"] },
      "widget-autohide": {
        requires: ["base-build", "event-key", "event-outside", "widget"],
      },
      "widget-base": {
        requires: [
          "attribute",
          "base-base",
          "base-pluginhost",
          "classnamemanager",
          "event-focus",
          "node-base",
          "node-style",
        ],
        skinnable: true,
      },
      "widget-base-ie": {
        condition: { name: "widget-base-ie", trigger: "widget-base", ua: "ie" },
        requires: ["widget-base"],
      },
      "widget-buttons": {
        requires: ["button-plugin", "cssbutton", "widget-stdmod"],
      },
      "widget-child": { requires: ["base-build", "widget"] },
      "widget-htmlparser": { requires: ["widget-base"] },
      "widget-modality": {
        requires: ["base-build", "event-outside", "widget"],
        skinnable: true,
      },
      "widget-parent": { requires: ["arraylist", "base-build", "widget"] },
      "widget-position": { requires: ["base-build", "node-screen", "widget"] },
      "widget-position-align": { requires: ["widget-position"] },
      "widget-position-constrain": { requires: ["widget-position"] },
      "widget-skin": { requires: ["widget-base"] },
      "widget-stack": { requires: ["base-build", "widget"], skinnable: true },
      "widget-stdmod": { requires: ["base-build", "widget"] },
      "widget-uievents": { requires: ["node-event-delegate", "widget-base"] },
      yql: { requires: ["oop"] },
      "yql-jsonp": {
        condition: {
          name: "yql-jsonp",
          test: function (Y) {
            return !Y.UA.nodejs && !Y.UA.winjs;
          },
          trigger: "yql",
        },
        requires: ["yql", "jsonp", "jsonp-url"],
      },
      "yql-nodejs": {
        condition: { name: "yql-nodejs", trigger: "yql", ua: "nodejs" },
        requires: ["yql"],
      },
      "yql-winjs": {
        condition: { name: "yql-winjs", trigger: "yql", ua: "winjs" },
        requires: ["yql"],
      },
      yui: {},
      "yui-base": {},
      "yui-later": { requires: ["yui-base"] },
      "yui-log": { requires: ["yui-base"] },
      "yui-throttle": { requires: ["yui-base"] },
    });
    YUI.Env[Y.version].md5 = "95eb05a1b097773b5af03e0680e7dda4";
  },
  "patched-v3.18.1",
  { requires: ["loader-base"] }
);
YUI.add("yui", function (Y, NAME) {}, "patched-v3.18.1", {
  use: [
    "yui-base",
    "get",
    "features",
    "intl-base",
    "yui-log",
    "yui-later",
    "loader-base",
    "loader-rollup",
    "loader-yui3",
  ],
});
YUI.add(
  "aui-base-core",
  function (A, NAME) {
    var Y = A;
    YUI.Env.aliases = YUI.Env.aliases || {};
    Y.mix(YUI.Env.aliases, {
      "aui-autosize": ["aui-autosize-iframe"],
      "aui-base": [
        "oop",
        "yui-throttle",
        "aui-classnamemanager",
        "aui-debounce",
        "aui-base-core",
        "aui-base-lang",
        "aui-node-base",
      ],
      "aui-base-deprecated": [
        "aui-base",
        "aui-node",
        "aui-component",
        "aui-delayed-task-deprecated",
        "aui-selector",
        "aui-event-base",
      ],
      "aui-button": ["aui-button-core"],
      "aui-collection": ["aui-map", "aui-set", "aui-linkedset"],
      "aui-color-picker-deprecated": [
        "aui-color-picker-base-deprecated",
        "aui-color-picker-grid-plugin-deprecated",
      ],
      "aui-datasource-control-deprecated": [
        "aui-datasource-control-base-deprecated",
        "aui-input-text-control-deprecated",
      ],
      "aui-datatable": [
        "aui-datatable-edit",
        "aui-datatable-highlight",
        "aui-datatable-selection",
        "aui-datatable-property-list",
      ],
      "aui-datatable-edit": [
        "datatable-base",
        "calendar",
        "overlay",
        "sortable",
        "aui-datatype",
        "aui-toolbar",
        "aui-form-validator",
        "aui-datatable-base-cell-editor",
        "aui-datatable-base-options-cell-editor",
        "aui-datatable-cell-editor-support",
        "aui-datatable-core",
        "aui-datatable-checkbox-cell-editor",
        "aui-datatable-date-cell-editor",
        "aui-datatable-dropdown-cell-editor",
        "aui-datatable-radio-cell-editor",
        "aui-datatable-text-cell-editor",
        "aui-datatable-text-area-cell-editor",
      ],
      "aui-datepicker-deprecated": [
        "aui-datepicker-base-deprecated",
        "aui-datepicker-select-deprecated",
      ],
      "aui-event": ["aui-event-base"],
      "aui-form-deprecated": [
        "aui-form-base-deprecated",
        "aui-form-combobox-deprecated",
        "aui-form-field-deprecated",
        "aui-form-select-deprecated",
        "aui-form-textarea-deprecated",
        "aui-form-textfield-deprecated",
      ],
      "aui-io": ["aui-io-request"],
      "aui-io-deprecated": ["aui-io-request", "aui-io-plugin-deprecated"],
      "aui-node": ["aui-node-base"],
      "aui-overlay-deprecated": [
        "aui-overlay-base-deprecated",
        "aui-overlay-context-deprecated",
        "aui-overlay-context-panel-deprecated",
        "aui-overlay-manager-deprecated",
        "aui-overlay-mask-deprecated",
      ],
      "aui-rating": ["aui-rating-base", "aui-rating-thumb"],
      "aui-resize-deprecated": [
        "aui-resize-base-deprecated",
        "aui-resize-constrain-deprecated",
      ],
      "aui-scheduler": [
        "event-gestures",
        "aui-scheduler-base",
        "aui-scheduler-event-recorder",
        "aui-scheduler-view-agenda",
        "aui-scheduler-view-day",
        "aui-scheduler-view-month",
        "aui-scheduler-view-table-dd",
        "aui-scheduler-view-table",
        "aui-scheduler-view-week",
        "aui-viewport",
      ],
      "aui-search": ["aui-search-tst"],
      "aui-sortable": ["aui-sortable-layout", "aui-sortable-list"],
      "aui-surface": ["aui-surface-app", "aui-surface-screen"],
      "aui-toggler": ["aui-toggler-base", "aui-toggler-delegate"],
      "aui-tooltip": ["aui-tooltip-base", "aui-tooltip-delegate"],
      "aui-tpl-snippets-deprecated": [
        "aui-tpl-snippets-base-deprecated",
        "aui-tpl-snippets-checkbox-deprecated",
        "aui-tpl-snippets-input-deprecated",
        "aui-tpl-snippets-select-deprecated",
        "aui-tpl-snippets-textarea-deprecated",
      ],
      "aui-tree": [
        "aui-tree-data",
        "aui-tree-io",
        "aui-tree-node",
        "aui-tree-paginator",
        "aui-tree-view",
      ],
      "aui-widget": ["aui-widget-cssclass", "aui-widget-toolbars"],
      "aui-widget-core": ["aui-widget-cssclass"],
    });
    YUI.Env[Y.version].modules = YUI.Env[Y.version].modules || {};
    Y.mix(YUI.Env[Y.version].modules, {
      "aui-ace-autocomplete-base": { requires: ["aui-ace-editor"] },
      "aui-ace-autocomplete-freemarker": {
        requires: ["aui-ace-autocomplete-templateprocessor"],
      },
      "aui-ace-autocomplete-list": {
        requires: ["aui-ace-autocomplete-base", "overlay", "widget-autohide"],
        skinnable: true,
      },
      "aui-ace-autocomplete-plugin": {
        requires: ["aui-ace-autocomplete-list", "plugin"],
      },
      "aui-ace-autocomplete-templateprocessor": {
        requires: ["aui-ace-autocomplete-base"],
      },
      "aui-ace-autocomplete-velocity": {
        requires: ["aui-ace-autocomplete-templateprocessor"],
      },
      "aui-ace-editor": { requires: ["aui-node", "aui-component"] },
      "aui-affix": { requires: ["base", "node-screen", "aui-node"] },
      "aui-alert": {
        requires: [
          "aui-aria",
          "aui-classnamemanager",
          "aui-widget-cssclass",
          "aui-widget-transition",
          "timers",
          "widget",
          "widget-stdmod",
        ],
        skinnable: true,
      },
      "aui-aria": { requires: ["plugin", "aui-component"] },
      "aui-aria-table-sortable": { requires: ["aui-aria"] },
      "aui-arraysort": { requires: ["arraysort"] },
      "aui-audio": {
        requires: [
          "aui-aria",
          "aui-node",
          "aui-component",
          "node-event-html5",
          "querystring-stringify-simple",
        ],
        skinnable: true,
      },
      "aui-autocomplete-deprecated": {
        requires: [
          "aui-base-deprecated",
          "aui-overlay-base-deprecated",
          "datasource",
          "dataschema",
          "aui-form-combobox-deprecated",
        ],
        skinnable: true,
      },
      "aui-autosize": { use: ["aui-autosize-iframe"] },
      "aui-autosize-deprecated": {
        requires: ["event-valuechange", "plugin", "aui-base-deprecated"],
        skinnable: true,
      },
      "aui-autosize-iframe": {
        requires: ["plugin", "aui-component", "aui-timer", "aui-node-base"],
      },
      "aui-base": {
        use: [
          "oop",
          "yui-throttle",
          "aui-classnamemanager",
          "aui-debounce",
          "aui-base-core",
          "aui-base-lang",
          "aui-node-base",
        ],
      },
      "aui-base-core": {},
      "aui-base-deprecated": {
        use: [
          "aui-base",
          "aui-node",
          "aui-component",
          "aui-delayed-task-deprecated",
          "aui-selector",
          "aui-event-base",
        ],
      },
      "aui-base-html5-shiv": {
        condition: {
          name: "aui-base-html5-shiv",
          trigger: "node-base",
          ua: "ie",
        },
      },
      "aui-base-lang": {},
      "aui-boolean-data-editor": {
        requires: ["aui-button-switch", "aui-data-editor"],
      },
      "aui-button": { use: ["aui-button-core"] },
      "aui-button-core": {
        requires: [
          "button",
          "button-group",
          "button-plugin",
          "aui-component",
          "aui-widget-cssclass",
          "aui-widget-toggle",
        ],
        skinnable: true,
      },
      "aui-button-item-deprecated": {
        requires: [
          "aui-base-deprecated",
          "aui-state-interaction-deprecated",
          "widget-child",
        ],
        skinnable: true,
      },
      "aui-button-search-cancel": {
        requires: [
          "array-invoke",
          "base",
          "base-build",
          "event-focus",
          "event-move",
          "event-resize",
          "node-screen",
          "node-event-delegate",
          "aui-node-base",
          "aui-classnamemanager",
          "aui-event-input",
        ],
      },
      "aui-button-switch": {
        requires: [
          "aui-node-base",
          "base-build",
          "event-key",
          "transition",
          "widget",
        ],
        skinnable: true,
      },
      "aui-carousel": {
        requires: [
          "anim",
          "aui-event",
          "aui-image-viewer-base",
          "aui-image-viewer-slideshow",
          "node-event-delegate",
          "node-focusmanager",
        ],
        skinnable: true,
      },
      "aui-carousel-mobile-touch": {
        condition: {
          name: "aui-carousel-mobile-touch",
          test: function (A) {
            return A.UA.mobile && A.UA.touchEnabled;
          },
          trigger: "aui-carousel",
        },
        requires: ["base-build", "aui-carousel"],
      },
      "aui-carousel-swipe": {
        condition: {
          name: "aui-carousel-swipe",
          trigger: "aui-carousel",
          ua: "touchEnabled",
        },
        requires: ["aui-carousel", "aui-widget-swipe", "base-build"],
        skinnable: true,
      },
      "aui-char-counter": {
        requires: ["aui-aria", "aui-node", "aui-event-input", "aui-component"],
      },
      "aui-chart-deprecated": {
        requires: ["datasource", "json", "aui-swf-deprecated"],
      },
      "aui-classnamemanager": { requires: ["classnamemanager"] },
      "aui-collection": { use: ["aui-map", "aui-set", "aui-linkedset"] },
      "aui-color-palette": {
        requires: [
          "array-extras",
          "aui-palette",
          "color-base",
          "node-core",
          "aui-widget-cssclass",
          "aui-widget-toggle",
        ],
        skinnable: true,
      },
      "aui-color-picker-base": {
        requires: [
          "aui-color-palette",
          "aui-hsva-palette-modal",
          "event-outside",
        ],
        skinnable: true,
      },
      "aui-color-picker-base-deprecated": {
        requires: [
          "dd-drag",
          "panel",
          "slider",
          "aui-button-item-deprecated",
          "aui-color-util-deprecated",
          "aui-form-base-deprecated",
          "aui-overlay-context-deprecated",
        ],
        skinnable: true,
      },
      "aui-color-picker-deprecated": {
        use: [
          "aui-color-picker-base-deprecated",
          "aui-color-picker-grid-plugin-deprecated",
        ],
      },
      "aui-color-picker-grid-plugin-deprecated": {
        requires: ["plugin", "aui-color-picker-base-deprecated"],
        skinnable: true,
      },
      "aui-color-picker-popover": {
        requires: [
          "aui-color-picker-base",
          "aui-popover",
          "aui-widget-cssclass",
          "aui-widget-toggle",
        ],
        skinnable: true,
      },
      "aui-color-util-deprecated": { requires: [] },
      "aui-component": {
        requires: [
          "aui-classnamemanager",
          "aui-widget-cssclass",
          "aui-widget-toggle",
          "base-build",
          "widget-base",
        ],
      },
      "aui-css": { type: "css" },
      "aui-data-editor": {
        requires: ["aui-classnamemanager", "base-build", "node-base"],
        skinnable: true,
      },
      "aui-data-set-deprecated": { requires: ["oop", "collection", "base"] },
      "aui-datasource-control-base-deprecated": {
        requires: ["datasource", "dataschema", "aui-base-deprecated"],
      },
      "aui-datasource-control-deprecated": {
        use: [
          "aui-datasource-control-base-deprecated",
          "aui-input-text-control-deprecated",
        ],
      },
      "aui-datatable": {
        use: [
          "aui-datatable-edit",
          "aui-datatable-highlight",
          "aui-datatable-selection",
          "aui-datatable-property-list",
        ],
      },
      "aui-datatable-base-cell-editor": {
        requires: ["datatable-base", "overlay"],
        skinnable: true,
      },
      "aui-datatable-base-options-cell-editor": {
        requires: ["aui-datatable-base-cell-editor", "escape"],
        skinnable: true,
      },
      "aui-datatable-body": {
        requires: [
          "aui-classnamemanager",
          "datatable-base",
          "event-key",
          "aui-event-base",
        ],
      },
      "aui-datatable-cell-editor-support": { requires: ["datatable-base"] },
      "aui-datatable-checkbox-cell-editor": {
        requires: ["aui-datatable-base-options-cell-editor"],
      },
      "aui-datatable-core": {
        requires: [
          "aui-datatable-body",
          "datatable-base",
          "event-key",
          "aui-event-base",
        ],
        skinnable: true,
      },
      "aui-datatable-date-cell-editor": {
        requires: ["aui-datatable-base-options-cell-editor"],
      },
      "aui-datatable-dropdown-cell-editor": {
        requires: ["aui-datatable-base-options-cell-editor"],
      },
      "aui-datatable-edit": {
        use: [
          "datatable-base",
          "calendar",
          "overlay",
          "sortable",
          "aui-datatype",
          "aui-toolbar",
          "aui-form-validator",
          "aui-datatable-base-cell-editor",
          "aui-datatable-base-options-cell-editor",
          "aui-datatable-cell-editor-support",
          "aui-datatable-core",
          "aui-datatable-checkbox-cell-editor",
          "aui-datatable-date-cell-editor",
          "aui-datatable-dropdown-cell-editor",
          "aui-datatable-radio-cell-editor",
          "aui-datatable-text-cell-editor",
          "aui-datatable-text-area-cell-editor",
        ],
      },
      "aui-datatable-highlight": {
        requires: ["aui-datatable-selection"],
        skinnable: true,
      },
      "aui-datatable-property-list": {
        requires: [
          "datatable-scroll",
          "datatable-sort",
          "aui-datatable-core",
          "aui-datatable-edit",
          "aui-datatable-highlight",
          "aui-datatable-selection",
          "aui-widget-cssclass",
          "aui-widget-toggle",
        ],
        skinnable: true,
      },
      "aui-datatable-radio-cell-editor": {
        requires: ["aui-datatable-base-options-cell-editor"],
      },
      "aui-datatable-selection": {
        requires: ["aui-datatable-core"],
        skinnable: true,
      },
      "aui-datatable-text-area-cell-editor": {
        requires: ["aui-datatable-base-options-cell-editor"],
      },
      "aui-datatable-text-cell-editor": {
        requires: ["aui-datatable-base-options-cell-editor"],
      },
      "aui-datatype": { requires: ["datatype", "aui-datatype-date-parse"] },
      "aui-datatype-date-parse": {
        requires: [
          "aui-base-lang",
          "datatype-date-format",
          "datatype-date-parse",
          "intl",
        ],
      },
      "aui-datepicker": {
        requires: [
          "aui-aria",
          "aui-datepicker-delegate",
          "aui-datepicker-popover",
          "base",
          "base-build",
          "calendar",
        ],
        skinnable: true,
      },
      "aui-datepicker-base-deprecated": {
        requires: [
          "calendar",
          "aui-datatype",
          "aui-overlay-context-deprecated",
        ],
        skinnable: true,
      },
      "aui-datepicker-delegate": {
        requires: [
          "aui-datatype-date-parse",
          "aui-event-input",
          "event-focus",
          "node-event-delegate",
        ],
      },
      "aui-datepicker-deprecated": {
        skinnable: true,
        use: [
          "aui-datepicker-base-deprecated",
          "aui-datepicker-select-deprecated",
        ],
      },
      "aui-datepicker-native": {
        requires: [
          "aui-datepicker-delegate",
          "aui-node-base",
          "base",
          "base-build",
        ],
      },
      "aui-datepicker-popover": {
        requires: ["aui-classnamemanager", "aui-popover"],
      },
      "aui-datepicker-select-deprecated": {
        requires: [
          "aui-datepicker-base-deprecated",
          "aui-button-item-deprecated",
        ],
        skinnable: true,
      },
      "aui-debounce": {},
      "aui-delayed-task-deprecated": { requires: ["yui-base"] },
      "aui-diagram-builder": {
        requires: [
          "aui-aria",
          "aui-map",
          "aui-property-builder",
          "aui-diagram-builder-connector",
          "aui-property-builder-settings",
          "aui-diagram-node-condition",
          "aui-diagram-node-end",
          "aui-diagram-node-fork",
          "aui-diagram-node-join",
          "aui-diagram-node-start",
          "aui-diagram-node-state",
          "aui-diagram-node-task",
          "overlay",
        ],
        skinnable: true,
      },
      "aui-diagram-builder-connector": {
        requires: [
          "arraylist-add",
          "arraylist-filter",
          "escape",
          "json",
          "graphics",
          "dd",
        ],
        skinnable: true,
      },
      "aui-diagram-node": {
        requires: [
          "aui-aria",
          "aui-diagram-node-manager-base",
          "escape",
          "overlay",
        ],
      },
      "aui-diagram-node-condition": { requires: ["aui-diagram-node-state"] },
      "aui-diagram-node-end": { requires: ["aui-diagram-node-state"] },
      "aui-diagram-node-fork": { requires: ["aui-diagram-node-state"] },
      "aui-diagram-node-join": { requires: ["aui-diagram-node-state"] },
      "aui-diagram-node-manager-base": { requires: ["base"] },
      "aui-diagram-node-start": { requires: ["aui-diagram-node-state"] },
      "aui-diagram-node-state": { requires: ["aui-diagram-node"] },
      "aui-diagram-node-task": { requires: ["aui-diagram-node-state"] },
      "aui-dialog-iframe-deprecated": {
        requires: [
          "plugin",
          "array-invoke",
          "aui-base-deprecated",
          "aui-loading-mask-deprecated",
        ],
        skinnable: true,
      },
      "aui-dropdown": {
        requires: [
          "event-delegate",
          "event-key",
          "event-outside",
          "node-focusmanager",
          "widget",
          "widget-stack",
          "aui-classnamemanager",
          "aui-node",
          "aui-widget-cssclass",
          "aui-widget-toggle",
          "aui-widget-trigger",
        ],
        skinnable: true,
      },
      "aui-editable-deprecated": {
        requires: [
          "aui-base-deprecated",
          "aui-form-combobox-deprecated",
          "escape",
          "event-resize",
        ],
        skinnable: true,
      },
      "aui-event": { use: ["aui-event-base"] },
      "aui-event-base": { requires: ["event-base"] },
      "aui-event-delegate-change": {
        condition: {
          name: "aui-event-delegate-change",
          trigger: "event-base-ie",
          ua: "ie",
        },
        requires: ["aui-event-base", "event-delegate", "event-synthetic"],
      },
      "aui-event-delegate-submit": {
        condition: {
          name: "aui-event-delegate-submit",
          trigger: "event-base-ie",
          ua: "ie",
        },
        requires: ["aui-event-base", "event-delegate", "event-synthetic"],
      },
      "aui-event-input": {
        condition: {
          name: "aui-event-input",
          test: function (A) {
            var supportsDOMEvent = A.supportsDOMEvent,
              testFeature = A.Features.test,
              addFeature = A.Features.add;
            if (testFeature("event", "input") === undefined)
              addFeature("event", "input", {
                test: function () {
                  return (
                    supportsDOMEvent(
                      document.createElement("textarea"),
                      "input"
                    ) &&
                    (!A.UA.ie || A.UA.ie > 9)
                  );
                },
              });
            return !testFeature("event", "input");
          },
          trigger: "aui-event-base",
        },
        requires: [
          "aui-event-base",
          "event-delegate",
          "event-synthetic",
          "timers",
        ],
      },
      "aui-form-base-deprecated": {
        requires: [
          "io-form",
          "querystring-parse",
          "aui-base-deprecated",
          "aui-data-set-deprecated",
          "aui-form-field-deprecated",
        ],
      },
      "aui-form-builder": {
        requires: [
          "aui-modal",
          "aui-layout",
          "aui-form-builder-field-list",
          "aui-form-builder-field-toolbar",
          "aui-form-builder-field-type",
          "aui-form-builder-field-types",
          "aui-form-builder-layout-builder",
          "aui-form-builder-page-manager",
          "aui-form-builder-settings-modal",
          "event-focus",
          "event-tap",
        ],
        skinnable: true,
      },
      "aui-form-builder-available-field-deprecated": {
        requires: ["aui-property-builder-available-field"],
      },
      "aui-form-builder-deprecated": {
        requires: [
          "aui-button",
          "aui-collection",
          "aui-form-builder-available-field-deprecated",
          "aui-form-builder-field-deprecated",
          "aui-form-builder-field-button-deprecated",
          "aui-form-builder-field-checkbox-deprecated",
          "aui-form-builder-field-fieldset-deprecated",
          "aui-form-builder-field-file-upload-deprecated",
          "aui-form-builder-field-multiple-choice-deprecated",
          "aui-form-builder-field-radio-deprecated",
          "aui-form-builder-field-select-deprecated",
          "aui-form-builder-field-text-deprecated",
          "aui-form-builder-field-textarea-deprecated",
          "aui-property-builder",
          "aui-property-builder-settings",
          "aui-sortable-list",
          "aui-tabview",
          "aui-tooltip-base",
          "escape",
          "transition",
        ],
        skinnable: true,
      },
      "aui-form-builder-field-base": {
        requires: [
          "aui-classnamemanager",
          "aui-node-base",
          "aui-text-data-editor",
          "aui-toggler",
          "base",
          "node-base",
        ],
        skinnable: true,
      },
      "aui-form-builder-field-button-deprecated": {
        requires: ["aui-form-builder-field-deprecated"],
      },
      "aui-form-builder-field-checkbox-deprecated": {
        requires: ["aui-form-builder-field-deprecated"],
      },
      "aui-form-builder-field-choice": {
        requires: [
          "aui-boolean-data-editor",
          "aui-options-data-editor",
          "aui-tabs-data-editor",
          "aui-form-builder-field-base",
          "aui-form-field-choice",
        ],
      },
      "aui-form-builder-field-deprecated": {
        requires: [
          "panel",
          "aui-datatype",
          "aui-datatable-edit",
          "aui-property-builder-field-support",
        ],
        skinnable: true,
      },
      "aui-form-builder-field-fieldset-deprecated": {
        requires: ["aui-form-builder-field-deprecated"],
      },
      "aui-form-builder-field-file-upload-deprecated": {
        requires: ["aui-form-builder-field-deprecated"],
      },
      "aui-form-builder-field-list": {
        requires: [
          "aui-form-builder-field-type",
          "aui-form-builder-field-types",
          "aui-form-builder-layout-builder",
        ],
        skinnable: true,
      },
      "aui-form-builder-field-multiple-choice-deprecated": {
        requires: ["aui-form-builder-field-deprecated"],
      },
      "aui-form-builder-field-radio-deprecated": {
        requires: ["aui-form-builder-field-deprecated"],
      },
      "aui-form-builder-field-select-deprecated": {
        requires: ["aui-form-builder-field-deprecated"],
      },
      "aui-form-builder-field-sentence": {
        requires: ["aui-form-builder-field-base", "aui-form-field"],
      },
      "aui-form-builder-field-text": {
        requires: [
          "aui-boolean-data-editor",
          "aui-radio-group-data-editor",
          "aui-form-builder-field-base",
          "aui-form-field-text",
        ],
      },
      "aui-form-builder-field-text-deprecated": {
        requires: ["aui-form-builder-field-deprecated"],
      },
      "aui-form-builder-field-textarea-deprecated": {
        requires: ["aui-form-builder-field-deprecated"],
      },
      "aui-form-builder-field-toolbar": {
        requires: ["aui-classnamemanager", "base", "node-base"],
        skinnable: true,
      },
      "aui-form-builder-field-type": {
        requires: ["base", "node-base"],
        skinnable: true,
      },
      "aui-form-builder-field-types": {
        requires: [
          "aui-classnamemanager",
          "aui-form-builder-field-types-modal",
          "base",
          "node-base",
        ],
        skinnable: true,
      },
      "aui-form-builder-field-types-modal": {
        requires: ["aui-modal"],
        skinnable: true,
      },
      "aui-form-builder-layout-builder": {
        requires: [
          "aui-classnamemanager",
          "aui-layout-builder",
          "aui-modal",
          "base",
          "node-base",
        ],
        skinnable: true,
      },
      "aui-form-builder-page-manager": {
        requires: [
          "aui-pagination",
          "aui-popover",
          "aui-tabview",
          "base",
          "event-valuechange",
          "node-base",
        ],
        skinnable: true,
      },
      "aui-form-builder-settings-modal": {
        requires: ["aui-classnamemanager", "aui-modal", "base", "node-base"],
        skinnable: true,
      },
      "aui-form-combobox-deprecated": {
        requires: ["aui-form-textarea-deprecated", "aui-toolbar"],
        skinnable: true,
      },
      "aui-form-deprecated": {
        use: [
          "aui-form-base-deprecated",
          "aui-form-combobox-deprecated",
          "aui-form-field-deprecated",
          "aui-form-select-deprecated",
          "aui-form-textarea-deprecated",
          "aui-form-textfield-deprecated",
        ],
      },
      "aui-form-field": {
        requires: ["aui-classnamemanager", "aui-node-base", "base-build"],
        skinnable: true,
      },
      "aui-form-field-choice": {
        requires: ["aui-form-field-required"],
        skinnable: true,
      },
      "aui-form-field-deprecated": {
        requires: ["aui-base-deprecated", "aui-component"],
      },
      "aui-form-field-required": { requires: ["aui-form-field"] },
      "aui-form-field-text": {
        requires: ["aui-form-field-required"],
        skinnable: true,
      },
      "aui-form-select-deprecated": { requires: ["aui-form-field-deprecated"] },
      "aui-form-textarea-deprecated": {
        requires: [
          "node-pluginhost",
          "aui-autosize-deprecated",
          "aui-form-textfield-deprecated",
        ],
      },
      "aui-form-textfield-deprecated": {
        requires: ["aui-form-field-deprecated"],
      },
      "aui-form-validator": {
        requires: [
          "escape",
          "selector-css3",
          "node-event-delegate",
          "aui-node",
          "aui-component",
          "aui-event-input",
        ],
      },
      "aui-hsv-palette": {
        requires: [
          "aui-classnamemanager",
          "aui-widget-cssclass",
          "aui-widget-toggle",
          "aui-event-input",
          "base-build",
          "clickable-rail",
          "color-hsv",
          "dd-constrain",
          "slider",
          "widget",
        ],
        skinnable: true,
      },
      "aui-hsva-palette": { requires: ["aui-hsv-palette"], skinnable: true },
      "aui-hsva-palette-modal": {
        requires: ["aui-hsva-palette", "aui-modal"],
        skinnable: true,
      },
      "aui-image-cropper": {
        requires: [
          "resize-base",
          "resize-constrain",
          "dd-constrain",
          "aui-node-base",
          "aui-component",
        ],
        skinnable: true,
      },
      "aui-image-viewer": {
        requires: [
          "widget",
          "widget-modality",
          "widget-position",
          "widget-position-align",
          "widget-position-constrain",
          "widget-stack",
          "widget-stdmod",
          "aui-event",
          "aui-image-viewer-base",
          "aui-image-viewer-multiple",
          "aui-image-viewer-slideshow",
          "aui-node-base",
          "aui-widget-cssclass",
          "aui-widget-toggle",
        ],
        skinnable: true,
      },
      "aui-image-viewer-base": {
        requires: [
          "anim",
          "aui-aria",
          "aui-classnamemanager",
          "aui-node",
          "aui-widget-responsive",
          "base-build",
          "imageloader",
          "node-base",
          "widget",
          "widget-stack",
        ],
        skinnable: true,
      },
      "aui-image-viewer-media": {
        requires: ["plugin", "aui-component", "aui-image-viewer"],
      },
      "aui-image-viewer-multiple": {
        requires: [
          "base-build",
          "node-base",
          "aui-classnamemanager",
          "aui-image-viewer-base",
        ],
        skinnable: true,
      },
      "aui-image-viewer-multiple-swipe": {
        condition: {
          name: "aui-image-viewer-multiple-swipe",
          trigger: "aui-image-viewer-multiple",
          ua: "touchEnabled",
        },
        requires: ["aui-image-viewer-multiple", "aui-image-viewer-swipe"],
      },
      "aui-image-viewer-slideshow": {
        requires: ["node", "aui-classnamemanager"],
      },
      "aui-image-viewer-swipe": {
        condition: {
          name: "aui-image-viewer-swipe",
          trigger: "aui-image-viewer-base",
          ua: "touchEnabled",
        },
        requires: ["event-resize", "aui-image-viewer-base", "aui-widget-swipe"],
      },
      "aui-input-text-control-deprecated": {
        requires: [
          "aui-base-deprecated",
          "aui-datasource-control-base-deprecated",
          "aui-form-combobox-deprecated",
        ],
      },
      "aui-io": { use: ["aui-io-request"] },
      "aui-io-deprecated": {
        use: ["aui-io-request", "aui-io-plugin-deprecated"],
      },
      "aui-io-plugin-deprecated": {
        requires: [
          "aui-overlay-base-deprecated",
          "aui-parse-content",
          "aui-io-request",
          "aui-loading-mask-deprecated",
        ],
      },
      "aui-io-request": {
        requires: [
          "io-base",
          "json",
          "plugin",
          "querystring-stringify",
          "aui-component",
        ],
      },
      "aui-io-request-deprecated": {
        requires: [
          "io-base",
          "json",
          "plugin",
          "querystring-stringify",
          "aui-base-deprecated",
        ],
      },
      "aui-layout": {
        requires: [
          "aui-layout-col",
          "aui-layout-row",
          "aui-node-base",
          "base-build",
          "datatype-number-parse",
          "event-resize",
        ],
      },
      "aui-layout-builder": {
        requires: [
          "aui-classnamemanager",
          "aui-layout",
          "aui-layout-builder-add-col",
          "aui-layout-builder-add-row",
          "aui-layout-builder-move",
          "aui-layout-builder-remove-row",
          "aui-layout-builder-resize-col",
          "aui-node-base",
          "base-build",
          "node-event-delegate",
          "node-screen",
          "node-style",
        ],
      },
      "aui-layout-builder-add-col": {
        requires: ["event-key", "node-base"],
        skinnable: true,
      },
      "aui-layout-builder-add-row": {
        requires: ["aui-node-base", "base-build", "node-scroll-info"],
        skinnable: true,
      },
      "aui-layout-builder-move": {
        requires: ["aui-node-base", "base-build"],
        skinnable: true,
      },
      "aui-layout-builder-remove-row": {
        requires: ["aui-node-base", "base-build"],
        skinnable: true,
      },
      "aui-layout-builder-resize-col": {
        requires: [
          "dd-constrain",
          "dd-delegate",
          "dd-drop-plugin",
          "dd-proxy",
          "event-mouseenter",
          "node-base",
        ],
        skinnable: true,
      },
      "aui-layout-col": {
        requires: ["aui-classnamemanager", "aui-node-base", "base-build"],
        skinnable: true,
      },
      "aui-layout-row": {
        requires: ["array-invoke", "aui-node-base", "base-build"],
        skinnable: true,
      },
      "aui-linkedset": { requires: ["aui-set"] },
      "aui-live-search-deprecated": { requires: ["aui-base-deprecated"] },
      "aui-loading-mask-deprecated": {
        requires: ["plugin", "aui-overlay-mask-deprecated"],
        skinnable: true,
      },
      "aui-map": { requires: ["base-build"] },
      "aui-menu": {
        requires: [
          "base-build",
          "event-mouseenter",
          "event-resize",
          "widget",
          "widget-position",
          "widget-position-align",
          "widget-position-constrain",
          "widget-stack",
          "aui-classnamemanager",
          "aui-debounce",
          "aui-dropdown",
          "aui-menu-item",
        ],
        skinnable: true,
      },
      "aui-menu-item": {
        requires: [
          "base-build",
          "node-base",
          "aui-classnamemanager",
          "aui-node",
          "aui-widget-shortcut",
        ],
      },
      "aui-messaging": { requires: ["querystring", "aui-timer"] },
      "aui-modal": {
        requires: [
          "widget",
          "widget-autohide",
          "widget-buttons",
          "widget-modality",
          "widget-position",
          "widget-position-align",
          "widget-position-constrain",
          "widget-stack",
          "widget-stdmod",
          "dd-plugin",
          "dd-constrain",
          "timers",
          "aui-classnamemanager",
          "aui-widget-cssclass",
          "aui-widget-toggle",
          "aui-widget-toolbars",
        ],
        skinnable: true,
      },
      "aui-modal-resize": {
        condition: {
          name: "aui-modal-resize",
          test: function (A) {
            return !A.UA.mobile;
          },
          trigger: "aui-modal",
        },
        requires: ["aui-modal", "resize-plugin"],
      },
      "aui-node": { use: ["aui-node-base"] },
      "aui-node-accessible": {
        requires: ["aui-node-base", "event-custom-base"],
      },
      "aui-node-base": {
        requires: [
          "array-extras",
          "aui-base-lang",
          "aui-classnamemanager",
          "aui-debounce",
          "node",
        ],
      },
      "aui-node-html5": {
        condition: { name: "aui-node-html5", trigger: "aui-node", ua: "ie" },
        requires: ["collection", "aui-node-base"],
      },
      "aui-options-data-editor": {
        requires: [
          "aui-data-editor",
          "dd-constrain",
          "dd-delegate",
          "dd-drop-plugin",
          "dd-proxy",
          "event-valuechange",
          "node-event-delegate",
        ],
        skinnable: true,
      },
      "aui-overlay-base-deprecated": {
        requires: [
          "widget-position",
          "widget-stack",
          "widget-position-align",
          "widget-position-constrain",
          "widget-stdmod",
          "aui-component",
        ],
      },
      "aui-overlay-context-deprecated": {
        requires: [
          "aui-overlay-manager-deprecated",
          "aui-delayed-task-deprecated",
          "aui-aria",
        ],
      },
      "aui-overlay-context-panel-deprecated": {
        requires: ["anim", "aui-overlay-context-deprecated"],
        skinnable: true,
      },
      "aui-overlay-deprecated": {
        use: [
          "aui-overlay-base-deprecated",
          "aui-overlay-context-deprecated",
          "aui-overlay-context-panel-deprecated",
          "aui-overlay-manager-deprecated",
          "aui-overlay-mask-deprecated",
        ],
      },
      "aui-overlay-manager-deprecated": {
        requires: [
          "overlay",
          "plugin",
          "aui-base-deprecated",
          "aui-overlay-base-deprecated",
        ],
      },
      "aui-overlay-mask-deprecated": {
        requires: [
          "event-resize",
          "aui-base-deprecated",
          "aui-overlay-base-deprecated",
        ],
        skinnable: true,
      },
      "aui-pagination": {
        requires: [
          "node-event-delegate",
          "aui-node",
          "aui-component",
          "widget-htmlparser",
        ],
        skinnable: true,
      },
      "aui-palette": {
        requires: [
          "base-build",
          "event-hover",
          "widget",
          "aui-classnamemanager",
          "aui-base",
          "aui-widget-cssclass",
          "aui-widget-toggle",
        ],
        skinnable: true,
      },
      "aui-parse-content": {
        requires: [
          "async-queue",
          "plugin",
          "io-base",
          "aui-component",
          "aui-node-base",
        ],
      },
      "aui-popover": {
        requires: [
          "event-resize",
          "widget",
          "widget-autohide",
          "widget-buttons",
          "widget-modality",
          "widget-position",
          "widget-position-align",
          "widget-position-constrain",
          "widget-stack",
          "widget-stdmod",
          "aui-classnamemanager",
          "aui-widget-cssclass",
          "aui-widget-toggle",
          "aui-widget-toolbars",
          "aui-widget-transition",
          "aui-widget-trigger",
          "aui-widget-position-align-suggestion",
          "aui-component",
          "aui-node-base",
        ],
        skinnable: true,
      },
      "aui-progressbar": {
        requires: ["aui-node", "aui-component", "aui-aria"],
        skinnable: true,
      },
      "aui-promise": { requires: ["array-invoke", "promise", "oop"] },
      "aui-property-builder": {
        requires: [
          "dd",
          "collection",
          "aui-property-builder-available-field",
          "aui-property-builder-field-support",
          "aui-property-builder-settings",
          "aui-tabview",
        ],
        skinnable: true,
      },
      "aui-property-builder-available-field": {
        requires: ["base", "aui-component", "aui-node"],
      },
      "aui-property-builder-field-support": {},
      "aui-property-builder-settings": {
        requires: ["aui-tabview", "aui-datatable-property-list"],
      },
      "aui-radio-group-data-editor": {
        requires: ["aui-data-editor", "node-event-delegate"],
        skinnable: true,
      },
      "aui-rating": { use: ["aui-rating-base", "aui-rating-thumb"] },
      "aui-rating-base": {
        requires: [
          "aui-component",
          "aui-node-base",
          "widget-htmlparser",
          "widget-uievents",
        ],
        skinnable: true,
      },
      "aui-rating-thumb": { requires: ["aui-rating-base"] },
      "aui-resize-base-deprecated": {
        requires: ["dd-drag", "dd-delegate", "dd-drop", "aui-base-deprecated"],
        skinnable: true,
      },
      "aui-resize-constrain-deprecated": {
        requires: ["dd-constrain", "plugin", "aui-resize-base-deprecated"],
      },
      "aui-resize-deprecated": {
        skinnable: true,
        use: ["aui-resize-base-deprecated", "aui-resize-constrain-deprecated"],
      },
      "aui-scale-data-editor": {
        requires: [
          "aui-classnamemanager",
          "aui-data-editor",
          "event-valuechange",
        ],
      },
      "aui-scheduler": {
        use: [
          "event-gestures",
          "aui-scheduler-base",
          "aui-scheduler-event-recorder",
          "aui-scheduler-view-agenda",
          "aui-scheduler-view-day",
          "aui-scheduler-view-month",
          "aui-scheduler-view-table-dd",
          "aui-scheduler-view-table",
          "aui-scheduler-view-week",
          "aui-viewport",
        ],
      },
      "aui-scheduler-base": {
        requires: [
          "model",
          "model-list",
          "widget-stdmod",
          "color-hsl",
          "aui-event-base",
          "aui-node-base",
          "aui-component",
          "aui-datatype",
          "aui-button",
          "node-focusmanager",
        ],
        skinnable: true,
      },
      "aui-scheduler-event-recorder": {
        requires: [
          "querystring",
          "io-form",
          "overlay",
          "aui-scheduler-base",
          "aui-popover",
        ],
        skinnable: true,
      },
      "aui-scheduler-touch": {
        condition: {
          name: "aui-scheduler-touch",
          trigger: "aui-scheduler",
          ua: "touchEnabled",
        },
        requires: ["base-build", "aui-scheduler"],
        skinnable: true,
      },
      "aui-scheduler-view-agenda": {
        requires: ["aui-scheduler-base"],
        skinnable: true,
      },
      "aui-scheduler-view-day": {
        requires: [
          "dd-drag",
          "dd-delegate",
          "dd-drop",
          "dd-constrain",
          "aui-scheduler-view-table",
        ],
        skinnable: true,
      },
      "aui-scheduler-view-month": {
        requires: ["aui-scheduler-view-table"],
        skinnable: true,
      },
      "aui-scheduler-view-table": {
        requires: ["overlay", "aui-scheduler-base"],
        skinnable: true,
      },
      "aui-scheduler-view-table-dd": {
        requires: [
          "dd-drag",
          "dd-delegate",
          "dd-drop",
          "aui-scheduler-view-table",
        ],
      },
      "aui-scheduler-view-week": {
        requires: ["aui-scheduler-view-day"],
        skinnable: true,
      },
      "aui-scroller-deprecated": {
        requires: [
          "event-mouseenter",
          "aui-base-deprecated",
          "aui-simple-anim-deprecated",
        ],
        skinnable: true,
      },
      "aui-scrollspy": {
        requires: ["base-build", "node-screen", "aui-classnamemanager"],
      },
      "aui-search": { use: ["aui-search-tst"] },
      "aui-search-tst": { requires: ["aui-component"] },
      "aui-selector": { requires: ["selector-css3", "aui-classnamemanager"] },
      "aui-set": { requires: ["aui-map"] },
      "aui-simple-anim-deprecated": { requires: ["aui-base-deprecated"] },
      "aui-skin-deprecated": { type: "css" },
      "aui-sortable": { use: ["aui-sortable-layout", "aui-sortable-list"] },
      "aui-sortable-layout": {
        requires: [
          "dd-delegate",
          "dd-drag",
          "dd-drop",
          "dd-proxy",
          "aui-node",
          "aui-component",
        ],
        skinnable: true,
      },
      "aui-sortable-list": {
        requires: [
          "dd-drag",
          "dd-drop",
          "dd-proxy",
          "dd-scroll",
          "aui-node",
          "aui-component",
        ],
      },
      "aui-state-interaction-deprecated": {
        requires: ["aui-base-deprecated", "plugin"],
      },
      "aui-surface": { use: ["aui-surface-app", "aui-surface-screen"] },
      "aui-surface-app": {
        requires: [
          "event-delegate",
          "node-event-html5",
          "aui-surface-base",
          "aui-surface-screen",
          "aui-surface-screen-route",
        ],
      },
      "aui-surface-base": {
        requires: [
          "base-build",
          "node-style",
          "timers",
          "aui-debounce",
          "aui-promise",
          "aui-parse-content",
        ],
      },
      "aui-surface-screen": { requires: ["base-build"] },
      "aui-surface-screen-html": {
        requires: [
          "aui-base",
          "aui-io-request",
          "aui-promise",
          "aui-surface-screen",
          "aui-url",
        ],
      },
      "aui-surface-screen-route": { requires: ["base-build"] },
      "aui-swf-deprecated": {
        requires: [
          "querystring-parse-simple",
          "querystring-stringify-simple",
          "aui-base-deprecated",
        ],
      },
      "aui-tabs-data-editor": { requires: ["aui-data-editor", "aui-tabview"] },
      "aui-tabview": {
        requires: [
          "selector-css3",
          "tabview",
          "aui-component",
          "aui-widget-css",
        ],
        skinnable: true,
      },
      "aui-template-deprecated": { requires: ["aui-base-deprecated"] },
      "aui-text-data-editor": {
        requires: ["aui-data-editor", "event-valuechange"],
        skinnable: true,
      },
      "aui-text-data-unicode": { requires: ["text"] },
      "aui-text-unicode": { requires: ["aui-text-data-unicode"] },
      "aui-textboxlist-deprecated": {
        requires: [
          "anim-node-plugin",
          "aui-autocomplete-deprecated",
          "aui-button-item-deprecated",
          "aui-data-set-deprecated",
          "escape",
          "node-focusmanager",
        ],
        skinnable: true,
      },
      "aui-timepicker": {
        requires: [
          "autocomplete",
          "aui-datepicker-delegate",
          "aui-datepicker-popover",
        ],
        skinnable: true,
      },
      "aui-timepicker-native": {
        requires: [
          "base",
          "base-build",
          "aui-node-base",
          "aui-datepicker-delegate",
          "aui-datepicker-native",
        ],
      },
      "aui-timer": { requires: ["oop"] },
      "aui-toggler": { use: ["aui-toggler-base", "aui-toggler-delegate"] },
      "aui-toggler-accessibility": { requires: ["aui-toggler-base"] },
      "aui-toggler-base": {
        requires: [
          "transition",
          "aui-selector",
          "aui-event-base",
          "aui-node",
          "aui-component",
          "event-tap",
        ],
        skinnable: true,
      },
      "aui-toggler-delegate": {
        requires: ["array-invoke", "node-event-delegate", "aui-toggler-base"],
      },
      "aui-toolbar": {
        requires: [
          "arraylist",
          "arraylist-add",
          "aui-component",
          "aui-button-core",
        ],
      },
      "aui-tooltip": { use: ["aui-tooltip-base", "aui-tooltip-delegate"] },
      "aui-tooltip-base": {
        requires: [
          "aui-aria",
          "aui-classnamemanager",
          "aui-component",
          "aui-debounce",
          "aui-node-base",
          "aui-widget-cssclass",
          "aui-widget-toggle",
          "aui-widget-transition",
          "aui-widget-trigger",
          "aui-widget-position-align-suggestion",
          "event-hover",
          "event-resize",
          "escape",
          "widget",
          "widget-autohide",
          "widget-position",
          "widget-position-align",
          "widget-position-constrain",
          "widget-stack",
          "widget-stdmod",
        ],
        skinnable: true,
      },
      "aui-tooltip-delegate": {
        requires: ["aui-tooltip-base", "node-event-delegate"],
      },
      "aui-tooltip-deprecated": {
        requires: ["aui-overlay-context-panel-deprecated"],
        skinnable: true,
      },
      "aui-tpl-snippets-base-deprecated": {
        requires: ["aui-template-deprecated"],
      },
      "aui-tpl-snippets-checkbox-deprecated": {
        requires: ["aui-tpl-snippets-base-deprecated"],
      },
      "aui-tpl-snippets-deprecated": {
        use: [
          "aui-tpl-snippets-base-deprecated",
          "aui-tpl-snippets-checkbox-deprecated",
          "aui-tpl-snippets-input-deprecated",
          "aui-tpl-snippets-select-deprecated",
          "aui-tpl-snippets-textarea-deprecated",
        ],
      },
      "aui-tpl-snippets-input-deprecated": {
        requires: ["aui-tpl-snippets-base-deprecated"],
      },
      "aui-tpl-snippets-select-deprecated": {
        requires: ["aui-tpl-snippets-base-deprecated"],
      },
      "aui-tpl-snippets-textarea-deprecated": {
        requires: ["aui-tpl-snippets-base-deprecated"],
      },
      "aui-tree": {
        use: [
          "aui-tree-data",
          "aui-tree-io",
          "aui-tree-node",
          "aui-tree-paginator",
          "aui-tree-view",
        ],
      },
      "aui-tree-data": {
        requires: [
          "aui-base-core",
          "aui-base-lang",
          "aui-node-base",
          "aui-timer",
          "aui-component",
        ],
      },
      "aui-tree-io": { requires: ["aui-component", "aui-io"] },
      "aui-tree-node": {
        requires: [
          "json",
          "querystring-stringify",
          "aui-tree-data",
          "aui-tree-io",
          "aui-tree-paginator",
          "event-key",
        ],
      },
      "aui-tree-paginator": { requires: ["yui-base"] },
      "aui-tree-view": {
        requires: [
          "dd-delegate",
          "dd-proxy",
          "widget",
          "aui-tree-node",
          "aui-tree-paginator",
          "aui-tree-io",
        ],
        skinnable: true,
      },
      "aui-undo-redo": {
        requires: ["aui-base", "base", "base-build", "event-key", "promise"],
      },
      "aui-url": {
        requires: ["oop", "querystring-parse", "querystring-stringify"],
      },
      "aui-video": {
        requires: [
          "event-resize",
          "node-event-html5",
          "querystring-stringify-simple",
          "aui-aria",
          "aui-node",
          "aui-component",
          "aui-debounce",
        ],
        skinnable: true,
      },
      "aui-viewport": { requires: ["aui-node", "aui-component"] },
      "aui-widget": { use: ["aui-widget-cssclass", "aui-widget-toolbars"] },
      "aui-widget-core": { use: ["aui-widget-cssclass"] },
      "aui-widget-cssclass": { requires: ["widget-base"] },
      "aui-widget-position-align-suggestion": {
        requires: ["widget-position-align", "widget-stdmod"],
      },
      "aui-widget-responsive": { requires: ["event-resize", "widget-base"] },
      "aui-widget-shortcut": { requires: ["base"] },
      "aui-widget-swipe": {
        requires: [
          "classnamemanager",
          "scrollview-base",
          "scrollview-paginator",
          "timers",
        ],
      },
      "aui-widget-toggle": {},
      "aui-widget-toolbars": { requires: ["widget-stdmod", "aui-toolbar"] },
      "aui-widget-transition": { requires: ["transition"] },
      "aui-widget-trigger": { requires: ["node"] },
    });
    YUI.Env[Y.version].md5 = "d7c627eb00edd6b6f054d8f6e7147480";
    A.UA.edge = (function () {
      var edgeVersion = A.UA.userAgent.match(/Edge\/(.[0-9.]+)/);
      if (edgeVersion) return edgeVersion[1];
      return 0;
    })();
    A.supportsDOMEvent = function (domNode, eventName) {
      eventName = "on" + eventName;
      if (!(eventName in domNode)) {
        if (!domNode.setAttribute) domNode = A.config.doc.createElement("div");
        if (domNode.setAttribute) {
          domNode.setAttribute(eventName, "");
          return typeof domNode[eventName] === "function";
        }
      }
      domNode = null;
      return true;
    };
    (function () {
      var slice = Array.prototype.slice;
      YUI.prototype.ready = function () {
        var instance = this,
          xargs = arguments,
          index = xargs.length - 1,
          modules = slice.call(arguments, 0, index);
        modules.unshift("event-base");
        modules.push(function (instance) {
          var args = arguments;
          instance.on("domready", function () {
            xargs[index].apply(this, args);
          });
        });
        instance.use.apply(instance, modules);
      };
    })();
  },
  "3.1.0-deprecated.82"
);
YUI.add("aui", function (A, NAME) {}, "3.1.0-deprecated.82");
YUI.Env.core.push.apply(YUI.Env.core, ["aui-base-core"]);
YUI.add(
  "aui-base-html5-shiv",
  function (A, NAME) {
    A.HTML5_ELEMENTS = [
      "abbr",
      "article",
      "aside",
      "audio",
      "canvas",
      "command",
      "datalist",
      "details",
      "figure",
      "figcaption",
      "footer",
      "header",
      "hgroup",
      "keygen",
      "mark",
      "meter",
      "nav",
      "output",
      "progress",
      "section",
      "source",
      "summary",
      "time",
      "video",
    ];
    A.html5shiv = function (frag) {
      var DOC = frag || A.config.doc;
      if (A.UA.ie && DOC && DOC.createElement) {
        var elements = A.HTML5_ELEMENTS,
          length = elements.length;
        while (length--) DOC.createElement(elements[length]);
      }
      return frag;
    };
  },
  "3.1.0-deprecated.82"
);
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol")
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  else
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  return _typeof(obj);
}
YUI.add(
  "liferay-browser-selectors",
  function (A) {
    var REGEX_VERSION_DOT = /\./g;
    var YUI3_JS_ENABLED = "yui3-js-enabled";
    var parseVersionNumber = function parseVersionNumber(str) {
      var count = 0;
      return parseFloat(
        str.replace(REGEX_VERSION_DOT, function () {
          return count++ == 1 ? "" : ".";
        })
      );
    };
    var DEFAULTS_VERSION = ["0", "0"];
    var getVersion = function getVersion(regex, userAgent) {
      var version = (userAgent.match(regex) || DEFAULTS_VERSION)[1];
      return parseVersionNumber(version);
    };
    var BROWSERS = [
      "ie",
      "opera",
      "chrome",
      "edge",
      "aol",
      "camino",
      "firefox",
      "flock",
      "mozilla",
      "netscape",
      "icab",
      "konqueror",
      "safari",
    ];
    var MAP_OS_SELECTORS = { macintosh: "mac", windows: "win" };
    var nav = navigator;
    var CONFIG = A.config;
    var DOC = CONFIG.doc;
    var userAgent = nav.userAgent;
    var UA = A.UA;
    var OS = UA.os;
    var UAX = {
      agent: userAgent,
      aol: 0,
      browser: 0,
      camino: 0,
      firefox: 0,
      flock: 0,
      icab: 0,
      konqueror: 0,
      mozilla: 0,
      netscape: 0,
      safari: 0,
    };
    UAX.mac = OS == "macintosh";
    UAX.rhino = OS == "rhino";
    UAX.win = OS == "windows";
    var BrowserSelectors = {
      getSelectors: function getSelectors() {
        if (!UA.selectors) {
          if (userAgent.indexOf("Edge") !== -1)
            UAX.edge = getVersion(/Edge\/([^\s]*)/, userAgent);
          if (UA.ie) {
            UAX.aol = getVersion(/America Online Browser ([^\s]*);/, userAgent);
            var docMode = DOC.documentMode;
            if (docMode) {
              UA.browser = UA.ie;
              UA.ie = docMode;
            }
          } else if (UA.gecko) {
            UAX.netscape = getVersion(
              /(Netscape|Navigator)\/([^\s]*)/,
              userAgent
            );
            UAX.flock = getVersion(/Flock\/([^\s]*)/, userAgent);
            UAX.camino = getVersion(/Camino\/([^\s]*)/, userAgent);
            UAX.firefox = getVersion(/Firefox\/([^\s]*)/, userAgent);
          } else if (UA.webkit)
            UAX.safari = getVersion(/Version\/([^\s]*) Safari/, userAgent);
          else {
            UAX.icab = getVersion(/iCab(?:\/|\s)?([^\s]*)/, userAgent);
            UAX.konqueror = getVersion(/Konqueror\/([^\s]*)/, userAgent);
          }
          if (!UAX.win && !UAX.mac) {
            var linux = /Linux/.test(userAgent);
            var sun = /Solaris|SunOS/.test(userAgent);
            if (linux) {
              UA.os = "linux";
              UAX.linux = linux;
            } else if (sun) {
              UA.os = "sun";
              UAX.sun = sun;
            }
          }
          var touch = UA.touchEnabled;
          UAX.touch = touch;
          UAX.touchMobile = touch && !!UA.mobile;
          A.mix(UA, UAX);
          var browserList = [];
          var versionMajor = 0;
          var browser;
          var uaVersionMajor;
          var uaVersionMinor;
          var version;
          var versionObj = { major: versionMajor, string: "" };
          var i = BROWSERS.length;
          while (i--) {
            browser = BROWSERS[i];
            version = UA[browser];
            if (version > 0) {
              versionMajor = parseInt(version, 10);
              uaVersionMajor = browser + versionMajor;
              uaVersionMinor = browser + version;
              if (String(version).indexOf(".") > -1)
                uaVersionMinor = uaVersionMinor.replace(/\.(\d).*/, "-$1");
              else uaVersionMinor += "-0";
              browserList.push(browser, uaVersionMajor, uaVersionMinor);
              versionObj.string = browser + "";
              versionObj.major = versionMajor;
            }
          }
          UA.version = versionObj;
          UA.renderer = "";
          if (UA.ie) UA.renderer = "trident";
          else if (UA.edge) UA.renderer = "edgeHTML";
          else if (UA.gecko) UA.renderer = "gecko";
          else if (UA.webkit) UA.renderer = "webkit";
          else if (UA.opera) UA.renderer = "presto";
          A.UA = UA;
          var selectors = [UA.renderer, "js"].concat(browserList);
          var osSelector = MAP_OS_SELECTORS[UA.os] || UA.os;
          selectors.push(osSelector);
          if (UA.mobile) selectors.push("mobile");
          if (UA.secure) selectors.push("secure");
          if (UA.touch) selectors.push("touch");
          UA.selectors = selectors.join(" ");
          var svg;
          var vml;
          vml = !(svg = !!(
            CONFIG.win.SVGAngle ||
            DOC.implementation.hasFeature(
              "http://www.w3.org/TR/SVG11/feature#BasicStructure",
              "1.1"
            )
          ));
          if (vml) {
            var behaviorObj;
            var div = DOC.createElement("div");
            div.innerHTML = '\x3cv:shape adj\x3d"1"/\x3e';
            behaviorObj = div.firstChild;
            behaviorObj.style.behavior = "url(#default#VML)";
            if (!(behaviorObj && _typeof(behaviorObj.adj) == "object"))
              vml = false;
            div = null;
          }
          YUI._VML = vml;
          YUI._SVG = svg;
          UA.vml = YUI._VML;
          UA.svg = YUI._SVG;
        }
        return UA.selectors;
      },
      run: function run() {
        var documentElement = DOC.documentElement;
        var selectors = this.getSelectors();
        UA.dir = documentElement.getAttribute("dir") || "ltr";
        if (documentElement.className.indexOf(UA.dir) === -1)
          selectors += " " + UA.dir;
        if (
          documentElement.className.indexOf(YUI3_JS_ENABLED) === -1 &&
          selectors.indexOf(YUI3_JS_ENABLED) === -1
        )
          selectors += " " + YUI3_JS_ENABLED;
        documentElement.className += " " + selectors;
      },
    };
    Liferay.BrowserSelectors = BrowserSelectors;
  },
  "",
  { requires: ["yui-base"] }
);
(function () {
  var LiferayAUI = Liferay.AUI;
  var COMBINE = LiferayAUI.getCombine();
  var CORE_MODULES = YUI.Env.core;
  var INPUT_EL = document.createElement("input");
  var PATH_EDITOR_CKEDITOR = LiferayAUI.getEditorCKEditorPath();
  var PATH_JAVASCRIPT = LiferayAUI.getJavaScriptRootPath();
  var SUPPORTS_INPUT_SELECTION =
    typeof INPUT_EL.selectionStart === "number" &&
    typeof INPUT_EL.selectionEnd === "number";
  var testHistory = function testHistory(A) {
    var WIN = A.config.win;
    var HISTORY = WIN.history;
    return (
      HISTORY &&
      HISTORY.pushState &&
      HISTORY.replaceState &&
      ("onpopstate" in WIN || A.UA.gecko >= 2)
    );
  };
  window.YUI_config = {
    base: Liferay.ThemeDisplay.getCDNBaseURL() + PATH_JAVASCRIPT + "/aui/",
    combine: COMBINE,
    comboBase: LiferayAUI.getComboPath(),
    filter: Liferay.AUI.getFilter(),
    groups: {
      editor: {
        base: PATH_EDITOR_CKEDITOR,
        combine: COMBINE,
        modules: { "inline-editor-ckeditor": { path: "ckeditor/main.js" } },
        root: PATH_EDITOR_CKEDITOR,
      },
      liferay: {
        base:
          Liferay.ThemeDisplay.getCDNBaseURL() + PATH_JAVASCRIPT + "/liferay/",
        combine: COMBINE,
        filter: Liferay.AUI.getFilterConfig(),
        modules: {
          "liferay-address": { path: "address.js", requires: [] },
          "liferay-alert": {
            path: "alert.js",
            requires: [
              "aui-alert",
              "aui-component",
              "event-mouseenter",
              "liferay-portlet-base",
              "timers",
            ],
          },
          "liferay-asset-addon-entry-selector": {
            path: "asset_addon_entry_selector.js",
            requires: [
              "aui-component",
              "liferay-portlet-base",
              "liferay-util-window",
            ],
          },
          "liferay-asset-categories-selector": {
            path: "asset_categories_selector.js",
            requires: ["aui-tree", "liferay-asset-tags-selector"],
          },
          "liferay-asset-tags-selector": {
            path: "asset_tags_selector.js",
            requires: [
              "array-extras",
              "async-queue",
              "aui-autocomplete-deprecated",
              "aui-io-plugin-deprecated",
              "aui-live-search-deprecated",
              "aui-modal",
              "aui-template-deprecated",
              "aui-textboxlist-deprecated",
              "datasource-cache",
              "liferay-service-datasource",
            ],
          },
          "liferay-auto-fields": {
            path: "auto_fields.js",
            requires: [
              "aui-base",
              "aui-data-set-deprecated",
              "aui-parse-content",
              "base",
              "liferay-form",
              "liferay-menu",
              "liferay-portlet-base",
              "liferay-undo-manager",
              "sortable",
            ],
          },
          "liferay-autocomplete-input": {
            path: "autocomplete_input.js",
            requires: [
              "aui-base",
              "autocomplete",
              "autocomplete-filters",
              "autocomplete-highlighters",
            ],
          },
          "liferay-autocomplete-input-caretindex": {
            condition: {
              name: "liferay-autocomplete-input-caretindex",
              test: function test() {
                return SUPPORTS_INPUT_SELECTION;
              },
              trigger: "liferay-autocomplete-textarea",
            },
            path: "autocomplete_input_caretindex.js",
            requires: ["liferay-autocomplete-textarea"],
          },
          "liferay-autocomplete-input-caretindex-sel": {
            condition: {
              name: "liferay-autocomplete-input-caretindex-sel",
              test: function test() {
                return !SUPPORTS_INPUT_SELECTION;
              },
              trigger: "liferay-autocomplete-textarea",
            },
            path: "autocomplete_input_caretindex_sel.js",
            requires: ["liferay-autocomplete-textarea"],
          },
          "liferay-autocomplete-input-caretoffset": {
            condition: {
              name: "liferay-autocomplete-input-caretoffset",
              test: function test(A) {
                return !(A.UA.ie && A.UA.ie < 9);
              },
              trigger: "liferay-autocomplete-textarea",
            },
            path: "autocomplete_input_caretoffset.js",
            requires: ["liferay-autocomplete-textarea"],
          },
          "liferay-autocomplete-input-caretoffset-sel": {
            condition: {
              name: "liferay-autocomplete-input-caretoffset-sel",
              test: function test(A) {
                return A.UA.ie && A.UA.ie < 9;
              },
              trigger: "liferay-autocomplete-textarea",
            },
            path: "autocomplete_input_caretoffset_sel.js",
            requires: ["liferay-autocomplete-textarea"],
          },
          "liferay-autocomplete-textarea": {
            path: "autocomplete_textarea.js",
            requires: ["liferay-autocomplete-input"],
          },
          "liferay-browser-selectors": {
            path: "browser_selectors.js",
            requires: ["yui-base"],
          },
          "liferay-cover-cropper": {
            path: "cover_cropper.js",
            requires: [
              "aui-base",
              "aui-component",
              "dd-constrain",
              "dd-drag",
              "plugin",
            ],
          },
          "liferay-crop-region": {
            path: "crop_region.js",
            requires: ["aui-base"],
          },
          "liferay-dd-proxy": { path: "dd_proxy.js", requires: ["dd-proxy"] },
          "liferay-dynamic-select": {
            path: "dynamic_select.js",
            requires: ["aui-base"],
          },
          "liferay-form": {
            path: "form.js",
            requires: ["aui-base", "aui-form-validator"],
          },
          "liferay-form-placeholders": {
            condition: {
              name: "liferay-form-placeholders",
              test: function test() {
                return !("placeholder" in INPUT_EL);
              },
              trigger: "liferay-form",
            },
            path: "form_placeholders.js",
            requires: ["liferay-form", "plugin"],
          },
          "liferay-fullscreen-source-editor": {
            path: "fullscreen_source_editor.js",
            requires: ["liferay-source-editor"],
          },
          "liferay-history": {
            path: "history.js",
            requires: ["history-hash", "querystring-parse-simple"],
          },
          "liferay-history-html5": {
            condition: {
              name: "liferay-history-html5",
              test: testHistory,
              trigger: "liferay-history",
            },
            path: "history_html5.js",
            requires: [
              "history-html5",
              "liferay-history",
              "querystring-stringify-simple",
            ],
          },
          "liferay-history-manager": {
            path: "history_manager.js",
            requires: ["liferay-history"],
          },
          "liferay-hudcrumbs": {
            path: "hudcrumbs.js",
            requires: ["aui-base", "aui-debounce", "event-resize"],
          },
          "liferay-icon": { path: "icon.js", requires: ["aui-base"] },
          "liferay-inline-editor-base": {
            path: "inline_editor_base.js",
            requires: ["aui-base", "aui-overlay-base-deprecated"],
          },
          "liferay-input-localized": {
            path: "input_localized.js",
            requires: [
              "aui-base",
              "aui-component",
              "aui-event-input",
              "aui-palette",
              "aui-set",
              "portal-available-languages",
            ],
          },
          "liferay-input-move-boxes": {
            path: "input_move_boxes.js",
            plugins: {
              "liferay-input-move-boxes-touch": {
                condition: {
                  name: "liferay-input-move-boxes-touch",
                  trigger: "liferay-input-move-boxes",
                  ua: "touchMobile",
                },
              },
            },
            requires: ["aui-base", "aui-toolbar"],
          },
          "liferay-input-move-boxes-touch": {
            path: "input_move_boxes_touch.js",
            requires: [
              "aui-base",
              "aui-template-deprecated",
              "liferay-input-move-boxes",
              "sortable",
            ],
          },
          "liferay-item-selector-dialog": {
            path: "item_selector_dialog.js",
            requires: ["aui-component"],
          },
          "liferay-item-selector-repository-entry-browser": {
            path: "item_selector_repository_entry_browser.js",
            requires: [
              "liferay-item-selector-uploader",
              "liferay-item-viewer",
              "liferay-notice",
              "liferay-portlet-base",
            ],
          },
          "liferay-item-selector-uploader": {
            path: "item_selector_uploader.js",
            requires: [
              "aui-base",
              "aui-progressbar",
              "liferay-portlet-base",
              "uploader",
            ],
          },
          "liferay-item-selector-url": {
            path: "item_selector_url.js",
            requires: [
              "aui-event-input",
              "liferay-item-viewer",
              "liferay-portlet-base",
            ],
          },
          "liferay-item-viewer": {
            path: "item_viewer.js",
            requires: [
              "aui-component",
              "aui-image-viewer",
              "liferay-portlet-url",
            ],
          },
          "liferay-language": { path: "language.js" },
          "liferay-layout": { path: "layout.js" },
          "liferay-layout-column": {
            path: "layout_column.js",
            requires: ["aui-sortable-layout", "dd"],
          },
          "liferay-list-view": {
            path: "list_view.js",
            requires: ["aui-base", "transition"],
          },
          "liferay-logo-editor": {
            path: "logo_editor.js",
            requires: [
              "aui-image-cropper",
              "liferay-alert",
              "liferay-portlet-base",
            ],
          },
          "liferay-logo-selector": {
            path: "logo_selector.js",
            requires: ["aui-base"],
          },
          "liferay-menu": {
            path: "menu.js",
            requires: ["aui-debounce", "aui-node"],
          },
          "liferay-menu-filter": {
            path: "menu_filter.js",
            requires: [
              "autocomplete-base",
              "autocomplete-filters",
              "autocomplete-highlighters",
            ],
          },
          "liferay-menu-toggle": {
            path: "menu_toggle.js",
            requires: [
              "aui-node",
              "event-outside",
              "event-tap",
              "liferay-menu-filter",
            ],
          },
          "liferay-message": { path: "message.js", requires: ["aui-base"] },
          "liferay-navigation": {
            path: "navigation.js",
            requires: ["aui-component", "event-mouseenter"],
          },
          "liferay-navigation-interaction": {
            path: "navigation_interaction.js",
            plugins: {
              "liferay-navigation-interaction-touch": {
                condition: {
                  name: "liferay-navigation-interaction-touch",
                  trigger: "liferay-navigation-interaction",
                  ua: "touch",
                },
              },
            },
            requires: [
              "aui-base",
              "aui-component",
              "event-mouseenter",
              "node-focusmanager",
              "plugin",
            ],
          },
          "liferay-navigation-interaction-touch": {
            path: "navigation_interaction_touch.js",
            requires: [
              "event-tap",
              "event-touch",
              "liferay-navigation-interaction",
            ],
          },
          "liferay-node": { path: "node.js", requires: ["dom-base"] },
          "liferay-notice": {
            path: "notice.js",
            requires: ["aui-base", "transition"],
          },
          "liferay-notification": {
            path: "notification.js",
            requires: ["liferay-alert"],
          },
          "liferay-pagination": {
            path: "pagination.js",
            requires: ["aui-pagination"],
          },
          "liferay-panel-search": {
            path: "panel_search.js",
            requires: ["aui-base", "liferay-search-filter"],
          },
          "liferay-poller": {
            path: "poller.js",
            requires: ["aui-base", "json"],
          },
          "liferay-portlet-base": {
            path: "portlet_base.js",
            requires: ["aui-base"],
          },
          "liferay-portlet-url": {
            path: "portlet_url.js",
            requires: ["aui-base"],
          },
          "liferay-preview": {
            path: "preview.js",
            requires: [
              "aui-base",
              "aui-overlay-mask-deprecated",
              "aui-toolbar",
              "liferay-widget-zindex",
            ],
          },
          "liferay-progress": {
            path: "progress.js",
            requires: ["aui-progressbar"],
          },
          "liferay-ratings": { path: "ratings.js", requires: ["aui-rating"] },
          "liferay-resize-rtl": {
            condition: {
              test: function test() {
                return document.documentElement.dir === "rtl";
              },
              trigger: "resize-base",
            },
            path: "resize_rtl.js",
          },
          "liferay-restore-entry": {
            path: "restore_entry.js",
            requires: [
              "aui-io-plugin-deprecated",
              "aui-modal",
              "liferay-portlet-base",
            ],
          },
          "liferay-search-container": {
            path: "search_container.js",
            requires: ["aui-base", "aui-datatable-core"],
          },
          "liferay-search-container-move": {
            path: "search_container_move.js",
            requires: [
              "aui-component",
              "dd-constrain",
              "dd-delegate",
              "dd-drag",
              "dd-drop",
              "dd-proxy",
              "plugin",
            ],
          },
          "liferay-search-container-select": {
            path: "search_container_select.js",
            requires: ["aui-component", "aui-url", "plugin"],
          },
          "liferay-search-filter": {
            path: "search_filter.js",
            requires: ["aui-base", "autocomplete-base", "autocomplete-filters"],
          },
          "liferay-service-datasource": {
            path: "service_datasource.js",
            requires: ["aui-base", "datasource-local"],
          },
          "liferay-session": {
            path: "session.js",
            requires: ["aui-timer", "cookie", "liferay-notification"],
          },
          "liferay-sign-in-modal": {
            path: "sign_in_modal.js",
            requires: [
              "aui-base",
              "aui-component",
              "aui-parse-content",
              "liferay-form",
              "liferay-portlet-url",
              "liferay-util-window",
              "plugin",
            ],
          },
          "liferay-social-bookmarks": {
            path: "social_bookmarks.js",
            requires: ["aui-component", "aui-node"],
          },
          "liferay-sortable": {
            path: "sortable.js",
            requires: ["liferay-dd-proxy", "sortable"],
          },
          "liferay-source-editor": {
            path: "source_editor.js",
            requires: ["aui-ace-editor"],
          },
          "liferay-storage-formatter": {
            path: "storage_formatter.js",
            requires: ["aui-base", "datatype-number-format"],
          },
          "liferay-store": { path: "store.js" },
          "liferay-toggler-interaction": {
            path: "toggler_interaction.js",
            requires: ["liferay-toggler-key-filter"],
          },
          "liferay-toggler-key-filter": {
            path: "toggler_key_filter.js",
            requires: ["aui-event-base"],
          },
          "liferay-token-list": {
            path: "token_list.js",
            requires: ["aui-base", "aui-template-deprecated"],
          },
          "liferay-translation-manager": {
            path: "translation_manager.js",
            requires: ["aui-base"],
          },
          "liferay-undo-manager": {
            path: "undo_manager.js",
            requires: ["aui-data-set-deprecated", "base"],
          },
          "liferay-upload": {
            path: "upload.js",
            requires: [
              "aui-template-deprecated",
              "collection",
              "liferay-portlet-base",
              "uploader",
            ],
          },
          "liferay-util-window": {
            path: "util_window.js",
            requires: [
              "aui-dialog-iframe-deprecated",
              "aui-modal",
              "aui-url",
              "event-resize",
              "liferay-widget-zindex",
            ],
          },
          "liferay-widget-size-animation-plugin": {
            path: "widget_size_animation_plugin.js",
            requires: ["anim-easing", "plugin", "widget"],
          },
          "liferay-widget-zindex": {
            path: "widget_zindex.js",
            requires: ["aui-modal", "plugin"],
          },
          "liferay-xml-formatter": {
            path: "xml_formatter.js",
            requires: ["aui-base"],
          },
        },
        root: PATH_JAVASCRIPT + "/liferay/",
      },
      misc: {
        base: Liferay.ThemeDisplay.getCDNBaseURL() + PATH_JAVASCRIPT + "/misc/",
        combine: COMBINE,
        modules: {
          svg4everybody: { path: "svg4everybody.js" },
          swfobject: { path: "swfobject.js" },
          swfupload: { path: "swfupload/swfupload.js" },
        },
        root: PATH_JAVASCRIPT + "/misc/",
      },
      portal: {
        base:
          Liferay.ThemeDisplay.getCDNBaseURL() + PATH_JAVASCRIPT + "/liferay/",
        combine: false,
        modules: {
          "portal-available-languages": {
            path: LiferayAUI.getAvailableLangPath(),
            requires: ["liferay-language"],
          },
        },
        root: PATH_JAVASCRIPT + "/liferay/",
      },
    },
    insertBefore: "liferayPortalCSS",
    lang: themeDisplay.getBCP47LanguageId(),
    root: PATH_JAVASCRIPT + "/aui/",
    useBrowserConsole: false,
  };
  CORE_MODULES.push("liferay-browser-selectors");
})();
(function () {
  var ALLOY = YUI();
  if (ALLOY.html5shiv) ALLOY.html5shiv();
  var originalUse = ALLOY.use;
  ALLOY.use = function () {
    var args = Array.prototype.slice.call(arguments, 0);
    var currentURL = Liferay.currentURL;
    var originalCallback = args[args.length - 1];
    if (typeof originalCallback === "function")
      args[args.length - 1] = function () {
        if (Liferay.currentURL === currentURL)
          originalCallback.apply(this, arguments);
      };
    return originalUse.apply(this, args);
  };
  window.AUI = function () {
    return ALLOY;
  };
  ALLOY.mix(AUI, YUI);
  AUI.$ = window.jQuery;
  AUI._ = window._;
})();
/*
 svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
var svg4everybody = (function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  return (
    (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 0))
  );
})([
  function (e, t, n) {
    function r(e, t, n, r) {
      if (n) {
        var o = document.createDocumentFragment(),
          a = !t.hasAttribute("viewBox") && n.getAttribute("viewBox");
        a && t.setAttribute("viewBox", a);
        for (
          var i = document.importNode
              ? document.importNode(n, !0)
              : n.cloneNode(!0),
            u = document.createElementNS(
              t.namespaceURI || "http://www.w3.org/2000/svg",
              "g"
            );
          i.childNodes.length;

        )
          u.appendChild(i.firstChild);
        if (r)
          for (var d = 0; r.attributes.length > d; d++) {
            var c = r.attributes[d];
            "xlink:href" !== c.name &&
              "href" !== c.name &&
              u.setAttribute(c.name, c.value);
          }
        o.appendChild(u), e.appendChild(o);
      }
    }
    function o(e, t) {
      (e.onreadystatechange = function () {
        if (4 === e.readyState) {
          var n = e._cachedDocument;
          n ||
            (((n = e._cachedDocument =
              document.implementation.createHTMLDocument("")).body.innerHTML =
              e.responseText),
            n.domain !== document.domain && (n.domain = document.domain),
            (e._cachedTarget = {})),
            e._embeds.splice(0).map(function (o) {
              var a = e._cachedTarget[o.id];
              a || (a = e._cachedTarget[o.id] = n.getElementById(o.id)),
                r(o.parent, o.svg, a, t);
            });
        }
      }),
        e.onreadystatechange();
    }
    function a(e) {
      for (
        var t = e;
        "svg" !== t.nodeName.toLowerCase() && (t = t.parentNode);

      );
      return t;
    }
    e.exports = function (e) {
      var t,
        n = Object(e);
      var i = window.top !== window.self;
      t =
        "polyfill" in n
          ? n.polyfill
          : /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(
              navigator.userAgent
            ) ||
            (navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/) || [])[1] <
              10547 ||
            (navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/) || [])[1] <
              537 ||
            (/\bEdge\/.(\d+)\b/.test(navigator.userAgent) && i);
      var u = {},
        d = window.requestAnimationFrame || setTimeout,
        c = document.getElementsByTagName("use"),
        l = 0;
      t &&
        (function e() {
          if (l && c.length - l <= 0) return (l = 0), void d(e, 67);
          l = 0;
          for (var i = 0; i < c.length; ) {
            var f = c[i],
              s = f.parentNode,
              m = a(s),
              p = f.getAttribute("xlink:href") || f.getAttribute("href");
            if (
              (!p && n.attributeName && (p = f.getAttribute(n.attributeName)),
              m && p)
            ) {
              if (t)
                if (!n.validate || n.validate(p, m, f)) {
                  s.removeChild(f);
                  var g = p.split("#"),
                    b = g.shift(),
                    v = g.join("#");
                  if (b.length) {
                    var h = u[b];
                    h ||
                      ((h = u[b] = new XMLHttpRequest()).open("GET", b),
                      h.send(),
                      (h._embeds = [])),
                      h._embeds.push({ parent: s, svg: m, id: v }),
                      o(h, f);
                  } else r(s, m, document.getElementById(v), f);
                } else ++i, ++l;
            } else ++i;
          }
          d(e, 67);
        })();
    };
  },
]);
YUI.add(
  "arraylist-add",
  function (Y, NAME) {
    Y.mix(Y.ArrayList.prototype, {
      add: function (item, index) {
        var items = this._items;
        if (Y.Lang.isNumber(index)) items.splice(index, 0, item);
        else items.push(item);
        return this;
      },
      remove: function (needle, all, comparator) {
        comparator = comparator || this.itemsAreEqual;
        for (var i = this._items.length - 1; i >= 0; --i)
          if (comparator.call(this, needle, this.item(i))) {
            this._items.splice(i, 1);
            if (!all) break;
          }
        return this;
      },
      itemsAreEqual: function (a, b) {
        return a === b;
      },
    });
  },
  "patched-v3.18.1",
  { requires: ["arraylist"] }
);
YUI.add(
  "arraylist-filter",
  function (Y, NAME) {
    Y.mix(Y.ArrayList.prototype, {
      filter: function (validator) {
        var items = [];
        Y.Array.each(
          this._items,
          function (item, i) {
            item = this.item(i);
            if (validator(item)) items.push(item);
          },
          this
        );
        return new this.constructor(items);
      },
    });
  },
  "patched-v3.18.1",
  { requires: ["arraylist"] }
);
YUI.add(
  "arraylist",
  function (Y, NAME) {
    var YArray = Y.Array,
      YArray_each = YArray.each,
      ArrayListProto;
    function ArrayList(items) {
      if (items !== undefined)
        this._items = Y.Lang.isArray(items) ? items : YArray(items);
      else this._items = this._items || [];
    }
    ArrayListProto = {
      item: function (i) {
        return this._items[i];
      },
      each: function (fn, context) {
        YArray_each(
          this._items,
          function (item, i) {
            item = this.item(i);
            fn.call(context || item, item, i, this);
          },
          this
        );
        return this;
      },
      some: function (fn, context) {
        return YArray.some(
          this._items,
          function (item, i) {
            item = this.item(i);
            return fn.call(context || item, item, i, this);
          },
          this
        );
      },
      indexOf: function (needle) {
        return YArray.indexOf(this._items, needle);
      },
      size: function () {
        return this._items.length;
      },
      isEmpty: function () {
        return !this.size();
      },
      toJSON: function () {
        return this._items;
      },
    };
    ArrayListProto._item = ArrayListProto.item;
    Y.mix(ArrayList.prototype, ArrayListProto);
    Y.mix(ArrayList, {
      addMethod: function (dest, names) {
        names = YArray(names);
        YArray_each(names, function (name) {
          dest[name] = function () {
            var args = YArray(arguments, 0, true),
              ret = [];
            YArray_each(
              this._items,
              function (item, i) {
                item = this._item(i);
                var result = item[name].apply(item, args);
                if (result !== undefined && result !== item) ret[i] = result;
              },
              this
            );
            return ret.length ? ret : this;
          };
        });
      },
    });
    Y.ArrayList = ArrayList;
  },
  "patched-v3.18.1",
  { requires: ["yui-base"] }
);
YUI.add(
  "array-extras",
  function (Y, NAME) {
    var A = Y.Array,
      L = Y.Lang,
      ArrayProto = Array.prototype;
    A.lastIndexOf = L._isNative(ArrayProto.lastIndexOf)
      ? function (a, val, fromIndex) {
          return fromIndex || fromIndex === 0
            ? a.lastIndexOf(val, fromIndex)
            : a.lastIndexOf(val);
        }
      : function (a, val, fromIndex) {
          var len = a.length,
            i = len - 1;
          if (fromIndex || fromIndex === 0)
            i = Math.min(fromIndex < 0 ? len + fromIndex : fromIndex, len);
          if (i > -1 && len > 0)
            for (; i > -1; --i) if (i in a && a[i] === val) return i;
          return -1;
        };
    A.unique = function (array, testFn) {
      var i = 0,
        len = array.length,
        results = [],
        j,
        result,
        resultLen,
        value;
      outerLoop: for (; i < len; i++) {
        value = array[i];
        for (j = 0, resultLen = results.length; j < resultLen; j++) {
          result = results[j];
          if (testFn) {
            if (testFn.call(array, value, result, i, array)) continue outerLoop;
          } else if (value === result) continue outerLoop;
        }
        results.push(value);
      }
      return results;
    };
    A.filter = L._isNative(ArrayProto.filter)
      ? function (a, f, o) {
          return ArrayProto.filter.call(a, f, o);
        }
      : function (a, f, o) {
          var i = 0,
            len = a.length,
            results = [],
            item;
          for (; i < len; ++i)
            if (i in a) {
              item = a[i];
              if (f.call(o, item, i, a)) results.push(item);
            }
          return results;
        };
    A.reject = function (a, f, o) {
      return A.filter(a, function (item, i, a) {
        return !f.call(o, item, i, a);
      });
    };
    A.every = L._isNative(ArrayProto.every)
      ? function (a, f, o) {
          return ArrayProto.every.call(a, f, o);
        }
      : function (a, f, o) {
          for (var i = 0, l = a.length; i < l; ++i)
            if (i in a && !f.call(o, a[i], i, a)) return false;
          return true;
        };
    A.map = L._isNative(ArrayProto.map)
      ? function (a, f, o) {
          return ArrayProto.map.call(a, f, o);
        }
      : function (a, f, o) {
          var i = 0,
            len = a.length,
            results = ArrayProto.concat.call(a);
          for (; i < len; ++i) if (i in a) results[i] = f.call(o, a[i], i, a);
          return results;
        };
    A.reduce = L._isNative(ArrayProto.reduce)
      ? function (a, init, f, o) {
          return ArrayProto.reduce.call(
            a,
            function (init, item, i, a) {
              return f.call(o, init, item, i, a);
            },
            init
          );
        }
      : function (a, init, f, o) {
          var i = 0,
            len = a.length,
            result = init;
          for (; i < len; ++i)
            if (i in a) result = f.call(o, result, a[i], i, a);
          return result;
        };
    A.find = function (a, f, o) {
      for (var i = 0, l = a.length; i < l; i++)
        if (i in a && f.call(o, a[i], i, a)) return a[i];
      return null;
    };
    A.grep = function (a, pattern) {
      return A.filter(a, function (item, index) {
        return pattern.test(item);
      });
    };
    A.partition = function (a, f, o) {
      var results = { matches: [], rejects: [] };
      A.each(a, function (item, index) {
        var set = f.call(o, item, index, a) ? results.matches : results.rejects;
        set.push(item);
      });
      return results;
    };
    A.zip = function (a, a2) {
      var results = [];
      A.each(a, function (item, index) {
        results.push([item, a2[index]]);
      });
      return results;
    };
    A.flatten = function (a) {
      var result = [],
        i,
        len,
        val;
      if (!a) return result;
      for (i = 0, len = a.length; i < len; ++i) {
        val = a[i];
        if (L.isArray(val)) result.push.apply(result, A.flatten(val));
        else result.push(val);
      }
      return result;
    };
  },
  "patched-v3.18.1",
  { requires: ["yui-base"] }
);
YUI.add(
  "array-invoke",
  function (Y, NAME) {
    Y.Array.invoke = function (items, name) {
      var args = Y.Array(arguments, 2, true),
        isFunction = Y.Lang.isFunction,
        ret = [];
      Y.Array.each(Y.Array(items), function (item, i) {
        if (item && isFunction(item[name]))
          ret[i] = item[name].apply(item, args);
      });
      return ret;
    };
  },
  "patched-v3.18.1",
  { requires: ["yui-base"] }
);
YUI.add(
  "attribute-base",
  function (Y, NAME) {
    function Attribute() {
      Y.AttributeCore.apply(this, arguments);
      Y.AttributeObservable.apply(this, arguments);
      Y.AttributeExtras.apply(this, arguments);
    }
    Y.mix(Attribute, Y.AttributeCore, false, null, 1);
    Y.mix(Attribute, Y.AttributeExtras, false, null, 1);
    Y.mix(Attribute, Y.AttributeObservable, true, null, 1);
    Attribute.INVALID_VALUE = Y.AttributeCore.INVALID_VALUE;
    Attribute._ATTR_CFG = Y.AttributeCore._ATTR_CFG.concat(
      Y.AttributeObservable._ATTR_CFG
    );
    Attribute.protectAttrs = Y.AttributeCore.protectAttrs;
    Y.Attribute = Attribute;
  },
  "patched-v3.18.1",
  { requires: ["attribute-core", "attribute-observable", "attribute-extras"] }
);
YUI.add(
  "attribute-complex",
  function (Y, NAME) {
    var Attribute = Y.Attribute;
    Attribute.Complex = function () {};
    Attribute.Complex.prototype = {
      _normAttrVals: Attribute.prototype._normAttrVals,
      _getAttrInitVal: Attribute.prototype._getAttrInitVal,
    };
    Y.AttributeComplex = Attribute.Complex;
  },
  "patched-v3.18.1",
  { requires: ["attribute-base"] }
);
YUI.add(
  "attribute-core",
  function (Y, NAME) {
    Y.State = function () {
      this.data = {};
    };
    Y.State.prototype = {
      add: function (name, key, val) {
        var item = this.data[name];
        if (!item) item = this.data[name] = {};
        item[key] = val;
      },
      addAll: function (name, obj) {
        var item = this.data[name],
          key;
        if (!item) item = this.data[name] = {};
        for (key in obj) if (obj.hasOwnProperty(key)) item[key] = obj[key];
      },
      remove: function (name, key) {
        var item = this.data[name];
        if (item) delete item[key];
      },
      removeAll: function (name, obj) {
        var data;
        if (!obj) {
          data = this.data;
          if (name in data) delete data[name];
        } else
          Y.each(
            obj,
            function (value, key) {
              this.remove(name, typeof key === "string" ? key : value);
            },
            this
          );
      },
      get: function (name, key) {
        var item = this.data[name];
        if (item) return item[key];
      },
      getAll: function (name, reference) {
        var item = this.data[name],
          key,
          obj;
        if (reference) obj = item;
        else if (item) {
          obj = {};
          for (key in item) if (item.hasOwnProperty(key)) obj[key] = item[key];
        }
        return obj;
      },
    };
    var O = Y.Object,
      Lang = Y.Lang,
      DOT = ".",
      GETTER = "getter",
      SETTER = "setter",
      READ_ONLY = "readOnly",
      WRITE_ONCE = "writeOnce",
      INIT_ONLY = "initOnly",
      VALIDATOR = "validator",
      VALUE = "value",
      VALUE_FN = "valueFn",
      LAZY_ADD = "lazyAdd",
      ADDED = "added",
      BYPASS_PROXY = "_bypassProxy",
      INIT_VALUE = "initValue",
      LAZY = "lazy",
      INVALID_VALUE;
    function AttributeCore(attrs, values, lazy) {
      this._yuievt = null;
      this._initAttrHost(attrs, values, lazy);
    }
    AttributeCore.INVALID_VALUE = {};
    INVALID_VALUE = AttributeCore.INVALID_VALUE;
    AttributeCore._ATTR_CFG = [
      SETTER,
      GETTER,
      VALIDATOR,
      VALUE,
      VALUE_FN,
      WRITE_ONCE,
      READ_ONLY,
      LAZY_ADD,
      BYPASS_PROXY,
    ];
    AttributeCore.protectAttrs = function (attrs) {
      if (attrs) {
        attrs = Y.merge(attrs);
        for (var attr in attrs)
          if (attrs.hasOwnProperty(attr)) attrs[attr] = Y.merge(attrs[attr]);
      }
      return attrs;
    };
    AttributeCore.prototype = {
      _initAttrHost: function (attrs, values, lazy) {
        this._state = new Y.State();
        this._initAttrs(attrs, values, lazy);
      },
      addAttr: function (name, config, lazy) {
        var host = this,
          state = host._state,
          data = state.data,
          value,
          added,
          hasValue;
        config = config || {};
        if (LAZY_ADD in config) lazy = config[LAZY_ADD];
        added = state.get(name, ADDED);
        if (lazy && !added) state.data[name] = { lazy: config, added: true };
        else if (!added || config.isLazyAdd) {
          hasValue = VALUE in config;
          if (hasValue) {
            value = config.value;
            config.value = undefined;
          }
          config.added = true;
          config.initializing = true;
          data[name] = config;
          if (hasValue) host.set(name, value);
          config.initializing = false;
        }
        return host;
      },
      attrAdded: function (name) {
        return !!this._state.get(name, ADDED);
      },
      get: function (name) {
        return this._getAttr(name);
      },
      _isLazyAttr: function (name) {
        return this._state.get(name, LAZY);
      },
      _addLazyAttr: function (name, lazyCfg) {
        var state = this._state;
        lazyCfg = lazyCfg || state.get(name, LAZY);
        if (lazyCfg) {
          state.data[name].lazy = undefined;
          lazyCfg.isLazyAdd = true;
          this.addAttr(name, lazyCfg);
        }
      },
      set: function (name, val, opts) {
        return this._setAttr(name, val, opts);
      },
      _set: function (name, val, opts) {
        return this._setAttr(name, val, opts, true);
      },
      _setAttr: function (name, val, opts, force) {
        var allowSet = true,
          state = this._state,
          stateProxy = this._stateProxy,
          tCfgs = this._tCfgs,
          cfg,
          initialSet,
          strPath,
          path,
          currVal,
          writeOnce,
          initializing;
        if (name.indexOf(DOT) !== -1) {
          strPath = name;
          path = name.split(DOT);
          name = path.shift();
        }
        if (tCfgs && tCfgs[name]) this._addOutOfOrder(name, tCfgs[name]);
        cfg = state.data[name] || {};
        if (cfg.lazy) {
          cfg = cfg.lazy;
          this._addLazyAttr(name, cfg);
        }
        initialSet = cfg.value === undefined;
        if (stateProxy && name in stateProxy && !cfg._bypassProxy)
          initialSet = false;
        writeOnce = cfg.writeOnce;
        initializing = cfg.initializing;
        if (!initialSet && !force) {
          if (writeOnce) allowSet = false;
          if (cfg.readOnly) allowSet = false;
        }
        if (!initializing && !force && writeOnce === INIT_ONLY)
          allowSet = false;
        if (allowSet) {
          if (!initialSet) currVal = this.get(name);
          if (path) {
            var copyVal = [currVal].reduce(function (retVal, currVal) {
              Object.keys(currVal).forEach(function (item) {
                retVal[item] = currVal[item];
              });
              return retVal;
            }, {});
            var pathNode = copyVal;
            var leafIdx = path.length - 1;
            for (var i = 0; i < leafIdx && pathNode; i++)
              pathNode = pathNode[path[i]];
            if (pathNode) delete pathNode[path[leafIdx]];
            val = O.setValue(Y.clone(copyVal), path, val);
            if (val === undefined) allowSet = false;
          }
          if (allowSet)
            if (!this._fireAttrChange || initializing)
              this._setAttrVal(name, strPath, currVal, val, opts, cfg);
            else this._fireAttrChange(name, strPath, currVal, val, opts, cfg);
        }
        return this;
      },
      _addOutOfOrder: function (name, cfg) {
        var attrs = {};
        attrs[name] = cfg;
        delete this._tCfgs[name];
        this._addAttrs(attrs, this._tVals);
      },
      _getAttr: function (name) {
        var fullName = name,
          tCfgs = this._tCfgs,
          path,
          getter,
          val,
          attrCfg;
        if (name.indexOf(DOT) !== -1) {
          path = name.split(DOT);
          name = path.shift();
        }
        if (tCfgs && tCfgs[name]) this._addOutOfOrder(name, tCfgs[name]);
        attrCfg = this._state.data[name] || {};
        if (attrCfg.lazy) {
          attrCfg = attrCfg.lazy;
          this._addLazyAttr(name, attrCfg);
        }
        val = this._getStateVal(name, attrCfg);
        getter = attrCfg.getter;
        if (getter && !getter.call) getter = this[getter];
        val = getter ? getter.call(this, val, fullName) : val;
        val = path ? O.getValue(val, path) : val;
        return val;
      },
      _getStateVal: function (name, cfg) {
        var stateProxy = this._stateProxy;
        if (!cfg) cfg = this._state.getAll(name) || {};
        return stateProxy && name in stateProxy && !cfg._bypassProxy
          ? stateProxy[name]
          : cfg.value;
      },
      _setStateVal: function (name, value) {
        var stateProxy = this._stateProxy;
        if (
          stateProxy &&
          name in stateProxy &&
          !this._state.get(name, BYPASS_PROXY)
        )
          stateProxy[name] = value;
        else this._state.add(name, VALUE, value);
      },
      _setAttrVal: function (
        attrName,
        subAttrName,
        prevVal,
        newVal,
        opts,
        attrCfg
      ) {
        var host = this,
          allowSet = true,
          cfg = attrCfg || this._state.data[attrName] || {},
          validator = cfg.validator,
          setter = cfg.setter,
          initializing = cfg.initializing,
          prevRawVal = this._getStateVal(attrName, cfg),
          name = subAttrName || attrName,
          retVal,
          valid;
        if (validator) {
          if (!validator.call) validator = this[validator];
          if (validator) {
            valid = validator.call(host, newVal, name, opts);
            if (!valid && initializing) {
              newVal = cfg.defaultValue;
              valid = true;
            }
          }
        }
        if (!validator || valid) {
          if (setter) {
            if (!setter.call) setter = this[setter];
            if (setter) {
              retVal = setter.call(host, newVal, name, opts);
              if (retVal === INVALID_VALUE)
                if (initializing) newVal = cfg.defaultValue;
                else allowSet = false;
              else if (retVal !== undefined) newVal = retVal;
            }
          }
          if (allowSet)
            if (!subAttrName && newVal === prevRawVal && !Lang.isObject(newVal))
              allowSet = false;
            else {
              if (!(INIT_VALUE in cfg)) cfg.initValue = newVal;
              host._setStateVal(attrName, newVal);
            }
        } else allowSet = false;
        return allowSet;
      },
      setAttrs: function (attrs, opts) {
        return this._setAttrs(attrs, opts);
      },
      _setAttrs: function (attrs, opts) {
        var attr;
        for (attr in attrs)
          if (attrs.hasOwnProperty(attr)) this.set(attr, attrs[attr], opts);
        return this;
      },
      getAttrs: function (attrs) {
        return this._getAttrs(attrs);
      },
      _getAttrs: function (attrs) {
        var obj = {},
          attr,
          i,
          len,
          modifiedOnly = attrs === true;
        if (!attrs || modifiedOnly) attrs = O.keys(this._state.data);
        for (i = 0, len = attrs.length; i < len; i++) {
          attr = attrs[i];
          if (
            !modifiedOnly ||
            this._getStateVal(attr) != this._state.get(attr, INIT_VALUE)
          )
            obj[attr] = this.get(attr);
        }
        return obj;
      },
      addAttrs: function (cfgs, values, lazy) {
        if (cfgs) {
          this._tCfgs = cfgs;
          this._tVals = values ? this._normAttrVals(values) : null;
          this._addAttrs(cfgs, this._tVals, lazy);
          this._tCfgs = this._tVals = null;
        }
        return this;
      },
      _addAttrs: function (cfgs, values, lazy) {
        var tCfgs = this._tCfgs,
          tVals = this._tVals,
          attr,
          attrCfg,
          value;
        for (attr in cfgs)
          if (cfgs.hasOwnProperty(attr)) {
            attrCfg = cfgs[attr];
            attrCfg.defaultValue = attrCfg.value;
            value = this._getAttrInitVal(attr, attrCfg, tVals);
            if (value !== undefined) attrCfg.value = value;
            if (tCfgs[attr]) tCfgs[attr] = undefined;
            this.addAttr(attr, attrCfg, lazy);
          }
      },
      _protectAttrs: AttributeCore.protectAttrs,
      _normAttrVals: function (valueHash) {
        var vals, subvals, path, attr, v, k;
        if (!valueHash) return null;
        vals = {};
        for (k in valueHash)
          if (valueHash.hasOwnProperty(k))
            if (k.indexOf(DOT) !== -1) {
              path = k.split(DOT);
              attr = path.shift();
              subvals = subvals || {};
              v = subvals[attr] = subvals[attr] || [];
              v[v.length] = { path: path, value: valueHash[k] };
            } else vals[k] = valueHash[k];
        return { simple: vals, complex: subvals };
      },
      _getAttrInitVal: function (attr, cfg, initValues) {
        var val = cfg.value,
          valFn = cfg.valueFn,
          tmpVal,
          initValSet = false,
          readOnly = cfg.readOnly,
          simple,
          complex,
          i,
          l,
          path,
          subval,
          subvals;
        if (!readOnly && initValues) {
          simple = initValues.simple;
          if (simple && simple.hasOwnProperty(attr)) {
            val = simple[attr];
            initValSet = true;
          }
        }
        if (valFn && !initValSet) {
          if (!valFn.call) valFn = this[valFn];
          if (valFn) {
            tmpVal = valFn.call(this, attr);
            val = tmpVal;
          }
        }
        if (!readOnly && initValues) {
          complex = initValues.complex;
          if (
            complex &&
            complex.hasOwnProperty(attr) &&
            val !== undefined &&
            val !== null
          ) {
            subvals = complex[attr];
            for (i = 0, l = subvals.length; i < l; ++i) {
              path = subvals[i].path;
              subval = subvals[i].value;
              O.setValue(val, path, subval);
            }
          }
        }
        return val;
      },
      _initAttrs: function (attrs, values, lazy) {
        attrs = attrs || this.constructor.ATTRS;
        var Base = Y.Base,
          BaseCore = Y.BaseCore,
          baseInst = Base && Y.instanceOf(this, Base),
          baseCoreInst = !baseInst && BaseCore && Y.instanceOf(this, BaseCore);
        if (attrs && !baseInst && !baseCoreInst)
          this.addAttrs(Y.AttributeCore.protectAttrs(attrs), values, lazy);
      },
    };
    Y.AttributeCore = AttributeCore;
  },
  "patched-v3.18.1",
  { requires: ["oop"] }
);
YUI.add(
  "attribute-observable",
  function (Y, NAME) {
    var EventTarget = Y.EventTarget,
      CHANGE = "Change",
      BROADCAST = "broadcast";
    function AttributeObservable() {
      this._ATTR_E_FACADE = {};
      EventTarget.call(this, { emitFacade: true });
    }
    AttributeObservable._ATTR_CFG = [BROADCAST];
    AttributeObservable.prototype = {
      set: function (name, val, opts) {
        return this._setAttr(name, val, opts);
      },
      _set: function (name, val, opts) {
        return this._setAttr(name, val, opts, true);
      },
      setAttrs: function (attrs, opts) {
        return this._setAttrs(attrs, opts);
      },
      _setAttrs: function (attrs, opts) {
        var attr;
        for (attr in attrs)
          if (attrs.hasOwnProperty(attr)) this.set(attr, attrs[attr], opts);
        return this;
      },
      _fireAttrChange: function (
        attrName,
        subAttrName,
        currVal,
        newVal,
        opts,
        cfg
      ) {
        var host = this,
          eventName = this._getFullType(attrName + CHANGE),
          state = host._state,
          facade,
          broadcast,
          e;
        if (!cfg) cfg = state.data[attrName] || {};
        if (!cfg.published) {
          e = host._publish(eventName);
          e.emitFacade = true;
          e.defaultTargetOnly = true;
          e.defaultFn = host._defAttrChangeFn;
          broadcast = cfg.broadcast;
          if (broadcast !== undefined) e.broadcast = broadcast;
          cfg.published = true;
        }
        if (opts) {
          facade = Y.merge(opts);
          facade._attrOpts = opts;
        } else facade = host._ATTR_E_FACADE;
        facade.attrName = attrName;
        facade.subAttrName = subAttrName;
        facade.prevVal = currVal;
        facade.newVal = newVal;
        if (host._hasPotentialSubscribers(eventName))
          host.fire(eventName, facade);
        else
          this._setAttrVal(attrName, subAttrName, currVal, newVal, opts, cfg);
      },
      _defAttrChangeFn: function (e, eventFastPath) {
        var opts = e._attrOpts;
        if (opts) delete e._attrOpts;
        if (
          !this._setAttrVal(
            e.attrName,
            e.subAttrName,
            e.prevVal,
            e.newVal,
            opts
          )
        ) {
          if (!eventFastPath) e.stopImmediatePropagation();
        } else if (!eventFastPath) e.newVal = this.get(e.attrName);
      },
    };
    Y.mix(AttributeObservable, EventTarget, false, null, 1);
    Y.AttributeObservable = AttributeObservable;
    Y.AttributeEvents = AttributeObservable;
  },
  "patched-v3.18.1",
  { requires: ["event-custom"] }
);
YUI.add(
  "attribute-extras",
  function (Y, NAME) {
    var BROADCAST = "broadcast",
      PUBLISHED = "published",
      INIT_VALUE = "initValue",
      MODIFIABLE = { readOnly: 1, writeOnce: 1, getter: 1, broadcast: 1 };
    function AttributeExtras() {}
    AttributeExtras.prototype = {
      modifyAttr: function (name, config) {
        var host = this,
          prop,
          state;
        if (host.attrAdded(name)) {
          if (host._isLazyAttr(name)) host._addLazyAttr(name);
          state = host._state;
          for (prop in config)
            if (MODIFIABLE[prop] && config.hasOwnProperty(prop)) {
              state.add(name, prop, config[prop]);
              if (prop === BROADCAST) state.remove(name, PUBLISHED);
            }
        } else;
      },
      removeAttr: function (name) {
        this._state.removeAll(name);
      },
      reset: function (name) {
        var host = this;
        if (name) {
          if (host._isLazyAttr(name)) host._addLazyAttr(name);
          host.set(name, host._state.get(name, INIT_VALUE));
        } else
          Y.Object.each(host._state.data, function (v, n) {
            host.reset(n);
          });
        return host;
      },
      _getAttrCfg: function (name) {
        var o,
          state = this._state;
        if (name) o = state.getAll(name) || {};
        else {
          o = {};
          Y.each(state.data, function (v, n) {
            o[n] = state.getAll(n);
          });
        }
        return o;
      },
    };
    Y.AttributeExtras = AttributeExtras;
  },
  "patched-v3.18.1",
  { requires: ["oop"] }
);
YUI.add(
  "base-base",
  function (Y, NAME) {
    var AttributeCore = Y.AttributeCore,
      AttributeExtras = Y.AttributeExtras,
      BaseCore = Y.BaseCore,
      BaseObservable = Y.BaseObservable;
    function Base() {
      BaseCore.apply(this, arguments);
      BaseObservable.apply(this, arguments);
      AttributeExtras.apply(this, arguments);
    }
    Base._ATTR_CFG = BaseCore._ATTR_CFG.concat(BaseObservable._ATTR_CFG);
    Base._NON_ATTRS_CFG = BaseCore._NON_ATTRS_CFG.concat(
      BaseObservable._NON_ATTRS_CFG
    );
    Base.NAME = "base";
    Base.ATTRS = AttributeCore.protectAttrs(BaseCore.ATTRS);
    Base.modifyAttrs = BaseCore.modifyAttrs;
    Y.mix(Base, BaseCore, false, null, 1);
    Y.mix(Base, AttributeExtras, false, null, 1);
    Y.mix(Base, BaseObservable, true, null, 1);
    Base.prototype.constructor = Base;
    Y.Base = Base;
  },
  "patched-v3.18.1",
  { requires: ["attribute-base", "base-core", "base-observable"] }
);
YUI.add(
  "base-pluginhost",
  function (Y, NAME) {
    var Base = Y.Base,
      PluginHost = Y.Plugin.Host;
    Y.mix(Base, PluginHost, false, null, 1);
    Base.plug = PluginHost.plug;
    Base.unplug = PluginHost.unplug;
  },
  "patched-v3.18.1",
  { requires: ["base-base", "pluginhost"] }
);
YUI.add(
  "classnamemanager",
  function (Y, NAME) {
    var CLASS_NAME_PREFIX = "classNamePrefix",
      CLASS_NAME_DELIMITER = "classNameDelimiter",
      CONFIG = Y.config;
    CONFIG[CLASS_NAME_PREFIX] = CONFIG[CLASS_NAME_PREFIX] || "yui3";
    CONFIG[CLASS_NAME_DELIMITER] = CONFIG[CLASS_NAME_DELIMITER] || "-";
    Y.ClassNameManager = (function () {
      var sPrefix = CONFIG[CLASS_NAME_PREFIX],
        sDelimiter = CONFIG[CLASS_NAME_DELIMITER];
      return {
        getClassName: Y.cached(function () {
          var args = Y.Array(arguments);
          if (args[args.length - 1] !== true) args.unshift(sPrefix);
          else args.pop();
          return args.join(sDelimiter);
        }),
      };
    })();
  },
  "patched-v3.18.1",
  { requires: ["yui-base"] }
);
YUI.add(
  "datatype-xml-format",
  function (Y, NAME) {
    var LANG = Y.Lang;
    Y.mix(Y.namespace("XML"), {
      format: function (data) {
        try {
          if (!LANG.isUndefined(data.getXml)) return data.getXml();
          if (!LANG.isUndefined(XMLSerializer))
            return new XMLSerializer().serializeToString(data);
        } catch (e) {
          if (data && data.xml) return data.xml;
          else
            return LANG.isValue(data) && data.toString ? data.toString() : "";
        }
      },
    });
    Y.namespace("DataType");
    Y.DataType.XML = Y.XML;
  },
  "patched-v3.18.1"
);
YUI.add(
  "datatype-xml-parse",
  function (Y, NAME) {
    Y.mix(Y.namespace("XML"), {
      parse: function (data) {
        var xmlDoc = null,
          win;
        if (typeof data === "string") {
          win = Y.config.win;
          if (win.ActiveXObject !== undefined) {
            xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
            xmlDoc.async = false;
            xmlDoc.loadXML(data);
          } else if (win.DOMParser !== undefined)
            xmlDoc = new DOMParser().parseFromString(data, "text/xml");
          else if (win.Windows !== undefined) {
            xmlDoc = new Windows.Data.Xml.Dom.XmlDocument();
            xmlDoc.loadXml(data);
          }
        }
        if (
          xmlDoc === null ||
          xmlDoc.documentElement === null ||
          xmlDoc.documentElement.nodeName === "parsererror"
        );
        return xmlDoc;
      },
    });
    Y.namespace("Parsers").xml = Y.XML.parse;
    Y.namespace("DataType");
    Y.DataType.XML = Y.XML;
  },
  "patched-v3.18.1"
);
YUI.add(
  "dom-base",
  function (Y, NAME) {
    var documentElement = Y.config.doc.documentElement,
      Y_DOM = Y.DOM,
      TAG_NAME = "tagName",
      OWNER_DOCUMENT = "ownerDocument",
      EMPTY_STRING = "",
      addFeature = Y.Features.add,
      testFeature = Y.Features.test;
    Y.mix(Y_DOM, {
      getText:
        documentElement.textContent !== undefined
          ? function (element) {
              var ret = "";
              if (element) ret = element.textContent;
              return ret || "";
            }
          : function (element) {
              var ret = "";
              if (element) ret = element.innerText || element.nodeValue;
              return ret || "";
            },
      setText:
        documentElement.textContent !== undefined
          ? function (element, content) {
              if (element) element.textContent = content;
            }
          : function (element, content) {
              if ("innerText" in element) element.innerText = content;
              else if ("nodeValue" in element) element.nodeValue = content;
            },
      CUSTOM_ATTRIBUTES: !documentElement.hasAttribute
        ? { for: "htmlFor", class: "className" }
        : { htmlFor: "for", className: "class" },
      setAttribute: function (el, attr, val, ieAttr) {
        if (el && attr && el.setAttribute) {
          attr = Y_DOM.CUSTOM_ATTRIBUTES[attr] || attr;
          el.setAttribute(attr, val, ieAttr);
        }
      },
      getAttribute: function (el, attr, ieAttr) {
        ieAttr = ieAttr !== undefined ? ieAttr : 2;
        var ret = "";
        if (el && attr && el.getAttribute) {
          attr = Y_DOM.CUSTOM_ATTRIBUTES[attr] || attr;
          ret =
            el.tagName === "BUTTON" && attr === "value"
              ? Y_DOM.getValue(el)
              : el.getAttribute(attr, ieAttr);
          if (ret === null) ret = "";
        }
        return ret;
      },
      VALUE_SETTERS: {},
      VALUE_GETTERS: {},
      getValue: function (node) {
        var ret = "",
          getter;
        if (node && node[TAG_NAME]) {
          getter = Y_DOM.VALUE_GETTERS[node[TAG_NAME].toLowerCase()];
          if (getter) ret = getter(node);
          else ret = node.value;
        }
        if (ret === EMPTY_STRING) ret = EMPTY_STRING;
        return typeof ret === "string" ? ret : "";
      },
      setValue: function (node, val) {
        var setter;
        if (node && node[TAG_NAME]) {
          setter = Y_DOM.VALUE_SETTERS[node[TAG_NAME].toLowerCase()];
          val = val === null ? "" : val;
          if (setter) setter(node, val);
          else node.value = val;
        }
      },
      creators: {},
    });
    addFeature("value-set", "select", {
      test: function () {
        var node = Y.config.doc.createElement("select");
        node.innerHTML =
          "\x3coption\x3e1\x3c/option\x3e\x3coption\x3e2\x3c/option\x3e";
        node.value = "2";
        return node.value && node.value === "2";
      },
    });
    if (!testFeature("value-set", "select"))
      Y_DOM.VALUE_SETTERS.select = function (node, val) {
        for (
          var i = 0, options = node.getElementsByTagName("option"), option;
          (option = options[i++]);

        )
          if (Y_DOM.getValue(option) === val) {
            option.selected = true;
            break;
          }
      };
    Y.mix(Y_DOM.VALUE_GETTERS, {
      button: function (node) {
        return node.attributes && node.attributes.value
          ? node.attributes.value.value
          : "";
      },
    });
    Y.mix(Y_DOM.VALUE_SETTERS, {
      button: function (node, val) {
        var attr = node.attributes.value;
        if (!attr) {
          attr = node[OWNER_DOCUMENT].createAttribute("value");
          node.setAttributeNode(attr);
        }
        attr.value = val;
      },
    });
    Y.mix(Y_DOM.VALUE_GETTERS, {
      option: function (node) {
        var attrs = node.attributes;
        return attrs.value && attrs.value.specified ? node.value : node.text;
      },
      select: function (node) {
        var val = node.value,
          options = node.options;
        if (options && options.length)
          if (node.multiple);
          else if (node.selectedIndex > -1)
            val = Y_DOM.getValue(options[node.selectedIndex]);
        return val;
      },
    });
    var addClass, hasClass, removeClass;
    Y.mix(Y.DOM, {
      hasClass: function (node, className) {
        var re = Y.DOM._getRegExp("(?:^|\\s+)" + className + "(?:\\s+|$)");
        return re.test(node.className);
      },
      addClass: function (node, className) {
        if (!Y.DOM.hasClass(node, className))
          node.className = Y.Lang.trim([node.className, className].join(" "));
      },
      removeClass: function (node, className) {
        if (className && hasClass(node, className)) {
          node.className = Y.Lang.trim(
            node.className.replace(
              Y.DOM._getRegExp("(?:^|\\s+)" + className + "(?:\\s+|$)"),
              " "
            )
          );
          if (hasClass(node, className)) removeClass(node, className);
        }
      },
      replaceClass: function (node, oldC, newC) {
        removeClass(node, oldC);
        addClass(node, newC);
      },
      toggleClass: function (node, className, force) {
        var add = force !== undefined ? force : !hasClass(node, className);
        if (add) addClass(node, className);
        else removeClass(node, className);
      },
    });
    hasClass = Y.DOM.hasClass;
    removeClass = Y.DOM.removeClass;
    addClass = Y.DOM.addClass;
    var re_tag = /<([a-z]+)/i,
      Y_DOM = Y.DOM,
      addFeature = Y.Features.add,
      testFeature = Y.Features.test,
      creators = {},
      createFromDIV = function (html, tag) {
        var div = Y.config.doc.createElement("div"),
          ret = true;
        div.innerHTML = html;
        if (!div.firstChild || div.firstChild.tagName !== tag.toUpperCase())
          ret = false;
        return ret;
      },
      re_tbody = /(?:\/(?:thead|tfoot|tbody|caption|col|colgroup)>)+\s*<tbody/,
      TABLE_OPEN = "\x3ctable\x3e",
      TABLE_CLOSE = "\x3c/table\x3e",
      selectedIndex;
    Y.mix(Y.DOM, {
      _fragClones: {},
      _create: function (html, doc, tag) {
        tag = tag || "div";
        var frag = Y_DOM._fragClones[tag];
        if (frag) frag = frag.cloneNode(false);
        else frag = Y_DOM._fragClones[tag] = doc.createElement(tag);
        frag.innerHTML = html;
        return frag;
      },
      _children: function (node, tag) {
        var i = 0,
          children = node.children,
          childNodes,
          hasComments,
          child;
        if (children && children.tags)
          if (tag) children = node.children.tags(tag);
          else hasComments = children.tags("!").length;
        if (!children || (!children.tags && tag) || hasComments) {
          childNodes = children || node.childNodes;
          children = [];
          while ((child = childNodes[i++]))
            if (child.nodeType === 1)
              if (!tag || tag === child.tagName) children.push(child);
        }
        return children || [];
      },
      create: function (html, doc) {
        if (typeof html === "string") html = Y.Lang.trim(html);
        doc = doc || Y.config.doc;
        var m = re_tag.exec(html),
          create = Y_DOM._create,
          custom = creators,
          ret = null,
          creator,
          tag,
          node,
          nodes;
        if (html != undefined) {
          if (m && m[1]) {
            creator = custom[m[1].toLowerCase()];
            if (typeof creator === "function") create = creator;
            else tag = creator;
          }
          node = create(html, doc, tag);
          nodes = node.childNodes;
          if (nodes.length === 1) ret = node.removeChild(nodes[0]);
          else if (nodes[0] && nodes[0].className === "yui3-big-dummy") {
            selectedIndex = node.selectedIndex;
            if (nodes.length === 2) ret = nodes[0].nextSibling;
            else {
              node.removeChild(nodes[0]);
              ret = Y_DOM._nl2frag(nodes, doc);
            }
          } else ret = Y_DOM._nl2frag(nodes, doc);
        }
        return ret;
      },
      _nl2frag: function (nodes, doc) {
        var ret = null,
          i,
          len;
        if (nodes && (nodes.push || nodes.item) && nodes[0]) {
          doc = doc || nodes[0].ownerDocument;
          ret = doc.createDocumentFragment();
          if (nodes.item) nodes = Y.Array(nodes, 0, true);
          for (i = 0, len = nodes.length; i < len; i++)
            ret.appendChild(nodes[i]);
        }
        return ret;
      },
      addHTML: function (node, content, where) {
        var nodeParent = node.parentNode,
          i = 0,
          item,
          ret = content,
          newNode;
        if (content != undefined)
          if (content.nodeType) newNode = content;
          else if (typeof content == "string" || typeof content == "number")
            ret = newNode = Y_DOM.create(content);
          else if (content[0] && content[0].nodeType) {
            newNode = Y.config.doc.createDocumentFragment();
            while ((item = content[i++])) newNode.appendChild(item);
          }
        if (where)
          if (newNode && where.parentNode)
            where.parentNode.insertBefore(newNode, where);
          else
            switch (where) {
              case "replace":
                while (node.firstChild) node.removeChild(node.firstChild);
                if (newNode) node.appendChild(newNode);
                break;
              case "before":
                if (newNode) nodeParent.insertBefore(newNode, node);
                break;
              case "after":
                if (newNode)
                  if (node.nextSibling)
                    nodeParent.insertBefore(newNode, node.nextSibling);
                  else nodeParent.appendChild(newNode);
                break;
              default:
                if (newNode) node.appendChild(newNode);
            }
        else if (newNode) node.appendChild(newNode);
        if (node.nodeName == "SELECT" && selectedIndex > 0)
          node.selectedIndex = selectedIndex - 1;
        return ret;
      },
      wrap: function (node, html) {
        var parent = html && html.nodeType ? html : Y.DOM.create(html),
          nodes = parent.getElementsByTagName("*");
        if (nodes.length) parent = nodes[nodes.length - 1];
        if (node.parentNode) node.parentNode.replaceChild(parent, node);
        parent.appendChild(node);
      },
      unwrap: function (node) {
        var parent = node.parentNode,
          lastChild = parent.lastChild,
          next = node,
          grandparent;
        if (parent) {
          grandparent = parent.parentNode;
          if (grandparent) {
            node = parent.firstChild;
            while (node !== lastChild) {
              next = node.nextSibling;
              grandparent.insertBefore(node, parent);
              node = next;
            }
            grandparent.replaceChild(lastChild, parent);
          } else parent.removeChild(node);
        }
      },
    });
    addFeature("innerhtml", "table", {
      test: function () {
        var node = Y.config.doc.createElement("table");
        try {
          node.innerHTML = "\x3ctbody\x3e\x3c/tbody\x3e";
        } catch (e) {
          return false;
        }
        return node.firstChild && node.firstChild.nodeName === "TBODY";
      },
    });
    addFeature("innerhtml-div", "tr", {
      test: function () {
        return createFromDIV("\x3ctr\x3e\x3c/tr\x3e", "tr");
      },
    });
    addFeature("innerhtml-div", "script", {
      test: function () {
        return createFromDIV("\x3cscript\x3e\x3c/script\x3e", "script");
      },
    });
    if (!testFeature("innerhtml", "table"))
      creators.tbody = function (html, doc) {
        var frag = Y_DOM.create(TABLE_OPEN + html + TABLE_CLOSE, doc),
          tb = Y.DOM._children(frag, "tbody")[0];
        if (frag.children.length > 1 && tb && !re_tbody.test(html))
          tb.parentNode.removeChild(tb);
        return frag;
      };
    if (!testFeature("innerhtml-div", "script")) {
      creators.script = function (html, doc) {
        var frag = doc.createElement("div");
        frag.innerHTML = "-" + html;
        frag.removeChild(frag.firstChild);
        return frag;
      };
      creators.link = creators.style = creators.script;
    }
    if (!testFeature("innerhtml-div", "tr")) {
      Y.mix(creators, {
        option: function (html, doc) {
          return Y_DOM.create(
            '\x3cselect\x3e\x3coption class\x3d"yui3-big-dummy" selected\x3e\x3c/option\x3e' +
              html +
              "\x3c/select\x3e",
            doc
          );
        },
        tr: function (html, doc) {
          return Y_DOM.create("\x3ctbody\x3e" + html + "\x3c/tbody\x3e", doc);
        },
        td: function (html, doc) {
          return Y_DOM.create("\x3ctr\x3e" + html + "\x3c/tr\x3e", doc);
        },
        col: function (html, doc) {
          return Y_DOM.create(
            "\x3ccolgroup\x3e" + html + "\x3c/colgroup\x3e",
            doc
          );
        },
        tbody: "table",
      });
      Y.mix(creators, {
        legend: "fieldset",
        th: creators.td,
        thead: creators.tbody,
        tfoot: creators.tbody,
        caption: creators.tbody,
        colgroup: creators.tbody,
        optgroup: creators.option,
      });
    }
    Y_DOM.creators = creators;
    Y.mix(Y.DOM, {
      setWidth: function (node, size) {
        Y.DOM._setSize(node, "width", size);
      },
      setHeight: function (node, size) {
        Y.DOM._setSize(node, "height", size);
      },
      _setSize: function (node, prop, val) {
        val = val > 0 ? val : 0;
        var size = 0;
        node.style[prop] = val + "px";
        size = prop === "height" ? node.offsetHeight : node.offsetWidth;
        if (size > val) {
          val = val - (size - val);
          if (val < 0) val = 0;
          node.style[prop] = val + "px";
        }
      },
    });
  },
  "patched-v3.18.1",
  { requires: ["dom-core"] }
);
YUI.add(
  "dom-core",
  function (Y, NAME) {
    var NODE_TYPE = "nodeType",
      OWNER_DOCUMENT = "ownerDocument",
      DOCUMENT_ELEMENT = "documentElement",
      DEFAULT_VIEW = "defaultView",
      PARENT_WINDOW = "parentWindow",
      TAG_NAME = "tagName",
      PARENT_NODE = "parentNode",
      PREVIOUS_SIBLING = "previousSibling",
      NEXT_SIBLING = "nextSibling",
      CONTAINS = "contains",
      COMPARE_DOCUMENT_POSITION = "compareDocumentPosition",
      EMPTY_ARRAY = [],
      supportsContainsTextNode = (function () {
        var node = Y.config.doc.createElement("div"),
          textNode = node.appendChild(Y.config.doc.createTextNode("")),
          result = false;
        try {
          result = node.contains(textNode);
        } catch (e) {}
        return result;
      })(),
      Y_DOM = {
        byId: function (id, doc) {
          return Y_DOM.allById(id, doc)[0] || null;
        },
        getId: function (node) {
          var id;
          if (node.id && !node.id.tagName && !node.id.item) id = node.id;
          else if (node.attributes && node.attributes.id)
            id = node.attributes.id.value;
          return id;
        },
        setId: function (node, id) {
          if (node.setAttribute) node.setAttribute("id", id);
          else node.id = id;
        },
        ancestor: function (element, fn, testSelf, stopFn) {
          var ret = null;
          if (testSelf) ret = !fn || fn(element) ? element : null;
          return (
            ret || Y_DOM.elementByAxis(element, PARENT_NODE, fn, null, stopFn)
          );
        },
        ancestors: function (element, fn, testSelf, stopFn) {
          var ancestor = element,
            ret = [];
          while ((ancestor = Y_DOM.ancestor(ancestor, fn, testSelf, stopFn))) {
            testSelf = false;
            if (ancestor) {
              ret.unshift(ancestor);
              if (stopFn && stopFn(ancestor)) return ret;
            }
          }
          return ret;
        },
        elementByAxis: function (element, axis, fn, all, stopAt) {
          while (element && (element = element[axis])) {
            if ((all || element[TAG_NAME]) && (!fn || fn(element)))
              return element;
            if (stopAt && stopAt(element)) return null;
          }
          return null;
        },
        contains: function (element, needle) {
          var ret = false;
          if (!needle || !element || !needle[NODE_TYPE] || !element[NODE_TYPE])
            ret = false;
          else if (
            element[CONTAINS] &&
            (needle[NODE_TYPE] === 1 || supportsContainsTextNode)
          )
            ret = element[CONTAINS](needle);
          else if (element[COMPARE_DOCUMENT_POSITION]) {
            if (
              element === needle ||
              !!(element[COMPARE_DOCUMENT_POSITION](needle) & 16)
            )
              ret = true;
          } else ret = Y_DOM._bruteContains(element, needle);
          return ret;
        },
        inDoc: function (element, doc) {
          var ret = false,
            rootNode;
          if (element && element.nodeType) {
            doc || (doc = element[OWNER_DOCUMENT]);
            rootNode = doc[DOCUMENT_ELEMENT];
            if (rootNode && rootNode.contains && element.tagName)
              ret = rootNode.contains(element);
            else ret = Y_DOM.contains(rootNode, element);
          }
          return ret;
        },
        allById: function (id, root) {
          root = root || Y.config.doc;
          var nodes = [],
            ret = [],
            i,
            node;
          if (root.querySelectorAll)
            ret = root.querySelectorAll('[id\x3d"' + id + '"]');
          else if (root.all) {
            nodes = root.all(id);
            if (nodes) {
              if (nodes.nodeName)
                if (nodes.id === id) {
                  ret.push(nodes);
                  nodes = EMPTY_ARRAY;
                } else nodes = [nodes];
              if (nodes.length)
                for (i = 0; (node = nodes[i++]); )
                  if (
                    node.id === id ||
                    (node.attributes &&
                      node.attributes.id &&
                      node.attributes.id.value === id)
                  )
                    ret.push(node);
            }
          } else ret = [Y_DOM._getDoc(root).getElementById(id)];
          return ret;
        },
        isWindow: function (obj) {
          return !!(obj && obj.scrollTo && obj.document);
        },
        _removeChildNodes: function (node) {
          while (node.firstChild) node.removeChild(node.firstChild);
        },
        siblings: function (node, fn) {
          var nodes = [],
            sibling = node;
          while ((sibling = sibling[PREVIOUS_SIBLING]))
            if (sibling[TAG_NAME] && (!fn || fn(sibling)))
              nodes.unshift(sibling);
          sibling = node;
          while ((sibling = sibling[NEXT_SIBLING]))
            if (sibling[TAG_NAME] && (!fn || fn(sibling))) nodes.push(sibling);
          return nodes;
        },
        _bruteContains: function (element, needle) {
          while (needle) {
            if (element === needle) return true;
            needle = needle.parentNode;
          }
          return false;
        },
        _getRegExp: function (str, flags) {
          flags = flags || "";
          Y_DOM._regexCache = Y_DOM._regexCache || {};
          if (!Y_DOM._regexCache[str + flags])
            Y_DOM._regexCache[str + flags] = new RegExp(str, flags);
          return Y_DOM._regexCache[str + flags];
        },
        _getDoc: function (element) {
          var doc = Y.config.doc;
          if (element)
            doc =
              element[NODE_TYPE] === 9
                ? element
                : element[OWNER_DOCUMENT] || element.document || Y.config.doc;
          return doc;
        },
        _getWin: function (element) {
          var doc = Y_DOM._getDoc(element);
          return doc[DEFAULT_VIEW] || doc[PARENT_WINDOW] || Y.config.win;
        },
        _batch: function (nodes, fn, arg1, arg2, arg3, etc) {
          fn = typeof fn === "string" ? Y_DOM[fn] : fn;
          var result,
            i = 0,
            node,
            ret;
          if (fn && nodes)
            while ((node = nodes[i++])) {
              result = result = fn.call(Y_DOM, node, arg1, arg2, arg3, etc);
              if (typeof result !== "undefined") {
                ret || (ret = []);
                ret.push(result);
              }
            }
          return typeof ret !== "undefined" ? ret : nodes;
        },
        generateID: function (el) {
          var id = el.id;
          if (!id) {
            id = Y.stamp(el);
            el.id = id;
          }
          return id;
        },
      };
    Y.DOM = Y_DOM;
  },
  "patched-v3.18.1",
  { requires: ["oop", "features"] }
);
YUI.add(
  "dom-screen",
  function (Y, NAME) {
    (function (Y) {
      var DOCUMENT_ELEMENT = "documentElement",
        COMPAT_MODE = "compatMode",
        POSITION = "position",
        FIXED = "fixed",
        RELATIVE = "relative",
        LEFT = "left",
        TOP = "top",
        _BACK_COMPAT = "BackCompat",
        MEDIUM = "medium",
        BORDER_LEFT_WIDTH = "borderLeftWidth",
        BORDER_TOP_WIDTH = "borderTopWidth",
        GET_BOUNDING_CLIENT_RECT = "getBoundingClientRect",
        GET_COMPUTED_STYLE = "getComputedStyle",
        Y_DOM = Y.DOM,
        RE_TABLE = /^t(?:able|d|h)$/i,
        SCROLL_NODE;
      if (Y.UA.ie)
        if (Y.config.doc[COMPAT_MODE] !== "BackCompat")
          SCROLL_NODE = DOCUMENT_ELEMENT;
        else SCROLL_NODE = "body";
      Y.mix(Y_DOM, {
        winHeight: function (node) {
          var h = Y_DOM._getWinSize(node).height;
          return h;
        },
        winWidth: function (node) {
          var w = Y_DOM._getWinSize(node).width;
          return w;
        },
        docHeight: function (node) {
          var h = Y_DOM._getDocSize(node).height;
          return Math.max(h, Y_DOM._getWinSize(node).height);
        },
        docWidth: function (node) {
          var w = Y_DOM._getDocSize(node).width;
          return Math.max(w, Y_DOM._getWinSize(node).width);
        },
        docScrollX: function (node, doc) {
          doc = doc || node ? Y_DOM._getDoc(node) : Y.config.doc;
          var dv = doc.defaultView,
            pageOffset = dv ? dv.pageXOffset : 0;
          return Math.max(
            doc[DOCUMENT_ELEMENT].scrollLeft,
            doc.body.scrollLeft,
            pageOffset
          );
        },
        docScrollY: function (node, doc) {
          doc = doc || node ? Y_DOM._getDoc(node) : Y.config.doc;
          var dv = doc.defaultView,
            pageOffset = dv ? dv.pageYOffset : 0;
          return Math.max(
            doc[DOCUMENT_ELEMENT].scrollTop,
            doc.body.scrollTop,
            pageOffset
          );
        },
        getXY: (function () {
          if (Y.config.doc[DOCUMENT_ELEMENT][GET_BOUNDING_CLIENT_RECT])
            return function (node) {
              var xy = null,
                scrollLeft,
                scrollTop,
                mode,
                box,
                offX,
                offY,
                doc,
                win,
                inDoc,
                rootNode;
              if (node && node.tagName) {
                doc = node.ownerDocument;
                mode = doc[COMPAT_MODE];
                if (mode !== _BACK_COMPAT) rootNode = doc[DOCUMENT_ELEMENT];
                else rootNode = doc.body;
                if (rootNode.contains) inDoc = rootNode.contains(node);
                else inDoc = Y.DOM.contains(rootNode, node);
                if (inDoc) {
                  win = doc.defaultView;
                  if (win && "pageXOffset" in win) {
                    scrollLeft = win.pageXOffset;
                    scrollTop = win.pageYOffset;
                  } else {
                    scrollLeft = SCROLL_NODE
                      ? doc[SCROLL_NODE].scrollLeft
                      : Y_DOM.docScrollX(node, doc);
                    scrollTop = SCROLL_NODE
                      ? doc[SCROLL_NODE].scrollTop
                      : Y_DOM.docScrollY(node, doc);
                  }
                  if (Y.UA.ie)
                    if (
                      !doc.documentMode ||
                      doc.documentMode < 8 ||
                      mode === _BACK_COMPAT
                    ) {
                      offX = rootNode.clientLeft;
                      offY = rootNode.clientTop;
                    }
                  box = node[GET_BOUNDING_CLIENT_RECT]();
                  xy = [box.left, box.top];
                  if (offX || offY) {
                    xy[0] -= offX;
                    xy[1] -= offY;
                  }
                  if (scrollTop || scrollLeft)
                    if (!Y.UA.ios || Y.UA.ios >= 4.2) {
                      xy[0] += scrollLeft;
                      xy[1] += scrollTop;
                    }
                } else xy = Y_DOM._getOffset(node);
              }
              return xy;
            };
          else
            return function (node) {
              var xy = null,
                doc,
                parentNode,
                bCheck,
                scrollTop,
                scrollLeft;
              if (node)
                if (Y_DOM.inDoc(node)) {
                  xy = [node.offsetLeft, node.offsetTop];
                  doc = node.ownerDocument;
                  parentNode = node;
                  bCheck = Y.UA.gecko || Y.UA.webkit > 519 ? true : false;
                  while ((parentNode = parentNode.offsetParent)) {
                    xy[0] += parentNode.offsetLeft;
                    xy[1] += parentNode.offsetTop;
                    if (bCheck) xy = Y_DOM._calcBorders(parentNode, xy);
                  }
                  if (Y_DOM.getStyle(node, POSITION) != FIXED) {
                    parentNode = node;
                    while ((parentNode = parentNode.parentNode)) {
                      scrollTop = parentNode.scrollTop;
                      scrollLeft = parentNode.scrollLeft;
                      if (
                        Y.UA.gecko &&
                        Y_DOM.getStyle(parentNode, "overflow") !== "visible"
                      )
                        xy = Y_DOM._calcBorders(parentNode, xy);
                      if (scrollTop || scrollLeft) {
                        xy[0] -= scrollLeft;
                        xy[1] -= scrollTop;
                      }
                    }
                    xy[0] += Y_DOM.docScrollX(node, doc);
                    xy[1] += Y_DOM.docScrollY(node, doc);
                  } else {
                    xy[0] += Y_DOM.docScrollX(node, doc);
                    xy[1] += Y_DOM.docScrollY(node, doc);
                  }
                } else xy = Y_DOM._getOffset(node);
              return xy;
            };
        })(),
        getScrollbarWidth: Y.cached(
          function () {
            var doc = Y.config.doc,
              testNode = doc.createElement("div"),
              body = doc.getElementsByTagName("body")[0],
              width = 0.1;
            if (body) {
              testNode.style.cssText =
                "position:absolute;visibility:hidden;overflow:scroll;width:20px;";
              testNode.appendChild(doc.createElement("p")).style.height = "1px";
              body.insertBefore(testNode, body.firstChild);
              width = testNode.offsetWidth - testNode.clientWidth;
              body.removeChild(testNode);
            }
            return width;
          },
          null,
          0.1
        ),
        getX: function (node) {
          return Y_DOM.getXY(node)[0];
        },
        getY: function (node) {
          return Y_DOM.getXY(node)[1];
        },
        setXY: function (node, xy, noRetry) {
          var setStyle = Y_DOM.setStyle,
            pos,
            delta,
            newXY,
            currentXY,
            offsetDir,
            dir,
            x;
          if (node && xy) {
            pos = Y_DOM.getStyle(node, POSITION);
            offsetDir = Y_DOM.OFFSET_XY;
            if (!offsetDir) {
              dir = Y_DOM.getComputedStyle(node, "direction");
              offsetDir = dir === "rtl" ? "right" : LEFT;
            }
            delta = Y_DOM._getOffset(node, offsetDir);
            if (pos == "static") {
              pos = RELATIVE;
              setStyle(node, POSITION, pos);
            }
            currentXY = Y_DOM._getDirXY(node, offsetDir);
            x = xy[0];
            if (offsetDir === "right") {
              x =
                Y_DOM.winWidth() -
                (xy[0] + parseInt(Y_DOM.getComputedStyle(node, "width"), 10));
              if (!delta[0] && !noRetry) noRetry = false;
            }
            if (x !== null)
              setStyle(node, offsetDir, x - currentXY[0] + delta[0] + "px");
            if (xy[1] !== null)
              setStyle(node, TOP, xy[1] - currentXY[1] + delta[1] + "px");
            if (!noRetry) {
              newXY = Y_DOM.getXY(node);
              if (newXY[0] !== xy[0] || newXY[1] !== xy[1])
                Y_DOM.setXY(node, xy, true);
            }
          } else;
        },
        setX: function (node, x) {
          return Y_DOM.setXY(node, [x, null]);
        },
        setY: function (node, y) {
          return Y_DOM.setXY(node, [null, y]);
        },
        swapXY: function (node, otherNode) {
          var xy = Y_DOM.getXY(node);
          Y_DOM.setXY(node, Y_DOM.getXY(otherNode));
          Y_DOM.setXY(otherNode, xy);
        },
        _calcBorders: function (node, xy2) {
          var t =
              parseInt(Y_DOM[GET_COMPUTED_STYLE](node, BORDER_TOP_WIDTH), 10) ||
              0,
            l =
              parseInt(
                Y_DOM[GET_COMPUTED_STYLE](node, BORDER_LEFT_WIDTH),
                10
              ) || 0;
          if (Y.UA.gecko)
            if (RE_TABLE.test(node.tagName)) {
              t = 0;
              l = 0;
            }
          xy2[0] += l;
          xy2[1] += t;
          return xy2;
        },
        _getWinSize: function (node, doc) {
          doc = doc || node ? Y_DOM._getDoc(node) : Y.config.doc;
          var win = doc.defaultView || doc.parentWindow,
            mode = doc[COMPAT_MODE],
            h = win.innerHeight,
            w = win.innerWidth,
            root = doc[DOCUMENT_ELEMENT];
          if (mode && !Y.UA.opera) {
            if (mode != "CSS1Compat") root = doc.body;
            h = root.clientHeight;
            w = root.clientWidth;
          }
          return { height: h, width: w };
        },
        _getDocSize: function (node) {
          var doc = node ? Y_DOM._getDoc(node) : Y.config.doc,
            root = doc[DOCUMENT_ELEMENT];
          if (doc[COMPAT_MODE] != "CSS1Compat") root = doc.body;
          return { height: root.scrollHeight, width: root.scrollWidth };
        },
        _getDirXY: function (node, dir) {
          var xy = Y_DOM.getXY(node);
          if (dir === "right")
            xy[0] =
              Y_DOM.winWidth() -
              (xy[0] + parseInt(Y_DOM.getComputedStyle(node, "width"), 10));
          return xy;
        },
      });
    })(Y);
    (function (Y) {
      var TOP = "top",
        RIGHT = "right",
        BOTTOM = "bottom",
        LEFT = "left",
        getOffsets = function (r1, r2) {
          var t = Math.max(r1[TOP], r2[TOP]),
            r = Math.min(r1[RIGHT], r2[RIGHT]),
            b = Math.min(r1[BOTTOM], r2[BOTTOM]),
            l = Math.max(r1[LEFT], r2[LEFT]),
            ret = {};
          ret[TOP] = t;
          ret[RIGHT] = r;
          ret[BOTTOM] = b;
          ret[LEFT] = l;
          return ret;
        },
        DOM = Y.DOM;
      Y.mix(DOM, {
        region: function (node) {
          var xy = DOM.getXY(node),
            ret = false;
          if (node && xy)
            ret = DOM._getRegion(
              xy[1],
              xy[0] + node.offsetWidth,
              xy[1] + node.offsetHeight,
              xy[0]
            );
          return ret;
        },
        intersect: function (node, node2, altRegion) {
          var r = altRegion || DOM.region(node),
            region = {},
            n = node2,
            off;
          if (n.tagName) region = DOM.region(n);
          else if (Y.Lang.isObject(node2)) region = node2;
          else return false;
          off = getOffsets(region, r);
          return {
            top: off[TOP],
            right: off[RIGHT],
            bottom: off[BOTTOM],
            left: off[LEFT],
            area: (off[BOTTOM] - off[TOP]) * (off[RIGHT] - off[LEFT]),
            yoff: off[BOTTOM] - off[TOP],
            xoff: off[RIGHT] - off[LEFT],
            inRegion: DOM.inRegion(node, node2, false, altRegion),
          };
        },
        inRegion: function (node, node2, all, altRegion) {
          var region = {},
            r = altRegion || DOM.region(node),
            n = node2,
            off;
          if (n.tagName) region = DOM.region(n);
          else if (Y.Lang.isObject(node2)) region = node2;
          else return false;
          if (all)
            return (
              r[LEFT] >= region[LEFT] &&
              r[RIGHT] <= region[RIGHT] &&
              r[TOP] >= region[TOP] &&
              r[BOTTOM] <= region[BOTTOM]
            );
          else {
            off = getOffsets(region, r);
            if (off[BOTTOM] >= off[TOP] && off[RIGHT] >= off[LEFT]) return true;
            else return false;
          }
        },
        inViewportRegion: function (node, all, altRegion) {
          return DOM.inRegion(node, DOM.viewportRegion(node), all, altRegion);
        },
        _getRegion: function (t, r, b, l) {
          var region = {};
          region[TOP] = region[1] = t;
          region[LEFT] = region[0] = l;
          region[BOTTOM] = b;
          region[RIGHT] = r;
          region.width = region[RIGHT] - region[LEFT];
          region.height = region[BOTTOM] - region[TOP];
          return region;
        },
        viewportRegion: function (node) {
          node = node || Y.config.doc.documentElement;
          var ret = false,
            scrollX,
            scrollY;
          if (node) {
            scrollX = DOM.docScrollX(node);
            scrollY = DOM.docScrollY(node);
            ret = DOM._getRegion(
              scrollY,
              DOM.winWidth(node) + scrollX,
              scrollY + DOM.winHeight(node),
              scrollX
            );
          }
          return ret;
        },
      });
    })(Y);
  },
  "patched-v3.18.1",
  { requires: ["dom-base", "dom-style"] }
);
YUI.add(
  "dom-style",
  function (Y, NAME) {
    var DOCUMENT_ELEMENT = "documentElement",
      DEFAULT_VIEW = "defaultView",
      OWNER_DOCUMENT = "ownerDocument",
      STYLE = "style",
      FLOAT = "float",
      CSS_FLOAT = "cssFloat",
      STYLE_FLOAT = "styleFloat",
      TRANSPARENT = "transparent",
      GET_COMPUTED_STYLE = "getComputedStyle",
      GET_BOUNDING_CLIENT_RECT = "getBoundingClientRect",
      DOCUMENT = Y.config.doc,
      Y_DOM = Y.DOM,
      TRANSFORM,
      TRANSFORMORIGIN,
      VENDOR_TRANSFORM = [
        "WebkitTransform",
        "MozTransform",
        "OTransform",
        "msTransform",
        "transform",
      ],
      re_unit = /width|height|top|left|right|bottom|margin|padding/i;
    Y.Array.each(VENDOR_TRANSFORM, function (val) {
      if (val in DOCUMENT[DOCUMENT_ELEMENT].style) {
        TRANSFORM = val;
        TRANSFORMORIGIN = val + "Origin";
      }
    });
    Y.mix(Y_DOM, {
      DEFAULT_UNIT: "px",
      CUSTOM_STYLES: {},
      setStyle: function (node, att, val, style) {
        style = style || node.style;
        var CUSTOM_STYLES = Y_DOM.CUSTOM_STYLES;
        if (style) {
          if (val === null || val === "") val = "";
          else if (!isNaN(Number(val)) && re_unit.test(att))
            val += Y_DOM.DEFAULT_UNIT;
          if (att in CUSTOM_STYLES)
            if (CUSTOM_STYLES[att].set) {
              CUSTOM_STYLES[att].set(node, val, style);
              return;
            } else {
              if (typeof CUSTOM_STYLES[att] === "string")
                att = CUSTOM_STYLES[att];
            }
          else if (att === "") {
            att = "cssText";
            val = "";
          }
          style[att] = val;
        }
      },
      getStyle: function (node, att, style) {
        style = style || node.style;
        var CUSTOM_STYLES = Y_DOM.CUSTOM_STYLES,
          val = "";
        if (style) {
          if (att in CUSTOM_STYLES)
            if (CUSTOM_STYLES[att].get)
              return CUSTOM_STYLES[att].get(node, att, style);
            else if (typeof CUSTOM_STYLES[att] === "string")
              att = CUSTOM_STYLES[att];
          val = style[att];
          if (val === "") val = Y_DOM[GET_COMPUTED_STYLE](node, att);
        }
        return val;
      },
      setStyles: function (node, hash) {
        var style = node.style;
        Y.each(
          hash,
          function (v, n) {
            Y_DOM.setStyle(node, n, v, style);
          },
          Y_DOM
        );
      },
      getComputedStyle: function (node, att) {
        var val = "",
          doc = node[OWNER_DOCUMENT],
          computed;
        if (
          node[STYLE] &&
          doc[DEFAULT_VIEW] &&
          doc[DEFAULT_VIEW][GET_COMPUTED_STYLE]
        ) {
          computed = doc[DEFAULT_VIEW][GET_COMPUTED_STYLE](node, null);
          if (computed) val = computed[att];
        }
        return val;
      },
    });
    if (DOCUMENT[DOCUMENT_ELEMENT][STYLE][CSS_FLOAT] !== undefined)
      Y_DOM.CUSTOM_STYLES[FLOAT] = CSS_FLOAT;
    else if (DOCUMENT[DOCUMENT_ELEMENT][STYLE][STYLE_FLOAT] !== undefined)
      Y_DOM.CUSTOM_STYLES[FLOAT] = STYLE_FLOAT;
    if (Y.UA.webkit)
      Y_DOM[GET_COMPUTED_STYLE] = function (node, att) {
        var view = node[OWNER_DOCUMENT][DEFAULT_VIEW],
          val = view[GET_COMPUTED_STYLE](node, "")[att];
        if (val === "rgba(0, 0, 0, 0)") val = TRANSPARENT;
        return val;
      };
    Y.DOM._getAttrOffset = function (node, attr) {
      var val = Y.DOM[GET_COMPUTED_STYLE](node, attr),
        offsetParent = node.offsetParent,
        position,
        parentOffset,
        offset;
      if (val === "auto") {
        position = Y.DOM.getStyle(node, "position");
        if (position === "static" || position === "relative") val = 0;
        else if (offsetParent && offsetParent[GET_BOUNDING_CLIENT_RECT]) {
          parentOffset = offsetParent[GET_BOUNDING_CLIENT_RECT]()[attr];
          offset = node[GET_BOUNDING_CLIENT_RECT]()[attr];
          if (attr === "left" || attr === "top") val = offset - parentOffset;
          else val = parentOffset - node[GET_BOUNDING_CLIENT_RECT]()[attr];
        }
      }
      return val;
    };
    Y.DOM._getOffset = function (node, dir) {
      var pos,
        xy = null,
        offset = { left: "offsetLeft", right: "offsetRight" },
        margins = { left: "marginLeft", right: "marginRight" },
        margin;
      dir = dir || "left";
      if (node) {
        pos = Y_DOM.getStyle(node, "position");
        margin = parseInt(Y_DOM[GET_COMPUTED_STYLE](node, margins[dir]), 10);
        xy = [
          parseInt(Y_DOM[GET_COMPUTED_STYLE](node, dir), 10),
          parseInt(Y_DOM[GET_COMPUTED_STYLE](node, "top"), 10),
        ];
        if (isNaN(xy[0])) {
          xy[0] = parseInt(Y_DOM.getStyle(node, dir), 10);
          if (isNaN(xy[0]))
            xy[0] = pos === "relative" ? 0 : node[offset[dir]] - margin || 0;
        }
        if (isNaN(xy[1])) {
          xy[1] = parseInt(Y_DOM.getStyle(node, "top"), 10);
          if (isNaN(xy[1]))
            xy[1] = pos === "relative" ? 0 : node.offsetTop || 0;
        }
      }
      return xy;
    };
    if (TRANSFORM) {
      Y_DOM.CUSTOM_STYLES.transform = {
        set: function (node, val, style) {
          style[TRANSFORM] = val;
        },
        get: function (node) {
          return Y_DOM[GET_COMPUTED_STYLE](node, TRANSFORM);
        },
      };
      Y_DOM.CUSTOM_STYLES.transformOrigin = {
        set: function (node, val, style) {
          style[TRANSFORMORIGIN] = val;
        },
        get: function (node) {
          return Y_DOM[GET_COMPUTED_STYLE](node, TRANSFORMORIGIN);
        },
      };
    }
  },
  "patched-v3.18.1",
  { requires: ["dom-base"] }
);
YUI.add(
  "event-base",
  function (Y, NAME) {
    Y.publish("domready", { fireOnce: true, async: true });
    if (YUI.Env.DOMReady) Y.fire("domready");
    else
      Y.Do.before(
        function () {
          Y.fire("domready");
        },
        YUI.Env,
        "_ready"
      );
    var ua = Y.UA,
      EMPTY = {},
      webkitKeymap = {
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63276: 33,
        63277: 34,
        25: 9,
        63272: 46,
        63273: 36,
        63275: 35,
      },
      resolve = function (n) {
        if (!n) return n;
        try {
          if (n && 3 == n.nodeType) n = n.parentNode;
        } catch (e) {
          return null;
        }
        return Y.one(n);
      },
      DOMEventFacade = function (ev, currentTarget, wrapper) {
        this._event = ev;
        this._currentTarget = currentTarget;
        this._wrapper = wrapper || EMPTY;
        this.init();
      };
    Y.extend(DOMEventFacade, Object, {
      init: function () {
        var e = this._event,
          overrides = this._wrapper.overrides,
          x = e.pageX,
          y = e.pageY,
          c,
          currentTarget = this._currentTarget;
        this.altKey = e.altKey;
        this.ctrlKey = e.ctrlKey;
        this.metaKey = e.metaKey;
        this.shiftKey = e.shiftKey;
        this.type = (overrides && overrides.type) || e.type;
        this.clientX = e.clientX;
        this.clientY = e.clientY;
        this.pageX = x;
        this.pageY = y;
        c = e.keyCode || e.charCode;
        if (ua.webkit && c in webkitKeymap) c = webkitKeymap[c];
        this.keyCode = c;
        this.charCode = c;
        this.which = e.which || e.charCode || c;
        this.button = this.which;
        this.target = resolve(e.target);
        this.currentTarget = resolve(currentTarget);
        this.relatedTarget = resolve(e.relatedTarget);
        if (e.type == "mousewheel" || e.type == "DOMMouseScroll")
          this.wheelDelta = e.detail
            ? e.detail * -1
            : Math.round(e.wheelDelta / 80) || (e.wheelDelta < 0 ? -1 : 1);
        if (this._touch) this._touch(e, currentTarget, this._wrapper);
      },
      stopPropagation: function () {
        this._event.stopPropagation();
        this._wrapper.stopped = 1;
        this.stopped = 1;
      },
      stopImmediatePropagation: function () {
        var e = this._event;
        if (e.stopImmediatePropagation) e.stopImmediatePropagation();
        else this.stopPropagation();
        this._wrapper.stopped = 2;
        this.stopped = 2;
      },
      preventDefault: function (returnValue) {
        var e = this._event;
        e.preventDefault();
        if (returnValue) e.returnValue = returnValue;
        this._wrapper.prevented = 1;
        this.prevented = 1;
      },
      halt: function (immediate) {
        if (immediate) this.stopImmediatePropagation();
        else this.stopPropagation();
        this.preventDefault();
      },
    });
    DOMEventFacade.resolve = resolve;
    Y.DOM2EventFacade = DOMEventFacade;
    Y.DOMEventFacade = DOMEventFacade;
    (function () {
      Y.Env.evt.dom_wrappers = {};
      Y.Env.evt.dom_map = {};
      var _eventenv = Y.Env.evt,
        config = Y.config,
        win = config.win,
        add = YUI.Env.add,
        remove = YUI.Env.remove,
        onLoad = function () {
          YUI.Env.windowLoaded = true;
          Y.Event._load();
          remove(win, "load", onLoad);
        },
        onUnload = function () {
          Y.Event._unload();
        },
        EVENT_READY = "domready",
        COMPAT_ARG = "~yui|2|compat~",
        shouldIterate = function (o) {
          try {
            return (
              o &&
              typeof o !== "string" &&
              Y.Lang.isNumber(o.length) &&
              !o.tagName &&
              !Y.DOM.isWindow(o)
            );
          } catch (ex) {
            return false;
          }
        },
        _ceProtoDelete = Y.CustomEvent.prototype._delete,
        _deleteAndClean = function (s) {
          var ret = _ceProtoDelete.apply(this, arguments);
          if (!this.hasSubs()) Y.Event._clean(this);
          return ret;
        },
        Event = (function () {
          var _loadComplete = false,
            _retryCount = 0,
            _avail = [],
            _wrappers = _eventenv.dom_wrappers,
            _windowLoadKey = null,
            _el_events = _eventenv.dom_map;
          return {
            POLL_RETRYS: 1e3,
            POLL_INTERVAL: 40,
            lastError: null,
            _interval: null,
            _dri: null,
            DOMReady: false,
            startInterval: function () {
              if (!Event._interval)
                Event._interval = setInterval(Event._poll, Event.POLL_INTERVAL);
            },
            onAvailable: function (
              id,
              fn,
              p_obj,
              p_override,
              checkContent,
              compat
            ) {
              var a = Y.Array(id),
                i,
                availHandle;
              for (i = 0; i < a.length; i = i + 1)
                _avail.push({
                  id: a[i],
                  fn: fn,
                  obj: p_obj,
                  override: p_override,
                  checkReady: checkContent,
                  compat: compat,
                });
              _retryCount = this.POLL_RETRYS;
              setTimeout(Event._poll, 0);
              availHandle = new Y.EventHandle({
                _delete: function () {
                  if (availHandle.handle) {
                    availHandle.handle.detach();
                    return;
                  }
                  var i, j;
                  for (i = 0; i < a.length; i++)
                    for (j = 0; j < _avail.length; j++)
                      if (a[i] === _avail[j].id) _avail.splice(j, 1);
                },
              });
              return availHandle;
            },
            onContentReady: function (id, fn, obj, override, compat) {
              return Event.onAvailable(id, fn, obj, override, true, compat);
            },
            attach: function (type, fn, el, context) {
              return Event._attach(Y.Array(arguments, 0, true));
            },
            _createWrapper: function (el, type, capture, compat, facade) {
              var cewrapper,
                ek = Y.stamp(el),
                key = "event:" + ek + type;
              if (false === facade) key += "native";
              if (capture) key += "capture";
              cewrapper = _wrappers[key];
              if (!cewrapper) {
                cewrapper = Y.publish(key, {
                  silent: true,
                  bubbles: false,
                  emitFacade: false,
                  contextFn: function () {
                    if (compat) return cewrapper.el;
                    else {
                      cewrapper.nodeRef =
                        cewrapper.nodeRef || Y.one(cewrapper.el);
                      return cewrapper.nodeRef;
                    }
                  },
                });
                cewrapper.overrides = {};
                cewrapper.el = el;
                cewrapper.key = key;
                cewrapper.domkey = ek;
                cewrapper.type = type;
                cewrapper.fn = function (e) {
                  cewrapper.fire(
                    Event.getEvent(e, el, compat || false === facade)
                  );
                };
                cewrapper.capture = capture;
                if (el == win && type == "load") {
                  cewrapper.fireOnce = true;
                  _windowLoadKey = key;
                }
                cewrapper._delete = _deleteAndClean;
                _wrappers[key] = cewrapper;
                _el_events[ek] = _el_events[ek] || {};
                _el_events[ek][key] = cewrapper;
                add(el, type, cewrapper.fn, capture);
              }
              return cewrapper;
            },
            _attach: function (args, conf) {
              var compat,
                handles,
                oEl,
                cewrapper,
                context,
                fireNow = false,
                ret,
                type = args[0],
                fn = args[1],
                el = args[2] || win,
                facade = conf && conf.facade,
                capture = conf && conf.capture,
                overrides = conf && conf.overrides;
              if (args[args.length - 1] === COMPAT_ARG) compat = true;
              if (!fn || !fn.call) return false;
              if (shouldIterate(el)) {
                handles = [];
                Y.each(el, function (v, k) {
                  args[2] = v;
                  handles.push(Event._attach(args.slice(), conf));
                });
                return new Y.EventHandle(handles);
              } else if (Y.Lang.isString(el)) {
                if (compat) oEl = Y.DOM.byId(el);
                else {
                  oEl = Y.Selector.query(el);
                  switch (oEl.length) {
                    case 0:
                      oEl = null;
                      break;
                    case 1:
                      oEl = oEl[0];
                      break;
                    default:
                      args[2] = oEl;
                      return Event._attach(args, conf);
                  }
                }
                if (oEl) el = oEl;
                else {
                  ret = Event.onAvailable(
                    el,
                    function () {
                      ret.handle = Event._attach(args, conf);
                    },
                    Event,
                    true,
                    false,
                    compat
                  );
                  return ret;
                }
              }
              if (!el) return false;
              if (Y.Node && Y.instanceOf(el, Y.Node))
                el = Y.Node.getDOMNode(el);
              cewrapper = Event._createWrapper(
                el,
                type,
                capture,
                compat,
                facade
              );
              if (overrides) Y.mix(cewrapper.overrides, overrides);
              if (el == win && type == "load")
                if (YUI.Env.windowLoaded) fireNow = true;
              if (compat) args.pop();
              context = args[3];
              ret = cewrapper._on(
                fn,
                context,
                args.length > 4 ? args.slice(4) : null
              );
              if (fireNow) cewrapper.fire();
              return ret;
            },
            detach: function (type, fn, el, obj) {
              var args = Y.Array(arguments, 0, true),
                compat,
                l,
                ok,
                i,
                id,
                ce;
              if (args[args.length - 1] === COMPAT_ARG) compat = true;
              if (type && type.detach) return type.detach();
              if (typeof el == "string")
                if (compat) el = Y.DOM.byId(el);
                else {
                  el = Y.Selector.query(el);
                  l = el.length;
                  if (l < 1) el = null;
                  else if (l == 1) el = el[0];
                }
              if (!el) return false;
              if (el.detach) {
                args.splice(2, 1);
                return el.detach.apply(el, args);
              } else if (shouldIterate(el)) {
                ok = true;
                for (i = 0, l = el.length; i < l; ++i) {
                  args[2] = el[i];
                  ok = Y.Event.detach.apply(Y.Event, args) && ok;
                }
                return ok;
              }
              if (!type || !fn || !fn.call)
                return Event.purgeElement(el, false, type);
              id = "event:" + Y.stamp(el) + type;
              ce = _wrappers[id];
              if (ce) return ce.detach(fn);
              else return false;
            },
            getEvent: function (e, el, noFacade) {
              var ev = e || win.event;
              return noFacade
                ? ev
                : new Y.DOMEventFacade(
                    ev,
                    el,
                    _wrappers["event:" + Y.stamp(el) + e.type]
                  );
            },
            generateId: function (el) {
              return Y.DOM.generateID(el);
            },
            _isValidCollection: shouldIterate,
            _load: function (e) {
              if (!_loadComplete) {
                _loadComplete = true;
                if (Y.fire) Y.fire(EVENT_READY);
                Event._poll();
              }
            },
            _poll: function () {
              if (Event.locked) return;
              if (Y.UA.ie && !YUI.Env.DOMReady) {
                Event.startInterval();
                return;
              }
              Event.locked = true;
              var i,
                len,
                item,
                el,
                notAvail,
                executeItem,
                tryAgain = !_loadComplete;
              if (!tryAgain) tryAgain = _retryCount > 0;
              notAvail = [];
              executeItem = function (el, item) {
                var context,
                  ov = item.override;
                try {
                  if (item.compat) {
                    if (item.override)
                      if (ov === true) context = item.obj;
                      else context = ov;
                    else context = el;
                    item.fn.call(context, item.obj);
                  } else {
                    context = item.obj || Y.one(el);
                    item.fn.apply(context, Y.Lang.isArray(ov) ? ov : []);
                  }
                } catch (e) {}
              };
              for (i = 0, len = _avail.length; i < len; ++i) {
                item = _avail[i];
                if (item && !item.checkReady) {
                  el = item.compat
                    ? Y.DOM.byId(item.id)
                    : Y.Selector.query(item.id, null, true);
                  if (el) {
                    executeItem(el, item);
                    _avail[i] = null;
                  } else notAvail.push(item);
                }
              }
              for (i = 0, len = _avail.length; i < len; ++i) {
                item = _avail[i];
                if (item && item.checkReady) {
                  el = item.compat
                    ? Y.DOM.byId(item.id)
                    : Y.Selector.query(item.id, null, true);
                  if (el) {
                    if (
                      _loadComplete ||
                      (el.get && el.get("nextSibling")) ||
                      el.nextSibling
                    ) {
                      executeItem(el, item);
                      _avail[i] = null;
                    }
                  } else notAvail.push(item);
                }
              }
              _retryCount = notAvail.length === 0 ? 0 : _retryCount - 1;
              if (tryAgain) Event.startInterval();
              else {
                clearInterval(Event._interval);
                Event._interval = null;
              }
              Event.locked = false;
              return;
            },
            purgeElement: function (el, recurse, type) {
              var oEl = Y.Lang.isString(el)
                  ? Y.Selector.query(el, null, true)
                  : el,
                lis = Event.getListeners(oEl, type),
                i,
                len,
                children,
                child;
              if (recurse && oEl) {
                lis = lis || [];
                children = Y.Selector.query("*", oEl);
                len = children.length;
                for (i = 0; i < len; ++i) {
                  child = Event.getListeners(children[i], type);
                  if (child) lis = lis.concat(child);
                }
              }
              if (lis)
                for (i = 0, len = lis.length; i < len; ++i) lis[i].detachAll();
            },
            _clean: function (wrapper) {
              var key = wrapper.key,
                domkey = wrapper.domkey;
              remove(wrapper.el, wrapper.type, wrapper.fn, wrapper.capture);
              delete _wrappers[key];
              delete Y._yuievt.events[key];
              if (_el_events[domkey]) {
                delete _el_events[domkey][key];
                if (!Y.Object.size(_el_events[domkey]))
                  delete _el_events[domkey];
              }
            },
            getListeners: function (el, type) {
              var ek = Y.stamp(el, true),
                evts = _el_events[ek],
                results = [],
                key = type ? "event:" + ek + type : null,
                adapters = _eventenv.plugins;
              if (!evts) return null;
              if (key) {
                if (adapters[type] && adapters[type].eventDef) key += "_synth";
                if (evts[key]) results.push(evts[key]);
                key += "native";
                if (evts[key]) results.push(evts[key]);
              } else
                Y.each(evts, function (v, k) {
                  results.push(v);
                });
              return results.length ? results : null;
            },
            _unload: function (e) {
              Y.each(_wrappers, function (v, k) {
                if (v.type == "unload") v.fire(e);
                v.detachAll();
              });
              remove(win, "unload", onUnload);
            },
            nativeAdd: add,
            nativeRemove: remove,
          };
        })();
      Y.Event = Event;
      if (config.injected || YUI.Env.windowLoaded) onLoad();
      else add(win, "load", onLoad);
      if (Y.UA.ie) {
        Y.on(EVENT_READY, Event._poll);
        if (Y.UA.ie < 7)
          try {
            add(win, "unload", onUnload);
          } catch (e) {}
      }
      Event.Custom = Y.CustomEvent;
      Event.Subscriber = Y.Subscriber;
      Event.Target = Y.EventTarget;
      Event.Handle = Y.EventHandle;
      Event.Facade = Y.EventFacade;
      Event._poll();
    })();
    Y.Env.evt.plugins.available = {
      on: function (type, fn, id, o) {
        var a = arguments.length > 4 ? Y.Array(arguments, 4, true) : null;
        return Y.Event.onAvailable.call(Y.Event, id, fn, o, a);
      },
    };
    Y.Env.evt.plugins.contentready = {
      on: function (type, fn, id, o) {
        var a = arguments.length > 4 ? Y.Array(arguments, 4, true) : null;
        return Y.Event.onContentReady.call(Y.Event, id, fn, o, a);
      },
    };
  },
  "patched-v3.18.1",
  { requires: ["event-custom-base"] }
);
YUI.add(
  "event-custom-base",
  function (Y, NAME) {
    Y.Env.evt = { handles: {}, plugins: {} };
    var DO_BEFORE = 0,
      DO_AFTER = 1,
      DO = {
        objs: null,
        before: function (fn, obj, sFn, c) {
          var f = fn,
            a;
          if (c) {
            a = [fn, c].concat(Y.Array(arguments, 4, true));
            f = Y.rbind.apply(Y, a);
          }
          return this._inject(DO_BEFORE, f, obj, sFn);
        },
        after: function (fn, obj, sFn, c) {
          var f = fn,
            a;
          if (c) {
            a = [fn, c].concat(Y.Array(arguments, 4, true));
            f = Y.rbind.apply(Y, a);
          }
          return this._inject(DO_AFTER, f, obj, sFn);
        },
        _inject: function (when, fn, obj, sFn) {
          var id = Y.stamp(obj),
            o,
            sid;
          if (!obj._yuiaop) obj._yuiaop = {};
          o = obj._yuiaop;
          if (!o[sFn]) {
            o[sFn] = new Y.Do.Method(obj, sFn);
            obj[sFn] = function () {
              return o[sFn].exec.apply(o[sFn], arguments);
            };
          }
          sid = id + Y.stamp(fn) + sFn;
          o[sFn].register(sid, fn, when);
          return new Y.EventHandle(o[sFn], sid);
        },
        detach: function (handle) {
          if (handle.detach) handle.detach();
        },
      };
    Y.Do = DO;
    DO.Method = function (obj, sFn) {
      this.obj = obj;
      this.methodName = sFn;
      this.method = obj[sFn];
      this.before = {};
      this.after = {};
    };
    DO.Method.prototype.register = function (sid, fn, when) {
      if (when) this.after[sid] = fn;
      else this.before[sid] = fn;
    };
    DO.Method.prototype._delete = function (sid) {
      delete this.before[sid];
      delete this.after[sid];
    };
    DO.Method.prototype.exec = function () {
      var args = Y.Array(arguments, 0, true),
        i,
        ret,
        newRet,
        bf = this.before,
        af = this.after,
        prevented = false;
      for (i in bf)
        if (bf.hasOwnProperty(i)) {
          ret = bf[i].apply(this.obj, args);
          if (ret)
            switch (ret.constructor) {
              case DO.Halt:
                return ret.retVal;
              case DO.AlterArgs:
                args = ret.newArgs;
                break;
              case DO.Prevent:
                prevented = true;
                break;
              default:
            }
        }
      if (!prevented) ret = this.method.apply(this.obj, args);
      DO.originalRetVal = ret;
      DO.currentRetVal = ret;
      for (i in af)
        if (af.hasOwnProperty(i)) {
          newRet = af[i].apply(this.obj, args);
          if (newRet && newRet.constructor === DO.Halt) return newRet.retVal;
          else if (newRet && newRet.constructor === DO.AlterReturn) {
            ret = newRet.newRetVal;
            DO.currentRetVal = ret;
          }
        }
      return ret;
    };
    DO.AlterArgs = function (msg, newArgs) {
      this.msg = msg;
      this.newArgs = newArgs;
    };
    DO.AlterReturn = function (msg, newRetVal) {
      this.msg = msg;
      this.newRetVal = newRetVal;
    };
    DO.Halt = function (msg, retVal) {
      this.msg = msg;
      this.retVal = retVal;
    };
    DO.Prevent = function (msg) {
      this.msg = msg;
    };
    DO.Error = DO.Halt;
    var YArray = Y.Array,
      AFTER = "after",
      CONFIGS = [
        "broadcast",
        "monitored",
        "bubbles",
        "context",
        "contextFn",
        "currentTarget",
        "defaultFn",
        "defaultTargetOnly",
        "details",
        "emitFacade",
        "fireOnce",
        "async",
        "host",
        "preventable",
        "preventedFn",
        "queuable",
        "silent",
        "stoppedFn",
        "target",
        "type",
      ],
      CONFIGS_HASH = YArray.hash(CONFIGS),
      nativeSlice = Array.prototype.slice,
      YUI3_SIGNATURE = 9,
      YUI_LOG = "yui:log",
      mixConfigs = function (r, s, ov) {
        var p;
        for (p in s) if (CONFIGS_HASH[p] && (ov || !(p in r))) r[p] = s[p];
        return r;
      };
    Y.CustomEvent = function (type, defaults) {
      this._kds = Y.CustomEvent.keepDeprecatedSubs;
      this.id = Y.guid();
      this.type = type;
      this.silent = this.logSystem = type === YUI_LOG;
      if (this._kds) {
        this.subscribers = {};
        this.afters = {};
      }
      if (defaults) mixConfigs(this, defaults, true);
    };
    Y.CustomEvent.keepDeprecatedSubs = false;
    Y.CustomEvent.mixConfigs = mixConfigs;
    Y.CustomEvent.prototype = {
      constructor: Y.CustomEvent,
      signature: YUI3_SIGNATURE,
      context: Y,
      preventable: true,
      bubbles: true,
      hasSubs: function (when) {
        var s = 0,
          a = 0,
          subs = this._subscribers,
          afters = this._afters,
          sib = this.sibling;
        if (subs) s = subs.length;
        if (afters) a = afters.length;
        if (sib) {
          subs = sib._subscribers;
          afters = sib._afters;
          if (subs) s += subs.length;
          if (afters) a += afters.length;
        }
        if (when) return when === "after" ? a : s;
        return s + a;
      },
      monitor: function (what) {
        this.monitored = true;
        var type = this.id + "|" + this.type + "_" + what,
          args = nativeSlice.call(arguments, 0);
        args[0] = type;
        return this.host.on.apply(this.host, args);
      },
      getSubs: function () {
        var sibling = this.sibling,
          subs = this._subscribers,
          afters = this._afters,
          siblingSubs,
          siblingAfters;
        if (sibling) {
          siblingSubs = sibling._subscribers;
          siblingAfters = sibling._afters;
        }
        if (siblingSubs)
          if (subs) subs = subs.concat(siblingSubs);
          else subs = siblingSubs.concat();
        else if (subs) subs = subs.concat();
        else subs = [];
        if (siblingAfters)
          if (afters) afters = afters.concat(siblingAfters);
          else afters = siblingAfters.concat();
        else if (afters) afters = afters.concat();
        else afters = [];
        return [subs, afters];
      },
      applyConfig: function (o, force) {
        mixConfigs(this, o, force);
      },
      _on: function (fn, context, args, when) {
        var s = new Y.Subscriber(fn, context, args, when),
          firedWith;
        if (this.fireOnce && this.fired) {
          firedWith = this.firedWith;
          if (this.emitFacade && this._addFacadeToArgs)
            this._addFacadeToArgs(firedWith);
          if (this.async)
            setTimeout(Y.bind(this._notify, this, s, firedWith), 0);
          else this._notify(s, firedWith);
        }
        if (when === AFTER) {
          if (!this._afters) this._afters = [];
          this._afters.push(s);
        } else {
          if (!this._subscribers) this._subscribers = [];
          this._subscribers.push(s);
        }
        if (this._kds)
          if (when === AFTER) this.afters[s.id] = s;
          else this.subscribers[s.id] = s;
        return new Y.EventHandle(this, s);
      },
      subscribe: function (fn, context) {
        var a = arguments.length > 2 ? nativeSlice.call(arguments, 2) : null;
        return this._on(fn, context, a, true);
      },
      on: function (fn, context) {
        var a = arguments.length > 2 ? nativeSlice.call(arguments, 2) : null;
        if (this.monitored && this.host)
          this.host._monitor("attach", this, { args: arguments });
        return this._on(fn, context, a, true);
      },
      after: function (fn, context) {
        var a = arguments.length > 2 ? nativeSlice.call(arguments, 2) : null;
        return this._on(fn, context, a, AFTER);
      },
      detach: function (fn, context) {
        if (fn && fn.detach) return fn.detach();
        var i,
          s,
          found = 0,
          subs = this._subscribers,
          afters = this._afters;
        if (subs)
          for (i = subs.length; i >= 0; i--) {
            s = subs[i];
            if (s && (!fn || fn === s.fn)) {
              this._delete(s, subs, i);
              found++;
            }
          }
        if (afters)
          for (i = afters.length; i >= 0; i--) {
            s = afters[i];
            if (s && (!fn || fn === s.fn)) {
              this._delete(s, afters, i);
              found++;
            }
          }
        return found;
      },
      unsubscribe: function () {
        return this.detach.apply(this, arguments);
      },
      _notify: function (s, args, ef) {
        var ret;
        ret = s.notify(args, this);
        if (false === ret || this.stopped > 1) return false;
        return true;
      },
      log: function (msg, cat) {},
      fire: function () {
        var args = [];
        args.push.apply(args, arguments);
        return this._fire(args);
      },
      _fire: function (args) {
        if (this.fireOnce && this.fired) return true;
        else {
          this.fired = true;
          if (this.fireOnce) this.firedWith = args;
          if (this.emitFacade) return this.fireComplex(args);
          else return this.fireSimple(args);
        }
      },
      fireSimple: function (args) {
        this.stopped = 0;
        this.prevented = 0;
        if (this.hasSubs()) {
          var subs = this.getSubs();
          this._procSubs(subs[0], args);
          this._procSubs(subs[1], args);
        }
        if (this.broadcast) this._broadcast(args);
        return this.stopped ? false : true;
      },
      fireComplex: function (args) {
        args[0] = args[0] || {};
        return this.fireSimple(args);
      },
      _procSubs: function (subs, args, ef) {
        var s, i, l;
        for (i = 0, l = subs.length; i < l; i++) {
          s = subs[i];
          if (s && s.fn) {
            if (false === this._notify(s, args, ef)) this.stopped = 2;
            if (this.stopped === 2) return false;
          }
        }
        return true;
      },
      _broadcast: function (args) {
        if (!this.stopped && this.broadcast) {
          var a = args.concat();
          a.unshift(this.type);
          if (this.host !== Y) Y.fire.apply(Y, a);
          if (this.broadcast === 2) Y.Global.fire.apply(Y.Global, a);
        }
      },
      unsubscribeAll: function () {
        return this.detachAll.apply(this, arguments);
      },
      detachAll: function () {
        return this.detach();
      },
      _delete: function (s, subs, i) {
        var when = s._when;
        if (!subs) subs = when === AFTER ? this._afters : this._subscribers;
        if (subs) {
          i = YArray.indexOf(subs, s, 0);
          if (s && subs[i] === s) subs.splice(i, 1);
        }
        if (this._kds)
          if (when === AFTER) delete this.afters[s.id];
          else delete this.subscribers[s.id];
        if (this.monitored && this.host)
          this.host._monitor("detach", this, { ce: this, sub: s });
        if (s) s.deleted = true;
      },
    };
    Y.Subscriber = function (fn, context, args, when) {
      this.fn = fn;
      this.context = context;
      this.id = Y.guid();
      this.args = args;
      this._when = when;
    };
    Y.Subscriber.prototype = {
      constructor: Y.Subscriber,
      _notify: function (c, args, ce) {
        if (this.deleted && !this.postponed)
          if (this.postponed) {
            delete this.fn;
            delete this.context;
          } else {
            delete this.postponed;
            return null;
          }
        var a = this.args,
          ret;
        switch (ce.signature) {
          case 0:
            ret = this.fn.call(c, ce.type, args, c);
            break;
          case 1:
            ret = this.fn.call(c, args[0] || null, c);
            break;
          default:
            if (a || args) {
              args = args || [];
              a = a ? args.concat(a) : args;
              ret = this.fn.apply(c, a);
            } else ret = this.fn.call(c);
        }
        if (this.once) ce._delete(this);
        return ret;
      },
      notify: function (args, ce) {
        var c = this.context,
          ret = true;
        if (!c) c = ce.contextFn ? ce.contextFn() : ce.context;
        if (Y.config && Y.config.throwFail) ret = this._notify(c, args, ce);
        else
          try {
            ret = this._notify(c, args, ce);
          } catch (e) {
            Y.error(this + " failed: " + e.message, e);
          }
        return ret;
      },
      contains: function (fn, context) {
        if (context) return this.fn === fn && this.context === context;
        else return this.fn === fn;
      },
      valueOf: function () {
        return this.id;
      },
    };
    Y.EventHandle = function (evt, sub) {
      this.evt = evt;
      this.sub = sub;
    };
    Y.EventHandle.prototype = {
      batch: function (f, c) {
        f.call(c || this, this);
        if (Y.Lang.isArray(this.evt))
          Y.Array.each(this.evt, function (h) {
            h.batch.call(c || h, f);
          });
      },
      detach: function () {
        var evt = this.evt,
          detached = 0,
          i;
        if (evt)
          if (Y.Lang.isArray(evt))
            for (i = 0; i < evt.length; i++) detached += evt[i].detach();
          else {
            evt._delete(this.sub);
            detached = 1;
          }
        return detached;
      },
      monitor: function (what) {
        return this.evt.monitor.apply(this.evt, arguments);
      },
    };
    var L = Y.Lang,
      PREFIX_DELIMITER = ":",
      CATEGORY_DELIMITER = "|",
      AFTER_PREFIX = "~AFTER~",
      WILD_TYPE_RE = /(.*?)(:)(.*?)/,
      _wildType = Y.cached(function (type) {
        return type.replace(WILD_TYPE_RE, "*$2$3");
      }),
      _getType = function (type, pre) {
        if (
          !pre ||
          typeof type !== "string" ||
          type.indexOf(PREFIX_DELIMITER) > -1
        )
          return type;
        return pre + PREFIX_DELIMITER + type;
      },
      _parseType = Y.cached(function (type, pre) {
        var t = type,
          detachcategory,
          after,
          i;
        if (!L.isString(t)) return t;
        i = t.indexOf(AFTER_PREFIX);
        if (i > -1) {
          after = true;
          t = t.substr(AFTER_PREFIX.length);
        }
        i = t.indexOf(CATEGORY_DELIMITER);
        if (i > -1) {
          detachcategory = t.substr(0, i);
          t = t.substr(i + 1);
          if (t === "*") t = null;
        }
        return [detachcategory, pre ? _getType(t, pre) : t, after, t];
      }),
      ET = function (opts) {
        var etState = this._yuievt,
          etConfig;
        if (!etState)
          etState = this._yuievt = {
            events: {},
            targets: null,
            config: { host: this, context: this },
            chain: Y.config.chain,
          };
        etConfig = etState.config;
        if (opts) {
          mixConfigs(etConfig, opts, true);
          if (opts.chain !== undefined) etState.chain = opts.chain;
          if (opts.prefix) etConfig.prefix = opts.prefix;
        }
      };
    ET.prototype = {
      constructor: ET,
      once: function () {
        var handle = this.on.apply(this, arguments);
        handle.batch(function (hand) {
          if (hand.sub) hand.sub.once = true;
        });
        return handle;
      },
      onceAfter: function () {
        var handle = this.after.apply(this, arguments);
        handle.batch(function (hand) {
          if (hand.sub) hand.sub.once = true;
        });
        return handle;
      },
      parseType: function (type, pre) {
        return _parseType(type, pre || this._yuievt.config.prefix);
      },
      on: function (type, fn, context) {
        var yuievt = this._yuievt,
          parts = _parseType(type, yuievt.config.prefix),
          f,
          c,
          args,
          ret,
          ce,
          detachcategory,
          handle,
          store = Y.Env.evt.handles,
          after,
          adapt,
          shorttype,
          Node = Y.Node,
          n,
          domevent,
          isArr;
        this._monitor("attach", parts[1], {
          args: arguments,
          category: parts[0],
          after: parts[2],
        });
        if (L.isObject(type)) {
          if (L.isFunction(type)) return Y.Do.before.apply(Y.Do, arguments);
          f = fn;
          c = context;
          args = nativeSlice.call(arguments, 0);
          ret = [];
          if (L.isArray(type)) isArr = true;
          after = type._after;
          delete type._after;
          Y.each(
            type,
            function (v, k) {
              if (L.isObject(v)) {
                f = v.fn || (L.isFunction(v) ? v : f);
                c = v.context || c;
              }
              var nv = after ? AFTER_PREFIX : "";
              args[0] = nv + (isArr ? v : k);
              args[1] = f;
              args[2] = c;
              ret.push(this.on.apply(this, args));
            },
            this
          );
          return yuievt.chain ? this : new Y.EventHandle(ret);
        }
        detachcategory = parts[0];
        after = parts[2];
        shorttype = parts[3];
        if (Node && Y.instanceOf(this, Node) && shorttype in Node.DOM_EVENTS) {
          args = nativeSlice.call(arguments, 0);
          args.splice(2, 0, Node.getDOMNode(this));
          return Y.on.apply(Y, args);
        }
        type = parts[1];
        if (Y.instanceOf(this, YUI)) {
          adapt = Y.Env.evt.plugins[type];
          args = nativeSlice.call(arguments, 0);
          args[0] = shorttype;
          if (Node) {
            n = args[2];
            if (Y.instanceOf(n, Y.NodeList)) n = Y.NodeList.getDOMNodes(n);
            else if (Y.instanceOf(n, Node)) n = Node.getDOMNode(n);
            domevent = shorttype in Node.DOM_EVENTS;
            if (domevent) args[2] = n;
          }
          if (adapt) handle = adapt.on.apply(Y, args);
          else if (!type || domevent) handle = Y.Event._attach(args);
        }
        if (!handle) {
          ce = yuievt.events[type] || this.publish(type);
          handle = ce._on(
            fn,
            context,
            arguments.length > 3 ? nativeSlice.call(arguments, 3) : null,
            after ? "after" : true
          );
          if (type.indexOf("*:") !== -1) this._hasSiblings = true;
        }
        if (detachcategory) {
          store[detachcategory] = store[detachcategory] || {};
          store[detachcategory][type] = store[detachcategory][type] || [];
          store[detachcategory][type].push(handle);
        }
        return yuievt.chain ? this : handle;
      },
      subscribe: function () {
        return this.on.apply(this, arguments);
      },
      detach: function (type, fn, context) {
        var evts = this._yuievt.events,
          i,
          Node = Y.Node,
          isNode = Node && Y.instanceOf(this, Node);
        if (!type && this !== Y) {
          for (i in evts)
            if (evts.hasOwnProperty(i)) evts[i].detach(fn, context);
          if (isNode) Y.Event.purgeElement(Node.getDOMNode(this));
          return this;
        }
        var parts = _parseType(type, this._yuievt.config.prefix),
          detachcategory = L.isArray(parts) ? parts[0] : null,
          shorttype = parts ? parts[3] : null,
          adapt,
          store = Y.Env.evt.handles,
          detachhost,
          cat,
          args,
          ce,
          keyDetacher = function (lcat, ltype, host) {
            var handles = lcat[ltype],
              ce,
              i;
            if (handles)
              for (i = handles.length - 1; i >= 0; --i) {
                ce = handles[i].evt;
                if (ce.host === host || ce.el === host) handles[i].detach();
              }
          };
        if (detachcategory) {
          cat = store[detachcategory];
          type = parts[1];
          detachhost = isNode ? Y.Node.getDOMNode(this) : this;
          if (cat) {
            if (type) keyDetacher(cat, type, detachhost);
            else
              for (i in cat)
                if (cat.hasOwnProperty(i)) keyDetacher(cat, i, detachhost);
            return this;
          }
        } else if (L.isObject(type) && type.detach) {
          type.detach();
          return this;
        } else if (isNode && (!shorttype || shorttype in Node.DOM_EVENTS)) {
          args = nativeSlice.call(arguments, 0);
          args[2] = Node.getDOMNode(this);
          Y.detach.apply(Y, args);
          return this;
        }
        adapt = Y.Env.evt.plugins[shorttype];
        if (Y.instanceOf(this, YUI)) {
          args = nativeSlice.call(arguments, 0);
          if (adapt && adapt.detach) {
            adapt.detach.apply(Y, args);
            return this;
          } else if (!type || (!adapt && Node && type in Node.DOM_EVENTS)) {
            args[0] = type;
            Y.Event.detach.apply(Y.Event, args);
            return this;
          }
        }
        ce = evts[parts[1]];
        if (ce) ce.detach(fn, context);
        return this;
      },
      unsubscribe: function () {
        return this.detach.apply(this, arguments);
      },
      detachAll: function (type) {
        return this.detach(type);
      },
      unsubscribeAll: function () {
        return this.detachAll.apply(this, arguments);
      },
      publish: function (type, opts) {
        var ret,
          etState = this._yuievt,
          etConfig = etState.config,
          pre = etConfig.prefix;
        if (typeof type === "string") {
          if (pre) type = _getType(type, pre);
          ret = this._publish(type, etConfig, opts);
        } else {
          ret = {};
          Y.each(
            type,
            function (v, k) {
              if (pre) k = _getType(k, pre);
              ret[k] = this._publish(k, etConfig, v || opts);
            },
            this
          );
        }
        return ret;
      },
      _getFullType: function (type) {
        var pre = this._yuievt.config.prefix;
        if (pre) return pre + PREFIX_DELIMITER + type;
        else return type;
      },
      _publish: function (fullType, etOpts, ceOpts) {
        var ce,
          etState = this._yuievt,
          etConfig = etState.config,
          host = etConfig.host,
          context = etConfig.context,
          events = etState.events;
        ce = events[fullType];
        if ((etConfig.monitored && !ce) || (ce && ce.monitored))
          this._monitor("publish", fullType, { args: arguments });
        if (!ce) {
          ce = events[fullType] = new Y.CustomEvent(fullType, etOpts);
          if (!etOpts) {
            ce.host = host;
            ce.context = context;
          }
        }
        if (ceOpts) mixConfigs(ce, ceOpts, true);
        return ce;
      },
      _monitor: function (what, eventType, o) {
        var monitorevt, ce, type;
        if (eventType) {
          if (typeof eventType === "string") {
            type = eventType;
            ce = this.getEvent(eventType, true);
          } else {
            ce = eventType;
            type = eventType.type;
          }
          if (
            (this._yuievt.config.monitored && (!ce || ce.monitored)) ||
            (ce && ce.monitored)
          ) {
            monitorevt = type + "_" + what;
            o.monitored = what;
            this.fire.call(this, monitorevt, o);
          }
        }
      },
      fire: function (type) {
        var typeIncluded = typeof type === "string",
          argCount = arguments.length,
          t = type,
          yuievt = this._yuievt,
          etConfig = yuievt.config,
          pre = etConfig.prefix,
          ret,
          ce,
          ce2,
          args;
        if (typeIncluded && argCount <= 3)
          if (argCount === 2) args = [arguments[1]];
          else if (argCount === 3) args = [arguments[1], arguments[2]];
          else args = [];
        else args = nativeSlice.call(arguments, typeIncluded ? 1 : 0);
        if (!typeIncluded) t = type && type.type;
        if (pre) t = _getType(t, pre);
        ce = yuievt.events[t];
        if (this._hasSiblings) {
          ce2 = this.getSibling(t, ce);
          if (ce2 && !ce) ce = this.publish(t);
        }
        if (
          (etConfig.monitored && (!ce || ce.monitored)) ||
          (ce && ce.monitored)
        )
          this._monitor("fire", ce || t, { args: args });
        if (!ce) {
          if (yuievt.hasTargets) return this.bubble({ type: t }, args, this);
          ret = true;
        } else {
          if (ce2) ce.sibling = ce2;
          ret = ce._fire(args);
        }
        return yuievt.chain ? this : ret;
      },
      getSibling: function (type, ce) {
        var ce2;
        if (type.indexOf(PREFIX_DELIMITER) > -1) {
          type = _wildType(type);
          ce2 = this.getEvent(type, true);
          if (ce2) {
            ce2.applyConfig(ce);
            ce2.bubbles = false;
            ce2.broadcast = 0;
          }
        }
        return ce2;
      },
      getEvent: function (type, prefixed) {
        var pre, e;
        if (!prefixed) {
          pre = this._yuievt.config.prefix;
          type = pre ? _getType(type, pre) : type;
        }
        e = this._yuievt.events;
        return e[type] || null;
      },
      after: function (type, fn) {
        var a = nativeSlice.call(arguments, 0);
        switch (L.type(type)) {
          case "function":
            return Y.Do.after.apply(Y.Do, arguments);
          case "array":
          case "object":
            a[0]._after = true;
            break;
          default:
            a[0] = AFTER_PREFIX + type;
        }
        return this.on.apply(this, a);
      },
      before: function () {
        return this.on.apply(this, arguments);
      },
    };
    Y.EventTarget = ET;
    Y.mix(Y, ET.prototype);
    ET.call(Y, { bubbles: false });
    YUI.Env.globalEvents = YUI.Env.globalEvents || new ET();
    Y.Global = YUI.Env.globalEvents;
  },
  "patched-v3.18.1",
  { requires: ["oop"] }
);
YUI.add(
  "event-custom-complex",
  function (Y, NAME) {
    var FACADE,
      FACADE_KEYS,
      YObject = Y.Object,
      key,
      EMPTY = {},
      CEProto = Y.CustomEvent.prototype,
      ETProto = Y.EventTarget.prototype,
      mixFacadeProps = function (facade, payload) {
        var p;
        for (p in payload)
          if (!FACADE_KEYS.hasOwnProperty(p)) facade[p] = payload[p];
      };
    Y.EventFacade = function (e, currentTarget) {
      if (!e) e = EMPTY;
      this._event = e;
      this.details = e.details;
      this.type = e.type;
      this._type = e.type;
      this.target = e.target;
      this.currentTarget = currentTarget;
      this.relatedTarget = e.relatedTarget;
    };
    Y.mix(Y.EventFacade.prototype, {
      stopPropagation: function () {
        this._event.stopPropagation();
        this.stopped = 1;
      },
      stopImmediatePropagation: function () {
        this._event.stopImmediatePropagation();
        this.stopped = 2;
      },
      preventDefault: function () {
        this._event.preventDefault();
        this.prevented = 1;
      },
      halt: function (immediate) {
        this._event.halt(immediate);
        this.prevented = 1;
        this.stopped = immediate ? 2 : 1;
      },
    });
    CEProto.fireComplex = function (args) {
      var es,
        ef,
        q,
        queue,
        ce,
        ret = true,
        events,
        subs,
        ons,
        afters,
        afterQueue,
        postponed,
        prevented,
        preventedFn,
        defaultFn,
        self = this,
        host = self.host || self,
        next,
        oldbubble,
        stack = self.stack,
        yuievt = host._yuievt,
        hasPotentialSubscribers;
      if (stack)
        if (self.queuable && self.type !== stack.next.type) {
          if (!stack.queue) stack.queue = [];
          stack.queue.push([self, args]);
          return true;
        }
      hasPotentialSubscribers =
        self.hasSubs() || yuievt.hasTargets || self.broadcast;
      self.target = self.target || host;
      self.currentTarget = host;
      self.details = args.concat();
      if (hasPotentialSubscribers) {
        es = stack || {
          id: self.id,
          next: self,
          silent: self.silent,
          stopped: 0,
          prevented: 0,
          bubbling: null,
          type: self.type,
          defaultTargetOnly: self.defaultTargetOnly,
        };
        subs = self.getSubs();
        ons = subs[0];
        afters = subs[1];
        self.stopped = self.type !== es.type ? 0 : es.stopped;
        self.prevented = self.type !== es.type ? 0 : es.prevented;
        if (self.stoppedFn) {
          events = new Y.EventTarget({ fireOnce: true, context: host });
          self.events = events;
          events.on("stopped", self.stoppedFn);
        }
        self._facade = null;
        ef = self._createFacade(args);
        if (ons) self._procSubs(ons, args, ef);
        if (self.bubbles && host.bubble && !self.stopped) {
          oldbubble = es.bubbling;
          es.bubbling = self.type;
          if (es.type !== self.type) {
            es.stopped = 0;
            es.prevented = 0;
          }
          ret = host.bubble(self, args, null, es);
          self.stopped = Math.max(self.stopped, es.stopped);
          self.prevented = Math.max(self.prevented, es.prevented);
          es.bubbling = oldbubble;
        }
        prevented = self.prevented;
        if (prevented) {
          preventedFn = self.preventedFn;
          if (preventedFn) preventedFn.apply(host, args);
        } else {
          defaultFn = self.defaultFn;
          if (
            defaultFn &&
            ((!self.defaultTargetOnly && !es.defaultTargetOnly) ||
              host === ef.target)
          )
            defaultFn.apply(host, args);
        }
        if (self.broadcast) self._broadcast(args);
        if (afters && !self.prevented && self.stopped < 2) {
          afterQueue = es.afterQueue;
          if (es.id === self.id || self.type !== yuievt.bubbling) {
            self._procSubs(afters, args, ef);
            if (afterQueue) while ((next = afterQueue.last())) next();
          } else {
            postponed = afters;
            if (es.execDefaultCnt) {
              postponed = Y.merge(postponed);
              Y.each(postponed, function (s) {
                s.postponed = true;
              });
            }
            if (!afterQueue) es.afterQueue = new Y.Queue();
            es.afterQueue.add(function () {
              self._procSubs(postponed, args, ef);
            });
          }
        }
        self.target = null;
        if (es.id === self.id) {
          queue = es.queue;
          if (queue)
            while (queue.length) {
              q = queue.pop();
              ce = q[0];
              es.next = ce;
              ce._fire(q[1]);
            }
          self.stack = null;
        }
        ret = !self.stopped;
        if (self.type !== yuievt.bubbling) {
          es.stopped = 0;
          es.prevented = 0;
          self.stopped = 0;
          self.prevented = 0;
        }
      } else {
        defaultFn = self.defaultFn;
        if (defaultFn) {
          ef = self._createFacade(args);
          if (!self.defaultTargetOnly || host === ef.target)
            defaultFn.apply(host, args);
        }
      }
      self._facade = null;
      return ret;
    };
    CEProto._hasPotentialSubscribers = function () {
      return this.hasSubs() || this.host._yuievt.hasTargets || this.broadcast;
    };
    CEProto._createFacade = CEProto._getFacade = function (fireArgs) {
      var userArgs = this.details,
        firstArg = userArgs && userArgs[0],
        firstArgIsObj = firstArg && typeof firstArg === "object",
        ef = this._facade;
      if (!ef) ef = new Y.EventFacade(this, this.currentTarget);
      if (firstArgIsObj) {
        mixFacadeProps(ef, firstArg);
        if (firstArg.type) ef.type = firstArg.type;
        if (fireArgs) fireArgs[0] = ef;
      } else if (fireArgs) fireArgs.unshift(ef);
      ef.details = this.details;
      ef.target = this.originalTarget || this.target;
      ef.currentTarget = this.currentTarget;
      ef.stopped = 0;
      ef.prevented = 0;
      this._facade = ef;
      return this._facade;
    };
    CEProto._addFacadeToArgs = function (args) {
      var e = args[0];
      if (
        !(
          e &&
          e.halt &&
          e.stopImmediatePropagation &&
          e.stopPropagation &&
          e._event
        )
      )
        this._createFacade(args);
    };
    CEProto.stopPropagation = function () {
      this.stopped = 1;
      if (this.stack) this.stack.stopped = 1;
      if (this.events) this.events.fire("stopped", this);
    };
    CEProto.stopImmediatePropagation = function () {
      this.stopped = 2;
      if (this.stack) this.stack.stopped = 2;
      if (this.events) this.events.fire("stopped", this);
    };
    CEProto.preventDefault = function () {
      if (this.preventable) {
        this.prevented = 1;
        if (this.stack) this.stack.prevented = 1;
      }
    };
    CEProto.halt = function (immediate) {
      if (immediate) this.stopImmediatePropagation();
      else this.stopPropagation();
      this.preventDefault();
    };
    ETProto.addTarget = function (o) {
      var etState = this._yuievt;
      if (!etState.targets) etState.targets = {};
      etState.targets[Y.stamp(o)] = o;
      etState.hasTargets = true;
      return this;
    };
    ETProto.getTargets = function () {
      var targets = this._yuievt.targets;
      return targets ? YObject.values(targets) : [];
    };
    ETProto.removeTarget = function (o) {
      var targets = this._yuievt.targets;
      if (targets) {
        delete targets[Y.stamp(o, true)];
        if (YObject.size(targets) === 0) this._yuievt.hasTargets = false;
      }
      return this;
    };
    ETProto.bubble = function (evt, args, target, es) {
      var targs = this._yuievt.targets,
        ret = true,
        t,
        ce,
        i,
        bc,
        ce2,
        type = evt && evt.type,
        originalTarget = target || (evt && evt.target) || this,
        oldbubble;
      if (!evt || (!evt.stopped && targs))
        for (i in targs)
          if (targs.hasOwnProperty(i)) {
            t = targs[i];
            ce = t._yuievt.events[type];
            if (t._hasSiblings) ce2 = t.getSibling(type, ce);
            if (ce2 && !ce) ce = t.publish(type);
            oldbubble = t._yuievt.bubbling;
            t._yuievt.bubbling = type;
            if (!ce) {
              if (t._yuievt.hasTargets) t.bubble(evt, args, originalTarget, es);
            } else {
              if (ce2) ce.sibling = ce2;
              ce.target = originalTarget;
              ce.originalTarget = originalTarget;
              ce.currentTarget = t;
              bc = ce.broadcast;
              ce.broadcast = false;
              ce.emitFacade = true;
              ce.stack = es;
              ret = ret && ce.fire.apply(ce, args || evt.details || []);
              ce.broadcast = bc;
              ce.originalTarget = null;
              if (ce.stopped) break;
            }
            t._yuievt.bubbling = oldbubble;
          }
      return ret;
    };
    ETProto._hasPotentialSubscribers = function (fullType) {
      var etState = this._yuievt,
        e = etState.events[fullType];
      if (e) return e.hasSubs() || etState.hasTargets || e.broadcast;
      else return false;
    };
    FACADE = new Y.EventFacade();
    FACADE_KEYS = {};
    for (key in FACADE) FACADE_KEYS[key] = true;
  },
  "patched-v3.18.1",
  { requires: ["event-custom-base"] }
);
YUI.add(
  "event-delegate",
  function (Y, NAME) {
    var toArray = Y.Array,
      YLang = Y.Lang,
      isString = YLang.isString,
      isObject = YLang.isObject,
      isArray = YLang.isArray,
      selectorTest = Y.Selector.test,
      detachCategories = Y.Env.evt.handles;
    function delegate(type, fn, el, filter) {
      var args = toArray(arguments, 0, true),
        query = isString(el) ? el : null,
        typeBits,
        synth,
        container,
        categories,
        cat,
        i,
        len,
        handles,
        handle;
      if (isObject(type)) {
        handles = [];
        if (isArray(type))
          for (i = 0, len = type.length; i < len; ++i) {
            args[0] = type[i];
            handles.push(Y.delegate.apply(Y, args));
          }
        else {
          args.unshift(null);
          for (i in type)
            if (type.hasOwnProperty(i)) {
              args[0] = i;
              args[1] = type[i];
              handles.push(Y.delegate.apply(Y, args));
            }
        }
        return new Y.EventHandle(handles);
      }
      typeBits = type.split(/\|/);
      if (typeBits.length > 1) {
        cat = typeBits.shift();
        args[0] = type = typeBits.shift();
      }
      synth = Y.Node.DOM_EVENTS[type];
      if (isObject(synth) && synth.delegate)
        handle = synth.delegate.apply(synth, arguments);
      if (!handle) {
        if (!type || !fn || !el || !filter) return;
        container = query ? Y.Selector.query(query, null, true) : el;
        if (!container && isString(el))
          handle = Y.on(
            "available",
            function () {
              Y.mix(handle, Y.delegate.apply(Y, args), true);
            },
            el
          );
        if (!handle && container) {
          args.splice(2, 2, container);
          handle = Y.Event._attach(args, { facade: false });
          handle.sub.filter = filter;
          handle.sub._notify = delegate.notifySub;
        }
      }
      if (handle && cat) {
        categories = detachCategories[cat] || (detachCategories[cat] = {});
        categories = categories[type] || (categories[type] = []);
        categories.push(handle);
      }
      return handle;
    }
    delegate.notifySub = function (thisObj, args, ce) {
      args = args.slice();
      if (this.args) args.push.apply(args, this.args);
      var currentTarget = delegate._applyFilter(this.filter, args, ce),
        e,
        i,
        len,
        ret;
      if (currentTarget) {
        currentTarget = toArray(currentTarget);
        e = args[0] = new Y.DOMEventFacade(args[0], ce.el, ce);
        e.container = Y.one(ce.el);
        for (i = 0, len = currentTarget.length; i < len && !e.stopped; ++i) {
          e.currentTarget = Y.one(currentTarget[i]);
          ret = this.fn.apply(this.context || e.currentTarget, args);
          if (ret === false) break;
        }
        return ret;
      }
    };
    delegate.compileFilter = Y.cached(function (selector) {
      return function (target, e) {
        return selectorTest(
          target._node,
          selector,
          e.currentTarget === e.target ? null : e.currentTarget._node
        );
      };
    });
    delegate._disabledRE = /^(?:button|input|select|textarea)$/i;
    delegate._applyFilter = function (filter, args, ce) {
      var e = args[0],
        container = ce.el,
        target = e.target || e.srcElement,
        match = [],
        isContainer = false;
      if (target.nodeType === 3) target = target.parentNode;
      if (target.disabled && delegate._disabledRE.test(target.nodeName))
        return match;
      args.unshift(target);
      if (isString(filter))
        while (target) {
          isContainer = target === container;
          if (selectorTest(target, filter, isContainer ? null : container))
            match.push(target);
          if (isContainer) break;
          target = target.parentNode;
        }
      else {
        args[0] = Y.one(target);
        args[1] = new Y.DOMEventFacade(e, container, ce);
        while (target) {
          if (filter.apply(args[0], args)) match.push(target);
          if (target === container) break;
          target = target.parentNode;
          args[0] = Y.one(target);
        }
        args[1] = e;
      }
      if (match.length <= 1) match = match[0];
      args.shift();
      return match;
    };
    Y.delegate = Y.Event.delegate = delegate;
  },
  "patched-v3.18.1",
  { requires: ["node-base"] }
);
YUI.add(
  "event-focus",
  function (Y, NAME) {
    var Event = Y.Event,
      YLang = Y.Lang,
      isString = YLang.isString,
      arrayIndex = Y.Array.indexOf,
      useActivate = (function () {
        var supported = false,
          doc = Y.config.doc,
          p;
        if (doc) {
          p = doc.createElement("p");
          p.setAttribute("onbeforeactivate", ";");
          supported = p.onbeforeactivate !== undefined;
        }
        return supported;
      })();
    function define(type, proxy, directEvent) {
      var nodeDataKey = "_" + type + "Notifiers";
      Y.Event.define(
        type,
        {
          _useActivate: useActivate,
          _attach: function (el, notifier, delegate) {
            if (Y.DOM.isWindow(el))
              return Event._attach([
                type,
                function (e) {
                  notifier.fire(e);
                },
                el,
              ]);
            else
              return Event._attach(
                [proxy, this._proxy, el, this, notifier, delegate],
                { capture: true }
              );
          },
          _proxy: function (e, notifier, delegate) {
            var target = e.target,
              currentTarget = e.currentTarget,
              notifiers = target.getData(nodeDataKey),
              yuid = Y.stamp(currentTarget._node),
              defer = useActivate || target !== currentTarget,
              directSub;
            notifier.currentTarget = delegate ? target : currentTarget;
            notifier.container = delegate ? currentTarget : null;
            if (!notifiers) {
              notifiers = {};
              target.setData(nodeDataKey, notifiers);
              if (defer) {
                directSub = Event._attach([
                  directEvent,
                  this._notify,
                  target._node,
                ]).sub;
                directSub.once = true;
              }
            } else defer = true;
            if (!notifiers[yuid]) notifiers[yuid] = [];
            notifiers[yuid].push(notifier);
            if (!defer) this._notify(e);
          },
          _notify: function (e, container) {
            var currentTarget = e.currentTarget,
              notifierData = currentTarget.getData(nodeDataKey),
              axisNodes = currentTarget.ancestors(),
              doc = currentTarget.get("ownerDocument"),
              delegates = [],
              count = notifierData ? Y.Object.keys(notifierData).length : 0,
              target,
              notifiers,
              notifier,
              yuid,
              match,
              tmp,
              i,
              len,
              sub,
              ret;
            currentTarget.clearData(nodeDataKey);
            axisNodes.push(currentTarget);
            if (doc) axisNodes.unshift(doc);
            axisNodes._nodes.reverse();
            if (count) {
              tmp = count;
              axisNodes.some(function (node) {
                var yuid = Y.stamp(node),
                  notifiers = notifierData[yuid],
                  i,
                  len;
                if (notifiers) {
                  count--;
                  for (i = 0, len = notifiers.length; i < len; ++i)
                    if (notifiers[i].handle.sub.filter)
                      delegates.push(notifiers[i]);
                }
                return !count;
              });
              count = tmp;
            }
            while (count && (target = axisNodes.shift())) {
              yuid = Y.stamp(target);
              notifiers = notifierData[yuid];
              if (notifiers) {
                for (i = 0, len = notifiers.length; i < len; ++i) {
                  notifier = notifiers[i];
                  sub = notifier.handle.sub;
                  match = true;
                  e.currentTarget = target;
                  if (sub.filter) {
                    match = sub.filter.apply(
                      target,
                      [target, e].concat(sub.args || [])
                    );
                    delegates.splice(arrayIndex(delegates, notifier), 1);
                  }
                  if (match) {
                    e.container = notifier.container;
                    ret = notifier.fire(e);
                  }
                  if (ret === false || e.stopped === 2) break;
                }
                delete notifiers[yuid];
                count--;
              }
              if (e.stopped !== 2)
                for (i = 0, len = delegates.length; i < len; ++i) {
                  notifier = delegates[i];
                  sub = notifier.handle.sub;
                  if (
                    sub.filter.apply(target, [target, e].concat(sub.args || []))
                  ) {
                    e.container = notifier.container;
                    e.currentTarget = target;
                    ret = notifier.fire(e);
                  }
                  if (
                    ret === false ||
                    e.stopped === 2 ||
                    (e.stopped &&
                      delegates[i + 1] &&
                      delegates[i + 1].container !== notifier.container)
                  )
                    break;
                }
              if (e.stopped) break;
            }
          },
          on: function (node, sub, notifier) {
            sub.handle = this._attach(node._node, notifier);
          },
          detach: function (node, sub) {
            sub.handle.detach();
          },
          delegate: function (node, sub, notifier, filter) {
            if (isString(filter))
              sub.filter = function (target) {
                return Y.Selector.test(
                  target._node,
                  filter,
                  node === target ? null : node._node
                );
              };
            sub.handle = this._attach(node._node, notifier, true);
          },
          detachDelegate: function (node, sub) {
            sub.handle.detach();
          },
        },
        true
      );
    }
    if (useActivate) {
      define("focus", "beforeactivate", "focusin");
      define("blur", "beforedeactivate", "focusout");
    } else {
      define("focus", "focus", "focus");
      define("blur", "blur", "blur");
    }
  },
  "patched-v3.18.1",
  { requires: ["event-synthetic"] }
);
YUI.add(
  "event-hover",
  function (Y, NAME) {
    var isFunction = Y.Lang.isFunction,
      noop = function () {},
      conf = {
        processArgs: function (args) {
          var i = isFunction(args[2]) ? 2 : 3;
          return isFunction(args[i]) ? args.splice(i, 1)[0] : noop;
        },
        on: function (node, sub, notifier, filter) {
          var args = sub.args ? sub.args.slice() : [];
          args.unshift(null);
          sub._detach = node[filter ? "delegate" : "on"](
            {
              mouseenter: function (e) {
                e.phase = "over";
                notifier.fire(e);
              },
              mouseleave: function (e) {
                var thisObj = sub.context || this;
                args[0] = e;
                e.type = "hover";
                e.phase = "out";
                sub._extra.apply(thisObj, args);
              },
            },
            filter
          );
        },
        detach: function (node, sub, notifier) {
          sub._detach.detach();
        },
      };
    conf.delegate = conf.on;
    conf.detachDelegate = conf.detach;
    Y.Event.define("hover", conf);
  },
  "patched-v3.18.1",
  { requires: ["event-mouseenter"] }
);
YUI.add(
  "event-key",
  function (Y, NAME) {
    var ALT = "+alt",
      CTRL = "+ctrl",
      META = "+meta",
      SHIFT = "+shift",
      trim = Y.Lang.trim,
      eventDef = {
        KEY_MAP: {
          enter: 13,
          space: 32,
          esc: 27,
          backspace: 8,
          tab: 9,
          pageup: 33,
          pagedown: 34,
        },
        _typeRE: /^(up|down|press):/,
        _keysRE: /^(?:up|down|press):|\+(alt|ctrl|meta|shift)/g,
        processArgs: function (args) {
          var spec = args.splice(3, 1)[0],
            mods = Y.Array.hash(
              spec.match(/\+(?:alt|ctrl|meta|shift)\b/g) || []
            ),
            config = {
              type: this._typeRE.test(spec) ? RegExp.$1 : null,
              mods: mods,
              keys: null,
            },
            bits = spec.replace(this._keysRE, ""),
            chr,
            uc,
            lc,
            i;
          if (bits) {
            bits = bits.split(",");
            config.keys = {};
            for (i = bits.length - 1; i >= 0; --i) {
              chr = trim(bits[i]);
              if (!chr) continue;
              if (+chr == chr) config.keys[chr] = mods;
              else {
                lc = chr.toLowerCase();
                if (this.KEY_MAP[lc]) {
                  config.keys[this.KEY_MAP[lc]] = mods;
                  if (!config.type) config.type = "down";
                } else {
                  chr = chr.charAt(0);
                  uc = chr.toUpperCase();
                  if (mods["+shift"]) chr = uc;
                  config.keys[chr.charCodeAt(0)] =
                    chr === uc ? Y.merge(mods, { "+shift": true }) : mods;
                }
              }
            }
          }
          if (!config.type) config.type = "press";
          return config;
        },
        on: function (node, sub, notifier, filter) {
          var spec = sub._extra,
            type = "key" + spec.type,
            keys = spec.keys,
            method = filter ? "delegate" : "on";
          sub._detach = node[method](
            type,
            function (e) {
              var key = keys ? keys[e.which] : spec.mods;
              if (
                key &&
                (!key[ALT] || (key[ALT] && e.altKey)) &&
                (!key[CTRL] || (key[CTRL] && e.ctrlKey)) &&
                (!key[META] || (key[META] && e.metaKey)) &&
                (!key[SHIFT] || (key[SHIFT] && e.shiftKey))
              )
                notifier.fire(e);
            },
            filter
          );
        },
        detach: function (node, sub, notifier) {
          sub._detach.detach();
        },
      };
    eventDef.delegate = eventDef.on;
    eventDef.detachDelegate = eventDef.detach;
    Y.Event.define("key", eventDef, true);
  },
  "patched-v3.18.1",
  { requires: ["event-synthetic"] }
);
YUI.add(
  "event-mouseenter",
  function (Y, NAME) {
    var domEventProxies = Y.Env.evt.dom_wrappers,
      contains = Y.DOM.contains,
      toArray = Y.Array,
      noop = function () {},
      config = {
        proxyType: "mouseover",
        relProperty: "fromElement",
        _notify: function (e, property, notifier) {
          var el = this._node,
            related = e.relatedTarget || e[property];
          if (el !== related && !contains(el, related))
            notifier.fire(
              new Y.DOMEventFacade(
                e,
                el,
                domEventProxies["event:" + Y.stamp(el) + e.type]
              )
            );
        },
        on: function (node, sub, notifier) {
          var el = Y.Node.getDOMNode(node),
            args = [
              this.proxyType,
              this._notify,
              el,
              null,
              this.relProperty,
              notifier,
            ];
          sub.handle = Y.Event._attach(args, { facade: false });
        },
        detach: function (node, sub) {
          sub.handle.detach();
        },
        delegate: function (node, sub, notifier, filter) {
          var el = Y.Node.getDOMNode(node),
            args = [this.proxyType, noop, el, null, notifier];
          sub.handle = Y.Event._attach(args, { facade: false });
          sub.handle.sub.filter = filter;
          sub.handle.sub.relProperty = this.relProperty;
          sub.handle.sub._notify = this._filterNotify;
        },
        _filterNotify: function (thisObj, args, ce) {
          args = args.slice();
          if (this.args) args.push.apply(args, this.args);
          var currentTarget = Y.delegate._applyFilter(this.filter, args, ce),
            related = args[0].relatedTarget || args[0][this.relProperty],
            e,
            i,
            len,
            ret,
            ct;
          if (currentTarget) {
            currentTarget = toArray(currentTarget);
            for (
              i = 0, len = currentTarget.length && (!e || !e.stopped);
              i < len;
              ++i
            ) {
              ct = currentTarget[0];
              if (!contains(ct, related)) {
                if (!e) {
                  e = new Y.DOMEventFacade(args[0], ct, ce);
                  e.container = Y.one(ce.el);
                }
                e.currentTarget = Y.one(ct);
                ret = args[1].fire(e);
                if (ret === false) break;
              }
            }
          }
          return ret;
        },
        detachDelegate: function (node, sub) {
          sub.handle.detach();
        },
      };
    Y.Event.define("mouseenter", config, true);
    Y.Event.define(
      "mouseleave",
      Y.merge(config, { proxyType: "mouseout", relProperty: "toElement" }),
      true
    );
  },
  "patched-v3.18.1",
  { requires: ["event-synthetic"] }
);
YUI.add(
  "event-mousewheel",
  function (Y, NAME) {
    var DOM_MOUSE_SCROLL = "DOMMouseScroll",
      fixArgs = function (args) {
        var a = Y.Array(args, 0, true),
          target;
        if (Y.UA.gecko) {
          a[0] = DOM_MOUSE_SCROLL;
          target = Y.config.win;
        } else target = Y.config.doc;
        if (a.length < 3) a[2] = target;
        else a.splice(2, 0, target);
        return a;
      };
    Y.Env.evt.plugins.mousewheel = {
      on: function () {
        return Y.Event._attach(fixArgs(arguments));
      },
      detach: function () {
        return Y.Event.detach.apply(Y.Event, fixArgs(arguments));
      },
    };
  },
  "patched-v3.18.1",
  { requires: ["node-base"] }
);

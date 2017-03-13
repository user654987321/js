/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = { };

/******/    // The require function
            /******/
function __webpack_require__(moduleId)
{

    /******/        // Check if module is in cache
                    /******/
    if (installedModules[moduleId])
        /******/
        return installedModules[moduleId].exports;

    /******/        // Create a new module (and put it into the cache)
                    /******/
    var module = installedModules[moduleId] = {
        /******/
        exports: { },
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

    /******/        // Execute the module function
                    /******/
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

    /******/        // Flag the module as loaded
                    /******/
    module.loaded = true;

    /******/        // Return the exports of the module
                    /******/
    return module.exports;
    /******/
}


/******/    // expose the modules object (__webpack_modules__)
            /******/
__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  .  · · *  +      ✦  .        ˚       . 　 　 *  .   *     　　　·  　　        *   ✧        .             ˚ *
	 * .    + ˚     *           888                                      .d8888b.                  ✵   ⋆       .  ✵
	 *   .   °                  888                                     d88P  Y88b                         .    ✹  ✧
	 * *       *                888                                     888    888                               ˚   .
	 *  +   *        . 88888b.  888 888  888  .d88b.           88888b.  888    888 88888b.   .d88b.     ⋆ *         ⋆
	 *  ˚  .     *     888 "88b 888 888  888 d88P"88b          888 "88b 888    888 888 "88b d8P  Y8b    ·  ✦ .   ˚  ·
	 *    *    *       888  888 888 888  888 888  888          888  888 888    888 888  888 88888888  .✵  　　  + ˚   　
	 * *    + ˚        888 d88P 888 Y88b 888 Y88b 888          888 d88P Y88b  d88P 888  888 Y8b.        *  　 　    .  ·
	 *   .   °         88888P"  888  "Y88888  "Y88888 88888888 88888P"   "Y8888P"  888  888  "Y8888    　  　 ⋆   .
	 *    ⋆  *  .  .   888                        888          888                                        . 　  　  ✵  · 　
	 *  ˚  .     *     888                   Y8b d88P          888          ✵                           ˚ ·  ✹ . *   +
	 * *       *       888                    "Y88P"           888                                          ˚   .
	 *  .  · ✫ *  +             .                                                  ✦  ⋆           ✵         ..  　 ✵
	 *    *    *       '     °             '            ✵  ⊹     .  · *    ✵            · ✷  *         ⋆  ✹  ✧  ˚
	 *
	 * plug_p0ne - a modern script collection to improve plug.dj
	 * adds a variety of new functions, bugfixes, tweaks and developer tools/functions
	 *
	 * @author jtbrinkmann aka. Brinkie Pie
	 * @license MIT License
	 * @copyright (c) 2014-2016 J.-T. Brinkmann
	 *
	 * further credits go to
	 *     all the beta testers! <3
	 *     the plugCubed Team - for coining a standard for the "Custom Room Settings"
	 *     xBytez and reanna for making great suggestions for plug and helping me fix some issues
	 *     plug.dj - for it's horribly broken implementation of everything.
	 *               "If it wasn't THAT broken, I wouldn't have had as much fun in coding plug_p0ne"
	 *                   --Brinkie Pie (2015)
	 *
	 * The following 3rd party scripts are used:
	 *     - pieroxy's      lz-string    https://github.com/pieroxy/lz-string (DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE)
	 *     - Mozilla's      localforage  https://github.com/mozilla/localforage (Apache License v2.0)
	 *
	 * The following are not used by plug_p0ne, but provided for usage in the console, for easier debugging
	 *     - Oliver Steele's lambda.js https://github.com/fschaefer/Lambda.js (MIT License)
	 *     - SteamDev's      zClip     http://steamdev.com/zclip/ (MIT license)
	 *         - using Marcus Handa & Isaac Durazo's ZeroClipboard http://zeroclipboard.org/ (MIT License)
	 *
	 * Not happy with plug_p0ne? contact me (the developer) at brinkiepie@gmail.com
	 * great alternative plug.dj scripts are
	 *     - ExtPlug   (best alternative I can recommend! - https://extplug.github.io/ )
	 *     - RCS       (full of features, but super bloated (causes lags) - https://radiant.dj/rcs )
	 *     - plugCubed (good and well known plug.dj scripts, but lacking the ✨👌 that RCS, ExtPlug and p0 provide - https://plugcubed.net/ )
	 *     - TastyPlug (relatively lightweight but good for basic functionality - https://fungustime.pw/tastyplug/ )
	 *     - plugplug  (as lightweight as you can possibly get - https://bitbucket.org/mateon1/plugplug/ )
	 */
	var p0ne_, p0ne, ref$;
console.info("~~~~~~~~~~~~ plug_p0ne loading ~~~~~~~~~~~~");
	p0ne_ = window.p0ne;
	window.p0ne = p0ne = __webpack_require__(11);
	if (p0ne_) {
	  p0ne.modules = p0ne_.modules;
	}
	console.info("plug_p0ne v" + p0ne.version);
	window.Intercom || (window.Intercom = function() { });
	window.amplitude || (window.amplitude = {});
	(ref$ = window.amplitude).__VERSION__ || (ref$.__VERSION__ = -1);
	window.localforage = __webpack_require__(29);
module.exports = new Promise(function(resolve, reject){
    function check()
    {
        if (window.API && window.room)
        {
            return resolve();
        }
        else
        {
            return setTimeout(check, 500);
        }
    }
    check();
}).then(function(){
    return new Promise(function(resolve, reject){
        var compareVersions, v;
    p0ne.compareVersions = compareVersions = function(a, b){
        /* returns whether `a` is greater-or-equal to `b`; e.g. "1.2.0" is greater than "1.1.4" */
        var i$, len$, i;
        a = a.split('.');
        b = b.split('.');
        for (i$ = 0, len$ = a.length; i$ < len$; ++i$) {
            i = i$;
            if (a[i] !== b[i])
            {
                return !b[i] || +a[i] > +b[i];
            }
        }
        return !+b[i + 1];
    };
    if (!(v = localStorage.p0neVersion) || v === p0ne.version || compareVersions(v, p0ne.lastCompatibleVersion))
    {
        resolve();
    }
    else
    {
        if (p0ne_ != null && p0ne_.migrating)
        {
            p0ne_.migrating.stop();
        }
        console.warn("[p0ne init] obsolete p0ne version detected (" + v + " < " + p0ne.lastCompatibleVersion + "), loading migration script…");
        API.once('p0ne_migrated', function(){
            console.trace();
            resolve();
        });
	      /* the `from` and `to` parameters are used for analytics */
	      $.getScript(p0ne.host + "/scripts/plug_p0ne.migrate." + v.split('.')[0] + ".js?from=" + v + "&to=" + p0ne.version).fail(migrationFail);
    }
    function migrationFail()
    {
        console.warn("[p0ne init] migration failed");
        return localforage.keys(function(err, keys){
            var remaining, bck, hasKeys, i$, len$;
            if (err)
            {
                return migrationError(err);
            }
            remaining = 0;
            bck = { };
            hasKeys = false;
            for (i$ = 0, len$ = keys.length; i$ < len$; ++i$) {
        if (keys[i$].startsWith('p0ne_'))
        {
            (fn$.call(this, keys[i$]));
        }
    }
    if (hasKeys)
    {
        checkIfDone();
    }
    else
    {
        migrationFinish();
    }
    function checkIfDone()
    {
        var d;
        if (remaining === 0)
        {
            d = new Date();
            return localforage.setItem("_p0ne_backup_" + d.toISOString(), bck, function(err){
                if (err)
                {
                    return migrationError(err);
                }
                migrationFinish();
            });
}
	        }
	        function fn$(key){
	          remaining++;
	          hasKeys = true;
	          localforage.getItem(key, function(err, val){
	            if (err) {
	              return migrationError(err);
	            }
	            bck[key] = val;
	            remaining--;

                checkIfDone();
	          });
	        }
	      });
	    }
	    function migrationError()
{
    API.chatLog("Failed to migrate old plug_p0ne settings!\ Your old settings could NOT be backed up.\ Please contact the p0 developer (" + p0ne.contact + ").");
    API.chatLog("plug_p0ne will try to load anyways, but might fail");
    return resolve();
}
function migrationFinish()
{
    API.chatLog("Failed to migrate old plug_p0ne settings!\ Your old settings will be backed up and temporarily disabled.\ Please contact p0 developer (" + p0ne.contact + ") to restore your settings and fix the issue.");
    return resolve();
}
	  });
	}).then(function(){
    return new Promise(function(resolve, reject){
        var timeout;
    timeout = 50;
    function retry()
    {
        if (timeout === 0)
        {
            if (/ plug\.dj$/.test(location.host)) {
        alert("cannot load plug_p0ne if plug.dj didn't load itself");
    } else {
        alert("it looks like plug_p0ne doesn't work on this website");
    }
    resolve();
} else if (!window.requirejs) {
	        console.warn("[p0ne init] plug.dj did not load dependencies yet, waiting 100ms…");
	        timeout--;

            setTimeout(retry, 100);
	      } else if (!requirejs.defined('app')) {
	        console.warn("[p0ne init] plug.dj did not finish initializing, waiting until `app` is defined…");

            requirejs(['app'], retry);
	      } else {

            resolve();
	      }
	    } retry();
	  });
	}).then(function(){
    return new Promise(function(resolve, reject){
        var errors, warnings;
    localStorage.p0neVersion = p0ne.version;
    if (console.groupCollapsed)
    {
        console.groupCollapsed("[p0ne] initializing… (click on this message to expand/collapse the group)");
    }
    else if (console.group)
    {
        console.group("[p0ne] initializing…");
    }
    else
    {
        console.log("[p0ne] initializing…");
    }
    errors = warnings = 0;
    console.error_ || (console.error_ = console.error);
    console.error = function(){
        errors++;
        this.error_.apply(this, arguments);
    };
    console.warn_ || (console.warn_ = console.warn);
    console.warn = function(){
        warnings++;
        this.warn_.apply(this, arguments);
    };
    tryCatchWrap(function(){
        window.require = window.define = window.module = false;
        __webpack_require__(2);
        window.require = window.requirejs;
        window.define = window.requirejs.define;
        /*####################################
        #               MODULES              #
        ####################################*/
        __webpack_require__(4);
        dataLoadAll({
            p0ne_disabledModules:
            {
                _rooms: { }
            }
        }, function(err, data){
            var remaining;
            p0ne.disabledModules = data.p0ne_disabledModules;
            if (err)
            {
                console.warn(getTime() + " [p0ne] the user's p0ne settings seem to be corrupted");
            }
            tryCatchWrap(function(){
                window.m = window.mithril = __webpack_require__(30);
                __webpack_require__(3);
                window.module = p0ne.module = __webpack_require__(1);
                __webpack_require__(28);
                __webpack_require__(5);
                __webpack_require__(18);
                __webpack_require__(22);
                __webpack_require__(14);
                __webpack_require__(26);
                __webpack_require__(9);
                __webpack_require__(7);
                __webpack_require__(10);
                __webpack_require__(16);
                __webpack_require__(20);
                __webpack_require__(24);
                __webpack_require__(23);
                __webpack_require__(6);
                __webpack_require__(21);
                __webpack_require__(17);
                __webpack_require__(27);
                __webpack_require__(15);
                __webpack_require__(12);
                __webpack_require__(25);
            });
            remaining = 1;
			tryCatchWrap(function(){
	          var name, ref$, m;
	          for (name in ref$ = p0ne.modules) {
	            m = ref$[name];
	            if (m.loading) {
	              remaining++;
	              m.loading.then(moduleLoaded, moduleLoaded);
	            }
	          }
	          moduleLoaded();
	          if (remaining) {
	            console.log(getTime() + " [p0ne] " + plural(remaining, 'module') + " still loading");
	          }
	        });
	        function moduleLoaded(m)
{
    if (--remaining === 0)
    {
        return resolve({
            errors: errors,
	              warnings: warnings

                });
    }
}
	      });
	    });
	    function tryCatchWrap(fn)
{
    var err;
    try
    {
        return fn();
    }
    catch (e$) {
        err = e$;
        if (console.groupEnd)
        {
            console.groupEnd();
            console.groupEnd();
            console.groupEnd();
        }
        return resolve({
            errors: errors,
	          warnings: warnings,
	          fatalError: err

            });
    }
    }
});
	}).then(function(arg$)
{
    var errors, warnings, fatalError;
    errors = arg$.errors, warnings = arg$.warnings, fatalError = arg$.fatalError;
    return new Promise(function(resolve, reject){
        var noCollapsedGroup, name, ref$, m, $el;
    console.error = console.error_;
    console.warn = console.warn_;
    if (typeof console.groupEnd == 'function')
    {
        console.groupEnd();
    }
    console.info("[p0ne] base initialized!");
    if (errors)
    {
        console.error("[p0ne] There have been " + errors + (fatalError ? ' (other)' : '') + " errors");
    }
    if (warnings)
    {
        console.warn("[p0ne] There have been " + warnings + " warnings");
    }
    if (fatalError)
    {
        console.error("[plug_p0ne fatal error]", fatalError);
        API.chatLog("failed to load plug_p0ne: fatal error");
        reject();
        return;
    }
    noCollapsedGroup = true;
    for (name in ref$ = p0ne.modules) {
        m = ref$[name];
	      if (m.disabled && !m.settings && !(user.isStaff)) {
	        if (noCollapsedGroup) {
	          if (console.groupCollapsed) {
	            console.groupCollapsed("[p0ne] there are disabled modules which are hidden from the settings");
	            noCollapsedGroup = false;
	          } else {
	            console.warn("[p0ne] there are disabled modules which are hidden from the settings");
	          }
	        }
	        console.warn("\t" + name, m);
	      }
	    }
	    if (!noCollapsedGroup) {
	      console.groupEnd();
	    }
	    if (typeof _$context != 'undefined' && _$context !== null) {
	      _$context.trigger('p0ne:loaded', p0ne);
	    }
	    API.trigger('p0ne:loaded', p0ne);

        resolve();
p0ne.loaded = (typeof performance != 'undefined' && performance !== null ? performance.now() : void 8) || new Date();
console.info("[p0ne] completely initialized in %dms!", p0ne.loaded - p0ne.started);
	    $el = typeof appendChat == 'function' ? appendChat("<div class='cm p0ne-notif p0ne-notif-loaded'>plug_p0ne v" + p0ne.version + " loaded " + (typeof getTimestamp == 'function' ? getTimestamp() : void 8) + "</div>") : void 8;
	  });
	});

/***/ },
/* 1 */
/***/ function(module, exports)
{

    /**
	 * Module script for loading disable-able chunks of code
	 *
	 * @author jtbrinkmann aka. Brinkie Pie
	 * @license MIT License
	 * @copyright (c) 2015 J.-T. Brinkmann
	 */
    var module, slice$ = [].slice;
    console.log("~~~~~~~ p0ne.module ~~~~~~~");
    /*####################################
	#               MODULE               #
	####################################*/
    module.exports = module = function(moduleName, data){
        var setup, requirements, optional, update, persistent, disable, disableLate, module, settings, displayName, disabled, _settings, settingsPerCommunity, moderator, cssClass, fn, revertables, resetRevertables, arrEqual, objEqual, helperFNs, settingsKey, module_, i$, ref$, len$, k, err, dependenciesLoading, failedRequirements, l, r, ref1$, ref2$, that, optionalRequirements, res$, roomSlug, disabledModules, user, def, e;
        try
        {
            if (typeof moduleName === 'string')
            {
                data.moduleName = moduleName;
            }
            else
            {
                data = moduleName;
                if (data)
                {
                    moduleName = data.moduleName;
                }
            }
            if (typeof data === 'function')
            {
                setup = data;
            }
            else
            {
                requirements = data.require, optional = data.optional, setup = data.setup, update = data.update, persistent = data.persistent, disable = data.disable, disableLate = data.disableLate, module = data.module, settings = data.settings, displayName = data.displayName, disabled = data.disabled, _settings = data._settings, settingsPerCommunity = data.settingsPerCommunity, moderator = data.moderator, cssClass = data.cssClass;
            }
            if (module)
            {
                if (typeof module === 'function')
                {
                    fn = module;
                    module = function(){
                        /* Hi there, console ninja! this is a plug_p0ne module function wrapper.
                         * use the .module attribute (e.g. `automute.module`) to get the function you are probably looking for ;)
                         *
                         * with ♥ for programmers, your plug_p0ne team
                         */
                        return fn.apply(module, arguments);
                    };
                    importAll$(module, data);
                }
                else if (typeof module === 'object')
                {
                    importAll$(module, data);
                }
                else
                {
                    console.warn(getTime() + " [" + moduleName + "] TypeError when initializing. `module` needs to be either an Object or a Function but is " + typeof module);
                    module = data;
                }
            }
            else
            {
                module = data;
            }
            module.displayName = displayName || (displayName = moduleName);
            module['default'] = !disabled;
            (resetRevertables = function(){
                revertables = module._revertables = {
                    listeners: [],
	        replacements: [],
	        adds: [],
	        css: { },
	        loadedStyles: { },
	        $elements: [],
	        $elementsPersistent: []
      
          };
            })();
            arrEqual = function(a, b){
                var i$, len$, i;
                if (!a || !b || a.length !== b.length)
                {
                    return false;
                }
                for (i$ = 0, len$ = a.length; i$ < len$; ++i$) {
                    i = i$;
                    if (a[i] !== b[i])
                    {
                        return false;
                    }
                }
                return true;
            };
            objEqual = function(a, b){
                var k;
                if (a === b)
                {
                    return true;
                }
                else if (!a || !b)
                {
                    return false;
                }
                for (k in a)
                {
                    if (a[k] !== b[k])
                    {
                        return false;
                    }
                }
                return true;
            };
            helperFNs = {
                addListener: function(target){
                    var args, res$, i$, to$, ref$, that;
                    res$ = [];
                    for (i$ = 1, to$ = arguments.length; i$ < to$; ++i$) {
                        res$.push(arguments[i$]);
                    }
                    args = res$;
                    if (target === 'early')
                    {
                        ref$ = args, target = ref$[0], args = slice$.call(ref$, 1);
	          if (target.onEarly) {
	            target.onEarly.apply(target, args);
	          } else {
	            console.warn(getTime() + " [" + moduleName + "] cannot use .onEarly on", target);
	          }
	        } else if (target === 'once' || target === 'one') {
	          ref$ = args, target = ref$[0], args = slice$.call(ref$, 1);
	          if (that = target.once || target.one) {
	            that.apply(target, args);
	          } else {
	            console.warn(getTime() + " [" + moduleName + "] cannot use .once / .one on", target);
	          }
	        } else {
	          target.on.apply(target, args);
	        }
	        (ref$ = revertables.listeners)[ref$.length] = {
	          target: target,
	          args: args
	        };
	        return args[args.length - 1];
	      },
	      replace: function(target, attr, repl)
{
    var orig, ref$;
    if (attr in target) {
        orig = target[attr];
        if (!(attr + "_" in target)) {
            target[attr + "_"] = orig;
        }
    } else {
        target[attr + "_"] = null;
    }
    target[attr] = repl;
    (ref$ = revertables.replacements)[ref$.length] = [target, attr, repl, orig];
	        return repl;
	      },
	      wrap: function(target, attr, repl)
{
    return helperFNs.replace(target, attr, repl(target[attr]));
},
	      revert: function(target_, attr_)
{
    var i$, ref$, i, ref1$, target, attr, replacement, orig, didReplace;
    for (i$ = (ref$ = revertables.replacements).length - 1; i$ >= 0; --i$) {
        i = i$;
        ref1$ = ref$[i$], target = ref1$[0], attr = ref1$[1], replacement = ref1$[2], orig = ref1$[3];
	          if ((!attr_ || attr_ === attr) && (!target_ || target_ === target) && target[attr] === replacement) {
	            didReplace = true;
	            target[attr] = orig;
	            if (orig === target[attr + "_"]) {
	              delete target[attr + "_"];
	            }
	            revertables.replacements.remove(i);
	          }
	        }
	        return didReplace;
	      },
	      wrapListener: function(emitter, event, ctx, callback)
{
    var evts, ref$, i$, len$, e;
    if (!(evts = emitter != null ? (ref$ = emitter._events) != null ? ref$[event] : void 8 : void 8)) {
	          console.error(getTime() + " [ERROR] unable to replace listener of type '" + event + "' (no such event for event emitter specified)", emitter, ctx);
	          return false;
}
	        if (callback) {
	          for (i$ = 0, len$ = evts.length; i$ < len$; ++i$) {
	            e = evts[i$];
	            if (e.ctx === ctx || typeof ctx === 'function' && e.ctx instanceof ctx) {
	              return helperFNs.wrap(e, 'callback', callback);
	            }
	          }
	        } else {
	          callback = ctx;
	          for (i$ = 0, len$ = evts.length; i$ < len$; ++i$) {
	            e = evts[i$];
	            if (e.ctx.cid) {
	              return helperFNs.wrap(e, 'callback', callback);
	            }
	          }
	        }
	        console.warn(getTime() + " [ERROR] unable to replace listener of type '" + event + "' (no appropriate callback found)", emitter, ctx);
	        return false;
},
	      replaceListener: function(emitter, event, ctx, callback)
{
    return helperFNs.wrapListener(emitter, event, ctx, function(){
        return callback;
    });
},
	      wrap_$Listener: function(event, constructor, callback)
{
    if (typeof _$context == 'undefined' || _$context === null) {
        console.error(getTime() + " [ERROR] unable to replace listener in _$context._events['" + event +"'] (no _$context)");
        return false;
    }
    if (arguments.length === 2)
    {
        callback = constructor;
        constructor = _$context;
    }
    helperFNs.wrapListener(_$context, event, constructor, callback);
},
	      replace_$Listener: function(event, constructor, callback)
{
    return helperFNs.wrap_$Listener(event, constructor, function(){
        return callback;
    });
},
	      add: function(target, callback, options)
{
    var d, ref$;
    d = [target, callback, options];
    if (options != null && options.bound)
    {
        callback = callback.bind(module);
    }
    d.index = target.length;
    target[d.index] = callback;
    (ref$ = revertables.adds)[ref$.length] = d;
	      },
	      addCommand: function(commandName, data)
{
    helperFNs.replace(chatCommands.commands, commandName, data);
    chatCommands.updateCommands();
},
	      $create: function(html)
{
    var ref$;
    return (ref$ = revertables.$elements)[ref$.length] = $(html);
	      },
	      $createPersistent: function(html)
{
    var ref$;
    return (ref$ = revertables.$elementsPersistent)[ref$.length] = $(html);
	      },
	      css: function(name, str)
{
    p0neCSS.css(name, str);
    revertables.css[name] = str;
},
	      loadStyle: function(url)
{
    p0neCSS.loadStyle(url);
    revertables.loadedStyles[url] = true;
},
	      toggle: function()
{
    if (helperFNs.disabled)
    {
        helperFNs.enable();
        return true;
    }
    else
    {
        helperFNs.disable();
        return false;
    }
},
	      enable: function()
{
    var err;
    if (!module.disabled)
    {
        return module;
    }
    module.disabled = false;
    if (!module.modDisabled)
    {
        disabledModules[moduleName] = false;
    }
    try
    {
        if (cssClass)
        {
	            $roots.addClass(cssClass);
        }
        setup.call(module, helperFNs, module);
        trigger('moduleEnabled');
        console.log(getTime() + " [" + moduleName + "] enabled");
    }
    catch (e$) {
        err = e$;
        console.error(getTime() + " [" + moduleName + "] error while (re-)enabling", err.messageAndStack);
        module.disabled = true;
    }
    localforage.setItem('p0ne_disabledModules', p0ne.disabledModules);
    return module;
    },
	      disable: function(temp){
        var newModule, hasChatCommands, i$, ref$, len$, ref1$, target, args, attr, replacement, orig, d, style, url, $el, m, err;
        if (module.disabled)
        {
            return module;
        }
        if (temp && temp !== true)
        {
            newModule = temp;
        }
        try
        {
            if (cssClass)
            {
	            $roots.removeClass(cssClass);
            }
            module.disabled = true;
            hasChatCommands = (typeof chatCommands != 'undefined' && chatCommands !== null ? chatCommands.commands : void 8) != null;
            if (typeof disable === 'function')
            {
                disable.call(module, helperFNs, newModule);
            }
            if (cssClass)
            {
	            $roots.removeClass(cssClass);
            }
            for (i$ = 0, len$ = (ref$ = revertables.listeners).length; i$ < len$; ++i$) {
                ref1$ = ref$[i$], target = ref1$.target, args = ref1$.args;
	            target.off.apply(target, args);
	          }
	          for (i$ = 0, len$ = (ref$ = revertables.replacements).length; i$ < len$; ++i$) {
	            ref1$ = ref$[i$], target = ref1$[0], attr = ref1$[1], replacement = ref1$[2], orig = ref1$[3];
	            if (target[attr] === replacement) {
	              target[attr] = orig;
	              if (hasChatCommands && target === chatCommands.commands) {
	                if (!orig) {
	                  delete chatCommands.commands.roomsettings;
	                }
	                chatCommands.updateCommands();
	              }
	            }
	          }
	          for (i$ = 0, len$ = (ref$ = revertables.adds).length; i$ < len$; ++i$) {
	            d = ref$[i$], target = d[0];
	            target.remove(d.index);
	            d.index = -1;
	          }
	          for (style in revertables.css) {
	            p0neCSS.css(style, "/* disabled */");
	          }
	          for (url in revertables.loadedStyles) {
	            p0neCSS.unloadStyle(url);
	          }
	          for (i$ = 0, len$ = (ref$ = revertables.$elements || []).length; i$ < len$; ++i$) {
	            $el = ref$[i$];
	            $el.remove();
	          }
	          for (i$ = 0, len$ = (ref$ = p0ne.dependencies[moduleName] || []).length; i$ < len$; ++i$) {
	            m = ref$[i$];
	            m.disable();
	          }
	          if (!module.modDisabled && !temp) {
	            disabledModules[moduleName] = true;
	            localforage.setItem('p0ne_disabledModules', p0ne.disabledModules);
	          }
	          if (!newModule) {
	            for (i$ = 0, len$ = (ref$ = revertables.$elementsPersistent || []).length; i$ < len$; ++i$) {
	              $el = ref$[i$];
	              $el.remove();
	            }
	            trigger('moduleDisabled');
	            console.log(getTime() + " [" + moduleName + "] disabled");
	            dataUnload(settingsKey);
	          }
	          resetRevertables();
	          if (typeof disableLate === 'function') {
	            disableLate.call(module, helperFNs, newModule);
	          }
	        } catch (e$) {
	          err = e$;
	          console.error(getTime() + " [module] failed to disable '" + moduleName + "' cleanly", err.messageAndStack);
	          delete window[moduleName];
	        }
	        delete p0ne.dependencies[moduleName];
	        return module;
	      }
	    };
	    settingsKey = settingsPerCommunity
	      ? "p0ne__" + roomSlug + "_" + moduleName
	      : "p0ne_" + moduleName;
	    module.saveSettings = function(cb){
	      localforage.setItem(settingsKey, module._settings, cb);
	    };
	    module.disable = helperFNs.disable;
	    module.enable = helperFNs.enable;
	    if (module_ = window[moduleName]) {
	      for (i$ = 0, len$ = (ref$ = persistent || []).length; i$ < len$; ++i$) {
	        k = ref$[i$];
	        module[k] = module_[k];
	      }
	      if (!module_.disabled) {
	        try {
	          if (typeof module_.disable == 'function') {
	            module_.disable(module);
	          }
	        } catch (e$) {
	          err = e$;
	          console.error(getTime() + " [module] failed to disable '" + moduleName + "' cleanly", err.messageAndStack);
	        }
	      }
	    }
	    dependenciesLoading = 1;
	    failedRequirements = [];
	    l = 0;
	    for (i$ = 0, len$ = (ref$ = requirements || []).length; i$ < len$; ++i$) {
	      r = ref$[i$];
	      if (!r) {
	        failedRequirements[l++] = r;
	      } else if (typeof r === 'string' && !window[r]) {
	        (ref1$ = (ref2$ = p0ne.dependencies)[r] || (ref2$[r] = []))[ref1$.length] = this;
	        failedRequirements[l++] = r;
	      } else if (that = l === 0 && r.loading || typeof r === 'string' && ((ref1$ = window[r]) != null ? ref1$.loading : void 8)) {
	        dependenciesLoading++;
	        that.done(loadingDone).fail(loadingFailed);
	      }
	    }
	    if (l) {
	      console.error(getTime() + " [" + moduleName + "] didn't initialize (" + humanList(failedRequirements) + " " + (failedRequirements.length > 1 ? 'are' : 'is') + " required)");
	      return module;
	    }
	    res$ = [];
	    for (i$ = 0, len$ = (ref$ = optional || []).length; i$ < len$; ++i$) {
	      r = ref$[i$];
	      if (!r || (typeof r === 'string' && !window[r])) {
	        res$.push(r);
	      }
	    }
	    optionalRequirements = res$;
	    if (optionalRequirements.length) {
	      console.warn(getTime() + " [" + moduleName + "] couldn't load optional requirement" + (optionalRequirements.length > 1 && 's' || '') + ": " + humanList(optionalRequirements) + ". This module may only run with limited functionality");
	    }
	    if (module.help != null) {
	      module.help = module.help.replace(/\n/g, "<br>\n");
	    }
	    if (settingsPerCommunity) {
	      roomSlug = getRoomSlug();
	      disabledModules = (ref$ = p0ne.disabledModules._rooms)[roomSlug] || (ref$[roomSlug] = {});
	      module._updateRoom = function(){
	        var roomSlug, module_, disabledModules, ref$, def;
	        module.disable();
	        roomSlug = getRoomSlug();
	        module_ = module;
	        disabledModules = (ref$ = p0ne.disabledModules._rooms)[roomSlug] || (ref$[roomSlug] = {});
	        module.disabled = disabledModules[moduleName];
	        def = $.Deferred();
	        module.loading = def.promise();
	        settingsKey = "p0ne__" + roomSlug + "_" + moduleName;
	        dataLoad(settingsKey, _settings, function(err, _settings){
	          module._settings = _settings;
	          if (err) {
	            console.warn("[p0ne] error loading room settings for " + moduleName, err);
	          }
	          def.resolve(module);
	          delete module.loading;
	          console.log(getTime() + " [" + moduleName + "] new room settings loaded");
	        });
	      };
	    } else {
	      disabledModules = p0ne.disabledModules;
	    }
	    if (moduleName in disabledModules) {
	      module.disabled = disabledModules[moduleName];
	    } else {
	      module.disabled = disabledModules[moduleName] = !!disabled;
	    }
	    user = API.getUser();
	    if (moderator && user.role < 2 && user.gRole === 0 && !module.disabled) {
	      module.modDisabled = module.disabled = true;
	    }
	    if (module_ != null && module_._settings) {
	      module._settings = module_._settings;
	    } else if (_settings) {
	      dependenciesLoading++;
	      dataLoad(settingsKey, _settings, function(err, _settings){
	        module._settings = _settings;
	        if (err) {
	          console.warn("[p0ne] error loading settings for " + moduleName, err);
	        }
	        loadingDone();
	      });
	    }
	    window[moduleName] = p0ne.modules[moduleName] = module;
	    if (dependenciesLoading > 1) {
	      def = $.Deferred();
	      module.loading = def.promise();
	    }
	    loadingDone();
	  } catch (e$) {
	    e = e$;
	    console.error(getTime() + " [p0ne module] error initializing '" + moduleName + "':", e.messageAndStack);
	  }
	  return module;
	  function loadingDone(){
	    var wasDisabled, e;
	    if (--dependenciesLoading === 0 && 0 === failedRequirements.length) {
	      delete module.loading;
	      if (module.disabled) {
	        if (module.modDisabled) {
	          wasDisabled = ", %cbut is for moderators only";
	        } else {
	          wasDisabled = ", %cbut is (still) disabled";
	        }
	        if (def != null) {
	          def.reject(module);
	        }
	      } else {
	        wasDisabled = "%c";
	        try {
	          if (cssClass) {
	            $roots.addClass(cssClass);
	          }
	          if (setup != null) {
	            setup.call(module, helperFNs, module, module_);
	          }
	          if (def != null) {
	            def.resolve(module);
	          }
	        } catch (e$) {
	          e = e$;
	          console.error(getTime() + " [" + moduleName + "] error initializing", e.messageAndStack);
	          module.disable(true);
	          if (def != null) {
	            def.reject(module);
	          }
	        }
	      }
	      if (module_) {
	        trigger('moduleUpdated');
	        console.log(getTime() + " [" + moduleName + "] updated" + wasDisabled, "color: orange");
	      } else {
	        trigger('moduleLoaded');
	        console.log(getTime() + " [" + moduleName + "] initialized" + wasDisabled, "color: orange");
	      }
	      if (!module.disabled) {
	        trigger('moduleEnabled');
	      }
	      return module_ = null;
	    }
	  }
	  function loadingFailed(){
	    var ref$;
	    if (def != null) {
	      def.reject(module);
	    }
	    delete module.loading;
	    return ref$ = window[moduleName], delete window[moduleName], ref$;
	  }
	  function trigger(type){
	    if (typeof _$context != 'undefined' && _$context !== null) {
	      _$context.trigger("p0ne:" + type, module, module_);
	    }
	    return API.trigger("p0ne:" + type, module, module_);
	  }
	};
	module.load = function(moduleName, url){
	  var def;
	  if (p0ne.modules[moduleName]) {
	    if (p0ne.modules[moduleName].loading) {
	      console.log("[module.load] module loading", moduleName, url);
	      return p0ne.modules[moduleName].loading;
	    } else {
	      console.log("[module.load] module already loaded", moduleName, url);
	      return $.Deferred().resolve(p0ne.modules[moduleName]);
	    }
	  }
	  def = $.Deferred();
	  window[moduleName] = p0ne.modules[moduleName] = {
	    loading: def,
	    disable: function(arg$, m){
	      _.defer(function(){
	        if (m != null && m.loading) {
	          console.log("[module.load] module loading", moduleName, url);
	          p0ne.modules[moduleName].loading.then(def.resolve);
	        } else if (m) {
	          console.log("[module.load] module initialized", moduleName, url);
	          def.resolve(m);
	        } else {
	          def.reject();
	        }
	      });
	    }
	  };
	  console.log("[module.load] loading", moduleName, url);
	  $.getScript(url).then(function(){
	    console.log("[module.load] script loaded", moduleName, url);
	  }).fail(function(){
	    console.warn("[module.load] script failed to load", moduleName, url);
	    def.reject();
	  });
	  return def;
	};
	function importAll$(obj, src){
	  for (var key in src) obj[key] = src[key];
	  return obj;
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	/*
	   * Lambda.js: String based lambdas for Node.js and the browser.
	   * edited by JTBrinkmann to support some CoffeeScript like shorthands (e.g. :: for prototype)
	   *
	   * Copyright (c) 2007 Oliver Steele (steele@osteele.com)
	   * Released under MIT license.
	   *
	   * Version: 1.0.2
	   *
	   */

	var
	    split = 'ab'.split(/a*/).length > 1 ? String.prototype.split : function (separator) {
	            var result = this.split.apply(this, arguments),
	                re = RegExp(separator),
	                savedIndex = re.lastIndex,
	                match = re.exec(this);
	            if (match && match.index === 0) {
	                result.unshift('');
	            }
	            re.lastIndex = savedIndex;
	            return result;
	        },
	    indexOf = Array.prototype.indexOf || function (element) {
	            for (var i = 0, e; e = this[i]; i++) {
	                if (e === element) {
	                    return i;
	                }
	            }
	            return -1;
	        };

	function lambda(expression, vars) {
	    if (!vars || !vars.length)
	        vars = []
	    expression = expression.replace(/^\s+/, '').replace(/\s+$/, '') // jtb edit
	    var parameters = [],
	        sections = split.call(expression, /\s*->\s*/m);
	    if (sections.length > 1) {
	        while (sections.length) {
	            expression = sections.pop();
	            parameters = sections.pop().replace(/^\s*(.*)\s*$/, '$1').split(/\s*,\s*|\s+/m);
	            sections.length && sections.push('(function('+parameters+'){return ('+expression+')})');
	        }
	    } else if (expression.match(/\b_\b/)) {
	        parameters = '_';
	    } else {
	        var leftSection = expression.match(/^(?:[+*\/%&|\^\.=<>]|!=|::)/m),
	            rightSection = expression.match(/[+\-*\/%&|\^\.=<>!]$/m);
	        if (leftSection || rightSection) {
	            if (leftSection) {
	                parameters.push('$1');
	                expression = '$1' + expression;
	            }
	            if (rightSection) {
	                parameters.push('$2');
	                if (rightSection[0] == '.')
	                    expression = expression.substr(0, expression.length-1) + '[$2]' // jtb edit
	                else
	                    expression = expression + '$2';
	            }
	        } else {
	            var variables = expression
	                .replace(/(?:\b[A-Z]|\.[a-zA-Z_$])[a-zA-Z_$\d]*|[a-zA-Z_$][a-zA-Z_$\d]*\s*:|true|false|null|undefined|this|arguments|'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"/g, '')
	                .match(/([a-z_$][a-z_$\d]*)/gi) || [];
	            for (var i = 0, v; v = variables[i++];) {
	                if (parameters.indexOf(v) == -1 && vars.indexOf(v) == -1)
	                    parameters.push(v);
	            }
	        }
	    }
	    if (vars.length)
	        vars = 'var '+vars.join(',')+'; '
	    else
	        vars = ''

	    try {
	        return new Function(parameters, vars+'return (' + expression + ')');
	    } catch(e) {
	        e.message += ' in function('+parameters+'){'+vars+'return (' + expression + ')}'
	        throw e
	    }
	}


	module.exports = function(expression) {
	    var vars = [], refs = 0
	    var replacedNCO = true
	    expression = expression
	        // :: for prototype
	        .replace(/([\w$]*)\.?::(\?)?\.?([\w$])?/g, function(_, pre, nullCoalescingOp, post, i) {
	            return (pre ? pre+'.' : i == 0 ? '.' : '') + 'prototype' + (nullCoalescingOp||'') + (post ? '.'+post : '')
	        })
	        // @ for this
	        .replace(/@(\?)?\.?([\w$])?/g, function(_, nullCoalescingOp, post, i) {
	            return 'this' + (nullCoalescingOp||'') + (post ? '.'+post : '')
	        })
	    // ?. for Null Coalescing Operator
	    while (replacedNCO) {
	        replacedNCO = false
	        expression = expression.replace(/([\w\.\$]+)\?([\w\.\$]|\[)/, function(_, pre, post) {
	            replacedNCO = true
	            vars[refs++] = 'ref'+refs+'$'
	            return '(ref'+refs+'$ = '+(pre[0]=='.'?'it':'')+pre+') != null && ref'+refs+'$'+(post[0]=="."||post[0]=="[" ? "" : ".")+post
	        })
	    }
	    return lambda(expression, vars)
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * plug_p0ne mithril auxiliaries
	 * adds useful helper functions to be used with mithril
	 *
	 * @author jtbrinkmann aka. Brinkie Pie
	 * @license MIT License
	 * @copyright (c) 2016 J.-T. Brinkmann
	 */
	var this$ = this;
	console.log("~~~~~~~ p0ne.auxiliaries-mithril ~~~~~~~");
	if (typeof m != 'undefined' && m !== null) {
	  importAll$(m, {
	    preventDefault: function(it){
	      return it.preventDefault();
	    },
	    delegated: function(selector, callback){
	      return function(e){
	        var propagationStopped, stopPropagation_, $target, yet$;
	        propagationStopped = false;
	        stopPropagation_ = e.stopPropagation;
	        e.stopPropagation = function(){
	          propagationStopped = true;
	        };
	        $target = $(e.target || e.srcElement);
	        for (yet$ = true; !propagationStopped && ($target = $target.closest(selector, this)).length;) {
	          yet$ = false;
	          callback.call($target[0], e);
	          $target = $target.parent();
	        } if (yet$) {
	          m.redraw.strategy('none');
	        }
	        e.stopPropagation = stopPropagation_;
	        if (propagationStopped) {
	          e.stopPropagation();
	        }
	      };
	    },
	    css: function(cssObj){
	      var res, k, v;
	      res = "";
	      for (k in cssObj) {
	        v = cssObj[k];
	        if (typeof v === 'number') {
	          v = v + "px";
	        }
	        res += k + ":" + v + ";";
	      }
	      return res;
	    }
	  });
	}
	function importAll$(obj, src){
	  for (var key in src) obj[key] = src[key];
	  return obj;
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Auxiliary-functions for plug_p0ne
	 *
	 * @author jtbrinkmann aka. Brinkie Pie
	 * @license MIT License
	 * @copyright (c) 2015 J.-T. Brinkmann
	*/
	var out$, tmp, i$, ref$, len$, Constr, DataEmitter, $dummy;
	console.log("~~~~~~~ p0ne.auxiliaries ~~~~~~~");
	out$ = window;
	window.$window = $(window);
	window.$body = $(document.body);
	window.$app = $('#app');
	window.$roots = $($body);
	window.$cm = $('#chat-messages');
	window.$cms = $($cm);
	window.$cmMain = $($cm);
	window.$cmPopout = $();
	/*####################################
	#         PROTOTYPE FUNCTIONS        #
	####################################*/
	tmp = function(property, value){
	  if (this[property] !== value) {
	    Object.defineProperty(this, property, {
	      enumerable: false,
	      writable: true,
	      configurable: true,
	      value: value
	    });
	  }
	};
	tmp.call(Object.prototype, 'define', tmp);
	Object.prototype.define('defineGetter', function(property, get){
	  if (this[property] !== get) {
	    Object.defineProperty(this, property, {
	      enumerable: false,
	      configurable: true,
	      get: get
	    });
	  }
	});
	Object.prototype.define('hasAttribute', function(property){
	  return property in this;
	});
	Array.prototype.define('remove', function(i){
	  return this.splice(i, 1);
	});
	Array.prototype.define('removeItem', function(el){
	  var i;
	  if (-1 !== (i = this.indexOf(el))) {
	    this.splice(i, 1);
	  }
	  return this;
	});
	Array.prototype.define('random', function(){
	  return this[~~(Math.random() * this.length)];
	});
	Array.prototype.define('unique', function(){
	  var res, l, i$, len$, i, el, isUnique, j$, o;
	  res = [];
	  l = 0;
	  for (i$ = 0, len$ = (this).length; i$ < len$; ++i$) {
	    i = i$;
	    el = (this)[i$];
	    isUnique = true;
	    for (j$ = 0; j$ < i; ++j$) {
	      o = j$;
	      if (this[o] === el) {
	        isUnique = false;
	        break;
	      }
	    }
	    if (isUnique) {
	      res[l++] = el;
	    }
	  }
	  return res;
	});
	Array.prototype.define('joinWrapped', function(pre, post, between){
	  var res, i$, to$, i;
	  pre == null && (pre = '');
	  post == null && (post = '');
	  between == null && (between = '');
	  if (this.length === 0) {
	    return "";
	  }
	  res = pre + "" + this[0] + post;
	  for (i$ = 1, to$ = this.length; i$ < to$; ++i$) {
	    i = i$;
	    res += between + "" + pre + this[i] + post;
	  }
	  return res;
	});
	String.prototype.define('fastReplace', function(needle, replacement){
	  return this.split(needle).join(replacement);
	});
	String.prototype.define('reverse', function(){
	  var res, i;
	  res = "";
	  i = this.length;
	  while (i--) {
	    res += this[i];
	  }
	  return res;
	});
	String.prototype.define('startsWith', function(str){
	  var i;
	  i = str.length;
	  while (i > 0) {
	    if (str[--i] !== this[i]) {
	      return false;
	    }
	  }
	  return true;
	});
	String.prototype.define('endsWith', function(str){
	  var i, o;
	  i = str.length;
	  o = this.length - i;
	  while (i > 0) {
	    if (str[--i] !== this[o + i]) {
	      return false;
	    }
	  }
	  return true;
	});
	String.prototype.define('replaceSansHTML', function(rgx, rpl){
	  if (typeof rpl === 'function') {
	    return this.replace(/(.+?)(<(?:br>|.*?>.*?<\/\w+>|.*?\/>)|$)/gi, function(arg$, pre, post, i){
	      return pre.replace(rgx, function(){
	        arguments[arguments.length - 2] += i;
	        return rpl.apply(this, arguments);
	      }) + "" + post;
	    });
	  } else {
	    return this.replace(/(.*?)(<(?:br>|.*?>.*?<\/\w+>|.*?\/>)|$)/gi, function(arg$, pre, post){
	      return pre.replace(rgx, rpl) + "" + post;
	    });
	  }
	});
	for (i$ = 0, len$ = (ref$ = [String, Array]).length; i$ < len$; ++i$) {
	  Constr = ref$[i$];
	  Constr.prototype.define('has', fn$);
	  Constr.prototype.define('hasAny', fn1$);
	}
	Number.prototype.defineGetter('s', function(){
	  return this * 1000;
	});
	Number.prototype.defineGetter('min', function(){
	  return this * 60000;
	});
	Number.prototype.defineGetter('h', function(){
	  return this * 3600000;
	});
	if (window.chrome) {
	  Error.prototype.__defineGetter__('messageAndStack', function(){
	    return this.stack;
	  });
	} else {
	  Error.prototype.__defineGetter__('messageAndStack', function(){
	    return this.name + ": " + this.message + "\n" + this.stack;
	  });
	}
	importAll$(jQuery.fn, {
	  or: function($el){
	    if (this.length === 0) {
	      return $($el);
	    } else {
	      return this;
	    }
	  },
	  nextMatching: function(selector){
	    /* similar to .nextUntil(), however this returns the first
	     * following sibling that's actually matching the selector
	     */
	    return $(this).nextUntil(selector).last().next();
	  },
	  indexOf: function(selector){
	    /* selector may be a String jQuery Selector or an HTMLElement */
	    var i, i$, len$, el;
	    if (this.length && !(selector instanceof HTMLElement)) {
	      i = [].indexOf.call(this, selector);
	      if (i !== -1) {
	        return i;
	      }
	    }
	    for (i$ = 0, len$ = (this).length; i$ < len$; ++i$) {
	      i = i$;
	      el = (this)[i$];
	      if (jQuery(el).is(selector)) {
	        return i;
	      }
	    }
	    return -1;
	  },
	  concat: function(arr2){
	    var l, i$, len$, i, el;
	    l = this.length;
	    if (!arr2 || !arr2.length) {
	      return this;
	    }
	    if (!l) {
	      return arr2;
	    }
	    for (i$ = 0, len$ = arr2.length; i$ < len$; ++i$) {
	      i = i$;
	      el = arr2[i$];
	      this[i + l] = el;
	    }
	    this.length += arr2.length;
	    return this;
	  },
	  fixSize: function(){
	    var i$, len$, el;
	    for (i$ = 0, len$ = (this).length; i$ < len$; ++i$) {
	      el = (this)[i$];
	      el.style.width = el.width + "px";
	      el.style.height = el.height + "px";
	    }
	    return this;
	  },
	  loadAll: function(cb){
	    var remaining;
	    remaining = this.length;
	    if (!cb || !remaining) {
	      _.defer(cb());
	    } else {
	      this.load(function(){
	        if (--remaining === 0) {
	          cb();
	        }
	      });
	    }
	    return this;
	  },
	  p0neFx: function(effect){
	    var this$ = this;
	    if (this.length) {
	      this.removeClass("p0ne-fx-off-" + effect);
	      this.addClass("p0ne-fx-" + effect);
	      requestAnimationFrame(function(){
	        this$.removeClass("p0ne-fx-" + effect);
	        this$.addClass("p0ne-fx-off-" + effect);
	      });
	    }
	    return this;
	  }
	});
	importAll$($.easing, {
	  easeInQuad: function(p){
	    return p * p;
	  },
	  easeOutQuad: function(p){
	    return 1 - (1 - p) * (1 - p);
	  }
	});
	window.dataLoad = function(name, defaultVal, callback){
	  defaultVal == null && (defaultVal = {});
	  if (p0ne.autosave[name]) {
	    p0ne.autosave_num[name]++;
	    return callback(null, p0ne.autosave[name]);
	  }
	  p0ne.autosave_num[name] = 1;
	  localforage.getItem(name, function(err, data){
	    var warning, errorCode, name_;
	    if (err) {
	      warning = "failed to load '" + name + "' from localforage";
	      errorCode = 'localforage';
	    } else if (data) {
	      p0ne.autosave[name] = data;
	      return callback(err, data);
	    } else {
	      p0ne.autosave[name] = defaultVal;
	      return callback(err, defaultVal);
	    }
	    name_ = name + "_" + getISOTime();
	    console.warn(getTime() + " [dataLoad] " + warning + ", it seems to be corrupted! making a backup to '" + name_ + "' and continuing with default value", err);
	    localforage.setItem(name_, data);
	    p0ne.autosave[name] = defaultVal;
	    callback(new TypeError("data corrupted (" + errorCode + ")"), defaultVal);
	  });
	};
	window.dataLoadAll = function(defaults, callback){
	  /*defaults is to be in the format `{name: defaultVal, name2: defaultVal2, …}` where `name` is the name of the data to load */
	  var remaining, name, errors, hasError, res, i$;
	  remaining = 0;
	  for (name in defaults) {
	    remaining++;
	  }
	  if (remaining === 0) {
	    callback(null, {});
	  } else {
	    errors = {};
	    hasError = false;
	    res = {};
	    for (i$ in defaults) {
	      (fn$.call(this, i$, defaults[i$]));
	    }
	  }
	  function fn$(name, defaultVal){
	    dataLoad(name, defaultVal, function(err, data){
	      if (err) {
	        hasError = true;
	        errors[name] = err;
	      }
	      res[name] = data;
	      if (--remaining === 0) {
	        if (!hasError) {
	          errors = null;
	        }
	        callback(errors, res);
	      }
	    });
	  }
	};
	window.dataUnload = function(name){
	  if (p0ne.autosave_num[name]) {
	    p0ne.autosave_num[name]--;
	  }
	  if (p0ne.autosave_num[name] === 0) {
	    delete p0ne.autosave[name];
	  }
	};
	window.dataSave = function(m){
	  var data, errModules, l, k, v, e;
	  if (m) {
	    data = {};
	    data[m.name] = m;
	  } else {
	    data = p0ne.autosave;
	  }
	  errModules = [];
	  l = 0;
	  for (k in data) {
	    v = data[k];
	    if (v) {
	      if (typeof v.toJSON === 'function') {
	        v = v.toJSON();
	      }
	      try {
	        localforage.setItem(k, v);
	      } catch (e$) {
	        e = e$;
	        errModules[l++] = k;
	        console.error("[dataSave] failed to save data for " + k);
	      }
	    }
	  }
	  if (l !== 0 && (typeof chatWarn != 'undefined' && chatWarn !== null) && (typeof humanList != 'undefined' && humanList !== null)) {
	    chatWarn({
	      title: "plug_p0ne settings error",
	      message: "failed to save settings for " + humanList(errModules),
	      icon: 'p0ne-icon'
	    });
	  }
	};
	/*####################################
	#            DATA EMITTER            #
	####################################*/
	window.DataEmitter = DataEmitter = (function(superclass){
	  var prototype = extend$((import$(DataEmitter, superclass).displayName = 'DataEmitter', DataEmitter), superclass).prototype, constructor = DataEmitter;
	  function DataEmitter(_name){
	    this._name = _name;
	  }
	  DataEmitter.prototype._name = 'unnamed DataEmitter';
	  DataEmitter.prototype.set = function(newData){
	    if (this._data !== newData) {
	      this._data = newData;
	      this.trigger('data', this._data);
	    }
	    return this;
	  };
	  DataEmitter.prototype.clear = function(){
	    this.trigger('clearing');
	    delete this._data;
	    this.trigger('cleared');
	    return this;
	  };
	  DataEmitter.prototype.on = function(type, fn, context){
	    var e;
	    superclass.prototype.on.apply(this, arguments);
	    if (this._data && (type === 'data' || type === 'all')) {
	      try {
	        fn.call(context || this, this._data);
	      } catch (e$) {
	        e = e$;
	        console.error("[" + this._name + "] Error while triggering " + type + " [" + (this._listeners[type].length - 1) + "]", this, args, e.messageAndStack);
	      }
	    }
	    return this;
	  };
	  DataEmitter.prototype.data = function(fn, context){
	    return this.on('data', fn, context);
	  };
	  DataEmitter.prototype.cleared = function(fn, context){
	    return this.on('cleared', fn, context);
	  };
	  return DataEmitter;
	}({
	  prototype: Backbone.Events
	}));
	/*####################################
	#         GENERAL AUXILIARIES        #
	####################################*/
	$dummy = $('<a>');
	importAll$(window, {
	  YT_REGEX: /https?:\/\/(?:www\.)?(?:youtube(?:-nocookie)?\.com\/(?:[^\/]+\/.+\/|(?:v|embed|e)\/|.*(?:\?|&amp;)v=)|youtu\.be\/)([^"&?\/<>\s]{11})(?:[&#?]|$)/i,
	  repeat: function(timeout, fn){
	    return setInterval(function(){
	      if (!disabled) {
	        fn.apply(this, arguments);
	      }
	    }, timeout);
	  },
	  sleep: function(timeout, fn){
	    return setTimeout(fn, timeout);
	  },
	  throttle: function(timeout, fn){
	    return _.throttle(fn, timeout);
	  },
	  pad: function(num, digits){
	    var a, b;
	    if (digits) {
	      if (!isFinite(num)) {
	        return num + "";
	      }
	      a = ~~num;
	      b = (num - a) + "";
	      num = a + "";
	      while (num.length < digits) {
	        num = "0" + num;
	      }
	      return num + "" + b.substr(1);
	    } else {
	      return 0 <= num && num < 10
	        ? "0" + num
	        : num + "";
	    }
	  },
	  padHex: function(str, digits){
	    digits == null && (digits = 2);
	    while (str.length < digits) {
	      str = "0" + str;
	    }
	    return str;
	  },
	  generateID: function(){
	    return (~~(Math.random() * 0xFFFFFF)).toString(16).toUpperCase();
	  },
	  naturalSorter: function(){
	    var regexp;
	    regexp = /(\.\d+)|(\d+(\.\d+)?)|([^\d.]+)|(\.\D+)|(\.$)/g;
	    return function(as, bs){
	      var i, a, b, i$, to$, a1, b1, n;
	      i = 0;
	      if (as === bs) {
	        return 0;
	      }
	      a = as.toLowerCase().match(regexp);
	      b = bs.toLowerCase().match(regexp);
	      for (i$ = 0, to$ = a.length; i$ < to$; ++i$) {
	        i = i$;
	        if (!b[i]) {
	          return +1;
	        }
	        a1 = a[i];
	        b1 = b[i++];
	        if (a1 !== b1) {
	          n = a1 - b1;
	          return isNaN(n) ? a1 > b1
	            ? +1
	            : -1 : n;
	        }
	      }
	      return b[i] ? -1 : 0;
	    };
	  }(),
	  parseToggleArg: function(arg, positives, negatives){
	    return arg.hasAny(positives || ['add', 'on', '+']) || !arg.hasAny(negatives || ['remove', 'off', '-']) && 'toggle';
	  },
	  getUser: function(user){
	    var that, i$, ref$, len$, u, ref1$;
	    if (!user) {
	      return;
	    }
	    if (typeof user === 'object') {
	      if (user.username && user.status) {
	        return user;
	      } else if (user.attributes && user.toJSON) {
	        return user.toJSON();
	      }
	      if (that = user.id && getUser(user.id)) {
	        return that;
	      } else if (that = user.dj || user.user || user.uid) {
	        return getUser(that);
	      }
	      return null;
	    }
	    if (+user) {
	      if (that = typeof users != 'undefined' && users !== null ? typeof users.get == 'function' ? users.get(user) : void 8 : void 8) {
	        return that.toJSON();
	      } else {
	        for (i$ = 0, len$ = (ref$ = API.getUsers()).length; i$ < len$; ++i$) {
	          u = ref$[i$];
	          if (u.id === user) {
	            return u;
	          }
	        }
	      }
	    } else if (typeof user === 'string') {
	      for (i$ = 0, len$ = (ref$ = API.getUsers()).length; i$ < len$; ++i$) {
	        u = ref$[i$];
	        if (u.username === user) {
	          return u;
	        }
	      }
	      user = user.toLowerCase();
	      for (i$ = 0, len$ = (ref$ = API.getUsers()).length; i$ < len$; ++i$) {
	        u = ref$[i$];
	        if (u.username.toLowerCase() === user || ((ref1$ = u.rawun) != null ? ref1$.toLowerCase() : void 8) === user) {
	          return u;
	        }
	      }
	    } else {
	      console.warn("unknown user format", user);
	    }
	  },
	  getUserInternal: function(user){
	    var that, i$, ref$, len$, u;
	    if (!user || !users) {
	      return;
	    }
	    if (typeof user === 'object') {
	      if (that = user.id && getUserInternal(user.id)) {
	        return that;
	      }
	      if (user.attributes) {
	        return user;
	      } else if (that = user.username || user.dj || user.user || user.id) {
	        return getUserInternal(that);
	      }
	      return null;
	    }
	    if (+user) {
	      return users.get(user);
	    } else if (typeof user === 'string') {
	      for (i$ = 0, len$ = (ref$ = users.models).length; i$ < len$; ++i$) {
	        u = ref$[i$];
	        if (u.get('username') === user) {
	          return u;
	        }
	      }
	      user = user.toLowerCase();
	      for (i$ = 0, len$ = (ref$ = users.models).length; i$ < len$; ++i$) {
	        u = ref$[i$];
	        if (u.get('username').toLowerCase() === user || u.get('rawun').toLowerCase() === user) {
	          return u;
	        }
	      }
	    } else {
	      console.warn("unknown user format", user);
	    }
	  },
	  logger: function(loggerName, fn){
	    if (typeof fn === 'function') {
	      return function(){
	        console.log("[" + loggerName + "]", arguments);
	        return fn.apply(this, arguments);
	      };
	    } else {
	      return function(){
	        console.log("[" + loggerName + "]", arguments);
	      };
	    }
	  },
	  replace: function(context, attribute, cb){
	    var key$;
	    context[key$ = attribute + "_"] || (context[key$] = context[attribute]);
	    context[attribute] = cb(context[attribute + "_"]);
	  },
	  loadScript: function(loadedEvent, data, file, callback){
	    var d;
	    d = $.Deferred();
	    if (callback) {
	      d.then(callback);
	    }
	    if (data) {
	      d.resolve();
	    } else {
	      $.getScript(p0ne.host + "/" + file);
	      $(window).one(loadedEvent, d.resolve);
	    }
	    return d.promise();
	  },
	  requireHelper: function(name, test, arg$){
	    var ref$, id, onfail, fallback, module, res;
	    ref$ = arg$ != null ? arg$ : 0, id = ref$.id, onfail = ref$.onfail, fallback = ref$.fallback;
	    if ((module = window[name] || requirejs.s.contexts._.defined[id]) && test(module)) {
	      id = module.requireID;
	      res = module;
	    } else {
	      for (id in ref$ = requirejs.s.contexts._.defined) {
	        module = ref$[id];
	        if (module && test(module, id)) {
	          console.warn("[requireHelper] module '" + name + "' updated to ID '" + id + "'");
	          res = module;
	          break;
	        }
	      }
	    }
	    if (res) {
	      res.requireID = id;
	      if (name) {
	        window[name] = res;
	      }
	      return res;
	    } else {
	      console.error("[requireHelper] could not require '" + name + "'");
	      if (typeof onfail == 'function') {
	        onfail();
	      }
	      if (name) {
	        window[name] = fallback;
	      }
	      return fallback;
	    }
	  },
	  requireAll: function(test){
	    var id, m;
	    return (function(){
	      var ref$, results$ = [];
	      for (id in ref$ = requirejs.s.contexts._.defined) {
	        m = ref$[id];
	        if (m && test(m, id)) {
	          results$.push(m);
	        }
	      }
	      return results$;
	    }());
	  }
	  /* callback gets called with the arguments cb(errorCode, response, event) */,
	  floodAPI_counter: 0,
	  ajax: function(type, url, data, cb){
	    var ref$, success, error, fail, silent, options, def, delay;
	    if (typeof url !== 'string') {
	      ref$ = [type, url, data], url = ref$[0], data = ref$[1], cb = ref$[2];
	      type = (data != null ? data.type : void 8) || 'POST';
	    }
	    if (typeof data === 'function') {
	      success = data;
	      data = null;
	    } else if (typeof cb === 'function') {
	      success = cb;
	    } else if (data && (data.success || data.error)) {
	      success = data.success, error = data.error;
	      delete data.success;
	      delete data.error;
	    } else if (typeof cb === 'object') {
	      if (cb) {
	        success = cb.success, fail = cb.fail;
	      }
	    }
	    if (data) {
	      silent = data.silent;
	      delete data.type;
	      delete data.silent;
	    }
	    options = {
	      type: type,
	      url: "/_/" + url,
	      success: function(data){
	        if (data.data) {
	          data = data.data;
	        }
	        if (!silent) {
	          console.info("[" + url + "]", data);
	        }
	        if (typeof success == 'function') {
	          success(data);
	        }
	      },
	      error: function(err){
	        if (!silent) {
	          console.error("[" + url + "]", data);
	        }
	        if (typeof error == 'function') {
	          error(data);
	        }
	      }
	    };
	    data = JSON.stringify(data);
	    if (data !== "{}" && (type !== 'GET' && type !== 'get')) {
	      options.contentType = 'application/json';
	      options.data = data;
	    }
	    def = $.Deferred();
	    (delay = function(){
	      var req;
	      if (window.floodAPI_counter >= 15) {
	        sleep(1000, delay);
	      } else {
	        window.floodAPI_counter++;
	        sleep(15000, function(){
	          window.floodAPI_counter--;
	        });
	        req = $.ajax(options).then(def.resolve, def.reject, def.progress);
	        def.abort = req.abort;
	      }
	    })();
	    return def;
	  },
	  befriend: function(userID, cb){
	    ajax('POST', "friends", {
	      id: userID
	    }, cb);
	  },
	  ignore: function(userID, cb){
	    ajax('POST', "ignores", {
	      id: userID
	    }, cb);
	  },
	  unignore: function(userID, cb){
	    return ajax('DELETE', "ignores/" + userID, cb);
	  },
	  skipSelf: function(){
	    ajax('POST', "booth/skip/me");
	  },
	  ban: function(userID, duration, cb){
	    var ref$;
	    if (typeof duration !== 'string') {
	      ref$ = [duration, API.BAN.HOUR], cb = ref$[0], duration = ref$[1];
	    }
	    return ajax('POST', "bans/add", {
	      userID: userID,
	      duration: duration,
	      reason: 1
	    }, cb);
	  },
	  banPerma: function(userID, cb){
	    return ajax('POST', "bans/add", {
	      userID: userID,
	      duration: API.BAN.PERMA,
	      reason: 1
	    }, cb);
	  },
	  unban: function(userID, cb){
	    return ajax('DELETE', "bans/" + userID, cb);
	  },
	  modMute: function(userID, duration, cb){
	    var ref$;
	    if (typeof duration !== 'string') {
	      ref$ = [duration, API.MUTE.SHORT], cb = ref$[0], duration = ref$[1];
	    }
	    return ajax('POST', "mutes", {
	      userID: userID,
	      duration: duration,
	      reason: 1
	    }, cb);
	  },
	  modUnmute: function(userID, cb){
	    return ajax('DELETE', "mutes/" + userID, cb);
	  },
	  chatDelete: function(chatID, cb){
	    return ajax('DELETE', "chat/" + chatID, cb);
	  },
	  kick: function(userID, cb){
	    var def;
	    def = $.Deferred();
	    ban(userID).then(function(){
	      API.once('userLeave', function(){
	        sleep(5000, function(){
	          unban(userID, cb).then(def.resolve, def.reject);
	        });
	      });
	    }).fail(def.reject);
	    return def.promise();
	  },
	  addDJ: function(userID, cb){
	    var i$, ref$, len$, u;
	    for (i$ = 0, len$ = (ref$ = API.getWaitList()).length; i$ < len$; ++i$) {
	      u = ref$[i$];
	      if (u.id === userID) {
	        return $.Deferred().resolve('alreadyInWaitlist').then(cb);
	      }
	    }
	    return ajax('POST', "booth/add", {
	      id: userID
	    }, cb);
	  },
	  moveDJ: function(userID, position, cb){
	    var def;
	    def = $.Deferred();
	    addDJ(userID).then(function(){
	      ajax('POST', "booth/move", {
	        userID: userID,
	        position: position
	      }, cb).then(def.resolve, def.reject);
	    }).fail(def.reject);
	    return def.promise();
	  },
	  joinRoom: function(slug){
	    return ajax('POST', 'rooms/join', {
	      slug: slug
	    });
	  },
	  rejoinRoom: function(){
	    return joinRoom(getRoomSlug());
	  },
	  getUserData: function(user, cb){
	    if (typeof user !== 'number') {
	      user = getUser(user).id;
	    }
	    if (API.getUser().guest) {
	      return $.Deferred().reject('insufficientPermissions');
	    } else {
	      return ajax('GET', "users/" + user).then(function(data){
	        data = data.data[0];
	        console.log("[userdata]", data, data.level >= 5 ? "https://plug.dj/@/" + encodeURI(data.slug) : void 8);
	        return data;
	      }).fail(function(){
	        console.warn("couldn't get userdata for user with id '" + user + "'");
	      }).then(cb);
	    }
	  },
	  $djButton: $('#dj-button'),
	  mute: function(){
	    return $('#volume .icon-volume-half, #volume .icon-volume-on').click().length;
	  },
	  muteonce: function(){
	    mute();
	    muteonce.last = API.getMedia().id;
	    API.once('advance', function(){
	      if (API.getMedia().id !== muteonce.last) {
	        unmute();
	      }
	    });
	  },
	  unmute: function(){
	    return $('#playback .snoozed .refresh, #volume .icon-volume-off, #volume .icon-volume-mute-once').click().length;
	  },
	  snooze: function(){
	    return $('#playback .snooze').click().length;
	  },
	  isSnoozed: function(){
	    return $('#playback-controls.snoozed').length !== 0;
	  },
	  refresh: function(){
	    return $('#playback .refresh').click().length;
	  },
	  stream: function(val){
	    if (typeof database == 'undefined' || database === null) {
	      console.error("[p0ne] cannot change stream");
	    } else {
	      if (val !== true && val !== false) {
	        val = database.settings.streamDisabled;
	      }
	      database.settings.streamDisabled = !val;
	      database.save();
	      refresh();
	      return !val;
	    }
	  },
	  join: function(){
	    if ($djButton.hasClass('is-wait')) {
	      $djButton.click();
	      return true;
	    } else {
	      return false;
	    }
	  },
	  forceJoin: function(){
	    ajax('POST', 'booth');
	  },
	  leave: function(){
	    return $('#dj-button.is-leave').click().length !== 0;
	  },
	  $wootBtn: $('#woot'),
	  woot: function(){
	    $wootBtn.click();
	  },
	  $mehBtn: $('#meh'),
	  meh: function(){
	    $mehBtn.click();
	  },
	  recalculateLayout: function(){
	    var isNotQueued;
	    isNotQueued = true;
	    return function(){
	      var isNotQueued;
	      if (isNotQueued) {
	        isNotQueued = false;
	        requestAnimationFrame(function(){
	          if (typeof Layout != 'undefined' && Layout !== null) {
	            Layout.onResize();
	          }
	          if ((typeof PopoutView != 'undefined' && PopoutView !== null) && PopoutView._window) {
	            PopoutView.resizeBind();
	          }
	          isNotQueued = true;
	        });
	      }
	    };
	  }(),
	  ytItags: function(){
	    var resolutions, list, ytItags, i$, len$, format, j$, ref$, len1$, i, itags, startI, k$, ref1$, len2$, itag;
	    resolutions = [72, 144, 240, 360, 480, 720, 1080, 1440, 2160, 2304, 3072, 4320];
	    list = [
	      {
	        ext: 'flv',
	        minRes: 240,
	        itags: ['5']
	      }, {
	        ext: '3gp',
	        minRes: 144,
	        itags: ['17', '36']
	      }, {
	        ext: 'mp4',
	        minRes: 240,
	        itags: ['83', '18,82', '_', '22,84', '85']
	      }, {
	        ext: 'webm',
	        minRes: 360,
	        itags: ['43,100']
	      }, {
	        ext: 'ts',
	        minRes: 240,
	        itags: ['151', '132,92', '93', '94', '95', '96']
	      }
	    ];
	    ytItags = {};
	    for (i$ = 0, len$ = list.length; i$ < len$; ++i$) {
	      format = list[i$];
	      for (j$ = 0, len1$ = (ref$ = format.itags).length; j$ < len1$; ++j$) {
	        i = j$;
	        itags = ref$[j$];
	        if (itags !== '_') {
	          startI = resolutions.indexOf(format.minRes);
	          for (k$ = 0, len2$ = (ref1$ = itags.split(",")).length; k$ < len2$; ++k$) {
	            itag = ref1$[k$];
	            if (resolutions[startI + i] === 2304) {
	              console.log(itag);
	            }
	            ytItags[itag] = {
	              itag: itag,
	              ext: format.ext,
	              type: format.type || 'video',
	              resolution: resolutions[startI + i]
	            };
	          }
	        }
	      }
	    }
	    return ytItags;
	  }(),
	  parseYTDuration: function(){
	    var multiplicators;
	    multiplicators = [0, 31104000, 2592000, 604800, 86400, 3600, 60, 1];
	    return function(str){
	      var duration, that, i$, len$, i, t;
	      duration = 0;
	      if (that = /P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/.exec(str)) {
	        for (i$ = 0, len$ = that.length; i$ < len$; ++i$) {
	          i = i$;
	          t = that[i$];
	          if (+t) {
	            duration += t * multiplicators[i];
	          }
	        }
	      }
	      return duration;
	    };
	  }(),
	  openPlaylistDrawer: function(){
	    $('#playlist-button .icon-playlist').click();
	  },
	  mediaSearch: function(query, provider){
	    /* (optionally) provider can be 0 for youtube or 1 for soundcloud */
	    openPlaylistDrawer();
	    if (provider = ['.youtube', '.soundcloud', '.playlists'][provider]) {
	      $("#search-menu " + provider).click();
	    }
	    $('#search-input-field').val(query).trigger({
	      type: 'keyup',
	      which: provider === '.playlists' ? 0 : 13
	    });
	  },
	  mediaParse: function(media, cb){
	    /* work in progress */
	    var cid, ref$, ref1$;
	    cb || (cb = logger(typeof media === 'string'
	      ? +media
	        ? cb({
	          format: 2,
	          cid: media
	        })
	        : media.length === 11
	          ? cb({
	            format: 1,
	            cid: media
	          })
	          : (cid = (ref$ = YT_REGEX.exec(media)) != null ? ref$[1] : void 8)
	            ? cb({
	              format: 1,
	              cid: cid
	            })
	            : (ref1$ = parseURL(media).hostname) === 'soundcloud.com' || ref1$ === 'i1.sndcdn.com' ? $.getJSON("https://api.soundcloud.com/resolve/", {
	              url: url,
	              client_id: p0ne.SOUNDCLOUD_KEY.then(function(d){
	                cb({
	                  format: 2,
	                  cid: d.id,
	                  data: d
	                });
	              })
	            }) : void 8
	      : typeof media === 'object' && media
	        ? media.toJSON
	          ? cb(media.toJSON())
	          : media.format ? cb(media) : void 8
	        : !media ? cb(API.getMedia()) : void 8));
	    cb();
	  },
	  mediaLookupCache: {},
	  mediaLookup: function(songs, cb){
	    var success, fail, def, isArray, res, l, duplicates, queries, i$, len$, i, media, format, cid, ref$, ref1$, remaining, ytCids_, packs, to$, id, ytCids;
	    if (typeof cb === 'function') {
	      success = cb;
	    } else {
	      if (typeof cb === 'object') {
	        if (cb) {
	          success = cb.success, fail = cb.fail;
	        }
	      }
	      success || (success = function(data){
	        console.info("[mediaLookup] " + ['yt', 'sc'][format - 1] + ":" + cid, data);
	      });
	    }
	    fail || (fail = function(err){
	      console.error("[mediaLookup] couldn't look up", cid, url, cb, err);
	    });
	    def = $.Deferred();
	    def.then(success, fail);
	    if (!(isArray = $.isArray(songs))) {
	      songs = [songs];
	    }
	    res = [];
	    l = 0;
	    duplicates = {};
	    queries = {
	      1: {},
	      2: {}
	    };
	    for (i$ = 0, len$ = songs.length; i$ < len$; ++i$) {
	      i = i$;
	      media = songs[i$];
	      format = false;
	      if (+media) {
	        console.warn("[mediaLookup] warning, media only described by an ID, assuming SoundCloud ID. It is recommended to use {format: 2, cid: id} instead");
	        format = 2;
	        cid = +media;
	      } else if (typeof media === 'string') {
	        if (media.length === 11) {
	          format = 1;
	          cid = media;
	        } else if (cid = (ref$ = YT_REGEX.exec(media)) != null ? ref$[1] : void 8) {
	          format = 1;
	        } else if (media.has('.com') && ((ref1$ = parseURL(media).hostname) === 'soundcloud.com' || ref1$ === 'i1.sndcdn.com')) {
	          format = 2;
	          cid = media;
	        }
	      } else if (typeof media === 'object' && media && media.cid) {
	        if (media.format === 1 || media.format === 2) {
	          format = media.format, cid = media.cid;
	        }
	      }
	      if (!format) {
	        console.warn("[mediaLookup] unknown format", media, "as #" + i + " in", songs);
	        l++;
	        continue;
	      }
	      if (cid in queries[format]) {
	        console.log("[mediaLookup] " + format + " : " + cid + " appears multiple times in the same query");
	        duplicates[l++] = queries[format][cid];
	      } else if (window.mediaLookupCache[cid]) {
	        res[l] = window.mediaLookupCache[cid];
	        clearTimeout(res[l]._timeoutID);
	        res[l]._timeoutID = sleep(5 .min, fn$);
	        l++;
	      } else {
	        queries[format][cid] = l++;
	      }
	    }
	    remaining = 0;
	    ytCids_ = Object.keys(queries[1]);
	    if (ytCids_.length) {
	      remaining += ytCids_.length;
	      if (ytCids_.length > 50) {
	        packs = [];
	        for (i$ = 0, to$ = ~~(ytCids_.length / 50); i$ <= to$; ++i$) {
	          i = i$;
	          packs[i] = [];
	        }
	        for (i$ = 0, len$ = ytCids_.length; i$ < len$; ++i$) {
	          i = i$;
	          id = ytCids_[i$];
	          packs[~~(i / 50)][i % 50] = id;
	        }
	      } else {
	        packs = [ytCids_];
	      }
	      for (i$ = 0, len$ = packs.length; i$ < len$; ++i$) {
	        ytCids = packs[i$];
	        $.getJSON("https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&fields=items(id,contentDetails/duration,contentDetails/regionRestriction,snippet/channelId,snippet/channelTitle,snippet/description,snippet/publishedAt,snippet/title)&id=" + ytCids.join(',') + "&key=" + p0ne.YOUTUBE_V3_KEY).fail(fail).success(fn1$);
	      }
	    }
	    for (i$ in ref1$ = queries[2]) {
	      (fn2$.call(this, i$, ref1$[i$]));
	    }
	    doneLoading();
	    function addResult(pos, cid, data){
	      window.mediaLookupCache[cid] = data;
	      res[pos] = data;
	      return remaining--;
	    }
	    function doneLoading(){
	      var k, ref$, v;
	      if (remaining <= 0) {
	        if (!isArray) {
	          res = res[0];
	        } else {
	          for (k in ref$ = duplicates) {
	            v = ref$[k];
	            res[k] = res[v];
	          }
	        }
	        return def.resolve(res);
	      }
	    }
	    return def.promise();
	    function fn$(){
	      var ref$, ref1$;
	      return ref1$ = (ref$ = window.mediaLookupCache)[cid], delete ref$[cid], ref1$;
	    }
	    function fn1$(arg$){
	      var items, i$, len$, d, duration, author, cid, ref$, l;
	      items = arg$.items;
	      for (i$ = 0, len$ = items.length; i$ < len$; ++i$) {
	        d = items[i$];
	        duration = parseYTDuration(d.contentDetails.duration);
	        author = (typeof auxiliaries != 'undefined' && auxiliaries !== null ? auxiliaries.authorTitle(d.snippet.title).author : void 8) || d.snippet.channelTitle || "?";
	        addResult(queries[1][d.id], d.id, {
	          format: 1,
	          data: d,
	          cid: d.id,
	          uploader: {
	            name: d.snippet.channelTitle,
	            id: d.snippet.channelId,
	            url: "https://www.youtube.com/channel/" + d.snippet.channelId
	          },
	          image: "https://i.ytimg.com/vi/" + d.id + "/0.jpg",
	          author: author,
	          title: d.snippet.title,
	          uploadDate: d.snippet.publishedAt,
	          url: "https://youtube.com/watch?v=" + d.id,
	          description: d.snippet.description,
	          duration: duration,
	          restriction: d.contentDetails.regionRestriction,
	          _timeoutID: sleep(5 .min, fn$)
	        });
	      }
	      for (cid in ref$ = queries[1]) {
	        l = ref$[cid];
	        if (!res[l]) {
	          console.warn("[mediaLookup] failed to look up Youtube video #" + l, cid);
	          addResult(l, cid, {
	            _timeoutID: sleep(5 .min, fn1$)
	          });
	        }
	      }
	      doneLoading();
	      function fn$(){
	        var ref$, key$, ref1$;
	        return ref1$ = (ref$ = window.mediaLookupCache)[key$ = d.id], delete ref$[key$], ref1$;
	      }
	      function fn1$(){
	        var ref$, ref1$;
	        return ref1$ = (ref$ = window.mediaLookupCache)[cid], delete ref$[cid], ref1$;
	      }
	    }
	    function fn2$(cid, pos){
	      var req;
	      remaining++;
	      if (+cid) {
	        req = $.getJSON("https://api.soundcloud.com/tracks/" + cid + ".json", {
	          client_id: p0ne.SOUNDCLOUD_KEY
	        });
	      } else {
	        req = $.getJSON("https://api.soundcloud.com/resolve/", {
	          url: cid,
	          client_id: p0ne.SOUNDCLOUD_KEY
	        });
	      }
	      req.fail(function(){
	        console.warn("[mediaLookup] failed to look up soundcloud song", cid);
	        addResult(pos, cid, {
	          _timeoutID: sleep(5 .min, function(){
	            var ref$, ref1$;
	            return ref1$ = (ref$ = window.mediaLookupCache)[cid], delete ref$[cid], ref1$;
	          })
	        });
	        return doneLoading();
	      }).success(function(d){
	        var author, data;
	        author = (typeof auxiliaries != 'undefined' && auxiliaries !== null ? auxiliaries.authorTitle(d.title).author : void 8) || d.user.username || "?";
	        addResult(pos, d.id, data = {
	          format: 2,
	          data: d,
	          cid: d.id,
	          uploader: {
	            id: d.user.id,
	            name: d.user.username,
	            image: d.user.avatar_url,
	            url: d.user.permalink_url
	          },
	          image: d.artwork_url,
	          author: author,
	          title: d.title,
	          uploadDate: d.created_at,
	          url: d.permalink_url,
	          description: d.description,
	          duration: d.duration / 1000,
	          download: d.download_url ? d.download_url + "?client_id=" + p0ne.SOUNDCLOUD_KEY : false,
	          downloadSize: d.original_content_size,
	          downloadFormat: d.original_format
	        });
	        if (typeof cid === 'number') {
	          data._timeoutID = sleep(5 .min, function(){
	            var ref$, ref1$;
	            return ref1$ = (ref$ = window.mediaLookupCache)[cid], delete ref$[cid], ref1$;
	          });
	        } else {
	          window.mediaLookupCache[data.cid] = data;
	          data._timeoutID = sleep(5 .min, function(){
	            var ref$, ref1$;
	            delete window.mediaLookupCache[data.cid];
	            return ref1$ = (ref$ = window.mediaLookupCache)[cid], delete ref$[cid], ref1$;
	          });
	        }
	        doneLoading();
	      });
	    }
	  },
	  mediaDownload: function(){
	    var regexNormal, regexUnblocked, i$, ref$, len$, key;
	    regexNormal = {};
	    regexUnblocked = {};
	    for (i$ = 0, len$ = (ref$ = ['title', 'url_encoded_fmt_stream_map', 'fmt_list', 'dashmpd', 'errorcode', 'reason']).length; i$ < len$; ++i$) {
	      key = ref$[i$];
	      regexNormal[key] = RegExp(key + '=(.*?)(?:&|$)');
	      regexUnblocked[key] = RegExp('"' + key + '":"(.*?)"');
	    }
	    for (i$ = 0, len$ = (ref$ = ['url', 'itag', 'type', 'fallback_host']).length; i$ < len$; ++i$) {
	      key = ref$[i$];
	      regexNormal[key] = RegExp(key + '=(.*?)(?:&|$)');
	      regexUnblocked[key] = RegExp(key + '=(.*?)(?:\\\\u0026|$)');
	    }
	    return function(media, audioOnly, cb){
	      /* status codes:
	          = success = (resolved)
	          0 - downloads found
	      
	          = error = (rejected)
	          1 - failed to receive video info
	          2 - video info loaded, but no downloads found (video likely blocked)
	          3 - (for audioOnly) dash.mpd found, but no downloads (basically like 2)
	      
	          note: itags are Youtube's code describing the data format
	              https://en.wikipedia.org/wiki/YouTube#Quality_and_formats
	              (click [show] in "Comparison of YouTube media encoding options" to see the whole table)
	       */
	      var ref$, success, error, blocked, format, cid, id, res, ref1$, url;
	      if (!media || typeof media === 'boolean' || typeof media === 'function' || media.success || media.error) {
	        ref$ = [false, media, cb], media = ref$[0], audioOnly = ref$[1], cb = ref$[2];
	      } else if (typeof audioOnly !== 'boolean') {
	        cb = audioOnly;
	        audioOnly = false;
	      }
	      if (typeof cb === 'function') {
	        success = cb;
	      } else if (cb) {
	        success = cb.success, error = cb.error;
	      }
	      if (media != null && media.attributes) {
	        blocked = media.blocked;
	        media = media.attributes;
	      } else if (!media) {
	        media = API.getMedia();
	        blocked = 0;
	      } else {
	        blocked = media.blocked;
	      }
	      format = media.format, cid = media.cid, id = media.id;
	      media.blocked = blocked = +blocked || 0;
	      if (format === 2) {
	        audioOnly = true;
	      }
	      res = $.Deferred();
	      res.then(function(data){
	        data.blocked = blocked;
	        if (audioOnly) {
	          return media.downloadAudio = data;
	        } else {
	          return media.download = data;
	        }
	      }).fail(function(err, status){
	        if (status) {
	          err = {
	            status: 1,
	            message: "network error or request rejected"
	          };
	        }
	        err.blocked = blocked;
	        if (audioOnly) {
	          return media.downloadAudioError = err;
	        } else {
	          return media.downloadError = err;
	        }
	      }).then(success || logger('mediaDownload')).fail(error || logger('mediaDownloadError'));
	      if (audioOnly) {
	        if (((ref$ = media.downloadAudio) != null ? ref$.blocked : void 8) === blocked) {
	          return res.resolve(media.downloadAudio);
	        }
	        if (media.downloadAudioError) {
	          return res.reject(media.downloadAudioError);
	        }
	      } else {
	        if (media.download) {
	          return res.resolve(media.download);
	        }
	        if (((ref1$ = media.downloadError) != null ? ref1$.blocked : void 8) === blocked) {
	          return res.reject(media.downloadError);
	        }
	      }
	      cid || (cid = id);
	      if (format === 1) {
	        if (blocked === 2) {
	          url = p0ne.proxy("http://vimow.com/watch?v=" + cid);
	        } else if (blocked) {
	          url = p0ne.proxy("https://www.youtube.com/watch?v=" + cid);
	        } else {
	          url = p0ne.proxy("https://www.youtube.com/get_video_info?video_id=" + cid);
	        }
	        console.info("[mediaDownload] YT lookup", url);
	        $.ajax({
	          url: url,
	          error: res.reject,
	          success: function(d){
	            var file, files, bestVideo, bestVideoSize, that, title, i$, ref$, len$, src, resolution, mimeType, ref1$, key$, video, get, basename, error, fmt_list_, url, fallback_host, itag, format, fmt_list, j$, len1$, e, original_url;
	            file = d;
	            files = {};
	            bestVideo = null;
	            bestVideoSize = 0;
	            if (blocked === 2) {
	              if (that = d.match(/<title>(.*?) - vimow<\/title>/)) {
	                title = htmlUnescape(that[1]);
	              } else {
	                title = cid;
	              }
	              files = {};
	              for (i$ = 0, len$ = (ref$ = d.match(/<source .*?>/g) || []).length; i$ < len$; ++i$) {
	                file = ref$[i$];
	                src = /src='(.*?)'/.exec(file);
	                resolution = /src='(.*?)'/.exec(file);
	                mimeType = /src='(\w+\/(\w+))'/.exec(file);
	                if (that = src && resolution && mimeType) {
	                  (ref1$ = files[key$ = that[5]] || (files[key$] = []))[ref1$.length] = video = {
	                    url: src[1],
	                    resolution: resolution[1],
	                    mimeType: mimeType[1],
	                    file: "basename." + mimeType[2]
	                  };
	                  if (that[2] > bestVideoSize) {
	                    bestVideo = video;
	                    bestVideoSize = video.resolution;
	                  }
	                }
	              }
	              if (bestVideo) {
	                files.preferredDownload = bestVideo;
	                files.status = 0;
	                console.log("[mediaDownload] resolving", files);
	                res.resolve(files);
	              } else {
	                console.warn("[mediaDownload] vimow.com loaded, but no downloads found");
	                res.reject({
	                  status: 2,
	                  message: 'no downloads found'
	                });
	              }
	              return;
	            } else if (blocked) {
	              get = function(key){
	                var val;
	                val = (file || d).match(regexUnblocked[key]);
	                if (key === 'url' || key === 'itag' || key === 'type' || key === 'fallback_host') {
	                  return decodeURIComponent(val[1]);
	                }
	                if (val) {
	                  return val[1];
	                }
	              };
	              basename = get('title') || cid;
	            } else {
	              get = function(key, unescape){
	                var val;
	                val = file.match(regexNormal[key]);
	                if (val) {
	                  if (unescape) {
	                    val = val[1].replace(/\++/g, ' ');
	                  }
	                  return decodeURIComponent(val[1]);
	                }
	              };
	              if (error = get('errorcode')) {
	                switch (+error) {
	                case 150:
	                  console.error("[mediaDownload] video_info error 150! Embedding not allowed on some websites");
	                  break;
	                default:
	                  console.error("[mediaDownload] video_info error " + error + "! unkown error code", get('reason', true));
	                }
	              } else {
	                basename = get('title', true) || cid;
	              }
	            }
	            if (!audioOnly) {
	              fmt_list_ = get('fmt_list');
	              if (that = get('url_encoded_fmt_stream_map')) {
	                for (i$ = 0, len$ = (ref$ = that.split(",")).length; i$ < len$; ++i$) {
	                  file = ref$[i$];
	                  url = get('url');
	                  if (that = file.match(/fallback_host=(.*?)(?:\\u0026|$)/)) {
	                    fallback_host = unescape(that[1]);
	                  }
	                  itag = get('itag');
	                  if (that = ytItags[itag]) {
	                    format = that;
	                  } else {
	                    if (!fmt_list) {
	                      fmt_list = {};
	                      if (fmt_list_) {
	                        for (j$ = 0, len1$ = (ref1$ = fmt_list_.split(',')).length; j$ < len1$; ++j$) {
	                          e = ref1$[j$];
	                          e = e.split('/');
	                          fmt_list[e[0]] = e[1].split('x')[1];
	                        }
	                      } else {
	                        console.warn("[mediaDownload] no fmt_list found");
	                      }
	                    }
	                    if (that = fmt_list[itag] && get('type')) {
	                      format = {
	                        itag: itag,
	                        type: that[1],
	                        ext: that[2],
	                        resolution: fmt_list[itag]
	                      };
	                      console.warn("[mediaDownload] unknown itag found, found in fmt_list", itag);
	                    }
	                  }
	                  if (format) {
	                    original_url = url;
	                    url = url.replace(/^.*?googlevideo\.com/, "https://" + fallback_host);
	                    (ref1$ = files[key$ = format.ext] || (files[key$] = []))[ref1$.length] = video = {
	                      file: basename + "." + format.ext,
	                      url: url,
	                      original_url: original_url,
	                      fallback_host: fallback_host,
	                      mimeType: format.type + "/" + format.ext,
	                      resolution: format.resolution,
	                      itag: format.itag
	                    };
	                    if (format.resolution > bestVideoSize) {
	                      bestVideo = video;
	                      bestVideoSize = video.resolution;
	                    }
	                  } else {
	                    console.warn("[mediaDownload] unknown itag found, not in fmt_list", itag);
	                  }
	                }
	              }
	              if (bestVideo) {
	                files.preferredDownload = bestVideo;
	                files.status = 0;
	                console.log("[mediaDownload] resolving", files);
	                res.resolve(files);
	              } else {
	                console.warn("[mediaDownload] no downloads found");
	                res.reject({
	                  status: 2,
	                  message: 'no downloads found'
	                });
	              }
	            } else {
	              if (that = blocked && d.match(/"dashmpd":"(.*?)"/)) {
	                url = p0ne.proxy(that[1].replace(/\\\//g, '/'));
	              } else if (that = d.match(/dashmpd=(http.+?)(?:&|$)/)) {
	                url = p0ne.proxy(unescape(that[1]));
	              }
	              if (url) {
	                console.info("[mediaDownload] DASHMPD lookup", url);
	                $.get(url).then(function(dashmpd){
	                  var $dash, bestVideo;
	                  $dash = jQuery(
	                  $.parseXML(
	                  dashmpd));
	                  $dash.find('AdaptationSet').each(function(){
	                    var $set, mimeType, type, ext, l;
	                    $set = $(this);
	                    mimeType = $set.attr('mimeType');
	                    type = mimeType.substr(0, 5);
	                    if (type !== 'audio') {
	                      return;
	                    }
	                    if (mimeType === 'audio/mp4') {
	                      ext = 'm4a';
	                    } else {
	                      ext = mimeType.substr(6);
	                    }
	                    files[mimeType] = [];
	                    l = 0;
	                    $set.find('BaseURL').each(function(){
	                      var $baseurl, $representation, m;
	                      $baseurl = $(this);
	                      $representation = $baseurl.parent();
	                      files[mimeType][l++] = m = {
	                        file: basename + "." + ext,
	                        url: httpsify($baseurl.text()),
	                        mimeType: mimeType,
	                        size: $baseurl.attr('yt:contentLength') / 1000000,
	                        samplingRate: $representation.attr('audioSamplingRate') + "Hz"
	                      };
	                      if (audioOnly && (!bestVideo || ~~m.size > ~~bestVideo.size) && (window.chrome || mimeType !== 'audio/webm')) {
	                        bestVideo = m;
	                      }
	                    });
	                  });
	                  if (bestVideo) {
	                    files.preferredDownload = bestVideo;
	                    files.status = 0;
	                    console.log("[mediaDownload] resolving", files);
	                    res.resolve(files);
	                  } else {
	                    console.warn("[mediaDownload] dash.mpd found, but no downloads");
	                    res.reject({
	                      status: 3,
	                      message: 'dash.mpd found, but no downloads'
	                    });
	                  }
	                  /*
	                  html = ""
	                  for mimeType, files of res
	                      html += "<h3 class=AdaptationSet>#mimeType</h3>"
	                      for f in files
	                          html += "<a href='#{$baseurl.text!}' download='#file' class='download"
	                          html += " preferred-download" if f.preferredDownload
	                          html += "'>#file</a> (#size; #{f.samplingRate || f.resolution})<br>"
	                  */
	                }).fail(res.reject);
	              } else {
	                console.error("[mediaDownload] no download found");
	                res.reject("no download found");
	              }
	            }
	          }
	        });
	      } else if (format === 2) {
	        audioOnly = true;
	        mediaLookup(media).then(function(d){
	          var ref$;
	          if (d.download) {
	            res.resolve(media.downloadAudio = (ref$ = {}, ref$[d.downloadFormat] = {
	              url: d.download,
	              size: d.downloadSize
	            }, ref$));
	          } else {
	            res.reject("download disabled");
	          }
	        }).fail(res.reject);
	      } else {
	        console.error("[mediaDownload] unknown format", media);
	        res.reject("unknown format");
	      }
	      return res.promise();
	    };
	  }(),
	  createPlaylist: function(name, media){
	    if (!window.playlists) {
	      throw new Error("createPlaylist(name, media) requires `window.playlists`");
	    }
	    ajax('POST', 'playlists', {
	      name: name,
	      media: media
	    }).then(function(pl){
	      playlists.push(new Backbone.Model(pl.data[0]));
	      playlists.sort();
	      console.log("added playlist " + name + " [" + pl.id + "]");
	    }).fail(function(err){
	      console.error("failed to add playlist " + name, err);
	    });
	  },
	  proxify: function(url){
	    if (typeof url.startsWith == 'function' && url.startsWith("http:")) {
	      return p0ne.proxy(url);
	    } else {
	      return url;
	    }
	  },
	  httpsify: function(url){
	    return url.replace(/^(http:)?:\/\//, "https://");
	  },
	  getChatText: function(cid){
	    if (!cid) {
	      return $();
	    } else {
	      return get$cms().find(".text.cid-" + cid);
	    }
	  },
	  getChat: function(cid){
	    if (typeof cid === 'object') {
	      return cid.$el || (cid.$el = getChat(cid.cid));
	    } else {
	      return getChatText(cid).parent().parent();
	    }
	  },
	  isMention: function(msg, nameMentionOnly){
	    var user, ref$, fromUser;
	    user = API.getUser();
	    if (nameMentionOnly) {
	      return (ref$ = msg.isMentionName) != null
	        ? ref$
	        : msg.isMentionName = msg.message.has("@" + user.rawun);
	    }
	    fromUser = msg.from || (msg.from = getUser(msg) || {});
	    return (ref$ = msg.isMention) != null
	      ? ref$
	      : msg.isMention = user.rawun && msg.message.has("@" + user.rawun) || fromUser.id !== userID && ((fromUser.gRole || fromUser.role >= 4) && msg.message.has("@everyone") || (fromUser.gRole || fromUser.role >= 2) && (user.role > 1 && (msg.message.has("@staff") || user.role === 1 && msg.message.has("@rdjs") || user.role === 2 && msg.message.has("@bouncers") || user.role === 3 && msg.message.has("@managers") || user.role === 4 && msg.message.has("@hosts")) || msg.message.has("@djs") && API.getWaitListPosition() !== -1));
	    /*
	    // for those of you looking at the compiled Javascript, have some readable code instead:
	    return (ref$ = msg.isMention) != null ? ref$ : msg.isMention =
	        msg.message.has("@" + user.rawun)
	        || fromUser.id !== userID && (
	            (fromUser.gRole || fromUser.role >= 4) && msg.message.has("@everyone") // @everyone is co-host+
	            || (fromUser.gRole || fromUser.role >= 2) && ( // all other special mentions are bouncer+
	                user.role > 1 && ( // if the user is staff
	                    msg.message.has("@staff")
	                    || user.role === 1 && msg.message.has("@rdjs")
	                    || user.role === 2 && msg.message.has("@bouncers")
	                    || user.role === 3 && msg.message.has("@managers")
	                    || user.role === 4 && msg.message.has("@hosts")
	                ) || msg.message.has("@djs") && API.getWaitListPosition() !== -1 // if the user is in the waitlist
	            )
	        );
	     */
	  },
	  getMentions: function(msg, options){
	    var checkGenerics, mentions, l, i$, to$, offset, roles, users, msgLength, user, selfRole, hasGeneric, regxWordBoundary, possibleMatches, l2, mention, i, j$, possibleMatchesNext, char, k$, len$, m, nextChar, str, k, v, ids, regx, that, mentionsOld, res$, x$, mentionsLength, idsLength, nextMention, nextID, o, res, uniqueCache, expanded, len1$, u, ref$;
	    options == null && (options = {});
	    if (typeof msg === 'string') {
	      msg = {
	        message: msg
	      };
	      checkGenerics = 5;
	    }
	    if (options.expandGenerics) {
	      options.generics = true;
	    }
	    if (msg.p0mentions && msg.p0mentions.message === msg.message) {
	      mentions = msg.p0mentions;
	    } else {
	      mentions = msg.p0mentions = [];
	      l = 0;
	      msg.p0mentions.expandedGenerics = {};
	      for (i$ = 0, to$ = msg.message.length; i$ < to$; ++i$) {
	        offset = i$;
	        if (msg.message[offset] === "@") {
	          roles = {
	            everyone: 0,
	            djs: 0,
	            rdjs: 1,
	            staff: 2,
	            bouncers: 2,
	            managers: 3,
	            hosts: 4
	          };
	          users = API.getUsers();
	          msgLength = msg.message.length;
	          if (!checkGenerics) {
	            checkGenerics = msg.user || getUser(msg);
	            checkGenerics && (checkGenerics = checkGenerics.gRole
	              ? 5
	              : checkGenerics.role);
	          }
	          user = API.getUser();
	          selfRole = user.gRole
	            ? 5
	            : user.role;
	          hasGeneric = false;
	          regxWordBoundary = /^\w\b|^\W/;
	          break;
	        }
	      }
	      for (i$ = offset, to$ = msg.message.length; i$ < to$; ++i$) {
	        offset = i$;
	        if (msg.message[offset] === "@") {
	          possibleMatches = users;
	          l2 = users.length;
	          mention = null;
	          i = 1;
	          for (j$ = 1; j$ < msgLength; ++j$) {
	            i = j$;
	            possibleMatchesNext = [];
	            l2 = 0;
	            char = msg.message[offset + i];
	            for (k$ = 0, len$ = possibleMatches.length; k$ < len$; ++k$) {
	              m = possibleMatches[k$];
	              if (m.rawun[i - 1] === char) {
	                if (m.rawun.length !== i) {
	                  possibleMatchesNext[l2++] = m;
	                } else {
	                  nextChar = msg.message[offset + i + 1];
	                  if (!nextChar || regxWordBoundary.test(char + "" + nextChar)) {
	                    mention = importAll$({}, m);
	                  }
	                }
	              }
	            }
	            possibleMatches = possibleMatchesNext;
	            if (possibleMatches.length === 0) {
	              break;
	            }
	          }
	          if (!mention && checkGenerics >= 3) {
	            str = msg.message.substr(offset + 1, 8);
	            for (k in roles) {
	              v = roles[k];
	              if (str.startsWith(k) && (k !== 'everyone' || checkGenerics >= 4)) {
	                hasGeneric = true;
	                mention = {
	                  generic: k,
	                  id: 0,
	                  role: v,
	                  rawun: k,
	                  username: k,
	                  isSelf: v === 0 || v === selfRole
	                };
	                break;
	              }
	            }
	          }
	          if (mention) {
	            mention.offset = offset;
	            mentions[l++] = mention;
	          }
	        }
	      }
	    }
	    if (options.ids) {
	      if (!(ids = msg.p0mentions.ids)) {
	        ids = msg.p0mentions.ids = [];
	        l2 = 0;
	        regx = /\d+/g;
	        while (m = regx.exec(msg.message)) {
	          if (that = getUser(m[0])) {
	            that.offset = m.index;
	            that.isID = true;
	            ids[l2++] = that;
	          }
	        }
	      }
	      res$ = [];
	      for (i$ = 0, len$ = mentions.length; i$ < len$; ++i$) {
	        x$ = mentions[i$];
	        res$.push(x$);
	      }
	      mentionsOld = res$;
	      l = 0;
	      mentionsLength = mentions.length;
	      idsLength = ids.length;
	      nextMention = mentions[0];
	      nextID = ids[0];
	      i = 0;
	      o = 0;
	      while (i < mentionsLength && o < idsLength) {
	        if (nextMention.offset < nextID.offset) {
	          mentions[l++] = nextMention;
	          nextMention = mentionsOld[i++];
	        } else {
	          mentions[l++] = nextID;
	          nextID = ids[o++];
	        }
	      }
	      while (i < mentionsLength) {
	        mentions[l++] = mentionsOld[i++];
	      }
	      while (o < idsLength) {
	        mentions[l++] = ids[o++];
	      }
	    }
	    res = [];
	    l = 0;
	    if (options.unique) {
	      uniqueCache = {};
	    }
	    for (i$ = 0, len$ = mentions.length; i$ < len$; ++i$) {
	      mention = mentions[i$];
	      if (mention.generic && !options.generics || mention.isID && !options.ids) {
	        continue;
	      }
	      if (mention.generic && options.expandGenerics) {
	        expanded = [];
	        l2 = 0;
	        for (j$ = 0, len1$ = users.length; j$ < len1$; ++j$) {
	          u = users[j$];
	          if (u.role && u.role === mention.role || u.role === 5 && mention.role === 4 || mention.generic === 'staff' && u.role || mention.generic === 'everyone' || mention.generic === 'djs' && ((ref$ = u.isInWl) != null
	            ? ref$
	            : u.isInWl = API.getWaitList(u.id) !== -1)) {
	            expanded[l2++] = u;
	            if (!options.unique) {
	              res[l++] = (ref$ = clone$(u), ref$.offset = mention.offset, ref$);
	            } else if (!(u.id in uniqueCache)) {
	              uniqueCache[u.id] = true;
	              res[l++] = u;
	            }
	          }
	        }
	        continue;
	      }
	      m = clone$(mention);
	      if (options.unique) {
	        if (!(mention.id in uniqueCache)) {
	          uniqueCache[mention.id] = true;
	          m.offset = null;
	        } else {
	          continue;
	        }
	      }
	      res[l++] = m;
	    }
	    if (l === 0 && options.defaultToSelf) {
	      res = [user || API.getUser()];
	    }
	    res.toString = function(){
	      var res, res$, i$, len$, user;
	      res$ = [];
	      for (i$ = 0, len$ = (this).length; i$ < len$; ++i$) {
	        user = (this)[i$];
	        res$.push("@" + user.rawun);
	      }
	      res = res$;
	      return humanList(res);
	    };
	    return res;
	  },
	  isMessageVisible: function($msg){
	    var ref$;
	    if (typeof msg === 'string') {
	      $msg = getChat($msg);
	    }
	    if ($msg != null && $msg.length) {
	      return get$cm().height() > (ref$ = $msg.offset().top) && ref$ > 101;
	    } else {
	      return false;
	    }
	  },
	  escapeRegExp: function(str){
	    return (str + "").replace(/[\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:]/g, "\\$&");
	  },
	  htmlEscapeMap: {sp: 32, blank: 32, excl: 33, quot: 34, num: 35, dollar: 36, percnt: 37, amp: 38, apos: 39, lpar: 40, rpar: 41, ast: 42, plus: 43, comma: 44, hyphen: 45, dash: 45, period: 46, sol: 47, colon: 58, semi: 59, lt: 60, equals: 61, gt: 62, quest: 63, commat: 64, lsqb: 91, bsol: 92, rsqb: 93, caret: 94, lowbar: 95, lcub: 123, verbar: 124, rcub: 125, tilde: 126, sim: 126, nbsp: 160, iexcl: 161, cent: 162, pound: 163, curren: 164, yen: 165, brkbar: 166, sect: 167, uml: 168, die: 168, copy: 169, ordf: 170, laquo: 171, not: 172, shy: 173, reg: 174, hibar: 175, deg: 176, plusmn: 177, sup2: 178, sup3: 179, acute: 180, micro: 181, para: 182, middot: 183, cedil: 184, sup1: 185, ordm: 186, raquo: 187, frac14: 188, half: 189, frac34: 190, iquest: 191},
	  htmlEscape: function(str){
	    return $dummy.text(str).html();
	  },
	  htmlUnescape: function(html){
	    return html.replace(/&(\w+);|&#(\d+);|&#x([a-fA-F0-9]+);/g, function(_, a, b, c){
	      return String.fromCharCode(+b || htmlEscapeMap[a] || parseInt(c, 16)) || _;
	    });
	  },
	  stripHTML: function(msg){
	    return msg.replace(/<.*?>/g, '');
	  },
	  resolveRTL: function(str, dontJoin){
	    var left, right, isRTL;
	    left = right = "";
	    isRTL = false;
	    str.replace(/(.*?)(\u202e|\u202d|$)/g, function(_, pre, overrideChar){
	      if (isRTL) {
	        right += pre;
	      } else {
	        left += pre;
	      }
	      isRTL = overrideChar === '\u202e';
	      return _;
	    });
	    right = right.reverse();
	    if (dontJoin) {
	      return [left, right];
	    } else {
	      return left + right;
	    }
	  },
	  collapseWhitespace: function(str){
	    return str.replace(/\s+/g, ' ');
	  },
	  cleanMessage: function(str){
	    return collapseWhitespace(
	    resolveRTL(
	    htmlUnescape(
	    stripHTML(
	    str))));
	  },
	  formatPlainText: function(text){
	    var lvl;
	    lvl = 0;
	    text = text.replace(/([\s\S]*?)($|(?:https?:|www\.)(?:\([^\s\]\)]*\)|\[[^\s\)\]]*\]|[^\s\)\]]+))+([\.\?\!\,])?/g, function(arg$, pre, url, post){
	      pre = pre.replace(/(\s)(".*?")([\.,!\?\s])/g, "$1<i class='song-description-string'>$2</i>$3").replace(/(\s)(\*\w+\*)(\s)/g, "$1<b>$2</b>$3").replace(/(lyrics|download|original|re-?upload)/gi, "<b>$1</b>").replace(/(\s)(0x)([0-9a-fA-F]+)|(#)([\d\-]+)(\s)/g, "$1<i class='song-description-comment'>$2$4</i><b class='song-description-number'>$3$5</b>$6").replace(/(\s)(\d+)(\w*|%|\+)(\s)/g, "$1<b class='song-description-number'>$2</b><i class='song-description-comment'>$3</i>$4").replace(/(\s)(\d+)(\s)/g, "$1<b class='song-description-number'>$2</b>$3").replace(/^={5,}$/mg, "<hr class='song-description-hr-double' />").replace(/^[\-~_]{5,}$/mg, "<hr class='song-description-hr' />").replace(/^[\[\-=~_]+.*?[\-=~_\]]+$/mg, "<b class='song-description-heading'>$&</b>");
	      if (!url) {
	        return pre;
	      } else {
	        return pre + "<a href='" + url + "' target=_blank>" + url + "</a>" + (post || '');
	      }
	    });
	    if (lvl) {
	      text += "</i>";
	    }
	    return text.replace(/\n/g, '<br>');
	  },
	  isColor: function(str){
	    $dummy[0].style.color = "";
	    $dummy[0].style.color = str;
	    return $dummy[0].style.color !== "";
	  },
	  isURL: function(str, urlWrapped){
	    if (typeof str !== 'string') {
	      return false;
	    }
	    str = str.trim().replace(/\\\//g, '/');
	    if (!str.has('//')) {
	      return false;
	    }
	    if (urlWrapped && str.startsWith('url(') && str[str.length - 1] === ')') {
	      str = str.substr(4, -1).trim();
	      if (str[0] === str[str.length - 1] && (str[0] === '"' || str[0] === '\'')) {
	        str = str.substr(1, -1);
	      }
	    }
	    if (parseURL(str).host === location.host) {
	      return false;
	    } else if (urlWrapped) {
	      return "url(" + str + ")";
	    } else {
	      return str;
	    }
	  },
	  humanList: function(arr){
	    if (!arr.length) {
	      return "";
	    }
	    arr = importAll$([], arr);
	    if (arr.length > 1) {
	      arr[arr.length - 2] += " and\xa0" + arr.pop();
	    }
	    return arr.join(", ");
	  },
	  mention: function(list){
	    var res, res$, i$, len$, i, ref$;
	    if (!(list != null && list.length)) {
	      return "";
	    } else if (list[0].username) {
	      res$ = [];
	      for (i$ = 0, len$ = list.length; i$ < len$; ++i$) {
	        i = i$;
	        res$.push("@" + list[i].username);
	      }
	      res = res$;
	    } else if ((ref$ = list[0].attributes) != null && ref$.username) {
	      res$ = [];
	      for (i$ = 0, len$ = list.length; i$ < len$; ++i$) {
	        i = i$;
	        res$.push("@" + list[i].get('username'));
	      }
	      res = res$;
	    } else {
	      res$ = [];
	      for (i$ = 0, len$ = list.length; i$ < len$; ++i$) {
	        i = i$;
	        res$.push("@" + list[i]);
	      }
	      res = res$;
	    }
	    return humanList;
	  },
	  plural: function(num, singular, plural){
	    plural == null && (plural = singular + "s");
	    if (num === 1) {
	      return num + "\xa0" + singular;
	    } else {
	      return num + "\xa0" + plural;
	    }
	  },
	  xth: function(i){
	    var ld;
	    ld = i % 10;
	    switch (true) {
	    case i % 100 - ld === 10:
	      i + "th";
	      break;
	    case ld === 1:
	      return i + "st";
	    case ld === 2:
	      return i + "nd";
	    case ld === 3:
	      return i + "rd";
	    }
	    return i + "th";
	  },
	  roleSum: function(user){
	    return user.role + 10 * user.gRole;
	  },
	  flag: function(language, unicode){
	    /*@security HTML injection possible, if Lang.languages[language] is maliciously crafted*/
	    var title;
	    if (!language) {
	      language = 'unknown';
	      title = "can't determine language";
	    } else {
	      title = typeof Lang != 'undefined' && Lang !== null ? Lang.languages[language] : void 8;
	    }
	    return "<span class='flag flag-" + language + "' title=\"" + title + "\"></span>";
	  },
	  formatUser: function(user, showModInfo){
	    var info, d;
	    if (user.toJSON) {
	      user = user.toJSON();
	    }
	    info = getRank(user, true);
	    if (info === 'regular') {
	      info = "";
	    } else {
	      info = " " + info;
	    }
	    if (showModInfo) {
	      info += " lvl " + (user.gRole === 5
	        ? '∞'
	        : user.level);
	      if (Date.now() - 48 .h < (d = parseISOTime(user.joined))) {
	        info += " - created " + ago(d);
	      }
	    }
	    return user.username + " (" + user.language + info + ")";
	  },
	  formatUserHTML: function(user, fromClass, options){
	    /*@security no HTML injection should be possible, unless user.rawun or .id is improperly modified*/
	    var warning, d, info, rank, userFlag;
	    user = getUser(user);
	    if (typeof fromClass === 'object') {
	      options = fromClass;
	      fromClass = options.classes == null || options.classes;
	    } else if (!options) {
	      options = {};
	      fromClass = true;
	    }
	    warning = options.warn && Date.now() - 48 .h < (d = parseISOTime(user.joined)) ? "created " + ago(d) : "";
	    info = options.lvl && user.isStaff
	      ? " (lvl " + (user.gRole === 5
	        ? '∞'
	        : user.level) + (warning ? ' - ' + warning : '') + ")"
	      : warning ? " (" + warning + ")" : void 8;
	    if (fromClass) {
	      rank = getRankIcon(user);
	      fromClass = " " + getUserClasses(user, false);
	    } else {
	      fromClass = rank = "";
	    }
	    userFlag = options.flag ? flag(user.language) : "";
	    return "<span class='un p0ne-name" + fromClass + "' data-uid='" + user.id + "'>" + rank + " <span class=name>" + user.rawun + "</span>" + userFlag + (info || '') + "</span>";
	  },
	  formatUserSimple: function(user){
	    return "<span class=un data-uid='" + user.id + "'>" + user.rawun + "</span>";
	  },
	  timezoneOffset: new Date().getTimezoneOffset(),
	  getTime: function(t){
	    t == null && (t = Date.now());
	    return new Date(t - timezoneOffset * 60000).toISOString().replace(/.+?T|\..+/g, '');
	  },
	  getDateTime: function(t){
	    t == null && (t = Date.now());
	    return new Date(t - timezoneOffset * 60000).toISOString().replace(/T|\..+/g, ' ');
	  },
	  getDate: function(t){
	    t == null && (t = Date.now());
	    return new Date(t - timezoneOffset * 60000).toISOString().replace(/T.+/g, '');
	  },
	  getISOTime: function(t){
	    t == null && (t = new Date);
	    return t.toISOString().replace(/T|\..+/g, " ");
	  },
	  parseISOTime: function(t){
	    return new Date(t) - timezoneOffset * 60000;
	  },
	  humanTime: function(diff, shortFormat){
	    var b, c;
	    if (diff < 0) {
	      return "-" + humanTime(-diff);
	    } else if (!shortFormat && diff < 2000) {
	      return "just now";
	    }
	    b = [60, 60, 24, 360.25];
	    c = 0;
	    diff /= 1000;
	    while (diff > 2 * b[c]) {
	      diff /= b[c++];
	    }
	    if (shortFormat) {
	      return Math.round(diff) + "" + 'smhdy'[c];
	    } else {
	      return Math.round(diff) + " " + ['seconds', 'minutes', 'hours', 'days', 'years'][c];
	    }
	  },
	  mediaTime: function(dur){
	    var m, h;
	    if (dur < 0) {
	      return "-" + mediaTime(-dur);
	    }
	    m = 0;
	    if (dur >= 60) {
	      m = ~~(dur / 60);
	      dur %= 60;
	      if (m >= 60) {
	        h = ~~(m / 60);
	        m %= 60;
	      }
	    }
	    return (h ? pad(h) + ":" : '') + "" + pad(m) + ":" + pad(~~dur);
	  },
	  ago: function(d){
	    d = Date.now() - d;
	    if (d < 2000) {
	      return "just now";
	    } else {
	      return humanTime(d) + " ago";
	    }
	  },
	  formatMB: function(it){
	    return it.toFixed(2) + "MB";
	  },
	  getRank: function(user, defaultToGhost){
	    var that;
	    if (user <= 5) {
	      user = {
	        role: user
	      };
	    } else if (typeof user !== 'object') {
	      user = getUser(user);
	    } else if ('attributes' in user) {
	      user = user.toJSON();
	    }
	    if (!user || user.role === -1) {
	      return defaultToGhost ? 'ghost' : 'regular';
	    } else if (that = user.gRole) {
	      return that === 5 ? 'admin' : 'ambassador';
	    } else {
	      return ['regular', 'dj', 'bouncer', 'manager', 'cohost', 'host'][user.role || 0];
	    }
	  },
	  getRankIcon: function(user){
	    var rank;
	    rank = getRank(user, true);
	    return rank !== 'regular' && "<i class='icon icon-chat-" + rank + " p0ne-icon-small'></i>" || '';
	  },
	  getUserClasses: function(u, inclExtra, inclFrom){
	    var rank, res;
	    if (inclFrom) {
	      inclFrom = "from-";
	    } else {
	      inclFrom = "";
	    }
	    if (!u || !(u = getUser(u) || (typeof staff != 'undefined' && staff !== null ? staff[u.uid || u.id || u] : void 8))) {
	      return "";
	    }
	    rank = getRank(u, true);
	    res = inclFrom + "" + rank;
	    if (u.id === userID) {
	      res += " " + inclFrom + "you";
	    }
	    if (inclExtra) {
	      if (u.role > 1 || u.gRole) {
	        res += " " + inclFrom + "staff";
	      }
	      if (u.sub) {
	        res += " " + inclFrom + "subscriber";
	      }
	      if (u.friend) {
	        res += " " + inclFrom + "friend";
	      }
	    }
	    return res;
	  },
	  parseURL: function(href, relative){
	    var a;
	    if (!relative && !href.has('//')) {
	      href = "//";
	    }
	    a = document.createElement('a');
	    a.href = href;
	    return a;
	  },
	  getIcon: function(){
	    /* note: this function doesn't cache results, as it's expected to not be used often (only in module setups)
	     * if you plan to use it over and over again, use `getIcon.enableCaching()` */
	    var $icon, fn;
	    $icon = $("<i class=icon><!-- this is used by plug_p0ne's getIcon() --></i>").css({
	      visibility: 'hidden'
	    }).appendTo('body');
	    fn = function(className, parsed){
	      var res, res2, that;
	      $icon.addClass(className);
	      res = {
	        image: $icon.css('background-image'),
	        position: $icon.css('background-position')
	      };
	      if (className) {
	        $icon.removeClass(className);
	      }
	      if (parsed) {
	        res2 = {
	          x: 0,
	          y: 0,
	          url: res.image.substring(4, res.image.length - 1)
	        };
	        if (that = /-?(\d+)px\s+-?(\d+)px/.exec(res.position)) {
	          res2.x = +that[1];
	          res2.y = +that[2];
	        }
	        return res2;
	      } else {
	        res.background = res.image + " " + res.position;
	        return res;
	      }
	    };
	    fn.enableCaching = function(){
	      window.getIcon = _.memoize(fn);
	    };
	    return fn;
	  }(),
	  hidePanels: function(doNotTrigger_$contextEvent){
	    if (!doNotTrigger_$contextEvent && (typeof _$context != 'undefined' && _$context !== null)) {
	      _$context.trigger('dashboard:disable');
	      _$context.trigger('p0ne:hide:panels');
	    }
	    $('#playlist-button .icon-arrow-down,#history-button .icon-arrow-up,#footer-user.showing .back').click();
	    API.trigger('p0ne:hide:panels');
	  },
	  htmlToggle: function(checked, data){
	    var k, v;
	    if (data) {
	      data = "";
	      for (k in data) {
	        v = data[k];
	        data += "data-" + k + "='" + v + "' ";
	      }
	    } else {
	      data = '';
	    }
	    return "<input type=checkbox class=checkbox " + data + (checked ? '' : 'checked') + " />";
	  },
	  disabled: false,
	  user: typeof API != 'undefined' && API !== null ? API.getUser() : void 8,
	  getRoomSlug: function(){
	    return (typeof room != 'undefined' && room !== null ? typeof room.get == 'function' ? room.get('slug') : void 8 : void 8) || decodeURIComponent(location.pathname.substr(1));
	  }
	});
	window.unsnooze = window.refresh;
	window.woot.click = window.woot;
	window.meh.click = window.meh;
	function fn$(needle){
	  return -1 !== this.indexOf(needle);
	}
	function fn1$(needles){
	  var i$, len$, needle;
	  for (i$ = 0, len$ = needles.length; i$ < len$; ++i$) {
	    needle = needles[i$];
	    if (-1 !== this.indexOf(needle)) {
	      return true;
	    }
	  }
	  return false;
	}
	function importAll$(obj, src){
	  for (var key in src) obj[key] = src[key];
	  return obj;
	}
	function extend$(sub, sup){
	  function fun(){} fun.prototype = (sub.superclass = sup).prototype;
	  (sub.prototype = new fun).constructor = sub;
	  if (typeof sup.extended == 'function') sup.extended(sub);
	  return sub;
	}
	function import$(obj, src){
	  var own = {}.hasOwnProperty;
	  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
	  return obj;
	}
	function clone$(it){
	  function fun(){} fun.prototype = it;
	  return new fun;
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/**
	 * Auxiliary plug_p0ne modules
	 *
	 * @author jtbrinkmann aka. Brinkie Pie
	 * @license MIT License
	 * @copyright (c) 2015 J.-T. Brinkmann
	 */
	var $cm, onp3Loaded, dummyP3;
	console.log("~~~~~~~ p0ne.auxiliaries-modules ~~~~~~~");
	/*####################################
	#          CHAT AUXILIARIES          #
	####################################*/
	$cm = $('#chat-messages');
	importAll$(window, {
	  get$cm: function(){
	    var ref$;
	    return (typeof PopoutView != 'undefined' && PopoutView !== null ? (ref$ = PopoutView.chat) != null ? ref$.$chatMessages : void 8 : void 8) || (typeof chat != 'undefined' && chat !== null ? chat.$chatMessages : void 8) || cm;
	  },
	  get$cms: function(){
	    var cm, that, ref$;
	    cm = (typeof chat != 'undefined' && chat !== null ? chat.$chatMessages : void 8) || cm;
	    if (that = typeof PopoutView != 'undefined' && PopoutView !== null ? (ref$ = PopoutView.chat) != null ? ref$.$chatMessages : void 8 : void 8) {
	      return cm.add(that);
	    } else {
	      return cm;
	    }
	  },
	  playChatSound: throttle(200, function(){
	    if (typeof chat != 'undefined' && chat !== null) {
	      chat.playSound();
	    }
	  }),
	  appendChat: function(div, wasAtBottom){
	    var $div, ref$;
	    wasAtBottom == null && (wasAtBottom = chatIsAtBottom());
	    $div = $(div);
	    get$cms().append($div);
	    if (wasAtBottom) {
	      chatScrollDown();
	    }
	    if (typeof chat != 'undefined' && chat !== null) {
	      chat.lastType = null;
	    }
	    if (typeof PopoutView != 'undefined' && PopoutView !== null) {
	      if ((ref$ = PopoutView.chat) != null) {
	        ref$.lastType = null;
	      }
	    }
	    return $div;
	  },
	  chatWarn: function(arg$){
	    var className, title, message, icon, isHTML, delTitle;
	    className = arg$.className, title = arg$.title, message = arg$.message, icon = arg$.icon, isHTML = arg$.isHTML;
	    if (!message) {
	      return;
	    }
	    title && (title = $('<span class=un>').text(title));
	    icon || (icon = 'icon-chat-system');
	    className || (className = '');
	    if ((typeof p0neNotifHelper != 'undefined' && p0neNotifHelper !== null) && !p0neNotifHelper.disabled) {
	      delTitle = " title='click to remove notification'";
	    } else {
	      delTitle = "";
	    }
	    return appendChat($("<div class='cm p0ne-notif " + className + "'><div class=badge-box" + delTitle + "><i class='icon " + icon + "'></i></div></div>").append($('<div class=msg>').append($('<div class=from>').append(title).append(getTimestamp())).append($('<div class=text>')[isHTML ? 'html' : 'text'](message))));
	  },
	  chatWarnSmall: function(arg$){
	    var className, message, icon, isHTML, title;
	    className = arg$.className, message = arg$.message, icon = arg$.icon, isHTML = arg$.isHTML;
	    if (!message) {
	      return;
	    }
	    title && (title = $('<span class=un>').text(title));
	    icon || (icon = 'icon-chat-system');
	    className || (className = '');
	    return message && appendChat($("<div class='cm p0ne-notif p0ne-notif-small " + className + "'><i class='icon " + icon + "'></i></div>").append($('<div class="msg text">')[isHTML ? 'html' : 'text'](message).append(getTimestamp())));
	  },
	  chatIsAtBottom: function(){
	    var $cm;
	    $cm = get$cm();
	    return $cm.scrollTop() > $cm[0].scrollHeight - $cm.height() - 20;
	  },
	  chatScrollDown: function(){
	    var $cm;
	    $cm = get$cm();
	    $cm.scrollTop($cm[0].scrollHeight);
	  },
	  chatInput: function(msg, append){
	    var $input, that;
	    $input = (typeof chat != 'undefined' && chat !== null ? chat.$chatInputField : void 8) || $('#chat-input-field');
	    if (that = append && $input.text()) {
	      msg = that + " " + msg;
	    }
	    $input.val(msg).trigger('input').focus();
	  },
	  getTimestamp: function(d){
	    d == null && (d = new Date);
	    if (typeof auxiliaries != 'undefined' && auxiliaries !== null) {
	      return "<time class='timestamp' datetime='" + d.toISOString() + "'>" + auxiliaries.getChatTimestamp((typeof database != 'undefined' && database !== null ? database.settings.chatTimestamps : void 8) === 24) + "</time>";
	    } else {
	      return "<time class='timestamp' datetime='" + d.toISOString() + "'>" + pad(d.getHours()) + ":" + pad(d.getMinutes()) + "</time>";
	    }
	  },
	  fillChatInput: function(val, prepend){
	    var el, ref$, oldVal, preLength, $notif;
	    el = (typeof PopoutView != 'undefined' && PopoutView !== null ? (ref$ = PopoutView.chat) != null ? ref$.chatInput : void 8 : void 8) || (typeof chat != 'undefined' && chat !== null ? chat.chatInput : void 8) || $('#chat-input-field')[0];
	    oldVal = el.value;
	    if (prepend) {
	      preLength = val.length;
	      val = val + "" + oldVal;
	    } else if (oldVal.trim().length !== 0) {
	      $notif = chatWarn({
	        title: 'click to put this in chat input again',
	        message: oldVal
	      }).on('click', '.from,.text', function(){
	        fillChatInput(oldVal);
	        $notif.remove();
	      });
	    }
	    el.value = val;
	    requestAnimationFrame(function(){
	      el.focus();
	      el.selectionStart = el.selectionEnd = el.value.length;
	    });
	  }
	});
	/*####################################
	#          EXTEND DEFERREDS          #
	####################################*/
	replace(jQuery, 'Deferred', function(Deferred_){
	  return function(){
	    var timeStarted, res, promise_;
	    res = Deferred_.apply(this, arguments);
	    res.timeout = timeout;
	    promise_ = res.promise;
	    res.promise = function(){
	      var res;
	      res = promise_.apply(this, arguments);
	      res.timeout = timeout;
	      if (timeStarted) {
	        res.timeStarted = timeStarted;
	      }
	      return res;
	    };
	    return res;
	    function timeout(time, callback){
	      var now, timeStarted, this$ = this;
	      now = Date.now();
	      timeStarted || (timeStarted = Date.now());
	      if (this.state() !== 'pending') {
	        return;
	      }
	      if (timeStarted + time <= now) {
	        return callback.call(this, this);
	      } else {
	        return sleep(timeStarted + time - now, function(){
	          if (this$.state() === 'pending') {
	            callback.call(this$, this$);
	          }
	        });
	      }
	    }
	  };
	});
	/*####################################
	#     LISTENER FOR OTHER SCRIPTS     #
	####################################*/
	onp3Loaded = function(){
	  var rR_;
	  console.info("[p0ne] plugCubed detected");
	  rR_ = Math.randomRange;
	  requestAnimationFrame(function(){
	    if (window.plugCubed && !window.plugCubed.p0Mock) {
	      API.trigger('plugCubedLoaded', window.plugCubed);
	      $body.addClass('plugCubed');
	      replace(plugCubed, 'close', function(close_){
	        return function(){
	          $body.removeClass('plugCubed');
	          close_.apply(this, arguments);
	          if (Math.randomRange !== rR_) {
	            onp3Loaded();
	          } else {
	            window.plugCubed = dummyP3;
	          }
	          rR_ = Math.randomRange;
	        };
	      });
	    }
	  });
	};
	dummyP3 = {
	  close: onp3Loaded,
	  p0Mock: true
	};
	if (window.plugCubed && !window.plugCubed.p0Mock) {
	  onp3Loaded();
	} else {
	  window.plugCubed = dummyP3;
	}
	/*####################################
	#          GET PLUG³ VERSION         #
	####################################*/
	window.getPlugCubedVersion = function(){
	  var v, that, i$, ref$, len$, i, k, this$ = this;
	  if (!((typeof plugCubed != 'undefined' && plugCubed !== null) && plugCubed.init)) {
	    return null;
	  } else if (plugCubed.version) {
	    return plugCubed.version;
	  } else if (v = requireHelper('plugCubedVersion', {
	    test: function(it){
	      return it.major;
	    }
	  })) {
	    return v;
	  } else {
	    if (!(v = $('#p3-settings .version').text())) {
	      $('plugcubed').click();
	      v = $('#p3-settings').stop().css({
	        left: -500
	      }).find('.version').text();
	    }
	    if (that = v.match(/^(\d+)\.(\d+)\.(\d+)(?:-(\w+))?(_min)? \(Build (\d+)\)$/)) {
	      v = {
	        toString: function(){
	          return this.major + "." + this.minor + "." + this.patch + (this.prerelease && '-' + this.prerelease) + (this.minified && '_min' || '') + " (Build " + this.build + ")";
	        }
	      };
	      for (i$ = 0, len$ = (ref$ = ['major', 'minor', 'patch', 'prerelease', 'minified', 'build']).length; i$ < len$; ++i$) {
	        i = i$;
	        k = ref$[i$];
	        v[k] = that[i + 1];
	      }
	    }
	  }
	  return plugCubed.version = v;
	};
	/*####################################
	#          CONSOLE LOG IMAGE         #
	####################################*/
	/**
	 * draws an image to the console!
	 * if either the width or the height is not defined, the console.log entry will be asynchronious
	 *
	 * @param {string} src       - url to the image (relative to the current page; data-URIs work too)
	 * @param {int} [customWidth]  - width of the image
	 * @param {int} [customHeight] - height of th eimage
	 * @return {Object} jQuery Promise that resolves when the image is drawn
	 */
	console.logImg = function(src, customWidth, customHeight){
	  var def, drawImage, x$;
	  def = $.Deferred();
	  drawImage = function(w, h){
	    if (window.chrome) {
	      console.log("%c\u200B", "color: transparent;line-height: " + h + "px;font-size: 1px;background: linear-gradient(transparent,transparent),url(" + src + ");padding: " + h / 2 + "px " + w / 2 + "px");
	    } else {
	      console.log("%c", "background: url(" + src + ") no-repeat; display: block;width: " + w + "px; height: " + h + "px;");
	    }
	    def.resolve();
	  };
	  if (isFinite(customWidth) && isFinite(customHeight)) {
	    drawImage(+customWidth, +customHeight);
	  } else {
	    x$ = new Image;
	    x$.onload = function(){
	      drawImage(this.width, this.height);
	    };
	    x$.onerror = function(){
	      console.log("[couldn't load image %s]", src);
	      def.reject();
	    };
	    x$.src = src;
	  }
	  return def.promise();
	};
	/*####################################
	#            AUXILIARIES             #
	####################################*/
	module('getPlaylist', {
	  require: ['playlists'],
	  module: function(nameOrId){
	    var that, i$, ref$, len$, pl;
	    if (that = playlists.get(nameOrId)) {
	      return that;
	    } else if (typeof nameOrId === 'string') {
	      for (i$ = 0, len$ = (ref$ = playlists.models).length; i$ < len$; ++i$) {
	        pl = ref$[i$];
	        if (nameOrId === pl.get('name')) {
	          return pl;
	        }
	      }
	    }
	  }
	});
	module('getActivePlaylist', {
	  require: ['playlists'],
	  module: function(){
	    return playlists.findWhere({
	      active: true
	    });
	  }
	});
	module('openPlaylist', {
	  require: ['playlists', 'playlistMenu'],
	  module: function(nameOrId){
	    playlists.setVisible(getPlaylist(nameOrId));
	  }
	});
	module('updateUserData', {
	  require: ['user_', 'users', '_$context'],
	  setup: function(arg$){
	    var addListener, i$, ref$, len$, user;
	    addListener = arg$.addListener;
	    addListener(window.user_, 'change:username', function(){
	      user.username = window.user_.get('username');
	    });
	    for (i$ = 0, len$ = (ref$ = users.models).length; i$ < len$; ++i$) {
	      user = ref$[i$];
	      user.set('joinedRoom', -1);
	    }
	    addListener(API, 'userJoin', function(arg$){
	      var id, ref$;
	      id = arg$.id;
	      if ((ref$ = users.get(id)) != null) {
	        ref$.set('joinedRoom', Date.now());
	      }
	    });
	  }
	});
	module('throttleOnFloodAPI', {
	  setup: function(arg$){
	    var addListener;
	    addListener = arg$.addListener;
	    addListener(API, 'p0ne:socket:floodAPI', function(){
	      /* all AJAX and Socket functions should check if the counter is AT LEAST below 20 */
	      window.floodAPI_counter += 20;
	      sleep(15000, function(){
	        /* it is assumed, that the API counter resets every 10 seconds. 15s is to provide enough buffer */
	        window.floodAPI_counter -= 20;
	      });
	    });
	  }
	});
	module('PopoutListener', {
	  require: ['PopoutView'],
	  optional: ['_$context'],
	  setup: function(arg$){
	    var wrap;
	    wrap = arg$.wrap;
	    wrap(PopoutView, 'render', function(r_){
	      return function(){
	        r_.apply(this, arguments);
	        patchPopout();
	      };
	    });
	    if (PopoutView._window != null) {
	      patchPopout();
	    }
	    function patchPopout(){
	      var i$, ref$, module;
	      PopoutView.chat.lastText = PopoutView.chat.$chatMessages.children(':last').find('.text');
	      PopoutView._window.chatScrollDown = chatScrollDown;
	      PopoutView._window.document.body.parentElement.id = "app";
	      window.$popout = $(PopoutView._window.document.body);
	      window.$cm = PopoutView.chat.$chatMessages;
	      window.$cms = $cmMain.add($cm);
	      window.$cmPopout = $cm;
	      window.$roots = $body.add($popout);
	      for (i$ in ref$ = p0ne.modules) {
	        module = ref$[i$];
	        if (module.cssClass && !module.disabled) {
	          $popout.addClass(module.cssClass);
	        }
	      }
	      if (typeof _$context != 'undefined' && _$context !== null) {
	        _$context.trigger('popout:open', PopoutView._window, PopoutView);
	      }
	      return API.trigger('popout:open', PopoutView._window, PopoutView);
	    }
	    wrap(PopoutView, 'clear', function(c_){
	      return function(){
	        var err;
	        if (!this.chat) {
	          return;
	        }
	        try {
	          c_.apply(this, arguments);
	        } catch (e$) {
	          err = e$;
	          console.error("[p0ne] Error closing the popout: " + err.message, err);
	        }
	        $cm = $cmMain;
	        if (typeof _$context != 'undefined' && _$context !== null) {
	          _$context.trigger('popout:close', PopoutView._window, PopoutView);
	        }
	        API.trigger('popout:close', PopoutView._window, PopoutView);
	      };
	    });
	  }
	});
	module('p0neAdvanceEvent', {
	  require: ['_$context'],
	  setup: function(arg$){
	    var addListener, socketData;
	    addListener = arg$.addListener;
	    addListener(_$context, 'p0ne:socket:advance', function(data){
	      socketData = data;
	    });
	    addListener('early', API, 'advance', function(data){
	      if (data.media && socketData && data.media.id === socketData.m.id && data.dj.id === socketData.c) {
	        data.historyID = socketData.h;
	        data.playlistID = socketData.p;
	        data.time = new Date(socketData.t + "+0");
	        socketData = null;
	      }
	    });
	  }
	});
	module('chatDomEvents', {
	  require: ['backbone'],
	  optional: ['chat', 'PopoutView', 'PopoutListener'],
	  persistent: ['_events'],
	  _events: [],
	  setup: function(arg$){
	    var addListener, cm, this$ = this;
	    addListener = arg$.addListener;
	    cm = (typeof chat != 'undefined' && chat !== null ? chat.$chatMessages : void 8) || $('#chat-messages');
	    this.on = function(){
	      var ref$;
	      (ref$ = this._events)[ref$.length] = arguments;
	      cm.on.apply(cm, arguments);
	      if (PopoutView.chat) {
	        PopoutView.chat.$el.on.apply(PopoutView.chat.$el, arguments);
	      }
	    };
	    this.off = function(){
	      var isAnyMatch, i, cb, hasMatch, i$, len$, o;
	      isAnyMatch = false;
	      i = -1;
	      while (cb = this._events[++i]) {
	        hasMatch = true;
	        for (i$ = 0, len$ = arguments.length; i$ < len$; ++i$) {
	          o = i$;
	          if (cb[o] !== arguments[o]) {
	            hasMatch = false;
	            break;
	          }
	        }
	        if (hasMatch) {
	          isAnyMatch = true;
	          this._events.remove(i--);
	        }
	      }
	      if (isAnyMatch) {
	        cm.off.apply(cm, arguments);
	      }
	    };
	    this.once = function(type, callback){
	      this.on(type, function(){
	        this.off(type, callback);
	        callback.apply(this, arguments);
	      });
	    };
	    addListener(API, 'popout:open', function(){
	      var cm, i$, ref$, len$, cb;
	      cm = PopoutView.chat.$el;
	      console.log("[chatDomEvents] popup opened", this$._events);
	      for (i$ = 0, len$ = (ref$ = this$._events).length; i$ < len$; ++i$) {
	        cb = ref$[i$];
	        console.log("[chatDomEvents] adding listener", cm, cb);
	        cm.on.apply(cm, cb);
	      }
	    });
	  }
	});
	module('playlistCachePatch', {
	  require: ['playlistCache'],
	  setup: function(){
	    var parse, err;
	    parse = JSON.parse;
	    try {
	      JSON.parse = function(str){
	        return playlistCache._data = parse(str);
	      };
	      playlistCache.ready(userID);
	    } catch (e$) {
	      err = e$;
	      console.error("error patching playlistCache", err.messageAndStack);
	    }
	    JSON.parse = parse;
	  }
	});
	module('playlistCacheEvent', {
	  require: ['playlistCache'],
	  setup: function(arg$){
	    var wrap;
	    wrap = arg$.wrap;
	    wrap(playlistCache, 'mediaUpdate', function(mU_){
	      return function(playlistID){
	        mU_.call(this, playlistID);
	        if (typeof _$context != 'undefined' && _$context !== null) {
	          _$context.trigger('p0ne:playlistCache:update', playlistID);
	        }
	        API.trigger('p0ne:playlistCache:update', playlistID);
	      };
	    });
	  }
	});
	module('grabEvent', {
	  require: ['votes'],
	  setup: function(arg$){
	    var wrap;
	    wrap = arg$.wrap;
	    wrap(votes, 'grab', function(g_){
	      return function(uid){
	        if (typeof _$context != 'undefined' && _$context !== null) {
	          _$context.trigger('p0ne:vote:grab', getUser(uid));
	        }
	        g_.call(this, uid);
	        API.trigger('p0ne:vote:grab', getUser(uid));
	      };
	    });
	  }
	});
	module('updateHistoryID', {
	  setup: function(arg$, historyIDs){
	    var addListener;
	    addListener = arg$.addListener;
	    addListener(_$context, 'PlayMediaEvent:play', function(d){
	      window.historyID = d.historyID;
	    });
	  }
	});
	module('grabMedia', {
	  require: ['playlists', 'auxiliaries', 'Backbone'],
	  optional: ['_$context'],
	  module: function(playlistIDOrName, media, appendToEnd){
	    var currentPlaylist, def, playlist, currMedia;
	    currentPlaylist = getActivePlaylist();
	    def = $.Deferred();
	    if (typeof playlistIDOrName === 'string' && !playlistIDOrName.startsWith('http')) {
	      playlist = getPlaylist(pl);
	    } else if (!(playlist = playlists.get(playlistIDOrName))) {
	      playlist = currentPlaylist;
	      appendToEnd = media;
	      media = playlistIDOrName;
	    } else {
	      throw new TypeError("invalid playlistIDOrName format");
	    }
	    if (appendToEnd == null) {
	      appendToEnd = playlist.id === currentPlaylist.id;
	    }
	    console.log("[grabMedia]", playlist, media);
	    currMedia = API.getMedia();
	    if (!playlist) {
	      def.reject('playlistNotFound');
	    } else if (!media) {
	      addMedia(currMedia);
	    } else if (media.duration || media.id) {
	      addMedia(media);
	    } else {
	      mediaLookup(media, {
	        success: addMedia,
	        fail: function(err){
	          console.error("[grabMedia] couldn't grab", err);
	          def.reject('lookupFailed', err);
	        }
	      });
	    }
	    return def.promise();
	    function addMedia(media){
	      var req;
	      playlist.set('syncing', true);
	      if ((typeof historyID != 'undefined' && historyID !== null) && media.cid === currMedia.cid && media.format === currMedia.format) {
	        console.log("[grabMedia] grabbing '" + media.author + " - " + media.title + "' to playlist:", playlist);
	        req = ajax('POST', "grabs", {
	          playlistID: playlist.id,
	          historyID: historyID
	        });
	      } else {
	        console.log("[grabMedia] adding '" + media.author + " - " + media.title + "' to playlist:", playlist);
	        if (!(media instanceof Backbone.Model)) {
	          media = new Backbone.Model(media);
	        }
	        req = ajax('POST', "playlists/" + playlist.id + "/media/insert", {
	          media: auxiliaries.serializeMediaItems([media]),
	          append: !!appendToEnd
	        });
	      }
	      return req.then(function(arg$){
	        var data, e;
	        data = arg$.data, e = data[0];
	        if (playlist.id !== e.id) {
	          console.warn("playlist mismatch", playlist.id, e.id);
	          playlist.set('syncing', false);
	          playlist = playlists.get(e.id) || playlist;
	        }
	        playlist.set('count', e.count);
	        if (playlist.id === currentPlaylist.id && playlist.toArray) {
	          if (typeof _$context != 'undefined' && _$context !== null) {
	            _$context.trigger('PlaylistActionEvent:load', playlist.id);
	          }
	        }
	        playlist.set('syncing', false);
	        console.info("[grabMedia] successfully added to playlist");
	        def.resolve(playlist.toJSON(), playlist.name, !!appendToEnd);
	      }).fail(function(err){
	        playlist.set('syncing', false);
	        console.error("[grabMedia] error adding song to the playlist");
	        def.reject('ajaxError', err);
	      });
	    }
	  }
	});
	/*####################################
	#            ROOM  HELPER            #
	####################################*/
	module('p0neModuleRoomSettingsLoader', {
	  require: ['_$context'],
	  setup: function(arg$){
	    var addListener;
	    addListener = arg$.addListener;
	    addListener(_$context, 'room:joining', function(){
	      var i$, ref$, m;
	      for (i$ in ref$ = p0ne.modules) {
	        m = ref$[i$];
	        if (m.settingsPerCommunity) {
	          m._updateRoom();
	        }
	      }
	    });
	    addListener(_$context, 'room:joined', function(){
	      var i$, ref$, m;
	      for (i$ in ref$ = p0ne.modules) {
	        m = ref$[i$];
	        if (m.settingsPerCommunity && !m.disabled) {
	          if (m.loading) {
	            m.loading.then(fn$);
	          } else {
	            m.enable();
	          }
	        }
	      }
	      function fn$(){
	        m.enable();
	      }
	    });
	  }
	});
	/*####################################
	#             CUSTOM CSS             #
	####################################*/
	module('p0neCSS', {
	  optional: ['PopoutListener', 'PopoutView'],
	  $popoutEl: $(),
	  styles: {},
	  urlMap: {},
	  persistent: ['styles'],
	  setup: function(arg$, arg1$, p0neCSS_){
	    var addListener, $create, $el, $popoutEl, styles, urlMap, cb, throttled, loadingStyles, res, n, ref$, css, url, i;
	    addListener = arg$.addListener, $create = arg$.$create;
	    this.$el = $create('<style>').appendTo('head');
	    $el = this.$el, $popoutEl = this.$popoutEl, styles = this.styles, urlMap = this.urlMap;
	    cb = addListener(API, 'popout:open', function(_window, PopoutView){
	      $popoutEl = $el.clone().loadAll(PopoutView.resizeBind).appendTo(_window.document.head);
	    });
	    window.getCustomCSS = this.getCustomCSS = function(inclExternal){
	      var el;
	      if (inclExternal) {
	        return (function(){
	          var i$, ref$, len$, results$ = [];
	          for (i$ = 0, len$ = (ref$ = $el).length; i$ < len$; ++i$) {
	            el = ref$[i$];
	            results$.push(el.outerHTML);
	          }
	          return results$;
	        }()).join('\n');
	      } else {
	        return $el.first().text();
	      }
	    };
	    throttled = false;
	    window.css = this.css = function(name, css){
	      if (css == null) {
	        return styles[name];
	      }
	      styles[name] = css;
	      if (!throttled) {
	        throttled = true;
	        requestAnimationFrame(function(){
	          var res, n, ref$, css;
	          throttled = false;
	          res = "";
	          for (n in ref$ = styles) {
	            css = ref$[n];
	            res += "/*== " + n + " ==*/\n" + css + "\n\n";
	          }
	          $el.first().text(res);
	          $popoutEl.first().text(res);
	        });
	      }
	    };
	    loadingStyles = 0;
	    window.loadStyle = this.loadStyle = function(url){
	      var s;
	      console.log("[loadStyle] %c" + url, "color: #009cdd");
	      if (urlMap[url]) {
	        return urlMap[url]++;
	      } else {
	        urlMap[url] = 1;
	      }
	      loadingStyles++;
	      s = $("<link rel='stylesheet' >").attr('href', url).on('load fail', function(){
	        if (--loadingStyles === 0) {
	          recalculateLayout();
	          requestAnimationFrame(function(){
	            if (typeof _$context != 'undefined' && _$context !== null) {
	              _$context.trigger('p0ne:stylesLoaded');
	            }
	            API.trigger('p0ne:stylesLoaded');
	          });
	        }
	      }).appendTo(document.head);
	      $el.push(s[0]);
	      if ((typeof PopoutView != 'undefined' && PopoutView !== null) && PopoutView._window) {
	        $popoutEl.push(s.clone().load(PopoutView.resizeBind).appendTo(PopoutView._window.document.head));
	      }
	    };
	    window.unloadStyle = this.unloadStyle = function(url){
	      var i;
	      if (urlMap[url] > 0) {
	        urlMap[url]--;
	      }
	      if (urlMap[url] === 0) {
	        console.log("[loadStyle] unload %c" + url, "color: #009cdd");
	        delete urlMap[url];
	        if (-1 !== (i = $el.indexOf("[href='" + url + "']"))) {
	          $el.eq(i).remove();
	          $el.splice(i, 1);
	        }
	        if (-1 !== (i = $popoutEl.indexOf("[href='" + url + "']"))) {
	          $popoutEl.eq(i).remove();
	          $popoutEl.splice(i, 1);
	        }
	        recalculateLayout();
	      }
	    };
	    this.disable = function(){
	      $el.remove();
	      $popoutEl.remove();
	      recalculateLayout();
	    };
	    if (p0neCSS_) {
	      res = "";
	      for (n in ref$ = this.styles) {
	        css = ref$[n];
	        res += "/*== " + n + " ==*/\n" + css + "\n\n";
	      }
	      if (res) {
	        $el.first().text(res);
	        $popoutEl.first().text(res);
	      }
	      for (url in ref$ = p0neCSS_.urlMap) {
	        i = ref$[url];
	        this.loadStyle(url);
	        this.urlMap[url] = i;
	      }
	      if ((typeof PopoutView != 'undefined' && PopoutView !== null) && PopoutView._window) {
	        cb(PopoutView._window, PopoutView);
	      }
	    }
	  }
	});
	/*####################################
	#           PLAYLIST STUFF           #
	####################################*/
	module('songListCollection', {
	  require: ['Media', 'MediaCollection'],
	  module: function(songList){
	    /* wrap media objects if supplied as plain Objects */
	    var ref$, res, i$, len$, i, m;
	    if (songList != null && songList.length) {
	      if (songList[0] || !(((ref$ = songList.models) != null ? ref$[0] : void 8) instanceof Media)) {
	        if (!songList[0]) {
	          songList = songList.models;
	        }
	        res = new MediaCollection();
	        for (i$ = 0, len$ = songList.length; i$ < len$; ++i$) {
	          i = i$;
	          m = songList[i$];
	          m = new Media(m.attributes || m);
	          if (m.id = ~0) {
	            delete m.id;
	            delete m.attributes.id;
	          }
	          res.add(m);
	        }
	        return res;
	      }
	    } else if (!(songList != null && songList.models)) {
	      return new MediaCollection();
	    }
	    return songList;
	  }
	});
	module('createPlaylistDialog', {
	  require: ['ShowDialogEvent', '_$context'],
	  module: function(songList, defaultName){
	    /* open a dialog to let the user create a playlist with a user-selected name */
	    var evt;
	    _$context.trigger(ShowDialogEvent.SHOW, evt = new ShowDialogEvent(ShowDialogEvent.SHOW, new PlaylistCreateDialog({
	      media: songListCollection(songList).models
	    })));
	    if (defaultName) {
	      requestAnimationFrame(function(){
	        requestAnimationFrame(function(){
	          evt.dialog.$field.val(defaultName);
	          evt.dialog.onKeyUp();
	        });
	      });
	    }
	  }
	});
	module('mediaPreview', {
	  require: ['_$context', 'PreviewEvent', 'Backbone'],
	  module: function(mediaObj){
	    /* opens a preview dialog showing a video of the supplied media object */
	    _$context.trigger(PreviewEvent.PREVIEW, new PreviewEvent(PreviewEvent.PREVIEW, new Backbone.Model(mediaObj)));
	  }
	});
	module('mediaListShow', {
	  require: ['pl', 'songListCollection', 'SearchList', 'SearchHeader'],
	  optional: ['playlists', 'search'],
	  module: function(title, songList, icon){
	    /* opens a list of songs in the playlist drawer */
	    var list, header, $icon;
	    list = new SearchList();
	    header = new SearchHeader();
	    songList = songListCollection(songList);
	    if (typeof playlists != 'undefined' && playlists !== null) {
	      playlists.setVisible();
	    }
	    if (typeof search != 'undefined' && search !== null) {
	      search.onShowFilter();
	    }
	    list.collection = songList;
	    pl.show(header, list);
	    header.setTitle(title);
	    $icon = header.$el.find('.icon').removeClass();
	    if (window.createPlaylistDialog) {
	      header.$el.append($("<div class='button import-button'><span>" + ((typeof Lang != 'undefined' && Lang !== null ? Lang['import'].importThis : void 8) || 'Import This Playlist') + "</span></div>").on('click', function(){
	        createPlaylistDialog(songList, title);
	      }));
	    }
	    if (icon === false || icon === '') {
	      $icon.next().css({
	        left: 12
	      });
	    } else {
	      $icon.addClass(icon || 'icon icon-playlist').css({
	        top: 13,
	        left: 12
	      });
	    }
	    list.render();
	    openPlaylistDrawer();
	  }
	});
	/*####################################
	#           COGWHEEL  ICON           #
	####################################*/
	module('iconCogwheel', {
	  setup: function(arg$){
	    var css, grey, white;
	    css = arg$.css;
	    grey = getIcon('icon-settings-grey');
	    white = getIcon('icon-settings-white');
	    css('iconCogwheel', ".icon-p0ne-settings {background-position: " + grey.position + ";cursor: pointer;transition: transform .2s ease-out;}.icon-p0ne-settings:hover,.icon-p0ne-settings.active {background-position: " + white.position + ";}.icon-p0ne-settings:hover {transform: rotate(90deg);}");
	  }
	});
	module('customEmoji', {
	  require: ['emoji'],
	  customEmoji: {},
	  customAutoEmoji: {},
	  _rx_map: {},
	  autoSizedEmoji: {},
	  setup: function(arg$){
	    /* allow custom emoji sizes */
	    var k;
	    this.css = arg$.css, this.replace = arg$.replace;
	    this.css('customEmoji', '.emoji-outer.emoji-sizer {width: auto;height: auto;}span.emoji-inner {width: 16px;height: 16px;}.emoji-inner {background-repeat: no-repeat;background-position: center;}#chat-suggestion-items .gemoji-plug {background-size: 16px;width: 16px;height: 16px;}#chat-suggestion-items .gemoji-plug-metal,#chat-suggestion-items .gemoji-plug-octocat,#chat-suggestion-items .gemoji-plug-troll,#chat-suggestion-items .gemoji-plug-trollface,#chat-suggestion-items .gemoji-plug-shipit,#chat-suggestion-items .gemoji-plug-squirrel {background-size: auto;}');
	    this._bak_rx_emoticons = emoji.rx_emoticons;
	    for (k in emoji.map.emoticons) {
	      this._rx_map[emoji.escape_rx(k)] = true;
	    }
	  },
	  addEmoji: function(name, url, options){
	    var name, emojis, l, style, i$, ref$, len$, k, v, s;
	    options == null && (options = {});
	    if (typeof name !== 'string') {
	      emojis = name;
	    } else {
	      emojis = {};
	      options.url = url;
	      emojis[name] = options;
	    }
	    l = emoji.plugdata.length;
	    for (name in emojis) {
	      options = emojis[name];
	      if (options) {
	        /* options{width, height, x, y, size, backgroundPosition} */
	        if (!options) {
	          console.warn("[customEmoji] couldn't add {\"" + k + "\": \"" + options + "\"}, no options/URL");
	          continue;
	        } else if (typeof options === 'string') {
	          if (isURL(options)) {
	            options = {
	              url: options
	            };
	          } else {
	            console.warn("[customEmoji] couldn't add {\"" + k + "\": \"" + options + "\"}, invalid URL");
	            continue;
	          }
	        }
	        if (!emoji.plugdata.has(name)) {
	          this.customEmoji[name] = emoji.emojiMap[name];
	          emoji.emojiMap[name] = name;
	          emoji.plugdata[l++] = name;
	        }
	        style = "background-image: url(" + options.url + ");";
	        if (options.size) {
	          if (options.size === 'auto') {
	            this.autoSizedEmoji[name] = options.url;
	          } else {
	            options.width == null && (options.width = options.size);
	            options.height == null && (options.height = options.size);
	          }
	        }
	        for (i$ = 0, len$ = (ref$ = ['width', 'height', 'x', 'y']).length; i$ < len$; ++i$) {
	          k = ref$[i$];
	          if (v = options[k]) {
	            if (typeof v === 'number') {
	              options[k] += 'px';
	            }
	          }
	        }
	        if ('width' in options) {
	          style += "width: " + options.width + ";";
	        }
	        if ('height' in options) {
	          style += "height: " + options.height + ";";
	        }
	        if (options.x || options.y) {
	          style += "background-position: " + (options.x || 0) + (typeof options.x === 'number' ? 'px' : '') + " " + (options.y || 0) + (typeof options.y === 'number' ? 'px' : '') + ";";
	        }
	        if (s = options.backgroundSize || options['background-size']) {
	          style += "background-size: " + s + ";";
	        }
	        if (options.css && !options.css.has("}")) {
	          style += options.css;
	        }
	        this.css("customEmoji-" + name, "#app .emoji-inner.gemoji-plug-" + name + " {" + style + "}");
	      }
	    }
	  },
	  removeEmoji: function(name){
	    var emojis, i$, len$, k;
	    if (name instanceof Array) {
	      emojis = name;
	    } else {
	      emojis = [name];
	    }
	    for (i$ = 0, len$ = emojis.length; i$ < len$; ++i$) {
	      k = emojis[i$];
	      if (k in this.customEmoji) {
	        if (this.customEmoji[k]) {
	          emoji.emojiMap[k] = this.customEmoji[k];
	        } else {
	          delete emoji.emojiMap[k];
	        }
	        delete this.autoSizedEmoji[name];
	        if (k in this.customEmoji) {
	          emoji.plugdata.removeItem(k);
	        }
	      }
	    }
	  },
	  addAutoEmoji: function(key, name){
	    var key, emojis, this$ = this;
	    if (typeof key !== 'string') {
	      emojis = key;
	    } else {
	      emojis = {};
	      emojis[key] = name;
	    }
	    for (key in emojis) {
	      name = emojis[key];
	      if (!(key in this.customAutoEmoji)) {
	        this.customAutoEmoji[key] = emoji.emoticons_data[key];
	      }
	      emoji.emoticons_data[key] = name;
	      emoji.map.emoticons[key] = emoji.map.colons[name] || name;
	      emoji.data[name] = {
	        3: [name]
	      };
	      this._rx_map[emoji.escape_rx(key)] = true;
	    }
	    if (!this.updatingAutoEmoji) {
	      this.updatingAutoEmoji = true;
	      requestAnimationFrame(function(){
	        this$.updateAutoEmoji();
	        this$.updatingAutoEmoji = false;
	      });
	    }
	  },
	  updateAutoEmoji: function(){
	    emoji.rx_emoticons = RegExp('(^|\\s)(' + Object.keys(this._rx_map).join('|') + ')(?=$|[\\s|\\?\\.,!])', 'g');
	  },
	  removeAutoEmoji: function(key, name){
	    var emojis, i$, len$, ref$;
	    if (key instanceof Array) {
	      emojis = key;
	    } else {
	      emojis = [{
	        key: key,
	        name: name
	      }];
	    }
	    for (i$ = 0, len$ = emojis.length; i$ < len$; ++i$) {
	      ref$ = emojis[i$], key = ref$.key, name = ref$.name;
	      if (key in this.customAutoEmoji) {
	        if (this.customAutoEmoji[key]) {
	          emoji.emoticons_data[key] = this.customAutoEmoji[key];
	        } else {
	          delete emoji.emoticons_data[k];
	        }
	      }
	    }
	  },
	  disable: function(){
	    var k, ref$, v, res$, i$, len$;
	    for (k in ref$ = this.customEmoji) {
	      v = ref$[k];
	      if (v) {
	        emoji.emojiMap[k] = v;
	      } else {
	        delete emoji.emojiMap[k];
	      }
	    }
	    res$ = [];
	    for (i$ = 0, len$ = (ref$ = emoji.plugdata).length; i$ < len$; ++i$) {
	      k = ref$[i$];
	      if (!(k in this.customEmoji)) {
	        res$.push(k);
	      }
	    }
	    emoji.plugdata = res$;
	    for (k in ref$ = this.customAutoEmoji) {
	      v = ref$[k];
	      if (v) {
	        emoji.emoticons_data[k] = v;
	      } else {
	        delete emoji.emoticons_data[k];
	      }
	    }
	    emoji.rx_emoticons = this._bak_rx_emoticons;
	  }
	});
	module('properRoomSlug', {
	  require: ['room'],
	  setup: function(arg$){
	    var replace;
	    replace = arg$.replace;
	    replace(window, 'getRoomSlug', function(){
	      return room.get('slug');
	    });
	  }
	});
	_.defer(function(){
	  module('p0neNotifHelper', {
	    require: ['chatDomEvents'],
	    setup: function(arg$){
	      var addListener;
	      addListener = arg$.addListener;
	      addListener(chatDomEvents, 'click', '.p0ne-notif .badge-box', function(){
	        var $this;
	        $this = $(this).closest('.p0ne-notif').slideUp(function(){
	          $this.remove();
	        });
	      });
	    }
	  });
	});
	function importAll$(obj, src){
	  for (var key in src) obj[key] = src[key];
	  return obj;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/**
	 * plug_p0ne Custom Avatars
	 * adds custom avatars to plug.dj when connected to a plug_p0ne Custom Avatar Server (ppCAS)
	 *
	 * @author jtbrinkmann aka. Brinkie Pie
	 * @license MIT License
	 * @copyright (c) 2015 J.-T. Brinkmann
	 *
	 * Developer's note: if you create your own custom avatar script or use a modified version of this,
	 * you are hereby granted permission connect to plug_p0ne's default avatar server.
	 * However, please drop me an e-mail so I can keep an oversight of things.
	 * I, J.-T. Brinkmann, remain the right to revoke this permission anytime.
	 */
	var id, ref$, m, i$, ref1$, ref2$, len$, ev, ref3$;
	console.log("~~~~~~~ p0ne.avatars ~~~~~~~");
	if (!window.p0ne) {
	  window.Cells || (window.Cells = []);
	  window.user || (window.user = API.getUser());
	  for (id in ref$ = requirejs.s.contexts._.defined) {
	    m = ref$[id];
	    if (m) {
	      switch (false) {
	      case !m.onRole:
	        window.users = m;
	        break;
	      case !m.selected:
	        window.InventoryDropdown = m;
	        break;
	      case !m.getAvatarUrl:
	        window.avatarAuxiliaries = m;
	        break;
	      case !m.AUDIENCE:
	        window.Avatars = m;
	        break;
	      case !m.canModChat:
	        window.user_ = m;
	        for (i$ = 0, len$ = (ref1$ = ((ref2$ = m._events) != null ? ref2$['change:avatarID'] : void 8) || []).length; i$ < len$; ++i$) {
	          ev = ref1$[i$];
	          if (((ref3$ = ev.ctx) != null ? ref3$.comparator : void 8) === 'id') {
	            window.myAvatars = ev.ctx;
	            break;
	          }
	        }
	        break;
	      case !m.prototype:
	        switch (false) {
	        case !(m.prototype.className === 'cell' && m.prototype.getBlinkFrame):
	          (ref1$ = window.Cells)[ref1$.length] = m;
	          break;
	        case !(m.prototype.className === 'avatars' && m.prototype.eventName):
	          window.InventoryDropdown = new m().dropDown.constructor;
	        }
	      }
	    }
	  }
	  window.userID || (window.userID = typeof user_ != 'undefined' && user_ !== null ? user_.id : void 8);
	  window.sleep || (window.sleep = function(delay, fn){
	    return setTimeout(fn, delay);
	  });
	}
	/*####################################
	#           CUSTOM AVATARS           #
	####################################*/
	module('customAvatars', {
	  require: ['users', 'Lang', 'avatarAuxiliaries', 'Avatar', 'myAvatars', 'InventoryDropdown'],
	  optional: ['user_', '_$context'],
	  displayName: 'Custom Avatars',
	  settings: 'base',
	  settingsSimple: true,
	  help: 'This adds a few custom avatars to plug.dj\n\nYou can select them like any other avatar, by clicking on your username (below the chat) and then clicking "My Stuff".\nClick on the Dropdown field in the top-left to select another category.\n\nEveryone who uses plug_p0ne sees you with your custom avatar.',
	  persistent: ['socket'],
	  _settings: {
	    vanillaAvatarID: user.avatarID,
	    avatarID: user.avatarID
	  },
	  DEFAULT_SERVER: 'wss://ppCAS.p0ne.com/_/websocket',
	  setup: function(arg$, customAvatars){
	    var addListener, wrap, revert, css, addCommand, avatarID, getAvatarUrl_, _internal_addAvatar, $vanillaAvatarCell, i$, ref$, len$, Cell, urlParser, this$ = this;
	    addListener = arg$.addListener, wrap = arg$.wrap, revert = arg$.revert, css = arg$.css, addCommand = arg$.addCommand;
	    p0ne._avatars = {};
	    if (API.getUser().guest) {
	      chatWarn({
	        icon: 'p0ne-icon',
	        title: "Custom Avatars",
	        message: "Log in to enable custom avatars"
	      });
	      this.disable();
	      return;
	    }
	    avatarID = API.getUser().avatarID;
	    if (this.hasNewAvatar = this._settings.vanillaAvatarID && this._settings.vanillaAvatarID !== avatarID) {
	      this._settings.vanillaAvatarID = avatarID;
	      this.saveSettings();
	    }
	    wrap(avatarAuxiliaries, 'getAvatarUrl', function(gAU_){
	      return function(avatarID, type){
	        var ref$;
	        return ((ref$ = p0ne._avatars[avatarID]) != null ? ref$[type] : void 8) || gAU_(avatarID, type);
	      };
	    });
	    getAvatarUrl_ = avatarAuxiliaries.getAvatarUrl_;
	    _internal_addAvatar = function(d){
	      var avatarID, avatar, base_url, ref$, key$;
	      avatarID = d.avatarID;
	      avatar = {
	        inInventory: false,
	        category: d.category || 'p0ne',
	        thumbOffsetTop: d.thumbOffsetTop,
	        thumbOffsetLeft: d.thumbOffsetLeft,
	        isVanilla: !!d.isVanilla,
	        permissions: d.permissions || 0
	      };
	      if (d.isVanilla) {
	        avatar[""] = getAvatarUrl_(avatarID, "");
	        avatar.dj = getAvatarUrl_(avatarID, 'dj');
	        avatar.b = getAvatarUrl_(avatarID, 'b');
	      } else {
	        base_url = d.base_url || "";
	        avatar[""] = base_url + (d.anim || avatarID + '.png');
	        avatar.dj = base_url + (d.dj || avatarID + 'dj.png');
	        avatar.b = base_url + (d.b || avatarID + 'b.png');
	      }
	      p0ne._avatars[avatarID] = avatar;
	      (ref$ = Lang.userAvatars)[key$ = avatar.category] || (ref$[key$] = avatar.category);
	      delete Avatar.IMAGES[avatarID + ""];
	      delete Avatar.IMAGES[avatarID + "dj"];
	      delete Avatar.IMAGES[avatarID + "b"];
	      if (!customAvatars.updateAvatarStore.loading) {
	        customAvatars.updateAvatarStore.loading = true;
	        requestAnimationFrame(function(){
	          customAvatars.updateAvatarStore();
	          customAvatars.updateAvatarStore.loading = false;
	        });
	      }
	    };
	    this.addAvatar = function(avatarID, d){
	      var avatar;
	      if (typeof d === 'object') {
	        avatar = d;
	        d.avatarID = avatarID;
	      } else if (typeof avatarID === 'object') {
	        avatar = avatarID;
	      } else {
	        throw new TypeError("invalid avatar data passed to addAvatar(avatarID*, data)");
	      }
	      d.isVanilla = false;
	      return _internal_addAvatar(d);
	    };
	    this.removeAvatar = function(avatarID){
	      var i$, ref$, len$, u, vaID;
	      for (i$ = 0, len$ = (ref$ = users.models).length; i$ < len$; ++i$) {
	        u = ref$[i$];
	        if (u.get('avatarID') === avatarID && (vaID = u.get('vanillaAvatarID'))) {
	          u.set('avatarID', vaID);
	        }
	      }
	      delete p0ne._avatars[avatarID];
	    };
	    this.changeAvatar = function(uid, avatarID){
	      var u, avatar, ref$;
	      if (!(u = users.get(uid)) || !(avatar = p0ne._avatars[avatarID]) && !(avatarID = u.get('vanillaAvatarID'))) {
	        console.warn("[p0ne custom avatars] can't load user or avatar: '" + uid + "', '" + avatarID + "'");
	        return;
	      }
	      if (!avatar.permissions || API.hasPermission(uid, avatar.permissions)) {
	        if (!u.get('vanillaAvatarID')) {
	          u.set('vanillaAvatarID', u.get('avatarID'));
	        }
	        u.set('avatarID', avatarID);
	      } else {
	        console.warn("user with ID " + uid + " doesn't have permissions for avatar '" + avatarID + "'");
	      }
	      if (uid === userID) {
	        if ((ref$ = p0ne._avatars[avatarID]) != null && ref$.isVanilla) {
	          this$._settings.vanillaAvatarID = avatarID;
	        }
	        this$._settings.avatarID = avatarID;
	        this$.saveSettings();
	      }
	    };
	    this.updateAvatarStore = function(){
	      var styles, avatarIDs, l, avatarID, ref$, avi, vanilla, categories, ref1$, key$, category, avis, i$, len$;
	      styles = "";
	      avatarIDs = [];
	      l = 0;
	      for (avatarID in ref$ = p0ne._avatars) {
	        avi = ref$[avatarID];
	        if (!avi.isVanilla) {
	          avatarIDs[l++] = avatarID;
	          styles += ".avi-" + avatarID + " {background-image: url('" + avi[''] + "');background-position: " + (avi.thumbOffsetLeft || 0) + "px " + (avi.thumbOffsetTop || 0) + "px";
	          styles += "}\n";
	        }
	      }
	      if (l) {
	        css('p0ne_avatars', ".avi {background-repeat: no-repeat;}\n.thumb.small .avi-" + avatarIDs.join(', .thumb.small .avi-') + " {background-size: 1393px; /* = 836/15*24 thumbsWidth / thumbsCount * animCount*/}\n.thumb.medium .avi-" + avatarIDs.join(', .thumb.medium .avi-') + " {background-size: 1784px; /* = 1115/15*24 thumbsWidth / thumbsCount * animCount*/}\n" + styles + "");
	      }
	      vanilla = [];
	      l = 0;
	      categories = {};
	      for (avatarID in ref$ = p0ne._avatars) {
	        avi = ref$[avatarID];
	        if (avi.inInventory || !avi.isVanilla) {
	          if (avi.isVanilla) {
	            vanilla[l++] = new Avatar({
	              id: avatarID,
	              category: avi.category,
	              type: 'avatar'
	            });
	          } else {
	            (ref1$ = categories[key$ = avi.category] || (categories[key$] = []))[ref1$.length] = avatarID;
	          }
	        }
	      }
	      myAvatars.models = [];
	      l = 0;
	      for (category in categories) {
	        avis = categories[category];
	        for (i$ = 0, len$ = avis.length; i$ < len$; ++i$) {
	          avatarID = avis[i$];
	          myAvatars.models[l++] = new Avatar({
	            id: avatarID,
	            category: category,
	            type: 'avatar'
	          });
	        }
	      }
	      myAvatars.models = myAvatars.models.concat(vanilla);
	      myAvatars.length = myAvatars.models.length;
	      myAvatars.trigger('reset', false);
	      console.log(getTime() + " [p0ne custom avatars] avatar inventory updated");
	      return true;
	    };
	    addListener(myAvatars, 'reset', function(vanillaTrigger){
	      if (vanillaTrigger) {
	        this$.updateAvatarStore();
	      }
	    });
	    wrap(InventoryDropdown.prototype, 'draw', function(d_){
	      return function(){
	        var html, categories, curAvatarID, i$, ref$, len$, avi, curCategory, category;
	        html = "";
	        categories = {};
	        curAvatarID = API.getUser().avatarID;
	        for (i$ = 0, len$ = (ref$ = myAvatars.models).length; i$ < len$; ++i$) {
	          avi = ref$[i$];
	          categories[avi.get('category')] = true;
	          if (avi.id === curAvatarID) {
	            curCategory = avi.get('category');
	          }
	        }
	        curCategory || (curCategory = (ref$ = myAvatars.models[0]) != null ? ref$.get('category') : void 8);
	        for (category in categories) {
	          html += "<div class=row data-value='" + category + "'><span>" + Lang.userAvatars[category] + "</span></div>";
	        }
	        this.$el.html("<dl class=dropdown><dt><span></span><i class='icon icon-arrow-down-grey'></i><i class='icon icon-arrow-up-grey'></i></dt><dd>" + html + "</dd></dl>").on('click', 'dt', bind$(this, 'onBaseClick')).on('click', '.row', bind$(this, 'onRowClick'));
	        if (!categories[InventoryDropdown.selected]) {
	          InventoryDropdown.selected = curCategory;
	        }
	        this.select(InventoryDropdown.selected);
	        this.$el.show();
	      };
	    });
	    Lang.userAvatars.p0ne = "Custom Avatars";
	    /*for {id:avatarID, attributes:{category}} in AvatarList.models
	        _internal_addAvatar do
	            avatarID: avatarID
	            isVanilla: true
	            category: category
	            #category: avatarID.replace /\d+$/, ''
	            #category: avatarID.substr(0,avatarID.length-2) damn you "tastycat"
	    console.log "[p0ne custom avatars] added internal avatars", p0ne._avatars
	    */
	    for (i$ = 0, len$ = (ref$ = window.Cells).length; i$ < len$; ++i$) {
	      Cell = ref$[i$];
	      wrap(Cell.prototype, 'render', fn$);
	      wrap(Cell.prototype, 'onClick', fn1$);
	    }
	    addListener(user_, 'change:vanillaAvatarID', function(user_, newAvatarID){
	      var view, ref$, i$, ref1$, len$, cell;
	      if ($vanillaAvatarCell != null) {
	        $vanillaAvatarCell.remove();
	      }
	      if (view = typeof app != 'undefined' && app !== null ? (ref$ = app.user.view) != null ? ref$.view : void 8 : void 8) {
	        for (i$ = 0, len$ = (ref1$ = view.cells || []).length; i$ < len$; ++i$) {
	          cell = ref1$[i$];
	          if (cell.model.id === newAvatarID) {
	            $vanillaAvatarCell = $("<div class=p0ne-vanilla-avatar-highlight>your vanilla avatar</div>").appendTo(cell.$el.find('.top'));
	            break;
	          }
	        }
	      }
	    });
	    user_.set('vanillaAvatarID', this._settings.vanillaAvatarID);
	    addListener(API, 'p0ne:socket:userUpdate', function(data){
	      var ref$;
	      if (data.avatarID) {
	        user_.set('vanillaAvatarID', data.avatarID);
	        this$._settings.vanillaAvatarID = data.avatarID;
	        if (data.i === userID) {
	          if ((ref$ = this$.socket) != null) {
	            ref$.emit('changeAvatarID', null);
	          }
	        }
	        this$.saveSettings();
	      }
	    });
	    $.ajax({
	      url: '/_/store/inventory/avatars',
	      success: function(d){
	        var i$, ref$, len$, avatar;
	        for (i$ = 0, len$ = (ref$ = d.data).length; i$ < len$; ++i$) {
	          avatar = ref$[i$];
	          if (!p0ne._avatars[avatar.id]) {
	            _internal_addAvatar({
	              avatarID: avatar.id,
	              isVanilla: true,
	              category: avatar.category
	            });
	          }
	          p0ne._avatars[avatar.id].inInventory = true;
	        }
	        this$.updateAvatarStore();
	      }
	    });
	    if ((typeof _$context != 'undefined' && _$context !== null) && (typeof user_ != 'undefined' && user_ !== null)) {
	      addListener(_$context, 'ack', function(){
	        wrap(user_, 'set', function(s_){
	          return function(obj, val){
	            if (obj.avatarID && obj.avatarID === this.get('vanillaAvatarID')) {
	              delete obj.avatarID;
	            }
	            return s_.call(this, obj, val);
	          };
	        });
	      });
	      addListener(_$context, 'UserEvent:friends', function(){
	        revert(user_, 'set');
	      });
	    }
	    /*####################################
	    #         ppCAS Integration          #
	    ####################################*/
	    this.oldBlurb = API.getUser().blurb;
	    this.blurbIsChanged = false;
	    urlParser = document.createElement('a');
	    addCommand('ppCAS', {
	      description: 'changes the plug_p0ne Custom Avatar Server ("ppCAS")',
	      callback: function(str){
	        var server, ref$, forceReconnect;
	        server = $.trim(str.substr(6));
	        if (server === "<url>") {
	          chatWarn({
	            icon: 'p0ne-icon',
	            title: "p0ne avatars",
	            message: "hahaha, no. You have to replace '<url>' with an actual URL of a ppCAS server, otherwise it won't work."
	          });
	          return;
	        } else if (server === 'default') {
	          server = this$.DEFAULT_SERVER;
	        } else if (server === 'reconnect') {
	          server = ((ref$ = this$.socket) != null ? ref$.url : void 8) || this$.DEFAULT_SERVER;
	          forceReconnect = true;
	        } else if (server.length === 0) {
	          chatWarn({
	            icon: 'p0ne-icon',
	            title: "p0ne avatars",
	            message: "Use `/ppCAS <url>` to connect to a plug_p0ne Custom Avatar Server. Use `/ppCAS default` to connect to the default server again. or `/ppCAS reconnect` to force-reconnect to the current server"
	          });
	          return;
	        }
	        urlParser.href = server;
	        if (urlParser.host !== location.host) {
	          console.log(getTime() + " [p0ne custom avatars] connecting to", server);
	          this$.connect(server, forceReconnect);
	        } else {
	          console.warn(getTime() + " [p0ne custom avatars] invalid ppCAS server");
	        }
	      }
	    });
	    this.connect(this.DEFAULT_SERVER);
	    addListener(_$context, 'room:joined', function(){
	      var ref$;
	      if ((ref$ = this$.socket) != null) {
	        ref$.emit('changeRoom', getRoomSlug());
	      }
	    });
	    function fn$(r_){
	      return function(){
	        r_.call(this);
	        if (customAvatars._settings.avatarID !== customAvatars._settings.vanillaAvatarID && customAvatars._settings.vanillaAvatarID === this.model.get('id')) {
	          $vanillaAvatarCell = $("<div class=p0ne-vanilla-avatar-highlight>your vanilla avatar</div>").appendTo(this.$el.find('.top'));
	        }
	      };
	    }
	    function fn1$(oC_){
	      return function(){
	        var avatarID, ref$;
	        avatarID = this.model.get('id');
	        if (!p0ne._avatars[avatarID] || p0ne._avatars[avatarID].inInventory) {
	          oC_.call(this);
	        } else {
	          customAvatars.changeAvatar(userID, avatarID);
	          if ((ref$ = customAvatars.socket) != null) {
	            ref$.emit('changeAvatarID', avatarID);
	          }
	          this.onSelected();
	        }
	      };
	    }
	  },
	  connectAttemps: 1,
	  connect: function(url, reconnecting, reconnectWarning){
	    var reconnect, user, oldBlurb, newBlurb, this$ = this;
	    if (!reconnecting && this.socket) {
	      if (url === this.socket.url && this.socket.readyState === 1) {
	        return;
	      } else {
	        try {
	          this.socket.close();
	        } catch (e$) {}
	      }
	    }
	    console.log("[p0ne custom avatars] using socket as ppCAS avatar server");
	    reconnect = true;
	    _$context.trigger('ppCAS:connecting');
	    API.trigger('ppCAS:connecting');
	    this.socket = new WebSocket(url);
	    this.socket._listeners = {};
	    this.socket.on = function(type, fn){
	      var ref$;
	      (ref$ = this._listeners)[type] || (ref$[type] = []);
	      (ref$ = this._listeners[type])[ref$.length] = fn;
	    };
	    this.socket.off = function(type, fn){
	      if (!this._listeners[type]) {
	        return;
	      }
	      if (fn) {
	        this._listeners[type].removeItem(fn);
	      } else {
	        delete this._listeners[type];
	      }
	    };
	    this.socket.once = function(type, callback){
	      this.on(type, function(){
	        this.off(type, callback);
	        callback.apply(this, arguments);
	      });
	    };
	    this.socket.trigger = function(type, args){
	      var listeners, i$, len$, fn;
	      if (typeof args !== 'object' || !(args != null && args.length)) {
	        args = [args];
	      }
	      listeners = this._listeners[type];
	      if (listeners) {
	        for (i$ = 0, len$ = listeners.length; i$ < len$; ++i$) {
	          fn = listeners[i$];
	          fn.apply(this, args);
	        }
	      }
	    };
	    this.socket.emit = function(type){
	      var data, res$, i$, to$;
	      res$ = [];
	      for (i$ = 1, to$ = arguments.length; i$ < to$; ++i$) {
	        res$.push(arguments[i$]);
	      }
	      data = res$;
	      console.log(getTime() + " [ppCAS] > [" + type + "]", data);
	      this.send(JSON.stringify({
	        type: type,
	        data: data
	      }));
	    };
	    this.socket.onmessage = function(arg$){
	      var message, ref$, type, data, e;
	      message = arg$.data;
	      try {
	        ref$ = JSON.parse(message), type = ref$.type, data = ref$.data;
	        if (type !== 'h' && type !== 'disconnected') {
	          console.log(getTime() + " [ppCAS] < [" + type + "]", data);
	        }
	      } catch (e$) {
	        e = e$;
	        console.warn(getTime() + " [ppCAS] invalid message received", message, e);
	        return;
	      }
	      this$.socket.trigger(type, data);
	    };
	    this.socket.close_ = this.socket.close;
	    this.socket.close = function(){
	      this.isKill = true;
	      this.close_();
	    };
	    user = API.getUser();
	    oldBlurb = user.blurb || "";
	    newBlurb = oldBlurb.replace(/\s*🿎\w{6}/g, "");
	    if (oldBlurb !== newBlurb) {
	      this.changeBlurb(newBlurb, {
	        success: function(){
	          console.log(getTime() + " [ppCAS] removed old authToken from user blurb");
	        }
	      });
	    }
	    this.socket.on('authToken', function(authToken){
	      var user, newBlurb;
	      user = API.getUser();
	      this$.oldBlurb = user.blurb || "";
	      if (!user.blurb) {
	        newBlurb = authToken;
	      } else if (user.blurb.length >= 72) {
	        newBlurb = user.blurb.substr(0, 71) + "… 🿎" + authToken;
	      } else {
	        newBlurb = user.blurb + " 🿎" + authToken;
	      }
	      this$.blurbIsChanged = true;
	      this$.changeBlurb(newBlurb, {
	        success: function(){
	          this$.blurbIsChanged = false;
	          this$.socket.emit('auth', {
	            room: getRoomSlug(),
	            userID: user.id,
	            username: user.slug
	          });
	        },
	        error: function(){
	          chatWarn({
	            icon: 'p0ne-icon',
	            title: "p0ne avatars",
	            message: "Failed to authenticate by changing the blurb. Are you a guest?"
	          });
	          this$.changeBlurb(this$.oldBlurb, {
	            success: function(){
	              console.log(getTime() + " [ppCAS] blurb reset.");
	            }
	          });
	          this$.disable();
	        }
	      });
	    });
	    this.socket.on('authAccepted', function(){
	      this$.connectAttemps = 0;
	      reconnecting = false;
	      this$.changeBlurb(this$.oldBlurb, {
	        success: function(){
	          this$.blurbIsChanged = false;
	        },
	        error: function(){
	          chatWarn({
	            icon: 'p0ne-icon',
	            title: "p0ne avatars",
	            message: "failed to authenticate to avatar server. Are you a guest? Or maybe plug.dj is down or changed it's API?"
	          });
	          this$.changeBlurb(this$.oldBlurb, {
	            error: function(){
	              console.error(getTime() + " [ppCAS] failed to reset the blurb.");
	            }
	          });
	          this$.disable();
	        }
	      });
	    });
	    this.socket.on('authDenied', function(){
	      console.warn(getTime() + " [ppCAS] authDenied");
	      chatWarn({
	        icon: 'p0ne-icon',
	        title: "p0ne avatars",
	        message: "authentification failed"
	      });
	      this$.changeBlurb(this$.oldBlurb, {
	        success: function(){
	          this$.blurbIsChanged = false;
	        },
	        error: function(){
	          this$.changeBlurb(this$.oldBlurb, {
	            error: function(){
	              console.error(getTime() + " [ppCAS] failed to reset the blurb.");
	            }
	          });
	        }
	      });
	      chatWarn({
	        icon: 'p0ne-icon',
	        title: "p0ne avatars",
	        message: "Failed to authenticate as " + API.getUser().username + "."
	      });
	      this$.disable();
	    });
	    this.socket.on('avatars', function(avatars){
	      var avatarID, avatar;
	      for (avatarID in this$.socket.avatars) {
	        if (!avatars[avatarID]) {
	          this$.removeAvatar(avatarID);
	        }
	      }
	      this$.socket.avatars = avatars;
	      for (avatarID in avatars) {
	        avatar = avatars[avatarID];
	        this$.addAvatar(avatarID, avatar);
	      }
	      if (this$._settings.avatarID in avatars) {
	        this$.changeAvatar(userID, this$._settings.avatarID);
	        this$.socket.emit('changeAvatarID', this$._settings.avatarID);
	      }
	      /*else if not @hasNewAvatar and @_settings.avatarID of avatars
	          @socket.emit \changeAvatarID, @_settings.avatarID*/
	      if (this$.socket.users) {
	        requestAnimationFrame(initUsers);
	      }
	    });
	    this.socket.on('users', function(users){
	      var uid, u, vaID;
	      for (uid in this$.socket.users) {
	        if (!users[uid]) {
	          u = getUserInternal(uid);
	          vaID = u.get('vanillaAvatarID');
	          if (vaID && vaID !== u.get('avatarID')) {
	            u.set('avatarID', u.get('vanillaAvatarID'));
	          }
	        }
	      }
	      this$.socket.users = users;
	      if (this$.socket.avatars) {
	        requestAnimationFrame(initUsers);
	      }
	    });
	    function initUsers(avatarID){
	      var userID, ref$;
	      for (userID in ref$ = this$.socket.users) {
	        avatarID = ref$[userID];
	        this$.changeAvatar(userID, avatarID);
	      }
	      if (reconnecting) {
	        chatWarnSmall({
	          icon: 'p0ne-icon',
	          message: "p0ne avatars: reconnected"
	        });
	      }
	      _$context.trigger('ppCAS:connected');
	      return API.trigger('ppCAS:connected');
	    }
	    this.socket.on('changeAvatarID', function(userID, avatarID){
	      if (!users.get(userID)) {
	        return;
	      }
	      console.log(getTime() + " [ppCAS] change other's avatar:", userID, avatarID);
	      this$.changeAvatar(userID, avatarID);
	    });
	    this.socket.on('disconnected', function(userID){
	      if (typeof users != 'undefined' && users !== null
	        ? users.get(userID)
	        : getUser(userID)) {
	        this$.changeAvatar(userID);
	      }
	    });
	    this.socket.on('h', function(){});
	    this.socket.onclose = function(e){
	      var timeout;
	      console.warn(getTime() + " [ppCAS] DISCONNECTED", e);
	      _$context.trigger('ppCAS:disconnected');
	      API.trigger('ppCAS:disconnected');
	      /*if e.wasClean
	          reconnect := false
	      else*/
	      if (reconnect && !this$.disabled && !this$.socket.isKill) {
	        if (this$.connectAttemps < 90) {
	          timeout = ~~((5000 + Math.random() * 5000) * this$.connectAttemps * this$.connectAttemps);
	        } else {
	          timeout = 15 .min;
	        }
	        console.log(getTime() + " [ppCAS] reconnecting in " + humanTime(timeout) + " (" + xth(this$.connectAttemps) + " attempt)");
	        this$.reconnectTimer = sleep(timeout, function(){
	          console.log(getTime() + " [ppCAS] reconnecting…");
	          this$.connectAttemps++;
	          this$.connect(url, true, this$.connectAttemps === 1);
	          _$context.trigger('ppCAS:connecting');
	          API.trigger('ppCAS:connecting');
	        });
	      }
	    };
	  },
	  changeBlurb: function(newBlurb, options){
	    options == null && (options = {});
	    $.ajax({
	      method: 'PUT',
	      url: '/_/profile/blurb',
	      contentType: 'application/json',
	      data: JSON.stringify({
	        blurb: newBlurb
	      }),
	      success: options.success,
	      error: options.error
	    });
	  },
	  disableLate: function(){
	    var ref$, avatarID, ref1$, avi, i$, user, that;
	    if (this.blurbIsChanged) {
	      this.changeBlurb(this.oldBlurb);
	    }
	    if ((ref$ = this.socket) != null) {
	      ref$.close();
	    }
	    clearTimeout(this.reconnectTimer);
	    for (avatarID in ref1$ = p0ne._avatars) {
	      avi = ref1$[avatarID];
	      avi.inInventory = false;
	    }
	    if (typeof this.updateAvatarStore == 'function') {
	      this.updateAvatarStore();
	    }
	    for (i$ in ref1$ = users.models) {
	      user = ref1$[i$];
	      if (that = user.get('vanillaAvatarID')) {
	        user.set('avatarID', that);
	      }
	    }
	  }
	});
	module('ppCASStatusRing', {
	  settings: 'dev',
	  help: 'shows whether or not you are connected to the ppCAS (plug_p0ne Custom Avatar Server) by drawing a ring around your avatar in the footer (below the chat).\ngreen: connected\norange: connecting\nred: disconnected',
	  setup: function(arg$){
	    var addListener, ref$, this$ = this;
	    addListener = arg$.addListener;
	    this.$footerAvi = $('#footer-user .thumb');
	    addListener(API, 'ppCAS:connected', function(){
	      this$.$footerAvi.css({
	        borderColor: 'limegreen'
	      });
	    });
	    addListener(API, 'ppCAS:connecting', function(){
	      this$.$footerAvi.css({
	        borderColor: 'orange'
	      });
	    });
	    addListener(API, 'ppCAS:disconnected', function(){
	      this$.$footerAvi.css({
	        borderColor: 'red'
	      });
	    });
	    switch ((ref$ = customAvatars.socket) != null && ref$.readyState) {
	    case 0:
	      this.$footerAvi.css({
	        borderColor: 'orange'
	      });
	      break;
	    case 1:
	      this.$footerAvi.css({
	        borderColor: 'limegreen'
	      });
	      break;
	    default:
	      this.$footerAvi.css({
	        borderColor: 'red'
	      });
	    }
	  },
	  disable: function(){
	    if (this.$footerAvi) {
	      this.$footerAvi.css({
	        borderColor: ''
	      });
	    }
	    $('.p0ne-vanilla-avatar-highlight').remove();
	  }
	});
	function bind$(obj, key, target){
	  return function(){ return (target || obj)[key].apply(obj, arguments) };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/**
	 * Base plug_p0ne modules
	 *
	 * @author jtbrinkmann aka. Brinkie Pie
	 * @license MIT License
	 * @copyright (c) 2015 J.-T. Brinkmann
	 */
	console.log("~~~~~~~ p0ne.base ~~~~~~~");
	/*####################################
	#           DISABLE/STATUS           #
	####################################*/
	module('disableCommand', {
	  setup: function(arg$){
	    var addListener, this$ = this;
	    addListener = arg$.addListener;
	    addListener(API, 'chat', function(msg){
	      var enabledModules, disabledModules, i$, ref$, m, response;
	      if (msg.message.has("!disable") && API.hasPermission(msg.uid, API.ROLE.BOUNCER) && isMention(msg)) {
	        console.warn("[DISABLE] '" + status + "'");
	        enabledModules = [];
	        disabledModules = [];
	        for (i$ in ref$ = p0ne.modules) {
	          m = ref$[i$];
	          if (m.disableCommand) {
	            if (!m.disabled) {
	              enabledModules[enabledModules.length] = m.displayName || m.name;
	              m.disable();
	            } else {
	              disabledModules[disabledModules.length] = m.displayName || m.name;
	            }
	          }
	        }
	        response = "@" + msg.un + " ";
	        if (enabledModules.length) {
	          response += "disabled " + humanList(enabledModules) + ".";
	        } else if (disabledModules.length) {
	          response += " " + humanList(disabledModules) + " " + (disabledModules.length === 1 ? 'was' : 'were') + " not enabled.";
	        }
	        API.sendChat(response);
	      }
	    });
	  }
	});
	module('getStatus', {
	  module: function(){
	    var status, that, modules, res$, i$, ref$, m;
	    status = "Running plug_p0ne v" + p0ne.version + " (https://p0ne.com/plug_p0ne)";
	    if (that = getPlugCubedVersion()) {
	      status += "\tand plug³ v" + that;
	    }
	    status += ".\tStarted " + ago(p0ne.started);
	    res$ = [];
	    for (i$ in ref$ = p0ne.modules) {
	      m = ref$[i$];
	      if (m.disableCommand && !m.disabled) {
	        res$.push(m.displayName);
	      }
	    }
	    modules = res$;
	    if (modules.length) {
	      status += ".\t" + humanList(modules) + " enabled";
	    }
	    return status;
	  }
	});
	module('statusCommand', {
	  timeout: false,
	  setup: function(arg$){
	    var addListener, this$ = this;
	    addListener = arg$.addListener;
	    addListener(API, 'chat', function(data){
	      var status;
	      if (!this$.timeout) {
	        if (data.message.has('!status') && isMention(data) && API.hasPermission(data.uid, API.ROLE.BOUNCER)) {
	          this$.timeout = true;
	          status = getStatus() + "";
	          console.info("[AR] status: '" + status + "'", data.uid, data.un);
	          API.sendChat(status, data);
	          sleep(30 .min(function(){
	            this$.timeout = false;
	          }));
	        }
	      }
	    });
	  }
	});
	/*####################################
	#             AUTOJOIN               #
	####################################*/
	module('autojoin', {
	  displayName: "Autojoin",
	  help: 'Automatically join the waitlist again after you DJ\'d or if the waitlist gets unlocked.\n\nThis module can be disabled remotely by the room staff or plug.dj staff.\nIt will also disable itself, if you got removed from the waitlist by a moderator',
	  settings: 'base',
	  settingsVip: true,
	  settingsSimple: true,
	  disabled: true,
	  disableCommand: true,
	  settingsPerCommunity: true,
	  optional: ['_$context', 'booth', 'socketListeners'],
	  setup: function(arg$){
	    var addListener, ref$, fn, wasLocked, this$ = this;
	    addListener = arg$.addListener;
	    if (((ref$ = API.getDJ()) != null ? ref$.id : void 8) !== userID && API.getWaitListPosition() === -1) {
	      join();
	    }
	    fn = addListener(API, 'advance waitListUpdate ws:reconnected sjs:reconnected p0ne:reconnected', function(d){
	      var ref$;
	      if (((ref$ = API.getDJ()) != null ? ref$.id : void 8) !== userID && API.getWaitListPosition() === -1) {
	        if (join()) {
	          console.log(getTime() + " [autojoin] joined waitlist");
	        } else {
	          console.error(getTime() + " [autojoin] failed to join waitlist");
	          API.once('advance', this.autojoin, this);
	        }
	      }
	    });
	    if (typeof _$context != 'undefined' && _$context !== null) {
	      addListener(_$context, 'room:joined', fn);
	      wasLocked = $djButton.hasClass('is-locked');
	      addListener(_$context, 'djButton:update', function(){
	        var isLocked;
	        isLocked = $djButton.hasClass('is-locked');
	        if (wasLocked && !isLocked) {
	          join();
	        }
	        wasLocked = isLocked;
	      });
	    }
	    addListener(API, 'p0ne:socket:modRemoveDJ', function(data){
	      if (data.t === API.getUser().rawun) {
	        this$.disable();
	      }
	    });
	  }
	});
	/*####################################
	#             AUTOWOOT               #
	####################################*/
	module('autowoot', {
	  displayName: 'Autowoot',
	  help: 'Automatically woots all songs.\n(you are still able to manually meh songs)\n\nplease consider just NOT using autowoot. It does NOT earn you any points/exp and instead just spams/overloads the plug.dj servers.',
	  settings: 'base',
	  settingsVip: true,
	  settingsSimple: true,
	  disabled: true,
	  disableCommand: true,
	  settingsPerCommunity: true,
	  optional: ['chatDomEvents'],
	  _settings: {
	    warnOnMehs: true
	  },
	  setup: function(arg$){
	    var addListener, timer, timer2, lastScore, ref$, hasMehWarning, userVoted, autowoot, fn, this$ = this;
	    addListener = arg$.addListener;
	    lastScore = (ref$ = API.getHistory()[1]) != null ? ref$.score : void 8;
	    hasMehWarning = false;
	    userVoted = false;
	    autowoot = function(){
	      clearTimeout(timer);
	      timer = sleep(1 .s + 3 .s * Math.random(), function(){
	        if (!API.getUser().vote) {
	          console.log(getTime() + " [autowoot] autowooting");
	          woot();
	        }
	      });
	    };
	    console.log(getTime() + " [autowoot] autowooting");
	    woot();
	    fn = addListener(API, 'advance', function(d){
	      if (d.media) {
	        lastScore = d.lastPlay.score;
	        userVoted = false;
	        autowoot();
	      }
	      if (hasMehWarning) {
	        clearTimeout(timer2);
	        get$cms().find('.p0ne-autowoot-meh-btn').closest('.cm').remove();
	        hasMehWarning = false;
	      }
	    });
	    addListener(_$context, 'room:joined', autowoot);
	    addListener(API, 'voteUpdate', function(d){
	      var score;
	      score = API.getScore();
	      if (d.vote === -1 && this$._settings.warnOnMehs && !hasMehWarning && score.negative > 2 * score.positive && score.negative > (lastScore.positive + lastScore.negative) / 4 && score.negative >= 5 && !userVoted && API.getTimeRemaining() > 30) {
	        timer2 = sleep(5000, function(){
	          chatWarn({
	            icon: 'p0ne-icon',
	            title: "Autowoot",
	            message: "Many users meh'd this song, you may be preventing a voteskip. <span class=p0ne-autowoot-meh-btn>Click here to meh</span> if you dislike the song",
	            isHTML: true
	          });
	          playChatSound();
	        });
	        hasMehWarning = true;
	      }
	    });
	    addListener($('#vote'), 'click', function(){
	      userVoted = true;
	    });
	    addListener(chatDomEvents, 'click', '.p0ne-autowoot-meh-btn', function(){
	      meh();
	      $(this).closest('.cm').remove();
	    });
	  }
	});
	/*####################################
	#              AUTOMUTE              #
	####################################*/
	module('automute', {
	  displayName: "Automute",
	  settings: 'base',
	  settingsSimple: true,
	  optional: ['streamSettings'],
	  help: 'automatically set songs from the "mute list" to silent, so you don\'t have to hear them when they get played. Useful for tracks that you don\'t like but that often get played.',
	  _settings: {
	    songlist: {}
	  },
	  setup: function(arg$, automute){
	    var addListener, media, $snoozeBtn, $box, streamOff, onModeChange, this$ = this;
	    addListener = arg$.addListener;
	    this.songlist = this._settings.songlist;
	    media = API.getMedia();
	    addListener(API, 'advance', function(d){
	      if ((media = d.media) && this$.songlist[media.cid]) {
	        console.info("[automute] '" + media.author + " - " + media.title + "' is in automute list. Automuting…");
	        chatWarn({
	          icon: 'icon-playback-snooze',
	          title: "automute",
	          message: "This song is automuted"
	        });
	        snooze();
	      }
	    });
	    $snoozeBtn = $('#playback .snooze');
	    this.$box_ = $snoozeBtn.children();
	    $box = $("<div class=box></div>");
	    streamOff = isSnoozed();
	    addListener(API, 'p0ne:changeMode', onModeChange = function(mode){
	      var newStreamOff;
	      newStreamOff = mode === 'off';
	      requestAnimationFrame(function(){
	        if (newStreamOff) {
	          if (media) {
	            $snoozeBtn.empty().append($box);
	            if (this$.songlist[media.cid]) {
	              console.log("[automute] change automute-btn to REMOVE");
	              $snoozeBtn.addClass('p0ne-automute p0ne-automute-remove').removeClass('p0ne-automute-add');
	              $box.html("remove from<br>automute");
	            } else {
	              console.log("[automute] change automute-btn to ADD");
	              $snoozeBtn.addClass('p0ne-automute p0ne-automute-add').removeClass('p0ne-automute-remove');
	              $box.html("add to<br>automute");
	            }
	          }
	        } else if (streamOff) {
	          console.log("[automute] change automute-btn to SNOOZE");
	          $snoozeBtn.empty().removeClass('p0ne-automute p0ne-automute-add p0ne-automute-remove').append(this$.$box_);
	        }
	        streamOff = newStreamOff;
	      });
	    });
	    this.updateBtn = function(mode){
	      onModeChange(streamOff && 'off');
	    };
	    addListener($snoozeBtn, 'click', function(e){
	      if (streamOff) {
	        automute();
	      }
	    });
	  },
	  module: function(media, isAdd){
	    var ref$, ref1$;
	    if (typeof media === 'boolean' || media === 'toggle') {
	      isAdd = media;
	      media = false;
	    }
	    if (media) {
	      if (media.toJSON) {
	        media = media.toJSON();
	      }
	      if (!media.cid || !'author' in media) {
	        throw new TypeError("invalid arguments for automute(media, isAdd*)");
	      }
	    } else {
	      media = API.getMedia();
	    }
	    if (isAdd === 'toggle' || isAdd == null) {
	      isAdd = !this.songlist[media.cid];
	    }
	    if (isAdd) {
	      if (this.songlist[media.cid]) {
	        chatWarnSmall({
	          icon: 'icon-volume-off',
	          message: "already automuted " + media.author + " - " + media.title + "'",
	          className: 'p0ne-automute-notif p0ne-automute-added'
	        });
	      } else {
	        this.songlist[media.cid] = media;
	        this.createRow(media.cid, (ref$ = this.$el) != null ? ref$.is(':visible') : void 8);
	        chatWarnSmall({
	          icon: 'icon-volume-off',
	          message: "automuted " + media.author + " - " + media.title + "'",
	          className: 'p0ne-automute-notif p0ne-automute-added'
	        });
	      }
	    } else {
	      if (this.songlist[media.cid]) {
	        this.removeRow(media.cid);
	      } else {
	        chatWarnSmall({
	          icon: 'icon-volume-half',
	          message: "wasn't automuted: " + media.author + " - " + media.title + "'",
	          className: 'p0ne-automute-notif p0ne-automute-added'
	        });
	      }
	    }
	    if (media.cid === ((ref1$ = API.getMedia()) != null ? ref1$.cid : void 8)) {
	      this.updateBtn();
	    }
	    this.saveSettings();
	  },
	  $rows: {},
	  settingsPanel: function($el, automute){
	    var cid, yet$;
	    this.$el = $el;
	    this.$noRow = $("<div class='placeholder'>").html('Looks like you have no automuted songs.<br><br>To add the current song, write "/automute" in the chat<br>(it should not show up as a message to others)<br>Make sure to not have any spaces or other text before the slash!');
	    for (cid in yet$ = true, this.songlist) {
	      yet$ = false;
	      this.createRow(cid);
	    } if (yet$) {
	      this.$noRow.appendTo($el);
	    }
	    $el.on('mouseover', '.song-format-2 .load-sc', function(){
	      var this$ = this;
	      mediaLookup({
	        format: 2,
	        cid: $(this).closest('row').data('cid')
	      }).then(function(d){
	        $(this$).attr('href', d.url).removeClass('load-sc');
	      });
	    }).on('click', '.song-remove', function(){
	      var $row;
	      $row = $(this).closest('.row');
	      automute(automute.songlist[$(this).closest('.row').data('cid')], false);
	    });
	  },
	  createRow: function(cid, animated){
	    var ref$, song, mediaURL, loadSC, row;
	    if (this.$el) {
	      if ((ref$ = this.$noRow) != null) {
	        ref$.remove();
	      }
	      song = this.songlist[cid];
	      if (song.format === 1) {
	        mediaURL = "http://youtube.com/watch?v=" + song.cid;
	        loadSC = "";
	      } else {
	        mediaURL = "https://soundcloud.com/search?q=" + encodeURIComponent(song.author + ' - ' + song.title);
	        loadSC = " load-sc";
	      }
	      this.$rows[cid] = row = $("<div class='row song-format-" + song.format + "' data-cid='" + cid + "'><div class=song-thumb-wrapper><img class=song-thumb src='" + song.image + "'><span class=song-duration>" + mediaTime(song.duration) + "</span></div><div class=meta><div class=author title='" + song.author + "'>" + song.author + "</div><div class=title title='" + song.title + "'>" + song.title + "</div></div><div class='song-remove btn'><i class='icon icon-clear-input'></i></div><a class='song-open btn " + loadSC + "' href='" + mediaURL + "' target='_blank'><i class='icon icon-chat-popout'></i></a></div>");
	      if (animated) {
	        row.css({
	          transform: 'scale(0)',
	          height: 0
	        });
	        requestAnimationFrame(function(){
	          row.css({
	            transform: '',
	            height: ''
	          });
	        });
	      }
	      row.appendTo(this.$el);
	    }
	  },
	  removeRow: function(cid){
	    var $row, this$ = this;
		var media = this.songlist[cid];
	    chatWarnSmall({
	      icon: 'icon-volume-half',
	      message: "removed from automute: " + media.author + " - " + media.title + "'",
	      className: 'p0ne-automute-notif p0ne-automute-added'
	    });
	    delete this.songlist[cid];
	    if ($row = this.$rows[cid]) {
	      $row.css({
	        transform: 'scale(0)',
	        height: 0
	      });
	      sleep(500, function(){
	        var k;
	        $row.remove();
	        delete this$.$rows[cid];
	        for (k in this$.songlist) {
	          return;
	        }
	        this$.$noRow.appendTo(this$.$el);
	      });
	    }
	    this.saveSettings();
	  },
	  disable: function(){
	    $('#playback .snooze').empty().append(this.$box_);
	  }
	});
	/*####################################
	#          AFK AUTORESPOND           #
	####################################*/
	module('afkAutorespond', {
	  displayName: 'AFK Autorespond',
	  settings: 'base',
	  settingsSimple: true,
	  settingsVip: true,
	  _settings: {
	    message: "I'm AFK at the moment",
	    timeout: 1 .min
	  },
	  disabled: true,
	  disableCommand: true,
	  DEFAULT_MSG: "I'm AFK at the moment",
	  setup: function(arg$){
	    var addListener, $create, css, timeout, $btn, this$ = this;
	    addListener = arg$.addListener, $create = arg$.$create, css = arg$.css;
	    css('afkAutorespond', ".p0ne-afk-button::after {transition: width " + (+this._settings.timeout) + "ms linear;}");
	    timeout = false;
	    addListener(API, 'chat', function(msg){
	      switch (false) {
	      case !(msg.uid && msg.uid !== userID && !timeout && isMention(msg, true) && !msg.message.has('!disable')):
	        API.sendChat((this$._settings.emote || '') + "[AFK] " + (this$._settings.message || this$.DEFAULT_MSG));
	        // fallthrough
	      case msg.uid !== userID:
	        timeout = true;
	        $btn.addClass('p0ne-afk--timeouted');
	        requestAnimationFrame(function(){
	          $btn.removeClass('p0ne-afk--timeouted');
	        });
	        sleep(this$._settings.timeout, function(){
	          timeout = false;
	        });
	      }
	    });
	    $btn = $create('<div class=p0ne-afk-button>').text("Disable " + this.displayName).click(function(){
	      this$.disable();
	    }).appendTo('#footer-user');
	  },
	  settingsExtra: function($el){
	    var afkAutorespond, $input;
	    afkAutorespond = this;
	    $input = $("<input class=p0ne-settings-input placeholder=\"" + this.DEFAULT_MSG + "\">").val(this._settings.message).on('input', function(){
	      var val;
	      val = this.value;
	      if (val.startsWith("/me ") || val.startsWith("/em ")) {
	        afkAutorespond._settings.emote = val.substr(0, 4);
	        val = val.substr(4);
	      } else {
	        delete afkAutorespond._settings.emote;
	      }
	      afkAutorespond._settings.message = val;
	      afkAutorespond.saveSettings();
	    }).appendTo($el);
	  }
	});
	/*####################################
	#      JOIN/LEAVE NOTIFICATION       #
	####################################*/
	module('joinLeaveNotif', {
	  optional: ['chatDomEvents', 'chat', 'auxiliaries', 'database', 'ignores'],
	  settings: 'base',
	  displayName: 'Join/Leave Notifications',
	  help: 'Shows notifications for when users join/leave the room in the chat.\nNote: the country flags indicate the user\'s plug.dj language settings, they don\'t necessarily have to match where they are from.\n\nIcons explained:\n+ user joined\n- user left\n\u21ba user left and joined again (reconnected)\n\u21c4 user joined and left again',
	  _settings: {
	    mergeSameUser: true,
	    onlyShowFriends: false,
	    hideIgnoredUsers: false
	  },
	  setup: function(arg$, arg1$, update){
	    var addListener, css, lastMsg, $lastNotif, CHAT_TYPE, lastUsers, cssClasses, i$, ref$, len$;
	    addListener = arg$.addListener, css = arg$.css;
	    if (update) {
	      lastMsg = get$cm().children().last();
	      if (lastMsg.hasClass('p0ne-notif-joinleave')) {
	        $lastNotif = lastMsg;
	      }
	    }
	    CHAT_TYPE = 'p0ne-notif-joinleave';
	    lastUsers = {};
	    cssClasses = {
	      userJoin: 'join',
	      userLeave: 'leave',
	      refresh: 'refresh',
	      instaLeave: 'instaleave'
	    };
	    for (i$ = 0, len$ = (ref$ = ['userJoin', 'userLeave']).length; i$ < len$; ++i$) {
	      (fn$.call(this, ref$[i$]));
	    }
	    addListener(API, 'popout:open popout:close', function(){
	      var $lastNotif;
	      $lastNotif = get$cm().find('.p0ne-notif-joinleave:last');
	    });
	    function fn$(event_){
	      var this$ = this;
	      addListener(API, event_, function(u){
	        var event, reuseNotif, title, $msg, isAtBottom;
	        if (this$._settings.onlyShowFriends && !u.friend || this$._settings.hideIgnoredUsers && ignores.get(u.id)) {
	          return;
	        }
	        event = event_;
	        if (!(reuseNotif = (typeof chat != 'undefined' && chat !== null ? chat.lastType : void 8) === CHAT_TYPE && $lastNotif)) {
	          lastUsers = {};
	        }
	        title = '';
	        if (reuseNotif && lastUsers[u.id] && this$._settings.mergeSameUser) {
	          if (event === 'userJoin' && 'userJoin' !== lastUsers[u.id].event) {
	            event = 'refresh';
	            title = "title='reconnected'";
	          } else if (event === 'userLeave' && 'userLeave' !== lastUsers[u.id].event) {
	            event = 'instaLeave';
	            title = "title='joined and left again'";
	          }
	        }
	        $msg = $("<div class=p0ne-notif-" + cssClasses[event] + " data-uid=" + u.id + " " + title + ">" + formatUserHTML(u, true, {
	          lvl: true,
	          flag: true,
	          warning: true
	        }) + "" + getTimestamp() + "</div>");
	        if (event === event_) {
	          lastUsers[u.id] = {
	            event: event,
	            $el: $msg
	          };
	        }
	        if (reuseNotif) {
	          isAtBottom = chatIsAtBottom();
	          if (event !== event_) {
	            lastUsers[u.id].$el.replaceWith($msg);
	            delete lastUsers[u.id];
	          } else {
	            $lastNotif.append($msg);
	          }
	          if (isAtBottom) {
	            chatScrollDown();
	          }
	        } else {
	          $lastNotif = $("<div class='cm update p0ne-notif p0ne-notif-joinleave'>").append($msg);
	          appendChat($lastNotif);
	          if (typeof chat != 'undefined' && chat !== null) {
	            chat.lastType = CHAT_TYPE;
	          }
	        }
	      });
	    }
	  },
	  settingsExtra: function($el){
	    var joinLeaveNotif;
	    joinLeaveNotif = this;
	    $("<form><label><input type=checkbox class=p0ne-notif-joinleave-friends " + (this._settings.onlyShowFriends ? 'checked' : '') + "> Only friends</label><br><label><input type=checkbox class=p0ne-notif-joinleave-ignored " + (this._settings.hideIgnoredUsers ? '' : 'checked') + "> Show notifications for ignored users</label></form>").appendTo($el.css({
	      paddingLeft: 15
	    })).on('click', '.p0ne-notif-joinleave-friends', function(){
	      joinLeaveNotif._settings.onlyShowFriends = this.checked;
	      joinLeaveNotif.saveSettings();
	    }).on('click', '.p0ne-notif-joinleave-ignored', function(){
	      joinLeaveNotif._settings.hideIgnoredUsers = !this.checked;
	      joinLeaveNotif.saveSettings();
	    });
	  }
	});
	/*####################################
	#     CURRENT SONG TITLE TOOLTIP     #
	####################################*/
	module('titleCurrentSong', {
	  disable: function(){
	    $('#now-playing-media').prop('title', "");
	  },
	  setup: function(arg$){
	    var addListener;
	    addListener = arg$.addListener;
	    addListener(API, 'advance', function(d){
	      if (d.media) {
	        $('#now-playing-media').prop('title', d.media.author + " - " + d.media.title);
	      } else {
	        $('#now-playing-media').prop('title', null);
	      }
	    });
	  }
	});
	/*####################################
	#       MORE ICON IN USERLIST        #
	####################################*/
	module('userlistIcons', {
	  require: ['users', 'RoomUserRow'],
	  _settings: {
	    forceMehIcon: false
	  },
	  setup: function(arg$, userlistIcons){
	    var replace;
	    replace = arg$.replace;
	    replace(RoomUserRow.prototype, 'vote', function(){
	      var ref$, vote, that;
	      if (this.model.id === ((ref$ = API.getDJ()) != null ? ref$.id : void 8)) {
	        /* fixed in Febuary 2015 http://tech.plug.dj/2015/02/18/version-1-2-7-6478/
	        if vote # stupid haxxy edge-cases… well to be fair, I don't see many other people but me abuse that >3>
	            if not @$djIcon
	                @$djIcon = $ '<i class="icon icon-current-dj" style="right: 35px">'
	                    .appendTo @$el
	                API.once \advance, !~>
	                    @$djIcon .remove!
	                    delete @$djIcon
	        else*/
	        vote = 'dj';
	      } else if (this.model.get('grab')) {
	        vote = 'grab';
	      } else {
	        vote = this.model.get('vote');
	        if (vote === -1 && !user.isStaff && !userlistIcons._settings.forceMehIcon) {
	          vote = 0;
	        }
	      }
	      if (vote !== 0) {
	        if (this.$icon) {
	          this.$icon.removeClass();
	        } else {
	          this.$icon = $('<i>').appendTo(this.$el);
	        }
	        this.$icon.addClass('icon');
	        if (vote === -1) {
	          this.$icon.addClass('icon-meh');
	        } else if (vote === 'grab') {
	          this.$icon.addClass('icon-grab');
	        } else if (vote === 'dj') {
	          this.$icon.addClass('icon-current-dj');
	        } else {
	          this.$icon.addClass('icon-woot');
	        }
	      } else if (this.$icon) {
	        this.$icon.remove();
	        delete this.$icon;
	      }
	      if (that = typeof chatPolyfixEmoji != 'undefined' && chatPolyfixEmoji !== null ? chatPolyfixEmoji.fixedUsernames[this.model.id] : void 8) {
	        this.$el.find('.name').html(that);
	      }
	    });
	    this.updateEvents();
	  },
	  updateEvents: function(){
	    var i$, ref$, len$, u, j$, ref1$, len1$, event;
	    for (i$ = 0, len$ = (ref$ = users.models).length; i$ < len$; ++i$) {
	      u = ref$[i$];
	      if (u._events) {
	        for (j$ = 0, len1$ = (ref1$ = u._events['change:vote'] || []).length; j$ < len1$; ++j$) {
	          event = ref1$[j$];
	          if (event.ctx instanceof RoomUserRow) {
	            event.callback = RoomUserRow.prototype.vote;
	          }
	        }
	        for (j$ = 0, len1$ = (ref1$ = u._events['change:grab'] || []).length; j$ < len1$; ++j$) {
	          event = ref1$[j$];
	          if (event.ctx instanceof RoomUserRow) {
	            event.callback = RoomUserRow.prototype.vote;
	          }
	        }
	      }
	    }
	  },
	  disableLate: function(){
	    this.updateEvents();
	  }
	});
	/*####################################
	#          NAME CLICK PATCH          #
	####################################*/
	/*note: this also makes usernames clickable in many other parts of plug.dj & other plug_p0ne modules */
	module('nameClickPatch', {
	  require: ['chat', 'simpleFixes'],
	  optional: ['PopoutView', 'PopoutChat'],
	  setup: function(arg$, chatDblclick2Mention){
	    var replace, wrap, addListener, $appRight, ref$, showUserRollover, newFromClick, $cms, modulesToPatch, i$, len$, ref1$, ctx, $el, attr, boundAttr;
	    replace = arg$.replace, wrap = arg$.wrap, addListener = arg$.addListener;
	    $appRight = $('.app-right');
	    chatDblclick2Mention = ((ref$ = p0ne.modules.chatDblclick2Mention) != null ? ref$.disabled : void 8) && p0ne.modules.chatDblclick2Mention;
	    this.updateChatDblclick2Mention = function(it){
	      chatDblclick2Mention = it;
	    };
	    showUserRollover = function($this, name){
	      var uid, ref$, i, pos, ref1$, rolloverH;
	      uid = $this.data('uid') || $this.closest('.cm').children('.badge-box').data('uid') || ((ref$ = i = getUserInternal(name)) != null ? ref$.id : void 8);
	      if (uid) {
	        pos = {
	          x: $appRight.offset().left,
	          y: (ref1$ = $this.offset().top) > 0 ? ref1$ : 0
	        };
	        if ((typeof PopoutView != 'undefined' && PopoutView !== null) && PopoutView.$document) {
	          rolloverH = uid === userID
	            ? 148
	            : user.isStaff ? 236 : 192;
	          if (pos.y < rolloverH) {
	            pos.y += $this.height() + 10;
	          } else {
	            pos.y -= rolloverH - 5;
	          }
	        }
	        if (i || (i = getUserInternal(uid))) {
	          chat.onShowChatUser(i, pos);
	        } else {
	          chat.getExternalUser(uid, pos, chat.showChatUserBind);
	        }
	      } else {
	        console.warn("[dblclick2Mention] couldn't get userID", this);
	      }
	    };
	    newFromClick = function(e){
	      var $this, name, this$ = this;
	      e.stopPropagation();
	      e.preventDefault();
	      $this = $(this);
	      name = $this.find('.name').text() || $this.text().trim();
	      if (!chatDblclick2Mention) {
	        showUserRollover($this, name);
	      } else if (chatDblclick2Mention && !chatDblclick2Mention.timer) {
	        chatDblclick2Mention.timer = sleep(200, function(){
	          if (chatDblclick2Mention.timer) {
	            chatDblclick2Mention.timer = 0;
	            showUserRollover($this, name);
	          }
	        });
	      } else {
	        if (chatDblclick2Mention) {
	          clearTimeout(chatDblclick2Mention.timer);
	          chatDblclick2Mention.timer = 0;
	        }
	        if (name[0] === "@") {
	          name = name.substr(1);
	        }
	        ((typeof PopoutView != 'undefined' && PopoutView !== null ? PopoutView.chat : void 8) || chat).onInputMention(name);
	      }
	    };
	    $cms = get$cms();
	    modulesToPatch = [[chat, $cms.eq(0).find('.un'), 'onFromClick', 'fromClickBind'], [WaitlistRow.prototype, $('#waitlist .user'), 'onDJClick', 'clickBind'], [RoomUserRow.prototype, $('#user-lists .user'), 'onClick', 'clickBind']];
	    if (PopoutChat) {
	      modulesToPatch[modulesToPatch.length] = [PopoutChat.prototype, $cms.eq(1).find('.un'), 'onFromClick', 'fromClickBind'];
	    }
	    for (i$ = 0, len$ = modulesToPatch.length; i$ < len$; ++i$) {
	      ref1$ = modulesToPatch[i$], ctx = ref1$[0], $el = ref1$[1], attr = ref1$[2], boundAttr = ref1$[3];
	      replace(ctx, attr, null);
	      if (ctx[boundAttr]) {
	        replace(ctx, boundAttr, null);
	      }
	      $el.off('click', ctx[boundAttr]);
	    }
	    wrap(WaitlistRow.prototype, 'draw', function(d_){
	      return function(){
	        d_.call(this);
	        this.$el.data('uid', this.model.id);
	      };
	    });
	    wrap(RoomUserRow.prototype, 'draw', function(d_){
	      return function(){
	        d_.call(this);
	        this.$el.data('uid', this.model.id);
	      };
	    });
	    addListener(chatDomEvents, 'click', '.un', newFromClick);
	    addListener($body, 'click', '.p0ne-name, #user-lists .user, #waitlist .user, .friends .row', newFromClick);
	  },
	  disableLate: function(arg$, newModule){
	    var $cms, attr, ref$, ref1$, ctx, $el;
	    $cms = get$cms();
	    for (attr in ref$ = {
	      fromClickBind: [chat, $cms.eq(0)],
	      onDJClick: [WaitlistRow.prototype, $('#waitlist')],
	      onClick: [RoomUserRow.prototype, $('#user-lists')]
	    }) {
	      ref1$ = ref$[attr], ctx = ref1$[0], $el = ref1$[1];
	      $el.find('.mention .un, .message .un, .name').off('click', ctx[attr]).on('click', ctx[attr]);
	    }
	    if (((typeof PopoutView != 'undefined' && PopoutView !== null) && PopoutView.$document) && (typeof PopoutChat != 'undefined' && PopoutChat !== null)) {
	      $cms.eq(0).find('.un').off('click', PopoutChat.prototype.fromClickBind).on('click', PopoutChat.prototype.fromClickBind);
	    }
	  }
	});
	/*####################################
	#        DBLCLICK to @MENTION        #
	####################################*/
	/*note: this module is just a placeholder to offer an enable/disable button in p0neSettings */
	module('chatDblclick2Mention', {
	  require: ['nameClickPatch'],
	  settings: 'chat',
	  displayName: 'DblClick username to Mention',
	  setup: function(){
	    nameClickPatch.updateChatDblclick2Mention(this);
	    /* the actual logic is in nameClickPatch */
	  },
	  disable: function(){
	    nameClickPatch.updateChatDblclick2Mention(false);
	  }
	});
	/*####################################
	#             ETA  TIMER             #
	####################################*/
	module('etaTimer', {
	  displayName: 'ETA Timer',
	  settings: 'base',
	  optional: ['_$context', 'database', 'roomHistory'],
	  setup: function(arg$){
	    var css, addListener, $create, prevTooltipSetting, sum, lastSongDur, tooltipIntervalID, showingTooltip, $nextMediaLabel, $eta, $etaText, $etaTime, getAvgDuration, hist, l, tinyhist, i$, i, lastETA, this$ = this;
	    css = arg$.css, addListener = arg$.addListener, $create = arg$.$create;
	    css('etaTimer', '.p0ne-eta {position: absolute;}#your-next-media>span {width: auto !important;right: 50px;}');
	    sum = lastSongDur = tooltipIntervalID = 0;
	    showingTooltip = false;
	    $nextMediaLabel = $('#your-next-media > span');
	    $eta = $create('<div class=p0ne-eta>').append($etaText = $('<span class=p0ne-eta-text>')).append($etaTime = $('<span class=p0ne-eta-time>')).mouseover(function(){
	      if (typeof database != 'undefined' && database !== null) {
	        prevTooltipSetting = database.settings.tooltips;
	        database.settings.tooltips = true;
	      }
	      if (typeof _$context != 'undefined' && _$context !== null) {
	        updateToolTip();
	        clearInterval(tooltipIntervalID);
	        tooltipIntervalID = repeat(1000, updateToolTip);
	      }
	      function updateToolTip(){
	        var l, p, avg, rem;
	        l = API.getWaitList().length;
	        p = API.getWaitListPosition();
	        if (p === -1) {
	          p = l;
	        }
	        avg = Math.round(
	        getAvgDuration());
	        rem = API.getTimeRemaining();
	        if (p) {
	          return _$context.trigger('tooltip:show', mediaTime(rem) + " remaining + " + p + " × " + mediaTime(avg) + " avg. song duration", $etaText);
	        } else if (rem) {
	          return _$context.trigger('tooltip:show', mediaTime(rem) + " remaining, the waitlist is empty", $etaText);
	        } else {
	          return _$context.trigger('tooltip:show', "Nobody is playing and the waitlist is empty", $etaText);
	        }
	      }
	    }).mouseout(function(){
	      if (typeof _$context != 'undefined' && _$context !== null) {
	        clearInterval(tooltipIntervalID);
	        _$context.trigger('tooltip:hide');
	      }
	      if (typeof database != 'undefined' && database !== null) {
	        database.settings.tooltips = prevTooltipSetting;
	      }
	    }).appendTo('#playlist-meta');
	    addListener(API, 'waitListUpdate', updateETA);
	    if (typeof _$context != 'undefined' && _$context !== null) {
	      addListener(_$context, 'room:joined', updateETA);
	    }
	    if (typeof roomHistory != 'undefined' && roomHistory !== null) {
	      addListener(API, 'advance', updateETA);
	      getAvgDuration = function(){
	        var l, newestSong, ref$, oldestSong, ref1$;
	        l = roomHistory.models.length;
	        newestSong = +((ref$ = roomHistory.models[0]) != null ? ref$.attributes.timestamp.split(",")[0] : void 8);
	        oldestSong = +((ref1$ = roomHistory.models[l - 1]) != null ? ref1$.attributes.timestamp.split(",")[0] : void 8);
	        return (new Date(newestSong) - new Date(oldestSong)) / l / 1000;
	      };
	    } else {
	      getAvgDuration = function(){
	        return sum / l;
	      };
	      addListener(API, 'advance', function(d){
	        if (d.media) {
	          sum -= lastSongDur;
	          sum += d.media.duration;
	          lastSongDur = API.getHistory()[l - 1].media.duration;
	        }
	        if (API.getWaitList().length === 0) {
	          updateETA();
	        }
	      });
	      hist = API.getHistory();
	      l = hist.length;
	      if (l < 50) {
	        (tinyhist = function(){
	          addListener('once', API, 'advance', function(d){
	            if (d.media) {
	              lastSongDur = 0;
	              l++;
	            }
	            if (l < 50) {
	              tinyhist();
	            }
	          });
	        })();
	      } else {
	        l = 50;
	        lastSongDur = hist[l - 1].media.duration;
	      }
	      for (i$ = 0; i$ < l; ++i$) {
	        i = i$;
	        sum += hist[i].media.duration;
	      }
	    }
	    updateETA();
	    addListener(API, 'p0ne:stylesLoaded', function(){
	      requestAnimationFrame(function(){
	        $nextMediaLabel.css({
	          right: $eta.width() - 50
	        });
	      });
	    });
	    function updateETA(){
	      var skipCalcETA, p, ref$, eta_, eta, forceSkipBtnWidth, ref1$;
	      skipCalcETA = false;
	      p = API.getWaitListPosition();
	      if (p === 0) {
	        $etaText.text("you are next DJ!");
	        $etaTime.text('');
	        skipCalcETA = true;
	      } else if (p === -1) {
	        if (((ref$ = API.getDJ()) != null ? ref$.id : void 8) === userID) {
	          $etaText.text("you are DJ!");
	          $etaTime.text('');
	          skipCalcETA = true;
	        } else {
	          if (0 === (p = API.getWaitList().length)) {
	            $etaText.text('Join now to ');
	            $etaTime.text("DJ instantly");
	            skipCalcETA = true;
	          }
	        }
	      }
	      if (skipCalcETA) {
	        $nextMediaLabel.css({
	          right: $eta.width() - 50
	        });
	        return;
	      }
	      eta_ = getAvgDuration() * p;
	      eta_ += API.getTimeRemaining();
	      eta = Math.round(
	      eta_ / 60);
	      if (lastETA !== eta) {
	        lastETA = eta;
	        $etaText.text("ETA ca. ");
	        if (isNaN(eta)) {
	          $etaText.text("ETA: ");
	          if ((typeof roomHistory != 'undefined' && roomHistory !== null ? roomHistory.models.length : void 8) === 0) {
	            $etaTime.text("<no data>");
	          } else {
	            console.warn("[eta]", histSong, p, eta_);
	            $etaTime.text("<error>");
	          }
	        } else if (eta > 60) {
	          $etaTime.text(~~(eta / 60) + "h " + eta % 60 + "min");
	        } else {
	          $etaTime.text(eta + " min");
	        }
	        forceSkipBtnWidth = (ref1$ = p0ne.modules.forceSkipButton) != null && ref1$.disabled ? 50 : 0;
	        $nextMediaLabel.css({
	          right: $eta.width() - forceSkipBtnWidth
	        });
	        if (isNaN(eta)) {
	          clearTimeout(this$.timer);
	          return this$.timer = sleep(2000, updateETA);
	        } else if (eta_ > 0) {
	          clearTimeout(this$.timer);
	          return this$.timer = sleep((eta_ % 60 + 31).s, updateETA);
	        }
	      }
	    }
	  },
	  disable: function(){
	    clearTimeout(this.timer);
	  }
	});
	/*####################################
	#              VOTELIST              #
	####################################*/
	module('votelist', {
	  settings: 'base',
	  displayName: 'Votelist',
	  help: 'Moving your mouse above the woot/grab/meh icon shows a list of users who have wooted, grabbed or meh\'d respectively.\n(note: seeing who has meh\'d is for staff-only)',
	  $rows: {},
	  optional: ['Layout'],
	  setup: function(arg$, vl){
	    var addListener, $create, currentFilter, nextFilter, closing, opening, $tooltip, $vote, voteBtnLabels, i$, ref$, len$, el, $wrapper, $title, $vl, resize, this$ = this;
	    addListener = arg$.addListener, $create = arg$.$create;
	    closing = opening = false;
	    $tooltip = $('#tooltip');
	    $vote = $('#vote');
	    voteBtnLabels = {};
	    for (i$ = 0, len$ = (ref$ = $vote.children('.crowd-response')).length; i$ < len$; ++i$) {
	      el = ref$[i$];
	      voteBtnLabels[el.id] = $(el).find('.label');
	    }
	    $wrapper = $create('<div class=p0ne-votelist-wrapper>').hide().append($title = $('<div class=p0ne-votelist-title>')).append($vl = $('<div class=p0ne-votelist>')).prependTo($vote);
	    addListener($vote, 'mouseenter', '.crowd-response', changeFilter);
	    addListener($vote, 'mouseleave', removeVotelist);
	    $wrapper.on('mouseenter', function(){
	      if (closing) {
	        showVotelist(currentFilter);
	      }
	    });
	    resize = addListener(Layout, 'resize', function(arg$){
	      var height;
	      height = arg$.height;
	      $vl.css({
	        maxHeight: height - 280
	      });
	    });
	    resize(Layout.getSize());
	    function changeFilter(){
	      var filter;
	      filter = this.id;
if(user.isStaff && !user.isStaff) {
	        nextFilter = '';
	        if (!closing) {
	          hideVotelist();
	        }
	      } else if (currentFilter) {
	        if (currentFilter === filter) {
	          if (closing) {
	            showVotelist(filter);
	          }
	        } else {
	          nextFilter = filter;
	          if (!closing) {
	            hideVotelist();
	          }
	        }
	      } else {
	        updateVoteList();
	        API.on('voteUpdate', vl.onVote);
	        API.on('grabUpdate', vl.onVote);
	        API.on('userJoin', vl.onJoin);
	        API.on('userLeave', vl.onLeave);
	        API.on('advance', vl.onAdvance);
	        showVotelist(filter);
	      }
	    }
	    function showVotelist(filter){
	      if (currentFilter !== filter) {
	        $title.html("<i class='icon icon-" + filter + "-disabled'></i>" + voteBtnLabels[filter].html());
	        $wrapper.addClass("p0ne-votelist-" + filter);
	      }
	      currentFilter = filter;
	      opening = true;
	      closing = false;
	      $wrapper.css({
	        visibility: isEmpty() ? 'hidden' : 'visible'
	      });
	      $wrapper.stop().slideDown(function(){
	        opening = false;
	        $wrapper.css('height', '');
	      });
	    }
	    function hideVotelist(){
	      closing = true;
	      opening = false;
	      $wrapper.stop().slideUp('fast', function(){
	        closing = false;
	        $wrapper.css({
	          height: ''
	        }).removeClass("p0ne-votelist-" + currentFilter);
	        currentFilter = '';
	        if (nextFilter) {
	          showVotelist(nextFilter);
	          nextFilter = '';
	        } else {
	          $tooltip.show();
	          API.off('voteUpdate', this$.onVote);
	          API.off('grabUpdate', this$.onVote);
	          API.off('userJoin', this$.onJoin);
	          API.off('userLeave', this$.onLeave);
	        }
	      });
	    }
	    function removeVotelist(){
	      nextFilter = "";
	      hideVotelist();
	    }
	    this.hideVotelist = hideVotelist;
	    function updateVoteList(){
	      var users, dj, ref$, userlist, i$, len$, u, clazz, $children, i;
	      users = API.getUsers();
	      dj = (ref$ = API.getDJ()) != null ? ref$.id : void 8;
	      userlist = '';
	      for (i$ = 0, len$ = users.length; i$ < len$; ++i$) {
	        u = users[i$];
	        clazz = '';
	        if (u.id === dj) {
	          clazz = 'is-dj';
	        } else {
	          if (u.vote === +1) {
	            clazz = 'is-woot';
	          } else if (u.vote === -1) {
	            clazz = 'is-meh';
	          }
	          if (u.grab) {
	            clazz += " is-grab";
	          }
	        }
	        if (clazz.length) {
	          clazz = " class='" + clazz + "'";
	        }
	        userlist += "<div" + clazz + ">" + formatUserHTML(u, true, {
	          flag: true
	        }) + "</div>";
	      }
	      $vl.html(userlist);
	      $children = $vl.children();
	      this$.$rows = {};
	      for (i$ = 0, len$ = users.length; i$ < len$; ++i$) {
	        i = i$;
	        u = users[i$];
	        this$.$rows[u.id] = $($children[i]);
	      }
	      if (!$tooltip.length) {
	        $tooltip = $('#tooltip');
	      }
	      $tooltip.hide();
	    }
	    function isEmpty(){
	      return 0 === API.getScore()[currentFilter === 'woot'
	        ? 'positive'
	        : currentFilter === 'meh'
	          ? 'negative'
	          : currentFilter === 'grab' ? 'grabs' : void 8];
	    }
	    this.onVote = function(arg$){
	      var user, vote, newVote, oldVote;
	      user = arg$.user, vote = arg$.vote;
	      if (typeof vote === 'undefined') {
	        this$.$rows[user.id].addClass('is-grab');
	      } else {
	        if (vote === +1) {
	          newVote = 'is-woot';
	          oldVote = 'is-meh';
	        } else {
	          newVote = 'is-meh';
	          oldVote = 'is-woot';
	        }
	        this$.$rows[user.id].removeClass(oldVote).addClass(newVote);
	      }
	      $wrapper.css({
	        visibility: isEmpty() ? 'hidden' : 'visible'
	      });
	    };
	    this.onJoin = function(newUser){
	      var $row, i$, ref$, len$, user, preUser, preUserRole;
	      this$.$rows[newUser.id] = $row = $("<div>" + formatUserHTML(newUser, true, {
	        flag: true
	      }) + "</div>");
	      newUser.roleSum = roleSum(newUser);
	      for (i$ = 0, len$ = (ref$ = API.getUsers()).length; i$ < len$; ++i$) {
	        user = ref$[i$];
	        if (user.id in this$.$rows) {
	          user.roleSum = roleSum(user);
	          if (userIsBefore(newUser, user) && (!preUser || userIsBefore(user, preUser))) {
	            preUser = user;
	            preUserRole = userRole;
	          }
	        }
	      }
	      if (preUser) {
	        this$.$rows[preUser.id].after($row);
	      } else {
	        $vl.prepend($row);
	      }
	      function userIsBefore(userA, userB){
	        return userA.roleSum < userB.roleSum || userA.roleSum === userB.roleSum && userA.username < userB.username;
	      }
	    };
	    this.onLeave = function(user){
	      if (user.id in this$.$rows) {
	        this$.$rows[user.id].slideUp(function(){
	          $(this).remove();
	        });
	        delete this$.$rows[user.id];
	      }
	    };
	    this.onAdvance = function(arg$){
	      var dj, uid, ref$, $row;
	      dj = arg$.dj;
	      if (dj) {
	        dj = dj.id;
	      }
	      for (uid in ref$ = this$.$rows) {
	        $row = ref$[uid];
	        $row.removeClass();
	        if (uid === dj) {
	          $row.addClass('is-dj');
	        }
	      }
	    };
	  },
	  disable: function(){
	    if (typeof this.hideVotelist == 'function') {
	      this.hideVotelist();
	    }
	  }
	});
	/*####################################
	#             USER POPUP             #
	####################################*/
	module('friendslistUserPopup', {
	  require: ['friendsList', 'FriendsList', 'chat'],
	  setup: function(arg$){
	    var addListener;
	    addListener = arg$.addListener;
	    addListener($('.friends'), 'click', '.name, .image', function(e){
	      var id, ref$, user, data;
	      id = (ref$ = friendsList.rows[$(this.closest('.row')).index()]) != null ? ref$.model.id : void 8;
	      if (id) {
	        user = users.get(id);
	      }
	      data = {
	        x: $body.width() - 353,
	        y: e.screenY - 90
	      };
	      if (user) {
	        chat.onShowChatUser(user, data);
	      } else if (id) {
	        chat.getExternalUser(id, data, function(user){
	          chat.onShowChatUser(user, data);
	        });
	      }
	    });
	  }
	});
	module('waitlistUserPopup', {
	  require: ['WaitlistRow'],
	  setup: function(arg$){
	    var wrap;
	    wrap = arg$.wrap;
	    wrap(WaitlistRow.prototype, "render", function(r_){
	      return function(){
	        r_.apply(this, arguments);
	        this.$('.name, .image').click(this.clickBind);
	      };
	    });
	  }
	});
	/*####################################
	#            BOOTH  ALERT            #
	####################################*/
	module('boothAlert', {
	  displayName: 'Booth Alert',
	  settings: 'base',
	  settingsSimple: true,
	  help: 'Play a notification sound before you are about to play',
	  setup: function(arg$, arg1$, module_){
	    var addListener, _settings, $el, isNext, fn;
	    addListener = arg$.addListener;
	    _settings = arg1$._settings;
	    addListener(API, 'advance', function(){
	      if ($el) {
	        $el.remove();
	      }
	    });
	    isNext = false;
	    fn = addListener(API, 'advance waitListUpdate ws:reconnected sjs:reconnected p0ne:reconnected', function(){
	      if (API.getWaitListPosition() === 0) {
	        if (!isNext) {
	          isNext = true;
	          sleep(3000, function(){
	            if ($el) {
	              $el.remove();
	            }
	            $el = chatWarn({
	              icon: 'p0ne-icon',
	              title: "Booth Alert",
	              message: "You are about to DJ next!"
	            });
	            playChatSound();
	          });
	        }
	      } else {
	        isNext = false;
	      }
	    });
	    if (!module_) {
	      fn();
	    }
	  }
	});
	/*####################################
	#          NOTFIY ON GRABBER         #
	####################################*/
	module('notifyOnGrabbers', {
	  require: ['grabEvent'],
	  persistent: ['grabs', 'notifs'],
	  displayName: "Notify on Grabs",
	  settings: 'base',
	  grabs: {},
	  $notifs: {},
	  $count: {},
	  setup: function(arg$){
	    var addListener, this$ = this;
	    addListener = arg$.addListener;
	    addListener(API, 'advance', function(){
	      this$.grabs = {};
	      this$.$notifs = {};
	      this$.$count = {};
	    });
	    addListener(API, 'p0ne:vote:grab', function(u){
	      if (!this$.grabs[u.id]) {
	        this$.grabs[u.id] = 1;
	        this$.$notifs[u.id] = {
	          el: chatWarnSmall({
	            className: 'p0ne-grab-notif',
	            icon: 'icon-grab',
	            message: formatUserHTML(u, true),
	            isHTML: true
	          })
	        };
	      } else {
	        if (this$.grabs[u.id] === 1) {
	          this$.$count[u.id] = $('<span class=p0ne-grab-notif-count>').appendTo(this$.$notifs[u.id].el);
	        }
	        this$.$count[u.id].text(++this$.grabs[u.id]);
	        if (this$.grabs[u.id] === 10) {
	          this$.$notifs[u.id].addClass('high-count');
	        }
	      }
	    });
	  }
	});
	/*####################################
	#         AVOID HISTORY PLAY         #
	####################################*/
	/*
	module \avoidHistoryPlay, do
	    settings: \base
	    displayName: '☢ Avoid History Plays'
	    help: '''
	        [WORK IN PROGRESS]

	        This avoid playing songs that are already in history
	    '''
	    require: <[ app ]>
	    setup: ({addListener}) !->
	        #TODO make sure that `playlist` is actually the active playlist, not just the one the user is looking at
	        # i.e. use another object which holds the next songs of the current playlist
	        playlist = app.footer.playlist.playlist.media
	        addListener API, \advance, (d) !->
	            if d.media and d.dj?.id != userID
	                if playlist.list?.rows?.0?.model.cid == d.media.cid  and  getActivePlaylist?
	                    chatWarn do
	                        title: '☢ Avoid History Plays'
	                        message: 'moved down'
	                    ajax \PUT, "playlists/#{getActivePlaylist!.id}/media/move", do
	                        beforeID: -1
	                        ids: [id]
	            else
	                API.once \advance, checkOnNextAdv

	        !function checkOnNextAdv d
	            # assuming that the playlist did not already advance
	            console.info "[Avoid History Plays]", playlist.list?.rows?.0?.model, playlist.list?.rows?.1?.model
	            return if not (nextSong = playlist.list?.rows?.1?.nextSong) or not getActivePlaylist?
	            for s in API.getHistory!
	                if s.media.cid == nextSong.cid
	                    chatWarn do
	                        title: '☢ Avoid History Plays'
	                        message: 'moved down'
	                    ajax \PUT, "playlists/#{getActivePlaylist!.id}/media/move", do
	                        beforeID: -1
	                        ids: [nextSong.id]
	        do @checkOnNextAdv = checkOnNextAdv
	*/
	/*####################################
	#         WARN ON PAGE LEAVE         #
	####################################*/
	module('warnOnPageLeave', {
	  displayName: "Warn on Leaving plug.dj",
	  settings: 'base',
	  disabled: true,
	  setup: function(arg$){
	    var addListener, this$ = this;
	    addListener = arg$.addListener;
	    addListener($window, 'beforeunload', function(){
	      return "[plug_p0ne Warn on Leaving plug.dj] \n(you can disable this warning in the settings under " + this$.settings.toUpperCase() + " > " + this$.displayName + ")";
	    });
	  }
	});
	/*####################################
	#          NOTIFY ON LVL UP          #
	####################################*/
	module('notifyOnLevelUp', {
	  displayName: "Show Users' Level-Ups",
	  settings: 'base',
	  require: ['socketListeners', '_$context'],
	  _settings: {
	    onlyShowFriends: true,
	    alert: true
	  },
	  setup: function(arg$, notifyOnLevelUp){
	    var addListener, this$ = this;
	    addListener = arg$.addListener;
	    addListener(_$context, 'p0ne:socket:userUpdate', function(data){
	      var u;
	      if (data.level && (u = getUser(data.i)) && (!notifyOnLevelUp._settings.onlyShowFriends || u.friend)) {
	        chatWarn({
	          title: "Level-Up!",
	          message: "<b>" + formatUserSimple(u) + "</b> just reached level " + data.level + "!",
	          isHTML: true
	        }).find('.icon').removeClass().addClass('icon icon-user-white').end().find('.from .un').css({
	          color: '#42a5dc'
	        });
	        if (notifyOnLevelUp._settings.alert) {
	          playChatSound();
	        }
	      }
	    });
	  },
	  settingsExtra: function($el){
	    var notifyOnLevelUp;
	    notifyOnLevelUp = this;
	    $("<form><label><input type=checkbox class=p0ne-lvlup-friends " + (this._settings.onlyShowFriends ? 'checked' : '') + "> Only show friends' level-ups</label><br><label><input type=checkbox class=p0ne-lvlup-alert " + (this._settings.alert ? 'checked' : '') + "> Play notification sound</label></form>").appendTo($el.css({
	      paddingLeft: 15
	    })).on('click', '.p0ne-lvlup-friends', function(){
	      notifyOnLevelUp._settings.onlyShowFriends = this.checked;
	      notifyOnLevelUp.saveSettings();
	    }).on('click', '.p0ne-lvlup-alert', function(){
	      notifyOnLevelUp._settings.alert = this.checked;
	      notifyOnLevelUp.saveSettings();
	    });
	  }
	});
	/*####################################
	#        MAINTENANCE COUNTDOWN       #
	####################################*/
	module('maintenanceCountdown', {
	  require: ['socketListeners'],
	  setup: function(arg$){
	    var addListener, this$ = this;
	    addListener = arg$.addListener;
	    this.timer = 0;
	    addListener(API, 'p0ne:socket:plugMaintenanceAlert', function(remainingMinutes){
	      this$.$el = $('#footer-user .name').css({
	        color: 'orange'
	      });
	      this$.$bck = this$.$el.children();
	      clearInterval(this$.timer);
	      this$.timer = repeat(60000, updateRemaining);
	      function updateRemaining(){
	        if (remainingMinutes > 1) {
	          this$.$el.text("plug.dj going down in ca. " + remainingMinutes-- + " min");
	        } else {
	          this$.$el.text("plug.dj going down in soonish");
	          clearInterval(this$.timer);
	          this$.timer = 0;
	          sleep(5 .min, function(){
	            if (!this$.timer) {
	              this$.$el.html("").append(this$.$bck);
	            }
	          });
	        }
	      } updateRemaining();
	    });
	  },
	  disable: function(){
	    var ref$;
	    clearInterval(this.timer);
	    if ((ref$ = this.$el) != null) {
	      ref$.css({
	        color: ''
	      }).html("").append($bck);
	    }
	  }
	});
	/*####################################
	#         PLAYLIST HIGHLIGHT         #
	####################################*/
	module('grabMenuHighlight', {
	  require: ['popMenu', 'playlistCachePatch'],
	  setup: function(arg$){
	    var replace, wrap;
	    replace = arg$.replace, wrap = arg$.wrap;
	    wrap(popMenu, 'show', function(s_){
	      return function(t, n, r){
	        this.media = n;
	        if (this.isShowing) {
	          this.draw();
	        }
	        s_.call(this, t, n, r);
	      };
	    });
	    wrap(popMenu, 'drawRow', function(dR_){
	      return function(e){
	        var row, matches, ref$;
	        row = dR_.call(this, e);
	        matches = 0;
	        if ((ref$ = playlistCache._data[1].p[e.id]) != null && ref$.items[this.media[0].get('cid')]) {
	          row.$el.addClass('p0ne-pl-has-media');
	        }
	        if ((typeof playlists != 'undefined' && playlists !== null ? playlists.get(e.id).get('count') : void 8) === 200) {
	          row.$el.addClass('p0ne-pl-is-full');
	        }
	      };
	    });
	    replace(popMenu, 'drawRowBind', bind$(popMenu, 'drawRow'));
	  }
	});
	module('playlistMenuHighlight', {
	  require: ['pl', 'playlists', 'PlaylistListRow', 'PlaylistMediaList', 'playlistMenu', 'playlistCacheEvent'],
	  setup: function(arg$){
	    var addListener, replace, wrap;
	    addListener = arg$.addListener, replace = arg$.replace, wrap = arg$.wrap;
	    wrap(PlaylistListRow.prototype, 'render', function(r_){
	      return function(){
	        r_.call(this);
	        if (playlistCache._data[1].p[this.model.id]) {
	          this.inCache = true;
	          this.$el.addClass('p0ne-pl-cached');
	        }
	      };
	    });
	    wrap(PlaylistMediaList.prototype, 'onCheckThreshold', function(oCT_){
	      return function(n){
	        var i$, ref$, len$, row, hasAllMedia, cid;
	        oCT_.call(this, n);
	        if (this.isDragging) {
	          for (i$ = 0, len$ = (ref$ = playlistMenu.rows).length; i$ < len$; ++i$) {
	            row = ref$[i$];
	            hasAllMedia = true;
	            for (cid in this.selectedRows) {
	              if (!playlistCache._data[1].p[row.model.id].items[cid]) {
	                hasAllMedia = false;
	                break;
	              }
	            }
	            if (hasAllMedia) {
	              row.$el.addClass('p0ne-pl-has-media');
	            }
	            if (row.model.get('count') === 200) {
	              row.$el.addClass('p0ne-pl-is-full');
	            }
	          }
	        }
	      };
	    });
	    if ((typeof pl != 'undefined' && pl !== null ? pl.list : void 8) != null) {
	      replace(pl.list, 'thresholdBind', _.bind(pl.list.onCheckThreshold, pl.list));
	    }
	    wrap(PlaylistMediaList.prototype, 'resetDrag', function(rD_){
	      return function(){
	        var i$, ref$, len$, row;
	        if (this.isDragging) {
	          for (i$ = 0, len$ = (ref$ = playlistMenu.rows).length; i$ < len$; ++i$) {
	            row = ref$[i$];
	            row.$el.removeClass('p0ne-pl-has-media p0ne-pl-is-full');
	          }
	        }
	        rD_.call(this);
	      };
	    });
	    addListener(API, 'p0ne:playlistCache:update', function(playlistID){
	      var i$, ref$, len$, row;
	      for (i$ = 0, len$ = (ref$ = playlistMenu.rows).length; i$ < len$; ++i$) {
	        row = ref$[i$];
	        if (row.model.id === playlistID) {
	          if (!row.inCache) {
	            row.inCache = true;
	            row.$el.addClass('p0ne-pl-cached');
	          }
	          break;
	        }
	      }
	    });
	    playlists.sort();
	  },
	  disableLate: function(){
	    var i$, ref$, len$, row;
	    for (i$ = 0, len$ = (ref$ = playlistMenu.rows).length; i$ < len$; ++i$) {
	      row = ref$[i$];
	      if (playlistCache._data[1].p[row.model.id]) {
	        delete row.inCache;
	        row.$el.removeClass('p0ne-pl-cached');
	      }
	    }
	  }
	});
	/*####################################
	#         DBL-MEH TO SNOOZE          #
	####################################*/
	module('dblMeh2Snooze', {
	  displayName: "Double Meh to Snooze",
	  help: "Click the Meh button twice to snooze the current song.\ Click the Woot button twice to unsnooze the current song.",
	  settings: 'base',
	  setup: function(arg$){
	    var addListener, $meh, isMehd, $woot, isWooted;
	    addListener = arg$.addListener;
	    $meh = $('#meh');
	    isMehd = $meh.hasClass('selectd');
	    $woot = $('#woot');
	    isWooted = $woot.hasClass('selectd');
	    addListener($('#meh'), 'click', function(){
	      if (isMehd) {
	        snooze();
	      } else {
	        isMehd = true;
	        isWooted = false;
	      }
	    });
	    addListener($('#woot'), 'click', function(){
	      if (isWooted && isSnoozed()) {
	        stream(true);
	      } else {
	        isWooted = true;
	        isMehd = false;
	      }
	    });
	    addListener(API, 'advance', function(){
	      isMehd = isWooted = false;
	    });
	  }
	});
	/*####################################
	#          SKIP WALKTHROUGH          #
	####################################*/
	$('#walkthrough:not(.wt-p0) .next a').click();
	function bind$(obj, key, target){
	  return function(){ return (target || obj)[key].apply(obj, arguments) };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/**
	 * BetterPonymotes - a script add ponymotes to the chat on plug.dj
	 * based on BetterPonymotes https://ponymotes.net/bpm/
	 * for a ponymote tutorial see:
	 * http://www.reddit.com/r/mylittlepony/comments/177z8f/how_to_use_default_emotes_like_a_pro_works_for/
	 *
	 * @author jtbrinkmann aka. Brinkie Pie
	 * @license MIT License
	 * @copyright (c) 2015 J.-T. Brinkmann
	 */
	console.log("~~~~~~~ p0ne.bpm ~~~~~~~");
	/*####################################
	#          BETTER PONYMOTES          #
	####################################*/
	module('bpm', {
	  require: ['chatPlugin'],
	  disabled: true,
	  displayName: 'Better Ponymotes',
	  settings: 'pony',
	  _settings: {
	    showNSFW: false
	  },
	  module: function(str){
	    return this.bpm(str);
	  },
	  setup: function(arg$, arg1$){
	    var addListener, $create, addCommand, _settings, host, ref$, _FLAG_NSFW, _FLAG_REDIRECT, EMOTE_REGEXP, sanitize_map, this$ = this;
	    addListener = arg$.addListener, $create = arg$.$create, addCommand = arg$.addCommand;
	    _settings = arg1$._settings;
	    host = ((ref$ = window.p0ne) != null ? ref$.host : void 8) || "https://cdn.p0ne.com";
	    /*== external sources ==*/
	    if (!window.emote_map) {
	      window.emote_map = {};
	      $.getScript(host + "/scripts/bpm-resources.js").then(function(){
	        API.trigger('p0ne_emotes_map');
	      }).fail(function(){
	        API.chatLog("Better Ponymotes failed to load ponimote data");
	        this$.disable();
	      });
	    } else {
	      requestAnimationFrame(function(){
	        return API.trigger('p0ne_emotes_map');
	      });
	    }
	    $create("<div id='bpm-resources'><link rel='stylesheet' href='" + host + "/css/bpmotes.css' type='text/css'><link rel='stylesheet' href='" + host + "/css/emote-classes.css' type='text/css'><link rel='stylesheet' href='" + host + "/css/combiners-nsfw.css' type='text/css'><link rel='stylesheet' href='" + host + "/css/gif-animotes.css' type='text/css'>" + ('webkitAnimation' in document.body.style
	      ? "<link rel='stylesheet' href='" + host + "/css/extracss-webkit.css' type='text/css'>"
	      : "<link rel='stylesheet' href='" + host + "/css/extracss-pure.css' type='text/css'>") + "</div>").appendTo($body);
	    /*
	            <style>
	            \#chat-suggestion-items .bpm-emote {
	                max-width: 27px;
	                max-height: 27px
	            }
	            </style>
	    */
	    /*== constants ==*/
	    _FLAG_NSFW = 1;
	    _FLAG_REDIRECT = 2;
	    /*
	     * As a note, this regexp is a little forgiving in some respects and strict in
	     * others. It will not permit text in the [] portion, but alt-text quotes don't
	     * have to match each other.
	     */
	    /*                 [](/  <   emote   >   <     alt-text    >  )*/
	    EMOTE_REGEXP = /\[\]\(\/([\w:!#\/\-]+)\s*(?:&#3[49];([^"]*)&#3[49];)?\)/g;
	    /*== auxiliaries ==*/
	    /*
	     * Escapes an emote name (or similar) to match the CSS classes.
	     *
	     * Must be kept in sync with other copies, and the Python code.
	     */
	    sanitize_map = {
	      '!': '_excl_',
	      ':': '_colon_',
	      '#': '_hash_',
	      '/': '_slash_'
	    };
	    function sanitize_emote(s){
	      return s.toLowerCase().replace(/[!:#\/]/g, function(c){
	        return sanitize_map[c];
	      });
	    }
	    function lookup_core_emote(name, altText){
	      var data, nameWithSlash, parts, flag_data, tag_data, flags, source_id, is_nsfw, is_redirect;
	      data = emote_map["/" + name];
	      if (!data) {
	        return null;
	      }
	      nameWithSlash = name;
	      parts = data.split(',');
	      flag_data = parts[0];
	      tag_data = parts[1];
	      flags = parseInt(flag_data.slice(0, 1), 16);
	      source_id = parseInt(flag_data.slice(1, 3), 16);
	      is_nsfw = flags & _FLAG_NSFW;
	      is_redirect = flags & _FLAG_REDIRECT;
	      /*tags = []
	      start = 0
	      while (str = tag_data.slice(start, start+2)) != ""
	          tags.push(parseInt(str, 16)) # Hexadecimal
	          start += 2
	      
	      if is_redirect
	          base = parts.2
	      else
	          base = name*/
	      return {
	        name: nameWithSlash,
	        is_nsfw: !!is_nsfw,
	        source_id: source_id,
	        source_name: sr_id2name[source_id],
	        css_class: "bpmote-" + sanitize_emote(name),
	        altText: altText
	      };
	    }
	    function convert_emote_element(info, parts, _){
	      var title, flags, i$, len$, i, flag;
	      title = (info.name + " from " + info.source_name).replace(/"/g, '');
	      flags = "";
	      for (i$ = 0, len$ = parts.length; i$ < len$; ++i$) {
	        i = i$;
	        flag = parts[i$];
	        if (i > 0) {
	          /* Normalize case, and forbid things that don't look exactly as we expect */
	          flag = sanitize_emote(flag.toLowerCase());
	          if (!/\W/.test(flag)) {
	            flags += " bpflag-" + flag;
	          }
	        }
	      }
	      if (info.is_nsfw) {
	        if (_settings.showNSFW) {
	          title = "[NSFW] " + title;
	          flags += " bpm-nsfw";
	        } else {
	          console.warn("[bpm] nsfw emote (disabled)", name);
	          return "<span class='bpm-nsfw' title='NSFW emote'>" + _ + "</span>";
	        }
	      }
	      return "<span class='bpflag-in bpm-emote " + info.css_class + " " + flags + "' title='" + title + "'>" + (info.altText || '') + "</span>";
	    }
	    this.bpm = function(str){
	      return str.replace(EMOTE_REGEXP, function(all, parts, altText){
	        var name, info;
	        parts = parts.split('-');
	        name = parts[0];
	        info = lookup_core_emote(name, altText);
	        if (!info) {
	          return all;
	        } else {
	          return convert_emote_element(info, parts, all);
	        }
	      });
	    };
	    addListener(window._$context || API, 'p0ne:chat:plugin', function(msg){
	      msg.message = bpm(msg.message);
	    });
	    addListener('once', API, 'p0ne_emotes_map', function(){
	      var cb;
	      console.info("[bpm] loaded");
	      get$cms().find('.text').html(function(){
	        return bpm(this.innerHTML);
	      });
	      /* add autocomplete if/when plug_p0ne and plug_p0ne.autocomplete are loaded */
	      cb = function(){
	        var AUTOCOMPLETE_REGEX;
	        AUTOCOMPLETE_REGEX = /^\[\]\(\/([\w#\\!\:\/]+)(\s*["'][^"']*["'])?(\))?/;
	        if (typeof addAutocompletion == 'function') {
	          addAutocompletion({
	            name: "Ponymotes",
	            data: Object.keys(emote_map),
	            pre: "[]",
	            check: function(str, pos){
	              var temp;
	              if (!str[pos + 2] || str[pos + 2] === "(" && (!str[pos + 3] || str[pos + 3] === "(/")) {
	                temp = AUTOCOMPLETE_REGEX.exec(str.substr(pos));
	                if (temp) {
	                  this.data = temp[2] || '';
	                  return true;
	                }
	              }
	              return false;
	            },
	            display: function(items){
	              var emote;
	              return (function(){
	                var i$, ref$, len$, results$ = [];
	                for (i$ = 0, len$ = (ref$ = items).length; i$ < len$; ++i$) {
	                  emote = ref$[i$];
	                  results$.push({
	                    value: "[](/" + emote + ")",
	                    image: bpm("[](/" + emote + ")")
	                  });
	                }
	                return results$;
	              }());
	            },
	            insert: function(suggestion){
	              return suggestion.substr(0, suggestion.length - 1) + "" + this.data + ")";
	            }
	          });
	        }
	      };
	      if (window.addAutocompletion) {
	        cb();
	      } else {
	        addListener('once', API, 'p0ne:autocomplete', cb);
	      }
	    });
	    addCommand('bpm', {
	      aliases: ['ponymote'],
	      parameters: " emotename or [](/emotename)",
	      description: "checks if the emote exists and sends it if so",
	      callback: function(str){
	        var emote;
	        if (str = /^\/bpm (?:^\/\[\]\(\/(.*?)(-.*?)?\)|(.*)(-.*?)?)/i.exec(str)) {
	          if (str[1]) {
	            emote = str[1];
	            str = emote + "" + str[2];
	          } else {
	            emote = str[3];
	            str = emote + "" + str[4];
	          }
	          if (emote in emote_map) {
	            API.sendChat(bpm("[](/" + str + ")"));
	          }
	        }
	      }
	    });
	    addCommand('reloadBPM', {
	      description: "reloads the BPM database.",
	      callback: function(str){
	        var emote;
	        if (str = /^\/bpm (?:^\/\[\]\(\/(.*?)(-.*?)?\)|(.*)(-.*?)?)/i.exec(str)) {
	          if (str[1]) {
	            emote = str[1];
	            str = emote + "" + str[2];
	          } else {
	            emote = str[3];
	            str = emote + "" + str[4];
	          }
	          if (emote in emote_map) {
	            API.sendChat(bpm("[](/" + str + ")"));
	          }
	        }
	      }
	    });
	  },
	  disable: function(revertPonimotes){
	    if (revertPonimotes) {
	      get$cms().find('.bpm-emote').replaceWith(function(){
	        var flags, i$, ref$, len$, class_, emote;
	        flags = "";
	        for (i$ = 0, len$ = (ref$ = this.classList || this.className.split(/s+/)).length; i$ < len$; ++i$) {
	          class_ = ref$[i$];
	          if (class_.startsWith('bpmote-')) {
	            emote = class_.substr(7);
	          } else if (class_.startsWith('bpflag-') && class_ !== 'bpflag-in') {
	            flags += class_.substr(6);
	          }
	        }
	        if (emote) {
	          return document.createTextNode("[](/" + emote + flags + ")");
	        } else {
	          console.warn("[bpm] cannot convert back", this);
	        }
	      });
	    }
	  }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/**
	 * plug_p0ne ChatCommands
	 * Basic chat commands are defined here. Trigger them on plug.dj by writing "/commandname" in the chat
	 * e.g. "/move @Brinkie Pie 2" to move the user "Brinkie Pie" to the 2nd position in the waitlist
	 *
	 * @author jtbrinkmann aka. Brinkie Pie
	 * @license MIT License
	 * @copyright (c) 2016 J.-T. Brinkmann
	 */
	console.log("~~~~~~~ p0ne.chat-commands ~~~~~~~");
	/*####################################
	#           CHAT COMMANDS            #
	####################################*/
	module('chatCommands', {
	  optional: ['currentMedia'],
	  setup: function(arg$, arg1$, cC_){
	    var addListener, k, ref$, v, this$ = this;
	    addListener = arg$.addListener;
	    addListener(API, 'chatCommand', function(c){
	      var d, inputCmd, args;
	      c = emoji.replace_colons(c, true);
	      d = /^\/(\S+)/.exec(c);
	      inputCmd = d[1].toLowerCase();
	      args = c.substr(d[0].length).trimLeft();
	      this$.trigger(inputCmd, args, c, function(err){
	        chatWarn({
	          title: c + ": ERROR",
	          message: err.message
	        });
	        console.error("[chatCommand] " + c);
	        throw err;
	      });
	    });
	    if (cC_) {
	      for (k in ref$ = cC_.commands) {
	        v = ref$[k];
	        if (!(k in this.commands)) {
	          this.commands[k] = v;
	        }
	      }
	    }
	    this.updateCommands();
	  },
	  updateCommands: function(){
	    var this$ = this;
	    if (this.updating) {
	      return;
	    }
	    this.updating = true;
	    requestAnimationFrame(function(){
	      var k, ref$, cmds, lresult$, i$, ref1$, len$, cmd, lresult1$, name, i, aliases, old, results$ = [];
	      this$.updating = false;
	      this$._commands = {};
	      for (k in ref$ = this$.commands) {
	        cmds = ref$[k];
	        lresult$ = [];
	        if (cmds) {
	          for (i$ = 0, len$ = (ref1$ = $.isArray(cmds)
	            ? cmds
	            : [cmds]).length; i$ < len$; ++i$) {
	            cmd = ref1$[i$];
	            lresult1$ = [];
	            cmd.name = name = k;
	            i = 0;
	            aliases = cmd.aliases || [];
	            do {
	              old = this$._commands[name];
	              if (old) {
	                if ($.isArray(old)) {
	                  lresult1$.push(old[old.length] = cmd);
	                } else {
	                  lresult1$.push(this$._commands[name] = [old, cmd]);
	                }
	              } else {
	                lresult1$.push(this$._commands[name] = cmd);
	              }
	            } while (name = aliases[i++]);
	            lresult$.push(lresult1$);
	          }
	        }
	        results$.push(lresult$);
	      }
	      return results$;
	    });
	  },
	  trigger: function(command, args, c, errorCB){
	    var cmds, i$, ref$, len$, cmd, user, role, requiredRole, err;
	    if (typeof c === 'function') {
	      errorCB = c;
	      c = false;
	    }
	    c || (c = "/" + command + " " + args);
	    if (cmds = this._commands[command]) {
	      for (i$ = 0, len$ = (ref$ = cmds.length
	        ? cmds
	        : [cmds]).length; i$ < len$; ++i$) {
	        cmd = ref$[i$];
	        user = API.getUser();
	        role = user.gRole * 5 + user.role;
	        requiredRole = cmd.moderation === true
	          ? 2
	          : cmd.moderation;
	        if (!cmd.moderation || role >= requiredRole) {
	          try {
	            cmd.callback.call(this, args, command, c);
	          } catch (e$) {
	            err = e$;
	            if (typeof errorCB === 'function') {
	              errorCB(err);
	            } else {
	              throw err;
	            }
	          }
	        }
	      }
	    }
	  },
	  commands: {
	    woot: {
	      aliases: ['w', '+1', '👿'],
	      description: "woots",
	      group: 'base',
	      callback: woot
	    },
	    meh: {
	      aliases: ['-1', '👎'],
	      description: "mehs",
	      group: 'base',
	      callback: meh
	    },
	    mehsnooze: {
	      aliases: ['shush', 'snoozemeh', 'smeh', 'smooze', 'mooze'],
	      description: "mehs & snoozes the current song",
	      group: 'base',
	      callback: function(){
	        meh();
	        snooze();
	      }
	    },
	    grab: {
	      aliases: ['curate', '★'],
	      parameters: " [playlist]",
	      description: "grab song into a playlist (default: current playlist)",
	      group: 'base',
	      callback: function(pl){
	        grabMedia(pl || null).then(function(arg$, playlistName, appendToEnd){
	          var pos;
	          if (pl) {
	            pl = "\"" + playlistName + "\"";
	          } else {
	            pl = "the current playlist";
	          }
	          if (appendToEnd) {
	            pos = "bottom";
	          } else {
	            pos = "top";
	          }
	          chatWarnSmall({
	            icon: 'icon-check-blue',
	            message: "successfully grabbed to " + pl + "'s " + pos
	          });
	        }).fail(function(){
	          chatWarn({
	            title: "/grab",
	            message: "failed to grab."
	          });
	        });
	      }
	    },
	    join: {
	      aliases: ['j', 'enter'],
	      description: "join waitlist",
	      group: 'base',
	      callback: window.forceJoin || join
	    },
	    leave: {
	      description: "leave waitlist",
	      group: 'base',
	      callback: leave
	    },
	    stream: {
	      aliases: ['mode'],
	      parameters: " [on|off|audio]",
	      description: "switch stream mode (default: toggle on/off)",
	      group: 'playback',
	      callback: function(mode){
	        var newMode, modeName, action;
	        if (mode === 'audio') {
	          this.trigger('audio', 'on');
	        } else if (typeof database != 'undefined' && database !== null) {
	          mode = parseToggleArg(mode);
	          newMode = stream(mode);
	          modeName = ['on', 'off'][+newMode];
	          if (mode === 'toggle') {
	            action = "toggled";
	          } else {
	            action = "turned";
	          }
	          chatWarnSmall({
	            icon: 'icon-check-blue',
	            message: action + " stream " + modeName
	          });
	        } else {
	          chatWarn({
	            title: "/stream",
	            message: "cannot enabling/disabling the stream, this should be fixed in the plug_p0ne version."
	          });
	        }
	      }
	    },
	    on: {
	      aliases: ['video', 'stream-on', 'streamon'],
	      description: "turns the stream on (video/audio)",
	      group: 'playback',
	      callback: function(){
	        this.trigger('stream', 'on');
	      }
	    },
	    off: {
	      aliases: ['no-video', 'stream-off', 'streamoff'],
	      description: "turns the stream off (no video/audio)",
	      group: 'playback',
	      callback: function(){
	        this.trigger('stream', 'off');
	      }
	    },
	    audio: {
	      aliases: ['stream-audio', 'audio-mode'],
	      description: "enables/disables audio-only mode",
	      group: 'playback',
	      callback: function(){
	        if (!p0ne.modules.streamSettings) {
	          chatWarn({
	            title: "/stream",
	            message: "can't change to audio-only stream, because Stream Settings couldn't load. Please wait for plug_p0ne to be updated :/"
	          });
	        } else if (p0ne.modules.streamSettings.disabled) {
	          chatWarn({
	            title: "/audio",
	            message: "can't change to audio-only stream, because Stream Mode Switcher is disabled<br><button>enable Stream Mode Switcher</button>",
	            isHTML: true
	          }).on('click', 'button', function(){
	            p0ne.modules.streamSettings.enable();
	            $(this).closest('.cm').remove();
	          });
	        }
	        $('.p0ne-stream-buttons .icon-stream-audio').click();
	      }
	    },
	    snooze: {
	      description: "snoozes the song",
	      group: 'playback',
	      callback: snooze
	    },
	    refresh: {
	      aliases: ['reload', 'unsnooze', 'play'],
	      description: "enables stream and refreshes the song",
	      group: 'playback',
	      callback: function(){
	        if (typeof currentMedia != 'undefined' && currentMedia !== null) {
	          stream(true);
	        } else {
	          refresh();
	        }
	      }
	    },
	    mute: [
	      {
	        description: "mutes the audio",
	        group: 'playback',
	        callback: function(args){
	          if (!args) {
	            mute();
	          }
	        }
	      }, {
	        aliases: ['stfu', 'silence', 'quiet', 'muffle'],
	        parameters: "[duration] @username(s)",
	        description: "mute user(s)",
	        group: 'moderation',
	        callback: function(args){
	          var durArg, duration, i$, ref$, len$, yet$;
	          if (args) {
	            if (durArg = args.replace(/\W.*/, '')) {
	              duration = {
	                s: 's',
	                short: 's',
	                15: 's',
	                "15min": 's',
	                m: 'm',
	                middle: 'm',
	                30: 'm',
	                "30min": 'm',
	                l: 'l',
	                long: 'l',
	                45: 'l',
	                "45min": 'l'
	              }[durArg];
	              if (duration) {
	                args = args.substr(durArg.length);
	              }
	            }
	            duration || (duration = 's');
	            if (!duration || (args === 'h' || args === '-h' || args === 'help' || args === '--help' || args === '?' || args === 'hlep') && !getUser(args)) {
	              chatWarn({
	                title: "/mute [[duration] @username(s)]",
	                message: "<div class=p0ne-help-command>possible durations are:<br>- <b>s</b> (<em>15min</em>, <em>short</em>)<br>- <b>m</b> (<em>30min</em>, <em>middle</em>)<br>- <b>l</b> (<em>45min</em>, <em>long</em>)<br>If left out, defaults to 15 minutes.You can also use /mute to extend/reduce the mute time</div>",
	                isHTML: true
	              });
	            } else {
	              for (yet$ = true, i$ = 0, len$ = (ref$ = getMentions(args, {
	                ids: true,
	                expandGenerics: true,
	                unique: true
	              })).length; i$ < len$; ++i$) {
	                yet$ = false;
	                (fn$.call(this, ref$[i$]));
	              } if (yet$) {
	                chatWarn({
	                  icon: 'icon-mute',
	                  title: '/mute',
	                  message: "couldn't find (any of) the specified user(s)"
	                });
	              }
	            }
	          }
	          function fn$(user){
	            modMute(user.id, duration).then(function(){
	              chatWarnSmall({
	                icon: 'icon-mute',
	                message: "muted " + user.username + " (" + user.id + ")"
	              });
	            }, function(){
	              chatWarn({
	                title: "/mute ERROR",
	                message: "couldn't mute " + user.username + " (" + user.id + ")"
	              });
	            });
	          }
	        }
	      }
	    ],
	    unmute: [
	      {
	        description: "unmutes the audio",
	        group: 'playback',
	        callback: function(args){
	          if (!args) {
	            unmute();
	          }
	        }
	      }, {
	        aliases: ['um'],
	        parameters: "@username(s)",
	        description: "unmutes user(s)",
	        group: 'moderation',
	        callback: function(users){
	          var i$, ref$, len$, yet$;
	          if (users) {
	            for (yet$ = true, i$ = 0, len$ = (ref$ = getMentions(users, {
	              ids: true,
	              expandGenerics: true,
	              unique: true
	            })).length; i$ < len$; ++i$) {
	              yet$ = false;
	              (fn$.call(this, ref$[i$]));
	            } if (yet$) {
	              chatWarn({
	                icon: 'icon-mute',
	                title: '/unmute',
	                message: "couldn't find (any of) the specified user(s)"
	              });
	            }
	          }
	          function fn$(user){
	            modUnmute(user.id, duration).then(function(){
	              chatWarnSmall({
	                icon: 'icon-mute',
	                message: "unmuted " + user.username + " (" + user.id + ")"
	              });
	            }, function(){
	              chatWarn({
	                title: "/unmute ERROR",
	                message: "couldn't unmute " + user.username + " (" + user.id + ")"
	              });
	            });
	          }
	        }
	      }
	    ],
	    muteonce: {
	      aliases: ['muteone', 'monce'],
	      description: "mutes the current song",
	      group: 'playback',
	      callback: muteonce
	    },
	    automute: {
	      parameters: " [add|remove]",
	      description: "adds/removes this song to/from automute",
	      group: 'playback',
	      callback: function(cmd){
	        if (API.getVolume() !== 0) {
	          muteonce();
	        }
	        if (typeof automute != 'undefined' && automute !== null) {
	          automute(parseToggleArg(cmd));
	        } else {
	          chatWarn({
	            title: "/automute: ERROR",
	            message: "automute couldn't be loaded"
	          });
	        }
	      }
	    },
	    volume: {
	      aliases: ['vol', 'v'],
	      parameters: " (0 - 100)",
	      description: "sets the volume (in %)",
	      group: 'playback',
	      callback: function(vol){
	        API.setVolume(+vol);
	      }
	    },
	    popout: {
	      aliases: ['popup', 'detach', 'attach'],
	      description: "opens/closes the chat popout window",
	      group: 'chat',
	      callback: function(){
	        if (typeof PopoutView != 'undefined' && PopoutView !== null) {
	          if (PopoutView._window) {
	            PopoutView.close();
	          } else {
	            PopoutView.show();
	          }
	        } else {
	          chatWarn({
	            title: "/popout: ERROR",
	            message: "sorry, the command currently doesn't work"
	          });
	        }
	      }
	    },
	    befriend: {
	      aliases: ['friend', 'friend-request'],
	      description: "Sends/accepts a friend-request to/from a user",
	      group: 'users',
	      callback: function(users){
	        var i$, ref$, len$;
	        for (i$ = 0, len$ = (ref$ = getMentions(users, {
	          ids: true,
	          expandGenerics: true,
	          unique: true
	        })).length; i$ < len$; ++i$) {
	          (fn$.call(this, ref$[i$]));
	        }
	        function fn$(user){
	          befriend(user.id);
	        }
	      }
	    },
	    ignore: {
	      description: "Sets a user to ignore (you won't see their messages anymore)",
	      group: 'users',
	      callback: function(users){
	        var i$, ref$, len$;
	        for (i$ = 0, len$ = (ref$ = getMentions(users, {
	          ids: true,
	          expandGenerics: true,
	          unique: true
	        })).length; i$ < len$; ++i$) {
	          (fn$.call(this, ref$[i$]));
	        }
	        function fn$(user){
	          ignore(user.id);
	        }
	      }
	    },
	    unignore: {
	      description: "Removes a user from your own ignore-list",
	      group: 'users',
	      callback: function(users){
	        var i$, ref$, len$;
	        for (i$ = 0, len$ = (ref$ = getMentions(users, {
	          ids: true,
	          expandGenerics: true,
	          unique: true
	        })).length; i$ < len$; ++i$) {
	          (fn$.call(this, ref$[i$]));
	        }
	        function fn$(user){
	          unignore(user.id);
	        }
	      }
	    },
	    reconnect: {
	      description: "reconnects the socket to fix chat issues",
	      group: 'fixes',
	      callback: function(){
	        if (typeof _$context != 'undefined' && _$context !== null) {
	          _$context.once('ws:reconnected', function(){
	            chatWarn({
	              icon: 'p0ne-icon',
	              title: '/reconnect',
	              message: "socket reconnected"
	            });
	          });
	        }
	        reconnectSocket();
	      }
	    },
	    rejoin: {
	      aliases: ['rejoinRoom'],
	      description: "forces a rejoin to the room (to fix issues)",
	      group: 'fixes',
	      callback: function(){
	        if (typeof _$context != 'undefined' && _$context !== null) {
	          _$context.once('room:joined', function(){
	            chatWarn({
	              icon: 'p0ne-icon',
	              title: '/rejoin',
	              message: "room rejoined"
	            });
	          });
	        }
	        rejoinRoom();
	      }
	    },
	    playlists: {
	      aliases: ['pl', 'playlist'],
	      parameters: "[playlist]",
	      description: "opens the playlist drawer",
	      group: 'shortcuts',
	      callback: function(args){
	        var that;
	        openPlaylistDrawer();
	        if (that = args && getPlaylist(args)) {
	          playlists.setVisible(that);
	        }
	      }
	    },
	    search: {
	      aliases: ['find-songs'],
	      parameters: "[yt|sc|pl] query",
	      description: "searches for songs on Youtube/Soundcloud/playlists",
	      group: 'shortcuts',
	      callback: function(query){
	        var mode;
	        if (query[2] === " " && (mode = ['yt', 'sc', 'pl'].indexOf((query[0] + "" + query[1]).toLowerCase())) !== -1) {
	          mediaSearch(query.substr(3), mode);
	        } else {
	          mediaSearch(query);
	        }
	      }
	    },
	    history: {
	      aliases: ['hirory'],
	      description: "opens the song history",
	      group: 'shortcuts',
	      callback: function(){
	        $('#history-button').click();
	      }
	    },
	    prefs: {
	      aliases: ['settings', 'setting', 'options'],
	      description: "opens the plug.dj settings",
	      group: 'settings',
	      callback: function(){
	        $('#footer-user .settings').click();
	      }
	    },
	    shop: {
	      aliases: ['store'],
	      description: "opens the store",
	      group: 'settings',
	      callback: function(){
	        $('#footer-user .store').click();
	      }
	    },
	    profile: {
	      description: "opens the profile",
	      group: 'settings',
	      callback: function(){
	        $('#footer-user .profile').click();
	      }
	    },
	    avatars: {
	      aliases: ['inv', 'inventory'],
	      description: "opens the avatar inventory",
	      group: 'settings',
	      callback: function(){
	        $('#footer-user .inventory').click();
	      }
	    },
	    badges: {
	      aliases: ['badge'],
	      description: "opens the badges inventory",
	      group: 'settings',
	      callback: function(){
	        $('#footer-user .badge').click();
	      }
	    },
	    p0settings: {
	      aliases: ['p0-settings', 'p0ne-settings'],
	      description: "opens/closes the plug_p0ne settings",
	      group: 'settings',
	      callback: function(){
	        p0neSettings.toggleMenu();
	      }
	    },
	    communities: {
	      aliases: ['rooms', 'community-list'],
	      description: "opens the community list",
	      group: 'shortcuts',
	      callback: function(){
	        $('#app-menu .community').mousedown();
	      }
	    },
	    userlist: {
	      aliases: ['users'],
	      description: "opens the user list",
	      group: 'shortcuts',
	      callback: function(){
	        $('#users-button').click();
	      }
	    },
	    waitlist: {
	      aliases: ['wl'],
	      description: "opens the wait list",
	      group: 'shortcuts',
	      callback: function(){
	        $('#waitlist-button').click();
	      }
	    },
	    friendslist: {
	      aliases: ['friends'],
	      description: "opens the friends list",
	      group: 'shortcuts',
	      callback: function(){
	        $('#friends-button').click();
	      }
	    },
	    hide: {
	      aliases: ['hide-panels', 'close-panels'],
	      description: "closes all open panels",
	      group: 'shortcuts',
	      callback: function(){
	        hidePanels();
	      }
	    },
	    intercom: {
	      aliases: ['messages'],
	      description: "Show Intercom messages",
	      group: 'misc',
	      callback: function(){
	        Intercom("showMessages");
	      }
	    },
	    ban: {
	      aliases: ['gtfo', 'rekt', 'abuse'],
	      parameters: "[duration] @username(s)",
	      description: "bans user(s). `/ban help` for more info",
	      group: 'moderation',
	      moderation: true,
	      callback: function(args){
	        var durArg, duration, i$, ref$, len$, yet$;
	        if (durArg = args.replace(/\W.*/, '')) {
	          duration = {
	            h: 'h',
	            "1h": 'h',
	            hour: 'h',
	            d: 'm',
	            "1d": 'd',
	            day: 'd',
	            p: 'p',
	            perma: 'p',
	            forever: 'p',
	            f: 'p'
	          }[durArg];
	          if (duration) {
	            args = args.substr(durArg.length);
	          }
	        }
	        duration || (duration = 'h');
	        if (!duration || (args === 'h' || args === '-h' || args === 'help' || args === '--help' || args === '?' || args === 'hlep') && !getUser(args)) {
	          chatWarn({
	            title: "/ban [duration] @username(s)",
	            message: "<div class=p0ne-help-command>possible durations are:<br>- <b>h</b> (<em>1h</em>, <em>hour</em>)<br>- <b>d</b> (<em>1d</em>, <em>day</em>)<br>- <b>p</b> (<em>perma</em>, <em>f</em>, <em>forever</em>)<br>If left out, defaults to 1 hour./ban [duration] @username(s)</div>",
	            isHTML: true
	          });
	        } else {
	          for (yet$ = true, i$ = 0, len$ = (ref$ = getMentions(args, {
	            ids: true,
	            expandGenerics: true,
	            unique: true
	          })).length; i$ < len$; ++i$) {
	            yet$ = false;
	            (fn$.call(this, ref$[i$]));
	          } if (yet$) {
	            chatWarn({
	              icon: 'icon-ban',
	              title: '/ban',
	              message: "couldn't find (any of) the specified user(s)"
	            });
	          }
	        }
	        function fn$(user){
	          ban(user.id, duration).then(function(){
	            chatWarnSmall({
	              icon: 'icon-ban',
	              message: "banned " + user.username + " (" + user.id + ")"
	            });
	          }, function(){
	            chatWarn({
	              title: "/ban ERROR",
	              message: "couldn't ban " + user.username + " (" + user.id + ")"
	            });
	          });
	        }
	      }
	    },
	    unban: {
	      aliases: ['ub', 'pardon', 'revive'],
	      parameters: " @username(s)",
	      description: "unbans user(s)",
	      group: 'moderation',
	      moderation: true,
	      callback: function(users){
	        var i$, ref$, len$, yet$;
	        for (yet$ = true, i$ = 0, len$ = (ref$ = getMentions(users, {
	          ids: true,
	          expandGenerics: true,
	          unique: true
	        })).length; i$ < len$; ++i$) {
	          yet$ = false;
	          (fn$.call(this, ref$[i$]));
	        } if (yet$) {
	          chatWarn({
	            icon: 'icon-ban',
	            title: '/unban',
	            message: "couldn't find (any of) the specified user(s)"
	          });
	        }
	        function fn$(user){
	          unban(user.id, duration).then(function(){
	            chatWarnSmall({
	              icon: 'icon-ban',
	              message: "unbanned " + user.username + " (" + user.id + ")"
	            });
	          }, function(){
	            chatWarn({
	              title: "/unban ERROR",
	              message: "couldn't unban " + user.username + " (" + user.id + ")"
	            });
	          });
	        }
	      }
	    },
	    kick: {
	      parameters: " @username(s)",
	      description: "kicks user(s)",
	      group: 'moderation',
	      moderation: true,
	      callback: function(users){
	        var i$, ref$, len$, yet$;
	        for (yet$ = true, i$ = 0, len$ = (ref$ = getMentions(users, {
	          ids: true,
	          expandGenerics: true,
	          unique: true
	        })).length; i$ < len$; ++i$) {
	          yet$ = false;
	          (fn$.call(this, ref$[i$]));
	        } if (yet$) {
	          chatWarn({
	            icon: 'icon-ban',
	            title: '/kick',
	            message: "couldn't find (any of) the specified user(s)"
	          });
	        }
	        function fn$(user){
	          kick(user.id).then(function(){
	            chatWarnSmall({
	              icon: 'icon-ban',
	              message: "kicked " + user.username + " (" + user.id + ")"
	            });
	          }, function(){
	            chatWarn({
	              title: "/kick ERROR",
	              message: "couldn't kick " + user.username + " (" + user.id + ")"
	            });
	          });
	        }
	      }
	    },
	    move: {
	      parameters: " @username position",
	      description: "moves a user in the waitlist",
	      group: 'moderation',
	      moderation: true,
	      callback: function(args){
	        var wl, that, pos, users, user, error;
	        wl = API.getWaitList();
	        if (that = /(\d+)\s*$/.exec(args)) {
	          pos = +that[1];
	          args = args.substr(0, args.length - that[0].length);
	        }
	        if (1 <= pos && pos <= 50) {
	          if (users = getMentions(args, {
	            ids: true,
	            expandGenerics: true,
	            unique: true
	          })) {
	            if (!(user = users[0])) {
	              chatWarn({
	                title: "/move",
	                message: "The user doesn't seem to be in the room"
	              });
	            } else {
	              moveDJ(user.id, pos).fail(function(error){
	                chatWarn({
	                  title: '/move',
	                  message: error.message
	                });
	              });
	            }
	            return;
	          } else {
	            error = "requires you to specify a user to be moved";
	          }
	        } else {
	          error = "requires a position to move the user to";
	        }
	        chatWarn({
	          title: '/move',
	          message: error + "<br>e.g. /move @" + API.getUsers().random().rawun + " " + (~~(Math.random() * wl.length) + 1),
	          isHTML: true
	        });
	      }
	    },
	    moveTop: {
	      aliases: ['push'],
	      parameters: " @username(s)",
	      description: "moves user(s) to the top of the waitlist",
	      group: 'moderation',
	      moderation: true,
	      callback: function(users){
	        var ids, i$, yet$, i;
	        ids = getMentions(users, {
	          ids: true,
	          expandGenerics: true,
	          unique: true
	        });
	        for (yet$ = true, i$ = ids.length - 1; i$ <= 0; ++i$) {
	          i = i$;
	          yet$ = false;
	          moveDJ(i, 1);
	        } if (yet$) {
	          chatWarn({
	            title: '/moveTop',
	            message: "couldn't find any user"
	          });
	        }
	      }
	    }
	    /*moveUp:
	        aliases: <[  ]>
	        parameters: " @username(s) (how much)"
	        description: "moves user(s) up in the waitlist"
	        group: \moderation
	        moderation: true
	        callback: (user) !->
	            res = []; djsToAdd = []; l=0
	            wl = API.getWaitList!
	            # iterating over the loop in reverse, so that the first name will be the first, second will be second, …
	            for id in chatCommands.parseUserArg user.replace(/^\/\w+\s*(?:)/, '')
	                for u, pos in wl when u.id == id
	                    if pos == 0
	                        skipFirst = true
	                    else
	                        res[pos - 1] = u.id
	                    break
	                else
	                    djsToAdd[l++] = id
	            console.log "[/move] starting to move…", res, djsToAdd
	            pos = -1; l = res.length
	            do helper = !->
	                id = res[++pos]
	                if id
	                    if not skipFirst
	                        console.log "[/move]\tmoving #id to #{pos + 1}/#{wl.length}"
	                        moveDJ id, pos
	                            .then helper
	                            .fail !->
	                                chatWarn do
	                                    title: "/moveup"
	                                    message: "couldn't move #{if getUser(id) then that.username else id} up"
	                                helper!
	                    else
	                        helper!
	                else if pos < l
	                    skipFirst := false
	                    helper!
	                else
	                    for id in djsToAdd
	                        addDJ id
	                    console.log "[/move] done"
	    
	    moveDown:
	        aliases: <[  ]>
	        parameters: " @username(s) (how much)"
	        description: "moves the specified user(s) down in the waitlist"
	        group: \moderation
	        moderation: true
	        callback: !->
	            ...
	    */,
	    addDJ: {
	      aliases: ['add'],
	      parameters: " @username(s)",
	      description: "adds the specified user(s) to the waitlist",
	      group: 'moderation',
	      moderation: true,
	      callback: function(users){
	        var ids, i, helper;
	        ids = getMentions(users, {
	          ids: true,
	          expandGenerics: true,
	          unique: true
	        });
	        i = 0;
	        if (ids.length) {
	          (helper = function(){
	            if (ids[i]) {
	              addDJ(ids[i++], helper);
	            }
	          })();
	        } else {
	          chatWarn({
	            title: '/addDJ',
	            message: "couldn't find any user"
	          });
	        }
	      }
	    },
	    removeDJ: {
	      aliases: ['remove'],
	      parameters: " @username(s)",
	      description: "removes the specified user(s) from the waitlist / DJ booth",
	      group: 'moderation',
	      moderation: true,
	      callback: function(users){
	        var i$, ref$, len$, yet$, id;
	        for (yet$ = true, i$ = 0, len$ = (ref$ = getMentions(users, {
	          ids: true,
	          expandGenerics: true,
	          unique: true
	        })).length; i$ < len$; ++i$) {
	          id = ref$[i$];
	          yet$ = false;
	          API.moderateRemoveDJ(id);
	        } if (yet$) {
	          chatWarn({
	            title: "/removeDJ",
	            message: "couldn't find any user"
	          });
	        }
	      }
	    },
	    skip: [
	      {
	        aliases: ['s'],
	        description: "skip if YOU are DJing",
	        group: 'moderation',
	        callback: function(){
	          if (API.getDJ().id === userID) {
	            skipSelf();
	          }
	        }
	      }, {
	        aliases: ['s', 'forceSkip'],
	        description: "skip the current song",
	        group: 'moderation',
	        moderation: 2,
	        callback: function(){
	          var $el;
	          if (API.getDJ().id === userID) {
	            if (API.getTimeElapsed() > 2) {
	              API.moderateForceSkip();
	            } else {
	              $el = chatWarn({
	                title: '/skip',
	                message: "The song just changed, are you sure you want to skip?<br><button class=p0ne-btn onclick='API.moderateForceSkip()'>skip</button>\xa0<button class=p0ne-btn onclick='$(this).closest(\".cm\").remove()'>cancel</button>",
	                isHTML: true
	              });
	              API.once('advance', function(){
	                $el.remove();
	              });
	            }
	          }
	        }
	      }
	    ],
	    promote: {
	      parameters: " @username(s)",
	      description: "promotes the specified user(s) to the next rank",
	      group: 'moderation',
	      moderation: 3,
	      callback: function(users){
	        var i$, ref$, len$, id, that;
	        for (i$ = 0, len$ = (ref$ = getMentions(users, {
	          ids: true,
	          expandGenerics: true,
	          unique: true
	        })).length; i$ < len$; ++i$) {
	          id = ref$[i$];
	          if (that = getUser(id)) {
	            API.moderateSetRole(id, that.role + 1);
	          }
	        }
	      }
	    },
	    demote: {
	      parameters: " @username(s)",
	      description: "demotes the specified user(s) to the lower rank",
	      group: 'moderation',
	      moderation: 3,
	      callback: function(users){
	        var i$, ref$, len$, id, that;
	        for (i$ = 0, len$ = (ref$ = getMentions(users, {
	          ids: true,
	          expandGenerics: true,
	          unique: true
	        })).length; i$ < len$; ++i$) {
	          id = ref$[i$];
	          if (that = getUser(id)) {
	            API.moderateSetRole(id, that.role - 1);
	          }
	        }
	      }
	    },
	    destaff: {
	      aliases: ['unstaff', 'gray', 'grey', 'regular'],
	      parameters: " @username(s)",
	      description: "removes the specified user(s) from the staff",
	      group: 'moderation',
	      moderation: 3,
	      callback: function(users){
	        var i$, ref$, len$, id;
	        for (i$ = 0, len$ = (ref$ = getMentions(users, {
	          ids: true,
	          expandGenerics: true,
	          unique: true
	        })).length; i$ < len$; ++i$) {
	          id = ref$[i$];
	          API.moderateSetRole(id, 0);
	        }
	      }
	    },
	    rdj: {
	      aliases: ['resident', 'residentDJ', 'dj'],
	      parameters: " @username(s)",
	      description: "makes the specified user(s) resident DJ",
	      group: 'moderation',
	      moderation: 3,
	      callback: function(users){
	        var i$, ref$, len$, id;
	        for (i$ = 0, len$ = (ref$ = getMentions(users, {
	          ids: true,
	          expandGenerics: true,
	          unique: true
	        })).length; i$ < len$; ++i$) {
	          id = ref$[i$];
	          API.moderateSetRole(id, 1);
	        }
	      }
	    },
	    bouncer: {
	      aliases: ['helper', 'temp', 'staff'],
	      parameters: " @username(s)",
	      description: "makes the specified user(s) bouncer",
	      group: 'moderation',
	      moderation: 3,
	      callback: function(users){
	        var i$, ref$, len$, id;
	        for (i$ = 0, len$ = (ref$ = getMentions(users, {
	          ids: true,
	          expandGenerics: true,
	          unique: true
	        })).length; i$ < len$; ++i$) {
	          id = ref$[i$];
	          API.moderateSetRole(id, 2);
	        }
	      }
	    },
	    manager: {
	      parameters: " @username(s)",
	      description: "makes the specified user(s) manager",
	      group: 'moderation',
	      moderation: 4,
	      callback: function(users){
	        var i$, ref$, len$, id;
	        for (i$ = 0, len$ = (ref$ = getMentions(users, {
	          ids: true,
	          expandGenerics: true,
	          unique: true
	        })).length; i$ < len$; ++i$) {
	          id = ref$[i$];
	          API.moderateSetRole(id, 3);
	        }
	      }
	    },
	    cohost: {
	      aliases: ['co-host', 'co'],
	      parameters: " @username(s)",
	      description: "makes the specified user(s) co-host",
	      group: 'moderation',
	      moderation: 5,
	      callback: function(users){
	        var i$, ref$, len$, id;
	        for (i$ = 0, len$ = (ref$ = getMentions(users, {
	          ids: true,
	          expandGenerics: true,
	          unique: true
	        })).length; i$ < len$; ++i$) {
	          id = ref$[i$];
	          API.moderateSetRole(id, 4);
	        }
	      }
	    },
	    host: {
	      parameters: " @username",
	      description: "makes the specified user the communities's host (USE WITH CAUTION!)",
	      group: 'moderation',
	      moderation: 5,
	      callback: function(user){
	        var id;
	        id = getUser(user)[0];
	        API.moderateSetRole(id, 5);
	      }
	    }
	  }
	});
	module('chatCommandsHelp', {
	  require: ['chatCommands'],
	  optional: ['emoji'],
	  setup: function(arg$){
	    var addCommand, $create, $wrapper, this$ = this;
	    addCommand = arg$.addCommand, $create = arg$.$create;
	    $wrapper = $create('<div class=p0ne-help-commands-wrapper>').appendTo($app);
	    addCommand('commands', {
	      description: "shows this Chat Commands overlay",
	      group: 'misc',
	      callback: function(){
	        m.render($wrapper[0], this$);
	      }
	    });
	    this.controller = function(){
	      var ctrl;
	      return ctrl = {
	        onExitClick: function(){
	          m.render($wrapper[0], {
	            view: function(){
	              return m('div');
	            }
	          });
	        },
	        onCommandClick: function(){
	          fillChatInput("/" + this.dataset.command + " ");
	        }
	      };
	    };
	  }
	  /*
	  sleep(0,m.redraw);chatCommandsHelp <<<< #*/,
	  view: function(ctrl){
	    var user, role, commandsCount, groups, k, ref$, cmds, i$, ref1$, len$, cmd, requiredRole, group, ref2$, s1, s2, groupsLeft, keysOrderedBySize;
	    if (this.hidden) {
	      return m('div');
	    }
	    user = API.getUser();
	    role = user.gRole * 5 + user.role;
	    commandsCount = 0;
	    groups = {};
	    for (k in ref$ = chatCommands._commands) {
	      cmds = ref$[k];
	      if (cmds) {
	        for (i$ = 0, len$ = (ref1$ = $.isArray(cmds)
	          ? cmds
	          : [cmds]).length; i$ < len$; ++i$) {
	          cmd = ref1$[i$];
	          requiredRole = cmd.moderation === true
	            ? 2
	            : cmd.moderation;
	          if (cmd.name === k && (!cmd.moderation || role >= requiredRole)) {
	            group = cmd.group || 'misc';
	            groups[group] || (groups[group] = []);
	            (ref2$ = groups[group])[ref2$.length] = cmd;
	            commandsCount++;
	          }
	        }
	      }
	    }
	    s1 = 0;
	    s2 = 0;
	    groupsLeft = {};
	    keysOrderedBySize = Object.keys(groups).sort(function(a, b){
	      return b.length - a.length;
	    });
	    function column(isLeftCol){
	      var groupName, commands, command, aliases;
	      return m('.p0ne-help-column', {
	        onclick: m.delegated('.p0ne-help-command', ctrl.onCommandClick)
	      }, (function(){
	        var i$, ref$, len$, results$ = [];
	        for (i$ = 0, len$ = (ref$ = keysOrderedBySize).length; i$ < len$; ++i$) {
	          groupName = ref$[i$];
	          commands = groups[groupName];
	          if (isLeftCol) {
	            if (s1 < s2) {
	              groupsLeft[groupName] = true;
	              s1 += commands.length;
	            } else {
	              s2 += commands.length;
	              continue;
	            }
	          } else if (groupName in groupsLeft) {
	            continue;
	          }
	          results$.push(m('table.p0ne-help-section', [m('tr', m('td'), m('td.p0ne-help-groupname', groupName)), (fn$())]));
	        }
	        return results$;
	        function fn$(){
	          var i$, ref$, len$, ref1$, ref2$, results$ = [];
	          for (i$ = 0, len$ = (ref$ = commands).length; i$ < len$; ++i$) {
	            command = ref$[i$];
	            if ((ref1$ = command.aliases) != null && ref1$.length) {
	              aliases = (ref2$ = command.aliases) != null ? ref2$.joinWrapped("/", " \xa0 ") : void 8;
	              if (typeof emoji != 'undefined' && emoji !== null) {
	                aliases = emoji.replace_unified(aliases);
	              }
	            } else {
	              aliases = false;
	            }
	            results$.push(m('tr', m('td.p0ne-help-command', {
	              'data-command': command.name
	            }, m('em', "/" + command.name + " "), aliases ? m('.p0ne-help-aliases', m.trust(aliases)) : void 8), m('td.p0ne-help-description', command.parameters
	              ? [m('.p0ne-help-parameters', command.parameters), command.description]
	              : [command.description])));
	          }
	          return results$;
	        }
	      }()));
	    }
	    return m('.p0ne-help-commands', m('.p0ne-help-header', m('span', "plug_p0ne Chat Commands"), m('a', {
	      onclick: ctrl.onExitClick
	    }, "Close")), m('.p0ne-help-content', column(true), column(false)));
	  }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/**
	 * chat-related plug_p0ne modules
	 *
	 * @author jtbrinkmann aka. Brinkie Pie
	 * @license MIT License
	 * @copyright (c) 2015 J.-T. Brinkmann
	 */
	var MAX_IMAGE_HEIGHT, CHAT_WIDTH, tmp, out$ = typeof exports != 'undefined' && exports || this;
	console.log("~~~~~~~ p0ne.chat ~~~~~~~");
	/* ToDo:
	 * add missing chat inline image plugins:
	 * Derpibooru
	 * imgur.com/a/
	 * tumblr
	 * deviantart
	 * gfycat.com
	 * cloud-4.steampowered.com … .resizedimage
	 */
	MAX_IMAGE_HEIGHT = 300;
	/*####################################
	#         BETTER CHAT INPUT          #
	####################################*/
	module('betterChatInput', {
	  require: ['chat', 'user'],
	  optional: ['user_', '_$context', 'PopoutListener', 'Lang'],
	  displayName: "Better Chat Input",
	  settings: 'chat',
	  help: 'Replaces the default chat input field with a multiline textfield.\nThis allows you to more accurately see how your message will actually look when send',
	  cssClass: 'p0ne-better-chat-input',
	  setup: function(arg$){
	    var addListener, revert, css, $create, $autoresize_helper, chat, focused, init, $onpage_autoresize_helper, oldHeight, wasEmote, this$ = this;
	    addListener = arg$.addListener, revert = arg$.revert, css = arg$.css, $create = arg$.$create;
	    chat = window.chat;
	    this.cIF_ = chat.$chatInputField[0];
	    this.$form = chat.$chatInputField.parent();
	    focused = chat.$chatInputField.hasClass('focused');
	    chat.$chatInput.removeClass('focused');
	    init = addListener(API, 'popout:open', function(arg$, PopoutView){
	      var val, focused;
	      val = chat.$chatInputField.val();
	      chat = PopoutView.chat;
	      this$.popoutcIF_ = chat.$chatInputField[0];
	      this$.$popoutForm = chat.$chatInputField.parent();
	      focused = window.chat.$chatInputField.is(':focus');
	      chat.$chatInputField.detach();
	      chat.$chatInputField[0] = chat.chatInput = $create("<textarea id='chat-input-field' maxlength=250>").attr('tabIndex', 1).val(val).attr('placeholder', (typeof Lang != 'undefined' && Lang !== null ? Lang.chat.placeholder : void 8) || "Chat").on('keydown', function(e){
	        chat.onKeyDown(e);
	        checkForMsgSend(e);
	      }).on('keyup', function(e){
	        chat.onKeyUp(e);
	      }).on('focus', bind$(chat, 'onFocus')).on('blur', bind$(chat, 'onBlur')).on('input', onInput).appendTo(this$.$popoutForm).after($autoresize_helper = $create('<div class=autoresize-helper>'))[0];
	      requestAnimationFrame(function(){
	        chat.$chatInputField.focus();
	      });
	    });
	    init(null, {
	      chat: window.chat
	    });
	    $onpage_autoresize_helper = $autoresize_helper;
	    if (PopoutView._window) {
	      init(null, PopoutView);
	    }
	    oldHeight = $autoresize_helper.height();
	    addListener(API, 'popout:close', function(){
	      window.chat.$chatInputField.val(chat.$chatInputField.val());
	      chat = window.chat;
	      $autoresize_helper = $onpage_autoresize_helper;
	    });
	    wasEmote = false;
	    function onInput(){
	      var content, newHeight, scrollTop;
	      content = chat.$chatInputField.val();
	      if (content !== (content = content.replace(/\n/g, ""))) {
	        chat.$chatInputField.val(content);
	      }
	      if (content[0] === '/' && content[3] === ' ' && (content[1] === 'm' && content[2] === 'e' || content[1] === 'e' && content[2] === 'm')) {
	        if (!wasEmote) {
	          wasEmote = true;
	          chat.$chatInputField.addClass('p0ne-better-chat-emote');
	          $autoresize_helper.addClass('p0ne-better-chat-emote');
	        }
	      } else if (wasEmote) {
	        wasEmote = false;
	        chat.$chatInputField.removeClass('p0ne-better-chat-emote');
	        $autoresize_helper.removeClass('p0ne-better-chat-emote');
	      }
	      $autoresize_helper.text(content);
	      newHeight = $autoresize_helper.height();
	      if (oldHeight === newHeight) {
	        return;
	      }
	      scrollTop = chat.$chatMessages.scrollTop();
	      chat.$chatInputField.css({
	        height: newHeight + 14
	      });
	      chat.$chatMessages.css({
	        bottom: newHeight + 35
	      }).scrollTop(scrollTop + newHeight - oldHeight);
	      return oldHeight = newHeight;
	    }
	    function checkForMsgSend(e){
	      if ((e && (e.which || e.keyCode)) === 13) {
	        return requestAnimationFrame(onInput);
	      }
	    }
	  },
	  disable: function(){
	    if (this.cIF_ && this.$form) {
	      chat.$chatInputField = $(chat.chatInput = this.cIF_).val(chat.$chatInputField.val()).appendTo(this.$form);
	    }
	    if (PopoutView._window && this.popoutcIF_) {
	      PopoutView.chat.$chatInputField = $(PopoutView.chat.chatInput = this.popoutcIF_).val(PopoutView.chat.$chatInputField.val()).appendTo(this.$popoutForm);
	    }
	  }
	});
	/*####################################
	#            CHAT PLUGIN             #
	####################################*/
	module('chatPlugin', {
	  require: ['_$context', 'chatAuxiliaries'],
	  optional: ['PopoutListener'],
	  setup: function(arg$){
	    var addListener, wrap, earlyChatListener;
	    addListener = arg$.addListener, wrap = arg$.wrap;
	    p0ne.chatLinkPlugins || (p0ne.chatLinkPlugins = []);
	    wrap(chatAuxiliaries, 'onChatReceived', function(oCR_){
	      return function(msg){
	        var callbacks, l, listeners, i$, len$, cb;
	        msg.classes = {};
	        msg.addClass = addClass;
	        msg.removeClass = removeClass;
	        callbacks = [];
	        l = 0;
	        msg.then = function(cb){
	          if (typeof cb === 'function') {
	            callbacks[l++] = cb;
	          }
	        };
	        msg.originalMessage = msg.message;
	        if (msg.message.startsWith('/em ') || msg.message.startsWith('/me ')) {
	          msg.originalMessage = msg.originalMessage.substr(4);
	        }
	        msg.wasAtBottom == null && (msg.wasAtBottom = chatIsAtBottom());
	        if (msg.wasAtBottom) {
	          msg.p0ne_onload = 'onload="chatScrollDown()"';
	          msg.p0ne_onerror = 'onerror="chatPlugin.imgError(this);chatScrollDown()"';
	        } else {
	          msg.p0ne_onload = '';
	          msg.p0ne_onerror = 'onerror="chatPlugin.imgError(this)"';
	        }
	        _$context.trigger('p0ne:chat:pre', msg);
	        API.trigger('p0ne:chat:pre', msg);
	        listeners = _$context._events['chat:receive'];
	        if (listeners[0] !== earlyChatListener) {
	          listeners.removeItem(earlyChatListener);
	          listeners.unshift(earlyChatListener);
	        }
	        oCR_.apply(this, arguments);
	        if ('type' in msg) {
	          msg.$el = getChat(msg).addClass(Object.keys(msg.classes || {}).join(' '));
	          msg.addClass = bind$(msg.$el, 'addClass');
	          msg.removeClass = bind$(msg.$el, 'removeClass');
	          _$context.trigger('p0ne:chat:post', msg);
	          API.trigger('p0ne:chat:post', msg);
	          msg.then = (function(it){
	            return it();
	          });
	          for (i$ = 0, len$ = callbacks.length; i$ < len$; ++i$) {
	            cb = callbacks[i$];
	            cb(msg);
	          }
	        }
	      };
	    });
	    addListener('early', _$context, 'chat:receive', function(msg){
	      msg.message = msg.message.replace(/<a (.+?)>((https?:\/\/)(?:www\.)?(([^\/]+).+?))<\/a>/gi, function(all, pre, completeURL, protocol, url, domain, offset){
	        var i$, ref$, len$, ctx, j$, ref1$, len1$, plugin, that, err;
	        domain = domain.toLowerCase();
	        for (i$ = 0, len$ = (ref$ = [_$context, API]).length; i$ < len$; ++i$) {
	          ctx = ref$[i$];
	          if (ctx._events['p0ne:chat:link']) {
	            for (j$ = 0, len1$ = (ref1$ = ctx._events['p0ne:chat:link']).length; j$ < len1$; ++j$) {
	              plugin = ref1$[j$];
	              try {
	                if (that = plugin.callback.call(plugin.ctx, {
	                  all: all,
	                  pre: pre,
	                  completeURL: completeURL,
	                  protocol: protocol,
	                  domain: domain,
	                  url: url,
	                  offset: offset,
	                  onload: onload,
	                  onerror: onerror,
	                  msg: msg
	                })) {
	                  return that;
	                }
	              } catch (e$) {
	                err = e$;
	                console.error("[p0ne] error while processing chat link plugin", plugin, err.stack);
	              }
	            }
	          }
	        }
	        return all;
	      });
	      _$context.trigger('p0ne:chat:plugin', msg);
	      API.trigger('p0ne:chat:plugin', msg);
	    });
	    earlyChatListener = _$context._events['chat:receive'][0];
	    addListener(_$context, 'popout:open', function(_window){
	      _window.chatPlugin = chatPlugin;
	      _window.console.info("%c[p0ne] This is the console of the CHAT POPOUT! you might wanna continue working in the main window's devtools instead of here", 'font-weight: bold');
	    });
	    function addClass(classes){
	      var i$, ref$, len$, className;
	      if (typeof classes === 'string') {
	        for (i$ = 0, len$ = (ref$ = classes.split(/\s+/g)).length; i$ < len$; ++i$) {
	          className = ref$[i$];
	          if (className) {
	            this.classes[className] = true;
	          }
	        }
	      }
	    }
	    function removeClass(classes){
	      var i$, ref$, len$, className;
	      if (typeof classes === 'string') {
	        for (i$ = 0, len$ = (ref$ = classes.split(/\s+/g)).length; i$ < len$; ++i$) {
	          className = ref$[i$];
	          delete this.classes[className];
	        }
	      }
	    }
	  },
	  imgError: function(elem){
	    var x$;
	    console.warn("[inline-img] converting image back to link", elem.alt, elem, elem.outerHTML);
	    x$ = $(elem).parent();
	    x$.text(x$.attr('href'));
	    x$.addClass('p0ne-img-failed');
	  }
	});
	/*####################################
	#           MESSAGE CLASSES          #
	####################################*/
	module('chatMessageClasses', {
	  optional: ['users'],
	  require: ['chatPlugin'],
	  setup: function(arg$){
	    /* designed to be compatible with p³-compatible Room Themes */
	    var addListener, err;
	    addListener = arg$.addListener;
	    try {
	      get$cms().children('.message,.mention,.emote').each(function(){
	        var uid, $this, fromUser, role, fromRole, i$, ref$, len$, yet$, r;
	        if (uid = this.dataset.cid) {
	          uid = uid.substr(0, 7);
	          if (!uid) {
	            return;
	          }
	          $this = $(this);
	          if (fromUser = getUser(uid)) {
	            role = getRank(fromUser, true);
	            fromRole = "from-" + role;
	            if (role === 'regular') {
	              if (uid === userID) {
	                fromRole = 'from-you';
	              }
	            } else {
	              fromRole += " from-staff";
	            }
	            /*else # stupid p³. who would abuse the class `from` instead of using something sensible instead?!
	                fromRole += " from"
	            */
	            if (fromUser.friend) {
	              fromRole += " from-friend";
	            }
	          } else {
	            for (yet$ = true, i$ = 0, len$ = (ref$ = ($this.find('.icon').prop('className') || "").split(" ")).length; i$ < len$; ++i$) {
	              r = ref$[i$];
	              yet$ = false;
	              if (r.startsWith('icon-chat-')) {
	                fromRole = "from-" + r.substr(10);
	              }
	            } if (yet$) {
	              fromRole = 'from-regular';
	            }
	          }
	          if ($(this).find('.subscriber').length) {
	            fromRole += " from-subscriber";
	          }
	          $this.addClass("fromID-" + uid + " " + fromRole);
	        }
	      });
	    } catch (e$) {
	      err = e$;
	      console.error("[chatMessageClasses] couldn't convert old messages", err.stack);
	    }
	    addListener(API, 'p0ne:chat:plugin', function(message){
	      var type, uid;
	      type = message.type, uid = message.uid;
	      if (uid) {
	        message.addClass("fromID-" + uid);
	        if (message.user = getUser(uid)) {
	          message.addClass(getUserClasses(message.user, true, true));
	          /*rank = getRank(message.user, true)
	          if uid == userID
	              message.addClass \from-you
	              #also = \-also
	          else
	              message.addClass "from-#rank"
	          message.addClass \from-staff if message.user.role > 1 or message.user.gRole
	          if rank == \regular
	              message.addClass \from-subscriber if message.user.sub
	              message.addClass \from-friend if message.user.friend*/
	        }
	      }
	    });
	  }
	});
	/*####################################
	#      UNREAD CHAT NOTIFICAITON      #
	####################################*/
	module('unreadChatNotif', {
	  require: ['_$context', 'chatPlugin'],
	  bottomMsg: $(),
	  settings: 'chat',
	  settingsSimple: true,
	  displayName: 'Highlight Unread Chat',
	  cssClass: 'p0ne-unread-chat-notif',
	  setup: function(arg$){
	    var addListener, $cm, unreadCount, unreadMentionsCount, $chatButton, $icon, $box, $unreadCount, $unreadMentionsCount, $firstUnreadMessage, cmHeight, updateUnread, this$ = this;
	    addListener = arg$.addListener;
	    $cm = $('#chat-messages');
	    unreadCount = 0;
	    unreadMentionsCount = 0;
	    $chatButton = $('#chat-button');
	    $icon = $chatButton.find('.icon');
	    $chatButton.html('').append($box = $('<div class=box>').append($icon).append($unreadCount = $('<span class=p0ne-top-row>')).append($unreadMentionsCount = $('<span class=p0ne-bottom-row>')));
	    $firstUnreadMessage = $();
	    addListener(_$context, 'p0ne:chat:post', function(message){
	      var $el, chatTabSelected, count;
	      $el = message.$el;
	      chatTabSelected = $chatButton.hasClass('selected') || (typeof PopoutView != 'undefined' && PopoutView !== null ? PopoutView.chat : void 8) != null;
	      if (!chatTabSelected || !message.wasAtBottom) {
	        if (unreadCount <= 0) {
	          unreadCount = 1;
	          $firstUnreadMessage = $el || $();
	        } else {
	          unreadCount++;
	        }
	        $cm.addClass('has-unread');
	        if (message.type === 'mention') {
	          unreadMentionsCount++;
	        }
	        if (count = $el.data('unread')) {
	          $el.data('unread', count + 1);
	        } else {
	          $el.addClass('unread').data({
	            unread: 1,
	            unreadMentions: 0
	          });
	        }
	        $chatButton.addClass('p0ne-toolbar-highlight');
	        $unreadCount.text(unreadCount);
	        if (message.type === 'mention') {
	          $el.data('unreadMentions', $el.data('unreadMentions') + 1);
	          $chatButton.addClass('p0ne-toolbar-highlight--alert p0ne-two-rows');
	          $unreadMentionsCount.text(unreadMentionsCount);
	        }
	      }
	    });
	    updateUnread = _.debounce(function(){
	      var newCount, $readMsgs;
	      if ((typeof PopoutView != 'undefined' && PopoutView !== null ? PopoutView.chat : void 8) != null) {
	        return;
	      }
	      cmHeight = $cm.height();
	      if ($firstUnreadMessage.parent().length === 0) {
	        $firstUnreadMessage = $cm.find('.unread:first');
	        if ($firstUnreadMessage.length === 0) {
	          unreadCount = 0;
	          unreadMentionsCount = 0;
	          markUnread($firstUnreadMessage);
	          return;
	        } else {
	          newCount = recountUnreadNotifs();
	          unreadCount = newCount.messages;
	          unreadMentionsCount = newCount.mentions;
	        }
	      }
	      if (belowViewport.call($firstUnreadMessage)) {
	        return;
	      }
	      $readMsgs = $firstUnreadMessage.nextUntil(belowViewport, '.unread').add($firstUnreadMessage);
	      if ($readMsgs.length) {
	        $firstUnreadMessage = $readMsgs.first().nextMatching('.unread');
	        markUnread($readMsgs);
	      }
	    }, 200);
	    function belowViewport(){
	      var pos, e;
	      try {
	        pos = $(this).position();
	        return pos.top > cmHeight;
	      } catch (e$) {
	        e = e$;
	        return false;
	      }
	    }
	    function recountUnreadNotifs($msgs){
	      var messages, mentions, $mentions, i$, len$, msg, $msg;
	      $msgs || ($msgs = $cm.find('.unread'));
	      messages = 0;
	      mentions = 0;
	      $mentions = $msgs.filter('.mention');
	      for (i$ = 0, len$ = $msgs.length; i$ < len$; ++i$) {
	        msg = $msgs[i$];
	        $msg = $(msg);
	        messages += $msg.data('unread');
	        mentions += $msg.data('unreadMentions');
	      }
	      return {
	        messages: messages,
	        mentions: mentions
	      };
	    }
	    function markUnread($msgs){
	      var count, this$ = this;
	      count = recountUnreadNotifs($msgs);
	      unreadCount -= count.messages;
	      unreadMentionsCount -= count.mentions;
	      $msgs.removeClass('unread').addClass('unread-visible').data({
	        unread: 0,
	        unreadMentions: 0
	      });
	      if (unreadCount <= 0) {
	        unreadCount = 0;
	        $cm.removeClass('has-unread');
	        $chatButton.removeClass('p0ne-toolbar-highlight');
	        $unreadCount.text('');
	      } else {
	        $unreadCount.text(unreadCount);
	      }
	      if (unreadMentionsCount <= 0) {
	        unreadMentionsCount = 0;
	        $chatButton.removeClass('p0ne-toolbar-highlight--alert p0ne-two-rows');
	        $unreadMentionsCount.text('');
	      } else {
	        $unreadMentionsCount.text(unreadMentionsCount);
	      }
	      sleep(1500, function(){
	        $msgs.removeClass('unread-visible');
	      });
	    }
	    addListener($cm, 'scroll', updateUnread);
	    addListener($chatButton, 'click', updateUnread);
	    addListener(API, 'popout:close', updateUnread);
	    addListener(_$context, 'room:joining', updateUnread);
	    addListener('early', _$context, 'chat:delete', function(cid){
	      var $msg;
	      $msg = getChat(cid);
	      if ($msg.length && $msg.hasClass('unread')) {
	        markUnread($msg);
	        if ($msg.is($firstUnreadMessage)) {
	          $firstUnreadMessage = $firstUnreadMessage.nextMatching('.unread');
	        }
	      }
	    });
	    this.fix = function(){
	      unreadCount = 0;
	      unreadMentionsCount = 0;
	      markUnread($cm.find('.unread'));
	      this.$firstUnreadMessage = $();
	    };
	  },
	  disable: function(){
	    get$cm().removeClass('has-unread').find('.unread').removeClass('unread');
	    $('#chat-button').removeClass('p0ne-two-rows p0ne-toolbar-highlight p0ne-toolbar-highlight--alert').html('<i class="icon icon-chat"></i><span>Chat</span>');
	  }
	});
	/*####################################
	#          OTHERS' @MENTIONS         #
	####################################*/
	module('chatOthersMentions', {
	  optional: ['users'],
	  require: ['chatPlugin'],
	  settings: 'chat',
	  displayName: 'Highlight @mentions for others',
	  setup: function(arg$){
	    var addListener;
	    addListener = arg$.addListener;
	    addListener(API, 'p0ne:chat:plugin', function(message){
	      var type, uid, res, lastI, i$, ref$, len$, mention, ref1$;
	      type = message.type, uid = message.uid;
	      if (uid) {
	        res = "";
	        lastI = 0;
	        for (i$ = 0, len$ = (ref$ = getMentions(message, {
	          generics: true
	        })).length; i$ < len$; ++i$) {
	          mention = ref$[i$];
	          if (mention.id !== userID || type === 'emote') {
	            res += "" + message.message.substring(lastI, mention.offset) + "<span class='mention-other mentionID-" + mention.id + " mention-" + getRank(mention, false) + " " + (mention.role || mention.gRole ? 'mention-staff' : '') + " " + (type === 'emote' && mention.id === userID ? 'mention-you' : '') + " p0ne-name' data-uid='" + mention.id + "'>@" + mention.rawun + "</span>";
	            lastI = mention.offset + 1 + (((ref1$ = mention.rawun) != null ? ref1$.length : void 8) || 0);
	          }
	        }
	        if (res) {
	          message.message = res + message.message.substr(lastI);
	        }
	      }
	    });
	  }
	});
	/*####################################
	#           INLINE  IMAGES           #
	####################################*/
	CHAT_WIDTH = 345;
	module('chatInlineImages', {
	  require: ['chatPlugin'],
	  settings: 'chat',
	  settingsSimple: true,
	  displayName: 'Inline Images',
	  help: 'Converts image links to images in the chat, so you can see a preview.\n\nWhen enabled, you can enter tags to filter images which should not be shown inline. These tags are case-insensitive and space-seperated.\n\n☢ The taglist is subject to improvement',
	  _settings: {
	    filterTags: ['nsfw', 'suggestive', 'gore', 'spoiler', 'questionable', 'no-inline', 'noinline']
	  },
	  regexpCache: {},
	  setup: function(arg$){
	    var addListener, this$ = this;
	    addListener = arg$.addListener;
	    addListener(API, 'p0ne:chat:link', function(arg$){
	      var all, pre, completeURL, protocol, domain, msg, p0ne_onload, p0ne_onerror, offset, img, msgLC, i$, ref$, len$, tag, content, key$;
	      all = arg$.all, pre = arg$.pre, completeURL = arg$.completeURL, protocol = arg$.protocol, domain = arg$.domain, msg = arg$.msg, p0ne_onload = msg.p0ne_onload, p0ne_onerror = msg.p0ne_onerror, offset = arg$.offset;
	      if (img = this$.inlineify.apply(this$, arguments)) {
	        if (msg.hasFilterWord == null) {
	          msg.hasFilterWord = false;
	          msgLC = msg.message.toLowerCase();
	          for (i$ = 0, len$ = (ref$ = this$._settings.filterTags).length; i$ < len$; ++i$) {
	            tag = ref$[i$];
	            if (msgLC.has(tag)) {
	              msg.hasFilterWord = tag;
	              console.warn("[inline-img] message contains \"" + tag + "\", images will not be converted");
	              break;
	            }
	          }
	        }
	        if (msg.hasFilterWord || msg.message[offset + all.length] === ";" || domain === location.host) {
	          console.log("[inline-img] filtered image", completeURL + " ==> " + protocol + img);
	          if (pre.has("class=")) {
	            pre = pre.replace(/class=('|")?(\S+)/i, function(arg$, q, cl){
	              return "class=" + (q || '\'') + "p0ne-img-filtered " + cl + (q
	                ? ''
	                : q || '\'');
	            });
	          } else {
	            pre = "class=p0ne-img-filtered " + pre;
	          }
	          if (msg.hasFilterWord) {
	            content = completeURL.replace((ref$ = this$.regexpCache)[key$ = msg.hasFilterWord] || (ref$[key$] = RegExp(escapeRegExp(msg.hasFilterWord) + '', 'ig')), '<span class=p0ne-img-filterword>$&</span>');
	          } else {
	            content = completeURL;
	          }
	          return "<a " + pre + " src='" + img + "'>" + content + "</a>";
	        } else {
	          console.log("[inline-img]", completeURL + " ==> " + img);
	          return "<a " + pre + "><img src='" + img + "' class=p0ne-img " + p0ne_onload + " " + p0ne_onerror + "></a>";
	        }
	      } else {
	        return false;
	      }
	    });
	    addListener(API, 'p0ne:chat:plugin', function(msg){
	      if (msg.hasFilterWord) {
	        msg.message = msg.message.replaceSansHTML(this$.regexpCache[msg.hasFilterWord], "<span class=p0ne-img-filterword>$&</span>");
	      }
	    });
	  },
	  regDirect: /^[^\#\?]+(?:\.(?:jpg|jpeg|gif|png|webp|apng)|image\.php)(?:@\dx)?(?:\/revision\/\w+)?(?:\?.*|\#.*)?$/i,
	  inlineify: function(arg$){
	    var completeURL, protocol, domain, url, that, rgx, repl, forceProtocol;
	    completeURL = arg$.completeURL, protocol = arg$.protocol, domain = arg$.domain, url = arg$.url;
	    if (that = this.plugins[domain] || this.plugins[domain.substr(1 + domain.indexOf('.'))]) {
	      rgx = that[0], repl = that[1];
	      if (in$(domain, this.forceHTTPSDomains)) {
	        forceProtocol = 'https://';
	      }
	      if (rgx.test(url)) {
	        return (forceProtocol || protocol) + "" + url.replace(rgx, repl);
	      }
	    }
	    if (this.regDirect.test(url)) {
	      if (in$(domain, this.forceHTTPSDomains)) {
	        return completeURL.fastReplace('http://', 'https://');
	      } else {
	        return completeURL;
	      }
	    }
	    return false;
	  },
	  settingsExtra: function($el){
	    var chatInlineImages, $input, this$ = this;
	    chatInlineImages = this;
	    $('<span class=p0ne-settings-input-label>').text("filter tags: (space seperated, case-insensitive)").appendTo($el);
	    $input = $('<input class="p0ne-settings-input">').val(this._settings.filterTags.join(" ")).on('input', function(){
	      var l, map, i$, ref$, len$, tag;
	      this$._settings.filterTags = [];
	      l = 0;
	      map = {
	        "": true
	      };
	      for (i$ = 0, len$ = (ref$ = $input.val().split(" ")).length; i$ < len$; ++i$) {
	        tag = ref$[i$];
	        tag = $.trim(tag);
	        if (!map[tag]) {
	          this$._settings.filterTags[l++] = htmlEscape(tag);
	        }
	      }
	      chatInlineImages.saveSettings();
	    }).appendTo($el);
	  },
	  forceHTTPSDomains: ['i.imgur.com', 'deviantart.com', 'api.plugCubed.net'],
	  plugins: {
	    'imgur.com': [/^(?:i\.|m\.|edge\.|www\.)*imgur\.com\/(?:r\/[\w]+\/)*(?!gallery)(?!removalrequest)(?!random)(?!memegen)([\w]{5,8})(?:#\d+)?[sbtmlh]?(?:\.(?:jpe?g|gif|png|gifv|webm))?$/, "i.imgur.com/$1.gif", 'https://'],
	    'prntscr.com': [/^(prntscr.com\/\w+)(?:\/direct\/)?/, "$1/direct", 'https://'],
	    'gyazo.com': [/^gyazo.com\/\w+/, "$&/raw"],
	    'dropbox.com': [/^dropbox.com(\/s\/[a-z0-9]*?\/[^\/\?#]*\.(?:jpg|jpeg|gif|png|webp|apng))/, "dl.dropboxusercontent.com$1"],
	    'pbs.twitter.com': [/^(pbs.twimg.com\/media\/\w+\.(?:jpg|jpeg|gif|png|webp|apng))(?:\:\w+)?/, "$1:small"],
	    'googleimg.com': [
	      /^google\.com\/imgres\?imgurl=(.+?)(?:&|$)/, function(arg$, src){
	        return decodeURIComponent(url);
	      }
	    ],
	    'imageshack.com': [
	      /^imageshack\.com\/[fi]\/(\w\w)(\w+?)(\w)(?:\W|$)/, function(){
	        return chatInlineImages.imageshackPlugin.apply(this, arguments);
	      }
	    ],
	    'imageshack.us': [
	      /^imageshack\.us\/[fi]\/(\w\w)(\w+?)(\w)(?:\W|$)/, function(){
	        return chatInlineImages.imageshackPlugin.apply(this, arguments);
	      }
	    ],
	    'gstatic.com': [/^https:\/\/encrypted-tbn\d.gstatic.com\/images/, "$&"],
	    'i.reddituploads.com': [/(?:)/, "$&"],
	    'i.chzbgr.com': [/(?:)/, "$&"]
	    /* meme-plugins based on http://userscripts.org/scripts/show/154915.html (mirror: http://userscripts-mirror.org/scripts/show/154915.html ) */,
	    'quickmeme.com': [/^(?:m\.)?quickmeme\.com\/meme\/(\w+)/, "i.qkme.me/$1.jpg"],
	    'qkme.me': [/^(?:m\.)?qkme\.me\/(\w+)/, "i.qkme.me/$1.jpg"],
	    'memegenerator.net': [/^memegenerator\.net\/instance\/(\d+)/, "http://cdn.memegenerator.net/instances/" + CHAT_WIDTH + "x/$1.jpg"],
	    'imageflip.com': [/^imgflip.com\/i\/(.+)/, "i.imgflip.com/$1.jpg"],
	    'livememe.com': [/^livememe.com\/(\w+)/, "i.lvme.me/$1.jpg"],
	    'memedad.com': [/^memedad.com\/meme\/(\d+)/, "memedad.com/memes/$1.jpg"],
	    'makeameme.org': [/^makeameme.org\/meme\/(.+)/, "makeameme.org/media/created/$1.jpg"]
	    /* image plugins using plugCubed API (credits go to plugCubed) */
	    /* used with permission by thedark1337 (current plug³ maintainer as of 2016-02-23) */,
	    'deviantart.com': [/^[\w\-\.]+\.deviantart.com\/(?:art\/|[\w:\-]+#\/)[\w:\-]+/, "api.plugCubed.net/redirect/da/$&"],
	    'fav.me': [/^fav.me\/[\w:\-]+/, "api.plugCubed.net/redirect/da/$&"],
	    'sta.sh': [/^sta.sh\/[\w:\-]+/, "api.plugCubed.net/redirect/da/$&"]
	  },
	  imageshackPlugin: function(arg$, host, img, ext){
	    ext = {
	      j: 'jpg',
	      p: 'png',
	      g: 'gif',
	      b: 'bmp',
	      t: 'tiff'
	    }[ext];
	    return "https://imagizer.imageshack.us/a/img" + parseInt(host, 36) + "/1337/" + img + "." + ext;
	  }
	  /*pluginsAsync:
	      \deviantart.com
	      \fav.me
	      \sta.sh
	  deviantartPlugin: (replaceLink, url) !->
	      $.getJSON "http://backend.deviantart.com/oembed?format=json&url=#url", (d) !->
	          if d.height <= MAX_IMAGE_HEIGHT
	              replaceLink d.url
	          else
	              replaceLink d.thumbnail_url
	  */
	});
	/*####################################
	#           IMAGE LIGHTBOX           #
	####################################*/
	module('imageLightbox', {
	  displayName: "Image Preview Lightbox",
	  help: "Click on images in the chat to show a larger preview, instead of opening them in a new tab/window.",
	  settings: 'chat',
	  require: ['chatInlineImages', 'chatDomEvents'],
	  _settings: {
	    alwaysDimBackground: true
	  },
	  setup: function(arg$, imageLightbox){
	    var addListener, $createPersistent, $img, PADDING, $container, forcedDimming, lastSrc, $el, dialog;
	    addListener = arg$.addListener, $createPersistent = arg$.$createPersistent;
	    PADDING = 10;
	    $container = $('#dialog-container');
	    forcedDimming = false;
	    this.$el = $el = $createPersistent('<img class=p0ne-img-large>').css({
	      position: 'absolute',
	      zIndex: 6,
	      cursor: 'pointer',
	      boxShadow: '0 0 35px black, 0 0 5px black'
	    }).hide().load(function(){
	      _$context.trigger('ShowDialogEvent:show', {
	        dialog: dialog
	      }, true);
	    }).appendTo($body);
	    addListener($container, 'click', '.p0ne-img-large', function(){
	      dialog.close();
	      return false;
	    });
	    this.dialog = dialog = {
	      on: function(arg$, arg1$, container){
	        this.container = container;
	      },
	      off: $.noop,
	      containerOnClose: $.noop,
	      destroy: $.noop,
	      $el: $el,
	      render: function(){
	        var contW, contH, imgW, imgH, offset;
	        if (imageLightbox._settings.alwaysDimBackground) {
	          forcedDimming = $container.hasClass('p0ne--lights-on');
	          if (forcedDimming) {
	            $container.removeClass('p0ne--lights-on');
	          }
	        }
	        contW = $container.width();
	        contH = $container.height();
	        imgW = $img.width();
	        imgH = $img.height();
	        offset = $img.offset();
	        console.log("[lightbox] rendering");
	        $el.removeClass('p0ne-img-large-open').css({
	          left: (offset.left + imgW / 2) * 100 / contW + "%",
	          top: (offset.top + imgH / 2) * 100 / contH + "%",
	          maxWidth: imgW * 100 / contW + "%",
	          maxHeight: imgH * 100 / contH + "%"
	        }).show();
	        $img.css({
	          visibility: 'hidden'
	        });
	        requestAnimationFrame(function(){
	          $el.addClass('p0ne-img-large-open').css({
	            left: '',
	            top: '',
	            maxWidth: '',
	            maxHeight: ''
	          });
	        });
	      },
	      close: function(cb){
	        var $img_, $el_, contW, contH, imgW, imgH, offset, this$ = this;
	        $img_ = $img;
	        $el_ = $el;
	        this.isOpen = false;
	        contW = $container.width();
	        contH = $container.height();
	        imgW = $img.width();
	        imgH = $img.height();
	        offset = $img.offset();
	        $el.css({
	          left: (offset.left + imgW / 2) * 100 / contW + "%",
	          top: (offset.top + imgH / 2) * 100 / contH + "%",
	          maxWidth: imgW * 100 / contW + "%",
	          maxHeight: imgH * 100 / contH + "%"
	        });
	        sleep(200, function(){
	          $el.removeClass('p0ne-img-large-open');
	          $img_.css({
	            visibility: 'visible'
	          });
	          this$.container.onClose();
	          if (typeof cb == 'function') {
	            cb();
	          }
	          if (forcedDimming) {
	            $container.addClass('p0ne--lights-on');
	          }
	          forcedDimming = false;
	        });
	      }
	    };
	    dialog.closeBind = bind$(dialog, 'close');
	    addListener(chatDomEvents, 'click', '.p0ne-img, .p0ne-img-filtered', function(e){
	      var $img_;
	      $img_ = $(this);
	      e.preventDefault();
	      if (dialog.isOpen) {
	        if ($img_.is($img)) {
	          dialog.close();
	        } else {
	          dialog.close(previewNewImage);
	        }
	      } else {
	        previewNewImage();
	      }
	      function previewNewImage(){
	        var src;
	        $img = $img_;
	        dialog.isOpen = true;
	        src = $img.attr('src');
	        if (src !== lastSrc) {
	          lastSrc = src;
	          $el[0].onload = function(){
	            _$context.trigger('ShowDialogEvent:show', {
	              dialog: dialog
	            }, true);
	          };
	          return $el.attr('src', src);
	        } else {
	          return _$context.trigger('ShowDialogEvent:show', {
	            dialog: dialog
	          }, true);
	        }
	      }
	    });
	  },
	  settingsExtra: function($el){
	    var imageLightbox;
	    imageLightbox = this;
	    $("<form><label><input type=checkbox " + (this._settings.alwaysDimBackground ? 'checked' : '') + "> always dim background when previewing images</label></form>").appendTo($el.css({
	      paddingLeft: 15
	    })).on('click', 'input', function(){
	      imageLightbox._settings.alwaysDimBackground = this.checked;
	      imageLightbox.saveSettings();
	    });
	  },
	  disable: function(){
	    var ref$, ref1$, this$ = this;
	    if ((ref$ = this.dialog) != null && ref$.isOpen) {
	      this.dialog.close(function(){
	        var ref$;
	        return (ref$ = this$.$el) != null ? ref$.remove() : void 8;
	      });
	    } else {
	      if ((ref1$ = this.$el) != null) {
	        ref1$.remove();
	      }
	    }
	  }
	});
	/*####################################
	#            YT THUMBNAILS           #
	####################################*/
	module('chatYoutubeThumbnails', {
	  displayName: 'Youtube Links to Thumbnails',
	  settings: 'chat',
	  help: 'Convert show thumbnails of linked Youtube videos in the chat.\nWhen hovering the thumbnail, it will animate, alternating between three frames of the video.',
	  setup: function(arg$, chatYoutubeThumbnails){
	    var add, addListener, interval, frame, lastID, links, l, this$ = this;
	    add = arg$.add, addListener = arg$.addListener;
	    interval = -1;
	    frame = 1;
	    lastID = '';
	    addListener(chatDomEvents, 'mouseenter', '.p0ne-yt .song-thumb', function(e){
	      var id, this$ = this;
	      clearInterval(interval);
	      id = this.parentElement.parentElement.dataset.ytCid;
	      if (id !== lastID) {
	        frame = 1;
	        lastID = id;
	      }
	      this.src = "https://i.ytimg.com/vi/" + id + "/" + frame + ".jpg";
	      out$.interval = interval = repeat(1000, function(){
	        frame = frame % 3 + 1;
	        this$.src = "https://i.ytimg.com/vi/" + id + "/" + frame + ".jpg";
	      });
	    });
	    addListener(chatDomEvents, 'mouseleave', '.p0ne-yt .song-thumb', function(e){
	      var id;
	      clearInterval(interval);
	      id = this.parentElement.parentElement.dataset.ytCid;
	      this.src = "https://i.ytimg.com/vi/" + id + "/0.jpg";
	    });
	    links = [];
	    l = 0;
	    addListener(API, 'p0ne:chat:link', function(arg$){
	      var protocol, url, yt;
	      protocol = arg$.protocol, url = arg$.url;
	      yt = YT_REGEX.exec(protocol + url);
	      if (yt && (yt = yt[1])) {
	        console.log("[p0ne_yt_preview]", url + " ==> https://i.ytimg.com/vi/" + yt + "/default.jpg");
	        links[l++] = yt;
	      }
	      return false;
	    });
	    addListener(API, 'p0ne:chat:plugin', function(d){
	      var i$, to$, i, yt, that, media, clazz;
	      if (l > 0) {
	        for (i$ = 0, to$ = l; i$ < to$; ++i$) {
	          i = i$;
	          yt = links[i];
	          if (that = window.mediaLookupCache[yt]) {
	            media = auxiliaries.authorTitle(that.title);
	            media.author || (media.author = that.uploader.name);
	            media.duration = mediaTime(that.duration);
	            clazz = "";
	          } else {
	            media = {
	              title: 'loading…',
	              author: 'loading…',
	              duration: ''
	            };
	            clazz = " p0ne-yt-cid-" + yt;
	            mediaLookup(yt, fn$);
	          }
	          d.message += "<div class='p0ne-yt" + clazz + "' data-yt-cid='" + yt + "'><div class=p0ne-yt-img><img class=song-thumb src='https://i.ytimg.com/vi/" + yt + "/default.jpg' /><span class=song-duration>" + media.duration + "</span></div><b class='song-title'>" + media.title + "</b><span class='song-author'>" + media.author + "</span></div>";
	        }
	        l = 0;
	        return false;
	      }
	      function fn$(data){
	        var x$;
	        media = auxiliaries.authorTitle(data.title);
	        media.author || (media.author = data.uploader.name);
	        x$ = get$cms().find(".p0ne-yt-cid-" + yt).removeClass("p0ne-yt-cid-" + yt);
	        x$.find('.song-title').text(media.title).attr('title', media.title);
	        x$.find('.song-author').text(media.author).attr('title', media.author);
	        x$.find('.song-duration').text(mediaTime(data.duration));
	      }
	    });
	    addListener(chatDomEvents, 'click', '.p0ne-yt-img', function(e){
	      var $el;
	      e.preventDefault();
	      $el = $(this).parent();
	      mediaPreview({
	        format: 1,
	        author: $el.find('.song-author').text(),
	        title: $el.find('.song-title').text(),
	        cid: $el.data('yt-cid')
	      });
	    });
	    this.disableLate = function(){
	      clearInterval(interval);
	    };
	  }
	});
	/*####################################
	#          GFYCAT  EMBEDDER          #
	####################################*/
	module('gfycatEmbedder', {
	  settings: 'chat',
	  displayName: 'Inline gfycat',
	  help: 'Shows video/gif links to gfycat as inline videos.\n\nNote: Inline Image\'s filter tags don\'t apply to inlinified gfycat links, yet!',
	  require: ['chatPlugin'],
	  setup: function(arg$){
	    var addListener, this$ = this;
	    addListener = arg$.addListener;
	    addListener(API, 'p0ne:chat:link', function(arg$){
	      /* sadly I couldn't find a proper resource stating that "gfyname"s (IDs) can ONLY be letters,
	       * so I'll do some wild guessing here and just assume that /\w+/ should capture it
	       *
	       * note: only match urls with IDs with >=9 chars to avoid non-gif paths (/about, /jobs, /partners, /api, /terms, /privacy, /dmca as of 2016-03-08)
	       *
	       * subdomain infos:
	       *     about.gfycat.com    seems to be an alias for gfycat.com
	       *     www.gfycat.com      redirects to gfycat.com
	       *     thumbs.gfycat.com   is self-explanatory
	       *
	       * unknown:
	       *     center.gfycat.com
	       *     centre.gfycat.com
	       *     center2.gfycat.com
	       *
	       * separate & independant CDN domains, used for direct gif / video URLs:
	       *     zippy.gfycat.com
	       *     giant.gfycat.com
	       *     fat.gfycat.com
	       */
	      var completeURL, domain, onload, onerror, m, msgLC, i$, ref$, len$, tag;
	      completeURL = arg$.completeURL, domain = arg$.domain, onload = arg$.onload, onerror = arg$.onerror;
	      if (m = /^https?:\/\/(?:[\w\.]+\.)?gfycat\.com\/(?:detail\/)?(\w{9,})/.exec(completeURL)) {
	        if (msg.hasFilterWord == null) {
	          msg.hasFilterWord = false;
	          msgLC = msg.message.toLowerCase();
	          for (i$ = 0, len$ = (ref$ = this$._settings.filterTags).length; i$ < len$; ++i$) {
	            tag = ref$[i$];
	            if (msgLC.has(tag)) {
	              msg.hasFilterWord = tag;
	              console.warn("[gfycatEmbedder] message contains \"" + tag + "\", image links will not be converted");
	              break;
	            }
	          }
	        }
	        if (msg.hasFilterWord) {
	          return;
	        }
	        return "<div style='position:relative;padding-bottom:calc(100% / 1.08)'><iframe src='https://gfycat.com/ifr/" + m[1] + "' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>";
	      }
	    });
	  }
	});
	/*####################################
	#    CUSTOM NOTIFICATION TRIGGERS    #
	####################################*/
	module('customChatNotificationTrigger', {
	  displayName: 'Notification Trigger Words',
	  settings: 'chat',
	  settingsSimple: true,
	  _settings: {
	    triggerwords: (tmp = user.username.split(' ')).length
	      ? tmp
	      : []
	  },
	  disabled: true,
	  require: ['chatPlugin', '_$context'],
	  optional: ['database'],
	  setup: function(arg$){
	    var addListener, plugSettings, this$ = this;
	    addListener = arg$.addListener;
	    plugSettings = typeof database != 'undefined' && database !== null ? database.settings : void 8;
	    addListener(_$context, 'p0ne:chat:plugin', function(d){
	      var mentioned, mentions, x;
	      if (d.cid && d.uid !== userID && this$._settings.triggerwords.length) {
	        mentioned = false;
	        mentions = {};
	        if (this$.hasUsernameTrigger) {
	          this$.usernameReg.lastIndex = 0;
	          while (x = this$.usernameReg.exec(d.message)) {
	            mentions[x.index] = true;
	          }
	        }
	        d.message = d.message.replaceSansHTML(this$.regexp, function(word, i){
	          var o;
	          for (o in this$.usernameTriggers[word]) {
	            if (mentions[i - o]) {
	              return word;
	            }
	          }
	          mentioned = true;
	          return "<span class=p0ne-trigger-word>" + word + "</span>";
	        });
	        if (mentioned && !(plugSettings || plugSettings.chatSound)) {
	          playChatSound();
	        }
	      }
	    });
	    if (window.user_) {
	      addListener(window.user_, 'change:rawun', bind$(this, 'updateRegexp'));
	    }
	    this.updateRegexp();
	  },
	  updateRegexp: function(){
	    var triggerwords, l, i$, ref$, len$, triggerword, rawun, this$ = this;
	    if (this._settings.triggerwords.length === 0) {
	      this.hasUsernameTrigger = false;
	      return;
	    }
	    triggerwords = [];
	    l = 0;
	    for (i$ = 0, len$ = (ref$ = this._settings.triggerwords).length; i$ < len$; ++i$) {
	      triggerword = ref$[i$];
	      triggerword = escapeRegExp(
	      htmlEscape(
	      triggerword));
	      if (/\w/.test(triggerword[0])) {
	        triggerword = "\\b" + triggerword;
	      }
	      if (/\w/.test(triggerword[triggerword.length - 1])) {
	        triggerword = triggerword + "\\b";
	      }
	      triggerwords[l++] = triggerword;
	    }
	    this.regexp = RegExp(triggerwords.join('|') + '', 'gi');
	    this.hasUsernameTrigger = false;
	    this.usernameTriggers = {};
	    rawun = API.getUser().rawun || '';
	    rawun.replace(this.regexp, function(word, i){
	      var ref$;
	      this$.hasUsernameTrigger = true;
	      (ref$ = this$.usernameTriggers)[word] || (ref$[word] = {});
	      this$.usernameTriggers[word][i + 1] = true;
	    });
	    this.usernameReg = RegExp('@' + rawun, 'g');
	  },
	  settingsExtra: function($el){
	    var customChatNotificationTrigger, $input, this$ = this;
	    customChatNotificationTrigger = this;
	    $('<span class=p0ne-settings-input-label>').text("aliases: (comma seperated, case insensitive)").appendTo($el);
	    $input = $('<input class="p0ne-settings-input">').val(this._settings.triggerwords.join(", ")).on('input', function(){
	      var l, i$, ref$, len$, word;
	      this$._settings.triggerwords = [];
	      l = 0;
	      for (i$ = 0, len$ = (ref$ = $input.val().split(",")).length; i$ < len$; ++i$) {
	        word = ref$[i$];
	        this$._settings.triggerwords[l++] = $.trim(word);
	      }
	      this$.updateRegexp();
	      customChatNotificationTrigger.saveSettings();
	    }).appendTo($el);
	  }
	});
	/*####################################
	#          IMPROVED LINKIFY          #
	####################################*/
	/*
	module \chatImprovedLinkify, do
	    displayName: "Improved Linkify"
	    settings: \chat
	    help: '''
	        Improves the automatic link detection.

	        With this module, links don't necessarily have to start with "http://" or "https://" anymore
	    '''
	    require: <[ chatAuxiliaries Lang plugUrls ]>
	    setup: ({replace}) !->
	        replace chatAuxiliaries, \urlRegex, /\b(?:\w+:\/\/)?(?:[\w:.+-]+@)?(?:[a-z0-9-\u00b7-\u2a6d6]+\.)+[a-z-.\u00b7-\u2a6d6][a-z0-9-.\u00b7-\u2a6d6]{1,24}\b(?::\d+)?(?:[\/?#](?:[^;\s\(\)\[\]]|\([^;\s\(\)\[\]]*\)|\[[^;\s\(\)\[\]]*\])*)?/gi

	        replace chatAuxiliaries, \parse, (str, user, i) !->
	            str = str
	                .fastReplace \--over-max-size--, "[#{Lang.chat.imageMax}]"
	                .fastReplace \--not-found--, "[#{Lang.chat.image404}]"
	                .fastReplace \--error--, "[#{Lang.errors.error}]"

	            /*if user and user.sub and database.settings.chatImages
	                str .= replace @imgRegex, (url) !->
	                    index = arguments[*-2]
	                    imgid = "#{user.uid || 0}-#{(~~(Math.random! * 0x7ffffffe)).toString(16)}"
	                    user.{}images[imgid] = url

	                    wrapper = "<span class='iph iph-#imgid"
	                    img = "<img class=cimg src='#{plugUrls.gifLoading}'>"
	                    if index > 0 and str.charAt(index - 1) == " "
	                        wrapper += " break-before"
	                        img = "<br/>#wrapper"
	                    if str.charAt(index + url.length) == " "
	                        wrapper += " break-after"
	                        img = "#wrapper<br/>"
	                    return "#wrapper'>#img</span>"* /

	            if not i
	                str .= replace @urlRegex, (url_) !->
	                    if not /^\w+:/.test url_
	                        url = "http://#url_"
	                    else
	                        url = url_
	                    if url.has \plug.dj and (u = parseURL(url)) and not (u.hostname == \plug.dj and u.path and (u.path in <[ /about /team /partners /purchase /press /plot /ba /jobs /terms /privacy /subscribe ]> or u.path.1 in <[ @ ! ]>))
	                        target = \_self
	                    else
	                        target = \_blank
	                    return "<a href='#url' target=#target>#url_</a>"
	            return str
	*/
	/*####################################
	#            RESTORE CHAT            #
	####################################*/
	module('restoreChat', {
	  displayName: "Restore Chat",
	  help: "Restores the chat when reloading the page.",
	  settings: 'chat',
	  settingsSimple: true,
	  optional: ['_$context', 'LZString'],
	  _settings: {
	    timeout: 15 .min,
	    removeClutter: false,
	    verbose: true
	  },
	  rooms: {},
	  setup: function(arg$, arg1$, m_){
	    var addListener, that, err;
	    addListener = arg$.addListener;
	    this.saveBound = bind$(this, 'save');
	    this.restoreBound = bind$(this, 'restore');
	    this.cleanupBound = bind$(this, 'cleanup');
	    if (that = localStorage["p0ne_restoreChat_rooms"]) {
	      try {
	        this.rooms = JSON.parse(that);
	      } catch (e$) {
	        err = e$;
	        console.error(getTime() + " [restoreChat] failed to get chatlog list");
	      }
	      this.cleanup();
	    }
	    if (!m_ && arguments.length === 3) {
	      this.restore();
	    }
	    addListener($window, 'unload', this.saveBound);
	    if (typeof _$context != 'undefined' && _$context !== null) {
	      addListener(_$context, 'room:joining', this.saveBound);
	      addListener(_$context, 'room:joined', this.restoreBound);
	    }
	  },
	  save: function(){
	    var roomSlug, html;
	    console.time("restoreChat saved");
	    roomSlug = getRoomSlug();
	    $cm.find('img,video,iframe').fixSize();
	    html = $cm.html();
	    if (this._settings.compress) {
	      html = LZString.compress(html);
	    }
	    localStorage["p0ne__" + roomSlug + "_restoreChat"] = html;
	    this.rooms[roomSlug] = Date.now();
	    localStorage["p0ne_restoreChat_rooms"] = JSON.stringify(this.rooms);
	    console.timeEnd("restoreChat saved");
	    return this._settings;
	  },
	  restore: function(){
	    var roomSlug, time, chatlog, $welcome, d;
	    roomSlug = getRoomSlug();
	    if (time = this.rooms[roomSlug]) {
	      chatlog = localStorage["p0ne__" + roomSlug + "_restoreChat"];
	      if (chatlog[0] !== "<") {
	        if (typeof LZString != 'undefined' && LZString !== null) {
	          chatlog = LZString.decompress(chatlog);
	        } else {
	          console.error("[restoreChat] cannot restore chatlog, chatlog is compressed and LZString is missing");
	        }
	      }
	      if (this._settings.removeClutter) {
	        $welcome = $cm.children().eq(1).filter('.welcome');
	        $welcome.add($welcome.prev('.cm.log')).remove();
	      }
	      d = new Date(time);
	      $cm.prepend($("<div class=p0ne-restore-chat-wrap><time datetime='" + d.toISOString() + "'>" + getDateTime(d) + "</time></div>"));
	      $cm.prepend(chatlog);
	    } else if (this._settings.verbose) {
	      console.log("[restoreChat] no chatlog to restore");
	    }
	  },
	  cleanup: function(){
	    var now, currentRoom, oldestAllowedTime, minTime, roomSlug, ref$, time;
	    now = Date.now();
	    currentRoom = getRoomSlug();
	    oldestAllowedTime = now - restoreChat._settings.timeout;
	    minTime = Infinity;
	    for (roomSlug in ref$ = this.rooms) {
	      time = ref$[roomSlug];
	      if (time <= oldestAllowedTime) {
	        console.log(getTime() + " [restoreChat] removing chatlog for '" + roomSlug + "' (saved " + ago(time) + ")");
	        delete this.rooms[roomSlug];
	        delete localStorage["p0ne__" + roomSlug + "_restoreChat"];
	      } else {
	        minTime = minTime < time ? minTime : time;
	      }
	    }
	    if (isFinite(minTime) && minTime > now) {
	      sleep(now - minTime, this.cleanupBound);
	    }
	  },
	  settingsExtra: function($el){
	    var restoreChat;
	    restoreChat = this;
	    $("<form><label><input type=checkbox " + (this._settings.removeClutter ? 'checked' : '') + "> Remove welcome messages when restoring chat</label></form>").appendTo($el.css({
	      paddingLeft: 15
	    })).on('click', 'input', function(){
	      restoreChat._settings.removeClutter = this.checked;
	      restoreChat.saveSettings();
	    });
	  }
	});
	/*####################################
	#            CHAT  MACROS            #
	####################################*/
	module('chatMacros', {
	  setup: function(arg$){
	    var addCommand, map, key, str;
	    addCommand = arg$.addCommand;
	    map = {
	      shrug: '¯\\_(ツ)_/¯',
	      lenny: '( ͡° ͜ʖ ͡°)'
	    };
	    for (key in map) {
	      str = map[key];
	      addCommand(key, {
	        parameters: "[text]",
	        description: "sends \"[text] " + str + "\" in chat",
	        group: 'chat',
	        callback: fn$
	      });
	    }
	    function fn$(text, command){
	      var ref$;
	      if (text[0] === "/" && ((ref$ = text.substr(0, 3)) !== '/me' && ref$ !== '/em')) {
	        text = " " + text;
	      }
	      API.sendChat(text + " " + map[command]);
	    }
	  }
	});
	/*####################################
	#             GREENTEXT              #
	####################################*/
	module('greentext', {
	  require: ['chatPlugin'],
	  displayName: ">Greentext",
	  help: "Shows messages in <span style='color: #789922'>green</span> if they start with \">\"\n\nwith \"Split lines\" enabled, messages such as <pre>\">this >is >a test\"</pre> will show up in 3 lines instead of one.",
	  settings: 'chat',
	  disabled: true,
	  _settings: {
	    splitLines: true
	  },
	  setup: function(arg$){
	    var addListener, this$ = this;
	    addListener = arg$.addListener;
	    addListener(_$context, 'p0ne:chat:pre', function(msg){
	      var uid, originalMessage, message;
	      uid = msg.uid, originalMessage = msg.originalMessage;
	      if (uid) {
	        if (originalMessage.substr(0, 4) === "&gt;") {
	          message = msg.message.substr(4);
	          if (this$._settings.splitLines) {
	            message = message.split(" &gt;");
	          }
	          msg.message = message.joinWrapped("<div class=p0ne-greentext>&gt;", "</div>");
	        }
	      }
	    });
	  },
	  settingsExtra: function($el){
	    var greentext;
	    greentext = this;
	    $("<form><label><input type=checkbox " + (this._settings.splitLines ? 'checked' : '') + "> Split lines</label><br></form>").appendTo($el.css({
	      paddingLeft: 15
	    })).on('click', 'input', function(){
	      greentext._settings.splitLines = this.checked;
	      greentext.saveSettings();
	    });
	  }
	});
	/*####################################
	#           Avatar  Badges           #
	####################################*/
	module('chatAvatarBadges', {
	  settings: 'chat',
	  displayName: "Chat Avatar Badges",
	  help: "Shows users' avatars as their badges in chat.",
	  require: ['chatPlugin', 'emoji', 'customEmoji'],
	  disabled: true,
	  _settings: {
	    tooltip: true
	  },
	  cssClass: 'p0ne-avatar-badges',
	  setup: function(arg$){
	    var addListener, convert;
	    addListener = arg$.addListener;
	    convert = this.convert;
	    addListener(API, 'p0ne:chat:post', function(msg){
	      var avatarID;
	      if (msg.uid) {
	        avatarID = msg.user.avatarID;
	        msg.$el.data({
	          avatar: avatarID
	        });
	        convert(msg.$el, avatarID);
	      }
	    });
	    $cms.find('.cm.message, .cm.emote, .cm.mention').each(function(){
	      var id, that;
	      id = this.dataset.cid.split('-')[0];
	      if (that = getUser(id)) {
	        $(this).data({
	          avatar: that.avatarID
	        });
	        convert($(this), that.avatarID);
	      }
	    });
	    addListener(API, 'popout:close', function(){
	      /* fix webkit bug,
	      causing CSS classes with capital letters not to be applied */
	      var selector, l, k, k_, $avis;
	      if ((typeof customAvatars != 'undefined' && customAvatars !== null) && !customAvatars.disabled) {
	        selector = [];
	        l = 0;
	        for (k in p0ne._avatars) {
	          if ((k_ = k.toLowerCase()) !== k) {
	            selector[l++] = ".avi-" + k_;
	          }
	        }
	        if (l !== 0) {
	          $avis = $cmMain.find(selector.join(',')).removeClass('avi').addClass('avi');
	        }
	      }
	    });
	  },
	  convert: function($el, avatarID){
	    var $bdg, $bdgBox, ref$, ref1$;
	    $bdg = $el.find('.bdg');
	    if ($bdg.length) {
	      $bdgBox = $bdg.parent().data({
	        badge: (ref$ = $bdg[0]) != null ? ref$.className : void 8
	      });
	    } else {
	      $bdgBox = $el.find('badge-box').removeClass('no-badge');
	    }
	    $bdg = $("<i class=avi>").addClass("avi-" + avatarID).addClass((ref1$ = avatarID.split('-')[1]) != null ? ref1$[0] : void 8);
	    $bdgBox.addClass('thumb small').empty().append($bdg);
	  },
	  disable: function(){
	    $cms.find('.badge-box.thumb').each(function(){
	      var $bdgBox, badge, $bdg;
	      $bdgBox = $(this);
	      badge = $bdgBox.data('badge');
	      $bdgBox.removeClass().addClass('badge-box clickable');
	      $bdgBox.data({
	        badge: null
	      }).empty();
	      $bdg = $("<i>");
	      if (!badge) {
	        $bdgBox.addClass('no-badge');
	      } else {
	        $bdg.addClass(badge).appendTo($bdgBox);
	      }
	    });
	  }
	});
	/*####################################
	#          AUTO-SIZED EMOJI          #
	####################################*/
	module('autoSizedEmoji', {
	  require: ['chatPlugin', 'emoji', 'customEmoji'],
	  _settings: {
	    tooltip: true
	  },
	  setup: function(arg$, autoSizedEmoji){
	    var replace, addListener;
	    replace = arg$.replace, addListener = arg$.addListener;
	    replace(emoji, 'replace_colons', function(str, isSendingMessage, saveSkinTone, isSendingOrPreview){
	      var emojiEnabled, title, skinTone;
	      emoji.init_colons();
	      emojiEnabled = isSendingOrPreview || database.settings.emoji;
	      title = "";
	      if ((str[0] === ':' && ':' === str[str.length - 1]) && emoji.map.colons[str.substr(1, str.length - 2)]) {
	        skinTone = ~~str[str.length - 2];
	        if ((1 <= skinTone && skinTone <= 6) && str.substr(-13, 11) === ':skin-tone-') {
	          return replaceEmote(str, ":skin-tone-" + skinTone + ":");
	        } else {
	          return replaceEmote(str);
	        }
	      } else {
	        return str.replace(emoji.rx_colons, replaceEmote);
	      }
	      function replaceEmote(emote, skinToneStr){
	        var emoteName, codePoint, title, skinTone, url, idx;
	        emoteName = emote.substr(1, emote.length - 2);
	        codePoint = emoji.map.colons[emoteName];
	        if (autoSizedEmoji._settings.tooltip) {
	          title = " title='" + emote + "'";
	        }
	        if (skinToneStr) {
	          skinTone = parseInt(skinToneStr[skinToneStr.length - 2]);
	          if (skinTone === 1) {
	            skinTone = 0;
	          }
	          if (saveSkinTone) {
	            database.settings.skinTone = skinTone;
	            settings.save();
	          }
	          emoteName = emoteName.substr(0, emoteName.length - 13);
	          codePoint = emoji.map.colons[emoteName];
	        } else if (!isSendingMessage) {
	          if (!isSendingOrPreview && (url = customEmoji.autoSizedEmoji[emoteName])) {
	            return "<img class=p0ne-custom-emote src='" + url + "' alt='" + emote + "'" + title + ">";
	          } else if (!isSendingMessage && emojiEnabled && in$(emoteName, emoji.plugdata)) {
	            return "<span class=\"emoji-outer emoji-sizer\"" + title + "><span class=\"emoji-inner gemoji-plug gemoji-plug-" + emoteName + "\"></span></span>";
	          }
	        }
	        if (database.settings.skinTone && emoji.check_variation(codePoint)) {
	          skinTone = "skin-tone-" + database.settings.skinTone;
	          idx = emoji.map.colons[skinTone];
	          if (codePoint) {
	            return emoji.replacement(codePoint, isSendingMessage, emoteName, ':', {
	              idx: idx,
	              actual: skinTone,
	              wrapper: ':'
	            });
	          } else {
	            return ":" + emoteName + ":" + emoji.replacement(idx, isSendingMessage, skinTone, ':');
	          }
	        } else if (codePoint) {
	          return emoji.replacement(codePoint, isSendingMessage, emoteName, ':');
	        } else {
	          return emote;
	        }
	      }
	    });
	    addListener(API, 'p0ne:chat:plugin', function(msg){
	      var p0ne_onload, p0ne_onerror;
	      p0ne_onload = msg.p0ne_onload, p0ne_onerror = msg.p0ne_onerror;
	      msg.message = msg.message.replace(/<img class=p0ne-custom-emote /g, "<img class=p0ne-custom-emote " + p0ne_onload + " " + p0ne_onerror + " ");
	    });
	  }
	});
	/*####################################
	#             JUMBOMOJI              #
	####################################*/
	module('jumbomoji', {
	  require: ['chatPlugin', 'emoji', '_$context'],
	  displayName: "Jumbomoji",
	  help: "Shows emoji as extra large, if the message only contains emoji.\nOnly applies to messages with no more than 23 emoji.",
	  settings: 'chat',
	  _settings: {
	    scale: 2
	  },
	  setup: function(arg$, jumbomoji){
	    var addListener;
	    addListener = arg$.addListener;
	    css('jumbomoji', ".p0ne-jumbomoji .emoji-inner:not(.gemoji-plug) {\n    width: " + 16 * jumbomoji._settings.scale + "px;\n    height: " + 16 * jumbomoji._settings.scale + "px;\n}");
	    addListener(_$context, 'p0ne:chat:post', function(msg){
	      var uid, originalMessage, $el, wasAtBottom, message, i$, len$, char, $br, $emotes;
	      uid = msg.uid, originalMessage = msg.originalMessage, $el = msg.$el, wasAtBottom = msg.wasAtBottom;
	      if (uid) {
	        message = originalMessage.replace(/#+/g, '').replace(emoji.rx_unified, '#').replace(emoji.rx_colons, '#').replace(emoji.rx_emoticons, '#').replace(/\s+/g, '');
	        if (message.length <= 23) {
	          for (i$ = 0, len$ = message.length; i$ < len$; ++i$) {
	            char = message[i$];
	            if (char !== '#') {
	              return;
	            }
	          }
	          $br = $el.find('br:last');
	          if ($br.length) {
	            $emotes = $br.nextAll('.emoji-outer');
	          } else {
	            $emotes = $el.find('.emoji-outer');
	          }
	          $emotes.addClass('p0ne-jumbomoji');
	          if (wasAtBottom) {
	            chatScrollDown();
	          }
	        }
	      }
	    });
	  }
	});
	/*####################################
	#           TWITCH  EMOTES           #
	####################################*/
	module('twitchEmotes', {
	  displayName: "Twitch Emotes",
	  help: "Lets you use Twitch Emotes in the chat and automatically converts the ones you receive!\n\nNote: only users with plug.dj scripts supporting Twitch Emotes will see them! For everyone else, they will show up as plain text like this :example:",
	  settings: 'chat',
	  settingsSimple: true,
	  disabled: true,
	  require: ['customEmoji'],
	  _settings: {
	    autoSize: true
	  },
	  setup: function(arg$, twitchEmotes){
	    var this$ = this;
	    if (this.loadingEmotes) {} else if (this.data) {
	      init();
	    } else {
	      this.loadingEmotes = true;
	      $.getJSON('https://twitchemotes.com/api_cache/v2/global.json', function(data){
	        this$.data = data;
	        this$.loadingEmotes = false;
	        if (!this$.disabled) {
	          init();
	        }
	      });
	    }
	    function init(){
	      var emotes, name, ref$, image_id;
	      emotes = {};
	      for (name in ref$ = this$.data.emotes) {
	        image_id = ref$[name].image_id;
	        emotes[name.toLowerCase()] = {
	          url: "https://static-cdn.jtvnw.net/emoticons/v1/" + image_id + "/1.0",
	          backgroundSize: '16px',
	          size: twitchEmotes._settings.autoSize ? 'auto' : void 8
	        };
	      }
	      console.log("[adding Twitch emotes]", Object.keys(this$.data.emotes).length, emotes);
	      customEmoji.addEmoji(emotes);
	    }
	  },
	  disable: function(){
	    var this$ = this;
	    if (this.data) {
	      customEmoji.removeEmoji(Object.keys(this.data.emotes).map(function(it){
	        return it.toLowerCase();
	      }));
	    }
	  }
	});
	/*####################################
	#         CUSTOM  TIMESTAMPS         #
	####################################*/
	module('chatCustomTimestamps', {
	  displayName: "Custom Timestamp Formatting",
	  settings: 'chat',
	  _settings: {
	    am: "am",
	    pm: "pm",
	    clockIcon: false,
	    customFormat: ''
	  },
	  setup: function(arg$){
	    var replace;
	    replace = arg$.replace;
	    replace(auxiliaries, 'getChatTimestamp', bind$(this, 'getChatTimestamp'));
	  },
	  getChatTimestamp: function(is24h){
	    var d, h, abbr, clockIcon;
	    d = new Date();
	    h = d.getHours();
	    if (h < 12) {
	      abbr = this._settings.am;
	    } else {
	      abbr = this._settings.pm;
	    }
	    if (this._settings.clockIcon || this._settings.customFormat) {
	      clockIcon = ['🕿', '🕜', '🕑', '🕿', '🕒', '🕞', '🕓', '🕟', '🕔', '🕠', '🕕', '🕡', '🕖', '🕢', '🕗', '🕣', '🕘', '🕤', '🕙', '🕥', '🕚', '🕦', '🕛', '🕧'][(d.getHours() % 12) * 2 + (d.getMinutes > 30) || 23];
	      if (!this._settings.customFormat) {
	        clockIcon = " " + clockIcon;
	      }
	    } else {
	      clockIcon = "";
	    }
	    if (this._settings.customFormat) {
	      return this._settings.customFormat.replace(/(yyyy|tt|MS|c)|([ymdhHMS])(\2?)/g, function(arg$, a, b, p){
	        var res;
	        if (a === 'yyyy') {
	          return d.getFullYear();
	        } else if (a === 'tt') {
	          return abbr;
	        } else if (a === 'MS') {
	          return d.getMilliseconds();
	        } else if (a === 'c') {
	          return clockIcon;
	        } else {
	          res = (function(){
	            switch (b) {
	            case 'y':
	              return d.getFullYear() % 100;
	            case 'm':
	              return d.getMonth();
	            case 'd':
	              return d.getDate();
	            case 'h':
	              return d.getHours() % 12 || 12;
	            case 'H':
	              return d.getHours();
	            case 'M':
	              return d.getMinutes();
	            case 'S':
	              return d.getSeconds();
	            }
	          }());
	          if (p) {
	            return pad(res);
	          } else {
	            return res;
	          }
	        }
	      });
	    } else if (is24h) {
	      return pad(h) + ":" + pad(d.getMinutes()) + clockIcon;
	    } else {
	      return pad(h % 12 || 12) + ":" + pad(d.getMinutes()) + abbr + clockIcon;
	    }
	  },
	  settingsExtra: function($el){
	    var chatCustomTimestamps, is24h, customPlaceholder, am, pm, $form, $preview, $am, $pm, transforms, i$, this$ = this;
	    chatCustomTimestamps = this;
	    is24h = $('#chat-timestamp-button .icon-timestamps-12').length === 0;
	    if (!is24h) {
	      customPlaceholder = 'hh:MMtt';
	    } else {
	      customPlaceholder = 'HH:MM';
	    }
	    am = this._settings.am;
	    pm = this._settings.pm;
	    $form = $("<form class=p0ne-timestamps><b>preview:</b> <span class=p0ne-timestamps-preview></span><br><br><div style='display: flex; justify-content: space-between;'><label style='margin-right: 30px;'>am: <input class='p0ne-settings-input p0ne-timestamps-am'></label><label>pm: <input class='p0ne-settings-input p0ne-timestamps-pm'></label></div><label><input type=checkbox class=p0ne-settings-checkbox " + (this._settings.clockIcon ? 'checked' : '') + "> clockIcon</label><div style='display: flex; justify-content: space-around;'><button class='p0ne-settings-btn p0ne-timestamps-reset' title='reset to default am/pm'>default</button><button class='p0ne-settings-btn p0ne-timestamps-caps' title='capitalize'>am \u21c4 AM</button><button class='p0ne-settings-btn p0ne-timestamps-dots' title='add dots'>am \u21c4 a.m.</button><button class='p0ne-settings-btn p0ne-timestamps-space' title='add space'>space before</button></div><br><p>custom format:<br><input class='p0ne-settings-input p0ne-timestamps-custom' value='" + this._settings.customFormat + "' placeholder='" + customPlaceholder + "' /><br><b>yyyy</b> = year, <b>yy</b> = year (short), <b>mm</b> = month, <b>dd</b> = day<br><b>hh</b> = hour (12h), <b>HH</b> = hour (24h), <b>tt</b> = am/pm<br><b>MM</b> = minutes, <b>SS</b> = seconds, <b>MS</b> = milliseconds<br>y, m, d, h, H, M, and S are similar to the above, but without leading zero;  <b>c</b> = clock icon</p></form>").appendTo($el);
	    $preview = $form.find('.p0ne-timestamps-preview');
	    $am = $form.find('.p0ne-timestamps-am').on('input', function(){
	      am = this.value;
	      update(true);
	    });
	    $pm = $form.find('.p0ne-timestamps-pm').on('input', function(){
	      pm = this.value;
	      update(true);
	    });
	    transforms = {
	      caps: {
	        transform: function(it){
	          return it.toUpperCase();
	        },
	        undo: function(it){
	          return it.toLowerCase();
	        },
	        test: function(it){
	          return it === it.toUpperCase();
	        }
	      },
	      dots: {
	        transform: function(it){
	          return it.replace(/(\w)(\w)/, '$1.$2.');
	        },
	        undo: function(it){
	          return it.replace(/(\w)\.(\w)\./g, '$1$2');
	        },
	        test: function(it){
	          return /^\W*\w\.\w\.\W*\w\.\w\.\W*$/.test(it);
	        }
	      },
	      space: {
	        transform: function(it){
	          return " " + it;
	        },
	        undo: function(it){
	          return it.substr(1);
	        },
	        test: function(it){
	          return /^ /.test(it);
	        }
	      }
	    };
	    for (i$ in transforms) {
	      (fn$.call(this, i$, transforms[i$]));
	    }
	    $form.find('.p0ne-timestamps-reset').on('click', function(e){
	      e.preventDefault();
	      am = 'am';
	      pm = 'pm';
	      update();
	    });
	    $form.find('.p0ne-timestamps-custom').on('input', function(){
	      chatCustomTimestamps._settings.customFormat = this.value;
	      update();
	    });
	    $form.find('.p0ne-settings-checkbox').on('click', function(){
	      chatCustomTimestamps._settings.clockIcon = this.checked;
	      update();
	    });
	    update();
	    function update(skipValUpdate){
	      var ampm, k, ref$, trans;
	      chatCustomTimestamps._settings.am = am;
	      chatCustomTimestamps._settings.pm = pm;
	      $preview.text(chatCustomTimestamps.getChatTimestamp(is24h));
	      if (!skipValUpdate) {
	        $am.val(am);
	        $pm.val(pm);
	      }
	      ampm = am + "" + pm;
	      for (k in ref$ = transforms) {
	        trans = ref$[k];
	        trans.$el.toggleClass('p0ne-timestamps-enabled', trans.test(ampm));
	      }
	      return chatCustomTimestamps.saveSettings();
	    }
	    function fn$(k, trans){
	      trans.$el = $form.find(".p0ne-timestamps-" + k).on('click', function(e){
	        e.preventDefault();
	        if (trans.test(am + "" + pm)) {
	          am = trans.undo(am);
	          pm = trans.undo(pm);
	        } else {
	          am = trans.transform(am);
	          pm = trans.transform(pm);
	        }
	        update();
	      });
	    }
	  }
	});
	function bind$(obj, key, target){
	  return function(){ return (target || obj)[key].apply(obj, arguments) };
	}
	function in$(x, xs){
	  var i = -1, l = xs.length >>> 0;
	  while (++i < l) if (x === xs[i]) return true;
	  return false;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 11 */
/***/ function(module, exports) {

	/* lastCompatibleVersion explained:
	 * if last used p0 version is below lastCompatibleVersion,
	 * separate fixes are loaded and applied before plug_p0ne continues loading
	 */
	var ref$, out$ = typeof exports != 'undefined' && exports || this;
	ref$ = out$;
ref$.version = '4.3.5';
	ref$.lastCompatibleVersion = '4.2.1';
	ref$.contact = ['brinkiepie', 'gmail.com'].join("@");
	ref$.host = 'https://cdn.p0ne.com';
	ref$.SOUNDCLOUD_KEY = 'aff458e0e87cfbc1a2cde2f8aeb98759';
	ref$.YOUTUBE_V3_KEY = 'AIzaSyDaWL9emnR9R_qBWlDAYl-Z_h4ZPYBDjzk';
	ref$.FIMSTATS_KEY = '4983a7f2-b253-4300-8b18-6e7c57db5e2e';
	ref$.proxy = function(url){
	  return "https://cors-anywhere.herokuapp.com/" + url.replace(/^.*\/\//, '');
	};
	ref$.started = (typeof performance != 'undefined' && performance !== null ? performance.now() : void 8) || new Date();
	ref$.autosave = {};
	ref$.autosave_num = {};
	ref$.modules = (typeof p0ne != 'undefined' && p0ne !== null ? p0ne.modules : void 8) || {};
	ref$.dependencies = {};
	ref$.reload = function(){
	  return $.getScript(this.host + "/scripts/plug_p0ne.beta.js");
	};
	ref$.close = function(){
	  var i$, ref$, m;
	  if (console.groupCollapsed) {
	    console.groupCollapsed("[p0ne] closing");
	  } else {
	    console.log("[p0ne] closing…");
	  }
	  for (i$ in ref$ = this.modules) {
	    m = ref$[i$];
	    if (typeof m.settingsSave == 'function') {
	      m.settingsSave();
	    }
	    m.disable(true);
	  }
	  if (console.groupCollapsed) {
	    console.groupEnd();
	  } else {
	    console.log("[p0ne] closed!");
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/**
	 * plug_p0ne dev
	 * a set of plug_p0ne modules for usage in the console
	 * They are not used by any other module
	 *
	 * @author jtbrinkmann aka. Brinkie Pie
	 * @license MIT License
	 * @copyright (c) 2015 J.-T. Brinkmann
	 */
	console.log("~~~~~~~ p0ne.dev ~~~~~~~");
	String.prototype.define('toHex', function(){
	  var res, i$, to$, i;
	  res = "";
	  for (i$ = 0, to$ = this.length; i$ < to$; ++i$) {
	    i = i$;
	    res += "\\u" + (0x10000 + this.charCodeAt(i)).toString(16).substr(1);
	  }
	  return res;
	});
	/*####################################
	#      SANDBOX BACKBONE EVENTS       #
	####################################*/
	module('sandboxBackboneEvents', {
	  optional: ['_$context'],
	  setup: function(arg$){
	    var replace, slice, i$, ref$, len$, name;
	    replace = arg$.replace;
	    slice = Array.prototype.slice;
	    replace(Backbone.Events, 'trigger', function(type){
	      var args, a, b, c, events, l, i, ev, e;
	      if (this._events) {
	        args = slice.call(arguments, 1);
	        a = args[0], b = args[1], c = args[2];
	        for (;;) {
	          if ((events = this._events[type]) && (l = events.length)) {
	            i = -1;
	            while (i < l) {
	              try {
	                switch (args.length) {
	                case 0:
	                  while (++i < l) {
	                    (ev = events[i]).callback.call(ev.ctx);
	                  }
	                  break;
	                case 1:
	                  while (++i < l) {
	                    (ev = events[i]).callback.call(ev.ctx, a);
	                  }
	                  break;
	                case 2:
	                  while (++i < l) {
	                    (ev = events[i]).callback.call(ev.ctx, a, b);
	                  }
	                  break;
	                case 3:
	                  while (++i < l) {
	                    (ev = events[i]).callback.call(ev.ctx, a, b, c);
	                  }
	                  break;
	                default:
	                  while (++i < l) {
	                    (ev = events[i]).callback.apply(ev.ctx, args);
	                  }
	                }
	              } catch (e$) {
	                e = e$;
	                console.error("[" + (this._name || 'unnamed EventEmitter') + "] Error while triggering '" + type + "' [" + i + "]", this, args, e.messageAndStack);
	              }
	            }
	          }
	          if (type === 'all') {
	            return this;
	          }
	          args.unshift(type);
	          a = args[0], b = args[1], c = args[2];
	          type = 'all';
	        }
	      }
	    });
	    for (i$ = 0, len$ = (ref$ = ['API', '_$context', 'Layout']).length; i$ < len$; ++i$) {
	      name = ref$[i$];
	      if (window[name]) {
	        replace(window[name], '_name', name);
	        replace(window[name], 'trigger', Backbone.Events.trigger);
	        replace(window[name], 'off', offWarn);
	      }
	    }
	    function offWarn(type, fn){
	      if (type && !fn) {
	        console.warn("[" + this._name + "] warning: removing all listeners for " + type);
	      }
	      return Backbone.Events.off.apply(this, arguments);
	    }
	  }
	});
	/*####################################
	#           LOG EVERYTHING           #
	####################################*/
	module('logEventsToConsole', {
	  optional: ['_$context', 'socketListeners', 'Lang', 'grabEvent'],
	  displayName: "Log Events to Console",
	  settings: 'dev',
	  help: 'This will log events to the JavaScript console.\nThis is mainly for programmers. If you are none, keep this disabled for better performance.\n\nBy default this will leave out some events to avoid completly spamming the console.\nYou can force-enable logging ALL events by running `logEventsToConsole.logAll = true`',
	  disabled: true,
	  logAll: false,
	  setup: function(arg$){
	    var addListener, logEventsToConsole, ctx, chatEvnt, grabbers, hasGrabber;
	    addListener = arg$.addListener;
	    logEventsToConsole = this;
	    if (typeof _$context != 'undefined' && _$context !== null) {
	      ctx = _$context;
	      chatEvnt = 'chat:receive';
	    } else {
	      ctx = API;
	      chatEvnt = 'chat';
	    }
	    addListener('early', ctx, chatEvnt, function(data){
	      var message, name, style;
	      message = cleanMessage(data.originalMessage || data.message).replace(/%/g, "%%");
	      if (data.un) {
	        name = collapseWhitespace(
	        data.un.replace(/\u202e/g, '\\u202e'));
	        name = stripHTML(
	        repeatString$(" ", 24 - name.length) + name);
	        if (data.type === 'emote') {
	          console.log(getTime() + " %c💬 " + name + ": %c" + message, 'font-weight: bold', 'font-style: italic');
	        } else {
	          console.log(getTime() + " %c💬 " + name + ": %c" + message, 'font-weight: bold', '');
	        }
	      } else if (data.type.has('system')) {
	        style = 'font-size: 1.2em; font-weight: bold; border: 1px solid #42a5dc';
	        console.info(getTime() + " %c " + ((typeof Lang != 'undefined' && Lang !== null ? Lang.alerts.systemAlert : void 8) || "System Alert") + ":%c " + message + " ", style + '; color: #42a5dc; border-right: none', style + '; border-left: none');
	      } else {
	        console.log(getTime() + " %c💬 %c" + message, 'font-weight: bold', 'color: #36F');
	      }
	    });
	    addListener(API, 'userJoin', function(user){
	      console.log(getTime() + " + [JOIN]", user.id, formatUser(user, true), user);
	    });
	    addListener(API, 'userLeave', function(user){
	      var name;
	      name = htmlUnescape(user.username).replace(/\u202e/g, '\\u202e');
	      console.log(getTime() + " - [LEAVE]", user.id, formatUser(user, true), user);
	    });
	    if (!window._$context) {
	      return;
	    }
	    addListener(_$context, 'all', function(type, args){
	      var group;
	      group = type.substr(0, type.indexOf(":"));
	      if (group === 'socket' && (type !== 'p0ne:socket:chat' && type !== 'p0ne:socket:vote' && type !== 'p0ne:socket:grab' && type !== 'p0ne:socket:earn') || (group !== 'socket' && group !== 'tooltip' && group !== 'djButton' && group !== 'chat' && group !== 'sio' && group !== 'playback' && group !== 'playlist' && group !== 'notify' && group !== 'drag' && group !== 'audience' && group !== 'anim' && group !== 'HistorySyncEvent' && group !== 'user' && group !== 'ShowUserRolloverEvent' && group !== 'p0ne') && (type !== 'ChatFacadeEvent:muteUpdate' && type !== 'PlayMediaEvent:play' && type !== 'userPlaying:update' && type !== 'context:update') || logEventsToConsole.logAll) {
	        console.log(getTime() + " [" + type + "]", args);
	      }
	    });
	    if (typeof grabEvent != 'undefined' && grabEvent !== null) {
	      grabbers = {};
	      hasGrabber = false;
	      addListener(API, 'p0ne:vote:grab', function(u){
	        console.log(getTime() + " %c★ %c" + formatUser(u, user.isStaff) + "%c grabbed this song", 'color: #aa74ff; font-weight: bold; font-size: 1.5em', 'font-weight: bold', '');
	        grabbers[u.id] = u.username;
	        hasGrabber = true;
	      });
	      addListener(API, 'advance', function(){
	        if (hasGrabber) {
	          console.log("%c★ %cthe last song was grabbed by " + humanList(_.values(grabbers)), 'color: #aa74ff; font-weight: bold; font-size: 1.5em', 'font-weight: bold', '');
	          grabbers = {};
	        }
	        hasGrabber = false;
	      });
	    }
	    addListener(API, 'advance', function(d){
	      var image, duration;
	      image = httpsify(d.media.image);
	      duration = mediaTime(d.media.duration);
	      (d.media.format === 1
	        ? console.logImg(image, 120, 90)
	        : console.logImg(image, 100, 100)).then(function(){});
	      console.log(getTime() + " [DJ_ADVANCE] " + d.dj.username + " plays '" + d.media.author + " - " + d.media.title + "' (" + duration + ")", d);
	    });
	  }
	});
	/*####################################
	#            AUXILIARIES             #
	####################################*/
	importAll$(window, {
	  downloadLink: function(name, filename, dataOrURL){
	    if (!dataOrURL) {
	      dataOrURL = filename;
	      filename = name;
	    }
	    if (dataOrURL && !isURL(dataOrURL)) {
	      if (typeof dataOrURL !== 'string') {
	        dataOrURL = JSON.stringify(dataOrURL);
	      }
	      dataOrURL = URL.createObjectURL(new Blob([dataOrURL], {
	        type: 'text/plain'
	      }));
	    }
	    filename = filename.replace(/[\/\\\?%\*\:\|\"\<\>\.]/g, '');
	    return chatWarnSmall({
	      icon: 'icon-arrow-down',
	      message: "<a href='" + dataOrURL + "' download='" + filename + "'>" + name + "</a>",
	      isHTML: true
	    });
	  },
	  roomState: function(){
	    ajax('GET', 'rooms/state');
	  },
	  export_: function(name){
	    return function(data){
	      console.log("[export] " + name + " =", data);
	      window[name] = data;
	    };
	  },
	  searchEvents: function(regx){
	    var k;
	    if (!(regx instanceof RegExp)) {
	      regx = new RegExp(regx, 'i');
	    }
	    return (function(){
	      var results$ = [];
	      for (k in typeof _$context != 'undefined' && _$context !== null ? _$context._events : void 8) {
	        if (regx.test(k)) {
	          results$.push(k);
	        }
	      }
	      return results$;
	    }());
	  },
	  listUsers: function(){
	    var res, i$, ref$, len$, u;
	    res = "";
	    for (i$ = 0, len$ = (ref$ = API.getUsers()).length; i$ < len$; ++i$) {
	      u = ref$[i$];
	      res += u.id + "\t" + u.username + "\n";
	    }
	    console.log(res);
	  },
	  listUsersByAge: function(){
	    var a, res, i$, len$, u;
	    a = API.getUsers().sort(function(a, b){
	      a = +a.joined.replace(/\D/g, '');
	      b = +b.joined.replace(/\D/g, '');
	      return (a > b && 1) || (a === b && 0) || -1;
	    });
	    res = "";
	    for (i$ = 0, len$ = a.length; i$ < len$; ++i$) {
	      u = a[i$];
	      res += u.joined.replace(/T|\..+/g, ' ') + "\t" + u.username + "\n";
	    }
	    console.log(res);
	  },
	  findModule: function(test){
	    var res, id, ref$, module;
	    res = [];
	    for (id in ref$ = requirejs.s.contexts._.defined) {
	      module = ref$[id];
	      if (module) {
	        if (test(module, id)) {
	          module.requireID || (module.requireID = id);
	          console.log("[findModule]", id, module);
	          res[res.length] = module;
	        }
	      }
	    }
	    return res;
	  },
	  requireHelperHelper: function(module){
	    /* this function will try to find a nice requireHelper rule for the given plug.dj module
	     * the output is a function shorthand in LiveScript */
	    var k, v, keys, keysExact, isNotObj, ref$, id, m2, ref1$, ref2$;
	    if (typeof module === 'string') {
	      module = requirejs(module);
	    }
	    if (!module) {
	      return false;
	    }
	    for (k in module) {
	      v = module[k];
	      keys = 0;
	      keysExact = 0;
	      isNotObj = (ref$ = typeof v) !== 'object' && ref$ !== 'function';
	      for (id in ref$ = requirejs.s.contexts._.defined) {
	        m2 = ref$[id];
	        if (m2 && m2[k] && (k !== 'requireID' && k !== 'cid' && k !== 'id' && k !== 'length')) {
	          keys++;
	          if (isNotObj && m2[k] === v) {
	            keysExact++;
	          }
	        }
	      }
	      if (keys === 1) {
	        return "(." + k + ")";
	      } else if (keysExact === 1) {
	        return "(." + k + " == " + JSON.stringify(v) + ")";
	      }
	    }
	    for (k in ref$ = module.prototype) {
	      v = ref$[k];
	      keys = 0;
	      keysExact = 0;
	      isNotObj = typeof v !== 'object';
	      for (id in ref1$ = requirejs.s.contexts._.defined) {
	        m2 = ref1$[id];
	        if (m2 && ((ref2$ = m2.prototype) != null && ref2$[k])) {
	          keys++;
	          if (isNotObj && m2[k] === v) {
	            keysExact++;
	          }
	        }
	      }
	      if (keys === 1) {
	        return "(.::?." + k + ")";
	      } else if (keysExact === 1) {
	        return "(.::?." + k + " == " + JSON.stringify(v) + ")";
	      }
	    }
	    return false;
	  },
	  validateUsername: function(username, ignoreWarnings, cb){
	    if (typeof ignoreWarnings === 'function') {
	      cb = ignoreWarnings;
	      ignoreWarnings = false;
	    } else if (!cb) {
	      cb = function(slug, err){
	        console[err && 'error' || 'log']("username '" + username + "': ", err || slug);
	      };
	    }
	    if (!ignoreWarnings) {
	      if (username.length < 2) {
	        cb(false, "too short");
	      } else if (username.length >= 25) {
	        cb(false, "too long");
	      } else if (username.has("/")) {
	        cb(false, "forward slashes are not allowed");
	      } else if (username.has("\n")) {
	        cb(false, "line breaks are not allowed");
	      } else {
	        ignoreWarnings = true;
	      }
	    }
	    if (ignoreWarnings) {
	      return $.getJSON("https://plug.dj/_/users/validate/" + encodeURIComponent(username), function(d){
	        var ref$;
	        cb(d && ((ref$ = d.data[0]) != null ? ref$.slug : void 8));
	      });
	    }
	  },
	  getRequireArg: function(haystack, needle){
	    /* this is a helper function to be used in the console to quickly find a module ID corresponding to a parameter and vice versa in the head of a javascript requirejs.define call
	     * e.g. getRequireArg('define( "da676/a5d9e/a7e5a/a3e8f/fa06c", [ "jquery", "underscore", "backbone", "da676/df0c1/fe7d6", "da676/ae6e4/a99ef", "da676/d8c3f/ed854", "da676/cba08/ba3a9", "da676/cba08/ee33b", "da676/cba08/f7bde", "da676/cba08/d0509", "da676/eb13a/b058e/c6c93", "da676/eb13a/b058e/c5cd2", "da676/eb13a/f86ef/bff93", "da676/b0e2b/f053f", "da676/b0e2b/e9c55", "da676/a5d9e/d6ba6/f3211", "hbs!templates/room/header/RoomInfo", "lang/Lang" ], function( e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g ) {', 'u') ==> "da676/cba08/ee33b"
	    */
	    var ref$, a, b, that;
	    ref$ = haystack.split("], function("), a = ref$[0], b = ref$[1];
	    a = a.substr(a.indexOf('"')).split('", "');
	    b = b.substr(0, b.indexOf(')')).split(', ');
	    if (that = b[a.indexOf(needle)]) {
	      try {
	        window[that] = requirejs(needle);
	      } catch (e$) {}
	      return that;
	    } else if (that = a[b.indexOf(needle)]) {
	      try {
	        window[needle] = requirejs(that);
	      } catch (e$) {}
	      return that;
	    }
	  },
	  logOnce: function(base, event){
	    if (!event) {
	      event = base;
	      if (-1 !== event.indexOf(':')) {
	        base = _$context;
	      } else {
	        base = API;
	      }
	    }
	    base.once('event', logger(event));
	  },
	  usernameToSlug: function(un){
	    /* note: this is NOT really accurate! */
	    var lastCharWasLetter, res, i$, ref$, len$, c, lc;
	    lastCharWasLetter = false;
	    res = "";
	    for (i$ = 0, len$ = (ref$ = htmlEscape(un)).length; i$ < len$; ++i$) {
	      c = ref$[i$];
	      if ((lc = c.toLowerCase()) !== c.toUpperCase()) {
	        if (/\w/.test(lc)) {
	          res += c.toLowerCase();
	        } else {
	          res += "\\u" + pad(lc.charCodeAt(0), 4);
	        }
	        lastCharWasLetter = true;
	      } else if (lastCharWasLetter) {
	        res += "-";
	        lastCharWasLetter = false;
	      }
	    }
	    if (!lastCharWasLetter) {
	      res = res.substr(0, res.length - 1);
	    }
	    return res;
	  },
	  reconnectSocket: function(){
	    if (typeof socket != 'undefined' && socket !== null) {
	      if (typeof socket.close == 'function') {
	        socket.close();
	      }
	    }
	    _$context.trigger('force:reconnect');
	  },
	  ghost: function(){
	    return $.get('/');
	  },
	  getAvatars: function(){
	    API.once('p0ne:avatarsloaded', logger('AVATARS'));
	    $.get($("script[src^='https://cdn.plug.dj/_/static/js/avatars.']").attr('src')).then(function(d){
	      var that;
	      if (that = d.match(/manifest.*/)) {
	        API.trigger('p0ne:avatarsloaded', JSON.parse(that[0].substr(11, that[0].length - 12)));
	      }
	    });
	  },
	  showAllAvatarThumbs: function(){
	    var $el, avis, id, ref$, avi, key$, res, i$, str;
	    $el = $('#avatar-thumb-test');
	    if ($el.length === 0) {
	      $el = $('<div id=avatar-thumb-test>').appendTo('body').css({
	        position: 'absolute',
	        top: 54,
	        right: 345,
	        width: 400,
	        zIndex: 99999999999,
	        background: '#222'
	      }).click(function(){
	        $el.remove();
	      });
	    }
	    avis = {};
	    for (id in ref$ = p0ne._avatars) {
	      avi = ref$[id];
	      if (!avi.isVanilla) {
	        avis[key$ = avi.category] || (avis[key$] = "<h4>" + avi.category + "</h4>");
	        avis[avi.category] += "<div class='thumb medium' title='" + id + "' style='position: relative; display: inline-block'><div class=background></div><i class='avi avi-" + id + "'></i></div>";
	      }
	    }
	    res = "";
	    for (i$ in avis) {
	      str = avis[i$];
	      res += str;
	    }
	    $el.html(res);
	  },
	  parseYTGetVideoInfo: function(d, onlyStripHTML){
	    var k, v, ref$, res, i$, ref1$, len$, a, ref2$;
	    if (typeof d === 'object') {
	      for (k in d) {
	        v = d[k];
	        d[k] = parseYTGetVideoInfo(v);
	      }
	      return d;
	    } else if (typeof d !== 'string' || d.startsWith("http")) {
	      return d;
	    } else if (d.startsWith("<!DOCTYPE html>")) {
	      d = JSON.parse(((ref$ = d.match(/ytplayer\.config = (\{[\s\S]*?\});/)) != null ? ref$[1] : void 8) || null);
	      if (onlyStripHTML) {
	        return d;
	      } else {
	        return parseYTGetVideoInfo(d);
	      }
	    } else if (d.has(",")) {
	      return d.split(",").map(parseYTGetVideoInfo);
	    } else if (d.has("&")) {
	      res = {};
	      for (i$ = 0, len$ = (ref1$ = d.split("&")).length; i$ < len$; ++i$) {
	        a = ref1$[i$];
	        a = a.split("=");
	        if (res[a[0]]) {
	          if (!$.isArray(res[a[0]])) {
	            res[a[0]] = [res[a[0]]];
	          }
	          (ref2$ = res[a[0]])[ref2$.length] = parseYTGetVideoInfo(unescape(a[1]));
	        } else {
	          res[a[0]] = parseYTGetVideoInfo(unescape(a[1]));
	        }
	      }
	      return res;
	    } else if (!isNaN(d)) {
	      return +d;
	    } else if (d === 'True' || d === 'False') {
	      return d === 'True';
	    } else {
	      return d;
	    }
	  },
	  fakePlay: function(media){
	    /* force plug to play the provided song */
	    if (!media) {
	      return;
	    } else if (typeof media !== 'object') {
	      mediaLookup(media).then(play);
	    } else {
	      if (media.author) {
	        media = new Backbone.Model(media);
	      }
	      currentMedia.set('media', media);
	    }
	  },
	  roomHop: function(roomslug){
	    if (typeof _$context != 'undefined' && _$context !== null) {
	      _$context.dispatch(new RoomEvent(RoomEvent.JOIN, roomslug));
	    }
	  },
	  lssize: function(sizeWhenDecompressed){
	    var size, k, ref$, v;
	    size = 0;
	    for (k in ref$ = localStorage) {
	      v = ref$[k];
	      if (k !== 'length') {
	        if (sizeWhenDecompressed) {
	          throw new Error("calculating uncompressed lssize is not supported anymore");
	        }
	        size += (v || '').length / 524288;
	      }
	    }
	    return size;
	  },
	  formatCSS: function(css){
	    return css.replace(/(\s*)(?:(\/\*.*?\*\/)|(@media .*?)\{(.*?)\}|(.*?)\{(.*?)\})/g, function(arg$, ws, comment, mQuery, mContent, selector, css){
	      ws || (ws = "\n");
	      if (comment != null) {
	        return ws + "" + comment + "\n";
	      } else if (mQuery != null) {
	        return ws + "" + mQuery + "\n{\n\t" + formatCSS(mContent).fastRepalce("\n", "\n\t") + "\n}";
	      } else if (selector != null) {
	        return "" + ws + selector.replace(/\s*,\s*/g, ',\n') + " {\n" + css.replace(/;\s*/g, ';\n\t').replace(/^\s*(\w+):\s*/gm, '\t$1: ').replace(/\s*$/, '') + "\n}\n\n";
	      }
	    });
	  },
	  stringDiff: function(a, b){
	    /* this compares two strings character by character. this is usefull to see how similar looking usernames differ */
	    var res, l, a_, b_, wasMismatch, i$, to$, ref$, ref1$, i;
	    if (a.length > b.length) {
	      console.log("1st string is longer than 2nd (" + a.length + " > " + b.length + ")");
	    } else if (a.length < b.length) {
	      console.log("1st string is shorter than 2nd (" + a.length + " < " + b.length + ")");
	    }
	    res = [];
	    l = 1;
	    a_ = "";
	    b_ = "";
	    wasMismatch = 0;
	    for (i$ = 0, to$ = (ref$ = a.length) < (ref1$ = b.length) ? ref$ : ref1$; i$ < to$; ++i$) {
	      i = i$;
	      if (a[i] === b[i]) {
	        if (wasMismatch !== false) {
	          a_ += "%c";
	          b_ += "%c";
	          res[l++] = "color: black";
	        }
	        wasMismatch = false;
	      } else {
	        if (wasMismatch !== true) {
	          a_ += "%c";
	          b_ += "%c";
	          res[l++] = "color: red";
	        }
	        wasMismatch = true;
	      }
	      a_ += a[i];
	      b_ += b[i];
	    }
	    res[0] = a_;
	    console.log.apply(console, res);
	    res[0] = b_;
	    console.log.apply(console, res);
	  },
	  fakeChat: function(message, user){
	    if (!user) {
	      user = API.getUser();
	      user.username = "[FAKE MESSAGE]";
	    }
	    if (typeof socketEvents != 'undefined' && socketEvents !== null) {
	      socketEvents.chat({
	        cid: user.id + "-" + (~~(Math.random() * 0x7ffffffe)).toString(16),
	        message: message,
	        sub: user.sub,
	        uid: user.id,
	        un: user.username
	      });
	    }
	  },
	  unguest: function(){
	    if (typeof user_ == 'undefined' || user_ === null) {
	      throw new Error("couldn't load the (required) internal user object");
	    }
	    user_.set({
	      guest: 0,
	      level: 5,
	      joined: "2000-01-01 00:00:00.000000",
	      joinedRoom: 1
	    });
	    if (typeof room != 'undefined' && room !== null) {
	      room.set({
	        joined: true,
	        joinTime: 1
	      });
	    }
	    API.enabled = true;
	  }
	});
	/*####################################
	#            RENAME USER             #
	####################################*/
	module('renameUser', {
	  require: ['users'],
	  module: function(idOrName, newName){
	    var u, i$, ref$, len$, user, id, rup;
	    u = users.get(idOrName);
	    if (!u) {
	      idOrName = idOrName.toLowerCase();
	      for (i$ = 0, len$ = (ref$ = users.models).length; i$ < len$; ++i$) {
	        user = ref$[i$];
	        if (user.attributes.username.toLowerCase() === idOrName) {
	          u = user;
	          break;
	        }
	      }
	    }
	    if (!u) {
	      return console.error("[rename user] can't find user with ID or name '" + idOrName + "'");
	    }
	    u.set('username', newName);
	    id = u.id;
	    if (!(rup = window.p0ne.renameUserPlugin)) {
	      rup = window.p0ne.renameUserPlugin = function(d){
	        d.un = rup[d.fid] || d.un;
	      };
	      if ((ref$ = window.p0ne.chatPlugins) != null) {
	        ref$[ref$.length] = rup;
	      }
	    }
	    rup[id] = newName;
	  }
	});
	(function(){
	  window._$events = {
	    _update: function(){
	      var k, ref$, v;
	      for (k in ref$ = typeof _$context != 'undefined' && _$context !== null ? _$context._events : void 8) {
	        v = ref$[k];
	        this[k.replace(/:/g, '_')] = v;
	      }
	    }
	  };
	  _$events._update();
	})();
	/*####################################
	#            EXPORT DATA             #
	####################################*/
	module('export_', {
	  require: ['downloadLink'],
	  exportPlaylists: function(){
	    var i$, ref$, len$;
	    for (i$ = 0, len$ = (ref$ = playlists).length; i$ < len$; ++i$) {
	      (fn$.call(this, ref$[i$]));
	    }
	    function fn$(pl){
	      $.get("/_/playlists/" + pl.id + "/media").then(function(data){
	        downloadLink("playlist '" + pl.name + "'", pl.name + ".txt", data);
	      });
	    }
	  }
	});
	/*####################################
	#              COPY CHAT             #
	####################################*/
	window.copyChat = function(copy){
	  var host, res, ref$;
	  $('#chat-messages img').fixSize();
	  host = p0ne.host;
	  res = "<!DOCTYPE HTML>\n<head>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n<title>plug.dj Chatlog " + getTime() + " - " + getRoomSlug() + " (" + API.getUser().rawun + ")</title>\n<!-- basic chat styling -->\n<link href='https://dl.dropboxusercontent.com/u/4217628/css/fimplugChatlog.css' rel='stylesheet' type='text/css'>\n";
	  res += ((ref$ = $("head link[href^='https://" + (window.cdnHost || 'cdn.plug.dj') + "/_/static/css/app']")[0]) != null ? ref$.outerHTML : void 8) || "<!-- couldn't find app.css -->";
	  res += getCustomCSS(true);
	  /*
	  res += """\n
	      <!-- p0ne song notifications -->
	      <link rel='stylesheet' href='#host/css/p0ne.notif.css' type='text/css'>
	  """ if window.songNotifications
	  
	  res += """\n
	      <!-- better ponymotes -->
	      <link rel='stylesheet' href='#host/css/bpmotes.css' type='text/css'>
	      <link rel='stylesheet' href='#host/css/emote-classes.css' type='text/css'>
	      <link rel='stylesheet' href='#host/css/combiners-nsfw.css' type='text/css'>
	      <link rel='stylesheet' href='#host/css/gif-animotes.css' type='text/css'>
	      <link rel='stylesheet' href='#host/css/extracss-pure.css' type='text/css'>
	  """ if window.bpm or get$cm! .find \.bpm-emote .length
	  
	  res += """\n
	      <style>
	      #{css \yellowMod}
	      </style>
	  """ if window.yellowMod
	  */
	  res += "\n\n</head>\n<body id=\"chatlog\">\n" + $('.app-right').html().replace(/https:\/\/api\.plugCubed\.net\/proxy\//g, '').replace(/src="\/\//g, 'src="https://') + "\n</body>";
	  copy(res);
	};
	/*
	module \_$contextUpdateEvent, do
	    require: <[ _$context ]>
	    setup: ({wrap}) !->
	        for fn in <[ on off onEarly ]>
	            wrap _$context, fn,  (fn_) !-> return (type, cb, context) !->
	                fn_ ...
	                _$context .trigger \context:update, type, cb, context
	                return this
	*/
	function repeatString$(str, n){
	  for (var r = ''; n > 0; (n >>= 1) && (str += str)) if (n & 1) r += str;
	  return r;
	}
	function importAll$(obj, src){
	  for (var key in src) obj[key] = src[key];
	  return obj;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/**
	 * fimplug related modules
	 *
	 * @author jtbrinkmann aka. Brinkie Pie
	 * @license MIT License
	 * @copyright (c) 2015 J.-T. Brinkmann
	 */
	console.log("~~~~~~~ p0ne.fimplug ~~~~~~~");
	/*####################################
	#       FIMPLUG ENABLER MODULE       #
	####################################*/
	module('enableFimplugModules', {
	  roomSlug: 'friendshipismagic',
	  _settings: {},
	  setup: function(arg$, arg1$){
	    var addListener, _settings, wasFimplug, this$ = this;
	    addListener = arg$.addListener;
	    _settings = arg1$._settings;
	    wasFimplug = getRoomSlug() === this.roomSlug;
	    addListener(_$context, 'room:joined', function(){
	      var wasFimplug, i$, ref$, m;
	      if (getRoomSlug() === this$.roomSlug) {
	        if (wasFimplug) {
	          return;
	        }
	        console.group("[p0ne] disabling fimplug modules");
	        wasFimplug = true;
	        for (i$ in ref$ = p0ne.modules) {
	          m = ref$[i$];
	          if (m.room === this$.roomSlug) {
	            console.log("[p0ne fimplug] enabling", m.moduleName);
	            m.enable();
	          }
	        }
	        console.groupEnd("[p0ne] disabling fimplug modules");
	      } else if (wasFimplug) {
	        console.group("[p0ne] disabling fimplug modules");
	        wasFimplug = false;
	        for (i$ in ref$ = p0ne.modules) {
	          m = ref$[i$];
	          if (m.room === this$.roomSlug) {
	            console.log("[p0ne fimplug] disabling", m.moduleName);
	            m.disable();
	          }
	        }
	        console.groupEnd("[p0ne] disabling fimplug modules");
	      }
	    });
	  }
	});
	/*####################################
	#              RULESKIP              #
	####################################*/
	module('forceSkipButtonRuleskip', {
	  displayName: "Ruleskip Button",
	  settings: 'pony',
	  help: "Makes the Skip button show a ruleskip list instead.\n(you can still instaskip)",
	  screenshot: 'https://i.imgur.com/jGwYsn3.png',
	  moderator: false,
	  room: 'friendshipismagic',
	  setup: function(arg$){
	    var addListener, replace, $create, css, $rulelist, visible, fn;
	    addListener = arg$.addListener, replace = arg$.replace, $create = arg$.$create, css = arg$.css;
	    css('forceSkipButtonRuleskip', '.p0ne-skip-ruleskip {position: absolute;right: 0;bottom: 54px;width: 250px;list-style: none;line-height: 2em;display: none;}.p0ne-skip-ruleskip li {padding: 5px;background: #222;}.p0ne-skip-ruleskip li:hover {background: #444;}');
	    visible = false;
	    fn = addListener(API, 'p0ne:moduleEnabled', function(m){
	      if (m.moduleName === 'forceSkipButton') {
	        $rulelist = $create('<ul class=p0ne-skip-ruleskip><li data-rule=insta><b>insta skip</b></li><li data-rule=30><b>!ruleskip 30</b> (WD-only &gt; brony artist)</li><li data-rule=23><b>!ruleskip 23</b> (WD-only &gt; weird)</li><li data-rule=20><b>!ruleskip 20</b> (alts)</li><li data-rule=13><b>!ruleskip 13</b> (NSFW)</li><li  data-rule=6><b>!ruleskip  6</b> (too long)</li><li  data-rule=4><b>!ruleskip  4</b> (history)</li><li  data-rule=3><b>!ruleskip  3</b> (low effort mix)</li><li  data-rule=2><b>!ruleskip  2</b> (loop / slideshow)</li><li  data-rule=1><b>!ruleskip  1</b> (nonpony)</li></ul>').appendTo(m.$btn);
	        replace(m, 'onClick', function(e){
	          var num;
	          if (visible) {
	            if (num = $(e.target).closest('li').data('rule')) {
	              if (num === 'insta') {
	                API.moderateForceSkip();
	              } else {
	                API.sendChat("!ruleskip " + num);
	              }
	            }
	            m.$btn.find('.icon:first').addClass('icon-skip').removeClass('icon-arrow-down');
	            $rulelist.hide();
	            visible = false;
	          } else if ($(e.target).is('.p0ne-skip-btn, .p0ne-skip-btn>.icon')) {
	            m.$btn.find('.icon:first').removeClass('icon-skip').addClass('icon-arrow-down');
	            $rulelist.show();
	            visible = true;
	          }
	        });
	        console.log("[forceSkipButton] 'fimplug !ruleskip list' patch applied");
	      }
	    });
	    addListener('early', window._$context || API, 'advance', function(){
	      if (visible) {
	        visible = false;
	        $rulelist.hide();
	        $('.p0ne-skip-btn>.icon:first').addClass('icon-skip').removeClass('icon-arrow-down');
	      }
	    });
	    if (typeof forceSkipButton != 'undefined' && forceSkipButton !== null) {
	      fn(forceSkipButton);
	    }
	  },
	  disable: function(){
	    var that;
	    if (that = p0ne.modules.forceSkipButton) {
	      that.$btn.find('.icon:first').removeClass('icon-arrow-down').addClass('icon-skip');
	    }
	  }
	});
	/*####################################
	#              FIMSTATS              #
	####################################*/
	module('fimstats', {
	  settings: 'pony',
	  optional: ['_$context', 'app', 'playlists'],
	  disabled: true,
	  room: 'friendshipismagic',
	  _settings: {
	    highlightUnplayed: false
	  },
	  CACHE_DURATION: 1 .h,
	  setup: function(arg$, fimstats){
	    var addListener, $create, replace, wrap, $el, that, ref$, ref1$, ref2$, $yourNextMedia, this$ = this;
	    addListener = arg$.addListener, $create = arg$.$create, replace = arg$.replace, wrap = arg$.wrap;
	    css('fimstats', '.p0ne-fimstats {position: absolute;left: 0;right: 345px;bottom: 54px;height: 1em;padding: 5px 0;font-size: .9em;color: #12A9E0;background: rgba(0,0,0, 0.4);text-align: center;z-index: 6;transition: opacity .2s ease-out;}.video-only .p0ne-fimstats {bottom: 116px;padding-top: 0px;background: rgba(0,0,0, 0.8);}.p0ne-fimstats-field {display: block;position: absolute;width: 100%;padding: 0 5px;box-sizing: border-box;}.p0ne-fimstats-last { text-align: left; }.p0ne-fimstats-plays, .p0ne-fimstats-once, .p0ne-fimstats-first-notyet { text-align: center; }.p0ne-fimstats-first { text-align: right; }.p0ne-fimstats-field::before, .p0ne-fimstats-field::after,.p0ne-fimstats-first-time, .p0ne-fimstats-last-time, .p0ne-fimstats-once-time {color: #ddd;}#dialog-container .p0ne-fimstats {position: fixed;bottom: 0;left: 0;right: 345px;background: rgba(0,0,0, 0.8);}#dialog-container .p0ne-fimstats-first-notyet::before { content: "not played yet!"; color: #12A9E0 }.p0ne-fimstats-first-notyet::before { content: "first played just now!"; color: #12A9E0 }.p0ne-fimstats-once::before { content: "once played by: "; }.p0ne-fimstats-last::before { content: "last played by: "; }.p0ne-fimstats-last-time::before,.p0ne-fimstats-first-time::before,.p0ne-fimstats-once-time::before { content: "("; }.p0ne-fimstats-last-time::after,.p0ne-fimstats-first-time::after,.p0ne-fimstats-once-time::after { content: ")"; }.p0ne-fimstats-plays::before { content: "played: "; }.p0ne-fimstats-plays::after { content: " times"; }.p0ne-fimstats-first::before { content: "first played by: "; }.p0ne-fimstats-first-time,.p0ne-fimstats-last-time,.p0ne-fimstats-once-time {font-size: 0.8em;display: inline;position: static;margin-left: 5px;}.p0ne-fimstats-unplayed {color: lime;}');
	    $el = $create('<span class=p0ne-fimstats>').appendTo('#room');
	    addListener(API, 'advance', this.updateStats = function(d){
	      var ref$, id;
	      if (d != null && ((ref$ = d.lastPlay) != null && ref$.media)) {
	        delete this$.cache[id = d.lastPlay.media.format + ":" + d.lastPlay.media.cid];
	      }
	      if (d.media) {
	        fimstats(d.media).then(function(res){
	          $el.html(res.html);
	        }).fail(function(err){
	          $el.html(err.html);
	        });
	        if (typeof this$.checkUnplayed == 'function') {
	          this$.checkUnplayed(d.dj);
	        }
	      } else {
	        $el.html("");
	      }
	    });
	    if (typeof _$context != 'undefined' && _$context !== null) {
	      addListener(_$context, 'ShowDialogEvent:show', function(d){
	        _.defer(function(){
	          var ref$;
	          if ((ref$ = d.dialog.options) != null && ref$.media) {
	            console.log("[fimstats]", d.dialog.options.media);
	            fimstats(d.dialog.options.media).then(function(d){
	              $('#dialog-preview').after($create('<div class=p0ne-fimstats>').html(d.html));
	            });
	          }
	        });
	      });
	    }
	    if (that = typeof app != 'undefined' && app !== null ? (ref$ = app.dialog) != null ? (ref1$ = ref$.dialog) != null ? (ref2$ = ref1$.options) != null ? ref2$.media : void 8 : void 8 : void 8 : void 8) {
	      console.log("[fimstats]", that);
	      fimstats(that.toJSON()).then(function(d){
	        $('#dialog-preview').after($create('<div class=p0ne-fimstats>').html(d.html));
	      });
	    }
	    console.info("[fimstats] prevent p0neSettings overlay", $('#p0ne-menu').css({
	      bottom: 54 + 21
	    }));
	    addListener(API, 'p0ne:moduleEnabled p0ne:moduleUpdated', function(m){
	      if (m.moduleName === 'p0neSettings') {
	        $('#p0ne-menu').css({
	          bottom: 54 + 21
	        });
	      }
	    });
	    if ((typeof app != 'undefined' && app !== null) && (typeof playlists != 'undefined' && playlists !== null)) {
	      $yourNextMedia = $('#your-next-media');
	      this.checkUnplayed = function(dj){
	        var i, ref$;
	        $yourNextMedia.removeClass('p0ne-fimstats-unplayed');
	        i = +(((ref$ = dj || API.getDJ()) != null ? ref$.id : void 8) === userID);
	        if (fimstats._settings.highlightUnplayed && playlists.activeMedia.length >= i) {
	          console.log("[fimstats] checking next song", playlists.activeMedia[i]);
	          fimstats(playlists.activeMedia[i]).then(function(d){
	            if (d.unplayed) {
	              $yourNextMedia.addClass('p0ne-fimstats-unplayed');
	            }
	          });
	        }
	      };
	      wrap(app.footer.playlist, 'updateMeta', function(uM_){
	        return function(){
	          if (playlists.activeMedia.length > 0) {
	            uM_.apply(this, arguments);
	            fimstats.checkUnplayed();
	          } else {
	            clearTimeout(this.updateMetaBind);
	          }
	        };
	      });
	      replace(app.footer.playlist, 'updateMetaBind', bind$(app.footer.playlist, 'updateMeta'));
	      this.checkUnplayed();
	    } else {
	      console.warn("[fimstats] failed to load requirements for checking next song. next song check disabled.");
	    }
	    this.updateStats({
	      media: API.getMedia()
	    });
	  },
	  checkUnplayed: function(){},
	  cache: {},
	  module: function(media){
	    var id, def, this$ = this;
	    media == null && (media = API.getMedia());
	    $('#p0ne-menu').css({
	      bottom: 54
	    });
	    if (media.attributes && media.toJSON) {
	      media = media.toJSON();
	    }
	    if (this.cache[id = media.format + ":" + media.cid]) {
	      clearTimeout(this.cache[id].timeoutID);
	      this.cache[id].timeoutID = sleep(this.CACHE_DURATION, function(){
	        var ref$, ref1$;
	        return ref1$ = (ref$ = this$.cache)[id], delete ref$[id], ref1$;
	      });
	      return this.cache[id];
	    } else {
	      def = $.Deferred();
	      this.cache[id] = def.promise();
	      this.cache[id].timeoutID = sleep(this.CACHE_DURATION, function(){
	        var ref$, ref1$;
	        return ref1$ = (ref$ = this$.cache)[id], delete ref$[id], ref1$;
	      });
	    }
	    $.getJSON("https://api.fimplug.net/media/" + media.format + "/" + media.cid).then(function(d){
	      var k, v, k2, v2, sinceFirstPlay, perDay, playStats;
	      d = d.data[0];
	      for (k in d) {
	        v = d[k];
	        if (typeof v === 'string') {
	          d[k] = sanitize(v);
	        } else {
	          for (k2 in v) {
	            v2 = v[k2];
	            if (typeof v2 === 'string') {
	              v[k2] = sanitize(v2);
	            }
	          }
	        }
	      }
	      if (d.firstPlay.time !== d.lastPlay.time) {
	        sinceFirstPlay = Date.now() - new Date(d.firstPlay.time);
	        perDay = d.plays.total / sinceFirstPlay * 86400000;
	        playStats = "Ø " + humanTime(sinceFirstPlay / d.plays.total) + " inbetween plays";
	        if (perDay >= 1) {
	          playStats += "; Ø " + ~~(perDay * 100) / 100 + " plays/day";
	        }
	        playStats += "\n" + plural(d.plays.week, 'play') + " in the past week, " + plural(d.plays.month, 'play') + " in the past 30 days";
	        d.text = "last played by " + d.lastPlay.user.username + " \xa0 - (" + d.plays.total + "x) - \xa0 first played by " + d.firstPlay.user.username;
	        d.html = "<span class='p0ne-fimstats-field p0ne-fimstats-last p0ne-name' data-uid=" + d.lastPlay.id + "><span class=name>" + d.lastPlay.user.username + "</span><span class=p0ne-fimstats-last-time>" + ago(new Date(d.lastPlay.time)) + "</span></span><span class='p0ne-fimstats-field p0ne-fimstats-first p0ne-name' data-uid=" + d.firstPlay.id + "><span class=name>" + d.firstPlay.user.username + "</span><span class=p0ne-fimstats-first-time>" + ago(new Date(d.firstPlay.time)) + "</span></span><span class='p0ne-fimstats-field p0ne-fimstats-plays' title='" + playStats + "'>" + d.plays.total + "</span>";
	      } else {
	        d.text = "once played by " + d.firstPlay.user.username;
	        d.html = "<span class='p0ne-fimstats-field p0ne-fimstats-once'>" + d.firstPlay.user.username + "<span class=p0ne-fimstats-once-time>" + ago(new Date(d.firstPlay.time)) + "</span></span>";
	      }
	      def.resolve(d);
	    }).fail(function(d){
	      if (d.status === 404) {
	        d.text = "first played just now!";
	        d.html = "<span class='p0ne-fimstats-field p0ne-fimstats-first-notyet'></span>";
	        d.unplayed = true;
	        def.resolve(d);
	      } else {
	        d.text = d.html = "error loading fimstats";
	        def.reject(d);
	      }
	    });
	    return this.cache[id];
	    function sanitize(str){
	      return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
	    }
	  },
	  settingsExtra: function($el){
	    var fimstats, noReqMissing;
	    fimstats = this;
	    noReqMissing = (typeof app != 'undefined' && app !== null) || (typeof playlists == 'undefined' || playlists === null);
	    $("<form><label><input type=checkbox class=p0ne-fimstats-unplayed-setting " + (this._settings.highlightUnplayed && noReqMissing ? 'checked' : '') + " " + (noReqMissing ? '' : 'disabled') + "> highlight next song if unplayed</label></form>").appendTo($el.css({
	      paddingLeft: 15
	    }));
	    if (noReqMissing) {
	      $el.on('click', '.p0ne-fimstats-unplayed-setting', function(){
	        console.log(getTime() + " [fimstats] updated highlightUnplayed to " + this.checked);
	        fimstats._settings.highlightUnplayed = this.checked;
	        fimstats.saveSettings();
	        if (this.checked) {
	          fimstats.checkUnplayed();
	        } else {
	          $('#your-next-media').removeClass('p0ne-fimstats-unplayed');
	        }
	      });
	    }
	  },
	  disable: function(){
	    $('#your-next-media').removeClass('p0ne-fimstats-unplayed');
	  }
	});
	function bind$(obj, key, target){
	  return function(){ return (target || obj)[key].apply(obj, arguments) };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/**
	 * Fixes for plug.dj bugs
	 *
	 * @author jtbrinkmann aka. Brinkie Pie
	 * @license MIT License
	 * @copyright (c) 2015 J.-T. Brinkmann
	 */
	var out$ = typeof exports != 'undefined' && exports || this;
	console.log("~~~~~~~ p0ne.fixes ~~~~~~~");
	/*####################################
	#                FIXES               #
	####################################*/
	module('simpleFixes', {
	  setup: function(arg$){
	    var addListener, replace, wrap;
	    addListener = arg$.addListener, replace = arg$.replace, wrap = arg$.wrap;
	    this.scm = $('#twitter-menu, #facebook-menu, .shop-button').detach();
	    replace($('#chat-input-field')[0], 'tabIndex', 1);
	    replace(localStorage, 'clear', $.noop);
	    addListener($('#vote'), 'click', function(){
	      $('#chat-input-field').focus();
	    });
	    addListener(API, 'p0ne:socket:reconnected', function(){
	      var ref$;
	      if ((typeof app != 'undefined' && app !== null ? (ref$ = app.dialog.dialog) != null ? ref$.options.title : void 8 : void 8) === Lang.alerts.connectionError) {
	        app.dialog.$el.hide();
	      }
	    });
	    wrap(window._, 'bind', function(bind_){
	      return function(func, context){
	        if (func) {
	          return bind_.apply(this, arguments);
	        } else {
	          return null;
	        }
	      };
	    });
	  },
	  disable: function(){
	    var ref$;
	    if ((ref$ = this.scm) != null) {
	      ref$.insertAfter('#playlist-panel');
	    }
	  }
	});
	/*####################################
	#           USE P0 GAPI KEY          #
	####################################*/
	module('p0neGapiKey', {
	  setup: function(arg$){
	    var replace, ref$;
	    replace = arg$.replace;
	    (ref$ = gapi.client).key || (ref$.key = 'AIzaSyCXdCG_sDuHISSSFcbUmJatH70nS9NYnTs');
	    (ref$ = gapi.client).keyProvider || (ref$.keyProvider = 'plug.dj');
	    replace(gapi.client, 'key', p0ne.YOUTUBE_V3_KEY);
	    replace(gapi.client, 'keyProvider', 'plug_p0ne');
	    gapi.client.setApiKey(gapi.client.key);
	  },
	  disableLate: function(){
	    gapi.client.setApiKey(gapi.client.key);
	  }
	});
	/*####################################
	#        BULLETPROOF ANIMATION       #
	####################################*/
	module('sandboxAnimation', {
	  require: ['app'],
	  setup: function(arg$){
	    var wrap;
	    wrap = arg$.wrap;
	    wrap(app, 'animate', function(a_){
	      return function(){
	        var err;
	        try {
	          a_.apply(this, arguments);
	        } catch (e$) {
	          err = e$;
	          console.error(err.messageAndStack);
	        }
	      };
	    });
	  }
	});
	/*####################################
	#       PREVENT DOUBLE ADVANCES      #
	####################################*/
	module('fixDoubleAdvances', {
	  require: ['socketEvents'],
	  setup: function(arg$){
	    var wrap, lastHistoryID;
	    wrap = arg$.wrap;
	    wrap(socketEvents, 'advance', function(a_){
	      return function(data){
	        if (lastHistoryID !== data.h) {
	          lastHistoryID = data.h;
	          return a_.call(this, data);
	        }
	      };
	    });
	  }
	});
	/*####################################
	#        FIX MEDIA THUMBNAILS        #
	####################################*/
	module('fixMediaThumbnails', {
	  require: ['auxiliaries'],
	  help: 'Plug.dj changed the Soundcloud thumbnail URL several times, but never updated the paths in their song database, so many songs have broken thumbnail images.\nThis module fixes this issue.',
	  setup: function(arg$){
	    var replace, $create;
	    replace = arg$.replace, $create = arg$.$create;
	    replace(auxiliaries, 'deserializeMedia', function(e){
	      var ref$;
	      e.author = this.h2t(e.author);
	      e.title = this.h2t(e.title);
	      if (e.image) {
	        if (e.format === 2) {
	          if ((ref$ = parseURL(e.image).host) === 'plug.dj' || ref$ === 'cdn.plug.dj') {
	            e.image = "https://i.imgur.com/41EAJBO.png";
	          }
	        } else {
	          if (e.image.startsWith("http:") || e.image.startsWith("//")) {
	            e.image = "https:" + e.image.substr(e.image.indexOf('//'));
	          }
	        }
	      }
	    });
	  }
	});
	/*####################################
	#            FIX GHOSTING            #
	####################################*/
	module('fixGhosting', {
	  displayName: 'Fix Ghosting',
	  require: ['PlugAjax'],
	  optional: ['_$context'],
	  settings: 'fixes',
	  settingsMore: function(){
	    return $('<toggle val=warnings>Show Warnings</toggle>');
	  },
	  help: 'Plug.dj sometimes considers you to be "not in any room" even though you still are. This is also called "ghosting" because you can chat in a room that technically you are not in anymore. While ghosting, you can still chat, but not join the waitlist or moderate. If others want to @mention you, your name doesn\'t show up in their autocomplete.\n\ntl;dr this module automatically rejoins the room when you are ghosting',
	  _settings: {
	    verbose: true
	  },
	  setup: function(arg$, fixGhost){
	    var wrap, addListener, rejoining, queue, roomChanging, currentRoom, roomChangingTimeout, rejoinRoom, this$ = this;
	    wrap = arg$.wrap, addListener = arg$.addListener;
	    rejoining = false;
	    queue = [];
	    if (typeof _$context != 'undefined' && _$context !== null) {
	      roomChanging = false;
	      addListener(_$context, 'room:joining', function(){
	        roomChanging = true;
	      });
	      addListener(_$context, 'room:joined', function(){
	        roomChanging = false;
	      });
	      addListener(API, 'p0ne:socket:userLeave', function(data){
	        if (data === userID) {
	          if (!roomChanging) {
	            rejoinRoom('you left the room');
	          } else {
	            console.log("[fixGhosting] changed room, not autorejoining");
	          }
	        }
	      });
	    } else {
	      currentRoom = getRoomSlug();
	      addListener(API, 'p0ne:socket:userLeave', function(data){
	        if (data === userID) {
	          clearTimeout(roomChangingTimeout);
	          roomChangingTimeout = sleep(10000, function(){
	            if (currentRoom === getRoomSlug()) {
	              rejoinRoom('you left the room');
	            } else {
	              console.log("[fixGhosting] changed room, not autorejoining");
	              currentRoom = getRoomSlug();
	            }
	          });
	        }
	      });
	    }
	    wrap(PlugAjax.prototype, 'onError', function(oE_){
	      return function(code, e){
	        if ((e != null ? e.status : void 8) === 'notInRoom') {
	          queue[queue.length] = this;
	          rejoinRoom("got 'notInRoom' error from plug", true);
	        } else {
	          oE_.call(this, e);
	        }
	      };
	    });
	    out$.rejoinRoom = rejoinRoom = function(reason, throttled){
	      if (rejoining && throttled) {
	        console.warn("[fixGhosting] You are still ghosting, retrying to connect.");
	      } else {
	        console.warn("[fixGhosting] You are ghosting!", "Reason: " + reason);
	        rejoining = true;
	        ajax('POST', 'rooms/join', {
	          slug: getRoomSlug()
	        }, {
	          success: function(data){
	            var ref$, i$, ref1$, len$, req;
	            if (((ref$ = data.responseText) != null ? ref$[0] : void 8) === "<") {
	              if (data.responseText.has("You have been permanently banned from plug.dj")) {
	                chatWarn({
	                  title: this$.displayName,
	                  message: "your account got permanently banned. RIP"
	                });
	              } else {
	                chatWarn({
	                  title: this$.displayName,
	                  message: "cannot rejoin the room. Plug is acting weird, maybe it is in maintenance mode or you got IP banned?"
	                });
	              }
	            } else {
	              if (fixGhosting._settings.verbose) {
	                chatWarn({
	                  title: this$.displayName,
	                  message: "reconnected to the room"
	                });
	              }
	              for (i$ = 0, len$ = (ref1$ = queue).length; i$ < len$; ++i$) {
	                req = ref1$[i$];
	                req.execute();
	              }
	              rejoining = false;
	              if (typeof _$context != 'undefined' && _$context !== null) {
	                _$context.trigger('p0ne:reconnected');
	              }
	              API.trigger('p0ne:reconnected');
	            }
	          },
	          error: function(data){
	            var statusCode, responseJSON, error, completelyDown;
	            statusCode = data.statusCode, responseJSON = data.responseJSON;
	            error = {
	              ban: "you are banned from this community",
	              roomCapacity: "the room capacity is reached :/",
	              notAuthorized: "you got logged out"
	            }[responseJSON != null ? responseJSON.status : void 8] || {
	              401: "unexpected permission error while rejoining the room.",
	              503: "plug.dj is in mainenance mode. nothing we can do here",
	              521: completelyDown = "plug.dj is currently completly down",
	              522: completelyDown,
	              524: completelyDown
	            }[statusCode] || "cannot rejoin the room, unexpected error " + statusCode + " (" + datastatus + ")";
	            chatWarn({
	              title: this$.displayName,
	              message: error
	            });
	            sleep(10 .min, function(){
	              rejoining = false;
	            });
	          }
	        });
	      }
	    };
	  }
	});
	/*####################################
	#        FIX OTHERS GHOSTING         #
	####################################*/
	module('fixOthersGhosting', {
	  require: ['users', 'socketEvents'],
	  displayName: "Fix Other Users Ghosting",
	  settings: 'fixes',
	  settingsMore: function(){
	    return $('<toggle val=warnings>Show Warnings</toggle>');
	  },
	  help: 'Sometimes plug.dj does not properly inform everyone that another user joined the room. They don\'t show up in the userlist, audience, @mention autocomplete, etc, yet they are in the room and can chat, and often even DJ and moderate.\n\nThis module detects "ghost" users and tries to force-add them to the room.',
	  _settings: {
	    verbose: true
	  },
	  setup: function(arg$){
	    var addListener, css, this$ = this;
	    addListener = arg$.addListener, css = arg$.css;
	    addListener(API, 'chat', function(d){
	      if (d.uid && !users.get(d.uid)) {
	        console.info("[fixOthersGhosting] seems like '" + d.un + "' (" + d.uid + ") is ghosting");
	        ajax('GET', "rooms/state").then(function(data){
	          var i$, ref$, len$, yet$, i, u;
	          for (yet$ = true, i$ = 0, len$ = (ref$ = data[0].users).length; i$ < len$; ++i$) {
	            i = i$;
	            u = ref$[i$];
	            yet$ = false;
	            if (!users.get(u.id)) {
	              socketEvents.userJoin(u);
	              if (this$._settings.verbose) {
	                chatWarn({
	                  title: "p0ne",
	                  message: "force-joined #" + i + " " + d.un + " (" + d.uid + ") to the room"
	                });
	              }
	            }
	          } if (yet$) {
	            ajax('GET', "users/" + d.uid, fn$);
	          }
	          function fn$(data){
	            data.role = -1;
	            socketEvents.userJoin(data);
	            if (this$._settings.verbose) {
	              chatWarn({
	                title: "p0ne",
	                message: d.un + " (" + d.uid + ") is ghosting"
	              });
	            }
	          }
	        }).fail(function(){
	          console.error("[fixOthersGhosting] cannot load room data:", status, data);
	          console.error("[fixOthersGhosting] cannot load user data:", status, data);
	        });
	      }
	    });
	  }
	});
	/*####################################
	#            FIX STUCK DJ            #
	####################################*/
	module('fixStuckDJ', {
	  require: ['socketEvents'],
	  optional: ['votes'],
	  displayName: "Fix Stuck Advance",
	  settings: 'fixes',
	  settingsMore: function(){
	    return $('<toggle val=warnings>Show Warnings</toggle>');
	  },
	  help: 'Sometimes plug.dj does not automatically start playing the next song. Usually you would have to reload the page to fix this bug.\n\nThis module detects stuck advances and automatically force-loads the next song.',
	  _settings: {
	    verbose: true
	  },
	  tries: 0,
	  MAX_TRIES: 10,
	  setup: function(arg$, fixStuckDJ){
	    var addListener, this$ = this;
	    addListener = arg$.addListener;
	    if (API.getTimeRemaining() === 0 && API.getMedia()) {
	      this.timer = sleep(5000, fixStuckDJ);
	    }
	    addListener(API, 'advance', function(d){
	      clearTimeout(this$.timer);
	      if (d.media) {
	        this$.timer = sleep(d.media.duration * 1000 + 2000, fixStuckDJ);
	      }
	    });
	  },
	  module: function(){
	    var fixStuckDJ, showWarning, m, this$ = this;
	    fixStuckDJ = this;
	    if (showWarning = API.getTimeRemaining() === 0) {
	      console.warn("[fixNoAdvance] song seems to be stuck, trying to fix…");
	    }
	    m = API.getMedia() || {};
	    console.log(getTime() + " [unstuck]", this.timer, m, API.getTimeRemaining());
	    ajax('GET', 'rooms/state', {
	      error: function(data){
	        console.error("[fixNoAdvance] cannot load room data:", status, data);
	        if (!this$.disabled && this$.tries < this$.MAX_TRIES) {
	          this$.timer = sleep(10000, fixStuckDJ);
	        } else {
	          this$.tries = 0;
	        }
	      },
	      success: function(data){
	        var ref$, ref1$, ref2$, uid, i, v;
	        this$.tries = 0;
	        (ref$ = data[0]).playback || (ref$.playback = {});
	        if (m.id === ((ref$ = data[0].playback) != null ? (ref1$ = ref$.media) != null ? ref1$.id : void 8 : void 8)) {
	          console.log("[fixNoAdvance] the same song is still playing.");
	        } else {
	          (ref2$ = data[0]).playback || (ref2$.playback = {});
	          socketEvents.advance({
	            c: data[0].booth.currentDJ,
	            d: data[0].booth.waitingDJs,
	            h: data[0].playback.historyID,
	            m: data[0].playback.media,
	            t: data[0].playback.startTime,
	            p: data[0].playback.playlistID
	          });
	          if (typeof votes != 'undefined' && votes !== null) {
	            for (uid in data[0].grabs) {
	              votes.grab(uid);
	            }
	            for (i in ref2$ = data[0].votes) {
	              v = ref2$[i];
	              votes.vote({
	                i: i,
	                v: v
	              });
	            }
	          } else {
	            console.warn("[fixNoAdvance] cannot properly set votes, because optional requirement `votes` is missing");
	          }
	          if (this$._settings.verbose && showWarning) {
	            chatWarn({
	              title: "p0ne",
	              message: "fixed DJ not advancing"
	            });
	          }
	        }
	      }
	    });
	  }
	});
	/*####################################
	#         FIX PLAYLIST CYCLE         #
	####################################*/
	/*
	module \fixNoPlaylistCycle, do
	    require: <[ _$context ActivateEvent ]>
	    displayName: "Fix No Playlist Cycle"
	    settings: \fixes
	    settingsMore: !-> return $ '<toggle val=warnings>Show Warnings</toggle>'
	    help: '''
	        Sometimes after DJing, plug.dj does not move the played song to the bottom of the playlist.

	        This module automatically detects this bug and moves the song to the bottom.
	    '''
	    _settings:
	        verbose: true
	    setup: ({addListener}) !->
	        addListener API, \p0ne:socket:reconnected, !->
	            _$context.dispatch new LoadEvent(LoadEvent.LOAD)
	            _$context.dispatch new ActivateEvent(ActivateEvent.ACTIVATE)
	        / *
	        # manual check
	        addListener API, \advance, ({dj, lastPlay}) !~>
	            #ToDo check if spelling is correctly
	            #ToDo get currentPlaylist
	            if dj?.id == userID and lastPlay.media.id == currentPlaylist.song.id
	                #_$context .trigger \MediaMoveEvent:move
	                ajax \PUT, "playlists/#{currentPlaylist.id}/media/move", ids: [lastPlay.media.id], beforeID: 0
	                if @_settings.verbose
	                    chatWarn do
	                        title: "p0ne"
	                        message: "fixed playlist not cycling"
	        * /
	*/
	/*####################################
	#         FIX STUCK DJ BUTTON        #
	####################################*/
	module('fixStuckDJButton', {
	  require: ['_$context'],
	  settings: 'fixes',
	  displayName: 'Fix Stuck DJ Button',
	  help: 'Sometimes the "Join Waitlist" button gets stuck, making it impossible to join the waitlist.\n\nThis module automatically detects and fixes stuck DJ buttons.',
	  setup: function(arg$){
	    var addListener, $djbtn, fixTimeout;
	    addListener = arg$.addListener;
	    $djbtn = $('#dj-button');
	    fixTimeout = 0;
	    addListener(_$context, 'djButton:update', function(){
	      var notSpinning;
	      notSpinning = $djbtn.find('.spinner').length === 0;
	      if (fixTimeout && notSpinning) {
	        fixTimeout = 0;
	        clearTimeout(fixTimeout);
	      } else if (!fixTimeout) {
	        fixTimeout = sleep(5000, function(){
	          fixTimeout = 0;
	          if ($djbtn.find('.spinner').length !== 0) {
	            ajax('GET', 'rooms/state', function(d){
	              d = d[0];
	              if (d.currentDJ === userID || d.booth.waitingDJs.lastIndexOf(userID) !== -1) {
	                chatWarn({
	                  title: "fixStuckDJButton",
	                  message: "fixing stuck the DJ button"
	                });
	                forceJoin();
	              }
	            });
	          }
	        });
	      }
	    })();
	  }
	});
	/*####################################
	#           WARN ON ADBLOCK          #
	####################################*/
	module('warnOnAdblockPopoutBlock', {
	  require: ['PopoutListener'],
	  setup: function(arg$){
	    var addListener, isOpen, warningShown;
	    addListener = arg$.addListener;
	    isOpen = false;
	    warningShown = false;
	    addListener(API, 'popout:open', function(_window, PopoutView){
	      isOpen = true;
	      sleep(1000, function(){
	        isOpen = false;
	      });
	    });
	    addListener(API, 'popout:close', function(_window, PopoutView){
	      if (isOpen && !warningShown) {
	        chatWarn({
	          title: "p0ne",
	          message: "Popout chat immediately closed again. This might be because of an adblocker. You'd have to make an exception for plug.dj or disable your adblocker. Specifically Adblock Plus is known for causing this problem"
	        });
	        warningShown = true;
	        sleep(15 .min, function(){
	          warningShown = false;
	        });
	      }
	    });
	  }
	});
	/*####################################
	#           CHAT EMOJI FIX           #
	####################################*/
	/*module \chatEmojiPolyfill, do
	    require: <[ users ]>
	    #optional: <[ chatPlugin socketEvents database ]> defined later
	    _settings:
	        verbose: true
	    fixedUsernames: {}
	    originalNames: {}
	    setup: ({addListener}) !-> _.defer !~>
	        /*@security HTML injection should NOT be possible * /
	        /* Emoji-support detection from Modernizr https://github.com/Modernizr/Modernizr/blob/master/feature-detects/emoji.js * /
	        try
	            pixelRatio = window.devicePixelRatio || 1; offset = 12 * pixelRatio
	            document.createElement \canvas .getContext \2d
	                ..fillStyle = \#f00
	                ..textBaseline = \top
	                ..font = '32px Arial'
	                ..fillText '\ud83d\udc28', 0px, 0px # U+1F428 KOALA
	                if ..getImageData(offset, offset, 1, 1).data[0] != 0
	                    console.info "[chatPolyfixEmoji] emojicons appear to be natively supported. fix will not be applied"
	                    @disable!
	                else
	                    console.info "[chatPolyfixEmoji] emojicons appear to NOT be natively supported. applying fix…"
	                    css \chatPolyfixEmoji, '
	                        .emoji {
	                            position: relative;
	                            display: inline-block;
	                        }
	                    '
	                    # cache usernames that require fixing
	                    # note: .rawun is used, because it's already HTML escaped
	                    for u in users?.models ||[] when (tmp=emojifyUnicode u.get(\rawun)) != (original=u.get \rawun)
	                        console.log "\t[chatPolyfixEmoji] fixed username from '#original' to '#{unemojify tmp}'" if @_settings.verbose
	                        u.set \rawun, @fixedUsernames[u.id] = tmp
	                        @originalNames[u.id] = original
	                        # ooooh dangerous dangerous :0
	                        # (not with regard to security, but breaking other scripts)
	                        # (though .rawun should only be used for inserting HTML)
	                        # i really hope this doesn't break anything :I
	                        #                                   --Brinkie 2015
	                    if @fixedUsernames[userID]
	                        user.rawun = @fixedUsernames[userID]
	                        userRegexp = //@#{user.rawun}//g


	                    if _$context?
	                        # fix joining users
	                        addListener _$context, \user:join, (u) !~>
	                            if  (tmp=emojifyUnicode u.get(\rawun)) != (original=u.get \rawun)
	                                console.log "[chatPolyfixEmoji] fixed username '#original' => '#{unemojify tmp}'" if @_settings.verbose
	                                u.set \rawun, @fixedUsernames[u.id] = tmp
	                                @originalNames[u.id] = original

	                        # prevent memory leak
	                        addListener _$context, \user:leave, (u) !~>
	                            delete @fixedUsernames[u.id]
	                            delete @originalNames[u.id]

	                        # fix incoming messages
	                        addListener _$context, \chat:plugin, (msg) !~>
	                            # fix the message body
	                            if msg.uid and msg.message != (tmp = emojifyUnicode(msg.message))
	                                console.log "\t[chatPolyfixEmoji] fixed message '#{msg.message}' to '#{unemojify tmp}'" if @_settings.verbose
	                                msg.message = tmp

	                                # fix the username
	                                if @fixedUsernames[msg.uid]
	                                    # usernames may not contain HTML, also .rawun is HTML escaped.
	                                    # The HTML that's added by the emoji fix is considered safe
	                                    # we modify it, so that the sender's name shows up fixed in the chat
	                                    msg.un_ = msg.un
	                                    msg.un = that

	                                if userRegexp?
	                                    userRegexp.lastIndex = 0
	                                    if userRegexp.test msg.message
	                                        console.log "\t[chatPolyfixEmoji] fix mention"
	                                        msg.type = \mention
	                                        msg.sound = \mention if database?.settings.chatSound
	                                        msg.[]mentions.push "@#{user.rawun}"
	                        # as soon as possible, we have to restore the sender's username again
	                        # otherwise other modules might act weird, such as disableCommand
	                        addListener \early, API, \chat, (msg) !->
	                            if msg.un_
	                                msg.un = msg.un_
	                                delete msg.un_

	                        # fix users on name changes
	                        addListener _$context, \p0ne:socket:userUpdate, (u) !~>
	                            # note: this gets called BEFORE userUpdate is natively processed
	                            # so changes to `u` will be applied
	                            delete @fixedUsernames[u.id]
	                            if (tmp=emojifyUnicode u.rawun) != u.rawun
	                                console.log "[chatPolyfixEmoji] fixed username '#{u.rawun}' => '#{unemojify tmp}'" if @_settings.verbose
	                                u.rawun = @fixedUsernames[u.id] = tmp
	                                if u.id == userID
	                                    user.rawun = @fixedUsernames[userID]
	                                    userRegexp := //@#{user.rawun}//g
	        catch err
	            console.error "[chatPolyfixEmoji] error", err.stack
	    disable: !->
	        for uid, original of @originalNames
	            getUserInternal(uid)? .set \rawun, original
	        if @originalNames[userID]
	            user.rawun = @originalNames[userID]
	*/
	/*####################################
	#        STOP SUBSCRIBER SPAM        #
	####################################*/
	module('stopSubscriberSpam', {
	  displayName: "Stop Subscriber Spam",
	  settings: 'fixes',
	  require: ['_$context'],
	  help: 'This prevents a message showing up, asking you to pay to become a subscriber, everytime you send an image link.\n\nThis module does not affect you if you are already a subscriber',
	  setup: function(arg$){
	    var replace_$Listener;
	    replace_$Listener = arg$.replace_$Listener;
	    return replace_$Listener('chat:nonsubimage', _$context, $.noop);
	  }
	});
	/*####################################
	#          YT PAGED SEARCH           #
	####################################*/
	/* The paginated search was removed on plug.dj on purpose,
	 * because searches use up quite a lot of the Youtube API quota that plug.dj has.
	 * Limiting the search results is to avoid running out of quota.
	 * This is not an issue with plug_p0ne,
	 * because plug_p0ne replaces the API key with plug_p0ne's own,
	 * so that the plug.dj quota won't be used up.
	 */
	module('ytPagedSearch', {
	  displayName: "More Search-Results",
	  settings: 'fixes',
	  require: ['searchManager', 'searchAux', 'SearchList', 'YtSearchService'],
	  optional: ['pl'],
	  help: "Usually plug.dj only shows 50 results when doing a Youtube search.<br>With this module, more results are loaded when you scroll to the bottom of the results.",
	  setup: function(arg$){
	    var replace, ref$;
	    replace = arg$.replace;
	    replace(SearchList.prototype, 'onScroll', function(){
	      if (!this.searching && this.collection.length < 200 && searchManager.lastCount > 0 && this.scrollPane.getPercentScrolledY() > 0.97) {
	        this.searching = !0;
	        searchManager.collection = this.collection;
	        if (searchManager.more()) {
	          this.showRowSpinner();
	        } else {
	          this.hideRowSpinner();
	        }
	      }
	    });
	    if (typeof pl != 'undefined' && pl !== null) {
	      if ((ref$ = pl.list) != null) {
	        ref$.scrollBind = bind$(pl, 'onScroll');
	      }
	    }
	    replace(searchManager, 'more', function(){
	      if (!this.relatedSearch && this.lastCount > 0 && this.collection.length < 200) {
	        ++this.page;
	        if (!this.scFavoritesLookup && !this.scTracksLookup) {
	          this._search();
	        } else if (this.scFavoritesLookup) {
	          this.loadSCFavorites(this.page);
	        } else if (this.scTracksLookup) {
	          this.loadSCTracks(this.page);
	        }
	        return true;
	      } else {
	        return false;
	      }
	    });
	    replace(searchManager, '_search', function(){
	      var limit, ref$;
	      limit = (ref$ = typeof pl != 'undefined' && pl !== null ? pl.visibleRows : void 8) > 50 ? ref$ : 50;
	      console.log("[_search]", this.lastQuery, this.page, limit);
	      if (this.lastFormat === 1) {
	        searchAux.ytSearch(this.lastQuery, this.page, limit, this.ytBind);
	      } else if (this.lastFormat === 2) {
	        searchAux.scSearch(this.lastQuery, this.page, limit, this.scBind);
	      }
	    });
	    replace(searchAux, 'ytSearch', function(query, page, limit, callback){
	      this.ytSearchService || (this.ytSearchService = new YtSearchService);
	      if (typeof page === 'function') {
	        callback = page;
	        page = 0;
	        limit = 50;
	      }
	      this.ytSearchService.load(query, page, limit, callback);
	    });
	    replace(YtSearchService.prototype, 'load', function(query, page, limit, callback){
	      var this$ = this;
	      this.nextPage = page + 1;
	      this.lastQuery = query;
	      this.callback = callback;
	      gapi.client.youtube.search.list({
	        q: query,
	        part: 'snippet',
	        fields: 'nextPageToken,items(id/videoId,snippet/title,snippet/thumbnails,snippet/channelTitle)',
	        maxResults: limit,
	        pageToken: page !== 1 && query === this.lastQuery ? this.nextPageToken : null,
	        videoEmbeddable: !0,
	        videoDuration: 'any',
	        type: 'video',
	        safeSearch: 'none',
	        videoSyndicated: 'true'
	      }).then(function(e){
	        this$.nextPageToken = e.result.nextPageToken;
	        this$.onList(e);
	      }, this.errorBind);
	    });
	  }
	});
	/*####################################
	#            FIX PLAYLIST            #
	####################################*/
	module('fixPlaylists', {
	  help: 'This fixes some issues with the playlist drawer.<ul><li>right clicking on a playlist\'s name opens it</li><li>releasing the middle mouse button (scroll wheel) over a playlist\'s name opens it</li></ul>',
	  require: ['PlaylistListRow'],
	  setup: function(arg$){
	    var replace;
	    replace = arg$.replace;
	    replace(PlaylistListRow.prototype.events, 'click', PlaylistListRow.prototype.events.mouseup);
	    replace(PlaylistListRow.prototype.events, 'mouseup', function(){
	      var ref$;
	      if ((ref$ = this.options.parent.selectedRows) != null && ref$.length) {
	        this.onRowRelease();
	      }
	    });
	    if (typeof playlists != 'undefined' && playlists !== null) {
	      playlists.sort();
	    }
	  }
	});
	/*####################################
	#         FIX PLAYLIST SORT          #
	####################################*/
	module('fixPlaylistSort', {
	  help: 'This module improves the automatic playlist sorting, to handle playlists with numbers better.\ne.g. it will sort playlists named ',
	  require: ['playlists'],
	  setup: function(arg$){
	    var replace;
	    replace = arg$.replace;
	    replace(playlists, 'comparator', function(as, bs){
	      return naturalSorter(as.attributes.name, bs.attributes.name);
	    });
	  }
	});
	/*####################################
	#          FIX POPOUT CLOSE          #
	####################################*/
	module('fixPopoutChatClose', {
	  require: ['PopoutListener'],
	  setup: function(arg$){
	    var addListener;
	    addListener = arg$.addListener;
	    addListener(API, 'popout:open', function(window_){
	      window_.onbeforeunload = bind$(PopoutView, 'close');
	    });
	  }
	});
	/*####################################
	#           PL CACHE UPDATE          #
	####################################*/
	module('playlistCacheUpdate', {
	  require: ['playlistCache', 'playlistCachePatch', 'eventMap'],
	  setup: function(arg$){
	    var wrap, ref$, ref1$, ref2$, ref3$, ref4$, ref5$;
	    wrap = arg$.wrap;
	    wrap((ref$ = eventMap.eventTypeMap['MediaActionEvent:add']) != null ? (ref1$ = ref$[0]) != null ? ref1$.prototype : void 8 : void 8, 'onSuccess', function(oS_){
	      return function(e){
	        var pl, i$, ref$, len$, m;
	        console.log("[MediaActionEvent:add:onSuccess]", e, this.event);
	        if (pl = playlistCache._data[1].p[e.id]) {
	          for (i$ = 0, len$ = (ref$ = this.event.items).length; i$ < len$; ++i$) {
	            m = ref$[i$];
	            pl.items[m.get('cid')] = true;
	          }
	        }
	        if (typeof _$context != 'undefined' && _$context !== null) {
	          _$context.trigger('p0ne:playlistCache:update', e.id);
	        }
	        oS_.call(this, e);
	        API.trigger('p0ne:playlistCache:update', e.id);
	      };
	    });
	    wrap((ref2$ = eventMap.eventTypeMap['MediaInsertEvent:insert']) != null ? (ref3$ = ref2$[0]) != null ? ref3$.prototype : void 8 : void 8, 'onSuccess', function(oS_){
	      return function(e){
	        var pl, i$, ref$, len$, m;
	        if (pl = playlistCache._data[1].p[e.id]) {
	          for (i$ = 0, len$ = (ref$ = this.event.items).length; i$ < len$; ++i$) {
	            m = ref$[i$];
	            pl.items[m.get('cid')] = true;
	          }
	        }
	        if (typeof _$context != 'undefined' && _$context !== null) {
	          _$context.trigger('p0ne:playlistCache:update', e.id);
	        }
	        oS_.call(this, e);
	        API.trigger('p0ne:playlistCache:update', e.id);
	      };
	    });
	    wrap((ref4$ = eventMap.eventTypeMap['PlaylistCreateEvent:create']) != null ? (ref5$ = ref4$[0]) != null ? ref5$.prototype : void 8 : void 8, 'onSuccess', function(oS_){
	      return function(e){
	        var event, pl, i$, ref$, len$, m;
	        event = this.event;
	        if (event.items) {
	          if (typeof _$context != 'undefined' && _$context !== null) {
	            _$context.trigger('p0ne:playlistCache:update', e.id);
	          }
	          oS_.call(this, e);
	          if (pl = playlistCache._data[1].p[e.id]) {
	            for (i$ = 0, len$ = (ref$ = event.items).length; i$ < len$; ++i$) {
	              m = ref$[i$];
	              pl.items[m.get('cid')] = true;
	            }
	          }
	          API.trigger('p0ne:playlistCache:update', e.id);
	        } else {
	          oS_.call(this, e);
	        }
	      };
	    });
	  }
	});
	/*####################################
	#          FIX TIME STAMPS           #
	####################################*/
	module('fixTimeStamps', {
	  description: "This module fixes plug's incorrect implementation of converting timestamps(when changing from 12h to 24h format) at midnight. It is also faster than the original function.",
	  require: ['auxiliaries'],
	  setup: function(arg$){
	    var replace;
	    replace = arg$.replace;
	    replace(auxiliaries, 'convertChatTimestamp', function(time, format){
	      var am, pm, suffix;
	      am = time.has('am');
	      pm = time.has('pm');
	      if (am || pm) {
	        if (format === 24) {
	          time = time.split(':');
	          if (time[0] === '12') {
	            if (!pm) {
	              time[0] = '00';
	            }
	          } else if (pm) {
	            time[0] = (+time[0]) + 12;
	          } else if (time[0].length === 1) {
	            time[0] = "0" + time[0];
	          }
	          return time[0] + ":" + time[1].substr(0, 2);
	        }
	      } else if (format === 12) {
	        time = time.split(':');
	        if (+time[0] >= 12) {
	          time[0] = time[0] - 12;
	          suffix = 'pm';
	        } else {
	          suffix = 'am';
	        }
	        if (time[0] == '0') {
	          time[0] = '12';
	        }
	        return time[0] + ":" + time[1] + " " + suffix;
	      }
	      return time;
	    });
	  }
	});
	/*####################################
	#        FIX DIALOG CONTAINER        #
	####################################*/
	module('fixDialogContainer', {
	  description: "This module makes dialogs not cover the chat",
	  setup: function(){
	    this.$dc = $('#dialog-container').appendTo($('#app'));
	  },
	  disable: function(){
	    $('#dialog-container').appendTo(document.body);
	  }
	});
	/*####################################
	#  FIX DBL LANGUAGE LANGUAGES NAMES  #
	####################################*/
	module('fixDoubleLanguageNames', {
	  help: 'in plug.dj all languages are shown as "#name (#nameInEnglish)",which is ridiculous when the client\'s langauge is English to begin with,because the name in the brackets is by-definition always the samethis module removes the language name in brackets, where applicable',
	  setup: function(arg$){
	    var replace, k, ref$, v, newStr;
	    replace = arg$.replace;
	    for (k in ref$ = Lang.languages) {
	      v = ref$[k];
	      if (v !== (newStr = v.replace(/^(.*) \(\1\)$/, "$1"))) {
	        replace(Lang.languages, k, newStr);
	      }
	    }
	  }
	});
	/*####################################
	#         FIX USER LANGUAGES         #
	####################################*/
	module('fixUserLanguages', {
	  require: ['users'],
	  setup: function(arg$){
	    var addListener, ids, l, i$, ref$, len$, u;
	    addListener = arg$.addListener;
	    if (user.guest) {
	      return;
	    }
	    ids = [];
	    l = 0;
	    for (i$ = 0, len$ = (ref$ = users.models).length; i$ < len$; ++i$) {
	      u = ref$[i$];
	      ids[l++] = u.id;
	    }
	    function fixUsers(){
	      ajax('POST', 'users/bulk', {
	        ids: ids
	      }).then(function(d){
	        var i$, ref$, len$, u, ref1$;
	        for (i$ = 0, len$ = (ref$ = d.data).length; i$ < len$; ++i$) {
	          u = ref$[i$];
	          if ((ref1$ = users.get(u.id)) != null) {
	            ref1$.set({
	              language: u.language
	            });
	          }
	        }
	      });
	    } fixUsers();
	    if (typeof _$context != 'undefined' && _$context !== null) {
	      addListener(_$context, 'room:joining', fixUsers);
	    }
	  }
	});
	function bind$(obj, key, target){
	  return function(){ return (target || obj)[key].apply(obj, arguments) };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/**
	 * Tutorial and help GUI for plug_p0ne
	 *
	 * @author jtbrinkmann aka. Brinkie Pie
	 * @license MIT License
	 * @copyright (c) 2015 J.-T. Brinkmann
	 */
	console.log("~~~~~~~ p0ne.help ~~~~~~~");
	module('p0neHelp', {
	  optional: ['currentMedia'],
	  require: ['automute', 'p0neSettings'],
	  cssClass: 'is-wt-p0',
	  _settings: {
	    isFirstRun: true
	  },
	  setup: function(aux){
	    var $notif, this$ = this;
	    this.aux = aux;
	    if (this._settings.isFirstRun) {
	      $notif = chatWarn({
	        icon: 'p0ne-icon',
	        title: "plug_p0ne",
	        message: "Welcome to plug_p0ne, the most feature-filled plug.dj script!\ Check out the <b>walkthrough</b> to get a little introduction.<br><button class=p0ne-walkthrough-btn>start walkthrough</button>",
	        isHTML: true
	      }).on('click', 'button', function(){
	        this$.walkthrough();
	        $notif.remove();
	      });
	    }
	  },
	  walkthrough: function(){
	    var aux, ref$, $create, loadStyle, automute, i, steps, p0neSettings, $ppW, $ppI, $pp0, $hdButton, $snoozeBtn, $bar, $songInfo, $footerUser, $footerInfo, $el, $pSettingsClosed, $pSettingsOpen, $pSongInfoClosed, $pSongInfoOpen, DUMMY_VIDEO, screens, $screen, $screens, $navDots, $nextBtn, $steps, blinkingInterval, $blinkingEl, listeners, this$ = this;
	    if (this.disabled) {
	      this.enable();
	    }
	    this._settings.isFirstRun = false;
	    this.saveSettings();
	    ref$ = aux = this.aux, $create = ref$.$create, loadStyle = ref$.loadStyle;
	    loadStyle(p0ne.host + "/css/walkthrough.css");
	    automute = p0ne.modules.automute;
	    steps = {};
	    this.screenClose = $.noop;
	    p0neSettings = p0ne.modules.p0neSettings;
	    automute = p0ne.modules.automute;
	    $ppW = p0neSettings.$ppW;
	    $ppI = $ppW.parent().find('.p0ne-icon:first');
	    $pp0 = $ppI.find('.p0ne-icon-sub');
	    $hdButton = $('#playback .hd');
	    $snoozeBtn = $('#playback .snooze');
	    $bar = $('#now-playing-bar');
	    $songInfo = $('.p0ne-song-info');
	    $footerUser = $('#footer-user');
	    $footerInfo = $footerUser.find('.info');
	    $el = $create("<div class=wt-cover></div><div class='container wt-p0' id=walkthrough><div class='step fade-in wt-p0-welcome' data-screen=welcome><h2>Welcome to</h2><div class=wt-p0-title><div class=wt-p0-title-p>p</div><div class=wt-p0-title-lug_p>lug_p</div><div class='wt-p0-0 wt-p0-title-0'>0</div><div class=wt-p0-title-ne>ne</div></div><button class='wt-p0-next continue'>&nbsp;</button></div><div class='step fade-in wt-p0-settings' data-screen=settings><h1>Settings</h1><p>To open/close the plug_p0ne settings, click the <div class=p0ne-icon></div> icon in the top left</p><p class=wt-p0-settings-closed>click the icon now!</p><p class=wt-p0-settings-open>Good job! Let's move on.</p><button class='wt-p0-back'>back</button><button class=wt-p0-next>skip</button></div><div class='step fade-in wt-p0-dblclick2mention' data-screen=dblclick2mention><h1>dblclick2mention</h1><p>One of most often used p0 features is the so called \"DblClick username to Mention\".<br>Just <b>double click</b> their name to <em>@mention</em> them. This is great to quickly greet friends, for example.<br><small>(it works on username in chat, join notifications and just about EVERYWHERE)</small></p><img src=' https://i.imgur.com/jmgTvUF.gif' alt='screenrecording of dblclick2mention' width=350 height=185 /><button class='wt-p0-back'>back</button><button class='wt-p0-next continue'>next</button></div><div class='step fade-in wt-p0-stream-settings' data-screen=stream-settings><h1>Stream Settings</h1><p>plug_p0ne adds a new audio-only mode to videos and let's you quickly switch between<br><i class='icon icon-stream-video'></i> Video<br><i class='icon icon-stream-audio'></i> Audio-Only<br><i class='icon icon-stream-off'></i> Stream-Off (no video/sound)</p><p>You can click the icons to change between the modes.</p><button class='wt-p0-back'>back</button><button class='wt-p0-next continue'>next</button></div><div class='step fade-in wt-p0-automute' data-screen=automute><h1>Automute</h1><p>You can also <b>automute</b> songs you really dislike. This way, they will automatically get muted whenever they are played.</p><p>To add a song to automute, do the following:<ol class=wt-p0-steps><li>Click on <b class=snooze-btn><i class='icon icon-stream-off'></i> Snooze</b> to snooze the current song (stop the video/song)</li><li>When snoozed, the snooze button will turn into an automute -add or -remove button</li></ol></p><p>Let's try it out!<br>(don't worry, we can undo it right away)</p><button class='wt-p0-back'>back</button><button class=wt-p0-next>skip</button></div><div class='step fade-in wt-p0-automute2' data-screen=automute2><h1>Automute</h1><p>Removing songs from the automute list is also easy:<ol class=wt-p0-steps><li>open the settings panel. (<div class=p0ne-icon></div>)</li><li>open the group \"" + automute.settings + "\"</li><li>click on the <i class='icon icon-settings-white'></i>icon next to \"automute\"</li><li>move your mouse over any song in the list and click the <i class='icon icon-clear-input'></i> icon on the song you want to remove from the list</li></ol></p><button class='wt-p0-back'>back</button><button class=wt-p0-next>skip</button></div><div class='step fade-in wt-p0-songinfo' data-screen=songinfo><h1>Song-Info</h1><p>Want to find out more about the current song?</p><p class=wt-p0-songinfo-closed>Click the song title above!</p><div class=wt-p0-songinfo-open>In the top middle you can see two rows.<img src='//i.imgur.com/clwk2QL.png' alt='top row shows author - title as seen on plug.dj, second row shows channel name and upload title as seen on Youtube/Soundcloud' width=338 height=66 /><ul><li>Click on the author or title to search for them on plug.dj.</li><li>Click on the channel or song name to open them in a new tab.</li></ul></div><button class='wt-p0-back'>back</button><button class='wt-p0-next continue'>next</button></div><div class='step fade-in wt-p0-info-footer' data-screen=info-footer><h1>Info Footer</h1><p>One last thing, plug_p0ne replaces the footer (the section below the chat) with something more useful.<br>To get to the Settings, the Shop or your Inventory, simply click anywhere on the footer.</p><p>The Info Footer only will work for logged in users, though.</p><button class='wt-p0-back'>back</button><button class='wt-p0-next continue'>next</button></div><div class='step fade-in wt-p0-info-flags' data-screen=info-flags><h1>" + flag('en') + " User Flags " + flag('pt') + "</h1><p>plug_p0ne checks a the language setting of other users, to show flags beside their names.These flags do <b>not</b> show their nationality, they show their <b>language setting</b>.There are three notable quirks here:<br><ul><li>plug_p0ne shows the UK flag for \"English\"</li><li>plug_p0ne shows the Brazil flag for \"Portugese\"</li><li>for technical reasons, the language setting of new users can't be read,unless they changed their language in the settings at least once.plug_p0ne shows these users without a flag.</li></ul></p><button class='wt-p0-back'>back</button><button class='wt-p0-next continue'>next</button></div><div class='step fade-in wt-p0-end' data-screen=end><h1>END!</h1><p>Alright that's it!<br>Hopefully you'll have some fun with plug_p0ne!</p><p>Just play around with the settings to find some more great features. :3</p><button class='wt-p0-back'>back</button><button class='wt-p0-next continue'>finish</button></div><div class=nav><i class=selected></i> <i></i> <i></i> <i></i> <i></i> <i></i> <i></i> <i></i> <i></i> <i></i><button class='wt-p0-skip'>skip walkthrough</button</div></div>").on('click', '.wt-p0-button', function(){
	      var $this;
	      $this = $(this);
	      $this.trigger("button-" + $this.index() + " button-" + $this.text());
	    }).on('click', '.wt-p0-skip', function(){
	      this$.disable();
	      return false;
	    }).on('click', '.wt-p0-next', function(){
	      nextScreen(i + 1);
	    }).on('click', '.wt-p0-back', function(){
	      nextScreen(i - 1);
	    }).on('click', '.nav i', function(){
	      nextScreen($(this).index());
	    }).appendTo($app);
	    $pSettingsClosed = $el.find('.wt-p0-settings-closed');
	    $pSettingsOpen = $el.find('.wt-p0-settings-open');
	    $pSongInfoClosed = $el.find('.wt-p0-songinfo-closed');
	    $pSongInfoOpen = $el.find('.wt-p0-songinfo-open');
	    DUMMY_VIDEO = {
	      cid: 'wZZ7oFKsKzY',
	      format: 1,
	      author: "plug_p0ne test",
	      title: "Nyan Cat 1h",
	      duration: 36001,
	      image: "https://i.ytimg.com/vi/wZZ7oFKsKzY/default.jpg"
	    };
	    screens = [
	      function(){
	        var $nextBtn_;
	        $screen.removeClass('revealed');
	        $nextBtn_ = $nextBtn;
	        p0neSettings.toggleMenu(false);
	        sleep(2000, function(){
	          $screen.addClass('revealed');
	          sleep(3000, function(){
	            if (i === 0) {
	              $nextBtn_.text("next");
	            }
	          });
	        });
	      }, function(){
	        addListener($ppI, 'click', function(){
	          if (!p0neSettings._settings.open) {
	            $pSettingsClosed.show();
	            $pSettingsOpen.hide();
	            $screen.css({
	              left: '',
	              top: ''
	            });
	            blinking($ppI);
	          } else {
	            blinking();
	            $pSettingsClosed.hide();
	            $pSettingsOpen.show();
	            if (p0neSettings._settings.large) {
	              $screen.css({
	                left: 160,
	                top: 100
	              });
	            } else {
	              $screen.css({
	                left: $ppW.width() + 60,
	                top: ''
	              });
	            }
	            blinking($nextBtn);
	            accomplished();
	          }
	        })();
	        this$.screenClose = function(){
	          p0neSettings.toggleMenu(false);
	        };
	      }, function(){
	        var $playback;
	        $playback = $('#playback');
	        blinking($hdButton);
	      }, function(){
	        var $playback;
	        $playback = $('#playback');
	        blinking($hdButton);
	      }, function(){
	        var m;
	        if (typeof currentMedia != 'undefined' && currentMedia !== null) {
	          addListener(API, 'advance', function(){
	            if (!(m = currentMedia.get('media'))) {
	              currentMedia.set(new Backbone.Model(DUMMY_VIDEO));
	            } else {
	              step(isSnoozed() ? 2 : 1);
	            }
	          })();
	        }
	        addListener(API, 'p0ne:changeMode', function(m){
	          step(m === 'off' ? 2 : 1);
	        })();
	        if (isSnoozed()) {
	          step(2);
	        }
	        addListener($snoozeBtn, 'click', function(){
	          console.log("smooze [sic]", automute.songlist[API.getMedia().cid]);
	          if (automute.songlist[API.getMedia().cid]) {
	            accomplished();
	          }
	        })();
	        blinking($snoozeBtn);
	        this$.screenClose = function(){
	          if (m) {
	            currentMedia.set('media', m);
	          }
	        };
	      }, function(){
	        var $spI, $summary, cb1, cb2, settingsPanel, cb3;
	        $spI = automute._$settings.find('.p0ne-settings-panel-icon .icon');
	        $summary = p0neSettings.groups[automute.settings].find('.p0ne-settings-summary');
	        blinking($ppI);
	        addListener($ppI, 'click', cb1 = function(){
	          if (!p0neSettings._settings.open) {
	            step(1);
	            $screen.css({
	              left: "",
	              top: ''
	            });
	          } else {
	            step(2);
	            if (p0neSettings._settings.large) {
	              $screen.css({
	                left: 160,
	                top: 150
	              });
	            } else {
	              $screen.css({
	                left: $ppW.width() + 20,
	                top: ''
	              });
	            }
	            blinking($summary);
	            cb2();
	          }
	        });
	        addListener($summary, 'click', cb2 = function(){
	          requestAnimationFrame(function(){
	            if (p0neSettings._settings.openGroup !== automute.settings) {
	              step(2);
	              $spI.css({
	                boxShadow: '',
	                borderRadius: ''
	              });
	              blinking($summary);
	            } else {
	              step(3);
	              if (p0neSettings._settings.large) {
	                $screen.css({
	                  left: 580
	                });
	              }
	              blinking();
	              $spI.css({
	                boxShadow: '0 0 25px white',
	                borderRadius: '50%'
	              });
	              cb3();
	            }
	          });
	        });
	        addListener(automute._$settings, 'click', '.p0ne-settings-panel-icon', cb3 = function(){
	          requestAnimationFrame(function(){
	            var ref$, k, yet$;
	            if (!((ref$ = automute._$settingsPanel) != null && ref$.open)) {
	              step(3);
	              $spI.css({
	                boxShadow: '0 0 25px white',
	                borderRadius: '50%'
	              });
	              if (p0neSettings._settings.large) {
	                $screen.css({
	                  left: 580
	                });
	              }
	            } else {
	              step(4);
	              $spI.css({
	                boxShadow: '',
	                borderRadius: ''
	              });
	              for (k in yet$ = true, automute.songlist) {
	                yet$ = false;
	                break;
	              } if (yet$) {
	                automute.songlist[DUMMY_VIDEO.cid] = DUMMY_VIDEO;
	                automute.createRow(DUMMY_VIDEO.cid);
	              }
	              if (p0neSettings._settings.large) {
	                $screen.css({
	                  left: 100
	                });
	              } else {
	                $screen.css({
	                  left: $ppW.width() + 520
	                });
	              }
	              if (automute._$settingsPanel && settingsPanel !== automute._$settingsPanel.wrapper) {
	                if (settingsPanel) {
	                  settingsPanel.off('click', '.song-remove', accomplished);
	                }
	                settingsPanel = automute._$settingsPanel.wrapper;
	                addListener(settingsPanel, 'click', '.icon-clear-input', accomplished);
	              }
	              blinking();
	            }
	          });
	        });
	        cb1();
	        this$.screenClose = function(){
	          if ($spI != null) {
	            $spI.css({
	              boxShadow: '',
	              borderRadius: ''
	            });
	          }
	          p0neSettings.toggleMenu(false);
	          if (automute.songlist[DUMMY_VIDEO.cid]) {
	            delete automute.songlist[DUMMY_VIDEO.cid];
	            automute.rows[DUMMY_VIDEO.cid].remove();
	          }
	        };
	      }, function(){
	        addListener($bar, 'click', function(){
	          var b;
	          if (b = $songInfo.hasClass('expanded')) {
	            blinking($bar);
	            $screen.css({
	              top: 270
	            });
	            $pSongInfoClosed.hide();
	            $pSongInfoOpen.show();
	            accomplished();
	          } else {
	            blinking($songInfo.find('.p0ne-song-info-meta'));
	            $screen.css({
	              top: ""
	            });
	            $pSongInfoClosed.show();
	            $pSongInfoOpen.hide();
	          }
	        })();
	        this$.screenClose = function(){
	          if ($songInfo.hasClass('expanded')) {
	            $bar.click();
	          }
	          p0neSettings.toggleMenu(false);
	          $('#playlist-button .icon-arrow-down').click();
	        };
	      }, function(){}, function(){
	        var cb;
	        addListener($footerInfo, 'click', cb = function(){
	          $screen.css({
	            right: 20
	          });
	          $body.one('click', function(){
	            $screen.css({
	              right: -330
	            });
	          });
	        });
	        if ($footerUser.hasClass('menu')) {
	          cb();
	        }
	      }, function(){}, this.disable
	    ];
	    /**  other interesting things to show:
	     * avoid history-play
	     * song-notif
	     * user-history
	     *
	     * moderator-only stuff
	     *      - AFK Timer
	     */
	    $screen = $();
	    $screens = $el.find('.step');
	    $navDots = $el.find('.nav i');
	    $el.find('.wt-p0-steps li:first').addClass('selected');
	    $el.find('.snooze-btn').css({
	      background: $app.find('#playback .snooze').css('background')
	    }).click(function(){
	      alert("No you doozie!\nclick the REAL snooze button above ;)");
	    });
	    aux.addListener($ppI, 'click', function(){
	      $app.removeClass("wt-p0-settings-mode-0 wt-p0-settings-mode-1 wt-p0-settings-mode-2").addClass("wt-p0-settings-mode-" + $pp0.text());
	    });
	    function nextScreen(num){
	      var i$, ref$, len$, ref1$, target, args;
	      this$.screenClose();
	      $navDots.eq(i).removeClass('selected');
	      blinking();
	      for (i$ = 0, len$ = (ref$ = listeners).length; i$ < len$; ++i$) {
	        ref1$ = ref$[i$], target = ref1$[0], args = ref1$[1];
	        target.off.apply(target, args);
	      }
	      i = num;
	      $screen = $screens.eq(i);
	      $nextBtn = $screen.find('.wt-p0-next');
	      $steps = $screen.find('.wt-p0-steps li');
	      $navDots.eq(i).addClass('selected');
	      $app.removeClass("wt-p0-screen-" + this$.screenClass).addClass("wt-p0-screen-" + (this$.screenClass = $screen.data('screen')));
	      steps[i] || (steps[i] = 1);
	      this$.screenClose = $.noop;
	      screens[i]();
	    }
	    function step(num){
	      $screen.removeClass("wt-p0-step-" + steps[i]).addClass("wt-p0-step-" + num);
	      $steps.eq(steps[i] - 1).removeClass('selected');
	      $steps.eq(num - 1).addClass('selected');
	      steps[i] = num;
	    }
	    function accomplished(){
	      $steps.eq(steps[i] - 1).removeClass('selected');
	      $nextBtn.text("continue").addClass('continue');
	    }
	    function blinking($el){
	      clearInterval(blinkingInterval);
	      if ($blinkingEl = $el) {
	        blinkingInterval = setInterval(blinkingCB, 3000);
	      }
	    }
	    function blinkingCB(){
	      $blinkingEl.p0neFx('blink');
	    }
	    listeners = [];
	    function addListener(target){
	      var args, res$, i$, to$;
	      res$ = [];
	      for (i$ = 1, to$ = arguments.length; i$ < to$; ++i$) {
	        res$.push(arguments[i$]);
	      }
	      args = res$;
	      target.on.apply(target, args);
	      listeners[listeners.length] = [target, args];
	      return args[args.length - 1];
	    }
	    nextScreen(0);
	  },
	  disable: function(){
	    $app.removeClass("wt-p0-settings-mode-0 wt-p0-settings-mode-1 wt-p0-settings-mode-2 wt-p0-screen-" + this.screenClass);
	    if (typeof this.screenClose == 'function') {
	      this.screenClose();
	    }
	  }
	});
	module('p0neChangesDialog', {
	  _settings: {
	    lastVersion: p0ne.version
	  },
	  versionNotInline: "",
	  setup: function(arg$, p0neChangesDialog){
	    var $create, addListener, data, lastVersion, $wrapper, ver, this$ = this;
	    $create = arg$.$create, addListener = arg$.addListener;
	    data = {
	      '4.3.0': {
	        'new': ['greentext'],
	        also: "<p>An issue was fixed, which caused plug.dj to break on certain server errors</p>"
	      },
	      '4.1.0': {
	        fixed: ['restoreChat', 'notifyOnLevelUp'],
	        'new': ['chatAvatarBadges', 'chatCustomTimestamps', 'dblMeh2Snooze'],
	        also: "<p><pre style='display: inline-block'>/search pl &lt;query&gt;</pre> can now be used in chat to search through your playlists</p><p><b>Restore Chat</b> will now restore your chat when you refresh the page or hop around rooms and then come back.</p><p>The <b>Alternatives dialog</b> (that shows up when the current song cannot be played) has now been fixed.</p><p><b>Join/Leave notifications</b> now have a setting to exclude people you've set to ignore.</p><p>Also, many smaller bugs have been fixed.</p>"
	      },
	      '4.0.2': {
	        fixed: ['unreadChatNotif', 'notifyOnLevelUp', 'restoreChat'],
	        also: "<b>Chat commands</b> have been completely overhauled! use <pre style='display: inline-block'>/commands</pre> to see an overview.<br>Also <b>jumbomoji</b> now work if there are multiple emoji in the message (and it now ignores spaces)"
	      },
	      '3.3.0': {
	        fixed: ['unreadChatNotif', 'streamSettings', 'emojiPacks'],
	        'new': ['twitchEmotes'],
	        also: "Stream-Settings got renamed to <b>Stream&nbsp;Mode&nbsp;Switcher</b>"
	      }
	    };
	    lastVersion = this._settings.lastVersion;
	    $wrapper = $create("<div id=walkthrough class='p0ne-settings-large p0ne-settings-expert'>").css({
	      height: 0,
	      right: 350,
	      overflowY: 'visible'
	    });
	    if (this.versionNotInline !== lastVersion && p0ne.compareVersions(this.versionNotInline, lastVersion)) {
	      $.getJSON(p0ne.host + "/data/changes.json", function(allChanges){
	        var ver;
	        data = allChanges;
	        if (ver = getNextVer()) {
	          displayDialog(ver, data[ver]);
	        }
	      });
	    } else if (ver = getNextVer()) {
	      displayDialog(ver, data[ver]);
	    }
	    function getNextVer(){
	      var i$, ref$, len$, ver;
	      for (i$ = 0, len$ = (ref$ = Object.keys(data).sort(p0ne.compareVersions)).length; i$ < len$; ++i$) {
	        ver = ref$[i$];
	        if (ver !== lastVersion && p0ne.compareVersions(ver, lastVersion)) {
	          return ver;
	        }
	      }
	    }
	    function displayDialog(version, changes){
	      var nextVer, modules, l, $el, i$, ref$, len$, id, x$, $item, y$;
	      this$._settings.lastVersion = lastVersion = version;
	      nextVer = getNextVer();
	      modules = [];
	      l = 0;
	      $el = $("<div id=p0ne-changes class='step fade-in'>").appendTo($wrapper).append("<h1>plug_p0ne " + version + "</h1>");
	      if (changes.fixed) {
	        $el.append("<h2>Fixed:</h2>");
	        $("<a class=p0ne-changes-reenable>re-enable default</a>").appendTo($el).on('click', function(){
	          var i$, ref$, len$, id, m;
	          for (i$ = 0, len$ = (ref$ = changes.fixed).length; i$ < len$; ++i$) {
	            id = ref$[i$];
	            if ((m = p0ne.modules[id]) && m['default']) {
	              m.enable();
	            }
	          }
	        });
	        for (i$ = 0, len$ = (ref$ = changes.fixed).length; i$ < len$; ++i$) {
	          id = ref$[i$];
	          x$ = $item = settingsItem(id);
	          x$.appendTo($el);
	          modules[l++] = x$;
	        }
	      }
	      if (changes['new']) {
	        $el.append("<h2>New:</h2>");
	        for (i$ = 0, len$ = (ref$ = changes['new']).length; i$ < len$; ++i$) {
	          id = ref$[i$];
	          y$ = $item = settingsItem(id);
	          y$.appendTo($el);
	          modules[l++] = y$;
	        }
	      }
	      if (changes.also) {
	        $el.append("<h2>Also:</h2>").append($("<div>").html(changes.also));
	      }
	      if (nextVer) {
	        $("<span class='next'><a>Next</a></span>").on('click', function(){
	          $el.remove();
	          displayDialog(nextVer, data[nextVer]);
	        }).appendTo($el);
	      } else {
	        $("<span class='next'><a>Okay!</a></span>").on('click', function(){
	          $wrapper.remove();
	        }).appendTo($el);
	      }
	      $wrapper.appendTo($app);
	      addListener(API, 'p0ne:moduleEnabled', function(m){
	        var i$, ref$, len$, $m;
	        for (i$ = 0, len$ = (ref$ = modules).length; i$ < len$; ++i$) {
	          $m = ref$[i$];
	          if ($m.module === m) {
	            $m.find('.checkbox').prop('checked', true);
	            return;
	          }
	        }
	      });
	      addListener(API, 'p0ne:moduleDisabled', function(m){
	        var i$, ref$, len$, $m;
	        for (i$ = 0, len$ = (ref$ = modules).length; i$ < len$; ++i$) {
	          $m = ref$[i$];
	          if ($m.module === m) {
	            $m.find('.checkbox').prop('checked', false);
	            return;
	          }
	        }
	      });
	      return this$.saveSettings();
	    }
	    function settingsItem(id){
	      var m, res;
	      m = p0ne.modules[id];
	      if (!m) {
	        return $();
	      }
	      res = $("<label class='p0ne-settings-item " + (m['default'] ? 'p0ne-changes-default' : '') + "'><input type='checkbox' class=checkbox " + (!m.disabled ? 'checked' : '') + "><div class=togglebox></div><div class=p0ne-changes-group>" + m.settings + "</div>" + m.displayName + "</label>").on('click', '.checkbox', function(){
	        if (this.checked) {
	          m.enable();
	        } else {
	          m.disable();
	        }
	      });
	      res.module = m;
	      return res;
	    }
	  }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/**
	 * plug_p0ne modules to add styles.
	 * This needs to be kept in sync with plug_pony.css
	 *
	 * @author jtbrinkmann aka. Brinkie Pie
	 * @license MIT License
	 * @copyright (c) 2015 J.-T. Brinkmann
	 */
	console.log("~~~~~~~ p0ne.look-and-feel ~~~~~~~");
	module('p0neStylesheet', {
	  setup: function(arg$){
	    var loadStyle;
	    loadStyle = arg$.loadStyle;
	    loadStyle(p0ne.host + "/css/plug_p0ne.css?v=" + p0ne.version);
	  }
	});
	/*####################################
	#            FIMPLUG THEME           #
	####################################*/
	module('fimplugTheme', {
	  displayName: "Brinkie's Theme",
	  settings: 'look&feel',
	  disabled: true,
	  setup: function(arg$){
	    var loadStyle;
	    loadStyle = arg$.loadStyle;
	    loadStyle(p0ne.host + "/css/brinkie-theme.css?v=" + p0ne.version);
	  }
	});
	/*####################################
	#          ANIMATED DIALOGS          #
	####################################*/
	module('animatedUI', {
	  require: ['Dialog'],
	  setup: function(arg$){
	    var addListener, replace, wrap;
	    addListener = arg$.addListener, replace = arg$.replace, wrap = arg$.wrap;
	    $('.dialog').addClass('opaque');
	    replace(Dialog.prototype, 'render', function(){
	      var this$ = this;
	      this.show();
	      sleep(0, function(){
	        this$.$el.addClass('opaque');
	      });
	      return this;
	    });
	    addListener(_$context, 'ShowDialogEvent:show', function(d){
	      var ref$, ref1$, this$ = this;
	      if (((ref$ = d.dialog.options) != null ? (ref1$ = ref$.media) != null ? ref1$.format : void 8 : void 8) === 2) {
	        sleep(0, function(){
	          this$.$el.addClass('opaque');
	        });
	      }
	    });
	    wrap(Dialog.prototype, 'close', function(close_){
	      return function(){
	        var ref$, this$ = this;
	        if ((ref$ = this.$el) != null) {
	          ref$.removeClass('opaque');
	        }
	        this.animate = $.noop;
	        sleep(180, function(){
	          close_.call(this$);
	        });
	        return this;
	      };
	    });
	  }
	});
	/*####################################
	#         PLAYLIST ICON VIEW         #
	####################################*/
	module('playlistIconView', {
	  displayName: "Playlist Grid View",
	  settings: 'look&feel',
	  settingsSimple: true,
	  help: 'Shows songs in the playlist and history panel in an icon view instead of the default list view.',
	  optional: ['PlaylistItemList', 'pl'],
	  cssClass: 'playlist-icon-view',
	  setup: function(arg$, playlistIconView){
	    var addListener, replace, wrap, replaceListener, CELL_HEIGHT, CELL_WIDTH, i$, ref$, len$, x, $hovered, $mediaPanel;
	    addListener = arg$.addListener, replace = arg$.replace, wrap = arg$.wrap, replaceListener = arg$.replaceListener;
	    if (typeof PlaylistItemList == 'undefined' || PlaylistItemList === null) {
	      chatWarn({
	        title: this.displayName,
	        message: "this module couldn't fully load, it might not act 100% as expected. If you have problems, you might want to disable this."
	      });
	      return;
	    }
	    CELL_HEIGHT = 185;
	    CELL_WIDTH = 160;
	    replace(PlaylistItemList.prototype, 'onResize', function(layout){
	      var newCellsPerRow, newVisibleRows;
	      this.constructor.__super__.onResize.call(this, layout);
	      newCellsPerRow = ~~((this.$el.width() - 10) / CELL_WIDTH);
	      newVisibleRows = Math.ceil(2 + this.$el.height() / CELL_HEIGHT) * newCellsPerRow;
	      if (newVisibleRows !== this.visibleRows || newCellsPerRow !== this.cellsPerRow) {
	        this.visibleRows = newVisibleRows;
	        this.cellsPerRow = newCellsPerRow;
	        delete this.currentRow;
	        this.onScroll();
	      }
	    });
	    wrap(PlaylistItemList.prototype, 'onScroll', function(oS){
	      return function(){
	        var top, ref$, lastRow, ref1$, i$, e, row;
	        if (this.scrollPane) {
	          top = (ref$ = ~~(this.scrollPane.scrollTop() / CELL_HEIGHT) - 1) > 0 ? ref$ : 0;
	          this.firstRow = top * this.cellsPerRow;
	          lastRow = (ref$ = this.firstRow + this.visibleRows) < (ref1$ = this.collection.length) ? ref$ : ref1$;
	          if (this.currentRow !== this.firstRow) {
	            this.currentRow = this.firstRow;
	            this.$firstRow.height(top * CELL_HEIGHT);
	            this.$lastRow.height(~~((this.collection.length - lastRow) / this.cellsPerRow) * CELL_HEIGHT);
	            this.$container.empty().append(this.$firstRow);
	            for (i$ = this.firstRow; i$ <= lastRow; ++i$) {
	              e = i$;
	              if (row = this.rows[e]) {
	                this.$container.append(row.$el);
	                row.render();
	              }
	            }
	            this.$container.append(this.$lastRow);
	          }
	        }
	      };
	    });
	    replaceListener(_$context, 'anim:playlist:progress', PlaylistItemList, $.noop);
	    for (i$ = 0, len$ = (ref$ = _$context._events['anim:playlist:progress'] || []).length; i$ < len$; ++i$) {
	      x = ref$[i$];
	      if (x.ctx.id === 'playlist-menu') {
	        _$context._events['anim:playlist:progress'] = [x];
	        break;
	      }
	    }
	    if ((typeof pl != 'undefined' && pl !== null) && ((ref$ = pl.list) != null && ref$.rows)) {
	      pl.show(new pl.header.constructor(), new pl.list.constructor());
	      pl.list.render();
	      /*# onResize hook
	      replace pl.list, \resizeBind, _.bind(pl.list, \onResize)
	      for e, i in Layout._events.resize when e.callback == pl.list.resizeBind
	          replace e, \callback, pl.list.resizeBind
	      
	      # onScroll hook
	      pl.list.$el
	          .off \jsp-scroll-y, pl.list.scrollBind
	          .on \jsp-scroll-y, replace(pl.list, \scrollBind, pl.list~onScroll)
	          #pl.list.onResize! if pl.list.$el
	      
	      # to force rerender
	      delete pl.list.currentRow
	      pl.list.onResize Layout.getSize!
	      pl.list.onScroll?!*/
	    } else {
	      console.warn("no pl");
	    }
	    $hovered = $();
	    $mediaPanel = $('#media-panel');
	    addListener($mediaPanel, 'mouseover', '.row', function(){
	      $hovered.removeClass('hover');
	      $hovered = $(this);
	      if (!$hovered.hasClass('selected')) {
	        $hovered.addClass('hover');
	      }
	    });
	    addListener($mediaPanel, 'mouseout', '.hovered', function(){
	      $hovered.removeClass('hover');
	    });
	    replace(PlaylistItemList.prototype, 'onDragUpdate', function(e){
	      var n, r, i, s, o;
	      this.constructor.__super__.onDragUpdate.call(this, e);
	      n = this.scrollPane.scrollTop();
	      if (this.currentDragRow && this.currentDragRow.$el) {
	        r = 0;
	        i = this.currentDragRow.options.index;
	        if (!this.lockFirstItem || i > 0) {
	          this.targetDropIndex = i;
	          s = this.currentDragRow.$el.offset().left;
	          if (this.mouseX >= s + this.currentDragRow.$el.width() / 2) {
	            this.$el.addClass('p0ne-drop-right');
	            this.targetDropIndex = i === this.lastClickedIndex - 1
	              ? this.lastClickedIndex
	              : this.targetDropIndex = i + 1;
	          } else {
	            this.$el.removeClass('p0ne-drop-right');
	            this.targetDropIndex = i === this.lastClickedIndex + 1
	              ? this.lastClickedIndex
	              : this.targetDropIndex = i;
	          }
	        } else if (i === 0) {
	          this.targetDropIndex = 1;
	        }
	      }
	      o = this.onCheckListScroll();
	    });
	  },
	  disableLate: function(){
	    var ref$;
	    if ((typeof pl != 'undefined' && pl !== null) && ((ref$ = pl.list) != null && ref$.rows)) {
	      pl.show(new pl.header.constructor(), new pl.list.constructor());
	    }
	    /*
	    #= icon to toggle playlistIconView =
	    wrap MediaPanel::, \show, (s_) !-> return !->
	        s_ ...
	        @header.$el .append do
	            $create '<div class="button playlist-view-button"><i class="icon icon-playlist"></i></div>'
	                .on \click, playlistIconView
	    */
	  }
	});
	/*####################################
	#          VIDEO PLACEHOLDER         #
	####################################*/
	module('videoPlaceholderImage', {
	  displayName: "Video Placeholder Thumbnail",
	  settings: 'look&feel',
	  help: 'Shows a thumbnail in place of the video, if you snooze the video or turn off the stream.\n\nThis is useful for knowing WHAT is playing, even when don\'t want to watch it.',
	  screenshot: 'https://i.imgur.com/TMHVsrN.gif',
	  setup: function(arg$){
	    var addListener, $room, $playbackImg;
	    addListener = arg$.addListener;
	    $room = $('#room');
	    $playbackImg = $('#playback-container');
	    addListener(API, 'advance p0ne:reconnected', updatePic);
	    addListener(_$context, 'room:joined', updatePic);
	    updatePic({
	      media: API.getMedia()
	    });
	    function updatePic(d){
	      var media;
	      if (d) {
	        media = d.media;
	      } else {
	        media = API.getMedia();
	      }
	      if (!media) {
	        return $playbackImg.css({
	          backgroundColor: 'transparent',
	          backgroundImage: 'none'
	        });
	      } else if (media.format === 1) {
	        return $playbackImg.css({
	          backgroundColor: '#000',
	          backgroundImage: "url(https://i.ytimg.com/vi/" + media.cid + "/0.jpg)"
	        });
	      } else {
	        return $playbackImg.css({
	          backgroundColor: '#000',
	          backgroundImage: "url(" + media.image + ")"
	        });
	      }
	    }
	  },
	  disable: function(){
	    $('#playback-container').css({
	      backgroundColor: 'transparent',
	      backgroundImage: 'none'
	    });
	  }
	});
	/*####################################
	#             LEGACY CHAT            #
	####################################*/
	module('legacyChat', {
	  displayName: "Smaller Chat",
	  settings: 'chat',
	  help: 'Shows the chat in the old format, before badges were added to it in December 2014.\nMakes the messages smaller, so more fit on the screen',
	  optional: ['chat'],
	  disabled: true,
	  cssClass: 'legacy-chat',
	  _settings: {
	    preventMergingMsgs: false
	  },
	  setup: function(arg$){
	    var addListener, $cb, this$ = this;
	    addListener = arg$.addListener;
	    $cb = $('#chat-button');
	    addListener($cb, 'dblclick', function(e){
	      this$.toggle();
	      e.preventDefault();
	    });
	    addListener(chatDomEvents, 'dblclick', '.popout .icon-chat', function(e){
	      this$.toggle();
	      e.preventDefault();
	    });
	    addListener(API, 'chat', function(){
	      if (this$._settings.preventMergingMsgs) {
	        chat.lastType = null;
	      }
	    });
	    if (this._settings.preventMergingMsgs) {
	      if (typeof chat != 'undefined' && chat !== null) {
	        chat.lastType = null;
	      }
	    }
	  },
	  settingsExtra: function($el){
	    var legacyChat, disabled;
	    legacyChat = this;
	    if (typeof chat != 'undefined' && chat !== null) {
	      disabled = '';
	    } else {
	      disabled = ' disabled';
	    }
	    $("<form><label><input type=checkbox " + (this._settings.preventMergingMsgs ? 'checked' : '') + disabled + "> prevent messages from merging</label></form>").appendTo($el.css({
	      paddingLeft: 15
	    })).on('click', 'input', function(){
	      legacyChat._settings.preventMergingMsgs = this.checked;
	      legacyChat.saveSettings();
	      if (legacyChat._settings.preventMergingMsgs) {
	        if (typeof chat != 'undefined' && chat !== null) {
	          chat.lastType = null;
	        }
	      }
	    });
	  }
	});
	/*####################################
	#            LEGACY FOOTER           #
	####################################*/
	module('legacyFooter', {
	  displayName: "Info Footer",
	  settings: 'look&feel',
	  help: 'Restore the old look of the footer (the thing below the chat) and transform it into a more useful information panel.\nTo get to the settings etc, click anywhere on the panel.',
	  disabled: true,
	  cssClass: 'legacy-footer',
	  setup: function(arg$){
	    var addListener, $foo, x$;
	    addListener = arg$.addListener;
	    $foo = $('#footer-user');
	    addListener($foo.find('.info'), 'click', function(){
	      $foo.addClass('menu');
	      _.delay(function(){
	        return $body.one('click', function(){
	          $foo.removeClass('menu');
	        });
	      });
	    });
	    x$ = $foo.find('.back span:first');
	    if (!/\S/.test(x$.text())) {
	      x$.text((typeof Lang != 'undefined' && Lang !== null ? Lang.userMeta.backToCommunity : void 8) || "Back To Community");
	    }
	  },
	  disable: function(){
	    $('#footer-user').removeClass('menu');
	  }
	});
	/*####################################
	#            CHAT DJ ICON            #
	####################################*/
	module('djIconChat', {
	  require: ['chatPlugin'],
	  settings: 'look&feel',
	  displayName: "Current-DJ-icon in Chat",
	  setup: function(arg$){
	    var addListener, css, icon;
	    addListener = arg$.addListener, css = arg$.css;
	    icon = getIcon('icon-current-dj');
	    css('djIconChat', "#chat .from-current-dj .timestamp::before { background: " + icon.background + "; }");
	    addListener(_$context, 'chat:plugin', function(message){
	      var ref$;
	      if (message.uid && message.uid === ((ref$ = API.getDJ()) != null ? ref$.id : void 8)) {
	        message.addClass('from-current-dj');
	      }
	    });
	  }
	});
	/*####################################
	#          DRAGGABLE DIALOG          #
	####################################*/
	module('draggableDialog', {
	  require: ['Dialog'],
	  optional: ['chatDomEvents'],
	  setup: function(arg$){
	    var addListener, replace, wrap, css, $dialog, startX, startY, $dialogContainer, stopDragging;
	    addListener = arg$.addListener, replace = arg$.replace, wrap = arg$.wrap, css = arg$.css;
	    css('dialogDragNDrop', '.dialog-frame { cursor: pointer; }#dialog-container.dragging { cursor: move; }.dialog { position: absolute; }');
	    $dialogContainer = $('#dialog-container');
	    addListener($dialogContainer, 'mousedown', '.dialog-frame', function(e){
	      var pos;
	      $body.on('mousemove', mousemove).on('mouseup', mouseup);
	      $dialog = $(this).closest('.dialog').addClass('dragging');
	      pos = $dialog.position();
	      $dialog.css({
	        position: 'absolute'
	      });
	      startX = e.clientX - pos.left;
	      startY = e.clientY - pos.top;
	      $dialogContainer.addClass('dragging');
	    });
	    addListener(_$context, 'ShowDialogEvent:show', function(d){
	      var pos;
	      $dialog = $dialogContainer.find('.dialog').css({
	        position: 'static'
	      });
	      if (pos = $dialog.position()) {
	        pos.position = 'absolute';
	        $dialog.css(pos);
	      }
	    });
	    wrap(Dialog.prototype, 'close', function(c_){
	      return function(){
	        stopDragging();
	        c_.apply(this, arguments);
	      };
	    });
	    function mousemove(e){
	      $dialog.css({
	        left: e.clientX - startX,
	        top: e.clientY - startY
	      });
	      return e.preventDefault();
	    }
	    function mouseup(e){
	      return stopDragging();
	    }
	    this.stopDragging = stopDragging = function(){
	      $dialogContainer.removeClass('dragging');
	      $body.off('mousemove', mousemove).off('mouseup', mouseup);
	    };
	  },
	  disable: function(){
	    $('#dialog-container .dialog').css({
	      position: 'static'
	    });
	    if (typeof this.stopDragging == 'function') {
	      this.stopDragging();
	    }
	  }
	});
	/*####################################
	#             LIGHTS-OUT             #
	####################################*/
	module('lightsoutDialog', {
	  require: ['Dialog'],
	  optional: ['chatDomEvents'],
	  setup: function(arg$){
	    var addListener, replace, wrap, css, $dialogContainer, lightson;
	    addListener = arg$.addListener, replace = arg$.replace, wrap = arg$.wrap, css = arg$.css;
	    $dialogContainer = $('#dialog-container');
	    /* add lights-out button to dialogs */
	    lightson = false;
	    wrap(Dialog.prototype, 'getHeader', function(gH_){
	      return function(title){
	        return gH_.call(this, title).append("<i class='icon icon-p0ne-lights--" + (lightson ? 'on' : 'off') + " p0ne-lightson-btn'>");
	      };
	    });
	    $dialogContainer.find('.dialog-frame:first').append("<i class='icon p0ne-lightson-btn'>");
	    addListener($dialogContainer, 'click', '.p0ne-lightson-btn', function(e){
	      lightson = !lightson;
	      updateClasses();
	    });
	    function updateClasses(){
	      return $dialogContainer.toggleClass('p0ne--lights-on', lightson).find('.dialog-frame .p0ne-lightson-btn').toggleClass('icon-p0ne-lights--on', lightson).toggleClass('icon-p0ne-lights--off', !lightson);
	    } updateClasses();
	  },
	  disable: function(){
	    $('#dialog-container').removeClass('p0ne--lights-on').find('.p0ne-lightson-btn').remove();
	  }
	});
	/*####################################
	#             EMOJI PACK             #
	####################################*/
	module('emojiPack', {
	  displayName: 'Emoji Pack',
	  settings: 'look&feel',
	  help: 'Replace all emojis with the one from Google (for Android Lollipop) or Twitter.\n\nEmojis are are the little images that show up for example when you write ":eggplant:" in the chat. <span class="emoji emoji-1f346"></span>',
	  screenshot: 'https://i.imgur.com/Ef94Csn.png',
	  _settings: {
	    pack: 'apple'
	  },
	  packs: {
	    apple: {
	      name: "Apple (default)",
	      sheet: 'https://i.imgur.com/4YeIpli.jpg'
	    },
	    google: {
	      name: "Google",
	      sheet: 'https://i.imgur.com/T0l9HFK.png'
	    },
	    twitter: {
	      name: "Twitter",
	      sheet: 'https://i.imgur.com/gFFWRXH.png'
	    },
	    emojione: {
	      name: "EmojiOne",
	      sheet: 'https://i.imgur.com/PT0KMtp.png'
	    }
	  },
	  appleIcons: [],
	  setup: function(arg$, emojiPack, module_){
	    var replace, css, $span, style, packId, ref$, pack;
	    replace = arg$.replace, css = arg$.css;
	    if (typeof emoji != 'undefined' && emoji !== null) {
	      this.packs.apple.sheet = emoji.img_sets.apple.sheet;
	    }
	    $span = $('<span class=gemoji-plug>').appendTo($body);
	    $span.remove();
	    style = "";
	    for (packId in ref$ = this.packs) {
	      pack = ref$[packId];
	      style += ".p0-emoji-" + packId + " .emoji-inner:not(.gemoji-plug),#app .p0-emoji-" + packId + "-force .emoji-inner:not(.gemoji-plug) {background-image: url(" + pack.sheet + ");}";
	    }
	    css('emojiPack', style);
	    $body.addClass("p0-emoji-" + this._settings.pack);
	  },
	  settingsExtra: function($el){
	    var emojiPack, sampleEmojis, $form;
	    emojiPack = this;
	    if (typeof emoji != 'undefined' && emoji !== null) {
	      sampleEmojis = "<span class=p0ne-settings-emoji-pack-sample>" + emoji.replacement('1f604') + "" + emoji.replacement('1f44d') + "" + emoji.replacement('1f44b') + "" + emoji.replacement('1f494') + "" + emoji.replacement('1f680') + "</span>";
	    } else {
	      sampleEmojis = '<span class=p0ne-settings-emoji-pack-sample><span class="emoji-outer emoji-sizer"><span class="emoji-inner" style="background-position:41600px 53248px;background-size:3500%"></span></span><span class="emoji-outer emoji-sizer"><span class="emoji-inner" style="background-position:23296px 28288px;background-size:3500%"></span></span><span class="emoji-outer emoji-sizer"><span class="emoji-inner" style="background-position:23296px 8320px;background-size:3500%"></span></span><span class="emoji-outer emoji-sizer"><span class="emoji-inner" style="background-position:33280px 4992px;background-size:3500%"></span></span><span class="emoji-outer emoji-sizer"><span class="emoji-inner" style="background-position:48256px 6656px;background-size:3500%"></span></span></span>';
	    }
	    $form = $("<form style='font-size: 15px'><label class=p0-emoji-apple-force><input type=radio name=emojipack value=apple> Apple (default)" + sampleEmojis + "</label><br><label class=p0-emoji-google-force><input type=radio name=emojipack value=google> Google" + sampleEmojis + "</label><br><label class=p0-emoji-twitter-force><input type=radio name=emojipack value=twitter> Twitter" + sampleEmojis + "</label><br><label class=p0-emoji-emojione-force><input type=radio name=emojipack value=emojione> Emoji One" + sampleEmojis + "</form>").on('click', 'input:radio', function(){
	      if (this.checked && emojiPack._settings.pack !== this.value) {
	        $body.addClass("p0-emoji-" + this.value).removeClass("p0-emoji-" + emojiPack._settings.pack);
	        emojiPack._settings.pack = this.value;
	        emojiPack.saveSettings();
	      }
	    }).appendTo($el);
	    $form.find("input[value=" + emojiPack._settings.pack + "]").attr('checked', 'checked');
	    $el.css({
	      paddingLeft: 15
	    });
	  },
	  disable: function(){
	    $body.removeClass("p0-emoji-" + this._settings.pack);
	  }
	});
	/*####################################
	#         CUSTOM BACKGROUND          #
	####################################*/
	module('customBackground', {
	  displayName: 'Custom Background',
	  settings: 'look&feel',
	  settingsSimple: true,
	  help: 'This module lets you change the background image of plug.dj\n\ne.g. a nice collection of background images can be found here <a href="https://imgur.com/a/8RIiu" target=_blank>https://imgur.com/a/8RIiu</a>',
	  _settings: {
	    background: "https://i.imgur.com/k9zVa92.png",
	    booth: "https://i.imgur.com/tzlDl3L.png",
	    scalable: false
	  },
	  disabled: true,
	  setup: function(arg$){
	    this.css = arg$.css;
	    this.updateCSS();
	  },
	  updateCSS: function(){
	    if (isURL(this._settings.background)) {
	      if (this._settings.scalable) {
	        this.css('customBackground', "#app { background: url(" + this._settings.background + ") fixed center center / cover !important; }\n\n.room-background { display: none !important; }");
	      } else {
	        this.css('customBackground', "#app { background: transparent !important }\n\n#app .app-right { background: #0a0a0a !important; }\n#app #avatars-container::before { content: \"\" !important; }\n#app .room-background { background-image: url(" + this._settings.background + ") !important; display: block !important; }\n\n.torch { display: none !important; }");
	      }
	    } else {
	      css('customBackground', "");
	    }
	  },
	  settingsExtra: function($el){
	    var customBackground, $input;
	    customBackground = this;
	    $input = $("<input class=p0ne-settings-input>").val(this._settings.background).on('input', function(){
	      customBackground._settings.background = this.value;
	      customBackground.updateCSS();
	    }).on('focus', function(){
	      var ref$;
	      if ((ref$ = p0ne.modules.p0neSettings) != null) {
	        ref$.$ppW.css({
	          opacity: 0.7
	        });
	      }
	    }).on('blur', function(){
	      var ref$;
	      if ((ref$ = p0ne.modules.p0neSettings) != null) {
	        ref$.$ppW.css({
	          opacity: ""
	        });
	      }
	    }).appendTo($el);
	  }
	});
	/*####################################
	#               CENSOR               #
	####################################*/
	module('censor', {
	  displayName: "Censor",
	  settings: 'dev',
	  help: 'blurs some information like playlist names, counts, EP and Plug Notes.\nGreat for taking screenshots',
	  disabled: true,
	  cssClass: 'censored',
	  setup: function(arg$){
	    var css;
	    css = arg$.css;
	    css('@font-face {font-family: "ThePrintedWord";src: url("http://letterror.com/wp-content/themes/nextltr/css/fonts/ThePrintedWord.eot");src: url("http://letterror.com/wp-content/themes/nextltr/css/fonts/ThePrintedWord.eot?") format("embedded-opentype"),url("http://letterror.com/wp-content/themes/nextltr/css/fonts/ThePrintedWord.woff") format("woff"),url("http://letterror.com/wp-content/themes/nextltr/css/fonts/ThePrintedWord.svg") format("svg"),url("http://letterror.com/wp-content/themes/nextltr/css/fonts/ThePrintedWord.otf") format("opentype");font-style: normal;font-weight: 400;font-stretch: normal;}');
	  }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/**
	 * plug_p0ne modules to help moderators do their job
	 *
	 * @author jtbrinkmann aka. Brinkie Pie
	 * @license MIT License
	 * @copyright (c) 2015 J.-T. Brinkmann
	 */
	console.log("~~~~~~~ p0ne.moderate ~~~~~~~");
	/*####################################
	#       BASE MODERATION MODULE       #
	####################################*/
	module('enableModeratorModules', {
	  require: ['user_'],
	  setup: function(arg$){
	    var addListener, prevRole, prevGRole;
	    addListener = arg$.addListener;
	    prevRole = user_.get('role');
	    prevGRole = user_.get('role');
if (user.isStaff || !user.isStaff) {
	      $body.addClass('p0ne-user-is-staff');
	    }
	    addListener(user_, 'change:role', function(arg$, newRole){
	      var isNowStaff;
	      console.log("[p0ne] change:role from " + prevRole + " to " + newRole);
	      isNowStaff = newRole > 1;
	      if (user.isStaff !== isNowStaff) {
	        if (isNowStaff) {
	          enable();
	        } else {
	          disable();
	        }
	      }
	      prevRole = newRole;
	    });
	    addListener(user_, 'change:gRole', function(arg$, newGRole){
	      var isNowStaff;
	      console.log("[p0ne] change:gRole from " + prevGRole + " to " + newGRole);
	      isNowStaff = newGRole > 1;
	      if (user.isStaff !== isNowStaff) {
	        if (isNowStaff) {
	          enable();
	        } else {
	          disable();
	        }
	      }
	      prevGRole = newGRole;
	    });
	    function enable(){
	      var i$, ref$, m;
	      console.info("[p0ne] enabling moderator modules");
	      for (i$ in ref$ = p0ne.modules) {
	        m = ref$[i$];
	        if (m.modDisabled) {
	          console.log("[p0ne moderator] enabling", m.moduleName);
	          m.enable();
	          m.modDisabled = false;
	        }
	      }
	      $body.addClass('p0ne-user-is-staff');
user.isStaff = true;
	    }
	    function disable(){
	      var i$, ref$, m;
	      console.info("[p0ne] disabling moderator modules");
	      for (i$ in ref$ = p0ne.modules) {
	        m = ref$[i$];
	        if ( !m.disabled) {
	          console.log("[p0ne moderator] disabling", m.moduleName);
	          m.modDisabled = true;
	          m.disable();
	        }
	      }
	      $body.removeClass('p0ne-user-is-staff');
user.isStaff = true;
	    }
	  },
	  disable: function(){
	    $body.removeClass('p0ne-user-is-staff');
	  }
	});
	/*####################################
	#       WARN ON HISTORY PLAYS        #
	####################################*/
	module('warnOnHistory', {
	  displayName: 'Warn on History',
	  moderator: false,
	  settings: 'moderation',
	  settingsSimple: true,
	  persistent: ['skippedBitmap'],
	  skippedBitmap: [],
	  setup: function(arg$){
	    var addListener, popBitmap, this$ = this;
	    addListener = arg$.addListener;
	    popBitmap = false;
	    addListener(API, 'p0ne:socket:modSkip', function(d){
	      this$.skippedBitmap[0] = 1;
	    });
	    addListener(API, 'p0ne:socket:skip', function(d){
	      this$.skippedBitmap[0] = 2;
	    });
	    addListener(API, 'advance', function(d){
	      var hist, inHistory, skipped, i$, len$, i, m, lastPlayI, lastPlay, msg, popBitmap;
	      if (d.media) {
	        hist = API.getHistory();
	        inHistory = 0;
	        skipped = 0;
	        for (i$ = 0, len$ = hist.length; i$ < len$; ++i$) {
	          i = i$;
	          m = hist[i$];
	          if (m.media.cid === d.media.cid && i !== 0) {
	            lastPlayI || (lastPlayI = i);
	            lastPlay || (lastPlay = m);
	            inHistory++;
	            if (this$.skippedBitmap[i]) {
	              skipped++;
	            }
	          }
	        }
	        if (inHistory) {
	          msg = "";
	          if (inHistory > 1) {
	            msg += inHistory + "x ";
	          }
	          msg += "(" + (lastPlayI + 1) + "/" + (hist.length - 1) + ") ";
	          if (skipped) {
	            if (skipped === inHistory) {
	              if (skipped === 1) {
	                msg += "but was skipped last time ";
	              } else {
	                msg += "but was every time";
	              }
	            } else {
	              msg += "it was skipped " + (this$.skippedBitmap.length < hist.length ? 'at leat' : '') + " " + skipped + "/" + inHistory + " times ";
	            }
	          }
	          chatWarn({
	            icon: 'icon-history-white',
	            title: 'Song is in History',
	            message: msg
	          });
	          API.trigger('p0ne:songInHistory');
	        }
	        this$.skippedBitmap.unshift(0);
	        if (popBitmap) {
	          this$.skippedBitmap.pop();
	        } else {
	          popBitmap = this$.skippedBitmap.length >= hist.length;
	        }
	      }
	    });
	  }
	});
	/*####################################
	#      DISABLE MESSAGE DELETE        #
	####################################*/
	module('disableChatDelete', {
	  require: ['_$context', 'user_', 'chat'],
	  optional: ['socketListeners', 'PopoutChat', 'PopoutView'],
	  moderator: false,
	  displayName: 'Show deleted messages',
	  settings: 'moderation',
	  settingsSimple: true,
	  cssClass: 'p0ne-showDeletedMessages',
	  setup: function(arg$){
	    var addListener, replace, replace_$Listener, $createPersistent, css, lastDeletedCid;
	    addListener = arg$.addListener, replace = arg$.replace, replace_$Listener = arg$.replace_$Listener, $createPersistent = arg$.$createPersistent, css = arg$.css;
	    lastDeletedCid = null;
	    addListener(_$context, 'p0ne:socket:chatDelete', function(data){
	      markAsDeleted(data.c, data.mi);
	      lastDeletedCid = data.c;
	    });
	    replace_$Listener('chat:delete', chat, function(cid){
	      if (cid !== lastDeletedCid) {
	        markAsDeleted(cid);
	      }
	    });
	    if (typeof PopoutChat != 'undefined' && PopoutChat !== null) {
	      if ((typeof PopoutView != 'undefined' && PopoutView !== null) && PopoutView.chat) {
	        _$context.off('chat:delete', PopoutView.chat.onDelete);
	      }
	      replace(PopoutChat.prototype, 'onDelete', null);
	    }
	    function markAsDeleted(cid, mi){
	      var ref$, $msg, ref1$, isLast, moderator, t, uid, ref2$, isValidDelete, ref3$, deletes, that, d, $cm;
	      if ((typeof chat != 'undefined' && chat !== null) && ((ref$ = chat.lastText) != null && ref$.hasClass("cid-" + cid))) {
	        $msg = chat.lastText.add(typeof PopoutView != 'undefined' && PopoutView !== null ? (ref1$ = PopoutView.chat) != null ? ref1$.lastText : void 8 : void 8).parent().parent();
	        isLast = true;
	      } else {
	        $msg = getChat(cid);
	      }
	      if (mi) {
	        moderator = getUser(mi);
	      }
	      console.log("[Chat Delete]", cid, $msg.text());
	      t = getISOTime();
	      try {
	        uid = (ref2$ = cid.split('-')) != null ? ref2$[0] : void 8;
	        isValidDelete = mi + "" === uid || !((ref3$ = getUser(uid)) != null && ref3$.gRole);
	        if (isValidDelete) {
	          $msg.addClass('deleted').find('.p0ne-img').each(function(){
	            var $a;
	            $a = $(this).parent();
	            $a.html($a.attr('href'));
	          });
	        }
	        deletes = $msg.data('deletes') || {};
	        if (that = deletes[moderator.id]) {
	          $msg.find(".delete-timestamp-from-" + moderator.id).text("deleted " + (moderator ? 'by ' + moderator.username : '') + " (x" + (++that.amount) + ") " + that.time);
	        } else {
	          d = $createPersistent(getTimestamp());
	          deletes[moderator.id] = {
	            time: d.text(),
	            amount: 1
	          };
	          d.addClass('delete-timestamp').addClass("delete-timestamp-from-" + moderator.id).removeClass('timestamp').text("deleted " + (moderator ? 'by ' + moderator.username : '') + " " + d.text()).appendTo($msg);
	        }
	        $msg.data({
	          deletes: deletes
	        });
	        $cm = get$cm();
	        if ($msg.position().top < $cm.height()) {
	          $cm.scrollTop($cm.scrollTop() + d.height());
	        }
	        $msg.find('.delete-button').remove();
	        if (isLast) {
	          return chat.lastType = 'p0ne-deleted';
	        }
	      } catch (e$) {}
	    }
	  },
	  disableLate: function(){
	    if ((typeof PopoutView != 'undefined' && PopoutView !== null) && PopoutView.chat) {
	      _$context.on('chat:delete', PopoutView.chat.onDelete);
	    }
	  }
	});
	/*####################################
	#         DELETE OWN MESSAGES        #
	####################################*/
	module('chatDeleteOwnMessages', {
	  moderator: false,
	  settingsSimple: true,
	  setup: function(arg$){
	    var addListener;
	    addListener = arg$.addListener;
	    get$cm().find("fromID-" + userID).addClass('deletable').append($('<div class="delete-button">Delete</div>').click(delCb));
	    addListener(API, 'chat', function(message){
	      var cid, uid;
	      cid = message.cid, uid = message.uid;
	      if (uid === userID) {
	        getChat(cid).addClass('deletable').append($('<div class="delete-button">Delete</div>').click(delCb));
	      }
	    });
	    function delCb(){
	      return API.moderateDeleteChat(
	      $(this).closest('.cm').data('cid'));
	    }
	  }
	});
	/*####################################
	#            WARN ON MEHER           #
	####################################*/
	module('warnOnMehers', {
	  users: {},
	  moderator: false,
	  displayName: 'Warn on Mehers',
	  settings: 'moderation',
	  settingsSimple: true,
	  _settings: {
	    instantWarn: false,
	    maxMehs: 3
	  },
	  setup: function(arg$, arg1$, m_){
	    var addListener, users, current, lastAdvance, this$ = this;
	    addListener = arg$.addListener;
	    if (m_) {
	      this.users = m_.users;
	    }
	    users = this.users;
	    current = {};
	    addListener(API, 'voteUpdate', function(d){
	      current[d.user.id] = d.vote;
	      if (d.vote === -1 && d.user.uid !== userID) {
	        console.log("%c🢃%c " + formatUser(d.user, true) + " meh'd this song", 'font-weight: bold; color: #ff5a5a', '');
	        if (this$._settings.instantWarn) {
	          chatWarnSmall({
	            className: 'p0ne-meh-warning',
	            icon: 'icon-meh',
	            message: formatUserHTML(d.user, true) + " meh'd this song!",
	            isHTML: true
	          });
	        }
	      }
	    });
	    lastAdvance = 0;
	    addListener(API, 'advance', function(d){
	      var cid, ref$, v, troll, i$, len$, ref1$;
	      d = Date.now();
	      for (cid in ref$ = current) {
	        v = ref$[cid];
	        if (v === -1) {
	          users[cid] || (users[cid] = 0);
	          if (++users[cid] > this$._settings.maxMehs && (troll = getUser(cid))) {
	            chatWarnSmall({
	              className: 'p0ne-meh-warning',
	              icon: 'icon-meh',
	              message: formatUserHTML(troll) + " meh'd the past " + plural(users[cid], 'song') + "!",
	              isHTML: true
	            });
	          }
	        } else if (d > lastAdvance + 10000) {
	          delete users[cid];
	        }
	      }
	      if (d > lastAdvance + 10000) {
	        for (i$ = 0, len$ = (ref$ = API.getUsers()).length; i$ < len$; ++i$) {
	          cid = ref$[i$].cid;
	          if (!current[cid] && ((ref1$ = d.lastPlay) != null ? ref1$.dj.id : void 8) !== cid) {
	            delete users[cid];
	          }
	        }
	      }
	      current = {};
	      lastAdvance = d;
	    });
	  },
	  settingsExtra: function($el){
	    var warnOnMehers, resetTimer, $warning;
	    warnOnMehers = this;
	    $("<form><label><input type=radio name=max-mehs value=on " + (this._settings.instantWarn ? 'checked' : '') + "> alert instantly</label><br><label><input type=radio name=max-mehs value=off " + (this._settings.instantWarn ? '' : 'checked') + "> alert if a user mehs <input type=number value='" + this._settings.maxMehs + "' class='p0ne-settings-input max-mehs'> songs in a row</label></form>").append($warning = $('<div class=warning>')).on('click', 'input:radio', function(){
	      if (this.checked) {
	        warnOnMehers._settings.instantWarn = this.value === 'on';
	        warnOnMehers.saveSettings();
	      }
	    }).on('input', '.max-mehs', function(){
	      var val, this$ = this;
	      val = ~~this.value;
	      if (val > 1) {
	        warnOnMehers._settings.maxMehs = val;
	        if (resetTimer) {
	          $warning.fadeOut();
	          clearTimeout(resetTimer);
	          resetTimer = 0;
	        }
	        if (warnOnMehers._settings.instantWarn) {
	          $(this).parent().click();
	        }
	        console.log(getTime() + " [warnOnMehers] updated maxMehs to " + val);
	      } else {
	        $warning.fadeIn().text("please enter a valid number >1");
	        resetTimer = sleep(2 .min, function(){
	          this$.value = warnOnMehers._settings.maxMehs;
	          resetTimer = 0;
	        });
	        console.warn(getTime() + " [warnOnMehers] invalid input for maxMehs", this.value);
	      }
	      warnOnMehers.saveSettings();
	    }).appendTo($el);
	    $el.css({
	      paddingLeft: 15
	    });
	  }
	});
	/*####################################
	#              AFK TIMER             #
	####################################*/
	module('afkTimer', {
	  displayName: "Show Idle Time",
	  help: 'This module shows how long since users have last been by adding a timer to the User- and Waitlist-Panel.\nIt also adds the number of inactive users in the waitlist to the waitlist button. (updated every minute)\n"Being active" means sending chat, changing your name, gifting someone, grabbing or doing moderator things.',
	  settings: 'moderation',
	  settingsSimple: true,
	  moderator: false,
	  disabled: true,
	  require: ['RoomUserRow', 'WaitlistRow'],
	  optional: ['socketListeners', 'app', 'userList', '_$context'],
	  _settings: {
	    lastActivity: {},
	    highlightOver: 45 .min,
	    showCount: true
	  },
	  setup: function(arg$, arg1$, m_){
	    var addListener, $create, wrap, settings, start, lastActivity, ref$, i$, ref1$, len$, user, key$, $waitlistBtn, $afkCount, $chatBtn, $wlBtn, currPanel, lastAfkCount, lastShowCount, d, noActivityYet, fn, Constr, this$ = this;
	    addListener = arg$.addListener, $create = arg$.$create, wrap = arg$.wrap;
	    settings = this._settings;
	    start = Date.now();
	    if (m_) {
	      this.start = m_.start;
	      lastActivity = m_._settings.lastActivity || {};
	    } else {
	      this.start = start;
	      if (((ref$ = this._settings.lastActivity) != null ? ref$[0] : void 8) + 60000 > Date.now()) {
	        lastActivity = this._settings.lastActivity;
	      } else {
	        lastActivity = {};
	      }
	    }
	    this.lastActivity = lastActivity;
	    for (i$ = 0, len$ = (ref1$ = API.getUsers()).length; i$ < len$; ++i$) {
	      user = ref1$[i$];
	      lastActivity[key$ = user.id] || (lastActivity[key$] = start);
	    }
	    start = this.start;
	    $waitlistBtn = $('#waitlist-button').append($afkCount = $create('<div class=p0ne-toolbar-count>'));
	    addListener(API, 'p0ne:socket:skip p0ne:socket:grab', function(id){
	      updateUser(id);
	    });
	    addListener(API, 'userJoin p0ne:socket:nameChanged', function(u){
	      updateUser(u.id);
	    });
	    addListener(API, 'p0ne:chat:pre', function(u){
	      if (!/\[(?:afk|ar)\]/i.test(u.message)) {
	        updateUser(u.uid);
	      }
	    });
	    addListener(API, 'p0ne:socket:gifted', function(e){
	      updateUser(e.s);
	    });
	    addListener(API, 'p0ne:socket:modAddDJ p0ne:socket:modBan p0ne:socket:modMoveDJ p0ne:socket:modRemoveDJ p0ne:socket:modSkip p0ne:socket:modStaff', function(u){
	      updateUser(u.mi);
	    });
	    addListener(API, 'userLeave', function(u){
	      delete lastActivity[u.id];
	    });
	    $chatBtn = $('#chat-button');
	    $wlBtn = $('#waitlist-button');
	    if ($chatBtn.hasClass('selected')) {
	      currPanel = 'chat';
	    } else if ($wlBtn.hasClass('selected')) {
	      currPanel = 'waitlist';
	    } else {
	      currPanel = 'other';
	    }
	    if ((typeof _$context != 'undefined' && _$context !== null) && ((typeof app != 'undefined' && app !== null) || (typeof userList != 'undefined' && userList !== null))) {
	      addListener(_$context, 'show:chat', function(){
	        currPanel = 'chat';
	        this$.update();
	      });
	      addListener(_$context, 'show:waitlist', function(){
	        currPanel = 'waitlist';
	        this$.update();
	      });
	      addListener(_$context, 'show:users show:friends', function(){
	        currPanel = 'other';
	        this$.update();
	      });
	    }
	    lastAfkCount = 0;
	    this.timer = repeat(60000, this.update = function(){
	      var afkCount, d, usersToCheck, i$, len$, u;
	      if (lastShowCount !== settings.showCount) {
	        lastShowCount = settings.showCount;
	        $afkCount.fadeToggle(lastShowCount);
	      }
	      if (currPanel === 'chat') {
	        forceRerender();
	      }
	      afkCount = 0;
	      d = Date.now();
	      usersToCheck = API.getWaitList();
	      for (i$ = 0, len$ = usersToCheck.length; i$ < len$; ++i$) {
	        u = usersToCheck[i$];
	        if (d - lastActivity[u.id] > settings.highlightOver) {
	          afkCount++;
	        }
	      }
	      if (afkCount !== lastAfkCount) {
	        if (afkCount) {
	          if (lastAfkCount === 0 && settings.showCount && currPanel !== 'waitlist') {
	            $afkCount.fadeIn();
	          }
	          $afkCount.text(afkCount);
	        } else {
	          if (settings.showCount) {
	            $afkCount.fadeOut();
	          }
	          $afkCount.html('');
	        }
	        lastAfkCount = afkCount;
	      }
	    });
	    addListener(API, 'waitListUpdate', this.update, this);
	    this.update();
	    d = 0;
	    for (i$ = 0, len$ = (ref1$ = [RoomUserRow, WaitlistRow]).length; i$ < len$; ++i$) {
	      fn = i$;
	      Constr = ref1$[i$];
	      wrap(Constr.prototype, 'render', fn$);
	    }
	    function updateUser(uid){
	      var i$, ref$, ref1$, len$, r, results$ = [];
	      if (Date.now() - lastActivity[uid] > settings.highlightOver) {
	        this$.update();
	      }
	      lastActivity[0] = lastActivity[uid] = Date.now();
	      for (i$ = 0, len$ = (ref$ = (typeof userList != 'undefined' && userList !== null ? (ref1$ = userList.listView) != null ? ref1$.rows : void 8 : void 8) || (typeof app != 'undefined' && app !== null ? app.room.waitlist.rows : void 8)).length; i$ < len$; ++i$) {
	        r = ref$[i$];
	        if (r.model.id === uid) {
	          results$.push(r.render(true));
	        }
	      }
	      return results$;
	    }
	    function forceRerender(){
	      var i$, ref$, ref1$, len$, r, results$ = [];
	      for (i$ = 0, len$ = (ref$ = (typeof app != 'undefined' && app !== null ? app.room.waitlist.rows : void 8) || (typeof userList != 'undefined' && userList !== null ? (ref1$ = userList.listView) != null ? ref1$.rows : void 8 : void 8) || []).length; i$ < len$; ++i$) {
	        r = ref$[i$];
	        results$.push(r.render(false));
	      }
	      return results$;
	    }
	    forceRerender();
	    function fn$(r_){
	      return function(isUpdate){
	        var ago, time, noActivityYet;
	        r_.apply(this, arguments);
	        if (!d) {
	          d = Date.now();
	          requestAnimationFrame(function(){
	            d = 0;
	            noActivityYet = null;
	          });
	        }
	        ago = d - lastActivity[this.model.id];
	        if (lastActivity[this.model.id] <= start) {
	          if (ago < 120000) {
	            time = noActivityYet || (noActivityYet = "? ");
	          } else {
	            time = noActivityYet || (noActivityYet = ">" + humanTime(ago, true));
	          }
	        } else if (ago < 60000) {
	          time = "<1m";
	        } else if (ago < 120000) {
	          time = "<2m";
	        } else {
	          time = humanTime(ago, true);
	        }
	        if (this.$afk) {
	          this.$afk.removeClass('p0ne-last-activity-warn');
	        } else {
	          this.$afk = $('<span class=p0ne-last-activity>').appendTo(this.$el);
	        }
	        this.$afk.text(time);
	        if (ago > settings.highlightOver) {
	          this.$afk.addClass('p0ne-last-activity-warn');
	        }
	        if (isUpdate) {
	          this.$afk.p0neFx('blink');
	        }
	      };
	    }
	  },
	  settingsExtra: function($wrapper){
	    var afkTimer, highlightOver, $el, $number, $slider;
	    afkTimer = this;
	    highlightOver = ~~(this._settings.highlightOver / 1 .min);
	    $el = $("<form><input type=range class=slider value=" + highlightOver + " min=1 max=240 step=1><input type=number class='number p0ne-settings-input afk-timer-max-min' />min</span><br><label><input type=checkbox " + (this._settings.showCount ? 'checked' : '') + "> Show count in chat-toolbar</label></form>").on('input', '.slider', function(){
	      $number.val(this.value);
	      afkTimer._settings.highlightOver = this.value * 1 .min;
	      afkTimer.update();
	      afkTimer.saveSettings();
	    }).on('input', '.number', function(){
	      $slider.val(this.value);
	      afkTimer._settings.highlightOver = this.value * 1 .min;
	      afkTimer.update();
	      afkTimer.saveSettings();
	    }).on('click', 'input', function(){
	      afkTimer._settings.showCount = this.checked;
	      afkTimer.update();
	      afkTimer.saveSettings();
	    }).appendTo($wrapper.addClass('p0ne-settings-extra--afk-timer'));
	    $number = $el.find('.number').val(highlightOver);
	    $slider = $el.find('.slider');
	  },
	  disable: function(){
	    clearInterval(this.timer);
	    $('#waitlist-button').removeClass('p0ne-toolbar-highlight');
	  },
	  disableLate: function(){
	    var i$, ref$, ref1$, len$, r;
	    for (i$ = 0, len$ = (ref$ = (typeof app != 'undefined' && app !== null ? app.room.waitlist.rows : void 8) || (typeof userList != 'undefined' && userList !== null ? (ref1$ = userList.listView) != null ? ref1$.rows : void 8 : void 8) || []).length; i$ < len$; ++i$) {
	      r = ref$[i$];
	      r.render();
	    }
	  }
	});
	/*####################################
	#           FORCE SKIP BTN           #
	####################################*/
	module('forceSkipButton', {
	  moderator: false,
	  setup: function(arg$, m){
	    var $create;
	    $create = arg$.$create;
	    this.$btn = $create('<div class=p0ne-skip-btn><i class="icon icon-skip"></i></div>').insertAfter('#playlist-panel').click(API.moderateForceSkip);
	  }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/**
	 * performance enhancements for plug.dj
	 * the perfEmojify module also adds custom emoticons
	 *
	 * @author jtbrinkmann aka. Brinkie Pie
	 * @license MIT License
	 * @copyright (c) 2015 J.-T. Brinkmann
	 */
	/*####################################
	#         JQUERY PERFORMANCE         #
	####################################*/
	module('jQueryPerf', {
	  setup: function(arg$){
	    var replace, core_rnotwhite;
	    replace = arg$.replace;
	    core_rnotwhite = /\S+/g;
	    if ('classList' in document.body) {
	      replace(jQuery.fn, 'addClass', function(value){
	        var i$, len$, j, classes, i, elem, clazz;
	        if (jQuery.isFunction(value)) {
	          for (i$ = 0, len$ = (this).length; i$ < len$; ++i$) {
	            j = (this)[i$];
	            jQuery(this).addClass(value.call(this, j, this.className));
	          }
	        } else if (typeof value === 'string' && value) {
	          classes = value.match(core_rnotwhite) || [];
	          i = 0;
	          while (elem = this[i++]) {
	            if (elem.nodeType === 1) {
	              j = 0;
	              while (clazz = classes[j++]) {
	                elem.classList.add(clazz);
	              }
	            }
	          }
	        }
	        return this;
	      });
	      replace(jQuery.fn, 'removeClass', function(value){
	        var i$, len$, j, i, elem, clazz, classes;
	        if (jQuery.isFunction(value)) {
	          for (i$ = 0, len$ = (this).length; i$ < len$; ++i$) {
	            j = (this)[i$];
	            jQuery(this).removeClass(value.call(this, j, this.className));
	          }
	        } else if (value == null) {
	          i = 0;
	          while (elem = this[i++]) {
	            if (elem.nodeType === 1) {
	              j = elem.classList.length;
	              while (clazz = elem.classList[--j]) {
	                elem.classList.remove(clazz);
	              }
	            }
	          }
	        } else if (typeof value === 'string' && value) {
	          classes = value.match(core_rnotwhite) || [];
	          i = 0;
	          while (elem = this[i++]) {
	            if (elem.nodeType === 1) {
	              j = 0;
	              while (clazz = classes[j++]) {
	                elem.classList.remove(clazz);
	              }
	            }
	          }
	        }
	        return this;
	      });
	      replace(jQuery.fn, 'hasClass', function(className){
	        var i, elem;
	        i = 0;
	        while (elem = this[i++]) {
	          if (elem.classList.contains(className)) {
	            return true;
	          }
	        }
	        return false;
	      });
	    }
	  }
	});
	/*####################################
	#          CHAT PERFORMANCE          #
	####################################*/
	module('perfChat', {
	  require: ['chat', 'plugUrls'],
	  setup: function(arg$){
	    var replace, badoop;
	    replace = arg$.replace;
	    badoop = new Audio(plugUrls.sfx);
	    replace(chat, 'playSound', function(){
	      badoop.currentTime = 0;
	      badoop.play();
	    });
	  }
	});
	/*####################################
	#        VOTE BTN PERFORMANCE        #
	####################################*/
	module('perfVote', {
	  require: ['currentMedia'],
	  setup: function(arg$){
	    var addListener, css, $vote, evts, i$, len$, i, e, $wootBtn, this$ = this;
	    addListener = arg$.addListener, css = arg$.css;
	    $vote = $('#vote')[0];
	    evts = currentMedia._events['change:remaining'];
	    for (i$ = 0, len$ = evts.length; i$ < len$; ++i$) {
	      i = i$;
	      e = evts[i$];
	      if (e.ctx.el === $vote) {
	        this.bck = e;
	        evts.remove(i);
	        break;
	      }
	    }
	    if (!this.bck) {
	      console.error("[perfVote] failed to get vanilla vote button update handler");
	      return;
	    }
	    $wootBtn = $('#woot');
	    addListener(API, 'grabUpdate', function(d){
	      if (d.user.id === userID) {
	        this$.bck.ctx.setWoot('selected');
	        this$.bck.ctx.setGrab('selected');
	        this$.bck.ctx.setMeh();
	      }
	    });
	  },
	  disable: function(){
	    if (this.bck) {
	      currentMedia._events['change:remaining'].unshift(this.bck);
	    }
	  }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/**
	 * ponify chat - a script to ponify some words in the chat on plug.dj
	 * Text ponification based on http://pterocorn.blogspot.dk/2011/10/ponify.html
	 *
	 * @author jtbrinkmann aka. Brinkie Pie
	 * @license MIT License
	 * @copyright (c) 2015 J.-T. Brinkmann
	 */
	console.log("~~~~~~~ p0ne.ponify ~~~~~~~");
	/*####################################
	#            PONIFY CHAT             #
	####################################*/
	module('ponify', {
	  optional: ['emoji'],
	  displayName: 'Ponify Chat',
	  settings: 'pony',
	  help: 'Ponify the chat! (replace words like "anyone" with "anypony")\nReplaced words will be underlined. Move your cursor over the word to see it\'s original.\n\nIt also replaces some of the emoticons with pony emoticons.',
	  disabled: true
	  /*== TEXT ==*/,
	  map: {
	    "anybody": "anypony",
	    "anyone": "anypony",
	    "ass": "flank",
	    "asses": "flanks",
	    "boner": "wingboner",
	    "boy": "colt",
	    "boyfriend": "coltfriend",
	    "boyfriends": "coltfriends",
	    "boys": "colts",
	    "bro fist": "brohoof",
	    "bro-fist": "brohoof",
	    "butt": "flank",
	    "butthurt": "saddle-sore",
	    "butts": "flanks",
	    "child": "foal",
	    "children": "foals",
	    "cowboy": "cowpony",
	    "cowboys": "cowponies",
	    "cowgirl": "cowpony",
	    "cowgirls": "cowponies",
	    "disappoint": "disappony",
	    "disappointed": "disappony",
	    "disappointment": "disapponyment",
	    "doctor who": "doctor whooves",
	    "dr who": "dr whooves",
	    "dr. who": "dr. whooves",
	    "everybody": "everypony",
	    "everyone": "everypony",
	    "fap": "clop",
	    "faps": "clops",
	    "foot": "hoof",
	    "feet": "hooves",
	    "folks": "foalks",
	    "fool": "foal",
	    "foolish": "foalish",
	    "germany": "germaneigh",
	    "gentleman": "gentlecolt",
	    "gentlemen": "gentlecolts",
	    "girl": "filly",
	    "girls": "fillies",
	    "girlfriend": "fillyfriend",
	    "girlfriends": "fillyfriends",
	    "halloween": "nightmare night",
	    "hand": "hoof",
	    "hands": "hooves",
	    "handed": "hoofed",
	    "handedly": "hoofedly",
	    "handers": "hoofers",
	    "handmade": "hoofmade",
	    "hey": "hay",
	    "high-five": "hoof-five",
	    "highfive": "hoof-five",
	    "ladies": "fillies",
	    "main": "mane",
	    "man": "stallion",
	    "men": "stallions",
	    "manhattan": "manehattan",
	    "marathon": "mareathon",
	    "miracle": "mareacle",
	    "miracles": "mareacles",
	    "money": "bits",
	    "naysayer": "neighsayer",
	    "no one else": "nopony else",
	    "no-one else": "nopony else",
	    "noone else": "nopony else",
	    "nobody": "nopony",
	    "nottingham": "trottingham",
	    "null": "nullpony",
	    "old-timer": "old-trotter",
	    "people": "ponies",
	    "person": "pony",
	    "persons": "ponies",
	    "philadelphia": "fillydelphia",
	    "somebody": "somepony",
	    "someone": "somepony",
	    "stalingrad": "stalliongrad",
	    "sure as hell": "sure as hay",
	    "tattoo": "cutie mark",
	    "tattoos": "cutie mark",
	    "da heck": "da hay",
	    "the heck": "the hay",
	    "the hell": "the hay",
	    "troll": "parasprite",
	    "trolls": "parasprites",
	    "trolled": "parasprited",
	    "trolling": "paraspriting",
	    "trollable": "paraspritable",
	    "woman": "mare",
	    "women": "mares",
	    "confound those dover boys": "confound these ponies"
	  },
	  ponifyMsg: function(msg){
	    var this$ = this;
	    msg.message = msg.message.replaceSansHTML(this.regexp, function(_, pronoun, s, possessive, i){
	      var w, r, lastUpperCaseLetters, l, ref$, ref1$, i$, o;
	      w = this$.map[s.toLowerCase()];
	      r = "";
	      /*preserve upper/lower case*/
	      lastUpperCaseLetters = 0;
	      l = (ref$ = s.length) < (ref1$ = w.length) ? ref$ : ref1$;
	      for (i$ = 0; i$ < l; ++i$) {
	        o = i$;
	        if (s[o].toLowerCase() !== s[o]) {
	          r += w[o].toUpperCase();
	          lastUpperCaseLetters++;
	        } else {
	          r += w[o];
	          lastUpperCaseLetters = 0;
	        }
	      }
	      if (w.length >= s.length && lastUpperCaseLetters >= 3) {
	        r += w.substr(l).toUpperCase();
	      } else {
	        r += w.substr(l);
	      }
	      r = "<abbr class=ponified title='" + s + "'>" + r + "</abbr>";
	      if (pronoun) {
	        if ("aeioujy".has(w[0])) {
	          r = "an " + r;
	        } else {
	          r = "a " + r;
	        }
	      }
	      if (possessive) {
	        if ("szx".has(w[w.length - 1])) {
	          r += "' ";
	        } else {
	          r += "'s ";
	        }
	      }
	      console.log("replaced '" + s + "' with '" + r + "'", msg.cid);
	      return r;
	    });
	  }
	  /*== EMOTICONS ==*/
	  /* images from bronyland.com (reuploaded to imgur to not spam the console with warnings, because bronyland.com doesn't support HTTPS) */,
	  autoEmotiponies: {
	    '8)': 'rainbowdetermined2',
	    ':(': 'fluttershysad',
	    ':)': 'twilightsmile',
	    ':?': 'rainbowhuh',
	    ':B': 'twistnerd',
	    ':D': 'pinkiehappy',
	    ':S': 'unsuresweetie',
	    ':O': 'pinkiegasp',
	    ':X': 'fluttershybad',
	    ':|': 'ajbemused',
	    ';)': 'raritywink',
	    '<3': 'heart',
	    'B)': 'coolphoto',
	    'D:': 'raritydespair'
	  },
	  emotiponies: {
	    aj: "https://i.imgur.com/nnYMw87.png",
	    ajbemused: "https://i.imgur.com/8SLymiw.png",
	    applebloom: "https://i.imgur.com/vAdPBJj.png",
	    applejack: "https://i.imgur.com/nnYMw87.png",
	    applejackconfused: "https://i.imgur.com/c4moR6o.png",
	    blush: "https://i.imgur.com/IpxwJ5c.png",
	    cool: "https://i.imgur.com/WFa3vKA.png",
	    coolphoto: "https://i.imgur.com/QDgMyIZ.png",
	    cry: "https://i.imgur.com/fkYW4BG.png",
	    derp: "https://i.imgur.com/Y00vqcH.png",
	    derpy: "https://i.imgur.com/h6GdxHo.png",
	    eek: "https://i.imgur.com/mnJHnsv.png",
	    evil: "https://i.imgur.com/I8CNeRx.png",
	    fluttershy: "https://i.imgur.com/6L0bpWd.png",
	    fluttershybad: "https://i.imgur.com/mnJHnsv.png",
	    fluttershysad: "https://i.imgur.com/6L0bpWd.png",
	    fs: "https://i.imgur.com/6L0bpWd.png",
	    heart: "https://i.imgur.com/aPBXLob.png",
	    idea: "https://i.imgur.com/aitjp1R.png",
	    lol: "https://i.imgur.com/XVy41jX.png",
	    loveme: "https://i.imgur.com/H81S9x0.png",
	    mad: "https://i.imgur.com/taFXcWV.png",
	    mrgreen: "https://i.imgur.com/IkInelN.png",
	    oops: "https://i.imgur.com/IpxwJ5c.png",
	    photofinish: "https://i.imgur.com/QDgMyIZ.png",
	    pinkie: "https://i.imgur.com/tpQZaW4.png",
	    pinkiegasp: "https://i.imgur.com/b9G2kaz.png",
	    pinkiehappy: "https://i.imgur.com/uFwZib6.png",
	    pinkiepie: "https://i.imgur.com/tpQZaW4.png",
	    rage: "https://i.imgur.com/H81S9x0.png",
	    rainbowdash: "https://i.imgur.com/xglySrD.png",
	    rainbowdetermined2: "https://i.imgur.com/WFa3vKA.png",
	    rainbowhuh: "https://i.imgur.com/te0Mnih.png",
	    rarity: "https://i.imgur.com/9fo7ZW3.png",
	    raritydespair: "https://i.imgur.com/og1FoWN.png",
	    raritywink: "https://i.imgur.com/9fo7ZW3.png",
	    razz: "https://i.imgur.com/f8SgNBw.png",
	    rd: "https://i.imgur.com/xglySrD.png",
	    roll: "https://i.imgur.com/JogpKQo.png",
	    sad: "https://i.imgur.com/6L0bpWd.png",
	    scootaloo: "https://i.imgur.com/9zVXkyg.png",
	    shock: "https://i.imgur.com/b9G2kaz.png",
	    sweetie: "https://i.imgur.com/EATu0iu.png",
	    sweetiebelle: "https://i.imgur.com/EATu0iu.png",
	    trixie2: "https://i.imgur.com/HWW2D6b.png",
	    trixie: "https://i.imgur.com/2QEmT8y.png",
	    trixieleft: "https://i.imgur.com/HWW2D6b.png",
	    twi: "https://i.imgur.com/LDoxwfg.png",
	    twilight: "https://i.imgur.com/LDoxwfg.png",
	    twilightsmile: "https://i.imgur.com/LDoxwfg.png",
	    twist: "https://i.imgur.com/57VFd38.png",
	    twisted: "https://i.imgur.com/I8CNeRx.png",
	    twistnerd: "https://i.imgur.com/57VFd38.png",
	    unsuresweetie: "https://i.imgur.com/EATu0iu.png",
	    wink: "https://i.imgur.com/9fo7ZW3.png"
	  },
	  setup: function(arg$){
	    var addListener, replace, css, ponimoteList, name, ref$, url;
	    addListener = arg$.addListener, replace = arg$.replace, css = arg$.css;
	    this.regexp = RegExp('\\b(an?\\s+)?(' + Object.keys(this.map).join('|').replace(/\s+/g, '\\s*') + ')(\'s?)?\\b', 'gi');
	    addListener(API, 'chat:plugin', bind$(this, 'ponifyMsg'));
	    if (typeof emoji != 'undefined' && emoji !== null) {
	      ponimoteList = {};
	      for (name in ref$ = this.emotiponies) {
	        url = ref$[name];
	        ponimoteList[name] = {
	          url: url,
	          size: 27
	        };
	      }
	      customEmoji.addEmoji(ponimoteList);
	      customEmoji.addAutoEmoji(this.autoEmotiponies);
	    }
	  },
	  disable: function(){
	    if (typeof emoji.update == 'function') {
	      emoji.update();
	    }
	  }
	});
module('ponifiedLang', {
require: ['Lang'],
disabled: false,
	  displayName: "Ponified Text",
	  settings: 'pony',
	  setup: function(arg$){
	    var replace, css, replaceMap, regx, i$, ref$, group, k, v, v2;
	    replace = arg$.replace, css = arg$.css;
	    replaceMap = {
	      user: 'pony',
	      person: 'pony',
	      people: 'ponies',
	      People: 'Ponies',
	      Nobody: 'Nopony',
	      woot: "squee",
	      Woot: "Squee",
	      Points: "Bits",
	      "Resident DJs": 'Horse Famous',
	      "Resident DJ": 'Horse Famous',
	      Bouncer: 'Royal Guard',
	      Manager: 'Royal Guard Captain',
	      "Co-Host": 'Alicorn',
	      Host: 'Alicorn Princess',
	      "Community staff": "Local VIP Ponies",
	      staff: 'VIP Pony List'
	    };
	    regx = RegExp('\\b(' + Object.keys(replaceMap).join('|') + ')(s?|)\\b', 'g');
	    console.groupCollapsed("[ponifiedLang] dynamically replacing words");
	    for (i$ in ref$ = Lang) {
	      group = ref$[i$];
	      for (k in group) {
	        v = group[k];
	        if (k[k.length - 1] !== "_" && v) {
	          v2 = v.replace(regx, fn$);
	          if (v !== v2) {
	            replace(group, k, v2);
	            console.log("\treplacing '" + v + "' with '" + group[k] + "'");
	          }
	        }
	      }
	    }
	    console.groupEnd();
	    replace(Lang.roles, 'none', "Mudpony");
	    replace(Lang.moderation, 'staffDJ', "made %NAME% horse famous.");
	    replace(Lang.moderation, 'staffBouncer', "hired %NAME% as a Royal Guard.");
	    replace(Lang.moderation, 'staffManager', "hired %NAME% as a Royal Guard Captain.");
	    replace(Lang.moderation, 'staffCohost', "transformed %NAME% into an Alicorn.");
	    replace(Lang.moderation, 'staffHost', "transformed %NAME% into an Alicorn Princess.");
	    replace(Lang.permissions, 'dj', "Set Horse Famous Ponies");
	    replace(Lang.permissions, 'bouncers', "Hire Royal Guard");
	    replace(Lang.permissions, 'managers', "Hire Royal Guard Captains");
	    replace(Lang.moderation, 'ban', "sent %NAME% to the moon for a thousand years.");
	    replace(Lang.userSettings, 'videoOnly', "Video Only (no dancing horses)");
	    replace(Lang.userMeta, 'profileURL', "Hoofbook Profile URL");
	    replace(Lang.userFriends, 'profile', "Hoofbook Profile");
	    replace(Lang.userList, 'staffTitle', replaceMap.staff);
	    replace(Lang.tooltips, 'profile', "Edit your Hoofbook Profile");
	    replace(Lang.userSettings, 'nsfw', "Show Clopper Communities (NSFW)");
	    replace(Lang.alerts, 'sessionExpired', "Horseapples!");
	    replace($('#woot .label')[0], 'textContent', "Squee!");
	    replace(Lang.chat, 'help', "<strong>Chat Commands:</strong><br/>/em &nbsp; <em>Emote</em><br/>/me &nbsp; <em>Emote</em><br/>/clear &nbsp; <em>Clear Chat History</em><hr><strong>Bot Commands:</strong><br>!randgame &nbsp; <em>Pony Adventure</em><br/>!power &nbsp; <em>Random Power</em><br/>!hug (@user) &nbsp; <em>hug somepony</em><br/>!1v1 (@user) &nbsp; <em>1v1 somepony</em><br/>!rule <number> &nbsp; <em>List a Rule</em><br/>!songinfo &nbsp; <em>Songstats</em><br/>!dc &nbsp; <em>be put back if you dc'd</em><br/>!eta &nbsp; <em>ETA til you dj</em><br/>!weird &nbsp; <em>Is it weirdday?</em><br/>");
	    replace(Lang.search, 'youtube', "Search YouTube for ponies");
	    replace(Lang.search, 'soundcloud', "Search SoundCloud for ponies");
	    css('ponifiedLang', '#dialog-user-role .role-menu,#dialog-user-role .role-menu .selected {width: 205px;}');
	    function fn$(arg$, a, b){
	      return replaceMap[a] + b;
	    }
	  }
	});
	function bind$(obj, key, target){
	  return function(){ return (target || obj)[key].apply(obj, arguments) };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/**
	 * Room Settings module for plug_p0ne
	 * Made to be compatible with plugCubes Room Settings and RCS Custom Community Settings
	 * so room hosts don't have to bother with a new format just for plug_p0ne.
	 * That also means, that a lot of inspiration came from and credits go to the PlugCubed and RCS teams ♥
	 *
	 * for more information, see https://issue.plugcubed.net/wiki/Plug3%3ARS or https://rcs.radiant.dj/ccs
	 *
	 * @author jtbrinkmann aka. Brinkie Pie
	 * @license MIT License
	 * @copyright (c) 2015 J.-T. Brinkmann
	*/
	console.log("~~~~~~~ p0ne.room-theme ~~~~~~~");
	/*####################################
	#            ROOM SETTINGS           #
	####################################*/
	module('roomSettings', {
	  require: ['room'],
	  optional: ['_$context', 'socketListeners'],
	  module: new DataEmitter('roomSettings'),
	  _room: 'dashboard',
	  setup: function(arg$){
	    var addListener, addCommand;
	    addListener = arg$.addListener, addCommand = arg$.addCommand;
	    this._update();
	    addListener(API, 'p0ne:socket:roomDescriptionUpdate', this._update, this);
	    if (typeof _$context != 'undefined' && _$context !== null) {
	      addListener(_$context, 'room:joining', this.clear, this);
	      addListener(_$context, 'room:joined', this._update, this);
	    }
	    addCommand('roomsettings', {
	      description: "reloads the Room Settings",
	      group: 'look&feel',
	      callback: bind$(this, '_update')
	    });
	  },
	  _update: function(){
	    var roomslug, roomDescription, roomThemeFormat, url, this$ = this;
	    roomslug = getRoomSlug();
	    if (!(roomDescription = htmlUnescape(
	    room.get('description')))) {
	      console.warn("[p0ne] no p³ or RCS Room Settings found");
	    } else if ((roomThemeFormat = 'RCS', url = /@rcs=(.*)/i.exec(roomDescription)) || (roomThemeFormat = 'p³', url = /@p3=(.*)/i.exec(roomDescription))) {
	      this.roomThemeFormat = roomThemeFormat;
	      $.getJSON(url[1]).then(function(data){
	        var imgs, ref$, ref1$, k, v;
	        if (roomThemeFormat === 'RCS') {
	          if (data.ccc) {
	            data.colors = {
	              chat: data.ccc
	            };
	          }
	          if (data.css) {
	            data.css = {
	              'import': data.css
	            };
	          }
	          if (imgs = data.images) {
	            data.images = {
	              icons: imgs
	            };
	            if (imgs.background) {
	              (ref$ = data.images).background || (ref$.background = imgs.background);
	              delete imgs.background;
	            }
	            if (imgs.playback) {
	              (ref$ = data.images).playback || (ref$.playback = imgs.playback);
	              delete imgs.playback;
	            }
	          }
	        }
	        if ((ref$ = data.colors) != null && ref$.chat) {
	          (ref1$ = data.colors.chat).dj || (ref1$.dj = data.colors.chat.residentdj || data.colors.chat.rdj);
	          (ref1$ = data.colors.chat).ba || (ref1$.ba = data.colors.chat.brandambassador || data.colors.chat['brand-ambassador']);
	          (ref1$ = data.colors.chat)['silver-subscriber'] || (ref1$['silver-subscriber'] = data.colors.chat.silver);
	          delete data.colors.chat.residentdj;
	          delete data.colors.chat.rdj;
	          delete data.colors.chat.brandambassador;
	          delete data.colors.chat['brand-ambassador'];
	          delete data.colors.chat.silver;
	          (ref1$ = data.colors).background || (ref1$.background = data.colors.chat.background);
	          (ref1$ = data.colors).header || (ref1$.header = data.colors.chat.header);
	          (ref1$ = data.colors).footer || (ref1$.footer = data.colors.chat.footer);
	          delete data.colors.chat.background;
	          delete data.colors.chat.header;
	          delete data.colors.chat.footer;
	        }
	        data.emotes || (data.emotes = data.emoticons || data.emoji);
	        delete data.emoticons;
	        delete data.emoji;
	        for (k in ref1$ = data.emotes) {
	          v = ref1$[k];
	          if (typeof v === 'string') {
	            data.emotes[k] = v = {
	              url: v
	            };
	          } else if (typeof v !== 'object') {
	            data.emotes[k] = false;
	          }
	          if (!('size' in v) && (!('width' in v) || !('height' in v))) {
	            v.size = 'auto';
	          }
	        }
	        if (typeof ((ref1$ = data.css) != null ? ref1$['import'] : void 8) === 'string') {
	          data.css['import'] = [data.css['import']];
	        }
	        /*
	            # - image urls
	            ctx = {}
	            if data.images
	                ctx.icons = data.images.icons
	                ctx.images =
	                    background: data.images.background
	                    playback: data.images.playback
	            if data.emotes
	                ctx.emotes = data.emotes
	            if data.css?.import
	                ctx.css = import: data.css.import
	        
	            for name, ctx of ctxs
	                for k,v of ctx when v? and (v not typeof \string  or  not v.has \:  or  /^(?:https?:)?\/\/plug\.dj(?::\d*)?(?:\/|$)/.test(v))
	                    # note, this doesn't check for cdn.plug.dj, that is desired, because there should be no harm in requesting anything from cdn.plug.dj
	                    console.warn "[Room Theme #roomThemeFormat] potentially harmful url in #{name}[#k]", "#{ctx[k]}".replace(/%/g, '%%')
	                    delete ctx[k]
	        
	            # - colors
	            ctx = data.colors.chat
	            for role, color of ctx
	                if role not in <[ friend subscriber silver-subscriber bouncer manager cohost host ba admin ]>
	                    console.warn "[Room Theme #roomThemeFormat] invalid role key in chat colors colors.chat[#role]", "#{ctx[role]}".replace(/%/g, '%%')
	                    delete ctx[role]
	                else if not isColor(color)
	                    console.warn "[Room Theme #roomThemeFormat] invalid color in chat colors colors.chat[#role]", "#{ctx[role]}".replace(/%/g, '%%')
	                    delete ctx[role]
	        
	            ctx = {}
	            regx_invalid = /[^\w\s#]/
	            for name, ctx of ctxs
	                for k,v of ctx when (v not typeof \string and v?) or regx_invalid.test(k+v)
	                    console.warn "[Room Theme #roomThemeFormat] potentially harmful url in #{name}[#k]", "#{ctx[k]}".replace(/%/g, '%%')
	                    delete ctx[k]
	        
	            # - fonts
	            i = data.css?.fonts?.length || 0
	            while i--
	            {name, url} = data.css.fonts[i]
	            if regx_invalid.test(name) or not isURL(url, true)
	                # it shouldn't be too many, to bother with performance improvements here
	                data.css.fonts.remove i
	        */
	        this$._room = roomslug;
	        this$.set(data);
	      }).fail(function(){
	        chatWarn({
	          title: "Room Settings",
	          message: "failed to load. Run the chat command /roomsettings to try again"
	        });
	      });
	    }
	  }
	});
	/*####################################
	#             ROOM THEME             #
	####################################*/
	module('roomTheme', {
	  displayName: "Room Theme",
	  require: ['roomSettings'],
	  optional: ['roomLoader'],
	  settings: 'look&feel',
	  settingsSimple: true,
	  help: 'Applies the room theme, if this room has one.\nRoom Settings and thus a Room Theme can be added by (co-) hosts of the room.',
	  setup: function(arg$){
	    var addListener, replace, css, loadStyle, id, this$ = this;
	    addListener = arg$.addListener, replace = arg$.replace, css = arg$.css, loadStyle = arg$.loadStyle;
	    this.$playbackBackground = $('#playback .background img');
	    this.playbackBackgroundVanilla = this.$playbackBackground.attr('src');
	    this.id = id = {};
	    addListener(roomSettings, 'data', this.applyTheme = function(d){
	      var cc, styles, role, ref$, color, colorMap, k, selector, rule, attrs, v, i$, len$, ref1$, name, url, res$, j$, len1$, u, playbackURL, x$, key, text, base, endKey;
	      this$.clear(this$.hasPlaybackImage, false);
	      this$.hasPlaybackImage = false;
	      this$._data = d;
	      cc = (typeof customColors != 'undefined' && customColors !== null ? customColors.colors : void 8) || {};
	      styles = "";
	      /*== colors ==*/
	      if (d.colors) {
	        styles += "\n/*== colors ==*/\n";
	        for (role in ref$ = d.colors.chat) {
	          color = ref$[role];
	          if (isColor(color)) {
	            styles += "/* " + role + " => " + color + " */\n#user-lists .icon-chat-" + role + " + .name,\n.from-" + role + " .from, #waitlist .icon-chat-" + role + " + span,\n#user-rollover .icon-chat-" + role + " + span, .p0ne-name." + role + " {\n        color: " + color + " !important;\n}\n";
	          }
	        }
	        colorMap = {
	          background: '.room-background',
	          header: '.app-header',
	          footer: '#footer'
	        };
	        for (k in colorMap) {
	          selector = colorMap[k];
	          if (isColor(d.colors[k])) {
	            styles += selector + " { background-color: " + d.colors[k] + " !important }\n";
	          }
	        }
	      }
	      /*== CSS ==*/
	      if (d.css) {
	        styles += "\n/*== custom CSS ==*/\n";
	        for (rule in ref$ = d.css.rule) {
	          attrs = ref$[rule];
	          styles += rule + " {";
	          for (k in attrs) {
	            v = attrs[k];
	            styles += "\n\t" + k + ": " + v;
	            if (!/;\s*$/.test(v)) {
	              styles += ";";
	            }
	          }
	          styles += "\n}\n";
	        }
	        for (i$ = 0, len$ = (ref$ = d.css.fonts || []).length; i$ < len$; ++i$) {
	          ref1$ = ref$[i$], name = ref1$.name, url = ref1$.url;
	          if (name && url) {
	            if ($.isArray(url)) {
	              res$ = [];
	              for (j$ = 0, len1$ = (ref1$ = [].join.call(url, ", ")(where(url = isURL(u, true)))).length; j$ < len1$; ++j$) {
	                u = ref1$[j$];
	                res$.push(url);
	              }
	              url = res$;
	            } else if (!(url = isURL(url, true))) {
	              continue;
	            }
	            styles += "@font-face {\n    font-family: '" + name + "';\n    src: '" + url + "';\n}\n";
	          }
	        }
	        for (i$ = 0, len$ = (ref$ = d.css['import'] || []).length; i$ < len$; ++i$) {
	          url = ref$[i$];
	          loadStyle(url);
	        }
	      }
	      /*== images ==*/
	      if (d.images) {
	        styles += "\n/*== images ==*/\n";
	        if (url = isURL(d.images.background, true)) {
	          styles += ".room-background { background-image: " + url + " !important; }\n\n.torch { display: none !important; }\n";
	        }
	        if ((typeof roomLoader != 'undefined' && roomLoader !== null) && (typeof Layout != 'undefined' && Layout !== null) && (playbackURL = isURL(d.images.playback))) {
	          x$ = new Image;
	          x$.onload = function(){
	            if (this$.id === id) {
	              this$.hasPlaybackImage = true;
	              this$.$playbackBackground.attr('src', playbackURL);
	              replace(roomLoader, 'frameHeight', x$.height - 10);
	              replace(roomLoader, 'frameWidth', x$.width - 18);
	              roomLoader.onVideoResize(Layout.getSize());
	            }
	          };
	          x$.onerror = function(){
	            console.error(getTime() + " [roomTheme] failed to load playback frame");
	          };
	          x$.src = playbackURL;
	          replace(roomLoader, 'src', playbackURL);
	        }
	        if (url = isURL(d.images.booth, true)) {
	          styles += "/* custom booth */\n#avatars-container::before {\n    background-image: " + url + ";\n}\n";
	        }
	        for (role in ref$ = d.images.icons) {
	          url = ref$[role];
	          if (url = isURL(url, true)) {
	            if (role === 'cohost') {
	              styles += ".from-cohost .icon-chat-host { /* cohost icon fix */\n    background-image: " + url + ";\n    background-position: 0 0;\n}\n";
	            }
	            styles += ".icon-chat-" + role + " {\n    background-image: " + url + ";\n    background-position: 0 0;\n}\n";
	          }
	        }
	      }
	      /*== text ==*/
	      if (d.text) {
	        for (key in ref$ = d.text.plugDJ) {
	          text = ref$[key];
	          base = Lang;
	          key = key.split('.');
	          endKey = key.pop();
	          for (i$ = 0, len$ = key.length; i$ < len$; ++i$) {
	            key = key[i$];
	            if (!(base = base[key])) {
	              break;
	            }
	          }
	          if (base) {
	            replace(base, endKey, text);
	          }
	        }
	      }
	      /*== emotes ==*/
	      if (typeof customEmoji != 'undefined' && customEmoji !== null) {
	        if (d.emotes) {
	          customEmoji.addEmoji(d.emotes);
	        }
	        if (d.autoEmotes) {
	          customEmoji.addAutoEmoji(d.emotes);
	        }
	      }
	      css('roomTheme', styles);
	      this$.styles = styles;
	    });
	    addListener(roomSettings, 'clearing', this.clear, this);
	  },
	  clear: function(resetBackground, skipDisables){
	    var i$, ref$, len$, ref1$, target, attr, style, url;
	    if (!skipDisables) {
	      for (i$ = 0, len$ = (ref$ = this._revertables.replacements).length; i$ < len$; ++i$) {
	        ref1$ = ref$[i$], target = ref1$[0], attr = ref1$[1];
	        target[attr] = target[attr + "_"];
	      }
	      for (style in this._revertables.css) {
	        p0neCSS.css(style, "/* disabled */");
	      }
	      for (url in this._revertables.loadedStyles) {
	        p0neCSS.unloadStyle(url);
	      }
	      this._revertables.replacements = [];
	      this._revertables.css = {};
	      this._revertables.loadedStyles = {};
	    }
	    if (this._data && (typeof customEmoji != 'undefined' && customEmoji !== null)) {
	      if (this._data.emotes) {
	        customEmoji.removeEmoji(Object.keys(this._data.emotes));
	      }
	      if (this._data.autoEmotes) {
	        customEmoji.removeAutoEmoji(Object.keys(this._data.autoEmotes));
	      }
	    }
	    this.currentRoom = null;
	    if (resetBackground && this.$playbackBackground) {
	      this.$playbackBackground.one('load', function(){
	        if (typeof Layout != 'undefined' && Layout !== null) {
	          if (typeof roomLoader != 'undefined' && roomLoader !== null) {
	            roomLoader.onVideoResize(Layout.getSize());
	          }
	        }
	      }).attr('src', this.playbackBackgroundVanilla);
	    }
	  },
	  disable: function(){
	    this.clear(true, true);
	    this._data = {};
	  }
	});
	function bind$(obj, key, target){
	  return function(){ return (target || obj)[key].apply(obj, arguments) };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/**
	 * Settings pane for plug_p0ne
	 *
	 * @author jtbrinkmann aka. Brinkie Pie
	 * @license MIT License
	 * @copyright (c) 2015 J.-T. Brinkmann
	 */
	console.log("~~~~~~~ p0ne.settings ~~~~~~~");
	/*####################################
	#              SETTINGS              #
	####################################*/
	/* The p0ne Settings has 4 different, independend states which determin the layout of it
	 * 1. open/closed (`p0neSettings._settings.open`, can be `true` or `false`)
	 * 2. large/compact (`p0neSettings._settings.large`, can be `true` or `false`)
	 * 3. advanced level (`p0neSettings._settings.advanced`, can `0` (simple), `1` (advanced) or `2` (programmer))
	 * 4. searching (not stored in _settings)
	 *
	 * this adds `m._$settings` and potentially `m._$settingsPanel` to modules (`m`) which have `m._settings` and/or `m._settingsPanel` (respectively)
	 * modules may access these two attributes (e.g. for UI changes), but are discouraged from overwriting/deleting them.
	 */
module('p0neSettings', {
_settings: {
open: false,
openGroup: '',
advanced: 2,
large: false
	  },
	  setup: function(arg$, p0neSettings, oldModule){
	    var $create, addListener, $ppM, $ppI, $ppW, $ppS, $ppP, $ppHeader, $ppSearch, $ppExpandBtn, configBtnTimeout, modesSelection, i$, ref$, module, ref1$, helpClicked, panelIconTimeout, this$ = this;
	    $create = arg$.$create, addListener = arg$.addListener;
	    $ppM = this.$ppM = $create("<div id=p0ne-menu>").insertAfter('#app-menu');
	    $ppI = this.$ppI = $("<div class=p0ne-icon></div>").appendTo($ppM);
	    $ppW = this.$ppW = $("<div class=p0ne-settings-wrapper>").appendTo($ppM);
	    $ppS = this.$ppS = $("<div class='p0ne-settings noselect'>").appendTo($ppW);
	    $ppP = this.$ppP = $("<div class=p0ne-settings-popup>").appendTo($ppM).hide();
	    $ppHeader = $("<div class=p0ne-settings-header><i class='icon icon-filter'></i></div>").appendTo($ppS);
	    $ppSearch = $("<input class='p0ne-settings-search p0ne-settings-input' placeholder='search' />").appendTo($ppHeader);
	    this.$ppSearch = $ppSearch;
	    $ppExpandBtn = $("<div class='p0ne-settings-expand-btn icon icon-p0ne-enlarge'></div>").appendTo($ppHeader);
	    this.$hasNoSearchResult = $("<div>no matching module found</div>").hide().appendTo($ppS);
	    modesSelection = false;
	    this.$ppFooter = $("<div class=p0ne-settings-footer><div class=p0ne-icon></div><div class=p0ne-settings-version>v" + p0ne.version + "</div><i class='p0ne-settings-config-btn icon icon-p0ne-settings'></i><div class=p0ne-settings-help-btn>help</div><div class=p0ne-settings-modes><span class=p0ne-settings-mode data-mode=0>simple</span><span class=p0ne-settings-mode data-mode=1>advanced</span><span class=p0ne-settings-mode data-mode=2>programmer</span></div></div>").appendTo($ppS);
	    for (i$ in ref$ = p0ne.modules) {
	      module = ref$[i$];
	      if (!module.loading) {
	        this.addModule(module);
	        if ((ref1$ = module._$settingsPanel) != null) {
	          ref1$.wrapper.appendTo($ppM);
	        }
	        if (!module.disabled) {
	          this.loadSettingsExtra(true, module);
	        }
	      }
	    }
	    this.toggleAdvanced(this._settings.advanced);
	    if (this._settings.large) {
	      this.toggleLarge(true);
	    }
	    if (this._settings.open) {
	      this.toggleMenu(true);
	    }
	    $ppI.on('click', bind$(this, 'toggleMenu'));
	    this.$ppFooter.on('click', '.p0ne-settings-help-btn', function(){
	      var ref$;
	      if ((ref$ = p0ne.modules.p0neHelp) != null) {
	        ref$.walkthrough();
	      }
	    }).on('click', '.p0ne-settings-mode', function(){
	      p0neSettings.toggleAdvanced(+this.dataset.mode);
	    }).on('click', '.p0ne-settings-config-btn', function(){
	      var this$ = this;
	      modesSelection = !modesSelection;
	      $(this).toggleClass('active', modesSelection);
	      p0neSettings.$ppFooter.toggleClass('p0ne-settings-modes-selection', modesSelection);
	      if (modesSelection) {
	        configBtnTimeout = sleep(1 .min, function(){
	          modesSelection = false;
	          p0neSettings.$ppFooter.removeClass('p0ne-settings-modes-selection');
	          $(this$).removeClass('active');
	        });
	      } else {
	        clearTimeout(configBtnTimeout);
	      }
	    });
	    $ppExpandBtn.on('click', bind$(this, 'toggleLarge'));
	    $ppW.on('click', '.p0ne-settings-summary', throttle(200, function(e){
	      var group;
	      if (!p0neSettings.searching) {
	        group = $(this).parent().data('group');
	        if (p0neSettings._settings.openGroup !== group) {
	          p0neSettings.openGroup(group);
	        } else if (!p0neSettings._settings.large) {
	          p0neSettings.closeGroup(group);
	        }
	        e.preventDefault();
	      }
	    }));
	    $ppW.on('click', '.checkbox', throttle(200, function(e){
	      var $this, enable, $el, module;
	      $this = $(this);
	      enable = this.checked;
	      $el = $this.closest('.p0ne-settings-item');
	      module = $el.data('module');
	      if (helpClicked) {
	        this.checked = !module.disabled;
	      } else {
	        if (typeof module === 'string') {
	          module = window[module] || {};
	        }
	        if (enable) {
	          module.enable();
	        } else {
	          module.disable();
	        }
	      }
	    }));
	    panelIconTimeout = 0;
	    $ppW.on('click', '.p0ne-settings-panel-icon', function(e){
	      var $this, module;
	      e.stopImmediatePropagation();
	      e.preventDefault();
	      if (panelIconTimeout) {
	        return;
	      }
	      panelIconTimeout = sleep(200, function(){
	        return panelIconTimeout = 0;
	      });
	      $this = $(this);
	      module = $this.closest('.p0ne-settings-item').data('module');
	      if (!module._$settingsPanel) {
	        if (module.disabled) {
	          module.enable();
	        }
	        if (module.disabled) {
	          return;
	        }
	        module._$settingsPanel = {
	          open: false,
	          wrapper: $('<div class=p0ne-settings-panel-wrapper>').appendTo($ppM),
	          $el: $("<div class='p0ne-settings-panel p0ne-settings-panel-" + module.moduleName.toLowerCase() + "'>")
	        };
	        module._$settingsPanel.$el.appendTo(module._$settingsPanel.wrapper);
	        module.settingsPanel(module._$settingsPanel.$el, module);
	      }
	      if (module._$settingsPanel.open) {
	        p0neSettings.closeSettingsPanel();
	      } else {
	        p0neSettings.openSettingsPanel(module);
	      }
	    });
	    $ppW.on('mouseover', '.p0ne-settings-has-more, .p0ne-settings-extra', function(e){
	      var module;
	      if (!p0neSettings.currSettingsPanelModule && (p0neSettings._settings.large || $(e.target).hasClass('p0ne-settings-help'))) {
	        module = $(this).data('module');
	        if (module.help || module.screenshot) {
	          p0neSettings.showHelp(module);
	        }
	      }
	    });
	    $ppW.on('click', '.p0ne-settings-help', function(e){
	      var left;
	      e.stopImmediatePropagation();
	      helpClicked = true;
	      _.defer(function(){
	        helpClicked = false;
	      });
	      if (p0neSettings.currSettingsPanelModule) {
	        p0neSettings.closeSettingsPanel();
	        p0neSettings.showHelp($(this).closest('.p0ne-settings-item, .p0ne-settings-extra').data('module'));
	      } else {
	        if (p0neSettings._settings.large) {
	          $ppP.animate({
	            marginTop: 20
	          }, {
	            duration: 100,
	            easing: 'easeOutSine'
	          }).animate({
	            marginTop: 0
	          }, {
	            duration: 800,
	            easing: 'easeOutBounce'
	          });
	        } else {
	          left = parseInt($ppP.css('left'));
	          $ppP.animate({
	            left: left + 20
	          }, {
	            duration: 100,
	            easing: 'easeOutSine'
	          }).animate({
	            left: left
	          }, {
	            duration: 800,
	            easing: 'easeOutBounce'
	          });
	        }
	      }
	    });
	    $ppM.on('mouseout', '.p0ne-settings-has-more, .p0ne-settings-popup', function(){
	      if (p0neSettings._settings.large) {
	        $ppP.hide();
	      } else {
	        $ppP.stop().fadeOut();
	      }
	    });
	    $ppP.on('mouseover', function(){
	      if (p0neSettings._settings.large) {
	        $ppP.show();
	      } else {
	        $ppP.stop().fadeIn();
	      }
	    });
	    addListener(API, 'p0ne:moduleLoaded', function(module){
	      this$.addModule(module);
	    });
	    addListener(API, 'p0ne:moduleEnabled', function(module, isUpdate){
	      var ref$;
	      if ((ref$ = module._$settings) != null) {
	        ref$.addClass('p0ne-settings-item-enabled').find('.checkbox')[0].checked = true;
	      }
	      this$.loadSettingsExtra(true, module);
	    });
	    addListener(API, 'p0ne:moduleUpdated', function(module, module_){
	      var ref$, ref1$, ref2$;
	      if ((ref$ = module_._$settingsExtra) != null) {
	        ref$.remove();
	      }
	      if ((ref1$ = module_._$settingsPanel) != null) {
	        ref1$.wrapper.remove();
	      }
	      delete module_._$settingsPanel;
	      if (module.settings) {
	        this$.addModule(module, module_);
	      }
	      if ((ref2$ = module_._$settings) != null) {
	        ref2$.remove();
	      }
	      /* # i think this is a highly neglectable edge case
	      if module.help != module_.help and module._$settings?.is \:hover
	          # force update .p0ne-settings-popup (which displays the module.help)
	          module._$settings .mouseover!*/
	    });
	    addListener(API, 'p0ne:moduleDisabled', function(module_){
	      var ref$, ref1$;
	      if (module_._$settings) {
	        module_._$settings.removeClass('p0ne-settings-item-enabled').find('.checkbox:first').attr('checked', false);
	        if ((ref$ = module_._$settingsExtra) != null) {
	          ref$.stop().slideUp(function(){
	            $(this).remove();
	          });
	        }
	        if ((ref1$ = module_._$settingsPanel) != null) {
	          ref1$.wrapper.remove();
	        }
	        delete module_._$settingsPanel;
	      }
	    });
	    addListener($body, 'click', '#app-menu', function(){
	      this$.toggleMenu(false);
	    });
	    if (typeof _$context != 'undefined' && _$context !== null) {
	      addListener(_$context, 'show:user show:history show:dashboard dashboard:disable', function(){
	        this$.toggleMenu(false);
	      });
	    }
	    $ppSearch.on('input', function(){
	      p0neSettings.search(this.value.toUpperCase().trim());
	    });
	    addListener($body, 'click', '#plugcubed', function(){
	      this$.toggleMenu(false);
	    });
	    _.defer(function(){
	      var d, scrollLeftMax;
	      d = $('<div>').css({
	        height: 100,
	        width: 100,
	        overflow: 'auto'
	      }).append($('<div>').css({
	        height: 102,
	        width: 100
	      })).appendTo('body');
	      if ('scrollLeftMax' in d[0]) {
	        scrollLeftMax = d[0].scrollLeftMax;
	      } else {
	        d[0].scrollLeft = Number.POSITIVE_INFINITY;
	        scrollLeftMax = d[0].scrollLeft;
	      }
	      if (scrollLeftMax !== 0) {
	        $ppW.css({
	          'padding-right': scrollLeftMax
	        });
	      }
	      d.remove();
	    });
	  },
	  toggleMenu: function(state){
	    if (typeof state !== 'boolean') {
	      state = !this._settings.open;
	    }
	    if (state) {
	      if (this._settings.large) {
	        hidePanels();
	      }
	      this.$ppW.addClass('open');
	    } else {
	      if (this.searching) {
	        this.search(false);
	        this.$ppSearch.val("");
	      }
	      this.closeSettingsPanel();
	      this.$ppW.removeClass('open');
	    }
	    this._settings.open = state;
	    this.saveSettings();
	    return state;
	  },
	  toggleAdvanced: function(mode){
	    this.$ppW.toggleClass('p0ne-settings-expert', !!mode);
	    this.$ppFooter.find(".p0ne-settings-mode[data-mode=" + mode + "]").addClass('active').siblings().removeClass('active');
	    this._settings.advanced = mode;
	    this.saveSettings();
	    return mode;
	  },
	  toggleLarge: function(state){
	    if (typeof state !== 'boolean') {
	      state = !this._settings.large;
	    }
	    if (state) {
	      this.$ppM.addClass('p0ne-settings-large');
	      this.$ppP.appendTo(this.$ppW);
	      if (!this._settings.openGroup) {
	        p0neSettings.openGroup('base');
	      }
	    } else {
	      this.$ppM.removeClass('p0ne-settings-large');
	      this.$ppP.appendTo(this.$ppM);
	    }
	    this._settings.large = state;
	    this.saveSettings();
	    return state;
	  },
	  search: function(query){
	    var i$, ref$, group, hasMatch, m, groupName;
	    if (query) {
	      if (!this.searching) {
	        this.searching = true;
	        this.$ppW.addClass('p0ne-settings-searching');
	        for (i$ in ref$ = this.groups) {
	          group = ref$[i$];
	          group.removeClass('closed');
	        }
	      }
	      hasMatch = false;
	      for (i$ in ref$ = p0ne.modules) {
	        m = ref$[i$];
	        if ('_$settings' in m) {
	          if (m.displayName.toUpperCase().has(query)) {
	            m._$settings.css({
	              display: 'block'
	            });
	            hasMatch = true;
	          } else {
	            m._$settings.css({
	              display: 'none'
	            });
	          }
	        }
	      }
	      if (hasMatch) {
	        p0neSettings.$hasNoSearchResult.hide();
	      } else {
	        p0neSettings.$hasNoSearchResult.show();
	      }
	    } else {
	      this.searching = false;
	      for (i$ in ref$ = p0ne.modules) {
	        m = ref$[i$];
	        if (m.settings) {
	          m._$settings.css({
	            display: ''
	          });
	        }
	      }
	      for (groupName in this.groups) {
	        if (groupName !== this._settings.openGroup) {
	          this.groups[groupName].addClass('closed');
	        }
	      }
	      this.$ppW.removeClass('p0ne-settings-searching');
	    }
	  },
	  openSettingsPanel: function(module){
	    var offsetLeft;
	    this.closeSettingsPanel();
	    this.$ppP.fadeOut();
	    offsetLeft = this.$ppW.width();
	    this.currSettingsPanelModule = module;
	    module._$settingsPanel.wrapper.show().css({
	      left: offsetLeft - module._$settingsPanel.$el.width()
	    }).animate({
	      left: offsetLeft
	    });
	    module._$settingsPanel.open = true;
	    module._$settings.find('.icon-p0ne-settings').addClass('active');
	  },
	  closeSettingsPanel: function(){
	    var module, offsetLeft;
	    if (module = this.currSettingsPanelModule) {
	      offsetLeft = this.$ppW.width();
	      if (this._settings.large) {
	        module._$settingsPanel.wrapper.hide();
	      } else {
	        module._$settingsPanel.wrapper.animate({
	          left: offsetLeft - module._$settingsPanel.$el.width()
	        }, function(){
	          return module._$settingsPanel.wrapper.hide();
	        });
	      }
	      delete module._$settingsPanel.open;
	      delete this.currSettingsPanelModule;
	      module._$settings.find('.icon-p0ne-settings').removeClass('active');
	    }
	  },
	  showHelp: function(module){
	    var l, maxT, h, t, tt, ref$, diff;
	    this.closeSettingsPanel();
	    this.$ppP.html("<div class=p0ne-settings-popup-triangle></div><h3>" + module.displayName + "</h3>" + (module.help || '') + "" + (!module.screenshot
	      ? ''
	      : '<img src=' + module.screenshot + '>') + "");
	    l = this.$ppW.width();
	    maxT = this.$ppM.height();
	    h = this.$ppP.height();
	    t = module._$settings.offset().top - 50;
	    tt = (ref$ = t - h / 2) > 0 ? ref$ : 0;
	    diff = tt - (maxT - h - 30);
	    if (diff > 0) {
	      t += diff + 10 - tt;
	      tt -= diff;
	    } else if (tt !== 0) {
	      t = '50%';
	    }
	    this.$ppP.css({
	      top: tt,
	      left: l
	    });
	    if (p0neSettings._settings.large) {
	      this.$ppP.show();
	    } else {
	      this.$ppP.stop().fadeIn();
	    }
	    this.$ppP.find('.p0ne-settings-popup-triangle').css({
	      top: 14 > t ? 14 : t
	    });
	  },
	  groups: {},
	  groupEmpty: {},
	  moderationGroup: $(),
	  openGroup: function(group){
	    var $s, this$ = this;
	    if (this._settings.openGroup) {
	      this.closeGroup(this._settings.openGroup);
	    }
	    this._settings.openGroup = group;
	    $s = this.groups[group].removeClass('closed').addClass('open');
	    if (this._settings.large) {
	      $s.css({
	        height: 'auto'
	      });
	    } else {
	      requestAnimationFrame(function(){
	        $s.css({
	          height: $s[0].scrollHeight
	        });
	        sleep(500, function(){
	          if (this$._settings.openGroup === group) {
	            $s.css({
	              height: 'auto'
	            });
	          }
	        });
	      });
	    }
	    this.saveSettings();
	  },
	  closeGroup: function(group){
	    var $s, this$ = this;
	    this._settings.openGroup = false;
	    $s = this.groups[group].removeClass('open');
	    if (this._settings.large) {
	      $s.css({
	        height: 20
	      }).addClass('closed');
	    } else {
	      $s.css({
	        height: $s[0].scrollHeight
	      });
	      requestAnimationFrame(function(){
	        $s.css({
	          height: 30
	        });
	        sleep(500, function(){
	          if (this$._settings.openGroup !== group) {
	            $s.addClass('closed');
	          }
	        });
	      });
	    }
	    this.saveSettings();
	  },
	  addModule: function(module, module_){
	    var itemClasses, icons, i$, ref$, len$, k, $s;
	    if (module.settings) {
	      itemClasses = 'p0ne-settings-item';
	      icons = "";
	      for (i$ = 0, len$ = (ref$ = ['help', 'screenshot']).length; i$ < len$; ++i$) {
	        k = ref$[i$];
	        if (module[k]) {
	          icons += "<div class=p0ne-settings-" + k + "></div>";
	        }
	      }
	      if (module.settingsPanel) {
	        icons += "<div class=p0ne-settings-panel-icon><i class='icon icon-p0ne-settings'></i></div>";
	      }
	      if (icons.length) {
	        icons = "<div class=p0ne-settings-icons>" + icons + "</div>";
	        itemClasses += ' p0ne-settings-has-more';
	      }
	      if (module.settingsExtra) {
	        itemClasses += ' p0ne-settings-has-extra';
	      }
	      if (!module.disabled) {
	        itemClasses += ' p0ne-settings-item-enabled';
	      }
	      if (!module.settingsSimple) {
	        itemClasses += ' p0ne-settings-item-expert';
	      }
	      if (!($s = this.groups[module.settings])) {
	        $s = this.groups[module.settings] = $('<div class=p0ne-settings-group>').data('group', module.settings).append($('<div class=p0ne-settings-summary>').text(module.settings)).insertBefore(this.$ppFooter);
	        $s.items = $('<div class=p0ne-settings-items>').appendTo($s);
	        if (module.settings === 'moderation') {
	          $s.addClass('p0ne-settings-group-moderation');
	        }
	        if (this._settings.openGroup === module.settings) {
	          this.openGroup(module.settings);
	        } else {
	          $s.addClass('closed').css({
	            height: 30
	          });
	        }
	      }
	      if (!this.groupEmpty[module.settings] && (this.groupEmpty[module.settings] = module.settingsSimple)) {
	        $s.addClass('p0ne-settings-has-simple');
	      }
	      module._$settings = $("<label class='" + itemClasses + "'><input type=checkbox class=checkbox " + (module.disabled ? '' : 'checked') + " /><div class=togglebox></div>" + module.displayName + "" + icons + "</label>").data('module', module);
	      if (module_ != null && ((ref$ = module_._$settings) != null && ref$.parent().parent().is($s))) {
	        module._$settings.addClass('updated').insertAfter(module_._$settings);
	        sleep(2000, function(){
	          module._$settings.removeClass('updated');
	        });
	      } else {
	        module._$settings.appendTo($s.items);
	      }
	    }
	  },
	  loadSettingsExtra: function(autofocus, module){
	    var $group, err, ref$;
	    try {
	      if (module._$settingsExtra) {
	        module._$settingsExtra.stop().remove();
	      }
	      if (module.settingsExtra) {
	        module.settingsExtra(module._$settingsExtra = $("<div class=p0ne-settings-extra>").data('module', module).insertAfter(module._$settings));
	        $group = this.groups[module.settings];
	        if (autofocus && this._settings.openGroup === module.settings) {
	          module._$settingsExtra.css({
	            height: 0
	          });
	          requestAnimationFrame(function(){
	            module._$settingsExtra.css({
	              height: module._$settingsExtra[0].scrollHeight
	            });
	            sleep(250, function(){
	              module._$settingsExtra.css({
	                height: 'auto'
	              });
	            });
	          });
	          module._$settingsExtra.find('input').focus();
	        }
	      }
	    } catch (e$) {
	      err = e$;
	      console.error("[" + module.moduleName + "] error while processing settingsExtra", err.stack);
	      if ((ref$ = module._$settingsExtra) != null) {
	        ref$.remove();
	      }
	    }
	  },
	  disable: function(){
	    this.closeSettingsPanel();
	  }
	});
	function bind$(obj, key, target){
	  return function(){ return (target || obj)[key].apply(obj, arguments) };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/**
	 * propagate Socket Events to the API Event Emitter for custom event listeners
	 *
	 * @author jtbrinkmann aka. Brinkie Pie
	 * @license MIT License
	 * @copyright (c) 2015 J.-T. Brinkmann
	 * improved with help from @reanna
	 */
	console.log("~~~~~~~ p0ne.socket ~~~~~~~");
	/*####################################
	#          SOCKET LISTENERS          #
	####################################*/
	module('socketListeners', {
	  require: ['socketEvents', 'chatAuxiliaries'],
	  optional: ['_$context', 'auxiliaries'],
	  setup: function(arg$, socketListeners){
	    var addListener, replace, wrap, revert, socket, onRoomJoinQueue2, patchedSend, syncPatchSocket, s, ref$, ref1$, this$ = this;
	    addListener = arg$.addListener, replace = arg$.replace, wrap = arg$.wrap, revert = arg$.revert;
	    onRoomJoinQueue2 = [];
	    if (typeof _$context != 'undefined' && _$context !== null) {
	      addListener(_$context, 'room:joined', function(){
	        forEach(onRoomJoinQueue2);
	        onRoomJoinQueue2 = [];
	      });
	    }
	    wrap(WebSocket.prototype, 'send', function(send_){
	      return patchedSend = function(data){
	        var hostname;
	        send_.call(this, data);
	        if (this !== socket && this.url.has('plug.dj')) {
	          hostname = parseURL(this.url).hostname;
	          if (hostname === 'plug.dj' || hostname.endsWith('.plug.dj')) {
	            patchSocket(this);
	          }
	        }
	      };
	    });
	    syncPatchSocket = function(){
	      var isMuted;
	      replace(room.attributes, 'minChatLevel', 0);
	      replace(room.attributes, 'joined', true);
	      replace(user_.attributes, 'guest', false);
	      replace(user_.attributes, 'level', 99);
	      replace(Math, 'max', function(){
	        return 0;
	      });
	      isMuted = chatAuxiliaries.mutes[userID];
	      if (isMuted) {
	        delete chatAuxiliaries.mutes[userID];
	      }
	      WebSocket.prototype.send = function(){
	        if (this.url.has('plug.dj') && parseURL(this.url).hostname.endsWith('.plug.dj')) {
	          patchSocket(this);
	        }
	      };
	      chatAuxiliaries.sendChat('');
	      WebSocket.prototype.send = patchedSend;
	      revert(room.attributes, 'minChatLevel');
	      revert(room.attributes, 'joined');
	      revert(user_.attributes, 'guest');
	      revert(user_.attributes, 'level');
	      revert(Math, 'max');
	      if (isMuted) {
	        chatAuxiliaries.mutes[userID] = isMuted;
	      }
	    };
	    if (typeof _$context != 'undefined' && _$context !== null) {
	      addListener(_$context, 'ws:reconnected', syncPatchSocket);
	    }
	    /*@hoofcheck = repeat 1.min, !~>
	        if Date.now! > @lastHandshake + 2.min
	            console.warn "the socket seems to have silently disconnected, trying to reconnect. last message", ago(@lastHandshake)
	            #reconnectSocket!
	    */
	    if ((s = (ref$ = window.rcs) != null ? (ref1$ = ref$.plugSock) != null ? ref1$.sock : void 8 : void 8) && s.readyState === 1) {
	      patchSocket(s);
	    } else {
	      syncPatchSocket();
	    }
	    this.patchSocket = function(s){
	      if (s instanceof WebSocket) {
	        patchSocket(s);
	      } else if (socket !== window.socket && socket.readyState === 1) {
	        return replace(window, 'socket', socket);
	      } else {
	        syncPatchSocket();
	      }
	      return socket;
	    };
	    function emit(type, data, n){
	      /* this function wraps `socket.send`
	       * the `n` parameter seems to be completely unused
	       */
	      socket.send(JSON.stringify({
	        a: type,
	        p: data,
	        t: typeof auxiliaries != 'undefined' && auxiliaries !== null ? auxiliaries.getServerEpoch() : void 8,
	        d: n
	      }));
	    }
	    function patchSocket(s){
	      window.socket = socket = s;
	      replace(s, 'onmessage', patchedOnMessage);
	      replace(s, 'emit', emit);
	      if (typeof _$context != 'undefined' && _$context !== null) {
	        _$context.trigger('p0ne:socket:patched', s);
	      }
	      API.trigger('p0ne:socket:patched', s);
	    }
	    function patchedOnMessage(t){
	      var data;
	      this$.lastHandshake = Date.now();
	      if (t.data === 'h') {
	        return;
	      }
	      if (typeof t.data === 'string') {
	        data = JSON.parse(t.data);
	      } else {
	        data = t.data || [];
	      }
	      forEach(data);
	    }
	    function forEach(data){
	      var roomJoined, i$, len$, el, ref$, err;
	      roomJoined = room.get('joined');
	      for (i$ = 0, len$ = data.length; i$ < len$; ++i$) {
	        el = data[i$];
	        if (!((ref$ = data[0]) != null && ref$.a)) {
	          console.warn("[SOCKET:WARNING] socket message format changed", t);
	        }
	        if (typeof _$context != 'undefined' && _$context !== null) {
	          _$context.trigger("p0ne:socket:" + el.a, el.p, el);
	        }
	        if (el.s !== 'dashboard' && !roomJoined) {
	          onRoomJoinQueue2[onRoomJoinQueue2.length] = el;
	        }
	        if (socketEvents[el.a]) {
	          try {
	            socketEvents[el.a](el.p);
	          } catch (e$) {
	            err = e$;
	            console.error(getTime() + " [Socket] failed triggering '" + el.a + "'", err.messageAndStack);
	          }
	        } else {
	          console.error(getTime() + " [Socket] unknown event type '" + el.a + "'");
	        }
	        API.trigger("p0ne:socket:" + el.a, el.p, el);
	      }
	    }
	  },
	  disable: function(){
	    clearInterval(this.hoofcheck);
	  }
	});
	/*####################################
	#          RECONNECT  EVENT          #
	####################################*/
	module('socketReconnectEvent', {
	  require: ['_$context'],
	  setup: function(arg$){
	    /*note: consider listening for p0ne:socket:patched instead, if you need access to the socket object */
	    var addListener;
	    addListener = arg$.addListener;
	    addListener(_$context, 'ws:reconnected', function(){
	      _$context.trigger('p0ne:socket:reconnected');
	      API.trigger('p0ne:socket:reconnected');
	    });
	  }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/**
	 * plug_p0ne songInfo
	 * adds a dropdown with the currently playing song's description when clicking on the now-playing-bar (in the top-center of the page)
	 *
	 * @author jtbrinkmann aka. Brinkie Pie
	 * @license MIT License
	 * @copyright (c) 2015 J.-T. Brinkmann
	 */
	console.log("~~~~~~~ p0ne.song-info ~~~~~~~");
	/*####################################
	#              SONG INFO             #
	####################################*/
	module('songInfo', {
	  optional: ['_$context']
	  /*settings: \base
	  displayName: 'Song-Info Dropdown'
	  help: '''
	      A panel with the song's description and links to the artist and song.
	      Click on the now-playing-bar (in the top-center of the page) to open it.
	  '''*/,
	  setup: function(arg$){
	    var addListener, $create, css, this$ = this;
	    addListener = arg$.addListener, $create = arg$.$create, css = arg$.css;
	    this.$create = $create;
	    css('songInfo', '#now-playing-bar {cursor: pointer;}');
	    this.$el = $create('<div>').addClass('p0ne-song-info').appendTo('body');
	    this.loadBind = bind$(this, 'load');
	    addListener($('#now-playing-bar'), 'click', function(e){
	      var $target, media;
	      $target = $(e.target);
	      if ($target.closest('#history-button').length || $target.closest('#volume').length) {
	        return;
	      }
	      if (!this$.visible) {
	        media = API.getMedia();
	        if (!media) {
	          this$.$el.html("Cannot load information if No song playing!");
	        } else if (this$.lastMediaID === media.id) {
	          API.once('advance', this$.loadBind);
	        } else {
	          this$.$el.html("loading…");
	          this$.load({
	            media: media
	          });
	        }
	        this$.$el.addClass('expanded');
	      } else {
	        this$.$el.removeClass('expanded');
	        API.off('advance', this$.loadBind);
	      }
	      this$.visible = !this$.visible;
	    });
	    if (!_$context) {
	      return;
	    }
	    addListener(_$context, 'show:user show:history show:dashboard dashboard:disable', function(){
	      if (this$.visible) {
	        this$.visible = false;
	        this$.$el.removeClass('expanded');
	        API.off('advance', this$.loadBind);
	      }
	    });
	  },
	  load: function(arg$, isRetry){
	    var media, this$ = this;
	    media = arg$.media;
	    if (this.lastMediaID === media.id) {
	      this.showInfo(media);
	    } else {
	      this.lastMediaID = media.id;
	      this.mediaData = null;
	      mediaLookup(media, {
	        fail: function(err){
	          console.error("[song-info]", err);
	          if (isRetry) {
	            this$.$el.html("error loading, retrying…");
	            this$.lastMediaID = 0;
	            load({
	              media: media
	            }, true);
	          } else {
	            this$.$el.html("Couldn't load song info, sorry =(");
	          }
	        },
	        success: function(mediaData){
	          this$.mediaData = mediaData;
	          this$.showInfo(media);
	        }
	      });
	      API.once('advance', this.loadBind);
	    }
	  },
	  showInfo: function(media){
	    var d, $meta, $parts;
	    if (this.lastMediaID !== media.id || this.disabled) {
	      return;
	    }
	    d = this.mediaData;
	    this.$el.html("");
	    $meta = this.$create('<div>').addClass('p0ne-song-info-meta').appendTo(this.$el);
	    $parts = {};
	    if (media.format === 1) {
	      $meta.addClass('youtube');
	    } else {
	      $meta.addClass('soundcloud');
	    }
	    $('<span>').addClass('p0ne-song-info-author').appendTo($meta).click(function(){
	      mediaSearch(media.author);
	    }).attr('title', "search for '" + media.author + "'").text(media.author);
	    $('<span>').addClass('p0ne-song-info-title').appendTo($meta).click(function(){
	      mediaSearch(media.title);
	    }).attr('title', "search for '" + media.title + "'").text(media.title);
	    $('<br>').appendTo($meta);
	    $('<a>').addClass('p0ne-song-info-uploader').appendTo($meta).attr('href', d.uploader.url).attr('target', '_blank').attr('title', "open channel of '" + d.uploader.name + "'").text(d.uploader.name);
	    $('<a>').addClass('p0ne-song-info-upload-title').appendTo($meta).attr('href', d.url).attr('target', '_blank').attr('title', (media.format === 1 ? 'open video on YouTube' : 'open Song on SoundCloud') + "").text(d.title);
	    $('<br>').appendTo($meta);
	    $('<span>').addClass('p0ne-song-info-date').appendTo($meta).text(getDateTime(new Date(d.uploadDate)));
	    $('<span>').addClass('p0ne-song-info-duration').appendTo($meta).text("duration " + mediaTime(+d.duration));
	    if (media.format === 1 && d.restriction) {
	      if (d.restriction.allowed) {
	        $('<span>').addClass('p0ne-song-info-blocked').appendTo(this.$el).text("exclusively for " + humanList(d.restriction.allowed) + (d.restriction.allowed.length > 100 ? ' (' + d.restriction.allowed.length + '/249)' : ''));
	      }
	      if (d.restriction.blocked) {
	        $('<span>').addClass('p0ne-song-info-blocked').appendTo(this.$el).text("blocked in " + humanList(d.restriction.blocked) + (d.restriction.blocked.length > 100 ? ' (' + d.restriction.blocked.length + '/249)' : ''));
	      }
	    }
	    $('<div>').addClass('p0ne-song-info-description').appendTo(this.$el).html(formatPlainText(d.description));
	  },
	  disable: function(){
	    var ref$;
	    if ((ref$ = this.$el) != null) {
	      ref$.remove();
	    }
	  }
	});
	function bind$(obj, key, target){
	  return function(){ return (target || obj)[key].apply(obj, arguments) };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/**
	 * get fancy song notifications in the chat (with preview thumbnail, description, buttons, …)
	 *
	 * @author jtbrinkmann aka. Brinkie Pie
	 * @license MIT License
	 * @copyright (c) 2015 J.-T. Brinkmann
	 */
	console.log("~~~~~~~ p0ne.song-notif ~~~~~~~");
	/*####################################
	#             SONG NOTIF             #
	####################################*/
	module('songNotif', {
	  require: ['chatDomEvents'],
	  optional: ['_$context', 'chat', 'users', 'database', 'auxiliaries', 'app', 'popMenu'],
	  settings: 'base',
	  settingsSimple: true,
	  displayName: 'Song Notifications in Chat',
	  help: 'Shows notifications for playing songs in the chat.\nBesides the songs\' name, it also features a thumbnail and some extra buttons.\n\nBy clicking on the song\'s or author\'s name, a search on plug.dj for that name will be started, to easily find similar tracks.\n\nBy hovering the notification and clicking "description" the songs description will be loaded.\nYou can click anywhere on it to close it again.',
	  persistent: ['lastMedia', 'lastDJ', '$div'],
	  _settings: {
	    small: false
	  },
	  setup: function(arg$, arg1$, module_){
	    var addListener, $create, addCommand, css, that, $description, this$ = this;
	    addListener = arg$.addListener, $create = arg$.$create, this.$createPersistent = arg$.$createPersistent, addCommand = arg$.addCommand, css = arg$.css;
	    this.$lastNotif = $();
	    this.$div || (this.$div = get$cms().find('.p0ne-song-notif:last'));
	    addListener(API, 'advance', bind$(this, 'callback'));
	    if (_$context) {
	      addListener(_$context, 'room:joined', function(){
	        this$.callback({
	          media: API.getMedia(),
	          dj: API.getDJ(),
	          isRoomJoined: true
	        });
	      });
	    }
	    addListener(API, 'modSkip', function(modUsername){
	      var that, modID;
	      console.info("[API.modSkip]", modUsername);
	      if (that = getUser(modUsername)) {
	        modID = "data-uid='" + that.id + "'";
	      } else {
	        modID = "";
	      }
	      this$.$lastNotif.find('.timestamp').after($("<div class='song-skipped un' " + modID + ">").text(modUsername));
	    });
	    loadStyle(p0ne.host + "/css/p0ne.notif.css?v=" + p0ne.version);
	    if (that = !module_ && API.getMedia()) {
	      that.image = httpsify(that.image);
	      this.callback({
	        media: that,
	        dj: API.getDJ()
	      });
	    }
	    if (typeof popMenu != 'undefined' && popMenu !== null) {
	      addListener(chatDomEvents, 'click', '.song-add', function(){
	        var $el, $notif, id, cid, format, msgOffset, obj;
	        $el = $(this);
	        $notif = $el.closest('.p0ne-song-notif');
	        id = $notif.data('id');
	        cid = $notif.data('cid');
	        format = $notif.data('format');
	        console.log("[add from notif]", $notif, id, format, cid);
	        msgOffset = $notif.offset();
	        $el.offset = function(){
	          return {
	            left: msgOffset.left + 17,
	            top: msgOffset.top + 18
	          };
	        };
	        obj = {
	          id: id,
	          format: format,
	          cid: cid
	        };
	        obj.get = function(name){
	          return this[name];
	        };
	        obj.media = obj;
	        popMenu.isShowing = false;
	        popMenu.show($el, [obj]);
	      });
	    } else {
	      css('songNotificationsAdd', '.song-add {display:none}');
	    }
	    addListener(chatDomEvents, 'click', '.song-author', function(){
	      mediaSearch(this.textContent);
	    });
	    $description = $();
	    addListener(chatDomEvents, 'click', '.song-description-btn', function(e){
	      var $notif, cid, format, that;
	      try {
	        if ($description) {
	          hideDescription();
	        }
	        $description = $(this);
	        $notif = $description.closest('.p0ne-song-notif');
	        cid = $notif.data('cid');
	        format = $notif.data('format');
	        if (that = $description.data('description')) {
	          showDescription($notif, that);
	        } else {
	          mediaLookup({
	            cid: cid,
	            format: format
	          }, {
	            success: function(data){
	              var text;
	              text = formatPlainText(data.description);
	              $description.data('description', text);
	              showDescription($notif, text);
	            },
	            fail: function(){
	              $description.text("Failed to load").addClass('.song-description-failed');
	            }
	          }).timeout(200, function(){
	            $description.text("Description loading…").addClass('loading');
	          });
	        }
	      } catch (e$) {
	        e = e$;
	        console.error("[song-notif]", e);
	      }
	    });
	    addListener(chatDomEvents, 'click', '.song-description', function(e){
	      if (!e.target.href) {
	        hideDescription();
	      }
	    });
	    function showDescription($notif, text){
	      var h, $cm, ch, offsetTop, ref$;
	      $notif.addClass('song-notif-with-description').append($description.removeClass('song-description-btn loading').css({
	        opacity: 0,
	        position: 'absolute'
	      }).addClass('song-description').html(text + " <i class='icon icon-clear-input'></i>"));
	      h = $description.height();
	      $description.css({
	        height: '',
	        position: ''
	      }).animate({
	        opacity: 1,
	        height: h
	      }, function(){
	        $description.css({
	          height: 'auto'
	        });
	      });
	      $cm = get$cm();
	      ch = $cm.height();
	      offsetTop = ((ref$ = $notif.offset()) != null ? ref$.top : void 8) - 100;
	      if (offsetTop + h > ch) {
	        return $cm.animate({
	          scrollTop: $cm.scrollTop() + Math.min(offsetTop + h - ch + 100, offsetTop)
	        });
	      }
	    }
	    function hideDescription(){
	      var $notif, offsetTop, ref$, $cm;
	      if (!$description) {
	        return;
	      }
	      $notif = $description.closest('.p0ne-song-notif').removeClass('song-notif-with-description');
	      $description.animate({
	        opacity: 0,
	        height: 0
	      }, function(){
	        $(this).css({
	          opacity: '',
	          height: 'auto'
	        }).removeClass('song-description text').addClass('song-description-btn').text("Description").appendTo($notif.find('.song-notif-next'));
	      });
	      $description = null;
	      offsetTop = ((ref$ = $notif.offset()) != null ? ref$.top : void 8) - 100;
	      if (offsetTop < 0) {
	        $cm = get$cm();
	        return $cm.animate({
	          scrollTop: $cm.scrollTop() + offsetTop - 100
	        });
	      }
	    }
	    this.showDescription = showDescription;
	    this.hideDescription = hideDescription;
	    addCommand('songinfo', {
	      description: "forces a song notification to be shown, even if the module is disabled",
	      callback: function(){
	        var that, ref$;
	        if (that = ((ref$ = window.songNotif) != null ? ref$.callback : void 8) && API.getMedia()) {
	          that.image = httpsify(that.image);
	          window.songNotif.callback({
	            media: that,
	            dj: API.getDJ()
	          });
	        }
	      }
	    });
	  },
	  callback: function(d){
	    var media, score, ref$, html, author, title, mediaURL, image, duration, this$ = this;
	    media = d.media;
	    if (media && d.historyID && d.historyID === this.lastHistoryID || media && d.isRoomJoined && this.lastMedia === media.id && this.lastDJ === d.dj.id) {
	      return;
	    } else if (this.$div && (score = (ref$ = d.lastPlay) != null ? ref$.score : void 8)) {
	      /*@security HTML injection shouldn't be an issue, unless the score attributes are oddly manipulated */
	      this.$div.removeClass('song-current').find('.song-stats').html("<div class=score><div class='item positive'><i class='icon icon-history-positive'></i> " + score.positive + "</div><div class='item grabs'><i class='icon icon-history-grabs'></i> " + score.grabs + "</div><div class='item negative'><i class='icon icon-history-negative'></i> " + score.negative + "</div><div class='item listeners'><i class='icon icon-history-listeners'></i> " + ((typeof users != 'undefined' && users !== null ? users.length : void 8) || API.getUsers().length) + "</div></div>");
	      this.$lastNotif = this.$div;
	    }
	    if (!media) {
	      this.lastMedia = null;
	      return;
	    }
	    this.lastMedia = media.id;
	    this.lastDJ = d.dj.id;
	    if (typeof chat != 'undefined' && chat !== null) {
	      chat.lastType = 'p0ne-song-notif';
	    }
	    this.$div = this.$createPersistent("<div class='update p0ne-song-notif song-current' data-id='" + media.id + "' data-cid='" + media.cid + "' data-format='" + media.format + "'>");
	    html = "";
	    author = htmlUnescape(media.author);
	    title = htmlUnescape(media.title);
	    if (media.format === 1) {
	      mediaURL = "http://youtube.com/watch?v=" + media.cid;
	    } else {
	      mediaURL = "https://soundcloud.com/search?q=" + encodeURIComponent(author + ' - ' + title);
	    }
	    image = httpsify(media.image);
	    duration = mediaTime(media.duration);
	    html += "<div class='song-thumb-wrapper'><img class='song-thumb' src='" + image + "' /><span class='song-duration'>" + duration + "</span><div class='song-add btn'><i class='icon icon-add'></i></div><a class='song-open btn' href='" + mediaURL + "' target='_blank'><i class='icon icon-chat-popout'></i></a><!-- <div class='song-download btn right'><i class='icon icon-###'></i></div> --></div>" + getTimestamp() + "<div class='song-stats'></div><div class='song-dj'></div><b class='song-title'></b><span class='song-author'></span><div class='song-description-btn'>Description</div>";
	    this.$div.html(html);
	    this.$div.find('.song-title').text(title).prop('title', title);
	    this.$div.find('.song-author').text(author);
	    this.$div.find('.song-dj').html(formatUserHTML(d.dj, true, {
	      flag: true
	    }));
	    appendChat(this.$div);
	    if (media.format === 2) {
	      this.$div.addClass('loading');
	      mediaLookup(media).then(function(d){
	        var that;
	        this$.$div.removeClass('loading').data('description', d.description).find('.song-open').attr('href', d.url);
	        if (d.download) {
	          this$.$div.addClass('downloadable').find('.song-download').attr('href', d.download).attr('title', formatMB(d.downloadSize / 1000000) + " " + ((that = d.downloadFormat) ? '(.' + that + ')' : ''));
	        }
	      });
	    }
	  },
	  settingsExtra: function($el){
	    var songNotif;
	    songNotif = this;
	    $("<form><label><input type=checkbox " + (this._settings.small ? 'checked' : '') + "> Small notifications</label></form>").appendTo($el.css({
	      paddingLeft: 15
	    })).on('click', 'input', function(){
	      var isAtBottom, $cm, cm, scrollTop, scrollHeight;
	      isAtBottom = chatIsAtBottom();
	      if (!isAtBottom) {
	        $cm = get$cm();
	        cm = $cm[0];
	        scrollTop = cm.scrollTop;
	        scrollHeight = cm.scrollHeight + $cm.height();
	      }
	      songNotif._settings.small = this.checked;
	      songNotif.saveSettings();
	      $body.toggleClass('p0ne-song-notif-small', this.checked);
	      if (isAtBottom) {
	        chatScrollDown();
	      } else {
	        cm.scrollTop = scrollTop / scrollHeight * cm.scrollHeight;
	      }
	    });
	  },
	  disable: function(){
	    if (typeof this.hideDescription == 'function') {
	      this.hideDescription();
	    }
	  }
	});
	window.Notification || (window.Notification = window.webkitNotification);
	module('songNotifPopup', {
	  displayName: 'Desktop Song Notifications',
	  settings: 'base',
	  disabled: true,
	  help: 'Shows a small popup notifications on song changes.',
	  screenshot: 'https://i.imgur.com/wCrDhvb.png',
	  require: ['Notification'],
	  setup: function(arg$){
	    var addListener, lastNotif;
	    addListener = arg$.addListener;
	    Notification.requestPermission();
	    lastNotif = {
	      close: $.noop
	    };
	    addListener(API, 'advance', function(d){
	      lastNotif.close();
	      if (d.media) {
	        if (!document.hasFocus()) {
	          lastNotif = new Notification((d.media.author + " - " + d.media.title).trim(), {
	            icon: d.media.image,
	            body: "played by: " + d.dj.username
	          });
	          lastNotif.onclick = closeNotif;
	        } else {
	          lastNotif.close();
	        }
	      }
	    });
	    addListener($window, 'focus', closeNotif);
	    function closeNotif(){
	      lastNotif.close();
	    }
	  }
	});
	function bind$(obj, key, target){
	  return function(){ return (target || obj)[key].apply(obj, arguments) };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * plug_p0ne special edition
	 * other, edition-specific script files are required here
	 *
	 * @author jtbrinkmann aka. Brinkie Pie
	 * @license MIT License
	 * @copyright (c) 2016 J.-T. Brinkmann
	 */
	__webpack_require__(19);
	__webpack_require__(13);
	__webpack_require__(8);

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/**
	 * Modules for Audio-Only stream and stream settings for plug_p0ne
	 *
	 * @author jtbrinkmann aka. Brinkie Pie
	 * @license MIT License
	 * @copyright (c) 2015 J.-T. Brinkmann
	*/
	/* This modules includes the following things:
	    - audio steam
	    - a stream-settings field in the playback-controls (replacing the HD-button)
	    - a blocked-video-unblocker
	   These are all conbined into this one module to avoid conflicts
	   and due to them sharing a lot of code
	*/
	/*####################################
	#           STREAM SETTINGS          #
	####################################*/
	module('streamSettings', {
	  settings: 'base',
	  displayName: 'Stream Mode Switcher',
	  help: "Helps you easily switch between Video Mode, Audio-Only Mode and Stream-Off (no video/audio).\nNote: Soundcloud songs are always audio-only, duh.\n\nhttp://i.imgur.com/n53tlDx.png",
	  require: ['app', 'Playback', 'currentMedia', 'database', '_$context'],
	  optional: ['database', 'plugUrls'],
	  _settings: {
	    audioFallbackOff: false,
	    audioOnly: false
	  },
	  setup: function(arg$, streamSettings, m_){
	    var addListener, replace, wrap, revert, replaceListener, $create, css, $playback, $playbackContainer, $el, snoozed, playback, mode, modes, $btn, $label, $icons, disabledBtns, audio, replacements, attr, fn, this$ = this;
	    addListener = arg$.addListener, replace = arg$.replace, wrap = arg$.wrap, revert = arg$.revert, replaceListener = arg$.replaceListener, $create = arg$.$create, css = arg$.css;
	    css('streamSettings', ".icon-stream-video {background: " + getIcon('icon-chat-sound-on').background + ";}.icon-stream-audio {background: " + getIcon('icon-chat-room').background + ";}.icon-stream-off {background: " + getIcon('icon-chat-sound-off').background + ";}#playback-controls.snoozed .button.snooze {display: block;}");
	    $playback = $('#playback');
	    $playbackContainer = $('#playback-container');
	    $el = $create('<div class=p0ne-stream-select>');
	    snoozed = isSnoozed();
	    playback = {};
	    mode = {};
	    modes = {
	      off: {
	        key: 'off',
	        name: "Stream: OFF"
	      },
	      snoozed: {
	        key: 'off',
	        name: "Snoozed"
	      },
	      soundcloud: {
	        key: 'audio',
	        name: "Soundcloud"
	      },
	      audioOnly: {
	        key: 'audio',
	        name: "Audio-Only"
	      },
	      video: {
	        key: 'video',
	        name: "Video"
	      }
	    };
	    $('#playback-controls').removeClass('no-hd');
	    replace(Playback.prototype, 'onHDClick', $.noop);
	    $btn = $('#playback .hd').addClass('p0ne-stream-select');
	    this.$btn_ = $btn.children();
	    $btn.html('<div class="box"><span id=p0ne-stream-label></span><div class="p0ne-stream-buttons"><i class="icon icon-stream-video enabled"></i> <i class="icon icon-stream-audio enabled"></i> <i class="icon icon-stream-off enabled"></i> <div class="p0ne-stream-fancy"></div></div></div>');
	    this.$label = $label = $btn.find('#p0ne-stream-label');
	    $icons = $btn.find('.icon');
	    disabledBtns = {};
	    function disableBtn(mode){
	      var $icon;
	      disabledBtns[mode] = true;
	      return $icon = $btn.find(".icon-stream-" + mode).removeClass('enabled');
	    }
	    addListener(API, 'advance', function(d){
	      var mode;
	      if (d.media) {
	        for (mode in disabledBtns) {
	          $btn.find(".icon-stream-" + mode).addClass('enabled');
	          delete disabledBtns[mode];
	        }
	        if (d.media.format === 2) {
	          disableBtn('video');
	        }
	      }
	    });
	    $btn.on('click', '.icon', function(){
	      var $this, i$, ref$, len$, mode, format, ref1$;
	      $this = $(this);
	      for (i$ = 0, len$ = (ref$ = ['video', 'audio', 'off']).length; i$ < len$; ++i$) {
	        mode = ref$[i$];
	        if ($this.hasClass("icon-stream-" + mode) && !disabledBtns[mode]) {
	          format = (ref1$ = currentMedia.get('media')) != null ? ref1$.get('format') : void 8;
	          database.settings.streamDisabled = mode === 'off';
	          streamSettings._settings.audioOnly = mode === 'audio' && format !== 2;
	          if (mode === 'off') {
	            $('#playback-controls').removeClass('snoozed');
	          }
	          refresh();
	          database.save();
	          streamSettings.saveSettings();
	          return;
	        }
	      }
	    });
	    if (m_ != null && m_.audio) {
	      audio = m_.audio;
	    } else {
	      audio = new Audio();
	      audio.addEventListener('canplay', function(){
	        var currSong, diff;
	        console.log("[audio stream] finished buffering");
	        currSong = currentMedia.get('media');
	        if (currSong === this.media && mode === modes.audioOnly) {
	          diff = currentMedia.get('elapsed') - this.currentTime;
	          if (diff > 4 && currentMedia.get('remaining') > 4 && this.canSeek()) {
	            this.seek();
	          } else {
	            if (this.paused) {
	              this.play();
	            }
	            console.log("[audio stream] playing song (time offset: " + mediaTime(diff) + ")", this.currentTime);
	          }
	        } else if (mode !== modes.audioOnly) {
	          console.warn("[audio stream] stopped - stream-mode changed (to " + mode.key + ")");
	        } else {
	          console.warn("[audio stream] stopped - song already changed; loaded:", this.media, "\tgot:", currSong);
	        }
	      });
	    }
	    streamSettings.audio = importAll$(audio, {
	      mode: "audio-only",
	      useSources: true,
	      enable: function(){
	        var media;
	        console.log("[StreamSettings] loading audio stream");
	        playback.stop_();
	        playback.$syncIframe.hide();
	        playback.$ytIframe.hide();
	        playback.$scIframe.hide();
	        media = currentMedia.get('media');
	        if (this.media === media && mode === modes.audioOnly && this.src !== location.href.replace(/#.*/, '')) {
	          this.start();
	        } else if (this.loadingMedia === media) {} else {
	          this.getURL(media);
	        }
	      },
	      start: function(){
	        this.updateVolume(currentMedia.get('volume'));
	        if (this.canSeek()) {
	          this.seek();
	        } else {
	          this.play();
	        }
	      },
	      disable: function(){
	        if (this.useSources) {
	          this.pause();
	          this.$audio.html('');
	        } else {
	          this.src = "";
	        }
	      },
	      canSeek: function(){
	        var startTime, seekable, i$, to$, i;
	        startTime = currentMedia.get('elapsed');
	        seekable = this.seekable;
	        if (!seekable) {
	          return false;
	        }
	        for (i$ = 0, to$ = seekable.length; i$ < to$; ++i$) {
	          i = i$;
	          if (seekable.start(i) <= startTime && startTime <= seekable.end(i)) {
	            return true;
	          }
	        }
	        return false;
	      },
	      seek: function(){
	        var startTime;
	        startTime = currentMedia.get('elapsed');
	        if (mode !== modes.audioOnly) {
	          return;
	        } else if (startTime > 4 && currentMedia.get('remaining') > 4) {
	          this.seekTo(startTime);
	          console.log("[StreamSettings] audio seeking…", mediaTime(startTime));
	        } else if (this.paused) {
	          this.play();
	        }
	      },
	      seekTo: function(t){
	        this.currentTime = t;
	      },
	      updateVolume: function(vol){
	        this.volume = vol / 100;
	      },
	      getURL: function(media){
	        var this$ = this;
	        this.loadingMedia = media;
	        mediaDownload(media, true).then(function(d){
	          var currSong, mime, sources, i$, len$, source;
	          this$.loadingMedia = null;
	          currSong = currentMedia.get('media');
	          if (mode !== modes.audioOnly) {
	            console.warn("[audio stream] stopped - stream-mode changed (to " + mode.key + ")");
	            return;
	          } else if (currSong !== media) {
	            console.warn("[audio stream] stopped - song already changed; loaded:", this$.media, "\tgot:", currSong);
	            return;
	          }
	          console.log("[audioStream] found url. Buffering…", d);
	          this$.media = media;
	          if (this$.useSources) {
	            this$.$audio.html('');
	            $('<source>').attr('type', d.preferredDownload.mimeType).attr('src', d.preferredDownload.url).appendTo(this$.$audio);
	            for (mime in d) {
	              sources = d[mime];
	              if (mime.startsWith('audio/')) {
	                for (i$ = 0, len$ = sources.length; i$ < len$; ++i$) {
	                  source = sources[i$];
	                  if (source !== d.preferredDownload) {
	                    $('<source>').attr('type', mime).attr('src', source.url).appendTo(this$.$audio);
	                  }
	                }
	              }
	            }
	          } else {
	            this$.src = d.preferredDownload.url;
	          }
	          this$.start();
	        }).fail(function(err){
	          var fallback;
	          this$.loadingMedia = null;
	          if (currentMedia.get('media') !== media && mode !== modes.audioOnly) {
	            return;
	          }
	          console.error("[audioStream] couldn't get audio-only stream", err);
	          if (this$._settings.audioFallbackOff) {
	            fallback = "; playing video instead";
	          } else {
	            fallback = "";
	            refresh();
	          }
	          chatWarn({
	            title: "audioStream",
	            message: "Youtube doesn't seem to have an audio-only stream for this video" + fallback,
	            isHTML: true
	          });
	          disableBtn('audio');
	          $playback.addClass('p0ne-stream-audio-failed');
	          API.once('advance', function(){
	            $playback.addClass('p0ne-stream-audio-failed');
	          });
	        });
	      },
	      $audio: $(audio).addClass('media').appendTo($playbackContainer)
	    });
	    replacements = {
	      onVolumeChange: audio.updateVolume,
	      stop: audio.disable,
	      reset: audio.disable
	    };
	    for (attr in replacements) {
	      fn = replacements[attr];
	      wrap(Playback.prototype, attr, fn$);
	    }
	    wrap(Playback.prototype, 'onMediaChange', function(oMC_){
	      return function(){
	        snoozed = false;
	        checkForStreamModeUpdate();
	        if (getStreamMode() === modes.audioOnly) {
	          audio.enable();
	        } else {
	          oMC_.apply(this, arguments);
	        }
	      };
	    });
	    replace(Playback.prototype, 'onPlaybackEnter', function(){
	      if (currentMedia.get('media')) {
	        this.$controls.show();
	      }
	    });
	    wrap(Playback.prototype, 'onSnoozeClick', function(oSC_){
	      return function(){
	        if (!isSnoozed()) {
	          snoozed = true;
	          checkForStreamModeUpdate();
	          oSC_.apply(this, arguments);
	        }
	      };
	    });
	    if (typeof app != 'undefined' && app !== null) {
	      onGotPlayback(app.room.playback);
	    } else {
	      wrap(Playback.prototype, 'onRemainingChange', function(oMC_){
	        return function(){
	          oMC_.apply(this, arguments);
	          revert(Playback.prototype, 'onRemainingChange');
	          onGotPlayback(playback);
	        };
	      });
	    }
	    function onGotPlayback(playback_){
	      streamSettings.playback = playback = playback_;
	      window.snooze = bind$(playback, 'onSnoozeClick');
	      replaceListener(_$context, 'change:streamDisabled', Playback, bind$(playback, 'onMediaChange'));
	      replaceListener(currentMedia, 'change:media', Playback, bind$(playback, 'onMediaChange'));
	      replaceListener(currentMedia, 'change:volume', Playback, bind$(playback, 'onVolumeChange'));
	      $playback.off('mouseenter').on('mouseenter', function(){
	        playback.onPlaybackEnter();
	      }).find('.snooze').off('click').on('click', function(){
	        playback.onSnoozeClick();
	      });
	    }
	    if (getStreamMode() === modes.audioOnly) {
	      refresh();
	    } else {
	      checkForStreamModeUpdate();
	    }
	    function getStreamMode(){
	      var ref$, ref1$;
	      switch (false) {
	      case !database.settings.streamDisabled:
	        return modes.off;
	      case !snoozed:
	        return modes.snoozed;
	      case !(((ref$ = currentMedia.get('media')) != null ? ref$.get('format') : void 8) === 2):
	        return modes.soundcloud;
	      case !streamSettings._settings.audioOnly:
	        if (!((ref1$ = currentMedia.get('media')) != null && ref1$.get('downloadAudioError'))) {
	          return modes.audioOnly;
	        } else {
	          console.log("[streamSettings] audio-only cannot be loaded for this song");
	        }
	        // fallthrough
	      default:
	        return modes.video;
	      }
	    }
	    function checkForStreamModeUpdate(){
	      if (mode !== (mode = getStreamMode())) {
	        console.log("[streamSettings] changed stream mode to %c" + mode.key, 'font-weight: bold');
	        $label.text(mode.name);
	        $playback.removeClass().addClass("p0ne-stream-" + mode.key);
	        if (mode !== modes.audioOnly && !audio.paused) {
	          audio.disable();
	        }
	        if (typeof _$context != 'undefined' && _$context !== null) {
	          _$context.trigger('p0ne:changeMode', mode);
	        }
	        API.trigger('p0ne:changeMode', mode);
	      }
	    }
	    function fn$(vanilla_){
	      return function(){
	        if (getStreamMode() === modes.audioOnly) {
	          fn.apply(audio, arguments);
	        } else {
	          vanilla_.apply(this, arguments);
	        }
	      };
	    }
	  },
	  settingsExtra: function($el){
	    var streamSettings;
	    streamSettings = this;
	    $("<form>Youtube does <b>not</b> offer audio-only for <b>all</b> videos.<br>If the song doesn't have one, play instead:<br><label><input type=radio name=max-mehs value=on " + (this._settings.audioFallbackOff ? '' : 'checked') + "> the video</label><br><label><input type=radio name=max-mehs value=off " + (this._settings.audioFallbackOff ? 'checked' : '') + "> nothing</label><br>(select \"nothing\" to keep bandwidth usage to a minimum)</form>").on('click', 'input:radio', function(){
	      if (this.checked) {
	        streamSettings._settings.audioFallbackOff = this.value === 'off';
	        streamSettings.saveSettings();
	      }
	    }).appendTo($el);
	  },
	  disable: function(){
	    var $playback;
	    window.removeEventListener('message', this.onRestricted);
	    $playback = $('#playback').removeClass();
	    $('#playback .hd').removeClass('p0ne-stream-select').empty().append(this.$btn_);
	    this.audio.disable();
	  },
	  disableLate: function(){
	    if (this._settings.audioOnly && !isSnoozed()) {
	      refresh();
	    }
	    if (this.Playback) {
	      $playback.off('mouseenter').on('mouseenter', bind$(this.playback, 'onPlaybackEnter'));
	    }
	  }
	});
	/*
	replace Playback::, \onYTPlayerError, (e) !->
	    console.log "[streamSettings] Youtube Playback Error", e
	    streamSettings.unblockYT!
	*/
	function importAll$(obj, src){
	  for (var key in src) obj[key] = src[key];
	  return obj;
	}
	function bind$(obj, key, target){
	  return function(){ return (target || obj)[key].apply(obj, arguments) };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/**
	 * small module to show a user's song history on plug.dj
	 * fetches the song history from the user's /@/profile page
	 *
	 * @author jtbrinkmann aka. Brinkie Pie
	 * @license MIT License
	 * @copyright (c) 2015 J.-T. Brinkmann
	*/
	console.log("~~~~~~~ p0ne.userHistory ~~~~~~~");
	/*####################################
	#            USER HISTORY            #
	####################################*/
	module('userHistory', {
	  require: ['userRollover', 'backbone', 'chat', 'mediaListShow', 'MediaCollection'],
	  help: 'Shows another user\'s song history when clicking on their username in the user-rollover.\n\nDue to technical restrictions, only Youtube songs can be shown.',
	  setup: function(arg$){
	    var addListener, wrap, css, $create;
	    addListener = arg$.addListener, wrap = arg$.wrap, css = arg$.css, $create = arg$.$create;
	    css('userHistory', '#user-rollover .username { cursor: pointer }');
	    wrap(userRollover, 'showModal', function(sM_){
	      return function(){
	        this.$histBtn.appendTo(this.$meta);
	        sM_.call(this);
	      };
	    });
	    userRollover.$histBtn = $create("<i class='icon icon-history-white p0ne-user-history-btn'></i>").click('.p0ne-user-history-btn', function(){
	      var user, userID, username, userlevel, userslug;
	      user = userRollover.user;
	      userID = user.id;
	      username = user.get('username');
	      userlevel = user.get('level');
	      userslug = user.get('slug');
	      if (userlevel < 5) {
	        userRollover.$level.text(userlevel + " (user-history requires >4!)");
	        return;
	      }
	      console.log(getTime() + " [userHistory] loading " + username + "'s history");
	      if (!userslug) {
	        getUserData(userID).then(function(d){
	          user.set('slug', d.slug);
	          loadUserHistory(user);
	        });
	      } else {
	        loadUserHistory(user);
	      }
	    });
	    /*
	    P0neHistHeader = _.extend(SearchHeader, {
	      template: SearchHeader.prototype.template.fastReplace("icon-search", "icon-search icon-history-white")
	    })
	     */
	    function loadUserHistory(user){
	      return $.get("https://plug.dj/@/" + user.get('slug')).fail(function(){
	        console.error("! couldn't load user's history");
	      }).then(function(d){
	        var songs;
	        userRollover.cleanup();
	        songs = new MediaCollection();
	        d.replace(/<div class="row">\s*<img src="(.*)"\/>\s*<div class="meta">\s*<span class="author">(.*?)<\/span>\s*<a.+?><span class="name">(.*?)<\/span><\/a>[\s\S]*?positive"><\/i><span>(\d+)<\/span>[\s\S]*?grabs"><\/i><span>(\d+)<\/span>[\s\S]*?negative"><\/i><span>(\d+)<\/span>[\s\S]*?listeners"><\/i><span>(\d+)<\/span>/g, function(arg$, img, author, roomName, positive, grabs, negative, listeners){
	          var cid, ref$, title;
	          if (cid = /\/vi\/(.{11})\//.exec(img)) {
	            cid = cid[1];
	            ref$ = author.split(" - "), title = ref$[0], author = ref$[1];
	            songs.add({
	              id: cid,
	              format: 1,
	              cid: cid,
	              author: author,
	              title: title,
	              image: httpsify(img)
	            });
	          }
	        });
	        console.info(getTime() + " [userHistory] loaded history for " + user.get('username'), songs);
	        $('#playlist-button .icon-playlist').click();
	        mediaListShow(user.get('username') + "'s history", songs);
	      });
	    }
	  }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 28 */
/***/ function(module, exports) {

	/**
	 * plug_p0ne vanilla modules
	 * plug.dj's vanilla modules are required here
	 *
	 * @author jtbrinkmann aka. Brinkie Pie
	 * @license MIT License
	 * @copyright (c) 2016 J.-T. Brinkmann
	 */
	var id, ref$, m, moduleName, ref1$, ref2$, i$, len$, context, ref3$, ref4$, cb, ref5$, ev, user, k, v, ref6$, e;
	console.log("~~~~~~~ p0ne.vanilla-modules ~~~~~~~");
	/*####################################
	#          REQUIRE MODULES           #
	####################################*/
	/* requireHelper(moduleName, testFn) */
	window.Cells = [];
	delete window.room;
	delete window.search;
	for (id in ref$ = requirejs.s.contexts._.defined) {
	  m = ref$[id];
	  if (m) {
	    moduleName = false;
	    if (!('requireID' in m)) {
	      m.requireID = id;
	    }
	    switch (false) {
	    case !m.ACTIVATE:
	      moduleName = 'ActivateEvent';
	      break;
	    case m._name !== 'AlertEvent':
	      moduleName = 'AlertEvent';
	      break;
	    case !m.deserializeMedia:
	      moduleName = 'auxiliaries';
	      break;
	    case !m.AUDIENCE:
	      moduleName = 'Avatar';
	      break;
	    case !m.getAvatarUrl:
	      moduleName = 'avatarAuxiliaries';
	      break;
	    case !m.Events:
	      moduleName = 'backbone';
	      break;
	    case !m.mutes:
	      moduleName = 'chatAuxiliaries';
	      break;
	    case !m.updateElapsedBind:
	      moduleName = 'currentMedia';
	      break;
	    case !m.settings:
	      moduleName = 'database';
	      break;
	    case !m.emojiMap:
	      moduleName = 'emoji';
	      break;
	    case !m.mapEvent:
	      moduleName = 'eventMap';
	      break;
	    case m.comparator !== 'username':
	      moduleName = 'ignores';
	      break;
	    case !m.getSize:
	      moduleName = 'Layout';
	      break;
	    case !m.compress:
	      moduleName = 'LZString';
	      break;
	    case !m._read:
	      moduleName = 'playlistCache';
	      break;
	    case !m.activeMedia:
	      moduleName = 'playlists';
	      break;
	    case !m.scThumbnail:
	      moduleName = 'plugUrls';
	      window.cdnHost = parseURL(m.scThumbnail).host;
	      break;
	    case m.className !== 'pop-menu':
	      moduleName = 'popMenu';
	      break;
	    case m._name !== 'RoomEvent':
	      moduleName = 'RoomEvent';
	      break;
	    case !(m.comparator && m.exists):
	      moduleName = 'roomHistory';
	      break;
	    case !m.onVideoResize:
	      moduleName = 'roomLoader';
	      break;
	    case !m.ytSearch:
	      moduleName = 'searchAux';
	      break;
	    case !m._search:
	      moduleName = 'searchManager';
	      break;
	    case m.SHOW !== 'ShowDialogEvent:show':
	      moduleName = 'ShowDialogEvent';
	      break;
	    case !m.ack:
	      moduleName = 'socketEvents';
	      break;
	    case !m.sc:
	      moduleName = 'soundcloud';
	      break;
	    case !m.identify:
	      moduleName = 'tracker';
	      break;
	    case !m.canModChat:
	      moduleName = 'user_';
	      break;
	    case !m.onRole:
	      moduleName = 'users';
	      break;
	    case !m.PREVIEW:
	      moduleName = 'PreviewEvent';
	      break;
	    case !('_window' in m):
	      moduleName = 'PopoutView';
	      break;
	    default:
	      switch (m.id) {
	      case 'audience':
	        moduleName = 'audienceRenderer';
	        break;
	      case 'playlist-menu':
	        moduleName = 'playlistMenu';
	        break;
	      case 'user-lists':
	        moduleName = 'userList';
	        break;
	      case 'user-rollover':
	        moduleName = 'userRollover';
	        break;
	      default:
	        switch (false) {
	        case !((ref1$ = m._events) != null && ref1$['chat:receive']):
	          moduleName = '_$context';
	          break;
	        case !m.attributes:
	          switch (false) {
	          case !('shouldCycle' in m.attributes):
	            moduleName = 'booth';
	            break;
	          case !('hostID' in m.attributes):
	            moduleName = 'room';
	            break;
	          case !('grabbers' in m.attributes):
	            moduleName = 'votes';
	          }
	          break;
	        case !m.prototype:
	          switch (false) {
	          case m.prototype.className !== 'friends':
	            moduleName = 'FriendsList';
	            break;
	          case !(m.prototype.className === 'avatars' && m.prototype.eventName):
	            moduleName = 'InventoryAvatarPage';
	            window.InventoryDropdown = new m().dropDown.constructor;
	            break;
	          case !(m.prototype.className === 'cell' && m.prototype.getBlinkFrame):
	            (ref2$ = window.Cells)[ref2$.length] = m;
	            break;
	          case m.prototype.id !== 'dialog-alert':
	            moduleName = 'DialogAlert';
	            window.Dialog = m.__super__.constructor;
	            break;
	          case !(m.prototype.defaults && 'title' in m.prototype.defaults && 'duration' in m.prototype.defaults):
	            moduleName = 'Media';
	            break;
	          case !m.prototype.onPlaylistVisible:
	            moduleName = 'MediaPanel';
	            break;
	          case m.prototype.id !== 'playback':
	            moduleName = 'Playback';
	            break;
	          case m.prototype.id !== 'dialog-playlist-create':
	            moduleName = 'PlaylistCreateDialog';
	            break;
	          case m.prototype.listClass !== 'playlist-media':
	            moduleName = 'PlaylistItemList';
	            window.PlaylistItemRow = m.prototype.RowClass;
	            window.PlaylistMediaList = m.__super__.constructor;
	            break;
	          case !m.prototype.onItemsChange:
	            moduleName = 'PlaylistListRow';
	            break;
	          case !m.prototype.hasOwnProperty('permissionAlert'):
	            moduleName = 'PlugAjax';
	            break;
	          case !m.prototype.scrollToBottom:
	            moduleName = 'PopoutChat';
	            break;
	          case !m.prototype.onFromClick:
	            moduleName = 'Chat';
	            break;
	          case !m.prototype.vote:
	            moduleName = 'RoomUserRow';
	            break;
	          case !m.prototype.onQueryUpdate:
	            moduleName = 'SearchHeader';
	            break;
	          case m.prototype.listClass !== 'search':
	            moduleName = 'SearchList';
	            window.PlaylistMediaList = m.__super__.constructor;
	            break;
	          case !(m.prototype.id === 'chat-suggestion' && 'chat-suggestion' !== m.__super__.id):
	            moduleName = 'SuggestionView';
	            break;
	          case !m.prototype.onAvatar:
	            moduleName = 'WaitlistRow';
	            break;
	          case !m.prototype.loadRelated:
	            moduleName = 'YtSearchService';
	          }
	        }
	      }
	    }
	    if (moduleName) {
	      if (moduleName in window && window[moduleName].requireID !== m.requireID) {
	        console.warn("[require] found multiple matches for '" + moduleName + "'");
	      }
	      window[moduleName] = m;
	    }
	  }
	}
	if (typeof DialogAlert == 'undefined' || DialogAlert === null) {
	  $app.addClass('p0ne-dialog-not-required');
	}
	if (typeof _$context == 'undefined' || _$context === null) {
	  console.error("[p0ne require] couldn't load '_$context'. A LOT of modules will NOT load because of this");
	}
	for (i$ = 0, len$ = (ref$ = [typeof Backbone != 'undefined' && Backbone !== null ? Backbone.Events : void 8, _$context, API]).length; i$ < len$; ++i$) {
	  context = ref$[i$];
	  if (context) {
	    context.onEarly = fn$;
	  }
	}
	/* `app` is like the ultimate root object on plug.dj, just about everything is somewhere in there! great for debugging :) */
	for (i$ = 0, len$ = (ref$ = (typeof room != 'undefined' && room !== null ? (ref2$ = room._events) != null ? ref2$['change:name'] : void 8 : void 8) || (typeof _$context != 'undefined' && _$context !== null ? (ref3$ = _$context._events) != null ? ref3$['show:room'] : void 8 : void 8) || (typeof Layout != 'undefined' && Layout !== null ? (ref4$ = Layout._events) != null ? ref4$['resize'] : void 8 : void 8) || []).length; i$ < len$; ++i$) {
	  cb = ref$[i$];
	  if (cb.ctx.room) {
	    window.app = cb.ctx;
	    window.friendsList = app.room.friends;
	    window.search = app.footer.playlist.playlist.search;
	    window.pl = app.footer.playlist.playlist.media;
	    break;
	  }
	}
	if (typeof user_ != 'undefined' && user_ !== null) {
	  window.user = user_.toJSON();
	  for (i$ = 0, len$ = (ref$ = (typeof user_ != 'undefined' && user_ !== null ? (ref5$ = user_._events) != null ? ref5$['change:avatarID'] : void 8 : void 8) || []).length; i$ < len$; ++i$) {
	    ev = ref$[i$];
	    if (ev.ctx.comparator === 'id') {
	      window.myAvatars = ev.ctx;
	      break;
	    }
	  }
	}
	if (user || (user = window.user)) {
	  window.userID = user.id;
user.isStaff = true;
	}
	window.Lang = requirejs('lang/Lang');
	for (k in ref$ = typeof Lang != 'undefined' && Lang !== null ? Lang.languages : void 8) {
	  v = ref$[k];
	  if (v.has('\'')) {
	    (ref6$ = Lang.languages)[k] = ref6$[k].replace(/\\?'/g, "\\'");
	  }
	}
	if (app && !(window.chat = app.room.chat) && window._$context) {
	  for (i$ = 0, len$ = (ref$ = _$context._events['chat:receive'] || []).length; i$ < len$; ++i$) {
	    e = ref$[i$];
	    if ((ref6$ = e.context) != null && ref6$.cid) {
	      window.chat = e.context;
	      break;
	    }
	  }
	}
	if ((typeof Media != 'undefined' && Media !== null) && (typeof Backbone != 'undefined' && Backbone !== null)) {
	  window.MediaCollection = Backbone.Collection.extend({
	    model: Media
	  });
	}
	for (i$ = 0, len$ = (ref$ = ['ActivateEvent', 'AlertEvent', 'Avatar', 'Dialog', 'DialogAlert', 'FriendsList', 'InventoryAvatarPage', 'InventoryDropdown', 'Layout', 'LZString', 'Media', 'MediaCollection', 'MediaPanel', 'Playback', 'PlaylistCreateDialog', 'PlaylistItemList', 'PlaylistItemRow', 'PlaylistListRow', 'PlaylistMediaList', 'PlugAjax', 'PopoutChat', 'PopoutView', 'PreviewEvent', 'roomHistory', 'RoomUserRow', 'SearchHeader', 'SearchList', 'ShowDialogEvent', 'SuggestionView', 'WaitlistRow', 'YtSearchService', '_$context', 'app', 'audienceRenderer', 'auxiliaries', 'avatarAuxiliaries', 'backbone', 'booth', 'chatAuxiliaries', 'currentMedia', 'database', 'emoji', 'eventMap', 'friendsList', 'myAvatars', 'pl', 'playlistCache', 'playlistMenu', 'playlists', 'plugUrls', 'popMenu', 'room', 'roomLoader', 'search', 'searchAux', 'searchManager', 'socketEvents', 'soundcloud', 'tracker', 'user', 'userID', 'userList', 'userRollover', 'user_', 'users', 'votes']).length; i$ < len$; ++i$) {
	  m = ref$[i$];
	  if (!(m in window)) {
	    console.warn("[require] couldn't require", m);
	  }
	}
	if (Cells.length < 2) {
	  console.warn("[require] couldn't require all Cells");
	}
	function fn$(type, callback, context){
	  var ref$;
	  ((ref$ = this._events)[type] || (ref$[type] = [])).unshift({
	    callback: callback,
	    context: context,
	    ctx: context || this
	  });
	  return this;
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var require;var require;/* WEBPACK VAR INJECTION */(function(global) {/*!
	    localForage -- Offline Storage, Improved
	    Version 1.4.2
	    https://mozilla.github.io/localForage
	    (c) 2013-2015 Mozilla, Apache License 2.0
	*/
	!function(a){if(true)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.localforage=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return require(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){(function(a){"use strict";function c(){k=!0;for(var a,b,c=l.length;c;){for(b=l,l=[],a=-1;++a<c;)b[a]();c=l.length}k=!1}function d(a){1!==l.push(a)||k||e()}var e,f=a.MutationObserver||a.WebKitMutationObserver;if(f){var g=0,h=new f(c),i=a.document.createTextNode("");h.observe(i,{characterData:!0}),e=function(){i.data=g=++g%2}}else if(a.setImmediate||"undefined"==typeof a.MessageChannel)e="document"in a&&"onreadystatechange"in a.document.createElement("script")?function(){var b=a.document.createElement("script");b.onreadystatechange=function(){c(),b.onreadystatechange=null,b.parentNode.removeChild(b),b=null},a.document.documentElement.appendChild(b)}:function(){setTimeout(c,0)};else{var j=new a.MessageChannel;j.port1.onmessage=c,e=function(){j.port2.postMessage(0)}}var k,l=[];b.exports=d}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(a,b,c){"use strict";function d(){}function e(a){if("function"!=typeof a)throw new TypeError("resolver must be a function");this.state=s,this.queue=[],this.outcome=void 0,a!==d&&i(this,a)}function f(a,b,c){this.promise=a,"function"==typeof b&&(this.onFulfilled=b,this.callFulfilled=this.otherCallFulfilled),"function"==typeof c&&(this.onRejected=c,this.callRejected=this.otherCallRejected)}function g(a,b,c){o(function(){var d;try{d=b(c)}catch(e){return p.reject(a,e)}d===a?p.reject(a,new TypeError("Cannot resolve promise with itself")):p.resolve(a,d)})}function h(a){var b=a&&a.then;return a&&"object"==typeof a&&"function"==typeof b?function(){b.apply(a,arguments)}:void 0}function i(a,b){function c(b){f||(f=!0,p.reject(a,b))}function d(b){f||(f=!0,p.resolve(a,b))}function e(){b(d,c)}var f=!1,g=j(e);"error"===g.status&&c(g.value)}function j(a,b){var c={};try{c.value=a(b),c.status="success"}catch(d){c.status="error",c.value=d}return c}function k(a){return a instanceof this?a:p.resolve(new this(d),a)}function l(a){var b=new this(d);return p.reject(b,a)}function m(a){function b(a,b){function d(a){g[b]=a,++h!==e||f||(f=!0,p.resolve(j,g))}c.resolve(a).then(d,function(a){f||(f=!0,p.reject(j,a))})}var c=this;if("[object Array]"!==Object.prototype.toString.call(a))return this.reject(new TypeError("must be an array"));var e=a.length,f=!1;if(!e)return this.resolve([]);for(var g=new Array(e),h=0,i=-1,j=new this(d);++i<e;)b(a[i],i);return j}function n(a){function b(a){c.resolve(a).then(function(a){f||(f=!0,p.resolve(h,a))},function(a){f||(f=!0,p.reject(h,a))})}var c=this;if("[object Array]"!==Object.prototype.toString.call(a))return this.reject(new TypeError("must be an array"));var e=a.length,f=!1;if(!e)return this.resolve([]);for(var g=-1,h=new this(d);++g<e;)b(a[g]);return h}var o=a(1),p={},q=["REJECTED"],r=["FULFILLED"],s=["PENDING"];b.exports=c=e,e.prototype["catch"]=function(a){return this.then(null,a)},e.prototype.then=function(a,b){if("function"!=typeof a&&this.state===r||"function"!=typeof b&&this.state===q)return this;var c=new this.constructor(d);if(this.state!==s){var e=this.state===r?a:b;g(c,e,this.outcome)}else this.queue.push(new f(c,a,b));return c},f.prototype.callFulfilled=function(a){p.resolve(this.promise,a)},f.prototype.otherCallFulfilled=function(a){g(this.promise,this.onFulfilled,a)},f.prototype.callRejected=function(a){p.reject(this.promise,a)},f.prototype.otherCallRejected=function(a){g(this.promise,this.onRejected,a)},p.resolve=function(a,b){var c=j(h,b);if("error"===c.status)return p.reject(a,c.value);var d=c.value;if(d)i(a,d);else{a.state=r,a.outcome=b;for(var e=-1,f=a.queue.length;++e<f;)a.queue[e].callFulfilled(b)}return a},p.reject=function(a,b){a.state=q,a.outcome=b;for(var c=-1,d=a.queue.length;++c<d;)a.queue[c].callRejected(b);return a},c.resolve=k,c.reject=l,c.all=m,c.race=n},{1:1}],3:[function(a,b,c){(function(b){"use strict";"function"!=typeof b.Promise&&(b.Promise=a(2))}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2}],4:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(){return"undefined"!=typeof indexedDB?indexedDB:"undefined"!=typeof webkitIndexedDB?webkitIndexedDB:"undefined"!=typeof mozIndexedDB?mozIndexedDB:"undefined"!=typeof OIndexedDB?OIndexedDB:"undefined"!=typeof msIndexedDB?msIndexedDB:void 0}function f(){try{return fa?"undefined"!=typeof openDatabase&&"undefined"!=typeof navigator&&navigator.userAgent&&/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)?!1:fa&&"function"==typeof fa.open&&"undefined"!=typeof IDBKeyRange:!1}catch(a){return!1}}function g(){return"function"==typeof openDatabase}function h(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&localStorage.setItem}catch(a){return!1}}function i(a,b){a=a||[],b=b||{};try{return new Blob(a,b)}catch(c){if("TypeError"!==c.name)throw c;for(var d="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder,e=new d,f=0;f<a.length;f+=1)e.append(a[f]);return e.getBlob(b.type)}}function j(a,b){b&&a.then(function(a){b(null,a)},function(a){b(a)})}function k(a){for(var b=a.length,c=new ArrayBuffer(b),d=new Uint8Array(c),e=0;b>e;e++)d[e]=a.charCodeAt(e);return c}function l(a){return new ia(function(b){var c=i([""]);a.objectStore(ja).put(c,"key"),a.onabort=function(a){a.preventDefault(),a.stopPropagation(),b(!1)},a.oncomplete=function(){var a=navigator.userAgent.match(/Chrome\/(\d+)/),c=navigator.userAgent.match(/Edge\//);b(c||!a||parseInt(a[1],10)>=43)}})["catch"](function(){return!1})}function m(a){return"boolean"==typeof ga?ia.resolve(ga):l(a).then(function(a){return ga=a})}function n(a){var b=ha[a.name],c={};c.promise=new ia(function(a){c.resolve=a}),b.deferredOperations.push(c),b.dbReady?b.dbReady=b.dbReady.then(function(){return c.promise}):b.dbReady=c.promise}function o(a){var b=ha[a.name],c=b.deferredOperations.pop();c&&c.resolve()}function p(a,b){return new ia(function(c,d){if(a.db){if(!b)return c(a.db);n(a),a.db.close()}var e=[a.name];b&&e.push(a.version);var f=fa.open.apply(fa,e);b&&(f.onupgradeneeded=function(b){var c=f.result;try{c.createObjectStore(a.storeName),b.oldVersion<=1&&c.createObjectStore(ja)}catch(d){if("ConstraintError"!==d.name)throw d;console.warn('The database "'+a.name+'" has been upgraded from version '+b.oldVersion+" to version "+b.newVersion+', but the storage "'+a.storeName+'" already exists.')}}),f.onerror=function(){d(f.error)},f.onsuccess=function(){c(f.result),o(a)}})}function q(a){return p(a,!1)}function r(a){return p(a,!0)}function s(a,b){if(!a.db)return!0;var c=!a.db.objectStoreNames.contains(a.storeName),d=a.version<a.db.version,e=a.version>a.db.version;if(d&&(a.version!==b&&console.warn('The database "'+a.name+"\" can't be downgraded from version "+a.db.version+" to version "+a.version+"."),a.version=a.db.version),e||c){if(c){var f=a.db.version+1;f>a.version&&(a.version=f)}return!0}return!1}function t(a){return new ia(function(b,c){var d=new FileReader;d.onerror=c,d.onloadend=function(c){var d=btoa(c.target.result||"");b({__local_forage_encoded_blob:!0,data:d,type:a.type})},d.readAsBinaryString(a)})}function u(a){var b=k(atob(a.data));return i([b],{type:a.type})}function v(a){return a&&a.__local_forage_encoded_blob}function w(a){var b=this,c=b._initReady().then(function(){var a=ha[b._dbInfo.name];return a&&a.dbReady?a.dbReady:void 0});return c.then(a,a),c}function x(a){function b(){return ia.resolve()}var c=this,d={db:null};if(a)for(var e in a)d[e]=a[e];ha||(ha={});var f=ha[d.name];f||(f={forages:[],db:null,dbReady:null,deferredOperations:[]},ha[d.name]=f),f.forages.push(c),c._initReady||(c._initReady=c.ready,c.ready=w);for(var g=[],h=0;h<f.forages.length;h++){var i=f.forages[h];i!==c&&g.push(i._initReady()["catch"](b))}var j=f.forages.slice(0);return ia.all(g).then(function(){return d.db=f.db,q(d)}).then(function(a){return d.db=a,s(d,c._defaultConfig.version)?r(d):a}).then(function(a){d.db=f.db=a,c._dbInfo=d;for(var b=0;b<j.length;b++){var e=j[b];e!==c&&(e._dbInfo.db=d.db,e._dbInfo.version=d.version)}})}function y(a,b){var c=this;"string"!=typeof a&&(console.warn(a+" used as a key, but it is not a string."),a=String(a));var d=new ia(function(b,d){c.ready().then(function(){var e=c._dbInfo,f=e.db.transaction(e.storeName,"readonly").objectStore(e.storeName),g=f.get(a);g.onsuccess=function(){var a=g.result;void 0===a&&(a=null),v(a)&&(a=u(a)),b(a)},g.onerror=function(){d(g.error)}})["catch"](d)});return j(d,b),d}function z(a,b){var c=this,d=new ia(function(b,d){c.ready().then(function(){var e=c._dbInfo,f=e.db.transaction(e.storeName,"readonly").objectStore(e.storeName),g=f.openCursor(),h=1;g.onsuccess=function(){var c=g.result;if(c){var d=c.value;v(d)&&(d=u(d));var e=a(d,c.key,h++);void 0!==e?b(e):c["continue"]()}else b()},g.onerror=function(){d(g.error)}})["catch"](d)});return j(d,b),d}function A(a,b,c){var d=this;"string"!=typeof a&&(console.warn(a+" used as a key, but it is not a string."),a=String(a));var e=new ia(function(c,e){var f;d.ready().then(function(){return f=d._dbInfo,b instanceof Blob?m(f.db).then(function(a){return a?b:t(b)}):b}).then(function(b){var d=f.db.transaction(f.storeName,"readwrite"),g=d.objectStore(f.storeName);null===b&&(b=void 0),d.oncomplete=function(){void 0===b&&(b=null),c(b)},d.onabort=d.onerror=function(){var a=h.error?h.error:h.transaction.error;e(a)};var h=g.put(b,a)})["catch"](e)});return j(e,c),e}function B(a,b){var c=this;"string"!=typeof a&&(console.warn(a+" used as a key, but it is not a string."),a=String(a));var d=new ia(function(b,d){c.ready().then(function(){var e=c._dbInfo,f=e.db.transaction(e.storeName,"readwrite"),g=f.objectStore(e.storeName),h=g["delete"](a);f.oncomplete=function(){b()},f.onerror=function(){d(h.error)},f.onabort=function(){var a=h.error?h.error:h.transaction.error;d(a)}})["catch"](d)});return j(d,b),d}function C(a){var b=this,c=new ia(function(a,c){b.ready().then(function(){var d=b._dbInfo,e=d.db.transaction(d.storeName,"readwrite"),f=e.objectStore(d.storeName),g=f.clear();e.oncomplete=function(){a()},e.onabort=e.onerror=function(){var a=g.error?g.error:g.transaction.error;c(a)}})["catch"](c)});return j(c,a),c}function D(a){var b=this,c=new ia(function(a,c){b.ready().then(function(){var d=b._dbInfo,e=d.db.transaction(d.storeName,"readonly").objectStore(d.storeName),f=e.count();f.onsuccess=function(){a(f.result)},f.onerror=function(){c(f.error)}})["catch"](c)});return j(c,a),c}function E(a,b){var c=this,d=new ia(function(b,d){return 0>a?void b(null):void c.ready().then(function(){var e=c._dbInfo,f=e.db.transaction(e.storeName,"readonly").objectStore(e.storeName),g=!1,h=f.openCursor();h.onsuccess=function(){var c=h.result;return c?void(0===a?b(c.key):g?b(c.key):(g=!0,c.advance(a))):void b(null)},h.onerror=function(){d(h.error)}})["catch"](d)});return j(d,b),d}function F(a){var b=this,c=new ia(function(a,c){b.ready().then(function(){var d=b._dbInfo,e=d.db.transaction(d.storeName,"readonly").objectStore(d.storeName),f=e.openCursor(),g=[];f.onsuccess=function(){var b=f.result;return b?(g.push(b.key),void b["continue"]()):void a(g)},f.onerror=function(){c(f.error)}})["catch"](c)});return j(c,a),c}function G(a){var b,c,d,e,f,g=.75*a.length,h=a.length,i=0;"="===a[a.length-1]&&(g--,"="===a[a.length-2]&&g--);var j=new ArrayBuffer(g),k=new Uint8Array(j);for(b=0;h>b;b+=4)c=la.indexOf(a[b]),d=la.indexOf(a[b+1]),e=la.indexOf(a[b+2]),f=la.indexOf(a[b+3]),k[i++]=c<<2|d>>4,k[i++]=(15&d)<<4|e>>2,k[i++]=(3&e)<<6|63&f;return j}function H(a){var b,c=new Uint8Array(a),d="";for(b=0;b<c.length;b+=3)d+=la[c[b]>>2],d+=la[(3&c[b])<<4|c[b+1]>>4],d+=la[(15&c[b+1])<<2|c[b+2]>>6],d+=la[63&c[b+2]];return c.length%3===2?d=d.substring(0,d.length-1)+"=":c.length%3===1&&(d=d.substring(0,d.length-2)+"=="),d}function I(a,b){var c="";if(a&&(c=a.toString()),a&&("[object ArrayBuffer]"===a.toString()||a.buffer&&"[object ArrayBuffer]"===a.buffer.toString())){var d,e=oa;a instanceof ArrayBuffer?(d=a,e+=qa):(d=a.buffer,"[object Int8Array]"===c?e+=sa:"[object Uint8Array]"===c?e+=ta:"[object Uint8ClampedArray]"===c?e+=ua:"[object Int16Array]"===c?e+=va:"[object Uint16Array]"===c?e+=xa:"[object Int32Array]"===c?e+=wa:"[object Uint32Array]"===c?e+=ya:"[object Float32Array]"===c?e+=za:"[object Float64Array]"===c?e+=Aa:b(new Error("Failed to get type for BinaryArray"))),b(e+H(d))}else if("[object Blob]"===c){var f=new FileReader;f.onload=function(){var c=ma+a.type+"~"+H(this.result);b(oa+ra+c)},f.readAsArrayBuffer(a)}else try{b(JSON.stringify(a))}catch(g){console.error("Couldn't convert value into a JSON string: ",a),b(null,g)}}function J(a){if(a.substring(0,pa)!==oa)return JSON.parse(a);var b,c=a.substring(Ba),d=a.substring(pa,Ba);if(d===ra&&na.test(c)){var e=c.match(na);b=e[1],c=c.substring(e[0].length)}var f=G(c);switch(d){case qa:return f;case ra:return i([f],{type:b});case sa:return new Int8Array(f);case ta:return new Uint8Array(f);case ua:return new Uint8ClampedArray(f);case va:return new Int16Array(f);case xa:return new Uint16Array(f);case wa:return new Int32Array(f);case ya:return new Uint32Array(f);case za:return new Float32Array(f);case Aa:return new Float64Array(f);default:throw new Error("Unkown type: "+d)}}function K(a){var b=this,c={db:null};if(a)for(var d in a)c[d]="string"!=typeof a[d]?a[d].toString():a[d];var e=new ia(function(a,d){try{c.db=openDatabase(c.name,String(c.version),c.description,c.size)}catch(e){return d(e)}c.db.transaction(function(e){e.executeSql("CREATE TABLE IF NOT EXISTS "+c.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],function(){b._dbInfo=c,a()},function(a,b){d(b)})})});return c.serializer=Ca,e}function L(a,b){var c=this;"string"!=typeof a&&(console.warn(a+" used as a key, but it is not a string."),a=String(a));var d=new ia(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){c.executeSql("SELECT * FROM "+e.storeName+" WHERE key = ? LIMIT 1",[a],function(a,c){var d=c.rows.length?c.rows.item(0).value:null;d&&(d=e.serializer.deserialize(d)),b(d)},function(a,b){d(b)})})})["catch"](d)});return j(d,b),d}function M(a,b){var c=this,d=new ia(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){c.executeSql("SELECT * FROM "+e.storeName,[],function(c,d){for(var f=d.rows,g=f.length,h=0;g>h;h++){var i=f.item(h),j=i.value;if(j&&(j=e.serializer.deserialize(j)),j=a(j,i.key,h+1),void 0!==j)return void b(j)}b()},function(a,b){d(b)})})})["catch"](d)});return j(d,b),d}function N(a,b,c){var d=this;"string"!=typeof a&&(console.warn(a+" used as a key, but it is not a string."),a=String(a));var e=new ia(function(c,e){d.ready().then(function(){void 0===b&&(b=null);var f=b,g=d._dbInfo;g.serializer.serialize(b,function(b,d){d?e(d):g.db.transaction(function(d){d.executeSql("INSERT OR REPLACE INTO "+g.storeName+" (key, value) VALUES (?, ?)",[a,b],function(){c(f)},function(a,b){e(b)})},function(a){a.code===a.QUOTA_ERR&&e(a)})})})["catch"](e)});return j(e,c),e}function O(a,b){var c=this;"string"!=typeof a&&(console.warn(a+" used as a key, but it is not a string."),a=String(a));var d=new ia(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){c.executeSql("DELETE FROM "+e.storeName+" WHERE key = ?",[a],function(){b()},function(a,b){d(b)})})})["catch"](d)});return j(d,b),d}function P(a){var b=this,c=new ia(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){b.executeSql("DELETE FROM "+d.storeName,[],function(){a()},function(a,b){c(b)})})})["catch"](c)});return j(c,a),c}function Q(a){var b=this,c=new ia(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){b.executeSql("SELECT COUNT(key) as c FROM "+d.storeName,[],function(b,c){var d=c.rows.item(0).c;a(d)},function(a,b){c(b)})})})["catch"](c)});return j(c,a),c}function R(a,b){var c=this,d=new ia(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){c.executeSql("SELECT key FROM "+e.storeName+" WHERE id = ? LIMIT 1",[a+1],function(a,c){var d=c.rows.length?c.rows.item(0).key:null;b(d)},function(a,b){d(b)})})})["catch"](d)});return j(d,b),d}function S(a){var b=this,c=new ia(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){b.executeSql("SELECT key FROM "+d.storeName,[],function(b,c){for(var d=[],e=0;e<c.rows.length;e++)d.push(c.rows.item(e).key);a(d)},function(a,b){c(b)})})})["catch"](c)});return j(c,a),c}function T(a){var b=this,c={};if(a)for(var d in a)c[d]=a[d];return c.keyPrefix=c.name+"/",c.storeName!==b._defaultConfig.storeName&&(c.keyPrefix+=c.storeName+"/"),b._dbInfo=c,c.serializer=Ca,ia.resolve()}function U(a){var b=this,c=b.ready().then(function(){for(var a=b._dbInfo.keyPrefix,c=localStorage.length-1;c>=0;c--){var d=localStorage.key(c);0===d.indexOf(a)&&localStorage.removeItem(d)}});return j(c,a),c}function V(a,b){var c=this;"string"!=typeof a&&(console.warn(a+" used as a key, but it is not a string."),a=String(a));var d=c.ready().then(function(){var b=c._dbInfo,d=localStorage.getItem(b.keyPrefix+a);return d&&(d=b.serializer.deserialize(d)),d});return j(d,b),d}function W(a,b){var c=this,d=c.ready().then(function(){for(var b=c._dbInfo,d=b.keyPrefix,e=d.length,f=localStorage.length,g=1,h=0;f>h;h++){var i=localStorage.key(h);if(0===i.indexOf(d)){var j=localStorage.getItem(i);if(j&&(j=b.serializer.deserialize(j)),j=a(j,i.substring(e),g++),void 0!==j)return j}}});return j(d,b),d}function X(a,b){var c=this,d=c.ready().then(function(){var b,d=c._dbInfo;try{b=localStorage.key(a)}catch(e){b=null}return b&&(b=b.substring(d.keyPrefix.length)),b});return j(d,b),d}function Y(a){var b=this,c=b.ready().then(function(){for(var a=b._dbInfo,c=localStorage.length,d=[],e=0;c>e;e++)0===localStorage.key(e).indexOf(a.keyPrefix)&&d.push(localStorage.key(e).substring(a.keyPrefix.length));return d});return j(c,a),c}function Z(a){var b=this,c=b.keys().then(function(a){return a.length});return j(c,a),c}function $(a,b){var c=this;"string"!=typeof a&&(console.warn(a+" used as a key, but it is not a string."),a=String(a));var d=c.ready().then(function(){var b=c._dbInfo;localStorage.removeItem(b.keyPrefix+a)});return j(d,b),d}function _(a,b,c){var d=this;"string"!=typeof a&&(console.warn(a+" used as a key, but it is not a string."),a=String(a));var e=d.ready().then(function(){void 0===b&&(b=null);var c=b;return new ia(function(e,f){var g=d._dbInfo;g.serializer.serialize(b,function(b,d){if(d)f(d);else try{localStorage.setItem(g.keyPrefix+a,b),e(c)}catch(h){"QuotaExceededError"!==h.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==h.name||f(h),f(h)}})})});return j(e,c),e}function aa(a,b,c){"function"==typeof b&&a.then(b),"function"==typeof c&&a["catch"](c)}function ba(a,b){a[b]=function(){var c=arguments;return a.ready().then(function(){return a[b].apply(a,c)})}}function ca(){for(var a=1;a<arguments.length;a++){var b=arguments[a];if(b)for(var c in b)b.hasOwnProperty(c)&&(La(b[c])?arguments[0][c]=b[c].slice():arguments[0][c]=b[c])}return arguments[0]}function da(a){for(var b in Ga)if(Ga.hasOwnProperty(b)&&Ga[b]===a)return!0;return!1}var ea="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol?"symbol":typeof a},fa=e();"undefined"==typeof Promise&&"undefined"!=typeof a&&a(3);var ga,ha,ia=Promise,ja="local-forage-detect-blob-support",ka={_driver:"asyncStorage",_initStorage:x,iterate:z,getItem:y,setItem:A,removeItem:B,clear:C,length:D,key:E,keys:F},la="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ma="~~local_forage_type~",na=/^~~local_forage_type~([^~]+)~/,oa="__lfsc__:",pa=oa.length,qa="arbf",ra="blob",sa="si08",ta="ui08",ua="uic8",va="si16",wa="si32",xa="ur16",ya="ui32",za="fl32",Aa="fl64",Ba=pa+qa.length,Ca={serialize:I,deserialize:J,stringToBuffer:G,bufferToString:H},Da={_driver:"webSQLStorage",_initStorage:K,iterate:M,getItem:L,setItem:N,removeItem:O,clear:P,length:Q,key:R,keys:S},Ea={_driver:"localStorageWrapper",_initStorage:T,iterate:W,getItem:V,setItem:_,removeItem:$,clear:U,length:Z,key:X,keys:Y},Fa={},Ga={INDEXEDDB:"asyncStorage",LOCALSTORAGE:"localStorageWrapper",WEBSQL:"webSQLStorage"},Ha=[Ga.INDEXEDDB,Ga.WEBSQL,Ga.LOCALSTORAGE],Ia=["clear","getItem","iterate","key","keys","length","removeItem","setItem"],Ja={description:"",driver:Ha.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1},Ka={};Ka[Ga.INDEXEDDB]=f(),Ka[Ga.WEBSQL]=g(),Ka[Ga.LOCALSTORAGE]=h();var La=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},Ma=function(){function a(b){d(this,a),this.INDEXEDDB=Ga.INDEXEDDB,this.LOCALSTORAGE=Ga.LOCALSTORAGE,this.WEBSQL=Ga.WEBSQL,this._defaultConfig=ca({},Ja),this._config=ca({},this._defaultConfig,b),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver)}return a.prototype.config=function(a){if("object"===("undefined"==typeof a?"undefined":ea(a))){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var b in a)"storeName"===b&&(a[b]=a[b].replace(/\W/g,"_")),this._config[b]=a[b];return"driver"in a&&a.driver&&this.setDriver(this._config.driver),!0}return"string"==typeof a?this._config[a]:this._config},a.prototype.defineDriver=function(a,b,c){var d=new ia(function(b,c){try{var d=a._driver,e=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver"),f=new Error("Custom driver name already in use: "+a._driver);if(!a._driver)return void c(e);if(da(a._driver))return void c(f);for(var g=Ia.concat("_initStorage"),h=0;h<g.length;h++){var i=g[h];if(!i||!a[i]||"function"!=typeof a[i])return void c(e)}var j=ia.resolve(!0);"_support"in a&&(j=a._support&&"function"==typeof a._support?a._support():ia.resolve(!!a._support)),j.then(function(c){Ka[d]=c,Fa[d]=a,b()},c)}catch(k){c(k)}});return aa(d,b,c),d},a.prototype.driver=function(){return this._driver||null},a.prototype.getDriver=function(a,b,c){var d=this,e=ia.resolve().then(function(){if(!da(a)){if(Fa[a])return Fa[a];throw new Error("Driver not found.")}switch(a){case d.INDEXEDDB:return ka;case d.LOCALSTORAGE:return Ea;case d.WEBSQL:return Da}});return aa(e,b,c),e},a.prototype.getSerializer=function(a){var b=ia.resolve(Ca);return aa(b,a),b},a.prototype.ready=function(a){var b=this,c=b._driverSet.then(function(){return null===b._ready&&(b._ready=b._initDriver()),b._ready});return aa(c,a,a),c},a.prototype.setDriver=function(a,b,c){function d(){f._config.driver=f.driver()}function e(a){return function(){function b(){for(;c<a.length;){var e=a[c];return c++,f._dbInfo=null,f._ready=null,f.getDriver(e).then(function(a){return f._extend(a),d(),f._ready=f._initStorage(f._config),f._ready})["catch"](b)}d();var g=new Error("No available storage method found.");return f._driverSet=ia.reject(g),f._driverSet}var c=0;return b()}}var f=this;La(a)||(a=[a]);var g=this._getSupportedDrivers(a),h=null!==this._driverSet?this._driverSet["catch"](function(){return ia.resolve()}):ia.resolve();return this._driverSet=h.then(function(){var a=g[0];return f._dbInfo=null,f._ready=null,f.getDriver(a).then(function(a){f._driver=a._driver,d(),f._wrapLibraryMethodsWithReady(),f._initDriver=e(g)})})["catch"](function(){d();var a=new Error("No available storage method found.");return f._driverSet=ia.reject(a),f._driverSet}),aa(this._driverSet,b,c),this._driverSet},a.prototype.supports=function(a){return!!Ka[a]},a.prototype._extend=function(a){ca(this,a)},a.prototype._getSupportedDrivers=function(a){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c];this.supports(e)&&b.push(e)}return b},a.prototype._wrapLibraryMethodsWithReady=function(){for(var a=0;a<Ia.length;a++)ba(this,Ia[a])},a.prototype.createInstance=function(b){return new a(b)},a}(),Na=new Ma;b.exports=Na},{3:3}]},{},[4])(4)});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 30 */
/***/ function(module, exports) {

	/* global Promise */

	;(function (global, factory) { // eslint-disable-line
		"use strict"
		/* eslint-disable no-undef */
		var m = factory(global)
		module.exports = m
		/* eslint-enable no-undef */
	})(typeof window !== "undefined" ? window : this, function (global, undefined) { // eslint-disable-line
		"use strict"

		m.version = function () {
			return "v0.2.5"
		}

		var hasOwn = {}.hasOwnProperty
		var type = {}.toString

		function isFunction(object) {
			return typeof object === "function"
		}

		function isObject(object) {
			return type.call(object) === "[object Object]"
		}

		function isString(object) {
			return type.call(object) === "[object String]"
		}

		var isArray = Array.isArray || function (object) {
			return type.call(object) === "[object Array]"
		}

		function noop() {}

		var voidElements = {
			AREA: 1,
			BASE: 1,
			BR: 1,
			COL: 1,
			COMMAND: 1,
			EMBED: 1,
			HR: 1,
			IMG: 1,
			INPUT: 1,
			KEYGEN: 1,
			LINK: 1,
			META: 1,
			PARAM: 1,
			SOURCE: 1,
			TRACK: 1,
			WBR: 1
		}

		// caching commonly used variables
		var $document, $location, $requestAnimationFrame, $cancelAnimationFrame

		// self invoking function needed because of the way mocks work
		function initialize(mock) {
			$document = mock.document
			$location = mock.location
			$cancelAnimationFrame = mock.cancelAnimationFrame || mock.clearTimeout
			$requestAnimationFrame = mock.requestAnimationFrame || mock.setTimeout
		}

		// testing API
		m.deps = function (mock) {
			initialize(global = mock || window)
			return global
		}

		m.deps(global)

		/**
		 * @typedef {String} Tag
		 * A string that looks like -> div.classname#id[param=one][param2=two]
		 * Which describes a DOM node
		 */

		function parseTagAttrs(cell, tag) {
			var classes = []
			/* eslint-disable max-len */
			var parser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g
			/* eslint-enable max-len */
			var match

			while ((match = parser.exec(tag))) {
				if (match[1] === "" && match[2]) {
					cell.tag = match[2]
				} else if (match[1] === "#") {
					cell.attrs.id = match[2]
				} else if (match[1] === ".") {
					classes.push(match[2])
				} else if (match[3][0] === "[") {
					var attrValue = match[6]
					if (attrValue) attrValue = attrValue.replace(/\\(["'])/g, "$1")
					cell.attrs[match[4]] = attrValue || true
				}
			}

			return classes
		}

		function getVirtualChildren(args, hasAttrs) {
			var children = hasAttrs ? args.slice(1) : args

			if (children.length === 1 && isArray(children[0])) {
				return children[0]
			} else {
				return children
			}
		}

		function assignAttrs(target, attrs, classes) {
			var classAttr = "class" in attrs ? "class" : "className"

			for (var attrName in attrs) {
				if (hasOwn.call(attrs, attrName)) {
					if (attrName === classAttr &&
							attrs[attrName] != null &&
							attrs[attrName] !== "") {
						classes.push(attrs[attrName])
						// create key in correct iteration order
						target[attrName] = ""
					} else {
						target[attrName] = attrs[attrName]
					}
				}
			}

			if (classes.length) target[classAttr] = classes.join(" ")
		}

		/**
		 *
		 * @param {Tag} The DOM node tag
		 * @param {Object=[]} optional key-value pairs to be mapped to DOM attrs
		 * @param {...mNode=[]} Zero or more Mithril child nodes. Can be an array,
		 *                      or splat (optional)
		 */
		function m(tag, pairs) {
			var args = []

			for (var i = 1, length = arguments.length; i < length; i++) {
				args[i - 1] = arguments[i]
			}

			if (isObject(tag)) return parameterize(tag, args)

			if (!isString(tag)) {
				throw new Error("selector in m(selector, attrs, children) should " +
					"be a string")
			}

			var hasAttrs = pairs != null && isObject(pairs) &&
				!("tag" in pairs || "view" in pairs || "subtree" in pairs)

			var attrs = hasAttrs ? pairs : {}
			var cell = {
				tag: "div",
				attrs: {},
				children: getVirtualChildren(args, hasAttrs)
			}

			assignAttrs(cell.attrs, attrs, parseTagAttrs(cell, tag))
			return cell
		}

		function forEach(list, f) {
			for (var i = 0; i < list.length && !f(list[i], i++);) {
				// function called in condition
			}
		}

		function forKeys(list, f) {
			forEach(list, function (attrs, i) {
				return (attrs = attrs && attrs.attrs) &&
					attrs.key != null &&
					f(attrs, i)
			})
		}
		// This function was causing deopts in Chrome.
		function dataToString(data) {
			// data.toString() might throw or return null if data is the return
			// value of Console.log in some versions of Firefox (behavior depends on
			// version)
			try {
				if (typeof data !== "boolean" &&
						data != null &&
						data.toString() != null) return data
			} catch (e) {
				// silently ignore errors
			}
			return ""
		}

		// This function was causing deopts in Chrome.
		function injectTextNode(parentElement, first, index, data) {
			try {
				insertNode(parentElement, first, index)
				first.nodeValue = data
			} catch (e) {
				// IE erroneously throws error when appending an empty text node
				// after a null
			}
		}

		function flatten(list) {
			// recursively flatten array
			for (var i = 0; i < list.length; i++) {
				if (isArray(list[i])) {
					list = list.concat.apply([], list)
					// check current index again and flatten until there are no more
					// nested arrays at that index
					i--
				}
			}
			return list
		}

		function insertNode(parentElement, node, index) {
			parentElement.insertBefore(node,
				parentElement.childNodes[index] || null)
		}

		var DELETION = 1
		var INSERTION = 2
		var MOVE = 3

		function handleKeysDiffer(data, existing, cached, parentElement) {
			forKeys(data, function (key, i) {
				existing[key = key.key] = existing[key] ? {
					action: MOVE,
					index: i,
					from: existing[key].index,
					element: cached.nodes[existing[key].index] ||
						$document.createElement("div")
				} : {action: INSERTION, index: i}
			})

			var actions = []
			for (var prop in existing) {
				if (hasOwn.call(existing, prop)) {
					actions.push(existing[prop])
				}
			}

			var changes = actions.sort(sortChanges)
			var newCached = new Array(cached.length)

			newCached.nodes = cached.nodes.slice()

			forEach(changes, function (change) {
				var index = change.index
				if (change.action === DELETION) {
					clear(cached[index].nodes, cached[index])
					newCached.splice(index, 1)
				}
				if (change.action === INSERTION) {
					var dummy = $document.createElement("div")
					dummy.key = data[index].attrs.key
					insertNode(parentElement, dummy, index)
					newCached.splice(index, 0, {
						attrs: {key: data[index].attrs.key},
						nodes: [dummy]
					})
					newCached.nodes[index] = dummy
				}

				if (change.action === MOVE) {
					var changeElement = change.element
					var maybeChanged = parentElement.childNodes[index]
					if (maybeChanged !== changeElement && changeElement !== null) {
						parentElement.insertBefore(changeElement,
							maybeChanged || null)
					}
					newCached[index] = cached[change.from]
					newCached.nodes[index] = changeElement
				}
			})

			return newCached
		}

		function diffKeys(data, cached, existing, parentElement) {
			var keysDiffer = data.length !== cached.length

			if (!keysDiffer) {
				forKeys(data, function (attrs, i) {
					var cachedCell = cached[i]
					return keysDiffer = cachedCell &&
						cachedCell.attrs &&
						cachedCell.attrs.key !== attrs.key
				})
			}

			if (keysDiffer) {
				return handleKeysDiffer(data, existing, cached, parentElement)
			} else {
				return cached
			}
		}

		function diffArray(data, cached, nodes) {
			// diff the array itself

			// update the list of DOM nodes by collecting the nodes from each item
			forEach(data, function (_, i) {
				if (cached[i] != null) nodes.push.apply(nodes, cached[i].nodes)
			})
			// remove items from the end of the array if the new array is shorter
			// than the old one. if errors ever happen here, the issue is most
			// likely a bug in the construction of the `cached` data structure
			// somewhere earlier in the program
			forEach(cached.nodes, function (node, i) {
				if (node.parentNode != null && nodes.indexOf(node) < 0) {
					clear([node], [cached[i]])
				}
			})

			if (data.length < cached.length) cached.length = data.length
			cached.nodes = nodes
		}

		function buildArrayKeys(data) {
			var guid = 0
			forKeys(data, function () {
				forEach(data, function (attrs) {
					if ((attrs = attrs && attrs.attrs) && attrs.key == null) {
						attrs.key = "__mithril__" + guid++
					}
				})
				return 1
			})
		}

		function isDifferentEnough(data, cached, dataAttrKeys) {
			if (data.tag !== cached.tag) return true

			if (dataAttrKeys.sort().join() !==
					Object.keys(cached.attrs).sort().join()) {
				return true
			}

			if (data.attrs.id !== cached.attrs.id) {
				return true
			}

			if (data.attrs.key !== cached.attrs.key) {
				return true
			}

			if (m.redraw.strategy() === "all") {
				return !cached.configContext || cached.configContext.retain !== true
			}

			if (m.redraw.strategy() === "diff") {
				return cached.configContext && cached.configContext.retain === false
			}

			return false
		}

		function maybeRecreateObject(data, cached, dataAttrKeys) {
			// if an element is different enough from the one in cache, recreate it
			if (isDifferentEnough(data, cached, dataAttrKeys)) {
				if (cached.nodes.length) clear(cached.nodes)

				if (cached.configContext &&
						isFunction(cached.configContext.onunload)) {
					cached.configContext.onunload()
				}

				if (cached.controllers) {
					forEach(cached.controllers, function (controller) {
						if (controller.onunload) {
							controller.onunload({preventDefault: noop})
						}
					})
				}
			}
		}

		function getObjectNamespace(data, namespace) {
			if (data.attrs.xmlns) return data.attrs.xmlns
			if (data.tag === "svg") return "http://www.w3.org/2000/svg"
			if (data.tag === "math") return "http://www.w3.org/1998/Math/MathML"
			return namespace
		}

		var pendingRequests = 0
		m.startComputation = function () { pendingRequests++ }
		m.endComputation = function () {
			if (pendingRequests > 1) {
				pendingRequests--
			} else {
				pendingRequests = 0
				m.redraw()
			}
		}

		function unloadCachedControllers(cached, views, controllers) {
			if (controllers.length) {
				cached.views = views
				cached.controllers = controllers
				forEach(controllers, function (controller) {
					if (controller.onunload && controller.onunload.$old) {
						controller.onunload = controller.onunload.$old
					}

					if (pendingRequests && controller.onunload) {
						var onunload = controller.onunload
						controller.onunload = noop
						controller.onunload.$old = onunload
					}
				})
			}
		}

		function scheduleConfigsToBeCalled(configs, data, node, isNew, cached) {
			// schedule configs to be called. They are called after `build` finishes
			// running
			if (isFunction(data.attrs.config)) {
				var context = cached.configContext = cached.configContext || {}

				// bind
				configs.push(function () {
					return data.attrs.config.call(data, node, !isNew, context,
						cached)
				})
			}
		}

		function buildUpdatedNode(
			cached,
			data,
			editable,
			hasKeys,
			namespace,
			views,
			configs,
			controllers
		) {
			var node = cached.nodes[0]

			if (hasKeys) {
				setAttributes(node, data.tag, data.attrs, cached.attrs, namespace)
			}

			cached.children = build(
				node,
				data.tag,
				undefined,
				undefined,
				data.children,
				cached.children,
				false,
				0,
				data.attrs.contenteditable ? node : editable,
				namespace,
				configs
			)

			cached.nodes.intact = true

			if (controllers.length) {
				cached.views = views
				cached.controllers = controllers
			}

			return node
		}

		function handleNonexistentNodes(data, parentElement, index) {
			var nodes
			if (data.$trusted) {
				nodes = injectHTML(parentElement, index, data)
			} else {
				nodes = [$document.createTextNode(data)]
				if (!(parentElement.nodeName in voidElements)) {
					insertNode(parentElement, nodes[0], index)
				}
			}

			var cached

			if (typeof data === "string" ||
					typeof data === "number" ||
					typeof data === "boolean") {
				cached = new data.constructor(data)
			} else {
				cached = data
			}

			cached.nodes = nodes
			return cached
		}

		function reattachNodes(
			data,
			cached,
			parentElement,
			editable,
			index,
			parentTag
		) {
			var nodes = cached.nodes
			if (!editable || editable !== $document.activeElement) {
				if (data.$trusted) {
					clear(nodes, cached)
					nodes = injectHTML(parentElement, index, data)
				} else if (parentTag === "textarea") {
					// <textarea> uses `value` instead of `nodeValue`.
					parentElement.value = data
				} else if (editable) {
					// contenteditable nodes use `innerHTML` instead of `nodeValue`.
					editable.innerHTML = data
				} else {
					// was a trusted string
					if (nodes[0].nodeType === 1 || nodes.length > 1 ||
							(nodes[0].nodeValue.trim &&
								!nodes[0].nodeValue.trim())) {
						clear(cached.nodes, cached)
						nodes = [$document.createTextNode(data)]
					}

					injectTextNode(parentElement, nodes[0], index, data)
				}
			}
			cached = new data.constructor(data)
			cached.nodes = nodes
			return cached
		}

		function handleTextNode(
			cached,
			data,
			index,
			parentElement,
			shouldReattach,
			editable,
			parentTag
		) {
			if (!cached.nodes.length) {
				return handleNonexistentNodes(data, parentElement, index)
			} else if (cached.valueOf() !== data.valueOf() || shouldReattach) {
				return reattachNodes(data, cached, parentElement, editable, index,
					parentTag)
			} else {
				return (cached.nodes.intact = true, cached)
			}
		}

		function getSubArrayCount(item) {
			if (item.$trusted) {
				// fix offset of next element if item was a trusted string w/ more
				// than one html element
				// the first clause in the regexp matches elements
				// the second clause (after the pipe) matches text nodes
				var match = item.match(/<[^\/]|\>\s*[^<]/g)
				if (match != null) return match.length
			} else if (isArray(item)) {
				return item.length
			}
			return 1
		}

		function buildArray(
			data,
			cached,
			parentElement,
			index,
			parentTag,
			shouldReattach,
			editable,
			namespace,
			configs
		) {
			data = flatten(data)
			var nodes = []
			var intact = cached.length === data.length
			var subArrayCount = 0

			// keys algorithm: sort elements without recreating them if keys are
			// present
			//
			// 1) create a map of all existing keys, and mark all for deletion
			// 2) add new keys to map and mark them for addition
			// 3) if key exists in new list, change action from deletion to a move
			// 4) for each key, handle its corresponding action as marked in
			//    previous steps

			var existing = {}
			var shouldMaintainIdentities = false

			forKeys(cached, function (attrs, i) {
				shouldMaintainIdentities = true
				existing[cached[i].attrs.key] = {action: DELETION, index: i}
			})

			buildArrayKeys(data)
			if (shouldMaintainIdentities) {
				cached = diffKeys(data, cached, existing, parentElement)
			}
			// end key algorithm

			var cacheCount = 0
			// faster explicitly written
			for (var i = 0, len = data.length; i < len; i++) {
				// diff each item in the array
				var item = build(
					parentElement,
					parentTag,
					cached,
					index,
					data[i],
					cached[cacheCount],
					shouldReattach,
					index + subArrayCount || subArrayCount,
					editable,
					namespace,
					configs)

				if (item !== undefined) {
					intact = intact && item.nodes.intact
					subArrayCount += getSubArrayCount(item)
					cached[cacheCount++] = item
				}
			}

			if (!intact) diffArray(data, cached, nodes)
			return cached
		}

		function makeCache(data, cached, index, parentIndex, parentCache) {
			if (cached != null) {
				if (type.call(cached) === type.call(data)) return cached

				if (parentCache && parentCache.nodes) {
					var offset = index - parentIndex
					var end = offset + (isArray(data) ? data : cached.nodes).length
					clear(
						parentCache.nodes.slice(offset, end),
						parentCache.slice(offset, end))
				} else if (cached.nodes) {
					clear(cached.nodes, cached)
				}
			}

			cached = new data.constructor()
			// if constructor creates a virtual dom element, use a blank object as
			// the base cached node instead of copying the virtual el (#277)
			if (cached.tag) cached = {}
			cached.nodes = []
			return cached
		}

		function constructNode(data, namespace) {
			if (data.attrs.is) {
				if (namespace == null) {
					return $document.createElement(data.tag, data.attrs.is)
				} else {
					return $document.createElementNS(namespace, data.tag,
						data.attrs.is)
				}
			} else if (namespace == null) {
				return $document.createElement(data.tag)
			} else {
				return $document.createElementNS(namespace, data.tag)
			}
		}

		function constructAttrs(data, node, namespace, hasKeys) {
			if (hasKeys) {
				return setAttributes(node, data.tag, data.attrs, {}, namespace)
			} else {
				return data.attrs
			}
		}

		function constructChildren(
			data,
			node,
			cached,
			editable,
			namespace,
			configs
		) {
			if (data.children != null && data.children.length > 0) {
				return build(
					node,
					data.tag,
					undefined,
					undefined,
					data.children,
					cached.children,
					true,
					0,
					data.attrs.contenteditable ? node : editable,
					namespace,
					configs)
			} else {
				return data.children
			}
		}

		function reconstructCached(
			data,
			attrs,
			children,
			node,
			namespace,
			views,
			controllers
		) {
			var cached = {
				tag: data.tag,
				attrs: attrs,
				children: children,
				nodes: [node]
			}

			unloadCachedControllers(cached, views, controllers)

			if (cached.children && !cached.children.nodes) {
				cached.children.nodes = []
			}

			return cached
		}

		function getController(views, view, cachedControllers, controller) {
			var controllerIndex

			if (m.redraw.strategy() === "diff" && views) {
				controllerIndex = views.indexOf(view)
			} else {
				controllerIndex = -1
			}

			if (controllerIndex > -1) {
				return cachedControllers[controllerIndex]
			} else if (isFunction(controller)) {
				return new controller()
			} else {
				return {}
			}
		}

		var unloaders = []

		function updateLists(views, controllers, view, controller) {
			if (controller.onunload != null &&
					unloaders.map(function (u) { return u.handler })
						.indexOf(controller.onunload) < 0) {
				unloaders.push({
					controller: controller,
					handler: controller.onunload
				})
			}

			views.push(view)
			controllers.push(controller)
		}

		var forcing = false
		function checkView(
			data,
			view,
			cached,
			cachedControllers,
			controllers,
			views
		) {
			var controller = getController(
				cached.views,
				view,
				cachedControllers,
				data.controller)

			var key = data && data.attrs && data.attrs.key

			if (pendingRequests === 0 ||
					forcing ||
					cachedControllers &&
						cachedControllers.indexOf(controller) > -1) {
				data = data.view(controller)
			} else {
				data = {tag: "placeholder"}
			}

			if (data.subtree === "retain") return data
			data.attrs = data.attrs || {}
			data.attrs.key = key
			updateLists(views, controllers, view, controller)
			return data
		}

		function markViews(data, cached, views, controllers) {
			var cachedControllers = cached && cached.controllers

			while (data.view != null) {
				data = checkView(
					data,
					data.view.$original || data.view,
					cached,
					cachedControllers,
					controllers,
					views)
			}

			return data
		}

		function buildObject( // eslint-disable-line max-statements
			data,
			cached,
			editable,
			parentElement,
			index,
			shouldReattach,
			namespace,
			configs
		) {
			var views = []
			var controllers = []

			data = markViews(data, cached, views, controllers)

			if (data.subtree === "retain") return cached

			if (!data.tag && controllers.length) {
				throw new Error("Component template must return a virtual " +
					"element, not an array, string, etc.")
			}

			data.attrs = data.attrs || {}
			cached.attrs = cached.attrs || {}

			var dataAttrKeys = Object.keys(data.attrs)
			var hasKeys = dataAttrKeys.length > ("key" in data.attrs ? 1 : 0)

			maybeRecreateObject(data, cached, dataAttrKeys)

			if (!isString(data.tag)) return

			var isNew = cached.nodes.length === 0

			namespace = getObjectNamespace(data, namespace)

			var node
			if (isNew) {
				node = constructNode(data, namespace)
				// set attributes first, then create children
				var attrs = constructAttrs(data, node, namespace, hasKeys)

				// add the node to its parent before attaching children to it
				insertNode(parentElement, node, index)

				var children = constructChildren(data, node, cached, editable,
					namespace, configs)

				cached = reconstructCached(
					data,
					attrs,
					children,
					node,
					namespace,
					views,
					controllers)
			} else {
				node = buildUpdatedNode(
					cached,
					data,
					editable,
					hasKeys,
					namespace,
					views,
					configs,
					controllers)
			}

			// edge case: setting value on <select> doesn't work before children
			// exist, so set it again after children have been created/updated
			if (data.tag === "select" && "value" in data.attrs) {
				setAttributes(node, data.tag, {value: data.attrs.value}, {},
					namespace)
			}

			if (!isNew && shouldReattach === true && node != null) {
				insertNode(parentElement, node, index)
			}

			// The configs are called after `build` finishes running
			scheduleConfigsToBeCalled(configs, data, node, isNew, cached)

			return cached
		}

		function build(
			parentElement,
			parentTag,
			parentCache,
			parentIndex,
			data,
			cached,
			shouldReattach,
			index,
			editable,
			namespace,
			configs
		) {
			/*
			 * `build` is a recursive function that manages creation/diffing/removal
			 * of DOM elements based on comparison between `data` and `cached` the
			 * diff algorithm can be summarized as this:
			 *
			 * 1 - compare `data` and `cached`
			 * 2 - if they are different, copy `data` to `cached` and update the DOM
			 *     based on what the difference is
			 * 3 - recursively apply this algorithm for every array and for the
			 *     children of every virtual element
			 *
			 * The `cached` data structure is essentially the same as the previous
			 * redraw's `data` data structure, with a few additions:
			 * - `cached` always has a property called `nodes`, which is a list of
			 *    DOM elements that correspond to the data represented by the
			 *    respective virtual element
			 * - in order to support attaching `nodes` as a property of `cached`,
			 *    `cached` is *always* a non-primitive object, i.e. if the data was
			 *    a string, then cached is a String instance. If data was `null` or
			 *    `undefined`, cached is `new String("")`
			 * - `cached also has a `configContext` property, which is the state
			 *    storage object exposed by config(element, isInitialized, context)
			 * - when `cached` is an Object, it represents a virtual element; when
			 *    it's an Array, it represents a list of elements; when it's a
			 *    String, Number or Boolean, it represents a text node
			 *
			 * `parentElement` is a DOM element used for W3C DOM API calls
			 * `parentTag` is only used for handling a corner case for textarea
			 * values
			 * `parentCache` is used to remove nodes in some multi-node cases
			 * `parentIndex` and `index` are used to figure out the offset of nodes.
			 * They're artifacts from before arrays started being flattened and are
			 * likely refactorable
			 * `data` and `cached` are, respectively, the new and old nodes being
			 * diffed
			 * `shouldReattach` is a flag indicating whether a parent node was
			 * recreated (if so, and if this node is reused, then this node must
			 * reattach itself to the new parent)
			 * `editable` is a flag that indicates whether an ancestor is
			 * contenteditable
			 * `namespace` indicates the closest HTML namespace as it cascades down
			 * from an ancestor
			 * `configs` is a list of config functions to run after the topmost
			 * `build` call finishes running
			 *
			 * there's logic that relies on the assumption that null and undefined
			 * data are equivalent to empty strings
			 * - this prevents lifecycle surprises from procedural helpers that mix
			 *   implicit and explicit return statements (e.g.
			 *   function foo() {if (cond) return m("div")}
			 * - it simplifies diffing code
			 */
			data = dataToString(data)
			if (data.subtree === "retain") return cached
			cached = makeCache(data, cached, index, parentIndex, parentCache)

			if (isArray(data)) {
				return buildArray(
					data,
					cached,
					parentElement,
					index,
					parentTag,
					shouldReattach,
					editable,
					namespace,
					configs)
			} else if (data != null && isObject(data)) {
				return buildObject(
					data,
					cached,
					editable,
					parentElement,
					index,
					shouldReattach,
					namespace,
					configs)
			} else if (!isFunction(data)) {
				return handleTextNode(
					cached,
					data,
					index,
					parentElement,
					shouldReattach,
					editable,
					parentTag)
			} else {
				return cached
			}
		}

		function sortChanges(a, b) {
			return a.action - b.action || a.index - b.index
		}

		function copyStyleAttrs(node, dataAttr, cachedAttr) {
			if (cachedAttr === dataAttr) {
				node.style = ""
				cachedAttr = {}
			}
			for (var rule in dataAttr) {
				if (hasOwn.call(dataAttr, rule)) {
					if (cachedAttr == null || cachedAttr[rule] !== dataAttr[rule]) {
						node.style[rule] = dataAttr[rule]
					}
				}
			}

			for (rule in cachedAttr) {
				if (hasOwn.call(cachedAttr, rule)) {
					if (!hasOwn.call(dataAttr, rule)) node.style[rule] = ""
				}
			}
		}

		var shouldUseSetAttribute = {
			list: 1,
			style: 1,
			form: 1,
			type: 1,
			width: 1,
			height: 1
		}

		function setSingleAttr(
			node,
			attrName,
			dataAttr,
			cachedAttr,
			tag,
			namespace
		) {
			if (attrName === "config" || attrName === "key") {
				// `config` isn't a real attribute, so ignore it
				return true
			} else if (isFunction(dataAttr) && attrName.slice(0, 2) === "on") {
				// hook event handlers to the auto-redrawing system
				node[attrName] = autoredraw(dataAttr, node)
			} else if (attrName === "style" && dataAttr != null &&
					isObject(dataAttr)) {
				// handle `style: {...}`
				copyStyleAttrs(node, dataAttr, cachedAttr)
			} else if (namespace != null) {
				// handle SVG
				if (attrName === "href") {
					node.setAttributeNS("http://www.w3.org/1999/xlink",
						"href", dataAttr)
				} else {
					node.setAttribute(
						attrName === "className" ? "class" : attrName,
						dataAttr)
				}
			} else if (attrName in node && !shouldUseSetAttribute[attrName]) {
				// handle cases that are properties (but ignore cases where we
				// should use setAttribute instead)
				//
				// - list and form are typically used as strings, but are DOM
				//   element references in js
				//
				// - when using CSS selectors (e.g. `m("[style='']")`), style is
				//   used as a string, but it's an object in js
				//
				// #348 don't set the value if not needed - otherwise, cursor
				// placement breaks in Chrome
				try {
					if (tag !== "input" || node[attrName] !== dataAttr) {
						node[attrName] = dataAttr
					}
				} catch (e) {
					node.setAttribute(attrName, dataAttr)
				}
			} else node.setAttribute(attrName, dataAttr)
		}

		function trySetAttr(
			node,
			attrName,
			dataAttr,
			cachedAttr,
			cachedAttrs,
			tag,
			namespace
		) {
			if (!(attrName in cachedAttrs) ||
					(cachedAttr !== dataAttr) ||
					typeof dataAttr === "object" ||
					($document.activeElement === node)) {
				cachedAttrs[attrName] = dataAttr
				try {
					return setSingleAttr(
						node,
						attrName,
						dataAttr,
						cachedAttr,
						tag,
						namespace)
				} catch (e) {
					// swallow IE's invalid argument errors to mimic HTML's
					// fallback-to-doing-nothing-on-invalid-attributes behavior
					if (e.message.indexOf("Invalid argument") < 0) throw e
				}
			} else if (attrName === "value" && tag === "input" &&
									node.value !== dataAttr) {
				// #348 dataAttr may not be a string, so use loose comparison
				node.value = dataAttr
			}
		}

		function setAttributes(node, tag, dataAttrs, cachedAttrs, namespace) {
			for (var attrName in dataAttrs) {
				if (hasOwn.call(dataAttrs, attrName)) {
					if (trySetAttr(
							node,
							attrName,
							dataAttrs[attrName],
							cachedAttrs[attrName],
							cachedAttrs,
							tag,
							namespace)) {
						continue
					}
				}
			}
			return cachedAttrs
		}

		function clear(nodes, cached) {
			for (var i = nodes.length - 1; i > -1; i--) {
				if (nodes[i] && nodes[i].parentNode) {
					try {
						nodes[i].parentNode.removeChild(nodes[i])
					} catch (e) {
						/* eslint-disable max-len */
						// ignore if this fails due to order of events (see
						// http://stackoverflow.com/questions/21926083/failed-to-execute-removechild-on-node)
						/* eslint-enable max-len */
					}
					cached = [].concat(cached)
					if (cached[i]) unload(cached[i])
				}
			}
			// release memory if nodes is an array. This check should fail if nodes
			// is a NodeList (see loop above)
			if (nodes.length) {
				nodes.length = 0
			}
		}

		function unload(cached) {
			if (cached.configContext && isFunction(cached.configContext.onunload)) {
				cached.configContext.onunload()
				cached.configContext.onunload = null
			}
			if (cached.controllers) {
				forEach(cached.controllers, function (controller) {
					if (isFunction(controller.onunload)) {
						controller.onunload({preventDefault: noop})
					}
				})
			}
			if (cached.children) {
				if (isArray(cached.children)) forEach(cached.children, unload)
				else if (cached.children.tag) unload(cached.children)
			}
		}

		function appendTextFragment(parentElement, data) {
			try {
				parentElement.appendChild(
					$document.createRange().createContextualFragment(data))
			} catch (e) {
				parentElement.insertAdjacentHTML("beforeend", data)
				replaceScriptNodes(parentElement)
			}
		}

		// Replace script tags inside given DOM element with executable ones.
		// Will also check children recursively and replace any found script
		// tags in same manner.
		function replaceScriptNodes(node) {
			if (node.tagName === "SCRIPT") {
				node.parentNode.replaceChild(buildExecutableNode(node), node)
			} else {
				var children = node.childNodes
				if (children && children.length) {
					for (var i = 0; i < children.length; i++) {
						replaceScriptNodes(children[i])
					}
				}
			}

			return node
		}

		// Replace script element with one whose contents are executable.
		function buildExecutableNode(node){
			var scriptEl = document.createElement("script")
			var attrs = node.attributes

			for (var i = 0; i < attrs.length; i++) {
				scriptEl.setAttribute(attrs[i].name, attrs[i].value)
			}

			scriptEl.text = node.innerHTML
			return scriptEl
		}

		function injectHTML(parentElement, index, data) {
			var nextSibling = parentElement.childNodes[index]
			if (nextSibling) {
				var isElement = nextSibling.nodeType !== 1
				var placeholder = $document.createElement("span")
				if (isElement) {
					parentElement.insertBefore(placeholder, nextSibling || null)
					placeholder.insertAdjacentHTML("beforebegin", data)
					parentElement.removeChild(placeholder)
				} else {
					nextSibling.insertAdjacentHTML("beforebegin", data)
				}
			} else {
				appendTextFragment(parentElement, data)
			}

			var nodes = []

			while (parentElement.childNodes[index] !== nextSibling) {
				nodes.push(parentElement.childNodes[index])
				index++
			}

			return nodes
		}

		function autoredraw(callback, object) {
			return function (e) {
				e = e || event
				m.redraw.strategy("diff")
				m.startComputation()
				try {
					return callback.call(object, e)
				} finally {
					endFirstComputation()
				}
			}
		}

		var html
		var documentNode = {
			appendChild: function (node) {
				if (html === undefined) html = $document.createElement("html")
				if ($document.documentElement &&
						$document.documentElement !== node) {
					$document.replaceChild(node, $document.documentElement)
				} else {
					$document.appendChild(node)
				}

				this.childNodes = $document.childNodes
			},

			insertBefore: function (node) {
				this.appendChild(node)
			},

			childNodes: []
		}

		var nodeCache = []
		var cellCache = {}

		m.render = function (root, cell, forceRecreation) {
			if (!root) {
				throw new Error("Ensure the DOM element being passed to " +
					"m.route/m.mount/m.render is not undefined.")
			}
			var configs = []
			var id = getCellCacheKey(root)
			var isDocumentRoot = root === $document
			var node

			if (isDocumentRoot || root === $document.documentElement) {
				node = documentNode
			} else {
				node = root
			}

			if (isDocumentRoot && cell.tag !== "html") {
				cell = {tag: "html", attrs: {}, children: cell}
			}

			if (cellCache[id] === undefined) clear(node.childNodes)
			if (forceRecreation === true) reset(root)

			cellCache[id] = build(
				node,
				null,
				undefined,
				undefined,
				cell,
				cellCache[id],
				false,
				0,
				null,
				undefined,
				configs)

			forEach(configs, function (config) { config() })
		}

		function getCellCacheKey(element) {
			var index = nodeCache.indexOf(element)
			return index < 0 ? nodeCache.push(element) - 1 : index
		}

		m.trust = function (value) {
			value = new String(value) // eslint-disable-line no-new-wrappers
			value.$trusted = true
			return value
		}

		function gettersetter(store) {
			function prop() {
				if (arguments.length) store = arguments[0]
				return store
			}

			prop.toJSON = function () {
				return store
			}

			return prop
		}

		m.prop = function (store) {
			if ((store != null && (isObject(store) || isFunction(store)) ||
						((typeof Promise !== "undefined") &&
							(store instanceof Promise))) &&
					isFunction(store.then)) {
				return propify(store)
			}

			return gettersetter(store)
		}

		var roots = []
		var components = []
		var controllers = []
		var lastRedrawId = null
		var lastRedrawCallTime = 0
		var computePreRedrawHook = null
		var computePostRedrawHook = null
		var topComponent
		var FRAME_BUDGET = 16 // 60 frames per second = 1 call per 16 ms

		function parameterize(component, args) {
			function controller() {
				/* eslint-disable no-invalid-this */
				return (component.controller || noop).apply(this, args) || this
				/* eslint-enable no-invalid-this */
			}

			if (component.controller) {
				controller.prototype = component.controller.prototype
			}

			function view(ctrl) {
				var currentArgs = [ctrl].concat(args)
				for (var i = 1; i < arguments.length; i++) {
					currentArgs.push(arguments[i])
				}

				return component.view.apply(component, currentArgs)
			}

			view.$original = component.view
			var output = {controller: controller, view: view}
			if (args[0] && args[0].key != null) output.attrs = {key: args[0].key}
			return output
		}

		m.component = function (component) {
			var args = new Array(arguments.length - 1)

			for (var i = 1; i < arguments.length; i++) {
				args[i - 1] = arguments[i]
			}

			return parameterize(component, args)
		}

		function checkPrevented(component, root, index, isPrevented) {
			if (!isPrevented) {
				m.redraw.strategy("all")
				m.startComputation()
				roots[index] = root
				var currentComponent

				if (component) {
					currentComponent = topComponent = component
				} else {
					currentComponent = topComponent = component = {controller: noop}
				}

				var controller = new (component.controller || noop)()

				// controllers may call m.mount recursively (via m.route redirects,
				// for example)
				// this conditional ensures only the last recursive m.mount call is
				// applied
				if (currentComponent === topComponent) {
					controllers[index] = controller
					components[index] = component
				}
				endFirstComputation()
				if (component === null) {
					removeRootElement(root, index)
				}
				return controllers[index]
			} else if (component == null) {
				removeRootElement(root, index)
			}
		}

		m.mount = m.module = function (root, component) {
			if (!root) {
				throw new Error("Please ensure the DOM element exists before " +
					"rendering a template into it.")
			}

			var index = roots.indexOf(root)
			if (index < 0) index = roots.length

			var isPrevented = false
			var event = {
				preventDefault: function () {
					isPrevented = true
					computePreRedrawHook = computePostRedrawHook = null
				}
			}

			forEach(unloaders, function (unloader) {
				unloader.handler.call(unloader.controller, event)
				unloader.controller.onunload = null
			})

			if (isPrevented) {
				forEach(unloaders, function (unloader) {
					unloader.controller.onunload = unloader.handler
				})
			} else {
				unloaders = []
			}

			if (controllers[index] && isFunction(controllers[index].onunload)) {
				controllers[index].onunload(event)
			}

			return checkPrevented(component, root, index, isPrevented)
		}

		function removeRootElement(root, index) {
			roots.splice(index, 1)
			controllers.splice(index, 1)
			components.splice(index, 1)
			reset(root)
			nodeCache.splice(getCellCacheKey(root), 1)
			unloaders = []
		}

		var redrawing = false
		m.redraw = function (force) {
			if (redrawing) return
			redrawing = true
			if (force) forcing = true

			try {
				// lastRedrawId is a positive number if a second redraw is requested
				// before the next animation frame
				// lastRedrawId is null if it's the first redraw and not an event
				// handler
				if (lastRedrawId && !force) {
					// when setTimeout: only reschedule redraw if time between now
					// and previous redraw is bigger than a frame, otherwise keep
					// currently scheduled timeout
					// when rAF: always reschedule redraw
					if ($requestAnimationFrame === global.requestAnimationFrame ||
							new Date() - lastRedrawCallTime > FRAME_BUDGET) {
						if (lastRedrawId > 0) $cancelAnimationFrame(lastRedrawId)
						lastRedrawId = $requestAnimationFrame(redraw, FRAME_BUDGET)
					}
				} else {
					redraw()
					lastRedrawId = $requestAnimationFrame(function () {
						lastRedrawId = null
					}, FRAME_BUDGET)
				}
			} finally {
				redrawing = forcing = false
			}
		}

		m.redraw.strategy = m.prop()
		function redraw() {
			if (computePreRedrawHook) {
				computePreRedrawHook()
				computePreRedrawHook = null
			}
			forEach(roots, function (root, i) {
				var component = components[i]
				if (controllers[i]) {
					var args = [controllers[i]]
					m.render(root,
						component.view ? component.view(controllers[i], args) : "")
				}
			})
			// after rendering within a routed context, we need to scroll back to
			// the top, and fetch the document title for history.pushState
			if (computePostRedrawHook) {
				computePostRedrawHook()
				computePostRedrawHook = null
			}
			lastRedrawId = null
			lastRedrawCallTime = new Date()
			m.redraw.strategy("diff")
		}

		function endFirstComputation() {
			if (m.redraw.strategy() === "none") {
				pendingRequests--
				m.redraw.strategy("diff")
			} else {
				m.endComputation()
			}
		}

		m.withAttr = function (prop, withAttrCallback, callbackThis) {
			return function (e) {
				e = e || window.event
				/* eslint-disable no-invalid-this */
				var currentTarget = e.currentTarget || this
				var _this = callbackThis || this
				/* eslint-enable no-invalid-this */
				var target = prop in currentTarget ?
					currentTarget[prop] :
					currentTarget.getAttribute(prop)
				withAttrCallback.call(_this, target)
			}
		}

		// routing
		var modes = {pathname: "", hash: "#", search: "?"}
		var redirect = noop
		var isDefaultRoute = false
		var routeParams, currentRoute

		m.route = function (root, arg1, arg2, vdom) { // eslint-disable-line
			// m.route()
			if (arguments.length === 0) return currentRoute
			// m.route(el, defaultRoute, routes)
			if (arguments.length === 3 && isString(arg1)) {
				redirect = function (source) {
					var path = currentRoute = normalizeRoute(source)
					if (!routeByValue(root, arg2, path)) {
						if (isDefaultRoute) {
							throw new Error("Ensure the default route matches " +
								"one of the routes defined in m.route")
						}

						isDefaultRoute = true
						m.route(arg1, true)
						isDefaultRoute = false
					}
				}

				var listener = m.route.mode === "hash" ?
					"onhashchange" :
					"onpopstate"

				global[listener] = function () {
					var path = $location[m.route.mode]
					if (m.route.mode === "pathname") path += $location.search
					if (currentRoute !== normalizeRoute(path)) redirect(path)
				}

				computePreRedrawHook = setScroll
				global[listener]()

				return
			}

			// config: m.route
			if (root.addEventListener || root.attachEvent) {
				var base = m.route.mode !== "pathname" ? $location.pathname : ""
				root.href = base + modes[m.route.mode] + vdom.attrs.href
				if (root.addEventListener) {
					root.removeEventListener("click", routeUnobtrusive)
					root.addEventListener("click", routeUnobtrusive)
				} else {
					root.detachEvent("onclick", routeUnobtrusive)
					root.attachEvent("onclick", routeUnobtrusive)
				}

				return
			}
			// m.route(route, params, shouldReplaceHistoryEntry)
			if (isString(root)) {
				var oldRoute = currentRoute
				currentRoute = root

				var args = arg1 || {}
				var queryIndex = currentRoute.indexOf("?")
				var params

				if (queryIndex > -1) {
					params = parseQueryString(currentRoute.slice(queryIndex + 1))
				} else {
					params = {}
				}

				for (var i in args) {
					if (hasOwn.call(args, i)) {
						params[i] = args[i]
					}
				}

				var querystring = buildQueryString(params)
				var currentPath

				if (queryIndex > -1) {
					currentPath = currentRoute.slice(0, queryIndex)
				} else {
					currentPath = currentRoute
				}

				if (querystring) {
					currentRoute = currentPath +
						(currentPath.indexOf("?") === -1 ? "?" : "&") +
						querystring
				}

				var replaceHistory =
					(arguments.length === 3 ? arg2 : arg1) === true ||
					oldRoute === root

				if (global.history.pushState) {
					var method = replaceHistory ? "replaceState" : "pushState"
					computePreRedrawHook = setScroll
					computePostRedrawHook = function () {
						try {
							global.history[method](null, $document.title,
								modes[m.route.mode] + currentRoute)
						} catch (err) {
							// In the event of a pushState or replaceState failure,
							// fallback to a standard redirect. This is specifically
							// to address a Safari security error when attempting to
							// call pushState more than 100 times.
							$location[m.route.mode] = currentRoute
						}
					}
					redirect(modes[m.route.mode] + currentRoute)
				} else {
					$location[m.route.mode] = currentRoute
					redirect(modes[m.route.mode] + currentRoute)
				}
			}
		}

		m.route.param = function (key) {
			if (!routeParams) {
				throw new Error("You must call m.route(element, defaultRoute, " +
					"routes) before calling m.route.param()")
			}

			if (!key) {
				return routeParams
			}

			return routeParams[key]
		}

		m.route.mode = "search"

		function normalizeRoute(route) {
			return route.slice(modes[m.route.mode].length)
		}

		function routeByValue(root, router, path) {
			routeParams = {}

			var queryStart = path.indexOf("?")
			if (queryStart !== -1) {
				routeParams = parseQueryString(
					path.substr(queryStart + 1, path.length))
				path = path.substr(0, queryStart)
			}

			// Get all routes and check if there's
			// an exact match for the current path
			var keys = Object.keys(router)
			var index = keys.indexOf(path)

			if (index !== -1){
				m.mount(root, router[keys [index]])
				return true
			}

			for (var route in router) {
				if (hasOwn.call(router, route)) {
					if (route === path) {
						m.mount(root, router[route])
						return true
					}

					var matcher = new RegExp("^" + route
						.replace(/:[^\/]+?\.{3}/g, "(.*?)")
						.replace(/:[^\/]+/g, "([^\\/]+)") + "\/?$")

					if (matcher.test(path)) {
						/* eslint-disable no-loop-func */
						path.replace(matcher, function () {
							var keys = route.match(/:[^\/]+/g) || []
							var values = [].slice.call(arguments, 1, -2)
							forEach(keys, function (key, i) {
								routeParams[key.replace(/:|\./g, "")] =
									decodeURIComponent(values[i])
							})
							m.mount(root, router[route])
						})
						/* eslint-enable no-loop-func */
						return true
					}
				}
			}
		}

		function routeUnobtrusive(e) {
			e = e || event
			if (e.ctrlKey || e.metaKey || e.shiftKey || e.which === 2) return

			if (e.preventDefault) {
				e.preventDefault()
			} else {
				e.returnValue = false
			}

			var currentTarget = e.currentTarget || e.srcElement
			var args

			if (m.route.mode === "pathname" && currentTarget.search) {
				args = parseQueryString(currentTarget.search.slice(1))
			} else {
				args = {}
			}

			while (currentTarget && !/a/i.test(currentTarget.nodeName)) {
				currentTarget = currentTarget.parentNode
			}

			// clear pendingRequests because we want an immediate route change
			pendingRequests = 0
			m.route(currentTarget[m.route.mode]
				.slice(modes[m.route.mode].length), args)
		}

		function setScroll() {
			if (m.route.mode !== "hash" && $location.hash) {
				$location.hash = $location.hash
			} else {
				global.scrollTo(0, 0)
			}
		}

		function buildQueryString(object, prefix) {
			var duplicates = {}
			var str = []

			for (var prop in object) {
				if (hasOwn.call(object, prop)) {
					var key = prefix ? prefix + "[" + prop + "]" : prop
					var value = object[prop]

					if (value === null) {
						str.push(encodeURIComponent(key))
					} else if (isObject(value)) {
						str.push(buildQueryString(value, key))
					} else if (isArray(value)) {
						var keys = []
						duplicates[key] = duplicates[key] || {}
						/* eslint-disable no-loop-func */
						forEach(value, function (item) {
							/* eslint-enable no-loop-func */
							if (!duplicates[key][item]) {
								duplicates[key][item] = true
								keys.push(encodeURIComponent(key) + "=" +
									encodeURIComponent(item))
							}
						})
						str.push(keys.join("&"))
					} else if (value !== undefined) {
						str.push(encodeURIComponent(key) + "=" +
							encodeURIComponent(value))
					}
				}
			}

			return str.join("&")
		}

		function parseQueryString(str) {
			if (str === "" || str == null) return {}
			if (str.charAt(0) === "?") str = str.slice(1)

			var pairs = str.split("&")
			var params = {}

			forEach(pairs, function (string) {
				var pair = string.split("=")
				var key = decodeURIComponent(pair[0])
				var value = pair.length === 2 ? decodeURIComponent(pair[1]) : null
				if (params[key] != null) {
					if (!isArray(params[key])) params[key] = [params[key]]
					params[key].push(value)
				} else params[key] = value
			})

			return params
		}

		m.route.buildQueryString = buildQueryString
		m.route.parseQueryString = parseQueryString

		function reset(root) {
			var cacheKey = getCellCacheKey(root)
			clear(root.childNodes, cellCache[cacheKey])
			cellCache[cacheKey] = undefined
		}

		m.deferred = function () {
			var deferred = new Deferred()
			deferred.promise = propify(deferred.promise)
			return deferred
		}

		function propify(promise, initialValue) {
			var prop = m.prop(initialValue)
			promise.then(prop)
			prop.then = function (resolve, reject) {
				return propify(promise.then(resolve, reject), initialValue)
			}

			prop["catch"] = prop.then.bind(null, null)
			return prop
		}
		// Promiz.mithril.js | Zolmeister | MIT
		// a modified version of Promiz.js, which does not conform to Promises/A+
		// for two reasons:
		//
		// 1) `then` callbacks are called synchronously (because setTimeout is too
		//    slow, and the setImmediate polyfill is too big
		//
		// 2) throwing subclasses of Error cause the error to be bubbled up instead
		//    of triggering rejection (because the spec does not account for the
		//    important use case of default browser error handling, i.e. message w/
		//    line number)

		var RESOLVING = 1
		var REJECTING = 2
		var RESOLVED = 3
		var REJECTED = 4

		function Deferred(onSuccess, onFailure) {
			var self = this
			var state = 0
			var promiseValue = 0
			var next = []

			self.promise = {}

			self.resolve = function (value) {
				if (!state) {
					promiseValue = value
					state = RESOLVING

					fire()
				}

				return self
			}

			self.reject = function (value) {
				if (!state) {
					promiseValue = value
					state = REJECTING

					fire()
				}

				return self
			}

			self.promise.then = function (onSuccess, onFailure) {
				var deferred = new Deferred(onSuccess, onFailure)

				if (state === RESOLVED) {
					deferred.resolve(promiseValue)
				} else if (state === REJECTED) {
					deferred.reject(promiseValue)
				} else {
					next.push(deferred)
				}

				return deferred.promise
			}

			function finish(type) {
				state = type || REJECTED
				next.map(function (deferred) {
					if (state === RESOLVED) {
						deferred.resolve(promiseValue)
					} else {
						deferred.reject(promiseValue)
					}
				})
			}

			function thennable(then, success, failure, notThennable) {
				if (((promiseValue != null && isObject(promiseValue)) ||
						isFunction(promiseValue)) && isFunction(then)) {
					try {
						// count protects against abuse calls from spec checker
						var count = 0
						then.call(promiseValue, function (value) {
							if (count++) return
							promiseValue = value
							success()
						}, function (value) {
							if (count++) return
							promiseValue = value
							failure()
						})
					} catch (e) {
						m.deferred.onerror(e)
						promiseValue = e
						failure()
					}
				} else {
					notThennable()
				}
			}

			function fire() {
				// check if it's a thenable
				var then
				try {
					then = promiseValue && promiseValue.then
				} catch (e) {
					m.deferred.onerror(e)
					promiseValue = e
					state = REJECTING
					return fire()
				}

				if (state === REJECTING) {
					m.deferred.onerror(promiseValue)
				}

				thennable(then, function () {
					state = RESOLVING
					fire()
				}, function () {
					state = REJECTING
					fire()
				}, function () {
					try {
						if (state === RESOLVING && isFunction(onSuccess)) {
							promiseValue = onSuccess(promiseValue)
						} else if (state === REJECTING && isFunction(onFailure)) {
							promiseValue = onFailure(promiseValue)
							state = RESOLVING
						}
					} catch (e) {
						m.deferred.onerror(e)
						promiseValue = e
						return finish()
					}

					if (promiseValue === self) {
						promiseValue = TypeError()
						finish()
					} else {
						thennable(then, function () {
							finish(RESOLVED)
						}, finish, function () {
							finish(state === RESOLVING && RESOLVED)
						})
					}
				})
			}
		}

		m.deferred.onerror = function (e) {
			if (type.call(e) === "[object Error]" &&
					!/ Error/.test(e.constructor.toString())) {
				pendingRequests = 0
				throw e
			}
		}

		m.sync = function (args) {
			var deferred = m.deferred()
			var outstanding = args.length
			var results = []
			var method = "resolve"

			function synchronizer(pos, resolved) {
				return function (value) {
					results[pos] = value
					if (!resolved) method = "reject"
					if (--outstanding === 0) {
						deferred.promise(results)
						deferred[method](results)
					}
					return value
				}
			}

			if (args.length > 0) {
				forEach(args, function (arg, i) {
					arg.then(synchronizer(i, true), synchronizer(i, false))
				})
			} else {
				deferred.resolve([])
			}

			return deferred.promise
		}

		function identity(value) { return value }

		function handleJsonp(options) {
			var callbackKey = options.callbackName || "mithril_callback_" +
				new Date().getTime() + "_" +
				(Math.round(Math.random() * 1e16)).toString(36)

			var script = $document.createElement("script")

			global[callbackKey] = function (resp) {
				script.parentNode.removeChild(script)
				options.onload({
					type: "load",
					target: {
						responseText: resp
					}
				})
				global[callbackKey] = undefined
			}

			script.onerror = function () {
				script.parentNode.removeChild(script)

				options.onerror({
					type: "error",
					target: {
						status: 500,
						responseText: JSON.stringify({
							error: "Error making jsonp request"
						})
					}
				})
				global[callbackKey] = undefined

				return false
			}

			script.onload = function () {
				return false
			}

			script.src = options.url +
				(options.url.indexOf("?") > 0 ? "&" : "?") +
				(options.callbackKey ? options.callbackKey : "callback") +
				"=" + callbackKey +
				"&" + buildQueryString(options.data || {})

			$document.body.appendChild(script)
		}

		function createXhr(options) {
			var xhr = new global.XMLHttpRequest()
			xhr.open(options.method, options.url, true, options.user,
				options.password)

			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					if (xhr.status >= 200 && xhr.status < 300) {
						options.onload({type: "load", target: xhr})
					} else {
						options.onerror({type: "error", target: xhr})
					}
				}
			}

			if (options.serialize === JSON.stringify &&
					options.data &&
					options.method !== "GET") {
				xhr.setRequestHeader("Content-Type",
					"application/json; charset=utf-8")
			}

			if (options.deserialize === JSON.parse) {
				xhr.setRequestHeader("Accept", "application/json, text/*")
			}

			if (isFunction(options.config)) {
				var maybeXhr = options.config(xhr, options)
				if (maybeXhr != null) xhr = maybeXhr
			}

			var data = options.method === "GET" || !options.data ? "" : options.data

			if (data && !isString(data) && data.constructor !== global.FormData) {
				throw new Error("Request data should be either be a string or " +
					"FormData. Check the `serialize` option in `m.request`")
			}

			xhr.send(data)
			return xhr
		}

		function ajax(options) {
			if (options.dataType && options.dataType.toLowerCase() === "jsonp") {
				return handleJsonp(options)
			} else {
				return createXhr(options)
			}
		}

		function bindData(options, data, serialize) {
			if (options.method === "GET" && options.dataType !== "jsonp") {
				var prefix = options.url.indexOf("?") < 0 ? "?" : "&"
				var querystring = buildQueryString(data)
				options.url += (querystring ? prefix + querystring : "")
			} else {
				options.data = serialize(data)
			}
		}

		function parameterizeUrl(url, data) {
			if (data) {
				url = url.replace(/:[a-z]\w+/gi, function (token){
					var key = token.slice(1)
					var value = data[key] || token
					delete data[key]
					return value
				})
			}
			return url
		}

		m.request = function (options) {
			if (options.background !== true) m.startComputation()
			var deferred = new Deferred()
			var isJSONP = options.dataType &&
				options.dataType.toLowerCase() === "jsonp"

			var serialize, deserialize, extract

			if (isJSONP) {
				serialize = options.serialize =
				deserialize = options.deserialize = identity

				extract = function (jsonp) { return jsonp.responseText }
			} else {
				serialize = options.serialize = options.serialize || JSON.stringify

				deserialize = options.deserialize =
					options.deserialize || JSON.parse
				extract = options.extract || function (xhr) {
					if (xhr.responseText.length || deserialize !== JSON.parse) {
						return xhr.responseText
					} else {
						return null
					}
				}
			}

			options.method = (options.method || "GET").toUpperCase()
			options.url = parameterizeUrl(options.url, options.data)
			bindData(options, options.data, serialize)
			options.onload = options.onerror = function (ev) {
				try {
					ev = ev || event
					var response = deserialize(extract(ev.target, options))
					if (ev.type === "load") {
						if (options.unwrapSuccess) {
							response = options.unwrapSuccess(response, ev.target)
						}

						if (isArray(response) && options.type) {
							forEach(response, function (res, i) {
								response[i] = new options.type(res)
							})
						} else if (options.type) {
							response = new options.type(response)
						}

						deferred.resolve(response)
					} else {
						if (options.unwrapError) {
							response = options.unwrapError(response, ev.target)
						}

						deferred.reject(response)
					}
				} catch (e) {
					deferred.reject(e)
					m.deferred.onerror(e)
				} finally {
					if (options.background !== true) m.endComputation()
				}
			}

			ajax(options)
			deferred.promise = propify(deferred.promise, options.initialValue)
			return deferred.promise
		}

		return m
	}); // eslint-disable-line


/***/ }
/******/ ]);

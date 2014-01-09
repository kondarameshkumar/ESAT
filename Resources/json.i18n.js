var i18n = function() {
    function addDefaults(base, newDefaults) {
        for (var needle in newDefaults) (!newDefaults.hasOwnProperty || newDefaults.hasOwnProperty(needle)) && (base[needle] ? "object" == typeof base[needle] && addDefaults(base[needle], newDefaults[needle]) : base[needle] = newDefaults[needle]);
    }
    function loadData(localeID) {
        var file;
        try {
            file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, "i18n", localeID + ".json");
        } catch (e) {}
        if (!file || !file.exists()) return {};
        try {
            var JSONtext = file.read().text;
            try {
                return JSON.parse(JSONtext);
            } catch (ex) {
                Titanium.API.error("Invalid JSON file " + localeID + ".json");
                throw ex;
            }
        } catch (emptyFileException) {
            return {};
        }
    }
    function addLocalisedData(localeID) {
        var jsonData = loadData(localeID);
        addDefaults(localisedData, jsonData);
    }
    function getString(key) {
        var key_hierarchy = key.split(".");
        var obj = localisedData;
        for (var i = 0; key_hierarchy.length > i; i++) {
            if (-1 != key_hierarchy[i].indexOf("[")) {
                var left = key_hierarchy[i].indexOf("[");
                var right = key_hierarchy[i].indexOf("]");
                var key = key_hierarchy[i].substring(0, left);
                var index = key_hierarchy[i].substring(left + 1, right);
                obj = obj[key][index];
            } else obj = obj[key_hierarchy[i]];
            if (!obj) break;
        }
        return "string" == typeof obj ? obj : obj;
    }
    function getLength(key) {
        var val = getString(key);
        return val.length;
    }
    function getFormattedString(key) {
        var val = getString(key);
        return "string" == typeof val ? arguments.length > 1 ? "android" === Ti.Platform.osname ? String.format(val, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]) : "blackberry" === Ti.Platform.osname ? val.replace(/%(\d+\$)?s/g, function(match) {
            var index = match.match(/%(\d+)\$s/);
            index = index ? Number(index[1]) : 1;
            return arguments[index];
        }) : String.format.apply(this, [ val ].concat(Array.prototype.slice.call(arguments, 1))) : val : "";
    }
    function setupLocalisedData(language, country) {
        localisedData = {};
        currentCountry = String(country ? country : "unknown");
        currentLanguage = String(language ? language : "unknown");
        2 === currentCountry.length && currentCountry == currentCountry.toUpperCase();
        2 === currentLanguage.length && currentLanguage == currentLanguage.toLowerCase();
        addLocalisedData(currentLanguage + "-" + currentCountry);
        addLocalisedData(currentLanguage);
        addLocalisedData(defaultJson);
    }
    function init() {
        setupLocalisedData(deviceLanguage, deviceCountry);
    }
    var currentCountry, currentLanguage, localisedData, defaultJson = "en", deviceCountry = Titanium.Locale.currentCountry, deviceLanguage = Titanium.Locale.currentLanguage;
    init();
    return {
        getString: getString,
        getLength: getLength,
        getFormattedString: getFormattedString,
        forceNewLocale: setupLocalisedData,
        getCurrentCountry: function() {
            return currentCountry;
        },
        getCurrentLanguage: function() {
            return currentLanguage;
        }
    };
}();

var I = i18n.getFormattedString;
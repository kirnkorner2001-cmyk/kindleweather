var api_locParams = "lat=38.462041&lon=-90.423882";
// or api_locParams = "q=Paris";
var api_appId = "c7b1e6df03db88747ed2a14facbdcfdc";
var api_lang = "en"
var api_units = "imperial"; 

var api_params = null;

// Forecast type: "hour" (3h steps) or "daily"
var forecastType = "hour";

// refresh time in miliseconds (default 30 mins)
var refreshTime = 30 * 60 * 1000;

// Browser in kindle paperwhite doesn't support rotation.
// You can override with this parameter 'll' and 'lr' for landscape left/right, 'up' for upside down.
//var rotation = "ll";

// You can set night mode,
// "auto" - by sunrise and sunset,
// "HH-HH - like: ""22-06", from 22:00 to 06:00
// "on" - night mode all the day :)
var night_mode = "off";

// Timezone offset - kindle doesnt report correct local time to the kindle (always it is GMT),
// You can set custom GMT offset, in format "+08:00".
// You may need to set it again after winter/summer time change.
// Null is default
var utcOffset = null

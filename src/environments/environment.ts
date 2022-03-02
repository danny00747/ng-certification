// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    API_URL: `https://api.openweathermap.org/data/2.5/`,
    API_KEY: `5a4b2d457ecbef9eb2a71e480b947604`,
    BASE_ICON_URL: `http://openweathermap.org/img/w/`,
    APP_ICON_URL: `https://www.angulartraining.com/images/weather/`,
    DEFAULT_UNITS: `metric`,
    DEFAULT_COUNTRY_CODE: `us`,
    COUNTRY_API_URL: `https://restcountries.eu/rest/v2/all`
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

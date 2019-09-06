// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  fireBaseConfig:{
    apiKey: "AIzaSyCDC22Nwis6Q9RHUSm9qzCuMLadFefhzNY",
    authDomain: "loginappfirebase-99e19.firebaseapp.com",
    databaseURL: "https://loginappfirebase-99e19.firebaseio.com",
    projectId: "loginappfirebase-99e19",
    storageBucket: "",
    messagingSenderId: "673664096675",
    appId: "1:673664096675:web:817b599303f34b0af02216"
  }
  //hace laconexión con la plataforma de fireBase
  //una base de datos para dev and prod recomendacion
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

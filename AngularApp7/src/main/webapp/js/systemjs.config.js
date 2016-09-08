System.config({
			// DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
			transpiler : 'typescript',
			
			typescriptOptions : {
				tsconfig : true
			},
			
			paths : {
				// paths serve as alias
				'npm:' : 'node_modules'
			},
			
			// map tells the System loader where to look for things
			map : {
				// our app is within the app folder
				app : 'app',

				// angular bundles
				'@angular/core' : 'node_modules/@angular/core/bundles/core.umd.js',
				'@angular/common' : 'node_modules/@angular/common/bundles/common.umd.js',
				'@angular/compiler' : 'node_modules/@angular/compiler/bundles/compiler.umd.js',
				'@angular/platform-browser' : 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
				'@angular/platform-browser-dynamic' : 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
				'@angular/http' : 'node_modules/@angular/http/bundles/http.umd.js',
				'@angular/router' : 'node_modules/@angular/router/bundles/router.umd.js',
				'@angular/forms' : 'node_modules/@angular/forms/bundles/forms.umd.js',
				// other libraries
				'rxjs' : 'node_modules/rxjs',
				//'angular2-in-memory-web-api' : 'node_modules/angular2-in-memory-web-api/',
				'ts' : 'node_modules/plugin-typescript/lib/plugin.js',
				'typescript' : 'node_modules/typescript/lib/typescript.js',
			},

			// app packages
			packages : {
				app : {
					main : './main.ts',
					defaultExtension : 'ts'
				},
				'rxjs': {defaultExtension: 'js'}
			}
		});

System.config({
	// use typescript for compilation
	transpiler : 'typescript',
	// typescript compiler options
	typescriptOptions : {
		emitDecoratorMetadata : true
	},
	// map tells the System loader where to look for things
	map : {
		app : "app",
		app1 : "app"
	},
	// packages defines our app package
	packages : {
		app : {
			main : 'main.ts',
			defaultExtension : 'ts'
		},
		app1 : {
			main : 'app1.ts',
			defaultExtension : 'ts'
		}
	}
});
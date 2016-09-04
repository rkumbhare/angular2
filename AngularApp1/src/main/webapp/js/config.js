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
		app1 : "app",
		page1: "app/page1"	
	},
	// packages defines our app package
	packages : {
		app : {
			main : 'main.ts',
			defaultExtension : 'ts'
		},
		page1: {
			main: 'main.ts',
			defaultExtension: 'ts'
		}
	}
});
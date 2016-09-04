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
		page1 : "app/page1",
		page2 : "app/page2"

	},
	// packages defines our app package
	packages : {
		app : {
			main : 'main.ts',
			defaultExtension : 'ts'
		},
		page1 : {
			main : 'main.ts',
			defaultExtension : 'ts'
		},
		page2 : {
			main : 'main.ts',
			defaultExtension : 'ts'
		}
	}
});
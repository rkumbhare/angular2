System.config({

	// transpiler for typescript
	transpiler : 'typescript',

	// typescript options
	typescriptOption : {
		"target" : "es5",
		"module" : "system",
		"declaration" : false,
		"noImplicitAny" : false,
		"removeComments" : true,
		"noLib" : false,
		"emitDecoratorMetadata" : true,
		"experimentalDecorators" : true,
		"sourceMap" : true
	},

	// mapping for packages, components
	map : {
		app : 'app',
	},

	// app packages
	packages : {
		app : {
			main : 'main.ts',
			defaultExtension : 'ts'
		},
	}

});
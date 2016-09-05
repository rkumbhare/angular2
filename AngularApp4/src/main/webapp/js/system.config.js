System.config({

	// transpiler for typescript
	transpiler : 'typescript',

	// typescript options
	typescriptOption : {
		emitDecoratorMetadata : true
	},

	// mapping for packages, components
	map : {
		app : 'app'
	},

	// app packages
	packages : {
		app : {
			main : 'main.ts',
			defaultExtension : 'ts'
		}
	}

});
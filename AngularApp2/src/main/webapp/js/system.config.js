System.config({

	// transpiler for typescript compile
	transpiler : 'typescript',

	// typescript options
	typescriptOption : {
		emitDecoratorMetadata : true
	},

	// mappping for packages, componets
	map : {
		app: 'app'
	},

	// app packages
	packages : {
		app: {
			main: 'main.ts',
			defaultExtension: 'ts'
		}
	}

});
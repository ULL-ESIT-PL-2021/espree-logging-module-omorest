

// program
//     .version(version)
//     .description(description)
//     .usage('[options]')
// 		.option('-o, --output <output_filename> <input_file>', 'introducir el fichero de salida del resultado del programa');


// program.parse(process.argv);

// const options = program.opts();

// let inputFilename = program.args.shift();


// try {
// 	if (inputFilename) {
// 		fs.readFile(inputFilename, 'utf8', (err, input) => {
// 			if (err) throw `Error leyendo '${inputFilename}':${err}`;
// 			const output = addLogging(input);
// 			console.error(`input: ${input}\n`)
			
// 			if (options.output) {
// 				fs.writeFile(options.output, output, err => {
// 					if (err) throw `No puede escribir en ${options.output}: ${err}`;
// 					console.log(`Salida en fichero ${options.output}`);
// 				})
// 			} else {
// 				console.error(`Salida:\n`);
// 				console.log(output);
// 			}
// 		})

// 	} else {
// 		program.help();
// 	}
// } catch (e) {
//     console.log(`Errores! ${e}`);
// }

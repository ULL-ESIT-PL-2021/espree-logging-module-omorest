#!/usr/bin/env node

const fs = require('fs');
const program = require('commander');
const { addLogging } = require('../src/my-sol-logging-espree');
const { version, description } = require('../package.json');
const { option } = require('commander');


program
    .version(version)
    .description(description)
    .usage('[options]')
		.option('-o, --output <output_filename> <input_file>', 'introducir el fichero de salida del resultado del programa')
		.option('-p, --pattern <pattern> <output_filename> <input_file>', 'introducir patrón, el fichero de salida del resultado del programa');


program.parse(process.argv);

const options = program.opts();
let outputFile = ''
if (program.args.length == 2) {
	outputFile = program.args.shift();
}
let inputFilename = program.args.shift();

try {
	if (inputFilename) {
		fs.readFile(inputFilename, 'utf8', (err, input) => {
			if (err) throw `Error leyendo '${inputFilename}':${err}`;
			const output = addLogging(input, options.pattern);
			console.error(`input: ${input}\n`)
			
			if (options.output) {
				fs.writeFile(options.output, output, err => {
					if (err) throw `No puede escribir en ${options.output}: ${err}`;
					console.log(`Salida en fichero ${options.output}`);
				})
			} else if (options.pattern) {
				fs.writeFile(outputFile, output, err => {
					if (err) throw `No puede escribir en ${outputFile}: ${err}`;
					console.log(`Salida en fichero ${outputFile}`);
				})
			} 			
			else {
				console.error(`Salida:\n`);
				console.log(output);
			}
		})

	} else {
		program.help();
	}
} catch (e) {
    console.log(`Errores! ${e}`);
}
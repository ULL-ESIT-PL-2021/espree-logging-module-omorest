#!/usr/bin/env node

const { version, description } = require('../package.json');
const fs = require('fs');
const program = require('commander');
const esprima = require('espree');
const estraverse = require('estraverse');
let escodegen = require('escodegen');
const { ifError } = require('assert');



module.exports.addLogging = function(code) {
	let ast = esprima.parse(code, {ecmaVersion: 6, loc : true});
	estraverse.traverse(ast, {
		enter: function(node, parent) {
			if (node.type === 'FunctionDeclaration' ||
				node.type === 'FunctionExpression' ||
				node.type === 'ArrowFunctionExpression') {
				addBeforeCode(node);
			}
		}
	});
	return escodegen.generate(ast);
}



function addBeforeCode(node) {
	let name = node.id ? node.id.name : '<anonymous function>';
	const params = node.params.map(param =>`\$\{${param.name}\}`);
	let beforeCode = `console.log(\`Entering ${name}(${params}) at line ${node.loc.start.line}\`);`;
	let beforeNodes = esprima.parse(beforeCode, {ecmaVersion: 6}).body; // Is an Array of ASTs
	node.body.body = beforeNodes.concat(node.body.body);
}



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

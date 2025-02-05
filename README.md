# AddLogging <!-- no toc -->

This is an awesome library that add logs before your code in functions.

- [API Documentation](https://ull-esit-pl-2021.github.io/espree-logging-module-omorest/)

___
- [AddLogging](#addlogging)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Commands](#commands)
    - [Import to use](#import-to-use)
    - [Method](#method)
  - [Example](#example)
  - [License](#license)
___

## Installation

**Install locally in project**

```console
~ npm i -D @alu0101209067/addlogging
```

**Install globally**

```console
~ npm i -g @alu0101209067/addlogging
```
___

## Usage

### Commands

- **add-logging**

  This command is a executable and show the help about how works.

  ```console
  ~ add-logging
  ```

  ```console
  Usage: add-logging [options]

  Páctice 3 npm module addlogging

  Options:
    -V, --version                                           output the version number
    -o, --output <output_filename> <input_file>             introducir el fichero de salida del resultado del programa
    -p, --pattern <pattern> <output_filename> <input_file>  introducir patrón, el fichero de salida del resultado del programa
    -h, --help                                              output usage information
  ```
<br>

- **add-logging -h --help**

  Show the version of the library

  ```console
   ~ add-logging -h

    Usage: add-logging [options]

    Páctice 3 npm module addlogging

    Options:
      -V, --version                                           output the version number
      -o, --output <output_filename> <input_file>             introducir el fichero de salida del resultado del programa
      -p, --pattern <pattern> <output_filename> <input_file>  introducir patrón, el fichero de salida del resultado del programa
      -h, --help 
  ```

<br>

- **add-logging -V --version**

  Show the version of the library.

  ```console
  ~ add-logging -V
    0.3.0
  ```
  
  ```console
  ~ add-logging --version
    0.3.0 
  ```

<br>

- **add-logging -o --output**

  Add a line of log in a function and write this new function in a new file.

  ```console
  ~ add-logging -o output.js input.js 

    input: function suma(a, b) {
      return a + b;
    }

    Salida en fichero output.js
  ```

<br>

- **add-logging -p --pattern**

  Similar that output command but now only add the line of log in functiosn that match with the pattern.

  ```console
  ~ add-logging --pattern suma input-log.js input.js

    input: function suma(a, b) {
      return a + b;
    }

    Salida en fichero input-log.js
  ```

<br>

### Import to use

```js
const { addLogging } = require('@alu0101209067/addlogging');
```

### Method

This method add new line of log before your code in functions and return a new string.

It receives 2 parameters:

  - **Code: {string}**  code to read and find functions to write the new line
  - **Pattern: {string}** word you want to choose, and find only functions match with that word.  

```js
const output = addLogging(input, 'suma')
```

The variable output contain the string with the code with a new line of log.

## Example

**Code**

```js
const { addLogging } = require('@alu0101209067/addlogging');

const sum = `function suma(a, b) {
  return a + b;
}`

const output = addLogging(sum, 'suma')

console.log(output)
```

**Output**

```console
 ~ node src/add.js 

  function suma(a, b) {
      console.log(`Entering suma(${ a },${ b }) at line 1`);
      return a + b;
  }
```

___

## License

[MIT](./LICENSE)
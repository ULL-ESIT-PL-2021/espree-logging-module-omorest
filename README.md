# AddLogging <!-- no toc -->

This is an awesome library that add logs before your code in functions.

- [AddLogging](#addlogging)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Commands](#commands)

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
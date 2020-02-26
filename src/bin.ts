#!/usr/bin/env node

import fs from 'fs'
import yargs from 'yargs'

import {
  convertTypes,
  convertLogic,
  convertDocument,
  extractProgram,
  SERIALIZATION_FORMAT,
} from './index'

function addSharedArguments(cli: yargs.Argv) {
  cli.positional('file', {
    type: 'string',
    describe: 'The file to convert',
  })
  cli.positional('targetFormat', {
    type: 'string',
    describe: 'The target format',
  })
}

function getFormat(format: unknown) {
  if (typeof format !== 'string') {
    throw new Error('targetFormat needs to be a string')
  }
  if (format.toLowerCase() === 'json') {
    return SERIALIZATION_FORMAT.JSON
  }
  if (format.toLowerCase() === 'xml') {
    return SERIALIZATION_FORMAT.XML
  }
  if (format.toLowerCase() === 'source') {
    return SERIALIZATION_FORMAT.SOURCE
  }

  throw new Error('unknown serialization format')
}

yargs
  .scriptName('@lona/serialization')
  .usage('Usage: @lona/serialization <command> [options]')
  .command(
    'document file targetFormat',
    'Convert a Lona document to the specified format',
    cli => {
      addSharedArguments(cli)
      cli.option('e', {
        alias: 'embeddedFormat',
        describe: 'The format of token blocks in MDX',
        type: 'string',
      })
    },
    argv => {
      const { file, targetFormat, embeddedFormat } = argv

      if (typeof file !== 'string') {
        throw new Error('file needs to be a string')
      }

      const contents = fs.readFileSync(file, 'utf8')
      const converted = convertDocument(contents, getFormat(targetFormat), {
        embeddedFormat: embeddedFormat ? getFormat(embeddedFormat) : undefined,
      })
      console.log(converted)
    }
  )
  .command(
    'logic file targetFormat',
    'Convert a Lona logic (tokens) file to the specified format',
    cli => addSharedArguments(cli),
    argv => {
      const { file, targetFormat } = argv

      if (typeof file !== 'string') {
        throw new Error('file needs to be a string')
      }

      const contents = fs.readFileSync(file, 'utf8')
      const converted = convertLogic(contents, getFormat(targetFormat))
      console.log(converted)
    }
  )
  .command(
    'types file targetFormat',
    'Convert a Lona types file to the specified format',
    cli => addSharedArguments(cli),
    argv => {
      const { file, targetFormat } = argv

      if (typeof file !== 'string') {
        throw new Error('file needs to be a string')
      }

      const contents = fs.readFileSync(file, 'utf8')
      const converted = convertTypes(contents, getFormat(targetFormat))
      console.log(converted)
    }
  )
  .command(
    'program file',
    'Extract the executable contents of a Lona document',
    () => {},
    argv => {
      const { file } = argv

      if (typeof file !== 'string') {
        throw new Error('file needs to be a string')
      }

      const contents = fs.readFileSync(file, 'utf8')
      const converted = extractProgram(contents)
      console.log(converted)
    }
  )
  .demandCommand(1, 'Pass --help to see all available commands and options.')
  .strict()
  .fail(msg => {
    yargs.showHelp()
    console.log('\n' + msg)
  })
  .help('h')
  .alias('h', 'help').argv

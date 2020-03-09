# Lona Serialization

![Build and Test](https://github.com/Lona/serialization/workflows/Build%20and%20Test/badge.svg)

Convert Lona files between JSON, and source code (Swift + MDX).

## Overview

Lona token files are typically stored as [MDX](https://mdxjs.com/) (Markdown with embedded React components).

Token files support a special kind of code block, marked with the language "tokens", that contains Lona token definitions. These definitions can be stored as JSON, or (a small subset of) Swift. This utility converts between the different formats.

### API

#### `convertDocument: (String, Format) -> String`

Supported formats: `'json'`, `'source'`

Example: Convert a `.md` document to JSON

```js
import { convertDocument } from '@lona/serialization'

const lonaDocument = '...' // source code of a Lona document

const lonaJson = convertDocument(lonaDocument, 'json')
```

#### `convertLogic: (String, Format) -> String`

Supported formats: `'json'`, `'source'`

Example: Convert a `.tokens` file to JSON

```js
import { convertLogic } from '@lona/serialization'

const lonaTokens = '...' // source code of a Lona tokens file

const lonaJson = serialization.convertLogic(lonaTokens, 'json')
```

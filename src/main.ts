#!/usr/bin/env node

import program from 'commander';
import * as path from 'path';
import * as fs from 'fs';

import info from '../package.json';
import { encode } from './encoder';

// オプション
program.version(info.name + ' v' + info.version)
  .requiredOption('-i, --input <files ...>', 'input files [Requeired]')
  .option('--inputCharCode, <charCode>', 'input file character code', 'utf-8')
  .option('-o, --output <output>', 'output file name (default: "INPUT_NAME.mkt.INPUT_EXTENSION")')
  .option('--outputCharCode, <charCode>', 'output file character code', 'utf-8')
  .parse(process.argv);

// 実行
try {
  const name: string = program.input;
  const result = encode(fs.readFileSync(name, program.inputCharCode as string));
  let outDir = "";
  if (program.output) {
    outDir = program.output;
  } else {
    // 出力の指定が無いので、入力ファイル名から出力先のパスを自動生成
    const parsedPath = path.parse(name);
    outDir =
      (parsedPath.dir ? (parsedPath.dir + path.sep) : '') +
      parsedPath.name + '.mkt' + parsedPath.ext;
  }
  fs.writeFileSync(outDir, result, program.outputCharCode as string);
} catch (e) {
  // エラーメッセージ整形
  // e.g.) ENOENT: no such file or directory, open 'hello.j'
  //    -> no such file or directory, open 'hello.j'
  fatal((e as Error).message.replace(/^[A-Z]+: /, ''), false);
}

// 続行不能なエラー
function fatal(message: string, showHelp: boolean) {
  message = "[ERROR] " + message;
  process.stderr.write(message + '\n');
  if (showHelp) {
    program.outputHelp();
  }
  process.exit(1);
}

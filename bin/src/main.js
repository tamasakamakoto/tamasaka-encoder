#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
var path = __importStar(require("path"));
var fs = __importStar(require("fs"));
var package_json_1 = __importDefault(require("../package.json"));
var encoder_1 = require("./encoder");
commander_1.default.version(package_json_1.default.name + ' v' + package_json_1.default.version)
    .requiredOption('-i, --input <files ...>', 'input files [Requeired]')
    .option('--inputCharCode, <charCode>', 'input file character code', 'utf-8')
    .option('-o, --output <output>', 'output file name (default: "INPUT_NAME.mkt.INPUT_EXTENSION")')
    .option('--outputCharCode, <charCode>', 'output file character code', 'utf-8')
    .parse(process.argv);
try {
    var name_1 = commander_1.default.input;
    var result = encoder_1.encode(fs.readFileSync(name_1, commander_1.default.inputCharCode));
    var outDir = "";
    if (commander_1.default.output) {
        outDir = commander_1.default.output;
    }
    else {
        var parsedPath = path.parse(name_1);
        outDir =
            (parsedPath.dir ? (parsedPath.dir + path.sep) : '') +
                parsedPath.name + '.mkt' + parsedPath.ext;
    }
    fs.writeFileSync(outDir, result, commander_1.default.outputCharCode);
}
catch (e) {
    fatal(e.message.replace(/^[A-Z]+: /, ''), false);
}
function fatal(message, showHelp) {
    message = "[ERROR] " + message;
    process.stderr.write(message + '\n');
    if (showHelp) {
        commander_1.default.outputHelp();
    }
    process.exit(1);
}

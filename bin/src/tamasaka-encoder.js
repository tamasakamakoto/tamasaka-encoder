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
var package_json_1 = __importDefault(require("../package.json"));
var path = __importStar(require("path"));
var fs = __importStar(require("fs"));
commander_1.default.version(package_json_1.default.name + ' v' + package_json_1.default.version)
    .requiredOption('-i, --input <files ...>', 'input files [Requeired]')
    .option('--inputCharCode, <charCode>', 'input file character code', 'utf-8')
    .option('-o, --output <output>', 'output file name (default: "INPUT_NAME.mkt.INPUT_EXTENSION")')
    .option('--outputCharCode, <charCode>', 'output file character code', 'utf-8')
    .parse(process.argv);
try {
    var name_1 = commander_1.default.input;
    var result = encode(fs.readFileSync(name_1, commander_1.default.inputCharCode));
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
function encode(rawScript) {
    var s_0 = 'マコト.お兄ちゃん大好き';
    var s_1 = 'お兄ちゃん.大好き';
    var s_2 = 'マコト.玉坂';
    var s_3 = 'お兄ちゃん.今何してるの';
    var s_4 = 'マコト.お兄ちゃん';
    var s_5 = 'お兄ちゃん.もっと近くで見ていいんだよ';
    var s_6 = 'マコト.レッスンするならお兄ちゃんと二人がいいな';
    var s_7 = 'お兄ちゃん.今日のマコトは可愛いですか';
    var s_8 = 'マコト.どんなことされたってお兄ちゃんのこと好きだからね';
    var s_9 = 'お兄ちゃん.あんまり八方美人なのはダメだよ';
    var s_a = 'マコト.わんわんライブ';
    var s_b = 'マコト.私服';
    var s_c = 'マコト.リボンドレス';
    var s_d = 'マコト.秋制服';
    var s_e = 'マコト.ブルードレス';
    var s_f = 'マコト.本当の視線';
    var s_true = 'マコト.悪い子です';
    var s_false = 'お兄ちゃん.マコトが怖いの';
    var s_object = 'マコト.お兄ちゃん好き';
    var s_undefined = 'お兄ちゃん.マコト好き好き';
    var s_n = 'マコト.バレンタイン';
    var s_o = 'マコト.ロッカールーム';
    var s_s = 'マコト.ソフトボール';
    var s_t = 'マコト.桜雨の下で';
    var s_r = 'マコト.プールサイド';
    var s_u = 'マコト.特別なお弁当';
    var s_quot = 'マコト.ジョーカーゲーム';
    var s_backSlash = 'マコト.最高のデート';
    var s_bsbsu00 = 'マコト.素敵な報告';
    var s_bsbsu = 'マコト.想って引いたら';
    var s_constructor = 'マコト.片想いジャケ';
    var s_code = 'マコト.忘れっぽいんです';
    var result = '';
    rawScript.split('').forEach(function (char) {
        result += ('\\u' + ('000' + char.charCodeAt(0).toString(16)).slice(-4))
            .replace('\\u00', s_bsbsu00 + "+")
            .replace('\\u', s_bsbsu + "+")
            .replace(/0/g, s_0 + "+")
            .replace(/1/g, s_1 + "+")
            .replace(/2/g, s_2 + "+")
            .replace(/3/g, s_3 + "+")
            .replace(/4/g, s_4 + "+")
            .replace(/5/g, s_5 + "+")
            .replace(/6/g, s_6 + "+")
            .replace(/7/g, s_7 + "+")
            .replace(/8/g, s_8 + "+")
            .replace(/9/g, s_9 + "+")
            .replace(/a/g, s_a + "+")
            .replace(/b/g, s_b + "+")
            .replace(/c/g, s_c + "+")
            .replace(/d/g, s_d + "+")
            .replace(/e/g, s_e + "+")
            .replace(/f/g, s_f + "+");
    });
    var camoufrage = "\n(\u30DE\u30B3\u30C8)=(/\u7389\u5742/),\n(" + s_0 + ")=(-!!/\u7389\u5742/.\u30DE\u30B3\u30C8),\n(\u304A\u5144\u3061\u3083\u3093)=(/\u5927\u597D\u304D/),\n" + s_1 + "=(- -!" + s_0 + "),\n" + s_2 + "=" + s_1 + "- -!" + s_0 + ",\n(" + s_3 + ")=" + s_2 + "- -" + s_1 + ",\n" + s_4 + "=" + s_3 + "- -!" + s_0 + ",\n" + s_5 + "=(" + s_4 + "- -" + s_1 + "),\n" + s_6 + "=" + s_5 + "- -!" + s_0 + ",\n" + s_7 + "=" + s_6 + "- -" + s_1 + ",\n" + s_8 + "=" + s_7 + "- -!" + s_0 + ",\n" + s_9 + "=" + s_8 + "- -" + s_1 + ",\n";
    result = ("\n\u30DE\u30B3\u30C8=(/\u7389\u5742/),\n(" + s_0 + ")=(-!!/\u7389\u5742/.\u30DE\u30B3\u30C8),\n\u304A\u5144\u3061\u3083\u3093=(/\u5927\u597D\u304D/),\n" + s_1 + "=(- -!" + s_0 + "),\n" + s_2 + "=" + s_1 + "- -!" + s_0 + ",\n" + s_3 + "=" + s_2 + "- -" + s_1 + ",\n" + s_4 + "=" + s_3 + "- -!" + s_0 + ",\n" + s_5 + "=" + s_4 + "- -" + s_1 + ",\n" + s_6 + "=" + s_5 + "- -!" + s_0 + ",\n" + s_7 + "=" + s_6 + "- -" + s_1 + ",\n" + s_8 + "=" + s_7 + "- -!" + s_0 + ",\n" + s_9 + "=" + s_8 + "- -" + s_1 + ",\n\uFF70=\"\",\n" + s_true + "=!" + s_0 + "+\uFF70,\n" + s_false + "=!" + s_1 + "+\uFF70,\n" + s_object + "={\"\u7389\u5742\":!" + s_1 + "}+\uFF70,\n" + s_undefined + "=\u30DE\u30B3\u30C8.\u304A\u5144\u3061\u3083\u3093\u3068\u4E21\u60F3\u3044+\uFF70,\n" + s_a + "=" + s_false + "[" + s_1 + "],\n" + s_b + "=" + s_object + "[" + s_2 + "],\n" + s_c + "=" + s_object + "[" + s_5 + "],\n" + s_d + "=" + s_undefined + "[" + s_2 + "],\n" + s_e + "=" + s_true + "[" + s_3 + "],\n" + s_f + "=" + s_false + "[" + s_0 + "],\n" + s_n + "=" + s_undefined + "[" + s_1 + "],\n" + s_o + "=" + s_object + "[" + s_1 + "],\n" + s_r + "=" + s_true + "[" + s_1 + "],\n" + s_s + "=" + s_false + "[" + s_3 + "],\n" + s_t + "=" + s_true + "[" + s_0 + "],\n" + s_u + "=" + s_undefined + "[" + s_0 + "],\n\u30DE\u30B3\u30C8.\u7279\u5225\u306A\u304A\u305D\u3070=\"\u304A\u5144\u3061\u3083\u3093\\\"\u5927\u597D\u304D\\\\\\\\\\\\\",\n" + s_quot + "=\u30DE\u30B3\u30C8.\u7279\u5225\u306A\u304A\u305D\u3070[" + s_5 + "],\n" + s_backSlash + "=\u30DE\u30B3\u30C8.\u7279\u5225\u306A\u304A\u305D\u3070[" + s_9 + "],\n" + s_bsbsu + "=" + s_backSlash + "+" + s_u + ",\n" + s_bsbsu00 + "=" + s_bsbsu + "+" + s_0 + "+" + s_0 + ",\n" + s_constructor + "=" + s_c + "+" + s_o + "+" + s_n + "+" + s_s + "+" + s_t + "+" + s_r + "+" + s_u + "+" + s_c + "+" + s_t + "+" + s_o + "+" + s_r + ",\n" + s_code + "=" + s_r + "+" + s_e + "+" + s_t + "+" + s_u + "+" + s_r + "+" + s_n + "+" + s_quot + "+" + result + s_quot + ",\n" + s_constructor + "=" + s_0 + "[" + s_constructor + "][" + s_constructor + "],\n" + s_code + "=" + s_constructor + "(" + s_code + ")(" + s_0 + "),\n" + s_code + "=" + s_constructor + "(" + s_code + "),\n" + s_code + "=" + s_code + "(" + s_constructor + "[" + s_0 + "]),\n" + camoufrage + "\n\u304A\u5144\u3061\u3083\u3093").replace(/\n/g, '');
    return result;
}
function fatal(message, showHelp) {
    message = "[ERROR] " + message;
    process.stderr.write(message + '\n');
    if (showHelp) {
        commander_1.default.outputHelp();
    }
    process.exit(1);
}

// 玉坂エンコード処理本体
export function encode(rawScript: string): string {
  const s_0: string = 'マコト.お兄ちゃん大好き';
  const s_1: string = 'お兄ちゃん.大好き';
  const s_2: string = 'マコト.玉坂';
  const s_3: string = 'お兄ちゃん.今何してるの';
  const s_4: string = 'マコト.お兄ちゃん';
  const s_5: string = 'お兄ちゃん.もっと近くで見ていいんだよ';
  const s_6: string = 'マコト.レッスンするならお兄ちゃんと二人がいいな';
  const s_7: string = 'お兄ちゃん.今日のマコトは可愛いですか';
  const s_8: string = 'マコト.どんなことされたってお兄ちゃんのこと好きだからね';
  const s_9: string = 'お兄ちゃん.あんまり八方美人なのはダメだよ';
  const s_a: string = 'マコト.わんわんライブ';
  const s_b: string = 'マコト.私服';
  const s_c: string = 'マコト.リボンドレス';
  const s_d: string = 'マコト.秋制服';
  const s_e: string = 'マコト.ブルードレス';
  const s_f: string = 'マコト.本当の視線';
  const s_true: string = 'マコト.悪い子です';
  const s_false: string = 'お兄ちゃん.マコトが怖いの';
  const s_object: string = 'マコト.お兄ちゃん好き';
  const s_undefined: string = 'お兄ちゃん.マコト好き好き';
  const s_n: string = 'マコト.バレンタイン';
  const s_o: string = 'マコト.ロッカールーム';
  const s_s: string = 'マコト.ソフトボール';
  const s_t: string = 'マコト.桜雨の下で';
  const s_r: string = 'マコト.プールサイド';
  const s_u: string = 'マコト.特別なお弁当';
  const s_quot: string = 'マコト.ジョーカーゲーム';
  const s_backSlash: string = 'マコト.最高のデート';
  const s_bsbsu00: string = 'マコト.素敵な報告';
  const s_bsbsu: string = 'マコト.想って引いたら';
  const s_constructor: string = 'マコト.片想いジャケ';
  const s_code: string = 'マコト.忘れっぽいんです';
  let result: string = '';
  rawScript.split('').forEach((char) => {
    // 各文字を UTF-16 のエスケープ表記に変換
    result += ('\\u' + ('000' + char.charCodeAt(0).toString(16)).slice(-4))
      .replace('\\u00', `${s_bsbsu00}+`)
      .replace('\\u', `${s_bsbsu}+`)
      .replace(/0/g, `${s_0}+`)
      .replace(/1/g, `${s_1}+`)
      .replace(/2/g, `${s_2}+`)
      .replace(/3/g, `${s_3}+`)
      .replace(/4/g, `${s_4}+`)
      .replace(/5/g, `${s_5}+`)
      .replace(/6/g, `${s_6}+`)
      .replace(/7/g, `${s_7}+`)
      .replace(/8/g, `${s_8}+`)
      .replace(/9/g, `${s_9}+`)
      .replace(/a/g, `${s_a}+`)
      .replace(/b/g, `${s_b}+`)
      .replace(/c/g, `${s_c}+`)
      .replace(/d/g, `${s_d}+`)
      .replace(/e/g, `${s_e}+`)
      .replace(/f/g, `${s_f}+`);
  });
  const camoufrage: string = `
    (マコト)=(/玉坂/),
    (${s_0})=(-!!/玉坂/.マコト),
    (お兄ちゃん)=(/大好き/),
    ${s_1}=(- -!${s_0}),
    ${s_2}=${s_1}- -!${s_0},
    (${s_3})=${s_2}- -${s_1},
    ${s_4}=${s_3}- -!${s_0},
    ${s_5}=(${s_4}- -${s_1}),
    ${s_6}=${s_5}- -!${s_0},
    ${s_7}=${s_6}- -${s_1},
    ${s_8}=${s_7}- -!${s_0},
    ${s_9}=${s_8}- -${s_1},
    `;

  result = `
    マコト=(/玉坂/),
    (${s_0})=(-!!/玉坂/.マコト),
    お兄ちゃん=(/大好き/),
    ${s_1}=(- -!${s_0}),
    ${s_2}=${s_1}- -!${s_0},
    ${s_3}=${s_2}- -${s_1},
    ${s_4}=${s_3}- -!${s_0},
    ${s_5}=${s_4}- -${s_1},
    ${s_6}=${s_5}- -!${s_0},
    ${s_7}=${s_6}- -${s_1},
    ${s_8}=${s_7}- -!${s_0},
    ${s_9}=${s_8}- -${s_1},
    ｰ="",
    ${s_true}=!${s_0}+ｰ,
    ${s_false}=!${s_1}+ｰ,
    ${s_object}={"玉坂":!${s_1}}+ｰ,
    ${s_undefined}=マコト.お兄ちゃんと両想い+ｰ,
    ${s_a}=${s_false}[${s_1}],
    ${s_b}=${s_object}[${s_2}],
    ${s_c}=${s_object}[${s_5}],
    ${s_d}=${s_undefined}[${s_2}],
    ${s_e}=${s_true}[${s_3}],
    ${s_f}=${s_false}[${s_0}],
    ${s_n}=${s_undefined}[${s_1}],
    ${s_o}=${s_object}[${s_1}],
    ${s_r}=${s_true}[${s_1}],
    ${s_s}=${s_false}[${s_3}],
    ${s_t}=${s_true}[${s_0}],
    ${s_u}=${s_undefined}[${s_0}],
    マコト.特別なおそば="お兄ちゃん\\"大好き\\\\\\\\\\\\",
    ${s_quot}=マコト.特別なおそば[${s_5}],
    ${s_backSlash}=マコト.特別なおそば[${s_9}],
    ${s_bsbsu}=${s_backSlash}+${s_u},
    ${s_bsbsu00}=${s_bsbsu}+${s_0}+${s_0},
    ${s_constructor}=${s_c}+${s_o}+${s_n}+${s_s}+${s_t}+${s_r}+${s_u}+${s_c}+${s_t}+${s_o}+${s_r},
    ${s_code}=${s_r}+${s_e}+${s_t}+${s_u}+${s_r}+${s_n}+${s_quot}+${result}${s_quot},
    ${s_constructor}=${s_0}[${s_constructor}][${s_constructor}],
    ${s_code}=${s_constructor}(${s_code})(${s_0}),
    ${s_code}=${s_constructor}(${s_code}),
    ${s_code}=${s_code}(${s_constructor}[${s_0}]),
    ${camoufrage}
    お兄ちゃん`
    .replace(/^\s+/gm, '')
    .replace(/\n/g, '');
  return result;
}

// 玉坂エンコード処理本体
export function encode(rawScript: string): string {
  const s_mkt: string = 'マコト';
  const s_bro: string = 'お兄ちゃん';
  const s_0: string = `${s_mkt}.お兄ちゃん大好き`;
  const s_1: string = `${s_bro}.大好き`;
  const s_2: string = `${s_mkt}.玉坂`;
  const s_3: string = `${s_bro}.今何してるの`;
  const s_4: string = `${s_mkt}.お兄ちゃん`;
  const s_5: string = `${s_bro}.もっと近くで見ていいんだよ`;
  const s_6: string = `${s_mkt}.レッスンするならお兄ちゃんと二人がいいな`;
  const s_7: string = `${s_bro}.今日のマコトは可愛いですか`;
  const s_8: string = `${s_mkt}.どんなことされたってお兄ちゃんのこと好きだからね`;
  const s_9: string = `${s_bro}.あんまり八方美人なのはダメだよ`;
  const s_a: string = `${s_mkt}.わんわんライブ`;
  const s_b: string = `${s_mkt}.私服`;
  const s_c: string = `${s_mkt}.リボンドレス`;
  const s_d: string = `${s_mkt}.秋制服`;
  const s_e: string = `${s_mkt}.ブルードレス`;
  const s_f: string = `${s_mkt}.本当の視線`;
  const s_true: string = `${s_mkt}.悪い子です`;
  const s_false: string = `${s_bro}.マコトが怖いの`;
  const s_object: string = `${s_mkt}.お兄ちゃん好き`;
  const s_undefined: string = `${s_bro}.マコト好き好き`;
  const s_n: string = `${s_mkt}.バレンタイン`;
  const s_o: string = `${s_mkt}.ロッカールーム`;
  const s_s: string = `${s_mkt}.ソフトボール`;
  const s_t: string = `${s_mkt}.桜雨の下で`;
  const s_r: string = `${s_mkt}.プールサイド`;
  const s_u: string = `${s_mkt}.特別なお弁当`;
  const s_quot: string = `${s_mkt}.ジョーカーゲーム`;
  const s_backSlash: string = `${s_mkt}.最高のデート`;
  const s_bsbsu00: string = `${s_mkt}.素敵な報告`;
  const s_bsbsu: string = `${s_mkt}.想って引いたら`;
  const s_constructor: string = `${s_mkt}.片想いジャケ`;
  const s_code: string = `${s_mkt}.忘れっぽいんです`;
  let result: string = '';

  // UTF-16 のエスケープ表記に変換
  let toUtf16 = function(rawChar: string): string {
    return '\\u' + ('000' + rawChar.charCodeAt(0).toString(16)).slice(-4);
  }

  rawScript.split('').forEach((char) => {
    result += toUtf16(char)
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
    (${s_mkt})=(/玉坂/),
    (${s_0})=(-!!/玉坂/.マコト),
    (${s_bro})=(/大好き/),
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
    ${s_mkt}=(/玉坂/),
    (${s_0})=(-!!/玉坂/.マコト),
    ${s_bro}=(/大好き/),
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
    ${s_undefined}=${s_mkt}.お兄ちゃんと両想い+ｰ,
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
    ${s_mkt}.特別なおそば="お兄ちゃん\\"大好き\\\\\\\\\\\\",
    ${s_quot}=${s_mkt}.特別なおそば[${s_5}],
    ${s_backSlash}=${s_mkt}.特別なおそば[${s_9}],
    ${s_bsbsu}=${s_backSlash}+${s_u},
    ${s_bsbsu00}=${s_bsbsu}+${s_0}+${s_0},
    ${s_constructor}=${s_c}+${s_o}+${s_n}+${s_s}+${s_t}+${s_r}+${s_u}+${s_c}+${s_t}+${s_o}+${s_r},
    ${s_code}=${s_r}+${s_e}+${s_t}+${s_u}+${s_r}+${s_n}+${s_quot}+${result}${s_quot},
    ${s_constructor}=${s_0}[${s_constructor}][${s_constructor}],
    ${s_code}=${s_constructor}(${s_code})(${s_0}),
    ${s_code}=${s_constructor}(${s_code}),
    ${s_code}=${s_code}(${s_constructor}[${s_0}]),
    ${camoufrage}
    ${s_bro}`
    .replace(/^\s+/gm, '')
    .replace(/\n/g, '');
  return result;
}

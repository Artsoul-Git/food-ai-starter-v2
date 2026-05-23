(function () {

  function H(title) {
    return '<header class="slide-header"><h2 class="slide-h2">' + title + '</h2></header>';
  }

  window.SLIDE_SLUG = 'food-ai-starter-v2';

  /*
   * ============================================================
   *  スマホ1台・5分でできる！AI完全入門 5点フルセット v2
   *  90分設計：本編60分 ＋ Q&A 15分 ＋ 余談コンテンツ 15分分
   *  スライド構成：
   *    cover:   導入・課題共感・自己紹介（01-11）
   *    intro:   AI基礎（12-17）
   *    work01:  ChatGPT登録（18-30）
   *    work02:  料理写真加工（31-41）
   *    work03:  Instagram投稿文（42-53）
   *    work04:  マニュアル自動化（54-64）
   *    work05:  LINE配信文（65-74）
   *    summary: まとめ・CTA（75-83）
   *    qa:      質疑応答（84-90）
   *    bonus:   余談コンテンツ（91-98）★時間余り用・本編外
   * ============================================================
   */

  /* =========================================================
     COVER｜導入・課題共感・自己紹介（本編 約8分）
     ========================================================= */

  function slide01() {
    return '<section class="slide slide-cover" data-section="cover" data-title="表紙" data-notes="（受付中・開始前）スマホを手元に出しておいてください。今日はスマホだけで全部できます。パソコンは不要です。">' +
      '<div class="slide-cover-bar">' +
        '<div class="slide-cover-tag">有限会社アートソウル ｜ 岡山県よろず支援拠点</div>' +
        '<h1 class="slide-cover-title">スマホ1台・5分でできる！<br>AI完全入門 5点フルセット</h1>' +
      '</div>' +
      '<div class="slide-cover-body">' +
        '<p class="slide-cover-sub">今日ChatGPTを登録して、今日から使い始める</p>' +
        '<div class="slide-cover-meta">2026 ｜ よろず支援拠点 岡山 ｜ 飲食業協会</div>' +
      '</div>' +
    '</section>';
  }

  function slide02() {
    return '<section class="slide" data-section="cover" data-title="3つの質問" data-notes="始める前に、少し聞かせてください。3つ質問します。心の中でYes・Noを答えてみてください。（少し間）「先週、Instagramに投稿できましたか？」……「新人スタッフに、同じことを2回以上説明しましたか？」……「LINEでお客さんに連絡できていますか？」（少し間）どうでしょうか。">' +
      H('始める前に、3つだけ聞かせてください') +
      '<div class="slide-content">' +
        '<ul class="s-list" style="font-size:1.1em;">' +
          '<li class="s-list-callout" style="padding:1em 1.2em;">先週、Instagramに投稿できましたか？</li>' +
          '<li class="s-list-callout" style="padding:1em 1.2em;">新人スタッフに、同じことを 2回以上 説明しましたか？</li>' +
          '<li class="s-list-callout" style="padding:1em 1.2em;">LINEで、定期的にお客さんに連絡できていますか？</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide03() {
    return '<section class="slide" data-section="cover" data-title="その悩み、実は共通している" data-notes="「Instagramは更新できていない」「同じ説明を何度もしている」「LINEは開設したけど配信できていない」——これ、飲食店で一番よく聞く悩みです。ということは、解決策も共通しているわけです。今日はその解決策を、実際に手を動かしながら体験してもらいます。">' +
      H('その悩み、飲食店に共通しています') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">「やらなきゃとは思っているけど、時間がない」</li>' +
          '<li class="s-list-arrow">投稿文を考えるのに時間がかかりすぎる</li>' +
          '<li class="s-list-arrow">新人への説明が毎回一からになってしまう</li>' +
          '<li class="s-list-arrow">LINEに何を送ればいいかわからない</li>' +
          '<li class="s-list-sub">→ この3つ、今日すべてAIで変えます。スマホだけで。</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide04() {
    return '<section class="slide" data-section="cover" data-title="飲食業の現状" data-notes="まず、皆さんが毎日向き合っている業界の数字を見てください。2024年の飲食業倒産件数は1,002件。30年ぶりの水準です。食材は上がり、人件費は上がり続けている。（少し間）自分でコントロールできないことが増えている状況で、だからこそ「できることを一つでも増やす」ことが大事になってきます。">' +
      H('飲食業 2024年の数字') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">飲食業倒産件数：1,002件（2024年・過去30年で最多水準）</li>' +
          '<li class="s-list-head">コスト増の背景</li>' +
          '<li class="s-list-sub">→ 食材値上げ品目：20,609品目（帝国データバンク 2023年調査）</li>' +
          '<li class="s-list-sub">→ 最低賃金：岡山県 2024年 992円（前年比 +51円）</li>' +
          '<li class="s-list-sub">→ 人手不足倒産：前年比 +161.9%（東京商工リサーチ 2024年）</li>' +
          '<li class="s-list-arrow">外から来るコスト増は自分でコントロールできない</li>' +
          '<li class="s-list-sub">→ だからこそ、内側でできることを一つ増やす価値がある</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide05() {
    return '<section class="slide slide-impact" data-section="cover" data-title="今日やること" data-notes="今日やることはシンプルです。AIを使って、毎日の地味に面倒な作業を少し楽にする。それだけです。難しいシステムの話は一切しません。">' +
      '<div class="slide-content slide-content-center">' +
        '<div class="s-impact-tag">今日のテーマ</div>' +
        '<p class="s-impact-main">地味に面倒な作業を、<br>スマホ1台で<br>少し楽にする。</p>' +
      '</div>' +
    '</section>';
  }

  function slide06() {
    var cell = 'background:var(--c-primary-pale);border-radius:12px;padding:1.2rem .6rem;text-align:center;border:2.5px solid var(--c-primary-light);';
    var num  = 'display:inline-block;background:var(--c-primary);color:#fff;border-radius:50%;width:1.6em;height:1.6em;line-height:1.6em;font-size:clamp(1rem,1.8vw,1.8rem);margin-bottom:.5rem;font-weight:700;';
    var ico  = 'font-size:clamp(2.2rem,5vw,5rem);display:block;margin-bottom:.4rem;';
    var ttl  = 'font-size:clamp(.95rem,1.8vw,1.8rem);font-weight:700;color:#333;line-height:1.45;';
    var note = 'background:var(--c-primary-pale);border-left:5px solid var(--c-primary);border-radius:0 8px 8px 0;padding:.8rem 1.4rem;font-size:clamp(1rem,1.9vw,1.9rem);color:#333;font-weight:600;';
    return '<section class="slide" data-section="cover" data-title="今日の流れ" data-notes="今日の流れを説明します。5つのワークを順番にやっていきます。全部スマホで実際に手を動かします。説明を聞くだけではなく、今日この場で体験します。">' +
      H('今日の流れ — 5つのワーク') +
      '<div class="slide-content" style="justify-content:center;">' +
        '<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:1rem;margin-bottom:1rem;">' +
          '<div style="' + cell + '"><span style="' + num + '">①</span><span style="' + ico + '">🔑</span><div style="' + ttl + '">ChatGPT<br>登録</div></div>' +
          '<div style="' + cell + '"><span style="' + num + '">②</span><span style="' + ico + '">📸</span><div style="' + ttl + '">料理写真<br>AI加工</div></div>' +
          '<div style="' + cell + '"><span style="' + num + '">③</span><span style="' + ico + '">📲</span><div style="' + ttl + '">Instagram<br>投稿文</div></div>' +
          '<div style="' + cell + '"><span style="' + num + '">④</span><span style="' + ico + '">📋</span><div style="' + ttl + '">マニュアル<br>自動化</div></div>' +
          '<div style="' + cell + '"><span style="' + num + '">⑤</span><span style="' + ico + '">💬</span><div style="' + ttl + '">LINE<br>配信文</div></div>' +
        '</div>' +
        '<div style="' + note + '">📱 全部スマホで完結。パソコン不要・クレカ不要・全部無料</div>' +
      '</div>' +
    '</section>';
  }

  function slide07() {
    return '<section class="slide" data-section="cover" data-title="講師紹介①" data-notes="改めまして、上村桂右といいます。有限会社アートソウルの代表をしています。あわせて、経済産業省・中小企業庁が運営する岡山県よろず支援拠点のコーディネーターとして経営相談の対応もしています。よろず支援拠点は売上アップ・業務改善・販路開拓・資金繰りなど、経営全般の相談を無料で何度でもお受けする窓口です。今日の会場でもご相談いただけます。">' +
      H('本日の講師') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">上村 桂右（うえむら けいすけ）</li>' +
          '<li class="s-list-arrow">有限会社アートソウル 代表</li>' +
          '<li class="s-list-arrow">経済産業省・中小企業庁が運営する 岡山県よろず支援拠点 コーディネーター</li>' +
          '<li class="s-list-head">よろず支援拠点とは</li>' +
          '<li class="s-list-sub">→ 売上・業務・販路・資金繰りなど、経営全般の相談を無料で何度でも受け付ける国の窓口</li>' +
          '<li class="s-list-sub">→ 今日の会場でも、終了後に声をかけてください</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide08() {
    return '<section class="slide" data-section="cover" data-title="講師紹介②" data-notes="私自身は20年以上、事業の立ち上げから販路開拓、海外メーカーの日本総輸入代理店として全国展開、事業転換・売却まで一通り経験してきました。今も会社を動かしながら、業務改善と生成AI活用を専門に支援しています。得意にしていることを一言で言うと、少人数でも業務が回る状態をつくることです。難しいシステムを入れることより、今いる人が無理なく続けられることを大切にしています。">' +
      H('どんな支援をしているか') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">得意なこと：少人数でも業務が回る状態をつくること</li>' +
          '<li class="s-list-arrow">20年以上：事業立ち上げ→全国展開→事業売却まで一通り経験</li>' +
          '<li class="s-list-arrow">専門：業務改善・生成AI活用・販促・プロモーション設計</li>' +
          '<li class="s-list-arrow">よろず相談でよく来るのが「属人化」「繰り返しの手間」「販促が続かない」</li>' +
          '<li class="s-list-sub">→ 難しいシステムより「続けられる仕組み」をつくるのが方針です</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide09() {
    return '<section class="slide" data-section="cover" data-title="この場の約束" data-notes="お願いが3点あります。スマホは出したままにしてください。今日のメインはスマホを触ることです。わからなくなったら手を挙げてください、その場でサポートします。間違えても何も壊れません。">' +
      H('この場の約束') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">スマホは出したまま。触るのが今日の仕事。</li>' +
          '<li class="s-list-arrow">わからなかったら手を挙げる（置いていきません）</li>' +
          '<li class="s-list-arrow">間違えても壊れない（AIはやり直せる）</li>' +
          '<li class="s-list-sub">→ 知識ゼロ・機械が苦手でも大丈夫。ゴールまで連れていきます</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide10() {
    return '<section class="slide" data-section="cover" data-title="今日使うツール" data-notes="今日使うツールは全部無料です。登録はメールアドレスだけ。費用は一切かかりません。">' +
      H('今日使うツール（全部無料）') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">登録はメールアドレスだけ。クレジットカード不要。</li>' +
          '<li class="s-list-head">ChatGPT（OpenAI）</li>' +
          '<li class="s-list-sub">→ WORK①③④⑤で使用</li>' +
          '<li class="s-list-head">Canva（キャンバ）</li>' +
          '<li class="s-list-sub">→ WORK②で使用</li>' +
          '<li class="s-list-head">スマホの音声入力（標準機能）</li>' +
          '<li class="s-list-sub">→ WORK④で使用（追加登録不要）</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide11() {
    return '<section class="slide" data-section="cover" data-title="スマホ確認" data-notes="ではスマホを手元に出してください。iPhoneでもAndroidでも大丈夫です。Wi-Fiか通信ができる状態であれば準備OKです。">' +
      H('スマホの準備確認') +
      '<div class="slide-content slide-content-center">' +
        '<ul class="s-list" style="font-size:1.15em;">' +
          '<li class="s-list-callout" style="font-size:1.2em; padding:1em;">iPhone / Android どちらでもOK</li>' +
          '<li class="s-list-arrow">Wi-Fi または通信ができる状態で</li>' +
          '<li class="s-list-sub">→ 充電が少ない方はスタッフに声をかけてください</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  /* =========================================================
     INTRO｜AI基礎（本編 約4分）
     ========================================================= */

  function slide12() {
    return '<section class="slide slide-section" data-section="intro" data-title="AI基礎" data-notes="">' +
      '<div class="slide-content">' +
        '<div class="s-section-accent-bar"></div>' +
        '<div class="s-section-chapter">INTRO</div>' +
        '<h1 class="s-section-title">AIって何？<br>使うために必要なことだけ</h1>' +
        '<p class="s-section-lead">難しい話はしません。3分で終わります。</p>' +
      '</div>' +
    '</section>';
  }

  function slide13() {
    var box  = 'border-radius:12px;padding:1.3rem 1.4rem;text-align:center;flex:1;min-width:0;';
    var boxN = 'background:var(--c-primary-pale);border:3px solid var(--c-primary);' + box;
    var boxH = 'background:#fffae0;border:3px solid var(--c-accent);' + box;
    var ico  = 'font-size:clamp(2.4rem,5.5vw,5.5rem);display:block;margin-bottom:.4rem;';
    var lbl  = 'font-size:clamp(1.1rem,2.2vw,2.2rem);font-weight:700;color:#333;line-height:1.35;';
    var sub  = 'font-size:clamp(.9rem,1.7vw,1.7rem);margin-top:.35rem;font-weight:600;';
    var arr  = 'font-size:clamp(1.6rem,3.5vw,3.5rem);color:var(--c-primary);padding:0 .6rem;flex-shrink:0;font-weight:900;';
    var note = 'background:var(--c-primary-pale);border-left:5px solid var(--c-primary);border-radius:0 8px 8px 0;padding:.8rem 1.4rem;font-size:clamp(1rem,1.9vw,1.9rem);color:#333;font-weight:600;';
    return '<section class="slide" data-section="intro" data-title="ChatGPTの動き方" data-notes="AIを一言で言うと、文章を書いたり、写真を加工したり、マニュアルを整理したりしてくれる補助スタッフです。給料なし、深夜でも即答、文句なし。飲食店の地味に面倒な作業が得意です。間違えることもあるので、数字や固有名詞は必ず自分で確認してください。">' +
      H('ChatGPT は「賢い補助スタッフ」') +
      '<div class="slide-content" style="justify-content:center;">' +
        '<div style="display:flex;align-items:center;justify-content:center;gap:0;flex-wrap:nowrap;margin-bottom:1rem;">' +
          '<div style="' + boxN + '">' +
            '<span style="' + ico + '">📱</span>' +
            '<div style="' + lbl + '">スマホで<br>話しかける</div>' +
            '<div style="' + sub + 'color:var(--c-primary);">日本語でOK</div>' +
          '</div>' +
          '<div style="' + arr + '">▶</div>' +
          '<div style="' + boxH + '">' +
            '<span style="' + ico + '">🤖</span>' +
            '<div style="' + lbl + '">ChatGPT<br>が処理</div>' +
            '<div style="' + sub + 'color:#a07800;">数秒で完成</div>' +
          '</div>' +
          '<div style="' + arr + '">▶</div>' +
          '<div style="' + boxN + '">' +
            '<span style="' + ico + '">✏️</span>' +
            '<div style="' + lbl + '">投稿文・<br>マニュアル完成</div>' +
            '<div style="' + sub + 'color:var(--c-primary);">そのまま使える</div>' +
          '</div>' +
        '</div>' +
        '<div style="' + note + '">💡 コピー&amp;ペーストが唯一の操作。それ以外の難しい操作は一切ありません。</div>' +
      '</div>' +
    '</section>';
  }

  function slide14() {
    return '<section class="slide" data-section="intro" data-title="ChatGPTとは" data-notes="今日使うのはChatGPTです。スマホのアプリで、LINEと同じ感覚でメッセージを送ると答えが返ってきます。日本語でOKです。">' +
      H('今日使う「ChatGPT」') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">LINEと同じ感覚で使える。送ると答えが返ってくる。</li>' +
          '<li class="s-list-arrow">世界で最も使われているAI（OpenAI社）</li>' +
          '<li class="s-list-arrow">日本語で話しかけるだけ。英語不要。</li>' +
          '<li class="s-list-arrow">無料プランで今日の5つは全部できる</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide15() {
    return '<section class="slide" data-section="intro" data-title="よくある思い込み" data-notes="よくある思い込みを4つ見ておきましょう。今日の後で全部解消されています。">' +
      H('よくある思い込み') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-head">「パソコンが苦手だから無理」</li>' +
          '<li class="s-list-sub">→ 今日はスマホだけ。パソコン不要です</li>' +
          '<li class="s-list-head">「英語しか使えないでしょ」</li>' +
          '<li class="s-list-sub">→ 日本語で全部できます</li>' +
          '<li class="s-list-head">「お金がかかる」</li>' +
          '<li class="s-list-sub">→ 今日の5つはすべて無料</li>' +
          '<li class="s-list-head">「何に使えばいいか分からない」</li>' +
          '<li class="s-list-sub">→ 今日5つ体験します</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide16() {
    return '<section class="slide" data-section="intro" data-title="操作の全て" data-notes="今日の操作で一番難しいのはコピペです。コピーして貼り付ける。それ以外はスライドの手順通りにやるだけです。">' +
      H('今日の操作で一番難しいのは') +
      '<div class="slide-content slide-content-center">' +
        '<ul class="s-list" style="font-size:1.1em;">' +
          '<li class="s-list-callout" style="font-size:1.25em; padding:1.1em;">コピーして、貼り付ける。それだけ。</li>' +
          '<li class="s-list-sub">→ 手順はスライドに全部出します。その通りやるだけです</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide17() {
    return '<section class="slide" data-section="intro" data-title="AI活用の現在地" data-notes="飲食店でAIを日常的に活用している店舗は、今のところまだ少数派です。逆に言うと、今始めれば、ほとんどの競合より早い。">' +
      '<section class="slide slide-metric" data-section="intro" data-title="AI活用の現在地" data-notes="飲食店でAIを日常的に活用している店舗は、今のところまだ少数派です。逆に言うと、今始めれば、ほとんどの競合より早い。">' +
      '<div class="slide-content slide-content-center">' +
        '<p class="s-metric-lead">飲食店のAI活用状況（各調査より推計）</p>' +
        '<div class="s-metric-value">まだ少数派</div>' +
        '<p class="s-metric-desc">使い始めるのが早いほど差がつく</p>' +
        '<p class="s-metric-source">中小企業庁・各種デジタル活用実態調査より概算</p>' +
      '</div>' +
    '</section>';
  }

  /* =========================================================
     WORK 01｜ChatGPT登録（本編 約10分）
     ========================================================= */

  function slide18() {
    return '<section class="slide slide-section" data-section="work01" data-title="WORK 01" data-notes="">' +
      '<div class="slide-content">' +
        '<div class="s-section-accent-bar"></div>' +
        '<div class="s-section-chapter">WORK 01</div>' +
        '<h1 class="s-section-title">ChatGPT登録<br>＋オプトアウト設定</h1>' +
        '<p class="s-section-lead">今から10分で、AIと話せる環境をつくります</p>' +
      '</div>' +
    '</section>';
  }

  function slide19() {
    return '<section class="slide" data-section="work01" data-title="登録に必要なもの" data-notes="登録に必要なものを確認します。メールアドレスとスマホだけです。クレジットカードは不要。今日は無料プランで進めます。">' +
      H('登録に必要なもの') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">メールアドレス＋スマホだけ。クレジットカード不要。</li>' +
          '<li class="s-list-arrow">Googleアカウントがある方はそれで簡単に登録できる</li>' +
          '<li class="s-list-arrow">「有料プランにしてください」という画面が出たら「後で」を選ぶ</li>' +
          '<li class="s-list-sub">→ 無料プランのまま、今日の5つはすべてできます</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide20() {
    return '<section class="slide" data-section="work01" data-title="STEP1 インストール" data-notes="App StoreまたはGoogle Playを開いて「ChatGPT」で検索します。OpenAIと書いてある公式アプリを選んでください。">' +
      H('STEP 1｜アプリをインストール') +
      '<div class="slide-content">' +
        '<div class="s-steps">' +
          '<div class="s-step-row"><div class="s-step-num">①</div><div><div class="s-step-text">App Store（iPhone）または Google Play（Android）を開く</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">②</div><div><div class="s-step-text">「ChatGPT」と検索する</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">③</div><div><div class="s-step-text">「OpenAI」と書いてある公式アプリを選ぶ</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">④</div><div><div class="s-step-text">「入手」または「インストール」をタップ</div></div></div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  function slide21() {
    return '<section class="slide" data-section="work01" data-title="STEP2 アカウント作成" data-notes="インストールが終わったらアプリを開きます。サインアップを選んでメールアドレスを入力します。">' +
      H('STEP 2｜アカウントを作成') +
      '<div class="slide-content">' +
        '<div class="s-steps">' +
          '<div class="s-step-row"><div class="s-step-num">①</div><div><div class="s-step-text">アプリを開いて「Sign up」をタップ</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">②</div><div><div class="s-step-text">メールアドレスを入力 → 「Continue」</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">③</div><div><div class="s-step-text">パスワードを設定（英字＋数字 8文字以上）</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">④</div><div><div class="s-step-text">メールに届く確認コードを入力</div></div></div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  function slide22() {
    return '<section class="slide" data-section="work01" data-title="STEP3 メール認証" data-notes="登録したメールアドレスに認証メールが届きます。件名は「Verify your email」です。迷惑メールフォルダも確認してください。">' +
      H('STEP 3｜メール認証') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">登録メールに「Verify your email」が届きます</li>' +
          '<li class="s-list-arrow">メール内の「Verify email address」をタップ</li>' +
          '<li class="s-list-sub">→ 届かない場合は迷惑メールフォルダを確認</li>' +
          '<li class="s-list-sub">→ それでも届かない場合は再送できます</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide23() {
    return '<section class="slide" data-section="work01" data-title="登録完了確認" data-notes="この画面が出ていますか？下部にメッセージ入力欄が出ていれば登録成功です。できた方は隣の方に教えてあげてください。まだの方は手を挙げてください。">' +
      H('登録完了の確認') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">下部に「Send a message...」の入力欄が出ていればOK</li>' +
          '<li class="s-list-arrow">できた方 → 隣の方に声をかけてあげてください</li>' +
          '<li class="s-list-arrow">まだの方 → 手を挙げてください。スタッフが行きます</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide24() {
    return '<section class="slide" data-section="work01" data-title="最初のメッセージ" data-notes="入力欄に「こんにちは」と打って送信してみてください。数秒で返答が届きます。これがAIとの会話です。LINEと同じ感覚です。">' +
      H('最初の一言を送ってみよう') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">入力欄に「こんにちは」と打って送信</li>' +
          '<li class="s-list-arrow">数秒で返答が届きます</li>' +
          '<li class="s-list-arrow">慣れたら「私は飲食店を経営しています」と続けてみる</li>' +
          '<li class="s-list-sub">→ LINEと同じ感覚です</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide25() {
    return '<section class="slide" data-section="work01" data-title="オプトアウトとは" data-notes="大事な設定の話をします。オプトアウトというものです。自分の会話データをAIの学習に使わせない設定です。業務情報を打ち込む前に設定しておくことをお勧めします。1分でできます。">' +
      H('オプトアウトとは') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">自分の会話データをAIの学習に使わせない設定</li>' +
          '<li class="s-list-arrow">デフォルトは「学習に使う」になっている</li>' +
          '<li class="s-list-arrow">メニューや業務情報を入力する前に設定しておく</li>' +
          '<li class="s-list-sub">→ 1分・一度やれば永続</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide26() {
    return '<section class="slide" data-section="work01" data-title="オプトアウト設定手順" data-notes="設定方法です。左上のメニューから設定へ進みます。">' +
      H('オプトアウト設定｜手順') +
      '<div class="slide-content">' +
        '<div class="s-steps">' +
          '<div class="s-step-row"><div class="s-step-num">①</div><div><div class="s-step-text">左上「≡」メニューをタップ</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">②</div><div><div class="s-step-text">「Settings（設定）」をタップ</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">③</div><div><div class="s-step-text">「Data Controls（データコントロール）」をタップ</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">④</div><div><div class="s-step-text"><strong>「Improve the model for everyone」をオフ</strong>（グレーになればOK）</div></div></div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  function slide27() {
    return '<section class="slide" data-section="work01" data-title="WORK01 チェック" data-notes="ここまでできていますか？2つ確認してください。">' +
      H('WORK 01 チェック') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">2つ確認</li>' +
          '<li class="s-list-head">✓ ChatGPTに「こんにちは」と送れた</li>' +
          '<li class="s-list-head">✓ オプトアウトをオフにできた（グレー状態）</li>' +
          '<li class="s-list-sub">→ できていない方は手を挙げてください</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide28() {
    return '<section class="slide slide-metric" data-section="work01" data-title="WORK 01 完了" data-notes="WORK 01完了です。次は写真加工に進みます。">' +
      '<div class="slide-content slide-content-center">' +
        '<p class="s-metric-lead">WORK 01 完了</p>' +
        '<div class="s-metric-value">1 / 5</div>' +
        '<p class="s-metric-desc">ChatGPT登録＋オプトアウト設定 完了</p>' +
        '<p class="s-metric-source">次：スマホで料理写真をAI加工する</p>' +
      '</div>' +
    '</section>';
  }

  /* =========================================================
     WORK 02｜料理写真AI加工（本編 約8分）
     ========================================================= */

  function slide29() {
    return '<section class="slide slide-section" data-section="work02" data-title="WORK 02" data-notes="">' +
      '<div class="slide-content">' +
        '<div class="s-section-accent-bar"></div>' +
        '<div class="s-section-chapter">WORK 02</div>' +
        '<h1 class="s-section-title">スマホ料理写真<br>AI加工</h1>' +
        '<p class="s-section-lead">撮り直しなし。今ある写真を加工する。</p>' +
      '</div>' +
    '</section>';
  }

  function slide30() {
    return '<section class="slide" data-section="work02" data-title="写真と来店の関係" data-notes="SNSでお店を選ぶとき、写真を見ますよね。明るくておいしそうに見えるかどうかで、来店判断が変わります。プロのカメラマンに頼まなくても、今ある写真をAIで補正することでクオリティを上げられます。">' +
      H('写真1枚が、来店判断に影響する') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">SNS経由で来る客層は、来店前に写真を必ず確認する</li>' +
          '<li class="s-list-arrow">明るさ・色味・構図でおいしさの印象が大きく変わる</li>' +
          '<li class="s-list-arrow">AIで補正するだけで印象が変わる。撮り直し不要。</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide31() {
    return '<section class="slide" data-section="work02" data-title="今日使うツール Canva" data-notes="写真加工にはCanvaを使います。AI補正機能が充実していて、無料で使えます。">' +
      H('今日使うツール｜Canva（キャンバ）') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">世界で使われているデザインツール。無料。</li>' +
          '<li class="s-list-arrow">AI機能「Magic Studio」で写真を自動補正</li>' +
          '<li class="s-list-arrow">料理写真向けのテンプレートが豊富</li>' +
          '<li class="s-list-sub">→ 登録済みの方はアプリを開いてください</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide32() {
    return '<section class="slide" data-section="work02" data-title="Canva インストール" data-notes="App StoreかGoogle Playで「Canva」を検索してインストールします。">' +
      H('Canva インストール') +
      '<div class="slide-content">' +
        '<div class="s-steps">' +
          '<div class="s-step-row"><div class="s-step-num">①</div><div><div class="s-step-text">App Store / Google Playで「Canva」を検索</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">②</div><div><div class="s-step-text">「Canva - デザイン作成ツール」をインストール</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">③</div><div><div class="s-step-text">Googleまたはメールで登録</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">④</div><div><div class="s-step-text">ホーム画面が出たら準備OK</div></div></div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  function slide33() {
    return '<section class="slide" data-section="work02" data-title="ワーク準備" data-notes="カメラロールから料理の写真を1枚選んでください。暗め・ぼんやりした写真があると変化がよくわかります。">' +
      H('ワーク準備｜写真を1枚選ぶ') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">カメラロールから料理写真を1枚選ぶ</li>' +
          '<li class="s-list-arrow">暗め・ぼんやりした写真の方が変化がわかりやすい</li>' +
          '<li class="s-list-sub">→ 写真がない方はスタッフにサンプルを依頼してください</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide34() {
    return '<section class="slide" data-section="work02" data-title="AI加工の手順" data-notes="写真をCanvaに読み込んでMagic Studioを使います。">' +
      H('WORK②｜AI加工の手順') +
      '<div class="slide-content">' +
        '<div class="s-steps">' +
          '<div class="s-step-row"><div class="s-step-num">①</div><div><div class="s-step-text">Canvaホームの「＋」→「写真」から料理写真を読み込む</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">②</div><div><div class="s-step-text">写真をタップして選択状態にする</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">③</div><div><div class="s-step-text">下部「編集」→「Magic Studio」をタップ</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">④</div><div><div class="s-step-text">AIの補正案から好みを選ぶ（数秒で完成）</div></div></div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  function slide35() {
    return '<section class="slide" data-section="work02" data-title="できること" data-notes="CanvaのAI補正でできることです。まず「明るさ自動調整」が一番効果がわかりやすいです。">' +
      H('AI加工でできること') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">「明るさ自動調整」が一番使いやすく効果大</li>' +
          '<li class="s-list-arrow">背景を消して料理だけ残す</li>' +
          '<li class="s-list-arrow">色をより鮮やかにするフィルター</li>' +
          '<li class="s-list-arrow">写真の上に価格・文字を追加</li>' +
          '<li class="s-list-sub">→ 「undo」でいつでも元に戻せます</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide36() {
    return '<section class="slide" data-section="work02" data-title="保存と共有" data-notes="加工できたら保存します。JPEGで保存してカメラロールに入れるか、Canvaから直接Instagramに投稿することもできます。">' +
      H('保存と Instagram への共有') +
      '<div class="slide-content">' +
        '<div class="s-steps">' +
          '<div class="s-step-row"><div class="s-step-num">①</div><div><div class="s-step-text">右上「↓」をタップ</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">②</div><div><div class="s-step-text">形式「JPEG」を選択してダウンロード</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">③</div><div><div class="s-step-text">カメラロールに保存される</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">④</div><div><div class="s-step-text">（オプション）「共有」からInstagramに直接投稿も可</div></div></div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  function slide37() {
    return '<section class="slide slide-metric" data-section="work02" data-title="WORK 02 完了" data-notes="WORK 02完了です。次はInstagram投稿文の生成に進みます。">' +
      '<div class="slide-content slide-content-center">' +
        '<p class="s-metric-lead">WORK 02 完了</p>' +
        '<div class="s-metric-value">2 / 5</div>' +
        '<p class="s-metric-desc">スマホ1台で料理写真のAI加工ができました</p>' +
        '<p class="s-metric-source">次：Instagram投稿文をAIで生成する</p>' +
      '</div>' +
    '</section>';
  }

  /* =========================================================
     WORK 03｜Instagram投稿文（本編 約9分）
     ========================================================= */

  function slide38() {
    return '<section class="slide slide-section" data-section="work03" data-title="WORK 03" data-notes="">' +
      '<div class="slide-content">' +
        '<div class="s-section-accent-bar"></div>' +
        '<div class="s-section-chapter">WORK 03</div>' +
        '<h1 class="s-section-title">Instagram<br>週1投稿文を生成</h1>' +
        '<p class="s-section-lead">文章を考える時間が、大幅に短くなる</p>' +
      '</div>' +
    '</section>';
  }

  function slide39() {
    return '<section class="slide" data-section="work03" data-title="投稿文の課題" data-notes="「Instagramは更新した方がいいとわかっている。でも何を書けばいいか…」この悩み、実はほぼ全員が持っています。文章を考える時間が一番のハードルです。そこをAIで変えます。">' +
      H('「何を書けばいい？」が一番の障壁') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">投稿が続かない最大の理由：「文章を考えるのに時間がかかりすぎる」</li>' +
          '<li class="s-list-arrow">何を書けばいいか考えている間に、時間が過ぎてしまう</li>' +
          '<li class="s-list-arrow">宣伝っぽくなりすぎないか、文章が良いか気になってしまう</li>' +
          '<li class="s-list-sub">→ AIに下書きを作ってもらって、自分で確認・修正する流れが現実的</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide40() {
    return '<section class="slide" data-section="work03" data-title="しくみ" data-notes="やり方はシンプルです。ChatGPTに今週のメニューと特徴を伝えて、Instagram投稿文を書いてと依頼するだけです。">' +
      H('AI投稿文生成のしくみ') +
      '<div class="slide-content">' +
        '<div class="s-steps">' +
          '<div class="s-step-row"><div class="s-step-num">①</div><div><div class="s-step-text">ChatGPTに「今週のメニューと特徴」を伝える</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">②</div><div><div class="s-step-text">「Instagram投稿文を200文字で書いて」と依頼</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">③</div><div><div class="s-step-text">数秒で文章が生成される</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">④</div><div><div class="s-step-text">気に入らなければ「もっとカジュアルに」など追加指示</div></div></div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  function slide41() {
    return '<section class="slide" data-section="work03" data-title="鉄板テンプレート" data-notes="毎回考えなくていいように、テンプレートを用意しました。【】を変えるだけです。これをスマホのメモに保存しておくと毎週楽になります。">' +
      H('鉄板テンプレート｜穴埋めして送るだけ') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">以下をコピーして【】を変えて送信するだけ</li>' +
          '<li class="s-list-head">テンプレート：</li>' +
          '<li class="s-list-sub">→ 「私は【店名】という【業種】を経営しています。今週のイチオシは【メニュー名】です。特徴は【特徴を2〜3点】。ターゲットは【客層】です。Instagram投稿文を200文字・ハッシュタグ5つ付きで作ってください。」</li>' +
          '<li class="s-list-arrow">スマホのメモアプリに保存 → 毎週【】だけ変えればOK</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide42() {
    return '<section class="slide" data-section="work03" data-title="生成例" data-notes="実際にどんな文章が出てくるか例を見てみましょう。">' +
      H('生成例｜ランチメニュー') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">【入力例】居酒屋・今週のランチは肉じゃが定食・地元野菜使用・ボリューム重視・30〜50代男性向け</li>' +
          '<li class="s-list-head">【出力例】</li>' +
          '<li class="s-list-sub">→「お腹を満たす本格和食ランチ🍱 今週のイチオシは地元野菜をたっぷり使った肉じゃが定食！ほっこりやさしい味で午後も頑張れる一品です。ランチは11:30〜14:00。ぜひどうぞ✨ #肉じゃが #岡山ランチ #定食 #地元野菜 #居酒屋ランチ」</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide43() {
    return '<section class="slide" data-section="work03" data-title="追加指示のコツ" data-notes="最初の出力が気に入らなくても追加指示を出せます。何度でも無料です。">' +
      H('生成後の追加指示') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">気に入らなければ追加指示を出すだけ。何度でも無料。</li>' +
          '<li class="s-list-arrow">「もっと短く（100文字以内で）」</li>' +
          '<li class="s-list-arrow">「絵文字を1〜2個に減らして」</li>' +
          '<li class="s-list-arrow">「価格（◯◯円）を入れて」</li>' +
          '<li class="s-list-arrow">「女性客に向けた表現で書き直して」</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide44() {
    return '<section class="slide" data-section="work03" data-title="ワーク③" data-notes="では自分のお店で試してみましょう。テンプレートの【】を変えてChatGPTに送ってください。">' +
      H('WORK③｜自分のお店で試す') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">テンプレートの【】を自分のお店の情報に変えて送信</li>' +
          '<li class="s-list-arrow">今週の料理・今月のおすすめ何でもOK</li>' +
          '<li class="s-list-arrow">出てきた文章に「もっと短く」などと追加指示も試す</li>' +
          '<li class="s-list-sub">→ 生成文は一言一句使う必要はない。ベースとして活用する</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide45() {
    return '<section class="slide" data-section="work03" data-title="週1習慣化" data-notes="これを週1の習慣にしてください。曜日を決めておくと続きやすいです。">' +
      H('週1投稿を習慣にする') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">「毎週◯曜日の朝、ChatGPTで投稿文を作る」と決める</li>' +
          '<li class="s-list-arrow">テンプレートをスマホのメモに保存しておく</li>' +
          '<li class="s-list-sub">→ 慣れたら写真＋文章セットで5〜10分以内に完成</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide46() {
    return '<section class="slide slide-metric" data-section="work03" data-title="WORK 03 完了" data-notes="WORK 03完了です。次はマニュアル自動化に進みます。">' +
      '<div class="slide-content slide-content-center">' +
        '<p class="s-metric-lead">WORK 03 完了</p>' +
        '<div class="s-metric-value">3 / 5</div>' +
        '<p class="s-metric-desc">Instagram投稿文の生成フローが身についた</p>' +
        '<p class="s-metric-source">次：マニュアルを口頭から自動作成する</p>' +
      '</div>' +
    '</section>';
  }

  function slide47() {
    return '<section class="slide slide-impact" data-section="work03" data-title="折り返し" data-notes="3つ終わりました。あと2つです。">' +
      '<div class="slide-content slide-content-center">' +
        '<div class="s-impact-tag">HALF TIME</div>' +
        '<p class="s-impact-main">3つ終わった。<br>あと 2つ。</p>' +
      '</div>' +
    '</section>';
  }

  /* =========================================================
     WORK 04｜マニュアル自動化（本編 約8分）
     ========================================================= */

  function slide48() {
    return '<section class="slide slide-section" data-section="work04" data-title="WORK 04" data-notes="">' +
      '<div class="slide-content">' +
        '<div class="s-section-accent-bar"></div>' +
        '<div class="s-section-chapter">WORK 04</div>' +
        '<h1 class="s-section-title">マニュアル自動化<br>口頭説明をテキスト資産に</h1>' +
        '<p class="s-section-lead">しゃべるだけで、マニュアルが出来上がる</p>' +
      '</div>' +
    '</section>';
  }

  function slide49() {
    var colB = 'background:#fef3f2;border:3px solid #f87171;border-radius:12px;padding:1.2rem 1.4rem;font-size:clamp(1rem,1.8vw,1.8rem);';
    var colA = 'background:#f0fdf4;border:3px solid #4ade80;border-radius:12px;padding:1.2rem 1.4rem;font-size:clamp(1rem,1.8vw,1.8rem);';
    var badge = 'font-weight:700;font-size:clamp(1.1rem,2vw,2rem);margin-bottom:.6rem;';
    var li   = 'padding:.4rem 0;line-height:1.5;';
    var arr  = 'font-size:clamp(1.8rem,4vw,4rem);color:var(--c-primary);text-align:center;font-weight:900;';
    var aib  = 'background:var(--c-accent);color:#333;font-size:clamp(.9rem,1.5vw,1.5rem);font-weight:700;border-radius:6px;padding:.25rem .6rem;display:block;text-align:center;margin-top:.35rem;';
    var note = 'background:var(--c-primary-pale);border-left:5px solid var(--c-primary);border-radius:0 8px 8px 0;padding:.8rem 1.4rem;font-size:clamp(1rem,1.9vw,1.9rem);color:#333;font-weight:600;';
    return '<section class="slide" data-section="work04" data-title="マニュアル問題" data-notes="飲食店で地味に大変なのが新人への説明です。同じことを何度も繰り返している。マニュアルを作る時間もない。でも誰かしか知らない仕事がたくさんある。これが属人化という状態です。">' +
      H('「同じ説明を何度もしている」問題') +
      '<div class="slide-content" style="justify-content:center;">' +
        '<div style="display:grid;grid-template-columns:1fr auto 1fr;gap:1rem;align-items:center;margin-bottom:.8rem;">' +
          '<div style="' + colB + '">' +
            '<div style="' + badge + 'color:#dc2626;">😓 マニュアルなし</div>' +
            '<ul style="list-style:none;">' +
              '<li style="' + li + '">・同じ説明を何度もする</li>' +
              '<li style="' + li + '">・人によってやり方がバラバラ</li>' +
              '<li style="' + li + '">・自分がいないと回らない</li>' +
              '<li style="' + li + '">・文字にする時間がない</li>' +
            '</ul>' +
          '</div>' +
          '<div style="' + arr + '">➜<span style="' + aib + '">AI活用</span></div>' +
          '<div style="' + colA + '">' +
            '<div style="' + badge + 'color:#16a34a;">😊 AIマニュアルあり</div>' +
            '<ul style="list-style:none;">' +
              '<li style="' + li + '">・「マニュアル見て」で済む</li>' +
              '<li style="' + li + '">・やり方が統一される</li>' +
              '<li style="' + li + '">・自分がいなくても回る</li>' +
              '<li style="' + li + '">・しゃべるだけで完成</li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
        '<div style="' + note + '">🎤 スマホに向かって2分しゃべる → コピペで送る → マニュアル完成</div>' +
      '</div>' +
    '</section>';
  }

  function slide50() {
    return '<section class="slide" data-section="work04" data-title="しくみ" data-notes="仕組みはシンプルです。スマホの音声入力でしゃべって、その文字をChatGPTに貼り付けてまとめてもらうだけです。">' +
      H('音声入力 → ChatGPT整理 のしくみ') +
      '<div class="slide-content">' +
        '<div class="s-steps">' +
          '<div class="s-step-row"><div class="s-step-num">①</div><div><div class="s-step-text">スマホのメモアプリを開く</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">②</div><div><div class="s-step-text">マイクをタップして話す（2〜3分）</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">③</div><div><div class="s-step-text">書き起こされたテキストをコピー</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">④</div><div><div class="s-step-text">ChatGPTに「マニュアルにまとめて」と貼り付けて送信</div></div></div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  function slide51() {
    return '<section class="slide" data-section="work04" data-title="音声入力の使い方" data-notes="音声入力はスマホに最初から入っています。キーボードのマイクアイコンを押してしゃべるだけです。「えーと」「あの」が入っても大丈夫、ChatGPTが整理します。">' +
      H('スマホ音声入力の使い方') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">キーボードの🎤マイクをタップしてしゃべるだけ</li>' +
          '<li class="s-list-head">iPhone の場合</li>' +
          '<li class="s-list-sub">→ キーボード右下の🎤をタップ</li>' +
          '<li class="s-list-head">Android の場合</li>' +
          '<li class="s-list-sub">→ キーボード上のマイクアイコン、またはスペースキー長押し</li>' +
          '<li class="s-list-arrow">「えーと」「あの」はそのままでOK。ChatGPTが整理します</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide52() {
    return '<section class="slide" data-section="work04" data-title="ワーク④-1" data-notes="では実際にやってみましょう。自分のお店のルールや手順を1つ思い浮かべて、音声入力でしゃべってみてください。">' +
      H('WORK④-1｜音声でしゃべってみよう') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">自分のお店のルール・手順を1つ思い浮かべる</li>' +
          '<li class="s-list-arrow">「開店前の準備」「接客のルール」「仕込みの流れ」など何でもOK</li>' +
          '<li class="s-list-arrow">メモアプリを開いて音声入力で2分間しゃべる</li>' +
          '<li class="s-list-sub">→ うまく話せなくても大丈夫。箇条書きっぽく言うだけでもOK</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide53() {
    return '<section class="slide" data-section="work04" data-title="ワーク④-2" data-notes="しゃべった文字をコピーして、ChatGPTに以下のプロンプトで送ります。">' +
      H('WORK④-2｜ChatGPTでマニュアル化') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">音声テキストをコピーして、以下を追加して送信</li>' +
          '<li class="s-list-head">プロンプト（コピーして使ってください）：</li>' +
          '<li class="s-list-sub">→「以下の内容を飲食店スタッフ向けマニュアルとして、見出しと番号付き手順でまとめてください：（テキストを貼り付け）」</li>' +
          '<li class="s-list-arrow">数秒でマニュアルが完成します</li>' +
          '<li class="s-list-sub">→「もっとシンプルに」など追加指示もOK</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide54() {
    return '<section class="slide" data-section="work04" data-title="活用法" data-notes="できたマニュアルはLINEグループで送るか、印刷して貼るか、すぐ使える形にして共有します。">' +
      H('できたマニュアルの使い方') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">作ったらすぐ使える形にして共有する</li>' +
          '<li class="s-list-arrow">LINEグループでスタッフに送る（コピペで即共有）</li>' +
          '<li class="s-list-arrow">スマホのメモに保存（検索できる）</li>' +
          '<li class="s-list-arrow">印刷してバックヤードに貼る（A4一枚でOK）</li>' +
          '<li class="s-list-sub">→ 更新は「追記して」と送るだけ</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide55() {
    return '<section class="slide slide-metric" data-section="work04" data-title="WORK 04 完了" data-notes="WORK 04完了です。次は最後のワーク、LINE配信文の生成です。">' +
      '<div class="slide-content slide-content-center">' +
        '<p class="s-metric-lead">WORK 04 完了</p>' +
        '<div class="s-metric-value">4 / 5</div>' +
        '<p class="s-metric-desc">口頭説明がテキスト資産になりました</p>' +
        '<p class="s-metric-source">次：LINE×AIでリピーターを呼び戻す</p>' +
      '</div>' +
    '</section>';
  }

  /* =========================================================
     WORK 05｜LINE配信文（本編 約8分）
     ========================================================= */

  function slide56() {
    return '<section class="slide slide-section" data-section="work05" data-title="WORK 05" data-notes="">' +
      '<div class="slide-content">' +
        '<div class="s-section-accent-bar"></div>' +
        '<div class="s-section-chapter">WORK 05</div>' +
        '<h1 class="s-section-title">LINE × AI<br>リピーター文生成</h1>' +
        '<p class="s-section-lead">一度来たお客さんをもう一度呼び戻す</p>' +
      '</div>' +
    '</section>';
  }

  function slide57() {
    return '<section class="slide" data-section="work05" data-title="リピーターの価値" data-notes="一度来たお客さんにまた来てもらう方が、新規集客より費用対効果が高い傾向があります。そのためのツールがLINE公式アカウントです。">' +
      H('一度来たお客さんへの声かけ') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">一度来店したお客さんは、お店の雰囲気・味を知っている</li>' +
          '<li class="s-list-arrow">タイミングさえ合えば「またいこう」と思っている人は多い</li>' +
          '<li class="s-list-arrow">LINEはそのタイミングを作るのに向いているツール</li>' +
          '<li class="s-list-sub">→ AIに文章を作ってもらえば、配信の手間が大幅に減る</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide58() {
    return '<section class="slide" data-section="work05" data-title="LINE公式アカウントとは" data-notes="LINE公式アカウントはお店専用のLINEです。来店したお客さんに友だち追加してもらうと、メッセージを一斉配信できます。">' +
      H('LINE公式アカウントとは') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">お店のLINEアカウント。友だち全員にメッセージを配信できる。</li>' +
          '<li class="s-list-arrow">月1,000通まで無料</li>' +
          '<li class="s-list-arrow">レジ横にQRコードを置くだけで友だちが増える</li>' +
          '<li class="s-list-sub">→ まだ作っていない方は個別相談で設定を一緒にできます</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide59() {
    return '<section class="slide" data-section="work05" data-title="3つのパターン" data-notes="LINE配信文のパターンは3つ覚えておけば十分です。">' +
      H('LINE配信文の鉄板パターン 3つ') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-head">①「おかえりなさい文」</li>' +
          '<li class="s-list-sub">→ しばらく来ていない方への自然な声かけ</li>' +
          '<li class="s-list-head">②「季節のお知らせ文」</li>' +
          '<li class="s-list-sub">→ 「今月のおすすめが入りました」系。定期的に送りやすい</li>' +
          '<li class="s-list-head">③「感謝＋次回特典文」</li>' +
          '<li class="s-list-sub">→ 「いつもありがとうございます。次回◯◯があります」</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide60() {
    return '<section class="slide" data-section="work05" data-title="テンプレート" data-notes="プロンプトテンプレートです。コピーして使ってください。">' +
      H('LINE配信文テンプレート') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">【】を変えるだけで送れます</li>' +
          '<li class="s-list-head">①おかえりなさい文：</li>' +
          '<li class="s-list-sub">→「【店名】のLINE配信文を作って。しばらく来ていないお客さんに、自然にまた来てもらえるよう声をかける文章を200文字以内で。押しつけがましくなく。」</li>' +
          '<li class="s-list-head">②季節のお知らせ：</li>' +
          '<li class="s-list-sub">→「【季節】の旬メニュー【料理名】が入ったことを伝えるLINE配信文を150文字以内で。親しみやすく。」</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide61() {
    return '<section class="slide" data-section="work05" data-title="ワーク⑤" data-notes="最後のワークです。3つのパターンから1つ選んでテンプレートで作ってみましょう。">' +
      H('WORK⑤｜LINE配信文を作る') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">3つのパターンから1つ選んでテンプレートで送信</li>' +
          '<li class="s-list-arrow">出てきた文章を「もっと柔らかく」などで調整</li>' +
          '<li class="s-list-sub">→ できた文章は今日LINE公式に入れることもできます</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide62() {
    return '<section class="slide" data-section="work05" data-title="配信タイミング" data-notes="配信タイミングはランチ前か夕食前が効果的です。月2〜4回が適切な頻度です。">' +
      H('配信タイミングのコツ') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">「ランチ前（11時）」「夕食前（17時）」が開封されやすい</li>' +
          '<li class="s-list-arrow">月2〜4回が適切（多すぎるとブロックされる）</li>' +
          '<li class="s-list-sub">→ ChatGPTで1ヶ月分まとめて作っておくと楽</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide63() {
    return '<section class="slide slide-metric" data-section="work05" data-title="全WORK完了" data-notes="5つのワーク全部終わりました。お疲れ様でした。">' +
      '<div class="slide-content slide-content-center">' +
        '<p class="s-metric-lead">5つのワーク、全部終わりました</p>' +
        '<div class="s-metric-value">5 / 5</div>' +
        '<p class="s-metric-desc">今日体験した5つ、全部スマホ1台でできます</p>' +
        '<p class="s-metric-source">次：まとめと個別相談のご案内</p>' +
      '</div>' +
    '</section>';
  }

  /* =========================================================
     SUMMARY｜まとめ・CTA（本編 約5分）
     ========================================================= */

  function slide64() {
    return '<section class="slide slide-section" data-section="summary" data-title="まとめ" data-notes="">' +
      '<div class="slide-content">' +
        '<div class="s-section-accent-bar"></div>' +
        '<div class="s-section-chapter">WRAP UP</div>' +
        '<h1 class="s-section-title">今日覚えたこと<br>まとめ</h1>' +
        '<p class="s-section-lead">持って帰るものを確認しましょう</p>' +
      '</div>' +
    '</section>';
  }

  function slide65() {
    return '<section class="slide" data-section="summary" data-title="5つの振り返り" data-notes="今日体験した5つを振り返ります。">' +
      H('今日やったこと 5つ') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-head">① ChatGPT登録＋オプトアウト</li>' +
          '<li class="s-list-sub">→ AIと話せる環境が整った</li>' +
          '<li class="s-list-head">② スマホ料理写真AI加工</li>' +
          '<li class="s-list-sub">→ 撮り直しなしでクオリティが上がった</li>' +
          '<li class="s-list-head">③ Instagram投稿文生成</li>' +
          '<li class="s-list-sub">→ 文章を考える時間が短縮できた</li>' +
          '<li class="s-list-head">④ マニュアル自動化</li>' +
          '<li class="s-list-sub">→ 口頭説明がテキスト資産になった</li>' +
          '<li class="s-list-head">⑤ LINE配信文生成</li>' +
          '<li class="s-list-sub">→ お客さんへの自然な声かけができるようになった</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide66() {
    return '<section class="slide" data-section="summary" data-title="帰ったらやる3つ" data-notes="今日帰ったら、この3つをやってみてください。全部じゃなくても、1つだけでも十分です。">' +
      H('帰ったらすぐやる 3ステップ') +
      '<div class="slide-content">' +
        '<div class="s-steps">' +
          '<div class="s-step-row"><div class="s-step-num">①</div><div><div class="s-step-text"><strong>今夜：</strong>ChatGPTを開いてお店の投稿文を1つ作る</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">②</div><div><div class="s-step-text"><strong>明日：</strong>その文章をInstagramに投稿する</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">③</div><div><div class="s-step-text"><strong>来週以降：</strong>個別相談でさらに活用方法を広げる</div></div></div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  function slide67() {
    return '<section class="slide" data-section="summary" data-title="個別相談ご案内" data-notes="よろず支援拠点の個別相談は無料で何度でも使えます。今日の後に声をかけていただければ、その場で相談に乗れます。">' +
      H('個別相談のご案内') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">よろず支援拠点の相談は無料・何度でも・秘密厳守</li>' +
          '<li class="s-list-arrow">ChatGPTの設定・活用プランづくり</li>' +
          '<li class="s-list-arrow">Instagram運用の仕組み化</li>' +
          '<li class="s-list-arrow">LINE公式アカウントの開設・設定</li>' +
          '<li class="s-list-arrow">業務の属人化・繰り返しの手間の整理</li>' +
          '<li class="s-list-sub">→ 今日の終了後に直接声をかけてください</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide68() {
    return '<section class="slide" data-section="summary" data-title="CO連携マップ" data-notes="今日のセミナーの内容に合わせて、よろず岡山のコーディネーターを紹介できます。">' +
      H('よろず岡山 CO連携マップ') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">テーマ別に専門COをご紹介できます</li>' +
          '<li class="s-list-head">Instagram・SNS集客</li>' +
          '<li class="s-list-sub">→ 北川知裕CO・桂知奈美CO（SNS専門）</li>' +
          '<li class="s-list-head">人材育成・採用</li>' +
          '<li class="s-list-sub">→ 小林裕司CO（社労士）</li>' +
          '<li class="s-list-head">飲食店経営専門</li>' +
          '<li class="s-list-sub">→ 柿内慶教CO・三宅翔史CO</li>' +
          '<li class="s-list-head">補助金・資金調達</li>' +
          '<li class="s-list-sub">→ 近藤厚志CO</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide69() {
    return '<section class="slide" data-section="summary" data-title="特典テンプレート" data-notes="今日の参加者の方に、テンプレートPDFをプレゼントします。配布資料のQRコードからダウンロードできます。">' +
      H('参加者限定｜テンプレートPDF') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">今日の5ワーク分のプロンプトテンプレートをPDFで配布</li>' +
          '<li class="s-list-arrow">Instagram投稿文テンプレート（3パターン）</li>' +
          '<li class="s-list-arrow">マニュアル化プロンプト</li>' +
          '<li class="s-list-arrow">LINE配信文テンプレート（3パターン）</li>' +
          '<li class="s-list-sub">→ 配布資料のQRコードからダウンロードできます</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide70() {
    return '<section class="slide slide-quote" data-section="summary" data-title="今日のまとめ" data-notes="">' +
      '<div class="slide-content slide-content-center">' +
        '<blockquote class="s-quote">今日ChatGPTを登録して、<br>今日から使い始める。<br>それだけでいい。</blockquote>' +
      '</div>' +
    '</section>';
  }

  /* =========================================================
     Q&A｜質疑応答（約15分）
     ========================================================= */

  function slide71() {
    return '<section class="slide slide-section" data-section="qa" data-title="Q&A" data-notes="">' +
      '<div class="slide-content">' +
        '<div class="s-section-accent-bar"></div>' +
        '<div class="s-section-chapter">Q &amp; A</div>' +
        '<h1 class="s-section-title">質疑応答</h1>' +
        '<p class="s-section-lead">今日の内容について何でも聞いてください</p>' +
      '</div>' +
    '</section>';
  }

  function slide72() {
    return '<section class="slide" data-section="qa" data-title="よくある質問①" data-notes="事前によく聞かれる質問をまとめました。">' +
      H('よくある質問 ①') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-head">Q. 無料でずっと使えますか？</li>' +
          '<li class="s-list-sub">→ ChatGPT・Canvaともに無料プランで今日の5つは使えます。有料プランは月3,000円〜ですが、今日の用途では不要です</li>' +
          '<li class="s-list-head">Q. 個人情報は漏れませんか？</li>' +
          '<li class="s-list-sub">→ オプトアウト設定をしたので会話は学習に使われません。お客さんの実名など個人情報は入力しないようにしてください</li>' +
          '<li class="s-list-head">Q. AIが間違えたら？</li>' +
          '<li class="s-list-sub">→ 間違えることはあります。数字・固有名詞・事実は必ず自分で確認してから使ってください</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide73() {
    return '<section class="slide" data-section="qa" data-title="よくある質問②" data-notes="">' +
      H('よくある質問 ②') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-head">Q. 続けられるか不安です</li>' +
          '<li class="s-list-sub">→ 5つ全部やらなくていいです。1つから始めて、続けられそうなら広げていく形で十分です</li>' +
          '<li class="s-list-head">Q. スマホが古くても使えますか？</li>' +
          '<li class="s-list-sub">→ iOS 14以降・Android 8以降なら動きます。不安な場合は個別相談で確認できます</li>' +
          '<li class="s-list-head">Q. 補助金は使えますか？</li>' +
          '<li class="s-list-sub">→ IT導入補助金・小規模事業者持続化補助金など、AI活用支援と組み合わせられるケースがあります。よろずで一緒に確認できます</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide74() {
    return '<section class="slide" data-section="qa" data-title="よくある質問③" data-notes="">' +
      H('よくある質問 ③') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-head">Q. LINE公式アカウントをまだ持っていません</li>' +
          '<li class="s-list-sub">→ 個別相談で開設の手順をご一緒できます。設定自体は30分程度でできます</li>' +
          '<li class="s-list-head">Q. Instagram自体をやっていません</li>' +
          '<li class="s-list-sub">→ 今日のWORK 03はInstagram未開設の方にも活用できます。テキストは他のSNSやチラシにも使えます</li>' +
          '<li class="s-list-head">Q. スタッフに教えるにはどうすれば？</li>' +
          '<li class="s-list-sub">→ 今日のテンプレートPDFをスタッフに渡すだけで始められます。研修への組み込み方も個別相談で</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide75() {
    return '<section class="slide" data-section="qa" data-title="個別相談" data-notes="今日の後15分ほど残っています。個別に話を聞きたい方は声をかけてください。">' +
      H('個別相談・よろず支援拠点') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">終了後15分間、この場で個別相談を受け付けます</li>' +
          '<li class="s-list-arrow">遠慮なく声をかけてください</li>' +
          '<li class="s-list-arrow">今日話せなかった方は、よろず支援拠点 岡山のWebサイトからも申込み可</li>' +
          '<li class="s-list-sub">→ よろず支援拠点の相談は無料・何度でもOK・岡山県内の事業者なら誰でも</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide76() {
    return '<section class="slide slide-metric" data-section="qa" data-title="ありがとうございました" data-notes="皆さん、今日はお疲れ様でした。ありがとうございました。">' +
      '<div class="slide-content slide-content-center">' +
        '<p class="s-metric-lead">ご参加ありがとうございました</p>' +
        '<div class="s-metric-value">お疲れ様でした</div>' +
        '<p class="s-metric-desc">個別相談は終了後15分この場で受付<br>よろず支援拠点 岡山｜上村 桂右</p>' +
      '</div>' +
    '</section>';
  }

  /* =========================================================
     BONUS｜余談コンテンツ（時間余り用・本編外）
     ========================================================= */

  function slide77() {
    return '<section class="slide slide-section" data-section="bonus" data-title="★余談コンテンツ" data-notes="（時間が余った場合に使用するコンテンツです）">' +
      '<div class="slide-content">' +
        '<div class="s-section-accent-bar"></div>' +
        '<div class="s-section-chapter">BONUS</div>' +
        '<h1 class="s-section-title">もう少し<br>AI活用の話</h1>' +
        '<p class="s-section-lead">時間が許す限り、もう少し広げましょう</p>' +
      '</div>' +
    '</section>';
  }

  function slide78() {
    return '<section class="slide" data-section="bonus" data-title="余談①：Google口コミ返信" data-notes="Googleマップの口コミ、返信できていますか？返信は来店判断に影響しますが、毎回文章を考えるのは大変です。これもChatGPTが代わりに書いてくれます。">' +
      H('余談①：Google口コミをAIで返信') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">「口コミへの返信」もChatGPTで生成できる</li>' +
          '<li class="s-list-arrow">プロンプト例：「以下の口コミに対して、飲食店オーナーとして丁寧に感謝と返信をしてください：（口コミを貼り付け）」</li>' +
          '<li class="s-list-arrow">良い口コミ・悪い口コミ、どちらにも対応</li>' +
          '<li class="s-list-sub">→ 返信文は必ず自分で確認・修正してから投稿してください</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide79() {
    return '<section class="slide" data-section="bonus" data-title="余談②：求人票のAI作成" data-notes="求人票もAIで作れます。IndeedやHelloWorkに出す求人文章、毎回考えるのが大変という声をよく聞きます。ChatGPTで下書きを作れます。">' +
      H('余談②：求人票をAIで作る') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">求人票の下書きもChatGPTで生成できる</li>' +
          '<li class="s-list-arrow">プロンプト例：「【店名・業種・場所・勤務時間・時給・求める人物像】をもとに、Indeed向けのアルバイト求人票を書いてください」</li>' +
          '<li class="s-list-arrow">特徴や職場の雰囲気を加えると応募率が変わる</li>' +
          '<li class="s-list-sub">→ 作成した求人票は労働条件の内容を必ず自分で確認してください</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide80() {
    return '<section class="slide" data-section="bonus" data-title="余談③：季節メニュー名の提案" data-notes="メニュー名もAIが考えてくれます。「春の限定メニューを考えたいんだけど名前が思い浮かばない」というとき、ChatGPTに条件を渡すと10個以上提案してくれます。">' +
      H('余談③：季節メニュー名の提案') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">メニュー名・キャッチコピーもAIが考えてくれる</li>' +
          '<li class="s-list-arrow">プロンプト例：「春の限定メニューとして【食材・テイスト・ターゲット】で料理名とキャッチコピーを10案考えてください」</li>' +
          '<li class="s-list-arrow">出てきた案から選んで少し手直しするだけでOK</li>' +
          '<li class="s-list-sub">→ ネーミングに時間をかけなくてよくなります</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide81() {
    return '<section class="slide" data-section="bonus" data-title="余談④：AIエージェントとは" data-notes="少し先の話をすると、AIは今「エージェント」という使い方に進化しています。複数の作業を連続して自動でやってくれる機能です。今日覚えた基本の上に、こういう使い方が広がっていきます。">' +
      H('余談④：AIエージェントとは（これからの話）') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">AIエージェント：複数の作業を連続して自動でこなす機能</li>' +
          '<li class="s-list-arrow">例：「毎週月曜に投稿文を作って、写真を加工して、Instagramに投稿まで自動で」</li>' +
          '<li class="s-list-arrow">今はまだ設定に専門知識が必要だが、どんどん簡単になっている</li>' +
          '<li class="s-list-sub">→ 今日覚えた「ChatGPTに頼む」感覚の延長線上にある</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide82() {
    return '<section class="slide" data-section="bonus" data-title="余談⑤：上村の実際のAI活用" data-notes="私自身が今どんなふうにAIを使っているか、少し話します。">' +
      H('余談⑤：実際にどう使っているか') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">私が今実際に使っているAI活用例</li>' +
          '<li class="s-list-arrow">相談者へのフォローアップ文章の下書き作成</li>' +
          '<li class="s-list-arrow">セミナー台本・スライドの骨格づくり</li>' +
          '<li class="s-list-arrow">業務マニュアルの整理・更新</li>' +
          '<li class="s-list-arrow">提案書の初稿生成（内容は自分で確認・修正）</li>' +
          '<li class="s-list-sub">→ 「AIが完成させる」ではなく「AIが下書き、自分が仕上げる」のが現実的な使い方</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  function slide83() {
    return '<section class="slide slide-quote" data-section="bonus" data-title="AIとの向き合い方" data-notes="">' +
      '<div class="slide-content slide-content-center">' +
        '<blockquote class="s-quote">難しいシステムより、<br>今いる人が無理なく<br>続けられること。</blockquote>' +
      '</div>' +
    '</section>';
  }

  /* =========================================================
     REGISTER
     ========================================================= */

  var slides = [
    slide01, slide02, slide03, slide04, slide05,
    slide06, slide07, slide08, slide09, slide10,
    slide11, slide12, slide13, slide14, slide15,
    slide16, slide17, slide18, slide19, slide20,
    slide21, slide22, slide23, slide24, slide25,
    slide26, slide27, slide28, slide29, slide30,
    slide31, slide32, slide33, slide34, slide35,
    slide36, slide37, slide38, slide39, slide40,
    slide41, slide42, slide43, slide44, slide45,
    slide46, slide47, slide48, slide49, slide50,
    slide51, slide52, slide53, slide54, slide55,
    slide56, slide57, slide58, slide59, slide60,
    slide61, slide62, slide63, slide64, slide65,
    slide66, slide67, slide68, slide69, slide70,
    slide71, slide72, slide73, slide74, slide75,
    slide76, slide77, slide78, slide79, slide80,
    slide81, slide82, slide83
  ];

  window.slideFactories = slides;

})();

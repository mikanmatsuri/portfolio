// ページがダウンロードされるのを待つ
window.onload = function(){
    //変数、現在の言語に日本語を追加する
    var current_language = "jp";
    //switch-languageというId名がついている要素を一括取得して、それがクリックされた時
    document.getElementById("switch-language").onclick = function(){
        //text-enというクラス名がついている要素をすべて一括取得し、変数en_textsに入れる
        var en_texts = document.getElementsByClassName("text-en");
        ////【①「今、何回目の繰り返し処理中か」をカウントするための変数定義　②何回繰り返し処理をするか　③カウンタを1ずつ加算する】を繰り返す
        for(var i = 0; i < en_texts.length; i++){
            //もしも、現在の言語が日本語だったら
            if(current_language === "jp"){
                //ｃｓｓに記載している英語表記のdisplayをブロックにして、変数en_textsの要素の中身である英語を表示させる
                en_texts[i].style.display = "block";
                //そうでないなら（現在の言語が英語なら）
            } else {
                //ｃｓｓに記載している英語表記のdisplayをnoneにして、変数en_textsの要素の中身である英語を表示しない
                en_texts[i].style.display = "none";
            }
        }
        //text-enというクラス名がついている要素をすべて一括取得し、変数jp_textsに入れる
        var jp_texts = document.getElementsByClassName("text-jp");

        //【①「今、何回目の繰り返し処理中か」をカウントするための変数定義　②何回繰り返し処理をするか　③カウンタを1ずつ加算する】を繰り返す
        for(var i = 0; i < jp_texts.length; i++){
            //もしも、現在の言語が日本語だったら
            if(current_language === "jp"){
                //ｃｓｓに記載している日本語表記のdisplayをnoneにして、変数jp_textsの要素の中身である日本語を表示しない
                jp_texts[i].style.display = "none";
            //日本語以外なら
            } else {
                //ｃｓｓに記載している日本語表記のdisplayをブロックにして、要素の中身である日本語を表示する
                jp_texts[i].style.display = "block";
            }
        }
        //もしも現在の言語が日本語と等しいなら
        if(current_language === "jp"){
            //現在の言語を英語にする
            current_language = "en";
        //現在の言語が日本語以外なら
        } else {
            //現在の言語を日本語にする
            current_language = "jp";
        }
    }

    /*
    //ページの「予約メール」欄以外のものがクリックされたら、
    window.document.getElementById("reservation-mail").onblur = function(){
        // ユーザーのメールアドレスを取得する
        var email = document.getElementById("reservation-mail").value;
        //　メールアドレスがメールアドレスの形が間違っているかを取得する
        var result = email.match(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/);
        //もしも、メールアドレスの形が間違っていたら
        if(result === null){
            //　予約エラーを表示する
            document.getElementById("reservation-mail-error").style.display = "block";
        }else{
            // 間違っていなかったら、予約エラーを表示しない
            document.getElementById("reservation-mail-error").style.display = "none";
        }
    };
    */
};















class Taiyaki {

  //コンストラクタ
  constructor(annko,kurimu,tizu) {
      this.annko = "アンコ";
      this.kurimu = "クリーム";
      this.tizu = "チーズ";

  }

  //歩くメソッド（関数）作成
  aji() {
      console.log(`中身は${this.annko}です。`);
      console.log(`中身は${this.kurimu}です。`);
      console.log(`中身は${this.gender}です。`);
  }
}
//「山田」オブジェクト作成
let ajidayo = new Taiyaki(annko);
yamada.aji();
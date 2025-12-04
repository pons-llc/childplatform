# 妊娠・出産・保育プラットフォーム デモ

## 概要
本プロジェクトは、**妊娠から子育てまでのライフイベントを切れ目なく、漏れなく、簡単にすごすことができる**プラットフォームのデモ実装です。

自治体における子育て支援サービスのデジタル化を推進するため、実際の機能要件に基づいたプロトタイプを提供し、RFI（情報提供依頼）の参考資料として活用いただくことを目的としています。

本コンテンツについては無制限にご利用いただいて構いません。
デモサイトをそのままご利用いただいても構いませんし、クローンして再構築していただいても構いません。

## 作成者について
- **経歴**: 元藤沢市役所職員、現合同会社Ponsの代表社員
- **目的**: 子育てプラットフォーム構築にあたるデモの作成及びRFIのための雛型の提供

## プロジェクトの特徴
- **やわらかいデザイン**: 母親が安心して使える、パステルカラーと丸みのあるUI
- **直感的な操作**: 複雑な手続きをシンプルに、迷わず完了できる設計

## デモサイト技術スタック
- **フロントエンド**: React + Vite
- **ルーティング**: React Router
- **地図表示**: Leaflet + OpenStreetMap
- **アイコン**: Lucide React
- **スタイリング**: Vanilla CSS（カスタムテーマ）

## セットアップ

### 前提条件
- Node.js (v18以上推奨)
- npm

### インストール
```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# プロダクションビルド
npm run build
```

## プロジェクト構成
```
childcarepf/
├── src/
│   ├── components/      # 再利用可能なコンポーネント
│   ├── data/           # ダミーデータ (dummy.json)
│   ├── layouts/        # レイアウトコンポーネント
│   ├── pages/          # ページコンポーネント
│   ├── App.jsx         # ルーティング設定
│   └── main.jsx        # エントリーポイント
├── functional-requirements.md  # 機能要件一覧
├── RFI依頼書.md                # RFI依頼書テンプレート
└── site-design.md              # サイト設計書
```

## ドキュメント

### 機能要件一覧雛型
[機能要件一覧.md](./機能要件一覧.md) を参照してください。
- 全機能のID、概要、備考を網羅
- データベース構成案
- ユーザー連携要件

### RFI依頼書雛型
[RFI依頼書.md](./RFI依頼書.md) を参照してください。
- プロジェクトの背景・目的
- 情報提供依頼事項
- 提出方法・期限

## デモサイト
デモページURL: `https://pons-llc.github.io/childplatform/#/`

## 今後の展開
このデモは、以下のような発展が想定されます：
1. **バックエンド統合**: データベース接続、API実装
2. **認証機能**: マイナポータル連携、外部ID連携
3. **通知機能**: プッシュ通知、メール配信
4. **多言語対応**: 外国人住民向けの多言語化
5. **アクセシビリティ向上**: WCAG準拠

## ライセンス
The MIT License

Copyright (c) 2025 合同会社Pons

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

以下に定める条件に従い、本ソフトウェアおよび関連文書のファイル（以下「ソフトウェア」）の複製を取得するすべての人に対し、ソフトウェアを***無制限に扱うことを無償で許可***します。これには、ソフトウェアの複製を使用、複写、変更、結合、掲載、頒布、サブライセンス、および/または販売する権利、およびソフトウェアを提供する相手に同じことを許可する権利も無制限に含まれます。

上記の著作権表示および本許諾表示を、ソフトウェアのすべての複製または重要な部分に記載するものとします。

ソフトウェアは「現状のまま」で、明示であるか暗黙であるかを問わず、何らの保証もなく提供されます。ここでいう保証とは、商品性、特定の目的への適合性、および権利非侵害についての保証も含みますが、それに限定されるものではありません。 作者または著作権者は、契約行為、不法行為、またはそれ以外であろうと、ソフトウェアに起因または関連し、あるいはソフトウェアの使用またはその他の扱いによって生じる一切の請求、損害、その他の義務について何らの責任も負わないものとします。

----
※この雛形の取得元
英語（http://www.opensource.org/licenses/mit-license.php）
日本語（http://sourceforge.jp/projects/opensource/wiki/licenses%2FMIT_license）


## お問い合わせ
合同会社Ponsまでお問い合わせください。

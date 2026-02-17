# Pickform Design System

スケーラブルなデザインシステムのモノリポジトリです。

## 構成

```
packages/
├── tokens/       デザイントークン（Primitive → Semantic → Component の3層構造）
├── components/   UIコンポーネント（将来拡張用）
└── docs/         ガイドライン・ドキュメント
```

## セットアップ

```bash
# 依存関係のインストール
pnpm install

# トークンのビルド
pnpm run build
```

ビルド後、`packages/tokens/dist/` に以下が生成されます：

- `css/variables.css` — CSS Custom Properties
- `js/tokens.js` — JavaScript モジュール

## デザイントークンの3層構造

| レイヤー    | ファイル           | 役割                         |
| ----------- | ------------------ | ---------------------------- |
| Primitive   | `primitive.json`   | 基底値（カラーパレット等）   |
| Semantic    | `semantic.json`    | 意味的エイリアス（ブランド） |
| Component   | `component.json`   | UIコンポーネント固有値       |

各層は下位層を `{color.primitive.*}` 形式で参照し、変更が自動伝播します。

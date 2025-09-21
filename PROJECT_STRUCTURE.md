# 项目文件结构优化文档

## 📁 优化后的项目结构

```
src/
├── app/                          # Next.js App Router
│   ├── asset/                    # Asset页面
│   │   ├── components/           # Asset页面专用组件
│   │   │   ├── asset-cards-section.tsx
│   │   │   ├── asset-features-section.tsx
│   │   │   ├── asset-ownership-section.tsx
│   │   │   └── index.ts         # 统一导出
│   │   └── page.tsx             # Asset页面主文件
│   ├── dataBridge/              # DataBridge页面
│   │   ├── components/           # DataBridge页面专用组件
│   │   │   ├── data-bridge-cards-section.tsx
│   │   │   └── index.ts         # 统一导出
│   │   └── page.tsx             # DataBridge页面主文件
│   ├── metaAsset/               # MetaAsset页面
│   │   └── page.tsx             # MetaAsset页面主文件
│   ├── layout.tsx               # 全局布局
│   ├── page.tsx                 # 首页
│   └── globals.css              # 全局样式
├── components/                   # 全局组件库
│   ├── home/                    # 首页专用组件
│   │   ├── data-overview-section.tsx
│   │   ├── digital-value-section.tsx
│   │   ├── ecosystem-section.tsx
│   │   ├── features-section.tsx
│   │   ├── tokenized-ip-section.tsx
│   │   └── index.ts             # 统一导出
│   ├── ui/                      # shadcn/ui基础组件
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── table.tsx
│   │   └── ...
│   ├── header.tsx               # 全局头部组件
│   ├── footer.tsx               # 全局底部组件
│   ├── hero-section.tsx         # 通用Hero组件
│   ├── scroll-to-top.tsx        # 回到顶部组件
│   └── index.ts                 # 组件统一导出
└── lib/                         # 工具库
    └── utils.ts                 # 工具函数
```

## 🎯 优化目标与成果

### ✅ **职责分离**
- **全局组件** (`src/components/`): 多页面共享的布局和功能组件
- **页面组件** (`src/app/[page]/components/`): 特定页面的业务组件
- **基础组件** (`src/components/ui/`): shadcn/ui提供的基础UI组件

### ✅ **模块化管理**
- 每个功能模块都有独立的`components`目录
- 通过`index.ts`文件统一管理导出
- 导入路径简化，提高开发效率

### ✅ **清晰的导入规范**
```typescript
// 全局组件统一导入
import { Header, Footer, HeroSection } from "@/components";

// 页面特定组件导入
import { AssetCardsSection } from "./components";

// 首页组件导入
import { DataOverviewSection, DigitalValueSection } from "@/components";
```

## 🚀 组件分类说明

### 🌐 **全局组件** (`src/components/`)
- `Header` - 全站导航头部
- `Footer` - 全站页脚
- `HeroSection` - 可参数化的Hero区块
- `ScrollToTop` - 回到顶部功能

### 🏠 **首页组件** (`src/components/home/`)
- `DataOverviewSection` - 数据概览
- `DigitalValueSection` - 数字价值生命周期
- `EcosystemSection` - 生态系统介绍
- `TokenizedIPSection` - 代币化IP展示

### 📄 **页面特定组件**
- **Asset页面** (`src/app/asset/components/`)
  - `AssetFeaturesSection` - 资产特性展示
  - `AssetOwnershipSection` - 所有权管理
  - `AssetCardsSection` - 双卡片布局

- **DataBridge页面** (`src/app/dataBridge/components/`)
  - `DataBridgeCardsSection` - 四象限服务卡片

## 📋 最佳实践

1. **组件命名**: 使用PascalCase，体现功能和所属页面
2. **文件组织**: 相关组件放在同一目录下
3. **统一导出**: 使用index.ts文件管理导出
4. **导入简化**: 通过别名`@/components`简化导入路径
5. **职责单一**: 每个组件只负责一个具体功能

## 🔧 开发指南

### 添加新组件
1. 确定组件类型（全局/页面特定）
2. 在对应目录创建组件文件
3. 更新相关的`index.ts`文件
4. 在页面中导入使用

### 修改现有组件
1. 组件内修改直接编辑对应文件
2. 组件重命名需同步更新导出文件
3. 移动组件需更新所有引用路径

通过这次结构优化，项目的可维护性和开发效率得到显著提升！
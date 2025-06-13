# Mika MCP Server 详细配置指南

## 🛠️ 环境要求

### 基础环境

- **Node.js**: 18.0+
- **npm**: 8.0+ 或 **yarn**: 1.22+
- **Cursor 编辑器**: 最新版本
- **Git**: 2.20+

### 操作系统支持

- ✅ macOS 10.15+
- ✅ Windows 10/11
- ✅ Linux (Ubuntu 20.04+)

## 📥 项目安装

### 1. 克隆项目

```bash
git clone https://github.com/DarylLi/mika-mcp.git
cd mika-mcp
```

### 2. 安装依赖

```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install
```

### 3. 安装 MCP SDK

```bash
npm install @modelcontextprotocol/sdk
```

## 🔐 获取 API 密钥

### GitHub Personal Access Token

1. **访问 GitHub Settings**

   - 登录 GitHub
   - 点击头像 → Settings
   - 左侧菜单选择 "Developer settings"
   - 选择 "Personal access tokens" → "Tokens (classic)"

2. **创建新 Token**

   - 点击 "Generate new token (classic)"
   - Token 名称: `Mika MCP Server`
   - 选择权限:
     - ✅ `repo` (完整仓库访问)
     - ✅ `read:user` (读取用户信息)
     - ✅ `read:org` (读取组织信息，可选)

3. **保存 Token**
   - 生成后立即复制（只显示一次！）
   - 保存在安全的地方

### 12306 API 密钥 (可选)

```bash
# 如果需要真实的 12306 数据，需要申请第三方 API
# 当前使用模拟数据，无需真实 API 密钥
```

### Web 搜索 API 密钥 (可选)

```bash
# 可以使用 Google Custom Search API 或 Bing Search API
# 申请地址: https://developers.google.com/custom-search/v1/introduction
```

## ⚙️ MCP 配置

### 1. 复制配置模板

```bash
cp config/mcp-config.example.json config/mcp-config.json
```

### 2. 编辑配置文件

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your_github_token_here"
      }
    },
    "sqlite": {
      "command": "npx",
      "args": [
        "@modelcontextprotocol/server-sqlite",
        "--db-path",
        "./data/demo.db"
      ]
    },
    "12306": {
      "command": "node",
      "args": ["./servers/12306-server.js"],
      "env": {
        "12306_API_KEY": "optional_api_key"
      }
    }
  }
}
```

### 3. 替换实际的 API 密钥

- 将 `your_github_token_here` 替换为真实的 GitHub token
- 其他 API 密钥按需配置

## 🎯 Cursor 编辑器配置

### 1. 打开 Cursor 设置

- **macOS**: `Cmd + ,`
- **Windows/Linux**: `Ctrl + ,`

### 2. 搜索 MCP 配置

- 在设置搜索框输入: `MCP`
- 或搜索: `Model Context Protocol`

### 3. 配置 MCP Servers

```json
{
  "mcp.servers": {
    "mika-mcp": {
      "configFile": "./config/mcp-config.json"
    }
  }
}
```

### 4. 重启 Cursor

- 完全关闭 Cursor
- 重新打开项目
- 验证 MCP 连接状态

## 🧪 验证配置

### 1. 运行测试脚本

```bash
npm run test
```

### 2. 检查 MCP 连接

```bash
# 检查 GitHub 连接
node scripts/test-github.js

# 检查 12306 服务
node scripts/test-12306.js
```

### 3. 在 Cursor 中测试

打开 Cursor 后，尝试以下对话:

```
问: "帮我查询我的 GitHub 仓库"
问: "查询明天北京到上海的火车"
问: "创建一个新的数据库表"
```

## 📁 目录结构说明

```
mika-mcp/
├── config/                 # 配置文件目录
│   ├── mcp-config.json    # 主配置文件 (需要配置)
│   └── mcp-config.example.json # 配置模板
├── servers/               # MCP 服务器实现
│   ├── 12306-server.js   # 12306 查询服务
│   └── web-search-server.js # Web 搜索服务
├── scripts/               # 工具脚本
│   ├── setup.js          # 初始化脚本
│   ├── test-servers.js   # 服务器测试
│   └── test-github.js    # GitHub 连接测试
├── examples/              # 使用示例
├── docs/                  # 文档目录
└── data/                  # 数据目录
    └── demo.db           # SQLite 数据库
```

## 🚨 常见问题

### GitHub Token 无效

```bash
# 错误: 401 Bad credentials
# 解决: 检查 token 是否正确复制，是否有足够权限
```

### MCP Server 无法启动

```bash
# 错误: Cannot find module '@modelcontextprotocol/sdk'
# 解决: npm install @modelcontextprotocol/sdk
```

### Cursor 找不到配置文件

```bash
# 错误: Config file not found
# 解决: 确保配置文件路径正确，使用相对路径
```

## 🔧 高级配置

### 自定义 MCP Server

```javascript
// 创建自定义 server
const customServer = {
  command: "node",
  args: ["./servers/custom-server.js"],
  env: {
    API_KEY: "your_api_key",
  },
};
```

### 环境变量配置

```bash
# .env 文件
GITHUB_TOKEN=your_github_token
SEARCH_API_KEY=your_search_key
DATABASE_URL=sqlite:./data/demo.db
```

### 代理配置

```json
{
  "proxy": {
    "http": "http://proxy.company.com:8080",
    "https": "https://proxy.company.com:8080"
  }
}
```

## 📚 下一步

配置完成后，可以查看:

- [使用说明](usage.md)
- [API 参考](api-reference.md)
- [故障排除](troubleshooting.md)

## 💬 获取帮助

- [GitHub Issues](https://github.com/DarylLi/mika-mcp/issues)
- [讨论区](https://github.com/DarylLi/mika-mcp/discussions)
- [联系作者](mailto:lhtisgood@outlook.com)

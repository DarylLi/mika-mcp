# 🚀 Mika MCP Server Demo

<div align="center">

**一个完整的 Cursor MCP Server 演示项目**

展示如何在 Cursor 编辑器中配置和使用多种 Model Context Protocol (MCP) Servers

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DarylLi/mika-mcp)
[![Cursor](https://img.shields.io/badge/Cursor-000000?style=for-the-badge&logo=cursor&logoColor=white)](https://cursor.sh/)
[![MCP](https://img.shields.io/badge/MCP-FF6B35?style=for-the-badge&logo=protocol&logoColor=white)](https://modelcontextprotocol.io/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

</div>

---

## 📖 项目简介

这是一个展示如何在 **Cursor 编辑器** 中集成和使用 **Model Context Protocol (MCP) Servers** 的完整演示项目。通过实际的代码示例，你可以学习如何：

- 🔧 配置各种 MCP Servers
- 🤖 在 AI 对话中调用外部服务
- 📊 集成数据库、API 和工具
- 🚀 构建智能化的开发工作流

## ✨ 演示功能

### 🚄 12306 车次查询

```
💬 "帮我查询明天从北京到上海的高铁"
🤖 AI 自动调用 12306 MCP Server，返回车次、时间、票价信息
```

### 🐙 GitHub 集成

```
💬 "帮我在当前仓库创建一个新的 Issue"
🤖 AI 直接操作 GitHub API，创建 Issue、管理代码
```

### 📊 数据库操作

```
💬 "创建一个用户管理的数据库表"
🤖 AI 通过 SQLite MCP Server 执行 SQL 操作
```

### 🌐 Web 搜索

```
💬 "搜索最新的 AI 技术动态"
🤖 AI 实时获取网络信息并分析总结
```

## 🛠️ 集成的 MCP Servers

| Server               | 描述           | 功能                         |
| -------------------- | -------------- | ---------------------------- |
| 🚄 **12306 Server**  | 火车票查询服务 | 车次查询、票价信息、余票状态 |
| 🐙 **GitHub Server** | GitHub 集成    | 仓库管理、Issues、PR 操作    |
| 📊 **SQLite Server** | 数据库操作     | SQL 查询、数据分析、表管理   |
| 🌐 **Web Search**    | 网络搜索       | 实时搜索、内容抓取、信息验证 |

## 🚀 快速开始

### 1️⃣ 克隆项目

```bash
git clone https://github.com/DarylLi/mika-mcp.git
cd mika-mcp
```

### 2️⃣ 安装依赖

```bash
npm install
```

### 3️⃣ 配置 MCP Servers

```bash
# 复制配置模板
cp config/mcp-config.example.json config/mcp-config.json

# 编辑配置文件，添加你的 API 密钥
```

### 4️⃣ 在 Cursor 中配置

1. 打开 Cursor 设置 (`Cmd+,`)
2. 搜索 "MCP"
3. 添加配置文件路径: `./config/mcp-config.json`
4. 重启 Cursor

### 5️⃣ 开始体验

在 Cursor 中与 AI 对话，尝试上面的演示功能！

## 📚 文档

- 📖 [详细配置指南](docs/setup.md)
- 🎯 [使用说明](docs/usage.md)
- 🔧 [故障排除](docs/troubleshooting.md)
- 📋 [API 参考](docs/api-reference.md)

## 🌟 MCP Server 资源

### 官方资源

- 🏠 [MCP 官方网站](https://modelcontextprotocol.io/)
- 📖 [MCP 官方文档](https://spec.modelcontextprotocol.io/)
- 🐙 [MCP GitHub 仓库](https://github.com/modelcontextprotocol)

### 社区资源

- 🛠️ [Smithery.ai - MCP Server 市场](https://smithery.ai/) - 社区构建的 7337+ AI 技能和扩展
- 📦 [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- 💬 [MCP Discord 社区](https://discord.gg/modelcontextprotocol)

### 热门 MCP Servers

- 🐙 [GitHub MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/github)
- 🗄️ [SQLite MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite)
- 🌐 [Web Search MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search)
- 📁 [File System MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem)
- 🔍 [Google Drive MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/gdrive)

## 🎯 项目结构

```
mika-mcp/
├── 📁 config/              # MCP 配置文件
│   ├── mcp-config.json     # 主配置文件
│   └── *.example.json      # 配置模板
├── 📁 servers/             # 自定义 MCP Servers
│   ├── 12306-server.js     # 12306 查询服务
│   └── web-search-server.js # Web 搜索服务
├── 📁 docs/                # 项目文档
├── 📁 examples/            # 使用示例
└── 📁 scripts/             # 工具脚本
```

## 🤝 贡献

欢迎提交 Issues 和 Pull Requests！

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目基于 [MIT License](LICENSE) 开源

## 🔗 相关链接

- 🖱️ [Cursor 官网](https://cursor.sh/)
- 🤖 [Anthropic Claude](https://www.anthropic.com/)
- 🛠️ [Smithery.ai - AI Agent 技能市场](https://smithery.ai/)
- 📚 [Model Context Protocol 规范](https://spec.modelcontextprotocol.io/)

## ⭐ Star History

如果这个项目对你有帮助，请给个 Star ⭐

---

<div align="center">

**Made with ❤️ by [DarylLi](https://github.com/DarylLi)**

[🌐 个人网站](https://franxxdaryl.site) • [📧 邮箱](mailto:lhtisgood@outlook.com) • [🐙 GitHub](https://github.com/DarylLi)

</div>

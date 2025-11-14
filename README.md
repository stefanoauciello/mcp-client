MCP Client (Node.js)

1) What this project is for
- Minimal MCP client in Node.js using `@modelcontextprotocol/sdk`.
- Connects via stdio to an MCP server (by default: `../mcp-server/server.js`).
- Calls the `add_numbers` tool with JSON arguments and prints the result.

2) How to use
- Prerequisites:
  - Node.js 18+ (20+ recommended)
  - A working MCP server reachable via stdio
- Installation:
  - `npm install`
- Run the client:
  - `npm run client`
- Configuration:
  - In `client.js`, change the `command`/`args` of `StdioClientTransport` to point to your MCP server.
  - Update `name` and `arguments` in `client.callTool` to use the desired tool.

Project structure
- `client.js`: sample MCP client implementation.
- `package.json`: script (`npm run client`) and dependencies.
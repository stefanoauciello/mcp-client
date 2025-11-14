// client.js

import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

// Simple logger
function log(title, value) {
    console.log(`\n=== ${title} ===`);
    console.dir(value, { depth: null });
}

async function main() {
    const transport = new StdioClientTransport({
        command: "node",
        args: ["../mcp-server/server.js"]
    });

    const client = new Client({
        name: "demo-node-client",
        version: "1.0.0"
    });

    console.log("Connecting to MCP server...");
    await client.connect(transport);
    console.log("Connected!");

    const result = await client.callTool({
        name: "add_numbers",
        arguments: { a: 5, b: 7 }
    });

    log("add_numbers result", result);

    try {
        await client.close();
    } catch (e) {
        console.warn("Warning while closing client:", e);
    }
}

main().catch((err) => {
    console.error("Client failed:", err);
    process.exit(1);
});

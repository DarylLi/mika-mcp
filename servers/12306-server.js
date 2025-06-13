#!/usr/bin/env node

/**
 * 12306 MCP Server
 * 提供火车车次查询、票价查询、余票查询等功能
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import axios from "axios";

class Railway12306Server {
  constructor() {
    this.server = new Server(
      {
        name: "12306-server",
        version: "1.0.0",
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
  }

  setupToolHandlers() {
    // 查询车次信息
    this.server.setRequestHandler("tools/list", async () => {
      return {
        tools: [
          {
            name: "query_train_schedule",
            description: "查询火车车次时刻表",
            inputSchema: {
              type: "object",
              properties: {
                from_station: {
                  type: "string",
                  description: "出发车站",
                },
                to_station: {
                  type: "string",
                  description: "到达车站",
                },
                date: {
                  type: "string",
                  description: "出发日期 (YYYY-MM-DD)",
                },
              },
              required: ["from_station", "to_station", "date"],
            },
          },
          {
            name: "query_ticket_price",
            description: "查询车票价格",
            inputSchema: {
              type: "object",
              properties: {
                train_no: {
                  type: "string",
                  description: "车次号",
                },
                from_station: {
                  type: "string",
                  description: "出发车站",
                },
                to_station: {
                  type: "string",
                  description: "到达车站",
                },
              },
              required: ["train_no", "from_station", "to_station"],
            },
          },
          {
            name: "query_station_info",
            description: "查询车站信息",
            inputSchema: {
              type: "object",
              properties: {
                station_name: {
                  type: "string",
                  description: "车站名称",
                },
              },
              required: ["station_name"],
            },
          },
          {
            name: "query_remaining_tickets",
            description: "查询余票信息",
            inputSchema: {
              type: "object",
              properties: {
                train_no: {
                  type: "string",
                  description: "车次号",
                },
                from_station: {
                  type: "string",
                  description: "出发车站",
                },
                to_station: {
                  type: "string",
                  description: "到达车站",
                },
                date: {
                  type: "string",
                  description: "出发日期 (YYYY-MM-DD)",
                },
              },
              required: ["train_no", "from_station", "to_station", "date"],
            },
          },
        ],
      };
    });

    // 工具调用处理
    this.server.setRequestHandler("tools/call", async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case "query_train_schedule":
            return await this.queryTrainSchedule(args);
          case "query_ticket_price":
            return await this.queryTicketPrice(args);
          case "query_station_info":
            return await this.queryStationInfo(args);
          case "query_remaining_tickets":
            return await this.queryRemainingTickets(args);
          default:
            throw new Error(`未知的工具: ${name}`);
        }
      } catch (error) {
        return {
          isError: true,
          content: [
            {
              type: "text",
              text: `错误: ${error.message}`,
            },
          ],
        };
      }
    });
  }

  // 查询车次时刻表
  async queryTrainSchedule({ from_station, to_station, date }) {
    // 模拟 12306 API 调用
    const mockData = {
      trains: [
        {
          train_no: "G1",
          from_station: from_station,
          to_station: to_station,
          departure_time: "06:00",
          arrival_time: "10:28",
          duration: "4小时28分",
          train_type: "高速动车",
        },
        {
          train_no: "G3",
          from_station: from_station,
          to_station: to_station,
          departure_time: "07:00",
          arrival_time: "11:30",
          duration: "4小时30分",
          train_type: "高速动车",
        },
        {
          train_no: "D321",
          from_station: from_station,
          to_station: to_station,
          departure_time: "08:15",
          arrival_time: "13:45",
          duration: "5小时30分",
          train_type: "动车",
        },
      ],
    };

    const result = mockData.trains
      .map(
        (train) =>
          `🚄 ${train.train_no} (${train.train_type})
📍 ${train.from_station} → ${train.to_station}
🕐 ${train.departure_time} - ${train.arrival_time}
⏱️ 历时: ${train.duration}`
      )
      .join("\n\n");

    return {
      content: [
        {
          type: "text",
          text: `🚄 ${date} ${from_station} → ${to_station} 车次信息：\n\n${result}`,
        },
      ],
    };
  }

  // 查询票价
  async queryTicketPrice({ train_no, from_station, to_station }) {
    const mockPrices = {
      商务座: "1748元",
      一等座: "933元",
      二等座: "553元",
    };

    const priceInfo = Object.entries(mockPrices)
      .map(([seatType, price]) => `${seatType}: ${price}`)
      .join("\n");

    return {
      content: [
        {
          type: "text",
          text: `💰 ${train_no} ${from_station} → ${to_station} 票价信息：\n\n${priceInfo}`,
        },
      ],
    };
  }

  // 查询车站信息
  async queryStationInfo({ station_name }) {
    const mockStationInfo = {
      station_name: station_name,
      station_code: "BJK",
      city: "北京",
      province: "北京市",
      phone: "010-12306",
      address: "北京市丰台区西三环南路",
    };

    return {
      content: [
        {
          type: "text",
          text: `🚉 ${station_name} 车站信息：
📍 地址: ${mockStationInfo.address}
🏙️ 城市: ${mockStationInfo.city}, ${mockStationInfo.province}
📞 电话: ${mockStationInfo.phone}
🏷️ 车站代码: ${mockStationInfo.station_code}`,
        },
      ],
    };
  }

  // 查询余票
  async queryRemainingTickets({ train_no, from_station, to_station, date }) {
    const mockTickets = {
      商务座: "有票",
      一等座: "有票",
      二等座: "候补",
      硬卧: "有票",
      软卧: "有票",
      硬座: "无票",
    };

    const ticketInfo = Object.entries(mockTickets)
      .map(([seatType, status]) => {
        const icon = status === "有票" ? "✅" : status === "候补" ? "🔄" : "❌";
        return `${icon} ${seatType}: ${status}`;
      })
      .join("\n");

    return {
      content: [
        {
          type: "text",
          text: `🎫 ${train_no} ${date} ${from_station} → ${to_station} 余票信息：\n\n${ticketInfo}`,
        },
      ],
    };
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error("12306 MCP Server running on stdio");
  }
}

const server = new Railway12306Server();
server.run().catch(console.error);

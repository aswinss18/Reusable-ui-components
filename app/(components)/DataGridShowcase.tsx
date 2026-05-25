"use client";

import { ApiOutlined } from "@ant-design/icons";
import DataGrid, { type DataGridConfigItem, type DataGridRow } from "./DataGrid";

const rows: DataGridRow[] = [
  {
    id: 1,
    created_at: "2026-03-16 14:23:45\n192.168.1.100",
    type: "API",
    action: "POST /api/partners/\napprove",
    description: "Partner\napproval API\ncalled\nsuccessfully",
    user: "admin@finobank.com",
    status: "Success",
  },
  {
    id: 2,
    created_at: "2026-03-16 14:15:33\n192.168.1.101",
    type: "API",
    action: "GET /api/partners/list",
    description: "Retrieved\npartner list\n(50 records)",
    user: "admin@finobank.com",
    status: "Success",
  },
  {
    id: 3,
    created_at: "2026-03-16 13:56:41\n192.168.1.102",
    type: "API",
    action: "POST /api/auth/login",
    description: "Admin user\nlogged in",
    user: "admin@finobank.com",
    status: "Success",
  },
  {
    id: 4,
    created_at: "2026-03-16 13:30:55\n192.168.1.103",
    type: "API",
    action: "DELETE /api/\npartners/remove",
    description: "Partner\naccount\nremoved by\nadmin",
    user: "admin@finobank.com",
    status: "Failed",
  },
  {
    id: 5,
    created_at: "2026-03-16 13:10:29\n192.168.1.104",
    type: "API",
    action: "PUT /api/partners/\nupdate",
    description: "Partner details\nupdated\nsuccessfully",
    user: "admin@finobank.com",
    status: "Success",
  },
  {
    id: 6,
    created_at: "2026-03-16 12:25:47\n192.168.1.105",
    type: "API",
    action: "GET /api/analytics/\ndashboard",
    description: "Dashboard\nanalytics data\nretrieved",
    user: "admin@finobank.com",
    status: "Success",
  },
  {
    id: 7,
    created_at: "2026-03-16 11:58:09\n192.168.1.106",
    type: "API",
    action: "POST /api/\nnotifications/send",
    description: "Notification\nsent to 15\npending\npartners",
    user: "admin@finobank.com",
    status: "Success",
  },
  {
    id: 8,
    created_at: "2026-03-16 11:30:12\n192.168.1.107",
    type: "API",
    action: "GET /api/users/list",
    description: "Fetched user\nmanagement list",
    user: "admin@finobank.com",
    status: "Success",
  },
  {
    id: 9,
    created_at: "2026-03-16 10:54:21\n192.168.1.108",
    type: "API",
    action: "POST /api/limits/\nreview",
    description: "Limit review\nrequest queued",
    user: "admin@finobank.com",
    status: "Pending",
  },
  {
    id: 10,
    created_at: "2026-03-16 10:33:47\n192.168.1.109",
    type: "API",
    action: "GET /api/partners/\nsummary",
    description: "Partner\nsummary pulled",
    user: "admin@finobank.com",
    status: "Success",
  },
  {
    id: 11,
    created_at: "2026-03-16 10:10:28\n192.168.1.110",
    type: "API",
    action: "POST /api/reports/\ngenerate",
    description: "Compliance\nreport queued",
    user: "admin@finobank.com",
    status: "Pending",
  },
  {
    id: 12,
    created_at: "2026-03-16 09:42:33\n192.168.1.111",
    type: "API",
    action: "PUT /api/profile/\nupdate",
    description: "Profile record\nupdated",
    user: "admin@finobank.com",
    status: "Success",
  },
  {
    id: 13,
    created_at: "2026-03-16 09:15:02\n192.168.1.112",
    type: "API",
    action: "POST /api/files/\nupload",
    description: "File upload\ncompleted",
    user: "admin@finobank.com",
    status: "Success",
  },
  {
    id: 14,
    created_at: "2026-03-16 08:52:19\n192.168.1.113",
    type: "API",
    action: "DELETE /api/\nnotifications/remove",
    description: "Notification\nrecord removed",
    user: "admin@finobank.com",
    status: "Failed",
  },
  {
    id: 15,
    created_at: "2026-03-16 08:30:44\n192.168.1.114",
    type: "API",
    action: "GET /api/activity/\nrecent",
    description: "Recent activity\nretrieved",
    user: "admin@finobank.com",
    status: "Success",
  },
];

const config: DataGridConfigItem[] = [
  {
    name: "Timestamp",
    key: "created_at",
    valueType: "component",
    componentType: "typography",
    typographyTone: "muted",
    width: 160,
  },
  {
    name: "Type",
    key: "type",
    icon: <ApiOutlined />,
    valueType: "component",
    componentType: "typography",
    typographyTone: "primary",
    width: 86,
  },
  {
    name: "Action",
    key: "action",
    valueType: "component",
    componentType: "typography",
    typographyTone: "primary",
    width: 170,
  },
  {
    name: "Description",
    key: "description",
    valueType: "component",
    componentType: "typography",
    typographyTone: "secondary",
    width: 150,
  },
  {
    name: "User",
    key: "user",
    valueType: "component",
    componentType: "typography",
    typographyTone: "muted",
    width: 150,
  },
  {
    name: "Status",
    key: "status",
    valueType: "component",
    componentType: "tag",
    width: 110,
  },
];

export default function DataGridShowcase() {
  return (
    <section className="flex w-full flex-col gap-10 rounded-[32px] bg-white px-8 py-10 shadow-[0_20px_60px_rgba(65,64,153,0.08)] sm:px-12">
      <div className="space-y-3 text-center sm:text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          Reusable Data Grid
        </p>
        <h1 className="text-3xl font-semibold text-[#1d1b4a]">
          Config-driven table with key-based cells and optional pagination
        </h1>
        <p className="max-w-3xl text-base leading-7 text-[#6b6a8f]">
          The `config` prop controls how each column renders. Each item accepts
          a `key` such as `created_at`, plus optional component rendering,
          icon-on-left support, and pagination.
        </p>
      </div>

      <DataGrid config={config} data={rows} pagination />
    </section>
  );
}

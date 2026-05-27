import type { HeaderData, Notification, SearchItem } from "../(components)/Header";

export const headerData: HeaderData = {
  userName: "Admin User",
  userRole: "Super Admin",
  notificationCount: 3,
};

export const notifications: Notification[] = [
  {
    id: 1,
    title: "New partner application",
    description: "TechCorp Solutions has submitted a new application",
    time: "5 minutes ago",
  },
  {
    id: 2,
    title: "Account approved",
    description: "Alpha Finance account has been approved",
    time: "1 hour ago",
  },
  {
    id: 3,
    title: "Limit exceeded",
    description: "Beta Traders has exceeded their monthly limit",
    time: "2 hours ago",
  },
];

export const searchItems: SearchItem[] = [
  {
    id: 1,
    title: "Tech solutions Inc.",
    subtitle: "Edited by: Peter Griffin",
    timestamp: "4 min ago",
    category: "Limits",
    initials: "TS",
    avatarColor: "#4b49b6",
  },
  {
    id: 2,
    title: "Tech solutions Inc.",
    subtitle: "Edited by: Peter Griffin",
    timestamp: "15 days ago",
    category: "Partners",
    initials: "TS",
    avatarColor: "#4b49b6",
  },
  {
    id: 3,
    title: "Alpha Finance Corp",
    subtitle: "Edited by: John Doe",
    timestamp: "2 hours ago",
    category: "Leads",
    initials: "AF",
    avatarColor: "#0cc496",
  },
  {
    id: 4,
    title: "Beta Traders Ltd",
    subtitle: "Edited by: Jane Smith",
    timestamp: "1 day ago",
    category: "Partners",
    initials: "BT",
    avatarColor: "#ed1b2f",
  },
];

"use client";

import {
  BellOutlined,
  LogoutOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  AutoComplete,
  Badge,
  Divider,
  Flex,
  Image,
  Input,
  Layout,
  List,
  Popover,
  Typography,
} from "antd";
import { useState, type ReactNode } from "react";
import Button from "./Button";
import Modal from "./Modal";
import styles from "./Header.module.css";

export type HeaderData = {
  logoSrc?: string;
  logoAlt?: string;
  searchPlaceholder?: string;
  notificationCount?: number;
  userInitials?: string;
  userName: ReactNode;
  userRole?: ReactNode;
};

export type Notification = {
  id: number | string;
  title: string;
  description: string;
  time: string;
};

export type SearchItem = {
  id: number | string;
  title: string;
  subtitle: string;
  timestamp: string;
  category: string;
  initials?: string;
  avatarColor?: string;
};

type SearchOption = {
  value: string;
  label: ReactNode;
  searchItem: SearchItem;
};

export type HeaderProps = {
  data: HeaderData;
  notifications?: Notification[];
  searchItems?: SearchItem[];
  trailingAction?: ReactNode;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  onSearchSelect?: (value: string, option: SearchOption) => void;
  className?: string;
};

export default function Header({
  data,
  notifications = [],
  searchItems = [],
  trailingAction,
  searchValue,
  onSearchChange,
  onSearchSelect,
  className = "",
}: HeaderProps) {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  const {
    logoSrc = "/fino.png",
    logoAlt = "Fino logo",
    searchPlaceholder = "Search...",
    notificationCount = 1,
    userInitials = "AD",
    userName,
    userRole = "Super Admin",
  } = data;

  const headerClassName = [styles.header, className].filter(Boolean).join(" ");
  const avatarToneClasses = [
    styles.avatarTonePrimary,
    styles.avatarToneSuccess,
    styles.avatarToneDanger,
    styles.avatarToneWarning,
  ];

  const avatarToneByColor: Record<string, string> = {
    "#4b49b6": styles.avatarTonePrimary,
    "#0cc496": styles.avatarToneSuccess,
    "#ed1b2f": styles.avatarToneDanger,
    "#ff9800": styles.avatarToneWarning,
  };

  const handleLogout = () => {
    console.log("Logout");
    setLogoutModalOpen(false);
  };

  const getAvatarToneClass = (color: string | undefined, index: number) =>
    (color ? avatarToneByColor[color.toLowerCase()] : undefined) ||
    avatarToneClasses[index % avatarToneClasses.length];

  const getNotificationAvatar = (title: string) => {
    const firstLetter = title.charAt(0).toUpperCase();
    const colorIndex = title.length % avatarToneClasses.length;

    return {
      letter: firstLetter,
      toneClass: avatarToneClasses[colorIndex],
    };
  };

  const getSearchAvatar = (item: SearchItem) => {
    const colorIndex = item.title.length % avatarToneClasses.length;

    return {
      letter: item.initials || item.title.charAt(0).toUpperCase(),
      toneClass: getAvatarToneClass(item.avatarColor, colorIndex),
    };
  };

  const searchOptions: SearchOption[] = searchItems.map((item) => {
    const avatar = getSearchAvatar(item);

    return {
      value: item.id.toString(),
      label: (
        <Flex align="center" justify="space-between" className={styles.searchItem}>
          <Flex align="center" gap={12} className={styles.searchItemMain}>
            <Avatar size={44} className={`${styles.searchAvatar} ${avatar.toneClass}`}>
              {avatar.letter}
            </Avatar>
            <Flex vertical gap={4} className={styles.searchCopy}>
              <Typography.Text strong className={styles.searchTitle}>
                {item.title}
              </Typography.Text>
              <Typography.Text className={styles.searchSubtitle}>
                {item.subtitle} - {item.timestamp}
              </Typography.Text>
            </Flex>
          </Flex>
          <Typography.Text className={styles.searchCategory}>
            {item.category}
          </Typography.Text>
        </Flex>
      ),
      searchItem: item,
    };
  });

  const notificationContent = (
    <Flex vertical className={`${styles.notificationContent} notification-list`}>
      <List
        dataSource={notifications}
        renderItem={(item) => {
          const avatar = getNotificationAvatar(item.title);

          return (
            <List.Item className={`${styles.notificationItem} notification-item`}>
              <List.Item.Meta
                avatar={
                  <Avatar className={`${styles.notificationAvatar} ${avatar.toneClass}`}>
                    {avatar.letter}
                  </Avatar>
                }
                title={
                  <Typography.Text strong className={styles.notificationTitle}>
                    {item.title}
                  </Typography.Text>
                }
                description={
                  <Flex vertical gap={4}>
                    <Typography.Text className={styles.notificationDescription}>
                      {item.description}
                    </Typography.Text>
                    <Typography.Text type="secondary" className={styles.notificationTime}>
                      {item.time}
                    </Typography.Text>
                  </Flex>
                }
              />
            </List.Item>
          );
        }}
        locale={{ emptyText: "No notifications" }}
      />
    </Flex>
  );

  return (
    <Layout.Header className={headerClassName}>
      <Flex align="center" className={styles.inner} justify="space-between">
        <Image
          alt={logoAlt}
          className={styles.logo}
          preview={false}
          src={logoSrc}
        />

        <Flex align="center" className={styles.rightSection} gap={16}>
          <AutoComplete
            className={styles.search}
            classNames={{ popup: { root: styles.searchDropdown } }}
            notFoundContent={null}
            onChange={onSearchChange}
            onSelect={onSearchSelect}
            options={searchOptions}
            placeholder={searchPlaceholder}
            popupMatchSelectWidth={400}
            value={searchValue}
          >
            <Input
              prefix={<SearchOutlined className={styles.searchIcon} />}
              placeholder={searchPlaceholder}
            />
          </AutoComplete>

          <Popover
            content={notificationContent}
            onOpenChange={setPopoverOpen}
            open={popoverOpen}
            placement="bottomRight"
            title="Notifications"
            trigger="click"
          >
            <Badge
              className={styles.notificationBadge}
              count={notificationCount}
              overflowCount={99}
              size="small"
            >
              <BellOutlined className={styles.bellIcon} />
            </Badge>
          </Popover>

          <Divider className={styles.divider} orientation="vertical" />

          <Flex align="center" gap={12}>
            <Avatar className={styles.avatar} size={34}>
              {userInitials}
            </Avatar>

            <Flex className={styles.userText} vertical gap={0}>
              <Typography.Text className={styles.userName}>{userName}</Typography.Text>
              {userRole ? (
                <Typography.Text className={styles.userRole}>{userRole}</Typography.Text>
              ) : null}
            </Flex>
          </Flex>

          <Flex align="center" className={styles.trailingAction} justify="center">
            <Flex align="center" onClick={() => setLogoutModalOpen(true)}>
              {trailingAction || <LogoutOutlined className={styles.logoutIcon} />}
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Modal
        actions={
          <>
            <Button color="neutral" onClick={() => setLogoutModalOpen(false)} variant="outlined">
              Cancel
            </Button>
            <Button color="danger" onClick={handleLogout}>
              Logout
            </Button>
          </>
        }
        onClose={() => setLogoutModalOpen(false)}
        open={logoutModalOpen}
        title="Confirm Logout"
      >
        <Typography.Text className={styles.logoutMessage}>
          Are you sure you want to logout? You will need to sign in again to access your account.
        </Typography.Text>
      </Modal>
    </Layout.Header>
  );
}

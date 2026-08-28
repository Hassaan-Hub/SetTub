import React from 'react'
import {
  FolderOutlined,
  HistoryOutlined,
  HomeOutlined,
  LikeOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import './Sidebar.css'

const NAV_ITEMS = [
  { key: 'home', label: 'Home', icon: <HomeOutlined /> },
  { key: 'liked', label: 'Liked Videos', icon: <LikeOutlined /> },
  { key: 'history', label: 'History', icon: <HistoryOutlined /> },
  { key: 'content', label: 'My content', icon: <VideoCameraOutlined /> },
  { key: 'collection', label: 'Collection', icon: <FolderOutlined /> },
  { key: 'subscribers', label: 'Subscribers', icon: <UserOutlined /> },
]

const BOTTOM_ITEMS = [
  { key: 'support', label: 'Support', icon: <QuestionCircleOutlined /> },
  { key: 'settings', label: 'Settings', icon: <SettingOutlined /> },
]

const SidebarItem = ({ item, activeKey, onSelect }) => {
  const isActive = activeKey === item.key

  return (
    <li>
      <button
        type="button"
        title={item.label}
        aria-current={isActive ? 'page' : undefined}
        className={`sidebar-item${isActive ? ' sidebar-item-active' : ''}`}
        onClick={() => onSelect(item.key)}
      >
        <span className="sidebar-item-icon" aria-hidden="true">
          {item.icon}
        </span>
        <span className="sidebar-item-label">{item.label}</span>
      </button>
    </li>
  )
}

const Sidebar = ({ activeKey = '', onSelect = () => {} }) => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-section" aria-label="Primary navigation">
        <ul className="sidebar-list">
          {NAV_ITEMS.map((item) => (
            <SidebarItem key={item.key} item={item} activeKey={activeKey} onSelect={onSelect} />
          ))}
        </ul>
      </nav>
      <nav className="sidebar-section sidebar-section-bottom" aria-label="Account">
        <ul className="sidebar-list">
          {BOTTOM_ITEMS.map((item) => (
            <SidebarItem key={item.key} item={item} activeKey={activeKey} onSelect={onSelect} />
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
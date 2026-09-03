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

function SidebarItem(props) {
  const item = props.item
  const activeKey = props.activeKey
  const onSelect = props.onSelect
  const compact = props.compact

  let isActive = false
  if (activeKey === item.key) {
    isActive = true
  }

  let className = 'sidebar-item'
  if (isActive) {
    className = className + ' sidebar-item-active'
  }

  if (compact) {
    className =
      'flex items-center justify-center w-11 h-11 text-white border rounded-lg cursor-pointer ' +
      (isActive
        ? 'bg-white/10 border-[#ae7aff] shadow-[inset_3px_0_0_0_#ae7aff]'
        : 'border-white/18 bg-transparent hover:bg-white/8')
  }

  function handleClick() {
    onSelect(item.key)
  }

  return (
    <li>
      <button
        type="button"
        title={item.label}
        aria-current={isActive ? 'page' : undefined}
        className={className}
        onClick={handleClick}
      >
        <span className="sidebar-item-icon" aria-hidden="true">
          {item.icon}
        </span>
        {!compact && <span className="sidebar-item-label">{item.label}</span>}
      </button>
    </li>
  )
}

function Sidebar(props) {
  const activeKey = props.activeKey || ''
  const onSelect = props.onSelect || function () {}
  const compact = props.compact || false

  if (compact) {
    return (
      <aside className="flex flex-col flex-shrink-0 w-16 h-full p-2 bg-[#0f0f0f] border-r border-white/12 overflow-y-auto">
        <nav className="flex flex-col" aria-label="Primary navigation">
          <ul className="flex flex-col gap-3 items-center list-none m-0 p-0">
            {NAV_ITEMS.map(function (item) {
              return (
                <SidebarItem
                  key={item.key}
                  item={item}
                  activeKey={activeKey}
                  onSelect={onSelect}
                  compact
                />
              )
            })}
          </ul>
        </nav>
        <nav className="flex flex-col mt-auto pt-4 border-t border-white/12" aria-label="Account">
          <ul className="flex flex-col gap-3 items-center list-none m-0 p-0">
            {BOTTOM_ITEMS.map(function (item) {
              return (
                <SidebarItem
                  key={item.key}
                  item={item}
                  activeKey={activeKey}
                  onSelect={onSelect}
                  compact
                />
              )
            })}
          </ul>
        </nav>
      </aside>
    )
  }

  return (
    <aside className="sidebar">
      <nav className="sidebar-section" aria-label="Primary navigation">
        <ul className="sidebar-list">
          {NAV_ITEMS.map(function (item) {
            return (
              <SidebarItem 
                key={item.key}
                item={item}
                activeKey={activeKey}
                onSelect={onSelect}
              />
            )
          })}
        </ul>
      </nav>
      <nav className="sidebar-section sidebar-section-bottom" aria-label="Account">
        <ul className="sidebar-list">
          {BOTTOM_ITEMS.map(function (item) {
            return (
              <SidebarItem 
                key={item.key}
                item={item}
                activeKey={activeKey}
                onSelect={onSelect}
              />
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar

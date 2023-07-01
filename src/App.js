import React, { useState } from 'react';
import './style.css';

export default function TabbedInterface() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabbed-interface">
      <div className="tab-headers">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-header ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

const tabs = [
  { label: 'Tab 1', content: 'This is the content of Tab 1' },
  { label: 'Tab 2', content: 'This is the content of Tab 2' },
  { label: 'Tab 3', content: 'This is the content of Tab 3' },
];

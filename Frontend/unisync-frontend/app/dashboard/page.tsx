"use client";

import "./dashboard.css";

export default function DashboardPage() {
  return (
    <div className="dashboard-container">

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sb-logo">
          Uni<span>Sync</span>
        </div>

        <nav className="sb-nav">
          <a className="sb-link active">Dashboard</a>
          <a className="sb-link">My Profile</a>
          <a className="sb-link">My Projects</a>
          <a className="sb-link">Discover Peers</a>
          <a className="sb-link">Agreements</a>
          <a className="sb-link">Credentials</a>
          <a className="sb-link">Messages</a>
        </nav>

        <div className="sb-footer">
          <div className="sb-avatar">RY</div>
          <div>
            <h5>Rabindra Yadav</h5>
            <p>Computer Engineering</p>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="main">

        {/* Topbar */}
        <div className="topbar">
          <div>
            <h1>Welcome back, Rabindra </h1>
            <p>Here's what's happening across your projects today.</p>
          </div>

          <button className="btn-primary">
            + Post Idea
          </button>
        </div>

        {/* Profile Card */}
        <div className="profile-card">
          <div className="profile-avatar">RY</div>

          <div className="profile-info">
            <h2>Rabindra Yadav ✓</h2>
            <p>Cyber Security · ML Engineer</p>
            <span>Computer Engineering · Everest Engineering College</span>
          </div>

          <div className="reputation">
            <h3>87</h3>
            <p>Reputation</p>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid">

          <div className="stat-card">
            <h2>3</h2>
            <p>Active Projects</p>
          </div>

          <div className="stat-card">
            <h2>5</h2>
            <p>Completion Badges</p>
          </div>

          <div className="stat-card">
            <h2>0</h2>
            <p>Penalty Tags</p>
          </div>

          <div className="stat-card">
            <h2>34</h2>
            <p>Peer Matches</p>
          </div>

        </div>

        {/* Active Projects */}
        <div className="panel">
          <h3>Active Projects</h3>

          <div className="project">
            <div>
              <h4>NLP-Based Search Engine</h4>
              <p>4 members · Due in 3 weeks</p>
            </div>
            <span>78%</span>
          </div>

          <div className="project">
            <div>
              <h4>Blockchain Voting System</h4>
              <p>3 members · Due in 1 week</p>
            </div>
            <span>94%</span>
          </div>

          <div className="project">
            <div>
              <h4>Campus Navigation AR App</h4>
              <p>5 members · Due in 6 weeks</p>
            </div>
            <span>32%</span>
          </div>
        </div>

        {/* Activity */}
        <div className="panel">
          <h3>Recent Activity</h3>

          <ul className="activity-list">
            <li>API Integration task completed</li>
            <li>Project agreement signed</li>
            <li>New join request received</li>
            <li>Earned Reliable Collaborator badge</li>
          </ul>
        </div>

      </main>
    </div>
  );
}
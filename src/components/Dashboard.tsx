import React from 'react'

const Dashboard = () => {
  const authenticated = localStorage.getItem("token")
  if(!authenticated){window.location.href = "/login"}
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard
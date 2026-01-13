import React from 'react'
import ModeratorSidebar from '../components/moderator/Sidebar'

const Layout = ( children ) => {
  return (
    <div>
        <ModeratorSidebar />
        {children}
    </div>
  )
}

export default Layout
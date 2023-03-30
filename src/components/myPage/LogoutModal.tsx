import React, { useState } from 'react'

export default function LogoutModal() {
    const [modalOpen, setModalOpen] = useState(false)

    const showModal = () => {
        setModalOpen(true)
    }
  return (
    <div>
        <button></button>
    </div>
  )
}

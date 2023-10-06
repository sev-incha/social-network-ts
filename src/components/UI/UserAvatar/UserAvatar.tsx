import React, { useState, useEffect } from "react";
import { UserInitials, FileInput } from "./UserAvatar.style";

interface UserAvatarProps {
  avatarUrl: string
  onAvatarClick: (event: React.ChangeEvent<HTMLInputElement>) => void
  userName?: string
}

export const UserAvatar = ({ avatarUrl, userName, onAvatarClick }: UserAvatarProps) => {
  const [initials, setUserInitials] = useState<string>('')

  useEffect(() => {
    if (!avatarUrl && userName) {
      let initialsArr = userName.split(' ')
      let initials = `${initialsArr[0][0]} ${initialsArr[1][0]}`
      setUserInitials(initials)
    }
  }, [avatarUrl, userName])

  return (
    <>
      {avatarUrl ?
        (<img src={avatarUrl} alt="" />) :
        (<UserInitials>{initials}</UserInitials>)
      }
      <FileInput type="file" onChange={onAvatarClick} />
    </>
  )
}
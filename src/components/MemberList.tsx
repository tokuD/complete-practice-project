'use client'
import React from 'react'
import { Member } from '.'
import Card from './UI/Card'
import { useMembers } from '@/providers'

type Props = {}

const MemberList = (props: Props) => {
  const members = useMembers()
  if (members.length === 0) {
    return
  }
  return (
    <Card>
      <ul className="flex flex-col gap-2">
        {members.map((member) => (
          <Member
            key={member.id}
            userName={member.username}
            age={member.age}
            id={member.id}
          />
        ))}
      </ul>
    </Card>
  )
}

export default MemberList

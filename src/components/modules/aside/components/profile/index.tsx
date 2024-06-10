import React from 'react'
import Avatar from './Avatar'
import Wrapper from './Wrapper'
import Info from './Info'
import Buttons from './Buttons'

import { data } from "@/data"

const Profile = () => {
    return (
        <Wrapper>
            <Avatar src="/profile.jpg" status="Open to Work" />
            <Info work={data.work} name={data.creator} bio={data.bio} />
            <Buttons email={data.email} />
        </Wrapper>

    )
}

export default Profile
import React from 'react'

export default function NavLink({name, route}) {
    return (
            <li><a href={route}>{name}</a></li>
    )
}

import React from 'react'

const Footer = () => {

    const date = new Date()
    const year = date.getFullYear()

    return (
        <div className="text-center p-10 mt-10 border-t dark:border-gray-700 border-gray-200">
            <h1>{year} Noogle, Inc.</h1>
        </div>
    )
}

export default Footer
// import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({tittle}) => {
    const onClick = () => {
        console.log('click')
    }
    return (
        <header>
            {/* <h1 style = { headingStyle }>{tittle}</h1> */}
            <h1 className = 'header'>
                {tittle}
                <Button color = 'green' text = 'Add' onClick = {onClick} />
                </h1>
            
            {/* <Button color = 'green' text = 'Push Me 1' onClick = {onClick} />
            <Button color = 'yellow' text = 'Push Me 2' onClick = {onClick} />
            <Button color = 'red' text = 'Push Me 3' onClick = {onClick} /> */}
        </header>
    )
}

// set default props for header
Header.defaultProps = {
    tittle: 'Task Tracker',
}

// set default props types
Header.propTypes = {
    tittle: PropTypes.string.isRequired
}

const headingStyle = {
    color: 'red',
    backgroundColor: 'blue'
}

export default Header

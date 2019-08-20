import React from 'react';

class Card extends React.Component {
    state = {
        showMenu: false
    }

    showMenu = (e) => {
        e.preventDefault();
        this.setState((prevState) => {
            return { showMenu: !this.state.showMenu }
        })
    }

    closeMenu = () => {
        this.setState()
    }

    render() {
        const menu = (
            <div className='menu' style={styles.menu}>
                <button style={styles.button}>Menu item 1</button><br />
                <button style={styles.button}>Menu item 2</button><br />
                <button style={styles.button}>Menu item 3</button><br />
            </div>
        )
        return (
            <div>
                <button onClick={this.showMenu}>Show Menu</button>
                {this.state.showMenu && menu}
            </div>
        )
    }
}

const styles = {
    menu: {
        margin: '1px auto auto 2px',
        padding: '2px',
        width: '10%',
        border: '1px solid lightgray'
    },
    button: {
        textAlign: 'center'
    }

}

export default Card;
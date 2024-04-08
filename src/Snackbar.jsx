import React from "react";
import PropTypes from 'prop-types';

import Overlay from "@j4jinxx/overlay";


/**
 * Minimal Snackbar/Notification React Component.
 *
 * @author [Amol Meshram](https://github.com/j4jinx)
 */
const Snackbar = (props) => {
    const {
        opened = false,
        message = "Are you sure?",
        kind = 'default',
        onClose = () => { }
    } = props;

    let bg = '#212121';
    if (kind === 'info') {
        bg = '#039be5';
    } else if (kind === 'success') {
        bg = '#43a047';
    } else if (kind === 'error') {
        bg = '#f44336';
    } else if (kind === 'warning') {
        bg = '#ef6c00';
    }

    return (
        <React.Fragment>
            <Overlay opened={opened} color='transparent' onClose={onClose} />

            <div title="snackbar"
                style={{
                    display: `block`,
                    position: `fixed`,
                    willChange: `transform`,
                    transitionProperty: `visibility, transform, opacity`,
                    transitionDuration: `0.2s`,
                    zIndex: `1999`,
                    top: `auto`,
                    bottom: `2em`,
                    left: 0,
                    right: 0,
                    width: `auto`,
                    maxWidth: `720px`,
                    margin: `0 auto`,
                    color: `inherit`,
                    backgroundColor: `inherit`,
                    transform: (opened ? `translate3d(0, 0, 0)` : `translate3d(0, 100%, 0)`),
                    opacity: (opened ? 1 : 0),
                    visibility: (opened ? `visible` : `hidden`),
                }}
            >
                <div title="snackbar-container"
                    style={{
                        WebkitUserSelect: `none`,
                        userSelect: `none`,
                        padding: `0.50rem`,
                        margin: `0.25rem 0.50rem`,
                        fontSize: `1rem`,
                        display: `flex`,
                        flexFlow: `row nowrap`,
                        alignItems: `center`,
                        borderRadius: `0.15rem`,
                        boxShadow: `0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19)`,
                        backgroundColor: `${bg}`,
                        color: `#ffffff`,
                    }}
                >

                    <div title="message" style={{ flex: 1, marginLeft: 8 }}>{message}</div>
                    <button title="close-btn"
                        style={{
                            border: `none`,
                            backgroundColor: `inherit`,
                            padding: `4px`,
                            fontFamily: `inherit`,
                            fontWeight: 500,
                            fontSize: `1rem`,
                            cursor: `pointer`,
                            color: 'inherit'
                        }}
                        type="button"
                        onClick={onClose}
                    >&#10006;</button>
                </div>
            </div>
        </React.Fragment >
    );
};

Snackbar.propTypes = {
    /**
   * Snackbar Message 
   */
    message: PropTypes.string,
    /**
    * If true, the Snackbar is open   
    */
    opened: PropTypes.bool,
    /**
     * Callback fired when the component requests to be closed
     */
    onClose: PropTypes.func,
    /**
   * Snackbar Kind  
   */
    kind: PropTypes.oneOf(['default', 'info', 'error', 'success', 'warning']),
};

Snackbar.defaultProps = {
    message: 'Are you sure?',
    opened: false,
    onClose: () => { },
    kind: 'default',
};

export default Snackbar;
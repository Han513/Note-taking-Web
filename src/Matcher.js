import React from 'react'
import { Switch, Route, Link, matchPath, withRouter } from "react-router-dom";
const Matcher = (props) => {
    console.log(props.location)
    console.log(props.match)
    return <>
    </>
}
export default () => <Route path='/:a/:b'
    component={Matcher}
/>
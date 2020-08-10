import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
    <h1>Info</h1>
    <p>This info is:{props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) =>{
    return (props) =>(
        <div>
        {props.isAdmin && <p>This is private info</p>}
        
        <WrappedComponent {...props}/>
        </div>
    )
}
const requireAuthentication = (WrappedComponent) =>{
    return (props) =>(
        <div>
        {props.isAuthenticated ? (<WrappedComponent {...props}/>) :(<p>Please log in to view the info</p>)}
        </div>
    )
} 
const AdminInfo = withAdminWarning(Info);
// ReactDOM.render(<AdminInfo isAdmin={true} info="This are more details"/>, document.getElementById('app'));

const AuthInfo = requireAuthentication(Info);
ReactDOM.render(<AuthInfo isAuthenticated={false} info="This are more details"/>, document.getElementById('app'));
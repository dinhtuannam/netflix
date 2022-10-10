import { Fragment } from 'react';
function AdminLayout({ children }) {
    return (
        <Fragment>
            <p>Admin Layout</p>
            {children}
        </Fragment>
    );
}

export default AdminLayout;

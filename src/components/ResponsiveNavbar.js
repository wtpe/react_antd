import { Drawer, Menu } from "antd"
import { useState } from "react";
import { MenuOutlined } from '@ant-design/icons/lib/icons';
function ResponsiveNavbar() {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div style={{ height: '100vh', backgroundColor: "blue" }}>
            <div style={{
                backgroundColor: 'darkorange',
                height: 60,
                paddingLeft: 12,
                paddingTop: 12
            }}
                className="menuIcon"
            >
                <MenuOutlined
                    style={{ color: 'white', fontSize: 30 }}
                    onClick={() => {
                        setOpenMenu(true)
                    }}
                />
            </div>
            <span className="headerMenu">
                <AppMenu />
            </span>
            <Drawer
                placement="left"
                open={openMenu}
                onClose={() => {
                    setOpenMenu(false);
                }}
                closable={false}
                bodyStyle={{ backgroundColor: 'darkorange' }}
            >
                <AppMenu />
            </Drawer>
        </div>
    );
}

function AppMenu(isInline = false) {
    return (
        <Menu
            style={{ backgroundColor: 'darkorange', color: 'white', fontSize: 24, border: 'none' }}
            mode={isInline ? 'inline' : "horizontal"}
            items={[
                {
                    label: 'Home',
                    key: 'home',
                },
                {
                    label: 'Contact Us',
                    key: 'contact',
                },
                {
                    label: 'About Us',
                    key: 'about',
                },
                {
                    label: 'Login',
                    key: 'login',
                },
            ]}>

        </Menu>
    )
}
export default ResponsiveNavbar;

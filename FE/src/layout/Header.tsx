import React, { useEffect, useState } from 'react'
import logo from '@/assets/logo.png'
import phone from '@/assets/phone.png'
import map from '@/assets/map.png'
import search from '@/assets/Shape.png'
import { Button, Drawer, Dropdown, Image, Popover, Select } from 'antd'
import "./Header.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import appRoutes from '@/router/appRoutes'
import Search from 'antd/es/transfer/search'
import { CloseCircleOutlined, CloseOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

const Header = () => {
    const { appState, headerState, headerProductState, currentHeader, currentHeaderProduct } = useSelector((state: RootState) => (state.appState));
    const [open, setOpen] = useState(false);
    const [opneMenu, setOpenMenu] = useState(false)
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    const showMenu = () => {
        setOpenMenu(true);
    };

    const onCloseMenu = () => {
        setOpenMenu(false);
    };


    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div className='bg-black z-[1001]'>
            <div className='bg-[#FFF3F5] z-[1001]'>
                <div className='flex flex-row items-center container mx-auto'>
                    <div className='font-bold pr-10 text-xs'>
                        <Image src={phone} preview={false} width={14} className='pr-1' />
                        0333551318
                    </div>
                    <div className='font-bold text-xs'>
                        <Image src={map} preview={false} width={14} className='pr-1' />
                        Địa chỉ cửa hàng
                    </div>
                </div>

            </div>
            <div className='bg-black text-white p-6'>
                <div className='container mx-auto flex flex-row justify-between items-center'>
                    <div className='flex flex-row items-center'>
                        <Image src={logo} width={24} />
                        <div className='text-2xl pl-2'>DUS BEETLES</div>
                    </div>
                    <div className='flex flex-row gap-6 justify-between items-center'>
                        {
                            windowSize.width > 1024 ? appRoutes.map(r => <Link to={r.path} key={r.path} className='no-underline' style={{ color: appState == r.state ? 'white' : '#979797' }}>
                                {r.label}
                            </Link>) : null
                        }
                    </div>
                    <div className='flex flex-row items-center gap-3'>
                        <Image src={search} onClick={() => showDrawer()} preview={false} width={20} />
                        {
                            windowSize.width > 1024 ?
                                <div className='w-28 flex justify-end'>
                                    <Select bordered={false} defaultValue="Tiếng việt" options={[
                                        { value: 'Tiếng việt', label: 'Tiếng việt' },
                                        { value: 'English', label: 'English' },
                                    ]} />
                                </div> :
                                opneMenu ? <CloseOutlined className='text-xl pl-3 pt-2 text-[#979797] cursor-pointer' onClick={() => onCloseMenu()} /> :
                                    <MenuUnfoldOutlined className='text-xl pl-3 pt-2 text-[#979797] cursor-pointer' onClick={() => showMenu()} />
                        }
                    </div>
                </div>

            </div>
            {
                (!open && !opneMenu) &&
                <div className='bg-black text-white p-3 z-[1]'>
                    <div className='container mx-auto flex flex-row gap-6'>
                        {
                            headerState.map(dt => (
                                <Link key={dt} to={appState == "home" ? dt : (appState + '/' + dt)} className='text-xs no-underline' style={{ color: dt == currentHeader ? 'white' : '#979797' }}>{dt}</Link>

                            ))
                        }
                    </div>
                </div>
            }
            {
                (!open && !opneMenu) &&
                <div className='bg-[#F5F5F7] text-[#575757] z-[1]'>
                    <div className='container mx-auto flex flex-row gap-6'>
                        {
                            headerProductState.map(dt => (
                                <Link key={dt} to={appState == "home" ? (currentHeader + '/' + dt) : (appState + '/' + currentHeader + '/' + dt)} className='text-xs no-underline p-3' style={{ color: dt == currentHeaderProduct ? 'black' : '#979797' }}>{dt}</Link>

                            ))
                        }

                    </div>
                </div>
            }
            <Drawer
                placement={'top'}
                closable={false}
                onClose={onClose}
                open={open}
                style={{ height: "50vh", backgroundColor: 'black', paddingTop: 100, }}
            // key={''}
            >

                <div className='container mx-auto flex flex-row items-center gap-3'>
                    <Search /> <CloseCircleOutlined className='text-white text-2xl pt-2 cursor-pointer' onClick={() => onClose()} />
                </div>
            </Drawer>
            <Drawer
                placement={'left'}
                closable={false}
                onClose={onCloseMenu}
                open={opneMenu}
                style={{ backgroundColor: 'black', width: '100vw', paddingTop: 100 }}
            >
                <div className='flex flex-col min-h-[100%]'>
                    <div className='flex flex-col gap-3'>
                        {
                            appRoutes.map(r => <Link onClick={()=>onCloseMenu()} to={r.path} key={r.path} className='no-underline text-2xl' style={{ color: appState == r.state ? 'white' : '#979797' }}>
                                {r.label}
                            </Link>)
                        }
                    </div>
                    <div className='flex-auto'></div>
                    <div className='text-white'>
                        <div className='w-28 flex justify-start pb-2'>
                            <Select style={{padding: 0}} dropdownStyle={{padding: 0}} bordered={false} defaultValue="Tiếng việt" options={[
                                { value: 'Tiếng việt', label: 'Tiếng việt' },
                                { value: 'English', label: 'English' },
                            ]} />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='font-bold text-xs'>
                                <Image src={phone} preview={false} width={14} className='pr-1' />
                                0333551318
                            </div>
                            <div className='font-bold text-xs'>
                                <Image src={map} preview={false} width={14} className='pr-1' />
                                Địa chỉ cửa hàng
                            </div>
                        </div>
                    </div>

                </div>
            </Drawer>
        </div>
    )
}

export default Header
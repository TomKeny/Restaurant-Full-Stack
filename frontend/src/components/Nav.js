import { Link } from 'react-router-dom';
import { Fragment, useEffect } from 'react';
import { useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Cart } from './Cart';
import logo from '../images/logo.svg';
import getItems from '../api/getItems';
import addItem from '../api/addItem';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const Nav = ({ userID, setUserID, cartQuantity }) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [toggle, setToggle] = useState(true)
    const [navigation, setNavigation] = useState([
        { name: 'Home', href: '/', current: false, index: 0 },
        { name: 'Menu', href: '/menu', current: false, index: 1  },
        { name: 'Reviews', href: '/reviews', current: false, index: 2  },
        { name: 'Contact Us', href: '/contactus', current: false, index: 3  },
    ])

    async function loginSubmitHandler(e) {
        e.preventDefault()

        let response = await getItems("user", { Username: username, Password: password })
        setUsername("")
        setPassword("")
        if (response.length > 0) {
            setUserID({ UserID: response[0]._id, Username: response[0].Username })
        }
        else if (response.length == 0) {
            alert("Error: Invalid username and/or password")
        }
    }

    async function registerSubmitHandler(e) {
        e.preventDefault()
        let response = await addItem("user", { Username: username, Password: password })
        console.log(response)
        let newResponse = await getItems("user", { Username: username, Password: password })

        setUsername("")
        setPassword("")
        setUserID({ UserID: newResponse[0]._id, Username: newResponse[0].Username })
    }

    function Toggle() {
        toggle ? setToggle(false) : setToggle(true)
    }

    function setActive(index) {
        let tempNavigation = [...navigation]
        for (let i = 0; i < 4; i++ ) {
            tempNavigation[i].current = false
        }
        if (index != -1) {
            tempNavigation[index].current = true
        }
        setNavigation(tempNavigation)
    }

    useEffect(() => {
        console.log(window.location.pathname)
        switch (window.location.pathname) {
            case "/":
                setActive(0)
                break
            case "/menu":
                setActive(1)
                break
            case "/reviews":
                setActive(2)
                break
            case "/contactus":
                setActive(3)
                break
            default:
                setActive(-1)
                break
        }
    })

    return (
        <Disclosure as="nav" className="bg-fancy-extra-dark-blue">
            {({ open }) => (
                <>
                    <div className="p-5 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

                                {/* logo */}
                                <div className="flex flex-shrink-0 items-center">
                                    <img className="h-12 me-3" src={logo} />
                                </div>

                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                {/* Cart icon */}
                                <Cart cartQuantity={cartQuantity} />



                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt="User image"
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            {userID == "" ?
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <>
                                                            <form onSubmit={toggle ? loginSubmitHandler : registerSubmitHandler} style={{ textAlign: "center" }}>
                                                                <input id="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={{ backgroundColor: "rgb(235,235,235)", color: "black", marginTop: 5 }}></input>
                                                                <br></br>
                                                                <input id="Password" type="text" value={password} onChange={(e) => setPassword(e.target.value)} style={{ backgroundColor: "rgb(235,235,235)", color: "black", marginTop: 5 }}></input>
                                                                <br></br>
                                                                <button
                                                                    style={{ marginLeft: "auto", marginRight: "auto" }}
                                                                    href="#"
                                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                                >
                                                                    {toggle ? "Login" : "Register"}
                                                                </button>
                                                            </form>
                                                            <p onClick={Toggle} style={{ color: "black", textAlign: "center", fontSize: "0.7em" }}>{toggle ? "Register Account" : "Login"}</p>

                                                        </>
                                                    )}
                                                </Menu.Item> :
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <>
                                                            <a
                                                                href="#"
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                {userID.Username}
                                                            </a>
                                                            <Link
                                                                to="/orderhistory"
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                Order History
                                                            </Link>
                                                            <a
                                                                onClick={() => setUserID("")}
                                                                href="/"
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                Sign out
                                                            </a>
                                                        </>
                                                    )}
                                                </Menu.Item>
                                            }
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

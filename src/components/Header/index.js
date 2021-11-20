import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Logo from "../../assets/desktop-logo.png";
import MobileLogo from "../../assets/logo.png";
import LinkIcon from "../../assets/link.svg";
import MetaMask from "../../assets/metamask.svg";

function Header() {
    const [connected, setConnected] = useState(false);
    const [chainId, setChainId] = useState(0);
    const [showConnectModal, setShowConnectModal] = useState(false);
    const [showSwitchModal, setShowSwitchModal] = useState(false);
    const [showAccountModal, setShowAccountModal] = useState(false);

    const connectWallet = () => {
        setShowConnectModal(true);
    };
    const switchWallet = () => {
        setShowSwitchModal(true);
    };
    return (
        <div className="header">
            <Navbar bg="transparent" expand="lg" variant="dark">
                <Container fluid>
                    <div className="d-flex align-items-center">
                        <Navbar.Brand href="/swap-page">
                            <img src={Logo} alt="FibSWAP Dex" className="logo" />
                            <img src={MobileLogo} alt="FibSWAP Dex" className="mobile-logo" />
                        </Navbar.Brand>
                        <div className="d-flex flex-column justify-content-center header-text-box">
                            <p className="text-start">Fib Token</p>
                            <p>
                                0x43450...49732853{" "}
                                <a href="https://pancakeswap.finance/">
                                    <img
                                        src={LinkIcon}
                                        alt="Link to token contract"
                                        className="mx-2"
                                    />
                                </a>
                            </p>
                        </div>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="">
                            <a
                                className="mx-lg-4 mb-lg-0 mb-1 header-link"
                                href="https://dex.fibswap.io"
                                rel="noreferrer"
                                target="_blank"
                                data-nsfw-filter-status="swf"
                            >
                                DEx SWAP
                            </a>
                        </Nav>
                        <Nav className="active">
                            <a
                                className="mx-lg-4 mb-lg-0 mb-1 header-link"
                                href="https://bsc.fibswap.io?outputCurrency=0x5067c6e9E6c443372f2E62946273ABbF3Cc2f2B3"
                                rel="noreferrer"
                                target="_blank"
                                data-nsfw-filter-status="swf"
                            >
                                DASHBOARD
                            </a>
                        </Nav>
                        <Nav className="">
                            <a
                                className="mx-lg-4 mb-lg-0 mb-1 header-link"
                                href="https://bsc.fibswap.io?outputCurrency=0x5067c6e9E6c443372f2E62946273ABbF3Cc2f2B3"
                                rel="noreferrer"
                                target="_blank"
                                data-nsfw-filter-status="swf"
                            >
                                WEBSITE
                            </a>
                        </Nav>
                        <Nav className="ms-auto">
                            <a
                                className="mx-lg-4 mb-lg-0 mb-1 header-link"
                                href="https://bsc.fibswap.io?outputCurrency=0x5067c6e9E6c443372f2E62946273ABbF3Cc2f2B3"
                                rel="noreferrer"
                                target="_blank"
                                data-nsfw-filter-status="swf"
                            >
                                Buy Fibo Token
                            </a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;

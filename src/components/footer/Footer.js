import "./Footer.css";

function Footer() {
    return (
        <>
            <hr />
            <footer>
                <p>{new Date().getFullYear()} - Versão: 0.0.1</p>
                <a href="/#">Topo</a>
            </footer>
            <hr />
        </>
    )
}

export default Footer;
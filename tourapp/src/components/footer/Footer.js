import "./Footer.css";

function Footer() {
return (
    <>
<div className="footer">
<div className="container">
        <div className="links">
            <h2>Follow Us with:</h2>
        <ul>
            <li>
            <a href="www.facebook.com">
                <i className="fab fa-2x fa-facebook-square"></i>
            </a>
            </li>
            <li>
            <a href="www.twitter.com">
                <i className="fab fa-2x fa-twitter-square"></i>
            </a>
            </li>
            <li>
            <a href="www.youtube.com">
                <i className="fab fa-2x fa-youtube"></i>
            </a>
            </li>
        </ul>
        </div>
        <div>
            <p className="copy">&copy;Copyright by Malek Alsheekh Hasan</p>
        </div>
    </div>
</div>
    </>
);
}
export default Footer;

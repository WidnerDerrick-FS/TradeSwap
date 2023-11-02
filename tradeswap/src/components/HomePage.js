import React from 'react';
import './HomePage.css';

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faShippingFast, 
    faShieldAlt, 
    faThumbsUp, 
    faPhone, 
    faUserClock, 
    faUsers,
    faUserPlus, 
    faList, 
    faEye, 
    faExchangeAlt, 
    faComments, 
    faHandshake 
} from '@fortawesome/free-solid-svg-icons';

// React Slick
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomePage() {
    // Slider settings
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000   // Slide changes every 2 seconds. Adjust as needed.
    };

    return (
        <div className="home-container">

            {/* Main Banner */}
            <div className="banner">
                <h1>Welcome to TradeSwap</h1>
                <p>The best platform for exchanging items.</p>
            </div>

            <div className="why-choose-us">
                <h2>Why Choose Us?</h2>
                <div className="features">
                    <div className="feature">
                        <FontAwesomeIcon icon={faShippingFast} size="3x" />
                        <p>Fast Trades</p>
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faShieldAlt} size="3x" />
                        <p>Secure Exchanges</p>
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faThumbsUp} size="3x" />
                        <p>Trusted By Many</p>
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faPhone} size="3x" />
                        <p>24/7 Support</p>
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faUserClock} size="3x" />
                        <p>User-Friendly</p>
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faUsers} size="3x" />
                        <p>Active Community</p>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
<div className="how-it-works-section">
    <h2>How TradeSwap Works:</h2>

    <Slider {...sliderSettings}>
        {/* Step 1 */}
        <div className="step">
            <FontAwesomeIcon icon={faUserPlus} size="3x" />
            <h3>Step 1: Register & Profile Setup</h3>
            <p>Join TradeSwap by signing up with your details. Customize your profile, set preferences, and get ready to start trading!</p>
        </div>

        {/* Step 2 */}
        <div className="step">
            <FontAwesomeIcon icon={faList} size="3x" />
            <h3>Step 2: List Items</h3>
            <p>Add the items you want to swap. Provide clear photos, describe the item's condition, and set your swapping preferences.</p>
        </div>

        {/* Step 3 */}
        <div className="step">
            <FontAwesomeIcon icon={faEye} size="3x" />
            <h3>Step 3: Discover & Browse</h3>
            <p>Explore the vast array of items listed by other users. Use filters to narrow down your search and find the perfect match.</p>
        </div>

        {/* Step 4 */}
        <div className="step">
            <FontAwesomeIcon icon={faExchangeAlt} size="3x" />
            <h3>Step 4: Propose a Swap</h3>
            <p>Found something interesting? Propose a swap to the item owner, suggesting your items in exchange.</p>
        </div>

        {/* Step 5 */}
        <div className="step">
            <FontAwesomeIcon icon={faComments} size="3x" />
            <h3>Step 5: Secure Communication</h3>
            <p>Chat securely with the other user. Discuss and finalize swap details, ensuring a safe and agreeable trade.</p>
        </div>

        {/* Step 6 */}
        <div className="step">
            <FontAwesomeIcon icon={faHandshake} size="3x" />
            <h3>Step 6: Swap & Review</h3>
            <p>Once both parties are satisfied, finalize the swap. After the trade, leave a review to share your experience.</p>
        </div>
    </Slider>
</div>


            {/* Call to Action Banner */}
            <div className="banner">
                <h1>Get Started Now!</h1>
                <p>Join our community and start swapping items.</p>
            </div>

        </div>
    );
}

export default HomePage;

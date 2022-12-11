import React from "react";
import contentSectionImg from '../../assets/banner-content-section.png';
import './contentSection.scss';

const ContentSection = () => {
    return (
    <section className="mwPage contentSection mb80">
        <div className="firstColumn">
            <h3> Lorem Ipsum </h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat aliquet. Sed sed pellentesque porttitor phasellus donec condimentum sit sapien.
            </p>
        </div>

        <img src={contentSectionImg} alt="" />

    </section>
    )
}

export default ContentSection;
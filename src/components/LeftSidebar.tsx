import logo from "./../assets/icons/logo.svg";
import Lightning from "./../assets/icons/mdi_lightning-bolt.svg?react";
import Home from "./../assets/icons/home.svg?react";
import Products from "./../assets/icons/products.svg?react";
import Creatives from "./../assets/icons/creatives.svg?react";
import Video from "./../assets/icons/video.svg?react";
import Promotion from "./../assets/icons/promotion.svg?react";

export default function LeftSidebar() {
  return (
    <div className="left-sidebar">
      <div className="left-sidebar__top d-grid">
        <div className="left-sidebar__top__logo">
          <img src={logo} alt="Zeely logo" />
        </div>
        <a className="left-sidebar__top__growth-link rounded-pill" href="#">
          <Lightning width={14} height={14} />
          Growth
        </a>
      </div>
      <div className="left-sidebar__menu">
        <ul>
          <li>
            <a href="#">
              <Home width={24} height={24} />
              Home
            </a>
          </li>
          <li>
            <a href="#">
              <Products width={24} height={24} />
              Products
            </a>
          </li>
          <li>
            <a href="#">
              <Creatives width={24} height={24} />
              Static ads
            </a>
          </li>
          <li>
            <a href="#">
              <Video width={24} height={24} />
              Videos
            </a>
          </li>
          <li className="selected">
            <a href="#">
              <Promotion width={24} height={24} />
              Campaigns
            </a>
          </li>
        </ul>
      </div>
      <div className="left-sidebar__account">
        <div className="left-sidebar__account__avatar" data-count="2">C</div>
        <div className="left-sidebar__account__info">
          <div className="left-sidebar__account__info__name">Cosmo Store</div>
          <div className="left-sidebar__account__info__site">
            zee.store/cosmostore
          </div>
        </div>
      </div>
    </div>
  );
}

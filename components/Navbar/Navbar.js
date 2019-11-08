import React from "react";
import posed from "react-pose";
import { NavWrapperStyle } from "./NavbarStyles";
import Link from "next/link";
import FontMenu from "../../styles/fontsStyles/FontMenu";
import PropTypes from "prop-types";

import Fontp from "../../styles/fontsStyles/Fontp";
import Fonta from "../../styles/fontsStyles/Fonta";

import { withTranslation } from "../../i18n";

const Box = posed.div({
  up: {
    y: ({ y }) => y,
    transition: {
      duration: 400,
      ease: "linear"
    }
  },
  down: {
    y: ({ y2 }) => y2,
    transition: {
      duration: 400,
      ease: "linear"
    }
  }
});

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburger: undefined,
      position: true,
      pos: true,
      menuSizes: { y: -1000, y2: 0 },
      visible: false,
      logoVisible: true
    };
  }

  _manageResize = () => {
    switch (true) {
      case window.innerWidth < 376:
        return { y: -window.innerHeight * 1.2, y2: 0 };
      case window.innerWidth < 415:
        return { y: -window.innerHeight * 1.2, y2: 0 };
      case window.innerWidth < 769:
        return { y: -window.innerHeight * 1.2, y2: 0 };
      default:
        return { y: -window.innerHeight * 1.2, y2: 0 };
    }
  };

  componentDidMount() {
    this.setState({
      visible: true,
      hamburger: document.getElementsByClassName("hamburger")[0],
      navLogo: document.getElementsByClassName("navLogo")[0],
      menuSizes: this._manageResize()
    });
  }

  hamburgerEffect = () => {
    let el = this.state.hamburger;
    let log = this.state.navLogo;

    if (el.classList) {
      el.classList.toggle("is-active");
    } else {
      var classes = el.className.split(" ");
      var existingIndex = classes.indexOf("is-active");

      if (existingIndex >= 0) classes.splice(existingIndex, 1);
      else classes.push("is-active");

      el.className = classes.join(" ");
    }

    if (!this.state.logoVisible) {
      setTimeout(() => {
        this.setState({ logoVisible: !this.state.logoVisible });
      }, 400);
    } else {
      this.setState({ logoVisible: !this.state.logoVisible });
    }
  };

  _managePositionNav = () => {
    if (this.state.pos) {
      this.setState(
        { position: !this.state.position, pos: !this.state.pos },
        () => this.hamburgerEffect()
      );
    } else {
      this.setState({ position: !this.state.position }, () => {
        this.hamburgerEffect();
        setTimeout(() => {
          this.setState({ pos: !this.state.pos });
        }, 400);
      });
    }
  };

  render() {
    const { backgroundColor, t, handleScroll } = this.props;
    return (
      <NavWrapperStyle
        position={this.state.pos}
        visible={this.state.visible}
        lvisible={this.state.logoVisible}
        backgroundColor={backgroundColor}
      >
        <div className="menuIcon" backgroundColor={backgroundColor ? backgroundColor : "white"}>
            <a  href="/"><img className="navLogo" src={backgroundColor && backgroundColor == "white" ? ` /static/svg/whiteLogoTailor.svg` : backgroundColor && backgroundColor == "pink" ? `/static/svg/pinkLogoTailor.svg`  : `/static/svg/blueLogoTailor.svg` } /></a>

          <a className="hamburger hamburger--spin" type="button" onClick={() => this._managePositionNav()}>
            <span className="hamburger-box">
              <FontMenu color="#0F1C51" color={backgroundColor ? backgroundColor : "#0F1C51"} menu>{this.state.logoVisible ? " Menu " : "Cerrar"}</FontMenu>
            </span>
          </a>
          <div className="menu1">
          
          {handleScroll && (
              <FontMenu
                color={backgroundColor ? backgroundColor : "#0F1C51"}
                onClick={() => handleScroll()}
                title={true}
                margin={true}
              >
                {t("Nav1")}
              </FontMenu>
            )}
            {!handleScroll && (
              <Link as="/" href={{ pathname: "/", query: { scroll: true } }}>
                <FontMenu
                  color={backgroundColor ? backgroundColor : "#0F1C51"}
                  title={true}
                  margin={true}
                >
                  {t("Nav1")}
                </FontMenu>
              </Link>
            )}
            
            <Link href={t('LinkNav2')}>
              <FontMenu color={backgroundColor ? backgroundColor : "#0F1C51"} title={true} margin={true}>{t('Nav2')}</FontMenu>
            </Link>
            <Link href={t("LinkNav3")}>
              <FontMenu
                color={backgroundColor ? backgroundColor : "#0F1C51"}
                title={true}
                margin={true}
              >
                {t("Nav3")}
              </FontMenu>
            </Link>
            {/* <Link href={t('LinkNav4')}>
              <FontMenu color={backgroundColor ? backgroundColor : "#0F1C51"} title={true} margin={true}>{t('Nav4')}</FontMenu>
            </Link> */}
          </div>
        </div>

        <Box
          pose={this.state.position ? "up" : "down"}
          className="menu"
          y={this.state.menuSizes !== undefined && this.state.menuSizes.y}
          y2={this.state.menuSizes !== undefined && this.state.menuSizes.y2}
        >
          <div className="menu2">
          {handleScroll && (
              <FontMenu
                color={backgroundColor ? backgroundColor : "#0F1C51"}
                onClick={() => handleScroll()}
                title={true}
                margin={true}
              >
                {t("Nav1")}
              </FontMenu>
            )}
            {!handleScroll && (
              <Link as="/" href={{ pathname: "/", query: { scroll: true } }}>
                <FontMenu
                  color={backgroundColor ? backgroundColor : "#0F1C51"}
                  title={true}
                  margin={true}
                >
                  {t("Nav1")}
                </FontMenu>
              </Link>
            )}
            <Link href={t("LinkNav2")}>
              <FontMenu title={true} margin={true}>
                {t("Nav2")}
              </FontMenu>
            </Link>
            <Link href={t("LinkNav3")}>
              <FontMenu title={true} margin={true}>
                {t("Nav3")}
              </FontMenu>
            </Link>

          </div>

          <div className="menu3">
            <div className="info">
              <Fontp className="">
                <Fontp href={`tel:${"+34 644 564 713"}`}>{t("Tel")}</Fontp>
              </Fontp>
              <Fontp className="">
                <Fontp href={`mailto:hola@tailor-hub.com`}>{t("Email")}</Fontp>
              </Fontp>
            </div>
            <div className="direction">
              <Fontp className="navInfo">
                <Fontp
                  href="https://goo.gl/maps/V6s7nae7nMDgQkHH7"
                  target="_blank"
                >
                  {t("Direction")}
                </Fontp>
              </Fontp>
            </div>
          </div>
        </Box>
      </NavWrapperStyle>
    );
  }
}
export default withTranslation("ContactNavFooter")(NavBar);

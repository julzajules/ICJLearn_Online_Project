import React, { Component } from "react";

class TeamMemberGrid extends Component {
  render() {
    /* team member data */

    let data = [
      {
        profileImage: "Julia.jpeg",
        profileTitle: "Julia Muiruri",
        profileDesignation: "Frontend Engineer",
        profileEmail: "juliamuiruri1999@outlook.com",
        socialLinks: {
          facebook: "//www.facebook.com",
          twitter: "//www.twitter.com",
          linkedin: "https://www.linkedin.com/in/juliamuiruri/",
          googlePlus: "//plus.google.com"
        }
      },
      {
        profileImage: "Consolata.jpg",
        profileTitle: "Consolata Gicheru",
        profileDesignation: "UI/UX Designer",
        profileEmail: "",
        socialLinks: {
          facebook: "//www.facebook.com",
          twitter: "//www.twitter.com",
          linkedin: "https://www.linkedin.com/in/consolata-gicheru-0a000a198/",
          googlePlus: "//plus.google.com"
        }
      },
      {
        profileImage: "team-3.jpg",
        profileTitle: "Bill Mutuma",
        profileDesignation: "Backend Engineer",
        profileEmail: "",
        socialLinks: {
          facebook: "//www.facebook.com",
          twitter: "//www.twitter.com",
          linkedin: "//www.linkedin.com",
          googlePlus: "//plus.google.com"
        }
      },
      {
        profileImage: "team-4.jpg",
        profileTitle: "Patrick Kariuki",
        profileDesignation: "Frontend Engineer",
        profileEmail: "",
        socialLinks: {
          facebook: "//www.facebook.com",
          twitter: "//www.twitter.com",
          linkedin: "//www.linkedin.com",
          googlePlus: "//plus.google.com"
        }
      }
    ];

    let Datalist = data.map((val, i) => {
      return (
        <div
          className="col-lg-3 col-sm-6 col-12 section-space--bottom--30"
          key={i}
        >
          <div className="team">
            <div className="content">
              <h3 className="title">{val.profileTitle}</h3>
              <div className="image">
              <img
                src={`assets/img/team/${val.profileImage}`}
                alt=""
              />
            </div>
              <span>{val.profileDesignation}</span>
              <a href={val.socialLinks.linkedin} className="social">
                {val.socialLinks.linkedin}
              </a>
              
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        {/*====================  team member area ====================*/}
        <div className="team-member-area section-space--inner--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area text-center">
                  <h2 className="section-title section-space--bottom--50">
                    Our Team <span className="title-icon" />
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="team-member-wrapper">
                  <div className="row">
                    {/* team member list */}
                    {Datalist}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of team member area  ====================*/}
      </div>
    );
  }
}

export default TeamMemberGrid;

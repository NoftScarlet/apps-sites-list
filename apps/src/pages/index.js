import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import classnames from "classnames";
import "../assets/css/blk-design-system-react.css";
import "../assets/css/nucleo-icons.css";


// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane
} from "reactstrap";

//https://github.com/gatsbyjs/gatsby/issues/10523#issue-391866891

class Tester extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pills: 1
        };
    }
    toggleTabs = (e, stateName, index) => {
        e.preventDefault();
        this.setState({
            [stateName]: index
        });
    };
    render() {
        return (
            <>
                <Nav className="nav-pills-primary" pills role="tablist">
                    <NavItem>
                        <NavLink
                            className={classnames({
                                active: this.state.pills === 1
                            })}
                            onClick={e => this.toggleTabs(e, "pills", 1)}
                            href="#pablo"
                        >
                            Profile
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({
                                active: this.state.pills === 2
                            })}
                            onClick={e => this.toggleTabs(e, "pills", 2)}
                            href="#pablo"
                        >
                            Settings
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({
                                active: this.state.pills === 3
                            })}
                            onClick={e => this.toggleTabs(e, "pills", 3)}
                            href="#pablo"
                        >
                            Options
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent className="tab-space" activeTab={"pills" + this.state.pills}>
                    <TabPane tabId="pills1">
                        Collaboratively administrate empowered markets via plug-and-play
                        networks. Dynamically procrastinate B2C users after installed base
                        benefits. <br />
                        <br />
                        Dramatically visualize customer directed convergence without
                        revolutionary ROI.
                    </TabPane>
                    <TabPane tabId="pills2">
                        Efficiently unleash cross-media information without cross-media
                        value. Quickly maximize timely deliverables for real-time schemas.{" "}
                        <br />
                        <br />
                        Dramatically maintain clicks-and-mortar solutions without
                        functional solutions.
                    </TabPane>
                    <TabPane tabId="pills3">
                        Completely synergize resource taxing relationships via premier
                        niche markets. Professionally cultivate one-to-one customer
                        service with robust ideas. <br />
                        <br />
                        Dynamically innovate resource-leveling customer service for state
                        of the art customer service.
                    </TabPane>
                </TabContent>
            </>
        );
    }
}



export default () => (


    <StaticQuery
        query={graphql`
     {
        allPostsJson {
          edges{
            node{
              id
              title
              link
              description
              type
              implementation
              plan
              source_code
          }
          }
        }
     }
    `}
        render={data => (
            <Layout>
                <SEO title="PianoLab Engineering Projects" />
                <>
                    <ul>{getPosts(data)}</ul>
                </>
                <Link to="/">Go back to the homepage</Link>
                <Tester />
            </Layout>
        )}
    />
);

function getPosts(data) { //helpler function to iterate over object and push elements into array
    const projectsArray = [];
    data.allPostsJson.edges.forEach(item=>
        projectsArray.push(<li key={item.node.title}> {item.node.id +' '+item.node.title } <br />  {item.node.link} <br /> {item.node.description} </li>)
    );
    return projectsArray;
}


//https://itnext.io/reading-data-from-a-json-file-with-gatsby-graphql-572b18ab98a
import React from "react"
import {Link, StaticQuery, graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import classnames from "classnames";
import "../assets/css/blk-design-system-react.css";
import "../assets/css/nucleo-icons.css";


// reactstrap components
import {
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Row,
    Col
} from "reactstrap";

//https://github.com/gatsbyjs/gatsby/issues/10523#issue-391866891

class Tester extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vertical: 0,
            withIcons: 0
        };
    }

    toggleTabs = (e, stateName, index) => {
        e.preventDefault();
        this.setState({
            [stateName]: index
        });
    };

    prepareNavs = (data, elemType) => { //helpler function to iterate over object and push elements into array
        const elemArray = [];
        switch (elemType) {
            case "title": {
                data.allPostsJson.edges.forEach(item =>
                    elemArray.push(
                        <NavItem key={(item.node.id)}>
                            <NavLink
                                className={classnames({
                                    active: this.state.withIcons === parseInt(item.node.id)
                                })}
                                onClick={e => this.toggleTabs(e, "withIcons", parseInt(item.node.id))}
                                href="#pablo"

                            >
                                {item.node.title}
                            </NavLink>
                        </NavItem>
                    )
                );
                break;
            }
            case "tabpane": {
                data.allPostsJson.edges.forEach(item =>
                    elemArray.push(
                        <TabPane tabId={"withIcons"+parseInt(item.node.id)}>
                            <h4 color="black">Description</h4>{item.node.description ? item.node.description : "To be added soon!"} <br /><br />
                            <h4 color="black">Link</h4><a href={item.node.link ? item.node.link : "#"}>{item.node.link ? item.node.link : "To be added soon!"}</a> <br /><br />
                            <h4 color="black">Type</h4>{item.node.type ? item.node.type : "To be added soon!"} <br /><br />
                            <h4 color="black">Implementation Method:</h4>{item.node.implementation? item.node.implementation : "To be added soon!"} <br /><br />
                            <h4 color="black">Source Code Location</h4>{item.node.source_code ? item.node.source_code : "To be added soon!"} <br /><br />
                            <h4 color="black">Current Status and Plan</h4>{item.node.plan ? item.node.plan : "To be added soon!"} <br /><br />
                            <h4 color="black">Change Log</h4>{item.node.source_code ? item.node.source_code : "To be added soon!"} <br /><br />
                        </TabPane>
                    )
                );
                break;
            }
            default :
                console.log("can not create element type - "+elemType);
                break;
        }

        return elemArray;
    };

    render() {
        return (
            <StaticQuery // step 1
                query={
                    graphql`{
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
                    }`
                }
                render={data => (
                    <Layout>
                        <SEO title="PianoLab Engineering Projects"/>
                        <>
                            <Row>
                                <Col md="4">
                                    <Nav className="nav-pills-primary nav-pills-icons flex-column" pills>
                                        {this.prepareNavs(data, "title")}
                                    </Nav>
                                </Col>
                                <Col md="8">
                                    <TabContent className="tab-space" activeTab={"withIcons" + this.state.withIcons}>
                                        {this.prepareNavs(data,"tabpane")}
                                    </TabContent>
                                </Col>
                            </Row>
                        </>
                        <Link to="/">Go back to the homepage</Link>
                    </Layout>
                )}
            />
        );
    }
}

export default Tester;


//https://itnext.io/reading-data-from-a-json-file-with-gatsby-graphql-572b18ab98a

//Pipeline: GraphQL query => get data => send into component as props => Loop throught data object to create elements => Render
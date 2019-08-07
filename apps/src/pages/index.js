import React from "react"
import {Link, StaticQuery, graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import classnames from "classnames";
import 'bootstrap/dist/css/bootstrap.css';
import Img from "gatsby-image";


import {
    NavItem, NavLink, Nav,
    TabContent, TabPane,
    Row, Col,
    Button, Form, FormGroup, Label, Input, FormText
} from "reactstrap";


//https://github.com/gatsbyjs/gatsby/issues/10523#issue-391866891

class Tester extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vertical: 0,
            activeTab: 0
        };
    }

    toggleTabs = (e, stateName, index) => {
        e.preventDefault();
        this.setState({
            [stateName]: index
        });
    };

    handleKeydownFilter = (evt) => {
        let navItems = document.querySelectorAll(".nav-pills .nav-item");
        let val = evt.target.value.toLowerCase();
        console.log(val);

        navItems.forEach(item=>{
            if (val === "") {
                item.style.display="list-item"
            }
            else if (item.textContent.toLowerCase().indexOf(val)>-1) {
                item.style.display ="list-item"
            }
            else {
                item.style.display="none"
            }
        });

    };

    prepareNavs = (data, elemType) => { //helpler function to iterate over object and push elements into array

        const elemArray = [];
        switch (elemType) {
            case "title": {
                data.allPostsJson.edges.forEach(item =>
                    elemArray.push(
                        <NavItem key={(item.node.id)} style={{width: "50%"}} data-tags={item.node.description}>
                            <NavLink
                                style={{height: "140px"}}
                                className={classnames({
                                    active: this.state.activeTab === parseInt(item.node.id),
                                    "btn": true,
                                    "btn-info": this.state.activeTab === parseInt(item.node.id),
                                    "btn-light": ! (this.state.activeTab === parseInt(item.node.id))
                                })}
                                onClick={e => this.toggleTabs(e, "activeTab", parseInt(item.node.id))}
                                href="#"
                            >
                                <p>{item.node.title}</p>
                            </NavLink>
                        </NavItem>
                    )
                );
                break;
            }
            case "tabpane": {
                data.allPostsJson.edges.forEach(item =>
                    elemArray.push(
                        <TabPane key={(item.node.id)} tabId={parseInt(item.node.id)}>

                            <Img fluid={item.node.file.src.childImageSharp.fluid} />
                            <h4 color="black">Description</h4>{item.node.description ? item.node.description : "To be added soon!"}
                            <br/><br/>
                            <h4 color="black">Link</h4><a
                            href={item.node.link ? item.node.link : "#"}>{item.node.link ? item.node.link : "To be added soon!"}</a>
                            <br/><br/>
                            <h4 color="black">Type</h4>{item.node.type ? item.node.type : "To be added soon!"}
                            <br/><br/>
                            <h4 color="black">Implementation
                                Method:</h4>{item.node.implementation ? item.node.implementation : "To be added soon!"}
                            <br/><br/>
                            <h4 color="black">Source Code
                                Location</h4>{item.node.source_code ? item.node.source_code : "To be added soon!"} <br/><br/>
                            <h4 color="black">Current Status and
                                Plan</h4>{item.node.plan ? item.node.plan : "To be added soon!"} <br/><br/>
                            <h4 color="black">Change
                                Log</h4>{item.node.show_logs ? item.node.show_logs : "To be added soon!"} <br/><br/>
                        </TabPane>
                    )
                );
                break;
            }
            default :
                console.log("can not create element type - " + elemType);
                break;
        }

        return elemArray;
    };

    render() {
        return (

            <StaticQuery // step 1

                query={
                    graphql`


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
                            show_logs
                            file {
                              name
                              src {
                                childImageSharp {
                                  fluid {
                                    ...GatsbyImageSharpFluid
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }`
                }
                render={data => (
                    <Layout>{console.log(data)}
                        <SEO title="PianoLab Engineering Projects"/>
                        <>
                            <Row>
                                <Col md="6">
                                    <Form>
                                        <Label>Filter</Label>
                                        <Input type="text" name="text" id="filter-s" placeholder="" onChange={e => this.handleKeydownFilter(e)}/>
                                    </Form>

                                    <Nav pills>
                                        {this.prepareNavs(data, "title")}
                                    </Nav>
                                </Col>

                                <Col md="6" className="d-none d-md-block">
                                    <TabContent activeTab={this.state.activeTab}>
                                        {this.prepareNavs(data, "tabpane")}
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

//Pipeline: GraphQL query => get data, for both texts and files => send data object into helper function => Loop throught data object to create elements => Render

//https://stackoverflow.com/questions/52574783/gatsby-image-path-from-json
//https://www.gatsbyjs.org/packages/gatsby-image/#two-types-of-responsive-images